import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TideCalculatorUI, TideCalculatorLocaleContent } from '../index';

const slug = 'calculadora-mare';
const title = 'Calculadora de Altura de Marés';
const description =
  'Estime a profundidade da água em qualquer ponto do ciclo de maré usando a Regra dos Dozeavos náutica. Ideal para planeamento costeiro e estudo para cartas de marinheiro.';

const ui: TideCalculatorUI = {
  parametersLabel: 'Parâmetros',
  highTideLabel: 'Preia-mar',
  lowTideLabel: 'Baixa-mar',
  targetTimeLabel: 'Hora da consulta',
  estimatedHeightLabel: 'Altura Estimada',
  metersLabel: 'metros',
  amplitudeLabel: 'Amplitude',
  durationLabel: 'Duração',
  tableBreakdownLabel: 'Detalhamento em Dozeavos',
  tableHourLabel: 'Hora',
  tableStateLabel: 'Estado',
  tableStartLabel: 'Início',
  tableEndLabel: 'Fim',
  statusUpLabel: 'A encher',
  statusDownLabel: 'A vazar',
  statusOutOfRange: 'Fora do intervalo',
  faqTitle: 'Perguntas Frequentes': 'Bibliografia',
};

const faq: TideCalculatorLocaleContent['faq'] = [
  {
    question: 'O que é a Regra dos Dozeavos e para que serve?',
    answer:
      'A Regra dos Dozeavos é um método matemático simplificado usado na navegação para estimar a altura da maré em qualquer momento entre a preia-mar e a baixa-mar. Baseia-se na observação de que o fluxo da maré segue uma curva aproximadamente sinusoidal, dividindo a amplitude total em 12 partes ao longo de 6 horas (1/12, 2/12, 3/12, 3/12, 2/12, 1/12).',
  },
  {
    question: 'Este método é fiável para a navegação real?',
    answer:
      'É um método de estimativa teórica muito útil para planeamento rápido e fins educativos. No entanto, não contabiliza fatores meteorológicos como a pressão atmosférica ou o vento, que podem alterar o nível do mar em vários decímetros. Para a navegação real, consulte sempre as tabelas de marés oficiais.',
  },
  {
    question: 'De que dados preciso para calcular a altura da maré?',
    answer:
      'Precisa da hora e da altura (em metros) da preia-mar e da baixa-mar mais próximas do momento que deseja consultar. Estes dados encontram-se nos almanaques de marés ou em aplicações de meteorologia marinha.',
  },
  {
    question: 'Porque é que a maré nem sempre sobe à mesma velocidade?',
    answer:
      'Devido à inércia das grandes massas de água e à configuração das bacias oceânicas. A maré começa a subir lentamente após a baixa-mar, atinge a velocidade máxima nas horas centrais (as horas 3/12 e 4/12) e abranda novamente ao aproximar-se da preia-mar.',
  },
  {
    question: 'Como é que a pressão atmosférica afeta a maré?',
    answer:
      'A alta pressão (anticiclone) empurra a água para baixo, reduzindo a altura real. A baixa pressão (depressão) permite que a água suba mais. Como regra geral, uma variação de 1 hPa em relação à média corresponde a aproximadamente 1 cm de alteração no nível do mar.',
  },
  {
    question: 'O que é a amplitude de maré?',
    answer:
      'É a diferença vertical de altura entre uma preia-mar e a baixa-mar imediatamente anterior ou seguinte. Esta medição varia de acordo com a fase lunar (marés de águas vivas e águas mortas) e a localização geográfica.',
  },
];

const howTo: TideCalculatorLocaleContent['howTo'] = [
  {
    name: 'Identificar preia-mar e baixa-mar',
    text: 'Consulte o seu almanaque de marés para obter as horas e alturas para o ciclo de maré em que está interessado.',
  },
  {
    name: 'Introduzir os dados na calculadora',
    text: 'Insira a hora e altura da preia-mar e baixa-mar. A ferramenta determinará a duração e a amplitude automaticamente.',
  },
  {
    name: 'Definir a hora da consulta',
    text: 'Ajuste a hora para a qual deseja conhecer o nível da água. Verá o ponto exato realçado no gráfico.',
  },
  {
    name: 'Analisar a tabela de dozeavos',
    text: 'Reveja o detalhamento hora a hora para compreender como o nível da água irá flutuar ao longo de todo o período.',
  },
];

