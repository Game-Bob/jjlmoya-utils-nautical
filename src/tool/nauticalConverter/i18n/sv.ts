import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { NauticalConverterUI, NauticalConverterLocaleContent } from '../index';

const slug = 'nautiska-enheter-omvandlare';
const title = 'Nautisk Enhetsomvandlare';
const description =
  'Omvandla sjömil, knop, famnar och atmosfäriskt tryck. Inkluderar interaktiv Beaufort-skala för vindhastighet.';

const ui: NauticalConverterUI = {
  distanceCategoryLabel: 'Distans',
  speedCategoryLabel: 'Hastighet',
  depthCategoryLabel: 'Djup',
  pressureCategoryLabel: 'Tryck',
  nmLabel: 'Sjömil (nm)',
  kmLabel: 'Kilometer (km)',
  miLabel: 'Engelsk mil (mi)',
  cableLabel: 'Kabellängd',
  knLabel: 'Knop (kn)',
  kmhLabel: 'km/h',
  msLabel: 'm/s',
  mphLabel: 'mph',
  brozaLabel: 'Famn',
  mLabel: 'Meter (m)',
  ftLabel: 'Fot (ft)',
  mbarLabel: 'Millibar (mbar)',
  mmhgLabel: 'mmHg',
  inhgLabel: 'inHg',
  atmLabel: 'Atmosfär (atm)',
  windSeaLabel: 'Sjötillstånd',
  forceLabel: 'Styrka',
  effectLabel: 'Effekt',
  copyLabel: 'Kopiera värde',
  faqTitle: 'Vanliga Frågor': 'Bibliografi',
};

const faq: NauticalConverterLocaleContent['faq'] = [
  {
    question: 'Hur många kilometer går det på en sjömil?',
    answer: 'En sjömil är exakt 1,852 kilometer, eller 1852 meter. Detta mått motsvarar en bågminut av latitud på jordens yta.',
  },
  {
    question: 'Vad är skillnaden mellan en knop och en kilometer i timmen?',
    answer: 'En knop motsvarar 1,852 km/h, eftersom en knop är en sjömil per timme. För att omvandla knop till km/h multiplicerar du helt enkelt med 1,852.',
  },
  {
    question: 'Varför används sjömil istället för kilometer till sjöss?',
    answer: 'Eftersom en sjömil motsvarar en bågminut av latitud, vilket förenklar navigationsberäkningar med sjökort och kompass avsevärt. En förändring av en bågminut i latitud motsvarar exakt en sjömil.',
  },
  {
    question: 'Vad är Beaufort-skalan?',
    answer: 'Det är en empirisk skala som relaterar vindhastighet till observerbara effekter på sjön. Den sträcker sig från 0 (lugnt) till 12 (orkan) och är oumbärlig för kust- och havnavigering.',
  },
  {
    question: 'Vilken tryckenhet används inom marin meteorologi?',
    answer: 'Inom marin meteorologi används främst millibar (mbar) eller dess motsvarighet hektopascal (hPa). Normalt atmosfäriskt tryck vid havsytan är 1013,25 mbar.',
  },
  {
    question: 'Hur många fot går det på en famn?',
    answer: 'En famn är exakt 6 fot, vilket är 1,8288 meter. Den används främst i engelskspråkiga länder för att ange djup på äldre sjökort.',
  },
];

const howTo: NauticalConverterLocaleContent['howTo'] = [
  {
    name: 'Välj omvandlingskategori',
    text: 'Klicka på en av de fyra flikarna: Distans, Hastighet, Djup eller Tryck beroende på vilken storhet du vill omvandla.',
  },
  {
    name: 'Ange värdet i valfritt fält',
    text: 'Skriv in siffran i den enhet du känner till. Alla andra enheter uppdateras automatiskt i realtid.',
  },
  {
    name: 'Se Beaufort-skalan (hastighet)',
    text: 'När du anger en hastighet i hastighetsfliken visas ett kort med motsvarande Beaufort-styrka och förväntat sjötillstånd.',
  },
  {
    name: 'Kopiera resultatet',
    text: 'Använd kopieringsknappen bredvid valfritt fält för att kopiera värdet till urklipp.',
  },
];

