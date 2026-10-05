# ditero-web

The public website for [Ditero](https://github.com/iuliandita/ditero), a self-hosted todo app for households and small groups.

Built with Astro, TypeScript, and native CSS. English and German pages, light and dark themes. MIT licensed. The application and its release downloads live in their own repository.

## Development

Use Bun 1.4.2 and Node.js 24.

```sh
bun install --frozen-lockfile
bun run dev
bun run check
bun run build
bun run preview
```

Default builds are unindexed previews. Build the official site with `SITE_ENV=production bun run build` to emit canonical URLs and the sitemap.

## Deployment

Cloudflare Workers Static Assets hosts [ditero.app](https://ditero.app). Authentication stays in environment variables. Deploy a checked release from `main`:

```sh
SITE_ENV=production bun run build
bunx wrangler deploy --strict
```

Cloudflare Web Analytics is injected at the edge for the production hostname. Do not add a second beacon. Google Search Console uses DNS verification and the sitemap; the site contains no Google Analytics script.

`develop` is the default integration branch; `main` is the release branch. Changes land through pull requests.
