import { bibliography } from '../bibliography';
import type { HullSpeedLocaleContent, HullSpeedUI } from '../index';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

const slug = 'skrovhastighet-kalkylator';
const title = 'Kalkylator för skrovhastighet';
const description =
  'Ta fram den teoretiska skrovhastigheten från vattenlinjelängden, jämför en logg och se när ett deplacements skrov klättrar i sin egen bogvåg.';

const ui: HullSpeedUI = {
  metric: 'Metrisk',
  imperial: 'Imperial',
  unitGroup: 'Enheter',
  sceneLabel: 'Vattenlinje och bogvåg',
  hullSpeedLabel: 'Skrovhastighet',
  knotsUnit: 'kn',
  kmhUnit: 'km/h',
  mphUnit: 'mph',
  ratioLabel: 'S/L',
  froudeLabel: 'Fr',
  lwlLabelMetric: 'Vattenlinjelängd',
  lwlLabelImperial: 'Vattenlinjelängd',
  lwlUnitM: 'm',
  lwlUnitFt: 'ft',
  observedLabel: 'Logghastighet',
  observedHint: 'Lämna 0 för att rita den teoretiska vågen. Skriv en logg för att se om du fortfarande sitter i gropen.',
  stretchHint: 'Dra skrovet för att tänja vattenlinjen',
  hullKindLabel: 'Skrovform',
  displacement: 'Deplacement',
  semi: 'Halvdeplacement',
  planing: 'Planande',
  boatsLabel: 'Exempelvattenlinjer',
  dinghy: 'Jolle',
  daysailer: 'Daysailer',
  cruiser: 'Kryssare',
  bluewater: 'Havs',
  workboat: 'Arbetsbåt',
  bandBelow: 'Fortfarande en kort våg',
  bandNear: 'Nära vågbarriären',
  bandAt: 'På bogvågen',
  bandAbove: 'Försöker klättra vågen',
  bandPlane: 'I planing, förbi skrovhastigheten',
  planingNote:
    'Ett planande skrov kan lämna den här vågen bakom sig. Skrovhastighet är en referens, inte en vägg.',
  displacementNote:
    'Ett deplacements skrov betalar dyrt när det hinner ikapp sitt eget kölvatten. Se det som ett praktiskt tak, inte ett GPS mål.',
  semiNote:
    'Halvdeplacement kan gå lite förbi det klassiska talet med tillräcklig effekt, till priset av ett skarpt motståndshopp.',
  waveLegend: 'Bogvåg',
  waterLegend: 'Vattenlinje',
  markLegend: 'Skrovhastighet',
  faqTitle: 'Frågor om skrovhastighet',
  bibliographyTitle: 'Källor',
};

const faq: HullSpeedLocaleContent['faq'] = [
  {
    question: 'Vad är skrovhastighet på en segelbåt?',
    answer:
      'Det är farten där ett deplacements skrov går med en bogvåg ungefär lika lång som den egna vattenlinjen. I nautiska enheter skattas den som 1.34 gånger roten av vattenlinjelängden i fot. Det är en kritisk fart, inte ett hårt fysiskt stopp.',
  },
  {
    question: 'Hur räknar man ut skrovhastighet?',
    answer:
      'Räkna om vattenlinjen till fot, ta roten och multiplicera med 1.34 för att få knop. En vattenlinje på 10 m är ungefär 32.8 ft, alltså nära 7.7 kn. Samma punkt motsvarar ett Froude tal nära 0.40.',
  },
  {
    question: 'Gäller skrovhastighet även planande båtar?',
    answer:
      'Formeln beskriver fortfarande vågen skrovet skulle göra i deplacementsläge. Planande båtar och många halvdeplacement är byggda för att klättra över den vågen. Använd talet som referens och läs noten om skrovform.',
  },
  {
    question: 'Ska jag använda vattenlinjelängd eller längd över allt?',
    answer:
      'Använd längden i vattenlinjen (LWL), den nedsänkta längd som faktiskt gör vågen. Längd över allt, bogspröt och överhäng sätter inte våglängden. Mät LWL i vattnet, inte LOA från broschyren.',
  },
];

const howTo: HullSpeedLocaleContent['howTo'] = [
  {
    name: 'Tänj vattenlinjen',
    text: 'Dra skrovet, flytta vattenlinjerälsen eller välj från jolle till arbetsbåt. Skrovhastighet är 1.34 gånger roten av den längden i fot.',
  },
  {
    name: 'Välj skrovform',
    text: 'Deplacement, halvdeplacement eller planande ändrar kölen och om båten kan klättra ur sin egen våg.',
  },
  {
    name: 'Läs gropen',
    text: 'Vid skrovhastighet sitter bog och aktervåg en vattenlinje isär och båten sitter i dalen. Det är barriären.',
  },
  {
    name: 'Jämför en logg',
    text: 'Ange fart genom vattnet. En kortare våg betyder att du fortfarande skjuter billigt. En längre våg betyder att du klättrar i gropen.',
  },
];

const seo: HullSpeedLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Vad skrovhastigheten egentligen säger',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Ett deplacements skrov skjuter en våg från bog och en från akter. När de kammarna ligger ungefär en vattenlinje isär färdas båten med sitt eget kölvatten. Extra effekt hopar då mest vatten i stället för att köpa fart. Det tillståndet kallar seglare skrovhastighet.',
  },
  {
    type: 'paragraph',
    html: 'Kalkylatorn använder det vanliga amatörtalet 1.34 knop per rot av vattenlinjefot. Smala, långa skrov kan ligga lite högre, pråmar lägre. Se resultatet som ett streck att lära av och jämför en riktig logg.',
  },
  {
    type: 'title',
    text: 'Uträknade vattenlinjeexempel',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Vattenlinje', 'Skrovhastighet', 'Typisk båt'],
    rows: [
      ['4.2 m / 13.8 ft', '5.0 kn', 'Jolle'],
      ['6.5 m / 21.3 ft', '6.2 kn', 'Daysailer'],
      ['10 m / 32.8 ft', '7.7 kn', 'Familjekryssare'],
      ['13.5 m / 44.3 ft', '8.9 kn', 'Havsyacht'],
      ['18 m / 59.1 ft', '10.3 kn', 'Liten arbetsbåt'],
    ],
  },
  {
    type: 'title',
    text: 'Så läser du bogvågen',
    level: 2,
  },
  {
    type: 'list',
    items: [
      'Under märket är vågen kort och båten fortfarande billig att driva.',
      'Nära märket blir bogvågen brantare och bränsle eller segel köper mindre fart.',
      'På märket matchar våglängden LWL. Ett deplacements skrov står vid den klassiska barriären.',
      'Ovanför klättrar ett deplacements skrov i sitt kölvatten. Ett planande kan redan vara uppe.',
    ],
  },
  {
    type: 'tip',
    title: 'Mät LWL, inte LOA',
    html: 'Broschyrlängden räknar in överhäng. Vågen bryr sig om den nedsänkta vattenlinjen. Har du bara LOA blir den beräknade skrovhastigheten för optimistisk.',
  },
  {
    type: 'title',
    text: 'Froude talet i en mening',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Skrovhastighet är en bekväm förpackning av ett Froude tal nära 0.40: fart delat med roten av gravitation gånger längd. Därför är längre vattenlinjer snabbare även när skrovformen är densamma. Att tänja LWL höjer deplacementsgränsen rent; fler hästkrafter gör det inte.',
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
    name: `Så använder du ${title}`,
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
