import gamestackListLarge from '~/assets/gamestack-list-large.jpg';
import gamestackList from '~/assets/gamestack-list.jpg';
import gamestackLoginLarge from '~/assets/gamestack-login-large.jpg';
import gamestackLogin from '~/assets/gamestack-login.jpg';
import gamestackNew from '~/assets/gamestack-new.jpg';
import { Footer } from '~/components/footer';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { getText } from '~/i18n.js';
import { useI18n } from '~/i18n-context.jsx';
import styles from './volkihar-knight.module.css';

const fallbackDetails = {
  name: '漫可贴',
  seoTitle: '漫可贴｜面向门店和知识工作者的 AI 广告漫画系统',
  seoDescription:
    '漫可贴支持漫画分身创作，把产品卖点、服务活动和专业观点转化为更吸引人、更易传播、更强转化的广告漫画。',
  description:
    '漫可贴是面向门店和知识工作者的内容创作系统，支持漫画分身创作，把产品卖点、服务活动和专业观点转化为更有吸引力、更易传播、转化能力更强的广告漫画，让表达更精彩。',
  linkLabel: '查看项目',
  url: '/contact',
  tags: ['漫画海报', '门店营销', '知识工作者', '高转化内容'],
};

export const meta = ({ matches }) => {
  const language = matches.find(match => match.id === 'root')?.data?.language || 'en';
  const details = getText(language, 'projectDetails.adComic') || fallbackDetails;

  return baseMeta({
    title: details.seoTitle || details.name,
    description: details.seoDescription || details.description,
    prefix: 'Projects',
  });
};

export function VolkiharKnight() {
  const { t } = useI18n();
  const project = t('home.projects')[1];
  const details = t('projectDetails.adComic') || fallbackDetails;

  return (
    <>
      <ProjectContainer className={styles.adComic}>
        <ProjectHeader
          title={details.name}
          description={details.description}
          url={details.url}
          linkLabel={details.linkLabel}
          roles={details.tags}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.mediaContent}>
            <div className={styles.preview}>
              <img
                className={styles.previewImage}
                src={gamestackLoginLarge}
                srcSet={`${gamestackLogin} 375w, ${gamestackLoginLarge} 750w`}
                sizes="(max-width: 768px) 38vw, 280px"
                alt={project.modelAlt}
              />
              <img
                className={styles.previewImage}
                src={gamestackNew}
                sizes="(max-width: 768px) 42vw, 280px"
                alt=""
                aria-hidden
              />
              <img
                className={styles.previewImage}
                src={gamestackListLarge}
                srcSet={`${gamestackList} 375w, ${gamestackListLarge} 750w`}
                sizes="(max-width: 768px) 38vw, 280px"
                alt=""
                aria-hidden
              />
            </div>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
}
