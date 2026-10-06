import type { ExtraCopy } from './types';

export const en: ExtraCopy = {
  ui: { platforms: 'Web, Android and experimental desktop.', details: 'Details', menu: 'Menu', heroIntro: 'Shared shopping, chores and plans for your household. Free, open source and self-hosted.', groups: 'Feature groups', docs: 'Documentation' },
  setup: { steps: ["Run your server with Docker Compose", "Create your account in the web app", "Invite people and share a list"] },
  ai: {
    title: "Plan with your assistant",
    intro: "Connect your AI assistant through MCP. Describe the plan; it creates tasks, priorities and due dates.",
    exampleLabel: 'Example request',
    example: "Plan Saturday's picnic, assign the shopping, and mark booking the train as high priority.",
    resultLabel: "Example plan",
    results: [{"title": "Plan Saturday's picnic", "detail": "Saturday"}, {"title": "Buy food for the picnic", "detail": "Assigned to Alex"}, {"title": "Book the train", "detail": "High priority"}],
    source: "CLI, TUI and MCP run from source. Standalone binaries are not included in the alpha downloads.",
    shortSource: "MCP runs from source.",
    points: [
      'It is an external assistant that you connect. Ditero has no built-in chatbot and does not host any AI model.',
      'Your MCP client decides where results and conversations go. Use a client you trust.',
      'Access follows the personal access token you provide and the workspace memberships it has.',
    ],
    link: 'Read the MCP guide',
  },
  features: {
    groups: [
      { id: 'lists', title: 'Lists and sharing', summary: "Shopping, projects and shared responsibilities", items: ["Shopping, projects and checklists", "Assign tasks to people", 'Typed lists for different kinds of work', 'Subtasks inside tasks', 'Priorities and labels', 'Shared workspaces with memberships', "Folders and templates", "Quick add with dates and priorities", "Offline sync"] },
      { id: 'routines', title: 'Habits and routines', summary: "Recurring chores, habits and focus", items: ["Recurring chores", "Habits and streaks", 'A focus mode for the task at hand', "Focus timer", "Karma"] },
      { id: 'reminders', title: 'Reminders', summary: "ntfy, Telegram, Discord, Slack and email", items: ["Due-date reminders", "Quiet hours", 'Choose your delivery channels', 'Acknowledgement of reminders', "Escalation when a reminder goes unanswered"] },
      { id: 'views', title: 'Ways to look at tasks', summary: "Calendar, board, table and dashboards", items: ['Dashboards', 'Calendar', 'Board', 'Table', 'Saved views'] },
      { id: 'files', title: 'Files and comments', summary: "Encrypted files and task discussions", items: ['Encrypted attachments', 'Comments on tasks'] },
      { id: 'recovery', title: 'History and export', summary: "Change history, import and export", items: ['Change history', 'Export and import, with documented exclusions'] },
      { id: 'access', title: 'Sign-in and API', summary: "Passkeys, API, calendars and assistant tools", items: ['Passkeys and TOTP', 'Personal access tokens', "HTTP API and iCal snapshot exports", "CLI, TUI and MCP source clients", "Calendar subscriptions and webhooks"] },
      { id: 'custom', title: 'Customization', summary: "Six languages, themes and reading options", items: ['Six interface languages including right-to-left Arabic', "Light and dark themes", 'Accent colors and shared themes', 'Reading size and a high-contrast option'] },
    ],
  },
};
