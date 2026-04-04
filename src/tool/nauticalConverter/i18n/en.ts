import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { NauticalConverterUI, NauticalConverterLocaleContent } from '../index';

const slug = 'nautical-units-converter';
const title = 'Nautical Units Converter';
const description =
  'Convert nautical miles, knots, fathoms and atmospheric pressure. Includes interactive Beaufort scale for wind speed.';

const ui: NauticalConverterUI = {
  distanceCategoryLabel: 'Distance',
  speedCategoryLabel: 'Speed',
  depthCategoryLabel: 'Depth',
  pressureCategoryLabel: 'Pressure',
  nmLabel: 'Nautical Mile (nm)',
  kmLabel: 'Kilometre (km)',
  miLabel: 'Statute Mile (mi)',
  cableLabel: 'Cable',
  knLabel: 'Knot (kn)',
  kmhLabel: 'km/h',
  msLabel: 'm/s',
  mphLabel: 'mph',
  brozaLabel: 'Fathom',
  mLabel: 'Metre (m)',
  ftLabel: 'Foot (ft)',
  mbarLabel: 'Millibar (mbar)',
  mmhgLabel: 'mmHg',
  inhgLabel: 'inHg',
  atmLabel: 'Atmosphere (atm)',
  windSeaLabel: 'Sea state',
  forceLabel: 'Force',
  effectLabel: 'Effect',
  copyLabel: 'Copy value',
  faqTitle: 'Frequently Asked Questions',
  bibliographyTitle: 'Bibliography',
};

const faq: NauticalConverterLocaleContent['faq'] = [
  {
    question: 'How many kilometres are in a nautical mile?',
    answer: 'One nautical mile equals exactly 1.852 kilometres, or 1852 metres. This measurement corresponds to one arcminute of latitude on the Earth\'s surface.',
  },
  {
    question: 'What is the difference between a knot and a kilometre per hour?',
    answer: 'One knot equals 1.852 km/h, since a knot is one nautical mile per hour. To convert knots to km/h simply multiply by 1.852.',
  },
  {
    question: 'Why are nautical miles used instead of kilometres at sea?',
    answer: 'Because a nautical mile corresponds to one arcminute of latitude, which greatly simplifies navigation calculations with chart and compass. A change of one arcminute of latitude equals exactly one nautical mile.',
  },
  {
    question: 'What is the Beaufort scale?',
    answer: 'It is an empirical scale that relates wind speed to observable effects on the sea. It ranges from 0 (calm) to 12 (hurricane) and is essential for coastal and ocean navigation.',
  },
  {
    question: 'What pressure unit is used in marine meteorology?',
    answer: 'Marine meteorology mainly uses the millibar (mbar) or its equivalent hectopascal (hPa). Normal atmospheric pressure at sea level is 1013.25 mbar.',
  },
  {
    question: 'How many feet are in a fathom?',
    answer: 'One fathom equals exactly 6 feet, that is 1.8288 metres. It is used mainly in English-speaking countries to express depths on older nautical charts.',
  },
];

const howTo: NauticalConverterLocaleContent['howTo'] = [
  {
    name: 'Select the conversion category',
    text: 'Click one of the four tabs: Distance, Speed, Depth or Pressure depending on the quantity you want to convert.',
  },
  {
    name: 'Enter the value in any field',
    text: 'Type the number in the unit you know. All other units update automatically in real time.',
  },
  {
    name: 'Consult the Beaufort scale (speed)',
    text: 'When you enter a speed in the Speed tab, a card will appear showing the corresponding Beaufort force and the expected sea state.',
  },
  {
    name: 'Copy the result',
    text: 'Use the copy button next to any field to copy the value to the clipboard.',
  },
];

const bibliography: NauticalConverterLocaleContent['bibliography'] = [
  {
    name: 'Instituto Hidrografico de la Marina',
    url: 'https://armada.defensa.gob.es/ihm/',
  },
  {
    name: 'NOAA - National Weather Service',
    url: 'https://www.weather.gov/mfl/beaufort',
  },
];

