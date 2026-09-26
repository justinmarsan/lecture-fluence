export interface WordList {
  /** Identifiant stable, utilisé en interne (ne pas traduire ni renommer). */
  id: string;
  /** Nom affiché à l'utilisateur. */
  label: string;
  /** Courte description affichée sous le nom, pour aider à choisir. */
  description: string;
  /** Emoji illustrant la liste sur l'écran d'accueil. */
  icon: string;
  /** Les mots de l'exercice. Les doublons sont automatiquement supprimés. */
  words: string[];
}
