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
    assert.equal(getText('zh', 'nav.domains'), '域名');
    assert.equal(getText('en', 'nav.domains'), 'Domains');
  });

  it('exposes the Chinese homepage identity copy', () => {
    assert.equal(getText('zh', 'intro.name'), 'HI,我是雷校长');
    assert.equal(getText('zh', 'intro.role'), 'AI产品经理');
    assert.deepEqual(getText('zh', 'intro.disciplines'), ['门店营销', '私域裂变增长', '全栈开发']);
  });

  it('exposes the English homepage identity copy', () => {
    assert.equal(getText('en', 'intro.name'), 'known as Principal Lei');
    assert.equal(getText('en', 'intro.role'), 'AI Product Manager');
    assert.deepEqual(getText('en', 'intro.disciplines'), [
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
    assert.equal(
      getText('en', 'meta.home.title'),
      'Lei Junjun | Principal Lei | AI Product Manager Private-Domain Fission Growth Officer'
    );
  });

  it('exposes localized profile paragraphs', () => {
    assert.equal(
      getText('zh', 'home.profile.paragraphs')[0],
      'HI我是雷钧钧，网名雷校长'
    );
    assert.equal(
      getText('zh', 'home.profile.paragraphs')[5],
      '基于多年服务实体门店和拓客团队的经验，我正在围绕“AI 私域裂变增长”打造一套产品矩阵。'
    );
    assert.match(getText('en', 'home.profile.paragraphs')[1], /brick-and-mortar businesses/);
    assert.match(getText('en', 'home.profile.paragraphs')[4], /real long-term value/);
  });

  it('exposes localized domains content', () => {
    assert.equal(getText('zh', 'home.domains.title'), '域名投资');
    assert.equal(getText('en', 'home.domains.title'), 'Domain Investments');
    assert.equal(getText('zh', 'home.domains.items')[0].name, 'gongchang.ai');
    assert.equal(getText('zh', 'home.domains.items')[3].status, '海外工具站');
    assert.equal(getText('en', 'home.domains.items')[1].status, 'Discount Book Ecommerce');
    assert.equal(getText('en', 'home.domains.items')[3].name, 'gotools.io');
    assert.equal(getText('zh', 'meta.domains.title'), '域名投资');
    assert.equal(getText('en', 'meta.domains.title'), 'Domain Investments');
  });
});
