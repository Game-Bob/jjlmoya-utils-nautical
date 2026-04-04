import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SpeedConverterUI, SpeedConverterLocaleContent } from '../index';

const slug = 'convertisseur-vitesse-nautique';
const title = 'Convertisseur de Vitesse Nautique et Echelle Beaufort';
const description =
  'Convertissez entre noeuds, km/h, m/s et mph instantanement. Inclut le tableau Beaufort complet avec description de l\'etat de la mer et effets du vent.';

const beaufortData = [
  { force: 0, name: 'Calme', sea: 'Mer comme un miroir', effect: 'La fumee monte verticalement', kn: '0' },
  { force: 1, name: 'Tres legere brise', sea: 'Rides comme des ecailles de poisson', effect: 'La fumee indique la direction du vent', kn: '1-3' },
  { force: 2, name: 'Legere brise', sea: 'Petites vaguelettes sans cretes', effect: 'Le vent est senti sur le visage', kn: '4-6' },
  { force: 3, name: 'Petite brise', sea: 'Moutons epars', effect: 'Les feuilles et les petites branches bougent', kn: '7-10' },
  { force: 4, name: 'Jolie brise', sea: 'Petites vagues, nombreux moutons', effect: 'La poussiere et les papiers s\'envolent', kn: '11-16' },
  { force: 5, name: 'Brise fraiche', sea: 'Vagues moderees, beaucoup de moutons', effect: 'Difficulte a utiliser un parapluie', kn: '17-21' },
  { force: 6, name: 'Vent frais', sea: 'Grandes vagues, ecume blanche', effect: 'Difficulte a marcher contre le vent', kn: '22-27' },
  { force: 7, name: 'Grand frais', sea: 'Mer grosse, ecume en stries', effect: 'Difficulte a marcher', kn: '28-33' },
  { force: 8, name: 'Coup de vent', sea: 'Tres hautes vagues, eclaboussures', effect: 'Grande difficulte a marcher', kn: '34-40' },
  { force: 9, name: 'Fort coup de vent', sea: 'Tres hautes vagues, visibilite reduite', effect: 'Degats aux batiments', kn: '41-47' },
  { force: 10, name: 'Tempete', sea: 'Vagues exceptionnellement hautes, mer blanche', effect: 'Arbres deracines', kn: '48-55' },
  { force: 11, name: 'Violente tempete', sea: 'Enormes vagues, ecume couvre la mer', effect: 'Devastation generalisee', kn: '56-63' },
  { force: 12, name: 'Ouragan', sea: 'Air plein d\'ecume et d\'embruns', effect: 'Catastrophe totale', kn: '64+' },
];

const ui: SpeedConverterUI = {
  knLabel: 'Noeuds (kt)',
  kmhLabel: 'Kilometres/heure',
  msLabel: 'Metres/seconde',
  mphLabel: 'Miles/heure',
  beaufortTitle: 'Echelle Beaufort',
  forceLabel: 'Force',
  descriptionLabel: 'Description',
  knotsLabel: 'Noeuds',
  effectLabel: 'Effet Visuel',
  seaStateLabel: 'Etat de la Mer',
  windEffectLabel: 'Effet sur Terre',
  faqTitle: 'Questions Frequentes',
  bibliographyTitle: 'Bibliographie',
  beaufortDataJson: JSON.stringify(beaufortData),
};

const faq: SpeedConverterLocaleContent['faq'] = [
  {
    question: 'Pourquoi la vitesse du bateau se mesure-t-elle en noeuds ?',
    answer: "Le noeud est une unite de vitesse equivalant a un mille nautique par heure. Son origine est historique : les marins mesuraient la vitesse du navire en jetant a la mer un morceau de bois attache a une corde avec des noeuds equidistants, en comptant combien de noeuds passaient entre leurs doigts en un temps donne. Aujourd'hui, c'est toujours l'unite standard internationale en navigation maritime et aeronautique.",
  },
  {
    question: "Qu'est-ce que l'echelle Beaufort et comment s'utilise-t-elle en navigation ?",
    answer: "L'echelle Beaufort est une echelle empirique qui relie la vitesse du vent aux effets observes en mer et sur terre. Developpee par l'amiral britannique Francis Beaufort en 1805, elle va de 0 (calme absolu) a 12 (ouragan). Les navigateurs l'utilisent pour estimer l'intensite du vent sans instruments en observant l'etat de la mer.",
  },
  {
    question: 'Quelle est la difference entre SOG et STW en navigation ?',
    answer: "Le SOG (Speed Over Ground) est la vitesse reelle du bateau par rapport au fond marin, mesuree par GPS. Le STW (Speed Through Water) ou vitesse au loch est la vitesse du bateau par rapport a l'eau environnante. La difference entre les deux reflete l'effet des courants marins. Le SOG est utilise pour planifier les arrivees et calculer le carburant ; le STW est utilise pour calculer la derive.",
  },
  {
    question: 'Combien de km/h vaut un noeud ?',
    answer: "Un noeud equivaut exactement a 1,852 kilometres par heure, soit la longueur d'un mille nautique (defini comme une minute d'arc du meridien terrestre). Ainsi, 10 noeuds font 18,52 km/h, 20 noeuds font 37,04 km/h et 30 noeuds font 55,56 km/h.",
  },
];

