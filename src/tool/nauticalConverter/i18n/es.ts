import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { NauticalConverterUI, NauticalConverterLocaleContent } from '../index';

const slug = 'conversor-unidades-nauticas';
const title = 'Conversor de Unidades Náuticas';
const description =
  'Convierte millasnáuticas, nudos, brazas y presion atmosferica. Incluye escala Beaufort interactiva para velocidad del viento.';

const ui: NauticalConverterUI = {
  distanceCategoryLabel: 'Distancia',
  speedCategoryLabel: 'Velocidad',
  depthCategoryLabel: 'Profundidad',
  pressureCategoryLabel: 'Presion',
  nmLabel: 'Milla Nautica (nm)',
  kmLabel: 'Kilometro (km)',
  miLabel: 'Milla Terrestre (mi)',
  cableLabel: 'Cable',
  knLabel: 'Nudo (kn)',
  kmhLabel: 'km/h',
  msLabel: 'm/s',
  mphLabel: 'mph',
  brozaLabel: 'Braza',
  mLabel: 'Metro (m)',
  ftLabel: 'Pie (ft)',
  mbarLabel: 'Milibar (mbar)',
  mmhgLabel: 'mmHg',
  inhgLabel: 'inHg',
  atmLabel: 'Atmosfera (atm)',
  windSeaLabel: 'Estado del mar',
  forceLabel: 'Fuerza',
  effectLabel: 'Efecto',
  copyLabel: 'Copiar valor',
};

const faq: NauticalConverterLocaleContent['faq'] = [
  {
    question: '¿Cuantos kilometros tiene una milla nautica?',
    answer: 'Una milla nautica equivale exactamente a 1.852 kilometros, o 1852 metros. Esta medida corresponde a un minuto de arco de latitud en la superficie terrestre.',
  },
  {
    question: '¿Que diferencia hay entre un nudo y un kilometro por hora?',
    answer: 'Un nudo equivale a 1.852 km/h, ya que un nudo es igual a una milla nautica por hora. Para convertir nudos a km/h basta con multiplicar por 1.852.',
  },
  {
    question: '¿Por que se usan millasnáuticas en lugar de kilometros en el mar?',
    answer: 'Porque la milla nautica corresponde a un minuto de arco de latitud, lo que facilita enormemente los calculos de navegacion con carta y compas. Un cambio de un minuto de latitud equivale exactamente a una milla nautica.',
  },
  {
    question: '¿Que es la escala Beaufort?',
    answer: 'Es una escala empirica que relaciona la velocidad del viento con los efectos observables en el mar. Va de 0 (calma) a 12 (huracan) y es esencial para la navegacion costera y oceanica.',
  },
  {
    question: '¿Que unidad de presion se usa en meteorologia maritima?',
    answer: 'En meteorologia maritima se usa principalmente el milibar (mbar) o su equivalente hectopascal (hPa). La presion atmosferica normal al nivel del mar es de 1013.25 mbar.',
  },
  {
    question: '¿Cuantos pies tiene una braza?',
    answer: 'Una braza equivale exactamente a 6 pies, es decir, 1.8288 metros. Se usa principalmente en paises anglosajones para expresar profundidades en cartasnáuticas antiguas.',
  },
];

const howTo: NauticalConverterLocaleContent['howTo'] = [
  {
    name: 'Selecciona la categoria de conversion',
    text: 'Haz clic en una de las cuatro pestañas: Distancia, Velocidad, Profundidad o Presion segun la magnitud que quieras convertir.',
  },
  {
    name: 'Introduce el valor en cualquier campo',
    text: 'Escribe el numero en la unidad que conoces. Todas las demas unidades se actualizan automaticamente en tiempo real.',
  },
  {
    name: 'Consulta la escala Beaufort (velocidad)',
    text: 'Al introducir una velocidad en la pestaña de Velocidad, aparecera una tarjeta con la fuerza Beaufort correspondiente y el estado del mar esperado.',
  },
  {
    name: 'Copia el resultado',
    text: 'Usa el boton de copia junto a cualquier campo para copiar el valor al portapapeles.',
  },
];

