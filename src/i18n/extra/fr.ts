import type { ExtraCopy } from './types';

export const fr: ExtraCopy = {
  ui: { prev: 'Précédent', next: 'Suivant', of: 'sur', groups: 'Groupes de fonctionnalités', docs: 'Documentation' },
  ai: {
    title: 'Demandez à votre assistant de planifier',
    intro: "Connectez un assistant d'IA compatible à Ditero via MCP, puis décrivez vos besoins avec vos propres mots. L'assistant crée et organise des tâches et peut définir des priorités et des échéances.",
    exampleLabel: 'Exemple de demande',
    example: 'Planifie le pique-nique de samedi, attribue les courses et marque la réservation du train comme prioritaire.',
    points: [
      "C'est un assistant externe que vous connectez. Ditero n'a pas de chatbot intégré et n'héberge aucun modèle d'IA.",
      'Votre client MCP décide où vont les résultats et les conversations. Utilisez un client de confiance.',
      "L'accès dépend du jeton d'accès personnel que vous fournissez et de ses appartenances à des espaces de travail.",
      'MCP se trouve dans le code source de développement et les versions nightly, pas dans les téléchargements alpha.',
    ],
    note: "Ceci est un exemple de demande, pas une conversation enregistrée.",
    link: 'Lire le guide MCP',
  },
  carousel: {
    title: 'Plus de ce qui est construit', intro: 'Le reste des fonctionnalités, regroupé. Utilisez les boutons, balayez ou faites défiler.',
    note: 'Ces fonctionnalités sont disponibles dans le code source de développement. La version alpha publiée en contient un sous-ensemble.',
    label: 'Carrousel des groupes de fonctionnalités',
    groups: [
      { id: 'lists', tab: 'Listes', title: 'Listes et partage', items: ['Listes typées pour différents types de travail', 'Sous-tâches dans les tâches', 'Priorités et étiquettes', "Attribution aux membres de l'espace de travail", 'Espaces de travail partagés avec appartenances'] },
      { id: 'routines', tab: 'Routines', title: 'Habitudes et routines', items: ['Habitudes suivies dans le temps', 'Tâches récurrentes', 'Séries', 'Un mode concentration pour la tâche en cours'] },
      { id: 'reminders', tab: 'Rappels', title: 'Rappels', items: ['Envoi par ntfy, Telegram, Discord, Slack et e-mail', 'Heures de silence', 'Accusé de réception des rappels'] },
      { id: 'views', tab: 'Vues', title: 'Façons de voir les tâches', items: ['Tableaux de bord', 'Calendrier', 'Tableau kanban', 'Tableau de données', 'Vues enregistrées'] },
      { id: 'files', tab: 'Fichiers', title: 'Fichiers et récupération', items: ['Pièces jointes chiffrées', 'Commentaires sur les tâches', 'Historique des modifications', 'Export et import, avec exclusions documentées'] },
      { id: 'access', tab: 'Accès', title: 'Connexion et intégrations', items: ['Passkeys et TOTP', "Jetons d'accès personnels", 'API HTTP, flux iCal et webhooks', 'CLI, TUI et MCP'] },
      { id: 'custom', tab: 'Apparence', title: 'Personnalisation', items: ["Six langues d'interface, dont l'arabe de droite à gauche", 'Thèmes clair et sombre', "Couleurs d'accent et thèmes partagés", 'Taille de lecture et option de contraste élevé'] },
    ],
  },
};
