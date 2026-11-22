import fs from 'node:fs';
import path from 'node:path';
import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import {
  BLOG_META,
  ITALY_META,
  MLYNOWKA_META,
  RouteSeoMeta,
  SITE_URL,
} from './src/data/seoRoutes';

function escapeHtmlAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeHtmlText(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function renderHtmlWithMeta(baseHtml: string, meta: RouteSeoMeta): string {
  const ogTags = [
    `<meta property="og:type" content="${escapeHtmlAttr(meta.type || 'website')}">`,
    `<meta property="og:locale" content="pl_PL">`,
    `<meta property="og:site_name" content="${escapeHtmlAttr(meta.siteName)}">`,
    `<meta property="og:title" content="${escapeHtmlAttr(meta.title)}">`,
    `<meta property="og:description" content="${escapeHtmlAttr(meta.description)}">`,
    `<meta property="og:url" content="${escapeHtmlAttr(meta.url)}">`,
    `<meta property="og:image" content="${escapeHtmlAttr(meta.image)}">`,
    `<meta property="og:image:secure_url" content="${escapeHtmlAttr(meta.image)}">`,
    `<meta property="og:image:type" content="image/jpeg">`,
    meta.imageWidth ? `<meta property="og:image:width" content="${escapeHtmlAttr(meta.imageWidth)}">` : '',
    meta.imageHeight ? `<meta property="og:image:height" content="${escapeHtmlAttr(meta.imageHeight)}">` : '',
    `<meta property="og:image:alt" content="${escapeHtmlAttr(meta.imageAlt)}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${escapeHtmlAttr(meta.title)}">`,
    `<meta name="twitter:description" content="${escapeHtmlAttr(meta.description)}">`,
    `<meta name="twitter:image" content="${escapeHtmlAttr(meta.image)}">`,
    `<link rel="canonical" href="${escapeHtmlAttr(meta.url)}">`,
  ]
    .filter(Boolean)
    .join('\n  ');

  return baseHtml
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtmlText(meta.title)}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="description" content="${escapeHtmlAttr(meta.description)}">`
    )
    .replace(
      /<!-- SEO_META_START -->[\s\S]*?<!-- SEO_META_END -->/,
      `<!-- SEO_META_START -->\n  ${ogTags}\n  <!-- SEO_META_END -->`
    );
}

function getBlogPostMetaEntries(rootDir: string): Array<{ routePath: string; meta: RouteSeoMeta }> {
  const blogDir = path.join(rootDir, 'src', 'content', 'blog');
  if (!fs.existsSync(blogDir)) return [];

  const entries: Array<{ routePath: string; meta: RouteSeoMeta }> = [];
  for (const file of fs.readdirSync(blogDir)) {
    if (!file.endsWith('.md')) continue;
    const raw = fs.readFileSync(path.join(blogDir, file), 'utf-8');
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    const fallbackSlug = file.replace(/\.md$/, '');
    let title = fallbackSlug;
    let slug = fallbackSlug;
    let description = BLOG_META.description;

    if (match) {
      for (const line of match[1].split(/\r?\n/)) {
        const colonIdx = line.indexOf(':');
        if (colonIdx === -1) continue;
        const key = line.slice(0, colonIdx).trim();
        let val = line.slice(colonIdx + 1).trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1);
        }
        if (key === 'title' && val) title = val;
        else if (key === 'slug' && val) slug = val;
        else if (key === 'description' && val) description = val;
      }
    }

    const fullTitle = `${title} | Blog Młynówka Domek przy Młynie`;
    entries.push({
      routePath: `blog/${slug}`,
      meta: {
        title: fullTitle,
        description,
        siteName: MLYNOWKA_META.siteName,
        url: `${SITE_URL}/blog/${slug}`,
        image: MLYNOWKA_META.image,
        imageWidth: MLYNOWKA_META.imageWidth,
        imageHeight: MLYNOWKA_META.imageHeight,
        imageAlt: title,
        type: 'article',
      },
    });
  }

  return entries;
}

function generateRouteMetaHtml(): Plugin {
  let rootDir = process.cwd();
  let outDir = 'dist';

  return {
    name: 'generate-route-meta-html',
    apply: 'build',
    configResolved(config) {
      rootDir = config.root;
      outDir = config.build.outDir;
    },
    closeBundle() {
      const distPath = path.resolve(rootDir, outDir);
      const indexHtmlPath = path.join(distPath, 'index.html');
      if (!fs.existsSync(indexHtmlPath)) return;

      const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

      const staticRoutes: Array<{ routePath: string; meta: RouteSeoMeta }> = [
        {
          routePath: 'pieniny',
          meta: { ...MLYNOWKA_META, url: `${SITE_URL}/pieniny` },
        },
        {
          routePath: 'wlochy',
          meta: { ...ITALY_META, url: `${SITE_URL}/wlochy` },
        },
        {
          routePath: 'sardynia',
          meta: { ...ITALY_META, url: `${SITE_URL}/sardynia` },
        },
        {
          routePath: 'blog',
          meta: BLOG_META,
        },
        ...getBlogPostMetaEntries(rootDir),
      ];

      for (const { routePath, meta } of staticRoutes) {
        const html = renderHtmlWithMeta(baseHtml, meta);

        // Write <route>.html for extensionless HTML servers (Cloudflare Pages, Netlify, Caddy {path}.html)
        const htmlFileTarget = path.join(distPath, `${routePath}.html`);
        fs.mkdirSync(path.dirname(htmlFileTarget), { recursive: true });
        fs.writeFileSync(htmlFileTarget, html, 'utf-8');

        const routeTarget = path.join(distPath, routePath);
        const hasChildRoutes = staticRoutes.some((r) => r.routePath.startsWith(`${routePath}/`));
        const isExistingDir = fs.existsSync(routeTarget) && fs.statSync(routeTarget).isDirectory();

        if (isExistingDir || hasChildRoutes) {
          // Directory exists (e.g. public/sardynia assets or blog/* child routes) -> write <route>/index.html
          fs.mkdirSync(routeTarget, { recursive: true });
          fs.writeFileSync(path.join(routeTarget, 'index.html'), html, 'utf-8');
        } else {
          // Write extensionless file <route> directly so servers with `try_files {path} /index.html` (like Coolify Caddy)
          // match `{path}` (e.g. /wlochy, /pieniny, /blog/<slug>) as a file with content-type text/html!
          fs.mkdirSync(path.dirname(routeTarget), { recursive: true });
          fs.writeFileSync(routeTarget, html, 'utf-8');
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), generateRouteMetaHtml()],
  assetsInclude: ['**/*.md'],
});
