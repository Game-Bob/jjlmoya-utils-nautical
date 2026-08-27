import { bibliography } from '../bibliography';
import type { HullSpeedLocaleContent, HullSpeedUI } from '../index';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

const slug = 'calcolatore-velocita-scafo';
const title = 'Calcolatore di velocità dello scafo';
const description =
  'Trova la velocità di scafo teorica dalla lunghezza al galleggiamento, confronta un log e vedi quando uno scafo a dislocamento scala la propria onda di prua.';

const ui: HullSpeedUI = {
  metric: 'Metrico',
  imperial: 'Imperiale',
  unitGroup: 'Unità',
  sceneLabel: 'Galleggiamento e onda di prua',
  hullSpeedLabel: 'Velocità di scafo',
  knotsUnit: 'kn',
  kmhUnit: 'km/h',
  mphUnit: 'mph',
  ratioLabel: 'S/L',
  froudeLabel: 'Fr',
  lwlLabelMetric: 'Lunghezza al galleggiamento',
  lwlLabelImperial: 'Lunghezza al galleggiamento',
  lwlUnitM: 'm',
  lwlUnitFt: 'ft',
  observedLabel: 'Velocità al log',
  observedHint: 'Lascia 0 per disegnare l onda teorica. Inserisci un log per vedere se sei ancora seduto nel cavo.',
  stretchHint: 'Trascina lo scafo per allungare il galleggiamento',
  hullKindLabel: 'Forma di scafo',
  displacement: 'Dislocamento',
  semi: 'Semidislocante',
  planing: 'Planante',
  boatsLabel: 'Galleggiamenti di esempio',
  dinghy: 'Dinghy',
  daysailer: 'Daysailer',
  cruiser: 'Crociera',
  bluewater: 'Daltura',
  workboat: 'Lavoro',
  bandBelow: 'Ancora un onda corta',
  bandNear: 'Vicino alla barriera d onda',
  bandAt: 'Sull onda di prua',
  bandAbove: 'Cerca di scalare l onda',
  bandPlane: 'In planata, oltre la velocità di scafo',
  planingNote:
    'Uno scafo planante può lasciarsi alle spalle quest onda. La velocità di scafo è un riferimento, non un muro.',
  displacementNote:
    'Uno scafo a dislocamento paga caro quando raggiunge la propria scia. Trattala come tetto pratico, non come bersaglio GPS.',
  semiNote:
    'I semidislocanti possono superare un po il rapporto classico con abbastanza potenza, a costo di un salto netto di resistenza.',
  waveLegend: 'Onda di prua',
  waterLegend: 'Galleggiamento',
  markLegend: 'Velocità di scafo',
  faqTitle: 'Domande sulla velocità di scafo',
  bibliographyTitle: 'Riferimenti',
};

const faq: HullSpeedLocaleContent['faq'] = [
  {
    question: 'Che cos è la velocità di scafo di una barca a vela?',
    answer:
      'È la velocità a cui uno scafo a dislocamento viaggia con un onda di prua lunga quasi quanto il proprio galleggiamento. In unità nautiche si stima come 1.34 volte la radice della lunghezza al galleggiamento in piedi. È una velocità critica, non un arresto fisico duro.',
  },
  {
    question: 'Come si calcola la velocità di scafo?',
    answer:
      'Converti il galleggiamento in piedi, prendi la radice e moltiplica per 1.34 per avere i nodi. Un galleggiamento di 10 m è circa 32.8 ft, quindi vicino a 7.7 kn. Lo stesso punto corrisponde a un numero di Froude vicino a 0.40.',
  },
  {
    question: 'La velocità di scafo vale per le plananti?',
    answer:
      'La formula descrive ancora l onda che lo scafo farebbe se restasse in dislocamento. Le plananti e molti semidislocanti sono nati per scalare quell onda. Usa il numero come riferimento e leggi la nota sulla forma.',
  },
  {
    question: 'Devo usare il galleggiamento o la lunghezza fuori tutto?',
    answer:
      'Usa la lunghezza al galleggiamento (LWL), la lunghezza immersa che genera davvero l onda. Fuori tutto, bompressi e sbalzi non fissano la lunghezza d onda. Misura la LWL in acqua, non il LOA del depliant.',
  },
];

