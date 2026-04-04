import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SailAreaUI, SailAreaLocaleContent } from '../index';

const slug = 'sail-area-calculator';
const title = 'Sail Area and SA/D Ratio Calculator';
const description =
  'Calculate the total sail area and sail area to displacement ratio of your boat. Nautical performance analysis based on I, J, P and E measurements.';

const ui: SailAreaUI = {
  hullSectionLabel: 'Hull Data',
  totalMassLabel: 'Displacement',
  rigSystemLabel: 'Rig',
  intendedUseLabel: 'Intended use',
  rigGeometryLabel: 'Rig Geometry',
  sailConfigLabel: 'Rig type',
  genoaOverlapLabel: 'Genoa Overlap',
  foqueLabel: 'Jib',
  genovaLabel: 'Genoa',
  sadRatioLabel: 'SA/D Ratio',
  totalAreaLabel: 'Total area',
  performanceLabel: 'Performance',
  sloopLabel: 'Sloop (single mast)',
  cutterLabel: 'Cutter (double headsail)',
  ketchLabel: 'Ketch (two masts)',
  cruiserLabel: 'Cruiser',
  performanceTypeLabel: 'Performance',
  racerLabel: 'Racer',
  exportPdfLabel: 'GENERATE TECHNICAL REPORT',
  faqTitle: 'Frequently Asked Questions',
  bibliographyTitle: 'Bibliography',
};

const faq: SailAreaLocaleContent['faq'] = [
  {
    question: 'Why is my boat slow in light wind?',
    answer: 'Your SA/D ratio is probably below 15, indicating a heavy displacement boat with little sail area relative to its weight. These boats need winds above 12 knots to sail lively.',
  },
  {
    question: 'Should I empty the water tanks to improve performance?',
    answer: 'Yes, lightening the boat directly improves the SA/D ratio because the actual displacement decreases. Emptying water and fuel tanks can reduce displacement by several hundred kilograms and significantly raise the ratio.',
  },
  {
    question: 'What is the Roach on a sail?',
    answer: 'The Roach is the convex curve of the leech (trailing edge) of the mainsail. It provides extra sail area beyond the base geometric triangle defined by P and E. Racing boats have aggressive Roach with rigid battens.',
  },
  {
    question: 'How do I measure the real displacement of my boat?',
    answer: 'The most reliable method is to use the loaded displacement (with all stores, water, fuel and crew aboard). The light ship displacement from the builder manual is usually optimistic. Use the actual displacement in your normal sailing conditions.',
  },
  {
    question: 'Where can I find the I, J, P and E measurements for my boat?',
    answer: 'You will find them in the owner manual, in ORC or IRC rating certificates, or in class certificate documentation. You can also measure them directly on board with a tape measure or by contacting the boatbuilder.',
  },
];

const howTo: SailAreaLocaleContent['howTo'] = [
  {
    name: 'Select the rig type',
    text: 'Choose between Sloop (single mast), Cutter (jib and staysail) or Ketch (mizzen mast). This determines how total sail area is calculated.',
  },
  {
    name: 'Enter the displacement',
    text: 'Use the actual loaded displacement of your boat in kg or lbs. This figure is key for the SA/D ratio calculation.',
  },
  {
    name: 'Measure the rig geometry',
    text: 'Enter the P (mast height), E (boom), I (foretriangle height) and J (foretriangle base) measurements in metres or feet.',
  },
  {
    name: 'Adjust the genoa overlap',
    text: 'Move the slider to indicate your genoa overlap: 100% is a non-overlapping jib, 130% is a standard genoa, 155% is a large overlap genoa.',
  },
  {
    name: 'Interpret the SA/D ratio',
    text: 'A ratio between 16 and 20 is a balanced cruiser. Above 20 the boat will be very lively in light wind but demanding in fresh conditions.',
  },
];

const bibliography: SailAreaLocaleContent['bibliography'] = [
  {
    name: 'Society of Naval Architects and Marine Engineers - SNAME',
    url: 'https://www.sname.org/',
  },
  {
    name: 'ORC - Offshore Racing Congress',
    url: 'https://orc.org/',
  },
  {
    name: 'Elvstrom Sailmakers - Sail Manual',
    url: 'https://www.elvstromsails.com/',
  },
];

