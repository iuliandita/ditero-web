import type { ExtraCopy } from './types';

export const en: ExtraCopy = {
  ui: { prev: 'Previous', next: 'Next', of: 'of', groups: 'Feature groups', docs: 'Documentation' },
  ai: {
    title: 'Ask your assistant to plan it',
    intro: 'Connect a compatible AI assistant to Ditero through MCP, then describe what you need in plain language. The assistant creates and organizes tasks and can set priorities and due dates.',
    exampleLabel: 'Example request',
    example: "Plan Saturday's picnic, assign the shopping, and mark booking the train as high priority.",
    points: [
      'It is an external assistant that you connect. Ditero has no built-in chatbot and does not host any AI model.',
      'Your MCP client decides where results and conversations go. Use a client you trust.',
      'Access follows the personal access token you provide and the workspace memberships it has.',
      'MCP is in the development source and nightly builds, not in the alpha downloads.',
    ],
    note: 'This is an example of a request, not a recorded conversation.',
    link: 'Read the MCP guide',
  },
  carousel: {
    title: 'More of what is built', intro: 'The rest of the feature set, grouped. Use the buttons, swipe or scroll.',
    note: 'These features are available in the development source. The published alpha release contains a subset.',
    label: 'Feature groups carousel',
    groups: [
      { id: 'lists', tab: 'Lists', title: 'Lists and sharing', items: ['Typed lists for different kinds of work', 'Subtasks inside tasks', 'Priorities and labels', 'Assignments to workspace members', 'Shared workspaces with memberships'] },
      { id: 'routines', tab: 'Routines', title: 'Habits and routines', items: ['Habits you track over time', 'Recurring tasks', 'Streaks', 'A focus mode for the task at hand'] },
      { id: 'reminders', tab: 'Reminders', title: 'Reminders', items: ['Delivery through ntfy, Telegram, Discord, Slack and email', 'Quiet hours', 'Acknowledgement of reminders'] },
      { id: 'views', tab: 'Views', title: 'Ways to look at tasks', items: ['Dashboards', 'Calendar', 'Board', 'Table', 'Saved views'] },
      { id: 'files', tab: 'Files', title: 'Files and recovery', items: ['Encrypted attachments', 'Comments on tasks', 'Change history', 'Export and import, with documented exclusions'] },
      { id: 'access', tab: 'Access', title: 'Sign-in and integrations', items: ['Passkeys and TOTP', 'Personal access tokens', 'HTTP API, iCal feeds and webhooks', 'CLI, TUI and MCP'] },
      { id: 'custom', tab: 'Look', title: 'Customization', items: ['Six interface languages including right-to-left Arabic', 'Light and dark themes', 'Accent colors and shared themes', 'Reading size and a high-contrast option'] },
    ],
  },
};
