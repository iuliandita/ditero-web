import type { ExtraCopy } from './types';

export const en: ExtraCopy = {
  ui: { details: 'Details', menu: 'Menu', heroIntro: 'Shopping, chores and plans, together. Free, open source and self-hosted.', of: 'of', groups: 'Feature groups', docs: 'Documentation' },
  setup: { steps: ["Run your server with Docker Compose", "Create your account in the web app", "Invite people and share a list"] },
  ai: {
    title: 'Ask your assistant to plan it',
    intro: 'Connect a compatible AI assistant to Ditero through MCP, then describe what you need in plain language. The assistant creates and organizes tasks and can set priorities and due dates.',
    exampleLabel: 'Example request',
    example: "Plan Saturday's picnic, assign the shopping, and mark booking the train as high priority.",
    resultLabel: "Example plan",
    results: [{"title": "Plan Saturday's picnic", "detail": "Saturday"}, {"title": "Buy food for the picnic", "detail": "Assigned to Alex"}, {"title": "Book the train", "detail": "High priority"}],
    points: [
      'It is an external assistant that you connect. Ditero has no built-in chatbot and does not host any AI model.',
      'Your MCP client decides where results and conversations go. Use a client you trust.',
      'Access follows the personal access token you provide and the workspace memberships it has.',
      'MCP is in the development source and nightly builds, not in the alpha downloads.',
    ],
    link: 'Read the MCP guide',
  },
  carousel: {
    note: 'These features are available in the development source. The published alpha release contains a subset.',
    label: 'Feature groups carousel',
    groups: [
      { id: 'lists', tab: 'Lists', title: 'Lists and sharing', items: ["Shopping, projects and checklists", "Assign tasks to people", 'Typed lists for different kinds of work', 'Subtasks inside tasks', 'Priorities and labels', 'Shared workspaces with memberships', "Folders and templates", "Quick add with dates and priorities", "Offline sync"] },
      { id: 'routines', tab: 'Routines', title: 'Habits and routines', items: ["Recurring chores", "Habits and streaks", 'A focus mode for the task at hand', "Focus timer", "Karma"] },
      { id: 'reminders', tab: 'Reminders', title: 'Reminders', items: ["Due-date reminders", "Quiet hours", 'Delivery through ntfy, Telegram, Discord, Slack and email', 'Acknowledgement of reminders', "Escalation when a reminder goes unanswered"] },
      { id: 'views', tab: 'Views', title: 'Ways to look at tasks', items: ['Dashboards', 'Calendar', 'Board', 'Table', 'Saved views'] },
      { id: 'files', tab: 'Files', title: 'Files and recovery', items: ['Encrypted attachments', 'Comments on tasks', 'Change history', 'Export and import, with documented exclusions'] },
      { id: 'access', tab: 'Access', title: 'Sign-in and integrations', items: ['Passkeys and TOTP', 'Personal access tokens', 'HTTP API, iCal feeds and webhooks', 'CLI, TUI and MCP'] },
      { id: 'custom', tab: 'Look', title: 'Customization', items: ['Six interface languages including right-to-left Arabic', "Light and dark themes", 'Accent colors and shared themes', 'Reading size and a high-contrast option'] },
    ],
  },
};
