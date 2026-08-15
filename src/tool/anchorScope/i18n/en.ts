import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AnchorScopeLocaleContent } from '../entry';
import type { AnchorScopeUI } from '../ui';

const slug = 'anchor-scope-calculator';
const title = 'Anchor Scope and Rode Calculator';
const description =
  'Calculate the optimal anchor chain and rope length, scope ratio, and swing radius for safe anchoring based on water depth, bow height, tidal rise, and seabed conditions.';

const ui: AnchorScopeUI = {
  parametersTitle: 'Parameters',
  waterDepthLabel: 'Chart Depth',
  bowHeightLabel: 'Bow Freeboard',
  tideRangeLabel: 'Tidal Rise',
  boatLengthLabel: 'Boat Length (LOA)',
  rodeTypeLabel: 'Rode Configuration',
  windConditionLabel: 'Wind & Forecast',
  seabedTypeLabel: 'Seabed Type',
  presetProtected: 'Calm Cove',
  presetOpen: 'Open Coast',
  presetStorm: 'Gale Warning',
  seabedTag: 'Seabed Holding Factor',
  catenaryTag: 'Catenary Dampening',
  unitM: 'm',
  unitFt: 'ft',
  unitMeters: 'Metric (m)',
  unitFeet: 'Imperial (ft)',
  allChainOption: 'All Chain (Heavy Catenary)',
  ropeChainOption: 'Rope + Chain (Mixed Rode)',
  allRopeOption: 'All Rope / Nylon Line',
  calmWindOption: 'Calm / Light Breeze (< 15 kts)',
  moderateWindOption: 'Moderate Breeze (15 - 25 kts)',
  strongWindOption: 'Strong Wind / Gale (25 - 35 kts)',
  stormWindOption: 'Storm / Heavy Squalls (> 35 kts)',
  sandOption: 'Sand (Optimal Holding)',
  mudOption: 'Mud / Silt (Good Holding)',
  clayOption: 'Clay / Hard Mud (Very Good)',
  gravelOption: 'Gravel / Shingle (Moderate)',
  rockOption: 'Rock / Coral (Foul Risk)',
  weedOption: 'Weed / Grass (Poor Penetration)',
  resultsTitle: 'Anchoring Analysis & Dimensions',
  scopeRatioLabel: 'Effective Scope Ratio',
  totalDepthLabel: 'Total Vertical Height',
  recommendedRodeLabel: 'Recommended Rode Length',
  horizontalDistanceLabel: 'Horizontal Reach',
  swingRadiusLabel: 'Estimated Swing Radius',
  minSafeRodeLabel: 'Minimum Calm Rode',
  heavyWeatherRodeLabel: 'Heavy Weather Rode',
  statusOptimalTitle: 'Secure Anchor Scope',
  statusOptimalDesc: 'The calculated scope provides adequate catenary dampening and a horizontal angle of pull on the anchor shank.',
  statusCautionTitle: 'Moderate Scope: Monitor Conditions',
  statusCautionDesc: 'Scope is acceptable for calm or moderate conditions, but increase rode if wind gusts or wave chop intensify.',
  statusDangerTitle: 'Insufficient Scope: Risk of Dragging',
  statusDangerDesc: 'Scope ratio is critically low. The anchor shank may experience upward vertical pull, breaking out from the seabed.',
  adviceSand: 'Sand provides excellent holding for modern scoop anchors. Set the anchor firmly in reverse.',
  adviceMud: 'Soft mud requires higher fluke surface area and extended scope to reach firm substrate.',
  adviceClay: 'Hard clay requires an anchor with sharp penetrating tips to ensure reliable bedding.',
  adviceGravel: 'Loose gravel can slip under dynamic gusts. Increase rode length by at least 25 percent.',
  adviceRock: 'Rock risks anchor fouling and snagging. Always rig a trip line when anchoring on stone or coral.',
  adviceWeed: 'Dense sea grass prevents anchor flukes from penetrating. Test holding thoroughly before leaving helm.',
  catenaryAllChain: 'All chain catenary absorbs wave shock through weight and ensures parallel seabed pull.',
  catenaryRopeChain: 'Mixed rode requires at least 7:1 scope to compensate for reduced chain catenary weight.',
  catenaryAllRope: 'Nylon rope provides stretch elasticity but requires generous 8:1 to 10:1 scope to keep pull flat.',
  resetButton: 'Reset Defaults',
  visualProfileTitle: 'Elevation Profile & Catenary Arc',
  waterlineLabel: 'Waterline',
  seabedLabel: 'Seabed',
  anchorLabel: 'Anchor',
  catenaryCurveLabel: 'Catenary Rode Arc',
  swingCircleLabel: 'Swing Radius Circle',
};

