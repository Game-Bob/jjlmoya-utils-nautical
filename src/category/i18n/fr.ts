import type { CategoryLocaleContent } from '../index';

const slug = 'voile-et-nautisme';
const title = 'Voile et Nautisme';
const description =
  "Outils de calcul nautique pour les navigateurs : marees, autonomie, surface velique, convertisseurs d'unites et de vitesse. Ideaux pour la preparation aux examens de plaisance.";

const seo: CategoryLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Pourquoi utiliser des outils numeriques en voile et navigation ?',
    level: 2,
  },
  {
    type: 'paragraph',
    html: "La navigation moderne a connu une transformation radicale avec l'avenement des outils numeriques. Que vous soyez a bord d'une petite embarcation de plaisance ou aux commandes d'un voilier de croisiere, la capacite de traiter des donnees de position, de vent et de courant instantanement est non seulement une question de commodite, mais un pilier fondamental de la securite en mer.",
  },
  {
    type: 'paragraph',
    html: "Historiquement, le marin dependait exclusivement du sextant, du chronometre de marine et des tables de reduction pour determiner sa position sur le vaste ocean. Aujourd'hui, bien que le romantisme du sextant persiste, la realite operationnelle exige une rapidite de reponse que seuls les outils de calcul numeriques peuvent fournir.",
  },
  {
    type: 'title',
    text: 'Aspects cles pour le navigateur moderne',
    level: 2,
  },
  {
    type: 'title',
    text: 'Geolocalisation et cartographie numerique de haute precision',
    level: 3,
  },
  {
    type: 'paragraph',
    html: "La cartographie numerique a democratise la navigation, permettant meme aux petits bateaux d'acceder a des informations autrefois reservees aux grands navires commerciaux. Un skipper responsable utilise les outils numeriques pour valider son jugement, non pour le remplacer.",
  },
  {
    type: 'list',
    items: [
      "Precision de saisie des donnees : De petites erreurs typographiques peuvent vous eloigner de kilometres de votre destination.",
      "Compatibilite entre appareils : Synchronisez la planification sur tablette avec les instruments de bord.",
      "Sauvegarde en cas de panne materielle : Les applications web legeres sont une assurance si le traceur de bord tombe en panne.",
      "Planification de traversees : Les calculateurs nautiques permettent d'estimer avec precision les consommations et les distances.",
    ],
  },
  {
    type: 'title',
    text: 'Meteorologie marine et optimisation de la route',
    level: 3,
  },
  {
    type: 'paragraph',
    html: "Le vent et l'etat de la mer sont les veritables souverains de la navigation a voile. L'interpretation correcte des echelles de vent (comme l'echelle Beaufort) et leur conversion en unites pratiques comme les noeuds est le quotidien de tout navigateur.",
  },
  {
    type: 'tip',
    title: "L'importance de la redondance et du Plan B",
    html: "Ne confiez jamais toute votre navigation a un seul systeme electronique. Conservez toujours une copie de sauvegarde de vos coordonnees critiques sur papier. Les outils web sont excellents pour la planification prealable, mais le bon marin a toujours un plan d'urgence.",
  },
  {
    type: 'title',
    text: 'Formation nautique et utilisation des calculateurs',
    level: 2,
  },
  {
    type: 'paragraph',
    html: "Meme dans les examens officiels pour l'obtention des titres nautiques, les calculs sur carte restent obligatoires. Les outils numeriques servent de compagnon d'etude ideal, permettant aux candidats de verifier leurs exercices d'estime, calculs de maree et corrections de compas.",
  },
  {
    type: 'paragraph',
    html: "Notre collection d'utilitaires vise a etre ce pont entre la rigueur academique des cartes papier et l'imediatete de la navigation moderne. Nous souhaitons que chaque skipper, amateur ou professionnel, trouve ici la donnee rapide et precise dont il a besoin avant de larguer les amarres.",
  },
];

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo,
};
