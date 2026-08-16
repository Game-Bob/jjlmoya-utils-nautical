import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AnchorScopeLocaleContent } from '../entry';
import type { AnchorScopeUI } from '../ui';

const slug = 'calcolatore-lunghezza-catena-ancoraggio';
const title = 'Calcolatore Lunghezza Catena e Raggio di Ruota';
const description =
  'Calcola la lunghezza ottimale di catena e cima di ancoraggio, il rapporto di calumo e il raggio di ruota per un ancoraggio sicuro in base al fondale e alla marea.';

const ui: AnchorScopeUI = {
  parametersTitle: 'Parametri',
  waterDepthLabel: 'Profondità Fondale',
  bowHeightLabel: 'Bordo Libero di Prua',
  tideRangeLabel: 'Escursione di Marea',
  boatLengthLabel: 'Lunghezza Barca (LOA)',
  rodeTypeLabel: 'Linea di Ancoraggio',
  windConditionLabel: 'Vento e Previsioni',
  seabedTypeLabel: 'Tipo di Fondale',
  presetProtected: 'Cala Protetta',
  presetOpen: 'Costa Aperta',
  presetStorm: 'Avviso Burrasca',
  seabedTag: 'Coefficiente Tenuta Fondale',
  catenaryTag: 'Ammortizzazione Catenaria',
  unitM: 'm',
  unitFt: 'ft',
  unitMeters: 'Metrico (m)',
  unitFeet: 'Imperiale (ft)',
  allChainOption: 'Tutta Catena (Catenaria Pesante)',
  ropeChainOption: 'Mista Cima e Catena',
  allRopeOption: 'Tutta Cima Tessile',
  calmWindOption: 'Calma / Bava di Vento (< 15 nodi)',
  moderateWindOption: 'Brezza Moderata (15 - 25 nodi)',
  strongWindOption: 'Vento Forte / Burrasca (25 - 35 nodi)',
  stormWindOption: 'Tempesta (> 35 nodi)',
  sandOption: 'Sabbia (Tenuta Ottimale)',
  mudOption: 'Fango / Limo (Buona Tenuta)',
  clayOption: 'Argilla Compatta (Eccellente)',
  gravelOption: 'Ghiaia / Ciottoli (Moderata)',
  rockOption: 'Roccia (Rischio Incastro)',
  weedOption: 'Posidonia / Alghe (Scarsa)',
  resultsTitle: 'Analisi Ancoraggio e Dimensioni',
  scopeRatioLabel: 'Rapporto di Calumo (Scope)',
  totalDepthLabel: 'Altezza Verticale Totale',
  recommendedRodeLabel: 'Catena Consigliata da Calare',
  horizontalDistanceLabel: 'Distanza Orizzontale',
  swingRadiusLabel: 'Raggio di Ruota Stimato',
  minSafeRodeLabel: 'Minimo con Calma',
  heavyWeatherRodeLabel: 'Calumo per Maltempo',
  statusOptimalTitle: 'Ancoraggio Sicuro e Stabile',
  statusOptimalDesc: 'La lunghezza assicura una catenaria ammortizzante e tiro orizzontale sul fuso dell ancora.',
  statusCautionTitle: 'Calumo Accettabile: Monitorare Meteo',
  statusCautionDesc: 'Adeguato per brezza moderata. Filare più catena se il vento o il moto ondoso aumentano.',
  statusDangerTitle: 'Calumo Insufficiente: Rischio Spedo',
  statusDangerDesc: 'Rapporto critico. L ancora subisce trazione verso l alto con alto rischio di spedare.',
  adviceSand: 'La sabbia consente un ottima presa. Dare marcia indietro per fare testa con l ancora.',
  adviceMud: 'Il fango tenero richiede una marra ampia e più catena per raggiungere il compatto.',
  adviceClay: 'L argilla garantisce tenuta formidabile ma richiede punte affilate per penetrare.',
  adviceGravel: 'La ghiaia cede sotto sforzo dinamico. Aumentare la catena di almeno il 25 per cento.',
  adviceRock: 'Alto rischio di incaglio. Usare sempre una grippia con gavitello per spedare.',
  adviceWeed: 'Le alghe impediscono la penetrazione delle unghie. Verificare la tenuta con il motore.',
  catenaryAllChain: 'Il peso della catena forma una curva che assorbe i colpi d onda e mantiene il tiro piatto.',
  catenaryRopeChain: 'Una linea mista richiede almeno un rapporto 7 a 1 per compensare il minor peso.',
  catenaryAllRope: 'La cima esige 8 a 1 o 10 a 1 per evitare di sollevare il fuso sotto raffica.',
  resetButton: 'Reimposta Parametri',
  visualProfileTitle: 'Profilo Catenaria',
  waterlineLabel: 'Galleggiamento',
  seabedLabel: 'Fondale Marino',
  anchorLabel: 'Ancora',
  catenaryCurveLabel: 'Arco Catenaria',
  swingCircleLabel: 'Raggio di Ruota',
};

