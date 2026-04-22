import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { UnderKeelUI, UnderKeelLocaleContent } from '../index';

const slug = 'ukc-calcolatore';
const title = 'Calcolatore del Franchezza Sotto la Chiglia UKC';
const description =
  'Calcola la finestra temporale sicura per attraversare secche, canali o punti con pescaggio limitato. Inserisci il pescaggio della barca, la profondità della carta e i dati di marea.';

const ui: UnderKeelUI = {
  parametersLabel: 'Parametri',
  boatDraftLabel: 'Pescaggio della Barca',
  chartDepthLabel: 'Profondità della Carta',
  safetyMarginLabel: 'Margine di Sicurezza',
  highTideLabel: 'Alta Marea',
  lowTideLabel: 'Bassa Marea',
  metersLabel: 'metri',
  passWindowLabel: 'Finestra di Transito',
  neededLabel: 'Profondità necessaria',
  tideRequiredLabel: 'Marea minima richiesta',
  statusNeverLabel: 'Nessuna franchezza in questo ciclo',
  statusAlwaysLabel: 'Transito possibile in tutto il ciclo',
  statusFromLabel: 'Transito dalle:',
  statusUntilLabel: 'Transito fino alle:',
  bottomLabel: 'FONDALE',
  faqTitle: 'Domande Frequenti': 'Bibliografia',
};

const faq: UnderKeelLocaleContent['faq'] = [
  {
    question: 'Cos\'è esattamente il calcolo della franchezza sotto la chiglia?',
    answer: 'È il calcolo del momento in cui c\'è una profondità sufficiente in un punto critico (come una secca o un canale stretto) per consentire il transito sicuro di una nave in base al suo pescaggio.',
  },
  {
    question: 'Quanto margine di sicurezza è raccomandato?',
    answer: 'Per le imbarcazioni da diporto, di solito si raccomanda un margine di sicurezza minimo compreso tra 0,5 e 1 metro sopra il pescaggio della barca. Questo margine compensa possibili errori nei calcoli di marea o variazioni della pressione atmosferica.',
  },
  {
    question: 'In che modo il moto ondoso influisce sulla franchezza?',
    answer: 'Il moto ondoso genera oscillazioni verticali nello scafo. Nel punto più basso dell\'onda, la barca è più vicina al fondo rispetto a quando è a riposo. Quando si attraversano aree con moto ondoso, il margine deve essere aumentato.',
  },
  {
    question: 'Cosa si intende per profondità della carta?',
    answer: 'È la profondità minima in un punto quando la marea è al Chart Datum. Viene sommata all\'altezza della marea in quel momento per dare la profondità totale disponibile.',
  },
  {
    question: 'Cosa significa un valore sottolineato sulla carta nautica?',
    answer: 'Significa che quel punto emerge quando la marea è al Chart Datum. Avrai bisogno di un\'altezza di marea maggiore per poterlo attraversare.',
  },
  {
    question: 'Cos\'è l\'effetto Squat?',
    answer: 'È un fenomeno idrodinamico per cui una nave che naviga in canali poco profondi tende ad abbassarsi rispetto alla sua linea di galleggiamento. Più velocemente procedi, meno acqua hai sotto la chiglia.',
  },
];

const howTo: UnderKeelLocaleContent['howTo'] = [
  {
    name: 'Definisci pescaggio e margine',
    text: 'Misura il pescaggio della tua barca nel suo punto massimo e aggiungi un margine di sicurezza prudente (es. 0,5 m).',
  },
  {
    name: 'Cerca la profondità sulla carta',
    text: 'Trova il valore del fondale per il punto critico dove navigherai. Nota se si tratta di un\'area sabbiosa o rocciosa.',
  },
  {
    name: 'Inserisci i dati di marea',
    text: 'Usa gli orari e le altezze dell\'alta e bassa marea dall\'almanacco ufficiale più vicino.',
  },
  {
    name: 'Verifica la tua finestra di transito',
    text: 'Lo strumento mostrerà l\'intervallo di tempo esatto in cui avrai profondità sufficiente per navigare in sicurezza.',
  },
];

const seo: UnderKeelLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Franchezza Sotto la Chiglia: Navigare in Sicurezza sulle Secche',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'La pianificazione di una rotta non finisce con il tracciamento di un corso sulla carta. Per il navigatore costiero, uno dei calcoli più critici è la <strong>franchezza sotto la chiglia</strong>: sapere a che ora ci sarà abbastanza profondità per attraversare un punto critico senza incagliarsi.',
  },
  {
    type: 'title',
    text: 'Profondità della carta e marea',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Sulle carte nautiche, le profondità sono riferite al <strong>Chart Datum</strong>. La profondità reale che la tua barca troverà in ogni momento è la somma di quel valore più l\'altezza della marea in quell\'istante.',
  },
  {
    type: 'title',
    text: 'Gli elementi del calcolo: Pescaggio e Margine',
    level: 3,
  },
  {
    type: 'list',
    items: [
      { term: 'Pescaggio massimo a carico', definition: 'La profondità raggiunta dal punto più basso della barca (la chiglia) a pieno carico.' },
      { term: 'Profondità della carta', definition: 'Il numero sulla carta nautica per il punto che desideri attraversare.' },
      { term: 'Margine di sicurezza', definition: 'Spazio libero aggiuntivo di almeno 0,5 - 1 metro sopra il pescaggio.' },
    ],
  },
  {
    type: 'title',
    text: 'Fattori che influenzano la franchezza',
    level: 3,
  },
  {
    type: 'table',
    headers: ['Fattore', 'Effetto', 'Raccomandazione'],
    rows: [
      ['<strong>Onda</strong>', 'Riduce l\'acqua sotto lo scafo', 'Aumenta significativamente il margine di sicurezza'],
      ['<strong>Effetto Squat</strong>', 'Aumenta il pescaggio per suzione', 'Riduci la velocità nelle aree critiche'],
      ['<strong>Fondale sabbioso</strong>', 'Profondità variabile con le tempeste', 'Mantieni attivo l\'ecoscandaglio'],
    ],
  },
  {
    type: 'tip',
    title: 'Consiglio di Navigazione',
    html: 'Se la tua finestra di transito è molto stretta o il tempo peggiora, la decisione più saggia è aspettare finché la marea non sale.',
  },
];

const schemas: UnderKeelLocaleContent['schemas'] = [
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

export const content: UnderKeelLocaleContent = {
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
