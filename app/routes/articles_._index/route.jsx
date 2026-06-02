import { baseMeta } from '~/utils/meta';
import { getPosts } from './posts.server';
import { json } from '@remix-run/cloudflare';
import { getText } from '~/i18n.js';

export async function loader() {
  const allPosts = await getPosts();
  const featured = allPosts.filter(post => post.frontmatter.featured)[0];
  const posts = allPosts.filter(post => featured?.slug !== post.slug);

  return json({ posts, featured });
}

export function meta({ matches }) {
  const language = matches.find(match => match.id === 'root')?.data?.language || 'en';

  return baseMeta({
    title: getText(language, 'meta.articles.title'),
    description: getText(language, 'meta.articles.description'),
  });
}

export { Articles as default } from './articles';
