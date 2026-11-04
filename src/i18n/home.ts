import type { Locale } from './shared';

interface Row { name: string; state: string; text: string }
interface Item { title: string; text: string }

export interface HomeCopy {
  meta: { title: string; description: string };
  ui: {
    skip: string; mainNav: string; footerNav: string; features: string; access: string; support: string; source: string; selfHost: string;
    about: string; privacy: string; license: string; issues: string; language: string; theme: string; footerNote: string; home: string; madeBy: string; otherProjects: string;
  };
  hero: { line1: string; line2: string; intro: string; primary: string; apps: string; status: string };
  capture: { dashboardAlt: string; dashboardCompactAlt: string; desktopAlt: string; mobileAlt: string; open: string };
  gallery: { title: string; note: string; items: Record<'priorities' | 'task-detail' | 'recurrence-reminders' | 'saved-filters', { title: string; caption: string; alt: string }> };
  features: { title: string; intro: string; proof: Record<'task-detail' | 'recurrence-reminders' | 'dashboard', Item> };
  access: {
    title: string; intro: string; invited: string; publicTitle: string; devTitle: string;
    public: Record<'web' | 'android' | 'desktop' | 'ios', Row>;
    dev: Record<'cli' | 'tui' | 'api' | 'mcp', Row>;
    labels: { setup: string; release: string; guide: string };
  };
  server: { title: string; text: string; link: string; docs: string; prerequisites: string; cost: string; recovery: string; encryption: string };
  support: { title: string; text: string; kofi: string; sponsor: string };
}

const en: HomeCopy = {
  meta: { title: 'Shared lists. Your server.', description: 'Ditero is an open-source, self-hosted todo app for households, clubs and small teams. Share shopping lists, chores, habits and projects from one server you run.' },
  ui: { selfHost: 'Self-host', skip: 'Skip to content', mainNav: 'Main navigation', footerNav: 'Footer links', features: 'Features', access: 'Apps and tools', support: 'Support', source: 'Source code', about: 'About', privacy: 'Privacy', license: 'MIT license', issues: 'Issues', language: 'Language', theme: 'Dark theme', footerNote: 'Open source under the MIT license.', home: 'Ditero home', madeBy: 'Made by Iulian Dita', otherProjects: 'Other projects' },
  hero: { line1: 'Shared lists.', line2: 'Your server.', intro: 'Shared tasks, shopping and routines for households and small groups. Self-hosted, with offline sync and web, mobile, desktop and terminal clients.', primary: 'Set up your server', apps: 'Apps and tools', status: "Beta:" },
  capture: { dashboardCompactAlt: 'Ditero household dashboard showing task priorities.', dashboardAlt: "Ditero dashboard showing five household priorities.", desktopAlt: "Personal and shared tasks in Ditero, grouped by priority.", mobileAlt: 'The Ditero mobile app showing a shared list with example tasks.', open: 'Open full-size screenshot' },
  gallery: {
    title: "A closer look",
    note: "English development previews with fictional household data.",
    items: {
      'priorities': { title: "Priorities at a glance", caption: "Group tasks by priority, with assignees, dates and labels in view.", alt: "Dark Ditero board with high, medium, low and unprioritized tasks, assignees, dates and labels." },
      'task-detail': { title: "Shared task details", caption: "See assignees, subtasks, notes and comments together.", alt: "Ditero task details with two assignees, notes and three subtasks." },
      'recurrence-reminders': { title: "Recurrence and reminders", caption: "Set weekly repeats and a reminder time in task details.", alt: "Two Ditero task-detail excerpts showing the task title, weekly Saturday repeat and 9 AM reminder controls." },
      'saved-filters': { title: "Saved filters and views", caption: "Save list and status filters with a board layout and priority grouping.", alt: "Dark Ditero saved view editor with list and status conditions, board layout and priority grouping." },
    },
  },
  features: {
    title: 'What Ditero does', intro: 'Lists and tasks for people who share a home, a club or a small team.',
    proof: {
      'task-detail': { title: 'Share the work', text: 'Assign tasks, share notes, and break plans into subtasks.' },
      'recurrence-reminders': { title: "Chores and reminders", text: 'Repeat the chores. Build habits. Set reminders for the right time.' },
      'dashboard': { title: 'Dashboards', text: 'Keep your priorities in view.' },
    },
  },
  access: {
    title: 'Apps and tools', intro: "One server for your group. Reach it from the web, your phone, your desktop or your own tools.",
    invited: "Invited by someone? Open the link they sent you; there is nothing to install.",
    publicTitle: 'Apps', devTitle: "Tools and API",
    public: {
      web: { name: 'Web', state: 'Beta', text: 'Use Ditero in your browser, with offline changes synced when you reconnect.' },
      android: { name: 'Android', state: 'Experimental', text: "Signed independent APK and AAB; no store distribution." },
      desktop: { name: 'Desktop', state: 'Experimental', text: "Windows and Linux installers are unsigned; macOS builds are ad-hoc signed without notarization." },
      ios: { name: 'iOS', state: 'Not available yet', text: 'There is no native iOS app yet.' },
    },
    dev: {
      cli: { name: 'CLI', state: 'Beta', text: 'View, create and update tasks from the command line.' },
      tui: { name: 'TUI', state: 'Beta', text: 'Browse and manage tasks interactively with the keyboard.' },
      api: { name: 'API', state: "Beta", text: 'Connect your HTTP clients using personal access tokens and OpenAPI.' },
      mcp: { name: 'MCP', state: 'Beta', text: 'Let a connected assistant plan, create and manage tasks.' },
    },
    labels: { setup: 'Setup guide', release: 'Downloads', guide: 'Guide' },
  },
  server: { title: 'Run the server yourself', text: "Run Ditero on your infrastructure. Inspect the MIT‑licensed code and decide who has access. Docker Compose and Helm guides are available.", link: 'Read the deployment guide', docs: 'Read the documentation', prerequisites: "PostgreSQL 15+ with logical replication is required; Docker Compose bundles it. Ports 3000 and 4848 are needed. Set DITERO_IMAGE_TAG={imageTag} to run this release.", cost: "The software is free, but someone in your group runs the machine.", recovery: "Back up the database, attachments and encryption keys, and test a restore before inviting people. JSON export is not a full backup.", encryption: "Attachment encryption (opt-in): file contents, filenames, types and thumbnails are encrypted in the browser; sizes, times, uploader and task text are not." },
  support: { title: 'Support development', text: "Ditero is free and MIT licensed. There are no paid feature unlocks. Donations pay for my time on fixes and releases.", kofi: 'Support on Ko-fi', sponsor: "Ask about sponsorship" },
};

