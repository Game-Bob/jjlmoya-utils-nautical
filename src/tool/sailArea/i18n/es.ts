import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { SailAreaUI, SailAreaLocaleContent } from '../index';

const slug = 'calculadora-area-vela';
const title = 'Calculadora de Área de Vela';
const description = 'Calcula el área de cualquier tipo de vela: triangular (mayor, génova), cuadrilateral (palo cangrejo) y génova con solape. También calcula el índice de área vélica en relación al desplazamiento de la embarcación.';

const ui: SailAreaUI = {
  sailType: 'Tipo de vela',
  typTriangle: 'Triangular',
  typQuad: 'Cuadrilateral',
  typGenoa: 'Génova / Solape',
  labelBase: 'Base',
  labelHeight: 'Altura',
  labelLP: 'LP (Perpendicular de gratil)',
  labelJ: 'J (base del triángulo de proa)',
  labelI: 'I (altura del palo sobre cubierta)',
  labelDisplacement: 'Desplazamiento',
  labelArea: 'Área de vela',
  labelRatio: 'Índice vélico SA/D',
  btnCalculate: 'Calcular',
  btnReset: 'Restablecer',
  resultArea: 'Área total',
  resultRatio: 'Índice SA/D',
};

const faq: SailAreaLocaleContent['faq'] = [
  {
    question: '¿Qué es el índice de área vélica SA/D?',
    answer: 'El índice SA/D (Sail Area to Displacement ratio) es la relación entre la superficie vélica total y el desplazamiento elevado a 2/3. Valores entre 14 y 16 corresponden a barcos de crucero equilibrados; valores superiores a 18 indican un barco con mucho velamen y tendencia a los escores.',
  },
  {
    question: '¿Cómo se calcula el área de una vela triangular?',
    answer: 'El área de una vela triangular es base × altura / 2. Para una mayor bermudiana, la base es el pujamen (boom) y la altura es el gratil (luff). Esta fórmula básica es la más utilizada en el diseño de velas.',
  },
  {
    question: '¿Qué significa LP en una génova?',
    answer: 'LP (Luff Perpendicular) es la distancia medida perpendicularmente desde el gratil de la génova hasta la baluma. Determina el grado de solape con el palo. Una génova del 150% tiene un LP equivalente al 150% de J (la base del triángulo de proa).',
  },
  {
    question: '¿Qué son J e I en el cálculo de aparejos?',
    answer: 'J es la distancia horizontal desde el palo hasta el estay de proa (base del triángulo de proa). I es la altura desde cubierta hasta el punto donde parte el estay de proa en el palo. Juntos definen el "triángulo de proa" del aparejo bermudiano.',
  },
];

const howTo: SailAreaLocaleContent['howTo'] = [
  { name: 'Selecciona el tipo de vela', text: 'Elige entre vela triangular (mayor bermudiana), cuadrilateral (vela de cangrejo) o génova con solape.' },
  { name: 'Introduce las medidas', text: 'Para velas triangulares, introduce base y altura. Para la génova, usa los valores J, I y LP de tu aparejo.' },
  { name: 'Añade el desplazamiento', text: 'Introduce el desplazamiento en kg para calcular el índice SA/D y evaluar el rendimiento vélico.' },
  { name: 'Interpreta los resultados', text: 'Compara el índice SA/D con los valores de referencia: menor de 14 es poco velamen, 14-16 crucero equilibrado, más de 18 velero muy vivo.' },
];

const bibliography: SailAreaLocaleContent['bibliography'] = [
  { name: 'Marchaj C.A. — Sail Performance: Techniques to Maximize Sail Power', url: 'https://www.adlardcoles.com/books/sail-performance/' },
  { name: 'Chapman Piloting & Seamanship — Hearst Marine Books', url: 'https://www.chapman.com/' },
];

const seo: SailAreaLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Datos Clave del Área Vélica',
    items: [
      'El área de una vela triangular = base × altura / 2.',
      'El índice SA/D relaciona el velamen con el desplazamiento.',
      'Una génova del 150% tiene un LP = 1,5 × J.',
      'SA/D de 14-16 es típico de un crucerista bien equilibrado.',
    ],
  },
  { type: 'title', text: 'Fundamentos del Cálculo de Superficie Vélica', level: 2 },
  {
    type: 'paragraph',
    html: 'El área de las velas es uno de los parámetros más importantes en el diseño y la evaluación de un velero. Determina la fuerza propulsora disponible y, combinado con el desplazamiento, define el carácter del barco: desde un crucerista familiar seguro hasta un velero de regata con alto rendimiento.',
  },
  {
    type: 'table',
    headers: ['Tipo de vela', 'Fórmula', 'Observaciones'],
    rows: [
      ['Triangular (mayor)', 'base × altura / 2', 'Vela estándar bermudiana'],
      ['Cuadrilateral (cangrejo)', '((base + clew) / 2) × altura', 'Vela con botavara y pico'],
      ['Génova / Foque', '(LP × √(J² + I²)) / 2', 'Usa el triángulo de proa'],
    ],
  },
  {
    type: 'tip',
    title: 'Consejo de Diseño',
    html: 'Para una estimación rápida del área total de trabajo, suma el área de la mayor y el triángulo de proa (J × I / 2). Este valor es el <strong>I² + J²</strong> del aparejo, base del cálculo IMS.',
  },
  { type: 'title', text: 'Interpretación del Índice SA/D', level: 3 },
  {
    type: 'stats',
    columns: 3,
    items: [
      { label: 'Poco velamen', value: '< 14', icon: 'mdi:sail' },
      { label: 'Crucero equilibrado', value: '14–16', icon: 'mdi:sail' },
      { label: 'Velero muy vivo', value: '> 18', icon: 'mdi:weather-windy' },
    ],
  },
  {
    type: 'glossary',
    items: [
      { term: 'Gratil', definition: 'Lado anterior de la vela, que va desde el puño de driza hasta el puño de amura.' },
      { term: 'Pujamen', definition: 'Lado inferior de la mayor, que va desde el puño de amura hasta el puño de escota.' },
      { term: 'Baluma', definition: 'Borde de salida de la vela, el lado libre posterior.' },
      { term: 'LP', definition: 'Luff Perpendicular: distancia perpendicular del gratil a la baluma de un foque.' },
    ],
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'es',
};

export const content: SailAreaLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, appSchema],
};
