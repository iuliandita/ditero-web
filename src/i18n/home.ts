import type { Locale } from './shared';

interface Row { name: string; state: string; text: string }
interface Item { title: string; text: string }

export interface HomeCopy {
  meta: { title: string; description: string };
  ui: {
    skip: string; mainNav: string; footerNav: string; features: string; access: string; support: string; source: string;
    about: string; privacy: string; license: string; issues: string; language: string; theme: string; footerNote: string; home: string;
  };
  hero: { line1: string; line2: string; intro: string; primary: string; apps: string; status: string };
  capture: { dashboardAlt: string; desktopAlt: string; mobileAlt: string; open: string };
  gallery: { title: string; note: string; items: Record<'priorities' | 'task-detail' | 'recurrence-reminders' | 'saved-filters', { title: string; caption: string; alt: string }> };
  features: { title: string; intro: string; items: Item[] };
  mobile: { title: string; text: string; link: string };
  access: {
    title: string; intro: string; publicTitle: string; devTitle: string;
    public: Record<'web' | 'android' | 'desktop' | 'ios', Row>;
    dev: Record<'cli' | 'tui' | 'api' | 'mcp', Row>;
    labels: { setup: string; release: string; guide: string };
    note: string;
  };
  server: { title: string; text: string; link: string; docs: string; encryption: string };
  support: { title: string; text: string; kofi: string; sponsor: string };
}

const en: HomeCopy = {
  meta: { title: 'Shared lists. Your server.', description: 'Ditero is an open-source, self-hosted todo app for households, clubs and small teams. Share shopping lists, chores, habits and projects from one server you run.' },
  ui: { skip: 'Skip to content', mainNav: 'Main navigation', footerNav: 'Footer links', features: 'Features', access: 'Apps and tools', support: 'Support', source: 'Source code', about: 'About', privacy: 'Privacy', license: 'MIT license', issues: 'Issues', language: 'Language', theme: 'Dark theme', footerNote: 'Open source under the MIT license.', home: 'Ditero home' },
  hero: { line1: 'Shared lists.', line2: 'Your server.', intro: 'Shared tasks, shopping and routines for households and small groups. Self-hosted, with offline sync and web, mobile, desktop and terminal clients.', primary: 'Set up your server', apps: 'Apps and tools', status: 'Early alpha. Latest release: v0.0.1-alpha.2. MIT licensed.' },
  capture: { dashboardAlt: "Ditero household dashboard showing priorities, open tasks, a habit streak and focus time.", desktopAlt: 'The Ditero web app showing a shared list with example tasks.', mobileAlt: 'The Ditero mobile app showing a shared list with example tasks.', open: 'Open full-size screenshot' },
  gallery: {
    title: "A closer look",
    note: "English development previews with fictional household data.",
    items: {
      'priorities': { title: "Priorities at a glance", caption: "Group tasks by priority, with assignees, dates and labels in view.", alt: "Dark Ditero board with high, medium, low and unprioritized tasks, assignees, dates and labels." },
      'task-detail': { title: "Shared task details", caption: "See assignees, subtasks, notes and comments together.", alt: "Light Ditero task detail panel with two assignees, a due date, priority, notes, three subtasks and a comment." },
      'recurrence-reminders': { title: "Recurrence and reminders", caption: "Set weekly repeats and a reminder time in task details.", alt: "Light Ditero task detail panel showing a weekly Saturday repeat and a 9 AM reminder setting." },
      'saved-filters': { title: "Saved filters and views", caption: "Save list and status filters with a board layout and priority grouping.", alt: "Dark Ditero saved view editor with list and status conditions, board layout and priority grouping." },
    },
  },
  features: {
    title: 'What Ditero does', intro: 'Lists and tasks for people who share a home, a club or a small team.',
    items: [
      { title: 'Shared lists', text: 'Create lists for shopping, projects and checklists in a shared workspace, and assign each task to someone.' },
      { title: 'Chores and habits', text: 'Set up recurring tasks and reminders for chores and habits, and assign them to members of the group.' },
      { title: 'Dashboards', text: 'Keep track of open and upcoming tasks from your lists on dashboards.' },
      { title: 'Comments and attachments', text: 'Discuss a task in comments and keep files with it. Attachments are encrypted.' },
      { title: 'Offline sync', text: 'Keep working without a connection. Changes sync when you reconnect.' },
      { title: 'Languages and themes', text: 'Six interface languages plus light and dark themes: English, German, Spanish, French, Romanian and Arabic (right to left).' },
    ],
  },
  mobile: { title: 'On your phone', text: 'Open Ditero in a mobile browser and install it, or use the signed independent Android downloads from the alpha release. A native iOS app is not available yet.', link: 'See Android downloads' },
  access: {
    title: 'Apps and tools', intro: 'Your Ditero server is the shared place. These are the ways to reach it. The public alpha release includes the web app and Android and desktop downloads. The command-line, terminal, API and MCP tools are in the development source.',
    publicTitle: 'In the public alpha release', devTitle: 'In the development source (not alpha downloads)',
    public: {
      web: { name: 'Web app', state: 'Alpha', text: 'Use the web app in a current browser and install it from there. Changes made offline sync when you reconnect.' },
      android: { name: 'Android', state: 'Alpha', text: 'Signed, independent Android downloads.' },
      desktop: { name: 'Desktop', state: 'Experimental', text: 'Windows installers are unsigned and macOS builds are ad-hoc signed. Platform qualification is not complete.' },
      ios: { name: 'iOS', state: 'Not available yet', text: 'There is no native iOS app yet.' },
    },
    dev: {
      cli: { name: 'CLI', state: 'In source', text: 'Command-line client.' },
      tui: { name: 'TUI', state: 'In source', text: 'Terminal interface.' },
      api: { name: 'API', state: 'In source', text: 'Membership-scoped HTTP API with personal access tokens and an OpenAPI description.' },
      mcp: { name: 'MCP', state: 'In source', text: 'Local MCP server for tools that support the Model Context Protocol.' },
    },
    labels: { setup: 'Setup guide', release: 'Release page', guide: 'Guide' },
    note: 'Early software changes quickly. Review the setup, backup and platform notes before relying on it.',
  },
  server: { title: 'Run the server yourself', text: 'Ditero is self-hosted and open source under the MIT license. You run the server on your own infrastructure, inspect the code and decide who has access. Docker Compose and Helm documentation is available.', link: 'Read the deployment guide', docs: 'Read the documentation', encryption: 'Attachments are encrypted, which protects file content. This does not mean all task data is end-to-end encrypted.' },
  support: { title: 'Support development', text: 'Ditero is free and MIT licensed. There are no paid feature unlocks. Support contributes to the development of the project.', kofi: 'Support development', sponsor: 'Sponsor Ditero' },
};