const de: HomeCopy = {
  meta: { title: 'Gemeinsame Listen. Dein Server.', description: 'Ditero ist eine quelloffene, selbst gehostete Aufgaben-App für Haushalte, Vereine und kleine Teams. Teile Einkaufslisten, Hausarbeit, Gewohnheiten und Projekte von einem Server, den du selbst betreibst.' },
  ui: { selfHost: 'Selbst hosten', skip: 'Zum Inhalt springen', mainNav: 'Hauptnavigation', footerNav: 'Weitere Links', features: 'Funktionen', access: 'Apps und Werkzeuge', support: 'Unterstützen', source: 'Quellcode', about: 'Über Ditero', privacy: 'Datenschutz', license: 'MIT-Lizenz', issues: 'Fehler melden', language: 'Sprache', theme: 'Dunkles Design', footerNote: 'Quelloffen unter der MIT-Lizenz.', home: 'Ditero Startseite', madeBy: 'Von Iulian Dita', otherProjects: 'Weitere Projekte' },
  hero: { line1: 'Gemeinsame Listen.', line2: 'Dein Server.', intro: 'Gemeinsame Aufgaben, Einkäufe und Routinen für Haushalte und kleine Gruppen. Selbst gehostet, mit Offline-Sync und Clients für Web, Mobilgeräte, Desktop und Terminal.', primary: 'Server einrichten', apps: 'Apps und Werkzeuge', status: "Beta:" },
  capture: { dashboardCompactAlt: 'Ditero-Haushaltsdashboard mit Aufgabenprioritäten.', dashboardAlt: "Ditero-Dashboard mit fünf Prioritäten für den Haushalt.", desktopAlt: "Persönliche und gemeinsame Aufgaben in Ditero, nach Priorität gruppiert.", mobileAlt: 'Die mobile Ditero-App mit einer gemeinsamen Liste und Beispielaufgaben.', open: 'Screenshot in voller Größe öffnen' },
  gallery: {
    title: "Genauer hinsehen",
    note: "Entwicklungsvorschauen auf Englisch mit erfundenen Haushaltsdaten.",
    items: {
      'priorities': { title: "Prioritäten auf einen Blick", caption: "Gruppiere Aufgaben nach Priorität und behalte Zuständige, Termine und Labels im Blick.", alt: "Dunkles Ditero-Board mit Aufgaben hoher, mittlerer, niedriger und ohne Priorität, Zuständigen, Terminen und Labels." },
      'task-detail': { title: "Details gemeinsamer Aufgaben", caption: "Sieh Zuständige, Unteraufgaben, Notizen und Kommentare zusammen.", alt: "Ditero-Aufgabendetails mit zwei Zuständigen, Notizen und drei Unteraufgaben." },
      'recurrence-reminders': { title: "Wiederholungen und Erinnerungen", caption: "Lege wöchentliche Wiederholungen und eine Erinnerungszeit in den Aufgabendetails fest.", alt: "Zwei Ausschnitte der Ditero-Aufgabendetails mit Aufgabentitel, wöchentlicher Wiederholung am Samstag und Erinnerung um 9 Uhr." },
      'saved-filters': { title: "Gespeicherte Filter und Ansichten", caption: "Speichere Listen- und Statusfilter mit Board-Layout und Gruppierung nach Priorität.", alt: "Dunkler Ditero-Ansichtseditor mit Listen- und Statusbedingungen, Board-Layout und Gruppierung nach Priorität." },
    },
  },
  features: {
    title: 'Was Ditero kann', intro: 'Listen und Aufgaben für Menschen, die sich ein Zuhause, einen Verein oder ein kleines Team teilen.',
    proof: {
      'task-detail': { title: 'Aufgaben gemeinsam verteilen', text: 'Weise Aufgaben zu, teile Notizen und zerlege Pläne in Unteraufgaben.' },
      'recurrence-reminders': { title: "Hausarbeit und Erinnerungen", text: 'Wiederhole Hausarbeit. Baue Gewohnheiten auf. Lass dich rechtzeitig erinnern.' },
      'dashboard': { title: 'Dashboards', text: 'Behalte deine Prioritäten im Blick.' },
    },
  },
  access: {
    title: 'Apps und Werkzeuge', intro: "Ein Server für deine Gruppe. Nutze ihn im Web, auf dem Smartphone, am Desktop oder mit deinen eigenen Werkzeugen.",
    invited: "Hat dich jemand eingeladen? Öffne den Link, den du bekommen hast. Du musst nichts installieren.",
    publicTitle: 'Apps', devTitle: "Werkzeuge und API",
    public: {
      web: { name: 'Web', state: 'Beta', text: 'Nutze Ditero im Browser; offline vorgenommene Änderungen werden synchronisiert, sobald du wieder verbunden bist.' },
      android: { name: 'Android', state: 'Experimentell', text: "Signierte unabhängige APK und AAB; keine Verteilung über einen Store." },
      desktop: { name: 'Desktop', state: 'Experimentell', text: "Windows- und Linux-Installer sind unsigniert; macOS-Versionen sind ad hoc signiert und nicht notarisiert." },
      ios: { name: 'iOS', state: 'Noch nicht verfügbar', text: 'Es gibt noch keine native iOS-App.' },
    },
    dev: {
      cli: { name: 'CLI', state: 'Beta', text: 'Zeige, erstelle und bearbeite Aufgaben über die Kommandozeile.' },
      tui: { name: 'TUI', state: 'Beta', text: 'Durchsuche und verwalte Aufgaben interaktiv mit der Tastatur.' },
      api: { name: 'API', state: "Beta", text: 'Binde deine HTTP-Clients mit persönlichen Zugriffstoken und OpenAPI an.' },
      mcp: { name: 'MCP', state: 'Beta', text: 'Lass einen verbundenen Assistenten Aufgaben planen, erstellen und verwalten.' },
    },
    labels: { setup: 'Einrichtungsanleitung', release: 'Downloads', guide: 'Anleitung' },
  },
  server: { title: 'Betreibe den Server selbst', text: "Betreibe Ditero auf deiner Infrastruktur. Prüfe den MIT-lizenzierten Code und bestimme, wer Zugriff hat. Anleitungen für Docker Compose und Helm sind verfügbar.", link: 'Anleitung zur Einrichtung lesen', docs: 'Dokumentation lesen', prerequisites: "PostgreSQL 15+ mit logischer Replikation ist erforderlich; Docker Compose bringt es mit. Die Ports 3000 und 4848 werden benötigt. Setze DITERO_IMAGE_TAG={imageTag}, um dieses Release zu starten.", cost: "Die Software ist kostenlos, aber jemand aus deiner Gruppe betreibt den Rechner.", recovery: "Sichere Datenbank, Anhänge und Verschlüsselungsschlüssel und teste eine Wiederherstellung, bevor du Leute einlädst. Der JSON-Export ist kein vollständiges Backup.", encryption: "Verschlüsselung der Anhänge (optional): Dateiinhalte, Dateinamen, Typen und Vorschaubilder werden im Browser verschlüsselt; Größen, Zeiten, hochladende Person und Aufgabentext nicht." },
  support: { title: 'Entwicklung unterstützen', text: "Ditero ist kostenlos und MIT-lizenziert. Es gibt keine kostenpflichtigen Funktionen. Spenden finanzieren meine Zeit für Fehlerbehebungen und Releases.", kofi: 'Auf Ko-fi unterstützen', sponsor: "Nach Sponsoring fragen" },
};

