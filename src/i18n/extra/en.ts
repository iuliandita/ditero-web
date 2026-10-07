import type { ExtraCopy } from './types';

export const en: ExtraCopy = {
  ui: { view: 'View', desktop: 'Desktop', phone: 'Phone', tour: 'Explore Ditero', platforms: 'Web, Android, experimental desktop. CLI, TUI and MCP from source.', details: 'Details', menu: 'Menu', heroIntro: 'Shared shopping lists, recurring chores and reminders for your household. Free, open source and self-hosted.', groups: 'Feature groups', docs: 'Documentation' },
  setup: { steps: ["Run your server with Docker Compose", "Create your account in the web app", "Invite people and share a list"] },
  ai: {
    title: "Plan with your assistant",
    intro: "Connect an AI assistant you already use. Through MCP, it turns your requests into tasks, priorities and due dates.",
    exampleLabel: 'Example request',
    example: "Plan Saturday's picnic, assign the shopping, and mark booking the train as high priority.",
    resultLabel: "Example plan",
    results: [{"title": "Plan Saturday's picnic", "detail": "Shared list"}, {"title": "Buy food for the picnic", "detail": "Assigned to Alex"}, {"title": "Book the train", "detail": "High priority"}],
    source: "Standalone binaries are not included in the alpha downloads.",
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
      { id: 'lists', title: 'Lists and sharing', summary: "Shopping, projects and shared responsibilities", items: ["Shopping, projects and checklists", "Assign tasks to people", 'List types for shopping, projects and more', 'Subtasks inside tasks', 'Priorities and labels', 'Workspaces shared with other people', "Folders and templates", "Quick add with dates and priorities", "Offline sync"] },
      { id: 'routines', title: 'Habits and routines', summary: "Recurring chores, habits and focus", items: ["Recurring chores", "Habits and streaks", 'Task-linked focus sessions', "Focus timer", "Points for completed tasks and habits (Karma)"] },
      { id: 'reminders', title: 'Reminders', summary: "ntfy, Telegram, Discord, Slack and email", items: ["Due-date reminders", "Quiet hours", 'Choose your delivery channels', 'Acknowledgement of reminders', "Escalation when a reminder goes unanswered"] },
      { id: 'views', title: 'Task views', summary: "Calendar, board, table and dashboards", items: ['Dashboards', 'Calendar', 'Board', 'Table', 'Saved views'] },
      { id: 'files', title: 'Files and comments', summary: "Task discussions and encrypted attachments", items: ['Encrypted attachments', 'Comments on tasks'] },
      { id: 'recovery', title: 'History and export', summary: "Task completion history, import and export", items: ['Task completion history', 'Export and import, with documented exclusions'] },
      { id: 'access', title: 'Sign-in and tools', summary: "Passkeys, API, calendars and assistant tools", items: ['Passkeys and TOTP', 'Personal access tokens', "HTTP API and iCal snapshot exports", "CLI, TUI and MCP source clients", "Calendar subscriptions and webhooks (alpha)"] },
      { id: 'custom', title: 'Customization', summary: "Six languages, themes and reading options", items: ['Six interface languages including right-to-left Arabic', "Light and dark themes", 'Accent colors and shared themes', 'Reading size and a high-contrast option'] },
    ],
  },
};
