import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { SpeedConverterUI, SpeedConverterLocaleContent } from '../index';

const slug = 'convertisseur-vitesse-nautique';
const title = 'Convertisseur de Vitesse Nautique';
const description = 'Convertissez les vitesses nautiques entre nœuds, km/h, mph et m/s. Inclut une conversion directe avec l\'échelle de Beaufort et un tableau de référence complet avec les états de la mer pour chaque force de vent.';

const ui: SpeedConverterUI = {
  labelKnots: 'Nœuds',
  labelKmh: 'km/h',
  labelMph: 'mph',
  labelMs: 'm/s',
  labelBeaufort: 'Beaufort',
  tableTitle: 'Tableau de référence Beaufort',
  tableForce: 'Force',
  tableKnots: 'Nœuds',
  tableDesc: 'Description',
  tableSeaState: 'État de la mer',
  btnConvert: 'Convertir',
  btnReset: 'Réinitialiser',
};

const faq: SpeedConverterLocaleContent['faq'] = [
  {
    question: 'Combien de km/h vaut un nœud ?',
    answer: 'Un nœud est égal exactement à 1,852 km/h. Cette conversion provient du fait qu\'un mille nautique (1852 m) correspond à une minute d\'arc de latitude, et la vitesse en nœuds mesure des milles nautiques par heure.',
  },
  {
    question: 'Comment convertir des nœuds en m/s ?',
    answer: 'Pour convertir des nœuds en mètres par seconde, multipliez par 0,5144. Ainsi, 20 nœuds équivaut à 10,29 m/s. Cette conversion est utile en météorologie et physique appliquée à la navigation.',
  },
  {
    question: 'À combien de nœuds correspond la Force 7 de Beaufort ?',
    answer: 'La Force 7 de Beaufort (grand frais) correspond à des vents entre 27 et 33 nœuds. Dans ces conditions, la mer grossit avec des vagues de 4 à 5,5 mètres et des traînées d\'écume. La plupart des bateaux de plaisance réduiront déjà la voilure.',
  },
  {
    question: 'Quelle est la différence entre vitesse du vent et vitesse du bateau ?',
    answer: 'Bien que toutes deux se mesurent en nœuds, elles ont des origines différentes. La vitesse du bateau se mesure avec un loch électronique. La vitesse du vent se mesure avec un anémomètre. En voile, la différence entre vent réel et vent apparent est fondamentale pour optimiser les performances.',
  },
];

const howTo: SpeedConverterLocaleContent['howTo'] = [
  { name: 'Entrez la vitesse en nœuds', text: 'Tapez la valeur dans le champ nœuds. Le résultat apparaîtra automatiquement dans toutes les unités.' },
  { name: 'Ou sélectionnez la force Beaufort', text: 'Si vous préférez partir d\'une estimation visuelle du vent, sélectionnez la force Beaufort et le champ nœuds se mettra à jour avec la valeur minimale correspondante.' },
  { name: 'Lisez la ligne active dans le tableau', text: 'La ligne correspondant à la force de Beaufort calculée sera mise en évidence dans le tableau de référence ci-dessous.' },
];

const bibliography: SpeedConverterLocaleContent['bibliography'] = [
  { name: 'Bowditch — The American Practical Navigator (NIMA)', url: 'https://msi.nga.mil/Publications/APN' },
  { name: 'WMO — Beaufort Wind Scale and Sea State Codes', url: 'https://www.wmo.int/pages/prog/amp/mmop/JCOMM/OPA/SPT/documents/WMO_wave_obs.pdf' },
];

const seo: SpeedConverterLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Équivalences de Vitesse Nautique',
    items: [
      '1 nœud = 1,852 km/h = 1,151 mph = 0,514 m/s.',
      'L\'échelle de Beaufort classe le vent de la force 0 à la force 12.',
      'Force 7 Beaufort = 27–33 nœuds (grand frais, vagues de 4 m).',
      'Ouragan : force 12 à partir de 63 nœuds (plus de 117 km/h).',
    ],
  },
  { type: 'title', text: 'Le Nœud : Unité Standard de Vitesse Marine', level: 2 },
  {
    type: 'paragraph',
    html: 'Le <strong>nœud</strong> (kn) est l\'unité universelle de vitesse en navigation maritime et aéronautique. Son origine historique remonte aux marins qui mesuraient la vitesse du navire en jetant un morceau de bois (la "loch") à l\'eau et en comptant le nombre de nœuds dans la corde qui défilaient en un temps donné. Aujourd\'hui c\'est une unité de mesure reconnue internationalement.',
  },
  {
    type: 'table',
    headers: ['Nœuds', 'km/h', 'mph', 'm/s'],
    rows: [
      ['5', '9,26', '5,75', '2,57'],
      ['10', '18,52', '11,51', '5,14'],
      ['20', '37,04', '23,02', '10,29'],
      ['30', '55,56', '34,52', '15,43'],
      ['40', '74,08', '46,03', '20,58'],
    ],
  },
  {
    type: 'tip',
    title: 'Conversion Mentale Rapide',
    html: 'Pour convertir rapidement des nœuds en km/h de tête, multipliez par <strong>2 et soustrayez 7%</strong>. Par exemple, 20 nœuds × 2 = 40, moins 7% (2,8) = <strong>37,2 km/h</strong> (la valeur exacte est 37,04).',
  },
  {
    type: 'glossary',
    items: [
      { term: 'Nœud', definition: 'Unité de vitesse marine égale à un mille nautique par heure (1,852 km/h).' },
      { term: 'Vent Réel', definition: 'La vitesse et la direction du vent mesurées depuis un point fixe.' },
      { term: 'Vent Apparent', definition: 'Le vent ressenti par un navire en mouvement, combinaison du vent réel et du mouvement propre du navire.' },
      { term: 'Beaufort', definition: 'Échelle empirique de 0 à 12 classifiant la vitesse du vent par ses effets observables.' },
    ],
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'fr',
};

export const content: SpeedConverterLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, appSchema],
};
