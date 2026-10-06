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

export const version = 'v0.0.1-alpha.5';

const repo = 'https://github.com/iuliandita/ditero';
export const links = {
  project: repo,
  release: `${repo}/releases/tag/${version}`,
  deploy: `${repo}/tree/develop/deploy/docker`,
  docs: `${repo}/tree/develop/docs`,
  issues: `${repo}/issues`,
  license: `${repo}/blob/develop/LICENSE`,
  cli: `${repo}/blob/develop/docs/cli.md`,
  tui: `${repo}/blob/develop/docs/tui.md`,
  mcp: `${repo}/blob/develop/docs/mcp.md`,
  api: `${repo}/blob/develop/docs/runbooks/public-api.md`,
  support: 'https://ko-fi.com/Q3O027XM2F',
  sponsor: 'mailto:iulian.dita@gmail.com?subject=Ditero%20sponsorship',
  contact: 'mailto:iulian.dita@gmail.com',
  cloudflarePrivacy: 'https://www.cloudflare.com/privacypolicy/',
} as const;
export type LinkKey = keyof typeof links;
