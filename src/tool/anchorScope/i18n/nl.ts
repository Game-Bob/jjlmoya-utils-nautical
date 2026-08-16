import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AnchorScopeLocaleContent } from '../entry';
import type { AnchorScopeUI } from '../ui';

const slug = 'anker-kettinglengte-calculator';
const title = 'Anker Kettinglengte en Zwaaicirkel Calculator';
const description =
  'Bereken de optimale ankerkettinglengte, scope ratio en zwaaicirkel voor veilig ankeren op basis van waterdiepte, boeghoogte en getij.';

const ui: AnchorScopeUI = {
  parametersTitle: 'Parameters',
  waterDepthLabel: 'Kaartdiepte',
  bowHeightLabel: 'Boeg Vrijboord',
  tideRangeLabel: 'Getijverschil',
  boatLengthLabel: 'Scheepslengte (LOA)',
  rodeTypeLabel: 'Ankerlijn Type',
  windConditionLabel: 'Wind & Verwachting',
  seabedTypeLabel: 'Bodemtype',
  presetProtected: 'Beschutte Baai',
  presetOpen: 'Open Kust',
  presetStorm: 'Stormwaarschuwing',
  seabedTag: 'Bodem Grip Factor',
  catenaryTag: 'Kettinglijn Demping',
  unitM: 'm',
  unitFt: 'ft',
  unitMeters: 'Metrisch (m)',
  unitFeet: 'Imperiaal (ft)',
  allChainOption: 'Volledig Ketting (Zware Kettinglijn)',
  ropeChainOption: 'Combinatie Lijn en Ketting',
  allRopeOption: 'Volledig Ankerlijn',
  calmWindOption: 'Rustig / Lichte Bries (< 15 kn)',
  moderateWindOption: 'Matige Bries (15 - 25 kn)',
  strongWindOption: 'Harde Wind (25 - 35 kn)',
  stormWindOption: 'Stormkracht (> 35 kn)',
  sandOption: 'Zand (Optimale Grip)',
  mudOption: 'Slib / Modder (Goede Grip)',
  clayOption: 'Klei (Uitstekend)',
  gravelOption: 'Grind / Steentjes (Matig)',
  rockOption: 'Rotsbodem (Vastlooprisico)',
  weedOption: 'Zeegras / Wier (Weinig Grip)',
  resultsTitle: 'Anker Analyse en Afmetingen',
  scopeRatioLabel: 'Effectieve Scope Verhouding',
  totalDepthLabel: 'Totale Verticale Hoogte',
  recommendedRodeLabel: 'Aanbevolen Kettinglengte',
  horizontalDistanceLabel: 'Horizontale Afstand',
  swingRadiusLabel: 'Geschatte Zwaaicirkel',
  minSafeRodeLabel: 'Minimum bij Rustig Weer',
  heavyWeatherRodeLabel: 'Kettinglengte bij Storm',
  statusOptimalTitle: 'Veilige en Stabiele Verankering',
  statusOptimalDesc: 'De berekende lengte biedt een dempende kettinglijn en vlakke trekkracht op de ankerschacht.',
  statusCautionTitle: 'Acceptabel: Weersveranderingen Volgen',
  statusCautionDesc: 'Geschikt voor matige wind. Steek meer ketting als de wind of deining toeneemt.',
  statusDangerTitle: 'Onvoldoende Lengte: Krabgevaar',
  statusDangerDesc: 'Kritieke verhouding. Het anker wordt omhoog getrokken en kan losbreken.',
  adviceSand: 'Zand biedt uitstekende grip. Sla het anker stevig vast met achteruitgas.',
  adviceMud: 'Zachte modder vereist brede vloeien en meer ketting om vaste grond te bereiken.',
  adviceClay: 'Klei houdt stevig maar vereist een scherpe ankerpunt om in te dringen.',
  adviceGravel: 'Los grind verschuift bij schokken. Verleng de ketting met minimaal 25 procent.',
  adviceRock: 'Groot risico op klemmen. Gebruik altijd een neuringlijn met boei.',
  adviceWeed: 'Dicht zeegras verhindert ingraven. Controleer grip zorgvuldig met de motor.',
  catenaryAllChain: 'Het gewicht van de ketting vangt golven op en houdt de trekhoek horizontaal.',
  catenaryRopeChain: 'Een combinatielijn vereist minimaal een 7 op 1 verhouding ter compensatie.',
  catenaryAllRope: 'Lijn vereist 8 op 1 of 10 op 1 om te voorkomen dat het anker omhoog wipt.',
  resetButton: 'Standaardwaarden',
  visualProfileTitle: 'Kettinglijn Profiel',
  waterlineLabel: 'Waterlijn',
  seabedLabel: 'Zeebodem',
  anchorLabel: 'Anker',
  catenaryCurveLabel: 'Kettingboog',
  swingCircleLabel: 'Zwaaicirkel',
};

