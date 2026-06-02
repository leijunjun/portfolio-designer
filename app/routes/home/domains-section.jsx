import { Button } from '~/components/button';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { useI18n } from '~/i18n-context.jsx';
import styles from './domains-section.module.css';

const DomainsText = ({ visible, titleId }) => {
  const { t } = useI18n();
  const domains = t('home.domains');

  return (
    <Fragment>
      <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
        {domains.title}
      </Heading>
      <Text className={styles.description} data-visible={visible} size="l" as="p">
        {domains.description}
      </Text>
      <Button
        secondary
        className={styles.button}
        data-visible={visible}
        href="/domains"
        icon="chevron-right"
      >
        {domains.buttonText}
      </Button>
    </Fragment>
  );
};

export const DomainsSection = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const { t } = useI18n();
  const domains = t('home.domains');
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.domains}
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
              <DomainsText visible={visible} titleId={titleId} />
            </div>
            <div className={`${styles.column} ${styles.listColumn}`}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  {domains.tag}
                </div>
              </div>
              <div className={styles.cards}>
                {domains.items.map(item => (
                  <article className={styles.card} data-visible={visible} key={item.name}>
                    <Text className={styles.status} size="s" weight="medium" secondary>
                      {item.status}
                    </Text>
                    <Heading className={styles.cardTitle} level={5} as="h4">
                      {item.name}
                    </Heading>
                    <Text className={styles.cardDescription} size="m" as="p">
                      {item.description}
                    </Text>
                  </article>
                ))}
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
