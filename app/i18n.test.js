import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { getPreferredLanguage, getText, languages } from './i18n.js';

describe('i18n language detection', () => {
  it('defaults Chinese browser language headers to Chinese', () => {
    assert.equal(getPreferredLanguage('zh-CN,zh;q=0.9,en;q=0.8'), 'zh');
    assert.equal(getPreferredLanguage('zh-Hans;q=0.9,en;q=0.8'), 'zh');
    assert.equal(getPreferredLanguage('zh;q=0.9'), 'zh');
  });

  it('defaults non-Chinese browser language headers to English', () => {
    assert.equal(getPreferredLanguage('en-US,en;q=0.9'), 'en');
    assert.equal(getPreferredLanguage('fr-FR,fr;q=0.9'), 'en');
    assert.equal(getPreferredLanguage(''), 'en');
    assert.equal(getPreferredLanguage(null), 'en');
  });

  it('returns supported cookie language before browser defaults', () => {
    assert.equal(getPreferredLanguage('zh-CN,zh;q=0.9', 'en'), 'en');
    assert.equal(getPreferredLanguage('en-US,en;q=0.9', 'zh'), 'zh');
  });
});

describe('i18n dictionary', () => {
  it('exposes supported languages and nested text values', () => {
    assert.deepEqual(languages, ['en', 'zh']);
    assert.equal(getText('zh', 'nav.contact'), '联系');
    assert.equal(getText('en', 'nav.contact'), 'Contact');
    assert.equal(getText('zh', 'nav.projects'), '作品');
    assert.equal(getText('en', 'nav.projects'), 'Works');
    assert.equal(getText('en', 'nav.details'), 'About');
    assert.equal(getText('zh', 'nav.domains'), '域名');
    assert.equal(getText('en', 'nav.domains'), 'Domains');
  });

  it('exposes the Chinese homepage identity copy', () => {
    assert.equal(getText('zh', 'intro.name'), '雷钧钧 June Ray');
    assert.equal(getText('zh', 'intro.role'), '用 AI 连接产品、增长');
    assert.deepEqual(getText('zh', 'intro.disciplines'), [
      'AI 产品经理',
      '门店营销',
      '私域裂变增长',
      '全栈开发',
    ]);
  });

  it('exposes the English homepage identity copy', () => {
    assert.equal(getText('en', 'intro.name'), 'June Ray');
    assert.equal(
      getText('en', 'intro.role'),
      'AI for product and growth'
    );
    assert.deepEqual(getText('en', 'intro.disciplines'), [
      'AI Product Manager',
      'Local Store Marketing',
      'Private Domain Referral Growth',
      'Full-Stack Development',
    ]);
  });

  it('exposes localized homepage document titles', () => {
    assert.equal(
      getText('zh', 'meta.home.title'),
      '雷钧钧 ｜ 雷校长 ｜ AI 产品经理 私域裂变增长官'
    );
    assert.match(getText('zh', 'meta.home.description'), /实体商家/);
    assert.equal(
      getText('en', 'meta.home.title'),
      'Lei Junjun | AI Product Manager for Store Growth and Private-Domain AI'
    );
    assert.match(getText('en', 'meta.home.description'), /physical stores/);
  });

  it('exposes SEO-focused route metadata', () => {
    assert.match(getText('zh', 'meta.contact.title'), /AI 培训/);
    assert.match(getText('zh', 'meta.contact.description'), /私域裂变增长咨询/);
    assert.match(getText('en', 'meta.contact.title'), /Product Consulting/);
    assert.match(getText('en', 'meta.domains.description'), /gongchang\.ai/);
    assert.match(getText('zh', 'meta.domains.description'), /gotools\.io/);
  });

  it('exposes localized contact intro copy', () => {
    assert.deepEqual(getText('zh', 'contact.intro.title'), ['有想法?', '聊聊吧。']);
    assert.match(getText('zh', 'contact.intro.description'), /AI 培训/);
    assert.equal(getText('zh', 'contact.intro.methods')[0].value, 'leijunjun@gmail.com');
    assert.equal(getText('zh', 'contact.intro.methods')[1].value, 'rssf1982');
    assert.deepEqual(getText('en', 'contact.intro.title'), ['Got an idea?', "Let's talk."]);
    assert.match(getText('en', 'contact.intro.note'), /No idle chit-chat/);
  });

  it('exposes localized first project copy', () => {
    assert.equal(getText('zh', 'home.projects')[0].title, '私域裂变拓客');
    assert.equal(
      getText('zh', 'home.projects')[0].description,
      '为连锁品牌和拓客团队量身定制的小程序系统，帮助他们快速、批量落地老带新拓客活动。'
    );
    assert.equal(
      getText('en', 'home.projects')[0].title,
      'Private-Domain Referral Growth'
    );
    assert.equal(getText('zh', 'projectDetails.liebianbao.name'), '一推火裂变宝');
    assert.match(getText('zh', 'projectDetails.liebianbao.seoTitle'), /门店 AI 私域裂变/);
    assert.match(getText('zh', 'projectDetails.liebianbao.seoDescription'), /红包裂变/);
    assert.match(getText('zh', 'projectDetails.liebianbao.description'), /红包裂变/);
    assert.deepEqual(getText('zh', 'projectDetails.liebianbao.tags'), [
      '8000+场活动经验沉淀',
      '极致老带新裂变',
      '合作 0 成本',
      '《客流荒》私域专著实战之作',
    ]);
    assert.equal(getText('en', 'projectDetails.liebianbao.name'), 'Yituihuo Liebianbao');
    assert.match(getText('en', 'projectDetails.liebianbao.seoDescription'), /chain stores/);
    assert.match(getText('en', 'projectDetails.liebianbao.description'), /red-envelope referrals/);
    assert.match(
      getText('en', 'projectDetails.liebianbao.tags')[3],
      /Customer Flow Shortage/
    );
    assert.equal(getText('en', 'projectDetails.liebianbao.linkLabel'), 'Visit website');
  });

  it('exposes localized second project copy', () => {
    assert.equal(getText('zh', 'home.projects')[1].title, '广告漫画');
    assert.equal(
      getText('zh', 'home.projects')[1].description,
      '为门店、知识工作者创作更具吸引力、更易传播、转化能力更强的漫画海报，让表达更精彩！'
    );
    assert.equal(getText('zh', 'home.projects')[1].buttonText, '查看项目');
    assert.equal(getText('zh', 'projectDetails.adComic.name'), '漫可贴');
    assert.match(getText('zh', 'projectDetails.adComic.seoTitle'), /AI 广告漫画系统/);
    assert.match(getText('zh', 'projectDetails.adComic.seoDescription'), /漫画分身创作/);
    assert.match(getText('zh', 'projectDetails.adComic.description'), /漫画分身创作/);
    assert.equal(getText('en', 'home.projects')[1].title, 'Advertising Comics');
    assert.equal(getText('en', 'projectDetails.adComic.name'), 'Manketie');
    assert.match(getText('en', 'projectDetails.adComic.seoDescription'), /comic-avatar/);
    assert.equal(getText('en', 'projectDetails.adComic.linkLabel'), 'View project');
  });

  it('exposes localized profile paragraphs', () => {
    assert.equal(
      getText('zh', 'home.profile.paragraphs')[0],
      '雷钧钧 June Ray'
    );
    assert.equal(
      getText('zh', 'home.profile.paragraphs')[1],
      'AI 产品经理 / 私域增长实践者 / AI 教育探索者'
    );
    assert.equal(
      getText('zh', 'home.profile.paragraphs')[5],
      '基于多年服务实体门店和拓客团队的经验，我正在围绕“AI 私域裂变增长”打造一套产品矩阵。'
    );
    assert.equal(getText('en', 'home.profile.paragraphs')[0], 'June Ray');
    assert.equal(
      getText('en', 'home.profile.paragraphs')[1],
      'AI Product Manager / Growth Builder / AI Education Explorer'
    );
    assert.match(getText('en', 'home.profile.paragraphs')[2], /brick-and-mortar businesses/);
    assert.match(getText('en', 'home.profile.paragraphs')[5], /real long-term value/);
  });

  it('exposes localized domains content', () => {
    assert.equal(getText('zh', 'home.domains.title'), '域名投资');
    assert.equal(getText('en', 'home.domains.title'), 'Domain Investments');
    assert.equal(getText('zh', 'home.domains.items')[0].name, 'gongchang.ai');
    assert.equal(getText('zh', 'home.domains.registeredLabel'), '注册时间');
    assert.equal(getText('zh', 'home.domains.items')[0].registeredAt, '2017 年');
    assert.equal(getText('zh', 'home.domains.items')[1].registeredAt, '2021 年');
    assert.equal(getText('zh', 'home.domains.items')[2].registeredAt, '2013 年');
    assert.equal(getText('zh', 'home.domains.items')[3].status, '海外工具站');
    assert.equal(getText('en', 'home.domains.registeredLabel'), 'Registered');
    assert.equal(getText('en', 'home.domains.items')[1].status, 'Discount Book Ecommerce');
    assert.equal(getText('en', 'home.domains.items')[1].registeredAt, '2021');
    assert.equal(getText('en', 'home.domains.items')[3].name, 'gotools.io');
    assert.match(getText('zh', 'meta.domains.title'), /雷钧钧收藏/);
    assert.match(getText('en', 'meta.domains.title'), /AI Business Domains/);
  });
});
