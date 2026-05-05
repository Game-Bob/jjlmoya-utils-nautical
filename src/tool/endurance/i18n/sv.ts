import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EnduranceUI, EnduranceLocaleContent } from '../index';

const slug = 'rackvidds-kalkylator';
const title = 'Kalkylator för Maritim Räckvidd';
const description =
  'Beräkna din maximala räckvidd och säkerhetsdistans baserat på bränsleförbrukning, tankkapacitet och marschfart. Bränslehantering för motorbåtar.';

const ui: EnduranceUI = {
  tankCapacityLabel: 'Tankkapacitet',
  mainTankLabel: 'Huvudtank',
  auxTankLabel: 'Extratank',
  currentFuelLabel: 'Befintligt Bränsle',
  seaConditionsLabel: 'Sjö- / Vindförhållanden',
  consumptionLabel: 'Teoretisk Förbrukning',
  cruiseSpeedLabel: 'Marschfart',
  reserveLabel: 'Reserv',
  fuelPriceLabel: 'Pris per Liter',
  maxRangeLabel: 'Maximal Räckvidd',
  realPerformanceLabel: 'Faktisk Prestanda',
  hoursLabel: 'Autonomitimmar',
  safeMilesLabel: 'Säkra Sjömil',
  tankValueLabel: 'Tankvärde',
  inverseCalcLabel: 'Omvänd Beräkning: Hur mycket behöver jag tanka?',
  desiredDistLabel: 'Önskad Distans',
  minFuelLabel: 'Minsta Bränslebehov',
  warningLabel: 'Kom ihåg: En reserv på 20 % är det absoluta minimum som rekommenderas för maritim säkerhet.',
  seaCalm: 'Lugnt (1.0x)',
  seaLight: 'Lätt sjögång (+15 %)',
  seaModerate: 'Måttlig sjögång (+30 %)',
  seaStorm: 'Storm (+60 %)',
};

const faq: EnduranceLocaleContent['faq'] = [
  {
    question: 'Hur beräknas räckvidden för en motorbåt?',
    answer: 'Räckvidden beräknas genom att dividera det tillgängliga bränslet med timförbrukningen för att få totalt antal timmar, och sedan multiplicera den tiden med marschfarten. Verktyget tillämpar även en sjögångsfaktor för att återspegla faktiska navigeringsförhållanden.',
  },
  {
    question: 'Varför rekommenderas en reserv på 20 % vid maritim navigering?',
    answer: 'En reserv på 20 % är en maritim säkerhetsstandard som säkerställer tillräckligt med bränsle vid oförutsedda händelser: motström, omvägar på grund av dåligt väder, fel i förbrukningsuppskattningar eller behovet av att assistera ett annat fartyg. Många försäkringsbolag och hamnmyndigheter anser att det är obligatoriskt.',
  },
  {
    question: 'Vad är L/NM-prestanda och hur påverkar det planeringen?',
    answer: 'Prestandat i liter per sjömil (L/NM) är motorns faktiska effektivitet under sjöförhållanden. Till skillnad från timförbrukning kan du med detta beräkna exakt hur mycket bränsle du behöver för att täcka en specifik distans, oavsett din hastighet.',
  },
  {
    question: 'Hur påverkar sjögången den faktiska förbrukningen?',
    answer: 'Sjögång ökar förbrukningen eftersom skrovet får arbeta hårdare mot vatten- och vindmotstånd. Vid lätt sjögång stiger förbrukningen med 15 %, vid måttlig sjögång med 30 %, och i storm kan den stiga med 60 % eller mer. Att ignorera denna faktor kan leda till att ett fartyg blir utan bränsle innan det når hamn.',
  },
];

const howTo: EnduranceLocaleContent['howTo'] = [
  {
    name: 'Ange din tankkapacitet',
    text: 'Ange liter för huvudtanken och extratanken om du har en. Verktyget beräknar den aktuella fyllnadsgraden.',
  },
  {
    name: 'Ange befintlig bränslenivå',
    text: 'Ange de faktiska literna du har just nu. Du kan mäta dem med båtens nivåmätare eller uppskatta dem från den senaste tankningen.',
  },
  {
    name: 'Anpassa navigeringsförhållanden',
    text: 'Välj den förväntade sjögången för din överfart. Sjöfaktorn korrigerar den teoretiska förbrukningen till den förväntade faktiska förbrukningen.',
  },
  {
    name: 'Ange förbrukning och marschfart',
    text: 'Använd tillverkarens data eller dina egna uppgifter för timförbrukning och den hastighet du vanligtvis navigerar med.',
  },
  {
    name: 'Kontrollera den säkra distansen och den omvända beräkningen',
    text: 'Verktyget visar hur många sjömil du säkert kan täcka och hur mycket bränsle du behöver för att nå en specifik destination.',
  },
];