const es: HomeCopy = {
  meta: { title: 'Listas compartidas. Tu servidor.', description: 'Ditero es una aplicación de tareas de código abierto y autoalojada para hogares, clubes y equipos pequeños. Comparte listas de la compra, tareas del hogar, hábitos y proyectos desde un servidor que gestionas tú.' },
  ui: { selfHost: 'Autoalojar', skip: 'Saltar al contenido', mainNav: 'Navegación principal', footerNav: 'Enlaces del pie de página', features: 'Funciones', access: 'Apps y herramientas', support: 'Apoyar', source: 'Código fuente', about: 'Acerca de', privacy: 'Privacidad', license: 'Licencia MIT', issues: 'Incidencias', language: 'Idioma', theme: 'Tema oscuro', footerNote: 'Código abierto con licencia MIT.', home: 'Inicio de Ditero', madeBy: 'Creado por Iulian Dita', otherProjects: 'Otros proyectos' },
  hero: { line1: 'Listas compartidas.', line2: 'Tu servidor.', intro: 'Tareas, compras y rutinas compartidas para hogares y grupos pequeños. En tu servidor, con sincronización sin conexión y clientes web, móviles, de escritorio y terminal.', primary: 'Configurar tu servidor', apps: 'Apps y herramientas', status: "Beta:" },
  capture: { dashboardCompactAlt: 'Panel del hogar en Ditero con las prioridades de las tareas.', dashboardAlt: "Panel de Ditero con cinco prioridades del hogar.", desktopAlt: "Tareas personales y compartidas en Ditero, agrupadas por prioridad.", mobileAlt: 'La aplicación móvil de Ditero con una lista compartida y tareas de ejemplo.', open: 'Abrir la captura a tamaño completo' },
  gallery: {
    title: "Una mirada más de cerca",
    note: "Vistas previas de desarrollo en inglés con datos ficticios de un hogar.",
    items: {
      'priorities': { title: "Prioridades de un vistazo", caption: "Agrupa tareas por prioridad y consulta responsables, fechas y etiquetas.", alt: "Tablero oscuro de Ditero con tareas de prioridad alta, media, baja y sin prioridad, responsables, fechas y etiquetas." },
      'task-detail': { title: "Detalles de tareas compartidas", caption: "Consulta responsables, subtareas, notas y comentarios juntos.", alt: "Detalles de Ditero con dos responsables, notas y tres subtareas." },
      'recurrence-reminders': { title: "Repeticiones y recordatorios", caption: "Configura repeticiones semanales y una hora de recordatorio en los detalles de la tarea.", alt: "Dos fragmentos de los detalles de Ditero con el título, la repetición semanal los sábados y los controles del recordatorio a las 9 de la mañana." },
      'saved-filters': { title: "Filtros y vistas guardados", caption: "Guarda filtros de lista y estado con diseño de tablero y agrupación por prioridad.", alt: "Editor oscuro de vistas de Ditero con condiciones de lista y estado, diseño de tablero y agrupación por prioridad." },
    },
  },
  features: {
    title: 'Qué hace Ditero', intro: 'Listas y tareas para quienes comparten casa, club o equipo pequeño.',
    proof: {
      'task-detail': { title: 'Repartir las tareas', text: 'Asigna tareas, comparte notas y divide los planes en subtareas.' },
      'recurrence-reminders': { title: "Tareas del hogar y recordatorios", text: 'Repite las tareas del hogar. Crea hábitos. Recibe recordatorios a tiempo.' },
      'dashboard': { title: 'Paneles', text: 'Ten tus prioridades a la vista.' },
    },
  },
  access: {
    title: 'Apps y herramientas', intro: "Un servidor para tu grupo. Accede desde la web, el móvil, el escritorio o tus propias herramientas.",
    invited: "¿Te ha invitado alguien? Abre el enlace que te envió; no necesitas instalar nada.",
    publicTitle: 'Aplicaciones', devTitle: "Herramientas y API",
    public: {
      web: { name: 'Web', state: 'Beta', text: 'Usa Ditero en el navegador, con sincronización de los cambios sin conexión al reconectarte.' },
      android: { name: 'Android', state: 'Experimental', text: "APK y AAB independientes y firmados; sin distribución en tiendas." },
      desktop: { name: 'Escritorio', state: 'Experimental', text: "Los instaladores de Windows y Linux no están firmados; las versiones de macOS tienen firma ad hoc y no están notarizadas." },
      ios: { name: 'iOS', state: 'Aún no disponible', text: 'Todavía no hay una app nativa para iOS.' },
    },
    dev: {
      cli: { name: 'CLI', state: 'Beta', text: 'Consulta, crea y actualiza tareas desde la línea de comandos.' },
      tui: { name: 'TUI', state: 'Beta', text: 'Explora y gestiona tareas de forma interactiva con el teclado.' },
      api: { name: 'API', state: "Beta", text: 'Conecta tus clientes HTTP con tokens de acceso personal y OpenAPI.' },
      mcp: { name: 'MCP', state: 'Beta', text: 'Deja que un asistente conectado planifique, cree y gestione tareas.' },
    },
    labels: { setup: 'Guía de instalación', release: 'Descargas', guide: 'Guía' },
  },
  server: { title: 'Gestiona tú el servidor', text: "Ejecuta Ditero en tu infraestructura. Revisa el código con licencia MIT y decide quién tiene acceso. Hay guías de Docker Compose y Helm.", link: 'Leer la guía de despliegue', docs: 'Leer la documentación', prerequisites: "Se necesita PostgreSQL 15+ con replicación lógica; Docker Compose lo incluye. Se necesitan los puertos 3000 y 4848. Define DITERO_IMAGE_TAG={imageTag} para ejecutar esta versión.", cost: "El software es gratis, pero alguien del grupo administra la máquina.", recovery: "Haz copias de la base de datos, los adjuntos y las claves de cifrado y prueba la restauración antes de invitar a otras personas. La exportación JSON no es una copia completa.", encryption: "Cifrado de adjuntos (opcional): el contenido, los nombres, los tipos y las miniaturas se cifran en el navegador; los tamaños, las fechas, quién subió el archivo y el texto de las tareas no." },
  support: { title: 'Apoyar el desarrollo', text: "Ditero es gratuito y tiene licencia MIT. No hay funciones de pago. Las donaciones financian mi tiempo dedicado a corregir errores y publicar versiones.", kofi: 'Apoyar en Ko-fi', sponsor: "Consultar sobre patrocinio" },
};

