import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EnduranceUI, EnduranceLocaleContent } from '../index';

const slug = 'calcolatore-autonomia';
const title = 'Calcolatore Autonomia Nautica';
const description =
  'Calcola la tua autonomia massima e la distanza di sicurezza in base al consumo di carburante, alla capacità del serbatoio e alla velocità di crociera. Gestione del carburante per barche a motore.';

const ui: EnduranceUI = {
  tankCapacityLabel: 'Capacità Serbatoio',
  mainTankLabel: 'Principale',
  auxTankLabel: 'Ausiliario',
  currentFuelLabel: 'Carburante Attuale',
  seaConditionsLabel: 'Condizioni Mare / Vento',
  consumptionLabel: 'Consumo Teorico',
  cruiseSpeedLabel: 'Velocità di Crociera',
  reserveLabel: 'Riserva',
  fuelPriceLabel: 'Prezzo al Litro',
  maxRangeLabel: 'Autonomia Massima',
  realPerformanceLabel: 'Rendimento Reale',
  hoursLabel: 'Ore di Autonomia',
  safeMilesLabel: 'Miglia Sicure',
  tankValueLabel: 'Valore Serbatoio',
  inverseCalcLabel: 'Calcolo Inverso: Quanto devo rifornire?',
  desiredDistLabel: 'Distanza Desiderata',
  minFuelLabel: 'Carburante Minimo Richiesto',
  warningLabel: 'Promemoria: Una riserva del 20% è il minimo assoluto raccomandato per la sicurezza nautica.',
  seaCalm: 'Calmo (1.0x)',
  seaLight: 'Poco mosso (+15%)',
  seaModerate: 'Mosso (+30%)',
  seaStorm: 'Burrasca (+60%)',
  faqTitle: 'Domande Frequenti': 'Bibliografia',
};

const faq: EnduranceLocaleContent['faq'] = [
  {
    question: 'Come si calcola l\'autonomia di una barca a motore?',
    answer: 'L\'autonomia si calcola dividendo il carburante disponibile per il consumo orario per ottenere le ore totali, e moltiplicando poi questo tempo per la velocità di crociera. Lo strumento applica anche un fattore relativo allo stato del mare per riflettere le reali condizioni di navigazione.',
  },
  {
    question: 'Perché è raccomandata una riserva del 20% nella navigazione nautica?',
    answer: 'La riserva del 20% è uno standard di sicurezza nautica che garantisce carburante a sufficienza in caso di imprevisti: correnti contrarie, deviazioni per maltempo, errori nelle stime dei consumi o necessità di assistere un\'altra imbarcazione. Molte assicurazioni e autorità portuali lo considerano obbligatorio.',
  },
  {
    question: 'Cos\'è il rendimento L/NM e come influisce sulla pianificazione?',
    answer: 'Il rendimento in litri per miglio nautico (L/NM) rappresenta l\'efficienza reale del motore alle condizioni del mare. A differenza del consumo orario, ti permette di calcolare esattamente quanto carburante ti serve per coprire una distanza specifica, indipendentemente dalla velocità.',
  },
  {
    question: 'In che modo lo stato del mare influisce sul consumo reale?',
    answer: 'Lo stato del mare aumenta il consumo perché lo scafo lavora di più contro la resistenza dell\'acqua e del vento. Con mare poco mosso il consumo sale del 15%, con mare mosso del 30% e in caso di burrasca può impennarsi del 60% o più. Ignorare questo fattore può lasciare un\'imbarcazione senza carburante prima di raggiungere il porto.',
  },
];

const howTo: EnduranceLocaleContent['howTo'] = [
  {
    name: 'Inserisci la capacità del serbatoio',
    text: 'Inserisci i litri del serbatoio principale e di quello ausiliario, se presente. Lo strumento calcolerà la percentuale di riempimento attuale.',
  },
  {
    name: 'Inserisci il livello di carburante attuale',
    text: 'Inserisci i litri effettivi che hai al momento. Puoi misurarli con l\'indicatore di livello della barca o stimarli dall\'ultimo rifornimento.',
  },
  {
    name: 'Regola le condizioni di navigazione',
    text: 'Seleziona lo stato del mare previsto per la tua traversata. Il fattore mare corregge il consumo teorico trasformandolo nel consumo reale stimato.',
  },
  {
    name: 'Inserisci consumo e velocità di crociera',
    text: 'Usa i dati del produttore o i tuoi record personali per il consumo orario e la velocità a cui navighi abitualmente.',
  },
  {
    name: 'Controlla la distanza sicura e il calcolo inverso',
    text: 'Lo strumento mostra quante miglia puoi coprire in sicurezza e quanto carburante ti serve per raggiungere una destinazione specifica.',
  },
];

