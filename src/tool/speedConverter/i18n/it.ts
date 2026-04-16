import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SpeedConverterUI, SpeedConverterLocaleContent } from '../index';

const slug = 'conversore-velocita-it';
const title = 'Convertitore di Velocità Nautica e Scala Beaufort';
const description =
  'Converti istantaneamente tra nodi, km/h, m/s e mph. Include la tabella Beaufort completa con descrizioni dello stato del mare ed effetti del vento.';

const beaufortData = [
  { force: 0, name: 'Calma', sea: 'Stato del mare come uno specchio', effect: 'Il fumo sale verticalmente', kn: '0' },
  { force: 1, name: 'Bava di vento', sea: 'Rincrespature simili a squame', effect: 'Direzione indicata dal fumo ma non dalla banderuola', kn: '1-3' },
  { force: 2, name: 'Brezza leggera', sea: 'Piccole onde, le creste non si rompono', effect: 'Il vento si sente sul viso, le foglie frusciano', kn: '4-6' },
  { force: 3, name: 'Brezza tesa', sea: 'Onde più grandi, qualche cresta di schiuma bianca', effect: 'Foglie e ramoscelli in movimento', kn: '7-10' },
  { force: 4, name: 'Vento moderato', sea: 'Onde piccole ma che si allungano, frequenti pecorelle', effect: 'Si sollevano polvere e carta', kn: '11-16' },
  { force: 5, name: 'Vento teso', sea: 'Onde moderate, molte pecorelle', effect: 'Le cime degli alberi ondeggiano', kn: '17-21' },
  { force: 6, name: 'Vento fresco', sea: 'Grandi onde iniziano a formarsi, creste di schiuma bianca', effect: 'Difficoltà a usare l\'ombrello', kn: '22-27' },
  { force: 7, name: 'Vento forte', sea: 'Il mare si ingrossa, la schiuma viene soffiata in strisce', effect: 'Difficoltà a camminare controvento', kn: '28-33' },
  { force: 8, name: 'Burrasca', sea: 'Onde alte, gli spruzzi riducono la visibilità', effect: 'Grande difficoltà a camminare', kn: '34-40' },
  { force: 9, name: 'Burrasca forte', sea: 'Onde molto alte, il mare rotola', effect: 'Danni alle strutture', kn: '41-47' },
  { force: 10, name: 'Tempesta', sea: 'Onde eccezionalmente alte, mare bianco', effect: 'Alberi sradicati, danni considerevoli', kn: '48-55' },
  { force: 11, name: 'Tempesta violenta', sea: 'Onde enormi, la schiuma copre il mare', effect: 'Danni diffusi', kn: '56-63' },
  { force: 12, name: 'Uragano', sea: 'L\'aria è piena di schiuma e spruzzi', effect: 'Catastrofe totale', kn: '64+' },
];

const ui: SpeedConverterUI = {
  knLabel: 'Nodi (kt)',
  kmhLabel: 'Chilometri/ora',
  msLabel: 'Metri/secondo',
  mphLabel: 'Miglia/ora',
  beaufortTitle: 'Scala Beaufort',
  forceLabel: 'Forza',
  descriptionLabel: 'Descrizione',
  knotsLabel: 'Nodi',
  effectLabel: 'Effetto Visivo',
  seaStateLabel: 'Stato del Mare',
  windEffectLabel: 'Effetto a Terra',
  faqTitle: 'Domande Frequenti',
  bibliographyTitle: 'Bibliografia',
  beaufortDataJson: JSON.stringify(beaufortData),
};

const faq: SpeedConverterLocaleContent['faq'] = [
  {
    question: 'Perché la velocità della barca si misura in nodi?',
    answer: 'Il nodo è una unità di velocità equivalente a un miglio nautico all\'ora. La sua origine è storica: i marinai misuravano la velocità gettando in mare un pezzo di legno legato a una corda con nodi a distanza regolare, contando quanti nodi passavano tra le dita in un tempo stabilito. Oggi rimane lo standard internazionale nella navigazione marittima e nell\'aviazione.',
  },
  {
    question: 'Cos\'è la Scala Beaufort e come si usa nella navigazione?',
    answer: 'La Scala Beaufort è una scala empirica che mette in relazione la velocità del vento con gli effetti osservati sul mare e sulla terraferma. Sviluppata dall\'ammiraglio britannico Francis Beaufort nel 1805, va da 0 (calma piatta) a 12 (uragano). I marinai la usano per stimare l\'intensità del vento senza strumenti osservando lo stato del mare.',
  },
  {
    question: 'Qual è la differenza tra SOG e STW nella navigazione?',
    answer: 'SOG (Speed Over Ground) è la velocità reale dell\'imbarcazione rispetto al fondo marino, misurata dal GPS. STW (Speed Through Water) o velocità log è la velocità rispetto all\'acqua circostante. La differenza riflette l\'effetto delle correnti marine. La SOG si usa per pianificare gli arrivi e calcolare il carburante; la STW per calcolare lo scarroccio.',
  },
  {
    question: 'A quanti km/h corrisponde un nodo?',
    answer: 'Un nodo equivale esattamente a 1,852 chilometri orari, che è la lunghezza di un miglio nautico (definito come un minuto d\'arco del meridiano terrestre). Pertanto, 10 nodi corrispondono a 18,52 km/h, 20 nodi a 37,04 km/h e 30 nodi a 55,56 km/h.',
  },
];

