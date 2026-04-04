import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { NauticalConverterUI, NauticalConverterLocaleContent } from '../index';

const slug = 'nautical-converter';
const title = 'Nautical Unit Converter';
const description = 'Convert between the main nautical units: distance (nautical miles, km, statute miles, metres), speed (knots, km/h, mph, m/s), depth (metres, feet, fathoms) and pressure (mbar, hPa, psi, atm, mmHg). Includes full Beaufort scale reference.';

const ui: NauticalConverterUI = {
  tabDistance: 'Distance',
  tabSpeed: 'Speed',
  tabDepth: 'Depth',
  tabPressure: 'Pressure',
  labelValue: 'Value',
  labelFrom: 'From',
  labelTo: 'To',
  labelResult: 'Result',
  beaufortTitle: 'Beaufort Scale',
  beaufortForce: 'Force',
  beaufortSpeed: 'Speed (knots)',
  beaufortDesc: 'Description',
  btnCopy: 'Copy',
  copied: 'Copied',
};

const faq: NauticalConverterLocaleContent['faq'] = [
  {
    question: 'What is a nautical mile and why is it used in navigation?',
    answer: 'A nautical mile equals 1852 metres and corresponds approximately to one arc-minute of latitude. It is used in navigation because it allows direct calculation from charts and compasses: 1 minute of latitude = 1 nautical mile. This greatly simplifies celestial and chart navigation.',
  },
  {
    question: 'What is the difference between a knot and km/h?',
    answer: 'A knot is one nautical mile per hour, which equals 1.852 km/h. A vessel sailing at 10 knots covers 10 nautical miles in one hour, or 18.52 kilometres. The knot is the standard unit of speed in maritime navigation and aviation.',
  },
  {
    question: 'What is a fathom and when is it used?',
    answer: 'A fathom equals 6 feet or 1.8288 metres. It was historically used to measure sea depths and still appears on older nautical charts and in Anglo-Saxon tradition. It roughly equals the armspan of an adult.',
  },
  {
    question: 'What is the Beaufort scale used for?',
    answer: 'The Beaufort scale classifies wind strength from 0 (calm) to 12 (hurricane) based on speed and observable effects on sea and land. It is essential for maritime weather communication and safety decision-making at sea.',
  },
];

const howTo: NauticalConverterLocaleContent['howTo'] = [
  { name: 'Select a category', text: 'Choose between distance, speed, depth, or pressure depending on the conversion you need.' },
  { name: 'Enter the value and units', text: 'Type the numerical value and select the source and target units from the dropdown menus.' },
  { name: 'Read the result', text: 'The result appears automatically. Use the Copy button to transfer it to your clipboard.' },
  { name: 'Check the Beaufort scale', text: 'Scroll down to view the full Beaufort table with knot ranges and wind state descriptions.' },
];

const bibliography: NauticalConverterLocaleContent['bibliography'] = [
  { name: 'Bowditch — The American Practical Navigator (NIMA)', url: 'https://msi.nga.mil/Publications/APN' },
  { name: 'IMO — STCW Convention and Code', url: 'https://www.imo.org/en/OurWork/HumanElement/Pages/STCW-Conv.aspx' },
];

const seo: NauticalConverterLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Key Facts About Nautical Units',
    items: [
      '1 nautical mile = 1852 m = 1 arc-minute of latitude.',
      '1 knot = 1.852 km/h = 0.5144 m/s.',
      '1 fathom = 6 feet = 1.8288 metres.',
      'The Beaufort scale classifies wind from 0 (calm) to 12 (hurricane).',
    ],
  },
  { type: 'title', text: 'Measurement Units in Maritime Navigation', level: 2 },
  {
    type: 'paragraph',
    html: 'Maritime navigation blends different measurement systems that have evolved over centuries. The modern mariner must fluently handle SI units alongside traditional units such as the <strong>nautical mile</strong>, the <strong>knot</strong> and the <strong>fathom</strong>, which remain mandatory in charts, publications and official communications.',
  },
  {
    type: 'table',
    headers: ['Unit', 'Metric equivalent', 'Primary use'],
    rows: [
      ['Nautical mile (NM)', '1852 m', 'Chart distances and navigation'],
      ['Knot (kn)', '1.852 km/h', 'Vessel and wind speed'],
      ['Fathom', '1.8288 m', 'Depths (older charts)'],
      ['hPa / mbar', '1 hPa = 1 mbar', 'Marine atmospheric pressure'],
    ],
  },
  {
    type: 'tip',
    title: 'Navigation Tip',
    html: 'When planning a passage, always work in nautical miles and knots. This lets you relate distance and time directly: sailing at <strong>6 knots</strong>, you cover <strong>6 nautical miles</strong> per hour.',
  },
  { type: 'title', text: 'The Beaufort Scale in Practice', level: 3 },
  {
    type: 'paragraph',
    html: 'Developed by Admiral Francis Beaufort in 1806, the scale that bears his name relates wind speed to its visible effects on the sea. It was internationally adopted in 1939 and remains the standard reference in <strong>marine weather bulletins</strong> worldwide.',
  },
  {
    type: 'stats',
    columns: 3,
    items: [
      { label: 'Minimum force', value: '0 kn', icon: 'mdi:weather-windy' },
      { label: 'Storm wind', value: 'Force 10', icon: 'mdi:weather-hurricane' },
      { label: 'Hurricane from', value: '63+ kn', icon: 'mdi:alert' },
    ],
  },
  {
    type: 'glossary',
    items: [
      { term: 'Nautical mile', definition: 'A unit of marine distance equal to 1852 metres, based on one arc-minute of latitude.' },
      { term: 'Knot', definition: 'A unit of speed at sea: one nautical mile per hour (1.852 km/h).' },
      { term: 'Fathom', definition: 'An Anglo-Saxon unit for depths: 6 feet or 1.8288 metres.' },
      { term: 'hPa', definition: 'Hectopascal, a unit of atmospheric pressure equivalent to the millibar (mbar).' },
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
