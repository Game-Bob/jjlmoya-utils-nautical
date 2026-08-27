import { bibliography } from '../bibliography';
import type { HullSpeedLocaleContent, HullSpeedUI } from '../index';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

const slug = 'calculateur-vitesse-de-coque';
const title = 'Calculateur de vitesse de coque';
const description =
  'Trouve la vitesse de coque théorique à partir de la longueur de flottaison, compare un loch et vois quand une carène à déplacement gravit sa propre vague d étrave.';

const ui: HullSpeedUI = {
  metric: 'Métrique',
  imperial: 'Impérial',
  unitGroup: 'Unités',
  sceneLabel: 'Flottaison et vague d étrave',
  hullSpeedLabel: 'Vitesse de coque',
  knotsUnit: 'kn',
  kmhUnit: 'km/h',
  mphUnit: 'mph',
  ratioLabel: 'S/L',
  froudeLabel: 'Fr',
  lwlLabelMetric: 'Longueur de flottaison',
  lwlLabelImperial: 'Longueur de flottaison',
  lwlUnitM: 'm',
  lwlUnitFt: 'ft',
  observedLabel: 'Vitesse au loch',
  observedHint: 'Laisse 0 pour tracer la vague théorique. Saisis un loch pour voir si tu es encore assis dans le creux.',
  stretchHint: 'Tire la coque pour allonger la flottaison',
  hullKindLabel: 'Forme de coque',
  displacement: 'Déplacement',
  semi: 'Semi déplacement',
  planing: 'Planning',
  boatsLabel: 'Flottaisons d exemple',
  dinghy: 'Dériveur',
  daysailer: 'Daysailer',
  cruiser: 'Croiseur',
  bluewater: 'Hauturier',
  workboat: 'Navire de travail',
  bandBelow: 'Vague encore courte',
  bandNear: 'Proche de la barrière de vague',
  bandAt: 'Sur la vague d étrave',
  bandAbove: 'Essaie de gravir la vague',
  bandPlane: 'Au planning, au delà de la vitesse de coque',
  planingNote:
    'Une coque au planning peut laisser cette vague derrière elle. La vitesse de coque est une référence, pas un mur.',
  displacementNote:
    'Une carène à déplacement paie cher dès qu elle rattrape son sillage. Traite la valeur comme un plafond pratique, pas une cible GPS.',
  semiNote:
    'Les semi déplacements peuvent dépasser un peu le ratio classique avec assez de puissance, au prix d une hausse brutale de résistance.',
  waveLegend: 'Vague d étrave',
  waterLegend: 'Flottaison',
  markLegend: 'Vitesse de coque',
  faqTitle: 'Questions sur la vitesse de coque',
  bibliographyTitle: 'Références',
};

const faq: HullSpeedLocaleContent['faq'] = [
  {
    question: 'Qu est ce que la vitesse de coque d un voilier?',
    answer:
      'C est la vitesse à laquelle une carène à déplacement avance avec une vague d étrave à peu près aussi longue que sa flottaison. En unités nautiques on l estime à 1.34 fois la racine de la longueur de flottaison en pieds. C est une vitesse critique, pas un arrêt physique dur.',
  },
  {
    question: 'Comment calcule t on la vitesse de coque?',
    answer:
      'Convertis la flottaison en pieds, prends la racine et multiplie par 1.34 pour obtenir des nœuds. Une flottaison de 10 m fait environ 32.8 ft, donc près de 7.7 kn. Ce point correspond à un nombre de Froude proche de 0.40.',
  },
  {
    question: 'La vitesse de coque s applique t elle aux vedettes au planning?',
    answer:
      'La formule décrit encore la vague que ferait la coque si elle restait en déplacement. Le planning et beaucoup de semi déplacements sont conçus pour gravir cette vague. Prends le chiffre comme référence, puis lis la note de forme de coque.',
  },
  {
    question: 'Faut il prendre la flottaison ou la longueur hors tout?',
    answer:
      'Prends la longueur de flottaison (LWL), la longueur immergée qui fabrique vraiment la vague. La longueur hors tout, les beauprés et les élancements ne fixent pas la longueur d onde. Mesure la LWL dans l eau, pas le LOA de brochure.',
  },
];

