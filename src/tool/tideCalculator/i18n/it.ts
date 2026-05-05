import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TideCalculatorUI, TideCalculatorLocaleContent } from '../index';

const slug = 'calcolatore-marea';
const title = 'Calcolatore dell\'Altezza della Marea';
const description =
  'Stima la profondità dell\'acqua in qualsiasi punto del ciclo di marea usando la Regola dei Dodicesimi. Ideale per la pianificazione costiera e lo studio per la patente nautica.';

const ui: TideCalculatorUI = {
  parametersLabel: 'Parametri',
  highTideLabel: 'Alta Marea',
  lowTideLabel: 'Bassa Marea',
  targetTimeLabel: 'Ora della richiesta',
  estimatedHeightLabel: 'Altezza Stimata',
  metersLabel: 'metri',
  amplitudeLabel: 'Escursione',
  durationLabel: 'Durata',
  tableBreakdownLabel: 'Ripartizione Dodicesimi',
  tableHourLabel: 'Ora',
  tableStateLabel: 'Stato',
  tableStartLabel: 'Inizio',
  tableEndLabel: 'Fine',
  statusUpLabel: 'Crescente',
  statusDownLabel: 'Calante',
  statusOutOfRange: 'Fuori intervallo',
};

const faq: TideCalculatorLocaleContent['faq'] = [
  {
    question: 'Cos\'è la Regola dei Dodicesimi e a cosa serve?',
    answer:
      'La Regola dei Dodicesimi è un metodo matematico semplificato usato nella navigazione per stimare l\'altezza della marea in qualsiasi momento tra l\'alta e la bassa marea. Si basa sull\'osservazione che il flusso della marea segue una curva approssimativamente sinusoidale, dividendo l\'escursione totale in 12 parti su 6 ore (1/12, 2/12, 3/12, 3/12, 2/12, 1/12).',
  },
  {
    question: 'Questo metodo è affidabile per la navigazione reale?',
    answer:
      'È un metodo di stima teorica molto utile per la pianificazione rapida e per scopi didattici. Tuttavia, non tiene conto dei fattori meteorologici come la pressione atmosferica o il vento, che possono alterare il livello del mare di diversi decimetri. Per la navigazione reale, consulta sempre le tavole di marea ufficiali.',
  },
  {
    question: 'Di quali dati ho bisogno per calcolare l\'altezza della marea?',
    answer:
      'Hai bisogno dell\'ora e dell\'altezza (in metri) dell\'alta e della bassa marea più vicine al momento che desideri consultare. Questi dati si trovano negli almanacchi nautici o nelle applicazioni meteo marine.',
  },
  {
    question: 'Perché la marea non sale sempre alla stessa velocità?',
    answer:
      'A causa dell\'inerzia delle grandi masse d\'acqua e della configurazione dei bacini oceanici. La marea inizia a salire lentamente dopo la bassa marea, raggiunge la velocità massima nelle ore centrali (le ore 3/12 e 4/12) e rallenta nuovamente avvicinandosi all\'alta marea.',
  },
  {
    question: 'In che modo la pressione atmosferica influisce sulla marea?',
    answer:
      'L\'alta pressione (anticiclone) spinge l\'acqua verso il basso, riducendo l\'altezza reale. La bassa pressione (depressione) permette all\'acqua di salire di più. Come regola generale, una variazione di 1 hPa rispetto alla media corrisponde a circa 1 cm di variazione del livello del mare.',
  },
  {
    question: 'Cos\'è l\'escursione di marea?',
    answer:
      'È la differenza verticale di altezza tra un\'alta marea e la bassa marea immediatamente precedente o successiva. Questa misura varia in base alle fasi lunari (maree vive e morte) e alla posizione geografica.',
  },
];

const howTo: TideCalculatorLocaleContent['howTo'] = [
  {
    name: 'Identifica l\'alta e la bassa marea',
    text: 'Consulta il tuo almanacco di marea per ottenere gli orari e le altezze del ciclo che ti interessa.',
  },
  {
    name: 'Inserisci i dati nel calcolatore',
    text: 'Inserisci l\'ora e l\'altezza dell\'alta e della bassa marea. Lo strumento determinerà automaticamente durata ed escursione.',
  },
  {
    name: 'Imposta l\'ora della richiesta',
    text: 'Regola l\'ora per la quale vuoi conoscere il livello dell\'acqua. Vedrai il punto esatto evidenziato sul grafico.',
  },
  {
    name: 'Analizza la tabella dei dodicesimi',
    text: 'Controlla la ripartizione ora per ora per capire come fluttuerà il livello dell\'acqua durante l\'intero periodo.',
  },
];

