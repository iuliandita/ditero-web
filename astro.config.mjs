import { defineConfig } from 'astro/config';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';

const heroHash = `sha256-${createHash('sha256').update(readFileSync(new URL('./src/scripts/hero-init.js', import.meta.url))).digest('base64')}`;

export default defineConfig({
  site: 'https://ditero.app',
  output: 'static',
  trailingSlash: 'always',
  markdown: { syntaxHighlight: false },
  security: {
    csp: {
      directives: ["default-src 'self'", "object-src 'none'", "base-uri 'none'", "form-action 'none'", "connect-src 'self' https://cloudflareinsights.com https://*.cloudflareinsights.com"],
      scriptDirective: { resources: ["'self'", 'https://static.cloudflareinsights.com'], hashes: [heroHash] },
      styleDirective: { resources: ["'self'"] },
    },
  },
});