const fr: HomeCopy = {
  meta: { title: 'Listes partagées. Votre serveur.', description: 'Ditero est une application de tâches open source et auto-hébergée pour les foyers, les associations et les petites équipes. Partagez listes de courses, tâches ménagères, habitudes et projets depuis un serveur que vous gérez.' },
  ui: { selfHost: 'Auto-héberger', skip: 'Aller au contenu', mainNav: 'Navigation principale', footerNav: 'Liens de pied de page', features: 'Fonctionnalités', access: 'Apps et outils', support: 'Soutenir', source: 'Code source', about: 'À propos', privacy: 'Confidentialité', license: 'Licence MIT', issues: 'Signaler un problème', language: 'Langue', theme: 'Thème sombre', footerNote: 'Open source sous licence MIT.', home: 'Accueil Ditero', madeBy: 'Créé par Iulian Dita', otherProjects: 'Autres projets' },
  hero: { line1: 'Listes partagées.', line2: 'Votre serveur.', intro: 'Tâches, courses et routines partagées pour les foyers et petits groupes. Sur votre serveur, avec synchronisation hors ligne et clients web, mobiles, de bureau et en terminal.', primary: 'Installer votre serveur', apps: 'Apps et outils', status: "Bêta :" },
  capture: { dashboardCompactAlt: 'Tableau de bord du foyer Ditero avec les priorités des tâches.', dashboardAlt: "Tableau de bord Ditero affichant cinq priorités du foyer.", desktopAlt: "Tâches personnelles et partagées dans Ditero, regroupées par priorité.", mobileAlt: "L'application mobile Ditero affichant une liste partagée avec des tâches d'exemple.", open: 'Ouvrir la capture en taille réelle' },
  gallery: {
    title: "Voir de plus près",
    note: "Aperçus de développement en anglais avec les données fictives d’un foyer.",
    items: {
      'priorities': { title: "Les priorités en un coup d’œil", caption: "Regroupez les tâches par priorité, avec les responsables, les dates et les étiquettes à portée de vue.", alt: "Tableau sombre de Ditero avec des tâches de priorité haute, moyenne, basse et sans priorité, leurs responsables, dates et étiquettes." },
      'task-detail': { title: "Détails des tâches partagées", caption: "Retrouvez les responsables, les sous-tâches, les notes et les commentaires ensemble.", alt: "Détails de Ditero avec deux responsables, des notes et trois sous-tâches." },
      'recurrence-reminders': { title: "Récurrence et rappels", caption: "Réglez les répétitions hebdomadaires et l’heure du rappel dans les détails de la tâche.", alt: "Deux extraits des détails de Ditero avec le titre, la répétition chaque samedi et les réglages du rappel à 9 heures." },
      'saved-filters': { title: "Filtres et vues enregistrés", caption: "Enregistrez des filtres de liste et de statut avec une disposition en tableau et un regroupement par priorité.", alt: "Éditeur sombre de vues Ditero avec des conditions de liste et de statut, une disposition en tableau et un regroupement par priorité." },
    },
  },
  features: {
    title: 'Ce que fait Ditero', intro: 'Des listes et des tâches pour celles et ceux qui partagent un foyer, une association ou une petite équipe.',
    proof: {
      'task-detail': { title: 'Répartissez les tâches', text: 'Attribuez des tâches, partagez des notes et décomposez les projets en sous-tâches.' },
      'recurrence-reminders': { title: "Tâches ménagères et rappels", text: 'Répétez les tâches ménagères. Créez des habitudes. Recevez vos rappels au bon moment.' },
      'dashboard': { title: 'Tableaux de bord', text: 'Gardez vos priorités en vue.' },
    },
  },
  access: {
    title: 'Apps et outils', intro: "Un serveur pour votre groupe. Accédez-y depuis le web, votre téléphone, votre ordinateur ou vos propres outils.",
    invited: "Une personne vous a invité ? Ouvrez le lien reçu : vous n’avez rien à installer.",
    publicTitle: 'Applications', devTitle: "Outils et API",
    public: {
      web: { name: 'Web', state: 'Bêta', text: "Utilisez Ditero dans votre navigateur, avec synchronisation des modifications hors ligne à la reconnexion." },
      android: { name: 'Android', state: 'Expérimental', text: "APK et AAB indépendants et signés ; aucune distribution en boutique." },
      desktop: { name: 'Bureau', state: 'Expérimental', text: "Les installateurs Windows et Linux ne sont pas signés ; les versions macOS sont signées ad hoc sans notarisation." },
      ios: { name: 'iOS', state: 'Pas encore disponible', text: "Il n'existe pas encore d'application iOS native." },
    },
    dev: {
      cli: { name: 'CLI', state: 'Bêta', text: 'Consultez, créez et modifiez des tâches en ligne de commande.' },
      tui: { name: 'TUI', state: 'Bêta', text: 'Parcourez et gérez les tâches de façon interactive au clavier.' },
      api: { name: 'API', state: "Bêta", text: "Connectez vos clients HTTP avec des jetons d'accès personnels et OpenAPI." },
      mcp: { name: 'MCP', state: 'Bêta', text: 'Laissez un assistant connecté planifier, créer et gérer des tâches.' },
    },
    labels: { setup: "Guide d'installation", release: 'Téléchargements', guide: 'Guide' },
  },
  server: { title: 'Gérez le serveur vous-même', text: "Hébergez Ditero sur votre infrastructure. Consultez le code sous licence MIT et choisissez qui y accède. Guides Docker Compose et Helm disponibles.", link: 'Lire le guide de déploiement', docs: 'Lire la documentation', prerequisites: "PostgreSQL 15+ avec réplication logique est requis ; Docker Compose l'inclut. Les ports 3000 et 4848 sont nécessaires. Définissez DITERO_IMAGE_TAG={imageTag} pour lancer cette version.", cost: "Le logiciel est gratuit, mais une personne du groupe gère la machine.", recovery: "Sauvegardez la base de données, les pièces jointes et les clés de chiffrement, puis testez une restauration avant d'inviter des personnes. L'export JSON n’est pas une sauvegarde complète.", encryption: "Chiffrement des pièces jointes (facultatif) : contenu, noms, types et miniatures sont chiffrés dans le navigateur ; tailles, dates, personne ayant envoyé le fichier et texte des tâches ne le sont pas." },
  support: { title: 'Soutenir le développement', text: "Ditero est gratuit et sous licence MIT. Aucune fonctionnalité n'est payante. Les dons financent le temps que je consacre aux corrections et aux nouvelles versions.", kofi: 'Soutenir sur Ko-fi', sponsor: "Se renseigner sur le sponsoring" },
};

