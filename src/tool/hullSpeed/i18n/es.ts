import { bibliography } from '../bibliography';
import type { HullSpeedLocaleContent, HullSpeedUI } from '../index';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

const slug = 'calculadora-velocidad-casco-velero';
const title = 'Calculadora de velocidad de casco';
const description =
  'Obtén la velocidad de casco teórica a partir de la eslora de flotación, compara un registro real y ve cuándo un casco de desplazamiento trepa su propia ola de proa.';

const ui: HullSpeedUI = {
  metric: 'Métrico',
  imperial: 'Imperial',
  unitGroup: 'Unidades',
  sceneLabel: 'Flotación y ola de proa',
  hullSpeedLabel: 'Velocidad de casco',
  knotsUnit: 'kn',
  kmhUnit: 'km/h',
  mphUnit: 'mph',
  ratioLabel: 'S/L',
  froudeLabel: 'Fr',
  lwlLabelMetric: 'Eslora de flotación',
  lwlLabelImperial: 'Eslora de flotación',
  lwlUnitM: 'm',
  lwlUnitFt: 'ft',
  observedLabel: 'Velocidad de la corredera',
  observedHint: 'Déjalo en 0 para dibujar la ola teórica. Escribe un registro para ver si sigues sentado en el hueco.',
  stretchHint: 'Arrastra el casco para estirar la flotación',
  hullKindLabel: 'Forma de casco',
  displacement: 'Desplazamiento',
  semi: 'Semidesplazamiento',
  planing: 'Planeo',
  boatsLabel: 'Flotaciones de ejemplo',
  dinghy: 'Dinghy',
  daysailer: 'Daysailer',
  cruiser: 'Crucero',
  bluewater: 'Altura',
  workboat: 'Trabajo',
  bandBelow: 'Aún hace una ola corta',
  bandNear: 'Acercándose a la barrera de ola',
  bandAt: 'Montado en la ola de proa',
  bandAbove: 'Intentando trepar la ola',
  bandPlane: 'En el planeo, por encima de la velocidad de casco',
  planingNote:
    'Un casco de planeo puede dejar atrás esta ola. La velocidad de casco es una referencia, no un muro.',
  displacementNote:
    'Un casco de desplazamiento paga caro al alcanzar su propia estela. Trátala como techo práctico, no como objetivo de GPS.',
  semiNote:
    'Los cascos de semidesplazamiento pueden pasar un poco del ratio clásico con potencia de sobra, a costa de una subida brusca de resistencia.',
  waveLegend: 'Ola de proa',
  waterLegend: 'Flotación',
  markLegend: 'Velocidad de casco',
  faqTitle: 'Preguntas sobre velocidad de casco',
  bibliographyTitle: 'Referencias',
};

const faq: HullSpeedLocaleContent['faq'] = [
  {
    question: '¿Qué es la velocidad de casco en un velero?',
    answer:
      'Es la velocidad a la que un casco de desplazamiento viaja con una ola de proa casi tan larga como su propia flotación. En unidades náuticas se estima como 1.34 veces la raíz de la eslora de flotación en pies. Es una velocidad crítica, no un tope físico duro.',
  },
  {
    question: '¿Cómo se calcula la velocidad de casco?',
    answer:
      'Pasa la flotación a pies, saca la raíz y multiplica por 1.34 para obtener nudos. Una flotación de 10 m son unos 32.8 ft, así que sale cerca de 7.7 kn. Ese punto corresponde a un número de Froude próximo a 0.40.',
  },
  {
    question: '¿Sirve la velocidad de casco para lanchas de planeo?',
    answer:
      'La fórmula sigue describiendo la ola que haría el casco si se quedara en modo desplazamiento. El planeo y muchos semidesplazamientos están pensados para trepar esa ola. Usa el número como referencia y lee la nota de forma de casco.',
  },
  {
    question: '¿Debo usar la eslora de flotación o la eslora total?',
    answer:
      'Usa la eslora de flotación (LWL), la longitud inmersa que realmente genera la ola. La eslora total, baupreses y voladizos no fijan la longitud de onda. Mide LWL en el agua, no el LOA del folleto.',
  },
];

const howTo: HullSpeedLocaleContent['howTo'] = [
  {
    name: 'Estira la flotación',
    text: 'Arrastra el casco, mueve el rail de flotación o elige desde dinghy hasta barco de trabajo. La velocidad de casco es 1.34 veces la raíz de esa longitud en pies.',
  },
  {
    name: 'Elige la forma de casco',
    text: 'Desplazamiento, semidesplazamiento o planeo cambia la quilla y si el barco puede salir de su propia ola.',
  },
  {
    name: 'Lee el hueco',
    text: 'A velocidad de casco la ola de proa y la de popa quedan a una flotación de distancia y el barco se sienta en el seno. Esa es la barrera.',
  },
  {
    name: 'Compara un registro',
    text: 'Introduce la velocidad sobre el agua. Una ola más corta significa que aún empujas barato. Una ola más larga significa que trepas el hueco.',
  },
];

const seo: HullSpeedLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Qué te está diciendo de verdad la velocidad de casco',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Un casco de desplazamiento empuja una ola desde la proa y otra desde la popa. Cuando esas crestas quedan a unos de flotación de distancia, el barco viaja con su propia estela. Entonces la potencia extra amontona agua en vez de comprar velocidad. Esa condición es lo que los marinos llaman velocidad de casco.',
  },
  {
    type: 'paragraph',
    html: 'La calculadora usa el ratio amateur habitual de 1.34 nudos por raíz de pies de flotación. Los cascos finos y largos pueden ir un poco más altos; las barcazas, más bajos. Trata el resultado como marca de estudio y compáralo con un registro real.',
  },
  {
    type: 'title',
    text: 'Ejemplos de flotación resueltos',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Flotación', 'Velocidad de casco', 'Barco típico'],
    rows: [
      ['4.2 m / 13.8 ft', '5.0 kn', 'Dinghy'],
      ['6.5 m / 21.3 ft', '6.2 kn', 'Daysailer'],
      ['10 m / 32.8 ft', '7.7 kn', 'Crucero familiar'],
      ['13.5 m / 44.3 ft', '8.9 kn', 'Yate de altura'],
      ['18 m / 59.1 ft', '10.3 kn', 'Barco de trabajo pequeño'],
    ],
  },
  {
    type: 'title',
    text: 'Cómo leer la ola de proa',
    level: 2,
  },
  {
    type: 'list',
    items: [
      'Por debajo de la marca la ola es corta y el barco sigue siendo barato de empujar.',
      'Cerca de la marca la ola de proa se empina y el combustible o la vela compran menos velocidad.',
      'Sobre la marca la longitud de onda iguala la LWL. Un casco de desplazamiento está en la barrera clásica.',
      'Por encima un casco de desplazamiento trepa su estela. Uno de planeo puede ir ya levantado.',
    ],
  },
  {
    type: 'tip',
    title: 'Mide LWL, no LOA',
    html: 'La eslora del folleto incluye voladizos. A la ola le importa la flotación inmersa. Si solo tienes LOA, la velocidad de casco que calcules será optimista.',
  },
  {
    type: 'title',
    text: 'El número de Froude en una frase',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'La velocidad de casco es un empaquetado cómodo de un número de Froude cercano a 0.40: velocidad dividida por la raíz de la gravedad por la eslora. Por eso las flotaciones más largas son más rápidas aunque la forma del casco no cambie. Estirar la LWL es el modo limpio de subir el límite de desplazamiento; añadir caballos no lo es.',
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
    name: `Cómo usar ${title}`,
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