const seo: TideCalculatorLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Padroneggiare la Marea: La Regola dei Dodicesimi nella Navigazione',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'La navigazione costiera e l\'ingresso nei porti con fondali ridotti richiedono una conoscenza precisa della profondità dell\'acqua in ogni momento. Sebbene oggi siano disponibili applicazioni digitali e GPS che forniscono dati in tempo reale, la <strong>Regola dei Dodicesimi</strong> rimane uno strumento fondamentale nella formazione di ogni skipper. Questa regola è un metodo di stima matematica che permette di calcolare, approssimativamente e senza calcolatori complessi, l\'altezza della marea in qualsiasi punto di un ciclo.',
  },
  {
    type: 'title',
    text: 'Cos\'è esattamente la Regola dei Dodicesimi?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La Regola dei Dodicesimi si basa sull\'osservazione che il flusso della marea non è costante. L\'acqua non sale o scende alla stessa velocità durante le circa sei ore tra l\'alta e la bassa marea. Invece, il movimento segue una curva sinusoidale. Durante la prima ora la marea si muove lentamente; accelera nelle ore centrali e rallenta di nuovo man mano che si avvicina all\'estremo successivo.',
  },
  {
    type: 'table',
    headers: ['Ora del Ciclo', 'Proporzione', 'Stato del Flusso'],
    rows: [
      ['<strong>1ª Ora</strong>', '1/12 dell\'escursione', 'Inizio lento (Stanca di bassa)'],
      ['<strong>2ª Ora</strong>', '2/12 dell\'escursione', 'Flusso in accelerazione'],
      ['<strong>3ª Ora</strong>', '3/12 dell\'escursione', 'Flusso massimo (Corrente forte)'],
      ['<strong>4ª Ora</strong>', '3/12 dell\'escursione', 'Flusso sostenuto'],
      ['<strong>5ª Ora</strong>', '2/12 dell\'escursione', 'Decelerazione notevole'],
      ['<strong>6ª Ora</strong>', '1/12 dell\'escursione', 'Rallentamento finale (Verso la stanca)'],
    ],
  },
  {
    type: 'title',
    text: 'Limitazioni tecniche: Fattori che influenzano la marea reale',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: 'Pressione atmosferica', definition: 'Una depressione innalza il livello del mare; un anticiclone lo abbassa. Come regola generale, ~1 cm di variazione per ogni hPa di differenza dalla media.' },
      { term: 'Vento costiero', definition: 'Venti costanti verso terra possono accumulare acqua oltre i livelli previsti nelle tavole di marea.' },
      { term: 'Topografia locale', definition: 'La forma della costa, la profondità del fondale e la presenza di estuari possono ritardare o accelerare significativamente il flusso di marea.' },
    ],
  },
  {
    type: 'tip',
    title: 'Nota sulla Sicurezza',
    html: 'Questo strumento utilizza un metodo di stima matematica. Non tiene conto dei fattori meteorologici o della topografia locale. Per la navigazione reale, consulta sempre le tavole di marea ufficiali.',
  },
  {
    type: 'title',
    text: 'Concetti chiave per i nuovi navigatori',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Escursione di marea',
        definition: 'Differenza verticale tra l\'alta e la bassa marea. In alcune zone può essere di diversi metri; nel Mediterraneo è quasi trascurabile.',
      },
      {
        term: 'Durata della marea',
        definition: 'Intervallo di tempo tra l\'alta marea e la bassa marea successiva. Tipicamente circa 6 ore e 12 minuti.',
      },
      {
        term: 'Zero idrografico',
        definition: 'Livello di riferimento dal quale sono misurate tutte le profondità sulle carte nautiche. Le profondità reali non sono quasi mai inferiori a quelle indicate.',
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
    name: `Come usare: ${title}`,
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
