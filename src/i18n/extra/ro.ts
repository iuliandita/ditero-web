import type { ExtraCopy } from './types';

export const ro: ExtraCopy = {
  ui: { platforms: 'Web, Android și aplicație desktop experimentală.', details: 'Detalii', menu: 'Meniu', heroIntro: 'Cumpărături, treburi și planuri pentru casa voastră. Gratuit, open source și găzduit de tine.', groups: 'Grupuri de funcții', docs: 'Documentație' },
  setup: { steps: ["Pornește serverul cu Docker Compose", "Creează-ți contul în aplicația web", "Invită oameni și partajează o listă"] },
  ai: {
    title: "Planifică cu asistentul tău",
    intro: "Conectează asistentul AI prin MCP. Descrie planul; el creează sarcini, priorități și termene.",
    exampleLabel: 'Exemplu de cerere',
    example: 'Planifică picnicul de sâmbătă, atribuie cumpărăturile și marchează rezervarea trenului ca prioritate mare.',
    resultLabel: "Exemplu de plan",
    results: [{"title": "Planifică picnicul de sâmbătă", "detail": "Sâmbătă"}, {"title": "Cumpără mâncare pentru picnic", "detail": "Atribuită lui Alex"}, {"title": "Rezervă trenul", "detail": "Prioritate mare"}],
    source: "CLI, TUI și MCP rulează din sursă. Descărcările alfa nu includ executabile separate.",
    shortSource: "MCP rulează din sursă.",
    points: [
      'Este un asistent extern pe care îl conectezi tu. Ditero nu are chatbot integrat și nu găzduiește niciun model AI.',
      'Clientul tău MCP decide unde ajung rezultatele și conversațiile. Folosește un client de încredere.',
      'Accesul depinde de tokenul personal de acces pe care îl oferi și de apartenențele lui la spații de lucru.',
    ],
    link: 'Citește ghidul MCP',
  },
  features: {
    groups: [
      { id: 'lists', title: 'Liste și partajare', summary: "Cumpărături, proiecte și responsabilități comune", items: ["Cumpărături, proiecte și liste de verificare", "Atribuie sarcini oamenilor", 'Liste tipizate pentru diferite feluri de muncă', 'Subsarcini în cadrul sarcinilor', 'Priorități și etichete', 'Spații de lucru comune cu apartenențe', "Dosare și șabloane", "Adăugare rapidă cu date și priorități", "Sincronizare offline"] },
      { id: 'routines', title: 'Obiceiuri și rutine', summary: "Treburi recurente, obiceiuri și concentrare", items: ["Treburi casnice recurente", "Obiceiuri și serii", 'Un mod de concentrare pentru sarcina curentă', "Temporizator de concentrare", "Karma"] },
      { id: 'reminders', title: 'Mementouri', summary: "ntfy, Telegram, Discord, Slack și e-mail", items: ["Mementouri pentru termene", "Ore de liniște", 'Alege canalele de livrare', 'Confirmarea mementourilor', "Escaladarea mementourilor fără răspuns"] },
      { id: 'views', title: 'Moduri de a vedea sarcinile', summary: "Calendar, tablă, tabel și panouri de control", items: ['Panouri de control', 'Calendar', 'Tablă', 'Tabel', 'Vizualizări salvate'] },
      { id: 'files', title: 'Fișiere și comentarii', summary: "Fișiere criptate și discuții despre sarcini", items: ['Atașamente criptate', 'Comentarii la sarcini'] },
      { id: 'recovery', title: 'Istoric și export', summary: "Istoricul modificărilor, import și export", items: ['Istoricul modificărilor', 'Export și import, cu excluderi documentate'] },
      { id: 'access', title: 'Autentificare și API', summary: "Passkey-uri, API, calendare și instrumente pentru asistenți", items: ['Passkey-uri și TOTP', 'Token-uri personale de acces', "API HTTP și exporturi iCal", "Clienți CLI, TUI și MCP din sursă", "Abonamente la calendar și webhook-uri"] },
      { id: 'custom', title: 'Personalizare', summary: "Șase limbi, teme și opțiuni de lectură", items: ['Șase limbi de interfață, inclusiv araba de la dreapta la stânga', "Teme luminoasă și întunecată", 'Culori de accent și teme partajate', 'Dimensiunea textului și o opțiune de contrast ridicat'] },
    ],
  },
};
