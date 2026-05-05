import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { NauticalConverterUI, NauticalConverterLocaleContent } from '../index';

const slug = 'convertitore-unita';
const title = 'Convertitore di Unità Nautiche';
const description =
  'Converti miglia nautiche, nodi, braccia e pressione atmosferica. Include la scala Beaufort interattiva per la velocità del vento.';

const ui: NauticalConverterUI = {
  distanceCategoryLabel: 'Distanza',
  speedCategoryLabel: 'Velocità',
  depthCategoryLabel: 'Profondità',
  pressureCategoryLabel: 'Pressione',
  nmLabel: 'Miglio Nautico (nm)',
  kmLabel: 'Chilometro (km)',
  miLabel: 'Miglio Terrestre (mi)',
  cableLabel: 'Cavo (Cable)',
  knLabel: 'Nodo (kn)',
  kmhLabel: 'km/h',
  msLabel: 'm/s',
  mphLabel: 'mph',
  brozaLabel: 'Braccio',
  mLabel: 'Metro (m)',
  ftLabel: 'Piede (ft)',
  mbarLabel: 'Millibar (mbar)',
  mmhgLabel: 'mmHg',
  inhgLabel: 'inHg',
  atmLabel: 'Atmosfera (atm)',
  windSeaLabel: 'Stato del mare',
  forceLabel: 'Forza',
  effectLabel: 'Effetto',
  copyLabel: 'Copia valore',
};

const faq: NauticalConverterLocaleContent['faq'] = [
  {
    question: 'Quanti chilometri ci sono in un miglio nautico?',
    answer: 'Un miglio nautico equivale esattamente a 1,852 chilometri, ovvero 1852 metri. Questa misura corrisponde a un minuto d\'arco di latitudine sulla superficie terrestre.',
  },
  {
    question: 'Qual è la differenza tra un nodo e un chilometro orario?',
    answer: 'Un nodo equivale a 1,852 km/h, poiché un nodo è un miglio nautico all\'ora. Per convertire i nodi in km/h basta moltiplicare per 1,852.',
  },
  {
    question: 'Perché in mare si usano le miglia nautiche invece dei chilometri?',
    answer: 'Perché un miglio nautico corrisponde a un minuto d\'arco di latitudine, il che semplifica enormemente i calcoli di navigazione con carta e bussola. Una variazione di un minuto d\'arco di latitudine equivale esattamente a un miglio nautico.',
  },
  {
    question: 'Cos\'è la scala Beaufort?',
    answer: 'È una scala empirica che mette in relazione la velocità del vento con gli effetti osservabili sul mare. Va da 0 (calma) a 12 (uragano) ed è essenziale per la navigazione costiera e d\'altura.',
  },
  {
    question: 'Quale unità di pressione si usa nella meteorologia marina?',
    answer: 'La meteorologia marina usa principalmente il millibar (mbar) o il suo equivalente hectopascal (hPa). La pressione atmosferica normale a livello del mare è di 1013,25 mbar.',
  },
  {
    question: 'Quanti piedi ci sono in un braccio?',
    answer: 'Un braccio equivale esattamente a 6 piedi, cioè 1,8288 metri. Viene usato principalmente nei paesi anglosassoni per esprimere le profondità sulle vecchie carte nautiche.',
  },
];

const howTo: NauticalConverterLocaleContent['howTo'] = [
  {
    name: 'Seleziona la categoria di conversione',
    text: 'Clicca su una delle quattro schede: Distanza, Velocità, Profondità o Pressione a seconda della grandezza che vuoi convertire.',
  },
  {
    name: 'Inserisci il valore in qualsiasi campo',
    text: 'Digita il numero nell\'unità che conosci. Tutte le altre unità si aggiorneranno automaticamente in tempo reale.',
  },
  {
    name: 'Consulta la scala Beaufort (velocità)',
    text: 'Quando inserisci una velocità nella scheda Velocità, apparirà una scheda che mostra la forza Beaufort corrispondente e lo stato del mare previsto.',
  },
  {
    name: 'Copia il risultato',
    text: 'Usa il pulsante di copia accanto a qualsiasi campo per copiare il valore negli appunti.',
  },
];

