/** Hash URLs keep every view refreshable on GitHub Pages without server rewrites. */
export function readRoute(location: Pick<Location, 'hash'> = window.location) {
  const route = location.hash.startsWith('#/') ? location.hash.slice(1) : '/';
  return new URL(route, 'https://pixelnest.invalid');
}
export function routeHref(route: string, href: string = window.location.href) {
  const result = new URL(href);
  result.search = '';
  result.hash = route.startsWith('/') ? route : `/${route}`;
  return result.href;
}
