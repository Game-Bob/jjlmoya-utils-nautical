import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { UnderKeelUI, UnderKeelLocaleContent } from '../index';

const slug = 'calculador-paso-de-bajo';
const title = 'Calculador de Paso de Bajo';
const description = 'Determina si tienes agua suficiente para pasar por un punto crítico según tu calado. Ventana de tiempo de paso seguro con la Regla de los Dozavos.';

const ui: UnderKeelUI = {
  vasoDeBajo: 'Vaso de Bajo',
  caladoDelBarco: 'Calado del Barco',
  sondaDeLaCarta: 'Sonda de la Carta',
  resguardoSeguridad: 'Resguardo Seguridad',
  pleamar: 'Pleamar',
  bajamar: 'Bajamar',
  ventanaDePaso: 'Ventana de Paso',
  necesario: 'Necesario',
  mareaReq: 'Marea Req.',
  nuncaHayCalado: 'Nunca hay calado',
  pasoLibreTodoCiclo: 'Paso libre todo el ciclo',
  desdeHora: 'Desde las:',
  hastaHora: 'Hasta las:',
  fondo: 'FONDO',
};

const faq: UnderKeelLocaleContent['faq'] = [
  {
    question: '¿Qué es exactamente el paso de bajo en náutica?',
    answer: 'El paso de bajo es el cálculo del momento en el que hay profundidad suficiente en un punto crítico (como una barra de arena o un canal estrecho) para permitir el tránsito seguro de una embarcación según su calado.',
  },
  {
    question: '¿Cuántos metros de resguardo de seguridad se recomiendan?',
    answer: 'Para embarcaciones de recreo se suele recomendar un resguardo mínimo de entre 0.5 y 1 metro sobre el calado del barco. Este margen compensa posibles errores en el cálculo de marea, variaciones de presión atmosférica u oleaje imprevisto.',
  },
  {
    question: '¿Cómo influye el oleaje en el paso de bajo?',
    answer: 'El oleaje genera oscilaciones verticales en el casco. En el punto más bajo de la ola, el barco se encuentra más cerca del fondo que en reposo. Para cruzar zonas con olas, el resguardo debe aumentarse sustancialmente.',
  },
  {
    question: '¿Qué es la sonda de la carta náutica?',
    answer: 'Es la profundidad mínima que encontrarás en un punto cuando la marea está en el nivel del Cero de la Carta (el Datum). Se suma a la altura de la marea en ese instante para darte la profundidad total disponible.',
  },
  {
    question: '¿Qué ocurre si la sonda en la carta está subrayada?',
    answer: 'Significa que ese punto queda al descubierto (en seco) cuando la marea está en el Cero de la Carta. Necesitarás una altura de marea mayor para poder pasar sobre él.',
  },
  {
    question: '¿Qué es el efecto "Squat"?',
    answer: 'Es un fenómeno hidrodinámico por el cual un barco que navega por canales poco profundos tiende a hundirse más respecto a su línea de flotación. Cuanto más rápido navegues, más aumenta el calado dinámico.',
  },
];

const howTo: UnderKeelLocaleContent['howTo'] = [
  { name: 'Define el calado y el resguardo', text: 'Mide el calado de tu barco en su punto máximo y añade un margen de seguridad prudente (por ejemplo, 0.5 m).' },
  { name: 'Consulta la sonda en tu carta náutica', text: 'Busca el valor de la sonda Datum para el paso crítico que vas a navegar.' },
  { name: 'Introduce los datos de la marea', text: 'Utiliza las horas y alturas de la pleamar y bajamar obtenidas del anuario oficial.' },
  { name: 'Comprueba tu ventana de paso', text: 'La herramienta te indicará el intervalo de tiempo exacto durante el cual tendrás profundidad suficiente.' },
];

const bibliography: UnderKeelLocaleContent['bibliography'] = [
  { name: 'Ministerio de Transportes — Náutica de Recreo', url: 'https://www.mitma.gob.es/marina-mercante/nautica-de-recreo/' },
  { name: 'Portos de Galicia — Tablas de Mareas', url: 'https://portosdegalicia.gal/es/taboa-de-mareas' },
];

