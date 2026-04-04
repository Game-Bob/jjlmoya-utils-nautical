import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TideCalculatorUI, TideCalculatorLocaleContent } from '../index';

const slug = 'calculadora-altura-marea';
const title = 'Calculadora de Altura de Marea';
const description =
  'Estima el nivel del agua en cualquier instante del ciclo mareal utilizando el metodo nautico de la Regla de los Dozavos. Ideal para planificacion costera y estudio del PER.';

const ui: TideCalculatorUI = {
  parametersLabel: 'Parametros',
  highTideLabel: 'Pleamar',
  lowTideLabel: 'Bajamar',
  targetTimeLabel: 'Hora de consulta',
  estimatedHeightLabel: 'Altura Estimada',
  metersLabel: 'metros',
  amplitudeLabel: 'Amplitud',
  durationLabel: 'Duracion',
  tableBreakdownLabel: 'Desglose por Dozavos',
  tableHourLabel: 'Hora',
  tableStateLabel: 'Estado',
  tableStartLabel: 'Inicio',
  tableEndLabel: 'Final',
  statusUpLabel: 'Subiendo',
  statusDownLabel: 'Bajando',
  statusOutOfRange: 'Fuera de rango',
  faqTitle: 'Preguntas Frecuentes',
  bibliographyTitle: 'Referencias Bibliograficas',
};

const faq: TideCalculatorLocaleContent['faq'] = [
  {
    question: '¿Que es la Regla de los Dozavos y para que sirve?',
    answer:
      'La Regla de los Dozavos es un metodo matematico simplificado utilizado en nautica para estimar la altura de la marea en cualquier momento entre la pleamar y la bajamar. Se basa en que el flujo del agua sigue una curva sinusoidal aproximada, dividiendo la amplitud total en 12 partes repartidas en 6 horas (1/12, 2/12, 3/12, 3/12, 2/12, 1/12).',
  },
  {
    question: '¿Es fiable este metodo para la navegacion real?',
    answer:
      'Es un metodo de estimacion teorica muy util para planificacion rapida y fines educativos. Sin embargo, no tiene en cuenta factores meteorologicos como la presion atmosferica o el viento, que pueden alterar el nivel del mar varios decimetros. Para navegacion real, consulta siempre las tablas oficiales de Puertos del Estado.',
  },
  {
    question: '¿Que datos necesito para calcular la altura de la marea?',
    answer:
      'Necesitas conocer la hora y la altura (en metros) de la pleamar y la bajamar mas cercanas al momento que quieres consultar. Estos datos se encuentran en los anuarios de mareas o aplicaciones meteorologicas marinas.',
  },
  {
    question: '¿Por que la marea no sube siempre a la misma velocidad?',
    answer:
      'Debido a la inercia de las grandes masas de agua y la configuracion de las cuencas oceanicas. La marea comienza a subir lentamente tras la bajamar, alcanza su velocidad maxima en las horas centrales (las horas del 3/12) y vuelve a frenarse al aproximarse a la pleamar.',
  },
  {
    question: '¿Como afecta la presion atmosferica a la marea?',
    answer:
      'La presion alta (anticiclon) empuja el agua hacia abajo, reduciendo la altura real. La presion baja (borrasca) permite que el agua suba mas. Por norma general, una variacion de 1 hPa respecto a la media supone un cambio de aproximadamente 1 cm en el nivel del mar.',
  },
  {
    question: '¿Que es la amplitud de marea?',
    answer:
      'Es la diferencia vertical de altura entre una pleamar y la bajamar inmediatamente anterior o posterior. Esta medida varia segun la fase lunar (mareas vivas y muertas) y la ubicacion geografica.',
  },
];

const howTo: TideCalculatorLocaleContent['howTo'] = [
  {
    name: 'Identifica la pleamar y bajamar',
    text: 'Consulta tu anuario de mareas para obtener las horas y alturas del ciclo de marea que te interesa.',
  },
  {
    name: 'Introduce los datos en la calculadora',
    text: 'Ingresa la hora y altura de la pleamar y la bajamar. La herramienta determinara la duracion y amplitud automaticamente.',
  },
  {
    name: 'Establece la hora de consulta',
    text: 'Ajusta la hora para la que deseas conocer el nivel del agua. Veras el punto exacto resaltado en la grafica.',
  },
  {
    name: 'Analiza la tabla de dozavos',
    text: 'Revisa el desglose hora por hora para entender como fluctuara el nivel del agua durante todo el periodo.',
  },
];

const bibliography: TideCalculatorLocaleContent['bibliography'] = [
  {
    name: 'Puertos del Estado - Prediccion de Mareas',
    url: 'https://portus.puertos.es/#/',
  },
  {
    name: 'Instituto Hidrografico de la Marina',
    url: 'https://armada.defensa.gob.es/ihm/',
  },
];

const seo: TideCalculatorLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Dominando la Marea: La Regla de los Dozavos en la Navegacion',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'La navegacion costera y la entrada en puertos con calado restringido requieren un conocimiento preciso de la altura del agua en cada momento. Aunque hoy en dia disponemos de aplicaciones digitales y GPS que proporcionan datos en tiempo real, la <strong>Regla de los Dozavos</strong> sigue siendo una herramienta fundamental en la formacion de cualquier patron de embarcacion de recreo (PER) o capitan de yate. Esta regla es un metodo de estimacion matematica que permite calcular, de forma aproximada y sin necesidad de calculadoras complejas, la altura de la marea en cualquier punto de un ciclo mareal.',
  },
  {
    type: 'title',
    text: '¿Que es exactamente la Regla de los Dozavos?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La Regla de los Dozavos se basa en la observacion de que el flujo de la marea no es constante. El agua no sube ni baja a la misma velocidad durante las seis horas (aproximadamente) que dura el periodo entre una pleamar y una bajamar. En su lugar, el movimiento sigue una curva sinusoidal. Durante la primera hora, la marea se mueve lentamente; acelera en las horas centrales y vuelve a frenar a medida que se acerca al siguiente extremo.',
  },
  {
    type: 'table',
    headers: ['Hora del Ciclo', 'Proporcion', 'Estado del Flujo'],
    rows: [
      ['<strong>1ª Hora</strong>', '1/12 de la amplitud', 'Inicio lento (Repunte)'],
      ['<strong>2ª Hora</strong>', '2/12 de la amplitud', 'Aceleracion del flujo'],
      ['<strong>3ª Hora</strong>', '3/12 de la amplitud', 'Flujo maximo (Corriente fuerte)'],
      ['<strong>4ª Hora</strong>', '3/12 de la amplitud', 'Mantenimiento del flujo'],
      ['<strong>5ª Hora</strong>', '2/12 de la amplitud', 'Desaceleracion notable'],
      ['<strong>6ª Hora</strong>', '1/12 de la amplitud', 'Frenado final (Hacia el estrepunte)'],
    ],
  },
  {
    type: 'title',
    text: '¿Como utilizar esta calculadora de altura de marea?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Nuestra herramienta automatiza este proceso para ofrecerte una visualizacion clara y rapida. Solo necesitas los datos que encontraras en cualquier anuario de mareas u oficialia de puerto: la <strong>hora y altura de la pleamar</strong>, la <strong>hora y altura de la bajamar</strong>, y la <strong>hora de consulta</strong> para la que deseas conocer la profundidad disponible.',
  },
  {
    type: 'title',
    text: 'Limitaciones tecnicas: Factores que afectan a la marea real',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Es crucial entender que ningun metodo matematico, incluida la Regla de los Dozavos, es infalible. Existen diversos factores meteorologicos que pueden alterar significativamente la altura real del agua.',
  },
  {
    type: 'glossary',
    items: [
      { term: 'Presion Atmosferica', definition: 'Una borrasca eleva el nivel del mar; un anticiclon lo reduce. Por norma general, ~1 cm de variacion por cada hPa de diferencia respecto a la media.' },
      { term: 'Viento costero', definition: 'Vientos sostenidos hacia la costa (onshore) pueden apilar agua y elevar la marea por encima de lo previsto en las tablas.' },
      { term: 'Orografia local', definition: 'La forma de la costa, la profundidad del fondo y la presencia de estuarios o rías pueden retrasar o acelerar significativamente el flujo mareal.' },
    ],
  },
  {
    type: 'tip',
    title: 'Nota de Seguridad',
    html: 'Esta herramienta utiliza un metodo de estimacion matematica. No tiene en cuenta factores meteorologicos ni la orografia local. Para navegacion real, consulte siempre las tablas oficiales de Puertos del Estado.',
  },
  {
    type: 'title',
    text: 'Conceptos clave para navegantes noveles',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Amplitud de marea',
        definition: 'Diferencia vertical entre la pleamar y la bajamar. En el Cantabrico puede ser de varios metros; en el Mediterraneo es casi insignificante.',
      },
      {
        term: 'Duracion de la marea',
        definition: 'Intervalo de tiempo entre una marea alta y la siguiente marea baja. Normalmente ronda las 6 horas y 12 minutos (ciclo semidiurno).',
      },
      {
        term: 'Cero de la carta (Datum)',
        definition: 'Nivel de referencia a partir del cual se miden todas las profundidades en las cartas nauticas. Las sondas reales casi nunca son menores a las indicadas.',
      },
    ],
  },
  {
    type: 'title',
    text: 'Uso educativo y practico',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Esta calculadora ha sido diseñada como un recurso de apoyo para estudiantes de nautica y navegantes que buscan una forma rapida de visualizar el ciclo mareal. Al mostrar la grafica de la curva estimada, permite comprender visualmente en que fase se encuentra el puerto y con que rapidez esta cambiando la profundidad, algo esencial para decidir si es seguro fondear en una cala o si es mejor esperar a que suba la marea para entrar a puerto o cruzar un bajo.',
  },
];

const schemas: TideCalculatorLocaleContent['schemas'] = [
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

export const content: TideCalculatorLocaleContent = {
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