const seo: NauticalConverterLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'L\'importanza della precisione nelle unità nautiche',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Navigare in mare richiede un linguaggio proprio, un sistema di misurazione raffinato in secoli di esplorazione marittima. Le unità nautiche non sono una bizzarria storica, ma strumenti matematicamente coerenti allineati con la geometria della Terra e le esigenze pratiche del navigatore.',
  },
  {
    type: 'paragraph',
    html: 'A differenza della terraferma, dove un errore di pochi metri raramente ha conseguenze gravi, in mare una conversione sbagliata può significare la differenza tra ancorare in acque sicure o incagliarsi in una secca. La precisione nelle unità non è una questione accademica: è navigazione.',
  },
  {
    type: 'paragraph',
    html: 'Quando ci allontaniamo dalla costa, la mancanza di riferimenti visivi rende la posizione calcolata l\'unica realtà su cui possiamo agire. Sapere come convertire accuratamente tra miglia nautiche, chilometri, nodi e metri non è opzionale per il navigatore responsabile.',
  },
  {
    type: 'title',
    text: 'Perché si usano le miglia nautiche invece dei chilometri?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La risposta risiede nella forma stessa della Terra. Un <strong>miglio nautico</strong> equivale esattamente a un minuto d\'arco di latitudine sulla superficie terrestre, cioè 1852 metri. Questa corrispondenza diretta tra misura angolare e distanza lineare è la chiave del suo uso universale nella navigazione.',
  },
  {
    type: 'paragraph',
    html: 'Usando questa unità, una variazione di un minuto d\'arco di latitudine su una carta nautica corrisponde sempre esattamente a un miglio nautico percorso. Ciò semplifica enormemente i calcoli di posizione, velocità e tempo di arrivo senza necessità di ulteriori fattori di conversione.',
  },
  {
    type: 'title',
    text: 'Velocità in mare: Il nodo',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Il <strong>nodo</strong> è l\'unità di velocità equivalente a un miglio nautico all\'ora. Il suo nome deriva dalla vecchia tecnica di misurare la velocità lanciando in acqua un pezzo di legno legato a una corda con nodi a distanza regolare e contando quanti nodi passavano tra le dita in un tempo fisso.',
  },
  {
    type: 'paragraph',
    html: 'Oggi, nonostante l\'uso di satelliti GPS e sofisticati sistemi elettronici, il nodo rimane l\'unità standard nell\'aviazione internazionale e nella navigazione marittima. Un nodo equivale a 1,852 km/h o 0,514 m/s.',
  },
  {
    type: 'title',
    text: 'Profondità e ancoraggio: Braccia, Metri e Piedi',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Nel mondo nautico, la profondità non è una semplice statistica: è la differenza tra un ancoraggio sicuro e un incaglio. Storicamente, il <strong>braccio</strong> (1,8288 metri o esattamente 6 piedi) era l\'unità predominante per misurare le profondità nel mondo anglosassone.',
  },
  {
    type: 'paragraph',
    html: 'Tuttavia, la globalizzazione e la tecnologia hanno introdotto l\'uso costante dei metri sulla maggior parte delle carte e degli ecoscandagli moderni. Il navigatore moderno deve sentirsi a proprio agio nel muoversi tra braccia, metri e piedi, specialmente quando consulta vecchie carte nautiche o strumenti calibrati in unità imperiali.',
  },
  {
    type: 'title',
    text: 'Meteorologia e pressione atmosferica',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Per un comandante, il barometro è l\'oracolo del tempo. La pressione atmosferica, misurata in <strong>millibar</strong> (mbar), è l\'indicatore più affidabile di imminenti cambiamenti meteorologici. Una rapida caduta della pressione annuncia l\'arrivo di venti forti e maltempo.',
  },
  {
    type: 'paragraph',
    html: 'Comprendere le variazioni di pressione è vitale per ogni navigatore. La pressione atmosferica normale a livello del mare è di 1013,25 mbar (un\'atmosfera). Valori più alti indicano tempo stabile, mentre valori più bassi, specialmente se cadono rapidamente, segnalano l\'avvicinarsi di sistemi di bassa pressione potenzialmente pericolosi.',
  },
  {
    type: 'title',
    text: 'Scale di vento e mare: Da Beaufort a Douglas',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La velocità del vento in nodi è un numero che prende vita quando associato alla <strong>scala Beaufort</strong>. Sviluppata dall\'ammiraglio britannico Francis Beaufort nel 1805, questa scala empirica mette in relazione la velocità del vento con gli effetti osservabili sia sulla superficie del mare che sulla terraferma.',
  },
  {
    type: 'list',
    items: [
      '<strong>Forza 0-3 (0-10 kn):</strong> Condizioni di navigazione tranquille, ideali per l\'apprendimento o uscite in famiglia.',
      '<strong>Forza 4-5 (11-21 kn):</strong> Vento ideale per la vela su yacht, con onde moderate e creste bianche.',
      '<strong>Forza 6-7 (22-33 kn):</strong> Condizioni da fresco a quasi burrasca. Esperienza e terzaroli raccomandati.',
      '<strong>Forza 8+ (oltre 34 kn):</strong> Burrasca. Solo per navigatori esperti con imbarcazioni adeguate.',
    ],
  },
  {
    type: 'paragraph',
    html: 'Allo stesso modo, la scala Douglas classifica lo stato del mare in gradi da 0 (quasi calmo) a 9 (fenomenale), permettendo al navigatore di anticipare le condizioni oltre l\'orizzonte sulla base dei bollettini meteo.',
  },
  {
    type: 'tip',
    title: 'Consiglio di Sicurezza',
    html: 'Quando usi questo convertitore per pianificare un viaggio, tieni sempre presente che le condizioni reali possono differire dalle previsioni. Consulta i bollettini meteorologici ufficiali e non sottovalutare mai la capacità del mare di cambiare rapidamente.',
  },
  {
    type: 'title',
    text: 'Pianificazione offline e mobilità',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Questo strumento è progettato per funzionare senza connessione internet una volta caricato nel browser, rendendolo ideale per l\'uso a bordo dove la connettività può essere limitata. Tutte le conversioni sono calcolate localmente sul dispositivo, senza inviare alcun dato a un server.',
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
    name: `Come usare: ${title}`,
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
