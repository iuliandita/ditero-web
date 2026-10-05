import type { APIRoute } from 'astro';
export const GET: APIRoute = () => new Response(
  import.meta.env.SITE_ENV === 'production'
    ? 'User-agent: *\nAllow: /\n\nSitemap: https://ditero.app/sitemap.xml\n'
    : 'User-agent: *\nDisallow: /\n',
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
