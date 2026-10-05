---
name: Ditero
description: Shared lists. Your server.
colors:
  bg: "light-dark(#fcfcfb, #151a1d)"
  surface: "light-dark(#f2f4f3, #1c2326)"
  ink: "light-dark(#192022, #eef2f1)"
  muted: "light-dark(#475356, #aab7b9)"
  line: "light-dark(#d9dfde, #2d393c)"
  brand: "light-dark(#0f6f64, #6fd0bf)"
  brand-hover: "light-dark(#0b564d, #92e0d2)"
  on-brand: "light-dark(#ffffff, #0d1a18)"
  tint: "light-dark(#e3f0ed, #1a2b29)"
  tint-muted: "light-dark(#2c5750, #a9cbc5)"
  felt: "light-dark(#0f5f56, #15352f)"
  felt-ink: "#eef2f1"
  felt-muted: "#c9dfda"
  felt-accent: "#6fd0bf"
  felt-accent-hover: "#92e0d2"
  felt-accent-ink: "#0d1a18"
typography:
  display:
    fontFamily: "Schibsted Grotesk Variable, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.6rem, 1rem + 4.2vw, 4.5rem)"
    fontWeight: 650
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  headline:
    fontSize: "clamp(2rem, 1.1rem + 2.8vw, 3.5rem)"
    fontWeight: 650
    lineHeight: 1.08
    letterSpacing: "-0.028em"
  title:
    fontSize: "1.25rem"
    fontWeight: 650
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  lead:
    fontSize: "clamp(1.15rem, 1rem + 0.7vw, 1.5rem)"
    lineHeight: 1.45
  body:
    fontFamily: "Schibsted Grotesk Variable, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    lineHeight: 1.65
  body-ar:
    fontFamily: "Noto Sans Arabic Variable, Schibsted Grotesk Variable, system-ui, sans-serif"
    fontSize: "1.0625rem"
    lineHeight: 1.85
  small:
    fontSize: "0.9rem"
rounded:
  focus: "4px"
  language-item: "6px"
  control: "8px"
  button: "10px"
  panel: "12px"
  tile: "14px"
  stage: "20px"
  pill: "999px"
spacing:
  gutter: "clamp(1.25rem, 5vw, 3rem)"
  section: "clamp(3.5rem, 8vw, 6rem)"
  section-compact: "clamp(3rem, 7vw, 5.5rem)"
  split-gap: "clamp(1.5rem, 5vw, 5rem)"
  stage-padding: "clamp(1.5rem, 4vw, 3.5rem)"
  pane-padding: "1.25rem"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.on-brand}"
    rounded: "{rounded.button}"
    padding: "0.6rem 1.4rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.brand-hover}"
    textColor: "{colors.on-brand}"
  button-felt:
    backgroundColor: "{colors.felt-accent}"
    textColor: "{colors.felt-accent-ink}"
    rounded: "{rounded.button}"
    padding: "0.6rem 1.4rem"
    height: "48px"
  button-felt-hover:
    backgroundColor: "{colors.felt-accent-hover}"
    textColor: "{colors.felt-accent-ink}"
  text-link:
    textColor: "{colors.brand}"
    height: "44px"
  navigation:
    textColor: "{colors.ink}"
    height: "44px"
  state:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.tint-muted}"
    rounded: "{rounded.pill}"
    padding: "0.05rem 0.65rem"
  carousel-tab:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    height: "44px"
  carousel-tab-current:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.on-brand}"
  stage:
    backgroundColor: "{colors.felt}"
    textColor: "{colors.felt-ink}"
    rounded: "{rounded.stage}"
    padding: "{spacing.stage-padding}"
  pane:
    backgroundColor: "{colors.bg}"
    rounded: "{rounded.stage}"
    padding: "{spacing.pane-padding}"
  client:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.tile}"
    height: "3.5rem"
  request:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.stage}"
    padding: "clamp(1.5rem, 3vw, 2.5rem)"
  plan-row:
    backgroundColor: "{colors.bg}"
    rounded: "{rounded.panel}"
    padding: "0.75rem 1rem"
  capture:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.panel}"
---

# Design System: Ditero

## Overview

**Creative North Star: "Shared lists. Your server."**

Professional, clean and readable. Real app captures show what Ditero does; large type, tonal panels and one teal accent organize the explanation. Preserve the existing wordmark and app icon.

Deep teal felt grounds the two moments that matter most: the product proof in the hero and the self-hosting band. Tactile felt and paper tiles add material character; they support the text and never stand in for the interface. One system serves six languages, Arabic RTL, and light and dark themes.

**Key Characteristics:**
- Real desktop and mobile captures with actual shadows.
- Teal felt stage for the hero and the self-hosting band.
- Seven text-free felt and paper illustrations, shown together on desktop.
- Large headings, tonal panels, one teal accent across two themes.

## Colors

The CSS `light-dark()` values in the frontmatter are normative: light value first, dark value second. System preference is the default; `data-theme` sets an explicit override.

Near-white or cool charcoal pages; `surface`, `tint` and `felt` panels separate sections. Brand teal marks primary actions, links, current tabs, bullets, focus, selection and browser accents. `tint` and `tint-muted` carry the dashboard panel, assistant request, status chips and support section. `felt` and its `felt-*` companions apply to the hero and self-hosting band; only the felt ground changes with the theme.

Illustrations use opaque dark-teal ground `#1a2b29`, paper `#eef2f1`, bright teal `#6fd0bf`, deep teal `#0f6f64` and cool gray `#aab7b9`, identical in both themes.

**The Felt Stage Rule.** Felt is for product proof and the self-hosting band only. Ordinary sections stay on `bg`, `surface` or `tint`.

## Typography

