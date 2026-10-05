import type { ExtraCopy } from './types';

export const de: ExtraCopy = {
  ui: { prev: 'Zurück', next: 'Weiter', of: 'von', groups: 'Funktionsgruppen', docs: 'Dokumentation' },
  ai: {
    title: 'Lass deinen Assistenten planen',
    intro: 'Verbinde einen kompatiblen KI-Assistenten über MCP mit Ditero und beschreibe in eigenen Worten, was du brauchst. Der Assistent legt Aufgaben an, ordnet sie und kann Prioritäten und Fälligkeitsdaten setzen.',
    exampleLabel: 'Beispielanfrage',
    example: 'Plane das Picknick am Samstag, weise die Einkäufe zu und markiere die Zugbuchung mit hoher Priorität.',
    points: [
      'Es ist ein externer Assistent, den du anbindest. Ditero hat keinen eingebauten Chatbot und hostet kein KI-Modell.',
      'Dein MCP-Client entscheidet, wohin Ergebnisse und Gespräche gehen. Nutze einen Client, dem du vertraust.',
      'Der Zugriff richtet sich nach dem persönlichen Zugriffstoken und dessen Mitgliedschaften in Arbeitsbereichen.',
      'MCP ist im Entwicklungsquellcode und in Nightly-Builds enthalten, nicht in den Alpha-Downloads.',
    ],
    note: 'Dies ist eine Beispielanfrage, kein aufgezeichnetes Gespräch.',
    link: 'MCP-Anleitung lesen',
  },
  carousel: {
    title: 'Mehr von dem, was gebaut ist', intro: 'Der Rest des Funktionsumfangs, gruppiert. Nutze die Schaltflächen, wische oder scrolle.',
    note: 'Diese Funktionen sind im Entwicklungsquellcode verfügbar. Die veröffentlichte Alpha enthält eine Teilmenge.',
    label: 'Karussell der Funktionsgruppen',
    groups: [
      { id: 'lists', tab: 'Listen', title: 'Listen und Teilen', items: ['Typisierte Listen für verschiedene Arten von Aufgaben', 'Unteraufgaben innerhalb von Aufgaben', 'Prioritäten und Labels', 'Zuweisung an Mitglieder des Arbeitsbereichs', 'Gemeinsame Arbeitsbereiche mit Mitgliedschaften'] },
      { id: 'routines', tab: 'Routinen', title: 'Gewohnheiten und Routinen', items: ['Gewohnheiten, die du über die Zeit verfolgst', 'Wiederkehrende Aufgaben', 'Serien', 'Ein Fokusmodus für die aktuelle Aufgabe'] },
      { id: 'reminders', tab: 'Erinnerungen', title: 'Erinnerungen', items: ['Zustellung über ntfy, Telegram, Discord, Slack und E-Mail', 'Ruhezeiten', 'Bestätigung von Erinnerungen'] },
      { id: 'views', tab: 'Ansichten', title: 'Ansichten auf Aufgaben', items: ['Dashboards', 'Kalender', 'Board', 'Tabelle', 'Gespeicherte Ansichten'] },
      { id: 'files', tab: 'Dateien', title: 'Dateien und Wiederherstellung', items: ['Verschlüsselte Anhänge', 'Kommentare zu Aufgaben', 'Änderungsverlauf', 'Export und Import, mit dokumentierten Ausnahmen'] },
      { id: 'access', tab: 'Zugang', title: 'Anmeldung und Integrationen', items: ['Passkeys und TOTP', 'Persönliche Zugriffstoken', 'HTTP-API, iCal-Feeds und Webhooks', 'CLI, TUI und MCP'] },
      { id: 'custom', tab: 'Design', title: 'Anpassung', items: ['Sechs Oberflächensprachen, darunter Arabisch von rechts nach links', 'Helles und dunkles Design', 'Akzentfarben und geteilte Designs', 'Lesegröße und eine Option mit hohem Kontrast'] },
    ],
  },
};
