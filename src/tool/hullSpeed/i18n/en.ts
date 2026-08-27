import { bibliography } from '../bibliography';
import type { HullSpeedLocaleContent, HullSpeedUI } from '../index';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

const slug = 'sailboat-hull-speed-calculator';
const title = 'Sailboat Hull Speed Calculator';
const description =
  'Find theoretical hull speed from waterline length, compare an observed speed, and see when a displacement hull is climbing its own bow wave.';

const ui: HullSpeedUI = {
  metric: 'Metric',
  imperial: 'Imperial',
  unitGroup: 'Units',
  sceneLabel: 'Waterline and bow wave',
  hullSpeedLabel: 'Hull speed',
  knotsUnit: 'kn',
  kmhUnit: 'km/h',
  mphUnit: 'mph',
  ratioLabel: 'S/L',
  froudeLabel: 'Fr',
  lwlLabelMetric: 'Waterline length',
  lwlLabelImperial: 'Waterline length',
  lwlUnitM: 'm',
  lwlUnitFt: 'ft',
  observedLabel: 'Log speed',
  observedHint: 'Leave at 0 to draw the theoretical wave. Type a log reading to see if you are still sitting in the hole.',
  stretchHint: 'Drag the hull to stretch the waterline',
  hullKindLabel: 'Hull form',
  displacement: 'Displacement',
  semi: 'Semi displacement',
  planing: 'Planing',
  boatsLabel: 'Example waterlines',
  dinghy: 'Dinghy',
  daysailer: 'Daysailer',
  cruiser: 'Cruiser',
  bluewater: 'Bluewater',
  workboat: 'Workboat',
  bandBelow: 'Still making a short wave',
  bandNear: 'Approaching the wave barrier',
  bandAt: 'Riding the bow wave',
  bandAbove: 'Trying to climb the wave',
  bandPlane: 'On the plane, past hull speed',
  planingNote:
    'A planing hull can leave this wave behind. Hull speed is a reference, not a wall.',
  displacementNote:
    'A displacement hull pays steeply as it catches its own wake. Treat hull speed as a practical ceiling, not a GPS target.',
  semiNote:
    'Semi displacement hulls can press a little past the classic ratio with enough power, at a sharp rise in resistance.',
  waveLegend: 'Bow wave',
  waterLegend: 'Waterline',
  markLegend: 'Hull speed',
  faqTitle: 'Hull speed questions',
  bibliographyTitle: 'References',
};

const faq: HullSpeedLocaleContent['faq'] = [
  {
    question: 'What is hull speed on a sailboat?',
    answer:
      'Hull speed is the speed at which a displacement hull is travelling with a bow wave about as long as its own waterline. In nautical units it is commonly estimated as 1.34 times the square root of waterline length in feet. It is a critical speed, not a hard physical stop.',
  },
  {
    question: 'How do you calculate hull speed?',
    answer:
      'Convert waterline length to feet, take the square root, and multiply by 1.34 to get knots. A 10 m waterline is about 32.8 ft, so hull speed is about 7.7 kn. The same point corresponds to a Froude number near 0.40.',
  },
  {
    question: 'Does hull speed apply to planing boats?',
    answer:
      'The formula still describes the wave the hull would make if it stayed in displacement mode. Planing and many semi displacement craft are designed to climb over that wave. Use the number as a reference, then look at the hull form note.',
  },
  {
    question: 'Should I use waterline length or overall length?',
    answer:
      'Use length on the waterline (LWL), the immersed length that actually makes the wave. Overall length, bowsprits and overhangs do not set the wavelength. Measure LWL in the water, not from a brochure LOA.',
  },
];

const howTo: HullSpeedLocaleContent['howTo'] = [
  {
    name: 'Stretch the waterline',
    text: 'Drag the hull, move the waterline rail, or pick a dinghy through workboat. Hull speed is 1.34 times the square root of that length in feet.',
  },
  {
    name: 'Choose hull form',
    text: 'Displacement, semi displacement or planing changes the keel and whether the boat can climb out of its own wave.',
  },
  {
    name: 'Read the hole',
    text: 'At hull speed the bow wave and stern wave sit one waterline apart and the boat sits in the trough. That is the barrier.',
  },
  {
    name: 'Compare a log speed',
    text: 'Enter speed through the water. A shorter wave means you are still cheap to drive. A longer wave means you are climbing the hole.',
  },
];

const seo: HullSpeedLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'What hull speed is actually telling you',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'A displacement hull pushes a wave from the bow and another from the stern. When those crests sit about one waterline apart, the boat is travelling with its own wake. Extra power then mostly heaps water up instead of buying speed. That condition is what sailors call hull speed.',
  },
  {
    type: 'paragraph',
    html: 'The calculator uses the common amateur ratio 1.34 knots per square root of waterline feet. Fine, long hulls can sit a little higher; barges sit lower. Treat the result as a teaching mark, then compare a real log speed against it.',
  },
  {
    type: 'title',
    text: 'Worked waterline examples',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Waterline', 'Hull speed', 'Typical boat'],
    rows: [
      ['4.2 m / 13.8 ft', '5.0 kn', 'Dinghy'],
      ['6.5 m / 21.3 ft', '6.2 kn', 'Daysailer'],
      ['10 m / 32.8 ft', '7.7 kn', 'Family cruiser'],
      ['13.5 m / 44.3 ft', '8.9 kn', 'Bluewater yacht'],
      ['18 m / 59.1 ft', '10.3 kn', 'Small workboat'],
    ],
  },
  {
    type: 'title',
    text: 'How to read the bow wave',
    level: 2,
  },
  {
    type: 'list',
    items: [
      'Below the mark the wave is short and the boat is still cheap to drive.',
      'Near the mark the bow wave steepens and fuel or sail power buys less speed.',
      'On the mark the wavelength matches LWL. A displacement hull is at the classic barrier.',
      'Above the mark a displacement hull is climbing its wake. A planing hull may already be up.',
    ],
  },
  {
    type: 'tip',
    title: 'Measure LWL, not LOA',
    html: 'Brochure length includes overhangs. The wave cares about the immersed waterline. If you only have LOA, the hull speed you compute will be optimistic.',
  },
  {
    type: 'title',
    text: 'Froude number in one sentence',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Hull speed is a convenient packaging of a Froude number near 0.40: speed divided by the square root of gravity times length. That is why longer waterlines are faster even when the hull shape stays the same. Stretching LWL is the clean way to raise a displacement limit; adding horsepower is not.',
  },
];

const schemas: HullSpeedLocaleContent['schemas'] = [
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
    name: `How to use ${title}`,
    step: howTo.map((step) => ({
      '@type': 'HowToStep',
      name: step.name,
      text: step.text,
    })),
  } as WithContext<HowTo>,
];

export const content: HullSpeedLocaleContent = {
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