**Display and Body Font:** Schibsted Grotesk Variable (system-ui fallback), self-hosted
**Arabic Font:** Noto Sans Arabic Variable, with Schibsted Grotesk as fallback

**Character:** Plain, confident grotesk at weight 650 for headings with tight tracking; calm body text.

### Hierarchy
- **Display** (650, 2.6-4.5rem fluid, 1.04): h1; the hero heading breaks into two lines.
- **Headline** (650, 2-3.5rem fluid, 1.08): h2; the dashboard heading is smaller (1.75-2.75rem).
- **Title** (650, 1.25rem, 1.3): h3; feature pane titles scale up to 1.65rem.
- **Lead** (1.15-1.5rem fluid, 1.45, muted): hero and document intros.
- **Body** (17px, 1.65; Arabic 1.85): paragraphs stop at 66ch.
- **Small** (0.9rem, muted): notes, footer text.

Arabic headings use zero tracking and 1.35 line height.

## Layout

The page wrap is at most 76rem with fluid gutters; document pages use 44rem. Page order: felt hero stage, features, dashboard, apps and tools with phone capture, assistant, self-hosting band, support, footer.

The hero is an enlarged 5/7 split inside the felt stage: two-line heading, lead, actions and release status on the left; a real list capture cropped to the task rows on the right, with a felt tile overlapping its start-bottom corner. Dashboard, apps, assistant, self-hosting and support sections are 4/8, 6/6, 7/5 or 5/7 splits.

Features show all seven groups at once as a 12-column grid: four panes of three columns, then three of four (4+3). From 801 to 1000px the grid is three per row with the last pane full width. At 800px and below it is a mobile carousel: with JavaScript, a native scroll-snap track with a category tab strip; without it, stacked panes. Each mobile pane places an 11rem tile beside its heading; at 480px and below the tile stacks above.

At 1000px and below, splits become a single column. At 800px and below the header swaps section links for a menu disclosure, the hero uses the real mobile capture (max 15rem wide), the wide dashboard capture swaps to a compact crop, and the separate phone capture and dashboard tile are hidden. At 480px and below the wordmark is 112px and language and menu labels are hidden. Logical properties move tiles and offsets correctly in RTL; screenshot crop offsets stay physical because the captured pixels are English.

## Elevation & Depth

Tonal surfaces carry most depth, with 1px hairlines only on menus, tabs and document footers. Real shadows appear on captures and tiles; nothing else has a shadow. The site has no gradients.

### Shadow Vocabulary
- **Capture** (`box-shadow: 0 20px 40px -18px rgb(0 0 0 / 0.45)`): real screenshots.
- **Tile** (`box-shadow: 0 14px 28px -10px rgb(0 0 0 / 0.5)`): felt tiles in the hero, dashboard and self-hosting band. Feature-pane plates have none.

### Motion
Motion is minimal and state-only: 160ms background change on buttons and a 200ms chevron turn on disclosures, both eased with `cubic-bezier(0.16, 1, 0.3, 1)`. There is no hero reveal, autoplay or parallax. Reduced motion removes the transitions and smooth scrolling.

**The Real Shadow Rule.** Shadows belong to captures and tiles that rest on a surface. Never add glow or glossy lighting.

## Shapes

Controls and the theme toggle use 8px corners, buttons 10px, captures and plan rows 12px, tiles, plates and client rows 14px, and stage, dashboard, request and pane panels 20px. Status chips and carousel tabs are pills. The language and menu panels are 10px with 6px link corners. Focus is a 2px teal outline, 3px offset, 4px corners.

Illustrations are square felt and paper collages. Seven text-free motifs: shared sheets, routine ring, reminder signal with crescent, regrouped task blocks, attachment pouch, integration key and tokens, theme and reading-size discs. Keep silhouettes readable at small sizes and compositions direction-neutral. Read docs/illustrations.md for material and generation rules.

## Components

- **Primary action:** filled teal link, weight 650, 48px minimum height. On felt it uses bright felt teal. Secondary actions are teal text links with 44px targets; on felt they are underlined felt ink.
- **Navigation:** plain text links with 44px targets; native language `details` with native names; menu `details` on mobile; theme button with inline SVG, localized label and `aria-pressed`.
- **Capture:** theme-swapped real WebP screenshots with translated alt text and no caption. The whole capture links to the full image.
- **Feature pane:** `bg` card on the `surface` features band with tile, title, two key points, a details fold and a documentation link.
- **Carousel tabs:** pill category buttons, current one filled teal. Scripted, mobile-only; arrow, Home and End keys move the track; a visually hidden live region announces position. No auto-advance.
- **Client row:** `surface` disclosure with platform name, state chip and a short description with link.
- **Request example:** tinted panel with an example request and an example plan; each plan row has a ring marker and a state chip. It is external assistant content, not Ditero interface.
- **Self-hosting steps:** three numbered rows with felt-teal discs inside the felt band, beside the tile and encryption note.
- **Footer mark:** felt clipboard tile (112px, 14px radius) tilted counterclockwise, with the Ditero name as real text.

## Do's and Don'ts

### Do:
- **Do** use real captures to demonstrate the app, with their shadows.
- **Do** preserve light/dark parity, localized controls and RTL layout.
- **Do** keep visible focus, reduced motion and native scrolling.
- **Do** keep all seven illustrations consistent in palette, material and visual weight.
- **Do** keep the footer mark's counterclockwise tilt and two-row checklist.

### Don't:
- **Don't** use decorative art as evidence of app behavior.
- **Don't** add text, vendor marks or fake interfaces to illustrations.
- **Don't** add captions to captures, hero reveal animation, gradients, autoplay or parallax.
- **Don't** put shadows on panels, buttons or feature-pane plates.