const de: HomeCopy = {
  meta: { title: 'Gemeinsame Listen. Dein Server.', description: 'Ditero ist eine quelloffene, selbst gehostete Aufgaben-App für Haushalte, Vereine und kleine Teams. Teile Einkaufslisten, Hausarbeit, Gewohnheiten und Projekte von einem Server, den du selbst betreibst.' },
  ui: { skip: 'Zum Inhalt springen', mainNav: 'Hauptnavigation', footerNav: 'Weitere Links', features: 'Funktionen', access: 'Apps und Werkzeuge', support: 'Unterstützen', source: 'Quellcode', about: 'Über Ditero', privacy: 'Datenschutz', license: 'MIT-Lizenz', issues: 'Fehler melden', language: 'Sprache', theme: 'Dunkles Design', footerNote: 'Quelloffen unter der MIT-Lizenz.', home: 'Ditero Startseite' },
  hero: { line1: 'Gemeinsame Listen.', line2: 'Dein Server.', intro: 'Gemeinsame Aufgaben, Einkäufe und Routinen für Haushalte und kleine Gruppen. Selbst gehostet, mit Offline-Sync und Clients für Web, Mobilgeräte, Desktop und Terminal.', primary: 'Server einrichten', apps: 'Apps und Werkzeuge', status: 'Frühe Alpha. Aktuelle Version: v0.0.1-alpha.2. MIT-lizenziert.' },
  capture: { dashboardAlt: "Ditero-Haushaltsdashboard mit Prioritäten, offenen Aufgaben, einer Gewohnheitsserie und Fokuszeit.", desktopAlt: 'Die Ditero-Web-App mit einer gemeinsamen Liste und Beispielaufgaben.', mobileAlt: 'Die mobile Ditero-App mit einer gemeinsamen Liste und Beispielaufgaben.', open: 'Screenshot in voller Größe öffnen' },
  gallery: {
    title: "Genauer hinsehen",
    note: "Entwicklungsvorschauen auf Englisch mit erfundenen Haushaltsdaten.",
    items: {
      'priorities': { title: "Prioritäten auf einen Blick", caption: "Gruppiere Aufgaben nach Priorität und behalte Zuständige, Termine und Labels im Blick.", alt: "Dunkles Ditero-Board mit Aufgaben hoher, mittlerer, niedriger und ohne Priorität, Zuständigen, Terminen und Labels." },
      'task-detail': { title: "Details gemeinsamer Aufgaben", caption: "Sieh Zuständige, Unteraufgaben, Notizen und Kommentare zusammen.", alt: "Helle Ditero-Aufgabendetails mit zwei Zuständigen, Fälligkeitsdatum, Priorität, Notizen, drei Unteraufgaben und einem Kommentar." },
      'recurrence-reminders': { title: "Wiederholungen und Erinnerungen", caption: "Lege wöchentliche Wiederholungen und eine Erinnerungszeit in den Aufgabendetails fest.", alt: "Helle Ditero-Aufgabendetails mit wöchentlicher Wiederholung am Samstag und einer Erinnerung um 9 Uhr." },
      'saved-filters': { title: "Gespeicherte Filter und Ansichten", caption: "Speichere Listen- und Statusfilter mit Board-Layout und Gruppierung nach Priorität.", alt: "Dunkler Ditero-Ansichtseditor mit Listen- und Statusbedingungen, Board-Layout und Gruppierung nach Priorität." },
    },
  },
  features: {
    title: 'Was Ditero kann', intro: 'Listen und Aufgaben für Menschen, die sich ein Zuhause, einen Verein oder ein kleines Team teilen.',
    items: [
      { title: 'Gemeinsame Listen', text: 'Lege in einem gemeinsamen Arbeitsbereich Listen für Einkäufe, Projekte und Checklisten an und weise jede Aufgabe jemandem zu.' },
      { title: 'Hausarbeit und Gewohnheiten', text: 'Richte wiederkehrende Aufgaben und Erinnerungen für Hausarbeit und Gewohnheiten ein und weise sie Mitgliedern der Gruppe zu.' },
      { title: 'Dashboards', text: 'Behalte offene und anstehende Aufgaben deiner Listen auf Dashboards im Blick.' },
      { title: 'Kommentare und Anhänge', text: 'Bespreche eine Aufgabe in Kommentaren und speichere Dateien direkt dabei. Anhänge sind verschlüsselt.' },
      { title: 'Offline-Synchronisierung', text: 'Arbeite ohne Verbindung weiter. Änderungen werden synchronisiert, sobald du wieder online bist.' },
      { title: 'Sprachen und Designs', text: 'Sechs Oberflächensprachen sowie helles und dunkles Design: Englisch, Deutsch, Spanisch, Französisch, Rumänisch und Arabisch (von rechts nach links).' },
    ],
  },
  mobile: { title: 'Auf dem Smartphone', text: 'Öffne Ditero im mobilen Browser und installiere es, oder nutze die signierten, unabhängigen Android-Downloads der Alpha-Version. Eine native iOS-App gibt es noch nicht.', link: 'Android-Downloads ansehen' },
  access: {
    title: 'Apps und Werkzeuge', intro: 'Dein Ditero-Server ist der gemeinsame Ort. Diese Wege führen dorthin. Die öffentliche Alpha enthält die Web-App sowie Android- und Desktop-Downloads. Die Werkzeuge für Kommandozeile, Terminal, API und MCP befinden sich im Entwicklungsquellcode.',
    publicTitle: 'In der öffentlichen Alpha', devTitle: 'Im Entwicklungsquellcode (keine Alpha-Downloads)',
    public: {
      web: { name: 'Web-App', state: 'Alpha', text: 'Nutze die Web-App in einem aktuellen Browser und installiere sie von dort. Offline vorgenommene Änderungen werden synchronisiert, sobald du wieder verbunden bist.' },
      android: { name: 'Android', state: 'Alpha', text: 'Signierte, unabhängige Android-Downloads.' },
      desktop: { name: 'Desktop', state: 'Experimentell', text: 'Windows-Installer sind unsigniert, macOS-Builds sind ad-hoc signiert. Die Plattformqualifizierung ist nicht abgeschlossen.' },
      ios: { name: 'iOS', state: 'Noch nicht verfügbar', text: 'Es gibt noch keine native iOS-App.' },
    },
    dev: {
      cli: { name: 'CLI', state: 'Im Quellcode', text: 'Kommandozeilen-Client.' },
      tui: { name: 'TUI', state: 'Im Quellcode', text: 'Terminal-Oberfläche.' },
      api: { name: 'API', state: 'Im Quellcode', text: 'HTTP-API mit Mitgliedschaftsbezug, persönlichen Zugriffstoken und OpenAPI-Beschreibung.' },
      mcp: { name: 'MCP', state: 'Im Quellcode', text: 'Lokaler MCP-Server für Werkzeuge, die das Model Context Protocol unterstützen.' },
    },
    labels: { setup: 'Einrichtungsanleitung', release: 'Release-Seite', guide: 'Anleitung' },
    note: 'Frühe Software verändert sich schnell. Lies die Hinweise zu Einrichtung, Sicherung und Plattformen, bevor du dich auf sie verlässt.',
  },
  server: { title: 'Betreibe den Server selbst', text: 'Ditero wird selbst gehostet und ist unter der MIT-Lizenz quelloffen. Du betreibst den Server auf deiner eigenen Infrastruktur, prüfst den Code und entscheidest, wer Zugriff hat. Dokumentation für Docker Compose und Helm ist vorhanden.', link: 'Anleitung zur Einrichtung lesen', docs: 'Dokumentation lesen', encryption: 'Anhänge sind verschlüsselt und schützen so Dateiinhalte. Das bedeutet nicht, dass alle Aufgabendaten Ende-zu-Ende-verschlüsselt sind.' },
  support: { title: 'Entwicklung unterstützen', text: 'Ditero ist kostenlos und MIT-lizenziert. Es gibt keine kostenpflichtigen Funktionen. Unterstützung trägt zur Weiterentwicklung des Projekts bei.', kofi: 'Entwicklung unterstützen', sponsor: 'Ditero sponsern' },
};

