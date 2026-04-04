import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TideCalculatorUI, TideCalculatorLocaleContent } from '../index';

const slug = 'calculadora-altura-marea';
const title = 'Calculadora de Altura de Marea';
const description = 'Calcula la altura del agua en cualquier momento usando la Regla de los Dozavos. Herramienta offline para navegantes, patrones y estudiantes del PER.';

const ui: TideCalculatorUI = {
  parametros: 'Parámetros',
  pleamar: 'Pleamar',
  bajamar: 'Bajamar',
  horaConsulta: 'Hora de consulta',
  alturaEstimada: 'Altura Estimada',
  metros: 'metros',
  amplitud: 'Amplitud',
  duracion: 'Duración',
  desglosePorDozavos: 'Desglose por Dozavos',
  hora: 'Hora',
  estado: 'Estado',
  altura: 'Altura',
  subiendo: 'Subiendo',
  bajando: 'Bajando',
  fueraDeRango: 'Fuera de rango',
  inicio: 'Inicio',
  final: 'Final',
};

const faq: TideCalculatorLocaleContent['faq'] = [
  {
    question: '¿Qué es la Regla de los Dozavos y para qué sirve?',
    answer: 'La Regla de los Dozavos es un método matemático simplificado para estimar la altura de la marea entre la pleamar y la bajamar. Se basa en que el flujo sigue una curva sinusoidal dividiendo la amplitud en 12 partes: 1/12, 2/12, 3/12, 3/12, 2/12 y 1/12 en cada una de las seis horas del ciclo.',
  },
  {
    question: '¿Es fiable este método para la navegación real?',
    answer: 'Es un método de estimación teórica muy útil para planificación rápida y fines educativos. Sin embargo, no tiene en cuenta factores meteorológicos como la presión atmosférica o el viento, que pueden alterar el nivel del mar varios decímetros. Para navegación real, consulta siempre las tablas oficiales de Puertos del Estado.',
  },
  {
    question: '¿Qué datos necesito para calcular la altura de la marea?',
    answer: 'Necesitas conocer la hora y la altura en metros de la pleamar y la bajamar más cercanas al momento que quieres consultar. Estos datos se encuentran en los anuarios de mareas o aplicaciones meteorológicas marinas.',
  },
  {
    question: '¿Por qué la marea no sube siempre a la misma velocidad?',
    answer: 'Debido a la inercia de las grandes masas de agua y la configuración de las cuencas oceánicas. La marea comienza a subir lentamente, alcanza su velocidad máxima en las horas centrales y vuelve a frenarse al aproximarse a la pleamar.',
  },
  {
    question: '¿Cómo afecta la presión atmosférica a la marea?',
    answer: 'La presión alta empuja el agua hacia abajo reduciendo la altura real. La presión baja permite que el agua suba más. Por norma general, una variación de 1 hPa respecto a la media supone un cambio de aproximadamente 1 cm en el nivel del mar.',
  },
  {
    question: '¿Qué es la amplitud de marea?',
    answer: 'Es la diferencia vertical de altura entre una pleamar y la bajamar inmediatamente anterior o posterior. Esta medida varía según la fase lunar y la ubicación geográfica.',
  },
];

const howTo: TideCalculatorLocaleContent['howTo'] = [
  { name: 'Identifica la pleamar y bajamar', text: 'Consulta tu anuario de mareas para obtener las horas y alturas del ciclo que te interesa.' },
  { name: 'Introduce los datos', text: 'Ingresa la hora y altura de la pleamar y la bajamar. La herramienta determinará la duración y amplitud automáticamente.' },
  { name: 'Establece la hora de consulta', text: 'Ajusta la hora para la que deseas conocer el nivel del agua. Verás el punto exacto resaltado en la gráfica.' },
  { name: 'Analiza la tabla de dozavos', text: 'Revisa el desglose hora por hora para entender cómo fluctuará el nivel del agua durante todo el periodo.' },
];

const bibliography: TideCalculatorLocaleContent['bibliography'] = [
  { name: 'Puertos del Estado — Predicción de Mareas', url: 'https://portus.puertos.es/#/' },
  { name: 'Instituto Hidrográfico de la Marina', url: 'https://armada.defensa.gob.es/ihm/' },
];

