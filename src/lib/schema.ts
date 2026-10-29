import { SITE } from '../data/site';

const abs = (p = '/') => {
  const norm = p.startsWith('/') ? p : `/${p}`;
  return new URL(norm, SITE.url).toString();
};

export const ID = {
  org: `${SITE.url}/#organization`,
  web: `${SITE.url}/#website`,
};

export const sameAs = Object.values(SITE.social);

export const organizationNode = () => ({
  '@type': 'Organization',
  '@id': ID.org,
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  logo: {
    '@type': 'ImageObject',
    url: abs('/images/saka.webp'),
    width: '512',
    height: '512',
  },
  image: abs('/images/13.webp'),
  description: SITE.description,
  slogan: SITE.tagline,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  sameAs,
});

export const websiteNode = () => ({
  '@type': 'WebSite',
  '@id': ID.web,
  url: SITE.url,
  name: SITE.name,
  description: SITE.description,
  inLanguage: SITE.locale,
  publisher: { '@id': ID.org },
});

export const webPageNode = (o: {
  path: string;
  name: string;
  description: string;
  type?: string;
  image?: string;
  dateModified?: string;
  hasBreadcrumbs?: boolean;
}) => ({
  '@type': o.type ?? 'WebPage',
  '@id': `${abs(o.path)}#webpage`,
  url: abs(o.path),
  name: o.name,
  description: o.description,
  inLanguage: SITE.locale,
  isPartOf: { '@id': ID.web },
  about: { '@id': ID.org },
  ...(o.hasBreadcrumbs ? { breadcrumb: { '@id': `${abs(o.path)}#breadcrumb` } } : {}),
  ...(o.image ? { primaryImageOfPage: { '@type': 'ImageObject', url: abs(o.image) } } : {}),
  ...(o.dateModified ? { dateModified: o.dateModified } : {}),
});

export const breadcrumbNode = (path: string, items: { name: string; path?: string }[]) => ({
  '@type': 'BreadcrumbList',
  '@id': `${abs(path)}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: SITE.url },
    ...items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 2,
      name: it.name,
      ...(it.path ? { item: abs(it.path) } : {}),
    })),
  ],
});

export const faqNode = (path: string, faqs: { q: string; a: string }[]) => ({
  '@type': 'FAQPage',
  '@id': `${abs(path)}#faq`,
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const articleNode = (o: {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) => ({
  '@type': 'Article',
  '@id': `${abs(o.path)}#article`,
  isPartOf: { '@id': ID.web },
  headline: o.headline,
  description: o.description,
  inLanguage: SITE.locale,
  mainEntityOfPage: abs(o.path),
  datePublished: o.datePublished,
  ...(o.dateModified ? { dateModified: o.dateModified } : {}),
  author: {
    '@type': 'Organization',
    name: o.author ?? SITE.brandName,
    url: SITE.url,
  },
  publisher: { '@id': ID.org },
});

export const homeGraph = () => [organizationNode(), websiteNode()];

export const jsonLd = (graph: unknown[]) => JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });

