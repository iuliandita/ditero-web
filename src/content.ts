export type Locale = 'en' | 'de';
export const pageUrl = (locale: Locale, path = '') => `${locale === 'de' ? '/de/' : '/'}${path ? `${path}/` : ''}`;
export const links = {
  project: 'https://github.com/iuliandita/ditero',
  release: 'https://github.com/iuliandita/ditero/releases/tag/v0.0.1-alpha.2',
  deploy: 'https://github.com/iuliandita/ditero/tree/develop/deploy/docker',
  docs: 'https://github.com/iuliandita/ditero/tree/develop/docs',
  issues: 'https://github.com/iuliandita/ditero/issues',
  license: 'https://github.com/iuliandita/ditero/blob/develop/LICENSE',
};
export const copy = {
  en: {
    title: 'Shared lists. Your server.', description: 'Ditero is an open-source, self-hosted todo app for households, clubs and small teams. Share shopping lists, projects, habits and chores.',
    skip: 'Skip to content', features: 'Features', start: 'Get started', source: 'Source code', about: 'About', privacy: 'Privacy', themeLight: 'Switch to light theme', themeDark: 'Switch to dark theme',
    eyebrow: 'A little more together.', headline: 'Life has a lot of lists.\nMake them yours.', intro: 'Groceries, weekend plans, the jobs nobody wants to forget. Keep them together in Ditero, a shared todo app that runs on your own server.',
    primary: 'Set up Ditero', secondary: 'Explore the source', alpha: 'Early alpha · v0.0.1-alpha.2', alphaText: 'Ready to explore. Still being built.',
    illustration: 'Illustration of shared lists, not an app screenshot.', space: 'Our place', shopping: 'Shopping', project: 'Weekend project', chores: 'Habits & chores', today: 'Today', shared: 'Shared with the household', progress: 'One less thing to remember.',
    tasks: [{ name: 'Pick up fresh tomatoes', detail: 'Shopping · Alex', tag: 'Today', done: false }, { name: 'Water the balcony plants', detail: 'Chores · Sam', tag: 'Repeats weekly', done: false }, { name: 'Choose a paint color', detail: 'Weekend project · Everyone', tag: 'Saturday', done: false }, { name: 'Book the repair appointment', detail: 'Our place · Alex', tag: 'Done', done: true }],
    sectionTitle: 'From the grocery aisle\nto the next big project.', sectionIntro: 'One place for everyday plans, with room for the people doing them.',
    featureItems: [
      { title: 'Lists that work together', text: 'Share tasks, shopping lists, checklists and projects with your household, club or small team.' },
      { title: 'Keep the rhythm', text: 'Build habits, divide up chores and use recurring tasks and reminders for the things that come around again.' },
      { title: 'Bring the useful details', text: 'Keep comments and encrypted attachments with your tasks, so the plan and its details stay together.' },
      { title: 'Make yourself at home', text: 'Light and dark themes, with English, German, Spanish, French, Romanian and Arabic app interfaces.' },
    ],
    ownershipTitle: 'Your plans.\nYour place to keep them.', ownershipText: 'Ditero is self-hosted and open source under the MIT license. Run the app on your own infrastructure, inspect the code and decide how your group uses it.', ownershipLink: 'Read the deployment guide', ownershipNote: 'Work offline and sync when you reconnect. Encrypted attachments protect file content; this does not mean every piece of task data is end-to-end encrypted.',
    releaseTitle: 'Start small. Follow along.', releaseText: 'The current public alpha includes the web app, signed independent Android downloads and experimental desktop installers. Windows builds are unsigned; macOS builds use ad-hoc signatures. Platform qualification is still in progress.', releaseLink: 'See alpha downloads', releaseDocs: 'Read the documentation', releaseNote: 'Early software changes quickly. Review the setup, backup and platform notes before relying on it.', footer: 'Shared plans, on your terms.',
  },
  de: {
    title: 'Gemeinsame Listen. Dein Server.', description: 'Ditero ist eine quelloffene, selbst gehostete Aufgaben-App für Haushalte, Vereine und kleine Teams. Teile Einkaufslisten, Projekte, Gewohnheiten und Hausarbeit.',
    skip: 'Zum Inhalt springen', features: 'Funktionen', start: 'Loslegen', source: 'Quellcode', about: 'Über Ditero', privacy: 'Datenschutz', themeLight: 'Zum hellen Design wechseln', themeDark: 'Zum dunklen Design wechseln',
    eyebrow: 'Ein bisschen mehr gemeinsam.', headline: 'Das Leben hat viele Listen.\nMach sie zu deinen.', intro: 'Einkäufe, Wochenendpläne und Aufgaben, die niemand vergessen möchte. Ditero hält sie zusammen: eine gemeinsame Aufgaben-App auf deinem eigenen Server.',
    primary: 'Ditero einrichten', secondary: 'Quellcode ansehen', alpha: 'Frühe Alpha · v0.0.1-alpha.2', alphaText: 'Zum Ausprobieren. Noch in Entwicklung.',
    illustration: 'Illustration gemeinsamer Listen, kein Screenshot der App.', space: 'Unser Zuhause', shopping: 'Einkaufen', project: 'Wochenendprojekt', chores: 'Gewohnheiten & Hausarbeit', today: 'Heute', shared: 'Mit dem Haushalt geteilt', progress: 'Eine Sache weniger im Kopf.',
    tasks: [{ name: 'Frische Tomaten kaufen', detail: 'Einkaufen · Alex', tag: 'Heute', done: false }, { name: 'Balkonpflanzen gießen', detail: 'Hausarbeit · Sam', tag: 'Jede Woche', done: false }, { name: 'Eine Wandfarbe aussuchen', detail: 'Wochenendprojekt · Alle', tag: 'Samstag', done: false }, { name: 'Reparaturtermin vereinbaren', detail: 'Unser Zuhause · Alex', tag: 'Erledigt', done: true }],
    sectionTitle: 'Vom Einkauf\nbis zum nächsten großen Projekt.', sectionIntro: 'Ein Ort für alltägliche Pläne und die Menschen, die sie umsetzen.',
    featureItems: [
      { title: 'Listen für alle', text: 'Teile Aufgaben, Einkaufslisten, Checklisten und Projekte mit deinem Haushalt, Verein oder kleinen Team.' },
      { title: 'Im Rhythmus bleiben', text: 'Entwickle Gewohnheiten, verteile Hausarbeit und nutze wiederkehrende Aufgaben und Erinnerungen für alles, was regelmäßig ansteht.' },
      { title: 'Alles Wichtige dabei', text: 'Bewahre Kommentare und verschlüsselte Anhänge direkt bei den Aufgaben auf. So bleiben Plan und Details zusammen.' },
      { title: 'Fühl dich zu Hause', text: 'Helles und dunkles Design sowie App-Oberflächen auf Englisch, Deutsch, Spanisch, Französisch, Rumänisch und Arabisch.' },
    ],
    ownershipTitle: 'Deine Pläne.\nDein Ort dafür.', ownershipText: 'Ditero wird selbst gehostet und ist unter der MIT-Lizenz quelloffen. Betreibe die App auf deiner eigenen Infrastruktur, prüfe den Code und entscheide, wie deine Gruppe sie nutzt.', ownershipLink: 'Anleitung zur Einrichtung lesen', ownershipNote: 'Arbeite offline und synchronisiere, sobald du wieder verbunden bist. Verschlüsselte Anhänge schützen Dateiinhalte; das bedeutet nicht, dass alle Aufgabendaten Ende-zu-Ende-verschlüsselt sind.',
    releaseTitle: 'Klein anfangen. Dabei bleiben.', releaseText: 'Die aktuelle öffentliche Alpha enthält die Web-App, signierte unabhängige Android-Downloads und experimentelle Desktop-Installer. Windows-Builds sind unsigniert; macOS-Builds sind ad-hoc signiert. Die Plattformqualifizierung läuft noch.', releaseLink: 'Alpha-Downloads ansehen', releaseDocs: 'Dokumentation lesen', releaseNote: 'Frühe Software verändert sich schnell. Lies die Hinweise zu Einrichtung, Sicherung und Plattformen, bevor du dich auf sie verlässt.', footer: 'Gemeinsame Pläne, nach deinen Regeln.',
  },
};
