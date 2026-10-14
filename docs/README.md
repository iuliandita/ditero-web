# Documentation map

- [Repository setup and publishing](../README.md), [contributing](../CONTRIBUTING.md) and [private security reporting](../SECURITY.md).
- [Product claims and historical evidence](../PRODUCT.md), [design direction](../DESIGN.md), [screenshot provenance](screenshots.md) and [illustration direction](illustrations.md).
- Locale, RTL, route and current published alpha links: `src/i18n/shared.ts`. Localized catalogs live alongside it and are exposed through `src/content.ts`.
- Layout metadata: `src/layouts/SiteLayout.astro`; crawler output: `src/pages/robots.txt.ts` and `src/pages/sitemap.xml.ts`. Preserve historical source-evidence links; current release claims follow the existing shared release version. Development captures do not establish published or native qualification.

The output gate is `scripts/check-output.mjs`, with focused failure fixtures in `scripts/check-output.test.mjs`. Preview and production output must both pass before publication. Analytics is injected by the hosting edge; no source beacon is needed.
