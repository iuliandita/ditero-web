import type { ExtraCopy } from './types';

export const fr: ExtraCopy = {
  ui: { view: 'Vue', desktop: 'Ordinateur', phone: 'Téléphone', tour: 'Découvrez Ditero', platforms: "Le web, Android et les applications de bureau sont en bêta ; CLI, TUI et MCP sont fournis en bundles Bun.", details: 'Détails', menu: 'Menu', heroIntro: 'Listes de courses partagées, tâches ménagères récurrentes et rappels pour votre foyer. Gratuit, open source et auto-hébergé.', groups: 'Groupes de fonctionnalités', docs: 'Documentation' },
  setup: { steps: ["Lancez votre serveur avec Docker Compose", "Créez votre compte dans l'application web", "Invitez des proches et partagez une liste"] },
  ai: {
    title: "Planifiez avec votre assistant",
    intro: "Connectez un assistant IA que vous utilisez déjà. Via MCP, il transforme vos demandes en tâches, priorités et échéances.",
    exampleLabel: 'Exemple de demande',
    example: "Organisez le trajet en train de samedi, confiez le choix de l’itinéraire à Alex et donnez la priorité à la réservation des billets.",
    resultLabel: "Exemple de plan",
    results: [{"title": "Organiser le trajet en train de samedi", "detail": "Liste partagée"}, {"title": "Choisir l’itinéraire", "detail": "Attribuée à Alex"}, {"title": "Réserver les billets de train", "detail": "Priorité élevée"}],
    source: "Les bundles nécessitent Bun 1.3.14 ou plus et sont qualifiés sur Linux x64.",
    shortSource: "MCP est fourni en bundle Bun.",
    points: [
      "C'est un assistant externe que vous connectez. Ditero n'a pas de chatbot intégré et n'héberge aucun modèle d'IA.",
      'Votre client MCP décide où vont les résultats et les conversations. Utilisez un client de confiance.',
      "L'accès dépend du jeton d'accès personnel que vous fournissez et de ses appartenances à des espaces de travail.",
    ],
    link: 'Lire le guide MCP',
  },
  features: {
    importNote: "Importez depuis Todoist, TickTick, Microsoft To Do (Outlook CSV), Trello et CSV.",
    groups: [
      { id: 'lists', title: 'Listes et partage', summary: "Courses et projets en groupe", items: ["Tâches, courses, listes de contrôle, projets et habitudes", "Attribuez les tâches à vos proches", 'Sous-tâches dans les tâches', 'Priorités et étiquettes', 'Espaces de travail à partager avec d\'autres personnes', "Dossiers et modèles", "Saisie rapide avec dates et priorités", "Les modifications hors ligne se synchronisent à la reconnexion"] },
      { id: 'routines', title: 'Habitudes', summary: "Tâches récurrentes et habitudes", items: ["Tâches ménagères récurrentes", "Habitudes et séries", 'Minuteur de concentration lié aux tâches', "Points pour les tâches et habitudes accomplies (Karma)"] },
      { id: 'reminders', title: 'Rappels', summary: "Confirmez les rappels sur les canaux de votre choix", items: ["Rappels d'échéance", "Heures de silence", 'Choisissez vos canaux de notification', 'Accusé de réception des rappels', "Escalade des rappels sans réponse"] },
      { id: 'views', title: 'Vues des tâches', summary: "Calendrier, kanban et tableaux", items: ['Tableaux de bord', 'Calendrier', 'Tableau kanban', 'Tableau de données', 'Vues enregistrées'] },
      { id: 'files', title: 'Fichiers', summary: "Commentaires et pièces jointes chiffrées en option", items: ['Pièces jointes chiffrées', 'Commentaires sur les tâches'] },
      { id: 'recovery', title: 'Historique et export', summary: "Tâches terminées, import et export", items: ['Historique des tâches terminées', 'Export et import, avec exclusions documentées'] },
      { id: 'access', title: 'Connexion et outils', summary: "Passkeys, API et assistants", items: ['Passkeys et TOTP', "Jetons d'accès personnels", "API HTTP et exports iCal", "Clients CLI, TUI et MCP depuis le code source", "Abonnements calendrier et webhooks entrants"] },
      { id: 'custom', title: 'Personnalisation', summary: "Six langues, thèmes et options de lecture", items: ["Six langues d'interface, dont l'arabe de droite à gauche", "Thèmes clair et sombre", "Couleurs d'accent et thèmes partagés", 'Taille de lecture et option de contraste élevé'] },
    ],
  },
};
