import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SpeedConverterUI, SpeedConverterLocaleContent } from '../index';

const slug = 'hastighets-omvandlare-sv';
const title = 'Nautisk hastighetsomvandlare och Beaufortskalan';
const description =
  'Konvertera omedelbart mellan knop, km/h, m/s och mph. Inkluderar fullständig Beaufort-tabell med beskrivningar av sjötillstånd och vindeffekter.';

const beaufortData = [
  { force: 0, name: 'Stilla', sea: 'Spegelblank sjö', effect: 'Röken stiger rakt upp', kn: '0' },
  { force: 1, name: 'Lätt lufthav', sea: 'Små krusningar som fiskfjäll', effect: 'Röken visar vindriktningen', kn: '1-3' },
  { force: 2, name: 'Svag vind', sea: 'Små vågor, inga vita trösklar', effect: 'Vinden känns i ansiktet, löven prasslar', kn: '4-6' },
  { force: 3, name: 'Måttlig vind', sea: 'Topparna börjar brytas, enstaka vita gäss', effect: 'Löv och småkvistar i rörelse', kn: '7-10' },
  { force: 4, name: 'Frisk vind', sea: 'Små vågor blir långa, många vita gäss', effect: 'Damm och papper lyfts', kn: '11-16' },
  { force: 5, name: 'Styv vind', sea: 'Måttliga vågor, många vita skumkammar', effect: 'Små träd börjar svaja', kn: '17-21' },
  { force: 6, name: 'Hård vind', sea: 'Stora vågor börjar bildas, vita skumkammar överallt', effect: 'Svårt att använda paraply', kn: '22-27' },
  { force: 7, name: 'Meget hård vind', sea: 'Sjön tornar upp sig, skummet lägger sig i ränder', effect: 'Svårt att gå mot vinden', kn: '28-33' },
  { force: 8, name: 'Hård kuling', sea: 'Höga vågor, sjöryken minskar sikten', effect: 'Mycket svårt att gå', kn: '34-40' },
  { force: 9, name: 'Halv storm', sea: 'Mycket höga vågor, sjön börjar rulla', effect: 'Skador på hus kan förekomma', kn: '41-47' },
  { force: 10, name: 'Storm', sea: 'Exceptionellt höga vågor, havet helt vitt', effect: 'Träd rycks upp, omfattande skador', kn: '48-55' },
  { force: 11, name: 'Svår storm', sea: 'Enorma vågor, skum täcker havet', effect: 'Utbredda skador', kn: '56-63' },
  { force: 12, name: 'Orkan', sea: 'Luften fylld med skum och stänk', effect: 'Total ödeläggelse', kn: '64+' },
];

const ui: SpeedConverterUI = {
  knLabel: 'Knop (kt)',
  kmhLabel: 'Kilometer/timme',
  msLabel: 'Meter/sekund',
  mphLabel: 'Miles/timme',
  beaufortTitle: 'Beaufortskalan',
  forceLabel: 'Styrka',
  descriptionLabel: 'Beskrivning',
  knotsLabel: 'Knop',
  effectLabel: 'Visuell effekt',
  seaStateLabel: 'Sjötillstånd',
  windEffectLabel: 'Effekt på land',
  faqTitle: 'Vanliga frågor',
  bibliographyTitle: 'Bibliografi',
  beaufortDataJson: JSON.stringify(beaufortData),
};

const faq: SpeedConverterLocaleContent['faq'] = [
  {
    question: 'Varför mäts båtens hastighet i knop?',
    answer: 'Distansminuten per timme kallas knop. Ursprunget är historiskt: sjömän mätte fartygets fart genom att kasta ut en träbit i sjön som satt fast i ett rep med jämnt fördelade knutar. De räknade hur många knutar som passerade mellan fingrarna under en viss tid. Idag är det den internationella standardenheter för sjö- och luftfart.',
  },
  {
    question: 'Vad är Beaufortskalan och hur används den i navigering?',
    answer: 'Beaufortskalan är en empirisk skala som relaterar vindhastighet till observerade effekter till sjöss och till lands. Den utvecklades av den brittiska amiralen Francis Beaufort 1805 och sträcker sig från 0 (stilla) till 12 (orkan). Seglare använder den för att uppskatta vindstyrkan utan instrument genom att observera havets tillstånd.',
  },
  {
    question: 'Vad är skillnaden mellan SOG och STW i navigering?',
    answer: 'SOG (Speed Over Ground) är fartygets faktiska hastighet i förhållande till havsbotten, mätt med GPS. STW (Speed Through Water) eller loggfart är fartygets hastighet i förhållande till det omgivande vattnet. Skillnaden mellan dem speglar effekten av havsströmmar. SOG används för att planera ankomster och beräkna bränsle; STW används för att beräkna avdrift (leeway).',
  },
  {
    question: 'Hur många km/h är en knop?',
    answer: 'En knop motsvarar exakt 1,852 kilometer i timmen, vilket är längden på en distansminut (definierad som en bågminut av jordmeridianen). Därför motsvarar 10 knop 18,52 km/h, 20 knop 37,04 km/h och 30 knop 55,56 km/h.',
  },
];