const es: HomeCopy = {
  meta: { title: 'Listas compartidas. Tu servidor.', description: 'Ditero es una aplicación de tareas de código abierto y autoalojada para hogares, clubes y equipos pequeños. Comparte listas de la compra, tareas del hogar, hábitos y proyectos desde un servidor que gestionas tú.' },
  ui: { skip: 'Saltar al contenido', mainNav: 'Navegación principal', footerNav: 'Enlaces del pie de página', features: 'Funciones', access: 'Apps y herramientas', support: 'Apoyar', source: 'Código fuente', about: 'Acerca de', privacy: 'Privacidad', license: 'Licencia MIT', issues: 'Incidencias', language: 'Idioma', theme: 'Tema oscuro', footerNote: 'Código abierto con licencia MIT.', home: 'Inicio de Ditero' },
  hero: { line1: 'Listas compartidas.', line2: 'Tu servidor.', intro: 'Tareas, compras y rutinas compartidas para hogares y grupos pequeños. En tu servidor, con sincronización sin conexión y clientes web, móviles, de escritorio y terminal.', primary: 'Configurar tu servidor', apps: 'Apps y herramientas', status: 'Alfa temprana. Última versión: v0.0.1-alpha.2. Licencia MIT.' },
  capture: { dashboardAlt: "Panel del hogar en Ditero con prioridades, tareas pendientes, una racha de hábito y tiempo de concentración.", desktopAlt: 'La aplicación web de Ditero con una lista compartida y tareas de ejemplo.', mobileAlt: 'La aplicación móvil de Ditero con una lista compartida y tareas de ejemplo.', open: 'Abrir la captura a tamaño completo' },
  gallery: {
    title: "Una mirada más de cerca",
    note: "Vistas previas de desarrollo en inglés con datos ficticios de un hogar.",
    items: {
      'priorities': { title: "Prioridades de un vistazo", caption: "Agrupa tareas por prioridad y consulta responsables, fechas y etiquetas.", alt: "Tablero oscuro de Ditero con tareas de prioridad alta, media, baja y sin prioridad, responsables, fechas y etiquetas." },
      'task-detail': { title: "Detalles de tareas compartidas", caption: "Consulta responsables, subtareas, notas y comentarios juntos.", alt: "Panel claro de detalles de Ditero con dos responsables, fecha de vencimiento, prioridad, notas, tres subtareas y un comentario." },
      'recurrence-reminders': { title: "Repeticiones y recordatorios", caption: "Configura repeticiones semanales y una hora de recordatorio en los detalles de la tarea.", alt: "Panel claro de detalles de Ditero con repetición semanal los sábados y un recordatorio a las 9 de la mañana." },
      'saved-filters': { title: "Filtros y vistas guardados", caption: "Guarda filtros de lista y estado con diseño de tablero y agrupación por prioridad.", alt: "Editor oscuro de vistas de Ditero con condiciones de lista y estado, diseño de tablero y agrupación por prioridad." },
    },
  },
  features: {
    title: 'Qué hace Ditero', intro: 'Listas y tareas para quienes comparten casa, club o equipo pequeño.',
    items: [
      { title: 'Listas compartidas', text: 'Crea listas de la compra, proyectos y listas de comprobación en un espacio de trabajo compartido y asigna cada tarea a alguien.' },
      { title: 'Tareas del hogar y hábitos', text: 'Configura tareas recurrentes y recordatorios para las tareas del hogar y los hábitos, y asígnalos a miembros del grupo.' },
      { title: 'Paneles', text: 'Consulta las tareas abiertas y próximas de tus listas en paneles.' },
      { title: 'Comentarios y archivos adjuntos', text: 'Habla de cada tarea en los comentarios y guarda los archivos junto a ella. Los archivos adjuntos están cifrados.' },
      { title: 'Sincronización sin conexión', text: 'Sigue trabajando sin conexión. Los cambios se sincronizan cuando vuelves a conectarte.' },
      { title: 'Idiomas y temas', text: 'Seis idiomas de interfaz y tema claro y oscuro: inglés, alemán, español, francés, rumano y árabe (de derecha a izquierda).' },
    ],
  },
  mobile: { title: 'En el móvil', text: 'Abre Ditero en el navegador del móvil e instálala, o usa las descargas independientes y firmadas de Android de la versión alfa. Todavía no hay una app nativa para iOS.', link: 'Ver descargas de Android' },
  access: {
    title: 'Apps y herramientas', intro: 'Tu servidor de Ditero es el lugar compartido. Estas son las formas de acceder a él. La versión alfa pública incluye la aplicación web y descargas para Android y escritorio. Las herramientas de línea de comandos, terminal, API y MCP están en el código fuente de desarrollo.',
    publicTitle: 'En la versión alfa pública', devTitle: 'En el código fuente de desarrollo (no son descargas alfa)',
    public: {
      web: { name: 'Aplicación web', state: 'Alfa', text: 'Usa la aplicación web en un navegador actual e instálala desde allí. Los cambios hechos sin conexión se sincronizan cuando vuelves a conectarte.' },
      android: { name: 'Android', state: 'Alfa', text: 'Descargas de Android independientes y firmadas.' },
      desktop: { name: 'Escritorio', state: 'Experimental', text: 'Los instaladores de Windows no están firmados y las compilaciones de macOS tienen firma ad hoc. La cualificación de plataformas no está completa.' },
      ios: { name: 'iOS', state: 'Aún no disponible', text: 'Todavía no hay una app nativa para iOS.' },
    },
    dev: {
      cli: { name: 'CLI', state: 'En el código fuente', text: 'Cliente de línea de comandos.' },
      tui: { name: 'TUI', state: 'En el código fuente', text: 'Interfaz de terminal.' },
      api: { name: 'API', state: 'En el código fuente', text: 'API HTTP limitada por membresía, con tokens de acceso personal y descripción OpenAPI.' },
      mcp: { name: 'MCP', state: 'En el código fuente', text: 'Servidor MCP local para herramientas compatibles con el Model Context Protocol.' },
    },
    labels: { setup: 'Guía de instalación', release: 'Página de la versión', guide: 'Guía' },
    note: 'El software temprano cambia rápido. Revisa las notas de instalación, copias de seguridad y plataformas antes de depender de él.',
  },
  server: { title: 'Gestiona tú el servidor', text: 'Ditero es autoalojado y de código abierto con licencia MIT. Ejecutas el servidor en tu propia infraestructura, puedes revisar el código y decides quién tiene acceso. Hay documentación para Docker Compose y Helm.', link: 'Leer la guía de despliegue', docs: 'Leer la documentación', encryption: 'Los archivos adjuntos están cifrados, lo que protege su contenido. Esto no significa que todos los datos de las tareas tengan cifrado de extremo a extremo.' },
  support: { title: 'Apoyar el desarrollo', text: 'Ditero es gratuito y tiene licencia MIT. No hay funciones de pago. El apoyo contribuye al desarrollo del proyecto.', kofi: 'Apoyar el desarrollo', sponsor: 'Patrocinar Ditero' },
};

