import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EnduranceUI, EnduranceLocaleContent } from '../index';

const slug = 'calculadora-autonomia-pt';
const title = 'Calculadora de Autonomia Náutica';
const description =
  'Calcule a sua autonomia máxima e distância de segurança com base no consumo de combustível, capacidade do tanque e velocidade de cruzeiro. Gestão de combustível para barcos a motor.';

const ui: EnduranceUI = {
  tankCapacityLabel: 'Capacidade do Tanque',
  mainTankLabel: 'Principal',
  auxTankLabel: 'Auxiliar',
  currentFuelLabel: 'Combustível Atual',
  seaConditionsLabel: 'Condições de Mar / Vento',
  consumptionLabel: 'Consumo Teórico',
  cruiseSpeedLabel: 'Velocidade de Cruzeiro',
  reserveLabel: 'Reserva',
  fuelPriceLabel: 'Preço por Litro',
  maxRangeLabel: 'Autonomia Máxima',
  realPerformanceLabel: 'Desempenho Real',
  hoursLabel: 'Horas de Autonomia',
  safeMilesLabel: 'Milhas Seguras',
  tankValueLabel: 'Valor do Tanque',
  inverseCalcLabel: 'Cálculo Inverso: Quanto preciso reabastecer?',
  desiredDistLabel: 'Distância Desejada',
  minFuelLabel: 'Combustível Mínimo Necessário',
  warningLabel: 'Lembrete: Uma reserva de 20% é o mínimo absoluto recomendado para a segurança náutica.',
  seaCalm: 'Calmo (1.0x)',
  seaLight: 'Marulhento (+15%)',
  seaModerate: 'Mar de pequenas vagas (+30%)',
  seaStorm: 'Temporal (+60%)',
  faqTitle: 'Perguntas Frequentes',
  bibliographyTitle: 'Bibliografia',
};

const faq: EnduranceLocaleContent['faq'] = [
  {
    question: 'Como se calcula a autonomia de um barco a motor?',
    answer: 'A autonomia é calculada dividindo o combustível disponível pelo consumo horário para obter o total de horas, e multiplicando esse tempo pela velocidade de cruzeiro. A ferramenta também aplica um fator de estado do mar para refletir as condições reais de navegação.',
  },
  {
    question: 'Por que se recomenda uma reserva de 20% na navegação náutica?',
    answer: 'A reserva de 20% é um padrão de segurança náutica que garante combustível suficiente em caso de imprevistos: correntes contrárias, desvios por mau tempo, erros nas estimativas de consumo ou necessidade de auxiliar outra embarcação. Muitos seguros e capitanias consideram-no obrigatório.',
  },
  {
    question: 'O que é o desempenho L/NM e como afeta o planeamento?',
    answer: 'O desempenho em litros por milha náutica (L/NM) é a eficiência real do motor nas condições do mar. Ao contrário do consumo horário, permite calcular exatamente quanto combustível precisa para cobrir uma distância específica, independentemente da velocidade.',
  },
  {
    question: 'Como o estado do mar afeta o consumo real?',
    answer: 'O estado do mar aumenta o consumo porque o casco trabalha mais contra a resistência da água e do vento. Com marulhento o consumo sobe 15%, com mar de pequenas vagas 30%, e num temporal pode disparar 60% ou mais. Ignorar este fator pode deixar uma embarcação sem combustível antes de chegar ao porto.',
  },
];

const howTo: EnduranceLocaleContent['howTo'] = [
  {
    name: 'Introduza a capacidade do tanque',
    text: 'Introduza os litros do tanque principal e do auxiliar, se o tiver. A ferramenta calculará a percentagem de enchimento atual.',
  },
  {
    name: 'Introduza o nível de combustível atual',
    text: 'Introduza os litros reais que tem agora. Pode medi-los com o indicador de nível do barco ou estimá-los a partir do último reabastecimento.',
  },
  {
    name: 'Ajuste as condições de navegação',
    text: 'Selecione o estado do mar previsto para a sua travessia. O fator mar corrige o consumo teórico para o consumo real esperado.',
  },
  {
    name: 'Introduza o consumo e a velocidade de cruzeiro',
    text: 'Utilize os dados do fabricante ou os seus próprios registos para o consumo horário e a velocidade a que navega habitualmente.',
  },
  {
    name: 'Reveja a distância segura e o cálculo inverso',
    text: 'A ferramenta mostra quantas milhas pode cobrir com segurança e quanto combustível precisa para chegar a um destino específico.',
  },
];

const bibliography: EnduranceLocaleContent['bibliography'] = [
  {
    name: 'UK Maritime and Coastguard Agency',
    url: 'https://www.gov.uk/government/organisations/maritime-and-coastguard-agency',
  },
  {
    name: 'RYA - Royal Yachting Association',
    url: 'https://www.rya.org.uk/',
  },
];

