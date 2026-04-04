import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { SailAreaUI, SailAreaLocaleContent } from '../index';

const slug = 'calculateur-surface-voile';
const title = 'Calculateur de Surface de Voile';
const description = 'Calculez la surface de tout type de voile : triangulaire (grand-voile, génois), quadrilatérale (voile aurique) et génois avec recouvrement. Calcule également l\'indice SA/D (surface de voilure / déplacement).';

const ui: SailAreaUI = {
  sailType: 'Type de voile',
  typTriangle: 'Triangulaire',
  typQuad: 'Quadrilatérale',
  typGenoa: 'Génois / Recouvrement',
  labelBase: 'Base',
  labelHeight: 'Hauteur',
  labelLP: 'LP (Perpendiculaire de guindant)',
  labelJ: 'J (base du triangle de trinquette)',
  labelI: 'I (hauteur du mât au-dessus du pont)',
  labelDisplacement: 'Déplacement',
  labelArea: 'Surface de voile',
  labelRatio: 'Indice SA/D',
  btnCalculate: 'Calculer',
  btnReset: 'Réinitialiser',
  resultArea: 'Surface totale',
  resultRatio: 'Indice SA/D',
};

const faq: SailAreaLocaleContent['faq'] = [
  {
    question: 'Qu\'est-ce que l\'indice SA/D de surface de voilure ?',
    answer: 'L\'indice SA/D (Surface / Déplacement) est la surface totale de voilure divisée par le déplacement élevé à la puissance 2/3. Des valeurs entre 14 et 16 correspondent à des voiliers de croisière équilibrés ; des valeurs supérieures à 18 indiquent un voilier très toilé avec tendance à la gîte.',
  },
  {
    question: 'Comment calcule-t-on la surface d\'une voile triangulaire ?',
    answer: 'La surface d\'une voile triangulaire est base × hauteur / 2. Pour une grand-voile bermudienne, la base est le bôme (fond) et la hauteur est le guindant. C\'est la formule de base la plus utilisée en conception de voiles.',
  },
  {
    question: 'Que signifie LP sur un génois ?',
    answer: 'LP (Luff Perpendicular ou perpendiculaire de guindant) est la distance mesurée perpendiculairement du guindant du génois jusqu\'à la chute. Il détermine le degré de recouvrement avec le mât. Un génois de 150% a un LP égal à 150% de J.',
  },
  {
    question: 'Que sont J et I dans les calculs de gréement ?',
    answer: 'J est la distance horizontale du mât à l\'étai avant (base du triangle avant). I est la hauteur du pont jusqu\'au point de départ de l\'étai avant sur le mât. Ensemble, ils définissent le triangle avant d\'un gréement bermudien.',
  },
];

const howTo: SailAreaLocaleContent['howTo'] = [
  { name: 'Sélectionnez le type de voile', text: 'Choisissez entre triangulaire (grand-voile bermudienne), quadrilatérale (voile aurique) ou génois avec recouvrement.' },
  { name: 'Entrez les mesures', text: 'Pour les voiles triangulaires, entrez la base et la hauteur. Pour le génois, utilisez les valeurs J, I et LP de votre gréement.' },
  { name: 'Ajoutez le déplacement', text: 'Entrez le déplacement en kg pour calculer l\'indice SA/D et évaluer les performances de navigation.' },
  { name: 'Interprétez les résultats', text: 'Comparez l\'indice SA/D aux valeurs de référence : moins de 14 est sous-toilé, 14–16 croiseur équilibré, plus de 18 voilier très vif.' },
];

const bibliography: SailAreaLocaleContent['bibliography'] = [
  { name: 'Marchaj C.A. — Sail Performance: Techniques to Maximize Sail Power', url: 'https://www.adlardcoles.com/books/sail-performance/' },
  { name: 'SHOM — Publications nautiques officielles', url: 'https://www.shom.fr/les-donnees/publications-nautiques/' },
];

const seo: SailAreaLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Données Clés sur la Surface Vélique',
    items: [
      'Surface voile triangulaire = base × hauteur / 2.',
      'L\'indice SA/D relie la surface de voilure au déplacement.',
      'Un génois de 150% a un LP = 1,5 × J.',
      'SA/D de 14–16 est typique d\'un croiseur équilibré.',
    ],
  },
  { type: 'title', text: 'Fondements du Calcul de Surface Vélique', level: 2 },
  {
    type: 'paragraph',
    html: 'La surface des voiles est l\'un des paramètres les plus importants dans la conception et l\'évaluation d\'un voilier. Elle détermine la force propulsive disponible et, combinée au déplacement, définit le caractère du bateau.',
  },
  {
    type: 'table',
    headers: ['Type de voile', 'Formule', 'Notes'],
    rows: [
      ['Triangulaire (grand-voile)', 'base × hauteur / 2', 'Voile bermudienne standard'],
      ['Quadrilatérale (aurique)', '((base + chute) / 2) × hauteur', 'Voile avec bôme et corne'],
      ['Génois / Foc', '(LP × √(J² + I²)) / 2', 'Utilise le triangle avant'],
    ],
  },
  {
    type: 'tip',
    title: 'Conseil de Conception',
    html: 'Pour une estimation rapide de la surface totale de travail, additionnez la surface de la grand-voile et celle du triangle avant (J × I / 2). Cela donne la valeur de gréement <strong>I² + J²</strong>, base des calculs de jauge IMS.',
  },
  {
    type: 'glossary',
    items: [
      { term: 'Guindant', definition: 'Le bord avant d\'une voile, allant de la tête au point d\'amure.' },
      { term: 'Fond', definition: 'Le bord inférieur d\'une voile, allant du point d\'amure au point d\'écoute.' },
      { term: 'Chute', definition: 'Le bord de fuite de la voile, le côté arrière libre.' },
      { term: 'LP', definition: 'Perpendiculaire du guindant : distance perpendiculaire du guindant à la chute d\'un foc.' },
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

export const content: SailAreaLocaleContent = {
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
