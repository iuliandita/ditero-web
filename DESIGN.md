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
typography:
  display:
    fontFamily: "Schibsted Grotesk Variable, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.5rem, 1.5rem + 4.6vw, 5rem)"
    fontWeight: 650
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  headline:
    fontSize: "clamp(1.75rem, 1.3rem + 1.9vw, 2.75rem)"
    fontWeight: 650
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  title:
    fontSize: "1.25rem"
    fontWeight: 650
    lineHeight: 1.3
    letterSpacing: "-0.01em"
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
  artwork: "10px"
  panel: "12px"
  pill: "999px"
spacing:
  gutter: "clamp(1.25rem, 5vw, 3rem)"
  section: "clamp(3rem, 7vw, 5.5rem)"
  split-gap: "clamp(1.5rem, 5vw, 5rem)"
  panel-padding: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.on-brand}"
    rounded: "{rounded.control}"
    padding: "0.6rem 1.25rem"
  button-primary-hover:
    backgroundColor: "{colors.brand-hover}"
    textColor: "{colors.on-brand}"
  text-link:
    textColor: "{colors.brand}"
  navigation:
    textColor: "{colors.ink}"
  state:
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: "0 0.6rem"
  carousel-tab:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
  carousel-tab-current:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.on-brand}"
  request:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.panel}"
    padding: "1.25rem 1.5rem"
  carousel-pane:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.panel}"
    padding: "{spacing.panel-padding}"
---

# Design System: Ditero

## Overview

**Creative North Star: "Shared lists. Your server."**

Professional, clean and readable. Real app captures establish what Ditero does; generous spacing, clear type and a restrained teal palette organize the explanation. Preserve the existing wordmark and app icon.

Decorative paper/felt illustrations add material character to the feature carousel. They support the text without becoming interface evidence. The same visual system serves six languages, Arabic RTL, and light and dark themes.

**Key Characteristics:**
- Real desktop and mobile captures.
- Large headings, readable text and hairline rows.
- One teal accent across two themes.
- Compact, text-free illustrations.

## Colors

The CSS `light-dark()` values in frontmatter are normative: light value first, dark value second. System preference is the default; `data-theme` sets an explicit override.

Brand teal marks primary actions, links, selected tabs, focus, selection and browser accents. `brand-hover` and `on-brand` supply button hover and text. The page is near-white or cool charcoal; tonal panels, primary and muted ink, and hairlines organize content. The support section uses `tint` and `tint-muted`.

Illustrations use opaque dark-teal ground `#1a2b29`, paper `#eef2f1`, bright teal `#6fd0bf`, deep teal `#0f6f64` and cool gray `#aab7b9`. Keep the same ground throughout the set with sparing bright-teal accents.

## Typography

Self-host Schibsted Grotesk Variable for Latin and Noto Sans Arabic Variable for Arabic, including the Latin Extended subset for Romanian. Headings use weight 650. Display, headline and title roles correspond to h1, h2 and h3. Body is 17px with 1.65 line height; Arabic body uses 1.85. Paragraphs stop at 66ch. Supporting text uses 0.9rem.

Arabic headings use zero tracking and 1.35 line height. Keep labels and prose localized while real captures remain clearly identified as English examples.

## Layout

The page wrap is at most 76rem with fluid gutters. The desktop introduction uses a 7/5 split: a two-line heading on the left, explanation and actions on the right, followed by a full-width real list capture and release-status text. Ordinary sections use a 5/7 split; feature and platform descriptions use hairline definition-list rows. Document pages use a 44rem wrap.

Page order is introduction, features, dashboard capture, assistant integration, apps and tools, mobile, feature carousel, server and support.

At 800px and below, introduction, sections and rows become single-column. The header keeps wordmark, language and theme controls; section links remain in the footer. The hero switches to the real mobile capture at up to 390px wide, with no height cap. The separate phone capture is hidden. Wide dashboard captures retain horizontal scrolling. Below 420px the wordmark is 112px wide and the language-name label is hidden.

Desktop carousel panes use title/link, feature-list and artwork columns. Artwork sits at inline end, up to 14rem wide. At 800px and below, a 72px square sits beside the heading; features and documentation link occupy full-width rows beneath. Logical properties let artwork move to the left in RTL.

## Elevation & Depth

Use tonal surfaces and 1px hairlines. The site has no box shadows or gradients. Illustrations use opaque cut-paper/felt shapes with restrained texture and no rendered lighting, glow or glossy depth.

The hero capture reveals once with clip-path and opacity over 900ms using `cubic-bezier(0.16, 1, 0.3, 1)`. Reduced motion removes this reveal and smooth scrolling. Artwork has no animation or parallax.

## Shapes

Controls use 8px corners, panels and captures 12px, and artwork plates 10px. Status badges and carousel tabs are pills. The language disclosure uses a 10px container with 6px link corners. Focus has a 2px teal outline, 3px offset and 4px corners.

Illustrations share simple rounded rectangles, discs, arcs and folded or notched paper forms. Use seven distinct text-free motifs: shared sheets, routine ring, reminder signal with crescent, regrouped task blocks, attachment pouch, integration key and tokens, and theme/reading-size discs. Keep silhouettes readable at 72px and compositions direction-neutral.

## Components

- **Primary action:** filled teal link, weight 650, minimum 48px height; secondary actions are underlined teal text links with minimum 44px targets.
- **Navigation:** plain text links; native `details` language disclosure with native language names; theme button with inline SVG, localized label and `aria-pressed`.
- **Capture:** theme-swapped real WebP screenshots, translated descriptions and development-build/English-interface caption; accessible link opens the full image.
- **Carousel:** native scroll-snap track, category buttons, Previous/Next controls and live position text. No auto-advance. Controls appear with JavaScript; the track scrolls without it.
- **Artwork:** generated decorative art, distinct from app screenshots. Empty alt text, explicit dimensions, lazy loading and 480/720px WebP variants preserve compact layout. No caption, text, logos, interface chrome or invented product claims.
- **Request example:** a tonal panel distinguishes an external assistant's example request from Ditero's own interface.

## Do's and Don'ts

### Do
- Use real captures to demonstrate the app.
- Preserve light/dark parity, localized controls and RTL layout.
- Keep visible focus, reduced motion and native scrolling.
- Keep all seven illustration plates consistent in palette, material and visual weight.

### Don't
- Use decorative art as evidence of app behavior.
- Add text, vendor marks or fake interfaces to illustrations.
- Add shadows, gradients, autoplay or parallax.
- Expand mobile artwork into full-width banners.
