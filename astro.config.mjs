import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ditero.app',
  output: 'static',
  trailingSlash: 'always',
  markdown: { syntaxHighlight: false },
  security: {
    csp: {
      directives: ["default-src 'self'", "object-src 'none'", "base-uri 'none'", "form-action 'none'", "connect-src 'self' https://cloudflareinsights.com https://*.cloudflareinsights.com"],
      scriptDirective: { resources: ["'self'", 'https://static.cloudflareinsights.com'] },
      styleDirective: { resources: ["'self'"] },
    },
  },
});
