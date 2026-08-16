import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AnchorScopeLocaleContent } from '../entry';
import type { AnchorScopeUI } from '../ui';

const slug = 'calculadora-comprimento-corrente-ancoragem';
const title = 'Calculadora de Fondeio e Comprimento de Corrente';
const description =
  'Calcule o comprimento ideal de corrente e cabo de fundeio, razao de scope e raio de giro para fundear com total seguranca com base na sonda e mare.';

const ui: AnchorScopeUI = {
  parametersTitle: 'Parametros',
  waterDepthLabel: 'Profundidade da Carta',
  bowHeightLabel: 'Borda Livre de Proa',
  tideRangeLabel: 'Subida da Mare',
  boatLengthLabel: 'Comprimento Barco (LOA)',
  rodeTypeLabel: 'Linha de Fundeio',
  windConditionLabel: 'Vento e Previsao',
  seabedTypeLabel: 'Tipo de Fundo',
  presetProtected: 'Enseada Calma',
  presetOpen: 'Costa Aberta',
  presetStorm: 'Aviso de Temporal',
  seabedTag: 'Fator Fixacao Fundo',
  catenaryTag: 'Amortecimento Catenaria',
  unitM: 'm',
  unitFt: 'ft',
  unitMeters: 'Metrico (m)',
  unitFeet: 'Imperial (ft)',
  allChainOption: 'Toda Corrente (Catenaria Pesada)',
  ropeChainOption: 'Mista Cabo e Corrente',
  allRopeOption: 'Toda Cabo Textil',
  calmWindOption: 'Calma / Brisa Fraca (< 15 nos)',
  moderateWindOption: 'Brisa Moderada (15 - 25 nos)',
  strongWindOption: 'Vento Forte / Temporal (25 - 35 nos)',
  stormWindOption: 'Temporal Duro (> 35 nos)',
  sandOption: 'Areia (Fixacao Otima)',
  mudOption: 'Lama / Vaso (Boa Fixacao)',
  clayOption: 'Argila Compacta (Excelente)',
  gravelOption: 'Cascalho / Gravilha (Moderada)',
  rockOption: 'Rocha (Risco de Prender)',
  weedOption: 'Algas / Ervas (Fraca)',
  resultsTitle: 'Analise de Fundeio e Dimensoes',
  scopeRatioLabel: 'Razao de Scope Efetiva',
  totalDepthLabel: 'Altura Vertical Total',
  recommendedRodeLabel: 'Corrente Recomendada a Largar',
  horizontalDistanceLabel: 'Alcance Horizontal',
  swingRadiusLabel: 'Raio de Giro Estimado',
  minSafeRodeLabel: 'Minimo em Calmaria',
  heavyWeatherRodeLabel: 'Fundeio para Mau Tempo',
  statusOptimalTitle: 'Fundeio Seguro e Firme',
  statusOptimalDesc: 'O comprimento calculado garante catenaria amortecedora e tracao horizontal na haste da ancora.',
  statusCautionTitle: 'Fundeio Aceitavel: Monitorar Vento',
  statusCautionDesc: 'Adequado para brisa moderada, mas largue mais corrente se o vento ou a vaga aumentarem.',
  statusDangerTitle: 'Comprimento Insuficiente: Risco de Garrar',
  statusDangerDesc: 'Razao critica. A ancora sofrera tracao ascendente e podera soltar-se do fundo.',
  adviceSand: 'A areia permite excelente cravamento. Faca marcha atras para assentar a ancora.',
  adviceMud: 'Lama macia exige unhas largas e mais corrente para alcancar solo firme.',
  adviceClay: 'Argila compacta segura com forca mas exige unhas afiadas para penetrar.',
  adviceGravel: 'Cascalho solto cede sob tracao. Aumente a corrente em pelo menos 25 por cento.',
  adviceRock: 'Risco de entalar a ancora. Utilize sempre boia de arinque para recuperar.',
  adviceWeed: 'Algas densas impedem o cravamento. Verifique a fixacao com o motor.',
  catenaryAllChain: 'O peso da corrente forma uma curva que amortece impactos e mantem a tracao rasa.',
  catenaryRopeChain: 'Linha mista requer pelo menos razao de 7 para 1 para compensar o menor peso.',
  catenaryAllRope: 'Cabo textil exige 8 para 1 para evitar levantar a haste da ancora.',
  resetButton: 'Redefinir Valores',
  visualProfileTitle: 'Perfil de Catenaria',
  waterlineLabel: 'Flutuacao',
  seabedLabel: 'Fundo Marinho',
  anchorLabel: 'Ancora',
  catenaryCurveLabel: 'Arco de Catenaria',
  swingCircleLabel: 'Circulo de Giro',
};

