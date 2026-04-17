import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SailAreaUI, SailAreaLocaleContent } from '../index';

const slug = 'calculadora-area-velica';
const title = 'Calculadora de Área Vélica e Relação SA/D';
const description =
  'Calcule a área vélica total e a relação área vélica/deslocamento do seu barco. Análise de performance náutica baseada em medidas I, J, P e E.';

const ui: SailAreaUI = {
  hullSectionLabel: 'Dados do Casco',
  totalMassLabel: 'Deslocamento',
  rigSystemLabel: 'Aparelho',
  intendedUseLabel: 'Uso pretendido',
  rigGeometryLabel: 'Geometria do Aparelho',
  sailConfigLabel: 'Tipo de aparelho',
  genoaOverlapLabel: 'Sobreposição da Genoa',
  foqueLabel: 'Estai',
  genovaLabel: 'Genoa',
  sadRatioLabel: 'Relação SA/D',
  totalAreaLabel: 'Área total',
  performanceLabel: 'Performance',
  sloopLabel: 'Sloop (mastro único)',
  cutterLabel: 'Cutter (vela de proa dupla)',
  ketchLabel: 'Ketch (dois mastros)',
  cruiserLabel: 'Cruzeiro',
  performanceTypeLabel: 'Tipo de Performance',
  racerLabel: 'Regata',
  exportPdfLabel: 'GERAR RELATÓRIO TÉCNICO',
  faqTitle: 'Perguntas Frequentes',
  bibliographyTitle: 'Bibliografia',
};

const faq: SailAreaLocaleContent['faq'] = [
  {
    question: 'Porque é que o meu barco é lento com vento fraco?',
    answer: 'A sua relação SA/D está provavelmente abaixo de 15, indicando um barco de deslocamento pesado com pouca área vélica em relação ao seu peso. Estes barcos precisam de ventos acima de 12 nós para navegar com brio.',
  },
  {
    question: 'Devo esvaziar os tanques de água para melhorar a performance?',
    answer: 'Sim, aliviar o barco melhora diretamente a relação SA/D porque o deslocamento real diminui. Esvaziar tanques de água e combustível pode reduzir o deslocamento em várias centenas de quilos e aumentar significativamente a relação.',
  },
  {
    question: 'O que é o Roach numa vela?',
    answer: 'O Roach é a curva convexa da esteira (bordo de saída) da vela grande. Fornece uma área vélica extra além do triângulo geométrico base definido por P e E. Barcos de regata têm Roaches agressivos com réguas rígidas.',
  },
  {
    question: 'Como meço o deslocamento real do meu barco?',
    answer: 'O método mais fiável é utilizar o deslocamento carregado (com todos os mantimentos, água, combustível e tripulação a bordo). O deslocamento "em vazio" do manual do construtor é geralmente otimista. Utilize o deslocamento real nas suas condições normais de navegação.',
  },
  {
    question: 'Onde posso encontrar as medidas I, J, P e E para o meu barco?',
    answer: 'Encontrará estas medidas no manual do proprietário, em certificados de medição ORC ou IRC, ou na documentação do certificado de classe. Também pode medi-las diretamente a bordo com uma fita métrica ou contactando o estaleiro.',
  },
];

const howTo: SailAreaLocaleContent['howTo'] = [
  {
    name: 'Selecione o tipo de aparelho',
    text: 'Escolha entre Sloop (mastro único), Cutter (estai e vela de estai) ou Ketch (mastro da mezena). Isto determina como a área vélica total é calculada.',
  },
  {
    name: 'Introduza o deslocamento',
    text: 'Utilize o deslocamento real carregado do seu barco em kg ou lbs. Este valor é fundamental para o cálculo da relação SA/D.',
  },
  {
    name: 'Meça a geometria do aparelho',
    text: 'Introduza as medidas P (altura do mastro), E (retranca), I (altura do triângulo de proa) e J (base do triângulo de proa) em metros ou pés.',
  },
  {
    name: 'Ajuste a sobreposição da genoa',
    text: 'Mova o cursor para indicar a sobreposição da sua genoa: 100% é um estai sem sobreposição, 130% é uma genoa padrão, 155% é uma genoa de grande sobreposição.',
  },
  {
    name: 'Interprete a relação SA/D',
    text: 'Uma relação entre 16 e 20 indica um cruzeiro equilibrado. Acima de 20 o barco será muito vivo com vento fraco, mas exigente em condições de vento fresco.',
  },
];

