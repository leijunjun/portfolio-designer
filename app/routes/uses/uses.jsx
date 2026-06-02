import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { getText } from '~/i18n.js';
import { useI18n } from '~/i18n-context.jsx';
import styles from './uses.module.css';

export const meta = ({ matches }) => {
  const language = matches.find(match => match.id === 'root')?.data?.language || 'en';

  return baseMeta({
    title: getText(language, 'meta.uses.title'),
    description: getText(language, 'meta.uses.description'),
  });
};

export const Uses = () => {
  const { t } = useI18n();
  const text = t('uses');

  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title={text.title}
          description={text.description}
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>{text.design}</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <UsesListItem
                    item={text.designItems[0]}
                    links={[
                      ['https://www.figma.com', text.designItems[0].linkOne],
                      ['https://www.figma.com/@hamish', text.designItems[0].linkTwo],
                    ]}
                  />
                  <UsesListItem
                    item={text.designItems[1]}
                    links={[['/contact', text.designItems[1].linkOne]]}
                  />
                  <UsesListItem
                    item={text.designItems[2]}
                    links={[
                      ['https://www.blender.org/', text.designItems[2].linkOne],
                    ]}
                  />
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>{text.development}</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <UsesListItem
                    item={text.developmentItems[0]}
                    links={[['https://vscodium.com/', text.developmentItems[0].linkOne]]}
                  />
                  <ListItem>{text.developmentItems[1]}</ListItem>
                  <UsesListItem
                    item={text.developmentItems[2]}
                    links={[['https://reactjs.org/', text.developmentItems[2].linkOne]]}
                  />
                  <UsesListItem
                    item={text.developmentItems[3]}
                    links={[['https://threejs.org/', text.developmentItems[3].linkOne]]}
                  />
                  <UsesListItem
                    item={text.developmentItems[4]}
                    links={[['https://postcss.org/', text.developmentItems[4].linkOne]]}
                  />
                  <UsesListItem
                    item={text.developmentItems[5]}
                    links={[
                      [
                        'https://www.framer.com/motion/',
                        text.developmentItems[5].linkOne,
                      ],
                    ]}
                  />
                  <UsesListItem
                    item={text.developmentItems[6]}
                    links={[
                      ['https://storybook.js.org/', text.developmentItems[6].linkOne],
                      [
                        'https://storybook.hamishw.com',
                        text.developmentItems[6].linkTwo,
                      ],
                    ]}
                  />
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>{text.system}</ProjectSectionHeading>
              <Table>
                <TableBody>
                  {text.systemRows.map(([label, value]) => (
                    <TableRow key={label}>
                      <TableHeadCell>{label}</TableHeadCell>
                      <TableCell>{value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};

function UsesListItem({ item, links }) {
  return (
    <ListItem>
      {item.before}
      <Link href={links[0][0]}>{links[0][1]}</Link>
      {item.middle}
      {!!links[1] && <Link href={links[1][0]}>{links[1][1]}</Link>}
      {item.after}
    </ListItem>
  );
}
