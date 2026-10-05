import type { ExtraCopy } from './types';

export const ro: ExtraCopy = {
  ui: { details: 'Detalii', menu: 'Meniu', heroIntro: 'Cumpărături, treburi și planuri, împreună. Gratuit, open source și găzduit de tine.', of: 'din', groups: 'Grupuri de funcții', docs: 'Documentație' },
  setup: { steps: ["Pornește serverul cu Docker Compose", "Creează-ți contul în aplicația web", "Invită oameni și partajează o listă"] },
  ai: {
    title: 'Cere asistentului tău să planifice',
    intro: 'Conectează un asistent AI compatibil la Ditero prin MCP, apoi descrie ce ai nevoie cu cuvintele tale. Asistentul creează și organizează sarcini și poate seta priorități și termene.',
    exampleLabel: 'Exemplu de cerere',
    example: 'Planifică picnicul de sâmbătă, atribuie cumpărăturile și marchează rezervarea trenului ca prioritate mare.',
    resultLabel: "Exemplu de plan",
    results: [{"title": "Planifică picnicul de sâmbătă", "detail": "Sâmbătă"}, {"title": "Cumpără mâncare pentru picnic", "detail": "Atribuită lui Alex"}, {"title": "Rezervă trenul", "detail": "Prioritate mare"}],
    points: [
      'Este un asistent extern pe care îl conectezi tu. Ditero nu are chatbot integrat și nu găzduiește niciun model AI.',
      'Clientul tău MCP decide unde ajung rezultatele și conversațiile. Folosește un client de încredere.',
      'Accesul depinde de tokenul personal de acces pe care îl oferi și de apartenențele lui la spații de lucru.',
      'MCP se află în codul sursă de dezvoltare și în versiunile nightly, nu în descărcările alfa.',
    ],
    link: 'Citește ghidul MCP',
  },
  carousel: {
    note: 'Aceste funcții sunt disponibile în codul sursă de dezvoltare. Versiunea alfa publicată conține un subset.',
    label: 'Carusel de grupuri de funcții',
    groups: [
      { id: 'lists', tab: 'Liste', title: 'Liste și partajare', items: ["Cumpărături, proiecte și liste de verificare", "Atribuie sarcini oamenilor", 'Liste tipizate pentru diferite feluri de muncă', 'Subsarcini în cadrul sarcinilor', 'Priorități și etichete', 'Spații de lucru comune cu apartenențe', "Dosare și șabloane", "Adăugare rapidă cu date și priorități", "Sincronizare offline"] },
      { id: 'routines', tab: 'Rutine', title: 'Obiceiuri și rutine', items: ["Treburi casnice recurente", "Obiceiuri și serii", 'Un mod de concentrare pentru sarcina curentă', "Temporizator de concentrare", "Karma"] },
      { id: 'reminders', tab: 'Mementouri', title: 'Mementouri', items: ["Mementouri pentru termene", "Ore de liniște", 'Livrare prin ntfy, Telegram, Discord, Slack și e-mail', 'Confirmarea mementourilor', "Escaladarea mementourilor fără răspuns"] },
      { id: 'views', tab: 'Vizualizări', title: 'Moduri de a vedea sarcinile', items: ['Panouri de control', 'Calendar', 'Tablă', 'Tabel', 'Vizualizări salvate'] },
      { id: 'files', tab: 'Fișiere', title: 'Fișiere și recuperare', items: ['Atașamente criptate', 'Comentarii la sarcini', 'Istoricul modificărilor', 'Export și import, cu excluderi documentate'] },
      { id: 'access', tab: 'Acces', title: 'Autentificare și integrări', items: ['Passkey-uri și TOTP', 'Token-uri personale de acces', 'API HTTP, fluxuri iCal și webhook-uri', 'CLI, TUI și MCP'] },
      { id: 'custom', tab: 'Aspect', title: 'Personalizare', items: ['Șase limbi de interfață, inclusiv araba de la dreapta la stânga', "Teme luminoasă și întunecată", 'Culori de accent și teme partajate', 'Dimensiunea textului și o opțiune de contrast ridicat'] },
    ],
  },
};