const fr: HomeCopy = {
  meta: { title: 'Listes partagées. Votre serveur.', description: 'Ditero est une application de tâches open source et auto-hébergée pour les foyers, les associations et les petites équipes. Partagez listes de courses, tâches ménagères, habitudes et projets depuis un serveur que vous gérez.' },
  ui: { skip: 'Aller au contenu', mainNav: 'Navigation principale', footerNav: 'Liens de pied de page', features: 'Fonctionnalités', access: 'Apps et outils', support: 'Soutenir', source: 'Code source', about: 'À propos', privacy: 'Confidentialité', license: 'Licence MIT', issues: 'Signaler un problème', language: 'Langue', theme: 'Thème sombre', footerNote: 'Open source sous licence MIT.', home: 'Accueil Ditero' },
  hero: { line1: 'Listes partagées.', line2: 'Votre serveur.', intro: 'Tâches, courses et routines partagées pour les foyers et petits groupes. Sur votre serveur, avec synchronisation hors ligne et clients web, mobiles, de bureau et en terminal.', primary: 'Installer votre serveur', apps: 'Apps et outils', status: 'Alpha précoce. Dernière version : v0.0.1-alpha.2. Licence MIT.' },
  capture: { dashboardAlt: "Tableau de bord du foyer Ditero avec les priorités, les tâches ouvertes, une série pour une habitude et le temps de concentration.", desktopAlt: "L'application web Ditero affichant une liste partagée avec des tâches d'exemple.", mobileAlt: "L'application mobile Ditero affichant une liste partagée avec des tâches d'exemple.", open: 'Ouvrir la capture en taille réelle' },
  gallery: {
    title: "Voir de plus près",
    note: "Aperçus de développement en anglais avec les données fictives d’un foyer.",
    items: {
      'priorities': { title: "Les priorités en un coup d’œil", caption: "Regroupez les tâches par priorité, avec les responsables, les dates et les étiquettes à portée de vue.", alt: "Tableau sombre de Ditero avec des tâches de priorité haute, moyenne, basse et sans priorité, leurs responsables, dates et étiquettes." },
      'task-detail': { title: "Détails des tâches partagées", caption: "Retrouvez les responsables, les sous-tâches, les notes et les commentaires ensemble.", alt: "Panneau clair de Ditero avec deux responsables, une échéance, une priorité, des notes, trois sous-tâches et un commentaire." },
      'recurrence-reminders': { title: "Récurrence et rappels", caption: "Réglez les répétitions hebdomadaires et l’heure du rappel dans les détails de la tâche.", alt: "Panneau clair de Ditero affichant une répétition chaque samedi et un rappel à 9 heures." },
      'saved-filters': { title: "Filtres et vues enregistrés", caption: "Enregistrez des filtres de liste et de statut avec une disposition en tableau et un regroupement par priorité.", alt: "Éditeur sombre de vues Ditero avec des conditions de liste et de statut, une disposition en tableau et un regroupement par priorité." },
    },
  },
  features: {
    title: 'Ce que fait Ditero', intro: 'Des listes et des tâches pour celles et ceux qui partagent un foyer, une association ou une petite équipe.',
    items: [
      { title: 'Listes partagées', text: "Créez des listes de courses, de projets et de contrôle dans un espace de travail partagé, et attribuez chaque tâche à quelqu'un." },
      { title: 'Tâches ménagères et habitudes', text: 'Configurez des tâches récurrentes et des rappels pour les tâches ménagères et les habitudes, et attribuez-les aux membres du groupe.' },
      { title: 'Tableaux de bord', text: 'Suivez les tâches ouvertes et à venir de vos listes sur des tableaux de bord.' },
      { title: 'Commentaires et pièces jointes', text: "Discutez d'une tâche dans les commentaires et gardez les fichiers avec elle. Les pièces jointes sont chiffrées." },
      { title: 'Synchronisation hors ligne', text: 'Continuez à travailler sans connexion. Les modifications se synchronisent à la reconnexion.' },
      { title: 'Langues et thèmes', text: "Six langues d'interface et thèmes clair et sombre : anglais, allemand, espagnol, français, roumain et arabe (de droite à gauche)." },
    ],
  },
  mobile: { title: 'Sur téléphone', text: "Ouvrez Ditero dans le navigateur de votre téléphone et installez-la, ou utilisez les téléchargements Android signés et indépendants de la version alpha. Il n'existe pas encore d'application iOS native.", link: 'Voir les téléchargements Android' },
  access: {
    title: 'Apps et outils', intro: "Votre serveur Ditero est le lieu partagé. Voici les moyens d'y accéder. La version alpha publique comprend l'application web et des téléchargements pour Android et le bureau. Les outils en ligne de commande, en terminal, l'API et MCP se trouvent dans le code source de développement.",
    publicTitle: 'Dans la version alpha publique', devTitle: 'Dans le code source de développement (pas des téléchargements alpha)',
    public: {
      web: { name: 'Application web', state: 'Alpha', text: "Utilisez l'application web dans un navigateur récent et installez-la depuis celui-ci. Les modifications faites hors ligne se synchronisent à la reconnexion." },
      android: { name: 'Android', state: 'Alpha', text: 'Téléchargements Android signés et indépendants.' },
      desktop: { name: 'Bureau', state: 'Expérimental', text: "Les installateurs Windows ne sont pas signés et les versions macOS ont une signature ad hoc. La qualification des plateformes n'est pas terminée." },
      ios: { name: 'iOS', state: 'Pas encore disponible', text: "Il n'existe pas encore d'application iOS native." },
    },
    dev: {
      cli: { name: 'CLI', state: 'Dans le code source', text: 'Client en ligne de commande.' },
      tui: { name: 'TUI', state: 'Dans le code source', text: 'Interface en terminal.' },
      api: { name: 'API', state: 'Dans le code source', text: "API HTTP limitée par appartenance, avec jetons d'accès personnels et description OpenAPI." },
      mcp: { name: 'MCP', state: 'Dans le code source', text: 'Serveur MCP local pour les outils compatibles avec le Model Context Protocol.' },
    },
    labels: { setup: "Guide d'installation", release: 'Page de la version', guide: 'Guide' },
    note: "Un logiciel jeune évolue vite. Lisez les notes sur l'installation, les sauvegardes et les plateformes avant de vous y fier.",
  },
  server: { title: 'Gérez le serveur vous-même', text: 'Ditero est auto-hébergé et open source sous licence MIT. Vous exécutez le serveur sur votre propre infrastructure, vous inspectez le code et vous décidez qui y a accès. Une documentation pour Docker Compose et Helm est disponible.', link: 'Lire le guide de déploiement', docs: 'Lire la documentation', encryption: 'Les pièces jointes sont chiffrées, ce qui protège le contenu des fichiers. Cela ne signifie pas que toutes les données des tâches sont chiffrées de bout en bout.' },
  support: { title: 'Soutenir le développement', text: "Ditero est gratuit et sous licence MIT. Aucune fonctionnalité n'est payante. Le soutien contribue au développement du projet.", kofi: 'Soutenir le développement', sponsor: 'Sponsoriser Ditero' },
};

