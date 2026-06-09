import { withBase } from '../lib/url';
import { languages, defaultLang, type Lang } from './ui';

/** All supported language codes. */
export const langCodes = Object.keys(languages) as Lang[];

/** Static paths for the [lang] dynamic segment. */
export function getLangStaticPaths() {
  return langCodes.map((lang) => ({ params: { lang } }));
}

/** Build a localized, base-prefixed URL: link('es', '/about') -> /base/es/about */
export function link(lang: Lang, path = '/'): string {
  const clean = path === '/' ? '' : path;
  return withBase(`/${lang}${clean}`);
}

/** Given the current pathname, return the equivalent path in another language. */
export function switchLangPath(pathname: string, current: Lang, target: Lang): string {
  // Strip base prefix if present.
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  let rest = pathname;
  if (base && rest.startsWith(base)) rest = rest.slice(base.length);
  // Remove leading slash + current lang segment.
  rest = rest.replace(/^\//, '');
  const parts = rest.split('/');
  if (parts[0] === current) parts.shift();
  const subPath = parts.join('/');
  return link(target, subPath ? `/${subPath}` : '/');
}

export { defaultLang, type Lang };
