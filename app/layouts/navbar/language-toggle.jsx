import { Button } from '~/components/button';
import { useI18n } from '~/i18n-context.jsx';
import styles from './language-toggle.module.css';

export function LanguageToggle({ isMobile, ...rest }) {
  const { language, setLanguage, t } = useI18n();
  const nextLanguage = language === 'zh' ? 'en' : 'zh';
  const label = language === 'zh' ? 'EN' : '中';

  return (
    <Button
      iconOnly
      className={styles.toggle}
      data-mobile={isMobile}
      aria-label={t('common.languageToggle')}
      onClick={() => setLanguage(nextLanguage)}
      {...rest}
    >
      {label}
    </Button>
  );
}
