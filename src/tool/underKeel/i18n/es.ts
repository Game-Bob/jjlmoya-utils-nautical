import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { UnderKeelUI, UnderKeelLocaleContent } from '../index';

const slug = 'calculador-paso-de-bajo';
const title = 'Calculador de Paso de Bajo';
const description =
  'Calcula la ventana de tiempo segura para cruzar barras, canales o puntos de calado restringido. Introduce el calado de tu barco, la sonda de la carta y los datos de marea para obtener el intervalo exacto de paso seguro.';

const ui: UnderKeelUI = {
  parametersLabel: 'Parametros',
  boatDraftLabel: 'Calado del Barco',
  chartDepthLabel: 'Sonda de la Carta',
  safetyMarginLabel: 'Resguardo de Seguridad',
  highTideLabel: 'Pleamar',
  lowTideLabel: 'Bajamar',
  metersLabel: 'metros',
  passWindowLabel: 'Ventana de Paso',
  neededLabel: 'Profundidad necesaria',
  tideRequiredLabel: 'Marea minima requerida',
  statusNeverLabel: 'Sin calado en todo el ciclo',
  statusAlwaysLabel: 'Paso libre todo el ciclo',
  statusFromLabel: 'Paso desde las:',
  statusUntilLabel: 'Paso hasta las:',
  bottomLabel: 'FONDO',
  faqTitle: 'Preguntas Frecuentes': 'Referencias',
};

const faq: UnderKeelLocaleContent['faq'] = [
  {
    question: '¿Que es exactamente el paso de bajo en nautica?',
    answer: 'El paso de bajo es el calculo del momento en el que hay profundidad suficiente en un punto critico (como una barra de arena o un canal estrecho) para permitir el transito seguro de una embarcacion segun su calado.',
  },
  {
    question: '¿Cuantos metros de resguardo de seguridad se recomiendan?',
    answer: 'Para embarcaciones de recreo se suele recomendar un resguardo minimo de entre 0.5 y 1 metro sobre el calado del barco. Este margen compensa posibles errores en el calculo de marea, variaciones de presion atmosferica u oleaje imprevisto.',
  },
  {
    question: '¿Como influye el oleaje en el paso de bajo?',
    answer: 'El oleaje genera oscilaciones verticales en el casco. En el punto mas bajo de la ola el barco se acerca mas al fondo que en reposo. Para cruzar zonas con olas el resguardo debe aumentarse sustancialmente.',
  },
  {
    question: '¿Que es la sonda de la carta nautica?',
    answer: 'Es la profundidad minima que encontraras en un punto cuando la marea esta en el nivel del Cero de la Carta (Datum). Se suma a la altura de la marea en ese instante para obtener la profundidad total disponible.',
  },
  {
    question: '¿Que ocurre si la sonda en la carta esta subrayada?',
    answer: 'Significa que ese punto queda al descubierto (en seco) cuando la marea esta en el Cero de la Carta. Necesitaras una altura de marea mayor para poder pasar por encima.',
  },
  {
    question: '¿Que es el efecto Squat y como altera el paso?',
    answer: 'Es un fenomeno hidrodinamico por el cual un barco que navega por canales poco profundos tiende a hundirse mas respecto a su linea de flotacion. Cuanto mas rapido navegues, mas aumenta el calado dinamico y menos agua tendras bajo la quilla.',
  },
];

const howTo: UnderKeelLocaleContent['howTo'] = [
  {
    name: 'Define el calado y el resguardo',
    text: 'Mide el calado de tu barco en su punto maximo y añade un margen de seguridad prudente (por ejemplo, 0.5 m).',
  },
  {
    name: 'Consulta la sonda en tu carta nautica',
    text: 'Busca el valor de la sonda Datum para el paso critico que vas a navegar. Anota si es una zona de arena o roca.',
  },
  {
    name: 'Introduce los datos de la marea',
    text: 'Utiliza las horas y alturas de la pleamar y bajamar de la marina mas cercana obtenidas del anuario oficial.',
  },
  {
    name: 'Comprueba tu ventana de paso',
    text: 'La herramienta te indicara el intervalo de tiempo exacto durante el cual tendras profundidad suficiente para navegar con seguridad.',
  },
];

