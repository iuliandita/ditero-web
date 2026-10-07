import type { Locale } from './shared';

interface Row { name: string; state: string; text: string }
interface Item { title: string; text: string }

export interface HomeCopy {
  meta: { title: string; description: string };
  ui: {
    skip: string; mainNav: string; footerNav: string; features: string; access: string; support: string; source: string; selfHost: string;
    about: string; privacy: string; license: string; issues: string; language: string; theme: string; footerNote: string; home: string;
  };
  hero: { line1: string; line2: string; intro: string; primary: string; apps: string; status: string };
  capture: { dashboardAlt: string; dashboardCompactAlt: string; desktopAlt: string; mobileAlt: string; open: string };
  gallery: { title: string; note: string; items: Record<'priorities' | 'task-detail' | 'recurrence-reminders' | 'saved-filters', { title: string; caption: string; alt: string }> };
  features: { title: string; intro: string; proof: Record<'task-detail' | 'recurrence-reminders' | 'dashboard', Item> };
  access: {
    title: string; intro: string; publicTitle: string; devTitle: string;
    public: Record<'web' | 'android' | 'desktop' | 'ios', Row>;
    dev: Record<'cli' | 'tui' | 'api' | 'mcp', Row>;
    labels: { setup: string; release: string; guide: string };
  };
  server: { title: string; text: string; link: string; docs: string; encryption: string };
  support: { title: string; text: string; kofi: string; sponsor: string };
}

const en: HomeCopy = {
  meta: { title: 'Shared lists. Your server.', description: 'Ditero is an open-source, self-hosted todo app for households, clubs and small teams. Share shopping lists, chores, habits and projects from one server you run.' },
  ui: { selfHost: 'Self-host', skip: 'Skip to content', mainNav: 'Main navigation', footerNav: 'Footer links', features: 'Features', access: 'Apps and tools', support: 'Support', source: 'Source code', about: 'About', privacy: 'Privacy', license: 'MIT license', issues: 'Issues', language: 'Language', theme: 'Dark theme', footerNote: 'Open source under the MIT license.', home: 'Ditero home' },
  hero: { line1: 'Shared lists.', line2: 'Your server.', intro: 'Shared tasks, shopping and routines for households and small groups. Self-hosted, with offline sync and web, mobile, desktop and terminal clients.', primary: 'Set up your server', apps: 'Apps and tools', status: "Alpha:" },
  capture: { dashboardCompactAlt: 'Ditero household dashboard showing task priorities.', dashboardAlt: "Ditero household dashboard showing task priorities, a habit streak and focus time.", desktopAlt: "Ditero household tasks grouped by priority.", mobileAlt: 'The Ditero mobile app showing a shared list with example tasks.', open: 'Open full-size screenshot' },
  gallery: {
    title: "A closer look",
    note: "English development previews with fictional household data.",
    items: {
      'priorities': { title: "Priorities at a glance", caption: "Group tasks by priority, with assignees, dates and labels in view.", alt: "Dark Ditero board with high, medium, low and unprioritized tasks, assignees, dates and labels." },
      'task-detail': { title: "Shared task details", caption: "See assignees, subtasks, notes and comments together.", alt: "Ditero task details with two assignees, notes and two subtasks." },
      'recurrence-reminders': { title: "Recurrence and reminders", caption: "Set weekly repeats and a reminder time in task details.", alt: "Two Ditero task-detail excerpts showing the task title, weekly Saturday repeat and 9 AM reminder controls." },
      'saved-filters': { title: "Saved filters and views", caption: "Save list and status filters with a board layout and priority grouping.", alt: "Dark Ditero saved view editor with list and status conditions, board layout and priority grouping." },
    },
  },
  features: {
    title: 'What Ditero does', intro: 'Lists and tasks for people who share a home, a club or a small team.',
    proof: {
      'task-detail': { title: 'Share the work', text: 'Assign tasks, share notes, and break plans into subtasks.' },
      'recurrence-reminders': { title: 'Chores and habits', text: 'Repeat the chores. Build habits. Set reminders for the right time.' },
      'dashboard': { title: 'Dashboards', text: 'Keep your priorities in view.' },
    },
  },
  access: {
    title: 'Apps and tools', intro: "One server for your group. Reach it from the web, your phone, your desktop or your own tools.",
    publicTitle: 'Apps', devTitle: "Tools and API",
    public: {
      web: { name: 'Web', state: 'Alpha', text: 'Use Ditero in your browser, with offline changes synced when you reconnect.' },
      android: { name: 'Android', state: 'Alpha', text: 'Signed, independent Android downloads.' },
      desktop: { name: 'Desktop', state: 'Experimental', text: 'Windows installers are unsigned and macOS builds are ad-hoc signed. Platform qualification is not complete.' },
      ios: { name: 'iOS', state: 'Not available yet', text: 'There is no native iOS app yet.' },
    },
    dev: {
      cli: { name: 'CLI', state: 'Run from source', text: 'View, create and update tasks from the command line.' },
      tui: { name: 'TUI', state: 'Run from source', text: 'Browse and manage tasks interactively with the keyboard.' },
      api: { name: 'API', state: "Alpha", text: 'Connect your HTTP clients using personal access tokens and OpenAPI.' },
      mcp: { name: 'MCP', state: 'Run from source', text: 'Let a connected assistant plan, create and manage tasks.' },
    },
    labels: { setup: 'Setup guide', release: 'Downloads', guide: 'Guide' },
  },
  server: { title: 'Run the server yourself', text: "Run Ditero on your infrastructure. Inspect the MIT‑licensed code and decide who has access. Docker Compose and Helm guides are available.", link: 'Read the deployment guide', docs: 'Read the documentation', encryption: 'Attachments are encrypted, which protects file content. This does not mean all task data is end-to-end encrypted.' },
  support: { title: 'Support development', text: 'Ditero is free and MIT licensed. There are no paid feature unlocks. Support contributes to the development of the project.', kofi: 'Support on Ko-fi', sponsor: 'Sponsor Ditero' },
};