const howTo: SpeedConverterLocaleContent['howTo'] = [
  {
    name: 'Saisir la vitesse dans n\'importe quelle unite',
    text: 'Tapez la valeur de vitesse dans le champ correspondant (noeuds, km/h, m/s ou mph) et tous les autres champs se mettront a jour automatiquement.',
  },
  {
    name: 'Consulter la force Beaufort equivalente',
    text: "La carte Beaufort affiche en temps reel la force du vent correspondant a la vitesse saisie, avec l'etat de la mer et les effets sur terre.",
  },
  {
    name: 'Cliquer sur une ligne du tableau Beaufort',
    text: 'Vous pouvez selectionner directement n\'importe quelle echelle Beaufort dans le tableau inferieur pour voir sa vitesse minimale dans tous les formats.',
  },
  {
    name: 'Utiliser les resultats pour planifier votre navigation',
    text: 'Combinez les informations de vitesse et de vent pour decider si les conditions sont appropriees pour votre type d\'embarcation et la traversee prevue.',
  },
];

const bibliography: SpeedConverterLocaleContent['bibliography'] = [
  {
    name: 'Met Office - The Beaufort Scale',
    url: 'https://www.metoffice.gov.uk/weather/guides/coast-and-sea/beaufort-scale',
  },
  {
    name: 'OMI - Organisation Maritime Internationale',
    url: 'https://www.imo.org/',
  },
];

