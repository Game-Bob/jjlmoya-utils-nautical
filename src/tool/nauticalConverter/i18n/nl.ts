import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { NauticalConverterUI, NauticalConverterLocaleContent } from '../index';

const slug = 'nautische-eenheden-omzetter';
const title = 'Nautische Eenheden Omzetter';
const description =
  'Reken zeemijlen, knopen, vamen en luchtdruk om. Inclusief interactieve Beaufort-schaal voor windsnelheid.';

const ui: NauticalConverterUI = {
  distanceCategoryLabel: 'Afstand',
  speedCategoryLabel: 'Snelheid',
  depthCategoryLabel: 'Diepte',
  pressureCategoryLabel: 'Luchtdruk',
  nmLabel: 'Zeemijl (nm)',
  kmLabel: 'Kilometer (km)',
  miLabel: 'Mijl (mi)',
  cableLabel: 'Kabellente (cable)',
  knLabel: 'Knoop (kn)',
  kmhLabel: 'km/u',
  msLabel: 'm/s',
  mphLabel: 'mph',
  brozaLabel: 'Vaam',
  mLabel: 'Meter (m)',
  ftLabel: 'Voet (ft)',
  mbarLabel: 'Millibar (mbar)',
  mmhgLabel: 'mmHg',
  inhgLabel: 'inHg',
  atmLabel: 'Atmosfeer (atm)',
  windSeaLabel: 'Staat van de zee',
  forceLabel: 'Kracht',
  effectLabel: 'Effect',
  copyLabel: 'Waarde kopiëren',
  faqTitle: 'Veelgestelde Vragen',
  bibliographyTitle: 'Bibliografie',
};

const faq: NauticalConverterLocaleContent['faq'] = [
  {
    question: 'Hoeveel kilometer zitten er in een zeemijl?',
    answer: 'Eén zeemijl is exact gelijk aan 1,852 kilometer, ofwel 1852 meter. Deze maat komt overeen met één boogminuut van de breedtegraad op het aardoppervlak.',
  },
  {
    question: 'Wat is het verschil tussen een knoop and een kilometer per uur?',
    answer: 'Eén knoop is gelijk aan 1,852 km/u, aangezien een knoop één zeemijl per uur is. Om knopen naar km/u om te rekenen, vermenigvuldigt u simpelweg met 1,852.',
  },
  {
    question: 'Waarom worden op zee zeemijlen gebruikt in plaats van kilometers?',
    answer: 'Omdat een zeemijl overeenkomt met één boogminuut van de breedtegraad, wat navigatieberekeningen met kaart en kompas aanzienlijk vereenvoudigt. Een verandering van één boogminuut in breedtegraad is exact gelijk aan één zeemijl.',
  },
  {
    question: 'Wat is de schaal van Beaufort?',
    answer: 'Het is een empirische schaal die de windsnelheid relateert aan waarneembare effecten op zee. Deze loopt van 0 (windstilte) tot 12 (orkaan) en is essentieel voor kust- en oceaanvaart.',
  },
  {
    question: 'Welke eenheid voor luchtdruk wordt gebruikt in de maritieme meteorologie?',
    answer: 'De maritieme meteorologie gebruikt hoofdzakelijk de millibar (mbar) of de equivalente hectopascal (hPa). De normale luchtdruk op zeeniveau is 1013,25 mbar.',
  },
  {
    question: 'Hoeveel voet zitten er in een vaam?',
    answer: 'Eén vaam is exact gelijk aan 6 voet, dat is 1,8288 meter. Het wordt voornamelijk in Engelssprekende landen gebruikt om dieptes op oudere zeekaarten aan te geven.',
  },
];

const howTo: NauticalConverterLocaleContent['howTo'] = [
  {
    name: 'Selecteer de categorie voor omzetting',
    text: 'Klik op een van de vier tabbladen: Afstand, Snelheid, Diepte of Druk afhankelijk van de grootheid die u wilt omzetten.',
  },
  {
    name: 'Voer de waarde in een willekeurig veld in',
    text: 'Typ het getal in de eenheid die u kent. Alle andere eenheden worden automatisch in realtime bijgewerkt.',
  },
  {
    name: 'Raadpleeg de Beaufort-schaal (snelheid)',
    text: 'Wanneer u een snelheid invoert in het tabblad Snelheid, verschijnt er een kaart die de bijbehorende Beaufort-kracht en de verwachte staat van de zee toont.',
  },
  {
    name: 'Kopieer het resultaat',
    text: 'Gebruik de kopieerknop naast elk veld om de waarde naar het klembord te kopiëren.',
  },
];

const bibliography: NauticalConverterLocaleContent['bibliography'] = [
  {
    name: 'Instituto Hidrografico de la Marina',
    url: 'https://armada.defensa.gob.es/ihm/',
  },
  {
    name: 'NOAA - National Weather Service',
    url: 'https://www.weather.gov/mfl/beaufort',
  },
];

