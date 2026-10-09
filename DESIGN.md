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
    fontSize: "clamp(1.625rem, 1.2rem + 0.8vw, 2rem)"
    fontWeight: 620
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  tour-choice:
    fontSize: "1.2rem"
    fontWeight: 650
    lineHeight: 1.35
    letterSpacing: "-0.01em"
  tour-description:
    fontSize: "1rem"
    lineHeight: 1.6
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
  tour-gap: "3rem"
  excerpt-gap: "1rem"
  section-gap: "clamp(2rem, 6vw, 6rem)"
  feature-gap: "0 1.25rem"
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

Felt texture is confined to the backing mat around the self-hosting steps. The small clipboard mark appears only in the footer. App views lead. A small felt illustration may accompany an expanded feature detail; the closed feature index stays plain text. A quiet monospace cue identifies technical nouns. One system serves English, German, Spanish, French, Romanian and Arabic, including RTL, in light and dark themes.

**Key Characteristics:**
- Real desktop and mobile app captures lead the visual hierarchy.
- Warm light neutrals, existing dark neutrals and restrained teal actions.
- Native disclosures reveal feature and platform detail.
- One tactile hosting mat, small footer signature and monospace technical nouns.

## Colors

The CSS `light-dark()` values in the frontmatter are normative: light value first, dark value second. System preference is the default; explicit theme selection overrides it. Only the light page, surface and hairline neutrals change temperature; dark tokens retain their existing values.

The color system requires browsers supporting `light-dark()`. Layout enhancements using `::details-content` and subgrid have accordion fallbacks; those fallbacks do not imply support for engines without the color primitives.

### Primary

- **Ditero Teal:** actions, links, disclosure state, focus and selection. Hover deepens teal in light mode and lightens it in dark mode.
- **Text On Teal:** primary-action text in either theme.

### Neutral

- **Warm Page / Cool Charcoal:** page and menu backgrounds.
- **Warm Surface / Dark Slate:** tour band, flat feature panels, hosting band and capture fallback.
- **Primary Ink / Muted Ink:** headings and controls / explanatory text and notes.
- **Hairline:** panel outlines, menu borders, client separators and footer divider.
- **Teal Tint / Tint Ink:** compact platform-state labels.

**The Small Signature Rule.** Keep felt texture on the hosting steps backing, as a contained material backing, without a page-wide decorative seam. Running copy stays on untextured surfaces. The clipboard mark appears only in the footer at 48px with 8px corners. Feature panels have solid hairlines and one decorative felt illustration when open, 64px in a 72px paper mount on desktop or 48px in a 56px mount on smaller screens, hidden at 360px and below. Use fresh felt-paper originals on a deep-teal ground without filters, motion or added shadows; history uses its own clock and returning-arrow illustration. The assistant is unboxed. Neither uses textured surfaces, tabs or dashed outlines. Do not decorate the hero heading or app proof.

## Typography

**Display and Body Font:** Schibsted Grotesk Variable, self-hosted, with system fallbacks.
**Arabic Font:** Noto Sans Arabic Variable, with Schibsted Grotesk and system fallbacks.
**Technical Font:** ui-monospace, SFMono-Regular, Consolas, monospace.

An approachable grotesk carries the page. The hero is the strongest heading; tour choices and support headings are quieter. Monospace marks the release version, standalone CLI/TUI/API/MCP labels, Docker Compose and Helm. Recognized Latin terms inside feature prose retain the surrounding font.

### Hierarchy

- **Display:** hero h1 uses the frontmatter fluid scale at weight 650; natural desktop wrapping, with two to three headline lines on phones, depending on locale.
- **Headline:** tour, assistant, features, access and hosting h2 share the frontmatter scale capped at 2rem, weight 620. The hero remains the only display-size heading.
- **Tour choice:** sharing, recurrence and dashboard labels use the 1.2rem title scale at weight 650, with a 0.5rem gap before 1rem explanatory copy. The localized tour h2 is visible; the fieldset legend is screen-reader-only.
- **Support:** h2 uses 1.5rem at weight 620.
- **Title:** h3 and content group labels use 1.2rem at weight 650.
- **Lead:** hero introduction is 1.25rem on desktop and 1.15rem on phones; ordinary document leads use 1.2rem.
- **Body:** 1.0625rem with a maximum reading measure of 66ch.
- **Small:** notes, footer and the monospace release version use 0.9rem; hero platform text uses 0.95rem.

