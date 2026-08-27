import { bibliography } from '../bibliography';
import type { HullSpeedLocaleContent, HullSpeedUI } from '../index';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

const slug = 'calculadora-velocidade-do-casco';
const title = 'Calculadora de velocidade de casco';
const description =
  'Obtém a velocidade de casco teórica a partir do comprimento de flutuação, compara um registo e vê quando um casco de deslocamento sobe a própria onda de proa.';

const ui: HullSpeedUI = {
  metric: 'Métrico',
  imperial: 'Imperial',
  unitGroup: 'Unidades',
  sceneLabel: 'Flutuação e onda de proa',
  hullSpeedLabel: 'Velocidade de casco',
  knotsUnit: 'kn',
  kmhUnit: 'km/h',
  mphUnit: 'mph',
  ratioLabel: 'S/L',
  froudeLabel: 'Fr',
  lwlLabelMetric: 'Comprimento de flutuação',
  lwlLabelImperial: 'Comprimento de flutuação',
  lwlUnitM: 'm',
  lwlUnitFt: 'ft',
  observedLabel: 'Velocidade do loch',
  observedHint: 'Deixa em 0 para desenhar a onda teórica. Escreve um registo para ver se ainda estás sentado no oco.',
  stretchHint: 'Arrasta o casco para esticar a flutuação',
  hullKindLabel: 'Forma de casco',
  displacement: 'Deslocamento',
  semi: 'Semideslocamento',
  planing: 'Planeio',
  boatsLabel: 'Flutuações de exemplo',
  dinghy: 'Bote',
  daysailer: 'Daysailer',
  cruiser: 'Cruzeiro',
  bluewater: 'Alto mar',
  workboat: 'Trabalho',
  bandBelow: 'Ainda faz uma onda curta',
  bandNear: 'A aproximar se da barreira de onda',
  bandAt: 'Em cima da onda de proa',
  bandAbove: 'A tentar subir a onda',
  bandPlane: 'Em planeio, acima da velocidade de casco',
  planingNote:
    'Um casco de planeio pode deixar esta onda para trás. A velocidade de casco é uma referência, não um muro.',
  displacementNote:
    'Um casco de deslocamento paga caro quando apanha o próprio rasto. Trata o valor como teto prático, não como alvo de GPS.',
  semiNote:
    'Os semideslocamentos podem passar um pouco da razão clássica com potência a mais, à custa de uma subida brusca de resistência.',
  waveLegend: 'Onda de proa',
  waterLegend: 'Flutuação',
  markLegend: 'Velocidade de casco',
  faqTitle: 'Perguntas sobre velocidade de casco',
  bibliographyTitle: 'Referências',
};

const faq: HullSpeedLocaleContent['faq'] = [
  {
    question: 'O que é a velocidade de casco num veleiro?',
    answer:
      'É a velocidade a que um casco de deslocamento viaja com uma onda de proa quase tão longa como a própria flutuação. Em unidades náuticas estima se como 1.34 vezes a raiz do comprimento de flutuação em pés. É uma velocidade crítica, não um travão físico rígido.',
  },
  {
    question: 'Como se calcula a velocidade de casco?',
    answer:
      'Converte a flutuação para pés, tira a raiz e multiplica por 1.34 para obter nós. Uma flutuação de 10 m são cerca de 32.8 ft, logo perto de 7.7 kn. Esse ponto corresponde a um número de Froude próximo de 0.40.',
  },
  {
    question: 'A velocidade de casco aplica se a lanchas de planeio?',
    answer:
      'A fórmula continua a descrever a onda que o casco faria se ficasse em deslocamento. O planeio e muitos semideslocamentos nasceram para subir essa onda. Usa o número como referência e lê a nota da forma de casco.',
  },
  {
    question: 'Devo usar a flutuação ou o comprimento total?',
    answer:
      'Usa o comprimento de flutuação (LWL), o comprimento imerso que realmente faz a onda. O comprimento total, gurupés e lançamentos não fixam o comprimento de onda. Mede o LWL na água, não o LOA do folheto.',
  },
];

const howTo: HullSpeedLocaleContent['howTo'] = [
  {
    name: 'Estica a flutuação',
    text: 'Arrasta o casco, move o rail de flutuação ou escolhe do bote ao barco de trabalho. A velocidade de casco é 1.34 vezes a raiz desse comprimento em pés.',
  },
  {
    name: 'Escolhe a forma de casco',
    text: 'Deslocamento, semideslocamento ou planeio muda a quilha e se o barco consegue sair da própria onda.',
  },
  {
    name: 'Lê o oco',
    text: 'Na velocidade de casco a onda de proa e a de popa ficam a uma flutuação de distância e o barco assenta no seio. Essa é a barreira.',
  },
  {
    name: 'Compara um registo',
    text: 'Introduz a velocidade na água. Uma onda mais curta significa que ainda empurras barato. Uma onda mais longa significa que estás a subir o oco.',
  },
];

const seo: HullSpeedLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'O que a velocidade de casco te está a dizer de verdade',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Um casco de deslocamento empurra uma onda da proa e outra da popa. Quando essas cristas ficam a cerca de uma flutuação de distância, o barco viaja com o próprio rasto. A potência extra amontoa então água em vez de comprar velocidade. Essa condição é o que os marinheiros chamam velocidade de casco.',
  },
  {
    type: 'paragraph',
    html: 'A calculadora usa a razão amadora habitual de 1.34 nós por raiz dos pés de flutuação. Cascos finos e longos podem ir um pouco mais alto; chatas, mais baixo. Trata o resultado como marca de estudo e compara com um registo real.',
  },
  {
    type: 'title',
    text: 'Exemplos de flutuação resolvidos',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Flutuação', 'Velocidade de casco', 'Barco típico'],
    rows: [
      ['4.2 m / 13.8 ft', '5.0 kn', 'Bote'],
      ['6.5 m / 21.3 ft', '6.2 kn', 'Daysailer'],
      ['10 m / 32.8 ft', '7.7 kn', 'Cruzeiro familiar'],
      ['13.5 m / 44.3 ft', '8.9 kn', 'Iate de alto mar'],
      ['18 m / 59.1 ft', '10.3 kn', 'Pequeno barco de trabalho'],
    ],
  },
  {
    type: 'title',
    text: 'Como ler a onda de proa',
    level: 2,
  },
  {
    type: 'list',
    items: [
      'Abaixo da marca a onda é curta e o barco ainda é barato de empurrar.',
      'Perto da marca a onda de proa endireita se e combustível ou vela compram menos velocidade.',
      'Sobre a marca o comprimento de onda iguala o LWL. Um casco de deslocamento está na barreira clássica.',
      'Acima, um casco de deslocamento sobe o rasto. Um de planeio pode já ir levantado.',
    ],
  },
  {
    type: 'tip',
    title: 'Mede LWL, não LOA',
    html: 'O comprimento do folheto inclui lançamentos. A onda importa se com a flutuação imersa. Se só tens LOA, a velocidade de casco calculada será otimista.',
  },
  {
    type: 'title',
    text: 'O número de Froude numa frase',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'A velocidade de casco é um embrulho cómodo de um número de Froude perto de 0.40: velocidade dividida pela raiz da gravidade vezes o comprimento. Por isso flutuações mais longas são mais rápidas mesmo quando a forma do casco não muda. Esticar o LWL é o modo limpo de subir o limite de deslocamento; acrescentar cavalos não é.',
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
    name: `Como usar ${title}`,
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
