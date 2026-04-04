import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { SpeedConverterUI, SpeedConverterLocaleContent } from '../index';

const slug = 'nautical-speed-converter';
const title = 'Nautical Speed Converter';
const description = 'Convert nautical speeds between knots, km/h, mph and m/s. Includes direct conversion with the Beaufort scale and a full reference table with sea state descriptions for each wind force.';

const ui: SpeedConverterUI = {
  labelKnots: 'Knots',
  labelKmh: 'km/h',
  labelMph: 'mph',
  labelMs: 'm/s',
  labelBeaufort: 'Beaufort',
  tableTitle: 'Beaufort reference table',
  tableForce: 'Force',
  tableKnots: 'Knots',
  tableDesc: 'Description',
  tableSeaState: 'Sea state',
  btnConvert: 'Convert',
  btnReset: 'Reset',
};

const faq: SpeedConverterLocaleContent['faq'] = [
  {
    question: 'How many km/h is one knot?',
    answer: 'One knot equals exactly 1.852 km/h. This conversion comes from the fact that a nautical mile (1852 m) corresponds to one arc-minute of latitude, and speed in knots measures nautical miles per hour.',
  },
  {
    question: 'How do you convert knots to m/s?',
    answer: 'To convert knots to metres per second, multiply by 0.5144. So 20 knots equals 10.29 m/s. This conversion is useful in meteorology and applied physics for navigation.',
  },
  {
    question: 'What knot range corresponds to Beaufort Force 7?',
    answer: 'Beaufort Force 7 (Near Gale) corresponds to winds between 27 and 33 knots. In these conditions, the sea heaps up with waves of 4 to 5.5 metres and streaks of foam. Most recreational boats will already be reducing sail.',
  },
  {
    question: 'What is the difference between wind speed and boat speed?',
    answer: 'Although both are measured in knots, they have different origins. Boat speed is measured by a log or paddle wheel. Wind speed is measured by an anemometer. In sailing, the difference between true wind and apparent wind is fundamental for optimising performance.',
  },
];

const howTo: SpeedConverterLocaleContent['howTo'] = [
  { name: 'Enter the speed in knots', text: 'Type the value in the knots field. The result will appear automatically in all units.' },
  { name: 'Or select a Beaufort force', text: 'If you prefer to start from a visual wind estimate, select the Beaufort force and the knots field will update with the corresponding minimum value.' },
  { name: 'Read the active row in the table', text: 'The row corresponding to the calculated Beaufort force will be highlighted in the reference table below for easy interpretation.' },
];

const bibliography: SpeedConverterLocaleContent['bibliography'] = [
  { name: 'Bowditch — The American Practical Navigator (NIMA)', url: 'https://msi.nga.mil/Publications/APN' },
  { name: 'WMO — Beaufort Wind Scale and Sea State Codes', url: 'https://www.wmo.int/pages/prog/amp/mmop/JCOMM/OPA/SPT/documents/WMO_wave_obs.pdf' },
];

const seo: SpeedConverterLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Nautical Speed Equivalences',
    items: [
      '1 knot = 1.852 km/h = 1.151 mph = 0.514 m/s.',
      'The Beaufort scale classifies wind from force 0 to force 12.',
      'Beaufort Force 7 = 27–33 knots (near gale, 4 m waves).',
      'Hurricane: force 12 from 63 knots (over 117 km/h).',
    ],
  },
  { type: 'title', text: 'The Knot: Standard Unit of Marine Speed', level: 2 },
  {
    type: 'paragraph',
    html: 'The <strong>knot</strong> (kn) is the universal unit of speed in maritime and aeronautical navigation. Its historical origin dates back to sailors who measured a ship\'s speed by throwing a piece of wood (the "log") into the water and counting the number of knots in the rope that passed in a fixed time. Today it is an internationally recognised unit of measurement.',
  },
  {
    type: 'table',
    headers: ['Knots', 'km/h', 'mph', 'm/s'],
    rows: [
      ['5', '9.26', '5.75', '2.57'],
      ['10', '18.52', '11.51', '5.14'],
      ['20', '37.04', '23.02', '10.29'],
      ['30', '55.56', '34.52', '15.43'],
      ['40', '74.08', '46.03', '20.58'],
    ],
  },
  {
    type: 'tip',
    title: 'Quick Mental Conversion',
    html: 'To quickly convert knots to km/h in your head, multiply by <strong>2 and subtract 7%</strong>. For example, 20 knots × 2 = 40, minus 7% (2.8) = <strong>37.2 km/h</strong> (the exact value is 37.04).',
  },
  { type: 'title', text: 'The Beaufort Scale and Sea State', level: 3 },
  {
    type: 'paragraph',
    html: 'The Beaufort scale, in addition to classifying wind, describes the resulting sea state. For the mariner, the visual description of the sea is often more useful than a number in knots, since it provides direct information about sailing conditions. Forces 6–7 are usually the comfort limit for most cruising sailors.',
  },
  {
    type: 'stats',
    columns: 3,
    items: [
      { label: 'Racing wind', value: 'F 3–5', icon: 'mdi:sail' },
      { label: 'Cruising limit', value: 'F 6–7', icon: 'mdi:weather-windy' },
      { label: 'Hurricane conditions', value: 'F 12+', icon: 'mdi:weather-hurricane' },
    ],
  },
  {
    type: 'glossary',
    items: [
      { term: 'Knot', definition: 'A unit of marine speed equal to one nautical mile per hour (1.852 km/h).' },
      { term: 'True Wind', definition: 'The speed and direction of the wind measured from a fixed point.' },
      { term: 'Apparent Wind', definition: 'The wind experienced by a moving vessel, a combination of true wind and the vessel\'s own motion.' },
      { term: 'Beaufort', definition: 'An empirical scale from 0 to 12 that classifies wind speed by its observable effects.' },
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
