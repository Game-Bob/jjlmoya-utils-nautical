import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SailAreaUI, SailAreaLocaleContent } from '../index';

const slug = 'calcolatore-superficie-velica';
const title = 'Calcolatore Area Velica e Rapporto SA/D';
const description =
  'Calcola l\'area velica totale e il rapporto area velica/dislocamento della tua barca. Analisi delle prestazioni nautiche basata sulle misure I, J, P ed E.';

const ui: SailAreaUI = {
  hullSectionLabel: 'Dati Scafo',
  totalMassLabel: 'Dislocamento',
  rigSystemLabel: 'Armo',
  intendedUseLabel: 'Uso previsto',
  rigGeometryLabel: 'Geometria dell\'Armo',
  sailConfigLabel: 'Tipo di armo',
  genoaOverlapLabel: 'Sovrapposizione Genoa',
  foqueLabel: 'Fiocco',
  genovaLabel: 'Genoa',
  sadRatioLabel: 'Rapporto SA/D',
  totalAreaLabel: 'Area totale',
  performanceLabel: 'Prestazioni',
  sloopLabel: 'Sloop (albero singolo)',
  cutterLabel: 'Cutter (doppia vela di prua)',
  ketchLabel: 'Ketch (due alberi)',
  cruiserLabel: 'Cruiser',
  performanceTypeLabel: 'Tipo di Prestazione',
  racerLabel: 'Racer',
  exportPdfLabel: 'GENERA RAPPORTO TECNICO',
  faqTitle: 'Domande Frequenti': 'Bibliografia',
};

const faq: SailAreaLocaleContent['faq'] = [
  {
    question: 'Perché la mia barca è lenta con vento leggero?',
    answer: 'Probabilmente il tuo rapporto SA/D è inferiore a 15, il che indica una barca a dislocamento pesante con poca area velica rispetto al suo peso. Queste barche hanno bisogno di venti superiori a 12 nodi per navigare con brio.',
  },
  {
    question: 'Dovrei svuotare i serbatoi dell\'acqua per migliorare le prestazioni?',
    answer: 'Sì, alleggerire la barca migliora direttamente il rapporto SA/D poiché il dislocamento reale diminuisce. Svuotare i serbatoi di acqua e carburante può ridurre il dislocamento di diverse centinaia di chili e aumentare significativamente il rapporto.',
  },
  {
    question: 'Cos\'è l\'allunamento (Roach) su una vela?',
    answer: 'L\'allunamento è la curva convessa della balumina (bordo d\'uscita) della randa. Fornisce un\'area velica extra oltre il triangolo geometrico di base definito da P ed E. Le barche da regata hanno allunamenti molto pronunciati con stecche rigide.',
  },
  {
    question: 'Come misuro il dislocamento reale della mia barca?',
    answer: 'Il metodo più affidabile è usare il dislocamento a pieno carico (con tutte le dotazioni, acqua, carburante ed equipaggio a bordo). Il dislocamento "a vuoto" del manuale del costruttore è solitamente ottimistico. Usa il dislocamento effettivo nelle tue normali condizioni di navigazione.',
  },
  {
    question: 'Dove posso trovare le misure I, J, P ed E per la mia barca?',
    answer: 'Le trovi nel manuale dell\'armatore, nei certificati di stazza ORC o IRC, o nella documentazione del certificato di classe. Puoi anche misurarle direttamente a bordo con un metro a nastro o contattando il cantiere costruttore.',
  },
];

