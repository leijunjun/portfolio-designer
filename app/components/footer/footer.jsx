import { Link } from '~/components/link';
import { Text } from '~/components/text';
import { classes } from '~/utils/style';
import { useI18n } from '~/i18n-context.jsx';
import config from '~/config.json';
import styles from './footer.module.css';

export const Footer = ({ className }) => {
  const { t } = useI18n();

  return (
    <footer className={classes(styles.footer, className)}>
      <Text size="s" align="center">
        <span className={styles.date}>
          {`© ${new Date().getFullYear()} ${config.name}.`}
        </span>
        <Link secondary className={styles.link} href="/humans.txt" target="_self">
          {t('footer.crafted')}
        </Link>
      </Text>
    </footer>
  );
};
