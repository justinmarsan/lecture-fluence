import type { WordList } from "./types";

/**
 * Mots courts et "transparents" : leur écriture correspond simplement à ce
 * qu'on entend, avec peu de sons complexes (pas de "eau", "gn", "oin"...).
 * On garde toutefois quelques mots-outils irréguliers mais tellement
 * fréquents qu'un enfant les reconnaît très vite (ex. "est", "les").
 */
const motsOutils = [
  "le", "la", "les", "un", "une", "de", "et", "à",
  "il", "elle", "on", "et", "est", "a", "tu", "je",
  "oui", "non", "si", "ici", "là",
  "mon", "ma", "ton", "ta", "son", "sa",
];

const famille = [
  "papa", "maman", "mamie", "papi", "tata", "tonton", "bébé", "ami", "amie",
];

const animaux = [
  "chat", "chien", "lapin", "souris", "poule", "vache", "cheval",
  "canard", "cochon", "poisson", "oiseau", "ours", "loup", "renard",
  "lion", "tigre", "singe", "zèbre", "panda", "koala", "âne",
];

const nourriture = [
  "pain", "lait", "eau", "pomme", "banane", "fraise", "gâteau", "bonbon",
  "chocolat", "fromage", "soupe", "riz", "pâtes", "jus", "café", "sucre",
];

const maisonEtObjets = [
  "maison", "porte", "table", "chaise", "lit", "jouet", "ballon", "poupée",
  "livre", "crayon", "sac", "vélo", "voiture", "bateau", "avion", "train",
];

const corps = [
  "main", "pied", "tête", "nez", "bouche", "dos", "ventre", "œil", "yeux",
];

const couleurs = [
  "rouge", "bleu", "vert", "jaune", "blanc", "noir", "rose",
];

const nature = [
  "soleil", "lune", "étoile", "pluie", "fleur", "arbre", "herbe", "ciel",
];

const nombres = ["un", "deux", "trois", "quatre", "cinq"];

const verbesSimples = [
  "manger", "dormir", "jouer", "courir", "sauter", "rire", "pleurer",
  "chanter", "danser", "marcher", "aimer", "donner",
];

const adjectifsSimples = [
  "petit", "grand", "beau", "joli", "gentil", "content",
];

export const maternelle: WordList = {
  id: "maternelle",
  label: "Maternelle",
  description: "Mots courts et simples à décoder, pour bien débuter",
  icon: "🧸",
  words: Array.from(
    new Set([
      ...motsOutils,
      ...famille,
      ...animaux,
      ...nourriture,
      ...maisonEtObjets,
      ...corps,
      ...couleurs,
      ...nature,
      ...nombres,
      ...verbesSimples,
      ...adjectifsSimples,
    ])
  ),
};