const seo: NauticalConverterLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'The importance of precision in nautical units',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Navigating the sea requires its own language, a system of measurements refined over centuries of maritime exploration. Nautical units are not a historical quirk but mathematically coherent tools aligned with the geometry of the Earth and the practical needs of the navigator.',
  },
  {
    type: 'paragraph',
    html: 'Unlike on land, where an error of a few metres rarely has serious consequences, at sea a wrong conversion can mean the difference between anchoring in safe water or running aground on a shoal. Precision in units is not an academic matter: it is navigation.',
  },
  {
    type: 'paragraph',
    html: 'When we move away from the coast, the lack of visual references makes the calculated position the only reality we can act on. Knowing how to convert accurately between nautical miles, kilometres, knots and metres is not optional for the responsible navigator.',
  },
  {
    type: 'title',
    text: 'Why do we use nautical miles instead of kilometres?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'The answer lies in the shape of the Earth itself. One <strong>nautical mile</strong> equals exactly one arcminute of latitude on the Earth\'s surface, that is 1852 metres. This direct correspondence between angular measurement and linear distance is the key to its universal use in navigation.',
  },
  {
    type: 'paragraph',
    html: 'Using this unit, a change of one arcminute in latitude on a nautical chart always corresponds to exactly one nautical mile travelled. This enormously simplifies calculations of position, speed and arrival time without the need for additional conversion factors.',
  },
  {
    type: 'title',
    text: 'Speed at sea: The knot',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'The <strong>knot</strong> is the unit of speed equivalent to one nautical mile per hour. Its name comes from the old technique of measuring speed by throwing a wooden chip tied to a rope with regularly spaced knots into the water and counting how many knots passed through the fingers in a fixed time.',
  },
  {
    type: 'paragraph',
    html: 'Today, although we use GPS satellites and sophisticated electronic systems, the knot remains the standard unit in international aviation and maritime navigation. One knot equals 1.852 km/h or 0.514 m/s.',
  },
  {
    type: 'title',
    text: 'Depth and anchorage: Fathoms, Metres and Feet',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'In the nautical world, depth is not merely a statistic: it is the difference between a safe anchorage and a grounding. Historically, the <strong>fathom</strong> (1.8288 metres or exactly 6 feet) was the predominant unit for measuring depths in the English-speaking world.',
  },
  {
    type: 'paragraph',
    html: 'However, globalisation and technology have introduced the constant use of metres on most modern charts and echo sounders. The modern navigator must be comfortable moving between fathoms, metres and feet, especially when consulting old nautical charts or instruments calibrated in imperial units.',
  },
  {
    type: 'title',
    text: 'Meteorology and Atmospheric Pressure',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'For a skipper, the barometer is the oracle of the weather. Atmospheric pressure, measured in <strong>millibars</strong> (mbar), is the most reliable indicator of imminent weather changes. A rapid drop in pressure heralds the arrival of strong winds and bad weather.',
  },
  {
    type: 'paragraph',
    html: 'Understanding pressure variations is vital for any navigator. Normal atmospheric pressure at sea level is 1013.25 mbar (one atmosphere). Higher values indicate stable weather, while lower values, especially if they fall rapidly, signal the approach of potentially dangerous low-pressure systems.',
  },
  {
    type: 'title',
    text: 'Wind and Sea Scales: From Beaufort to Douglas',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Wind speed in knots is a number that comes to life when associated with the <strong>Beaufort scale</strong>. Developed by British Admiral Francis Beaufort in 1805, this empirical scale relates wind speed to observable effects on both the sea surface and on land.',
  },
  {
    type: 'list',
    items: [
      '<strong>Force 0-3 (0-10 kn):</strong> Calm sailing conditions, ideal for learning or family outings.',
      '<strong>Force 4-5 (11-21 kn):</strong> Ideal sailing wind for yachts, with moderate waves and whitecaps.',
      '<strong>Force 6-7 (22-33 kn):</strong> Fresh to near-gale conditions. Experience and reefing recommended.',
      '<strong>Force 8+ (over 34 kn):</strong> Gale. Experienced navigators with suitable vessels only.',
    ],
  },
  {
    type: 'paragraph',
    html: 'Similarly, the Douglas scale classifies sea state in degrees from 0 (glassy) to 9 (phenomenal), allowing the navigator to anticipate conditions beyond the horizon based on weather reports.',
  },
  {
    type: 'tip',
    title: 'Safety Tip',
    html: 'When using this converter to plan a trip, always bear in mind that actual conditions may differ from predictions. Consult the official weather forecast and never underestimate the sea\'s ability to change rapidly.',
  },
  {
    type: 'title',
    text: 'Offline planning and mobility',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'This tool is designed to work without an internet connection once loaded in the browser, making it ideal for use on board where connectivity may be limited. All conversions are calculated locally on the device, without sending any data to a server.',
  },
];

const schemas: NauticalConverterLocaleContent['schemas'] = [
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

export const content: NauticalConverterLocaleContent = {
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