const seo: EnduranceLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Gestione del Carburante e Autonomia nella Navigazione a Motore',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'L\'<strong>autonomia nautica</strong> è uno dei calcoli più critici prima di prendere il mare con una barca a motore. Sapere con precisione quante miglia puoi coprire con il carburante disponibile fa la differenza tra una traversata pianificata e un\'emergenza in mare.',
  },
  {
    type: 'paragraph',
    html: 'Questo calcolatore di autonomia integra il <strong>fattore condizioni del mare</strong>, la percentuale di riserva di sicurezza e il calcolo inverso del carburante affinché la gestione del combustibile sia completa e affidabile in ogni situazione.',
  },
  {
    type: 'title',
    text: 'La Regola d\'Oro: La Regola dei Terzi',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La classica regola di gestione del carburante nella navigazione nautica divide il serbatoio in tre parti uguali per garantire sempre un margine di sicurezza:',
  },
  {
    type: 'list',
    items: [
      '<strong>Un terzo per l\'andata:</strong> Il carburante necessario per raggiungere la destinazione pianificata.',
      '<strong>Un terzo per il ritorno:</strong> Il carburante per tornare al porto di partenza o a quello più vicino.',
      '<strong>Un terzo come riserva:</strong> Il margine di sicurezza per imprevisti, correnti o condizioni avverse.',
    ],
  },
  {
    type: 'paragraph',
    html: 'Nel calcolatore puoi impostare la percentuale di riserva secondo i tuoi criteri, anche se <strong>scendere sotto il 20% non è mai raccomandato</strong>. Con serbatoi più grandi o lunghe traversate, molti skipper esperti portano questo margine al 30% o addirittura al 33%.',
  },
  {
    type: 'title',
    text: 'Fattori che influenzano il Consumo (l/h)',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Il consumo teorico del produttore è calcolato in condizioni ideali di laboratorio. In pratica, molteplici fattori alterano il <strong>consumo reale di carburante</strong>. La velocità dello scafo è il fattore più decisivo: navigare sopra la velocità economica può raddoppiare o triplicare il consumo per miglio percorso.',
  },
  {
    type: 'table',
    headers: ['Stato di Navigazione', 'Effetto sull\'Autonomia', 'Consiglio'],
    rows: [
      ['<strong>Scafo Sporco</strong>', 'Riduce l\'autonomia fino al 20%', 'Pulisci lo scafo prima della stagione'],
      ['<strong>Corrente Contraria</strong>', 'Può ridurre la velocità effettiva del 30%', 'Calcola sempre con la velocità al suolo (SOG)'],
      ['<strong>Vento Contrario</strong>', 'Aumenta la resistenza e il consumo del 10-25%', 'Usa il fattore mare poco mosso o mosso'],
      ['<strong>Sovraccarico</strong>', 'Aumenta il pescaggio e la resistenza', 'Pesa l\'attrezzatura e le provviste prima di calcolare'],
    ],
  },
  {
    type: 'title',
    text: 'Glossario Tecnico dell\'Autonomia',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: 'Rendimento (L/NM)', definition: 'Litri di carburante consumati per miglio nautico percorso. L\'indicatore più utile per pianificare le traversate perché lega il consumo alla distanza effettiva.' },
      { term: 'Velocità di Crociera', definition: 'La velocità ottimale alla quale il motore offre il miglior equilibrio tra velocità e consumo. Generalmente tra il 70% e l\'80% della potenza massima.' },
      { term: 'Riserva Critica', definition: 'La percentuale del serbatoio che non deve mai essere consumata. Si raccomanda un minimo del 20% per coprire imprevisti ed evitare che entri aria nel circuito del carburante.' },
      { term: 'Consumo Specifico', definition: 'Grammi di carburante per chilowattora di potenza prodotta (g/kWh). Misura tecnica del motore che permette di confrontare l\'efficienza tra diversi sistemi di propulsione.' },
    ],
  },
  {
    type: 'title',
    text: 'Il Pericolo delle Morchie e del Movimento',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Una fonte comune di problemi sulle imbarcazioni con bassi livelli di carburante sono le <strong>morchie sul fondo del serbatoio</strong>. Quando il livello scende troppo, i sedimenti accumulati negli anni possono raggiungere il filtro e ostruirlo, lasciando il motore senza alimentazione anche se l\'indicatore segna ancora alcuni litri.',
  },
  {
    type: 'paragraph',
    html: 'Il movimento della barca in mare con poco carburante può causare problemi: il liquido oscilla con le onde e può lasciare momentaneamente a secco la pompa del carburante. Mantenere la riserva garantisce che questo non accada in un momento critico come una manovra di ingresso in porto.',
  },
  {
    type: 'tip',
    title: 'Consiglio per il Risparmio di Carburante',
    html: 'Ridurre la velocità del 10-15% al di sotto della solita velocità di crociera può migliorare l\'efficienza fino al 30%. Se hai tempo e il meteo è favorevole, andare più piano è sempre la decisione più economica e sicura.',
  },
  {
    type: 'title',
    text: 'Differenza tra Miglia Nautiche (NM) e Chilometri',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Un <strong>miglio nautico</strong> equivale a 1.852 metri (1,852 km) ed è l\'unità di distanza universale nella navigazione marittima e aeronautica. Si basa su un minuto d\'arco di un grado geografico, il che lo rende ideale per la navigazione con carte in coordinate geografiche. La velocità in miglia nautiche orarie è chiamata nodo (kn).',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Indicatore Analogico a Lancetta',
        description: 'Sistema a galleggiante tradizionale',
        points: [
          'Basso costo e installazione semplice',
          'Non richiede elettricità per funzionare',
          'Impreciso con mare mosso a causa del movimento del carburante',
          'Non mostra il consumo né l\'autonomia stimata',
        ],
      },
      {
        title: 'Calcolatore di Flusso Digitale',
        description: 'Sensori di flusso elettronici',
        highlight: true,
        points: [
          'Precisione dell\'1-2% sul consumo reale',
          'Mostra autonomia, consumo e costi in tempo reale',
          'Integrabile con chartplotter e NMEA 2000',
          'Richiede calibrazione iniziale e manutenzione',
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
    name: `Come usare: ${title}`,
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