const seo: NauticalConverterLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Betydelsen av precision i nautiska enheter',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Att navigera på havet kräver ett eget språk, ett mätsystem som förfinats under århundraden av maritim utforskning. Nautiska enheter är inte en historisk kuriositet utan matematiskt sammanhängande verktyg anpassade till jordens geometri och navigatörens praktiska behov.',
  },
  {
    type: 'paragraph',
    html: 'Till skillnad från på land, där ett fel på några meter sällan får allvarliga konsekvenser, kan en felaktig omvandling till sjöss innebära skillnaden mellan att ankra på säkert vatten eller att gå på grund på ett rev. Precision i enheter är inte en akademisk fråga: det är navigation.',
  },
  {
    type: 'paragraph',
    html: 'När vi rör oss bort från kusten gör bristen på visuella referenser den beräknade positionen till den enda verklighet vi kan agera utifrån. Att veta hur man omvandlar exakt mellan sjömil, kilometer, knop och meter är inte valfritt för den ansvarsfulle navigatören.',
  },
  {
    type: 'title',
    text: 'Varför använder vi sjömil istället för kilometer?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Svaret ligger i jordens form. En <strong>sjömil</strong> motsvarar exakt en bågminut av latitud på jordens yta, det vill säga 1852 meter. Denna direkta koppling mellan vinkelmått och linjärt avstånd är nyckeln till dess universella användning i navigering.',
  },
  {
    type: 'paragraph',
    html: 'Genom att använda denna enhet motsvarar en förändring av en bågminut i latitud på ett sjökort alltid exakt en tillryggalagd sjömil. Detta förenklar beräkningar av position, hastighet och ankomsttid enormt utan behov av extra omvandlingsfaktorer.',
  },
  {
    type: 'title',
    text: 'Hastighet till sjöss: Knop',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>Knop</strong> är en enhet för hastighet som motsvarar en sjömil per timme. Namnet kommer från den gamla tekniken att mäta hastighet genom att kasta en träbit bunden vid ett rep med knopar på regelbundna avstånd i vattnet och räkna hur många knopar som passerade genom fingrarna under en fast tid.',
  },
  {
    type: 'paragraph',
    html: 'Idag, även om vi använder GPS-satelliter och sofistikerade elektroniska system, förblir knopen standardenheten inom internationell luftfart och sjöfart. En knop motsvarar 1,852 km/h eller 0,514 m/s.',
  },
  {
    type: 'title',
    text: 'Djup och ankring: Famnar, Meter och Fot',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'I den nautiska världen är djupet inte bara en siffra: det är skillnaden mellan en säker ankring och en grundstötning. Historiskt sett var <strong>famnen</strong> (1,8288 meter eller exakt 6 fot) den dominerande enheten för att mäta djup i den engelskspråkiga världen.',
  },
  {
    type: 'paragraph',
    html: 'Globaliseringen och teknikutvecklingen har dock infört en konstant användning av meter på de flesta moderna sjökort och ekolod. Den moderne navigatören måste vara bekväm med att växla mellan famnar, meter och fot, särskilt när man konsulterar gamla sjökort eller instrument kalibrerade i brittiska enheter.',
  },
  {
    type: 'title',
    text: 'Meteorologi och atmosfäriskt tryck',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'För en skeppare är barometern vädrets orakel. Atmosfäriskt tryck, mätt i <strong>millibar</strong> (mbar), är den mest tillförlitliga indikatorn på förestående väderförändringar. Ett snabbt fall i trycket förebådar ankomsten av hårda vindar och dåligt väder.',
  },
  {
    type: 'paragraph',
    html: 'Att förstå tryckvariationer är livsviktigt för varje navigatör. Normalt atmosfäriskt tryck vid havsytan är 1013,25 mbar (en atmosfär). Högre värden indikerar stabilt väder, medan lägre värden, särskilt om de faller snabbt, signalerar nalkandet av potentiellt farliga lågtryckssystem.',
  },
  {
    type: 'title',
    text: 'Vind- och sjöskalor: Från Beaufort till Douglas',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Vindhastighet i knop är en siffra som får liv när den kopplas till <strong>Beaufort-skalan</strong>. Denna empiriska skala, som utvecklades av den brittiske amiralen Francis Beaufort 1805, relaterar vindhastighet till observerbara effekter på både havsytan och på land.',
  },
  {
    type: 'list',
    items: [
      '<strong>Styrka 0-3 (0-10 kn):</strong> Lugna seglingsförhållanden, idealiskt för nybörjare eller familjeutflykter.',
      '<strong>Styrka 4-5 (11-21 kn):</strong> Idealisk seglingsvind för yachter, med måttliga vågor och vita gäss.',
      '<strong>Styrka 6-7 (22-33 kn):</strong> Frisk vind till hård vind. Erfarenhet och revning rekommenderas.',
      '<strong>Styrka 8+ (över 34 kn):</strong> Storm. Endast för erfarna navigatörer med lämpliga fartyg.',
    ],
  },
  {
    type: 'paragraph',
    html: 'På samma sätt klassificerar Douglas-skalan sjötillståndet i grader från 0 (blankt som en spegel) till 9 (fenomenalt), vilket gör att navigatören kan förutse förhållanden bortom horisonten baserat på väderrapporter.',
  },
  {
    type: 'tip',
    title: 'Säkerhetstips',
    html: 'När du använder denna omvandlare för att planera en resa, tänk alltid på att de faktiska förhållandena kan skilja sig från prognoserna. Konsultera officiella väderprognoser och underskatta aldrig havets förmåga att förändras snabbt.',
  },
  {
    type: 'title',
    text: 'Offlineplanering och rörlighet',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Det här verktyget är utformat för att fungera utan internetanslutning när det väl har laddats i webbläsaren, vilket gör det idealiskt för användning ombord där anslutningsmöjligheterna kan vara begränsade. Alla omvandlingar beräknas lokalt på enheten, utan att några data skickas till en server.',
  },
];

const schemas: NauticalConverterLocaleContent['schemas'] = [
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

export const content: NauticalConverterLocaleContent = {
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
