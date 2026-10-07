import type { ExtraCopy } from './types';

export const de: ExtraCopy = {
  ui: { view: 'Ansicht', desktop: 'Desktop', phone: 'Smartphone', tour: 'Ditero entdecken', platforms: 'Web, Android und experimentelle Desktop‑App. CLI, TUI und MCP aus dem Quellcode.', details: 'Details', menu: 'Menü', heroIntro: 'Gemeinsame Einkaufslisten, wiederkehrende Hausarbeit und Erinnerungen für deinen Haushalt. Kostenlos, quelloffen und selbst gehostet.', groups: 'Funktionsgruppen', docs: 'Dokumentation' },
  setup: { steps: ["Starte den Server mit Docker Compose", "Lege dein Konto in der Web-App an", "Lade Leute ein und teile eine Liste"] },
  ai: {
    title: "Plane mit deinem Assistenten",
    intro: "Verbinde einen KI-Assistenten, den du schon nutzt. Über MCP erstellt er aus deinen Anfragen Aufgaben, Prioritäten und Termine.",
    exampleLabel: 'Beispielanfrage',
    example: 'Plane das Picknick am Samstag, weise die Einkäufe zu und markiere die Zugbuchung mit hoher Priorität.',
    resultLabel: "Beispielplan",
    results: [{"title": "Picknick am Samstag planen", "detail": "Gemeinsame Liste"}, {"title": "Essen fürs Picknick kaufen", "detail": "Alex zugewiesen"}, {"title": "Zug buchen", "detail": "Hohe Priorität"}],
    source: "Eigenständige Programme sind nicht in den Alpha‑Downloads enthalten.",
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
      { id: 'lists', title: 'Listen und Teilen', summary: "Einkäufe und gemeinsame Aufgaben", items: ["Listen für Aufgaben, Einkäufe, Checklisten, Projekte und Gewohnheiten", "Aufgaben an Menschen zuweisen", 'Unteraufgaben innerhalb von Aufgaben', 'Prioritäten und Labels', 'Arbeitsbereiche mit anderen teilen', "Ordner und Vorlagen", "Schnelleingabe mit Datum und Priorität", "Offline-Änderungen werden bei erneuter Verbindung synchronisiert"] },
      { id: 'routines', title: 'Routinen', summary: "Hausarbeit, Gewohnheiten und Fokus", items: ["Wiederkehrende Hausarbeit", "Gewohnheiten und Serien", 'Fokustimer für einzelne Aufgaben', "Punkte für erledigte Aufgaben und Gewohnheiten (Karma)"] },
      { id: 'reminders', title: 'Erinnerungen', summary: "ntfy, Telegram, Discord, Slack und E-Mail", items: ["Erinnerungen an Fälligkeiten", "Ruhezeiten", 'Wähle deine Zustellungskanäle', 'Bestätigung von Erinnerungen', "Eskalation bei unbeantworteten Erinnerungen"] },
      { id: 'views', title: 'Ansichten', summary: "Kalender, Board, Tabelle und Dashboards", items: ['Dashboards', 'Kalender', 'Board', 'Tabelle', 'Gespeicherte Ansichten'] },
      { id: 'files', title: 'Dateien', summary: "Kommentare und verschlüsselte Anhänge", items: ['Verschlüsselte Anhänge', 'Kommentare zu Aufgaben'] },
      { id: 'recovery', title: 'Verlauf und Export', summary: "Erledigungsverlauf, Import und Export", items: ['Erledigungsverlauf', 'Export und Import, mit dokumentierten Ausnahmen'] },
      { id: 'access', title: 'Zugang und Tools', summary: "Passkeys, API und Assistenten", items: ['Passkeys und TOTP', 'Persönliche Zugriffstoken', "HTTP-API und iCal-Exporte", "CLI-, TUI- und MCP-Clients im Quellcode", "Kalender-Abonnements und eingehende Webhooks"] },
      { id: 'custom', title: 'Anpassung', summary: "Sechs Sprachen, Designs und Leseoptionen", items: ['Sechs Oberflächensprachen, darunter Arabisch von rechts nach links', "Helles und dunkles Design", 'Akzentfarben und geteilte Designs', 'Lesegröße und eine Option mit hohem Kontrast'] },
    ],
  },
};