const faq: AnchorScopeLocaleContent['faq'] = [
  {
    question: 'What is anchor scope and why is it crucial for safety?',
    answer: 'Anchor scope is the ratio between the total deployed length of anchor rode (chain or rope) and the total vertical distance from the seabed to your bow roller. A proper scope ensures the pull on the anchor shank remains horizontal, allowing the flukes to dig into the seabed rather than lifting upward.',
  },
  {
    question: 'Why must bow roller height and tide range be added to water depth?',
    answer: 'Water depth alone does not account for the total vertical drop. If your bow roller is 1.5 metres above the water and the tide will rise by 2 metres overnight, your effective depth increases by 3.5 metres. Calculating scope only with sounding depth results in dangerous under-scoping at high tide.',
  },
  {
    question: 'What is the difference in recommended scope between all-chain and rope rode?',
    answer: 'All-chain rode is heavy and forms a sag curve called a catenary, which absorbs wave shocks and keeps the pull nearly horizontal at lower scopes (typically 4:1 to 5:1 in moderate conditions). Rope is buoyant and straightens rapidly under tension, requiring 7:1 to 10:1 scope to maintain a safe horizontal angle.',
  },
  {
    question: 'How do you calculate the swing radius of a boat at anchor?',
    answer: 'The swing radius is calculated as the horizontal distance from the anchor to the bow (using the Pythagorean theorem: sqrt(rode^2 - depth^2)) plus the overall length of the vessel and an additional safety buffer for anchor drag or bridal slack.',
  },
  {
    question: 'How do different seabed types affect holding power?',
    answer: 'Firm sand and clay offer the highest holding coefficients. Soft mud requires deeper fluke penetration, gravel reduces friction, while thick sea grass or weeds can prevent flukes from setting. On poor bottoms, increasing scope by 20 to 50 percent is standard seamanship practice.',
  },
  {
    question: 'What is the catenary effect in heavy weather?',
    answer: 'In strong winds, extreme tension straightens the catenary curve, lifting chain off the seabed. When gusts exceed 30 knots, all-chain behaves almost like a rigid bar unless sufficient scope (7:1 or greater) and an elastic nylon snubber are deployed.',
  },
];

const howTo: AnchorScopeLocaleContent['howTo'] = [
  {
    name: 'Measure sounder depth and add bow freeboard',
    text: 'Check your depth sounder for current water depth and add the height of the bow roller above the waterline.',
  },
  {
    name: 'Add expected tidal rise to high water',
    text: 'Consult tidal tables to determine the maximum water rise expected during your stay at anchor.',
  },
  {
    name: 'Select your rode configuration and bottom type',
    text: 'Choose whether you are using all chain, mixed rope-chain, or nylon line, and select the seabed substrate.',
  },
  {
    name: 'Deploy recommended rode length and verify swing room',
    text: 'Pay out the calculated rode length, set the anchor under reverse engine power, and verify adequate clearance around your swing radius.',
  },
];

const seo: AnchorScopeLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Mastering Anchor Scope and Rode Calculation',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Anchoring is one of the foundational skills of seamanship. Whether securing a yacht in an idyllic Mediterranean cala or riding out an unexpected gale in an Atlantic anchorage, the safety of your vessel rests entirely on the holding power of your ground tackle. The single most controllable factor governing holding power is <strong>anchor scope</strong>.',
  },
  {
    type: 'title',
    text: 'Understanding Vertical Height and Total Scope Ratio',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'A common mistake made by recreational mariners is calculating anchor rode solely based on the sounder reading. The true vertical distance, known as <strong>total depth</strong>, comprises three distinct components that must be summed together before applying any scope multiplier:',
  },
  {
    type: 'list',
    items: [
      '<strong>Chart Depth at Anchor:</strong> The actual depth of water beneath the hull at low water or current state of tide.',
      '<strong>Bow Roller Freeboard:</strong> The height from the water surface up to the bow roller where the rode leaves the boat.',
      '<strong>Tidal Rise Range:</strong> The maximum expected rise in water level between current time and high water during the anchoring period.',
    ],
  },
  {
    type: 'title',
    text: 'Recommended Scope Ratios by Rode Configuration',
    level: 3,
  },
  {
    type: 'table',
    headers: ['Rode Configuration', 'Calm Weather', 'Moderate Wind (15-25 kts)', 'Gale Force (30+ kts)'],
    rows: [
      ['<strong>All Chain</strong>', '4:1 Scope', '5:1 Scope', '7:1 to 8:1 Scope'],
      ['<strong>Rope plus Chain</strong>', '5:1 Scope', '7:1 Scope', '8:1 to 10:1 Scope'],
      ['<strong>All Rope Line</strong>', '7:1 Scope', '8:1 Scope', '10:1 to 12:1 Scope'],
    ],
  },
  {
    type: 'title',
    text: 'The Physics of Catenary Curve and Anchor Holding',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Anchor flukes are designed to dig in under pure horizontal tension. When an upward angle of pull is exerted on the shank, the anchor breaks out of the bottom. Chain weight creates a sagging curve called the <strong>catenary arc</strong>. In moderate conditions, this weight keeps the pull perfectly parallel to the seabed. In heavy squalls, the chain straightens out, which is why increasing scope and deploying an elastic nylon snubber bridle is essential to absorb dynamic shock loads.',
  },
  {
    type: 'title',
    text: 'Managing Swing Radius and Anchorage Congestion',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'When swinging on the hook, your boat rotates 360 degrees around the anchor position with changing winds and tidal currents. The total <strong>swing radius</strong> is governed by the horizontal Pythagorean distance of the rode plus your boat length and safety buffer. Always ensure that no shoals, underwater hazards, or neighbouring vessels lie within your full swing circle.',
  },
  {
    type: 'tip',
    title: 'Seamanship Tip for Snubbers',
    html: 'Never let all chain ride directly on the windlass drum. Always attach a rope snubber with a chain hook or rolling hitch to relieve strain and cushion wave shock.',
  },
];

const schemas: AnchorScopeLocaleContent['schemas'] = [
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

export const content: AnchorScopeLocaleContent = {
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
