import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TideCalculatorUI, TideCalculatorLocaleContent } from '../index';

const slug = 'tidvattens-kalkylator';
const title = 'Kalkylator för tidvattenhöjd';
const description =
  'Uppskatta vattennivån vid valfri tidpunkt i tidvattencykeln med den nautiska tolftedelsregeln. Idealisk för kustnära planering och studier för förarintyg.';

const ui: TideCalculatorUI = {
  parametersLabel: 'Parametrar',
  highTideLabel: 'Högvatten',
  lowTideLabel: 'Lågvatten',
  targetTimeLabel: 'Frågetid',
  estimatedHeightLabel: 'Uppskattad höjd',
  metersLabel: 'meter',
  amplitudeLabel: 'Amplitud',
  durationLabel: 'Varaktighet',
  tableBreakdownLabel: 'Uppdelning i tolftedelar',
  tableHourLabel: 'Tid',
  tableStateLabel: 'Tillstånd',
  tableStartLabel: 'Start',
  tableEndLabel: 'Slut',
  statusUpLabel: 'Stigande',
  statusDownLabel: 'Sjunkande',
  statusOutOfRange: 'Utanför intervallet',
  faqTitle: 'Vanliga frågor': 'Bibliografi',
};

const faq: TideCalculatorLocaleContent['faq'] = [
  {
    question: 'Vad är tolftedelsregeln och vad används den till?',
    answer:
      'Tolftedelsregeln är en förenklad matematisk metod som används inom navigering för att uppskatta tidvattenhöjden vid vilken tidpunkt som helst mellan hög- och lågvatten. Den baseras på observationen att tidvattenflödet följer en ungefärlig sinuskurva, och delar upp det totala intervallet i 12 delar över 6 timmar (1/12, 2/12, 3/12, 3/12, 2/12, 1/12).',
  },
  {
    question: 'Är denna metod pålitlig för verklig navigering?',
    answer:
      'Det är en mycket användbar teoretisk uppskattningsmetod för snabb planering och utbildningsändamål. Den tar dock inte hänsyn till meteorologiska faktorer som lufttryck eller vind, vilket kan ändra havsnivån med flera decimeter. För verklig navigering, konsultera alltid officiella tidvattentabeller.',
  },
  {
    question: 'Vilka data behöver jag för att beräkna tidvattenhöjden?',
    answer:
      'Du behöver tid och höjd (i meter) för högvatten och lågvatten som ligger närmast den tidpunkt du vill fråga efter. Dessa data finns i tidvattenalmanackor eller marina väderappar.',
  },
  {
    question: 'Varför stiger inte tidvattnet alltid med samma hastighet?',
    answer:
      'På grund av trögheten i stora vattenmassor och konfigurationen av havets bäcken. Tidvattnet börjar stiga långsamt efter lågvatten, når maximal hastighet under mittentimmarna (timmarna 3/12 och 4/12) och saktar ner igen när det närmar sig högvatten.',
  },
  {
    question: 'Hur påverkar lufttrycket tidvattnet?',
    answer:
      'Högtryck (anticyklon) trycker ner vattnet, vilket minskar den faktiska höjden. Lågtryck (depression) låter vattnet stiga högre. Som en allmän regel motsvarar en variation på 1 hPa från medelvärdet ungefär 1 cm förändring i havsnivån.',
  },
  {
    question: 'Vad är tidvattensintervall (amplitude)?',
    answer:
      'Det är den vertikala skillnaden i höjd mellan ett högvatten och det omedelbart föregående eller efterföljande lågvattnet. Detta mått varierar beroende på månfas (springflod och nipflod) och geografiskt läge.',
  },
];

const howTo: TideCalculatorLocaleContent['howTo'] = [
  {
    name: 'Identifiera hög- och lågvatten',
    text: 'Konsultera din tidvattenalmanacka för att få tider och höjder för den tidvattencykel du är intresserad av.',
  },
  {
    name: 'Ange data i kalkylatorn',
    text: 'Skriv in tid och höjd för högvatten och lågvatten. Verktyget beräknar varaktighet och amplitud automatiskt.',
  },
  {
    name: 'Ställ in frågetid',
    text: 'Justera tiden för vilken du vill veta vattennivån. Du kommer att se den exakta punkten markerad i diagrammet.',
  },
  {
    name: 'Analysera tolftedelstabellen',
    text: 'Granska uppdelningen timme för timme för att förstå hur vattennivån kommer att variera under hela perioden.',
  },
];

