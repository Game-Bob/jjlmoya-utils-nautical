import { bibliography } from '../bibliography';
import type { HullSpeedLocaleContent, HullSpeedUI } from '../index';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

const slug = 'rompsnelheid-calculator';
const title = 'Calculator voor rompsnelheid';
const description =
  'Bepaal de theoretische rompsnelheid uit de waterlijnlengte, vergelijk een log en zie wanneer een verplaatsingsscheepje in zijn eigen boeggolf klimt.';

const ui: HullSpeedUI = {
  metric: 'Metriek',
  imperial: 'Imperiaal',
  unitGroup: 'Eenheden',
  sceneLabel: 'Waterlijn en boeggolf',
  hullSpeedLabel: 'Rompsnelheid',
  knotsUnit: 'kn',
  kmhUnit: 'km/h',
  mphUnit: 'mph',
  ratioLabel: 'S/L',
  froudeLabel: 'Fr',
  lwlLabelMetric: 'Waterlijnlengte',
  lwlLabelImperial: 'Waterlijnlengte',
  lwlUnitM: 'm',
  lwlUnitFt: 'ft',
  observedLabel: 'Logsnelheid',
  observedHint: 'Laat 0 staan om de theoretische golf te tekenen. Typ een log om te zien of je nog in het dal zit.',
  stretchHint: 'Sleep de romp om de waterlijn te strekken',
  hullKindLabel: 'Rompvorm',
  displacement: 'Verplaatsing',
  semi: 'Halfverplaatsing',
  planing: 'Glijdend',
  boatsLabel: 'Voorbeeldwaterlijnen',
  dinghy: 'Dinghy',
  daysailer: 'Daysailer',
  cruiser: 'Kruiser',
  bluewater: 'Zee',
  workboat: 'Werkboot',
  bandBelow: 'Nog een korte golf',
  bandNear: 'Dicht bij de golfbarrière',
  bandAt: 'Op de boeggolf',
  bandAbove: 'Probeert de golf te beklimmen',
  bandPlane: 'Aan het glijden, voorbij de rompsnelheid',
  planingNote:
    'Een glijdende romp kan deze golf achter zich laten. Rompsnelheid is een referentie, geen muur.',
  displacementNote:
    'Een verplaatsingsromp betaalt steil als hij zijn eigen kielzog inhaalt. Zie het als praktisch plafond, niet als GPS doel.',
  semiNote:
    'Halfverplaatsers kunnen de klassieke verhouding met genoeg vermogen iets overschrijden, tegen een scherpe weerstandsstijging.',
  waveLegend: 'Boeggolf',
  waterLegend: 'Waterlijn',
  markLegend: 'Rompsnelheid',
  faqTitle: 'Vragen over rompsnelheid',
  bibliographyTitle: 'Bronnen',
};

const faq: HullSpeedLocaleContent['faq'] = [
  {
    question: 'Wat is de rompsnelheid van een zeilboot?',
    answer:
      'Het is de snelheid waarbij een verplaatsingsromp vaart met een boeggolf ongeveer zo lang als de eigen waterlijn. In nautische eenheden schat je die als 1.34 keer de wortel van de waterlijnlengte in voet. Het is een kritische snelheid, geen harde fysieke stop.',
  },
  {
    question: 'Hoe bereken je rompsnelheid?',
    answer:
      'Zet de waterlijn om in voet, neem de wortel en vermenigvuldig met 1.34 voor knopen. Een waterlijn van 10 m is ongeveer 32.8 ft, dus zo n 7.7 kn. Hetzelfde punt hoort bij een Froude getal rond 0.40.',
  },
  {
    question: 'Geldt rompsnelheid ook voor glijboten?',
    answer:
      'De formule beschrijft nog steeds de golf die de romp zou maken in verplaatsingsmodus. Glijders en veel halfverplaatsers zijn gemaakt om over die golf te klimmen. Gebruik het getal als referentie en lees de noot bij de rompvorm.',
  },
  {
    question: 'Moet ik waterlijnlengte of lengte over alles nemen?',
    answer:
      'Neem de lengte op de waterlijn (LWL), de ondergedompelde lengte die de golf echt maakt. Lengte over alles, boegsprieten en overhangen zetten de golflengte niet. Meet LWL in het water, niet de LOA uit de brochure.',
  },
];