const seo: UnderKeelLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Calculo de Paso de Bajo: Navegando con Seguridad sobre Obstaculos',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'La planificacion de una travesia no termina con el trazo de un rumbo en la carta. Para el navegante costero, uno de los calculos mas determinantes es el del <strong>paso de bajo</strong>: saber a que hora habra profundidad suficiente para cruzar un punto critico sin encallar.',
  },
  {
    type: 'title',
    text: '¿Que es la sonda de la carta y como se relaciona con la marea?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'En las cartasnáuticas, las profundidades indicadas (sondas) estan referidas al <strong>Cero de la Carta</strong> o Datum. Este nivel es, por convencion, el nivel mas bajo que puede alcanzar la marea en condiciones normales. La profundidad real que encontrara tu barco en un momento dado es la suma de esa sonda mas la altura de la marea en ese instante, calculada con la Regla de los Dozavos.',
  },
  {
    type: 'title',
    text: 'Los elementos del calculo: Calado y Resguardo',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Para utilizar el calculador de paso de bajo de forma profesional, debes conocer con precision dos datos tecnicos de tu propio barco y uno de decision personal:',
  },
  {
    type: 'list',
    items: [
      '<strong>Calado de maxima carga:</strong> Es la profundidad que alcanza el punto mas bajo del barco (la quilla) cuando esta totalmente cargado.',
      '<strong>Sonda de la carta:</strong> El numero que aparece en la carta nautica para el punto que quieres cruzar. Si esta subrayado, el punto queda en seco en bajamar.',
      '<strong>Resguardo de seguridad:</strong> Es el margen "por si acaso" (nauticamente conocido como resguardo) de al menos 0,5 a 1 metro.',
    ],
  },
  {
    type: 'title',
    text: '¿Como funciona la ventana de paso?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'El calculador determina el momento exacto en el que el nivel del agua subira por encima de tu calado mas el resguardo elegido. A partir de ese minuto, se abre la <strong>ventana de paso</strong>. Si la marea es vaciante (bajando), la herramienta te indicara hasta que hora tienes permitido el transito antes de que el nivel del agua caiga por debajo de tu limite de seguridad.',
  },
  {
    type: 'paragraph',
    html: 'Esta planificacion es vital para barcos de vela con quillas profundas que desean entrar en puertos como los de las Rias Baixas en Galicia o puertos fluviales en Andalucia, donde la variacion de mareas puede marcar la diferencia entre una entrada comoda o quedar varado durante seis horas esperando al siguiente ciclo.',
  },
  {
    type: 'title',
    text: 'Factores que afectan al paso real',
    level: 3,
  },
  {
    type: 'table',
    headers: ['Factor', 'Efecto', 'Recomendacion'],
    rows: [
      ['<strong>Oleaje</strong>', 'Reduce el agua bajo el casco', 'Aumentar el resguardo significativamente'],
      ['<strong>Efecto Squat</strong>', 'Aumenta el calado por succion', 'Reducir la velocidad en zonas criticas'],
      ['<strong>Fondo de arena</strong>', 'Profundidad variable con temporales', 'Mantener sonda activa y resguardo extra'],
    ],
  },
  {
    type: 'tip',
    title: 'Consejo de Navegacion',
    html: 'Si tu ventana de paso es muy estrecha o el tiempo empeora, la decision mas sabia suele ser esperar fuera en aguas profundas a que la marea gane la altura necesaria.',
  },
  {
    type: 'title',
    text: 'Consejos para una entrada segura a puerto',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<ol><li class="mb-2"><strong>Reduce la velocidad:</strong> Para minimizar el efecto squat y tener tiempo de corregir el rumbo.</li><li class="mb-2"><strong>Utiliza la sonda de a bordo:</strong> Configura la alarma de baja profundidad en tu equipo electronico.</li><li class="mb-2"><strong>Observa el mar:</strong> Las rompientes de olas suelen indicar la presencia de bajos.</li><li class="mb-2"><strong>Consulta a lugareños:</strong> Por radio (canal 9) o telefoneando al club nautico sobre el estado actual del canal.</li></ol>',
  },
  {
    type: 'paragraph',
    html: 'Esta herramienta es ideal para estudiantes que estan practicando ejercicios de mareas para el examen de Patron de Embarcaciones de Recreo (PER) o Patron de Yate, permitiendo verificar los resultados de calculos manuales de forma instantanea y visual.',
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
