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
  feature-gap: "0.5rem 1.25rem"
  request-padding: "2.25rem"
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
    padding: "0 1.25rem"
---

# Design System: Ditero

## Overview

**Creative North Star: "Shared lists. Your server."**

Clear, approachable and polished, with the restraint of Todoist and Things. Near-white or charcoal surfaces, readable typography and one teal accent support real interface proof. Preserve the existing wordmark and app icon.

Quiet physical felt-paper surfaces support feature details, the assistant sheet and the self-hosting band; a small felt clipboard marks the self-hosting heading and footer. These details add warmth without competing with the app. One system serves English, German, Spanish, French, Romanian and Arabic, including RTL, in light and dark themes.

**Key Characteristics:**
- Real desktop and mobile app captures lead the visual hierarchy.
- Neutral surfaces, teal actions and balanced interface excerpts.
- Native disclosures reveal feature and platform detail.
- Quiet material panels and a small footer signature, six locales and equal light/dark coverage.

## Colors

The CSS `light-dark()` values in the frontmatter are normative: light value first, dark value second. System preference is the default; an explicit theme selection overrides it.

### Primary

- **Ditero Teal:** primary actions, links, disclosure chevrons, bullets, focus, selection and browser accents. The hover token deepens teal in light mode and lightens it in dark mode.
- **Text On Teal:** readable primary-action text in either theme.

### Neutral

- **Near-White Page / Cool Charcoal:** the main page and menu backgrounds.
- **Pale Panel / Dark Slate Panel:** the assistant example, self-hosting band and screenshot fallback.
- **Primary Ink / Muted Ink:** headings and controls / explanatory text and notes.
- **Hairline:** panel outlines, menus, client-strip separators and the footer divider.
- **Teal Tint / Tint Ink:** compact platform-state labels.

**The Small Signature Rule.** Keep figurative felt artwork small in the self-hosting heading and footer. Feature details, the assistant sheet and self-hosting use quiet physical material texture; interface proof stays crisp on neutral surfaces. Do not add decorative tiles or vendor glyphs.

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

The page wrap is at most 57.875rem (926px) with fluid gutters; document pages use 44rem. A shared fluid section spacing keeps the page rhythm calm. The homepage proceeds from hero to sharing, recurrence and dashboard proof, features, assistant example, client access, self-hosting and support.

The desktop and tablet hero centers its copy and actions above the qualified Board capture, capped at 820px without enlargement. The lead is capped at 36rem. The six localized introductions name shared shopping lists, recurring chores and household reminders, followed by free, open-source and self-hosted availability. Platform text and linked Alpha version form one compact, wrapping flex block with a 1rem horizontal gap, no row gap and 0.5rem top margin; the release action retains a 44px minimum target. At 700px and below, hero copy and metadata align to the logical start.

Sharing and recurrence use two columns above 700px, each capped at 439px, with a 3rem gap and shared header tracks where subgrid is supported. The dashboard occupies the following full-width row. At 1101px and above, its copy sits in the logical-start column beside the native 572x515 capture in the logical-end column, with a 3rem gap and vertical centering. At 1100px and below it stacks, aligned to the logical start; at 700px and below it uses the genuine 390x640 mobile crop. Captures keep their native proportions without added padding or enlargement. The desktop proof band has no bottom padding; mobile retains 2rem. Feature, assistant and access sections use one adjacent section gap rather than adding bottom and top padding together: features and assistant have top section padding only, while access retains its section padding. The mobile gap is 3rem.

The feature heading sits above one flat list of eight native disclosures. With `::details-content` support at 901px and above, their choices form four columns and two rows, with the open group's paper panel spanning the full width below them. The panel has a repeated group heading and two columns of feature items. One general documentation link follows all eight disclosures, keeping sequential focus coherent; the API guide remains in Apps and tools. The shared native name permits one open group; the first is open initially. At 900px and below, or without the required selector support, the same markup becomes a single accordion with one item column. All 37 feature items remain in the disclosures; there is no fixed-height rail, scripted tab interface or hidden substitute list.

