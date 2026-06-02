import config from '~/config.json';

export const navLinks = [
  {
    labelKey: 'nav.projects',
    pathname: '/#project-1',
  },
  {
    labelKey: 'nav.details',
    pathname: '/#details',
  },
  {
    labelKey: 'nav.articles',
    pathname: '/articles',
  },
  {
    labelKey: 'nav.contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Bluesky',
    url: `https://bsky.app/profile/${config.bluesky}`,
    icon: 'bluesky',
  },
  {
    label: 'Figma',
    url: `https://www.figma.com/${config.figma}`,
    icon: 'figma',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
