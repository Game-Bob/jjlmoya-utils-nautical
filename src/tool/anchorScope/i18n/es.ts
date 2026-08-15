import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AnchorScopeLocaleContent } from '../entry';
import type { AnchorScopeUI } from '../ui';

const slug = 'calculadora-longitud-cadena-fondeo';
const title = 'Calculadora de Fondeo y Longitud de Cadena';
const description =
  'Calcula la longitud optima de cadena y cabo de fondeo, ratio de filado y radio de borneo para fondear con total seguridad segun sonda, francobordo, marea y fondo.';

const ui: AnchorScopeUI = {
  parametersTitle: 'Parametros',
  waterDepthLabel: 'Sonda en Carta',
  bowHeightLabel: 'Francobordo Proa',
  tideRangeLabel: 'Subida de Marea',
  boatLengthLabel: 'Eslora Barco (LOA)',
  rodeTypeLabel: 'Linea de Fondeo',
  windConditionLabel: 'Viento y Prevision',
  seabedTypeLabel: 'Tipo de Tenedero',
  presetProtected: 'Cala Protegida',
  presetOpen: 'Costa Abierta',
  presetStorm: 'Aviso Temporal',
  seabedTag: 'Factor Agarre Tenedero',
  catenaryTag: 'Amortiguacion Catenaria',
  unitM: 'm',
  unitFt: 'ft',
  unitMeters: 'Metrico (m)',
  unitFeet: 'Imperial (ft)',
  allChainOption: 'Todo Cadena (Catenaria Pesada)',
  ropeChainOption: 'Mixta Cabo y Cadena',
  allRopeOption: 'Todo Cabo de Fondeo',
  calmWindOption: 'Calma / Brisa Suave (< 15 nds)',
  moderateWindOption: 'Brisa Moderada (15 - 25 nds)',
  strongWindOption: 'Viento Fuerte / Temporal (25 - 35 nds)',
  stormWindOption: 'Temporal Duro (> 35 nds)',
  sandOption: 'Arena (Agarre Optimo)',
  mudOption: 'Fango / Limo (Buen Agarre)',
  clayOption: 'Arcilla Compacta (Muy Bueno)',
  gravelOption: 'Grava / Cascajo (Moderado)',
  rockOption: 'Roca / Enroque (Riesgo Enganche)',
  weedOption: 'Posidonia / Algas (Poco Agarre)',
  resultsTitle: 'Analisis de Fondeo y Dimensiones',
  scopeRatioLabel: 'Ratio de Filado Efectivo',
  totalDepthLabel: 'Altura Vertical Total',
  recommendedRodeLabel: 'Cadena Recomendada a Filar',
  horizontalDistanceLabel: 'Alcance Horizontal',
  swingRadiusLabel: 'Radio de Borneo Estimado',
  minSafeRodeLabel: 'Minimo en Calma',
  heavyWeatherRodeLabel: 'Fondeo para Temporal',
  statusOptimalTitle: 'Fondeo Seguro y Estable',
  statusOptimalDesc: 'La longitud calculada garantiza una curva catenaria amortiguadora y tiro horizontal sobre la cana del ancla.',
  statusCautionTitle: 'Fondeo Aceptable: Monitorizar Borrasca',
  statusCautionDesc: 'La relacion es adecuada para brisa moderada, pero aumente cadena si arrecia el viento o sube la mar de fondo.',
  statusDangerTitle: 'Filado Insuficiente: Riesgo de Garreo',
  statusDangerDesc: 'El ratio es critico. El ancla sufrira tiro vertical hacia arriba y puede desclavarse del tenedero.',
  adviceSand: 'La arena permite un clavado firme de uña. De atras con motor para asentar el ancla.',
  adviceMud: 'El fango blando requiere mayor superficie de pala y filar mas cadena para buscar sustrato duro.',
  adviceClay: 'La arcilla compacta sujeta con fuerza pero exige anclas de punta afilada para penetrar.',
  adviceGravel: 'El cascajo suelto cede ante rachas dinamicas. Incremente la cadena al menos un 25 por ciento.',
  adviceRock: 'Riesgo elevado de trabar el ancla. Utilice siempre orinque con boyarin para desenganchar.',
  adviceWeed: 'El alga tupida impide clavar las palas. Compruebe el agarre a motor antes de fondear.',
  catenaryAllChain: 'El peso de la cadena forma una catenaria que amortigua pantocazos y mantiene el tiro plano.',
  catenaryRopeChain: 'La linea mixta exige al menos 7 a 1 de ratio para compensar la menor masa de cadena.',
  catenaryAllRope: 'El cabo aporta elasticidad pero requiere filar 8 a 1 para evitar que el ancla levante la uña.',
  resetButton: 'Restablecer Valores',
  visualProfileTitle: 'Perfil y Curva de Catenaria',
  waterlineLabel: 'Flotacion',
  seabedLabel: 'Fondo Marino',
  anchorLabel: 'Ancla',
  catenaryCurveLabel: 'Arco de Catenaria',
  swingCircleLabel: 'Circulo de Borneo',
};

