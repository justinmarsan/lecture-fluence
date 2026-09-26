import type { WordList } from "./types";
import { maternelle } from "./maternelle";
import { elementaire } from "./elementaire";

/**
 * Registre central des listes de mots disponibles dans l'application.
 *
 * Pour ajouter une nouvelle liste (par thématique, difficulté, etc.) :
 * 1. Créer un fichier `src/data/wordLists/ma-liste.ts` qui exporte un objet
 *    `WordList` (voir `types.ts`).
 * 2. L'importer et l'ajouter ci-dessous.
 * L'écran d'accueil génère automatiquement un bouton par liste enregistrée
 * ici : aucune autre modification n'est nécessaire.
 */
export const WORD_LISTS: WordList[] = [maternelle, elementaire];

export function getWordList(id: string): WordList {
  const list = WORD_LISTS.find((wordList) => wordList.id === id);
  if (!list) {
    throw new Error(`Liste de mots inconnue : "${id}"`);
  }
  return list;
}

export type { WordList };
export { shuffleWords } from "./shuffle";
