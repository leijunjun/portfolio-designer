import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { getText } from '~/i18n.js';
import { useI18n } from '~/i18n-context.jsx';
import styles from './domains.module.css';

export const meta = ({ matches }) => {
  const language = matches.find(match => match.id === 'root')?.data?.language || 'en';

  return baseMeta({
    title: getText(language, 'meta.domains.title'),
    description: getText(language, 'meta.domains.description'),
  });
};

export const Domains = () => {
  const { t } = useI18n();
  const domains = t('home.domains');

  return (
    <>
      <ProjectContainer className={styles.domains}>
        <ProjectHeader
          title={domains.title}
          description={domains.description}
          roles={domains.items.map(item => item.status)}
        />
        <ProjectSection className={styles.section}>
          <ProjectSectionContent className={styles.content} width="l">
            <div className={styles.intro}>
              <ProjectSectionHeading>{domains.tag}</ProjectSectionHeading>
              <ProjectSectionText>
                {domains.description}
              </ProjectSectionText>
            </div>
            <div className={styles.cards}>
              {domains.items.map(item => (
                <article className={styles.card} key={item.name}>
                  <Text className={styles.status} size="s" weight="medium" secondary>
                    {item.status}
                  </Text>
                  <Heading className={styles.cardTitle} level={4} as="h2">
                    {item.name}
                  </Heading>
                  {item.registeredAt && (
                    <Text className={styles.registeredAt} size="s" weight="medium">
                      {domains.registeredLabel}：{item.registeredAt}
                    </Text>
                  )}
                  <Text className={styles.cardDescription} size="m" as="p">
                    {item.description}
                  </Text>
                </article>
              ))}
            </div>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
