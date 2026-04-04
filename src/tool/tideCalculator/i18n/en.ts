import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { TideCalculatorUI, TideCalculatorLocaleContent } from '../index';

const slug = 'tide-height-calculator';
const title = 'Tide Height Calculator';
const description = 'Calculate water height at any moment using the Rule of Twelfths. Offline tool for sailors, skippers, and nautical students.';

const ui: TideCalculatorUI = {
  parametros: 'Parameters',
  pleamar: 'High Tide',
  bajamar: 'Low Tide',
  horaConsulta: 'Query Time',
  alturaEstimada: 'Estimated Height',
  metros: 'meters',
  amplitud: 'Range',
  duracion: 'Duration',
  desglosePorDozavos: 'Rule of Twelfths Breakdown',
  hora: 'Time',
  estado: 'State',
  altura: 'Height',
  subiendo: 'Rising',
  bajando: 'Falling',
  fueraDeRango: 'Out of range',
  inicio: 'Start',
  final: 'End',
};

const faq: TideCalculatorLocaleContent['faq'] = [
  {
    question: 'What is the Rule of Twelfths?',
    answer: 'The Rule of Twelfths is a simplified mathematical method used in navigation to estimate the height of the tide at any point between high water and low water. It divides the tidal range into 12 parts following a sinusoidal curve: 1/12, 2/12, 3/12, 3/12, 2/12, 1/12 for each of the six hours.',
  },
  {
    question: 'Is this method reliable for real navigation?',
    answer: 'It is a theoretical estimation method useful for quick planning and educational purposes. It does not account for meteorological factors such as atmospheric pressure or wind, which can alter the sea level by several decimeters. For real navigation, always consult official tide tables.',
  },
  {
    question: 'What data do I need to calculate tide height?',
    answer: 'You need to know the time and height in meters of the nearest high tide and low tide to the moment you want to check. This data can be found in tide almanacs or marine weather applications.',
  },
  {
    question: 'Why does the tide not rise at a constant speed?',
    answer: 'Due to the inertia of large masses of water and the configuration of ocean basins. The tide starts rising slowly, reaches its maximum speed in the central hours, and slows down again as it approaches high water.',
  },
];

const howTo: TideCalculatorLocaleContent['howTo'] = [
  { name: 'Identify high and low tide', text: 'Consult your tide almanac to obtain the times and heights for the tidal cycle you are interested in.' },
  { name: 'Enter the data', text: 'Input the time and height of both high and low tide. The tool will automatically calculate the duration and range.' },
  { name: 'Set the query time', text: 'Adjust the time for which you want to know the water level. You will see the exact point highlighted on the graph.' },
  { name: 'Analyse the twelfths table', text: 'Review the hour-by-hour breakdown to understand how the water level will fluctuate throughout the period.' },
];

const bibliography: TideCalculatorLocaleContent['bibliography'] = [
  { name: 'UK Hydrographic Office — Tide Predictions', url: 'https://www.admiralty.co.uk/tides/' },
  { name: 'NOAA Tides and Currents', url: 'https://tidesandcurrents.noaa.gov/' },
];

const seo: TideCalculatorLocaleContent['seo'] = [
  { type: 'summary', title: 'Rule of Twelfths Key Facts', items: ['Tidal flow follows a sinusoidal curve, not a constant rate.', 'The middle hours of the cycle have the greatest water flow (3/12 each).', 'Tidal range in the Bay of Biscay can exceed 4 metres.', 'A 10 hPa pressure drop can raise sea level by approximately 10 cm.'] },
  { type: 'title', text: 'The Rule of Twelfths: Fundamentals for Sailors', level: 2 },
  { type: 'paragraph', html: 'Coastal navigation and entering ports with restricted draft require precise knowledge of water height at any given moment. Although digital applications and GPS now provide real-time data, the <strong>Rule of Twelfths</strong> remains a fundamental tool in the training of any recreational boat skipper or yacht captain.' },
  { type: 'title', text: 'Tidal Flow Distribution Over Six Hours', level: 3 },
  { type: 'table', headers: ['Hour of Cycle', 'Proportion', 'Flow State'], rows: [
    ['1st Hour', '1/12 of the range', 'Slow start (Slack)'],
    ['2nd Hour', '2/12 of the range', 'Accelerating flow'],
    ['3rd Hour', '3/12 of the range', 'Maximum flow (Strong current)'],
    ['4th Hour', '3/12 of the range', 'Maintaining flow'],
    ['5th Hour', '2/12 of the range', 'Decelerating flow'],
    ['6th Hour', '1/12 of the range', 'Final slowdown (Towards slack)'],
  ]},
  { type: 'tip', title: 'Safety Note', html: 'This tool uses a mathematical estimation method. It does not account for meteorological factors or local geography. For real navigation, always consult the official tide tables from your national hydrographic office.' },
  { type: 'title', text: 'Essential Tidal Cycle Concepts', level: 3 },
  { type: 'paragraph', html: '<strong>Tidal range:</strong> The vertical difference between high water and low water. In the Bay of Biscay, it can exceed 4 metres, while in the Mediterranean it is almost negligible for general navigation. This difference radically transforms coastal passage planning.' },
  { type: 'paragraph', html: '<strong>Tidal period:</strong> The time between high water and the next low water, normally around 6 hours and 12 minutes, completing a semidiurnal cycle with two high tides and two low tides per day. The <strong>Chart Datum</strong> is the reference level for all depths shown on nautical charts.' },
  { type: 'stats', columns: 3, items: [
    { label: 'Hours per cycle', value: '~6h', icon: 'mdi:clock-outline' },
    { label: 'Daily cycles', value: '2', icon: 'mdi:waves' },
    { label: 'Bay of Biscay range', value: '4+ m', icon: 'mdi:arrow-up-down' },
  ]},
  { type: 'glossary', items: [
    { term: 'High Water (HW)', definition: 'The maximum level reached by the tide during a tidal cycle.' },
    { term: 'Low Water (LW)', definition: 'The minimum level reached by the tide during a tidal cycle.' },
    { term: 'Slack Water', definition: 'The transition moment when the tide changes direction, with minimal current.' },
    { term: 'Chart Datum (CD)', definition: 'The reference level of nautical charts, close to the level of the lowest astronomical tide.' },
  ]},
];

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

export const content: TideCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: [appSchema],
};
