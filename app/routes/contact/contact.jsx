import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { Input } from '~/components/input';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useFormInput } from '~/hooks';
import { useRef } from 'react';
import { cssProps, msToNum, numToMs } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import { Form, useActionData, useNavigation } from '@remix-run/react';
import { createCookieSessionStorage, json } from '@remix-run/cloudflare';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { getPreferredLanguage, getText } from '~/i18n.js';
import { useI18n } from '~/i18n-context.jsx';
import styles from './contact.module.css';

export const meta = ({ matches }) => {
  const language = matches.find(match => match.id === 'root')?.data?.language || 'en';

  return baseMeta({
    title: getText(language, 'meta.contact.title'),
    description: getText(language, 'meta.contact.description'),
  });
};

const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const EMAIL_PATTERN = /(.+)@(.+){2,}\.(.+){2,}/;

export async function action({ context, request }) {
  const { getSession } = createCookieSessionStorage({
    cookie: {
      name: '__session',
      httpOnly: true,
      maxAge: 604_800,
      path: '/',
      sameSite: 'lax',
      secrets: [context.cloudflare.env.SESSION_SECRET || ' '],
      secure: true,
    },
  });
  const session = await getSession(request.headers.get('Cookie'));
  const language = getPreferredLanguage(
    request.headers.get('Accept-Language'),
    session.get('language')
  );
  const errorsText = getText(language, 'contact.errors');
  const ses = new SESClient({
    region: 'us-east-1',
    credentials: {
      accessKeyId: context.cloudflare.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: context.cloudflare.env.AWS_SECRET_ACCESS_KEY,
    },
  });

  const formData = await request.formData();
  const isBot = String(formData.get('name'));
  const email = String(formData.get('email'));
  const message = String(formData.get('message'));
  const errors = {};

  // Return without sending if a bot trips the honeypot
  if (isBot) return json({ success: true });

  // Handle input validation on the server
  if (!email || !EMAIL_PATTERN.test(email)) {
    errors.email = errorsText.emailInvalid;
  }

  if (!message) {
    errors.message = errorsText.messageRequired;
  }

  if (email.length > MAX_EMAIL_LENGTH) {
    errors.email = errorsText.emailTooLong;
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    errors.message = errorsText.messageTooLong;
  }

  if (Object.keys(errors).length > 0) {
    return json({ errors });
  }

  // Send email via Amazon SES
  await ses.send(
    new SendEmailCommand({
      Destination: {
        ToAddresses: [context.cloudflare.env.EMAIL],
      },
      Message: {
        Body: {
          Text: {
            Data: `From: ${email}\n\n${message}`,
          },
        },
        Subject: {
          Data: `Portfolio message from ${email}`,
        },
      },
      Source: `Portfolio <${context.cloudflare.env.FROM_EMAIL}>`,
      ReplyToAddresses: [email],
    })
  );

  return json({ success: true });
}

export const Contact = () => {
  const { t } = useI18n();
  const text = t('contact');
  const errorRef = useRef();
  const email = useFormInput('');
  const message = useFormInput('');
  const initDelay = tokens.base.durationS;
  const actionData = useActionData();
  const { state } = useNavigation();
  const sending = state === 'submitting';

  return (
    <Section className={styles.contact}>
      <div className={styles.layout}>
        <aside className={styles.intro} aria-labelledby="contact-intro-title">
          <p className={styles.kicker}>Contact</p>
          <h1 className={styles.introTitle} id="contact-intro-title">
            <span>{text.intro.title[0]}</span>
            <span>{text.intro.title[1]}</span>
          </h1>
          <Text className={styles.introDescription} as="p" size="l">
            {text.intro.description}
          </Text>
          <p className={styles.introNote}>{text.intro.note}</p>
          <dl className={styles.methods}>
            {text.intro.methods.map(method => (
              <div className={styles.method} key={method.label}>
                <dt>{method.label}</dt>
                <dd>{method.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
        <div className={styles.formColumn}>
          <Transition unmount in={!actionData?.success} timeout={1600}>
            {({ status, nodeRef }) => (
              <Form
                unstable_viewTransition
                className={styles.form}
                method="post"
                ref={nodeRef}
              >
                <Heading
                  className={styles.title}
                  data-status={status}
                  level={3}
                  as="h2"
                  style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
                >
                  <DecoderText text={text.title} start={status !== 'exited'} delay={300} />
                </Heading>
                <Divider
                  className={styles.divider}
                  data-status={status}
                  style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
                />
                {/* Hidden honeypot field to identify bots */}
                <Input
                  className={styles.botkiller}
                  label={text.honeypotLabel}
                  name="name"
                  maxLength={MAX_EMAIL_LENGTH}
                />
                <Input
                  required
                  className={styles.input}
                  data-status={status}
                  style={getDelay(tokens.base.durationXS, initDelay)}
                  autoComplete="email"
                  label={text.emailLabel}
                  type="email"
                  name="email"
                  maxLength={MAX_EMAIL_LENGTH}
                  {...email}
                />
                <Input
                  required
                  multiline
                  className={styles.input}
                  data-status={status}
                  style={getDelay(tokens.base.durationS, initDelay)}
                  autoComplete="off"
                  label={text.messageLabel}
                  name="message"
                  maxLength={MAX_MESSAGE_LENGTH}
                  {...message}
                />
                <Transition
                  unmount
                  in={!sending && actionData?.errors}
                  timeout={msToNum(tokens.base.durationM)}
                >
                  {({ status: errorStatus, nodeRef }) => (
                    <div
                      className={styles.formError}
                      ref={nodeRef}
                      data-status={errorStatus}
                      style={cssProps({
                        height: errorStatus ? errorRef.current?.offsetHeight : 0,
                      })}
                    >
                      <div className={styles.formErrorContent} ref={errorRef}>
                        <div className={styles.formErrorMessage}>
                          <Icon className={styles.formErrorIcon} icon="error" />
                          {actionData?.errors?.email}
                          {actionData?.errors?.message}
                        </div>
                      </div>
                    </div>
                  )}
                </Transition>
                <Button
                  className={styles.button}
                  data-status={status}
                  data-sending={sending}
                  style={getDelay(tokens.base.durationM, initDelay)}
                  disabled={sending}
                  loading={sending}
                  loadingText={text.sending}
                  icon="send"
                  type="submit"
                >
                  {text.send}
                </Button>
              </Form>
            )}
          </Transition>
          <Transition unmount in={actionData?.success}>
            {({ status, nodeRef }) => (
              <div className={styles.complete} aria-live="polite" ref={nodeRef}>
                <Heading
                  level={3}
                  as="h3"
                  className={styles.completeTitle}
                  data-status={status}
                >
                  {text.completeTitle}
                </Heading>
                <Text
                  size="l"
                  as="p"
                  className={styles.completeText}
                  data-status={status}
                  style={getDelay(tokens.base.durationXS)}
                >
                  {text.completeText}
                </Text>
                <Button
                  secondary
                  iconHoverShift
                  className={styles.completeButton}
                  data-status={status}
                  style={getDelay(tokens.base.durationM)}
                  href="/"
                  icon="chevron-right"
                >
                  {text.backHome}
                </Button>
              </div>
            )}
          </Transition>
        </div>
      </div>
      <Footer className={styles.footer} />
    </Section>
  );
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