const seo: SpeedConverterLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Guide du Convertisseur de Vitesse Nautique et Echelle Beaufort',
    level: 2,
  },
  {
    type: 'paragraph',
    html: "La vitesse est une donnee fondamentale en navigation maritime. Savoir combien de noeuds fait votre bateau, comment cela se traduit en kilometres par heure pour planifier une traversee, ou quelle force Beaufort represente le vent que vous subissez, sont des calculs que tout navigateur doit maitriser.",
  },
  {
    type: 'paragraph',
    html: "Ce convertisseur de vitesse nautique vous permet de transformer instantanement entre noeuds, km/h, m/s et mph, tout en identifiant automatiquement la force Beaufort correspondante avec sa description de l'etat de la mer et les effets du vent observables.",
  },
  {
    type: 'stats',
    items: [
      { label: 'Unite Standard', value: 'Noeuds (kt)', icon: 'mdi:speedometer' },
      { label: 'Echelle de Vent', value: 'Beaufort (0-12)', icon: 'mdi:weather-windy' },
      { label: 'Conversion Cle', value: '1 kt = 1,85 km/h', icon: 'mdi:swap-horizontal' },
    ],
  },
  {
    type: 'title',
    text: 'Pourquoi la vitesse se mesure-t-elle en Noeuds ?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: "Le <strong>noeud (kt)</strong> est l'unite officielle de vitesse en navigation maritime et aerienne. Sa definition est precise : un noeud equivaut a un mille nautique par heure, ou le mille nautique (1852 m) est defini comme une minute d'arc du meridien terrestre. Cette relation directe avec la geometrie de la Terre est ce qui fait du noeud une unite particulierement pratique pour la navigation, permettant d'estimer les distances directement sur la carte nautique sans aucune conversion.",
  },
  {
    type: 'paragraph',
    html: "Historiquement, les marins mesuraient la vitesse du navire en utilisant le <em>loch a bateau</em> : un morceau de bois triangulaire jete a la mer attache a une corde avec des noeuds equidistants tous les 14,4 metres. En comptant les noeuds passant entre leurs doigts en 30 secondes, ils obtenaient la vitesse du navire, donnant naissance au terme que nous utilisons aujourd'hui.",
  },
  {
    type: 'title',
    text: "L'Echelle Beaufort : L'Oeil du Marin",
    level: 3,
  },
  {
    type: 'paragraph',
    html: "L'<strong>echelle Beaufort</strong> a ete developpee en 1805 par l'amiral britannique Sir Francis Beaufort comme methode empirique pour classifier la force du vent a partir d'effets observables, sans instrumentation. Initialement concue pour estimer la quantite de voilure qu'un navire pouvait porter, elle est aujourd'hui une reference universelle en meteorologie maritime, adoptee par l'Organisation Meteorologique Mondiale (OMM).",
  },
  {
    type: 'paragraph',
    html: "L'echelle va de la <strong>Force 0</strong> (calme absolu, mer comme un miroir) a la <strong>Force 12</strong> (conditions d'ouragan avec des vagues de plus de 14 metres et l'air plein d'ecume). Pour le plaisancier, les limites critiques sont generalement la Force 6 (vent frais, 22-27 noeuds) pour les embarcations legeres et la Force 7-8 pour les voiliers oceaniques.",
  },
  {
    type: 'table',
    headers: ['Force Beaufort', 'Denomination', 'Etat de la Mer'],
    rows: [
      ['0', 'Calme', 'Mer comme un miroir'],
      ['3', 'Petite brise', 'Moutons epars, cretes commencant a se briser'],
      ['6', 'Vent frais', 'Grandes vagues, ecume blanche, embruns possibles'],
      ['9', 'Fort coup de vent', 'Tres hautes vagues, visibilite reduite par ecume'],
      ['12', 'Ouragan', 'Air completement plein d\'ecume, mer totalement blanche'],
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
      { term: 'Noeud (kt)', definition: "Unite de vitesse equivalant a un mille nautique par heure (1852 m/h). Standard international en navigation maritime et aerienne." },
      { term: 'SOG (Speed Over Ground)', definition: "Vitesse reelle du navire sur le fond marin, mesuree par GPS. Reflete l'effet des courants marins sur la vitesse du bateau." },
      { term: 'Vitesse au Loch (STW)', definition: "Vitesse du bateau par rapport a l'eau environnante, mesuree par le loch. N'inclut pas les effets des courants ; essentielle pour calculer la derive." },
      { term: 'Vent Apparent', definition: "Vent ressenti par l'equipage a bord, resultant de la somme vectorielle du vent reel et du vent cree par l'avancement du bateau. Differe toujours du vent reel en magnitude et direction." },
    ],
  },
  {
    type: 'title',
    text: 'Formules de Conversion Rapides',
    level: 3,
  },
  {
    type: 'paragraph',
    html: "Pour convertir les vitesses manuellement sans acces a un convertisseur numerique, utilisez ces approximations rapides que tout navigateur devrait connaitre par coeur :",
  },
  {
    type: 'list',
    items: [
      '<strong>Noeuds en km/h :</strong> Multipliez les noeuds par 1,852. Approximation rapide : noeuds x 2, moins 8 %. Par exemple, 10 kt ≈ 20 - 1,6 = 18,4 km/h.',
      '<strong>Noeuds en mph :</strong> Multipliez les noeuds par 1,15. Approximation : noeuds + 15 %. Par exemple, 20 kt ≈ 23 mph.',
      '<strong>Noeuds en m/s :</strong> Multipliez les noeuds par 0,514. Approximation rapide : divisez les noeuds par 2. Par exemple, 10 kt ≈ 5 m/s (exact : 5,14 m/s).',
    ],
  },
  {
    type: 'tip',
    title: 'Securite et Climatologie',
    html: "Avant d'appareiller, consultez toujours le bulletin meteorologique maritime. Un Beaufort 4-5 est genable pour la plupart des bateaux de plaisance ; a partir de la Force 6, envisagez serieusement de reporter le depart si vous manquez d'experience ou si votre bateau n'est pas prepare a ces conditions.",
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
        title: 'Anemometre Numerique',
        description: 'Instrument electronique pour la mesure precise de la vitesse du vent.',
        icon: 'mdi:speedometer',
        points: [
          'Precision de ±2% dans des conditions normales',
          'Necessite une alimentation electrique ou des piles',
          'Peut tomber en panne dans des conditions extremes',
          'Lecture instantanee et enregistrement des donnees',
        ],
      },
      {
        title: 'Observation Beaufort',
        description: 'Estimation visuelle de la force du vent par les effets observables en mer et sur terre.',
        icon: 'mdi:eye-outline',
        highlight: true,
        points: [
          "Ne necessite aucun instrument",
          'Disponible dans toutes les conditions',
          'Precision suffisante pour les decisions de securite',
          'Competence fondamentale du navigateur expert',
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
    html: "Lors de la planification d'une route, la vitesse de votre embarcation determine les heures d'arrivee estimees (ETA) et la consommation de carburant pour les bateaux a moteur. Pour un voilier, la vitesse depend aussi de l'intensite et de la direction du vent : connaitre la force Beaufort prevue vous permet d'anticiper si vous pourrez naviguer a la voile ou si vous aurez besoin du moteur.",
  },
  {
    type: 'paragraph',
    html: "En regate, la conversion entre noeuds et metres par seconde est particulierement utile pour calculer le VMG (Velocity Made Good) et pour analyser les polaires de voile. Les meteorologues et les modeles numeriques de prevision donnent generalement le vent en m/s ou km/h, la conversion en noeuds est donc une etape habituelle dans la planification tactique.",
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
    name: `Comment utiliser : ${title}`,
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
