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
  });

  it('exposes the Chinese homepage identity copy', () => {
    assert.equal(getText('zh', 'intro.name'), '我是雷钧钧，网名雷校长');
    assert.equal(getText('zh', 'intro.role'), 'AI产品经理');
    assert.deepEqual(getText('zh', 'intro.disciplines'), [
      '门店营销顾问',
      '私域裂变增长官',
      '全栈独立开发者',
    ]);
  });

  it('exposes the English homepage identity copy', () => {
    assert.equal(getText('en', 'intro.name'), 'I’m Lei Junjun, known as Principal Lei');
    assert.equal(getText('en', 'intro.role'), 'AI Product Manager');
    assert.deepEqual(getText('en', 'intro.disciplines'), [
      'Retail Marketing Consultant',
      'Private-Domain Fission Growth Officer',
      'Full-Stack Indie Developer',
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
});
