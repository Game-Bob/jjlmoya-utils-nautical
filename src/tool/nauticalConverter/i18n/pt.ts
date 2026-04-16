import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { NauticalConverterUI, NauticalConverterLocaleContent } from '../index';

const slug = 'conversor-unidades-pt';
const title = 'Conversor de Unidades Náuticas';
const description =
  'Converta milhas náuticas, nós, braças e pressão atmosférica. Inclui escala Beaufort interativa para a velocidade do vento.';

const ui: NauticalConverterUI = {
  distanceCategoryLabel: 'Distância',
  speedCategoryLabel: 'Velocidade',
  depthCategoryLabel: 'Profundidade',
  pressureCategoryLabel: 'Pressão',
  nmLabel: 'Milha Náutica (nm)',
  kmLabel: 'Quilómetro (km)',
  miLabel: 'Milha Terrestre (mi)',
  cableLabel: 'Cabo (Cable)',
  knLabel: 'Nó (kn)',
  kmhLabel: 'km/h',
  msLabel: 'm/s',
  mphLabel: 'mph',
  brozaLabel: 'Braça',
  mLabel: 'Metro (m)',
  ftLabel: 'Pé (ft)',
  mbarLabel: 'Milibar (mbar)',
  mmhgLabel: 'mmHg',
  inhgLabel: 'inHg',
  atmLabel: 'Atmosfera (atm)',
  windSeaLabel: 'Estado do mar',
  forceLabel: 'Força',
  effectLabel: 'Efeito',
  copyLabel: 'Copiar valor',
  faqTitle: 'Perguntas Frequentes',
  bibliographyTitle: 'Bibliografia',
};

const faq: NauticalConverterLocaleContent['faq'] = [
  {
    question: 'Quantos quilómetros tem uma milha náutica?',
    answer: 'Uma milha náutica equivale exatamente a 1,852 quilómetros, ou 1852 metros. Esta medida corresponde a um minuto de arco de latitude na superfície da Terra.',
  },
  {
    question: 'Qual é a diferença entre um nó e um quilómetro por hora?',
    answer: 'Um nó equivale a 1,852 km/h, uma vez que um nó é uma milha náutica por hora. Para converter nós para km/h basta multiplicar por 1,852.',
  },
  {
    question: 'Porque se usam milhas náuticas em vez de quilómetros no mar?',
    answer: 'Porque uma milha náutica corresponde a um minuto de arco de latitude, o que simplifica enormemente os cálculos de navegação com carta e bússola. Uma variação de um minuto de arco de latitude equivale exatamente a uma milha náutica.',
  },
  {
    question: 'O que é a escala Beaufort?',
    answer: 'É uma escala empírica que relaciona a velocidade do vento com os efeitos observáveis no mar. Varia de 0 (calma) a 12 (furacão) e é essencial para a navegação costeira e oceânica.',
  },
  {
    question: 'Qual unidade de pressão é usada na meteorologia marinha?',
    answer: 'A meteorologia marinha usa principalmente o milibar (mbar) ou seu equivalente hectopascal (hPa). A pressão atmosférica normal ao nível do mar é de 1013,25 mbar.',
  },
  {
    question: 'Quantos pés tem uma braça?',
    answer: 'Uma braça equivale exatamente a 6 pés, ou seja, 1,8288 metros. É usada principalmente em países de língua inglesa para expressar profundidades em cartas náuticas antigas.',
  },
];

const howTo: NauticalConverterLocaleContent['howTo'] = [
  {
    name: 'Selecione a categoria de conversão',
    text: 'Clique numa das quatro abas: Distância, Velocidade, Profundidade ou Pressão, dependendo da grandeza que deseja converter.',
  },
  {
    name: 'Introduza o valor em qualquer campo',
    text: 'Digite o número na unidade que conhece. Todas as outras unidades serão atualizadas automaticamente em tempo real.',
  },
  {
    name: 'Consulte a escala Beaufort (velocidade)',
    text: 'Quando introduz uma velocidade na aba Velocidade, aparecerá um cartão mostrando a força Beaufort correspondente e o estado do mar esperado.',
  },
  {
    name: 'Copie o resultado',
    text: 'Utilize o botão de copiar ao lado de qualquer campo para copiar o valor para a área de transferência.',
  },
];

const bibliography: NauticalConverterLocaleContent['bibliography'] = [
  {
    name: 'Instituto Hidrografico de la Marina',
    url: 'https://armada.defensa.gob.es/ihm/',
  },
  {
    name: 'NOAA - National Weather Service',
    url: 'https://www.weather.gov/mfl/beaufort',
  },
];

