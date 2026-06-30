import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SpeedConverterUI, SpeedConverterLocaleContent } from '../index';

const slug = 'convertisseur-vitesse-nautique';
const title = 'Convertisseur de Vitesse Nautique et Échelle Beaufort';
const description =
  "Convertissez entre nœuds, km/h, m/s et mph instantanément. Inclut le tableau Beaufort complet avec description de l'état de la mer et effets du vent.";

const beaufortData = [
  { force: 0, name: 'Calme', sea: 'Mer comme un miroir', effect: 'La fumée monte verticalement', kn: '0' },
  { force: 1, name: 'Très légère brise', sea: 'Rides comme des écailles de poisson', effect: 'La fumée indique la direction du vent', kn: '1-3' },
  { force: 2, name: 'Légère brise', sea: 'Petites vaguelettes sans crêtes', effect: 'Le vent est senti sur le visage', kn: '4-6' },
  { force: 3, name: 'Petite brise', sea: 'Moutons épars', effect: 'Les feuilles et les petites branches bougent', kn: '7-10' },
  { force: 4, name: 'Jolie brise', sea: 'Petites vagues, nombreux moutons', effect: 'La poussière et les papiers s\'envolent', kn: '11-16' },
  { force: 5, name: 'Brise fraîche', sea: 'Vagues modérées, beaucoup de moutons', effect: 'Difficulté à utiliser un parapluie', kn: '17-21' },
  { force: 6, name: 'Vent frais', sea: 'Grandes vagues, écume blanche', effect: 'Difficulté à marcher contre le vent', kn: '22-27' },
  { force: 7, name: 'Grand frais', sea: 'Mer grosse, écume en stries', effect: 'Difficulté à marcher', kn: '28-33' },
  { force: 8, name: 'Coup de vent', sea: 'Très hautes vagues, éclaboussures', effect: 'Grande difficulté à marcher', kn: '34-40' },
  { force: 9, name: 'Fort coup de vent', sea: 'Très hautes vagues, visibilité réduite', effect: 'Dégâts aux bâtiments', kn: '41-47' },
  { force: 10, name: 'Tempête', sea: 'Vagues exceptionnellement hautes, mer blanche', effect: 'Arbres déracinés', kn: '48-55' },
  { force: 11, name: 'Violente tempête', sea: 'Énormes vagues, écume couvre la mer', effect: 'Dévastation généralisée', kn: '56-63' },
  { force: 12, name: 'Ouragan', sea: 'Air plein d\'écume et d\'embruns', effect: 'Catastrophe totale', kn: '64+' },
];

const ui: SpeedConverterUI = {
  knLabel: 'Nœuds (kt)',
  kmhLabel: 'Kilomètres/heure',
  msLabel: 'Mètres/seconde',
  mphLabel: 'Miles/heure',
  beaufortTitle: 'Échelle Beaufort',
  forceLabel: 'Force',
  descriptionLabel: 'Description',
  knotsLabel: 'Nœuds',
  effectLabel: 'Effet Visuel',
  seaStateLabel: 'État de la Mer',
  windEffectLabel: 'Effet sur Terre',
  beaufortDataJson: JSON.stringify(beaufortData),
};

const faq: SpeedConverterLocaleContent['faq'] = [
  {
    question: 'Pourquoi la vitesse du bateau se mesure-t-elle en nœuds ?',
    answer: "Le nœud est une unité de vitesse équivalant à un mille nautique par heure. Son origine est historique: les marins mesuraient la vitesse du navire en jetant à la mer un morceau de bois attaché à une corde avec des nœuds équidistants, en comptant combien de nœuds passaient entre leurs doigts en un temps donné. Aujourd'hui, c'est toujours l'unité standard internationale en navigation maritime et aéronautique.",
  },
  {
    question: "Qu'est-ce que l'échelle Beaufort et comment s'utilise-t-elle en navigation ?",
    answer: "L'échelle Beaufort est une échelle empirique qui relie la vitesse du vent aux effets observés en mer et sur terre. Développée par l'amiral britannique Francis Beaufort en 1805, elle va de 0 (calme absolu) à 12 (ouragan). Les navigateurs l'utilisent pour estimer l'intensité du vent sans instruments en observant l'état de la mer.",
  },
  {
    question: 'Quelle est la différence entre SOG et STW en navigation ?',
    answer: "Le SOG (Speed Over Ground) est la vitesse réelle du bateau par rapport au fond marin, mesurée par GPS. Le STW (Speed Through Water) ou vitesse au loch est la vitesse du bateau par rapport à l'eau environnante. La différence entre les deux reflète l'effet des courants marins. Le SOG est utilisé pour planifier les arrivées et calculer le carburant; le STW est utilisé pour calculer la dérive.",
  },
  {
    question: 'Combien de km/h vaut un nœud ?',
    answer: "Un nœud équivaut exactement à 1,852 kilomètres par heure, soit la longueur d'un mille nautique (défini comme une minute d'arc du méridien terrestre). Ainsi, 10 nœuds font 18,52 km/h, 20 nœuds font 37,04 km/h et 30 nœuds font 55,56 km/h.",
  },
];