Arabic body uses 1.85 line height. Arabic headings have zero tracking and 1.4 line height; above 1100px the Arabic hero uses 3.2rem. The phone hero uses `clamp(2.8rem, 10vw, 3.5rem)`. Let translations wrap without clipping.

## Layout

The page wrap is at most 57.875rem (926px) with fluid gutters; document pages use 44rem. Shared fluid section spacing preserves the order: hero, product tour (sharing, recurrence, dashboard), assistant, features, apps and tools, hosting, support.

The hero centers h1, a balanced lead capped at 34rem, actions, one metadata row and the capture. It uses 2.5rem top padding, a 2.5rem capture gap and 4rem bottom padding. The platform text includes the source-run CLI, TUI and MCP qualification, with isolated technical names. It and the single underlined Alpha-version link form a centered wrapping row with a 1rem column gap and no separator. The version alone is monospace. Below 481px copy and metadata align to the logical start; the hero bottom gap is 3rem through 700px.

The hero section and its media span the page width; the copy has its own reading wrap and the capture owns its width cap. A `.hero-media::before` surface starts halfway down the actual capture and stops at the hero bottom. Its physical left and right edges follow the media container, including on RTL pages, without scrollbar-sensitive viewport widths. The tour follows the hero on the same neutral surface, with 2rem top padding and a visible heading above its choices. The assistant follows the tour on the page background, with section padding above and no bottom padding. Do not derive the hero surface from viewport-height calculations or image-ratio variables.

The tour header places the visible Explore heading beside a native device fieldset whose localized View legend is screen-reader-only. Visible Desktop and Phone labels select the existing device captures without JavaScript. Desktop is selected initially. At 700px and below, this selector is hidden and responsive phone captures remain automatic. Above 700px, Phone reveals the 390px sharing and recurrence proofs and compact dashboard even on desktop screens. Its visually hidden inputs show focus on adjacent 44px labels; the selected label uses page fill and teal text. A separate native radio group has three permanently visible titles and radios: sharing, recurrence and dashboard. Sharing is selected initially. Above 700px, all descriptions remain visible; at 700px and below, only the selected description appears. Each 16px radio retains native input semantics and uses `appearance: none` with a 1.5px muted circle, a teal checked dot and focus shown only on its label. Forced-colors mode restores native appearance. It sits 1rem inside the label's logical-start edge, aligned with its title's first line, with label text inset 3rem. At 61rem and above, the story list and media use equal columns with a 3rem gap (439px each at the maximum wrap). Choices and panels share the top origin; all proofs align to the logical start. Sharing and recurrence retain their 439px caps; the dashboard fits the same media column. This keeps the selected proof anchored without a wide empty trailing strip. Desktop panels share the same grid origin; inactive panels use `display: none`. The selected proof and the choices determine the stage height. User selection may move later sections, while the controls and proof keep their top origin; do not reserve empty space for a taller hidden proof. Below 61rem, all three choices stack before the selected media panel with a 1.5rem gap. Inactive panels use `display: none`, so the selected capture determines the panel height without reserving space for the tallest example.

Sharing and recurrence retain their original 439px desktop excerpts and 390px mobile caps. Each context strip and detail crop has its own 12px frame, hairline and soft shadow, separated by a 1rem gap. The dashboard uses a genuine 438x432 desktop crop around the complete five-priority card, capped at its native 438px width. The native Large panel preset fits the card in a 980x800 desktop viewport; the crop retains four pixels of genuine surrounding margin. Its 390x536 mobile crop adds 16px genuine native margins around the complete priorities card and is capped at native width. All originals and their full-size links remain distinct.