const de: HomeCopy = {
  meta: { title: 'Gemeinsame Listen. Dein Server.', description: 'Ditero ist eine quelloffene, selbst gehostete Aufgaben-App für Haushalte, Vereine und kleine Teams. Teile Einkaufslisten, Hausarbeit, Gewohnheiten und Projekte von einem Server, den du selbst betreibst.' },
  ui: { selfHost: 'Selbst hosten', skip: 'Zum Inhalt springen', mainNav: 'Hauptnavigation', footerNav: 'Weitere Links', features: 'Funktionen', access: 'Apps und Werkzeuge', support: 'Unterstützen', source: 'Quellcode', about: 'Über Ditero', privacy: 'Datenschutz', license: 'MIT-Lizenz', issues: 'Fehler melden', language: 'Sprache', theme: 'Dunkles Design', footerNote: 'Quelloffen unter der MIT-Lizenz.', home: 'Ditero Startseite' },
  hero: { line1: 'Gemeinsame Listen.', line2: 'Dein Server.', intro: 'Gemeinsame Aufgaben, Einkäufe und Routinen für Haushalte und kleine Gruppen. Selbst gehostet, mit Offline-Sync und Clients für Web, Mobilgeräte, Desktop und Terminal.', primary: 'Server einrichten', apps: 'Apps und Werkzeuge', status: "Alpha:" },
  capture: { dashboardCompactAlt: 'Ditero-Haushaltsdashboard mit Aufgabenprioritäten.', dashboardAlt: "Ditero-Haushaltsdashboard mit Aufgabenprioritäten, einer Gewohnheitsserie und Fokuszeit.", desktopAlt: "Haushaltsaufgaben in Ditero, nach Priorität gruppiert.", mobileAlt: 'Die mobile Ditero-App mit einer gemeinsamen Liste und Beispielaufgaben.', open: 'Screenshot in voller Größe öffnen' },
  gallery: {
    title: "Genauer hinsehen",
    note: "Entwicklungsvorschauen auf Englisch mit erfundenen Haushaltsdaten.",
    items: {
      'priorities': { title: "Prioritäten auf einen Blick", caption: "Gruppiere Aufgaben nach Priorität und behalte Zuständige, Termine und Labels im Blick.", alt: "Dunkles Ditero-Board mit Aufgaben hoher, mittlerer, niedriger und ohne Priorität, Zuständigen, Terminen und Labels." },
      'task-detail': { title: "Details gemeinsamer Aufgaben", caption: "Sieh Zuständige, Unteraufgaben, Notizen und Kommentare zusammen.", alt: "Ditero-Aufgabendetails mit zwei Zuständigen, Notizen und zwei Unteraufgaben." },
      'recurrence-reminders': { title: "Wiederholungen und Erinnerungen", caption: "Lege wöchentliche Wiederholungen und eine Erinnerungszeit in den Aufgabendetails fest.", alt: "Zwei Ausschnitte der Ditero-Aufgabendetails mit Aufgabentitel, wöchentlicher Wiederholung am Samstag und Erinnerung um 9 Uhr." },
      'saved-filters': { title: "Gespeicherte Filter und Ansichten", caption: "Speichere Listen- und Statusfilter mit Board-Layout und Gruppierung nach Priorität.", alt: "Dunkler Ditero-Ansichtseditor mit Listen- und Statusbedingungen, Board-Layout und Gruppierung nach Priorität." },
    },
  },
  features: {
    title: 'Was Ditero kann', intro: 'Listen und Aufgaben für Menschen, die sich ein Zuhause, einen Verein oder ein kleines Team teilen.',
    proof: {
      'task-detail': { title: 'Aufgaben gemeinsam verteilen', text: 'Weise Aufgaben zu, teile Notizen und zerlege Pläne in Unteraufgaben.' },
      'recurrence-reminders': { title: 'Hausarbeit und Gewohnheiten', text: 'Wiederhole Hausarbeit. Baue Gewohnheiten auf. Lass dich rechtzeitig erinnern.' },
      'dashboard': { title: 'Dashboards', text: 'Behalte deine Prioritäten im Blick.' },
    },
  },
  access: {
    title: 'Apps und Werkzeuge', intro: "Ein Server für deine Gruppe. Nutze ihn im Web, auf dem Smartphone, am Desktop oder mit deinen eigenen Werkzeugen.",
    publicTitle: 'Apps', devTitle: "Werkzeuge und API",
    public: {
      web: { name: 'Web', state: 'Alpha', text: 'Nutze Ditero im Browser; offline vorgenommene Änderungen werden synchronisiert, sobald du wieder verbunden bist.' },
      android: { name: 'Android', state: 'Alpha', text: 'Signierte, unabhängige Android-Downloads.' },
      desktop: { name: 'Desktop', state: 'Experimentell', text: 'Windows-Installer sind unsigniert, macOS-Builds sind ad-hoc signiert. Die Plattformqualifizierung ist nicht abgeschlossen.' },
      ios: { name: 'iOS', state: 'Noch nicht verfügbar', text: 'Es gibt noch keine native iOS-App.' },
    },
    dev: {
      cli: { name: 'CLI', state: 'Aus Quellcode starten', text: 'Zeige, erstelle und bearbeite Aufgaben über die Kommandozeile.' },
      tui: { name: 'TUI', state: 'Aus Quellcode starten', text: 'Durchsuche und verwalte Aufgaben interaktiv mit der Tastatur.' },
      api: { name: 'API', state: "Alpha", text: 'Binde deine HTTP-Clients mit persönlichen Zugriffstoken und OpenAPI an.' },
      mcp: { name: 'MCP', state: 'Aus Quellcode starten', text: 'Lass einen verbundenen Assistenten Aufgaben planen, erstellen und verwalten.' },
    },
    labels: { setup: 'Einrichtungsanleitung', release: 'Downloads', guide: 'Anleitung' },
  },
  server: { title: 'Betreibe den Server selbst', text: "Betreibe Ditero auf deiner Infrastruktur. Prüfe den MIT-lizenzierten Code und bestimme, wer Zugriff hat. Anleitungen für Docker Compose und Helm sind verfügbar.", link: 'Anleitung zur Einrichtung lesen', docs: 'Dokumentation lesen', encryption: 'Anhänge sind verschlüsselt und schützen so Dateiinhalte. Das bedeutet nicht, dass alle Aufgabendaten Ende-zu-Ende-verschlüsselt sind.' },
  support: { title: 'Entwicklung unterstützen', text: 'Ditero ist kostenlos und MIT-lizenziert. Es gibt keine kostenpflichtigen Funktionen. Unterstützung trägt zur Weiterentwicklung des Projekts bei.', kofi: 'Auf Ko-fi unterstützen', sponsor: 'Ditero sponsern' },
};

