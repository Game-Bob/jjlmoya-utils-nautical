import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SpeedConverterUI, SpeedConverterLocaleContent } from '../index';

const slug = 'nautical-speed-converter';
const title = 'Nautical Speed Converter and Beaufort Scale';
const description =
  'Convert between knots, km/h, m/s and mph instantly. Includes full Beaufort table with sea state descriptions and wind effects.';

const beaufortData = [
  { force: 0, name: 'Calm', sea: 'Sea like a mirror', effect: 'Smoke rises vertically', kn: '0' },
  { force: 1, name: 'Light air', sea: 'Ripples with appearance of scales', effect: 'Direction shown by smoke drift', kn: '1-3' },
  { force: 2, name: 'Light breeze', sea: 'Small wavelets, crests not breaking', effect: 'Wind felt on face, leaves rustle', kn: '4-6' },
  { force: 3, name: 'Gentle breeze', sea: 'Large wavelets, scattered whitecaps', effect: 'Leaves and twigs in motion', kn: '7-10' },
  { force: 4, name: 'Moderate breeze', sea: 'Small waves, frequent whitecaps', effect: 'Dust and loose paper raised', kn: '11-16' },
  { force: 5, name: 'Fresh breeze', sea: 'Moderate waves, many whitecaps', effect: 'Small trees begin to sway', kn: '17-21' },
  { force: 6, name: 'Strong breeze', sea: 'Large waves, white foam crests', effect: 'Difficult to use umbrella', kn: '22-27' },
  { force: 7, name: 'Near gale', sea: 'Sea heaps up, foam blown in streaks', effect: 'Difficult to walk against wind', kn: '28-33' },
  { force: 8, name: 'Gale', sea: 'High waves, spray reduces visibility', effect: 'Great difficulty walking', kn: '34-40' },
  { force: 9, name: 'Strong gale', sea: 'Very high waves, sea rolls', effect: 'Structural damage occurs', kn: '41-47' },
  { force: 10, name: 'Storm', sea: 'Exceptionally high waves, sea white', effect: 'Trees uprooted, considerable damage', kn: '48-55' },
  { force: 11, name: 'Violent storm', sea: 'Huge waves, foam covers sea', effect: 'Widespread damage', kn: '56-63' },
  { force: 12, name: 'Hurricane', sea: 'Air filled with foam and spray', effect: 'Total catastrophe', kn: '64+' },
];

const ui: SpeedConverterUI = {
  knLabel: 'Knots (kt)',
  kmhLabel: 'Kilometres/hour',
  msLabel: 'Metres/second',
  mphLabel: 'Miles/hour',
  beaufortTitle: 'Beaufort Scale',
  forceLabel: 'Force',
  descriptionLabel: 'Description',
  knotsLabel: 'Knots',
  effectLabel: 'Visual Effect',
  seaStateLabel: 'Sea State',
  windEffectLabel: 'Land Effect',
  faqTitle: 'Frequently Asked Questions': 'Bibliography',
  beaufortDataJson: JSON.stringify(beaufortData),
};

const faq: SpeedConverterLocaleContent['faq'] = [
  {
    question: 'Why is boat speed measured in knots?',
    answer: 'The knot is a unit of speed equal to one nautical mile per hour. Its origin is historical: sailors measured vessel speed by throwing a piece of wood into the sea tied to a rope with equally spaced knots, counting how many knots passed through their fingers in a set time. Today it remains the international standard unit in maritime navigation and aviation.',
  },
  {
    question: 'What is the Beaufort Scale and how is it used in navigation?',
    answer: 'The Beaufort Scale is an empirical scale relating wind speed to observed effects at sea and on land. Developed by British Admiral Francis Beaufort in 1805, it ranges from 0 (absolute calm) to 12 (hurricane). Sailors use it to estimate wind intensity without instruments by observing the state of the sea.',
  },
  {
    question: 'What is the difference between SOG and STW in navigation?',
    answer: 'SOG (Speed Over Ground) is the actual speed of the vessel relative to the seabed, measured by GPS. STW (Speed Through Water) or log speed is the speed of the vessel relative to the surrounding water. The difference between both reflects the effect of marine currents. SOG is used for planning arrivals and calculating fuel; STW is used to calculate leeway.',
  },
  {
    question: 'How many km/h is one knot?',
    answer: 'One knot equals exactly 1.852 kilometres per hour, which is the length of one nautical mile (defined as one minute of arc of the terrestrial meridian). Therefore, 10 knots equals 18.52 km/h, 20 knots equals 37.04 km/h and 30 knots equals 55.56 km/h.',
  },
];

