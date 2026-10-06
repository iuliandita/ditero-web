---
name: Ditero
description: Shared lists. Your server.
colors:
  bg: "light-dark(#fbfaf7, #151a1d)"
  surface: "light-dark(#f1efe8, #1d2528)"
  ink: "light-dark(#192022, #eef2f1)"
  muted: "light-dark(#475356, #b1bdbf)"
  line: "light-dark(#dcd8cd, #344044)"
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
    fontSize: "clamp(1.75rem, 1.2rem + 1.1vw, 2.25rem)"
    fontWeight: 620
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  proof:
    fontSize: "1.75rem"
    fontWeight: 620
    lineHeight: 1.15
  support:
    fontSize: "1.5rem"
    fontWeight: 620
    lineHeight: 1.15
  technical:
    fontFamily: "ui-monospace, SFMono-Regular, Consolas, monospace"
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
  feature-gap: "0.5rem 1.25rem"
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
    height: "80px"
    padding: "1rem 0.5rem"
  feature-summary-mobile:
    textColor: "{colors.ink}"
    height: "76px"
    padding: "0.75rem 0.5rem"
  button-secondary:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.brand}"
    rounded: "{rounded.control}"
    padding: "0 1.25rem"
    height: "44px"
  request:
    textColor: "{colors.ink}"
  capture:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.panel}"
  public-client:
    textColor: "{colors.ink}"
    padding: "0 1.25rem"
---

# Design System: Ditero

## Overview

**Creative North Star: "Shared lists. Your server."**

Clear, approachable and polished, with the restraint of Todoist and Things. Warm paper-colored light surfaces and charcoal-green dark surfaces support real interface proof. Preserve the existing wordmark and app icon.

Felt texture, its stitched seam and a small clipboard mark belong to the self-hosting band; the footer repeats the small mark. Everything above hosting is flat and proof-led. A quiet monospace cue identifies technical nouns. One system serves English, German, Spanish, French, Romanian and Arabic, including RTL, in light and dark themes.

**Key Characteristics:**
- Real desktop and mobile app captures lead the visual hierarchy.
- Warm light neutrals, existing dark neutrals and restrained teal actions.
- Native disclosures reveal feature and platform detail.
- One textured hosting band, small footer signature and monospace technical nouns.

## Colors

The CSS `light-dark()` values in the frontmatter are normative: light value first, dark value second. System preference is the default; explicit theme selection overrides it. Only the light page, surface and hairline neutrals change temperature; dark tokens retain their existing values.

### Primary

- **Ditero Teal:** actions, links, disclosure state, focus and selection. Hover deepens teal in light mode and lightens it in dark mode.
- **Text On Teal:** primary-action text in either theme.

### Neutral

- **Warm Page / Cool Charcoal:** page and menu backgrounds.
- **Warm Surface / Dark Slate:** tour band, flat feature panels, hosting band and capture fallback.
- **Primary Ink / Muted Ink:** headings and controls / explanatory text and notes.
- **Hairline:** panel outlines, menu borders, client separators and footer divider.
- **Teal Tint / Tint Ink:** compact platform-state labels.

**The Small Signature Rule.** Keep felt texture, the dashed seam and its 40px teal tab in hosting only. The clipboard mark appears at 32px in hosting and 48px in the footer. Feature panels have solid hairlines. The assistant is unboxed. Neither uses texture, tabs or dashed outlines. Do not decorate the hero heading or app proof.

## Typography

**Display and Body Font:** Schibsted Grotesk Variable, self-hosted, with system fallbacks.
**Arabic Font:** Noto Sans Arabic Variable, with Schibsted Grotesk and system fallbacks.
**Technical Font:** ui-monospace, SFMono-Regular, Consolas, monospace.

An approachable grotesk carries the page. The hero is the strongest heading; proof captions and support headings are quieter. Monospace marks the release version, CLI, TUI, API, MCP, Docker Compose and Helm.