const es: HomeCopy = {
  meta: { title: 'Listas compartidas. Tu servidor.', description: 'Ditero es una aplicación de tareas de código abierto y autoalojada para hogares, clubes y equipos pequeños. Comparte listas de la compra, tareas del hogar, hábitos y proyectos desde un servidor que gestionas tú.' },
  ui: { selfHost: 'Autoalojar', skip: 'Saltar al contenido', mainNav: 'Navegación principal', footerNav: 'Enlaces del pie de página', features: 'Funciones', access: 'Apps y herramientas', support: 'Apoyar', source: 'Código fuente', about: 'Acerca de', privacy: 'Privacidad', license: 'Licencia MIT', issues: 'Incidencias', language: 'Idioma', theme: 'Tema oscuro', footerNote: 'Código abierto con licencia MIT.', home: 'Inicio de Ditero' },
  hero: { line1: 'Listas compartidas.', line2: 'Tu servidor.', intro: 'Tareas, compras y rutinas compartidas para hogares y grupos pequeños. En tu servidor, con sincronización sin conexión y clientes web, móviles, de escritorio y terminal.', primary: 'Configurar tu servidor', apps: 'Apps y herramientas', status: "Alfa:" },
  capture: { dashboardCompactAlt: 'Panel del hogar en Ditero con las prioridades de las tareas.', dashboardAlt: "Panel del hogar en Ditero con prioridades de tareas, una racha de hábito y tiempo de concentración.", desktopAlt: "Tareas del hogar en Ditero agrupadas por prioridad.", mobileAlt: 'La aplicación móvil de Ditero con una lista compartida y tareas de ejemplo.', open: 'Abrir la captura a tamaño completo' },
  gallery: {
    title: "Una mirada más de cerca",
    note: "Vistas previas de desarrollo en inglés con datos ficticios de un hogar.",
    items: {
      'priorities': { title: "Prioridades de un vistazo", caption: "Agrupa tareas por prioridad y consulta responsables, fechas y etiquetas.", alt: "Tablero oscuro de Ditero con tareas de prioridad alta, media, baja y sin prioridad, responsables, fechas y etiquetas." },
      'task-detail': { title: "Detalles de tareas compartidas", caption: "Consulta responsables, subtareas, notas y comentarios juntos.", alt: "Detalles de Ditero con dos responsables, notas y dos subtareas." },
      'recurrence-reminders': { title: "Repeticiones y recordatorios", caption: "Configura repeticiones semanales y una hora de recordatorio en los detalles de la tarea.", alt: "Dos fragmentos de los detalles de Ditero con el título, la repetición semanal los sábados y los controles del recordatorio a las 9 de la mañana." },
      'saved-filters': { title: "Filtros y vistas guardados", caption: "Guarda filtros de lista y estado con diseño de tablero y agrupación por prioridad.", alt: "Editor oscuro de vistas de Ditero con condiciones de lista y estado, diseño de tablero y agrupación por prioridad." },
    },
  },
  features: {
    title: 'Qué hace Ditero', intro: 'Listas y tareas para quienes comparten casa, club o equipo pequeño.',
    proof: {
      'task-detail': { title: 'Repartir las tareas', text: 'Asigna tareas, comparte notas y divide los planes en subtareas.' },
      'recurrence-reminders': { title: 'Tareas del hogar y hábitos', text: 'Repite las tareas del hogar. Crea hábitos. Recibe recordatorios a tiempo.' },
      'dashboard': { title: 'Paneles', text: 'Ten tus prioridades a la vista.' },
    },
  },
  access: {
    title: 'Apps y herramientas', intro: "Un servidor para tu grupo. Accede desde la web, el móvil, el escritorio o tus propias herramientas.",
    publicTitle: 'Aplicaciones', devTitle: "Herramientas y API",
    public: {
      web: { name: 'Web', state: 'Alfa', text: 'Usa Ditero en el navegador, con sincronización de los cambios sin conexión al reconectarte.' },
      android: { name: 'Android', state: 'Alfa', text: 'Descargas de Android independientes y firmadas.' },
      desktop: { name: 'Escritorio', state: 'Experimental', text: 'Los instaladores de Windows no están firmados y las compilaciones de macOS tienen firma ad hoc. La cualificación de plataformas no está completa.' },
      ios: { name: 'iOS', state: 'Aún no disponible', text: 'Todavía no hay una app nativa para iOS.' },
    },
    dev: {
      cli: { name: 'CLI', state: 'Desde código fuente', text: 'Consulta, crea y actualiza tareas desde la línea de comandos.' },
      tui: { name: 'TUI', state: 'Desde código fuente', text: 'Explora y gestiona tareas de forma interactiva con el teclado.' },
      api: { name: 'API', state: "Alfa", text: 'Conecta tus clientes HTTP con tokens de acceso personal y OpenAPI.' },
      mcp: { name: 'MCP', state: 'Desde código fuente', text: 'Deja que un asistente conectado planifique, cree y gestione tareas.' },
    },
    labels: { setup: 'Guía de instalación', release: 'Descargas', guide: 'Guía' },
  },
  server: { title: 'Gestiona tú el servidor', text: "Ejecuta Ditero en tu infraestructura. Revisa el código con licencia MIT y decide quién tiene acceso. Hay guías de Docker Compose y Helm.", link: 'Leer la guía de despliegue', docs: 'Leer la documentación', encryption: 'Los archivos adjuntos están cifrados, lo que protege su contenido. Esto no significa que todos los datos de las tareas tengan cifrado de extremo a extremo.' },
  support: { title: 'Apoyar el desarrollo', text: 'Ditero es gratuito y tiene licencia MIT. No hay funciones de pago. El apoyo contribuye al desarrollo del proyecto.', kofi: 'Apoyar en Ko-fi', sponsor: 'Patrocinar Ditero' },
};