const howTo: SpeedConverterLocaleContent['howTo'] = [
  {
    name: 'Ange hastigheten i valfri enhet',
    text: 'Skriv in hastighetsvärdet i motsvarande fält (knop, km/h, m/s eller mph) så uppdateras alla andra fält automatiskt.',
  },
  {
    name: 'Kontrollera motsvarande Beaufortstyrka',
    text: 'Beaufortkortet visar i realtid den vindstyrka som motsvarar den angivna hastigheten, med sjötillstånd och landeffekter.',
  },
  {
    name: 'Klicka på en rad i Beaufort-tabellen',
    text: 'Du kan direkt välja valfri Beaufortstyrka i tabellen nedan för att se dess minimihastighet i alla format.',
  },
  {
    name: 'Använd resultaten för att planera din navigering',
    text: 'Kombinera hastighets- och vindinformation för att avgöra om förhållandena är lämpliga för din typ av fartyg och planerad rutt.',
  },
];

const bibliography: SpeedConverterLocaleContent['bibliography'] = [
  {
    name: 'Met Office - The Beaufort Scale',
    url: 'https://www.metoffice.gov.uk/weather/guides/coast-and-sea/beaufort-scale',
  },
  {
    name: 'IMO - International Maritime Organization',
    url: 'https://www.imo.org/',
  },
];