All eight feature details are closed on initial load; selecting a summary reveals one group at a time. Features have a two-column header above 700px: heading and introduction separated by 0.75rem at the logical start, an outlined Documentation action at the logical end on the introduction row, aligned to its last baseline with bottom alignment as fallback. On phones the action follows the introduction. DOM and focus order are heading, introduction, documentation link, then the eight summaries. With both `::details-content` and row-subgrid support above 900px, the eight exclusive native disclosures use four columns and six content-sized tracks: title, preview and panel for each group row. The open flat panel spans the width immediately after its selected summary row, with no top margin or top corner rounding, 0.75rem bottom margin, 1.75rem 2rem padding, two item columns and a separate 72px trailing artwork-mount column. Short groups use one item list capped at 32rem and 1rem block padding; their artwork stays at the same logical-end anchor as longer groups. The native summary is the sole group title; the open summary shares the panel surface color, while teal text and its top hairline mark selection. Desktop summaries span their title and preview tracks through subgrid, stretch to their row height and have 0.75rem inline padding. Titles and chevrons align at the top; previews use `text-wrap: pretty` and share their subgrid track without a fixed title-height slot. First-row panels own track three; second-row panels own track six, so opening a group does not require a `:has()` rule to move the other summary row. The grid has no row gap. Below 901px, or without support, the same markup forms one accordion with 1.5rem panel padding. From 601px, long groups retain two item columns and a separate 56px artwork-mount column; short groups use one item column. Item lists use CSS columns rather than shared grid rows: two from 601px, one for short groups and phones. Items wrap independently, avoid column breaks and have 0.65rem bottom spacing. All 35 distinct items remain available. The accordion fallback at every width shares its selected summary surface and inline hairlines; its panel joins without a top border or top corner rounding. Through 600px, the 56px mount around 48px artwork floats at the logical end of a flow-root panel. Initial text wraps around it; later bullets recover the full width. No item has a reserved minimum height. At 360px and below the art hides and the list takes the full panel width.

The assistant is unboxed on the page background, with three rows spanning the full page wrap: heading and introduction, example, then links. Above 900px the example uses equal columns with a fluid gap capped at 7rem, separating the request from its plan. Below 901px the request and plan stack with a 2rem gap. The example labels share a 56px row; the plan label has a small felt-paper robot on the feature pictograms' opaque teal ground at its logical end, displayed at 56px with 8px corners. Plan titles use 1rem at weight 600 with pretty wrapping; titles and muted details occupy separate lines at every width; hairlines separate the plan items. The heading and introduction have a 40rem reading cap, and the rows have 1rem gaps. The source note belongs to the guide action group. Above 900px that group occupies a max-content column beside the native fold; below 901px they stack. The fold summary stays anchored when opened, with revealed content retaining its reading cap. There is no card fill, border, radius or inset.

Apps and tools sit on a full-width quiet surface with an inner page wrap, with four columns above 860px and two from 701px through 860px. At 700px and below both use the same compact single-row pattern with 64px minimum summaries and horizontal hairlines. Name, chevron and state stay at the logical start, persistent action at the logical end of row one, and open description spans row two when native content flattening is supported. On larger screens the opened description precedes its persistent action in an independent cell grid, so closed neighbors keep their actions directly below their badges. Native fallback follows the same summary, description, action order. A top hairline and 1rem inset anchor each larger strip. Group labels use the 1.2rem title scale, and the introduction balances within 40rem, using `text-wrap: pretty` through 700px. iOS keeps its unavailable state without an action or fold. Source-run badges remain visible; Apps status labels use page-colored fills and hairline borders against the section surface. The group heading and a concise binaries-only sentence share a wrapping baseline row. Web details use one concise sentence about browser access and offline synchronization. Mobile interface proof belongs in the tour device selector rather than beside the client strips.

Hosting uses the page background token and equal columns with a 4rem gap above the phone breakpoint. Its actions deliberately stack at every width. Copy order is mark, heading, paragraph, primary action, documentation link. Its three numbered steps occupy one page-colored card with solid hairlines between rows; the muted encryption note follows without another divider. Hosting has 3rem bottom padding on larger screens and 1.5rem on phones. Support follows with 1.5rem top padding and 3rem bottom padding. Its heading and 48ch prose occupy the logical-start column, with the two actions stacked at the logical end. On phones the copy and wrapping action row stack with a 0.75rem gap.

At 1100px and below, section navigation becomes a native menu disclosure and the language name hides. From 481px through 700px the reading wrap is capped at 34rem, and hero copy, actions, metadata and media are centered. The mobile lead uses its available reading width and `text-wrap: pretty`. The mobile hero uses the genuine 390x844 source in a 390x470 frame capped at the native 390px. Mobile tour panels retain 390px media caps and center the selected capture, whose height determines the panel height. Below 481px hero and proof media extend 12px past each text gutter; this does not make the primary action full width.

Use logical padding, margins and insets for content. Feature titles, previews and item text isolate recognized Latin terms with plain `<bdi dir="ltr">` inside nowrap runs, including an attached Arabic conjunction and punctuation; do not turn these terms into chips. Keep end-to-end encryption wording and German Web-App in nowrap runs. Keep other isolated Latin technical nouns in `bdi`, and keep English screenshot pixels physically oriented. Use native aspect ratios without enlargement, retouching or noncontiguous composites. Verify new image dimensions before changing asset documentation. Theme selection alone does not qualify image content parity.

