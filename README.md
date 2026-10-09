# ditero-web

The public website for [Ditero](https://github.com/iuliandita/ditero), a self-hosted todo app for households and small groups.

Built with Astro, TypeScript, and native CSS. English, German, Spanish, French, Romanian, and Arabic pages, including RTL, with light and dark themes. MIT licensed. The application and its release downloads live in their own repository.

## Development

The current public release is [v0.0.1-alpha.12](https://github.com/iuliandita/ditero/releases/tag/v0.0.1-alpha.12).

Use Bun 1.4.2 and Node.js 24.

```sh
bun install --frozen-lockfile
bun run dev
bun run check
bun run build
bun run preview
```

Default builds are unindexed previews. Build the official site with `SITE_ENV=production bun run build` to emit canonical URLs and the sitemap.

Screenshots show the English development interface with fictional household data. Web and native downloads are linked separately from terminal source clients. Alpha.8 includes the HTTP API and CLI/TUI/MCP source. CLI, TUI and MCP run from source; standalone binaries are not in the alpha downloads. Calendar subscriptions and task webhooks are also included in Alpha.8. Reminders support ntfy, Telegram, Discord, Slack and email. Desktop downloads are experimental; Windows installers are unsigned and macOS builds use ad-hoc signatures without notarization. Fonts are bundled locally; no remote font service is used.

## Deployment

Cloudflare Workers Static Assets hosts [ditero.app](https://ditero.app). Authentication stays in environment variables. Deploy a checked release from `main`:

```sh
SITE_ENV=production bun run build
bunx wrangler deploy --strict
```

Cloudflare Web Analytics is injected at the edge for the production hostname. Do not add a second beacon. Google Search Console uses DNS verification and the sitemap; the site contains no Google Analytics script.

`develop` is the default integration branch; `main` is the release branch. Changes land through pull requests.
