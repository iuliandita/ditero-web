---
name: Ditero
description: Shared lists. Your server.
colors:
  bg: "light-dark(#fcfcfb, #151a1d)"
  surface: "light-dark(#f2f4f3, #1d2528)"
  ink: "light-dark(#192022, #eef2f1)"
  muted: "light-dark(#475356, #b1bdbf)"
  line: "light-dark(#d9dfde, #344044)"
  brand: "light-dark(#0f6f64, #6fd0bf)"
  brand-hover: "light-dark(#0b564d, #92e0d2)"
  on-brand: "light-dark(#ffffff, #0d1a18)"
  tint: "light-dark(#e9f2ef, #213330)"
  tint-muted: "light-dark(#315951, #b8d4cf)"
typography:
  display:
    fontFamily: "Schibsted Grotesk Variable, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.7rem, 1.4rem + 3.4vw, 3.75rem)"
    fontWeight: 650
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  headline:
    fontSize: "clamp(1.75rem, 1.3rem + 1.4vw, 2.5rem)"
    fontWeight: 650
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  title:
    fontSize: "1.2rem"
    fontWeight: 650
    lineHeight: 1.35
    letterSpacing: "-0.01em"
  lead:
    fontSize: "1.2rem"
    lineHeight: 1.55
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
  state: "5px"
  language-item: "6px"
  control: "8px"
  menu: "10px"
  panel: "12px"
  hero-capture: "14px"
spacing:
  gutter: "clamp(1.25rem, 3vw, 2.5rem)"
  action-gap: "0.3rem 1.4rem"
  proof-gap: "3rem"
  excerpt-gap: "2px"
  section-gap: "clamp(2rem, 6vw, 6rem)"
  feature-gap: "1.5rem clamp(2rem, 8vw, 8rem)"
  request-padding: "2rem 2.25rem"
  section: "clamp(3rem, 6vw, 5rem)"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.on-brand}"
    rounded: "{rounded.control}"
    padding: "0.65rem 1.25rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.brand-hover}"
    textColor: "{colors.on-brand}"
  text-link:
    textColor: "{colors.brand}"
    height: "44px"
  navigation:
    textColor: "{colors.ink}"
    height: "44px"
  state:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.tint-muted}"
    rounded: "{rounded.state}"
    padding: "0.15rem 0.5rem"
  feature-summary:
    textColor: "{colors.ink}"
    height: "96px"
    padding: "1rem 0.5rem"
  feature-summary-mobile:
    textColor: "{colors.ink}"
    height: "76px"
    padding: "0.75rem 0.5rem"
  request:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "{spacing.request-padding}"
  capture:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.panel}"
  public-client:
    textColor: "{colors.ink}"
    padding: "0.5rem 0"
---

# Design System: Ditero

## Overview

**Creative North Star: "Shared lists. Your server."**

Clear, approachable and polished, with the restraint of Todoist and Things. Near-white or charcoal surfaces, readable typography and one teal accent support real interface proof. Preserve the existing wordmark and app icon.

A quiet physical felt-paper surface supports the self-hosting band; the footer clipboard remains the only figurative felt artwork. These details add warmth without competing with the app. One system serves English, German, Spanish, French, Romanian and Arabic, including RTL, in light and dark themes.

**Key Characteristics:**
- Real desktop and mobile app captures lead the visual hierarchy.
- Neutral surfaces, teal actions and balanced interface excerpts.
- Native disclosures reveal feature and platform detail.
- A quiet material surface and small footer signature, six locales and equal light/dark coverage.

## Colors

The CSS `light-dark()` values in the frontmatter are normative: light value first, dark value second. System preference is the default; an explicit theme selection overrides it.

### Primary

- **Ditero Teal:** primary actions, links, disclosure chevrons, bullets, focus, selection and browser accents. The hover token deepens teal in light mode and lightens it in dark mode.
- **Text On Teal:** readable primary-action text in either theme.

### Neutral

- **Near-White Page / Cool Charcoal:** the main page and menu backgrounds.
- **Pale Panel / Dark Slate Panel:** the assistant example, self-hosting band and screenshot fallback.
- **Primary Ink / Muted Ink:** headings and controls / explanatory text and notes.
- **Hairline:** disclosure separators, menus, plan rows and the footer divider.
- **Teal Tint / Tint Ink:** compact platform-state labels.

