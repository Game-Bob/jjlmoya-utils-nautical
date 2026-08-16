import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { UnderKeelUI, UnderKeelLocaleContent } from '../index';

const slug = 'calculador-paso-de-bajo';
const title = 'Calculadora de Paso de Bajo';
const description =
  'Calcula la ventana de tiempo segura para cruzar barras, canales o puntos de calado restringido. Introduce el calado de tu barco, la sonda de la carta y los datos de marea para obtener el intervalo exacto de paso seguro.';

const ui: UnderKeelUI = {
  parametersLabel: 'Parámetros',
  boatDraftLabel: 'Calado del Barco',
  chartDepthLabel: 'Sonda de la Carta',
  safetyMarginLabel: 'Resguardo de Seguridad',
  highTideLabel: 'Pleamar',
  lowTideLabel: 'Bajamar',
  metersLabel: 'metros',
  passWindowLabel: 'Ventana de Paso',
  neededLabel: 'Profundidad necesaria',
  tideRequiredLabel: 'Marea mínima requerida',
  statusNeverLabel: 'Sin calado en todo el ciclo',
  statusAlwaysLabel: 'Paso libre todo el ciclo',
  statusFromLabel: 'Paso desde las:',
  statusUntilLabel: 'Paso hasta las:',
  bottomLabel: 'FONDO',
};

const faq: UnderKeelLocaleContent['faq'] = [
  {
    question: '¿Qué es exactamente el paso de bajo en náutica?',
    answer: 'El paso de bajo es el cálculo del momento en el que hay profundidad suficiente en un punto crítico (como una barra de arena o un canal estrecho) para permitir el tránsito seguro de una embarcación según su calado.',
  },
  {
    question: '¿Cuántos metros de resguardo de seguridad se recomiendan?',
    answer: 'Para embarcaciones de recreo se suele recomendar un resguardo mínimo de entre 0,5 y 1 metro sobre el calado del barco. Este margen compensa posibles errores en el cálculo de marea, variaciones de presión atmosférica u oleaje imprevisto.',
  },
  {
    question: '¿Cómo influye el oleaje en el paso de bajo?',
    answer: 'El oleaje genera oscilaciones verticales en el casco. En el punto más bajo de la ola el barco se acerca más al fondo que en reposo. Para cruzar zonas con olas el resguardo debe aumentarse sustancialmente.',
  },
  {
    question: '¿Qué es la sonda de la carta náutica?',
    answer: 'Es la profundidad mínima que encontrarás en un punto cuando la marea está en el nivel del Cero de la Carta (Datum). Se suma a la altura de la marea en ese instante para obtener la profundidad total disponible.',
  },
  {
    question: '¿Qué ocurre si la sonda en la carta está subrayada?',
    answer: 'Significa que ese punto queda al descubierto (en seco) cuando la marea está en el Cero de la Carta. Necesitarás una altura de marea mayor para poder pasar por encima.',
  },
  {
    question: '¿Qué es el efecto Squat y cómo altera el paso?',
    answer: 'Es un fenómeno hidrodinámico por el cual un barco que navega por canales poco profundos tiende a hundirse más respecto a su línea de flotación. Cuanto más rápido navegues, más aumenta el calado dinámico y menos agua tendrás bajo la quilla.',
  },
];

const howTo: UnderKeelLocaleContent['howTo'] = [
  {
    name: 'Define el calado y el resguardo',
    text: 'Mide el calado de tu barco en su punto máximo y añade un margen de seguridad prudente (por ejemplo, 0,5 m).',
  },
  {
    name: 'Consulta la sonda en tu carta náutica',
    text: 'Busca el valor de la sonda Datum para el paso crítico que vas a navegar. Anota si es una zona de arena o roca.',
  },
  {
    name: 'Introduce los datos de la marea',
    text: 'Utiliza las horas y alturas de la pleamar y bajamar de la marina más cercana obtenidas del anuario oficial.',
  },
  {
    name: 'Comprueba tu ventana de paso',
    text: 'La herramienta te indicará el intervalo de tiempo exacto durante el cual tendrás profundidad suficiente para navegar con seguridad.',
  },
];

