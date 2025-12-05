import { TeamMember, StatData } from './types';

export const GENDER_STATS: StatData[] = [
  { year: '1985', percentage: 37 },
  { year: '1995', percentage: 28 },
  { year: '2005', percentage: 22 },
  { year: '2015', percentage: 18 },
  { year: '2023', percentage: 20 },
];

// Intro: < 50 mots
// Focus: Union et complémentarité
export const INTRO_TEXT = `
L'innovation ne naît pas de l'uniformité, mais de la complémentarité. 
Hommes et femmes : nos forces ne s'opposent pas, elles s'unissent. 
C'est ensemble, en fusionnant nos visions et nos sensibilités, que nous construirons un numérique plus complet, plus éthique et plus performant.
`;

// Explication Affiche
export const POSTER_TEXT = `
Notre affiche, au format paysage (2000x1414), illustre cette union sacrée. 
Elle ne représente pas une individualité isolée, mais une convergence. 
Les lignes graphiques s'entremêlent pour montrer que le code est un langage universel qui lie les genres. 
Quand les talents masculins et féminins s'associent, le résultat final dépasse la somme des parties.
`;

// Présentation: ~150 mots
export const PRESENTATION_TEXT = `
Face à un bug complexe ou une deadline impossible, l'uniformité est un piège. Une équipe composée de profils identiques aura les mêmes réflexes... et les mêmes angles morts.

C'est là que la mixité devient un atout purement technique. Elle ne sert pas à "adoucir" l'équipe, mais à la compléter.

Comme illustré sur notre visuel, l'arrivée du "Player 2" permet de couvrir le terrain différemment. C'est la confrontation de deux logiques distinctes qui permet de hacker le problème plus vite. Quand l'un fonce sur le développement, l'autre sécurise l'architecture : c'est cette friction positive qui crée la solution la plus robuste.

Pour gagner la Nuit de l'Info, nous avons choisi de ne pas jouer avec la moitié des compétences disponibles. Nous jouons au complet.
`;

export const TEAM_MEMBERS: TeamMember[] = [
  {
    lastName: "KEDJINDA",
    firstName: "Pidénam Bernice",
    email: "pidenam.kedjinda@etu.univ-tours.fr",
    role: "Responsable",
    isLead: true,
    formation: "Université de Tours"
  },
  {
    lastName: "MOTTO",
    firstName: "Harley",
    email: "harley.motto@etu.univ-tours.fr",
    role: "Membre",
    formation: "Université de Tours"
  },
  {
    lastName: "KAMANDE - SIANI",
    firstName: "Halexya",
    email: "halexya.kamandesiani@etu.univ-tours.fr",
    role: "Membre",
    formation: "Université de Tours"
  },
  {
    lastName: "CAI",
    firstName: "Xinran",
    email: "xinran.cai@etu.univ-tours.fr",
    role: "Membre",
    formation: "Université de Tours"
  },
  {
    lastName: "LEE",
    firstName: "Jia Qi",
    email: "jiaqi.lee@etu.univ-tours.fr",
    role: "Membre",
    formation: "Université de Tours"
  }
];

export const LEGAL_TEXT = `
Ce site a été réalisé dans le cadre de la Nuit de l'Info 2025. 
Les outils de communication utilisés incluent un serveur Discord privé pour la coordination de l'équipe "Électron Libre". 
Les contenus (images, textes) sont originaux ou libres de droits. 
En naviguant sur ce site, vous acceptez nos conditions d'utilisation disponibles sur le Discord de l'événement.
`;