### Hierarchy

- **Display:** hero h1 uses the frontmatter fluid scale at weight 650; natural desktop wrapping, with two headline lines on phones.
- **Headline:** features, assistant, access and hosting h2 use the fluid scale capped at 2.25rem, weight 620.
- **Proof:** sharing, recurrence and dashboard h2 use 1.75rem at weight 620, with 0.5rem to the copy.
- **Support:** h2 uses 1.5rem at weight 620.
- **Title:** h3 and content group labels use 1.2rem at weight 650.
- **Lead:** hero introduction is 1.25rem on desktop and 1.15rem on phones; ordinary document leads use 1.2rem.
- **Body:** 1.0625rem with a maximum reading measure of 66ch.
- **Small:** notes and footer use 0.9rem; the release version uses 0.85rem monospace.

Arabic body uses 1.85 line height. Arabic headings have zero tracking and 1.4 line height; above 1100px the Arabic hero uses 3.2rem. The phone hero uses `clamp(2.8rem, 10vw, 3.5rem)`. Let translations wrap without clipping.

## Layout

The page wrap is at most 57.875rem (926px) with fluid gutters; document pages use 44rem. Shared fluid section spacing preserves the order: hero, product tour (sharing, recurrence, dashboard), assistant, features, apps and tools, hosting, support.

The hero centers h1, a balanced lead capped at 34rem, actions, one metadata row and the capture. It uses 2.5rem top padding, a 2.5rem capture gap and 4rem bottom padding. The platform text includes the source-run CLI, TUI and MCP qualification, with isolated technical names. It and the single underlined Alpha-version link form a centered wrapping row with a neutral middot separator. The version alone is monospace. On phones copy and metadata align to the logical start and the hero bottom gap is 3rem.

The tour is one full-bleed neutral band. The hero section and its media span the page width; the copy has its own reading wrap and the capture owns its width cap. A `.hero-media::before` surface starts halfway down the actual capture and extends through the hero bottom gap. Its physical left and right edges follow the media container, including on RTL pages, without scrollbar-sensitive viewport widths. The `.tour` wrapper continues the surface through its section bottom padding. That interior band padding and the following assistant top padding are separate intentional spaces on either side of the color boundary. Do not derive this overlap from viewport-height calculations or image-ratio variables.

Sharing and recurrence form two columns above 700px, capped at 439px, with a 3rem gap and shared header tracks when subgrid is supported. The dashboard is the next full-width row. Above 700px its heading, copy and capture form one centered stack. Phones retain logical-start alignment. The dashboard uses a genuine 604x562 desktop crop with native margins around five priorities, three habit streaks and two focus sessions, displayed at no more than 572px wide. Its 358x504 mobile crop follows the complete priorities card border and is capped at native width. The row keeps a 3rem top margin.

Features have a two-column header above 700px: heading and introduction at the logical start, an outlined Documentation action at the logical end on the introduction row, aligned to its last baseline with bottom alignment as fallback. On phones the action follows the introduction. DOM and focus order are heading, introduction, documentation link, then the eight summaries. With `::details-content` support above 900px, the eight exclusive native disclosures form a 4x2 index and the open flat panel spans the width below, with 2rem 2.25rem padding, repeated heading and two item columns. Below 901px, or without support, the same markup forms one accordion with 1.5rem panel padding and one item column. All 37 items remain available; every group starts closed so the eight categories can be scanned before opening details.

The assistant is an unboxed editorial split on the page background. Above 900px a 5:6 grid with a 4rem gap places heading and introduction at the logical start, guide and source qualification below, and a stacked request and plan at the logical end. The example caption starts 0.5rem below the heading edge; plan titles and details share a wrapping baseline row. At 900px and below it follows DOM order: heading, example, links, with 2rem gaps. Its native fold spans the copy column and keeps a content-width summary. There is no card fill, border, radius or inset.

