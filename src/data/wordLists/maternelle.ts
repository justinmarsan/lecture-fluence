import type { WordList } from "./types";

/**
 * Mots "transparents" au sens de la lecture GS / CP période 1 : chaque
 * lettre ou graphème se lit comme on l'attend. Vocabulaire construit à
 * partir de listes de mots déchiffrables utilisées en GS/CP (période 1-2) :
 * voyelles simples, consonnes simples, plus "ch" et "ou" qui sont très
 * réguliers et enseignés tôt.
 *
 * Exclus :
 * - les voyelles nasales "an", "en", "on", "un" et les autres sons
 *   complexes (oi, au, eau, eu, gn, ill, ph...). Le son nasal "in" est
 *   accepté (singe, lapin, câlin...), mais seulement quand il s'écrit
 *   "in" : "ain"/"ein" (pain, main, train) restent exclus pour l'instant.
 * - les terminaisons "-er"/"-et" quand la dernière lettre est muette et
 *   cache un son "é"/"è" (donner, jouet, violet...). On retrouve les
 *   verbes en "-er" sous leur forme conjuguée au présent ("il/elle ___"),
 *   qui se termine par un simple "-e" muet, tout aussi régulier que dans
 *   "table" ou "lune" (donne, tourne, coupe...). Exceptions gardées : le
 *   "r" qui se prononce vraiment (mer, amer) et les mots-outils trop
 *   fréquents pour être évités ("et", "est").
 * - le "s" qui se prononce "z" entre deux voyelles (cousin, cerise,
 *   valise, rose...) : c'est une leçon de lecture à part, plus avancée.
 * - quelques mots ponctuels avec une lettre finale muette qui masque un
 *   son plus subtil (pied, nez).
 *
 * Les autres lettres finales muettes (chat, tapis, dos, robot...) restent
 * acceptées : elles ne changent rien à la prononciation, contrairement
 * aux pièges ci-dessus.
 */
const motsOutils = [
  "le", "la", "les", "une", "de", "et", "à",
  "il", "elle", "est", "a", "tu", "je",
  "si", "oui", "ici", "là", "ma", "ta", "sa",
];

const motsEnfantins = ["dodo", "bobo", "dada", "câlin"];

const famille = ["papa", "mamie", "papi", "tata", "bébé", "ami", "amie"];

const animaux = [
  "chat", "vache", "cheval", "tigre", "zèbre", "âne", "canard", "renard",
  "lama", "puma", "koala", "rat", "puce", "limace", "souris", "poule",
  "loup", "hibou", "fourmi", "bouc", "coq", "singe", "lapin", "grue",
  "mygale",
];

const nourriture = [
  "café", "chocolat", "sucre", "riz", "pâtes", "jus", "salade", "tomate",
  "carotte", "datte", "radis", "abricot", "banane", "pomme", "pizza",
  "soupe", "chou", "frite", "olive", "blé", "avocat",
];

const objets = [
  "table", "tapis", "lit", "sac", "robe", "jupe", "cube", "tube", "bulle",
  "pile", "radio", "piano", "moto", "vélo", "taxi", "stylo", "carte",
  "balle", "cage", "page", "boule", "roue", "poupée", "doudou", "dessin",
  "carafe", "toupie", "canapé", "sofa", "robot", "bol", "loto", "fil",
  "mur", "ruche", "police", "judo",
];

const corps = ["tête", "dos", "bras", "genou", "bouche", "coude", "barbe"];

const couleurs = ["rouge", "vert", "gris"];

const nature = [
  "lune", "lac", "mer", "île", "mare", "roche", "jardin", "matin", "sapin",
  "poussière", "vacarme", "soupir",
];

// Verbes en -ir / -re : toutes les lettres se prononcent, y compris le "r" final.
const verbesSimples = [
  "rire", "lire", "dire", "écrire", "sortir", "dormir", "finir", "rougir",
  "salir", "mordre", "perdre",
];

// Verbes en -er utilisés à la forme conjuguée ("il/elle ...") plutôt qu'à
// l'infinitif : le "-e" final est muet, comme dans "table" ou "lune", sans
// le piège du "-er" (donner, jouer...) où le "r" ne se prononce pas.
const verbesConjugues = [
  "donne", "vole", "tourne", "coupe", "lave", "casse", "colle", "cache",
  "marche", "joue", "roule", "trouve", "écoute", "attrape", "regarde",
  "ferme", "pousse",
];

const adjectifsSimples = [
  "petit", "joli", "poli", "rapide", "utile", "facile", "solide", "timide",
  "carré", "salé", "sucré", "amer", "doré", "pâle", "mou", "dur", "lourd",
  "court", "malin", "mini",
];

export const maternelle: WordList = {
  id: "maternelle",
  label: "Maternelle",
  description: "Mots courts, sans sons complexes ni pièges de lecture",
  icon: "🧸",
  words: Array.from(
    new Set([
      ...motsOutils,
      ...motsEnfantins,
      ...famille,
      ...animaux,
      ...nourriture,
      ...objets,
      ...corps,
      ...couleurs,
      ...nature,
      ...verbesSimples,
      ...verbesConjugues,
      ...adjectifsSimples,
    ])
  ),
};
