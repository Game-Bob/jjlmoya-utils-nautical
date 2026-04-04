import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EnduranceUI, EnduranceLocaleContent } from '../index';

const slug = 'nautical-endurance-calculator';
const title = 'Nautical Endurance Calculator';
const description =
  'Calculate your maximum range and safe distance based on fuel consumption, tank capacity and cruise speed. Fuel management for motorboats.';

const ui: EnduranceUI = {
  tankCapacityLabel: 'Tank Capacity',
  mainTankLabel: 'Main',
  auxTankLabel: 'Aux',
  currentFuelLabel: 'Current Fuel',
  seaConditionsLabel: 'Sea / Wind Conditions',
  consumptionLabel: 'Theoretical Consumption',
  cruiseSpeedLabel: 'Cruise Speed',
  reserveLabel: 'Reserve',
  fuelPriceLabel: 'Price per Litre',
  maxRangeLabel: 'Maximum Range',
  realPerformanceLabel: 'Real Performance',
  hoursLabel: 'Endurance Hours',
  safeMilesLabel: 'Safe Miles',
  tankValueLabel: 'Tank Value',
  inverseCalcLabel: 'Reverse Calculation: How much do I need to refuel?',
  desiredDistLabel: 'Desired Distance',
  minFuelLabel: 'Minimum Fuel Required',
  warningLabel: 'Reminder: A 20% reserve is the absolute minimum recommended for nautical safety.',
  seaCalm: 'Calm (1.0x)',
  seaLight: 'Light swell (+15%)',
  seaModerate: 'Moderate swell (+30%)',
  seaStorm: 'Storm (+60%)',
  faqTitle: 'Frequently Asked Questions',
  bibliographyTitle: 'Bibliography',
};
const faq: EnduranceLocaleContent['faq'] = [
  {
    question: 'How is the endurance of a motorboat calculated?',
    answer: 'Endurance is calculated by dividing the available fuel by the hourly consumption to obtain total hours, then multiplying that time by the cruise speed. The tool also applies a sea state factor to reflect real navigating conditions.',
  },
  {
    question: 'Why is a 20% reserve recommended in nautical navigation?',
    answer: 'The 20% reserve is a nautical safety standard that ensures enough fuel in case of unforeseen events: contrary currents, detours due to bad weather, errors in consumption estimates, or the need to assist another vessel. Many insurers and harbour masters consider it mandatory.',
  },
  {
    question: 'What is the L/NM performance and how does it affect planning?',
    answer: 'Performance in litres per nautical mile (L/NM) is the real efficiency of the engine at sea conditions. Unlike hourly consumption, it lets you calculate exactly how much fuel you need to cover a specific distance, regardless of your speed.',
  },
  {
    question: 'How does sea state affect actual consumption?',
    answer: 'Sea state increases consumption because the hull works harder against water and wind resistance. In light swell consumption rises 15%, in moderate swell 30%, and in a storm it can spike 60% or more. Ignoring this factor can leave a vessel without fuel before reaching port.',
  },
];
const howTo: EnduranceLocaleContent['howTo'] = [
  {
    name: 'Enter your tank capacity',
    text: 'Enter the litres of the main tank and the auxiliary one if you have it. The tool will calculate the current fill percentage.',
  },
  {
    name: 'Enter current fuel level',
    text: 'Enter the actual litres you have right now. You can measure them with the boat level or estimate them from the last refuel.',
  },
  {
    name: 'Adjust navigation conditions',
    text: 'Select the expected sea state for your passage. The sea factor corrects the theoretical consumption to the expected real consumption.',
  },
  {
    name: 'Enter consumption and cruise speed',
    text: 'Use manufacturer data or your own records for hourly consumption and the speed at which you usually navigate.',
  },
  {
    name: 'Review the safe distance and reverse calculation',
    text: 'The tool shows how many miles you can safely cover and how much fuel you need to reach a specific destination.',
  },
];

