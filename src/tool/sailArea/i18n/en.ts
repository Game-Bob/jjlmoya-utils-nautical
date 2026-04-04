import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { SailAreaUI, SailAreaLocaleContent } from '../index';

const slug = 'sail-area-calculator';
const title = 'Sail Area Calculator';
const description = 'Calculate the area of any sail type: triangular (mainsail, jib), quadrilateral (gaff sail) and genoa with overlap. Also computes the Sail Area to Displacement ratio (SA/D) to assess sailing performance.';

const ui: SailAreaUI = {
  sailType: 'Sail type',
  typTriangle: 'Triangular',
  typQuad: 'Quadrilateral',
  typGenoa: 'Genoa / Overlap',
  labelBase: 'Base',
  labelHeight: 'Height',
  labelLP: 'LP (Luff Perpendicular)',
  labelJ: 'J (foretriangle base)',
  labelI: 'I (mast height above deck)',
  labelDisplacement: 'Displacement',
  labelArea: 'Sail area',
  labelRatio: 'SA/D ratio',
  btnCalculate: 'Calculate',
  btnReset: 'Reset',
  resultArea: 'Total area',
  resultRatio: 'SA/D index',
};

const faq: SailAreaLocaleContent['faq'] = [
  {
    question: 'What is the SA/D sail area ratio?',
    answer: 'The SA/D (Sail Area to Displacement) ratio is the total sail area divided by displacement raised to the power of 2/3. Values between 14 and 16 correspond to well-balanced cruising boats; values above 18 indicate a highly canvassed boat with a tendency to heel.',
  },
  {
    question: 'How is the area of a triangular sail calculated?',
    answer: 'The area of a triangular sail is base × height / 2. For a Bermudan mainsail, the base is the boom (foot) and the height is the luff. This basic formula is the most widely used in sail design.',
  },
  {
    question: 'What does LP mean on a genoa?',
    answer: 'LP (Luff Perpendicular) is the distance measured perpendicularly from the genoa luff to the leech. It determines the degree of overlap with the mast. A 150% genoa has an LP equal to 150% of J (the foretriangle base).',
  },
  {
    question: 'What are J and I in rigging calculations?',
    answer: 'J is the horizontal distance from the mast to the forestay (foretriangle base). I is the height from the deck to the point where the forestay leaves the mast. Together they define the foretriangle of a Bermudan rig.',
  },
];

const howTo: SailAreaLocaleContent['howTo'] = [
  { name: 'Select the sail type', text: 'Choose between triangular (Bermudan mainsail), quadrilateral (gaff sail) or genoa with overlap.' },
  { name: 'Enter the measurements', text: 'For triangular sails, enter base and height. For a genoa, use the J, I and LP values from your rig.' },
  { name: 'Add the displacement', text: 'Enter the displacement in kg to calculate the SA/D ratio and evaluate sailing performance.' },
  { name: 'Interpret the results', text: 'Compare the SA/D index to reference values: below 14 is under-canvassed, 14–16 is a balanced cruiser, above 18 is a lively performance boat.' },
];

const bibliography: SailAreaLocaleContent['bibliography'] = [
  { name: 'Marchaj C.A. — Sail Performance: Techniques to Maximize Sail Power', url: 'https://www.adlardcoles.com/books/sail-performance/' },
  { name: 'Chapman Piloting & Seamanship — Hearst Marine Books', url: 'https://www.chapman.com/' },
];

const seo: SailAreaLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Key Facts About Sail Area',
    items: [
      'Triangular sail area = base × height / 2.',
      'The SA/D ratio relates sail area to displacement.',
      'A 150% genoa has an LP = 1.5 × J.',
      'SA/D of 14–16 is typical of a well-balanced cruiser.',
    ],
  },
  { type: 'title', text: 'Fundamentals of Sail Area Calculation', level: 2 },
  {
    type: 'paragraph',
    html: 'Sail area is one of the most important parameters in sailboat design and evaluation. It determines the available driving force and, combined with displacement, defines the character of the boat: from a safe family cruiser to a high-performance racing yacht.',
  },
  {
    type: 'table',
    headers: ['Sail type', 'Formula', 'Notes'],
    rows: [
      ['Triangular (mainsail)', 'base × height / 2', 'Standard Bermudan sail'],
      ['Quadrilateral (gaff)', '((base + clew) / 2) × height', 'Sail with boom and gaff'],
      ['Genoa / Jib', '(LP × √(J² + I²)) / 2', 'Uses the foretriangle'],
    ],
  },
  {
    type: 'tip',
    title: 'Design Tip',
    html: 'For a quick estimate of the total working area, add the mainsail area and the foretriangle area (J × I / 2). This gives the <strong>I² + J²</strong> rig value, which is the basis of IMS rating calculations.',
  },
  { type: 'title', text: 'Interpreting the SA/D Index', level: 3 },
  {
    type: 'stats',
    columns: 3,
    items: [
      { label: 'Under-canvassed', value: '< 14', icon: 'mdi:sail' },
      { label: 'Balanced cruiser', value: '14–16', icon: 'mdi:sail' },
      { label: 'Lively performer', value: '> 18', icon: 'mdi:weather-windy' },
    ],
  },
  {
    type: 'glossary',
    items: [
      { term: 'Luff', definition: 'The leading edge of a sail, running from the head to the tack.' },
      { term: 'Foot', definition: 'The bottom edge of a sail, running from the tack to the clew.' },
      { term: 'Leech', definition: 'The trailing edge of a sail, the free aft side.' },
      { term: 'LP', definition: 'Luff Perpendicular: the perpendicular distance from the luff to the leech of a headsail.' },
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
  inLanguage: 'en',
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