const seo: NauticalConverterLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'A importância da precisão nas unidades náuticas',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Navegar no mar requer uma linguagem própria, um sistema de medição refinado ao longo de séculos de exploração marítima. As unidades náuticas não são uma peculiaridade histórica, mas ferramentas matematicamente coerentes alinhadas com a geometria da Terra e as necessidades práticas do navegador.',
  },
  {
    type: 'paragraph',
    html: 'Diferente de em terra, onde um erro de poucos metros raramente tem consequências graves, no mar uma conversão errada pode significar a diferença entre ancorar em águas seguras ou encalhar num baixio. A precisão nas unidades não é uma questão académica: é navegação.',
  },
  {
    type: 'paragraph',
    html: 'Quando nos afastamos da costa, a falta de referências visuais torna a posição calculada a única realidade sobre a qual podemos agir. Saber converter com precisão entre milhas náuticas, quilómetros, nós e metros não é opcional para o navegador responsável.',
  },
  {
    type: 'title',
    text: 'Porque usamos milhas náuticas em vez de quilómetros?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'A resposta reside na própria forma da Terra. Uma <strong>milha náutica</strong> equivale exatamente a um minuto de arco de latitude na superfície da Terra, ou seja, 1852 metros. Esta correspondência direta entre medição angular e distância linear é a chave do seu uso universal na navegação.',
  },
  {
    type: 'paragraph',
    html: 'Ao utilizar esta unidade, uma variação de um minuto de arco de latitude numa carta náutica corresponde sempre exatamente a uma milha náutica percorrida. Isto simplifica enormemente os cálculos de posição, velocidade e tempo de chegada sem necessidade de fatores de conversão adicionais.',
  },
  {
    type: 'title',
    text: 'Velocidade no mar: O nó',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'O <strong>nó</strong> é a unidade de velocidade equivalente a uma milha náutica por hora. O seu nome provém da antiga técnica de medir a velocidade lançando à água uma peça de madeira atada a uma corda com nós em intervalos regulares e contando quantos nós passavam entre os dedos num tempo fixo.',
  },
  {
    type: 'paragraph',
    html: 'Hoje, embora utilizemos satélites GPS e sistemas eletrónicos sofisticados, o nó continua a ser a unidade padrão na aviação internacional e na navegação marítima. Um nó equivale a 1,852 km/h ou 0,514 m/s.',
  },
  {
    type: 'title',
    text: 'Profundidade e ancoragem: Braças, Metros e Pés',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'No mundo náutico, a profundidade não é meramente uma estatística: é a diferença entre uma ancoragem segura e um encalhe. Historicamente, a <strong>braça</strong> (1,8288 metros ou exatamente 6 pés) era a unidade predominante para medir profundidades no mundo de língua inglesa.',
  },
  {
    type: 'paragraph',
    html: 'No entanto, a globalização e a tecnologia introduziram o uso constante de metros na maioria das cartas e ecosondas modernos. O navegador moderno deve sentir-se à vontade ao transitar entre braças, metros e pés, especialmente ao consultar cartas náuticas antigas ou instrumentos calibrados em unidades imperiais.',
  },
  {
    type: 'title',
    text: 'Meteorologia e Pressão Atmosférica',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Para um comandante, o barómetro é o oráculo do tempo. A pressão atmosférica, medida em <strong>milibares</strong> (mbar), é o indicador mais fiável de mudanças meteorológicas iminentes. Uma queda rápida na pressão anuncia a chegada de ventos fortes e mau tempo.',
  },
  {
    type: 'paragraph',
    html: 'Compreender as variações de pressão é vital para qualquer navegador. A pressão atmosférica normal ao nível do mar é de 1013,25 mbar (uma atmosfera). Valores mais altos indicam tempo estável, enquanto valores mais baixos, especialmente se caírem rapidamente, sinalizam a aproximação de sistemas de baixa pressão potencialmente perigosos.',
  },
  {
    type: 'title',
    text: 'Escalas de Vento e Mar: De Beaufort a Douglas',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'A velocidade do vento em nós é um número que ganha vida quando associado à <strong>escala Beaufort</strong>. Desenvolvida pelo almirante britânico Francis Beaufort em 1805, esta escala empírica relaciona a velocidade do vento com efeitos observáveis tanto na superfície do mar como em terra.',
  },
  {
    type: 'list',
    items: [
      '<strong>Força 0-3 (0-10 kn):</strong> Condições de navegação tranquilas, ideais para aprendizagem ou passeios em família.',
      '<strong>Força 4-5 (11-21 kn):</strong> Vento ideal para a vela em iates, com ondas moderadas e cristas brancas.',
      '<strong>Força 6-7 (22-33 kn):</strong> Condições de vento forte a quase vendaval. Experiência e rizos recomendados.',
      '<strong>Força 8+ (acima de 34 kn):</strong> Vendaval. Apenas para navegadores experientes com embarcações adequadas.',
    ],
  },
  {
    type: 'paragraph',
    html: 'Da mesma forma, a escala Douglas classifica o estado do mar em graus de 0 (quase liso) a 9 (fenomenal), permitindo ao navegador antecipar condições além do horizonte com base em reportes meteorológicos.',
  },
  {
    type: 'tip',
    title: 'Dica de Segurança',
    html: 'Ao usar este conversor para planear uma viagem, tenha sempre em mente que as condições reais podem diferir das previsões. Consulte as previsões meteorológicas oficiais e nunca subestime a capacidade do mar de mudar rapidamente.',
  },
  {
    type: 'title',
    text: 'Planeamento offline e mobilidade',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Esta ferramenta foi desenhada para funcionar sem ligação à internet uma vez carregada no navegador, tornando-a ideal para uso a bordo onde a conectividade pode ser limitada. Todas as conversões são calculadas localmente no dispositivo, sem enviar quaisquer dados para um servidor.',
  },
];

const schemas: NauticalConverterLocaleContent['schemas'] = [
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

export const content: NauticalConverterLocaleContent = {
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
