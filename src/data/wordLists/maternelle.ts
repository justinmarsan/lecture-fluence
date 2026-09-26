import type { WordList } from "./types";

/**
 * Mots "transparents" au sens de la lecture GS / CP période 1 : chaque
 * lettre ou graphème se lit comme on l'attend, sans voyelle nasale
 * (an, en, on, in, un...) ni son complexe à retenir par cœur (oi, au, eau,
 * eu, gn, ill...). On garde en revanche "ch" et "ou", des graphèmes très
 * réguliers enseignés dès les premières semaines de lecture.
 *
 * Les lettres finales muettes (chat, tapis, dos...) sont volontairement
 * conservées : elles ne changent rien à la prononciation, contrairement
 * aux sons complexes que cette liste cherche à éviter.
 */
const motsOutils = [
  "le", "la", "les", "une", "de", "et", "à",
  "il", "elle", "est", "a", "tu", "je",
  "si", "oui", "ici", "là", "ma", "ta", "sa",
];

const famille = ["papa", "mamie", "papi", "tata", "bébé", "ami", "amie"];

const animaux = [
  "chat", "vache", "cheval", "tigre", "zèbre", "âne", "canard", "renard",
  "lama", "puma", "koala", "rat", "puce", "limace", "souris", "poule",
  "loup", "hibou", "fourmi", "bouc", "coq",
];

const nourriture = [
  "café", "chocolat", "sucre", "riz", "pâtes", "jus", "salade", "tomate",
  "carotte", "datte", "radis", "abricot", "cerise", "banane", "pomme",
  "pizza", "soupe", "chou",
];

const objets = [
  "table", "tapis", "lit", "sac", "robe", "jupe", "cube", "tube", "bulle",
  "pile", "valise", "radio", "piano", "moto", "vélo", "taxi", "stylo",
  "carte", "balle", "cage", "page", "boule", "roue", "poupée", "doudou",
  "jouet",
];

const corps = ["tête", "dos", "bras", "pied", "nez", "genou", "bouche", "coude"];

const couleurs = ["rouge", "vert", "rose", "violet", "gris"];

const nature = ["lune", "lac", "mer", "île", "mare", "roche"];

const verbesSimples = [
  "rire", "donner", "sortir", "tirer", "cacher", "coller", "casser",
  "laver", "poser", "passer", "visiter", "dormir", "marcher", "jouer",
  "écouter", "rouler", "couper", "trouver", "tousser",
];

const adjectifsSimples = [
  "petit", "joli", "poli", "rapide", "utile", "facile", "solide", "timide",
  "carré", "léger", "salé", "sucré", "amer", "doré", "pâle", "mou", "dur",
  "lourd", "court",
];

export const maternelle: WordList = {
  id: "maternelle",
  label: "Maternelle",
  description: "Mots courts, sans sons complexes ni nasales, pour bien débuter",
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
