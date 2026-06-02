import profileImg from '~/assets/lei.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import { useI18n } from '~/i18n-context.jsx';
import katakana from './katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => {
  const { t } = useI18n();
  const profile = t('home.profile');

  return (
    <Fragment>
      <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
        <DecoderText text={profile.title} start={visible} delay={500} />
      </Heading>
      {profile.paragraphs.map(paragraph => (
        <Text
          className={styles.description}
          data-visible={visible}
          size="l"
          as="p"
          key={paragraph}
        >
          {paragraph}
        </Text>
      ))}
    </Fragment>
  );
};

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const { t } = useI18n();
  const profile = t('home.profile');
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={`${styles.column} ${styles.textColumn}`}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                {profile.buttonText}
              </Button>
            </div>
            <div className={`${styles.column} ${styles.visualColumn}`}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  {profile.tag}
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  className={styles.portrait}
                  placeholder={profileImg}
                  src={profileImg}
                  width={751}
                  height={751}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt={profile.imageAlt}
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
