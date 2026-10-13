import type { APIRoute } from 'astro';
export const GET: APIRoute = () => new Response(
  import.meta.env.SITE_ENV === 'production'
    ? 'User-agent: *\nContent-Signal: search=yes, ai-input=yes, ai-train=no\nAllow: /\n\n'
      + ['GPTBot', 'CCBot', 'ClaudeBot', 'Applebot-Extended', 'Bytespider', 'meta-externalagent'].map(agent => `User-agent: ${agent}\n`).join('')
      + 'Disallow: /\n\nSitemap: https://ditero.app/sitemap.xml\n'
    : 'User-agent: *\nDisallow: /\n',
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
