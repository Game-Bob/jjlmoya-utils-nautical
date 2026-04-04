import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'sailing-and-nautical',
  title: 'Sailing & Nautical',
  description: 'Nautical calculation tools for sailors: tides, under-keel clearance, unit conversions, sail area, speed, and fuel endurance. Designed for recreational skippers, maritime students, and sailing enthusiasts.',
  seo: [
    {
      type: 'summary',
      title: 'Tools included in this category',
      items: [
        'Tide height calculator using the Rule of Twelfths.',
        'Under-keel clearance passage window calculator.',
        'Nautical unit converter (distance, speed, depth, pressure).',
        'Sail area calculator (triangle, quadrilateral, genoa).',
        'Speed converter and Beaufort scale reference.',
        'Boat fuel endurance calculator.',
      ],
    },
    {
      type: 'title',
      text: 'Nautical Calculators for Recreational Sailing',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Coastal and offshore navigation demands mastery of calculations that go well beyond heading and speed. From anticipating water depth in a tidal harbour to correctly sizing a cruising sail plan, every decision aboard has a mathematical component. These tools are designed to make those calculations quick, offline, and without printed tables.',
    },
    {
      type: 'title',
      text: 'Why Nautical Units Matter',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The maritime unit system is international and differs from the everyday metric system. The <strong>knot</strong> (1 nautical mile per hour) is the universal speed unit at sea. A <strong>nautical mile</strong> equals 1,852 metres and is based on one minute of arc along the Earth\'s equator. Mastering conversions between knots, km/h, m/s and the Beaufort scale is essential for interpreting weather forecasts and planning passages safely.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { label: 'Tools', value: '6', icon: 'mdi:tools' },
        { label: 'Languages', value: '3', icon: 'mdi:translate' },
        { label: 'Nautical mile', value: '1,852 m', icon: 'mdi:map-marker-distance' },
      ],
    },
    {
      type: 'title',
      text: 'Planning Manoeuvres with Draft Restrictions',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Under-keel clearance</strong> (UKC) is the free water margin between the vessel\'s keel and the seabed. Calculating it correctly before entering a tidal harbour or crossing a bar is one of the most critical safety decisions in coastal navigation. With the tide and UKC tools in this category, you can estimate the safe passage window using your local tide almanac data.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Knot', definition: 'Unit of speed equal to one nautical mile per hour (1.852 km/h).' },
        { term: 'Nautical Mile', definition: 'Unit of maritime distance equal to 1,852 metres, based on one minute of arc of latitude.' },
        { term: 'Beaufort', definition: 'Empirical scale from 0 to 12 measuring wind intensity by its effect on the sea surface.' },
        { term: 'UKC (Under-Keel Clearance)', definition: 'Free water distance between the vessel\'s keel and the seabed at a given moment.' },
        { term: 'Sail Plan', definition: 'Set of sails on a sailing vessel, including their distribution, area and individual characteristics.' },
        { term: 'Endurance', definition: 'Maximum distance a vessel can travel on available fuel at a given speed.' },
      ],
    },
  ],
};