const bibliography: EnduranceLocaleContent['bibliography'] = [
  {
    name: 'UK Maritime and Coastguard Agency',
    url: 'https://www.gov.uk/government/organisations/maritime-and-coastguard-agency',
  },
  {
    name: 'RYA - Royal Yachting Association',
    url: 'https://www.rya.org.uk/',
  },
];
const seo: EnduranceLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Fuel Management and Endurance in Motor Navigation',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>Nautical endurance</strong> is one of the most critical calculations before setting sail on a motorboat. Knowing precisely how many miles you can cover with the available fuel is the difference between a planned passage and an emergency at sea.',
  },
  {
    type: 'paragraph',
    html: 'This endurance calculator integrates the <strong>sea conditions factor</strong>, the safety reserve percentage, and the reverse fuel calculation so that fuel management is complete and reliable in any situation.',
  },
  {
    type: 'title',
    text: 'The Golden Rule: The Rule of Thirds',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'The classic fuel management rule in nautical navigation divides the tank into three equal parts to always guarantee a safety margin:',
  },
  {
    type: 'list',
    items: [
      '<strong>One third for the outward leg:</strong> The fuel needed to reach the planned destination.',
      '<strong>One third for the return:</strong> The fuel to get back to the departure port or the nearest one.',
      '<strong>One third as reserve:</strong> The safety margin for unforeseen events, currents or adverse conditions.',
    ],
  },
  {
    type: 'paragraph',
    html: 'In the calculator you can set the reserve percentage according to your own criteria, although <strong>going below 20% is never recommended</strong>. With larger tanks or long passages, many experienced skippers raise this margin to 30% or even 33%.',
  },
  {
    type: 'title',
    text: 'Factors affecting Consumption (l/h)',
    level: 3,
  },
  {
    type: 'paragraph',
    html: "The manufacturer's theoretical consumption is calculated under ideal laboratory conditions. In practice, multiple factors alter the <strong>real fuel consumption</strong>. Hull speed is the most decisive: navigating above the economical speed can double or triple consumption per mile covered.",
  },  {
    type: 'table',
    headers: ['Navigation State', 'Effect on Endurance', 'Advice'],
    rows: [
      ['<strong>Fouled Hull</strong>', 'Reduces endurance by up to 20%', 'Clean the hull before the season'],
      ['<strong>Head Current</strong>', 'Can reduce effective speed by 30%', 'Always calculate with speed over ground'],
      ['<strong>Head Wind</strong>', 'Increases resistance and consumption by 10-25%', 'Use the light or moderate swell factor'],
      ['<strong>Overloading</strong>', 'Increases draught and resistance', 'Weigh gear and provisions before calculating'],
    ],
  },
  {
    type: 'title',
    text: 'Endurance Technical Glossary',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: 'Performance (L/NM)', definition: 'Litres of fuel consumed per nautical mile covered. The most useful indicator for planning passages because it links consumption to actual distance.' },
      { term: 'Cruise Speed', definition: 'The optimum speed at which the engine offers the best balance between speed and consumption. Generally between 70% and 80% of maximum power.' },
      { term: 'Critical Reserve', definition: 'The percentage of the tank that must never be consumed. A minimum of 20% is recommended to cover contingencies and prevent air from entering the fuel circuit.' },
      { term: 'Specific Consumption', definition: 'Grams of fuel per kilowatt-hour of power produced (g/kWh). Technical engine measure that allows comparing efficiency between different propulsion systems.' },
    ],
  },
  {
    type: 'title',
    text: 'The Danger of Sludge and Movement',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'A common source of problems on vessels with low fuel levels is <strong>tank bottom sludge</strong>. When the level drops too low, sediments accumulated over years can reach the filter and clog it, leaving the engine without fuel even though the gauge shows some litres.',
  },
  {
    type: 'paragraph',
    html: 'The movement of the boat at sea with little fuel can also cause problems: the liquid oscillates with the waves and can momentarily starve the fuel pump. Maintaining the reserve ensures this does not happen at a critical moment such as a harbour entry manoeuvre.',
  },  {
    type: 'tip',
    title: 'Fuel Saving Tip',
    html: 'Reducing speed by 10-15% below your usual cruise speed can improve efficiency by up to 30%. If you have time and the weather is favourable, going slower is always the most economical and safe decision.',
  },
  {
    type: 'title',
    text: 'Difference between Nautical Miles (NM) and Kilometres',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'A <strong>nautical mile</strong> equals 1,852 metres (1.852 km), and is the universal distance unit in maritime and aeronautical navigation. It is based on one arc-minute of a geographic degree, making it ideal for navigation with charts in geographic coordinates. Speed in nautical miles per hour is called a knot (kn).',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Needle Analogue Gauge',
        description: 'Traditional float system',
        points: [
          'Low cost and simple installation',
          'Requires no electricity to operate',
          'Inaccurate in rough seas due to fuel movement',
          'Does not show consumption or estimated endurance',
        ],
      },
      {
        title: 'Digital Flow Calculator',
        description: 'Electronic flow sensors',
        highlight: true,
        points: [
          '1-2% accuracy on real consumption',
          'Shows endurance, consumption and cost in real time',
          'Integrable with chartplotters and NMEA 2000',
          'Requires initial calibration and maintenance',
        ],
      },
    ],
  },
];
const schemas: EnduranceLocaleContent['schemas'] = [
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

export const content: EnduranceLocaleContent = {
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