import { RouteSeoMeta } from '../data/seoRoutes';

function upsertMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function applyPageMeta(meta: RouteSeoMeta) {
  document.title = meta.title;

  upsertMetaTag('name', 'description', meta.description);
  upsertMetaTag('property', 'og:type', meta.type || 'website');
  upsertMetaTag('property', 'og:locale', 'pl_PL');
  upsertMetaTag('property', 'og:site_name', meta.siteName);
  upsertMetaTag('property', 'og:title', meta.title);
  upsertMetaTag('property', 'og:description', meta.description);
  upsertMetaTag('property', 'og:url', meta.url);
  upsertMetaTag('property', 'og:image', meta.image);
  upsertMetaTag('property', 'og:image:secure_url', meta.image);
  upsertMetaTag('property', 'og:image:type', 'image/jpeg');
  if (meta.imageWidth) {
    upsertMetaTag('property', 'og:image:width', meta.imageWidth);
  }
  if (meta.imageHeight) {
    upsertMetaTag('property', 'og:image:height', meta.imageHeight);
  }
  upsertMetaTag('property', 'og:image:alt', meta.imageAlt);

  upsertMetaTag('name', 'twitter:card', 'summary_large_image');
  upsertMetaTag('name', 'twitter:title', meta.title);
  upsertMetaTag('name', 'twitter:description', meta.description);
  upsertMetaTag('name', 'twitter:image', meta.image);

  upsertCanonical(meta.url);
}
