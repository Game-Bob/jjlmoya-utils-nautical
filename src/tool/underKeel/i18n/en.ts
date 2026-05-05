import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { UnderKeelUI, UnderKeelLocaleContent } from '../index';

const slug = 'under-keel-clearance-calculator';
const title = 'Under Keel Clearance Calculator';
const description =
  'Calculate the safe time window to cross bars, channels or draft-restricted points. Enter your boat draft, chart depth and tidal data to get the exact safe passage interval.';

const ui: UnderKeelUI = {
  parametersLabel: 'Parameters',
  boatDraftLabel: 'Boat Draft',
  chartDepthLabel: 'Chart Depth',
  safetyMarginLabel: 'Safety Margin',
  highTideLabel: 'High Tide',
  lowTideLabel: 'Low Tide',
  metersLabel: 'metres',
  passWindowLabel: 'Passage Window',
  neededLabel: 'Depth required',
  tideRequiredLabel: 'Minimum tide required',
  statusNeverLabel: 'No clearance in this cycle',
  statusAlwaysLabel: 'Clear throughout the cycle',
  statusFromLabel: 'Passage from:',
  statusUntilLabel: 'Passage until:',
  bottomLabel: 'BOTTOM',
};

const faq: UnderKeelLocaleContent['faq'] = [
  {
    question: 'What exactly is an under-keel clearance calculation?',
    answer: 'It is the calculation of the moment when there is sufficient depth at a critical point (such as a sandbar or narrow channel) to allow safe transit of a vessel according to its draft.',
  },
  {
    question: 'How much safety margin is recommended?',
    answer: 'For recreational craft, a minimum safety margin of between 0.5 and 1 metre above the boat draft is usually recommended. This margin compensates for possible errors in tidal calculations, atmospheric pressure variations or unexpected swell.',
  },
  {
    question: 'How does swell affect the under-keel clearance?',
    answer: 'Swell generates vertical oscillations in the hull. At the lowest point of the wave the boat is closer to the bottom than at rest. When crossing areas with swell, the safety margin must be increased substantially.',
  },
  {
    question: 'What is the chart sounding?',
    answer: 'It is the minimum depth at a point when the tide is at Chart Datum. It is added to the tide height at that moment to give the total available depth.',
  },
  {
    question: 'What does an underlined sounding on the chart mean?',
    answer: 'It means that point is exposed (dries out) when the tide is at Chart Datum. You will need a greater tide height to be able to pass over it.',
  },
  {
    question: 'What is the Squat effect and how does it alter passage?',
    answer: 'It is a hydrodynamic phenomenon by which a vessel navigating through shallow channels tends to sink lower relative to its waterline. The faster you travel, the more the dynamic draft increases and the less water you have under the keel.',
  },
];

const howTo: UnderKeelLocaleContent['howTo'] = [
  {
    name: 'Define draft and safety margin',
    text: 'Measure your boat draft at its maximum point and add a prudent safety margin (e.g. 0.5 m).',
  },
  {
    name: 'Look up the chart sounding',
    text: 'Find the Datum sounding value for the critical point you are going to navigate. Note whether it is a sandy or rocky area.',
  },
  {
    name: 'Enter the tidal data',
    text: 'Use the times and heights of high and low water from the nearest official tide almanac.',
  },
  {
    name: 'Check your passage window',
    text: 'The tool will show the exact time interval during which you will have sufficient depth to navigate safely.',
  },
];

const seo: UnderKeelLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Under Keel Clearance: Navigating Safely Over Shoals',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Planning a passage does not end with drawing a course on the chart. For the coastal navigator, one of the most critical calculations is the <strong>under-keel clearance</strong>: knowing at what time there will be enough depth to cross a critical point without grounding.',
  },
  {
    type: 'title',
    text: 'What is the chart sounding and how does it relate to the tide?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'On nautical charts, depths (soundings) are referenced to <strong>Chart Datum</strong>. This level is, by convention, the lowest level the tide reaches under normal conditions. The actual depth your boat will find at any given moment is the sum of that sounding plus the tide height at that instant, calculated using the Rule of Twelfths.',
  },
  {
    type: 'title',
    text: 'The elements of the calculation: Draft and Margin',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'To use the under-keel clearance calculator professionally, you need to know two technical details about your boat and one personal decision:',
  },
  {
    type: 'list',
    items: [
      '<strong>Maximum load draft:</strong> The depth reached by the lowest point of the boat (the keel) when fully loaded.',
      '<strong>Chart sounding:</strong> The number on the nautical chart for the point you wish to cross. If underlined, the point dries at Chart Datum.',
      '<strong>Safety margin:</strong> Additional safety clearance (nautically known as clearance) of at least 0.5 to 1 metre above the draft.',
    ],
  },
  {
    type: 'title',
    text: 'How does the passage window work?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'The calculator determines the exact moment when the water level will rise above your draft plus the chosen safety margin. From that minute, the <strong>passage window</strong> opens. If the tide is ebbing (falling), the tool will indicate until what time transit is permitted before the water level drops below your safety limit.',
  },
  {
    type: 'paragraph',
    html: 'This planning is vital for sailing boats with deep keels wishing to enter ports such as those in the Rias Baixas in Galicia or river ports in Andalusia, where tidal variation can make the difference between a comfortable entry or being stranded for six hours waiting for the next cycle.',
  },
  {
    type: 'title',
    text: 'Factors affecting the actual passage',
    level: 3,
  },
  {
    type: 'table',
    headers: ['Factor', 'Effect', 'Recommendation'],
    rows: [
      ['<strong>Swell</strong>', 'Reduces water under the hull', 'Increase safety margin significantly'],
      ['<strong>Squat effect</strong>', 'Increases draft through suction', 'Reduce speed in critical areas'],
      ['<strong>Sandy bottom</strong>', 'Depth variable with storms', 'Keep active sounder and extra margin'],
    ],
  },
  {
    type: 'tip',
    title: 'Navigation Tip',
    html: 'If your passage window is very narrow or the weather deteriorates, the wisest decision is usually to wait offshore in deep water until the tide rises to the required height.',
  },
];

const schemas: UnderKeelLocaleContent['schemas'] = [
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

export const content: UnderKeelLocaleContent = {
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