const howTo: HullSpeedLocaleContent['howTo'] = [
  {
    name: 'Allunga il galleggiamento',
    text: 'Trascina lo scafo, sposta il rail del galleggiamento o scegli dal dinghy al battello da lavoro. La velocità di scafo è 1.34 volte la radice di quella lunghezza in piedi.',
  },
  {
    name: 'Scegli la forma di scafo',
    text: 'Dislocamento, semidislocante o planante cambia la chiglia e se la barca può uscire dalla propria onda.',
  },
  {
    name: 'Leggi il cavo',
    text: 'Alla velocità di scafo l onda di prua e quella di poppa distano un galleggiamento e la barca siede nel cavo. Quella è la barriera.',
  },
  {
    name: 'Confronta un log',
    text: 'Inserisci la velocità sull acqua. Un onda più corta significa che spingi ancora a buon mercato. Un onda più lunga significa che stai scalando il cavo.',
  },
];

const seo: HullSpeedLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Cosa ti sta dicendo davvero la velocità di scafo',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Uno scafo a dislocamento spinge un onda dalla prua e un altra dalla poppa. Quando quelle creste distano circa un galleggiamento, la barca viaggia con la propria scia. La potenza in più ammassa acqua invece di comprare velocità. Quella condizione è ciò che i marinai chiamano velocità di scafo.',
  },
  {
    type: 'paragraph',
    html: 'Il calcolatore usa il rapporto amatoriale usuale di 1.34 nodi per radice dei piedi di galleggiamento. Gli scafi fini e lunghi possono stare un po più in alto, i pontoni più in basso. Tratta il risultato come un segno di studio e confrontalo con un log vero.',
  },
  {
    type: 'title',
    text: 'Esempi di galleggiamento risolti',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Galleggiamento', 'Velocità di scafo', 'Barca tipica'],
    rows: [
      ['4.2 m / 13.8 ft', '5.0 kn', 'Dinghy'],
      ['6.5 m / 21.3 ft', '6.2 kn', 'Daysailer'],
      ['10 m / 32.8 ft', '7.7 kn', 'Crociera familiare'],
      ['13.5 m / 44.3 ft', '8.9 kn', 'Yacht daltura'],
      ['18 m / 59.1 ft', '10.3 kn', 'Piccolo battello da lavoro'],
    ],
  },
  {
    type: 'title',
    text: 'Come leggere l onda di prua',
    level: 2,
  },
  {
    type: 'list',
    items: [
      'Sotto il segno l onda è corta e la barca è ancora economica da spingere.',
      'Vicino al segno l onda di prua si fa ripida e carburante o vela comprano meno velocità.',
      'Sul segno la lunghezza d onda eguaglia la LWL. Uno scafo a dislocamento è alla barriera classica.',
      'Sopra, uno scafo a dislocamento scala la scia. Uno planante può essere già sollevato.',
    ],
  },
  {
    type: 'tip',
    title: 'Misura la LWL, non il LOA',
    html: 'La lunghezza da depliant include gli sbalzi. All onda importa il galleggiamento immerso. Se hai solo il LOA, la velocità di scafo calcolata sarà ottimista.',
  },
  {
    type: 'title',
    text: 'Il numero di Froude in una frase',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'La velocità di scafo è un impacco comodo di un numero di Froude vicino a 0.40: velocità divisa per la radice di gravità per lunghezza. Per questo i galleggiamenti più lunghi sono più veloci anche se la forma dello scafo resta uguale. Allungare la LWL è il modo pulito di alzare il limite di dislocamento; aggiungere cavalli no.',
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
    name: `Come usare ${title}`,
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