const howTo: SpeedConverterLocaleContent['howTo'] = [
  {
    name: 'Inserisci la velocità in qualsiasi unità',
    text: 'Digita il valore nel campo corrispondente (nodi, km/h, m/s o mph) e tutti gli altri campi si aggiorneranno automaticamente.',
  },
  {
    name: 'Verifica la forza Beaufort equivalente',
    text: 'La scheda Beaufort mostra in tempo reale la forza del vento corrispondente alla velocità inserita, con lo stato del mare e gli effetti a terra.',
  },
  {
    name: 'Clicca su una riga nella tabella Beaufort',
    text: 'Puoi selezionare direttamente qualsiasi grado Beaufort nella tabella sottostante per vederne la velocità minima in tutti i formati.',
  },
  {
    name: 'Usa i risultati per pianificare la navigazione',
    text: 'Combina le informazioni su velocità e vento per decidere se le condizioni sono appropriate per il tuo tipo di barca e per la rotta pianificata.',
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
    text: 'Guida al Convertitore di Velocità Nautica e Scala Beaufort',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'La velocità è un dato fondamentale nella navigazione marittima. Sapere quanti nodi sta facendo la barca, come questo si traduce in chilometri orari per pianificare una rotta, o quale forza Beaufort rappresenta il vento che stai sperimentando, sono calcoli che ogni marinaio deve padroneggiare.',
  },
  {
    type: 'paragraph',
    html: 'Questo convertitore permette di passare tra nodi, km/h, m/s e mph istantaneamente, identificando automaticamente la forza Beaufort corrispondente con la descrizione dello stato del mare ed effetti visibili.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Unità Standard', value: 'Nodi (kt)', icon: 'mdi:speedometer' },
      { label: 'Scala Vento', value: 'Beaufort (0-12)', icon: 'mdi:weather-windy' },
      { label: 'Conversione Chiave', value: '1 kt = 1.85 km/h', icon: 'mdi:swap-horizontal' },
    ],
  },
  {
    type: 'title',
    text: 'Perché la velocità si misura in Nodi?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Il <strong>nodo (kt)</strong> è l\'unità ufficiale di velocità nella navigazione marittima e aerea. La sua definizione è precisa: un nodo equivale a un miglio nautico all\'ora, dove il miglio nautico (1852 m) è definito come un minuto d\'arco del meridiano terrestre. Questo legame diretto con la geometria della Terra rende il nodo un\'unità pratica per la navigazione, permettendo di stimare le distanze direttamente sulla carta nautica senza conversioni.',
  },
  {
    type: 'paragraph',
    html: 'Storicamente, i marinai misuravano la velocità usando il <em>solcometro a barchetta</em>: un pezzo di legno gettato in mare legato a una sagola con nodi ogni 14,4 metri (la frazione proporzionale di un miglio nautico in 30 secondi). Contare i nodi che passavano tra le dita in quel tempo dava la velocità, dando origine al termine che usiamo oggi.',
  },
  {
    type: 'title',
    text: 'La Scala Beaufort: L\'Occhio del Marinaio',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La <strong>Scala Beaufort</strong> fu sviluppata nel 1805 dall\'ammiraglio britannico Sir Francis Beaufort come metodo empirico per classificare la forza del vento dagli effetti osservabili, senza strumenti. Originariamente concepita per stimare quanta vela potesse portare una nave, è oggi un riferimento universale, adottato dall\'Organizzazione Meteorologica Mondiale (OMM).',
  },
  {
    type: 'paragraph',
    html: 'La scala va da <strong>Forza 0</strong> (calma piatta) a <strong>Forza 12</strong> (uragano con onde oltre i 14 metri). Per il diportista, i limiti critici sono solitamente Forza 6 (vento fresco, 22-27 nodi) per barche piccole e Forza 7-8 per yacht d\'altura.',
  },
  {
    type: 'table',
    headers: ['Forza Beaufort', 'Descrizione', 'Stato del Mare'],
    rows: [
      ['0', 'Calma', 'Stato del mare come uno specchio'],
      ['3', 'Brezza tesa', 'Pecorelle sparse, creste che iniziano a rompersi'],
      ['6', 'Vento fresco', 'Grandi onde, creste di schiuma bianca, possibili spruzzi'],
      ['9', 'Burrasca forte', 'Onde molto alte, visibilità ridotta da schiuma e spruzzi'],
      ['12', 'Uragano', 'Aria piena di schiuma, mare completamente bianco'],
    ],
  },
  {
    type: 'title',
    text: 'Glossario Velocità Nautica',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: 'Nodo (kt)', definition: 'Unità di velocità pari a un miglio nautico all\'ora (1852 m/h). Standard internazionale nella navigazione.' },
      { term: 'SOG (Speed Over Ground)', definition: 'Velocità reale rispetto al fondo, misurata dal GPS. Riflette l\'effetto della corrente sulla velocità della barca.' },
      { term: 'Velocità Log (STW)', definition: 'Velocità rispetto all\'acqua, misurata dal solcometro. Non include l\'effetto della corrente; fondamentale per lo scarroccio.' },
      { term: 'Vento Apparente', definition: 'Vento avvertito dall\'equipaggio a bordo, somma vettoriale tra vento reale e vento generato dall\'avanzamento. Differisce sempre dal vento reale per intensità e direzione.' },
    ],
  },
  {
    type: 'title',
    text: 'Formule di Conversione Rapida',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Per convertire manualmente quando non hai accesso a un convertitore digitale, usa queste approssimazioni:',
  },
  {
    type: 'list',
    items: [
      '<strong>Nodi in km/h:</strong> Moltiplica i nodi per 1.852. Approssimazione rapida: nodi x 2, meno 8%. Es: 10 kt ≈ 20 - 1.6 = 18.4 km/h.',
      '<strong>Nodi in mph:</strong> Moltiplica i nodi per 1.15. Approssimazione: nodi + 15%. Es: 20 kt ≈ 23 mph.',
      '<strong>Nodi in m/s:</strong> Moltiplica i nodi per 0.514. Approssimazione rapida: dividi i nodi per 2. Es: 10 kt ≈ 5 m/s.',
    ],
  },
  {
    type: 'tip',
    title: 'Sicurezza e Climatologia',
    html: 'Prima di uscire, consulta sempre il bollettino meteo. Beaufort 4-5 è gestibile per la maggior parte del diporto; da Forza 6 in su, valuta seriamente di rimandare la partenza se non hai esperienza sufficiente o se la barca non è preparata.',
  },
  {
    type: 'title',
    text: 'Confronto degli Strumenti',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Anemometro Digitale',
        description: 'Strumento elettronico per la misura precisa della velocità del vento.',
        icon: 'mdi:speedometer',
        points: [
          'Precisione di ±2% in condizioni normali',
          'Richiede alimentazione elettrica',
          'Può guastarsi in condizioni estreme',
          'Lettura istantanea e registrazione dati',
        ],
      },
      {
        title: 'Osservazione Beaufort',
        description: 'Stima visiva dal mare e dalla terra.',
        icon: 'mdi:eye-outline',
        highlight: true,
        points: [
          'Non richiede alcuno strumento',
          'Disponibile in ogni condizione',
          'Precisione sufficiente per la sicurezza',
          'Abilità fondamentale del navigatore esperto',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Navigazione e Pianificazione',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Nella pianificazione, la velocità determina l\'orario stimato di arrivo (ETA) e il consumo di carburante. Per le barche a vela, la velocità dipende anche dalla forza e direzione del vento: conoscere la forza Beaufort prevista permette di anticipare se si potrà veleggiare o se servirà il motore.',
  },
  {
    type: 'paragraph',
    html: 'Nelle regate, la conversione tra nodi e m/s è utile per calcolare la VMG (Velocity Made Good) e analizzare le polari. I meteorologi danno spesso il vento in m/s, quindi la conversione in nodi è un passo quotidiano nella pianificazione tattica.',
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
    name: `Come usare: ${title}`,
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