Apps and tools are open strips with four columns above 860px and two from 701px through 860px. At 700px and below both use the same compact single-row pattern with 64px minimum summaries and horizontal hairlines. Name, chevron and state stay at the logical start, persistent action at the logical end of row one, and open description spans row two when native content flattening is supported. On larger screens the opened description precedes its persistent action, sharing rows across each strip. Native fallback follows the same summary, description, action order. A top hairline and 1rem inset anchor each larger strip; row subgrid aligns translated content. iOS keeps its unavailable state without an action or fold. Source-run badges remain visible. The group heading and a concise binaries-only sentence share a wrapping baseline row. The existing early-software note lives in the Web disclosure.

Hosting uses equal columns with a 4rem gap above the phone breakpoint. Its actions deliberately stack at every width. Copy order is mark, heading, paragraph, primary action, documentation link. Its three numbered steps occupy one page-colored card with solid hairlines between rows; the muted encryption note follows without another divider. Support uses equal columns above 700px. Both stack on phones.

At 1100px and below, section navigation becomes a native menu disclosure and the language name hides. From 481px through 700px the reading wrap is capped at 34rem. The start-aligned mobile lead uses its available reading width and text-wrap: pretty. The mobile hero uses the genuine 390x844 source in a 390x470 frame capped at the native 390px. From 481px through 700px the frame centers inside the reading wrap. Mobile proof media align to the logical start and retain 390px caps. Below 481px hero and proof media extend 12px past each text gutter; this does not make the primary action full width.

Use logical padding, margins and insets for content. Keep isolated Latin technical nouns in `bdi`, and keep English screenshot pixels physically oriented. Use native aspect ratios without enlargement, retouching or noncontiguous composites. Verify new image dimensions before changing asset documentation. Theme selection alone does not qualify image content parity.

## Elevation & Depth

Tonal surfaces and 1px hairlines carry structure. The hero has an ambient shadow; framed tour proofs use a softer shadow. Menus retain the existing elevation. Features, assistant, hosting steps and controls stay flat. Only hosting uses the physical felt-paper image, repeated at 40rem with multiply blending: opacity 0.16 in light mode and 0.08 in dark mode. Preserve readable text over that texture.

### Shadow Vocabulary

- **Menu:** `0 18px 45px -20px light-dark(rgb(24 48 43 / 0.27), rgb(0 0 0 / 0.65))`.
- **Tour capture:** `0 10px 30px -18px light-dark(rgb(24 48 43 / 0.27), rgb(0 0 0 / 0.65))`.
- **Hero capture:** `0 24px 60px -25px light-dark(rgb(24 48 43 / 0.3), rgb(0 0 0 / 0.7))`.

**The Interface Proof Rule.** Use real app captures with equivalent content and legibility in both themes.

Motion is state-only: 160ms button fill changes and 180ms chevron turns use the existing ease curve. Hover styles require `hover: hover`. Reduced motion removes transitions and smooth scrolling; disclosure behavior stays native.

## Shapes

Use the frontmatter radius scale for state labels, menu items, controls, panels and screenshots. Hero capture corners are 14px; other capture frames and flat panels are 12px. Feature summaries have a quiet top hairline and a teal 2px chevron. Rotation and the teal top hairline mark the open state. The accordion has a closing hairline; the 4x2 index uses segmented top lines. There is no tab on the panel. Client cells use logical vertical separators on larger screens and horizontal separators on phones. Focus is a 2px teal outline with a 4px offset; feature summaries use zero offset.

Hosting alone has a dashed top seam and 40x3px teal tab. Its decorative clipboard is 32px; the footer mark is 48px with 8px corners. Artwork stays direction-neutral. Dark hosting and footer marks use the wordmark's brightness(1.45) lift. Docker Compose and Helm use small inline monospace chips with a page-colored fill, 1px hairline and 5px radius. Each chip, attached Arabic conjunction and trailing punctuation stays in one nowrap unit.

