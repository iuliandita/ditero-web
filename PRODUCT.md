# Product

## Platform

web

## Users

Households and small groups coordinating shopping, chores, habits and projects. The homepage addresses these everyday needs first and explains self-hosting clearly.

## Product Purpose

Ditero is a self-hosted, local-first shared todo app. This website helps visitors understand the app, inspect its real interface, and find setup instructions and public alpha downloads.

## Capabilities and Constraints

The current public release is [v0.0.1-alpha.8](https://github.com/iuliandita/ditero/releases/tag/v0.0.1-alpha.8).

One self-hostable server supports web, Android and desktop clients. Alpha.8 includes CLI, TUI and local MCP source clients plus a membership-scoped HTTP API. CLI, TUI and MCP run from source; standalone binaries are not in the alpha downloads. Calendar subscription feeds and task webhooks are included in Alpha.8; wider qualification remains in progress. Shared workspaces, typed lists, assignments, recurring tasks, reminders delivered to ntfy, Telegram, Discord, Slack or email, dashboards, comments and encrypted attachments. Offline changes sync on reconnect. File encryption does not mean all task data is end-to-end encrypted. MIT open source. Signed independent Android APK/AAB packages are an alpha release; desktop installers are experimental, with unsigned Windows installers and ad-hoc signed macOS builds without notarization. Broader native platform qualification remains incomplete. Keep release claims tied to a verified public release.

## Capability Evidence

The homepage's 35 distinct feature items are grounded in the public [alpha.6 source](https://github.com/iuliandita/ditero/tree/v0.0.1-alpha.6), commit `6186df1b0e02387273dfdacf149ba9eea35dd2f9`. These historical links establish implementation in alpha.6; current release and platform qualifications remain subject to the limits above.

- Lists and sharing: [typed lists](https://github.com/iuliandita/ditero/blob/v0.0.1-alpha.6/src/domain/public-api-list-create.ts#L12) cover shopping, projects, checklists, tasks and habits. Shared workspaces support assignments, one subtask level, priorities and labels. [Folders and task/list templates](https://github.com/iuliandita/ditero/blob/v0.0.1-alpha.6/src/zero/mutators.ts#L1464) organize reusable work. [Quick add](https://github.com/iuliandita/ditero/blob/v0.0.1-alpha.6/src/domain/quick-add.ts#L143) parses dates, priorities, labels and list names. Cached content and accepted edits support offline sync; setup, uploads and uncached history still need a connection.
- Habits and routines: recurring chores use bounded RRULE recurrence, and [habits show streaks](https://github.com/iuliandita/ditero/blob/v0.0.1-alpha.6/src/web/components/habit/HabitTracker.tsx#L31). [Task-linked focus sessions](https://github.com/iuliandita/ditero/blob/v0.0.1-alpha.6/src/web/components/list/TaskDetail.tsx#L976) use the focus timer; avoid implying a separate distraction-free mode. [Karma](https://github.com/iuliandita/ditero/blob/v0.0.1-alpha.6/src/domain/karma.ts#L17) awards points for task and habit completions.
- Reminders: [due reminders, quiet hours and delivery channels](https://github.com/iuliandita/ditero/blob/v0.0.1-alpha.6/docs/notifications.md) support ntfy, Telegram, Discord, Slack and email. Acknowledgement can complete a task or habit; viewers silence the reminder only. Discord/Slack webhook modes are send-only; interactive acknowledgement requires app mode. Escalation uses bounded repeats and an eligible fallback member. Channels require configuration, email requires SMTP, and delivery can duplicate or fail; reminders are not medical-grade.
- Task views: [dashboards](https://github.com/iuliandita/ditero/blob/v0.0.1-alpha.6/src/web/components/dashboard/DashboardView.tsx#L154), [calendar, board and table layouts](https://github.com/iuliandita/ditero/blob/v0.0.1-alpha.6/src/web/components/views/ViewRenderer.tsx#L583), and [saved views](https://github.com/iuliandita/ditero/blob/v0.0.1-alpha.6/src/web/hooks/useWorkspaceViews.ts#L138) operate within current ownership and membership visibility.
- Files and comments: [encrypted attachments](https://github.com/iuliandita/ditero/blob/v0.0.1-alpha.6/README.md#L236) protect file contents, names, declared types and thumbnails. Keys and enrollment are required; the server still sees size, parent, uploader and lifecycle metadata. [Task comments](https://github.com/iuliandita/ditero/blob/v0.0.1-alpha.6/docs/runbooks/public-api.md#L577) follow membership and author/admin permissions.
- History and portability: [recorded completion history](https://github.com/iuliandita/ditero/blob/v0.0.1-alpha.6/docs/runbooks/data-portability.md#L139) starts when installed, without reconstructing earlier actions. [JSON export and reviewed, resumable import](https://github.com/iuliandita/ditero/blob/v0.0.1-alpha.6/docs/runbooks/data-portability.md) include native history plus bounded Ditero CSV, Todoist project CSV snapshot and plain Trello board JSON imports. Provider exclusions differ. JSON excludes authentication/security state and attachment bytes/keys, so it is not a restorable backup. In [alpha.8](https://github.com/iuliandita/ditero/blob/v0.0.1-alpha.8/apps/desktop/README.md#L92), Linux desktop can also export paired content JSON and encrypted attachment archives, with each document limited to 32 MiB and saved through a separate system dialog. Archive import and recovery remain browser-only. Windows and macOS archive export require the browser; Android app archive export is unavailable. Imported historical events do not award Karma or send reminders.
- Sign-in and tools: [passkeys and TOTP](https://github.com/iuliandita/ditero/blob/v0.0.1-alpha.6/src/auth/auth.ts#L137) require suitable authentication configuration and client support. [Expiring personal access tokens and the HTTP API](https://github.com/iuliandita/ditero/blob/v0.0.1-alpha.6/docs/runbooks/public-api.md) remain membership-scoped. The [OpenAPI 3.1 document](https://github.com/iuliandita/ditero/blob/v0.0.1-alpha.6/src/server/public-api/openapi.ts#L1028) is [served without authentication](https://github.com/iuliandita/ditero/blob/v0.0.1-alpha.6/src/server/public-api/routes.ts#L1041) at `/api/v1/openapi.json`, as [documented for alpha.6](https://github.com/iuliandita/ditero/blob/v0.0.1-alpha.6/docs/runbooks/public-api.md#L27). iCal downloads and revocable list subscriptions expose current persisted task rows, without RRULE, future instances, alarms or history. Webhooks create tasks in a bound list; they are inbound, not outgoing event feeds. [CLI, TUI and MCP](https://github.com/iuliandita/ditero/blob/v0.0.1-alpha.6/docs/cli.md) run from source; public downloads contain no standalone clients.
- Customization: [English, German, Spanish, French, Romanian and Arabic](https://github.com/iuliandita/ditero/blob/v0.0.1-alpha.6/project.inlang/settings.json#L4) include RTL support. [Light/dark/system modes, accents and named palettes](https://github.com/iuliandita/ditero/blob/v0.0.1-alpha.6/docs/themes.md) support validated JSON theme sharing. Palette preferences sync with the account; reading size and high contrast stay on each device.

## Brand Commitments

Preserve the Ditero name, existing wordmark and app icon. Professional, clean, relevant copy and visuals. Use usegarret.com and iuliandita.com as references for craft, without copying their artwork. Light and dark themes. English, German, Spanish, French, Romanian and Arabic, including RTL. The homepage should sit alongside Todoist and Things in clarity and finish: restrained neutral surfaces, real interface proof and approachable typography. Felt and paper artwork is a small signature, never the main visual hierarchy.

## Evidence on Hand

Real desktop and mobile English captures in both themes are available. Use fictional example content in screenshots. No customer testimonials, adoption counts or benchmark claims have been supplied.

## Sponsorship

The app remains free, MIT licensed and self-hostable, with no paid feature unlocks. Sponsorship and voluntary contributions help fund development. Use the verified existing creator support page and public contact address.

## Accessibility & Inclusion

Keyboard navigation, visible focus, legible contrast, reduced motion, responsive layouts, localized controls and semantic content. Screenshots need translated descriptions. Do not add visible language or example-data captions.