const ro: HomeCopy = {
  meta: { title: 'Liste comune. Serverul tău.', description: 'Ditero este o aplicație de sarcini open source, găzduită de tine, pentru gospodării, cluburi și echipe mici. Partajează liste de cumpărături, treburi casnice, obiceiuri și proiecte de pe un server pe care îl administrezi tu.' },
  ui: { selfHost: 'Găzduiește', skip: 'Treci la conținut', mainNav: 'Navigare principală', footerNav: 'Linkuri din subsol', features: 'Funcții', access: 'Aplicații și instrumente', support: 'Sprijină', source: 'Cod sursă', about: 'Despre', privacy: 'Confidențialitate', license: 'Licența MIT', issues: 'Probleme', language: 'Limba', theme: 'Temă întunecată', footerNote: 'Open source sub licență MIT.', home: 'Pagina principală Ditero', madeBy: 'Creat de Iulian Dita', otherProjects: 'Alte proiecte' },
  hero: { line1: 'Liste comune.', line2: 'Serverul tău.', intro: 'Sarcini, cumpărături și rutine comune pentru gospodării și grupuri mici. Pe serverul tău, cu sincronizare offline și clienți web, mobili, desktop și terminal.', primary: 'Configurează-ți serverul', apps: 'Aplicații și instrumente', status: "Beta:" },
  capture: { dashboardCompactAlt: 'Tabloul de bord al gospodăriei în Ditero, cu prioritățile sarcinilor.', dashboardAlt: "Tablou de bord Ditero cu cinci priorități ale gospodăriei.", desktopAlt: "Sarcini personale și comune în Ditero, grupate după prioritate.", mobileAlt: 'Aplicația mobilă Ditero afișând o listă comună cu sarcini de exemplu.', open: 'Deschide captura de ecran la dimensiune completă' },
  gallery: {
    title: "O privire mai atentă",
    note: "Previzualizări din dezvoltare în engleză, cu date fictive ale unei gospodării.",
    items: {
      'priorities': { title: "Priorități dintr-o privire", caption: "Grupează sarcinile după prioritate și vezi responsabilii, datele și etichetele.", alt: "Panou Ditero întunecat cu sarcini de prioritate mare, medie, mică și fără prioritate, responsabili, date și etichete." },
      'task-detail': { title: "Detalii pentru sarcini comune", caption: "Vezi responsabilii, subsarcinile, notele și comentariile la un loc.", alt: "Detalii Ditero cu doi responsabili, note și trei subsarcini." },
      'recurrence-reminders': { title: "Recurență și mementouri", caption: "Configurează repetări săptămânale și ora mementoului în detaliile sarcinii.", alt: "Două fragmente din detaliile Ditero cu titlul sarcinii, repetarea săptămânală sâmbăta și setările mementoului de la ora 9 dimineața." },
      'saved-filters': { title: "Filtre și vizualizări salvate", caption: "Salvează filtre pentru listă și stare, cu afișare pe coloane și grupare după prioritate.", alt: "Editor Ditero întunecat pentru vizualizări, cu condiții pentru listă și stare, afișare pe coloane și grupare după prioritate." },
    },
  },
  features: {
    title: 'Ce face Ditero', intro: 'Liste și sarcini pentru oamenii care împart o casă, un club sau o echipă mică.',
    proof: {
      'task-detail': { title: 'Împarte sarcinile', text: 'Atribuie sarcini, adaugă note și împarte planurile în subsarcini.' },
      'recurrence-reminders': { title: "Treburi casnice și mementouri", text: 'Repetă treburile casnice. Formează obiceiuri. Primește mementouri la timp.' },
      'dashboard': { title: 'Panouri de control', text: 'Prioritățile tale, într-un singur loc.' },
    },
  },
  access: {
    title: 'Aplicații și instrumente', intro: "Un server pentru grupul tău. Accesează-l din browser, de pe telefon, desktop sau prin propriile instrumente.",
    invited: "Te-a invitat cineva? Deschide linkul primit; nu trebuie să instalezi nimic.",
    publicTitle: 'Aplicații', devTitle: "Instrumente și API",
    public: {
      web: { name: 'Web', state: 'Beta', text: 'Folosește Ditero în browser, cu sincronizarea modificărilor offline când te reconectezi.' },
      android: { name: 'Android', state: 'Experimental', text: "APK și AAB independente și semnate; fără distribuție în magazine." },
      desktop: { name: 'Desktop', state: 'Experimental', text: "Programele de instalare Windows și Linux sunt nesemnate; versiunile macOS sunt semnate ad hoc, fără notarizare." },
      ios: { name: 'iOS', state: 'Încă indisponibil', text: 'Încă nu există o aplicație iOS nativă.' },
    },
    dev: {
      cli: { name: 'CLI', state: 'Beta', text: 'Vezi, creează și actualizează sarcini din linia de comandă.' },
      tui: { name: 'TUI', state: 'Beta', text: 'Navighează și gestionează sarcinile interactiv cu tastatura.' },
      api: { name: 'API', state: "Beta", text: 'Conectează clienții HTTP folosind token-uri personale de acces și OpenAPI.' },
      mcp: { name: 'MCP', state: 'Beta', text: 'Lasă un asistent conectat să planifice, să creeze și să gestioneze sarcini.' },
    },
    labels: { setup: 'Ghid de instalare', release: 'Descărcări', guide: 'Ghid' },
  },
  server: { title: 'Administrează serverul tu însuți', text: "Rulează Ditero pe infrastructura ta. Verifică sursa sub licență MIT și decide cine are acces. Ai ghiduri pentru Docker Compose și Helm.", link: 'Citește ghidul de implementare', docs: 'Citește documentația', prerequisites: "Este necesar PostgreSQL 15+ cu replicare logică; Docker Compose îl include. Sunt necesare porturile 3000 și 4848. Setează DITERO_IMAGE_TAG={imageTag} pentru a rula această versiune.", cost: "Software-ul este gratuit, dar cineva din grup administrează calculatorul.", recovery: "Fă copii de rezervă ale bazei de date, ale atașamentelor și ale cheilor de criptare și testează restaurarea înainte să inviți persoane. Exportul JSON nu este un backup complet.", encryption: "Criptarea atașamentelor (opțională): conținutul, numele, tipurile și miniaturile sunt criptate în browser; dimensiunile, marcajele de timp, persoana care a încărcat fișierul și textul sarcinilor nu sunt." },
  support: { title: 'Sprijină dezvoltarea', text: "Ditero este gratuit și are licență MIT. Nu există funcții cu plată. Donațiile îmi plătesc timpul dedicat corecturilor și lansărilor.", kofi: 'Sprijină pe Ko-fi', sponsor: "Întreabă despre sponsorizare" },
};