const ro: HomeCopy = {
  meta: { title: 'Liste comune. Serverul tău.', description: 'Ditero este o aplicație de sarcini open source, găzduită de tine, pentru gospodării, cluburi și echipe mici. Partajează liste de cumpărături, treburi casnice, obiceiuri și proiecte de pe un server pe care îl administrezi tu.' },
  ui: { skip: 'Treci la conținut', mainNav: 'Navigare principală', footerNav: 'Linkuri din subsol', features: 'Funcții', access: 'Aplicații și instrumente', support: 'Sprijină', source: 'Cod sursă', about: 'Despre', privacy: 'Confidențialitate', license: 'Licența MIT', issues: 'Probleme', language: 'Limba', theme: 'Temă întunecată', footerNote: 'Open source sub licență MIT.', home: 'Pagina principală Ditero' },
  hero: { line1: 'Liste comune.', line2: 'Serverul tău.', intro: 'Sarcini, cumpărături și rutine comune pentru gospodării și grupuri mici. Pe serverul tău, cu sincronizare offline și clienți web, mobili, desktop și terminal.', primary: 'Configurează-ți serverul', apps: 'Aplicații și instrumente', status: 'Alfa timpurie. Ultima versiune: v0.0.1-alpha.2. Licență MIT.' },
  capture: { dashboardAlt: "Tabloul de bord al gospodăriei în Ditero, cu priorități, sarcini deschise, o serie de zile pentru un obicei și timpul de concentrare.", desktopAlt: 'Aplicația web Ditero afișând o listă comună cu sarcini de exemplu.', mobileAlt: 'Aplicația mobilă Ditero afișând o listă comună cu sarcini de exemplu.', open: 'Deschide captura de ecran la dimensiune completă' },
  gallery: {
    title: "O privire mai atentă",
    note: "Previzualizări din dezvoltare în engleză, cu date fictive ale unei gospodării.",
    items: {
      'priorities': { title: "Priorități dintr-o privire", caption: "Grupează sarcinile după prioritate și vezi responsabilii, datele și etichetele.", alt: "Panou Ditero întunecat cu sarcini de prioritate mare, medie, mică și fără prioritate, responsabili, date și etichete." },
      'task-detail': { title: "Detalii pentru sarcini comune", caption: "Vezi responsabilii, subsarcinile, notele și comentariile la un loc.", alt: "Panou Ditero luminos cu doi responsabili, termen, prioritate, note, trei subsarcini și un comentariu." },
      'recurrence-reminders': { title: "Recurență și mementouri", caption: "Configurează repetări săptămânale și ora mementoului în detaliile sarcinii.", alt: "Panou Ditero luminos cu repetare săptămânală sâmbăta și un memento la ora 9 dimineața." },
      'saved-filters': { title: "Filtre și vizualizări salvate", caption: "Salvează filtre pentru listă și stare, cu afișare pe coloane și grupare după prioritate.", alt: "Editor Ditero întunecat pentru vizualizări, cu condiții pentru listă și stare, afișare pe coloane și grupare după prioritate." },
    },
  },
  features: {
    title: 'Ce face Ditero', intro: 'Liste și sarcini pentru oamenii care împart o casă, un club sau o echipă mică.',
    items: [
      { title: 'Liste comune', text: 'Creează liste de cumpărături, proiecte și liste de verificare într-un spațiu de lucru comun și atribuie fiecare sarcină cuiva.' },
      { title: 'Treburi casnice și obiceiuri', text: 'Configurează sarcini recurente și mementouri pentru treburi casnice și obiceiuri și atribuie-le membrilor grupului.' },
      { title: 'Panouri de control', text: 'Urmărește sarcinile deschise și cele viitoare din listele tale pe panouri de control.' },
      { title: 'Comentarii și atașamente', text: 'Discută despre o sarcină în comentarii și păstrează fișierele lângă ea. Atașamentele sunt criptate.' },
      { title: 'Sincronizare offline', text: 'Continuă să lucrezi fără conexiune. Modificările se sincronizează când te reconectezi.' },
      { title: 'Limbi și teme', text: 'Șase limbi de interfață și temă luminoasă și întunecată: engleză, germană, spaniolă, franceză, română și arabă (de la dreapta la stânga).' },
    ],
  },
  mobile: { title: 'Pe telefon', text: 'Deschide Ditero în browserul telefonului și instaleaz-o, sau folosește descărcările Android semnate și independente din versiunea alfa. Încă nu există o aplicație iOS nativă.', link: 'Vezi descărcările Android' },
  access: {
    title: 'Aplicații și instrumente', intro: 'Serverul tău Ditero este locul comun. Acestea sunt modurile de a ajunge la el. Versiunea alfa publică include aplicația web și descărcări pentru Android și desktop. Instrumentele pentru linia de comandă, terminal, API și MCP se află în codul sursă de dezvoltare.',
    publicTitle: 'În versiunea alfa publică', devTitle: 'În codul sursă de dezvoltare (nu sunt descărcări alfa)',
    public: {
      web: { name: 'Aplicația web', state: 'Alfa', text: 'Folosește aplicația web într-un browser actual și instaleaz-o de acolo. Modificările făcute offline se sincronizează când te reconectezi.' },
      android: { name: 'Android', state: 'Alfa', text: 'Descărcări Android semnate și independente.' },
      desktop: { name: 'Desktop', state: 'Experimental', text: 'Programele de instalare pentru Windows nu sunt semnate, iar versiunile pentru macOS au semnătură ad hoc. Calificarea platformelor nu este încheiată.' },
      ios: { name: 'iOS', state: 'Încă indisponibil', text: 'Încă nu există o aplicație iOS nativă.' },
    },
    dev: {
      cli: { name: 'CLI', state: 'În codul sursă', text: 'Client pentru linia de comandă.' },
      tui: { name: 'TUI', state: 'În codul sursă', text: 'Interfață în terminal.' },
      api: { name: 'API', state: 'În codul sursă', text: 'API HTTP limitat la membri, cu token-uri personale de acces și descriere OpenAPI.' },
      mcp: { name: 'MCP', state: 'În codul sursă', text: 'Server MCP local pentru instrumente care acceptă Model Context Protocol.' },
    },
    labels: { setup: 'Ghid de instalare', release: 'Pagina versiunii', guide: 'Ghid' },
    note: 'Software-ul timpuriu se schimbă repede. Citește notele despre instalare, copii de siguranță și platforme înainte să te bazezi pe el.',
  },
  server: { title: 'Administrează serverul tu însuți', text: 'Ditero este găzduit de tine și open source sub licența MIT. Rulezi serverul pe propria infrastructură, verifici codul și decizi cine are acces. Documentația pentru Docker Compose și Helm este disponibilă.', link: 'Citește ghidul de implementare', docs: 'Citește documentația', encryption: 'Atașamentele sunt criptate, ceea ce protejează conținutul fișierelor. Asta nu înseamnă că toate datele sarcinilor sunt criptate integral (end-to-end).' },
  support: { title: 'Sprijină dezvoltarea', text: 'Ditero este gratuit și are licență MIT. Nu există funcții cu plată. Sprijinul contribuie la dezvoltarea proiectului.', kofi: 'Sprijină dezvoltarea', sponsor: 'Sponsorizează Ditero' },
};

