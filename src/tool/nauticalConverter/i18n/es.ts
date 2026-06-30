import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { NauticalConverterUI, NauticalConverterLocaleContent } from '../index';

const slug = 'conversor-unidades-nauticas';
const title = 'Conversor de Unidades Náuticas';
const description =
  'Convierte millas náuticas, nudos, brazas y presión atmosférica. Incluye escala Beaufort interactiva para velocidad del viento.';

const ui: NauticalConverterUI = {
  distanceCategoryLabel: 'Distancia',
  speedCategoryLabel: 'Velocidad',
  depthCategoryLabel: 'Profundidad',
  pressureCategoryLabel: 'Presión',
  nmLabel: 'Milla Náutica (nm)',
  kmLabel: 'Kilómetro (km)',
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
  atmLabel: 'Atmósfera (atm)',
  windSeaLabel: 'Estado del mar',
  forceLabel: 'Fuerza',
  effectLabel: 'Efecto',
  copyLabel: 'Copiar valor',
};

const faq: NauticalConverterLocaleContent['faq'] = [
  {
    question: '¿Cuántos kilómetros tiene una milla náutica?',
    answer: 'Una milla náutica equivale exactamente a 1,852 kilómetros, o 1852 metros. Esta medida corresponde a un minuto de arco de latitud en la superficie terrestre.',
  },
  {
    question: '¿Qué diferencia hay entre un nudo y un kilómetro por hora?',
    answer: 'Un nudo equivale a 1,852 km/h, ya que un nudo es igual a una milla náutica por hora. Para convertir nudos a km/h basta con multiplicar por 1,852.',
  },
  {
    question: '¿Por qué se usan millas náuticas en lugar de kilómetros en el mar?',
    answer: 'Porque la milla náutica corresponde a un minuto de arco de latitud, lo que facilita enormemente los cálculos de navegación con carta y compás. Un cambio de un minuto de latitud equivale exactamente a una milla náutica.',
  },
  {
    question: '¿Qué es la escala Beaufort?',
    answer: 'Es una escala empírica que relaciona la velocidad del viento con los efectos observables en el mar. Va de 0 (calma) a 12 (huracán) y es esencial para la navegación costera y oceánica.',
  },
  {
    question: '¿Qué unidad de presión se usa en meteorología marítima?',
    answer: 'En meteorología marítima se usa principalmente el milibar (mbar) o su equivalente hectopascal (hPa). La presión atmosférica normal al nivel del mar es de 1013,25 mbar.',
  },
  {
    question: '¿Cuántos pies tiene una braza?',
    answer: 'Una braza equivale exactamente a 6 pies, es decir, 1,8288 metros. Se usa principalmente en países anglosajones para expresar profundidades en cartas náuticas antiguas.',
  },
];

const howTo: NauticalConverterLocaleContent['howTo'] = [
  {
    name: 'Selecciona la categoría de conversión',
    text: 'Haz clic en una de las cuatro pestañas: Distancia, Velocidad, Profundidad o Presión según la magnitud que quieras convertir.',
  },
  {
    name: 'Introduce el valor en cualquier campo',
    text: 'Escribe el número en la unidad que conoces. Todas las demás unidades se actualizan automáticamente en tiempo real.',
  },
  {
    name: 'Consulta la escala Beaufort (velocidad)',
    text: 'Al introducir una velocidad en la pestaña de Velocidad, aparecerá una tarjeta con la fuerza Beaufort correspondiente y el estado del mar esperado.',
  },
  {
    name: 'Copia el resultado',
    text: 'Usa el botón de copia junto a cualquier campo para copiar el valor al portapapeles.',
  },
];