const howTo: HullSpeedLocaleContent['howTo'] = [
  {
    name: 'Allonger la flottaison',
    text: 'Tire la coque, déplace le rail de flottaison ou choisis du dériveur au navire de travail. La vitesse de coque vaut 1.34 fois la racine de cette longueur en pieds.',
  },
  {
    name: 'Choisir la forme de coque',
    text: 'Déplacement, semi déplacement ou planning change la quille et la capacité du bateau à sortir de sa propre vague.',
  },
  {
    name: 'Lire le creux',
    text: 'À la vitesse de coque, les vagues d étrave et de poupe sont distantes d une flottaison et le bateau s assied dans le creux. C est la barrière.',
  },
  {
    name: 'Comparer un loch',
    text: 'Saisis la vitesse sur l eau. Une vague plus courte veut dire que tu pousses encore à bon marché. Une vague plus longue veut dire que tu gravis le creux.',
  },
];

const seo: HullSpeedLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Ce que la vitesse de coque raconte vraiment',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Une carène à déplacement pousse une vague à l étrave et une autre à la poupe. Quand ces crêtes sont distantes d environ une flottaison, le bateau voyage avec son propre sillage. La puissance en trop entasse alors de l eau au lieu d acheter de la vitesse. C est cet état que les marins appellent vitesse de coque.',
  },
  {
    type: 'paragraph',
    html: 'Le calculateur utilise le ratio amateur habituel de 1.34 nœuds par racine des pieds de flottaison. Les carènes fines et longues peuvent un peu plus haut, les barges plus bas. Traite le résultat comme un trait d apprentissage, puis compare un loch réel.',
  },
  {
    type: 'title',
    text: 'Exemples de flottaison calculés',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Flottaison', 'Vitesse de coque', 'Bateau typique'],
    rows: [
      ['4.2 m / 13.8 ft', '5.0 kn', 'Dériveur'],
      ['6.5 m / 21.3 ft', '6.2 kn', 'Daysailer'],
      ['10 m / 32.8 ft', '7.7 kn', 'Croiseur familial'],
      ['13.5 m / 44.3 ft', '8.9 kn', 'Yacht hauturier'],
      ['18 m / 59.1 ft', '10.3 kn', 'Petit navire de travail'],
    ],
  },
  {
    type: 'title',
    text: 'Lire la vague d étrave',
    level: 2,
  },
  {
    type: 'list',
    items: [
      'Sous la marque la vague est courte et le bateau reste bon marché à pousser.',
      'Près de la marque la vague d étrave se dresse et carburant ou voile achètent moins de vitesse.',
      'Sur la marque la longueur d onde égale la LWL. Une carène à déplacement est à la barrière classique.',
      'Au dessus, une carène à déplacement gravit son sillage. Une coque au planning peut déjà être levée.',
    ],
  },
  {
    type: 'tip',
    title: 'Mesure la LWL, pas le LOA',
    html: 'La longueur de brochure inclut les élancements. La vague se soucie de la flottaison immergée. Si tu n as que le LOA, la vitesse de coque calculée sera trop optimiste.',
  },
  {
    type: 'title',
    text: 'Le nombre de Froude en une phrase',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'La vitesse de coque est un emballage commode d un nombre de Froude proche de 0.40: vitesse divisée par la racine de la gravité fois la longueur. Voilà pourquoi les flottaisons plus longues vont plus vite même si la forme de coque ne change pas. Allonger la LWL est la façon propre de monter la limite de déplacement; ajouter des chevaux ne l est pas.',
  },
];

const schemas: HullSpeedLocaleContent['schemas'] = [
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
    name: `Comment utiliser ${title}`,
    step: howTo.map((step) => ({
      '@type': 'HowToStep',
      name: step.name,
      text: step.text,
    })),
  } as WithContext<HowTo>,
];

export const content: HullSpeedLocaleContent = {
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