const seo: TideCalculatorLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Dominar a Maré: A Regra dos Dozeavos na Navegação',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'A navegação costeira e a entrada em portos com profundidade restrita exigem um conhecimento preciso da profundidade da água em todos os momentos. Embora hoje existam aplicações digitais e GPS que fornecem dados em tempo real, a <strong>Regra dos Dozeavos</strong> continua a ser uma ferramenta fundamental na formação de qualquer mestre de embarcação de recreio ou capitão de iate. Esta regra é um método de estimativa matemática que permite calcular, aproximadamente e sem calculadoras complexas, a altura da maré em qualquer ponto de um ciclo de maré.',
  },
  {
    type: 'title',
    text: 'O que é exatamente a Regra dos Dozeavos?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'A Regra dos Dozeavos baseia-se na observação de que o fluxo da maré não é constante. A água não sobe nem desce à mesma velocidade durante as aproximadamente seis horas entre a preia-mar e a baixa-mar. Em vez disso, o movimento segue uma curva sinusoidal. Durante a primeira hora a maré move-se lentamente; acelera nas horas centrais e abranda novamente ao aproximar-se do próximo extremo.',
  },
  {
    type: 'table',
    headers: ['Hora do Ciclo', 'Proporção', 'Estado do Fluxo'],
    rows: [
      ['<strong>1ª Hora</strong>', '1/12 da amplitude', 'Início lento (Estofa de baixa)'],
      ['<strong>2ª Hora</strong>', '2/12 da amplitude', 'Fluxo em aceleração'],
      ['<strong>3ª Hora</strong>', '3/12 da amplitude', 'Fluxo máximo (Corrente forte)'],
      ['<strong>4ª Hora</strong>', '3/12 da amplitude', 'Fluxo sustentado'],
      ['<strong>5ª Hora</strong>', '2/12 da amplitude', 'Desaceleração notável'],
      ['<strong>6ª Hora</strong>', '1/12 da amplitude', 'Abrandamento final (Em direção à estofa de preia-mar)'],
    ],
  },
  {
    type: 'title',
    text: 'Limitações técnicas: Fatores que afetam a maré real',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: 'Pressão atmosférica', definition: 'Uma depressão eleva o nível do mar; um anticiclone baixa-o. Como regra geral, ~1 cm de variação por cada hPa de diferença em relação à média.' },
      { term: 'Vento costeiro', definition: 'Ventos sustentados de terra para mar ou mar para terra podem acumular água acima dos níveis previstos nas tabelas de marés.' },
      { term: 'Topografia local', definition: 'A forma da costa, a profundidade do fundo do mar e a presença de estuários podem atrasar ou acelerar significativamente o fluxo da maré.' },
    ],
  },
  {
    type: 'tip',
    title: 'Nota de Segurança',
    html: 'Esta ferramenta utiliza um método de estimativa matemática. Não contabiliza fatores meteorológicos ou topografia local. Para a navegação real, consulte sempre as tabelas de marés oficiais.',
  },
  {
    type: 'title',
    text: 'Conceitos-chave para novos marinheiros',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Amplitude de maré',
        definition: 'Diferença vertical entre a preia-mar e a baixa-mar. Na costa atlântica pode ser de vários metros; no Mediterrâneo é quase desprezível.',
      },
      {
        term: 'Duração da maré',
        definition: 'Intervalo de tempo entre a preia-mar e a baixa-mar seguinte. Tipicamente cerca de 6 horas e 12 minutos (ciclo semidiurno).',
      },
      {
        term: 'Zero Hidrográfico (Chart datum)',
        definition: 'Nível de referência a partir do qual todas as profundidades nas cartas náuticas são medidas. As profundidades reais quase nunca são inferiores às indicadas.',
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
    name: `Como usar: ${title}`,
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
