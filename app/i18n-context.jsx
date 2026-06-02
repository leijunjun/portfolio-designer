import { createContext, useContext } from 'react';
import { getText, languageLabels } from './i18n.js';

const I18nContext = createContext({
  language: 'en',
  languageLabels,
  t: path => getText('en', path),
});

export function I18nProvider({ children, language = 'en', setLanguage }) {
  return (
    <I18nContext.Provider
      value={{
        language,
        languageLabels,
        setLanguage,
        t: path => getText(language, path),
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