const seo: UnderKeelLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Cálculo de Paso de Bajo: Navegando con Seguridad sobre Obstáculos',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'La planificación de una travesía no termina con el trazo de un rumbo en la carta. Para el navegante costero, uno de los cálculos más determinantes es el del <strong>paso de bajo</strong>: saber a qué hora habrá profundidad suficiente para cruzar un punto crítico sin encallar.',
  },
  {
    type: 'title',
    text: '¿Qué es la sonda de la carta y cómo se relaciona con la marea?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'En las cartas náuticas, las profundidades indicadas (sondas) están referidas al <strong>Cero de la Carta</strong> o Datum. Este nivel es, por convención, el nivel más bajo que puede alcanzar la marea en condiciones normales. La profundidad real que encontrará tu barco en un momento dado es la suma de esa sonda más la altura de la marea en ese instante, calculada con la Regla de los Dozavos.',
  },
  {
    type: 'title',
    text: 'Los elementos del cálculo: Calado y Resguardo',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Para utilizar el calculador de paso de bajo de forma profesional, debes conocer con precisión dos datos técnicos de tu propio barco y uno de decisión personal:',
  },
  {
    type: 'list',
    items: [
      '<strong>Calado de máxima carga:</strong> Es la profundidad que alcanza el punto más bajo del barco (la quilla) cuando está totalmente cargado.',
      '<strong>Sonda de la carta:</strong> El número que aparece en la carta náutica para el punto que quieres cruzar. Si está subrayado, el punto queda en seco en bajamar.',
      '<strong>Resguardo de seguridad:</strong> Es el margen "por si acaso" (náuticamente conocido como resguardo) de al menos 0,5 a 1 metro.',
    ],
  },
  {
    type: 'title',
    text: '¿Cómo funciona la ventana de paso?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'El calculador determina el momento exacto en el que el nivel del agua subirá por encima de tu calado más el resguardo elegido. A partir de ese minuto, se abre la <strong>ventana de paso</strong>. Si la marea es vaciante (bajando), la herramienta te indicará hasta que hora tienes permitido el tránsito antes de que el nivel del agua caiga por debajo de tu límite de seguridad.',
  },
  {
    type: 'paragraph',
    html: 'Esta planificación es vital para barcos de vela con quillas profundas que desean entrar en puertos como los de las Rías Baixas en Galicia o puertos fluviales en Andalucía, donde la variación de mareas puede marcar la diferencia entre una entrada cómoda o quedar varado durante seis horas esperando al siguiente ciclo.',
  },
  {
    type: 'title',
    text: 'Factores que afectan al paso real',
    level: 3,
  },
  {
    type: 'table',
    headers: ['Factor', 'Efecto', 'Recomendación'],
    rows: [
      ['<strong>Oleaje</strong>', 'Reduce el agua bajo el casco', 'Aumentar el resguardo significativamente'],
      ['<strong>Efecto Squat</strong>', 'Aumenta el calado por succión', 'Reducir la velocidad en zonas críticas'],
      ['<strong>Fondo de arena</strong>', 'Profundidad variable con temporales', 'Mantener sonda activa y resguardo extra'],
    ],
  },
  {
    type: 'tip',
    title: 'Consejo de Navegación',
    html: 'Si tu ventana de paso es muy estrecha o el tiempo empeora, la decisión más sabia suele ser esperar fuera en aguas profundas a que la marea gane la altura necesaria.',
  },
  {
    type: 'title',
    text: 'Consejos para una entrada segura a puerto',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<ol><li class="mb-2"><strong>Reduce la velocidad:</strong> Para minimizar el efecto squat y tener tiempo de corregir el rumbo.</li><li class="mb-2"><strong>Utiliza la sonda de a bordo:</strong> Configura la alarma de baja profundidad en tu equipo electrónico.</li><li class="mb-2"><strong>Observa el mar:</strong> Las rompientes de olas suelen indicar la presencia de bajos.</li><li class="mb-2"><strong>Consulta a lugareños:</strong> Por radio (canal 9) o telefoneando al club náutico sobre el estado actual del canal.</li></ol>',
  },
  {
    type: 'paragraph',
    html: 'Esta herramienta es ideal para estudiantes que están practicando ejercicios de mareas para el examen de Patrón de Embarcaciones de Recreo (PER) o Patrón de Yate, permitiendo verificar los resultados de cálculos manuales de forma instantánea y visual.',
  },
].slice(0, 13);

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
    name: `Cómo usar: ${title}`,
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