const seo: TideCalculatorLocaleContent['seo'] = [
  { type: 'summary', title: 'Principios de la Regla de los Dozavos', items: ['La marea sigue una curva sinusoidal, no sube a velocidad constante.', 'Las horas centrales del ciclo tienen el mayor flujo de agua (3/12 cada una).', 'La amplitud de marea en el Cantábrico puede superar los 4 metros.', 'Una bajada de presión de 10 hPa puede elevar el nivel del mar unos 10 cm.'] },
  { type: 'title', text: 'La Regla de los Dozavos: Fundamentos para Navegantes', level: 2 },
  { type: 'paragraph', html: 'La navegación costera y la entrada en puertos con calado restringido requieren un conocimiento preciso de la altura del agua en cada momento. Aunque hoy disponemos de aplicaciones digitales y GPS que proporcionan datos en tiempo real, la <strong>Regla de los Dozavos</strong> sigue siendo una herramienta fundamental en la formación de cualquier patrón de embarcación de recreo (PER) o capitán de yate.' },
  { type: 'title', text: 'Distribución del Flujo Mareal en Seis Horas', level: 3 },
  { type: 'table', headers: ['Hora del Ciclo', 'Proporción', 'Estado del Flujo'], rows: [
    ['1ª Hora', '1/12 de la amplitud', 'Inicio lento (Repunte)'],
    ['2ª Hora', '2/12 de la amplitud', 'Aceleración del flujo'],
    ['3ª Hora', '3/12 de la amplitud', 'Flujo máximo (Corriente fuerte)'],
    ['4ª Hora', '3/12 de la amplitud', 'Mantenimiento del flujo'],
    ['5ª Hora', '2/12 de la amplitud', 'Desaceleración notable'],
    ['6ª Hora', '1/12 de la amplitud', 'Frenado final (Hacia el estrepunte)'],
  ]},
  { type: 'tip', title: 'Nota de Seguridad', html: 'Esta herramienta utiliza un método de estimación matemática. No tiene en cuenta factores meteorológicos ni la orografía local. Para navegación real, consulte siempre las tablas oficiales de Puertos del Estado.' },
  { type: 'title', text: 'Conceptos Esenciales del Ciclo Mareal', level: 3 },
  { type: 'paragraph', html: '<strong>Amplitud de marea:</strong> Es la diferencia vertical entre la pleamar y la bajamar. En zonas como el Mar Cantábrico puede superar los 4 metros, mientras que en el Mediterráneo es casi insignificante para la navegación general. Esta diferencia transforma la planificación del navegante costero de forma radical.' },
  { type: 'paragraph', html: '<strong>Duración de la marea:</strong> El intervalo de tiempo entre una marea alta y la siguiente marea baja normalmente ronda las 6 horas y 12 minutos, completando un ciclo semidiurno con dos pleamares y dos bajamares al día. El <strong>Cero de la Carta (Datum)</strong> es el nivel de referencia a partir del cual se miden todas las profundidades en las cartas náuticas.' },
  { type: 'stats', columns: 3, items: [
    { label: 'Horas por ciclo', value: '~6h', icon: 'mdi:clock-outline' },
    { label: 'Ciclos diarios', value: '2', icon: 'mdi:waves' },
    { label: 'Amplitud Cantábrico', value: '4+ m', icon: 'mdi:arrow-up-down' },
  ]},
  { type: 'title', text: 'Limitaciones y Factores Reales', level: 3 },
  { type: 'paragraph', html: 'Es crucial entender que ningún método matemático, incluida la Regla de los Dozavos, es infalible. La <strong>presión atmosférica</strong> (una borrasca puede elevar el nivel del mar), el <strong>viento sostenido hacia la costa</strong> y la <strong>orografía local</strong> pueden alterar significativamente la altura real del agua respecto a la predicción teórica. Siempre añade un margen de seguridad.' },
  { type: 'glossary', items: [
    { term: 'Pleamar', definition: 'El nivel máximo de la marea durante un ciclo mareal.' },
    { term: 'Bajamar', definition: 'El nivel mínimo de la marea durante un ciclo mareal.' },
    { term: 'Estrepunte', definition: 'El momento de transición en que la marea cambia de sentido, con escasa corriente.' },
    { term: 'Datum (Cero de la Carta)', definition: 'Nivel de referencia de las cartas náuticas, próximo al nivel de la bajamar más baja.' },
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
  step: howTo.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
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

export const content: TideCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
