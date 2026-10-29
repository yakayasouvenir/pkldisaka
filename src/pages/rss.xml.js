import rss from '@astrojs/rss';
import { SITE } from '../data/site';
import { PKL_PAGES } from '../data/pklData';

export function GET(context) {
  return rss({
    title: `Panduan & Artikel ${SITE.name}`,
    description: SITE.description,
    site: context.site,
    customData: '<language>id-id</language>',
    items: PKL_PAGES.filter((p) => p.path !== '/').map((p) => ({
      title: p.h1,
      description: p.summary,
      pubDate: new Date('2026-10-27'),
      link: p.path,
    })),
  });
}