const faq: AnchorScopeLocaleContent['faq'] = [
  {
    question: '¿Que es el ratio de filado o scope en fondeo?',
    answer: 'Es la proporcion matematica entre la longitud total de linea de fondeo (cadena o cabo) soltada al agua y la distancia vertical total desde el fondo marino hasta la roldana de proa. Garantiza que la fuerza sobre la caña del ancla sea puramente horizontal.',
  },
  {
    question: '¿Por que se debe sumar el francobordo y la marea a la sonda?',
    answer: 'La sonda de la ecosonda solo mide el agua bajo el casco. Si la roldana de proa esta a 1.5 metros del agua y la pleamar subira 2 metros durante la noche, la profundidad real vertical aumentara 3.5 metros. Ignorar esto provoca garreos peligrosos en pleamar.',
  },
  {
    question: '¿Cual es la diferencia de ratio entre fondear con cadena o con cabo?',
    answer: 'La cadena de acero es pesada y crea una curva catenaria que absorbe tirones, permitiendo ratios de 4 a 1 o 5 a 1. El cabo de nylon flota relativamente y se tensa en linea recta, exigiendo ratios de 7 a 1 o 10 a 1 para no levantar la caña del ancla.',
  },
  {
    question: '¿Como se calcula el radio de borneo en una cala?',
    answer: 'Se calcula aplicando el teorema de Pitagoras para obtener la distancia horizontal de la cadena desde el ancla hasta la proa, sumando la eslora total de la embarcacion y un margen prudencial de seguridad de 3 a 5 metros.',
  },
  {
    question: '¿Como influye el tipo de fondo en la seguridad del fondeo?',
    answer: 'Los fondos de arena y arcilla ofrecen el mejor coeficiente de agarre. El fango exige palas anchas, la grava reduce la friccion y las algas impiden la penetracion. En fondos de agarre mediocre se recomienda incrementar la cadena filada un 30 por ciento.',
  },
  {
    question: '¿Que funcion cumple la boza o cabo amortiguador snubber?',
    answer: 'Evita que la tension de la cadena tire directamente del molinete de proa. Un cabo elastico de nylon encapillado a la cadena absorbe los golpes de mar y reduce el ruido metalico a bordo durante la noche.',
  },
];

const howTo: AnchorScopeLocaleContent['howTo'] = [
  {
    name: 'Consultar la sonda y medir la altura de proa',
    text: 'Compruebe la profundidad del agua en el fondeadero y sume la altura de la roldana de proa sobre el nivel del mar.',
  },
  {
    name: 'Anadir la carrera de marea prevista',
    text: 'Revise las tablas de marea para sumar la maxima sobreelevacion de agua esperada durante su estancia.',
  },
  {
    name: 'Seleccionar tipo de linea y viento pronosticado',
    text: 'Escoja si fondea con todo cadena o linea mixta y ajuste el multiplicador de seguridad segun la fuerza del viento.',
  },
  {
    name: 'Filar la longitud calculada y hacer cabeza de ancla',
    text: 'Suelte los metros recomendados, de marcha atras suave con el motor para clavar las palas y verifique el radio de borneo.',
  },
];

