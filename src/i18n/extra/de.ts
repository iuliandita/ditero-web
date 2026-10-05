import type { ExtraCopy } from './types';

export const de: ExtraCopy = {
  ui: { details: 'Details', menu: 'Menü', heroIntro: 'Einkäufe, Hausarbeit und Pläne gemeinsam organisieren. Kostenlos, quelloffen und selbst gehostet.', of: 'von', groups: 'Funktionsgruppen', docs: 'Dokumentation' },
  setup: { steps: ["Starte den Server mit Docker Compose", "Lege dein Konto in der Web-App an", "Lade Leute ein und teile eine Liste"] },
  ai: {
    title: 'Lass deinen Assistenten planen',
    intro: 'Verbinde einen kompatiblen KI-Assistenten über MCP mit Ditero und beschreibe in eigenen Worten, was du brauchst. Der Assistent legt Aufgaben an, ordnet sie und kann Prioritäten und Fälligkeitsdaten setzen.',
    exampleLabel: 'Beispielanfrage',
    example: 'Plane das Picknick am Samstag, weise die Einkäufe zu und markiere die Zugbuchung mit hoher Priorität.',
    resultLabel: "Beispielplan",
    results: [{"title": "Picknick am Samstag planen", "detail": "Samstag"}, {"title": "Essen fürs Picknick kaufen", "detail": "Alex zugewiesen"}, {"title": "Zug buchen", "detail": "Hohe Priorität"}],
    points: [
      'Es ist ein externer Assistent, den du anbindest. Ditero hat keinen eingebauten Chatbot und hostet kein KI-Modell.',
      'Dein MCP-Client entscheidet, wohin Ergebnisse und Gespräche gehen. Nutze einen Client, dem du vertraust.',
      'Der Zugriff richtet sich nach dem persönlichen Zugriffstoken und dessen Mitgliedschaften in Arbeitsbereichen.',
      'MCP ist im Entwicklungsquellcode und in Nightly-Builds enthalten, nicht in den Alpha-Downloads.',
    ],
    link: 'MCP-Anleitung lesen',
  },
  carousel: {
    note: 'Diese Funktionen sind im Entwicklungsquellcode verfügbar. Die veröffentlichte Alpha enthält eine Teilmenge.',
    label: 'Karussell der Funktionsgruppen',
    groups: [
      { id: 'lists', tab: 'Listen', title: 'Listen und Teilen', items: ["Einkäufe, Projekte und Checklisten", "Aufgaben an Menschen zuweisen", 'Typisierte Listen für verschiedene Arten von Aufgaben', 'Unteraufgaben innerhalb von Aufgaben', 'Prioritäten und Labels', 'Gemeinsame Arbeitsbereiche mit Mitgliedschaften', "Ordner und Vorlagen", "Schnelleingabe mit Datum und Priorität", "Offline-Synchronisierung"] },
      { id: 'routines', tab: 'Routinen', title: 'Gewohnheiten und Routinen', items: ["Wiederkehrende Hausarbeit", "Gewohnheiten und Serien", 'Ein Fokusmodus für die aktuelle Aufgabe', "Fokustimer", "Karma"] },
      { id: 'reminders', tab: 'Erinnerungen', title: 'Erinnerungen', items: ["Erinnerungen an Fälligkeiten", "Ruhezeiten", 'Zustellung über ntfy, Telegram, Discord, Slack und E-Mail', 'Bestätigung von Erinnerungen', "Eskalation bei unbeantworteten Erinnerungen"] },
      { id: 'views', tab: 'Ansichten', title: 'Ansichten auf Aufgaben', items: ['Dashboards', 'Kalender', 'Board', 'Tabelle', 'Gespeicherte Ansichten'] },
      { id: 'files', tab: 'Dateien', title: 'Dateien und Wiederherstellung', items: ['Verschlüsselte Anhänge', 'Kommentare zu Aufgaben', 'Änderungsverlauf', 'Export und Import, mit dokumentierten Ausnahmen'] },
      { id: 'access', tab: 'Zugang', title: 'Anmeldung und Integrationen', items: ['Passkeys und TOTP', 'Persönliche Zugriffstoken', 'HTTP-API, iCal-Feeds und Webhooks', 'CLI, TUI und MCP'] },
      { id: 'custom', tab: 'Design', title: 'Anpassung', items: ['Sechs Oberflächensprachen, darunter Arabisch von rechts nach links', "Helles und dunkles Design", 'Akzentfarben und geteilte Designs', 'Lesegröße und eine Option mit hohem Kontrast'] },
    ],
  },
};
