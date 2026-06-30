import type { CategoryLocaleContent } from '../index';

const slug = 'voile-et-nautisme';
const title = 'Voile et Nautisme';
const description =
  "Outils de calcul nautique pour les navigateurs: marées, autonomie, surface vélique, convertisseurs d'unités et de vitesse. Idéaux pour la préparation aux examens de plaisance.";

const seo: CategoryLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Pourquoi utiliser des outils numériques en voile et navigation ?',
    level: 2,
  },
  {
    type: 'paragraph',
    html: "La navigation moderne a connu une transformation radicale avec l'avènement des outils numériques. Que vous soyez à bord d'une petite embarcation de plaisance ou aux commandes d'un voilier de croisière, la capacité de traiter des données de position, de vent et de courant instantanément est non seulement une question de commodité, mais un pilier fondamental de la sécurité en mer.",
  },
  {
    type: 'paragraph',
    html: "Historiquement, le marin dépendait exclusivement du sextant, du chronomètre de marine et des tables de réduction pour déterminer sa position sur le vaste océan. Aujourd'hui, bien que le romantisme du sextant persiste, la réalité opérationnelle exige une rapidité de réponse que seuls les outils de calcul numériques peuvent fournir.",
  },
  {
    type: 'title',
    text: 'Aspects clés pour le navigateur moderne',
    level: 2,
  },
  {
    type: 'title',
    text: 'Géolocalisation et cartographie numérique de haute précision',
    level: 3,
  },
  {
    type: 'paragraph',
    html: "La cartographie numérique a démocratisé la navigation, permettant même aux petits bateaux d'accéder à des informations autrefois réservées aux grands navires commerciaux. Un skipper responsable utilise les outils numériques pour valider son jugement, non pour le remplacer.",
  },
  {
    type: 'list',
    items: [
      "Précision de saisie des données: De petites erreurs typographiques peuvent vous éloigner de kilomètres de votre destination.",
      "Compatibilité entre appareils: Synchronisez la planification sur tablette avec les instruments de bord.",
      "Sauvegarde en cas de panne matérielle: Les applications web légères sont une assurance si le traceur de bord tombe en panne.",
      "Planification de traversées: Les calculateurs nautiques permettent d'estimer avec précision les consommations et les distances.",
    ],
  },
  {
    type: 'title',
    text: 'Météorologie marine et optimisation de la route',
    level: 3,
  },
  {
    type: 'paragraph',
    html: "Le vent et l'état de la mer sont les véritables souverains de la navigation à voile. L'interprétation correcte des échelles de vent (comme l'échelle Beaufort) et leur conversion en unités pratiques comme les nœuds est le quotidien de tout navigateur.",
  },
  {
    type: 'tip',
    title: "L'importance de la redondance et du Plan B",
    html: "Ne confiez jamais toute votre navigation à un seul système électronique. Conservez toujours une copie de sauvegarde de vos coordonnées critiques sur papier. Les outils web sont excellents pour la planification préalable, mais le bon marin a toujours un plan d'urgence.",
  },
  {
    type: 'title',
    text: 'Formation nautique et utilisation des calculateurs',
    level: 2,
  },
  {
    type: 'paragraph',
    html: "Même dans les examens officiels pour l'obtention des titres nautiques, les calculs sur carte restent obligatoires. Les outils numériques servent de compagnon d'étude idéal, permettant aux candidats de vérifier leurs exercices d'estime, calculs de marée et corrections de compas.",
  },
  {
    type: 'paragraph',
    html: "Notre collection d'utilitaires vise à être ce pont entre la rigueur académique des cartes papier et l'immédiateté de la navigation moderne. Nous souhaitons que chaque skipper, amateur ou professionnel, trouve ici la donnée rapide et précise dont il a besoin avant de larguer les amarres.",
  },
];

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo,
};