const seo: SpeedConverterLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Guide till den nautiska hastighetsomvandlaren och Beaufortskalan',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Hastighet är en grundläggande datapunkt i marin navigering. Att veta hur många knop din båt gör, hur det översätts till kilometer i timmen för att planera en rutt, eller vilken Beaufortstyrka vinden har, är beräkningar som varje seglare behöver behärska.',
  },
  {
    type: 'paragraph',
    html: 'Denna nautiska hastighetsomvandlare låter dig omvandla mellan knop, km/h, m/s och mph omedelbart, samtidigt som den automatiskt identifierar motsvarande Beaufortstyrka med sjötillståndsbeskrivning och observerbara vindeffekter.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Standardenhet', value: 'Knop (kt)', icon: 'mdi:speedometer' },
      { label: 'Vindskala', value: 'Beaufort (0-12)', icon: 'mdi:weather-windy' },
      { label: 'Viktig omvandling', value: '1 kt = 1,85 km/h', icon: 'mdi:swap-horizontal' },
    ],
  },
  {
    type: 'title',
    text: 'Varför mäts hastighet i knop?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>Knop (kt)</strong> är den officiella enheten för hastighet inom sjö- och luftfart. Definitionen är exakt: en knop är lika med en distansminut per timme, där en distansminut (1852 m) definieras som en bågminut av jordmeridianen. Detta direkta samband med jordens geometri gör knop till en särskilt praktisk enhet för navigering, eftersom avstånd kan uppskattas direkt på ett sjökort utan omvandling.',
  },
  {
    type: 'paragraph',
    html: 'Historiskt mätte sjömän fartygets fart med <em>skäddloggen</em>: en rätvinklig träskiva som kastades i sjön, fäst vid en lina med knutar på var 14,4 meter. Genom att räkna antalet knutar som löpte ut under 30 sekunder fick man farten, vilket gav upphov till den term vi använder idag.',
  },
  {
    type: 'title',
    text: 'Beaufortskalan: Sjömannens öga',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>Beaufortskalan</strong> utvecklades 1805 av den brittiske amiralen Sir Francis Beaufort som en empirisk metod för att klassificera vindstyrka utifrån observerbara effekter, utan instrumentering. Den var ursprungligen avsedd för att uppskatta hur mycket segel ett fartyg kunde föra, men är idag en universell referens inom marin meteorologi.',
  },
  {
    type: 'paragraph',
    html: 'Skalan sträcker sig från <strong>Styrka 0</strong> (stilla, spegelblank sjö) till <strong>Styrka 12</strong> (orkanförhållanden med vågor över 14 meter och luft fylld med skum och stänk). För fritidsseglare går de kritiska gränserna vanligtvis vid Styrka 6 (hård vind, 22-27 knop) för små båtar och Styrka 7-8 för havsgående yachter.',
  },
  {
    type: 'table',
    headers: ['Beaufortstyrka', 'Beskrivning', 'Sjöförhållanden'],
    rows: [
      ['0', 'Stilla', 'Spegelblank sjö'],
      ['3', 'Måttlig vind', 'Vita gäss börjar förekomma'],
      ['6', 'Hård vind', 'Stora vågor, vita skumkammar, sjörök möjlig'],
      ['9', 'Halv storm', 'Mycket höga vågor, sikten minskar av skum och stänk'],
      ['12', 'Orkan', 'Luften helt fylld av skum, havet helt vitt'],
    ],
  },
  {
    type: 'title',
    text: 'Nautisk hastighetsordlista',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: 'Knop (kt)', definition: 'Hastighetsenhet lika med en distansminut per timme (1852 m/h). Internationell standard inom sjöfart och flyg.' },
      { term: 'SOG (Speed Over Ground)', definition: 'Fartygets faktiska fart över havsbotten, mätt med GPS. Inkluderar effekten av havsströmmar.' },
      { term: 'Loggfart (STW)', definition: 'Fartygets hastighet i förhållande till det omgivande vattnet. Inkluderar inte strömeffekter; viktig för att beräkna avdrift.' },
      { term: 'Skenbar vind', definition: 'Vinden som upplevs ombord, summan av den sanna vinden och fartvinden från fartygets rörelse. Skiljer sig alltid från den sanna vinden i styrka och riktning.' },
    ],
  },
  {
    type: 'title',
    text: 'Snabbformler för omvandling',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'För att konvertera hastigheter manuellt när du inte har tillgång till en digital omvandlare, använd dessa snabba uppskattningar som varje seglare bör kunna utantill:',
  },
  {
    type: 'list',
    items: [
      '<strong>Knop till km/h:</strong> Multiplicera knop med 1,852. Snabb uppskattning: knop x 2, minus 8%%. Till exempel, 10 kt ≈ 20 - 1,6 = 18,4 km/h.',
      '<strong>Knop till mph:</strong> Multiplicera knop med 1,15. Uppskattning: knop + 15%%. Till exempel, 20 kt ≈ 23 mph.',
      '<strong>Knop till m/s:</strong> Multiplicera knop med 0,514. Snabb uppskattning: dela knop med 2. Till exempel, 10 kt ≈ 5 m/s (exakt: 5,14 m/s).',
    ],
  },
  {
    type: 'tip',
    title: 'Säkerhet och klimatologi',
    html: 'Innan du ger dig ut, konsultera alltid sjöväderprognosen. Beaufort 4-5 är hanterbart för de flesta fritidsbåtar; från Styrka 6 och uppåt bör du seriöst överväga att skjuta upp avresa om du saknar tillräcklig erfarenhet eller om din båt inte är rustad för de förhållandena.',
  },
  {
    type: 'title',
    text: 'Utrustningsjämförelse',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Digital anemometer',
        description: 'Elektroniskt instrument för exakt mätning av vindhastighet.',
        icon: 'mdi:speedometer',
        points: [
          'Noggrannhet på ±2%% under normala förhållanden',
          'Kräver strömförsörjning eller batterier',
          'Kan haverera under extrema förhållanden',
          'Omedelbar avläsning och dataloggning',
        ],
      },
      {
        title: 'Beaufortobservation',
        description: 'Visuell uppskattning av vindstyrkan från observerbara effekter till sjöss och på land.',
        icon: 'mdi:eye-outline',
        highlight: true,
        points: [
          'Kräver inga instrument alls',
          'Tillgänglig i alla förhållanden',
          'Tillräcklig noggrannhet för säkerhetsbeslut',
          'Grundläggande färdighet för den erfarne navigatören',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Navigering och ruttplanering',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Vid planering av en rutt avgör din fart framkomsttid (ETA) och bränsleförbrukning för motorbåtar. För en segelyacht beror farten även på vindstyrka och vindriktning. Genom att känna till den prognotiserade Beaufortstyrkan kan du förutse om du kan segla eller om motorn behövs.',
  },
  {
    type: 'paragraph',
    html: 'Inom kappsegling är omvandlingen mellan knop och meter per sekund särskilt användbar för att beräkna VMG (Velocity Made Good) och för att analysera polärdiagram. Meteorologer och numeriska prognosmodeller anger vanligtvis vind i m/s eller km/h, så konvertering till knop är ett rutinmoment i taktisk planering.',
  },
];

const schemas: SpeedConverterLocaleContent['schemas'] = [
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

export const content: SpeedConverterLocaleContent = {
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