**The Small Signature Rule.** Keep figurative felt artwork in the footer and physical material texture quiet in the self-hosting band; leave interface proof free of decorative tiles.

## Typography

**Display and Body Font:** Schibsted Grotesk Variable, self-hosted, with system fallbacks.
**Arabic Font:** Noto Sans Arabic Variable, with Schibsted Grotesk and system fallbacks.

The same approachable grotesk serves headings and body copy. Headings use medium-heavy weight and modest tight tracking; explanatory text stays calm and legible.

### Hierarchy

- **Display:** hero h1; use the frontmatter's fluid scale with natural desktop wrapping and a two-line phone treatment.
- **Headline:** section h2; compact enough to sit beside interface evidence.
- **Title:** h3 and content group labels.
- **Lead:** hero and document introductions in muted ink.
- **Body:** paragraphs, with a maximum reading measure of 66ch.
- **Small:** notes and footer copy.

Arabic body copy uses more line space. Arabic headings have zero tracking and a 1.4 line height. Above 1100px the Arabic hero uses a 3.2rem heading. At the phone breakpoint the hero heading uses `clamp(2.8rem, 10vw, 3.5rem)`. Allow translated text to wrap without clipping.

## Layout

The page wrap is at most 68.75rem (1100px) with fluid gutters; document pages use 44rem. A shared fluid section spacing keeps the page rhythm calm. The homepage proceeds from hero to sharing, recurrence and dashboard proof, assistant example, features, client access, self-hosting and support.

The desktop and tablet hero centers its heading, introduction, actions and metadata above the capture. The lead is capped at 36rem. Desktop hero padding is 2rem above and 4rem below, with 1rem between the heading tab and text and 2.25rem above the capture. Platform text and a linked release version sit on the same metadata row as a quiet underlined assistant link, with a small logical divider above 700px. At 1180px and above, the hero shows the native 1100x500 sidebar-inclusive crop, capped at 1100px. Between 701px and 1179px it shows the 820x510 main-pane crop, capped at 820px. Neither crop is enlarged beyond its native width.

Sharing and recurrence form a 57.875rem (926px) desktop band with a 3rem gap and two columns, each capped at 439px, with copy above its framed interface proof. Shared subgrid header tracks align the captures when supported, while ordinary grid rows provide the fallback. Context strips sit above their detail excerpts with a 2px separator. The dashboard spans the next full-width row, with top-aligned copy and no copy offset beside a native 572x515 three-panel crop, capped at 572px. Captures retain their native proportions without added image padding or enlargement. At 861px and above, subgrid support adds 1.5rem of dashboard separation beyond the proof grid gap. The proof columns stack by 860px. From 701px through 860px, each complete sharing or recurrence section is capped at 439px and centered, while the complete dashboard section is capped at 572px and centered. The dashboard also stacks from 861px through 1000px to retain its native width.

The feature heading sits above two independent disclosure columns, containing four groups each. The eight groups contain exactly 37 features: eight first-item summary previews and 29 expanded items, each shown once. Each column flows independently when a group opens. The client section heading and introduction stack above the two client columns. The assistant uses 5:6 columns, with a bordered example panel beside its copy. Its guide and details disclosure share one flexible action row when closed. The opened details disclosure occupies the full copy width, while its summary and focus outline remain content-width. One plain source sentence stays visible without a duplicate state badge; the shared source-run and download qualification appears in each CLI, TUI and MCP client disclosure. Client stacks, self-hosting and support use equal columns. Public and source-build client stacks flow independently.

At 1100px and below, section navigation becomes a native menu disclosure and the language name hides. At 700px and below, the hero copy aligns to the logical start and the mobile hero uses a 390x844 source in a 390x490 frame, capped at 24rem. Sharing, recurrence and dashboard switch to genuine mobile assets. Sharing, recurrence and dashboard media align to the logical start inside the shared gutters and are capped at 390px; the mobile dashboard is 390x640. The hero metadata uses a 0.4rem row gap. Features, clients, assistant, self-hosting and support stack. Feature columns form one continuous disclosure list in source order, without a duplicate hairline where they join. Feature items use one column, and assistant plan rows place detail below the title. At 480px and below, the mobile menu panel aligns to the header.