const howTo: HullSpeedLocaleContent['howTo'] = [
  {
    name: 'Strek de waterlijn',
    text: 'Sleep de romp, verschuif de waterlijnrail of kies van dinghy tot werkboot. Rompsnelheid is 1.34 keer de wortel van die lengte in voet.',
  },
  {
    name: 'Kies de rompvorm',
    text: 'Verplaatsing, halfverplaatsing of glijdend verandert de kiel en of de boot uit zijn eigen golf kan klimmen.',
  },
  {
    name: 'Lees het dal',
    text: 'Bij rompsnelheid zitten boeg en hekgolf één waterlijn uit elkaar en ligt de boot in het dal. Dat is de barrière.',
  },
  {
    name: 'Vergelijk een log',
    text: 'Voer de vaart door het water in. Een kortere golf betekent dat je nog goedkoop duwt. Een langere golf betekent dat je het dal inklimt.',
  },
];

const seo: HullSpeedLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Wat rompsnelheid je écht vertelt',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Een verplaatsingsromp duwt een golf vanaf de boeg en een vanaf het hek. Wanneer die toppen ongeveer één waterlijn uit elkaar liggen, vaart de boot met zijn eigen kielzog. Extra vermogen stapelt dan vooral water op in plaats van vaart te kopen. Die toestand noemen zeilers rompsnelheid.',
  },
  {
    type: 'paragraph',
    html: 'De calculator gebruikt de gangbare amateurverhouding 1.34 knopen per wortel van waterlijnvoeten. Slanke, lange rompen kunnen iets hoger, bakken lager. Zie het resultaat als lesstreep en vergelijk een echt log.',
  },
  {
    type: 'title',
    text: 'Doorgerekende waterlijnen',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Waterlijn', 'Rompsnelheid', 'Typische boot'],
    rows: [
      ['4.2 m / 13.8 ft', '5.0 kn', 'Dinghy'],
      ['6.5 m / 21.3 ft', '6.2 kn', 'Daysailer'],
      ['10 m / 32.8 ft', '7.7 kn', 'Familiekruiser'],
      ['13.5 m / 44.3 ft', '8.9 kn', 'Zeejacht'],
      ['18 m / 59.1 ft', '10.3 kn', 'Kleine werkboot'],
    ],
  },
  {
    type: 'title',
    text: 'De boeggolf lezen',
    level: 2,
  },
  {
    type: 'list',
    items: [
      'Onder het merkteken is de golf kort en de boot nog goedkoop te drijven.',
      'Dicht bij het merkteken steilt de boeggolf en kopen brandstof of zeil minder vaart.',
      'Op het merkteken past de golflengte bij LWL. Een verplaatsingsromp staat aan de klassieke barrière.',
      'Erboven klimt een verplaatsingsromp in zijn kielzog. Een glijder kan al omhoog zijn.',
    ],
  },
  {
    type: 'tip',
    title: 'Meet LWL, niet LOA',
    html: 'Brochurelengte bevat overhangen. De golf geeft om de ondergedompelde waterlijn. Heb je alleen LOA, dan is de berekende rompsnelheid te optimistisch.',
  },
  {
    type: 'title',
    text: 'Het Froude getal in één zin',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Rompsnelheid is een handige verpakking van een Froude getal rond 0.40: vaart gedeeld door de wortel van zwaartekracht maal lengte. Daarom zijn langere waterlijnen sneller, ook als de rompvorm gelijk blijft. LWL strekken tilt de verplaatsingsgrens schoon omhoog; extra pk doet dat niet.',
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
    name: `${title} gebruiken`,
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
