import type { ExtraCopy } from './types';

export const ro: ExtraCopy = {
  ui: { prev: 'Înapoi', next: 'Înainte', of: 'din', groups: 'Grupuri de funcții', docs: 'Documentație' },
  ai: {
    title: 'Cere asistentului tău să planifice',
    intro: 'Conectează un asistent AI compatibil la Ditero prin MCP, apoi descrie ce ai nevoie cu cuvintele tale. Asistentul creează și organizează sarcini și poate seta priorități și termene.',
    exampleLabel: 'Exemplu de cerere',
    example: 'Planifică picnicul de sâmbătă, atribuie cumpărăturile și marchează rezervarea trenului ca prioritate mare.',
    points: [
      'Este un asistent extern pe care îl conectezi tu. Ditero nu are chatbot integrat și nu găzduiește niciun model AI.',
      'Clientul tău MCP decide unde ajung rezultatele și conversațiile. Folosește un client de încredere.',
      'Accesul depinde de tokenul personal de acces pe care îl oferi și de apartenențele lui la spații de lucru.',
      'MCP se află în codul sursă de dezvoltare și în versiunile nightly, nu în descărcările alfa.',
    ],
    note: 'Acesta este un exemplu de cerere, nu o conversație înregistrată.',
    link: 'Citește ghidul MCP',
  },
  carousel: {
    title: 'Mai mult din ce este construit', intro: 'Restul funcțiilor, grupate. Folosește butoanele, glisează sau derulează.',
    note: 'Aceste funcții sunt disponibile în codul sursă de dezvoltare. Versiunea alfa publicată conține un subset.',
    label: 'Carusel de grupuri de funcții',
    groups: [
      { id: 'lists', tab: 'Liste', title: 'Liste și partajare', items: ['Liste tipizate pentru diferite feluri de muncă', 'Subsarcini în cadrul sarcinilor', 'Priorități și etichete', 'Atribuire către membrii spațiului de lucru', 'Spații de lucru comune cu apartenențe'] },
      { id: 'routines', tab: 'Rutine', title: 'Obiceiuri și rutine', items: ['Obiceiuri urmărite în timp', 'Sarcini recurente', 'Serii', 'Un mod de concentrare pentru sarcina curentă'] },
      { id: 'reminders', tab: 'Mementouri', title: 'Mementouri', items: ['Livrare prin ntfy, Telegram, Discord, Slack și e-mail', 'Ore de liniște', 'Confirmarea mementourilor'] },
      { id: 'views', tab: 'Vizualizări', title: 'Moduri de a vedea sarcinile', items: ['Panouri de control', 'Calendar', 'Tablă', 'Tabel', 'Vizualizări salvate'] },
      { id: 'files', tab: 'Fișiere', title: 'Fișiere și recuperare', items: ['Atașamente criptate', 'Comentarii la sarcini', 'Istoricul modificărilor', 'Export și import, cu excluderi documentate'] },
      { id: 'access', tab: 'Acces', title: 'Autentificare și integrări', items: ['Passkey-uri și TOTP', 'Token-uri personale de acces', 'API HTTP, fluxuri iCal și webhook-uri', 'CLI, TUI și MCP'] },
      { id: 'custom', tab: 'Aspect', title: 'Personalizare', items: ['Șase limbi de interfață, inclusiv araba de la dreapta la stânga', 'Teme luminoasă și întunecată', 'Culori de accent și teme partajate', 'Dimensiunea textului și o opțiune de contrast ridicat'] },
    ],
  },
};