const faq: AnchorScopeLocaleContent['faq'] = [
  {
    question: 'Wat is de scope verhouding bij het ankeren?',
    answer: 'Scope is de verhouding tussen de uitgevierde kettinglengte en de totale verticale afstand van de bodem tot de boegrol.',
  },
  {
    question: 'Waarom moeten vrijboord en getij worden meegerekend?',
    answer: 'De dieptemeter meet alleen onder de kiel. Het boegbeslag en het getij vergroten de werkelijke hoogte aanzienlijk.',
  },
  {
    question: 'Wat is het verschil in ratio tussen ketting en lijn?',
    answer: 'Ketting vormt een doorhangende boog (4:1 tot 5:1). Lichte lijn trekt strak en vereist 7:1 tot 10:1.',
  },
  {
    question: 'Hoe wordt de zwaaicirkel berekend?',
    answer: 'Via de stelling van Pythagoras bereken je de horizontale ankerlijn, plus de scheepslengte en 3 tot 5 meter reserve.',
  },
  {
    question: 'Welke invloed heeft de zeebodem op ankerkracht?',
    answer: 'Zand en klei bieden de beste houvast. Modder en wier vereisen extra ketting of een andere ankerbaai.',
  },
  {
    question: 'Wat is de functie van een snubber of rekkabel?',
    answer: 'Een snubber ontlast de ankerlier van schokbelasting door golven en dempt geluid aan boord.',
  },
];

const howTo: AnchorScopeLocaleContent['howTo'] = [
  {
    name: 'Diepte en boeghoogte bepalen',
    text: 'Noteer de kaartdiepte en tel daar de hoogte van de boegrol boven water bij op.',
  },
  {
    name: 'Getijverschil optellen',
    text: 'Controleer de getijdentabel voor de maximale waterstijging tijdens het verblijf.',
  },
  {
    name: 'Lijntype en windkracht kiezen',
    text: 'Selecteer ketting of lijn en pas de veiligheidsfactor aan op de windvoorspelling.',
  },
  {
    name: 'Ketting steken en anker zetten',
    text: 'Vier de berekende lengte en zet het anker vast met gecontroleerd achteruitgas.',
  },
];

const seo: AnchorScopeLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Ankerlengte en Zwaaicirkel Berekening voor Veilig Ankeren',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Goed ankeren is essentieel voor de veiligheid van schip en bemanning. Een te korte ankerlijn is de hoofdoorzaak van krabbende ankers. Met de juiste <strong>scope verhouding</strong> ligt uw jacht stevig en betrouwbaar.',
  },
  {
    type: 'title',
    text: 'Bepaling van de Totale Verticale Hoogte',
    level: 3,
  },
  {
    type: 'list',
    items: [
      '<strong>Kaartdiepte:</strong> Diepte op het ankertijdstip inclusief diepgang.',
      '<strong>Boeg Vrijboord:</strong> Afstand van het wateroppervlak tot de boegrol.',
      '<strong>Getijverschil:</strong> Maximale stijging bij hoogwater.',
    ],
  },
  {
    type: 'title',
    text: 'Aanbevolen Scope Verhoudingen',
    level: 3,
  },
  {
    type: 'table',
    headers: ['Type Ankergeschirr', 'Rustig Weer (<15 kn)', 'Matige Wind (15-25 kn)', 'Stormachtig (>30 kn)'],
    rows: [
      ['<strong>Volledig Ketting</strong>', 'Ratio 4:1', 'Ratio 5:1', 'Ratio 7:1'],
      ['<strong>Combinatie Lijn-Ketting</strong>', 'Ratio 5:1', 'Ratio 7:1', 'Ratio 8:1 tot 10:1'],
      ['<strong>Volledig Lijn</strong>', 'Ratio 7:1', 'Ratio 8:1', 'Ratio 10:1 tot 12:1'],
    ],
  },
  {
    type: 'tip',
    title: 'Ankerlier Beschermen',
    html: 'Laat de ankerkracht nooit rechtstreeks op de nestenschijf van de lier staan. Gebruik altijd een ontlastende snubber op de boegbolder.',
  },
  {
    type: 'paragraph',
    html: 'Controleer de verwachting en de werkelijke zee voordat je vertrekt.',
  },
  {
    type: 'paragraph',
    html: 'Controleer de dieptemarge en houd een veilige reserve aan.',
  },
  {
    type: 'paragraph',
    html: 'Noteer de invoer zodat je de berekening later kunt herhalen.',
  },
  {
    type: 'paragraph',
    html: "Vergelijk meerdere scenario's wanneer wind of stroom verandert.",
  },
  {
    type: 'paragraph',
    html: 'De berekening helpt bij de planning maar vervangt geen observatie aan boord.',
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
    name: `Handleiding: ${title}`,
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