Use logical padding, margins and inset properties for RTL. The assistant source qualification is a single paragraph in the copy column. English screenshot pixels retain their physical orientation. Use already-cropped pixels directly at their native aspect ratios. Keep asset dimensions and displayed aspect ratios aligned, and verify new image dimensions before documenting them. Captures must show equivalent content, visible ordering and legibility in both themes; CSS theme selection alone does not establish asset qualification.

## Elevation & Depth

Neutral tonal surfaces and 1px hairlines carry most structure. Hero, framed proof excerpt pairs, dashboard and navigation menus use ambient shadows. Each proof pair shares a neutral surface, rounded clipping and an inset hairline outline, with native image proportions and no fixed-height frame. Ordinary panels, controls and the small footer artwork remain flat. The self-hosting surface uses a quiet generated physical felt-paper image; there are no gradients or procedural grain.

### Shadow Vocabulary

- **Capture:** `0 18px 45px -20px light-dark(rgb(24 48 43 / 0.27), rgb(0 0 0 / 0.65))`.
- **Hero capture:** `0 24px 60px -25px light-dark(rgb(24 48 43 / 0.3), rgb(0 0 0 / 0.7))`.

**The Interface Proof Rule.** Use real app captures for product evidence, with equivalent content and legibility in both themes.

Motion is state-only: a 160ms button fill change, 180ms disclosure chevron turn and, where supported, a 220ms native disclosure expansion. All use the existing ease curve. Reduced motion removes transitions and smooth scrolling; disclosure behavior remains native without animation support.

## Shapes

Small rounded corners keep the system practical: compact state labels, menu items, controls, panels and screenshots use the frontmatter scale. The hero screenshot has slightly larger corners than other captures. Sharing and recurrence excerpt pairs share a 12px rounded frame and a 1px inset outline. Disclosure rows are separated by hairlines rather than card borders. Focus is a 2px teal outline with a 4px offset; feature-summary focus uses a zero offset.

The felt clipboard mark appears only in the footer, displayed at 48px with 8px corners. Artwork stays direction-neutral and secondary to real text. Keep the established material and palette consistent.

## Components

