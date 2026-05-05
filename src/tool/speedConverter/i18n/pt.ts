import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SpeedConverterUI, SpeedConverterLocaleContent } from '../index';

const slug = 'conversor-velocidade';
const title = 'Conversor de Velocidade Náutica e Escala Beaufort';
const description =
  'Converta instantaneamente entre nós, km/h, m/s e mph. Inclui a tabela de Beaufort completa com descrições do estado do mar e efeitos do vento.';

const beaufortData = [
  { force: 0, name: 'Calmo', sea: 'Mar espelhado', effect: 'O fumo sobe verticalmente', kn: '0' },
  { force: 1, name: 'Aragem', sea: 'Rugas com aparência de escamas', effect: 'A direção do vento é indicada pelo fumo mas não pelo catavento', kn: '1-3' },
  { force: 2, name: 'Brisa leve', sea: 'Pequenas ondas, cristas sem quebrar', effect: 'Sente-se o vento na cara, as folhas sussurram', kn: '4-6' },
  { force: 3, name: 'Brisa fraca', sea: 'Ondas maiores, alguns carneiros (espuma branca)', effect: 'Folhas e galhos pequenos em movimento', kn: '7-10' },
  { force: 4, name: 'Brisa moderada', sea: 'Ondas pequenas a alongar, muitos carneiros', effect: 'Levanta poeira e papéis soltos', kn: '11-16' },
  { force: 5, name: 'Brisa forte', sea: 'Ondas moderadas, muitos carneiros', effect: 'As árvores pequenas começam a balançar', kn: '17-21' },
  { force: 6, name: 'Vento fresco', sea: 'Ondas grandes começam a formar-se, cristas de espuma branca', effect: 'Dificuldade em usar o guarda-chuva', kn: '22-27' },
  { force: 7, name: 'Vento forte', sea: 'O mar encapela-se, a espuma é soprada em faixas', effect: 'Dificuldade em andar contra o vento', kn: '28-33' },
  { force: 8, name: 'Muito forte', sea: 'Ondas altas, os borrifos de água reduzem a visibilidade', effect: 'Muita dificuldade em andar', kn: '34-40' },
  { force: 9, name: 'Baleeiro', sea: 'Ondas muito altas, o mar "rola"', effect: 'Ocorrem danos em estruturas', kn: '41-47' },
  { force: 10, name: 'Tempestade', sea: 'Ondas excecionalmente altas, mar todo branco', effect: 'Árvores arrancadas, danos consideráveis', kn: '48-55' },
  { force: 11, name: 'Tempestade violenta', sea: 'Ondas enormes, espuma cobre o mar', effect: 'Danos generalizados', kn: '56-63' },
  { force: 12, name: 'Furacão', sea: 'O ar está cheio de espuma e borrifos', effect: 'Catástrofe total', kn: '64+' },
];

const ui: SpeedConverterUI = {
  knLabel: 'Nós (kt)',
  kmhLabel: 'Quilómetros/hora',
  msLabel: 'Metros/segundo',
  mphLabel: 'Milhas/hora',
  beaufortTitle: 'Escala Beaufort',
  forceLabel: 'Força',
  descriptionLabel: 'Descrição',
  knotsLabel: 'Nós',
  effectLabel: 'Efeito Visual',
  seaStateLabel: 'Estado do Mar',
  windEffectLabel: 'Efeito em Terra',
  beaufortDataJson: JSON.stringify(beaufortData),
};

const faq: SpeedConverterLocaleContent['faq'] = [
  {
    question: 'Porque é que a velocidade do barco é medida em nós?',
    answer: 'O nó é uma unidade de velocidade equivalente a uma milha náutica por hora. A sua origem é histórica: os marinheiros mediam a velocidade da embarcação lançando ao mar um pedaço de madeira atado a uma corda com nós a distâncias iguais, contando quantos nós passavam pelos seus dedos num determinado tempo. Hoje continua a ser a unidade padrão internacional na navegação marítima e aviação.',
  },
  {
    question: 'O que é a Escala Beaufort e como é usada na navegação?',
    answer: 'A Escala Beaufort é uma escala empírica que relaciona a velocidade do vento com os efeitos observados no mar e em terra. Desenvolvida pelo almirante britânico Francis Beaufort em 1805, varia de 0 (calma absoluta) a 12 (furacão). Os velejadores usam-na para estimar a intensidade do vento sem instrumentos, observando o estado do mar.',
  },
  {
    question: 'Qual é a diferença entre SOG e STW na navegação?',
    answer: 'SOG (Speed Over Ground) é a velocidade real da embarcação em relação ao fundo do mar, medida por GPS. STW (Speed Through Water) ou velocidade de odómetro é a velocidade da embarcação em relação à água circundante. A diferença entre ambas reflete o efeito das correntes marinhas. A SOG é usada para planear chegadas e calcular combustível; a STW é usada para calcular o abatimento (leeway).',
  },
  {
    question: 'Quantos km/h é um nó?',
    answer: 'Um nó equivale exatamente a 1,852 quilómetros por hora, que é o comprimento de uma milha náutica (definida como um minuto de arco do meridiano terrestre). Portanto, 10 nós equivalem a 18,52 km/h, 20 nós equivalem a 37,04 km/h e 30 nós equivalem a 55,56 km/h.',
  },
];

