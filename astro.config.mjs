import { defineConfig } from 'astro/config';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';

const heroHashes = ['hero-init.js', 'hero-preload.js'].map(name => `sha256-${createHash('sha256').update(readFileSync(new URL(`./src/scripts/${name}`, import.meta.url))).digest('base64')}`);

export default defineConfig({
  site: 'https://ditero.app',
  output: 'static',
  trailingSlash: 'always',
  markdown: { syntaxHighlight: false },
  security: {
    csp: {
      directives: ["default-src 'self'", "object-src 'none'", "base-uri 'none'", "form-action 'none'", "connect-src 'self' https://cloudflareinsights.com https://*.cloudflareinsights.com"],
      scriptDirective: { resources: ["'self'", 'https://static.cloudflareinsights.com'], hashes: heroHashes },
      styleDirective: { resources: ["'self'"] },
    },
  },
});