const ar: HomeCopy = {
  meta: { title: 'قوائم مشتركة. خادمك.', description: 'Ditero تطبيق مهام مفتوح المصدر ومستضاف ذاتيًا للأسر والنوادي والفرق الصغيرة. شارك قوائم التسوق والمهام المنزلية والعادات والمشاريع من خادم تديره بنفسك.' },
  ui: { selfHost: 'استضافة ذاتية', skip: 'تخطَّ إلى المحتوى', mainNav: 'التنقل الرئيسي', footerNav: 'روابط التذييل', features: 'الميزات', access: 'التطبيقات والأدوات', support: 'الدعم', source: 'الشيفرة المصدرية', about: 'حول', privacy: 'الخصوصية', license: 'ترخيص MIT', issues: 'المشكلات', language: 'اللغة', theme: 'السمة الداكنة', footerNote: 'مفتوح المصدر بترخيص MIT.', home: 'الصفحة الرئيسية لـ Ditero', madeBy: 'من تطوير Iulian Dita', otherProjects: 'مشاريع أخرى' },
  hero: { line1: 'قوائم مشتركة.', line2: 'خادمك.', intro: 'مهام وتسوق وروتين مشترك للأسر والمجموعات الصغيرة. على خادمك، مع مزامنة دون اتصال وتطبيقات للويب والجوال وسطح المكتب والطرفية.', primary: 'إعداد الخادم الخاص بك', apps: 'التطبيقات والأدوات', status: "بيتا:" },
  capture: { dashboardCompactAlt: 'لوحة الأسرة في Ditero تعرض أولويات المهام.', dashboardAlt: "لوحة معلومات Ditero تعرض خمس أولويات للأسرة.", desktopAlt: "مهام شخصية ومشتركة في Ditero مجمّعة حسب الأولوية.", mobileAlt: 'تطبيق Ditero على الجوال يعرض قائمة مشتركة بمهام تجريبية.', open: 'افتح لقطة الشاشة بالحجم الكامل' },
  gallery: {
    title: "نظرة أقرب",
    note: "معاينات من نسخة التطوير بواجهة إنجليزية وبيانات منزلية خيالية.",
    items: {
      'priorities': { title: "الأولويات في لمحة", caption: "جمّع المهام حسب الأولوية، وشاهد المسؤولين والتواريخ والتصنيفات.", alt: "لوحة Ditero داكنة بمهام ذات أولوية عالية ومتوسطة ومنخفضة ومهام دون أولوية، مع المسؤولين والتواريخ والتصنيفات." },
      'task-detail': { title: "تفاصيل المهام المشتركة", caption: "شاهد المسؤولين والمهام الفرعية والملاحظات والتعليقات معًا.", alt: "تفاصيل Ditero تعرض مسؤولَين وملاحظات وثلاث مهام فرعية." },
      'recurrence-reminders': { title: "التكرار والتذكيرات", caption: "اضبط التكرار الأسبوعي ووقت التذكير في تفاصيل المهمة.", alt: "مقتطفان من تفاصيل Ditero يعرضان عنوان المهمة والتكرار الأسبوعي يوم السبت وإعدادات التذكير الساعة التاسعة صباحًا." },
      'saved-filters': { title: "الفلاتر والعروض المحفوظة", caption: "احفظ فلاتر القائمة والحالة مع تخطيط لوحة وتجميع حسب الأولوية.", alt: "محرر عروض داكن في Ditero يعرض شروط القائمة والحالة وتخطيط لوحة وتجميعًا حسب الأولوية." },
    },
  },
  features: {
    title: 'ماذا يفعل Ditero', intro: 'قوائم ومهام لمن يتشاركون منزلًا أو ناديًا أو فريقًا صغيرًا.',
    proof: {
      'task-detail': { title: 'تقاسم المهام', text: 'أسنِد المهام، وشارك الملاحظات، وقسّم الخطط إلى مهام فرعية.' },
      'recurrence-reminders': { title: "المهام المنزلية والتذكيرات", text: 'كرّر المهام المنزلية. ابنِ عادات. اضبط التذكيرات في الوقت المناسب.' },
      'dashboard': { title: 'لوحات المعلومات', text: 'أبقِ أولوياتك واضحة.' },
    },
  },
  access: {
    title: 'التطبيقات والأدوات', intro: "خادم واحد لمجموعتك. استخدمه عبر الويب أو الهاتف أو سطح المكتب أو أدواتك الخاصة.",
    invited: "دعاك أحدهم؟ افتح الرابط الذي أرسله إليك؛ لا تحتاج إلى تثبيت أي شيء.",
    publicTitle: 'التطبيقات', devTitle: "الأدوات وواجهة API",
    public: {
      web: { name: 'الويب', state: 'بيتا', text: 'استخدم Ditero في متصفحك، مع مزامنة التغييرات التي أجريتها دون اتصال عند إعادة الاتصال.' },
      android: { name: 'Android', state: 'تجريبي', text: "ملفا APK وAAB مستقلان وموقّعان، ولا يتوفران عبر متجر." },
      desktop: { name: 'سطح المكتب', state: 'تجريبي', text: "مثبّتات Windows وLinux غير موقّعة، وإصدارات macOS موقّعة بتوقيع ad hoc (دون هوية مطوّر) ودون توثيق (notarization) من Apple." },
      ios: { name: 'iOS', state: 'غير متاح بعد', text: 'لا يوجد تطبيق iOS أصلي بعد.' },
    },
    dev: {
      cli: { name: 'CLI', state: 'بيتا', text: 'اعرض المهام وأنشئها وحدّثها من سطر الأوامر.' },
      tui: { name: 'TUI', state: 'بيتا', text: 'تصفّح المهام وأدِرها تفاعليًا باستخدام لوحة المفاتيح.' },
      api: { name: 'API', state: "بيتا", text: 'اربط عملاء HTTP باستخدام رموز الوصول الشخصية وOpenAPI.' },
      mcp: { name: 'MCP', state: 'بيتا', text: 'دع مساعدًا متصلًا يخطط للمهام وينشئها ويديرها.' },
    },
    labels: { setup: 'دليل الإعداد', release: 'التنزيلات', guide: 'الدليل' },
  },
  server: { title: 'شغّل الخادم بنفسك', text: "شغّل Ditero على بنيتك التحتية. افحص الشيفرة بترخيص MIT وحدد من يملك الوصول. تتوفر أدلة Docker Compose وHelm.", link: 'اقرأ دليل النشر', docs: 'اقرأ الوثائق', prerequisites: "يلزم PostgreSQL 15+ مع النسخ المتماثل المنطقي، ويتضمنه Docker Compose. ويلزم المنفذان 3000 و4848. اضبط DITERO_IMAGE_TAG={imageTag} لتشغيل هذا الإصدار.", cost: "البرنامج مجاني، لكن أحد أفراد المجموعة يدير الجهاز.", recovery: "انسخ قاعدة البيانات والمرفقات ومفاتيح التشفير احتياطيًا، واختبر الاستعادة قبل دعوة الآخرين. تصدير JSON ليس نسخة احتياطية كاملة.", encryption: "تشفير المرفقات (اختياري): يُشفّر محتوى الملفات وأسماؤها وأنواعها وصورها المصغّرة في المتصفح؛ أما الأحجام والأوقات ومن رفع الملف ونص المهام فلا تُشفّر." },
  support: { title: 'ادعم التطوير', text: "Ditero مجاني وبترخيص MIT. لا توجد ميزات مدفوعة. تموّل التبرعات وقتي المخصص للإصلاحات وإصدار النسخ الجديدة.", kofi: 'ادعم على Ko-fi', sponsor: "استفسر عن الرعاية" },
};

export const copy: Record<Locale, HomeCopy> = { en, de, es, fr, ro, ar };