const seo: SailAreaLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Sail Area Calculator: Complete Guide to Performance and Ratios',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Sail area is the aerodynamic engine of any sailing vessel. It determines how much wind energy the boat can capture and, combined with its displacement, defines its nautical character: whether it will be a slow cruiser or a twitchy racing machine. Calculating this value correctly is the first step to understanding the behaviour of any sailboat.',
  },
  {
    type: 'paragraph',
    html: 'Sailing involves a constant dance between the force of the wind on the sails and the resistance of the water on the hull. The <strong>Sail Area / Displacement ratio (SA/D)</strong> captures this relationship in a single number that allows boats of any length and displacement to be compared on equal terms.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Ideal Cruiser Ratio', value: '15-18', icon: 'mdi:anchor' },
      { label: 'Racing Boats', value: '+24', icon: 'mdi:sailing' },
      { label: 'Margin of Error', value: '5-10%', icon: 'mdi:alert-circle-outline' },
    ],
    columns: 3,
  },
  {
    type: 'title',
    text: 'What is the SA/D Ratio used for?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'The <strong>Sail Area / Displacement</strong> ratio is a diagnostic tool that allows you to predict boat behaviour before setting sail. A low ratio indicates a robust and safe but slow boat in light winds; a high ratio offers speed and a sense of flying but demands greater crew skill when the wind picks up. Neither is superior to the other: it all depends on the type of sailing intended.',
  },
  {
    type: 'title',
    text: 'SA/D Ratio Reference Table',
    level: 4,
  },
  {
    type: 'table',
    headers: ['Ratio', 'Boat Type', 'Behaviour at Sea'],
    rows: [
      ['< 14', 'Heavy Displacement / Cargo Vessel', 'Stable, slow, needs sustained wind'],
      ['14 - 16.5', 'Offshore Passage Cruiser', 'Balanced, comfortable, good upwind'],
      ['16.5 - 20', 'Standard Marina Cruiser', 'Lively in breeze, manageable, versatile'],
      ['20 - 25', 'Performance Cruiser / Sport', 'Fast, demanding, exciting in light air'],
      ['> 25', 'Racer / Extreme Sport', 'Very fast, nervous, requires expert crew'],
    ],
  },
  {
    type: 'title',
    text: 'Technical Glossary of Measurements (I, J, P, E)',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'I (Foretriangle Height)',
        definition: 'Vertical distance from the deck to the point where the jib halyard attaches at the mast. Defines the height of the foretriangle.',
      },
      {
        term: 'J (Foretriangle Base)',
        definition: 'Horizontal distance from the mast to the stem (bow of the boat). Defines the base of the foretriangle where headsails are furled or hanked.',
      },
      {
        term: 'P (Mast Height)',
        definition: 'Distance from the deck to the mainsail halyard sheave at the top of the mast. Defines the height of the mainsail.',
      },
      {
        term: 'E (Boom Length)',
        definition: 'Distance from the mast to the mainsail clew at the end of the boom. Defines the base of the mainsail.',
      },
    ],
  },
  {
    type: 'title',
    text: 'Nautical Exam Calculations (Yachtmaster)',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Sail area calculation and the SA/D ratio form part of the syllabus for <strong>Yachtmaster</strong> and coastal skipper examinations. Understanding rig geometry and its relationship with displacement is essential for making safety decisions at sea: reefing in time, choosing the right genoa or estimating boat behaviour ahead of a squall.',
  },
  {
    type: 'tip',
    title: 'Downwind Sails and Safety',
    html: 'For ocean or long-distance passage sailing, an SA/D ratio between 16 and 18 offers the best balance between speed and safety. Boats with ratios above 22 may need reefing in winds of only Force 4-5.',
  },
  {
    type: 'title',
    text: 'How Does Genoa Overlap Affect Performance?',
    level: 4,
  },
  {
    type: 'paragraph',
    html: 'The <strong>genoa</strong> is the largest headsail, whose clew is positioned behind the mast, "overlapping" the mainsail. The overlap percentage indicates how much longer the perpendicular to the luff (LP) is compared to the J distance. A 150% genoa has an LP equivalent to 150% of J, providing much greater sail area than a simple non-overlapping jib.',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Dacron (Cruising)',
        description: 'Classic material for cruising sails. Robust and easy to maintain.',
        points: [
          'High durability and UV resistance',
          'Low maintenance cost',
          'More weight and stretch under load',
          'Ideal for coastal and passage sailing',
        ],
      },
      {
        title: 'Laminates (Racing)',
        description: 'High-tech materials such as Kevlar, Spectra or Dyneema.',
        highlight: true,
        points: [
          'Minimum stretch: maximum aerodynamic efficiency',
          'Much lighter than Dacron',
          'Higher cost and shorter service life',
          'Essential on boats with SA/D ratio > 22',
        ],
      },
    ],
    columns: 2,
  },
  {
    type: 'title',
    text: 'Physics of Sailing and Stability',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Sail area generates a driving force but also a <strong>heeling moment</strong> that tends to capsize the boat. Stability is measured by the righting moment the boat can oppose to this heeling force. A high SA/D ratio in a boat with little ballast can be dangerous, while the same ratio in a boat with a deep heavy keel is perfectly manageable.',
  },
  {
    type: 'paragraph',
    html: 'To calculate real available power, naval architects use the <strong>Displacement-Length Ratio (DLR)</strong> in combination with the SA/D. Both ratios together precisely describe whether a boat is a sea tug or a racing planer.',
  },
  {
    type: 'tip',
    title: 'Stability and Safety',
    html: 'Never evaluate SA/D in isolation. A sailboat with a ratio of 22 and a 90-degree righting angle is far safer than one with a ratio of 18 and a 60-degree righting angle. Always consult your boat stability curve.',
  },
];

const schemas: SailAreaLocaleContent['schemas'] = [
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

export const content: SailAreaLocaleContent = {
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