## Components

- **Primary action:** teal, weight 600, minimum 48px height; brand-hover fill on hover. Text actions have 44px minimum targets. The features Documentation action is page-colored with a solid hairline, 8px radius and 1.25rem inline padding.
- **Release metadata:** one underlined link contains both Alpha and version. A 0.85rem monospace `bdi` isolates the version; the shared release constant owns its version and URL.
- **Navigation:** plain 44px text targets, native language and mobile-menu disclosures and an inline-SVG theme control with localized label and pressed state. Menus have page-colored fills, hairlines and compact corners. The dark wordmark retains its brightness filter.
- **Capture:** real WebP evidence with translated descriptions and no visible language caption. The hero uses an eager high-priority responsive picture; other images are lazy. CSS follows system theme, and script reconciles saved theme. The hero image is decorative because its single visible responsive/theme link supplies the translated capture description. Corresponding full native PNGs remain linked.
- **Hero proof:** the genuine Standard-density 1100x800 Board originals show the same six-task household fixture. Their contiguous 838x420 crop displays at no more than 820px. It includes Household priorities and populated P1/P2/P3 columns. The linked full original includes the excluded empty fourth column and Add task control. Mobile keeps the genuine 390x844 List source in a 390x470 frame.
- **Proof excerpts:** desktop sharing and recurrence pair a 439x92 context strip with a 439x470 detail/settings crop. Mobile sharing pairs 390x100 and 390x524; recurrence pairs 390x100 and 390x398. A 2px separator stays inside each outlined 12px frame. Context strips are decorative; detail crops carry translated descriptions. Never stitch omitted regions together.
- **Dashboard proof:** use the contiguous 604x562 crop from genuine 900x800 desktop originals with 16px native margins beyond the former crop, showing priorities, three habit streaks and two focus sessions. The 358x504 mobile crop from genuine 390x844 originals shows the complete priorities panel; habits and focus stay outside that crop. Both device/theme originals remain linked.
- **Feature disclosure:** eight native exclusive groups, all 37 items, 80px minimum summaries (76px on phones), neutral 4px item dots and one general documentation link in the header. Expanded panels use surface fill, solid hairline and 12px corners, with no shadow, texture or tabs.
- **Assistant split:** unboxed, on the page background. The 1.4rem/500 request has a 2px teal inline-start rule and 1rem padding. On phones its text is 1.2rem. Neutral 4px dots mark plan rows; there are no fake checkboxes, avatars or app rows. Guide and source qualification share a wrapping row, followed by the native fold.
- **Client strips:** preserve Alpha, experimental, source-run and unavailable states. Each action's accessible name includes its client name. Names and badges stack, desktop actions follow expanded descriptions, and both mobile strips share the 64px row pattern. Tool names are isolated monospace.
- **Hosting steps:** one page-colored, hairline-bordered 12px card; three rows retain numbered outlined circles and separators. The encryption note is 0.95rem muted. Keep felt behind hosting copy only, with one stitched seam and small mark.
- **Footer:** small felt clipboard beside Ditero as real text, with ordinary text links and a solid divider.

## Do's and Don'ts

### Do:

- **Do** lead with real app captures and preserve meaningful content.
- **Do** use warm light neutrals and retain the existing dark palette.
- **Do** keep felt in hosting and the small footer mark.
- **Do** preserve theme parity, translated descriptions, RTL, native disclosures and visible focus.
- **Do** keep the documentation action before feature summaries in DOM order.

### Don't:

- **Don't** add texture, teal tabs or dashed outlines to features or the assistant.
- **Don't** use decorative art as evidence of behavior or invent richer capture content.
- **Don't** enlarge or retouch screenshots, add fake interfaces or vendor marks.
- **Don't** add gradients, autoplay, parallax or shadows to ordinary panels and buttons.
- **Don't** make the tour overlap depend on a viewport-height calculation.
