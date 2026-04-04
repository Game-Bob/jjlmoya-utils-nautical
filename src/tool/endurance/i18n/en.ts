import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { EnduranceUI, EnduranceLocaleContent } from '../index';

const slug = 'boat-endurance';
const title = 'Boat Fuel Endurance Calculator';
const description = 'Calculate your motorboat\'s fuel endurance in hours and nautical miles. Enter tank capacity, hourly consumption, reserve percentage and speed. Also includes inverse mode: given a passage, calculate the required fuel.';

const ui: EnduranceUI = {
  modeNormal: 'Calculate endurance',
  modeInverse: 'Required fuel',
  labelTank: 'Tank capacity',
  labelConsumption: 'Consumption',
  labelReserve: 'Reserve',
  labelSpeed: 'Speed',
  labelDistance: 'Distance',
  labelUsableFuel: 'Usable fuel',
  labelHours: 'Endurance hours',
  labelMiles: 'Endurance miles',
  labelRequiredFuel: 'Required fuel',
  btnCalculate: 'Calculate',
  btnReset: 'Reset',
  resultHours: 'Endurance (hours)',
  resultMiles: 'Endurance (NM)',
};

const faq: EnduranceLocaleContent['faq'] = [
  {
    question: 'What fuel reserve percentage should I maintain?',
    answer: 'Standard nautical practice recommends keeping between 20% and 25% of the tank as a reserve. Some regulations and insurance policies require a minimum of 10%. For long passages or ocean crossings, increasing this margin to 30% is advisable to cover contingencies such as adverse conditions or delays at the destination port.',
  },
  {
    question: 'How does fuel consumption vary with speed?',
    answer: 'Petrol and diesel engine consumption is not linear with speed. At moderate cruise speeds (60–70% of maximum), fuel consumption per mile is most efficient. Running at maximum speed can triple the hourly consumption. To maximise range, consult your engine\'s consumption curves.',
  },
  {
    question: 'What is the economical cruising speed?',
    answer: 'It is the speed at which the vessel achieves the best fuel efficiency in terms of miles covered per litre. On semi-planing boats, this is usually the semi-displacement speed, typically between 8 and 12 knots. For jet-skis and fast launches, maximum efficiency is usually at full plane at moderate speeds.',
  },
  {
    question: 'How do current and wind affect fuel consumption?',
    answer: 'Navigating against current or headwind can increase consumption by 15% to 30%. Conversely, a favourable current can reduce it significantly. The calculator provides theoretical values under ideal conditions; always add a safety margin of 20–30% for real conditions.',
  },
];

const howTo: EnduranceLocaleContent['howTo'] = [
  { name: 'Enter the tank data', text: 'Enter the total tank capacity in litres, the normal hourly consumption and the reserve percentage you wish to maintain.' },
  { name: 'Enter the cruising speed', text: 'Enter the planned speed in knots. The result will give you the endurance in hours and nautical miles.' },
  { name: 'Use inverse mode for passage planning', text: 'If you know your destination, activate the "Required fuel" mode and enter the distance. The tool will calculate the minimum fuel needed including the reserve.' },
  { name: 'Add a safety margin', text: 'Results are theoretical. Always add an extra 20–30% to compensate for currents, headwinds and real consumption variations.' },
];

const bibliography: EnduranceLocaleContent['bibliography'] = [
  { name: 'Chapman Piloting, Seamanship and Small Boat Handling — Hearst Marine Books', url: 'https://www.chapman.com/' },
  { name: 'Bowditch — The American Practical Navigator, NIMA Pub. 9', url: 'https://msi.nga.mil/Publications/APN' },
];

const seo: EnduranceLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Key Facts About Nautical Endurance',
    items: [
      'Endurance (h) = Usable fuel / Hourly consumption.',
      'Miles of range = Hours × Speed in knots.',
      'Recommended reserve: 20–25% of total tank.',
      'Optimal speed maximises miles per litre.',
    ],
  },
  { type: 'title', text: 'Fuel Planning for Motorboat Navigation', level: 2 },
  {
    type: 'paragraph',
    html: 'Calculating fuel endurance is one of the most critical operations in motorboat navigation. Running out of fuel at sea is a serious emergency. Good planning requires knowing the engine\'s real consumption, the tank capacity, and always reserving a safety margin for the unexpected.',
  },
  {
    type: 'table',
    headers: ['Variable', 'Formula', 'Units'],
    rows: [
      ['Usable fuel', 'Tank × (1 − reserve/100)', 'litres'],
      ['Endurance (h)', 'Usable fuel / Consumption', 'hours'],
      ['Endurance (NM)', 'Hours × Speed', 'nautical miles'],
      ['Required fuel', 'Hours × Consumption / (1 − reserve/100)', 'litres'],
    ],
  },
  {
    type: 'tip',
    title: 'The Rule of Thirds',
    html: 'A classic navigation rule: use <strong>one third of the fuel</strong> to go, <strong>one third to return</strong> and keep <strong>one third as reserve</strong>. This rule ensures you will never run out of fuel even if the return trip is longer than expected.',
  },
  { type: 'title', text: 'Factors Affecting Real Consumption', level: 3 },
  {
    type: 'paragraph',
    html: 'Real fuel consumption can vary significantly from theoretical values due to <strong>sea state</strong> (head seas can increase consumption by up to 30%), <strong>hull condition</strong> (fouling, growth), <strong>load on board</strong> and <strong>adverse currents and headwinds</strong>. Always calibrate your real consumption under conditions similar to those planned.',
  },
  {
    type: 'stats',
    columns: 3,
    items: [
      { label: 'Minimum reserve', value: '20%', icon: 'mdi:fuel' },
      { label: 'Headwind penalty', value: '+25%', icon: 'mdi:weather-windy' },
      { label: 'Hull fouling penalty', value: '+10–15%', icon: 'mdi:sailboat' },
    ],
  },
  {
    type: 'glossary',
    items: [
      { term: 'Endurance', definition: 'The maximum distance or time a vessel can navigate with the fuel available.' },
      { term: 'Specific consumption', definition: 'Litres consumed per hour at a given speed. Varies with rpm and engine load.' },
      { term: 'Safety reserve', definition: 'The percentage of total fuel kept untouched for emergencies and diversions.' },
      { term: 'Economical speed', definition: 'The speed at which the vessel covers the greatest possible distance per litre of fuel.' },
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

export const content: EnduranceLocaleContent = {
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
