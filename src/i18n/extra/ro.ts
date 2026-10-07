import type { ExtraCopy } from './types';

export const ro: ExtraCopy = {
  ui: { view: 'Vizualizare', desktop: 'Desktop', phone: 'Telefon', tour: 'Descoperă Ditero', platforms: 'Web, Android și aplicație desktop experimentală. CLI, TUI și MCP din sursă.', details: 'Detalii', menu: 'Meniu', heroIntro: 'Liste de cumpărături comune, treburi casnice recurente și mementouri pentru casa voastră. Gratuit, open source și găzduit de tine.', groups: 'Grupuri de funcții', docs: 'Documentație' },
  setup: { steps: ["Pornește serverul cu Docker Compose", "Creează-ți contul în aplicația web", "Invită oameni și partajează o listă"] },
  ai: {
    title: "Planifică cu asistentul tău",
    intro: "Conectează un asistent AI pe care îl folosești deja. Prin MCP, transformă cererile tale în sarcini, priorități și termene.",
    exampleLabel: 'Exemplu de cerere',
    example: 'Planifică picnicul de sâmbătă, atribuie cumpărăturile și marchează rezervarea trenului ca prioritate mare.',
    resultLabel: "Exemplu de plan",
    results: [{"title": "Planifică picnicul de sâmbătă", "detail": "Listă comună"}, {"title": "Cumpără mâncare pentru picnic", "detail": "Atribuită lui Alex"}, {"title": "Rezervă trenul", "detail": "Prioritate mare"}],
    source: "Descărcările alfa nu includ executabile separate.",
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
      { id: 'lists', title: 'Liste și partajare', summary: "Cumpărături și proiecte în grup", items: ["Cumpărături, proiecte și liste de verificare", "Atribuie sarcini oamenilor", 'Tipuri de liste pentru cumpărături, proiecte și altele', 'Subsarcini în cadrul sarcinilor', 'Priorități și etichete', 'Spații de lucru împărțite cu alți oameni', "Dosare și șabloane", "Adăugare rapidă cu date și priorități", "Sincronizare offline"] },
      { id: 'routines', title: 'Obiceiuri și rutine', summary: "Treburi recurente, obiceiuri și concentrare", items: ["Treburi casnice recurente", "Obiceiuri și serii", 'Sesiuni de concentrare asociate sarcinilor', "Temporizator de concentrare", "Puncte pentru sarcini și obiceiuri finalizate (Karma)"] },
      { id: 'reminders', title: 'Mementouri', summary: "ntfy, Telegram, Discord, Slack și e-mail", items: ["Mementouri pentru termene", "Ore de liniște", 'Alege canalele de livrare', 'Confirmarea mementourilor', "Escaladarea mementourilor fără răspuns"] },
      { id: 'views', title: 'Vizualizări', summary: "Calendar, tablă, tabel și panouri de control", items: ['Panouri de control', 'Calendar', 'Tablă', 'Tabel', 'Vizualizări salvate'] },
      { id: 'files', title: 'Fișiere și comentarii', summary: "Comentarii și atașamente criptate", items: ['Atașamente criptate', 'Comentarii la sarcini'] },
      { id: 'recovery', title: 'Istoric și export', summary: "Sarcini încheiate, import și export", items: ['Istoricul finalizării sarcinilor', 'Export și import, cu excluderi documentate'] },
      { id: 'access', title: 'Acces și instrumente', summary: "Passkey-uri, API și asistenți", items: ['Passkey-uri și TOTP', 'Token-uri personale de acces', "API HTTP și exporturi iCal", "Clienți CLI, TUI și MCP din sursă", "Abonamente la calendar și webhook-uri (alfa)"] },
      { id: 'custom', title: 'Personalizare', summary: "Șase limbi, teme și opțiuni de lectură", items: ['Șase limbi de interfață, inclusiv araba de la dreapta la stânga', "Teme luminoasă și întunecată", 'Culori de accent și teme partajate', 'Dimensiunea textului și o opțiune de contrast ridicat'] },
    ],
  },
};
