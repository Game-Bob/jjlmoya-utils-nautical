import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { UnderKeelUI, UnderKeelLocaleContent } from '../index';

const slug = 'under-keel-clearance';
const title = 'Under Keel Clearance Calculator';
const description = 'Determine if you have enough water to pass over a critical shoal based on your vessel draft. Tidal passage window calculator.';

const ui: UnderKeelUI = {
  vasoDeBajo: 'Shoal Passage',
  caladoDelBarco: 'Vessel Draft',
  sondaDeLaCarta: 'Chart Sounding',
  resguardoSeguridad: 'Safety Margin',
  pleamar: 'High Tide',
  bajamar: 'Low Tide',
  ventanaDePaso: 'Passage Window',
  necesario: 'Required',
  mareaReq: 'Tide Req.',
  nuncaHayCalado: 'Never enough depth',
  pasoLibreTodoCiclo: 'Free passage all cycle',
  desdeHora: 'From:',
  hastaHora: 'Until:',
  fondo: 'BOTTOM',
};

const faq: UnderKeelLocaleContent['faq'] = [
  {
    question: 'What is under keel clearance (UKC)?',
    answer: 'Under keel clearance (UKC) is the vertical distance between the lowest point of the vessel (keel) and the seabed. It is a critical safety parameter to prevent grounding when navigating in shallow waters.',
  },
  {
    question: 'How much safety margin should I use?',
    answer: 'For recreational vessels, a minimum safety margin of 0.5 to 1 metre over the vessel\'s draft is recommended. This compensates for possible errors in tide calculations, atmospheric pressure variations, and unexpected wave action.',
  },
  {
    question: 'How does wave action affect the passage?',
    answer: 'Wave action creates vertical oscillations in the hull. At the bottom of a wave, the vessel is closer to the seabed than at rest. When crossing areas with waves, the safety margin must be significantly increased.',
  },
  {
    question: 'What is chart datum?',
    answer: 'Chart datum is the reference level to which all depths (soundings) on nautical charts are reduced. It is chosen so that the actual depths are almost never less than the charted depths under normal tidal conditions.',
  },
];

const howTo: UnderKeelLocaleContent['howTo'] = [
  { name: 'Define draft and safety margin', text: 'Measure your vessel\'s maximum draft and add a prudent safety margin (e.g. 0.5 m).' },
  { name: 'Look up the chart sounding', text: 'Find the datum sounding value for the critical passage point on your nautical chart.' },
  { name: 'Enter tidal data', text: 'Use the high water and low water times and heights from the official tide almanac.' },
  { name: 'Check your passage window', text: 'The tool will show the exact time interval during which you will have sufficient depth to navigate safely.' },
];

const bibliography: UnderKeelLocaleContent['bibliography'] = [
  { name: 'UK Hydrographic Office — Admiralty Tide Tables', url: 'https://www.admiralty.co.uk/tides/products-and-services' },
  { name: 'IALA — Buoyage and Safety Standards', url: 'https://www.iala-aism.org/' },
];

const seo: UnderKeelLocaleContent['seo'] = [
  { type: 'summary', title: 'Key Facts for Shoal Passage Planning', items: ['Actual depth equals chart sounding plus current tide height.', 'Minimum recommended UKC for recreational boats is 0.5 to 1 metre.', 'The Squat effect increases dynamic draft at speed in shallow water.', 'In wave conditions, increase your safety margin significantly.'] },
  { type: 'title', text: 'Under Keel Clearance: Safe Navigation over Shoals', level: 2 },
  { type: 'paragraph', html: 'Trip planning does not end with plotting a course on the chart. For the coastal navigator, one of the most critical calculations is the <strong>shoal passage</strong>. This calculation answers the fundamental question: at what time will I have sufficient depth to pass over this critical point without running aground?' },
  { type: 'title', text: 'The Elements of the Calculation', level: 3 },
  { type: 'paragraph', html: 'To use the under keel clearance calculator professionally, you need three precise figures: the <strong>maximum load draft</strong> (the depth reached by the keel when fully loaded), the <strong>chart sounding</strong> (the number shown on the nautical chart for the point you want to cross), and the <strong>safety margin</strong> (a prudent buffer of at least 0.5 to 1 metre).' },
  { type: 'table', headers: ['Factor', 'Effect', 'Recommendation'], rows: [
    ['Wave action', 'Reduces water under hull', 'Significantly increase safety margin'],
    ['Squat effect', 'Increases draft through suction', 'Reduce speed in critical areas'],
    ['Sandy bottom', 'Depth varies with storms', 'Use active sounder and extra margin'],
  ]},
  { type: 'tip', title: 'Navigation Tip', html: 'If your passage window is very narrow or weather deteriorates, the wisest decision is usually to wait in deep water outside until the tide rises to the required height.' },
  { type: 'glossary', items: [
    { term: 'Draft', definition: 'The depth reached by the lowest point of the vessel (keel) below the waterline.' },
    { term: 'Chart Datum', definition: 'The reference depth shown on the nautical chart — the minimum guaranteed depth under normal conditions.' },
    { term: 'Safety Margin (UKC)', definition: 'Additional clearance beyond the vessel draft to ensure safe passage.' },
    { term: 'Squat', definition: 'The downward movement of a vessel when navigating in shallow water due to hydrodynamic effects.' },
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

export const content: UnderKeelLocaleContent = {
  slug, title, description, ui, seo, faq, bibliography, howTo,
  schemas: [appSchema],
};
