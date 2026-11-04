import type { ExtraCopy } from './types';

export const en: ExtraCopy = {
  ui: { view: 'View', desktop: 'Desktop', phone: 'Phone', tour: 'Explore Ditero', platforms: "Web, Android and desktop are in beta; CLI, TUI and MCP ship as Bun bundles.", details: 'Details', menu: 'Menu', heroIntro: 'Shared shopping lists, recurring chores and reminders for your household. Free, open source and self-hosted.', groups: 'Feature groups', docs: 'Documentation' },
  setup: { steps: ["Run your server with Docker Compose", "Create your account in the web app", "Invite people and share a list"] },
  ai: {
    title: "Plan with your assistant",
    intro: "Connect an AI assistant you already use. Through MCP, it turns your requests into tasks, priorities and due dates.",
    exampleLabel: 'Example request',
    example: "Plan Saturday's train trip, assign choosing the route to Alex, and mark booking the tickets as high priority.",
    resultLabel: "Example plan",
    results: [{"title": "Plan Saturday's train trip", "detail": "Shared list"}, {"title": "Choose the route", "detail": "Assigned to Alex"}, {"title": "Book train tickets", "detail": "High priority"}],
    source: "Bun bundles require Bun 1.3.14 or newer and are qualified on Linux x64.",
    shortSource: "MCP ships as a Bun bundle.",
    points: [
      'It is an external assistant that you connect. Ditero has no built-in chatbot and does not host any AI model.',
      'Your MCP client decides where results and conversations go. Use a client you trust.',
      'Access follows the personal access token you provide and the workspace memberships it has.',
    ],
    link: 'Read the MCP guide',
  },
  features: {
    importNote: "Import from Todoist, TickTick, Microsoft To Do (Outlook CSV), Trello and CSV.",
    groups: [
      { id: 'lists', title: 'Lists and sharing', summary: "Shopping, projects and shared responsibilities", items: ["Lists for tasks, shopping, checklists, projects and habits", "Assign tasks to people", 'Subtasks inside tasks', 'Priorities and labels', 'Workspaces shared with other people', "Folders and templates", "Quick add with dates and priorities", "Offline changes sync on reconnect"] },
      { id: 'routines', title: 'Habits and routines', summary: "Recurring chores, habits and focus", items: ["Recurring chores", "Habits and streaks", 'Task-linked focus timer', "Points for completed tasks and habits (Karma)"] },
      { id: 'reminders', title: 'Reminders', summary: "Acknowledge reminders across your chosen channels", items: ["Due-date reminders", "Quiet hours", 'Choose your delivery channels', 'Acknowledgement of reminders', "Escalation when a reminder goes unanswered"] },
      { id: 'views', title: 'Task views', summary: "Calendar, board, table and dashboards", items: ['Dashboards', 'Calendar', 'Board', 'Table', 'Saved views'] },
      { id: 'files', title: 'Files and comments', summary: "Task discussions and opt-in encrypted attachments", items: ['Encrypted attachments', 'Comments on tasks'] },
      { id: 'recovery', title: 'History and export', summary: "Task completion history, import and export", items: ['Task completion history', 'Export and import, with documented exclusions'] },
      { id: 'access', title: 'Sign-in and tools', summary: "Passkeys, API, calendars and assistant tools", items: ['Passkeys and TOTP', 'Personal access tokens', "HTTP API and iCal snapshot exports", "CLI, TUI and MCP source clients", "Calendar subscriptions and inbound webhooks"] },
      { id: 'custom', title: 'Customization', summary: "Six languages, themes and reading options", items: ['Six interface languages including right-to-left Arabic', "Light and dark themes", 'Accent colors and shared themes', 'Reading size and a high-contrast option'] },
    ],
  },
};