const seo: NauticalConverterLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'La importancia de la precision en las unidadesnáuticas',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Navegar por el mar requiere un lenguaje propio, un sistema de medidas que ha sido refinado durante siglos de exploracion maritima. Las unidadesnáuticas no son un capricho historico, sino herramientas matematicamente coherentes con la geometria de la Tierra y las necesidades practicas del navegante.',
  },
  {
    type: 'paragraph',
    html: 'A diferencia de lo que ocurre en tierra firme, donde el error de unos metros rara vez tiene consecuencias graves, en el mar una conversion erronea puede significar la diferencia entre fondear en aguas seguras o encallar en un bajo. La precision en las unidades no es una cuestion academica: es navegacion.',
  },
  {
    type: 'paragraph',
    html: 'Cuando nos alejamos de la costa, la escasez de referencias visuales hace que la posicion calculada sea la unica realidad sobre la que podemos actuar. Saber convertir con exactitud entre millasnáuticas, kilometros, nudos y metros no es opcional para el navegante responsable.',
  },
  {
    type: 'title',
    text: '¿Por que usamos millasnáuticas en lugar de kilometros?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La respuesta reside en la propia forma de la Tierra. Una <strong>milla nautica</strong> equivale exactamente a un minuto de arco de latitud en la superficie terrestre, es decir, 1852 metros. Esta correspondencia directa entre medida angular y distancia lineal es la clave de su uso universal en navegacion.',
  },
  {
    type: 'paragraph',
    html: 'Al usar esta unidad, un cambio de un minuto en la latitud de una carta nautica corresponde siempre a exactamente una milla nautica recorrida. Esto simplifica enormemente los calculos de posicion, velocidad y tiempo de llegada sin necesidad de factores de conversion adicionales.',
  },
  {
    type: 'title',
    text: 'Velocidad en el mar: El nudo',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'El <strong>nudo</strong> es la unidad de velocidad equivalente a una milla nautica por hora. Su nombre proviene de la antigua tecnica de medir la velocidad lanzando al agua una tablilla de madera atada a una cuerda con nudos espaciados regularmente y contando cuantos nudos pasaban entre los dedos en un tiempo fijo.',
  },
  {
    type: 'paragraph',
    html: 'Hoy en dia, aunque utilizamos satelites GPS y sofisticados sistemas electronicos, el nudo sigue siendo la unidad estandar en aviacion y navegacion maritima internacional. Un nudo equivale a 1.852 km/h o a 0.514 m/s.',
  },
  {
    type: 'title',
    text: 'Profundidad y fondeo: Brazas, Metros y Pies',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'En el mundo de la nautica, la profundidad no es solo un dato estadistico: es la diferencia entre un fondeo seguro y un encallamiento. Historicamente, la <strong>braza</strong> (fathom en ingles, 1.8288 metros o exactamente 6 pies) fue la unidad predominante para medir profundidades en el mundo anglosajones.',
  },
  {
    type: 'paragraph',
    html: 'Sin embargo, la globalizacion y la tecnologia han introducido el uso constante de los metros en la mayoria de cartas y ecosondas modernas. El navegante actual debe saber moverse con soltura entre brazas, metros y pies, especialmente cuando consulta cartasnáuticas antiguas o instrumentos calibrados en unidades imperiales.',
  },
  {
    type: 'title',
    text: 'Meteorologia y Presion Atmosferica',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Para un patron de barco, el barometro es el oraculo del tiempo. La presion atmosferica, medida en <strong>milibares</strong> (mbar), es el indicador mas fiable de los cambios meteorologicos inminentes. Una caida rapida de presion anuncia la llegada de vientos fuertes y mal tiempo.',
  },
  {
    type: 'paragraph',
    html: 'Entender las variaciones de presion es vital para cualquier navegante. La presion atmosferica normal al nivel del mar es de 1013.25 mbar (una atmosfera). Valores superiores indican tiempo estable, mientras que valores inferiores, especialmente si descienden rapidamente, señalan la aproximacion de sistemas de baja presion potencialmente peligrosos.',
  },
  {
    type: 'title',
    text: 'Escalas de Viento y Mar: De Beaufort a Douglas',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La velocidad del viento en nudos es un numero que cobra vida real cuando se asocia con la <strong>escala Beaufort</strong>. Desarrollada por el almirante britanico Francis Beaufort en 1805, esta escala empirica relaciona la velocidad del viento con los efectos observables tanto en la superficie del mar como en tierra.',
  },
  {
    type: 'list',
    items: [
      '<strong>Fuerza 0-3 (0-10 kn):</strong> Condiciones de navegacion placidas, ideales para aprender o para salidas familiares.',
      '<strong>Fuerza 4-5 (11-21 kn):</strong> Viento de navegacion ideal para veleros, con olas moderadas y borreguillos visibles.',
      '<strong>Fuerza 6-7 (22-33 kn):</strong> Condiciones de viento fresco a frescachon. Se recomienda experiencia y reducir trapo.',
      '<strong>Fuerza 8+ (mas de 34 kn):</strong> Temporal. Solo para navegantes experimentados con embarcaciones adecuadas.',
    ],
  },
  {
    type: 'paragraph',
    html: 'De la misma manera, la escala Douglas clasifica el estado de la mar en grados del 0 (glassy) al 9 (phenomenal), permitiendo al navegante anticipar las condiciones que encontrara mas alla del horizonte basandose en los partes meteorologicos.',
  },
  {
    type: 'tip',
    title: 'Consejo de Seguridad',
    html: 'Al utilizar este conversor para planificar una salida, ten siempre en cuenta que las condiciones reales pueden diferir de las previstas. Consulta el parte meteorologico oficial y nunca subestimes la capacidad del mar para cambiar rapidamente.',
  },
  {
    type: 'title',
    text: 'Planificacion offline y movilidad',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Esta herramienta esta diseñada para funcionar sin conexion a internet una vez cargada en el navegador, lo que la hace ideal para su uso a bordo donde la conectividad puede ser limitada. Todas las conversiones se calculan localmente en el dispositivo, sin enviar datos a ningun servidor.',
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
