import { createCookieSessionStorage, json } from '@remix-run/cloudflare';
import { defaultLanguage, isSupportedLanguage } from '~/i18n.js';

export async function action({ request, context }) {
  const formData = await request.formData();
  const requestedLanguage = formData.get('language');
  const language = isSupportedLanguage(requestedLanguage)
    ? requestedLanguage
    : defaultLanguage;

  const { getSession, commitSession } = createCookieSessionStorage({
    cookie: {
      name: '__session',
      httpOnly: true,
      maxAge: 604_800,
      path: '/',
      sameSite: 'lax',
      secrets: [context.cloudflare.env.SESSION_SECRET || ' '],
      secure: true,
    },
  });

  const session = await getSession(request.headers.get('Cookie'));
  session.set('language', language);

  return json(
    { status: 'success' },
    {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    }
  );
}