The assistant is one compact paper sheet containing the heading, request, example plan and source/actions footer. Its request and plan use 5:6 columns above 860px and stack at 860px and below. Plan titles and details stack at every width, with neutral 4px dot markers and spacing instead of row dividers. A dashed inset outline and footer divider belong to this sheet. The guide and closed details fold share a flexible action row; opening the fold gives its content the full sheet width while its summary and focus remain content-width. A short source sentence occupies a full-width footer row with no reading-width cap.

Client access moves directly from its heading into two strips: Web, Android, desktop and iOS; then CLI, TUI, API and MCP. Both strips use four columns above 860px and two columns from 701px through 860px. At 700px and below, platforms become compact single rows while tools retain two columns with a 1rem gap, no cell padding or borders, and wrapping state labels. Client names and state labels stack at every width. Persistent setup, download and guide links remain above expanded descriptions. Modern `::details-content` support flattens the native disclosure into summary, link and description grid rows; at 700px and below, platform summaries sit at the logical start beside persistent actions at the logical end, with descriptions spanning the row beneath. Platform summaries have a 64px minimum height, with 0.75rem row gaps and top padding after the first row. Client headings and summaries use a 44px minimum outside the mobile platform override. When native content flattening and row subgrid are both supported, each client spans three shared content-driven rows with zero inherited row gap so guide actions align with translated content height. Tools have no fixed 5.75rem summary minimum. The fallback keeps the persistent action before the disclosure. Tool names use isolated Latin monospace. iOS retains its name and Not available yet state without an action or fold. The tools source/download qualification and early-software note stay visible; the individual native folds retain meaningful capability descriptions: command-line task edits, keyboard task management, HTTP/PAT/OpenAPI access and connected-assistant task operations. Compact localized state labels retain the visible shared source-run qualification. Self-hosting and support use equal columns.

At 1100px and below, section navigation becomes a native menu disclosure and the language name hides. At 700px and below, the hero copy aligns to the logical start and the mobile hero uses a 390x844 source in a 390x490 frame, capped at 24rem. Sharing, recurrence and dashboard switch to genuine mobile assets. Sharing, recurrence and dashboard media align to the logical start inside the shared gutters and are capped at 390px; the mobile dashboard is 390x640. From 481px through 700px, the shared page measure becomes 24.375rem (390px), centering the complete reading column and keeping genuine mobile captures close to native size. The dashboard heading, copy and capture align to the logical start at 700px and below. Platform rows, self-hosting and support stack; tools retain two columns. Features already use the single accordion below 901px, and the assistant example already stacks below 861px. Feature items use one column. At 480px and below, hero and proof media extend 12px past each side of the text gutters, approaching the native mobile capture width. The hero fills this media width; proof pairs and dashboard retain their 390px caps. Client badges remain below their names, and persistent actions remain above descriptions when details open. The mobile menu panel aligns to the header.

Use logical padding, margins and inset properties for RTL. Docker Compose and Helm are isolated with `bdi` and kept together with `white-space: nowrap` in the self-hosting paragraph and setup steps. The assistant source qualification is a single paragraph in the sheet footer. English screenshot pixels retain their physical orientation. Use already-cropped pixels directly at their native aspect ratios. Keep asset dimensions and displayed aspect ratios aligned, and verify new image dimensions before documenting them. Captures must show equivalent content, visible ordering and legibility in both themes; CSS theme selection alone does not establish asset qualification.

## Elevation & Depth

Neutral tonal surfaces and 1px hairlines carry most structure. Hero, framed proof excerpt pairs, dashboard and navigation menus use ambient shadows. Each proof pair shares a neutral surface, rounded clipping and an inset hairline outline, with native image proportions and no fixed-height frame. Ordinary panels, controls and the small footer artwork remain flat. Feature details, the assistant sheet and the self-hosting surface use the same generated physical felt-paper image; there are no gradients or procedural grain. New paper panels use multiply opacity 0.10 in light mode and 0.05 in dark mode; hosting retains 0.18 and 0.08. Paper panels have a 40x3px teal tab at their logical start edge; feature-panel tabs hide at 900px and below.

