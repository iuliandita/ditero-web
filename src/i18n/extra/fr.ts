import type { ExtraCopy } from './types';

export const fr: ExtraCopy = {
  ui: { tour: 'Découvrez Ditero', platforms: 'Web, Android et application de bureau expérimentale. CLI, TUI et MCP depuis le code source.', details: 'Détails', menu: 'Menu', heroIntro: 'Listes de courses partagées, tâches ménagères récurrentes et rappels pour votre foyer. Gratuit, open source et auto-hébergé.', groups: 'Groupes de fonctionnalités', docs: 'Documentation' },
  setup: { steps: ["Lancez votre serveur avec Docker Compose", "Créez votre compte dans l'application web", "Invitez des proches et partagez une liste"] },
  ai: {
    title: "Planifiez avec votre assistant",
    intro: "Connectez un assistant IA que vous utilisez déjà. Via MCP, il transforme vos demandes en tâches, priorités et échéances.",
    exampleLabel: 'Exemple de demande',
    example: 'Planifiez le pique-nique de samedi, attribuez les courses et marquez la réservation du train comme prioritaire.',
    resultLabel: "Exemple de plan",
    results: [{"title": "Organiser le pique-nique de samedi", "detail": "Liste partagée"}, {"title": "Acheter de quoi manger pour le pique-nique", "detail": "Attribuée à Alex"}, {"title": "Réserver le train", "detail": "Priorité élevée"}],
    source: "Les téléchargements alpha ne comprennent pas de binaires autonomes.",
    shortSource: "MCP se lance depuis le code source.",
    points: [
      "C'est un assistant externe que vous connectez. Ditero n'a pas de chatbot intégré et n'héberge aucun modèle d'IA.",
      'Votre client MCP décide où vont les résultats et les conversations. Utilisez un client de confiance.',
      "L'accès dépend du jeton d'accès personnel que vous fournissez et de ses appartenances à des espaces de travail.",
    ],
    link: 'Lire le guide MCP',
  },
  features: {
    groups: [
      { id: 'lists', title: 'Listes et partage', summary: "Courses, projets et responsabilités partagées", items: ["Courses, projets et listes de contrôle", "Attribuez les tâches à vos proches", 'Listes typées pour différents types de travail', 'Sous-tâches dans les tâches', 'Priorités et étiquettes', 'Espaces de travail partagés avec appartenances', "Dossiers et modèles", "Saisie rapide avec dates et priorités", "Synchronisation hors ligne"] },
      { id: 'routines', title: 'Habitudes et routines', summary: "Tâches récurrentes, habitudes et concentration", items: ["Tâches ménagères récurrentes", "Habitudes et séries", 'Un mode concentration pour la tâche en cours', "Minuteur de concentration", "Points pour les tâches et habitudes accomplies (Karma)"] },
      { id: 'reminders', title: 'Rappels', summary: "ntfy, Telegram, Discord, Slack et e-mail", items: ["Rappels d'échéance", "Heures de silence", 'Choisissez vos canaux de notification', 'Accusé de réception des rappels', "Escalade des rappels sans réponse"] },
      { id: 'views', title: 'Façons de voir les tâches', summary: "Calendrier, tableau kanban, tableau de données et tableaux de bord", items: ['Tableaux de bord', 'Calendrier', 'Tableau kanban', 'Tableau de données', 'Vues enregistrées'] },
      { id: 'files', title: 'Fichiers et commentaires', summary: "Discussions sur les tâches et pièces jointes chiffrées", items: ['Pièces jointes chiffrées', 'Commentaires sur les tâches'] },
      { id: 'recovery', title: 'Historique et export', summary: "Historique des tâches terminées, import et export", items: ['Historique des tâches terminées', 'Export et import, avec exclusions documentées'] },
      { id: 'access', title: 'Connexion et intégrations', summary: "Passkeys, API, calendriers et outils pour assistants", items: ['Passkeys et TOTP', "Jetons d'accès personnels", "API HTTP et exports iCal", "Clients CLI, TUI et MCP depuis le code source", "Abonnements calendrier et webhooks (alpha)"] },
      { id: 'custom', title: 'Personnalisation', summary: "Six langues, thèmes et options de lecture", items: ["Six langues d'interface, dont l'arabe de droite à gauche", "Thèmes clair et sombre", "Couleurs d'accent et thèmes partagés", 'Taille de lecture et option de contraste élevé'] },
    ],
  },
};