## Elevation & Depth

Tonal surfaces and 1px hairlines carry structure. The hero has an ambient shadow; framed tour proofs use a softer shadow. Menus retain the existing elevation. Features, assistant, hosting steps and controls stay flat. Only the backing around the hosting steps uses the physical felt-paper image, repeated at 40rem. Light mode uses multiply blending at 0.6 opacity; dark mode uses soft-light at 0.65 so the grain remains visible without lifting the whole page. The opaque steps card and adjacent running copy keep text off the texture.

### Shadow Vocabulary

- **Menu:** `0 18px 45px -20px light-dark(rgb(24 48 43 / 0.27), rgb(0 0 0 / 0.65))`.
- **Tour capture:** `0 10px 30px -18px light-dark(rgb(24 48 43 / 0.27), rgb(0 0 0 / 0.65))`.
- **Hero capture:** `0 24px 60px -25px light-dark(rgb(24 48 43 / 0.3), rgb(0 0 0 / 0.7))`.

**The Interface Proof Rule.** Use real app captures with equivalent content and legibility in both themes. Native theme styling may differ: task titles have an unfocused dark input fill and transparent light fill; preserve that app behavior.

Motion is state-only: 160ms button fill changes and 180ms chevron turns use the existing ease curve. Hover styles require `hover: hover`. Reduced motion removes transitions and smooth scrolling; disclosure behavior stays native.

## Shapes

Use the frontmatter radius scale for state labels, menu items, controls, panels and screenshots. Hero capture corners are 14px; other capture frames and flat panels are 12px. Feature summaries have a quiet top hairline and a teal 2px chevron, offset 0.4rem from the block start and 2px from the inline start. Rotation, teal text and the teal top hairline mark the open state. In both the enhanced grid and every accordion fallback, the open summary and joined panel share the surface fill. The accordion has a closing hairline; the 4x2 index uses segmented top lines. There is no tab on the panel. Client cells use logical vertical separators on larger screens and horizontal separators on phones. Focus is a 2px teal outline with a 4px offset; feature summaries use zero offset. Tour radio focus appears on its corresponding visible label with a 2px offset. The selected label has a teal inline-start border, tinted background and teal title.

Hosting has no decorative page-wide rule or tab. The heading has no decorative logo; the footer mark is 48px with 8px corners. Artwork stays direction-neutral. The dark footer mark retains its brightness(1.45) lift. Docker Compose and Helm use small inline monospace chips with a page-colored fill, 1px hairline and 5px radius. Each chip, attached Arabic conjunction and trailing punctuation stays in one nowrap unit.

## Components