const ar: HomeCopy = {
  meta: { title: 'قوائم مشتركة. خادمك.', description: 'Ditero تطبيق مهام مفتوح المصدر ومستضاف ذاتيًا للأسر والنوادي والفرق الصغيرة. شارك قوائم التسوق والمهام المنزلية والعادات والمشاريع من خادم تديره بنفسك.' },
  ui: { skip: 'تخطَّ إلى المحتوى', mainNav: 'التنقل الرئيسي', footerNav: 'روابط التذييل', features: 'الميزات', access: 'التطبيقات والأدوات', support: 'الدعم', source: 'الشيفرة المصدرية', about: 'حول', privacy: 'الخصوصية', license: 'ترخيص MIT', issues: 'المشكلات', language: 'اللغة', theme: 'السمة الداكنة', footerNote: 'مفتوح المصدر بترخيص MIT.', home: 'الصفحة الرئيسية لـ Ditero' },
  hero: { line1: 'قوائم مشتركة.', line2: 'خادمك.', intro: 'مهام وتسوق وروتين مشترك للأسر والمجموعات الصغيرة. على خادمك، مع مزامنة دون اتصال وتطبيقات للويب والجوال وسطح المكتب والطرفية.', primary: 'إعداد الخادم الخاص بك', apps: 'التطبيقات والأدوات', status: 'ألفا مبكرة. أحدث إصدار: v0.0.1-alpha.2. بترخيص MIT.' },
  capture: { dashboardAlt: "لوحة الأسرة في Ditero تعرض الأولويات والمهام المفتوحة وسلسلة التزام بعادة ووقت التركيز.", desktopAlt: 'تطبيق Ditero على الويب يعرض قائمة مشتركة بمهام تجريبية.', mobileAlt: 'تطبيق Ditero على الجوال يعرض قائمة مشتركة بمهام تجريبية.', open: 'افتح لقطة الشاشة بالحجم الكامل' },
  gallery: {
    title: "نظرة أقرب",
    note: "معاينات من نسخة التطوير بواجهة إنجليزية وبيانات منزلية خيالية.",
    items: {
      'priorities': { title: "الأولويات في لمحة", caption: "جمّع المهام حسب الأولوية، وشاهد المسؤولين والتواريخ والتصنيفات.", alt: "لوحة Ditero داكنة بمهام ذات أولوية عالية ومتوسطة ومنخفضة ومهام دون أولوية، مع المسؤولين والتواريخ والتصنيفات." },
      'task-detail': { title: "تفاصيل المهام المشتركة", caption: "شاهد المسؤولين والمهام الفرعية والملاحظات والتعليقات معًا.", alt: "لوحة تفاصيل فاتحة في Ditero تعرض مسؤولَين وتاريخ استحقاق وأولوية وملاحظات وثلاث مهام فرعية وتعليقًا." },
      'recurrence-reminders': { title: "التكرار والتذكيرات", caption: "اضبط التكرار الأسبوعي ووقت التذكير في تفاصيل المهمة.", alt: "لوحة تفاصيل فاتحة في Ditero تعرض تكرارًا أسبوعيًا يوم السبت وتذكيرًا الساعة التاسعة صباحًا." },
      'saved-filters': { title: "الفلاتر والعروض المحفوظة", caption: "احفظ فلاتر القائمة والحالة مع تخطيط لوحة وتجميع حسب الأولوية.", alt: "محرر عروض داكن في Ditero يعرض شروط القائمة والحالة وتخطيط لوحة وتجميعًا حسب الأولوية." },
    },
  },
  features: {
    title: 'ماذا يفعل Ditero', intro: 'قوائم ومهام لمن يتشاركون منزلًا أو ناديًا أو فريقًا صغيرًا.',
    items: [
      { title: 'قوائم مشتركة', text: 'أنشئ قوائم للتسوق والمشاريع وقوائم المراجعة في مساحة عمل مشتركة، وأسنِد كل مهمة إلى شخص.' },
      { title: 'المهام المنزلية والعادات', text: 'اضبط مهام متكررة وتذكيرات للمهام المنزلية والعادات، وأسندها إلى أعضاء المجموعة.' },
      { title: 'لوحات المعلومات', text: 'تابع المهام المفتوحة والقادمة في قوائمك على لوحات المعلومات.' },
      { title: 'التعليقات والمرفقات', text: 'ناقش المهمة في التعليقات واحتفظ بالملفات معها. المرفقات مشفرة.' },
      { title: 'المزامنة دون اتصال', text: 'واصل العمل دون اتصال. تتم مزامنة التغييرات عند إعادة الاتصال.' },
      { title: 'اللغات والسمات', text: 'ست لغات للواجهة وسمتان فاتحة وداكنة: الإنجليزية والألمانية والإسبانية والفرنسية والرومانية والعربية (من اليمين إلى اليسار).' },
    ],
  },
  mobile: { title: 'على هاتفك', text: 'افتح Ditero في متصفح الجوال وثبّته، أو استخدم تنزيلات أندرويد الموقّعة والمستقلة من إصدار ألفا. لا يوجد تطبيق iOS أصلي بعد.', link: 'عرض تنزيلات أندرويد' },
  access: {
    title: 'التطبيقات والأدوات', intro: 'خادم Ditero هو المكان المشترك. هذه طرق الوصول إليه. يتضمن إصدار ألفا العام تطبيق الويب وتنزيلات أندرويد وسطح المكتب. أما أدوات سطر الأوامر والطرفية وواجهة API وMCP فهي في الشيفرة المصدرية قيد التطوير.',
    publicTitle: 'في إصدار ألفا العام', devTitle: 'في الشيفرة المصدرية قيد التطوير (ليست تنزيلات ألفا)',
    public: {
      web: { name: 'تطبيق الويب', state: 'ألفا', text: 'استخدم تطبيق الويب في متصفح حديث وثبّته منه. تتم مزامنة التغييرات التي أجريتها دون اتصال عند إعادة الاتصال.' },
      android: { name: 'Android', state: 'ألفا', text: 'تنزيلات أندرويد موقّعة ومستقلة.' },
      desktop: { name: 'سطح المكتب', state: 'تجريبي', text: 'مثبّتات Windows غير موقّعة، وإصدارات macOS موقّعة توقيعًا مؤقتًا (ad hoc). لم يكتمل تأهيل المنصات بعد.' },
      ios: { name: 'iOS', state: 'غير متاح بعد', text: 'لا يوجد تطبيق iOS أصلي بعد.' },
    },
    dev: {
      cli: { name: 'CLI', state: 'في الشيفرة المصدرية', text: 'عميل سطر الأوامر.' },
      tui: { name: 'TUI', state: 'في الشيفرة المصدرية', text: 'واجهة الطرفية.' },
      api: { name: 'API', state: 'في الشيفرة المصدرية', text: 'واجهة HTTP API مقيّدة بالعضوية، مع رموز وصول شخصية ووصف OpenAPI.' },
      mcp: { name: 'MCP', state: 'في الشيفرة المصدرية', text: 'خادم MCP محلي للأدوات التي تدعم Model Context Protocol.' },
    },
    labels: { setup: 'دليل الإعداد', release: 'صفحة الإصدار', guide: 'الدليل' },
    note: 'البرمجيات المبكرة تتغير بسرعة. راجع ملاحظات الإعداد والنسخ الاحتياطي والمنصات قبل الاعتماد عليها.',
  },
  server: { title: 'شغّل الخادم بنفسك', text: 'Ditero مستضاف ذاتيًا ومفتوح المصدر بترخيص MIT. تشغّل الخادم على بنيتك التحتية، وتفحص الشيفرة، وتقرر من يملك حق الوصول. تتوفر وثائق Docker Compose وHelm.', link: 'اقرأ دليل النشر', docs: 'اقرأ الوثائق', encryption: 'المرفقات مشفرة، مما يحمي محتوى الملفات. لا يعني ذلك أن كل بيانات المهام مشفرة من طرف إلى طرف.' },
  support: { title: 'ادعم التطوير', text: 'Ditero مجاني وبترخيص MIT. لا توجد ميزات مدفوعة. يساهم الدعم في تطوير المشروع.', kofi: 'ادعم التطوير', sponsor: 'كن راعيًا لـ Ditero' },
};

export const copy: Record<Locale, HomeCopy> = { en, de, es, fr, ro, ar };