### Shadow Vocabulary

- **Capture:** `0 18px 45px -20px light-dark(rgb(24 48 43 / 0.27), rgb(0 0 0 / 0.65))`.
- **Hero capture:** `0 24px 60px -25px light-dark(rgb(24 48 43 / 0.3), rgb(0 0 0 / 0.7))`.

**The Interface Proof Rule.** Use real app captures for product evidence, with equivalent content and legibility in both themes.

Motion is state-only: a 160ms button fill change and 180ms disclosure chevron turn use the existing ease curve. Hover rules apply only when `hover: hover` matches. Reduced motion removes transitions and smooth scrolling; disclosure behavior remains native without animation support.

## Shapes

Small rounded corners keep the system practical: compact state labels, menu items, controls, panels and screenshots use the frontmatter scale. The hero screenshot has slightly larger corners than other captures. Sharing and recurrence excerpt pairs share a 12px rounded frame and a 1px inset outline. Feature choices use disclosure chevrons and a teal underline on the open summary. Expanded content has a neutral paper surface and inset hairline outline. Client strips use logical vertical separators on desktop and tablet; at 700px and below, only platform rows use horizontal separators and tools have no cell borders. Focus is a 2px teal outline with a 4px offset; feature-summary focus uses a zero offset.

The felt clipboard mark appears at 32px above the self-hosting heading and at 48px with 8px corners in the footer. The heading mark is decorative with an empty alternative description. Artwork stays direction-neutral and secondary to real text. Keep the established material and palette consistent.

## Components