const seo: NauticalConverterLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'La importancia de la precisión en las unidades náuticas',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Navegar por el mar requiere un lenguaje propio, un sistema de medidas que ha sido refinado durante siglos de exploración marítima. Las unidades náuticas no son un capricho histórico, sino herramientas matemáticamente coherentes con la geometría de la Tierra y las necesidades prácticas del navegante.',
  },
  {
    type: 'paragraph',
    html: 'A diferencia de lo que ocurre en tierra firme, donde el error de unos metros rara vez tiene consecuencias graves, en el mar una conversión errónea puede significar la diferencia entre fondear en aguas seguras o encallar en un bajo. La precisión en las unidades no es una cuestión académica: es navegación.',
  },
  {
    type: 'paragraph',
    html: 'Cuando nos alejamos de la costa, la escasez de referencias visuales hace que la posición calculada sea la única realidad sobre la que podemos actuar. Saber convertir con exactitud entre millas náuticas, kilómetros, nudos y metros no es opcional para el navegante responsable.',
  },
  {
    type: 'title',
    text: '¿Por qué usamos millas náuticas en lugar de kilómetros?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La respuesta reside en la propia forma de la Tierra. Una <strong>milla náutica</strong> equivale exactamente a un minuto de arco de latitud en la superficie terrestre, es decir, 1852 metros. Esta correspondencia directa entre medida angular y distancia lineal es la clave de su uso universal en navegación.',
  },
  {
    type: 'paragraph',
    html: 'Al usar esta unidad, un cambio de un minuto en la latitud de una carta náutica corresponde siempre a exactamente una milla náutica recorrida. Esto simplifica enormemente los cálculos de posición, velocidad y tiempo de llegada sin necesidad de factores de conversión adicionales.',
  },
  {
    type: 'title',
    text: 'Velocidad en el mar: El nudo',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'El <strong>nudo</strong> es la unidad de velocidad equivalente a una milla náutica por hora. Su nombre proviene de la antigua técnica de medir la velocidad lanzando al agua una tablilla de madera atada a una cuerda con nudos espaciados regularmente y contando cuántos nudos pasaban entre los dedos en un tiempo fijo.',
  },
  {
    type: 'paragraph',
    html: 'Hoy en día, aunque utilizamos satélites GPS y sofisticados sistemas electrónicos, el nudo sigue siendo la unidad estándar en aviación y navegación marítima internacional. Un nudo equivale a 1,852 km/h o a 0,514 m/s.',
  },
  {
    type: 'title',
    text: 'Profundidad y fondeo: Brazas, Metros y Pies',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'En el mundo de la náutica, la profundidad no es solo un dato estadístico: es la diferencia entre un fondeo seguro y un encallamiento. Históricamente, la <strong>braza</strong> (fathom en inglés, 1,8288 metros o exactamente 6 pies) fue la unidad predominante para medir profundidades en el mundo anglosajón.',
  },
  {
    type: 'paragraph',
    html: 'Sin embargo, la globalización y la tecnología han introducido el uso constante de los metros en la mayoría de cartas y ecosondas modernas. El navegante actual debe saber moverse con soltura entre brazas, metros y pies, especialmente cuando consulta cartas náuticas antiguas o instrumentos calibrados en unidades imperiales.',
  },
  {
    type: 'title',
    text: 'Meteorología y Presión Atmosférica',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Para un patrón de barco, el barómetro es el oráculo del tiempo. La presión atmosférica, medida en <strong>milibares</strong> (mbar), es el indicador más fiable de los cambios meteorológicos inminentes. Una caída rápida de presión anuncia la llegada de vientos fuertes y mal tiempo.',
  },
  {
    type: 'paragraph',
    html: 'Entender las variaciones de presión es vital para cualquier navegante. La presión atmosférica normal al nivel del mar es de 1013,25 mbar (una atmósfera). Valores superiores indican tiempo estable, mientras que valores inferiores, especialmente si descienden rápidamente, señalan la aproximación de sistemas de baja presión potencialmente peligrosos.',
  },
  {
    type: 'title',
    text: 'Escalas de Viento y Mar: De Beaufort a Douglas',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La velocidad del viento en nudos es un número que cobra vida real cuando se asocia con la <strong>escala Beaufort</strong>. Desarrollada por el almirante británico Francis Beaufort en 1805, esta escala empírica relaciona la velocidad del viento con los efectos observables tanto en la superficie del mar como en tierra.',
  },
  {
    type: 'list',
    items: [
      '<strong>Fuerza 0-3 (0-10 kn):</strong> Condiciones de navegación plácidas, ideales para aprender o para salidas familiares.',
      '<strong>Fuerza 4-5 (11-21 kn):</strong> Viento de navegación ideal para veleros, con olas moderadas y borreguillos visibles.',
      '<strong>Fuerza 6-7 (22-33 kn):</strong> Condiciones de viento fresco a frescachón. Se recomienda experiencia y reducir trapo.',
      '<strong>Fuerza 8+ (más de 34 kn):</strong> Temporal. Solo para navegantes experimentados con embarcaciones adecuadas.',
    ],
  },
  {
    type: 'paragraph',
    html: 'De la misma manera, la escala Douglas clasifica el estado de la mar en grados del 0 (glassy) al 9 (phenomenal), permitiendo al navegante anticipar las condiciones que encontrará más allá del horizonte basándose en los partes meteorológicos.',
  },
  {
    type: 'tip',
    title: 'Consejo de Seguridad',
    html: 'Al utilizar este conversor para planificar una salida, ten siempre en cuenta que las condiciones reales pueden diferir de las previstas. Consulta el parte meteorológico oficial y nunca subestimes la capacidad del mar para cambiar rápidamente.',
  },
  {
    type: 'title',
    text: 'Planificación offline y movilidad',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Esta herramienta está diseñada para funcionar sin conexión a internet una vez cargada en el navegador, lo que la hace ideal para su uso a bordo donde la conectividad puede ser limitada. Todas las conversiones se calculan localmente en el dispositivo, sin enviar datos a ningún servidor.',
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
    name: `Cómo usar: ${title}`,
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
