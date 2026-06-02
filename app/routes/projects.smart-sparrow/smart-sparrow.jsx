import liebianbaoPromo from '~/assets/liebianbao-promo.png';
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
import styles from './smart-sparrow.module.css';

const projectUrl = 'https://www.yituihuo.com/';
const fallbackDetails = {
  name: '一推火裂变宝',
  description:
    '一推火裂变宝是一套门店 AI 私域裂变增长系统，主要服务医美、美业、教培、本地生活和连锁门店。它通过红包裂变、短视频裂变、直播裂变、推二返一、消费全免、二级分销和阶梯拼团等活动玩法，帮助门店激活老客户、获取新客户、实现活动成交、统一收款、次日结算和数据复盘。适合品牌方、连锁门店、拓客团队和私域运营团队使用。',
  linkLabel: '访问网站',
  tags: [
    '8000+场活动经验沉淀',
    '极致老带新裂变',
    '合作 0 成本',
    '《客流荒》私域专著实战之作',
  ],
};

export const meta = ({ matches }) => {
  const language = matches.find(match => match.id === 'root')?.data?.language || 'en';
  const details = getText(language, 'projectDetails.liebianbao') || fallbackDetails;

  return baseMeta({
    title: details.name,
    description: details.description,
    prefix: 'Projects',
  });
};

export const SmartSparrow = () => {
  const { t } = useI18n();
  const project = t('home.projects')[0];
  const details = t('projectDetails.liebianbao') || fallbackDetails;

  return (
    <>
      <ProjectContainer className={styles.liebianbao}>
        <ProjectHeader
          title={details.name}
          description={details.description}
          url={projectUrl}
          linkLabel={details.linkLabel}
          roles={details.tags}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.mediaContent}>
            <div className={styles.imageFrame}>
              <img className={styles.image} src={liebianbaoPromo} alt={project.modelAlt} />
            </div>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