const seo: TideCalculatorLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Bemästra tidvattnet: Tolftedelsregeln i navigering',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Kustnavigering och anlöp till hamnar med begränsat djup kräver exakt kännedom om vattennivån vid varje tidpunkt. Även om digitala appar och GPS som tillhandahåller realtidsdata finns tillgängliga idag, förblir <strong>tolftedelsregeln</strong> ett grundläggande verktyg i utbildningen av alla skeppare. Denna regel är en matematisk uppskattningsmetod som låter dig beräkna, ungefärligt och utan komplexa räknare, tidvattenhöjden vid valfri tidpunkt i en tidvattencykel.',
  },
  {
    type: 'title',
    text: 'Vad exakt är tolftedelsregeln?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Tolftedelsregeln baseras på observationen att tidvattenflödet inte är konstant. Vattnet stiger eller sjunker inte med samma hastighet under de ungefär sex timmarna mellan högvatten och lågvatten. Istället följer rörelsen en sinuskurva. Under den första timmen rör sig tidvattnet långsamt; det accelererar under mittentimmarna och saktar ner igen när det närmar sig nästa extrempunkt.',
  },
  {
    type: 'table',
    headers: ['Timme i cykeln', 'Proportion', 'Flödestillstånd'],
    rows: [
      ['<strong>1:a timmen</strong>', '1/12 av intervallet', 'Långsam start (Dövatten)'],
      ['<strong>2:a timmen</strong>', '2/12 av intervallet', 'Accelererande flöde'],
      ['<strong>3:e timmen</strong>', '3/12 av intervallet', 'Maximalt flöde (Stark ström)'],
      ['<strong>4:e timmen</strong>', '3/12 av intervallet', 'Ihållande flöde'],
      ['<strong>5:e timmen</strong>', '2/12 van intervallet', 'Märkbar inbromsning'],
      ['<strong>6:e timmen</strong>', '1/12 av intervallet', 'Slutlig inbromsning (Mot dövatten)'],
    ],
  },
  {
    type: 'title',
    text: 'Tekniska begränsningar: Faktorer som påverkar det verkliga tidvattnet',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: 'Lufttryck', definition: 'Lågtryck höjer havsnivån; ett högtryck sänker den. Som en allmän regel motsvarar ~1 cm variation per hPa skillnad från medelvärdet.' },
      { term: 'Kustvind', definition: 'Ihållande pålandsvindar kan dämma upp vatten över de nivåer som förutsägs i tidvattentabellerna.' },
      { term: 'Lokal topografi', definition: 'Kustens form, havsbottnens djup och förekomsten av flodmynningar kan avsevärt fördröja eller påskynda tidvattenflödet.' },
    ],
  },
  {
    type: 'tip',
    title: 'Säkerhetsmeddelande',
    html: 'Detta verktyg använder en matematisk uppskattningsmetod. Det tar inte hänsyn till meteorologiska faktorer eller lokal topografi. För verklig navigering, konsultera alltid officiella tidvattentabeller.',
  },
  {
    type: 'title',
    text: 'Nyckelbegrepp för nya sjömän',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Tidvattensintervall',
        definition: 'Vertikal skillnad mellan högvatten och lågvatten. I Biscayabukten kan det vara flera meter; i Medelhavet är det nästan obetydligt.',
      },
      {
        term: 'Tidvattnets varaktighet',
        definition: 'Tidsintervall mellan högvatten och nästa lågvatten. Vanligtvis runt 6 timmar och 12 minuter (semi-diurnal cykel).',
      },
      {
        term: 'Sjökortsplan (Chart datum)',
        definition: 'Referensnivå från vilken alla djup på sjökort mäts. Faktiska djup är nästan aldrig mindre än de angivna.',
      },
    ],
  },
];

const schemas: TideCalculatorLocaleContent['schemas'] = [
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
    name: `Hur man använder: ${title}`,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
  } as WithContext<HowTo>,
];

export const content: TideCalculatorLocaleContent = {
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