const fr: HomeCopy = {
  meta: { title: 'Listes partagées. Votre serveur.', description: 'Ditero est une application de tâches open source et auto-hébergée pour les foyers, les associations et les petites équipes. Partagez listes de courses, tâches ménagères, habitudes et projets depuis un serveur que vous gérez.' },
  ui: { selfHost: 'Auto-héberger', skip: 'Aller au contenu', mainNav: 'Navigation principale', footerNav: 'Liens de pied de page', features: 'Fonctionnalités', access: 'Apps et outils', support: 'Soutenir', source: 'Code source', about: 'À propos', privacy: 'Confidentialité', license: 'Licence MIT', issues: 'Signaler un problème', language: 'Langue', theme: 'Thème sombre', footerNote: 'Open source sous licence MIT.', home: 'Accueil Ditero' },
  hero: { line1: 'Listes partagées.', line2: 'Votre serveur.', intro: 'Tâches, courses et routines partagées pour les foyers et petits groupes. Sur votre serveur, avec synchronisation hors ligne et clients web, mobiles, de bureau et en terminal.', primary: 'Installer votre serveur', apps: 'Apps et outils', status: "Alpha :" },
  capture: { dashboardCompactAlt: 'Tableau de bord du foyer Ditero avec les priorités des tâches.', dashboardAlt: "Tableau de bord du foyer Ditero avec les priorités des tâches, une série pour une habitude et le temps de concentration.", desktopAlt: "Tâches du foyer dans Ditero regroupées par priorité.", mobileAlt: "L'application mobile Ditero affichant une liste partagée avec des tâches d'exemple.", open: 'Ouvrir la capture en taille réelle' },
  gallery: {
    title: "Voir de plus près",
    note: "Aperçus de développement en anglais avec les données fictives d’un foyer.",
    items: {
      'priorities': { title: "Les priorités en un coup d’œil", caption: "Regroupez les tâches par priorité, avec les responsables, les dates et les étiquettes à portée de vue.", alt: "Tableau sombre de Ditero avec des tâches de priorité haute, moyenne, basse et sans priorité, leurs responsables, dates et étiquettes." },
      'task-detail': { title: "Détails des tâches partagées", caption: "Retrouvez les responsables, les sous-tâches, les notes et les commentaires ensemble.", alt: "Détails de Ditero avec deux responsables, des notes et deux sous-tâches." },
      'recurrence-reminders': { title: "Récurrence et rappels", caption: "Réglez les répétitions hebdomadaires et l’heure du rappel dans les détails de la tâche.", alt: "Deux extraits des détails de Ditero avec le titre, la répétition chaque samedi et les réglages du rappel à 9 heures." },
      'saved-filters': { title: "Filtres et vues enregistrés", caption: "Enregistrez des filtres de liste et de statut avec une disposition en tableau et un regroupement par priorité.", alt: "Éditeur sombre de vues Ditero avec des conditions de liste et de statut, une disposition en tableau et un regroupement par priorité." },
    },
  },
  features: {
    title: 'Ce que fait Ditero', intro: 'Des listes et des tâches pour celles et ceux qui partagent un foyer, une association ou une petite équipe.',
    proof: {
      'task-detail': { title: 'Répartissez les tâches', text: 'Attribuez des tâches, partagez des notes et décomposez les projets en sous-tâches.' },
      'recurrence-reminders': { title: 'Tâches ménagères et habitudes', text: 'Répétez les tâches ménagères. Créez des habitudes. Recevez vos rappels au bon moment.' },
      'dashboard': { title: 'Tableaux de bord', text: 'Gardez vos priorités en vue.' },
    },
  },
  access: {
    title: 'Apps et outils', intro: "Un serveur pour votre groupe. Accédez-y depuis le web, votre téléphone, votre ordinateur ou vos propres outils.",
    publicTitle: 'Applications', devTitle: "Outils et API",
    public: {
      web: { name: 'Web', state: 'Alpha', text: "Utilisez Ditero dans votre navigateur, avec synchronisation des modifications hors ligne à la reconnexion." },
      android: { name: 'Android', state: 'Alpha', text: 'Téléchargements Android signés et indépendants.' },
      desktop: { name: 'Bureau', state: 'Expérimental', text: "Les installateurs Windows ne sont pas signés et les versions macOS ont une signature ad hoc. La qualification des plateformes n'est pas terminée." },
      ios: { name: 'iOS', state: 'Pas encore disponible', text: "Il n'existe pas encore d'application iOS native." },
    },
    dev: {
      cli: { name: 'CLI', state: 'Lancer depuis les sources', text: 'Consultez, créez et modifiez des tâches en ligne de commande.' },
      tui: { name: 'TUI', state: 'Lancer depuis les sources', text: 'Parcourez et gérez les tâches de façon interactive au clavier.' },
      api: { name: 'API', state: "Alpha", text: "Connectez vos clients HTTP avec des jetons d'accès personnels et OpenAPI." },
      mcp: { name: 'MCP', state: 'Lancer depuis les sources', text: 'Laissez un assistant connecté planifier, créer et gérer des tâches.' },
    },
    labels: { setup: "Guide d'installation", release: 'Téléchargements', guide: 'Guide' },
  },
  server: { title: 'Gérez le serveur vous-même', text: "Hébergez Ditero sur votre infrastructure. Consultez le code sous licence MIT et choisissez qui y accède. Guides Docker Compose et Helm disponibles.", link: 'Lire le guide de déploiement', docs: 'Lire la documentation', encryption: 'Les pièces jointes sont chiffrées, ce qui protège le contenu des fichiers. Cela ne signifie pas que toutes les données des tâches sont chiffrées de bout en bout.' },
  support: { title: 'Soutenir le développement', text: "Ditero est gratuit et sous licence MIT. Aucune fonctionnalité n'est payante. Le soutien contribue au développement du projet.", kofi: 'Soutenir sur Ko-fi', sponsor: 'Sponsoriser Ditero' },
};

