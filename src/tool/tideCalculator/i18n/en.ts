import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TideCalculatorUI, TideCalculatorLocaleContent } from '../index';

const slug = 'tide-height-calculator';
const title = 'Tide Height Calculator';
const description =
  'Estimate water depth at any point in the tidal cycle using the nautical Rule of Twelfths. Ideal for coastal planning and nautical licence study.';

const ui: TideCalculatorUI = {
  parametersLabel: 'Parameters',
  highTideLabel: 'High Tide',
  lowTideLabel: 'Low Tide',
  targetTimeLabel: 'Query time',
  estimatedHeightLabel: 'Estimated Height',
  metersLabel: 'metres',
  amplitudeLabel: 'Amplitude',
  durationLabel: 'Duration',
  tableBreakdownLabel: 'Twelfths Breakdown',
  tableHourLabel: 'Time',
  tableStateLabel: 'State',
  tableStartLabel: 'Start',
  tableEndLabel: 'End',
  statusUpLabel: 'Rising',
  statusDownLabel: 'Falling',
  statusOutOfRange: 'Out of range',
  faqTitle: 'Frequently Asked Questions',
  bibliographyTitle: 'Bibliography',
};

const faq: TideCalculatorLocaleContent['faq'] = [
  {
    question: 'What is the Rule of Twelfths and what is it used for?',
    answer:
      'The Rule of Twelfths is a simplified mathematical method used in navigation to estimate the tide height at any point between high and low water. It is based on the observation that tidal flow follows an approximate sinusoidal curve, dividing the total range into 12 parts over 6 hours (1/12, 2/12, 3/12, 3/12, 2/12, 1/12).',
  },
  {
    question: 'Is this method reliable for real navigation?',
    answer:
      'It is a very useful theoretical estimation method for quick planning and educational purposes. However, it does not account for meteorological factors such as atmospheric pressure or wind, which can alter sea level by several decimetres. For real navigation, always consult official tide tables.',
  },
  {
    question: 'What data do I need to calculate tide height?',
    answer:
      'You need the time and height (in metres) of the high tide and low tide closest to the moment you wish to query. This data is found in tide almanacs or marine weather applications.',
  },
  {
    question: 'Why does the tide not always rise at the same speed?',
    answer:
      'Due to the inertia of large water masses and the configuration of ocean basins. The tide begins to rise slowly after low water, reaches maximum speed in the middle hours (the 3/12 hours) and slows again as it approaches high water.',
  },
  {
    question: 'How does atmospheric pressure affect the tide?',
    answer:
      'High pressure (anticyclone) pushes water down, reducing the actual height. Low pressure (depression) allows water to rise higher. As a general rule, a variation of 1 hPa from the mean corresponds to approximately 1 cm change in sea level.',
  },
  {
    question: 'What is tidal range?',
    answer:
      'It is the vertical difference in height between a high tide and the immediately preceding or following low tide. This measurement varies according to lunar phase (spring and neap tides) and geographical location.',
  },
];

const howTo: TideCalculatorLocaleContent['howTo'] = [
  {
    name: 'Identify high and low tide',
    text: 'Consult your tide almanac to obtain the times and heights for the tidal cycle you are interested in.',
  },
  {
    name: 'Enter the data in the calculator',
    text: 'Input the time and height of high tide and low tide. The tool will determine duration and amplitude automatically.',
  },
  {
    name: 'Set the query time',
    text: 'Adjust the time for which you want to know the water level. You will see the exact point highlighted on the chart.',
  },
  {
    name: 'Analyse the twelfths table',
    text: 'Review the hour-by-hour breakdown to understand how the water level will fluctuate throughout the entire period.',
  },
];

const bibliography: TideCalculatorLocaleContent['bibliography'] = [
  {
    name: 'Puertos del Estado - Tide Prediction',
    url: 'https://portus.puertos.es/#/',
  },
  {
    name: 'Instituto Hidrografico de la Marina',
    url: 'https://armada.defensa.gob.es/ihm/',
  },
];

const seo: TideCalculatorLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Mastering the Tide: The Rule of Twelfths in Navigation',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Coastal navigation and entering harbours with restricted depth require precise knowledge of water depth at all times. Although digital applications and GPS providing real-time data are available today, the <strong>Rule of Twelfths</strong> remains a fundamental tool in the training of any recreational craft skipper or yacht captain. This rule is a mathematical estimation method that allows you to calculate, approximately and without complex calculators, the tide height at any point in a tidal cycle.',
  },
  {
    type: 'title',
    text: 'What exactly is the Rule of Twelfths?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'The Rule of Twelfths is based on the observation that tidal flow is not constant. Water does not rise or fall at the same speed during the approximately six hours between high water and low water. Instead, the movement follows a sinusoidal curve. During the first hour the tide moves slowly; it accelerates in the middle hours and slows again as it approaches the next extreme.',
  },
  {
    type: 'table',
    headers: ['Hour of Cycle', 'Proportion', 'Flow State'],
    rows: [
      ['<strong>1st Hour</strong>', '1/12 of the range', 'Slow start (Slack water)'],
      ['<strong>2nd Hour</strong>', '2/12 of the range', 'Accelerating flow'],
      ['<strong>3rd Hour</strong>', '3/12 of the range', 'Maximum flow (Strong current)'],
      ['<strong>4th Hour</strong>', '3/12 of the range', 'Sustained flow'],
      ['<strong>5th Hour</strong>', '2/12 of the range', 'Notable deceleration'],
      ['<strong>6th Hour</strong>', '1/12 of the range', 'Final slowing (Towards slack water)'],
    ],
  },
  {
    type: 'title',
    text: 'Technical limitations: Factors affecting the real tide',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: 'Atmospheric pressure', definition: 'A depression raises sea level; an anticyclone lowers it. As a general rule, ~1 cm variation per hPa difference from the mean.' },
      { term: 'Coastal wind', definition: 'Sustained onshore winds can pile water above predicted levels in the tide tables.' },
      { term: 'Local topography', definition: 'Coastal shape, seabed depth and the presence of estuaries can significantly delay or accelerate tidal flow.' },
    ],
  },
  {
    type: 'tip',
    title: 'Safety Note',
    html: 'This tool uses a mathematical estimation method. It does not account for meteorological factors or local topography. For real navigation, always consult the official tide tables.',
  },
  {
    type: 'title',
    text: 'Key concepts for new sailors',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Tidal range',
        definition: 'Vertical difference between high water and low water. In the Bay of Biscay it can be several metres; in the Mediterranean it is almost negligible.',
      },
      {
        term: 'Tidal duration',
        definition: 'Time interval between high water and the next low water. Typically around 6 hours and 12 minutes (semi-diurnal cycle).',
      },
      {
        term: 'Chart datum',
        definition: 'Reference level from which all depths on nautical charts are measured. Actual depths are almost never less than those indicated.',
      },
    ],
  },
];

const schemas: TideCalculatorLocaleContent['schemas'] = [
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
    name: `How to use: ${title}`,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
  } as WithContext<HowTo>,
];

export const content: TideCalculatorLocaleContent = {
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