const seo: UnderKeelLocaleContent['seo'] = [
  { type: 'summary', title: 'Fundamentos del Paso de Bajo', items: ['La profundidad real es la sonda Datum más la altura de marea en ese instante.', 'El resguardo mínimo recomendado para recreo es de 0.5 a 1 metro.', 'El efecto Squat aumenta el calado dinámico al navegar a alta velocidad.', 'En zonas de oleaje, aumenta el resguardo significativamente.'] },
  { type: 'title', text: 'Cálculo de Paso de Bajo: Navegando con Seguridad', level: 2 },
  { type: 'paragraph', html: 'La planificación de una travesía no termina con el trazo de un rumbo en la carta. Para el navegante costero, uno de los cálculos más determinantes es el del <strong>paso de bajo</strong>. Este cálculo permite responder a la pregunta fundamental: ¿a qué hora tendré profundidad suficiente para pasar por este punto crítico sin encallar?' },
  { type: 'title', text: 'Elementos del Cálculo: Calado, Sonda y Resguardo', level: 3 },
  { type: 'paragraph', html: 'Para utilizar el calculador de paso de bajo de forma profesional, debes conocer con precisión tres datos: el <strong>calado de máxima carga</strong> (la profundidad que alcanza la quilla cuando el barco está totalmente cargado), la <strong>sonda de la carta</strong> (el número que aparece en la carta náutica para el punto que quieres cruzar) y el <strong>resguardo de seguridad</strong> (el margen por si acaso, náuticamente conocido como resguardo, de al menos 0.5 a 1 metro).' },
  { type: 'table', headers: ['Factor', 'Efecto', 'Recomendación'], rows: [
    ['Oleaje', 'Reduce el agua bajo el casco', 'Aumentar el resguardo significativamente'],
    ['Efecto Squat', 'Aumenta el calado por succión', 'Reducir la velocidad en zonas críticas'],
    ['Fondo de arena', 'Profundidad variable con temporales', 'Mantener sonda activa y resguardo extra'],
  ]},
  { type: 'tip', title: 'Consejo de Navegación', html: 'Si tu ventana de paso es muy estrecha o el tiempo empeora, la decisión más sabia suele ser esperar fuera en aguas profundas a que la marea gane la altura necesaria.' },
  { type: 'title', text: 'La Ventana de Paso: Cómo Funciona', level: 3 },
  { type: 'paragraph', html: 'El calculador determina el momento exacto en el que el nivel del agua subirá por encima de tu calado más el resguardo elegido. A partir de ese minuto, se abre la <strong>ventana de paso</strong>. Esta planificación es vital para barcos de vela con quillas profundas que desean entrar en puertos con variación de mareas significativa, como las Rías Baixas en Galicia o puertos fluviales en Andalucía.' },
  { type: 'stats', columns: 3, items: [
    { label: 'Resguardo mínimo', value: '0.5 m', icon: 'mdi:anchor' },
    { label: 'Efecto Squat', value: 'hasta 0.3 m', icon: 'mdi:ship-wheel' },
    { label: 'Sonda Datum', value: 'mínimo garantizado', icon: 'mdi:map' },
  ]},
  { type: 'glossary', items: [
    { term: 'Calado', definition: 'Profundidad que alcanza el punto más bajo del barco (la quilla) bajo la línea de flotación.' },
    { term: 'Sonda Datum', definition: 'Profundidad indicada en la carta náutica referida al Cero de la Carta, la profundidad mínima garantizada.' },
    { term: 'Resguardo', definition: 'Margen de seguridad adicional al calado para garantizar el paso seguro de la embarcación.' },
    { term: 'Efecto Squat', definition: 'Descenso del buque al navegar en aguas poco profundas por efecto de la hidrodinámica.' },
  ]},
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'es',
};

export const content: UnderKeelLocaleContent = {
  slug, title, description, ui, seo, faq, bibliography, howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