const seo: EnduranceLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Bränslehantering och Räckvidd vid Motornavigering',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>Maritim räckvidd</strong> är en av de mest kritiska beräkningarna innan du sätter segel med en motorbåt. Att veta exakt hur många sjömil du kan täcka med tillgängligt bränsle är skillnaden mellan en planerad överfart och en nödsituation till sjöss.',
  },
  {
    type: 'paragraph',
    html: 'Denna räckviddskalkylator integrerar <strong>sjögångsfaktorn</strong>, procentandelen säkerhetsreserv och den omvända bränsleberäkningen så att bränslehanteringen blir komplett och tillförlitlig i alla situationer.',
  },
  {
    type: 'title',
    text: 'Den Gyllene Regeln: Tredjedelsregeln',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Den klassiska regeln för bränslehantering vid maritim navigering delar in tanken i tre lika delar för att alltid garantera en säkerhetsmarginal:',
  },
  {
    type: 'list',
    items: [
      '<strong>En tredjedel för utresan:</strong> Det bränsle som krävs för att nå den planerade destinationen.',
      '<strong>En tredjedel för hemresan:</strong> Bränsle för att ta sig tillbaka till avgångshamnen eller närmaste hamn.',
      '<strong>En tredjedel som reserv:</strong> Säkerhetsmarginalen för oförutsedda händelser, strömmar eller ogynnsamma förhållanden.',
    ],
  },
  {
    type: 'paragraph',
    html: 'I kalkylatorn kan du ställa in reservprocenten enligt dina egna kriterier, även om det <strong>aldrig rekommenderas att gå under 20 %</strong>. Med större tankar eller långa överfarter höjer många erfarna skeppare denna marginal till 30 % eller till och med 33 %.',
  },
  {
    type: 'title',
    text: 'Faktorer som påverkar Förbrukningen (l/h)',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Tillverkarens teoretiska förbrukning beräknas under ideala laboratorieförhållanden. I praktiken ändrar flera faktorer den <strong>faktiska bränsleförbrukningen</strong>. Skrovhastigheten är den mest avgörande: att navigera över den ekonomiska hastigheten kan fördubbla eller tredubbla förbrukningen per tillryggalagd sjömil.',
  },
  {
    type: 'table',
    headers: ['Navigeringsläge', 'Effekt på Räckvidden', 'Råd'],
    rows: [
      ['<strong>Behandlat Skrov</strong>', 'Minskar räckvidden med upp till 20 %', 'Rengör skrovet före säsongen'],
      ['<strong>Motström</strong>', 'Kan minska den effektiva hastigheten med 30 %', 'Beräkna alltid med hastighet över grund (SOG)'],
      ['<strong>Motvind</strong>', 'Ökar motstånd och förbrukning med 10-25 %', 'Använd faktorn för lätt eller måttlig sjögång'],
      ['<strong>Överlastning</strong>', 'Ökar djupgående och motstånd', 'Väg utrustning och proviant före beräkning'],
    ],
  },
  {
    type: 'title',
    text: 'Teknisk Ordlista för Räckvidd',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: 'Prestanda (L/NM)', definition: 'Liter bränsle som förbrukas per tillryggalagd sjömil. Det mest användbara måttet för planering av överfarter eftersom det kopplar förbrukning till faktiskt avstånd.' },
      { term: 'Marschfart', definition: 'Den optimala hastigheten där motorn erbjuder den bästa balansen mellan hastighet och förbrukning. Generellt mellan 70 % och 80 % av maximal effekt.' },
      { term: 'Kritisk Reserv', definition: 'Den procentandel av tanken som aldrig får förbrukas. Minst 20 % rekommenderas för att täcka oförutsedda händelser och förhindra att luft kommer in i bränslesystemet.' },
      { term: 'Specifik Förbrukning', definition: 'Gram bränsle per kilowattimme producerad effekt (g/kWh). Tekniskt motormått som gör det möjligt att jämföra effektivitet mellan olika framdrivningssystem.' },
    ],
  },
  {
    type: 'title',
    text: 'Faran med Slam och Rörelse',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'En vanlig källa till problem på fartyg med låga bränslenivåer är <strong>slam i tankens botten</strong>. När nivån sjunker för lågt kan sediment som samlats under åratal nå filtret och täppa till det, vilket lämnar motorn utan bränsle trots att mätaren visar några liter kvar.',
  },
  {
    type: 'paragraph',
    html: 'Båtens rörelse till sjöss med lite bränsle kan också orsaka problem: vätskan svänger med vågorna och kan tillfälligt få bränslepumpen att suga luft. Att behålla reserven säkerställer att detta inte händer i ett kritiskt ögonblick, såsom vid en hamnentré.',
  },
  {
    type: 'tip',
    title: 'Tips för Bränslebesparing',
    html: 'Att sänka hastigheten med 10-15 % under din vanliga marschfart kan förbättra effektiviteten med upp till 30 %. Om du har tid och vädret är gynnsamt är det alltid det mest ekonomiska och säkra beslutet att gå långsammare.',
  },
  {
    type: 'title',
    text: 'Skillnad mellan Sjömil (NM) och Kilometer',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'En <strong>sjömil</strong> motsvarar 1 852 meter (1,852 km) och är den universella distansenheten i maritim och aeronautisk navigering. Den baseras på en bågminut av en geografisk grad, vilket gör den idealisk för navigering med sjökort i geografiska koordinater. Hastighet i sjömil per timme kallas för knop (kn).',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Analog Visarmätare',
        description: 'Traditionellt flottörsystem',
        points: [
          'Låg kostnad och enkel installation',
          'Kräver ingen elektricitet för att fungera',
          'Onoggrann vid grov sjö på grund av bränslets rörelse',
          'Visar inte förbrukning eller beräknad räckvidd',
        ],
      },
      {
        title: 'Digital Flödeskalkylator',
        description: 'Elektroniska flödessensorer',
        highlight: true,
        points: [
          '1-2 % noggrannhet på faktisk förbrukning',
          'Visar räckvidd, förbrukning och kostnad i realtid',
          'Går att integrera med chartplottrar och NMEA 2000',
          'Kräver initial kalibrering och underhåll',
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
    name: `Hur man använder: ${title}`,
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