const howTo: SpeedConverterLocaleContent['howTo'] = [
  {
    name: 'Enter speed in any unit',
    text: 'Type the speed value in the corresponding field (knots, km/h, m/s or mph) and all other fields will update automatically.',
  },
  {
    name: 'Check the equivalent Beaufort force',
    text: 'The Beaufort card shows in real time the wind force corresponding to the entered speed, with the sea state and land effects.',
  },
  {
    name: 'Click a row in the Beaufort table',
    text: 'You can directly select any Beaufort scale in the table below to see its minimum speed in all formats.',
  },
  {
    name: 'Use the results to plan your navigation',
    text: 'Combine the speed and wind information to decide whether conditions are appropriate for your type of vessel and planned passage.',
  },
];

const seo: SpeedConverterLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Guide to the Nautical Speed Converter and Beaufort Scale',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Speed is a fundamental piece of data in maritime navigation. Knowing how many knots your boat is making, how that translates into kilometres per hour for planning a passage, or what Beaufort force represents the wind you are experiencing, are calculations every sailor needs to master.',
  },
  {
    type: 'paragraph',
    html: 'This nautical speed converter lets you transform between knots, km/h, m/s and mph instantly, while automatically identifying the corresponding Beaufort force with its sea state description and observable wind effects.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Standard Unit', value: 'Knots (kt)', icon: 'mdi:speedometer' },
      { label: 'Wind Scale', value: 'Beaufort (0-12)', icon: 'mdi:weather-windy' },
      { label: 'Key Conversion', value: '1 kt = 1.85 km/h', icon: 'mdi:swap-horizontal' },
    ],
  },
  {
    type: 'title',
    text: 'Why is speed measured in Knots?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'The <strong>knot (kt)</strong> is the official unit of speed in maritime and air navigation. Its definition is precise: one knot equals one nautical mile per hour, where the nautical mile (1852 m) is defined as one minute of arc of the terrestrial meridian. This direct relationship with Earth geometry is what makes the knot a particularly practical unit for navigation, allowing distances to be estimated directly on a nautical chart without any conversion.',
  },
  {
    type: 'paragraph',
    html: 'Historically, sailors measured vessel speed using the <em>chip log</em>: a triangular piece of wood thrown into the sea attached to a rope with equally spaced knots every 14.4 metres (the proportional fraction of a nautical mile in 30 seconds). Counting the knots passing through their fingers during that time gave them the vessel speed, giving rise to the term we use today.',
  },
  {
    type: 'title',
    text: "The Beaufort Scale: The Sailor's Eye",
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'The <strong>Beaufort Scale</strong> was developed in 1805 by British Admiral Sir Francis Beaufort as an empirical method to classify wind strength from observable effects, without instrumentation. Originally conceived to estimate how much sail a ship could carry, it is today a universal reference in maritime meteorology, adopted by the World Meteorological Organization (WMO).',
  },
  {
    type: 'paragraph',
    html: 'The scale ranges from <strong>Force 0</strong> (absolute calm, sea like a mirror) to <strong>Force 12</strong> (hurricane conditions with waves over 14 metres and air full of foam and spray). For the recreational sailor, critical limits are usually Force 6 (strong breeze, 22-27 knots) for light craft and Force 7-8 for ocean-going yachts.',
  },
  {
    type: 'table',
    headers: ['Beaufort Force', 'Description', 'Sea Conditions'],
    rows: [
      ['0', 'Calm', 'Sea like a mirror'],
      ['3', 'Gentle breeze', 'Scattered whitecaps, crests beginning to break'],
      ['6', 'Strong breeze', 'Large waves, white foam crests, possible spray'],
      ['9', 'Strong gale', 'Very high waves, visibility reduced by foam and spray'],
      ['12', 'Hurricane', 'Air completely filled with foam, sea totally white'],
    ],
  },
  {
    type: 'title',
    text: 'Nautical Speed Glossary',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: 'Knot (kt)', definition: 'Unit of speed equal to one nautical mile per hour (1852 m/h). International standard in maritime and air navigation.' },
      { term: 'SOG (Speed Over Ground)', definition: 'Actual vessel speed over the seabed, measured by GPS. Reflects the effect of marine currents on boat speed.' },
      { term: 'Log Speed (STW)', definition: 'Speed of the vessel relative to the surrounding water, measured by the log. Does not include current effects; key for calculating leeway.' },
      { term: 'Apparent Wind', definition: 'Wind experienced by the crew on board, resulting from the vector sum of true wind and the wind created by the vessel advancing. Always differs from true wind in magnitude and direction.' },
    ],
  },
  {
    type: 'title',
    text: 'Quick Conversion Formulas',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'To convert speeds manually when you do not have access to a digital converter, use these quick approximations every sailor should know by heart:',
  },
  {
    type: 'list',
    items: [
      '<strong>Knots to km/h:</strong> Multiply knots by 1.852. Quick approximation: knots x 2, minus 8%. For example, 10 kt ≈ 20 - 1.6 = 18.4 km/h.',
      '<strong>Knots to mph:</strong> Multiply knots by 1.15. Approximation: knots + 15%. For example, 20 kt ≈ 23 mph.',
      '<strong>Knots to m/s:</strong> Multiply knots by 0.514. Quick approximation: divide knots by 2. For example, 10 kt ≈ 5 m/s (exact: 5.14 m/s).',
    ],
  },
  {
    type: 'tip',
    title: 'Safety and Climatology',
    html: 'Before setting out, always consult the maritime weather forecast. Beaufort 4-5 is manageable for most recreational vessels; from Force 6 upwards, seriously consider postponing departure if you lack sufficient experience or your boat is not prepared for those conditions.',
  },
  {
    type: 'title',
    text: 'Equipment Comparison',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Digital Anemometer',
        description: 'Electronic instrument for precise measurement of wind speed.',
        icon: 'mdi:speedometer',
        points: [
          'Accuracy of ±2% under normal conditions',
          'Requires electrical power or batteries',
          'Can fail in extreme conditions',
          'Instant reading and data logging',
        ],
      },
      {
        title: 'Beaufort Observation',
        description: 'Visual estimation of wind force from observable effects at sea and on land.',
        icon: 'mdi:eye-outline',
        highlight: true,
        points: [
          'Requires no instruments whatsoever',
          'Available in any condition',
          'Sufficient accuracy for safety decisions',
          'Fundamental skill of the expert navigator',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Navigation and Passage Planning',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'When planning a passage, your vessel speed determines estimated times of arrival (ETA) and fuel consumption for motor vessels. For a sailing yacht, speed also depends on wind strength and direction: knowing the forecast Beaufort force lets you anticipate whether you can sail or will need the engine.',
  },
  {
    type: 'paragraph',
    html: 'In racing, the conversion between knots and metres per second is especially useful for calculating VMG (Velocity Made Good) and for analysing sail polars. Meteorologists and numerical forecast models typically give wind in m/s or km/h, so conversion to knots is a routine step in tactical planning.',
  },
];

const schemas: SpeedConverterLocaleContent['schemas'] = [
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

export const content: SpeedConverterLocaleContent = {
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
