import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { UnderKeelUI, UnderKeelLocaleContent } from '../index';

const slug = 'ukc-calculadora';
const title = 'Calculadora de Margem sob a Quilha UKC';
const description =
  'Calcule a janela de tempo segura para cruzar bancos de areia, canais ou pontos com restrição de calado. Insira o calado do seu barco, a profundidade da carta e os dados de maré.';

const ui: UnderKeelUI = {
  parametersLabel: 'Parâmetros',
  boatDraftLabel: 'Calado do Barco',
  chartDepthLabel: 'Profundidade da Carta',
  safetyMarginLabel: 'Margem de Segurança',
  highTideLabel: 'Preia-mar',
  lowTideLabel: 'Baixa-mar',
  metersLabel: 'metros',
  passWindowLabel: 'Janela de Travessia',
  neededLabel: 'Profundidade necessária',
  tideRequiredLabel: 'Maré mínima necessária',
  statusNeverLabel: 'Sem margem neste ciclo',
  statusAlwaysLabel: 'Seguro durante todo o ciclo',
  statusFromLabel: 'Travessia de:',
  statusUntilLabel: 'Travessia até:',
  bottomLabel: 'FUNDO',
  faqTitle: 'Perguntas Frequentes',
  bibliographyTitle: 'Bibliografia',
};

const faq: UnderKeelLocaleContent['faq'] = [
  {
    question: 'O que é exatamente o cálculo da margem sob a quilha (under-keel clearance)?',
    answer: 'É o cálculo do momento em que existe profundidade suficiente num ponto crítico (como um banco de areia ou canal estreito) para permitir o trânsito seguro de uma embarcação de acordo com o seu calado.',
  },
  {
    question: 'Qual a margem de segurança recomendada?',
    answer: 'Para barcos de recreio, recomenda-se geralmente uma margem de segurança mínima entre 0,5 e 1 metro acima do calado do barco. Esta margem compensa erros nos cálculos de maré ou variações de pressão.',
  },
  {
    question: 'Como é que a ondulação afeta a margem sob a quilha?',
    answer: 'A ondulação gera oscilações verticais no casco. No ponto mais baixo da onda, o barco está mais próximo do fundo do que em repouso. Ao cruzar áreas com ondulação, a margem deve ser aumentada.',
  },
  {
    question: 'O que é a profundidade da carta (chart sounding)?',
    answer: 'É a profundidade mínima num ponto quando a maré está no Zero Hidrográfico (Chart Datum). Soma-se à altura da maré no momento para obter a profundidade total disponível.',
  },
  {
    question: 'O que significa uma profundidade sublinhada na carta?',
    answer: 'Significa que esse ponto seca quando a maré está no Zero Hidrográfico. Precisará de uma altura de maré maior para poder passar por cima.',
  },
  {
    question: 'O que é o efeito Squat?',
    answer: 'É um fenómeno hidrodinâmico pelo qual uma embarcação que navega em canais pouco profundos tende a baixar em relação à sua linha de flutuação. Quanto mais rápido navegar, menos água terá sob a quilha.',
  },
];

const howTo: UnderKeelLocaleContent['howTo'] = [
  {
    name: 'Defina calado e margem',
    text: 'Meça o calado do seu barco no ponto máximo e adicione uma margem de segurança prudente (ex: 0,5 m).',
  },
  {
    name: 'Verifique a profundidade na carta',
    text: 'Encontre o valor de profundidade para o ponto crítico onde irá navegar. Note se é uma área arenosa ou rochosa.',
  },
  {
    name: 'Insira os dados de maré',
    text: 'Use os horários e alturas de preia-mar e baixa-mar do almanaque de marés oficial mais próximo.',
  },
  {
    name: 'Verifique a sua janela de travessia',
    text: 'A ferramenta mostrará o intervalo de tempo exato em que terá profundidade suficiente para navegar com segurança.',
  },
];

const bibliography: UnderKeelLocaleContent['bibliography'] = [
  {
    name: 'Ministerio de Transportes - Recreational Boating',
    url: 'https://www.mitma.gob.es/marina-mercante/nautica-de-recreo/',
  },
  {
    name: 'Portos de Galicia - Tide Tables',
    url: 'https://portosdegalicia.gal/es/taboa-de-mareas',
  },
];

const seo: UnderKeelLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Margem sob a Quilha: Navegar em Segurança sobre Baixios',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'O planeamento de uma travessia não termina com o traçar de um rumo na carta. Para o navegador costeiro, um dos cálculos mais críticos é a <strong>margem sob a quilha (Under-Keel Clearance)</strong>: saber a que horas haverá profundidade suficiente para cruzar um ponto crítico sem encalhar.',
  },
  {
    type: 'title',
    text: 'Profundidade da carta e maré',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Nas cartas náuticas, as profundidades referem-se ao <strong>Zero Hidrográfico (Chart Datum)</strong>. A profundidade real que o seu barco encontrará é a soma dessa profundidade com a altura da maré no momento.',
  },
  {
    type: 'title',
    text: 'Elementos do cálculo: Calado e Margem',
    level: 3,
  },
  {
    type: 'list',
    items: [
      { term: 'Calado máximo carregado', definition: 'A profundidade atingida pelo ponto mais baixo do barco (a quilha) em plena carga.' },
      { term: 'Profundidade da carta', definition: 'O número na carta náutica para o ponto que deseja cruzar. Se sublinhado, o ponto seca no Zero Hidrográfico.' },
      { term: 'Margem de segurança', definition: 'Espaço livre adicional (pelo menos 0,5 a 1 metro) acima do calado.' },
    ],
  },
  {
    type: 'title',
    text: 'Fatores que afetam a travessia',
    level: 3,
  },
  {
    type: 'table',
    headers: ['Factor', 'Efeito', 'Recomendação'],
    rows: [
      ['<strong>Ondulação</strong>', 'Reduz a água sob o casco', 'Aumentar significativamente a margem de segurança'],
      ['<strong>Efeito Squat</strong>', 'Aumenta o calado por sucção', 'Reduzir a velocidade em áreas críticas'],
      ['<strong>Fundo arenoso</strong>', 'Profundidade variável com tempestades', 'Manter o ecobatímetro ligado'],
    ],
  },
  {
    type: 'tip',
    title: 'Dica de Navegação',
    html: 'Se a sua janela de travessia for muito estreita ou o tempo piorar, a decisão mais sensata é esperar até que a maré suba.',
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
    name: `Como usar: ${title}`,
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
