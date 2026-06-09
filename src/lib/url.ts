// Helper for building URLs that respect the configured `base` path so the site
// works both locally and when served from https://<user>.github.io/<repo>/.
const BASE = import.meta.env.BASE_URL;

/** Prefix an absolute-from-root path with the site base path. */
export function withBase(path: string): string {
  if (!path) return BASE;
  // Leave external links, anchors and protocol-relative URLs untouched.
  if (/^(https?:)?\/\//.test(path) || path.startsWith('mailto:') || path.startsWith('#') || path.startsWith('tel:')) {
    return path;
  }
  const base = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

/** True when the given nav href matches the current pathname. */
export function isActive(href: string, pathname: string): boolean {
  const target = withBase(href).replace(/\/$/, '') || '/';
  const current = pathname.replace(/\/$/, '') || '/';
  if (target === (BASE.replace(/\/$/, '') || '/')) {
    return current === target;
  }
  return current === target || current.startsWith(`${target}/`);
}
