import type { ExtraCopy } from './types';

export const de: ExtraCopy = {
  ui: { tour: 'Ditero entdecken', platforms: 'Web, Android und experimentelle Desktop-App. CLI, TUI und MCP aus dem Quellcode.', details: 'Details', menu: 'Menü', heroIntro: 'Gemeinsame Einkaufslisten, wiederkehrende Hausarbeit und Erinnerungen für deinen Haushalt. Kostenlos, quelloffen und selbst gehostet.', groups: 'Funktionsgruppen', docs: 'Dokumentation' },
  setup: { steps: ["Starte den Server mit Docker Compose", "Lege dein Konto in der Web-App an", "Lade Leute ein und teile eine Liste"] },
  ai: {
    title: "Plane mit deinem Assistenten",
    intro: "Verbinde einen KI-Assistenten, den du schon nutzt. Über MCP erstellt er aus deinen Anfragen Aufgaben, Prioritäten und Termine.",
    exampleLabel: 'Beispielanfrage',
    example: 'Plane das Picknick am Samstag, weise die Einkäufe zu und markiere die Zugbuchung mit hoher Priorität.',
    resultLabel: "Beispielplan",
    results: [{"title": "Picknick am Samstag planen", "detail": "Gemeinsame Liste"}, {"title": "Essen fürs Picknick kaufen", "detail": "Alex zugewiesen"}, {"title": "Zug buchen", "detail": "Hohe Priorität"}],
    source: "Eigenständige Programme sind nicht in den Alpha-Downloads enthalten.",
    shortSource: "MCP läuft aus dem Quellcode.",
    points: [
      'Es ist ein externer Assistent, den du anbindest. Ditero hat keinen eingebauten Chatbot und hostet kein KI-Modell.',
      'Dein MCP-Client entscheidet, wohin Ergebnisse und Gespräche gehen. Nutze einen Client, dem du vertraust.',
      'Der Zugriff richtet sich nach dem persönlichen Zugriffstoken und dessen Mitgliedschaften in Arbeitsbereichen.',
    ],
    link: 'MCP-Anleitung lesen',
  },
  features: {
    groups: [
      { id: 'lists', title: 'Listen und Teilen', summary: "Einkäufe, Projekte und gemeinsame Aufgaben", items: ["Einkäufe, Projekte und Checklisten", "Aufgaben an Menschen zuweisen", 'Typisierte Listen für verschiedene Arten von Aufgaben', 'Unteraufgaben innerhalb von Aufgaben', 'Prioritäten und Labels', 'Gemeinsame Arbeitsbereiche mit Mitgliedschaften', "Ordner und Vorlagen", "Schnelleingabe mit Datum und Priorität", "Offline-Synchronisierung"] },
      { id: 'routines', title: 'Gewohnheiten und Routinen', summary: "Wiederkehrende Hausarbeit, Gewohnheiten und Fokus", items: ["Wiederkehrende Hausarbeit", "Gewohnheiten und Serien", 'Ein Fokusmodus für die aktuelle Aufgabe', "Fokustimer", "Punkte für erledigte Aufgaben und Gewohnheiten (Karma)"] },
      { id: 'reminders', title: 'Erinnerungen', summary: "ntfy, Telegram, Discord, Slack und E-Mail", items: ["Erinnerungen an Fälligkeiten", "Ruhezeiten", 'Wähle deine Zustellungskanäle', 'Bestätigung von Erinnerungen', "Eskalation bei unbeantworteten Erinnerungen"] },
      { id: 'views', title: 'Ansichten auf Aufgaben', summary: "Kalender, Board, Tabelle und Dashboards", items: ['Dashboards', 'Kalender', 'Board', 'Tabelle', 'Gespeicherte Ansichten'] },
      { id: 'files', title: 'Dateien und Kommentare', summary: "Gespräche zu Aufgaben und verschlüsselte Anhänge", items: ['Verschlüsselte Anhänge', 'Kommentare zu Aufgaben'] },
      { id: 'recovery', title: 'Verlauf und Export', summary: "Erledigungsverlauf, Import und Export", items: ['Erledigungsverlauf', 'Export und Import, mit dokumentierten Ausnahmen'] },
      { id: 'access', title: 'Anmeldung und Integrationen', summary: "Passkeys, API, Kalender und Assistenten-Tools", items: ['Passkeys und TOTP', 'Persönliche Zugriffstoken', "HTTP-API und iCal-Exporte", "CLI-, TUI- und MCP-Clients im Quellcode", "Kalender-Abonnements und Webhooks (Alpha)"] },
      { id: 'custom', title: 'Anpassung', summary: "Sechs Sprachen, Designs und Leseoptionen", items: ['Sechs Oberflächensprachen, darunter Arabisch von rechts nach links', "Helles und dunkles Design", 'Akzentfarben und geteilte Designs', 'Lesegröße und eine Option mit hohem Kontrast'] },
    ],
  },
};
