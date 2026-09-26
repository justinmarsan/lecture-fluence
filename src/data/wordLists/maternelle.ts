import type { WordList } from "./types";

/**
 * Mots "transparents" au sens de la lecture GS / CP période 1 : chaque
 * lettre ou graphème se lit comme on l'attend.
 *
 * Exclus : les voyelles nasales "an", "en", "on", "un" et les autres sons
 * complexes (oi, au, eau, eu, gn, ill...). Le son nasal "in" (singe, lapin,
 * main...) est en revanche accepté : il est très régulier et fréquent.
 *
 * Exclus aussi les terminaisons "-er"/"-et" quand la dernière lettre est
 * muette et cache un son "é"/"è" (donner, jouet, violet...) : c'est un
 * piège de lecture, pas un mot simple. On garde seulement les mots où le
 * "r" final se prononce vraiment (mer, amer) et les exceptions trop
 * fréquentes pour être évitées ("et", "est").
 *
 * Les autres lettres finales muettes (chat, tapis, dos...) restent
 * acceptées : elles ne changent rien à la prononciation, contrairement
 * aux pièges ci-dessus.
 */
const motsOutils = [
  "le", "la", "les", "une", "de", "et", "à",
  "il", "elle", "est", "a", "tu", "je",
  "si", "oui", "ici", "là", "ma", "ta", "sa",
];

const famille = ["papa", "mamie", "papi", "tata", "bébé", "ami", "amie", "cousin"];

const animaux = [
  "chat", "vache", "cheval", "tigre", "zèbre", "âne", "canard", "renard",
  "lama", "puma", "koala", "rat", "puce", "limace", "souris", "poule",
  "loup", "hibou", "fourmi", "bouc", "coq", "singe", "lapin",
];

const nourriture = [
  "café", "chocolat", "sucre", "riz", "pâtes", "jus", "salade", "tomate",
  "carotte", "datte", "radis", "abricot", "cerise", "banane", "pomme",
  "pizza", "soupe", "chou", "pain",
];

const objets = [
  "table", "tapis", "lit", "sac", "robe", "jupe", "cube", "tube", "bulle",
  "pile", "valise", "radio", "piano", "moto", "vélo", "taxi", "stylo",
  "carte", "balle", "cage", "page", "boule", "roue", "poupée", "doudou",
  "train", "dessin",
];

const corps = ["tête", "dos", "bras", "pied", "nez", "genou", "bouche", "coude", "main"];

const couleurs = ["rouge", "vert", "rose", "gris"];

const nature = ["lune", "lac", "mer", "île", "mare", "roche", "jardin", "matin", "sapin"];

const verbesSimples = [
  "rire", "lire", "dire", "écrire", "sortir", "dormir", "finir", "rougir",
  "pâlir", "salir", "mordre", "perdre",
];

const adjectifsSimples = [
  "petit", "joli", "poli", "rapide", "utile", "facile", "solide", "timide",
  "carré", "salé", "sucré", "amer", "doré", "pâle", "mou", "dur", "lourd",
  "court", "malin",
];

export const maternelle: WordList = {
  id: "maternelle",
  label: "Maternelle",
  description: "Mots courts, sans sons complexes ni pièges de lecture",
  icon: "🧸",
  words: Array.from(
    new Set([
      ...motsOutils,
      ...famille,
      ...animaux,
      ...nourriture,
      ...objets,
      ...corps,
      ...couleurs,
      ...nature,
      ...verbesSimples,
      ...adjectifsSimples,
    ])
  ),
};