const howTo: SailAreaLocaleContent['howTo'] = [
  {
    name: 'Seleziona il tipo di armo',
    text: 'Scegli tra Sloop (albero singolo), Cutter (fiocco e trinchetta) o Ketch (albero di mezzana). Questo determina come viene calcolata l\'area velica totale.',
  },
  {
    name: 'Inserisci il dislocamento',
    text: 'Usa il dislocamento effettivo a pieno carico della tua barca in kg o libbre. Questa cifra è fondamentale per il calcolo del rapporto SA/D.',
  },
  {
    name: 'Misura la geometria dell\'armo',
    text: 'Inserisci le misure P (altezza albero), E (boma), I (altezza triangolo di prua) e J (base triangolo di prua) in metri o piedi.',
  },
  {
    name: 'Regola la sovrapposizione del genoa',
    text: 'Muovi lo slider per indicare la sovrapposizione del tuo genoa: 100% è un fiocco senza sovrapposizione, 130% è un genoa standard, 155% è un genoa a grande sovrapposizione.',
  },
  {
    name: 'Interpreta il rapporto SA/D',
    text: 'Un rapporto tra 16 e 20 indica un cruiser equilibrato. Sopra 20 la barca sarà molto vivace con vento leggero ma impegnativa in condizioni di vento fresco.',
  },
];

