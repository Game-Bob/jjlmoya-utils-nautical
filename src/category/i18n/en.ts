import type { CategoryLocaleContent } from '../index';

const slug = 'sailing-and-nautical';
const title = 'Sailing & Nautical';
const description =
  'Nautical calculation tools for sailors: tides, endurance, sail area, unit converters and speed. Ideal for RYA and Yachtmaster exam study.';

const seo: CategoryLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Why use digital tools in sailing and navigation?',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Modern navigation has undergone a radical transformation with the advent of digital tools. Whether you are on a small recreational craft or at the helm of a cruising yacht, the ability to process position, wind and current data instantly is not just a matter of convenience — it is a fundamental pillar of safety at sea.',
  },
  {
    type: 'paragraph',
    html: 'Historically, the mariner depended exclusively on the sextant, the marine chronometer and reduction tables to determine position on the vast ocean. Today, although the romanticism of the sextant persists, operational reality demands a speed of response that only digital calculation tools can provide.',
  },
  {
    type: 'title',
    text: 'Key Aspects for the Modern Navigator',
    level: 2,
  },
  {
    type: 'title',
    text: 'Geolocation and High-Precision Digital Cartography',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Digital cartography has democratised navigation, giving even small boats access to information previously limited to large commercial vessels. A responsible skipper uses digital tools to validate their judgement, not to replace it.',
  },
  {
    type: 'list',
    items: [
      'Data entry precision: Minimal typographical errors can take you miles from your destination.',
      'Cross-device compatibility: Synchronise passage planning on a tablet with bridge instruments.',
      'Hardware failure backup: Lightweight web apps are insurance if the onboard plotter crashes.',
      'Passage Planning: Nautical calculators allow accurate estimation of fuel consumption and distances.',
    ],
  },
  {
    type: 'title',
    text: 'Marine Meteorology and Route Optimisation',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Wind and sea state are the true sovereigns of sailing. Correct interpretation of wind scales (such as the Beaufort scale) and their conversion to practical units like knots is the day-to-day reality of any navigator.',
  },
  {
    type: 'tip',
    title: 'The importance of redundancy and the Plan B',
    html: 'Never trust all your navigation to a single electronic system. Always keep a backup of your critical waypoints on paper. Web tools are excellent for pre-passage planning, but a good sailor always has an emergency plan that requires no screen.',
  },
  {
    type: 'title',
    text: 'Nautical Training and the Use of Calculators',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Even in official examinations for nautical qualifications (such as the RYA Dayskipper or Yachtmaster), chart calculations remain mandatory. Digital tools serve as the perfect study companion, allowing candidates to verify their dead reckoning exercises, tidal calculations and compass corrections.',
  },
  {
    type: 'paragraph',
    html: 'Our collection of utilities aims to be that bridge between the academic rigour of paper charts and the immediacy of modern navigation. We want every skipper, enthusiast or professional to find here the quick and accurate data they need before casting off.',
  },
];

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo,
};
