import type { CategoryLocaleContent } from '../index';

const slug = 'vela-e-nautica';
const title = 'Vela & Náutica';
const description =
  'Ferramentas de cálculo náutico para velejadores: marés, autonomia, área vélica, conversores de unidades e velocidade. Ideal para estudo dos exames RYA e Yachtmaster.';

const seo: CategoryLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Por que usar ferramentas digitais na vela e navegação?',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'A navegação moderna passou por uma transformação radical com o advento das ferramentas digitais. Quer você esteja em uma pequena embarcação de recreio ou ao leme de um iate de cruzeiro, a capacidade de processar dados de posição, vento e corrente instantaneamente não é apenas uma questão de conveniência — é um pilar fundamental de segurança no mar.',
  },
  {
    type: 'paragraph',
    html: 'Historicamente, o marinheiro dependia exclusivamente do sextante, do cronômetro marinho e das tabelas de redução para determinar sua posição no vasto oceano. Hoje, embora o romantismo do sextante persista, a realidade operacional exige uma velocidade de resposta que apenas as ferramentas de cálculo digital podem fornecer.',
  },
  {
    type: 'title',
    text: 'Aspectos Fundamentais para o Navegador Moderno',
    level: 2,
  },
  {
    type: 'title',
    text: 'Geolocalização e Cartografia Digital de Alta Precisão',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'A cartografia digital democratizou a navegação, dando até às pequenas embarcações acesso a informações anteriormente limitadas a grandes navios comerciais. Um patrão responsável usa ferramentas digitais para validar seu julgamento, não para substituí-lo.',
  },
  {
    type: 'list',
    items: [
      'Precisão na entrada de dados: Erros tipográficos mínimos podem levá-lo a milhas do seu destino.',
      'Compatibilidade entre dispositivos: Sincronize o planejamento de travessias em um tablet com os instrumentos da ponte.',
      'Backup em caso de falha de hardware: Aplicativos web leves são um seguro caso o plotter de bordo trave.',
      'Planejamento de Travessia: As calculadoras náuticas permitem estimativas precisas do consumo de combustível e das distâncias.',
    ],
  },
  {
    type: 'title',
    text: 'Meteorologia Marinha e Otimização de Rota',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Vento e estado do mar são os verdadeiros soberanos da vela. A interpretação correta das escalas de vento (como a escala Beaufort) e sua conversão para unidades práticas como nós é a realidade cotidiana de qualquer navegador.',
  },
  {
    type: 'tip',
    title: 'A importância da redundância e do Plano B',
    html: 'Nunca confie toda a sua navegação a um único sistema eletrônico. Mantenha sempre um backup dos seus waypoints críticos em papel. As ferramentas web são excelentes para o planejamento pré-travessia, mas um bom velejador sempre tem um plano de emergência que não requer tela.',
  },
  {
    type: 'title',
    text: 'Treinamento Náutico e o Uso de Calculadoras',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Mesmo em exames oficiais para qualificações náuticas (como o RYA Dayskipper ou Yachtmaster), os cálculos em cartas continuam sendo obrigatórios. As ferramentas digitais servem como o companheiro de estudo perfeito, permitindo que os candidatos verifiquem seus exercícios de navegação estimada, cálculos de maré e correções de bússola.',
  },
  {
    type: 'paragraph',
    html: 'Nossa coleção de utilitários tem como objetivo ser essa ponte entre o rigor acadêmico das cartas em papel e a imediatez da navegação moderna. Queremos que cada patrão, entusiasta ou profissional encontre aqui os dados rápidos e precisos de que precisa antes de zarpar.',
  },
];

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo,
};
