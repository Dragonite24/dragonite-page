import { site } from '$lib/config/site';
import { getSortedPosts } from '$lib/content/posts';
import type { RequestHandler } from './$types';

export const prerender = true;

const staticRoutes = ['/', '/portfolio', '/blog'];

function escapeXml(value: string): string {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&apos;');
}

function buildUrl(path: string): string {
	const base = site.url.replace(/\/$/, '');
	return `${base}${path}`;
}

export const GET: RequestHandler = () => {
	type SitemapEntry = {
		loc: string;
		changefreq: string;
		priority: string;
		lastmod?: string;
	};

	const urls: SitemapEntry[] = [
		...staticRoutes.map((path) => ({
			loc: buildUrl(path),
			changefreq: 'monthly',
			priority: path === '/' ? '1.0' : '0.8'
		})),
		...getSortedPosts().map((post) => ({
			loc: buildUrl(`/blog/${post.slug}`),
			changefreq: 'yearly',
			priority: '0.6',
			lastmod: post.date
		}))
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		(entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>${entry.lastmod ? `\n    <lastmod>${entry.lastmod}</lastmod>` : ''}
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