const seo: SailAreaLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Calcolatore Area Velica: Guida Completa alle Prestazioni e ai Rapporti',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'L\'area velica è il motore aerodinamico di ogni imbarcazione a vela. Determina quanta energia del vento la barca può catturare e, combinata con il suo dislocamento, ne definisce il carattere nautico: se sarà un lento cruiser o una reattiva macchina da regata. Calcolare correttamente questo valore è il primo passo per comprendere il comportamento di qualunque barca a vela.',
  },
  {
    type: 'paragraph',
    html: 'Navigare a vela comporta una danza costante tra la forza del vento sulle vele e la resistenza dell\'acqua sullo scafo. Il <strong>rapporto Area Velica / Dislocamento (SA/D)</strong> cattura questa relazione in un singolo numero che permette di confrontare barche di qualsiasi lunghezza e dislocamento su basi paritarie.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Rapporto Cruiser Ideale', value: '15-18', icon: 'mdi:anchor' },
      { label: 'Barche da Regata', value: '+24', icon: 'mdi:sailing' },
      { label: 'Margine di Errore', value: '5-10%', icon: 'mdi:alert-circle-outline' },
    ],
    columns: 3,
  },
  {
    type: 'title',
    text: 'A cosa serve il Rapporto SA/D?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Il rapporto <strong>Area Velica / Dislocamento</strong> è uno strumento diagnostico che permette di prevedere il comportamento della barca prima di salpare. Un rapporto basso indica una barca robusta e sicura ma lenta con venti leggeri; un rapporto alto offre velocità e una sensazione di volo ma richiede maggiore abilità dell\'equipaggio quando il vento rinforza. Nessuno dei due è superiore all\'altro: tutto dipende dal tipo di navigazione desiderata.',
  },
  {
    type: 'title',
    text: 'Tabella di Riferimento del Rapporto SA/D',
    level: 4,
  },
  {
    type: 'table',
    headers: ['Rapporto', 'Tipo di Barca', 'Comportamento in Mare'],
    rows: [
      ['< 14', 'Dislocamento Pesante / Nave da Carico', 'Stabile, lenta, ha bisogno di vento costante'],
      ['14 - 16.5', 'Cruiser da Altura', 'Equilibrata, confortevole, buona risalita al vento'],
      ['16.5 - 20', 'Cruiser Standard', 'Vivace con brezza, gestibile, versatile'],
      ['20 - 25', 'Performance Cruiser / Sport', 'Veloce, impegnativa, eccitante con arie leggere'],
      ['> 25', 'Racer / Sport Estremo', 'Molto veloce, nervosa, richiede equipaggio esperto'],
    ],
  },
  {
    type: 'title',
    text: 'Glossario Tecnico delle Misure (I, J, P, E)',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'I (Altezza Triangolo di Prua)',
        definition: 'Distanza verticale dal ponte al punto in cui la drizza del fiocco si attacca all\'albero. Definisce l\'altezza del triangolo di prua.',
      },
      {
        term: 'J (Base Triangolo di Prua)',
        definition: 'Distanza orizzontale dall\'albero alla prua (attacco dello strallo). Definisce la base del triangolo di prua.',
      },
      {
        term: 'P (Altezza Randa)',
        definition: 'Distanza dal boma al punto più alto della canaletta sull\'albero. Definisce l\'altezza della randa.',
      },
      {
        term: 'E (Lunghezza Boma)',
        definition: 'Distanza dall\'albero alla bugna di scotta sul boma. Definisce la base della randa.',
      },
    ],
  },
  {
    type: 'title',
    text: 'Calcoli per Patente Nautica',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Il calcolo dell\'area velica e del rapporto SA/D fanno parte del programma per il conseguimento della <strong>patente nautica</strong> d\'altura. Comprendere la geometria dell\'armo e la sua relazione con il dislocamento è essenziale per prendere decisioni sulla sicurezza in mare: terzarolare in tempo, scegliere il genoa giusto o stimare il comportamento della barca prima di un colpo di vento.',
  },
  {
    type: 'tip',
    title: 'Vele da Portanti e Sicurezza',
    html: 'Per la navigazione oceanica o lunghe traversate, un rapporto SA/D tra 16 e 18 offre il miglior equilibrio tra velocità e sicurezza. Barche con rapporti sopra 22 possono aver bisogno di ridurre le vele con venti di soli Forza 4-5.',
  },
  {
    type: 'title',
    text: 'Come la Sovrapposizione del Genoa influisce sulle Prestazioni?',
    level: 4,
  },
  {
    type: 'paragraph',
    html: 'Il <strong>genoa</strong> è la vela di prua più grande, la cui bugna si posiziona dietro l\'albero, "sovrapponendosi" alla randa. La percentuale di sovrapposizione indica quanto la perpendicolare all\'infieritura (LP) sia più lunga rispetto alla distanza J. Un genoa al 150% ha un LP equivalente al 150% di J, fornendo un\'area velica molto maggiore rispetto a un semplice fiocco.',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Dacron (Crociera)',
        description: 'Materiale classico per vele da crociera. Robusto e facile da mantenere.',
        points: [
          'Alta durata e resistenza ai raggi UV',
          'Basso costo di manutenzione',
          'Maggiore peso e allungamento sotto carico',
          'Ideale per navigazione costiera e d\'altura',
        ],
      },
      {
        title: 'Laminati (Regata)',
        description: 'Materiali ad alta tecnologia come Kevlar, Spectra o Dyneema.',
        highlight: true,
        points: [
          'Allungamento minimo: massima efficienza aerodinamica',
          'Molto più leggeri del Dacron',
          'Costo più elevato e vita utile più breve',
          'Essenziali su barche con rapporto SA/D > 22',
        ],
      },
    ],
    columns: 2,
  },
  {
    type: 'title',
    text: 'Fisica della Vela e Stabilità',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'L\'area velica genera una forza propulsiva ma anche un <strong>momento sbandante</strong> che tende a far inclinare la barca. La stabilità è misurata dal momento raddrizzante che la barca può opporre a questa forza sbandante. Un rapporto SA/D elevato in una barca con poca zavorra può essere pericoloso, mentre lo stesso rapporto in una barca con una chiglia profonda e pesante è perfettamente gestibile.',
  },
  {
    type: 'paragraph',
    html: 'Per calcolare la potenza reale disponibile, i progettisti navali usano spesso il <strong>rapporto Dislocamento-Lunghezza (DLR)</strong> in combinazione con il SA/D. Entrambi i rapporti insieme descrivono con precisione se una barca è un rimorchiatore marino o un velocista planante.',
  },
  {
    type: 'tip',
    title: 'Stabilità e Sicurezza',
    html: 'Mai valutare il SA/D isolatamente. Una barca a vela con un rapporto di 22 e un angolo di raddrizzamento di 90 gradi è molto più sicura di una con un rapporto di 18 e un angolo di raddrizzamento di 60 gradi. Consulta sempre la curva di stabilità della tua barca.',
  },
];

const schemas: SailAreaLocaleContent['schemas'] = [
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

export const content: SailAreaLocaleContent = {
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
