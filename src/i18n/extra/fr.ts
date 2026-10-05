import type { ExtraCopy } from './types';

export const fr: ExtraCopy = {
  ui: { details: 'Détails', menu: 'Menu', heroIntro: 'Courses, tâches ménagères et projets, ensemble. Gratuit, open source et auto-hébergé.', of: 'sur', groups: 'Groupes de fonctionnalités', docs: 'Documentation' },
  setup: { steps: ["Lancez votre serveur avec Docker Compose", "Créez votre compte dans l'application web", "Invitez des proches et partagez une liste"] },
  ai: {
    title: 'Demandez à votre assistant de planifier',
    intro: "Connectez un assistant d'IA compatible à Ditero via MCP, puis décrivez vos besoins avec vos propres mots. L'assistant crée et organise des tâches et peut définir des priorités et des échéances.",
    exampleLabel: 'Exemple de demande',
    example: 'Planifiez le pique-nique de samedi, attribuez les courses et marquez la réservation du train comme prioritaire.',
    resultLabel: "Exemple de plan",
    results: [{"title": "Organiser le pique-nique de samedi", "detail": "Samedi"}, {"title": "Acheter de quoi manger pour le pique-nique", "detail": "Attribuée à Alex"}, {"title": "Réserver le train", "detail": "Priorité élevée"}],
    points: [
      "C'est un assistant externe que vous connectez. Ditero n'a pas de chatbot intégré et n'héberge aucun modèle d'IA.",
      'Votre client MCP décide où vont les résultats et les conversations. Utilisez un client de confiance.',
      "L'accès dépend du jeton d'accès personnel que vous fournissez et de ses appartenances à des espaces de travail.",
      'MCP se trouve dans le code source de développement et les versions nightly, pas dans les téléchargements alpha.',
    ],
    link: 'Lire le guide MCP',
  },
  carousel: {
    note: 'Ces fonctionnalités sont disponibles dans le code source de développement. La version alpha publiée en contient un sous-ensemble.',
    label: 'Carrousel des groupes de fonctionnalités',
    groups: [
      { id: 'lists', tab: 'Listes', title: 'Listes et partage', items: ["Courses, projets et listes de contrôle", "Attribuez les tâches à vos proches", 'Listes typées pour différents types de travail', 'Sous-tâches dans les tâches', 'Priorités et étiquettes', 'Espaces de travail partagés avec appartenances', "Dossiers et modèles", "Saisie rapide avec dates et priorités", "Synchronisation hors ligne"] },
      { id: 'routines', tab: 'Routines', title: 'Habitudes et routines', items: ["Tâches ménagères récurrentes", "Habitudes et séries", 'Un mode concentration pour la tâche en cours', "Minuteur de concentration", "Karma"] },
      { id: 'reminders', tab: 'Rappels', title: 'Rappels', items: ["Rappels d'échéance", "Heures de silence", 'Envoi par ntfy, Telegram, Discord, Slack et e-mail', 'Accusé de réception des rappels', "Escalade des rappels sans réponse"] },
      { id: 'views', tab: 'Vues', title: 'Façons de voir les tâches', items: ['Tableaux de bord', 'Calendrier', 'Tableau kanban', 'Tableau de données', 'Vues enregistrées'] },
      { id: 'files', tab: 'Fichiers', title: 'Fichiers et récupération', items: ['Pièces jointes chiffrées', 'Commentaires sur les tâches', 'Historique des modifications', 'Export et import, avec exclusions documentées'] },
      { id: 'access', tab: 'Accès', title: 'Connexion et intégrations', items: ['Passkeys et TOTP', "Jetons d'accès personnels", 'API HTTP, flux iCal et webhooks', 'CLI, TUI et MCP'] },
      { id: 'custom', tab: 'Apparence', title: 'Personnalisation', items: ["Six langues d'interface, dont l'arabe de droite à gauche", "Thèmes clair et sombre", "Couleurs d'accent et thèmes partagés", 'Taille de lecture et option de contraste élevé'] },
    ],
  },
};