- **Primary action:** teal, weight 600, minimum 48px height; brand-hover fill on hover. Text actions have 44px minimum targets. The features Documentation action is page-colored with a solid hairline, 8px radius and 1.25rem inline padding.
- **Release metadata:** one underlined link contains both Alpha and version. A 0.9rem monospace `bdi` isolates the version; the shared release constant owns its version and URL.
- **Navigation:** plain 44px text targets, native language and mobile-menu disclosures and an inline-SVG theme control with localized label and pressed state. Menus have page-colored fills, hairlines and compact corners. The dark wordmark retains its brightness filter.
- **Header assets:** original wordmarks feed build-generated WebP variants at 1x and 2x for their 148x49 display. Preserve original artwork. Preload the active Arabic or Latin body font. Romanian additionally preloads the Latin-ext subset required by its diacritics; both subsets remain separate font requests.
- **Capture:** real WebP evidence with translated descriptions and no visible language caption. The hero uses an eager high-priority responsive picture; other images are lazy. CSS follows system theme. A byte-identical theme initializer runs inline in the head under its build-computed CSP hash, selecting the theme before the homepage preload without a blocking external request. A tiny inline initializer, authorized by its exact build-computed CSP hash, selects the saved or system theme before setting hero image URLs, within the existing security policy. An independently hashed head initializer preloads only the matching saved/system device/theme hero on the homepage; a native noscript picture preserves responsive system-theme selection. The hero image is decorative because its single visible responsive/theme link supplies the translated capture description. Corresponding full native PNGs remain linked.
- **Hero proof:** the genuine alpha.12 1440x1000 Board originals show six personal and shared tasks across a household and garden club. Their contiguous 838x432 crop displays at no more than 820px. It includes Weekly priorities and populated P1/P2/P3 columns. The linked full original includes the fourth No priority column, sidebar and Add task control. Mobile keeps the genuine 390x844 List source in a 390x470 frame.
- **Tour device control:** beside the visible Explore heading, a screen-reader-only localized View legend names native Desktop/Phone radios with visible labels; Desktop is initially checked. Hidden inputs retain keyboard focus with a visible adjacent-label ring. Above 700px, Phone selects existing phone proofs and the compact dashboard; through 700px, the selector hides and responsive phone views remain automatic.
- **Native tour:** a localized visible h2 and screen-reader-only fieldset legend name three visible 16px radios with native input semantics and CSS circle/dot styling, inset at each label's logical start. Forced-colors mode uses native appearance. Each title and radio remains visible; at 700px and below only the checked label shows its description. The checked radio reveals its associated region. Native keyboard selection works without custom tabs or a selection script. A small fragment-only script selects the appropriate radio for existing deep links. Hide inactive panels with `display: none` at every width; the selected capture determines the stage height while its top and controls stay anchored.
- **Proof excerpts:** desktop sharing pairs a 439x92 context strip with a 439x528 detail crop; recurrence pairs 439x92 and 439x470. Mobile sharing pairs 390x96 and 390x548; recurrence pairs 390x100 and 390x398. A 1rem gap separates the individually framed context and detail images; each has 12px corners, a hairline and a soft shadow. Context strips are decorative; detail crops carry translated descriptions. Never stitch omitted regions together.
- **Dashboard proof:** use the native 438x432 crop at (300,60) from genuine 980x800 desktop originals, showing the complete five-priority card with four pixels of surrounding margin. The Large panel preset measures 429.328125x424 at (304,64); no resampling or composition. The 390x536 mobile crop from genuine 390x844 originals shows the complete priorities panel with 16px native margins; habits and focus stay outside that crop. Both device/theme originals remain linked.
- **Feature disclosure:** plain direction-isolated Latin terms in nowrap runs; eight native exclusive groups, all 35 distinct items, 80px minimum summaries (76px on phones), neutral 4px item dots and one general documentation link in the header. Expanded panels use surface fill, solid hairline and 12px bottom corners, with no shadow, texture or tabs. Supported grids at 901px and above and accordion fallbacks at every width join the selected summary with square top corners.
- **Assistant split:** unboxed, immediately after the tour on the page background. The request uses clamp(1.4rem, 1.1rem + 0.6vw, 1.6rem) at weight 500 and 1.45 line height, with no inline rule or inset; phones use 1.4rem. Neutral 4px dots mark plan rows. Guide and source qualification form one action group, beside the native fold above 900px and above it on smaller screens. The fold keeps its width and summary position when opened. Feature items, plan and fold lists retain explicit `role="list"` semantics.
- **Client strips:** preserve Alpha, experimental, source-run and unavailable states. Each action's accessible name includes its client name. Names and badges stack, desktop actions follow expanded descriptions, and both mobile strips share the 64px row pattern. Full-width strips use four columns above 860px, two from 701px through 860px and one through 700px. Tool names are isolated monospace.
- **Hosting steps:** one page-colored, hairline-bordered 12px card on a felt backing with 1.25rem padding (0.75rem on phones); three rows retain numbered outlined circles and separators. The encryption note is 0.95rem muted. Keep felt behind the steps card only; the hosting heading has no logo.
- **Support:** heading and copy form a stack with a 0.75rem gap and a 48ch prose measure; actions occupy a trailing column on desktop and a wrapping row below on phones.
- **Footer:** small felt clipboard beside Ditero as real text, with ordinary text links and a solid divider.

## Do's and Don'ts

### Do:

- **Do** lead with real app captures and preserve meaningful content.
- **Do** use warm light neutrals and retain the existing dark palette.
- **Do** keep felt in hosting and the small footer mark.
- **Do** preserve theme parity, translated descriptions, RTL, native radio selection, disclosures and visible focus.
- **Do** keep the documentation action before feature summaries in DOM order.

### Don't:

- **Don't** add textured surfaces, teal tabs or dashed outlines to features or the assistant. An expanded feature panel may show one small original felt illustration; the assistant plan may use its small decorative robot pictogram.
- **Don't** use decorative art as evidence of behavior or invent richer capture content.
- **Don't** enlarge or retouch screenshots, add fake interfaces or vendor marks.
- **Don't** add gradients, autoplay, parallax or shadows to ordinary panels and buttons.
- **Don't** make the hero surface depend on a viewport-height calculation or reserve empty tour space for inactive captures.
