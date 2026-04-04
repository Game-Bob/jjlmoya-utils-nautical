import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { NauticalConverterUI, NauticalConverterLocaleContent } from '../index';

const slug = 'convertisseur-nautique';
const title = 'Convertisseur d\'Unités Nautiques';
const description = 'Convertissez entre les principales unités nautiques : distance (milles nautiques, km, miles terrestres, mètres), vitesse (nœuds, km/h, mph, m/s), profondeur (mètres, pieds, brasses) et pression (mbar, hPa, psi, atm, mmHg). Inclut l\'échelle de Beaufort complète.';

const ui: NauticalConverterUI = {
  tabDistance: 'Distance',
  tabSpeed: 'Vitesse',
  tabDepth: 'Profondeur',
  tabPressure: 'Pression',
  labelValue: 'Valeur',
  labelFrom: 'De',
  labelTo: 'Vers',
  labelResult: 'Résultat',
  beaufortTitle: 'Échelle de Beaufort',
  beaufortForce: 'Force',
  beaufortSpeed: 'Vitesse (nœuds)',
  beaufortDesc: 'Description',
  btnCopy: 'Copier',
  copied: 'Copié',
};

const faq: NauticalConverterLocaleContent['faq'] = [
  {
    question: 'Qu\'est-ce qu\'un mille nautique et pourquoi l\'utilise-t-on en navigation ?',
    answer: 'Un mille nautique est égal à 1852 mètres et correspond approximativement à une minute d\'arc de latitude. Il est utilisé en navigation car il permet un calcul direct avec les cartes et compas : 1 minute de latitude = 1 mille nautique, simplifiant ainsi la navigation astronomique et sur carte.',
  },
  {
    question: 'Quelle est la différence entre un nœud et km/h ?',
    answer: 'Un nœud est un mille nautique par heure, soit 1,852 km/h. Un navire naviguant à 10 nœuds parcourt 10 milles nautiques en une heure, soit 18,52 kilomètres. Le nœud est l\'unité standard de vitesse en navigation maritime et en aviation.',
  },
  {
    question: 'Qu\'est-ce qu\'une brasse et quand est-elle utilisée ?',
    answer: 'Une brasse équivaut à 6 pieds ou 1,8288 mètres. Historiquement utilisée pour mesurer les profondeurs marines, elle apparaît encore sur les anciennes cartes nautiques et dans la tradition anglo-saxonne.',
  },
  {
    question: 'À quoi sert l\'échelle de Beaufort ?',
    answer: 'L\'échelle de Beaufort classe la force du vent de 0 (calme) à 12 (ouragan) selon la vitesse et les effets observables sur la mer et à terre. Elle est fondamentale pour la communication météorologique maritime et la prise de décision en navigation.',
  },
];

const howTo: NauticalConverterLocaleContent['howTo'] = [
  { name: 'Sélectionnez une catégorie', text: 'Choisissez entre distance, vitesse, profondeur ou pression selon la conversion souhaitée.' },
  { name: 'Saisissez la valeur et les unités', text: 'Entrez la valeur numérique et sélectionnez l\'unité source et l\'unité cible dans les menus déroulants.' },
  { name: 'Lisez le résultat', text: 'Le résultat s\'affiche automatiquement. Utilisez le bouton Copier pour le transférer dans votre presse-papiers.' },
  { name: 'Consultez l\'échelle de Beaufort', text: 'Faites défiler vers le bas pour voir le tableau Beaufort complet avec les plages de vitesse en nœuds.' },
];

const bibliography: NauticalConverterLocaleContent['bibliography'] = [
  { name: 'Bowditch — The American Practical Navigator (NIMA)', url: 'https://msi.nga.mil/Publications/APN' },
  { name: 'SHOM — Service Hydrographique et Océanographique de la Marine', url: 'https://www.shom.fr/' },
];

const seo: NauticalConverterLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Données Clés des Unités Nautiques',
    items: [
      '1 mille nautique = 1852 m = 1 minute d\'arc de latitude.',
      '1 nœud = 1,852 km/h = 0,5144 m/s.',
      '1 brasse = 6 pieds = 1,8288 mètres.',
      'L\'échelle de Beaufort classe le vent de 0 (calme) à 12 (ouragan).',
    ],
  },
  { type: 'title', text: 'Les Unités de Mesure en Navigation Maritime', level: 2 },
  {
    type: 'paragraph',
    html: 'La navigation maritime mêle différents systèmes de mesure qui ont évolué au fil des siècles. Le marin moderne doit maîtriser les unités SI ainsi que les unités traditionnelles comme le <strong>mille nautique</strong>, le <strong>nœud</strong> et la <strong>brasse</strong>, qui restent obligatoires sur les cartes, publications et communications officielles.',
  },
  {
    type: 'table',
    headers: ['Unité', 'Équivalent métrique', 'Usage principal'],
    rows: [
      ['Mille nautique (NM)', '1852 m', 'Distances sur carte'],
      ['Nœud (kn)', '1,852 km/h', 'Vitesse des navires et du vent'],
      ['Brasse (fathom)', '1,8288 m', 'Profondeurs (cartes anciennes)'],
      ['hPa / mbar', '1 hPa = 1 mbar', 'Pression atmosphérique marine'],
    ],
  },
  {
    type: 'tip',
    title: 'Conseil de Navigation',
    html: 'Lors de la planification d\'une traversée, travaillez toujours en milles nautiques et en nœuds. Cela permet de relier directement la distance au temps : en naviguant à <strong>6 nœuds</strong>, vous parcourez <strong>6 milles nautiques</strong> en une heure.',
  },
  {
    type: 'glossary',
    items: [
      { term: 'Mille nautique', definition: 'Unité de distance maritime égale à 1852 mètres, basée sur une minute d\'arc de latitude.' },
      { term: 'Nœud', definition: 'Unité de vitesse en mer : un mille nautique par heure (1,852 km/h).' },
      { term: 'Brasse', definition: 'Unité anglo-saxonne pour les profondeurs : 6 pieds ou 1,8288 mètres.' },
      { term: 'hPa', definition: 'Hectopascal, unité de pression atmosphérique équivalente au millibar (mbar).' },
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

export const content: NauticalConverterLocaleContent = {
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
