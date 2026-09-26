/**
 * Liste de mots pour l'entraînement à la fluence en lecture (CP / CE1).
 *
 * Composée de deux familles de mots que l'on retrouve dans les listes de
 * référence utilisées à l'école (mots-outils très fréquents + vocabulaire
 * courant simple à décoder). Cette liste peut être librement complétée ou
 * remplacée par une liste officielle (ex. liste Eduscol, liste Dubois-Buyse)
 * en éditant ce seul fichier.
 */

// Mots-outils / mots grammaticaux à très haute fréquence
const motsOutils = [
  "le", "la", "les", "un", "une", "des", "de", "du",
  "et", "à", "au", "aux",
  "il", "elle", "ils", "elles", "on", "nous", "vous", "je", "tu",
  "est", "sont", "es", "suis", "sommes", "êtes", "a", "ont", "ai", "as", "avons", "avez",
  "dans", "sur", "sous", "avec", "sans", "pour", "par", "chez", "entre", "vers",
  "depuis", "pendant", "avant", "après",
  "mais", "ou", "où", "donc", "or", "ni", "car", "si",
  "que", "qui", "quoi", "dont", "comme", "quand", "comment", "pourquoi", "combien",
  "ne", "pas", "plus", "moins", "très", "trop", "bien", "mal",
  "tout", "tous", "toute", "toutes", "chaque", "quelque", "quelques", "plusieurs",
  "aucun", "aucune", "rien", "personne",
  "ce", "cet", "cette", "ces", "celui", "celle", "ceux", "celles",
  "mon", "ma", "mes", "ton", "ta", "tes", "son", "sa", "ses",
  "notre", "nos", "votre", "vos", "leur", "leurs",
  "moi", "toi", "lui", "eux", "y", "en",
  "ici", "là", "maintenant", "aujourd'hui", "hier", "demain",
  "toujours", "jamais", "souvent", "parfois", "encore", "déjà",
  "aussi", "alors", "ensuite", "enfin", "puis", "d'abord",
];

// Verbes fréquents (infinitif, formes simples)
const verbes = [
  "être", "avoir", "faire", "dire", "aller", "voir", "savoir", "pouvoir",
  "vouloir", "venir", "devoir", "prendre", "trouver", "donner", "parler",
  "aimer", "penser", "croire", "mettre", "passer", "regarder", "suivre",
  "connaître", "rester", "arriver", "entendre", "demander", "sortir",
  "comprendre", "jouer", "manger", "boire", "dormir", "courir", "sauter",
  "chanter", "lire", "écrire", "compter", "dessiner", "marcher", "monter",
  "descendre", "ouvrir", "fermer", "commencer", "finir", "chercher",
  "appeler", "montrer", "aider", "porter", "tomber", "pleurer", "rire",
  "crier", "écouter", "répondre", "attendre", "partir", "rentrer",
  "apporter", "garder", "laisser", "oublier", "apprendre", "travailler",
  "gagner", "perdre", "casser", "ranger", "laver", "préparer", "acheter",
  "nettoyer", "réparer", "envoyer", "recevoir", "offrir", "choisir",
  "décider", "essayer", "réussir", "continuer", "arrêter", "changer",
  "grandir", "vivre", "sembler", "devenir",
];

// Noms fréquents
const noms = [
  "homme", "femme", "enfant", "garçon", "fille", "papa", "maman",
  "frère", "sœur", "ami", "amie", "copain", "copine", "maître", "maîtresse",
  "école", "classe", "maison", "jardin", "rue", "ville", "village", "pays",
  "chien", "chat", "oiseau", "poisson", "cheval", "vache", "cochon", "lapin", "souris",
  "eau", "pain", "lait", "fromage", "gâteau", "fruit", "pomme", "banane", "légume",
  "table", "chaise", "lit", "porte", "fenêtre", "livre", "cahier", "crayon", "stylo", "gomme",
  "jeu", "jouet", "ballon", "vélo", "voiture", "train", "bateau", "avion", "sac",
  "main", "tête", "pied", "jambe", "bras", "yeux", "bouche", "nez", "oreille", "cœur", "corps",
  "mer", "terre", "ciel", "soleil", "lune", "étoile", "nuage", "pluie", "vent", "neige",
  "arbre", "fleur", "feuille", "herbe", "forêt", "montagne", "rivière",
  "couleur", "rouge", "bleu", "vert", "jaune", "blanc", "noir", "orange", "rose", "violet", "marron", "gris",
  "matin", "midi", "soir", "nuit", "jour", "semaine", "mois", "année", "temps", "fois", "heure", "minute",
  "saison", "printemps", "été", "automne", "hiver",
  "histoire", "musique", "dessin", "sport", "fête", "cadeau", "anniversaire", "famille",
  "travail", "question", "réponse", "idée", "nom", "mot", "phrase", "lettre", "nombre", "chiffre",
];

// Adjectifs fréquents
const adjectifs = [
  "grand", "petit", "beau", "joli", "bon", "mauvais", "gentil", "méchant",
  "content", "triste", "heureux", "fatigué", "malade", "fort", "faible",
  "rapide", "lent", "chaud", "froid", "nouveau", "vieux", "jeune",
  "premier", "dernier", "autre", "même", "seul", "facile", "difficile",
  "léger", "lourd", "propre", "sale", "plein", "vide", "long", "court",
  "haut", "bas", "large", "doux", "dur", "clair", "sombre", "calme", "drôle",
];

export const WORDS: string[] = Array.from(
  new Set([...motsOutils, ...verbes, ...noms, ...adjectifs])
);

export function shuffleWords(words: string[]): string[] {
  const shuffled = [...words];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