- **Primary action:** filled teal link, weight 600, minimum 48px height. Hover uses the brand-hover token; secondary actions are teal text links with minimum 44px targets. The hero metadata keeps platform availability and the linked Alpha version in one compact wrapping flex block. The release link has a 44px minimum target. The version and release URL come from the shared constant; locale catalogs supply only the Alpha label. A 40x3px teal tab precedes the heading.
- **Navigation:** plain text links with 44px targets; native language and mobile-menu disclosures; theme button with inline SVG, localized label and pressed state. Menus use a page-colored surface, hairline border and compact corners. The existing dark wordmark uses a brightness(1.45) filter for legibility.
- **Capture:** real WebP screenshots with translated descriptions and no visible caption. The hero renders a native responsive picture with an eager, high-priority image so the browser can discover it immediately. It follows system theme without scripts and starts with a neutral translated hero description for either responsive source. JavaScript reconciles a saved theme override and updates the device-specific translated description; CSS selects the matching full-image link. A saved theme that differs from the system may request a second small image. Other captures use paired lazy images with CSS theme selection.
- **Hero proof:** genuine English Standard-density 1100x800 Board originals use the same six-task household scenario across themes. The contiguous crop [76, 16, 914, 436] is 838x420 and serves desktop/tablet widths above 700px, displayed at no more than 820px without enlargement. It shows the named Household priorities view and three populated P1/P2/P3 columns with all six tasks. The fourth empty priority column and Add task control remain outside the crop, visible in the linked full original. Existing generic list-desktop asset filenames hold these Board images; filenames do not identify the view. Full gallery PNGs are byte-identical native originals; desktop excerpts are lossless WebP without resize or retouch. The mobile hero retains the genuine 390x844 List source in a 390x490 frame, with the same six-task scenario in a separate session and matching light/dark content; its link opens the full mobile PNG. The initial hero description is generic household tasks; desktop reconciliation describes priority groups and mobile reconciliation describes the shared List. Responsive sources use explicit mobile or desktop identifiers when reconciling a saved theme.
- **Proof excerpts:** desktop sharing separates a 439x92 task-context strip from its 439x470 task-detail crop; recurrence separates a 439x92 context strip from its 439x470 settings crop, including the whole Skip control and quiet-hours controls. Mobile sharing uses a 390x100 context crop and genuine 390x524 detail crop; mobile recurrence uses a 390x100 context crop and 390x398 controls crop. Every excerpt pair has a 2px separator inside one rounded, outlined and shadowed frame; do not stitch omitted interface regions together. Desktop pairs are capped at 439px, mobile pairs at 390px, without enlargement. One link surrounds each device/theme group and opens its full capture. Context strips are decorative to assistive technology; the detail or settings crop carries the translated description.
- **Dashboard proof:** the desktop crop is a contiguous native 572x515 excerpt with priorities, habits and focus panels. At 1101px and above, copy and capture sit in logical-start/end columns with a 3rem gap and vertical centering. At 1100px and below they stack at the logical start; mobile uses the 390x640 crop. Light and dark captures use the same populated fixture. The genuine mobile crop (390x640) shows the complete priorities panel and links to its 390x844 full original. Use the corresponding full device/theme capture for its image link.
- **Feature disclosure:** native `details` and `summary` with category title, authored muted phrase and a disclosure chevron. Open state turns the chevron upward and underlines the summary in teal. Summaries have a minimum 80px height and 1rem block padding, becoming 76px and 0.75rem at 700px and below. One flat list contains eight groups and all 37 items; the shared native name keeps expansion exclusive. With `::details-content` support at 901px and above, choices form a 4x2 grid and the open paper panel spans the full width below, with 2rem 2.25rem padding, repeated heading and two item columns. Otherwise, the same native disclosures form one accordion with 1.5rem panel padding, no repeated heading and one item column. The first group starts open; keyboard and no-script behavior remain native. Neutral 4px dots mark feature items. The panel teal tab hides at 900px and below. One general documentation action follows the complete explorer rather than repeating inside panels.
- **Client strips:** public platforms and tools each use four columns above 860px and two from 701px through 860px. At 700px and below, platforms become compact single rows with 0.75rem gaps and top padding after the first row; tools keep two columns with 1rem gaps, no padding or borders and wrapping state labels. Names and 0.85rem state labels stack; a native chevron sits immediately after each fold name. Setup, download or guide links stay visible above expanded descriptions. With `::details-content` support, summary, persistent action and description occupy rows 1, 2 and 3. At 700px and below, platform summaries instead sit beside logical-end actions in row 1 and expanded descriptions span row 2; platform headings and summaries have a 64px minimum height. Headings and summaries have a 44px minimum outside the 64px mobile platform override. With both `::details-content` and row-subgrid support, client cells span three shared content-driven row tracks with `row-gap: 0`, aligning actions and separators without a fixed tool-summary height. Without that support the action remains before the native fold. Summary focus stays fit-content, capped at 100%. Each action accessible name combines its localized label and client name. Tool names use `bdi` and monospace. iOS has a semantic name span and Not available yet badge without an action or fold. Preserve Alpha, experimental and Run from source states, native descriptions, the shared source-run/no-standalone-binaries sentence above the tool strip and the visible early-software note.
- **Assistant sheet:** one neutral paper sheet with 2.25rem padding, a dashed outline inset 8px, a teal tab and a 5:6 request/plan grid. The heading and introduction live inside it. The request uses 1.4rem text at weight 500; labels, plan titles and details use 0.95rem. Neutral 4px dots mark plan rows, with titles above details and no row borders. At 860px and below the example stacks; at 700px and below the sheet uses 1.5rem padding and a 1.2rem request. A dashed footer contains the visible full-row, uncapped short source sentence, guide link and contextual native details fold. Closed actions share a flexible row; open fold content spans the sheet while its summary stays content-width. Keep the full shared source/download qualification above the tools. This is an illustrative external-assistant request, distinct from an app screenshot.
- **Self-hosting steps:** three numbered rows with outlined circles on the neutral surface band, beside setup actions and an encryption note. The self-hosting heading uses `clamp(1.75rem, 3vw, 2.25rem)`. A 32px decorative felt clipboard sits above it with a 0.75rem gap. A generated physical felt-paper WebP texture repeats at 40rem, with multiply blending, 0.18 opacity in light mode and 0.08 in dark mode. The blend retains the neutral dark surface. Keep it quiet behind readable text; use the image asset, not procedural grain. A single dashed top seam with a 40px teal tab belongs to this band. Do not repeat seams on section dividers, screenshots or controls.
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