const howTo: SpeedConverterLocaleContent['howTo'] = [
  {
    name: 'Saisir la vitesse dans n\'importe quelle unité',
    text: 'Tapez la valeur de vitesse dans le champ correspondant (nœuds, km/h, m/s ou mph) et tous les autres champs se mettront à jour automatiquement.',
  },
  {
    name: 'Consulter la force Beaufort équivalente',
    text: "La carte Beaufort affiche en temps réel la force du vent correspondant à la vitesse saisie, avec l'état de la mer et les effets sur terre.",
  },
  {
    name: 'Cliquer sur une ligne du tableau Beaufort',
    text: 'Vous pouvez sélectionner directement n\'importe quelle échelle Beaufort dans le tableau inférieur pour voir sa vitesse minimale dans tous les formats.',
  },
  {
    name: 'Utiliser les résultats pour planifier votre navigation',
    text: 'Combinez les informations de vitesse et de vent pour décider si les conditions sont appropriées pour votre type d\'embarcation et la traversée prévue.',
  },
];

const seo: SpeedConverterLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Guide du Convertisseur de Vitesse Nautique et Échelle Beaufort',
    level: 2,
  },
  {
    type: 'paragraph',
    html: "La vitesse est une donnée fondamentale en navigation maritime. Savoir combien de nœuds fait votre bateau, comment cela se traduit en kilomètres par heure pour planifier une traversée, ou quelle force Beaufort représente le vent que vous subissez, sont des calculs que tout navigateur doit maîtriser.",
  },
  {
    type: 'paragraph',
    html: "Ce convertisseur de vitesse nautique vous permet de transformer instantanément entre nœuds, km/h, m/s et mph, tout en identifiant automatiquement la force Beaufort correspondante avec sa description de l'état de la mer et les effets du vent observables.",
  },
  {
    type: 'stats',
    items: [
      { label: 'Unité Standard', value: 'Nœuds (kt)', icon: 'mdi:speedometer' },
      { label: 'Échelle de Vent', value: 'Beaufort (0-12)', icon: 'mdi:weather-windy' },
      { label: 'Conversion Clé', value: '1 kt = 1,85 km/h', icon: 'mdi:swap-horizontal' },
    ],
  },
  {
    type: 'title',
    text: 'Pourquoi la vitesse se mesure-t-elle en Nœuds ?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: "Le <strong>nœud (kt)</strong> est l'unité officielle de vitesse en navigation maritime et aérienne. Sa définition est précise: un nœud équivaut à un mille nautique par heure, où le mille nautique (1852 m) est défini comme une minute d'arc du méridien terrestre. Cette relation directe avec la géométrie de la Terre est ce qui fait du nœud une unité particulièrement pratique pour la navigation, permettant d'estimer les distances directement sur la carte nautique sans aucune conversion.",
  },
  {
    type: 'paragraph',
    html: "Historiquement, les marins mesuraient la vitesse du navire en utilisant le <em>loch à bateau</em>: un morceau de bois triangulaire jeté à la mer attaché à une corde avec des nœuds équidistants tous les 14,4 mètres. En comptant les nœuds passant entre leurs doigts en 30 secondes, ils obtenaient la vitesse du navire, donnant naissance au terme que nous utilisons aujourd'hui.",
  },
  {
    type: 'title',
    text: "L'Échelle Beaufort: L'Œil du Marin",
    level: 3,
  },
  {
    type: 'paragraph',
    html: "L'<strong>échelle Beaufort</strong> a été développée en 1805 par l'amiral britannique Sir Francis Beaufort comme méthode empirique pour classifier la force du vent à partir d'effets observés, sans instrumentation. Initialement conçue pour estimer la quantité de voilure qu'un navire pouvait porter, elle est aujourd'hui une référence universelle en météorologie maritime, adoptée par l'Organisation Météorologique Mondiale (OMM).",
  },
  {
    type: 'paragraph',
    html: "L'échelle va de la <strong>Force 0</strong> (calme absolu, mer comme un miroir) à la <strong>Force 12</strong> (conditions d'ouragan avec des vagues de plus de 14 mètres et l'air plein d'écume). Pour le plaisancier, les limites critiques sont généralement la Force 6 (vent frais, 22-27 nœuds) pour les embarcations légères et la Force 7-8 pour les voiliers océaniques.",
  },
  {
    type: 'table',
    headers: ['Force Beaufort', 'Dénomination', 'État de la Mer'],
    rows: [
      ['0', 'Calme', 'Mer comme un miroir'],
      ['3', 'Petite brise', 'Moutons épars, crêtes commençant à se briser'],
      ['6', 'Vent frais', 'Grandes vagues, écume blanche, embruns possibles'],
      ['9', 'Fort coup de vent', 'Très hautes vagues, visibilité réduite par écume'],
      ['12', 'Ouragan', 'Air complètement plein d\'écume, mer totalement blanche'],
    ],
  },
  {
    type: 'title',
    text: 'Glossaire Nautique de Vitesse',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: 'Nœud (kt)', definition: "Unité de vitesse équivalant à un mille nautique par heure (1852 m/h). Standard international en navigation maritime et aérienne." },
      { term: 'SOG (Speed Over Ground)', definition: "Vitesse réelle du navire sur le fond marin, mesurée par GPS. Reflète l'effet des courants marins sur la vitesse du bateau." },
      { term: 'Vitesse au Loch (STW)', definition: "Vitesse du bateau par rapport à l'eau environnante, mesurée par le loch. N'inclut pas les effets des courants; essentielle pour calculer la dérive." },
      { term: 'Vent Apparent', definition: "Vent ressenti par l'équipage à bord, résultant de la somme vectorielle du vent réel et du vent créé par l'avancement du bateau. Diffère toujours du vent réel en magnitude et direction." },
    ],
  },
  {
    type: 'title',
    text: 'Formules de Conversion Rapides',
    level: 3,
  },
  {
    type: 'paragraph',
    html: "Pour convertir les vitesses manuellement sans accès à un convertisseur numérique, utilisez ces approximations rapides que tout navigateur devrait connaître par cœur:",
  },
  {
    type: 'list',
    items: [
      '<strong>Nœuds en km/h:</strong> Multipliez les nœuds par 1,852. Approximation rapide: nœuds x 2, moins 8 %. Par exemple, 10 kt ≈ 20 - 1,6 = 18,4 km/h.',
      '<strong>Nœuds en mph:</strong> Multipliez les nœuds par 1,15. Approximation: nœuds + 15 %. Par exemple, 20 kt ≈ 23 mph.',
      '<strong>Nœuds en m/s:</strong> Multipliez les nœuds par 0,514. Approximation rapide: divisez les nœuds par 2. Par exemple, 10 kt ≈ 5 m/s (exact: 5,14 m/s).',
    ],
  },
  {
    type: 'tip',
    title: 'Sécurité et Climatologie',
    html: "Avant d'appareiller, consultez toujours le bulletin météorologique maritime. Un Beaufort 4-5 est gênant pour la plupart des bateaux de plaisance; à partir de la Force 6, en visagez sérieusement de reporter le départ si vous manquez d'expérience ou si votre bateau n'est pas préparé à ces conditions.",
  },
  {
    type: 'title',
    text: 'Comparatif des Equipements',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Anémomètre Numérique',
        description: 'Instrument électronique pour la mesure précise de la vitesse du vent.',
        icon: 'mdi:speedometer',
        points: [
          'Précision de ±2% dans des conditions normales',
          'Nécessite une alimentation électrique ou des piles',
          'Peut tomber en panne dans des conditions extrêmes',
          'Lecture instantanée et enregistrement des données',
        ],
      },
      {
        title: 'Observation Beaufort',
        description: 'Estimation visuelle de la force du vent par les effets observables en mer et sur terre.',
        icon: 'mdi:eye-outline',
        highlight: true,
        points: [
          "Ne nécessite aucun instrument",
          'Disponible dans toutes les conditions',
          'Précision suffisante pour les décisions de sécurité',
          'Compétence fondamentale du navigateur expert',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Navigation et Planification de Route',
    level: 3,
  },
  {
    type: 'paragraph',
    html: "Lors de la planification d'une route, la vitesse de votre embarcation détermine les heures d'arrivée estimées (ETA) et la consommation de carburant pour les bateaux à moteur. Pour un voilier, la vitesse dépend aussi de l'intensité et de la direction du vent: connaître la force Beaufort prévue vous permet d'anticiper si vous pourrez naviguer à la voile ou si vous aurez besoin du moteur.",
  },
  {
    type: 'paragraph',
    html: "En régate, la conversion entre nœuds et mètres par seconde est particulièrement utile pour calculer le VMG (Velocity Made Good) et pour analyser les polaires de voile. Les météorologues et les modèles numériques de prévision donnent généralement le vent en m/s ou km/h, la conversion en nœuds est donc une étape habituelle dans la planification tactique.",
  },
];

const schemas: SpeedConverterLocaleContent['schemas'] = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  } as WithContext<FAQPage>,
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `Comment utiliser: ${title}`,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
  } as WithContext<HowTo>,
];

export const content: SpeedConverterLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas,
};
