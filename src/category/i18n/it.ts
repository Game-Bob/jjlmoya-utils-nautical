import type { CategoryLocaleContent } from '../index';

const slug = 'vela-e-nautica';
const title = 'Vela & Nautica';
const description =
  'Strumenti di calcolo nautico per velisti: maree, autonomia, superficie velica, convertitori di unità e velocità. Ideale per lo studio degli esami RYA e Yachtmaster.';

const seo: CategoryLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Perché usare strumenti digitali nella navigazione a vela?',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'La navigazione moderna ha subito una trasformazione radicale con l\'avvento degli strumenti digitali. Che si trovi su una piccola imbarcazione da diporto o al timone di uno yacht da crociera, la capacità di elaborare istantaneamente dati di posizione, vento e corrente non è solo una questione di comodità — è un pilastro fondamentale della sicurezza in mare.',
  },
  {
    type: 'paragraph',
    html: 'Storicamente, il marinaio dipendeva esclusivamente dal sestante, dal cronometro marino e dalle tavole di riduzione per determinare la posizione sul vasto oceano. Oggi, sebbene il romanticismo del sestante persista, la realtà operativa richiede una velocità di risposta che solo gli strumenti di calcolo digitale possono fornire.',
  },
  {
    type: 'title',
    text: 'Aspetti Chiave per il Navigatore Moderno',
    level: 2,
  },
  {
    type: 'title',
    text: 'Geolocalizzazione e Cartografia Digitale ad Alta Precisione',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La cartografia digitale ha democratizzato la navigazione, dando anche alle piccole imbarcazioni accesso a informazioni precedentemente limitate alle grandi navi commerciali. Un responsabile skipper usa gli strumenti digitali per convalidare il proprio giudizio, non per sostituirlo.',
  },
  {
    type: 'list',
    items: [
      'Precisione nell\'inserimento dati: Minimi errori tipografici possono portarti a miglia dalla tua destinazione.',
      'Compatibilità tra dispositivi: Sincronizza la pianificazione della traversata su tablet con gli strumenti di bordo.',
      'Backup in caso di guasto hardware: Le app web leggere sono un\'assicurazione se il plotter di bordo si blocca.',
      'Pianificazione della Traversata: I calcolatori nautici consentono stime accurate di consumo di carburante e distanze.',
    ],
  },
  {
    type: 'title',
    text: 'Meteorologia Marina e Ottimizzazione del Percorso',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Vento e stato del mare sono i veri sovrani della vela. La corretta interpretazione delle scale del vento (come la scala Beaufort) e la loro conversione in unità pratiche come i nodi è la realtà quotidiana di qualsiasi navigatore.',
  },
  {
    type: 'tip',
    title: 'L\'importanza della ridondanza e del Piano B',
    html: 'Non affidare mai tutta la tua navigazione a un unico sistema elettronico. Tieni sempre un backup dei tuoi waypoint critici su carta. Gli strumenti web sono eccellenti per la pianificazione pre-traversata, ma un buon marinaio ha sempre un piano di emergenza che non richiede uno schermo.',
  },
  {
    type: 'title',
    text: 'Formazione Nautica e l\'Uso di Calcolatori',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Anche negli esami ufficiali per le qualifiche nautiche (come il RYA Dayskipper o Yachtmaster), i calcoli su carta rimangono obbligatori. Gli strumenti digitali servono come compagno di studio ideale, permettendo ai candidati di verificare i propri esercizi di navigazione stimata, calcoli di marea e correzioni della bussola.',
  },
  {
    type: 'paragraph',
    html: 'La nostra raccolta di utilità mira a essere quel ponte tra il rigore accademico delle carte cartacee e l\'immediatezza della navigazione moderna. Vogliamo che ogni skipper, appassionato o professionista trovi qui i dati rapidi e accurati di cui ha bisogno prima di salpare.',
  },
];

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo,
};