const seo: AnchorScopeLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Calculo de Fondeo Seguro: Longitud de Cadena y Radio de Borneo',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'El fondeo es una de las maniobras fundamentales de la navegacion costera y de altura. Una eleccion incorrecta de la longitud de cadena o cabo es la principal causa de garreo nocturno, colisiones en fondeaderos concurridos y varadas en la costa. Para fondear con total seguridad, es imprescindible calcular con precision el <strong>ratio de filado</strong> (scope).',
  },
  {
    type: 'title',
    text: 'Componentes de la Altura Vertical Total',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'El error mas extendido en la nautica deportiva es multiplicar el ratio de fondeo unicamente por la lectura de la ecosonda. La distancia vertical real comprende tres cotas que deben sumarse obligatoriamente:',
  },
  {
    type: 'list',
    items: [
      '<strong>Sonda del Fondeadero:</strong> Profundidad del agua bajo la quilla en bajamar o en el momento de largar el ancla.',
      '<strong>Francobordo de Proa:</strong> Distancia vertical desde la superficie del agua hasta la roldana donde apoya la cadena.',
      '<strong>Rango de Marea Previsto:</strong> Incremento de profundidad generado por la pleamar durante el tiempo de estancia.',
    ],
  },
  {
    type: 'title',
    text: 'Tabla de Ratios de Fondeo Recomendados',
    level: 3,
  },
  {
    type: 'table',
    headers: ['Tipo de Linea', 'Tiempo Calmo (<15 nds)', 'Brisa Fresca (15-25 nds)', 'Temporal Duro (>30 nds)'],
    rows: [
      ['<strong>Todo Cadena</strong>', 'Ratio 4 a 1', 'Ratio 5 a 1', 'Ratio 7 a 1'],
      ['<strong>Mixta Cabo y Cadena</strong>', 'Ratio 5 a 1', 'Ratio 7 a 1', 'Ratio 8 a 10 a 1'],
      ['<strong>Todo Cabo de Nylon</strong>', 'Ratio 7 a 1', 'Ratio 8 a 1', 'Ratio 10 a 12 a 1'],
    ],
  },
  {
    type: 'title',
    text: 'Fisica del Tiro Horizontal y Efecto Catenaria',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Las uñas de las anclas modernas de arado o pala cóncava estan disenadas para clavarse profundamente cuando la fuerza de traccion se ejerce de forma paralela al fondo marino. En cuanto el tiro adquiere un angulo ascendente, la cana se levanta y el ancla se desclava instantaneamente. El peso propio de los eslabones de acero forma una curva catenaria que amortigua el oleaje y mantiene los ultimos metros de cadena acostados sobre la arena.',
  },
  {
    type: 'title',
    text: 'Calculo del Radio de Borneo y Espacio en Calas',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Al cambiar la direccion del viento o de las corrientes de marea, el barco describe un giro de 360 grados alrededor de la posicion del ancla. El <strong>radio de borneo</strong> es la distancia horizontal de la cadena mas la eslora del barco y el margen de seguridad. Nunca fondee si el radio de borneo se solapa con bajos de piedra o con el circulo de otros veleros fondeados.',
  },
  {
    type: 'tip',
    title: 'Consejo Marinero para Proteger el Molinete',
    html: 'Nunca deje la cadena trabajando directamente sobre el barboten del molinete. Emplee siempre una boza textil con gancho de cadena o nudo de boza firme a la cornamusa de proa.',
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
    name: `Como utilizar: ${title}`,
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