const seo: EnduranceLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Gestão de Combustível e Autonomia na Navegação a Motor',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'A <strong>autonomia náutica</strong> é um dos cálculos mais críticos antes de zarpar num barco a motor. Saber precisamente quantas milhas pode cobrir com o combustível disponível é a diferença entre uma travessia planeada e uma emergência no mar.',
  },
  {
    type: 'paragraph',
    html: 'Esta calculadora de autonomia integra o <strong>fator de condições do mar</strong>, a percentagem de reserva de segurança e o cálculo inverso de combustível para que a gestão de combustível seja completa e fiável em qualquer situação.',
  },
  {
    type: 'title',
    text: 'A Regra de Ouro: A Regra dos Terços',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'A regra clássica de gestão de combustível na navegação náutica divide o tanque em três partes iguais para garantir sempre uma margem de segurança:',
  },
  {
    type: 'list',
    items: [
      '<strong>Um terço para a ida:</strong> O combustível necessário para chegar ao destino planeado.',
      '<strong>Um terço para o regresso:</strong> O combustível para voltar ao porto de partida ou ao mais próximo.',
      '<strong>Um terço como reserva:</strong> A margem de segurança para imprevistos, correntes ou condições adversas.',
    ],
  },
  {
    type: 'paragraph',
    html: 'Na calculadora pode definir a percentagem de reserva de acordo com os seus próprios critérios, embora <strong>descer abaixo dos 20% nunca seja recomendado</strong>. Com tanques maiores ou travessias longas, muitos skippers experientes aumentam esta margem para 30% ou mesmo 33%.',
  },
  {
    type: 'title',
    text: 'Fatores que afetam o Consumo (l/h)',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'O consumo teórico do fabricante é calculado em condições ideais de laboratório. Na prática, múltiplos fatores alteram o <strong>consumo de combustível real</strong>. A velocidade de casco é o fator mais decisivo: navegar acima da velocidade económica pode duplicar ou triplicar o consumo por milha percorrida.',
  },
  {
    type: 'table',
    headers: ['Estado de Navegação', 'Efeito na Autonomia', 'Conselho'],
    rows: [
      ['<strong>Casco Sujo</strong>', 'Reduz a autonomia até 20%', 'Limpe o casco antes da temporada'],
      ['<strong>Corrente de Proa</strong>', 'Pode reduzir a velocidade efetiva em 30%', 'Calcule sempre com a velocidade em relação ao fundo (SOG)'],
      ['<strong>Vento de Proa</strong>', 'Aumenta a resistência e o consumo em 10-25%', 'Utilize o fator de mar marulhento ou de pequenas vagas'],
      ['<strong>Sobrecarga</strong>', 'Aumenta o calado e a resistência', 'Pese o equipamento e as provisões antes de calcular'],
    ],
  },
  {
    type: 'title',
    text: 'Glossário Técnico de Autonomia',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: 'Desempenho (L/NM)', definition: 'Litros de combustível consumidos por milha náutica percorrida. O indicador mais útil para planear travessias porque liga o consumo à distância real.' },
      { term: 'Velocidade de Cruzeiro', definition: 'A velocidade ideal a que o motor oferece o melhor equilíbrio entre velocidade e consumo. Geralmente entre 70% e 80% da potência máxima.' },
      { term: 'Reserva Crítica', definition: 'A percentagem do tanque que nunca deve ser consumida. Recomenda-se um mínimo de 20% para cobrir contingências e evitar a entrada de ar no circuito de combustível.' },
      { term: 'Consumo Específico', definition: 'Gramas de combustível por quilowatt-hora de potência produzida (g/kWh). Medida técnica do motor que permite comparar a eficiência entre diferentes sistemas de propulsão.' },
    ],
  },
  {
    type: 'title',
    text: 'O Perigo das Lamas e do Movimento',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Uma fonte comum de problemas em embarcações com baixos níveis de combustível são as <strong>lamas no fundo do tanque</strong>. Quando o nível baixa demasiado, os sedimentos acumulados ao longo dos anos podem chegar ao filtro e entupi-lo, deixando o motor sem combustível, mesmo que o manómetro marque alguns litros.',
  },
  {
    type: 'paragraph',
    html: 'O movimento do barco no mar com pouco combustível também pode causar problemas: o líquido oscila com as ondas e pode desferrar momentaneamente a bomba de combustível. Manter a reserva garante que isso não aconteça num momento crítico, como uma manobra de entrada no porto.',
  },
  {
    type: 'tip',
    title: 'Dica para Poupar Combustível',
    html: 'Reduzir a velocidade em 10-15% abaixo da sua velocidade de cruzeiro habitual pode melhorar a eficiência até 30%. Se tiver tempo e o tempo estiver favorável, ir mais devagar é sempre a decisão mais económica e segura.',
  },
  {
    type: 'title',
    text: 'Diferença entre Milhas Náuticas (NM) e Quilómetros',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Uma <strong>milha náutica</strong> equivale a 1.852 metros (1,852 km) e é a unidade de distância universal na navegação marítima e aeronáutica. Baseia-se num minuto de arco de um grau geográfico, o que a torna ideal para a navegação com cartas em coordenadas geográficas. A velocidade em milhas náuticas por hora chama-se nó (kn).',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Manómetro Analógico de Agulha',
        description: 'Sistema de boia tradicional',
        points: [
          'Baixo custo e instalação simples',
          'Não requer eletricidade para funcionar',
          'Impreciso com mar revolto devido ao movimento do combustível',
          'Não mostra o consumo nem a autonomia estimada',
        ],
      },
      {
        title: 'Calculadora de Fluxo Digital',
        description: 'Sensores de fluxo eletrónicos',
        highlight: true,
        points: [
          'Precisão de 1-2% sobre o consumo real',
          'Mostra autonomia, consumo e custos em tempo real',
          'Integrável com chartplotters e NMEA 2000',
          'Requer calibração inicial e manutenção',
        ],
      },
    ],
  },
];

const schemas: EnduranceLocaleContent['schemas'] = [
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

export const content: EnduranceLocaleContent = {
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