const ro: HomeCopy = {
  meta: { title: 'Liste comune. Serverul tău.', description: 'Ditero este o aplicație de sarcini open source, găzduită de tine, pentru gospodării, cluburi și echipe mici. Partajează liste de cumpărături, treburi casnice, obiceiuri și proiecte de pe un server pe care îl administrezi tu.' },
  ui: { selfHost: 'Găzduiește', skip: 'Treci la conținut', mainNav: 'Navigare principală', footerNav: 'Linkuri din subsol', features: 'Funcții', access: 'Aplicații și instrumente', support: 'Sprijină', source: 'Cod sursă', about: 'Despre', privacy: 'Confidențialitate', license: 'Licența MIT', issues: 'Probleme', language: 'Limba', theme: 'Temă întunecată', footerNote: 'Open source sub licență MIT.', home: 'Pagina principală Ditero' },
  hero: { line1: 'Liste comune.', line2: 'Serverul tău.', intro: 'Sarcini, cumpărături și rutine comune pentru gospodării și grupuri mici. Pe serverul tău, cu sincronizare offline și clienți web, mobili, desktop și terminal.', primary: 'Configurează-ți serverul', apps: 'Aplicații și instrumente', status: "Alfa:" },
  capture: { dashboardCompactAlt: 'Tabloul de bord al gospodăriei în Ditero, cu prioritățile sarcinilor.', dashboardAlt: "Tabloul de bord al gospodăriei în Ditero, cu prioritățile sarcinilor, o serie de zile pentru un obicei și timpul de concentrare.", desktopAlt: "Sarcinile gospodăriei în Ditero, grupate după prioritate.", mobileAlt: 'Aplicația mobilă Ditero afișând o listă comună cu sarcini de exemplu.', open: 'Deschide captura de ecran la dimensiune completă' },
  gallery: {
    title: "O privire mai atentă",
    note: "Previzualizări din dezvoltare în engleză, cu date fictive ale unei gospodării.",
    items: {
      'priorities': { title: "Priorități dintr-o privire", caption: "Grupează sarcinile după prioritate și vezi responsabilii, datele și etichetele.", alt: "Panou Ditero întunecat cu sarcini de prioritate mare, medie, mică și fără prioritate, responsabili, date și etichete." },
      'task-detail': { title: "Detalii pentru sarcini comune", caption: "Vezi responsabilii, subsarcinile, notele și comentariile la un loc.", alt: "Detalii Ditero cu doi responsabili, note și două subsarcini." },
      'recurrence-reminders': { title: "Recurență și mementouri", caption: "Configurează repetări săptămânale și ora mementoului în detaliile sarcinii.", alt: "Două fragmente din detaliile Ditero cu titlul sarcinii, repetarea săptămânală sâmbăta și setările mementoului de la ora 9 dimineața." },
      'saved-filters': { title: "Filtre și vizualizări salvate", caption: "Salvează filtre pentru listă și stare, cu afișare pe coloane și grupare după prioritate.", alt: "Editor Ditero întunecat pentru vizualizări, cu condiții pentru listă și stare, afișare pe coloane și grupare după prioritate." },
    },
  },
  features: {
    title: 'Ce face Ditero', intro: 'Liste și sarcini pentru oamenii care împart o casă, un club sau o echipă mică.',
    proof: {
      'task-detail': { title: 'Împarte sarcinile', text: 'Atribuie sarcini, adaugă note și împarte planurile în subsarcini.' },
      'recurrence-reminders': { title: 'Treburi casnice și obiceiuri', text: 'Repetă treburile casnice. Formează obiceiuri. Primește mementouri la timp.' },
      'dashboard': { title: 'Panouri de control', text: 'Prioritățile tale, într-un singur loc.' },
    },
  },
  access: {
    title: 'Aplicații și instrumente', intro: "Un server pentru grupul tău. Accesează-l din browser, de pe telefon, desktop sau prin propriile instrumente.",
    publicTitle: 'Aplicații', devTitle: "Instrumente și API",
    public: {
      web: { name: 'Web', state: 'Alfa', text: 'Folosește Ditero în browser, cu sincronizarea modificărilor offline când te reconectezi.' },
      android: { name: 'Android', state: 'Alfa', text: 'Descărcări Android semnate și independente.' },
      desktop: { name: 'Desktop', state: 'Experimental', text: 'Programele de instalare pentru Windows nu sunt semnate, iar versiunile pentru macOS au semnătură ad hoc. Calificarea platformelor nu este încheiată.' },
      ios: { name: 'iOS', state: 'Încă indisponibil', text: 'Încă nu există o aplicație iOS nativă.' },
    },
    dev: {
      cli: { name: 'CLI', state: 'Rulează din sursă', text: 'Vezi, creează și actualizează sarcini din linia de comandă.' },
      tui: { name: 'TUI', state: 'Rulează din sursă', text: 'Navighează și gestionează sarcinile interactiv cu tastatura.' },
      api: { name: 'API', state: "Alfa", text: 'Conectează clienții HTTP folosind token-uri personale de acces și OpenAPI.' },
      mcp: { name: 'MCP', state: 'Rulează din sursă', text: 'Lasă un asistent conectat să planifice, să creeze și să gestioneze sarcini.' },
    },
    labels: { setup: 'Ghid de instalare', release: 'Descărcări', guide: 'Ghid' },
  },
  server: { title: 'Administrează serverul tu însuți', text: "Rulează Ditero pe infrastructura ta. Verifică sursa sub licență MIT și decide cine are acces. Ai ghiduri pentru Docker Compose și Helm.", link: 'Citește ghidul de implementare', docs: 'Citește documentația', encryption: 'Atașamentele sunt criptate, ceea ce protejează conținutul fișierelor. Asta nu înseamnă că toate datele sarcinilor sunt criptate integral (end-to-end).' },
  support: { title: 'Sprijină dezvoltarea', text: 'Ditero este gratuit și are licență MIT. Nu există funcții cu plată. Sprijinul contribuie la dezvoltarea proiectului.', kofi: 'Sprijină pe Ko-fi', sponsor: 'Sponsorizează Ditero' },
};