const bibliography: SailAreaLocaleContent['bibliography'] = [
  {
    name: 'Society of Naval Architects and Marine Engineers - SNAME',
    url: 'https://www.sname.org/',
  },
  {
    name: 'ORC - Offshore Racing Congress',
    url: 'https://orc.org/',
  },
  {
    name: 'Elvstrom Sailmakers - Sail Manual',
    url: 'https://www.elvstromsails.com/',
  },
];

const seo: SailAreaLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Calculadora de Área Vélica: Guia Completo de Performance e Relações',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'A área vélica é o motor aerodinâmico de qualquer embarcação à vela. Determina quanta energia do vento o barco pode captar e, combinada com o seu deslocamento, define o seu caráter náutico: se será um cruzeiro lento ou uma máquina de regata reativa. Calcular este valor corretamente é o primeiro passo para compreender o comportamento de qualquer veleiro.',
  },
  {
    type: 'paragraph',
    html: 'Navegar à vela envolve uma dança constante entre a força do vento nas velas e a resistência da água no casco. A <strong>relação Área Vélica / Deslocamento (SA/D)</strong> captura esta relação num único número que permite comparar barcos de qualquer comprimento e deslocamento em termos de igualdade.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Relação Cruzeiro Ideal', value: '15-18', icon: 'mdi:anchor' },
      { label: 'Barcos de Regata', value: '+24', icon: 'mdi:sailing' },
      { label: 'Margem de Erro', value: '5-10%', icon: 'mdi:alert-circle-outline' },
    ],
    columns: 3,
  },
  {
    type: 'title',
    text: 'Para que serve a Relação SA/D?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'A relação <strong>Área Vélica / Deslocamento</strong> é uma ferramenta de diagnóstico que permite prever o comportamento do barco antes de navegar. Uma relação baixa indica um barco robusto e seguro, mas lento com ventos fracos; uma relação elevada oferece velocidade e uma sensação de voar, mas exige maior perícia da tripulação quando o vento aumenta. Nenhuma é superior à outra: tudo depende do tipo de navegação pretendida.',
  },
  {
    type: 'title',
    text: 'Tabela de Referência da Relação SA/D',
    level: 4,
  },
  {
    type: 'table',
    headers: ['Relação', 'Tipo de Barco', 'Comportamento no Mar'],
    rows: [
      ['< 14', 'Deslocamento Pesado / Navio de Carga', 'Estável, lento, precisa de vento constante'],
      ['14 - 16.5', 'Cruzeiro de Travessia Oceânica', 'Equilibrado, confortável, bom à bolina'],
      ['16.5 - 20', 'Cruzeiro Standard de Marina', 'Vivo com brisa, manuseável, versátil'],
      ['20 - 25', 'Performance Cruiser / Sport', 'Rápido, exigente, excitante com ventos leves'],
      ['> 25', 'Racer / Desporto Extremo', 'Muito rápido, nervoso, requer tripulação perita'],
    ],
  },
  {
    type: 'title',
    text: 'Glossário Técnico de Medidas (I, J, P, E)',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'I (Altura do Triângulo de Proa)',
        definition: 'Distância vertical desde o convés até ao ponto onde a adriça da vela de estai se prende no mastro. Define a altura do triângulo de proa.',
      },
      {
        term: 'J (Base do Triângulo de Proa)',
        definition: 'Distância horizontal do mastro à proa (roda de proa). Define a base do triângulo de proa onde as velas de proa são amuradas.',
      },
      {
        term: 'P (Altura do Mastro)',
        definition: 'Distância desde a retranca até à roldana da adriça da vela grande no topo do mastro. Define a altura da vela grande.',
      },
      {
        term: 'E (Comprimento da Retranca)',
        definition: 'Distância desde o mastro até ao punho de escota da vela grande na extremidade da retranca. Define a base da vela grande.',
      },
    ],
  },
  {
    type: 'title',
    text: 'Cálculos para Exames Náuticos (Yachtmaster)',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'O cálculo da área vélica e a relação SA/D fazem parte do programa de exames para <strong>Yachtmaster</strong> e mestre costeiro. Compreender a geometria do aparelho e a sua relação com o deslocamento é essencial para tomar decisões de segurança no mar: rizar a tempo, escolher a genoa certa ou estimar o comportamento do barco antes de um aguaceiro.',
  },
  {
    type: 'tip',
    title: 'Velas de Popa e Segurança',
    html: 'Para navegação oceânica ou de longa distância, uma relação SA/D entre 16 e 18 oferece o melhor equilíbrio entre velocidade e segurança. Barcos com relações acima de 22 podem precisar de rizar com ventos de apenas Força 4-5.',
  },
  {
    type: 'title',
    text: 'Como a Sobreposição da Genoa afeta a Performance?',
    level: 4,
  },
  {
    type: 'paragraph',
    html: 'A <strong>genoa</strong> é a maior vela de proa, cujo punho de escota se posiciona atrás do mastro, "sobrepondo-se" à vela grande. A percentagem de sobreposição indica quanto mais longa é a perpendicular ao luff (LP) em comparação com a distância J. Uma genoa de 150% tem um LP equivalente a 150% de J, proporcionando uma área vélica muito maior do que um simples estai sem sobreposição.',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Dacron (Cruzeiro)',
        description: 'Material clássico para velas de cruzeiro. Robusto e fácil de manter.',
        points: [
          'Alta durabilidade e resistência aos UV',
          'Baixo custo de manutenção',
          'Mais peso e alongamento sob carga',
          'Ideal para navegação costeira e travessias',
        ],
      },
      {
        title: 'Laminados (Regata)',
        description: 'Materiais de alta tecnologia como Kevlar, Spectra ou Dyneema.',
        highlight: true,
        points: [
          'Alongamento mínimo: máxima eficiência aerodinâmica',
          'Muito mais leves que o Dacron',
          'Custo mais elevado e vida útil mais curta',
          'Essenciais em barcos com relação SA/D > 22',
        ],
      },
    ],
    columns: 2,
  },
  {
    type: 'title',
    text: 'Física da Navegação e Estabilidade',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'A área vélica gera uma força propulsora, mas também um <strong>momento de adornamento</strong> que tende a inclinar o barco. A estabilidade é medida pelo momento de restauração que o barco pode opor a esta força de adornamento. Uma relação SA/D elevada num barco com pouco lastro pode ser perigosa, enquanto a mesma relação num barco com uma quilha profunda e pesada é perfeitamente controlável.',
  },
  {
    type: 'paragraph',
    html: 'Para calcular a potência real disponível, os arquitetos navais utilizam frequentemente a <strong>Relação Deslocamento-Comprimento (DLR)</strong> em combinação com o SA/D. Ambas as relações em conjunto descrevem precisamente se um barco é uma balsa pesada ou um planador de regata.',
  },
  {
    type: 'tip',
    title: 'Estabilidade e Segurança',
    html: 'Nunca avalie a SA/D isoladamente. Um veleiro com uma relação de 22 e um ângulo de restauração de 90 graus é muito mais seguro do que um com uma relação de 18 e um ângulo de 60 graus. Consulte sempre a curva de estabilidade do seu barco.',
  },
];

const schemas: SailAreaLocaleContent['schemas'] = [
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

export const content: SailAreaLocaleContent = {
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