const howTo: SpeedConverterLocaleContent['howTo'] = [
  {
    name: 'Introduza a velocidade em qualquer unidade',
    text: 'Digite o valor da velocidade no campo correspondente (nós, km/h, m/s ou mph) e todos os outros campos serão atualizados automaticamente.',
  },
  {
    name: 'Verifique a força Beaufort equivalente',
    text: 'O cartão Beaufort mostra em tempo real a força do vento correspondente à velocidade introduzida, com o estado do mar e efeitos em terra.',
  },
  {
    name: 'Clique numa linha da tabela Beaufort',
    text: 'Pode selecionar diretamente qualquer grau Beaufort na tabela abaixo para ver a sua velocidade mínima em todos os formatos.',
  },
  {
    name: 'Use os resultados para planear a sua navegação',
    text: 'Combine a informação de velocidade e vento para decidir se as condições são apropriadas para o seu tipo de embarcação e para a travessia planeada.',
  },
];

const seo: SpeedConverterLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Guia do Conversor de Velocidade Náutica e Escala Beaufort',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'A velocidade é um dado fundamental na navegação marítima. Saber quantos nós o seu barco está a fazer, como isso se traduz em quilómetros por hora para planear uma travessia, ou que força Beaufort representa o vento que está a sentir, são cálculos que todos os marinheiros precisam de dominar.',
  },
  {
    type: 'paragraph',
    html: 'Este conversor de velocidade náutica permite-lhe transformar entre nós, km/h, m/s e mph instantaneamente, identificando automaticamente a força Beaufort correspondente com a descrição do estado do mar e efeitos de vento observáveis.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Unidade Padrão', value: 'Nós (kt)', icon: 'mdi:speedometer' },
      { label: 'Escala de Vento', value: 'Beaufort (0-12)', icon: 'mdi:weather-windy' },
      { label: 'Conversão Chave', value: '1 kt = 1,85 km/h', icon: 'mdi:swap-horizontal' },
    ],
  },
  {
    type: 'title',
    text: 'Porque é que a velocidade é medida em Nós?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'O <strong>nó (kt)</strong> é a unidade oficial de velocidade na navegação marítima e aérea. A sua definição é precisa: um nó equivale a uma milha náutica por hora, onde a milha náutica (1852 m) é definida como um minuto de arco do meridiano terrestre. Esta relação direta com a geometria da Terra é o que faz do nó uma unidade particularmente prática para a navegação, permitindo estimar distâncias diretamente numa carta náutica sem qualquer conversão.',
  },
  {
    type: 'paragraph',
    html: 'Historicamente, os marinheiros mediam a velocidade da embarcação usando o <em>barquinho (chip log)</em>: um pedaço de madeira triangular lançado ao mar preso a uma linha com nós a cada 14,4 metros (a fração proporcional de uma milha náutica em 30 segundos). Contar os nós que passavam pelos seus dedos durante esse tempo dava-lhes a velocidade da embarcação, dando origem ao termo que usamos hoje.',
  },
  {
    type: 'title',
    text: 'A Escala Beaufort: O Olho do Marinheiro',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'A <strong>Escala Beaufort</strong> foi desenvolvida em 1805 pelo almirante britânico Sir Francis Beaufort como um método empírico para classificar a força do vento a partir de efeitos observáveis, sem instrumentação. Originalmente concebida para estimar quanta vela um navio podia carregar, é hoje uma referência universal na meteorologia marítima, adotada pela Organização Meteorológica Mundial (OMM).',
  },
  {
    type: 'paragraph',
    html: 'A escala varia de <strong>Força 0</strong> (calma absoluta, mar espelhado) a <strong>Força 12</strong> (condições de furacão com ondas acima de 14 metros e o ar cheio de espuma e borrifos de água). Para o velejador de recreio, os limites críticos são geralmente a Força 6 (vento fresco, 22-27 nós) para embarcações ligeiras e Força 7-8 para iates de cruzeiro oceânico.',
  },
  {
    type: 'table',
    headers: ['Força Beaufort', 'Descrição', 'Estado do Mar'],
    rows: [
      ['0', 'Calma', 'Mar espelhado'],
      ['3', 'Brisa fraca', 'Alguns carneiros, as cristas começam a quebrar'],
      ['6', 'Vento fresco', 'Ondas grandes, cristas de espuma branca, borrifos de água possíveis'],
      ['9', 'Baleeiro', 'Ondas muito altas, visibilidade reduzida por espuma e borrifos'],
      ['12', 'Furacão', 'O ar está completamente cheio de espuma, o mar está totalmente branco'],
    ],
  },
  {
    type: 'title',
    text: 'Glossário de Velocidade Náutica',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: 'Nó (kt)', definition: 'Unidade de velocidade igual a uma milha náutica por hora (1852 m/h). Padrão internacional na navegação marítima e aérea.' },
      { term: 'SOG (Speed Over Ground)', definition: 'Velocidade real da embarcação em relação ao fundo do mar, medida por GPS. Reflete o efeito das correntes marinhas na velocidade do barco.' },
      { term: 'Velocidade de Odómetro (STW)', definition: 'Velocidade da embarcação em relação à água circundante, medida pelo odómetro. Não inclui efeitos de corrente; fundamental para calcular o abatimento.' },
      { term: 'Vento Aparente', definition: 'O vento sentido pela tripulação a bordo, resultado da soma vetorial do vento real com o vento criado pelo avanço da embarcação. Difere sempre do vento real em intensidade e direção.' },
    ],
  },
  {
    type: 'title',
    text: 'Fórmulas de Conversão Rápida',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Para converter velocidades manualmente quando não tem acesso a um conversor digital, use estas aproximações que todos os marinheiros devem saber de cor:',
  },
  {
    type: 'list',
    items: [
      '<strong>Nós para km/h:</strong> Multiplique os nós por 1,852. Aproximação rápida: nós x 2, menos 8%%. Por exemplo, 10 kt ≈ 20 - 1,6 = 18,4 km/h.',
      '<strong>Nós para mph:</strong> Multiplique os nós por 1,15. Aproximação: nós + 15%%. Por exemplo, 20 kt ≈ 23 mph.',
      '<strong>Nós para m/s:</strong> Multiplique os nós por 0,514. Aproximação rápida: divida os nós por 2. Por exemplo, 10 kt ≈ 5 m/s (exato: 5,14 m/s).',
    ],
  },
  {
    type: 'tip',
    title: 'Segurança e Climatologia',
    html: 'Antes de sair, consulte sempre a previsão meteorológica marítima. Beaufort 4-5 é gerível para a maioria das embarcações de recreio; a partir da Força 6, considere seriamente adiar a partida se não tiver experiência suficiente ou se o seu barco não estiver preparado para essas condições.',
  },
  {
    type: 'title',
    text: 'Comparação de Equipamento',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Anemómetro Digital',
        description: 'Instrumento eletrónico para medição precisa da velocidade do vento.',
        icon: 'mdi:speedometer',
        points: [
          'Precisão de ±2%% em condições normais',
          'Requer energia elétrica ou pilhas',
          'Pode falhar em condições extremas',
          'Leitura instantânea e registo de dados',
        ],
      },
      {
        title: 'Observação Beaufort',
        description: 'Estimativa visual da força do vento a partir de efeitos observáveis no mar e em terra.',
        icon: 'mdi:eye-outline',
        highlight: true,
        points: [
          'Não requer qualquer instrumento',
          'Disponível em qualquer condição',
          'Precisão suficiente para decisões de segurança',
          'Habilidade fundamental do navegador experiente',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Navegação e Planeamento de Travessia',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Ao planear uma travessia, a velocidade da sua embarcação determina os tempos estimados de chegada (ETA) e o consumo de combustível para embarcações a motor. Para um veleiro, a velocidade também depende da intensidade e direção do vento: conhecer a força Beaufort prevista permite-lhe antecipar se poderá navegar à vela ou se precisará do motor.',
  },
  {
    type: 'paragraph',
    html: 'Nas regatas, a conversão entre nós e metros por segundo é especialmente útil para calcular a VMG (Velocity Made Good) e para analisar as polares de velocidade. Os meteorologistas e os modelos de previsão numérica dão normalmente o vento em m/s ou km/h, por isso a conversão para nós é um passo rotineiro no planeamento táctico.',
  },
];

const schemas: SpeedConverterLocaleContent['schemas'] = [
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

export const content: SpeedConverterLocaleContent = {
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