const ar: HomeCopy = {
  meta: { title: 'قوائم مشتركة. خادمك.', description: 'Ditero تطبيق مهام مفتوح المصدر ومستضاف ذاتيًا للأسر والنوادي والفرق الصغيرة. شارك قوائم التسوق والمهام المنزلية والعادات والمشاريع من خادم تديره بنفسك.' },
  ui: { selfHost: 'استضافة ذاتية', skip: 'تخطَّ إلى المحتوى', mainNav: 'التنقل الرئيسي', footerNav: 'روابط التذييل', features: 'الميزات', access: 'التطبيقات والأدوات', support: 'الدعم', source: 'الشيفرة المصدرية', about: 'حول', privacy: 'الخصوصية', license: 'ترخيص MIT', issues: 'المشكلات', language: 'اللغة', theme: 'السمة الداكنة', footerNote: 'مفتوح المصدر بترخيص MIT.', home: 'الصفحة الرئيسية لـ Ditero' },
  hero: { line1: 'قوائم مشتركة.', line2: 'خادمك.', intro: 'مهام وتسوق وروتين مشترك للأسر والمجموعات الصغيرة. على خادمك، مع مزامنة دون اتصال وتطبيقات للويب والجوال وسطح المكتب والطرفية.', primary: 'إعداد الخادم الخاص بك', apps: 'التطبيقات والأدوات', status: "ألفا:" },
  capture: { dashboardCompactAlt: 'لوحة الأسرة في Ditero تعرض أولويات المهام.', dashboardAlt: "لوحة الأسرة في Ditero تعرض أولويات المهام وسلسلة التزام بعادة ووقت التركيز.", desktopAlt: "مهام الأسرة في Ditero مجمّعة حسب الأولوية.", mobileAlt: 'تطبيق Ditero على الجوال يعرض قائمة مشتركة بمهام تجريبية.', open: 'افتح لقطة الشاشة بالحجم الكامل' },
  gallery: {
    title: "نظرة أقرب",
    note: "معاينات من نسخة التطوير بواجهة إنجليزية وبيانات منزلية خيالية.",
    items: {
      'priorities': { title: "الأولويات في لمحة", caption: "جمّع المهام حسب الأولوية، وشاهد المسؤولين والتواريخ والتصنيفات.", alt: "لوحة Ditero داكنة بمهام ذات أولوية عالية ومتوسطة ومنخفضة ومهام دون أولوية، مع المسؤولين والتواريخ والتصنيفات." },
      'task-detail': { title: "تفاصيل المهام المشتركة", caption: "شاهد المسؤولين والمهام الفرعية والملاحظات والتعليقات معًا.", alt: "تفاصيل Ditero تعرض مسؤولَين وملاحظات ومهمتين فرعيتين." },
      'recurrence-reminders': { title: "التكرار والتذكيرات", caption: "اضبط التكرار الأسبوعي ووقت التذكير في تفاصيل المهمة.", alt: "مقتطفان من تفاصيل Ditero يعرضان عنوان المهمة والتكرار الأسبوعي يوم السبت وإعدادات التذكير الساعة التاسعة صباحًا." },
      'saved-filters': { title: "الفلاتر والعروض المحفوظة", caption: "احفظ فلاتر القائمة والحالة مع تخطيط لوحة وتجميع حسب الأولوية.", alt: "محرر عروض داكن في Ditero يعرض شروط القائمة والحالة وتخطيط لوحة وتجميعًا حسب الأولوية." },
    },
  },
  features: {
    title: 'ماذا يفعل Ditero', intro: 'قوائم ومهام لمن يتشاركون منزلًا أو ناديًا أو فريقًا صغيرًا.',
    proof: {
      'task-detail': { title: 'تقاسم المهام', text: 'أسنِد المهام، وشارك الملاحظات، وقسّم الخطط إلى مهام فرعية.' },
      'recurrence-reminders': { title: 'المهام المنزلية والعادات', text: 'كرّر المهام المنزلية. ابنِ عادات. اضبط التذكيرات في الوقت المناسب.' },
      'dashboard': { title: 'لوحات المعلومات', text: 'أبقِ أولوياتك واضحة.' },
    },
  },
  access: {
    title: 'التطبيقات والأدوات', intro: "خادم واحد لمجموعتك. استخدمه عبر الويب أو الهاتف أو سطح المكتب أو أدواتك الخاصة.",
    publicTitle: 'التطبيقات', devTitle: "الأدوات وواجهة API",
    public: {
      web: { name: 'الويب', state: 'ألفا', text: 'استخدم Ditero في متصفحك، مع مزامنة التغييرات التي أجريتها دون اتصال عند إعادة الاتصال.' },
      android: { name: 'Android', state: 'ألفا', text: 'تنزيلات Android موقّعة ومستقلة.' },
      desktop: { name: 'سطح المكتب', state: 'تجريبي', text: 'مثبّتات Windows غير موقّعة، وإصدارات macOS موقّعة توقيعًا مؤقتًا (ad hoc). لم يكتمل تأهيل المنصات بعد.' },
      ios: { name: 'iOS', state: 'غير متاح بعد', text: 'لا يوجد تطبيق iOS أصلي بعد.' },
    },
    dev: {
      cli: { name: 'CLI', state: 'التشغيل من المصدر', text: 'اعرض المهام وأنشئها وحدّثها من سطر الأوامر.' },
      tui: { name: 'TUI', state: 'التشغيل من المصدر', text: 'تصفّح المهام وأدِرها تفاعليًا باستخدام لوحة المفاتيح.' },
      api: { name: 'API', state: "ألفا", text: 'اربط عملاء HTTP باستخدام رموز الوصول الشخصية وOpenAPI.' },
      mcp: { name: 'MCP', state: 'التشغيل من المصدر', text: 'دع مساعدًا متصلًا يخطط للمهام وينشئها ويديرها.' },
    },
    labels: { setup: 'دليل الإعداد', release: 'التنزيلات', guide: 'الدليل' },
  },
  server: { title: 'شغّل الخادم بنفسك', text: "شغّل Ditero على بنيتك التحتية. افحص الشيفرة بترخيص MIT وحدد من يملك الوصول. تتوفر أدلة Docker Compose وHelm.", link: 'اقرأ دليل النشر', docs: 'اقرأ الوثائق', encryption: 'المرفقات مشفرة، مما يحمي محتوى الملفات. لا يعني ذلك أن كل بيانات المهام مشفرة من طرف إلى طرف.' },
  support: { title: 'ادعم التطوير', text: 'Ditero مجاني وبترخيص MIT. لا توجد ميزات مدفوعة. يساهم الدعم في تطوير المشروع.', kofi: 'ادعم على Ko-fi', sponsor: 'كن راعيًا لـ Ditero' },
};

export const copy: Record<Locale, HomeCopy> = { en, de, es, fr, ro, ar };