const faq: AnchorScopeLocaleContent['faq'] = [
  {
    question: 'Che cos è il rapporto di calumo nello stazionamento all ancora?',
    answer: 'È il rapporto matematico tra la lunghezza totale di linea filata in acqua e l altezza verticale dal fondo alla puleggia di prua.',
  },
  {
    question: 'Perché sommare il bordo libero e la marea alla profondità?',
    answer: 'L ecoscandaglio misura solo l acqua sotto la chiglia. Il bordo libero di prua e l escursione di marea aumentano notevolmente la quota verticale.',
  },
  {
    question: 'Qual è la differenza di calumo tra catena e cima?',
    answer: 'La catena pesante crea catenaria e ammette rapporti 4:1 o 5:1. La cima elastica e leggera esige 7:1 o 10:1 per non sollevare l ancora.',
  },
  {
    question: 'Come si calcola il raggio di ruota all ancora?',
    answer: 'Si calcola la distanza orizzontale con il teorema di Pitagora, sommando la lunghezza della barca e un margine di sicurezza di 3 o 5 metri.',
  },
  {
    question: 'In che modo il fondale influenza la sicurezza?',
    answer: 'Sabbia e argilla garantiscono il massimo grip. Fondali di roccia o posidonia richiedono maggiore prudenza e attenzione.',
  },
  {
    question: 'A cosa serve una bozza tessile con grillo da catena?',
    answer: 'Scarica il verricello salpa-ancore dagli strappi violenti dell onda e riduce le vibrazioni rumorose nello scafo.',
  },
];

const howTo: AnchorScopeLocaleContent['howTo'] = [
  {
    name: 'Misurare la quota e il bordo libero',
    text: 'Rilevate la profondità dell acqua e sommate l altezza del musone di prua dal pelo dell acqua.',
  },
  {
    name: 'Aggiungere l escursione di marea',
    text: 'Consultate le tavole di marea per aggiungere il colmo di alta marea previsto durante la sosta.',
  },
  {
    name: 'Selezionare linea e condizioni meteo',
    text: 'Scegliete il tipo di calumo e la forza del vento per determinare il coefficiente corretto.',
  },
  {
    name: 'Filare la catena e fare testa con motore',
    text: 'Filate la lunghezza raccomandata e date marcia indietro per incattivare l ancora nel fondale.',
  },
];

const seo: AnchorScopeLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Calcolo Calumo e Raggio di Ruota per Ancoraggio',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Un ancoraggio sicuro è la garanzia primaria per la salvaguardia dell equipaggio e dell imbarcazione. Un calumo insufficiente è la causa principale di spedo notturno e abbordaggi in rada. Il calcolo accurato del <strong>rapporto di calumo</strong> assicura tenuta granitica.',
  },
  {
    type: 'title',
    text: 'Determinazione dell Altezza Verticale Totale',
    level: 3,
  },
  {
    type: 'list',
    items: [
      '<strong>Profondità al Fondale:</strong> Battente d acqua rilevato alla sonda più il pescaggio.',
      '<strong>Bordo Libero di Prua:</strong> Distanza tra la superficie marina e il punto di tiro sul musone.',
      '<strong>Escursione di Marea:</strong> Massimo incremento d acqua registrato all alta marea.',
    ],
  },
  {
    type: 'title',
    text: 'Tabella dei Rapporti di Calumo Consigliati',
    level: 3,
  },
  {
    type: 'table',
    headers: ['Tipo di Linea', 'Tempo Calmo (<15 nodi)', 'Brezza Tesa (15-25 nodi)', 'Maltempo (>30 nodi)'],
    rows: [
      ['<strong>Tutta Catena</strong>', 'Rapporto 4:1', 'Rapporto 5:1', 'Rapporto 7:1'],
      ['<strong>Mista Cima-Catena</strong>', 'Rapporto 5:1', 'Rapporto 7:1', 'Rapporto 8:1 a 10:1'],
      ['<strong>Tutta Cima Tessile</strong>', 'Rapporto 7:1', 'Rapporto 8:1', 'Rapporto 10:1 a 12:1'],
    ],
  },
  {
    type: 'tip',
    title: 'Salvaguardia del Verricello',
    html: 'Non lasciare mai la catena in tiro sul barbotin del verricello. Usare sempre una bozza ammortizzante fissata alla bitta d ormeggio di prua.',
  },
  {
    type: 'paragraph',
    html: 'Controlla le previsioni e lo stato reale del mare prima della partenza.',
  },
  {
    type: 'paragraph',
    html: 'Verifica il margine di profondità e lascia una riserva di sicurezza.',
  },
  {
    type: 'paragraph',
    html: 'Annota i valori usati per poter ripetere il calcolo in seguito.',
  },
  {
    type: 'paragraph',
    html: 'Confronta più scenari quando cambiano vento o corrente.',
  },
  {
    type: 'paragraph',
    html: 'Il calcolo aiuta a preparare la rotta, ma non sostituisce la vigilanza a bordo.',
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
    name: `Istruzioni: ${title}`,
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