- **Primary action:** filled teal link, weight 600, minimum 48px height. Hover uses the brand-hover token; secondary actions are teal text links with minimum 44px targets. The hero platform phrase and linked release version follow natural inline text flow, with the version kept together. The version and release URL come from the shared constant; locale catalogs supply only the Alpha label. A short underlined assistant teaser uses muted ink and regular weight, linking to its example in the aligned metadata row. A 40x3px teal tab precedes the heading.
- **Navigation:** plain text links with 44px targets; native language and mobile-menu disclosures; theme button with inline SVG, localized label and pressed state. Menus use a page-colored surface, hairline border and compact corners. The existing dark wordmark uses a brightness(1.45) filter for legibility.
- **Capture:** real WebP screenshots with translated descriptions and no visible caption. The hero renders a native responsive picture with an eager, high-priority image so the browser can discover it immediately. It follows system theme without scripts and starts with a neutral translated hero description for either responsive source. JavaScript reconciles a saved theme override and updates the device-specific translated description; CSS selects the matching full-image link. A saved theme that differs from the system may request a second small image. Other captures use paired lazy images with CSS theme selection.
- **Hero proof:** genuine English Standard-density 1100x800 originals use the same live example, task identities and order across themes. At 1180px and above a contiguous 1100x500 crop retains the sidebar, list title, quick-add and complete visible task rows. At middle widths the contiguous 820x510 main-pane excerpt begins at x=280. Both keep the app's visible Open quick add control and original keyboard hint, and both are capped at native width. The full-image link opens the matching 1100x800 PNG original. The mobile hero uses a genuine 390x844 source with the same six-task scenario in both themes, displayed in a 390x490 frame; its image link opens the matching full PNG original.
- **Proof excerpts:** desktop sharing separates a 439x92 task-context strip from its 439x462 task-detail crop; recurrence separates a 439x92 context strip from its 439x462 settings crop, including the whole Skip control and quiet-hours controls. Mobile sharing uses a 390x100 context crop and genuine 390x524 detail crop; mobile recurrence uses a 390x100 context crop and 390x288 controls crop. Every excerpt pair has a 2px separator inside one rounded, outlined and shadowed frame; do not stitch omitted interface regions together. Desktop pairs are capped at 439px, mobile pairs at 390px, without enlargement. One link surrounds each device/theme group and opens its full capture. Context strips are decorative to assistive technology; the detail or settings crop carries the translated description.
- **Dashboard proof:** the desktop crop is a contiguous native 572x515 excerpt with priorities, habits and focus panels, paired with top-aligned copy without a padding offset. Light and dark captures use the same populated fixture. The genuine mobile crop (390x640) shows the complete priorities panel and links to its 390x844 full original. Use the corresponding full device/theme capture for its image link.
- **Feature disclosure:** plain text native `details` and `summary`, with category title, a muted preview from the first existing feature item, and chevron. Summaries have a minimum height of 96px with 1rem block padding on desktop, and 76px with 0.75rem block padding at 700px and below. Eight groups balance four per independent column; all 37 features appear exactly once as eight summary previews and 29 expanded items. One feature group opens at a time through the shared native name across both independent columns. Expanded content shows the remaining feature items and documentation link, with 0.5rem inline padding aligned to the summary. The preview item is not repeated in the expanded list. Keyboard and no-script behavior remain native.
- **Client rows:** public and source-build clients use two independent stacks with the same anatomy. The client name and 0.85rem state label form the native disclosure summary, with its chevron grouped immediately after the name, before the state; the description expands below it. A separate setup, download or guide link stays visible beside the summary and aligns to the logical end of its action column. Compact localized Web names and Alpha state labels keep the summary short; browser installation and offline sync are explained in the expanded description. The CLI, TUI and MCP folds each include the same localized paragraph explaining that they run from source and have no standalone binaries in alpha downloads. Summaries use fit-content width capped at 100%, keeping their focus outline close to their content. Each action's accessible name combines its visible localized label and client name. CLI, TUI and MCP use localized Run from source badges. A guarded subgrid aligns action columns within each stack. iOS uses a semantic span for its name and keeps its natural row height without a link or description fold.
- **Request example:** neutral panel with an inset hairline border, 2rem 2.25rem desktop padding, a 1.25rem request at weight 500, 0.95rem labels and plan details, and compact, divider-separated plan rows; mobile rows consistently stack title then detail. The adjacent source qualification is one visible sentence, without a duplicate badge. The adjacent native details fold has a contextual accessible name and shares a flexible row with its documentation link when closed. Opening the fold gives its content the full copy width; its summary and focus outline stay content-width. Keep the short source note visible and the shared source-run and download note inside the CLI, TUI and MCP client folds. This is an illustrative external-assistant request, distinct from an app screenshot.
- **Self-hosting steps:** three numbered rows with outlined circles on the neutral surface band, beside setup actions and an encryption note. A generated physical felt-paper WebP texture repeats at 40rem, with 0.18 opacity in light mode and 0.04 in dark mode. Keep it quiet behind readable text; use the image asset, not procedural grain. A single dashed top seam with a 40px teal tab belongs to this band. Do not repeat seams on section dividers, screenshots or controls.
- **Footer mark:** small felt clipboard beside the Ditero name as real text.

## Do's and Don'ts

### Do:

- **Do** lead with real app captures and preserve their meaningful content.
- **Do** use neutral surfaces and keep felt artwork small.
- **Do** preserve light/dark parity, translated descriptions and RTL layout.
- **Do** keep native disclosures, visible focus and reduced-motion support.

### Don't:

- **Don't** use decorative art as evidence of app behavior.
- **Don't** add a felt stage, feature carousel or oversized illustration panels.
- **Don't** add text, vendor marks or fake interfaces to felt artwork.
- **Don't** add gradients, autoplay, parallax or shadows to ordinary panels and buttons.