const faq: AnchorScopeLocaleContent['faq'] = [
  {
    question: 'O que e a razao de scope no fundeio?',
    answer: 'E a relacao entre o comprimento de linha solto na agua e a distancia vertical do fundo marinho ate a roldana de proa.',
  },
  {
    question: 'Por que somar a borda livre e a mare a profundidade?',
    answer: 'A sonda so mede a agua sob a quilha. A borda livre e a subida da mare aumentam a profundidade total de forma critica.',
  },
  {
    question: 'Qual a diferenca de razao entre corrente e cabo?',
    answer: 'Corrente pesada permite razoes de 4:1 ou 5:1. Cabo leve exige 7:1 ou 10:1 para nao desunhar a ancora.',
  },
  {
    question: 'Como se calcula o raio de giro da embarcacao?',
    answer: 'Aplica-se o teorema de Pitagoras para achar a distancia horizontal, somando a eslora do barco e margem de seguranca.',
  },
  {
    question: 'Como o tipo de fundo afeta a ancoragem?',
    answer: 'Areia e argila oferecem a melhor aderencia. Lama e algas exigem mais corrente e verificacao atenta a motor.',
  },
  {
    question: 'Qual a funcao de um cabo amortecedor snubber?',
    answer: 'Alivia o guincho eletrico dos choques das ondas e elimina ruidos a bordo durante a noite.',
  },
];

const howTo: AnchorScopeLocaleContent['howTo'] = [
  {
    name: 'Verificar profundidade e borda livre',
    text: 'Meça a profundidade do ancoradouro e some a altura da roldana de proa sobre a agua.',
  },
  {
    name: 'Adicionar a variacao de mare',
    text: 'Consulte a tabela de mares para somar o pico de preia-mar previsto para o periodo.',
  },
  {
    name: 'Escolher linha e condicoes de vento',
    text: 'Selecione o tipo de amarra e o vento esperado para aplicar o coeficiente adequado.',
  },
  {
    name: 'Largar corrente e unhar a ancora',
    text: 'Solte a metragem calculada e engate marcha atras com motor para cravar a ancora no fundo.',
  },
];

const seo: AnchorScopeLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Calculo de Fundeio Seguro: Comprimento de Corrente e Raio de Giro',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Fundear com seguranca e indispensavel para qualquer navegador. A falta de corrente suficiente e a causa numero um de garrada noturna. Com o <strong>scope correto</strong>, o barco permanece firme mesmo com vento forte.',
  },
  {
    type: 'title',
    text: 'Calculo da Altura Vertical Real',
    level: 3,
  },
  {
    type: 'list',
    items: [
      '<strong>Sonda do Fondeadouro:</strong> Leitura da profundidade mais o calado do navio.',
      '<strong>Borda Livre de Proa:</strong> Altura da linha de agua ate a roldana de ancoragem.',
      '<strong>Subida de Mare:</strong> Aumento do nivel do mar na preia-mar.',
    ],
  },
  {
    type: 'title',
    text: 'Tabela de Razoes de Fundeio Recomendadas',
    level: 3,
  },
  {
    type: 'table',
    headers: ['Tipo de Linha', 'Tempo Calmo (<15 nos)', 'Brisa Fresca (15-25 nos)', 'Mau Tempo (>30 nos)'],
    rows: [
      ['<strong>Toda Corrente</strong>', 'Razao 4:1', 'Razao 5:1', 'Razao 7:1'],
      ['<strong>Mista Cabo-Corrente</strong>', 'Razao 5:1', 'Razao 7:1', 'Razao 8:1 a 10:1'],
      ['<strong>Toda Cabo Textil</strong>', 'Razao 7:1', 'Razao 8:1', 'Razao 10:1 a 12:1'],
    ],
  },
  {
    type: 'tip',
    title: 'Protecao do Guincho Eletrico',
    html: 'Nunca deixe o esforco da ancoragem apoiar diretamente no guincho de proa. Utilize sempre um cabo snubber na cunho de amaracao.',
  },
  {
    type: 'paragraph',
    html: 'Confira a previsão e o estado real do mar antes de sair.',
  },
  {
    type: 'paragraph',
    html: 'Verifique a margem de profundidade e mantenha uma reserva de segurança.',
  },
  {
    type: 'paragraph',
    html: 'Registe os valores para poder repetir o cálculo mais tarde.',
  },
  {
    type: 'paragraph',
    html: 'Compare vários cenários quando o vento ou a corrente mudarem.',
  },
  {
    type: 'paragraph',
    html: 'O cálculo ajuda a planear a rota, mas não substitui a observação a bordo.',
  },
];

const schemas: AnchorScopeLocaleContent['schemas'] = [
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
    name: `Instrucoes: ${title}`,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
  } as WithContext<HowTo>,
];

export const content: AnchorScopeLocaleContent = {
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