const seo: NauticalConverterLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Het belang van precisie bij nautische eenheden',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Het bevaren van de zee vereist een eigen taal, een systeem van metingen dat is verfijnd gedurende eeuwen van maritieme verkenning. Nautische eenheden zijn geen historisch eigenaardigheidje, maar wiskundig coherente instrumenten die zijn afgestemd op de geometrie van de aarde en de praktische behoeften van de navigator.',
  },
  {
    type: 'paragraph',
    html: 'Anders dan op het land, waar een fout van enkele meters zelden ernstige gevolgen heeft, kan op zee een verkeerde omzetting het verschil betekenen tussen veilig ankeren of vastlopen op een ondiepte. Precisie in eenheden is geen academische kwestie: het is navigatie.',
  },
  {
    type: 'paragraph',
    html: 'Wanneer we ons van de kust verwijderen, maakt het gebrek aan visuele referenties de berekende positie de enige realiteit waarop we kunnen handelen. Weten hoe je nauwkeurig omrekent tussen zeemijlen, kilometers, knopen en meters is niet optioneel voor de verantwoordelijke navigator.',
  },
  {
    type: 'title',
    text: 'Waarom gebruiken we zeemijlen in plaats van kilometers?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Het antwoord ligt in de vorm van de aarde zelf. Eén <strong>zeemijl</strong> is exact gelijk aan één boogminuut van de breedtegraad op het aardoppervlak, dat is 1852 meter. Deze directe correspondentie tussen hoekmeting en lineaire afstand is de sleutel tot het universele gebruik ervan in de navigatie.',
  },
  {
    type: 'paragraph',
    html: 'Door deze eenheid te gebruiken, komt een verandering van één boogminuut in breedtegraad op een zeekaart altijd exact overeen met één afgelegde zeemijl. Dit vereenvoudigt berekeningen van positie, snelheid en aankomsttijd enorm, zonder de noodzaak van extra omzettingsfactoren.',
  },
  {
    type: 'title',
    text: 'Snelheid op zee: De knoop',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'De <strong>knoop</strong> is de eenheid van snelheid die gelijk is aan één zeemijl per uur. De naam komt van de oude techniek om snelheid te meten door een houten plankje gebonden aan een touw met op regelmatige afstanden gelegde knopen in het water te gooien en te tellen hoeveel knopen er in een vastgestelde tijd door de vingers gleden.',
  },
  {
    type: 'paragraph',
    html: 'Tegenwoordig, hoewel we GPS-satellieten en geavanceerde elektronische systemen gebruiken, blijft de knoop de standaardeenheid in de internationale luchtvaart en zeevaart. Eén knoop staat gelijk aan 1,852 km/u of 0,514 m/s.',
  },
  {
    type: 'title',
    text: 'Diepte en ankeren: Vamen, Meters en Voet',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'In de nautische wereld is diepte niet louter een statistiek: het is het verschil tussen een veilig ankerplaats en het raken van de grond. Historisch gezien was de <strong>vaam</strong> (1,8288 meter of exact 6 voet) de overheersende eenheid voor het meten van dieptes in de Engelstalige wereld.',
  },
  {
    type: 'paragraph',
    html: 'Globalisering en technologie hebben echter het constante gebruik van meters geïntroduceerd op de meeste moderne kaarten en echoloden. De moderne navigator moet zich comfortabel voelen bij het schakelen tussen vamen, meters en voet, vooral bij het raadplegen van oude zeekaarten of instrumenten die zijn gekalibreerd in imperiale eenheden.',
  },
  {
    type: 'title',
    text: 'Meteorologie en luchtdruk',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Voor een schipper is de barometer het orakel van het weer. De luchtdruk, gemeten in <strong>millibar</strong> (mbar), is de meest betrouwbare indicator voor naderende weersveranderingen. Een snelle daling van de druk kondigt de komst van harde wind en slecht weer aan.',
  },
  {
    type: 'paragraph',
    html: 'Het begrijpen van drukvariaties is van vitaal belang voor elke navigator. De normale luchtdruk op zeeniveau is 1013,25 mbar (één atmosfeer). Hogere waarden duiden op stabiel weer, terwijl lagere waarden, vooral als ze snel dalen, het naderen van potentieel gevaarlijke lagedruksystemen signaleren.',
  },
  {
    type: 'title',
    text: 'Wind- en zeeschalen: Van Beaufort tot Douglas',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'De windsnelheid in knopen is een getal dat tot leven komt wanneer het geassocieerd wordt met de <strong>Beaufort-schaal</strong>. In 1805 ontwikkeld door de Britse admiraal Francis Beaufort, relateert deze empirische schaal windsnelheid aan waarneembare effecten op zowel het zeeoppervlak als op het land.',
  },
  {
    type: 'list',
    items: [
      '<strong>Kracht 0-3 (0-10 kn):</strong> Rustige zeilomstandigheden, ideaal voor beginners of familie-uitjes.',
      '<strong>Kracht 4-5 (11-21 kn):</strong> Ideale zeilwind voor jachten, met matige golven en schuimkoppen.',
      '<strong>Kracht 6-7 (22-33 kn):</strong> Harde wind tot bijna harde wind. Ervaring en reven aanbevolen.',
      '<strong>Kracht 8+ (meer dan 34 kn):</strong> Storm. Alleen voor ervaren navigatoren met geschikte schepen.',
    ],
  },
  {
    type: 'paragraph',
    html: 'Op vergelijkbare wijze classificeert de Douglas-schaal de staat van de zee in graden van 0 (glad als een spiegel) tot 9 (fenomenaal), waardoor de navigator condities achter de horizon kan anticiperen op basis van weerberichten.',
  },
  {
    type: 'tip',
    title: 'Veiligheidstip',
    html: 'Wanneer u deze omzetter gebruikt om een reis te plannen, houd er dan altijd rekening mee dat de werkelijke omstandigheden kunnen afwijken van de voorspellingen. Raadpleeg de officiële weersverwachting en onderschat nooit het vermogen van de zee om snel te veranderen.',
  },
  {
    type: 'title',
    text: 'Offline planning en mobiliteit',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Deze tool is ontworpen om zonder internetverbinding te werken zodra deze in de browser is geladen, waardoor hij ideaal is voor gebruik aan boord waar de connectiviteit beperkt kan zijn. Alle omzettingen worden lokaal op het apparaat berekend, zonder gegevens naar een server te verzenden.',
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
    name: `Gebruiksaanwijzing: ${title}`,
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
