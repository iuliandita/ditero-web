export const locales = ['en', 'de', 'es', 'fr', 'ro', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const localeInfo: Record<Locale, { name: string; dir: 'ltr' | 'rtl'; og: string }> = {
  en: { name: 'English', dir: 'ltr', og: 'en_US' },
  de: { name: 'Deutsch', dir: 'ltr', og: 'de_DE' },
  es: { name: 'Español', dir: 'ltr', og: 'es_ES' },
  fr: { name: 'Français', dir: 'ltr', og: 'fr_FR' },
  ro: { name: 'Română', dir: 'ltr', og: 'ro_RO' },
  ar: { name: 'العربية', dir: 'rtl', og: 'ar_AR' },
};

export const pageUrl = (locale: Locale, path = '') => `${locale === 'en' ? '/' : `/${locale}/`}${path ? `${path}/` : ''}`;

export const version = 'v0.1.0-beta.2';

const repo = 'https://github.com/iuliandita/ditero';
export const links = {
  creator: 'https://iuliandita.com',
  otherProjects: 'https://iuliandita.com/projects/',
  project: repo,
  release: `${repo}/releases/tag/${version}`,
  deploy: `${repo}/blob/${version}/README.md#run-it-docker-compose`,
  docs: `${repo}/tree/${version}/docs`,
  portability: `${repo}/blob/${version}/docs/runbooks/data-portability.md`,
  backup: `${repo}/blob/${version}/docs/runbooks/backup-restore.md`,
  security: `${repo}/blob/${version}/docs/security.md#operator-blind-attachments`,
  issues: `${repo}/issues`,
  license: `${repo}/blob/${version}/LICENSE`,
  cli: `${repo}/blob/${version}/docs/cli.md`,
  tui: `${repo}/blob/${version}/docs/tui.md`,
  mcp: `${repo}/blob/${version}/docs/mcp.md`,
  api: `${repo}/blob/${version}/docs/runbooks/public-api.md`,
  support: 'https://ko-fi.com/Q3O027XM2F',
  cloudflarePrivacy: 'https://www.cloudflare.com/privacypolicy/',
} as const;
export type LinkKey = keyof typeof links;
