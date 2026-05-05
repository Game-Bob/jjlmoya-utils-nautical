import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SpeedConverterUI, SpeedConverterLocaleContent } from '../index';

const slug = 'conversor-velocidad-nautica';
const title = 'Conversor de Velocidad Nautica y Escala Beaufort';
const description =
  'Convierte entre nudos, km/h, m/s y mph al instante. Incluye tabla Beaufort completa con descripcion del estado del mar y efectos del viento.';

const beaufortData = [
  { force: 0, name: 'Calma', sea: 'Mar como un espejo', effect: 'El humo sube verticalmente', kn: '0' },
  { force: 1, name: 'Ventolina', sea: 'Rizos como escamas de pescado', effect: 'El humo indica la direccion del viento', kn: '1-3' },
  { force: 2, name: 'Flojito', sea: 'Pequenas olas que no rompen', effect: 'Se siente el viento en la cara', kn: '4-6' },
  { force: 3, name: 'Flojo', sea: 'Ovejas blancas dispersas', effect: 'Se mueven las hojas', kn: '7-10' },
  { force: 4, name: 'Bonancible', sea: 'Frecuentes borreguillos', effect: 'Se levanta polvo y papeles', kn: '11-16' },
  { force: 5, name: 'Fresquito', sea: 'Olas moderadas, muchos borreguillos', effect: 'Dificultad para usar el paraguas', kn: '17-21' },
  { force: 6, name: 'Fresco', sea: 'Olas grandes, crestas de espuma blanca', effect: 'Dificultad para caminar contra el viento', kn: '22-27' },
  { force: 7, name: 'Frescachon', sea: 'Mar gruesa, espuma en hileras', effect: 'Dificultad para caminar', kn: '28-33' },
  { force: 8, name: 'Temporal', sea: 'Olas de gran altura, rompientes', effect: 'Gran dificultad para caminar', kn: '34-40' },
  { force: 9, name: 'Temporal fuerte', sea: 'Olas muy altas, visibilidad reducida', effect: 'Danos en edificios', kn: '41-47' },
  { force: 10, name: 'Temporal duro', sea: 'Olas excepcionalmente altas, mar blanca', effect: 'Arboles arrancados', kn: '48-55' },
  { force: 11, name: 'Temporal muy duro', sea: 'Olas enormes, espuma cubre el mar', effect: 'Devastacion amplia', kn: '56-63' },
  { force: 12, name: 'Huracan', sea: 'Aire lleno de espuma y rociones', effect: 'Catastrofe total', kn: '64+' },
];

const ui: SpeedConverterUI = {
  knLabel: 'Nudos (kt)',
  kmhLabel: 'Kilometros/hora',
  msLabel: 'Metros/segundo',
  mphLabel: 'Millas/hora',
  beaufortTitle: 'Escala Beaufort',
  forceLabel: 'Fuerza',
  descriptionLabel: 'Descripcion',
  knotsLabel: 'Nudos',
  effectLabel: 'Efecto Visual',
  seaStateLabel: 'Estado del Mar',
  windEffectLabel: 'Efecto en Tierra',
  beaufortDataJson: JSON.stringify(beaufortData),
};

const faq: SpeedConverterLocaleContent['faq'] = [
  {
    question: '¿Por que se mide la velocidad del barco en nudos?',
    answer: 'El nudo es una unidad de velocidad equivalente a una milla nautica por hora. Su origen es historico: los marineros median la velocidad de la nave arrojando al mar una cuerda con nudos equidistantes atada a un trozo de madera, y contaban cuantos nudos pasaban entre sus dedos en un tiempo determinado. Hoy sigue siendo la unidad internacional estandar en navegacion maritima y aviacion.',
  },
  {
    question: '¿Que es la Escala Beaufort y como se usa en la navegacion?',
    answer: 'La Escala Beaufort es una escala empirica que relaciona la velocidad del viento con los efectos observados en el mar y en tierra. Desarrollada por el almirante britanico Francis Beaufort en 1805, va del 0 (calma absoluta) al 12 (huracan). Los navegantes la usan para estimar la intensidad del viento sin necesidad de instrumentos, observando el estado del mar.',
  },
  {
    question: '¿Cual es la diferencia entre SOG y STW en navegacion?',
    answer: 'SOG (Speed Over Ground) es la velocidad real del barco respecto al fondo marino, medida por el GPS. STW (Speed Through Water) o velocidad de corredera es la velocidad del barco respecto al agua que lo rodea. La diferencia entre ambas refleja el efecto de las corrientes marinas. Para planificar llegadas y calcular combustible se usa la SOG; para calcular el abatimiento se usa la STW.',
  },
  {
    question: '¿A cuantos km/h equivale un nudo?',
    answer: 'Un nudo equivale exactamente a 1,852 kilometros por hora, que es la longitud de una milla nautica (definida como un minuto de arco del meridiano terrestre). Por tanto, 10 nudos son 18,52 km/h, 20 nudos son 37,04 km/h y 30 nudos son 55,56 km/h.',
  },
];

const howTo: SpeedConverterLocaleContent['howTo'] = [
  {
    name: 'Introduce la velocidad en cualquier unidad',
    text: 'Escribe el valor de velocidad en el campo correspondiente (nudos, km/h, m/s o mph) y los demas campos se actualizaran automaticamente.',
  },
  {
    name: 'Consulta la fuerza Beaufort equivalente',
    text: 'La tarjeta Beaufort muestra en tiempo real la fuerza del viento correspondiente a la velocidad introducida, con el estado del mar y efectos en tierra.',
  },
  {
    name: 'Haz clic en una fila de la tabla Beaufort',
    text: 'Puedes seleccionar directamente cualquier escala Beaufort en la tabla inferior para ver su velocidad minima en todos los formatos.',
  },
  {
    name: 'Usa los resultados para planificar tu navegacion',
    text: 'Combina la informacion de velocidad y viento para decidir si las condiciones son apropiadas para tu tipo de embarcacion y travesia planificada.',
  },
];

const seo: SpeedConverterLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Guia del Conversor de Velocidad Nautica y Escala Beaufort',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'La velocidad es un dato fundamental en la navegacion maritima. Conocer cuantos nudos hace tu barco, como se traduce eso en kilometros por hora para planificar una travesia, o que fuerza Beaufort representa el viento que estas soportando, son calculos que todo navegante necesita dominar.',
  },
  {
    type: 'paragraph',
    html: 'Este conversor de velocidad nautica te permite transformar entre nudos, km/h, m/s y mph de forma instantanea, ademas de identificar automaticamente la fuerza Beaufort correspondiente con su descripcion del estado del mar y los efectos observables del viento.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Unidad Estandar', value: 'Nudos (kt)', icon: 'mdi:speedometer' },
      { label: 'Escala de Viento', value: 'Beaufort (0-12)', icon: 'mdi:weather-windy' },
      { label: 'Conversion Clave', value: '1 kt = 1.85 km/h', icon: 'mdi:swap-horizontal' },
    ],
  },
  {
    type: 'title',
    text: '¿Por que se mide la velocidad en Nudos?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'El <strong>nudo (kt)</strong> es la unidad de velocidad oficial en navegacion maritima y aerea. Su definicion es precisa: un nudo equivale a una milla nautica por hora, donde la milla nautica (1852 m) se define como un minuto de arco del meridiano terrestre. Esta relacion directa con la geometria de la Tierra es lo que hace del nudo una unidad especialmente practica para la navegacion, ya que permite estimar distancias directamente sobre la carta nautica sin conversion alguna.',
  },
  {
    type: 'paragraph',
    html: 'Historicamente, los marinos median la velocidad de la nave usando la <em>corredera de barquilla</em>: un trozo de madera triangular arrojado al mar atado a una cuerda con nudos equidistantes cada 14,4 metros (la fraccion proporcional de una milla nautica en 30 segundos). Contando los nudos que pasaban entre los dedos durante ese tiempo, obtenian la velocidad del barco, dando origen al termino que usamos hoy.',
  },
  {
    type: 'title',
    text: 'La Escala Beaufort: El Ojo del Marino',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La <strong>Escala Beaufort</strong> fue desarrollada en 1805 por el almirante britanico Sir Francis Beaufort como un metodo empirico para clasificar la fuerza del viento a partir de sus efectos observables, sin necesidad de instrumentacion. Originalmente concebida para estimar la cantidad de vela que un barco podia largar, hoy es una referencia universal en meteorologia maritima, adoptada por la Organizacion Meteorologica Mundial (OMM).',
  },
  {
    type: 'paragraph',
    html: 'La escala va del <strong>Fuerza 0</strong> (calma absoluta, mar como un espejo) al <strong>Fuerza 12</strong> (condiciones de huracan con olas de mas de 14 metros y el aire lleno de espuma y rociada). Para el navegante de recreo, los limites criticos suelen ser el Fuerza 6 (fresco, 22-27 nudos) para embarcaciones ligeras y el Fuerza 7-8 para veleros de oceano.',
  },
  {
    type: 'table',
    headers: ['Fuerza Beaufort', 'Denominacion', 'Efectos en el Mar'],
    rows: [
      ['0', 'Calma', 'Mar como un espejo'],
      ['3', 'Flojo', 'Ovejas blancas dispersas, crestas que empiezan a romper'],
      ['6', 'Fresco', 'Olas grandes, crestas de espuma blanca, rociada posible'],
      ['9', 'Temporal fuerte', 'Olas muy altas, visibilidad reducida por espuma y rociada'],
      ['12', 'Huracan', 'Aire completamente lleno de espuma, mar totalmente blanca'],
    ],
  },
  {
    type: 'title',
    text: 'Glosario Nautico de Velocidad',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: 'Nudo (kt)', definition: 'Unidad de velocidad equivalente a una milla nautica por hora (1852 m/h). Estandar internacional en navegacion maritima y aerea.' },
      { term: 'SOG (Speed Over Ground)', definition: 'Velocidad real del buque sobre el fondo marino, medida por GPS. Refleja el efecto de las corrientes marinas sobre la velocidad del barco.' },
      { term: 'Velocidad de Corredera (STW)', definition: 'Velocidad del barco respecto al agua circundante, medida por la corredera. No incluye el efecto de corrientes; es clave para calcular el abatimiento.' },
      { term: 'Viento Aparente', definition: 'Viento que percibe el tripulante a bordo, resultado de la suma vectorial del viento real y el viento generado por el avance del barco. Siempre difiere del viento real en magnitud y direccion.' },
    ],
  },
  {
    type: 'title',
    text: 'Formulas de Conversion Rapidas',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Para convertir velocidades manualmente cuando no tienes acceso a un conversor digital, puedes usar estas aproximaciones rapidas que todo navegante deberia conocer de memoria:',
  },
  {
    type: 'list',
    items: [
      '<strong>Nudos a km/h:</strong> Multiplica los nudos por 1,852. Aproximacion rapida: nudos x 2, menos el 8%. Por ejemplo, 10 kt ≈ 20 - 1,6 = 18,4 km/h.',
      '<strong>Nudos a mph:</strong> Multiplica los nudos por 1,15. Aproximacion: nudos + 15%. Por ejemplo, 20 kt ≈ 23 mph.',
      '<strong>Nudos a m/s:</strong> Multiplica los nudos por 0,514. Aproximacion rapida: divide los nudos entre 2. Por ejemplo, 10 kt ≈ 5 m/s (exacto: 5,14 m/s).',
    ],
  },
  {
    type: 'tip',
    title: 'Seguridad y Climatologia',
    html: 'Antes de salir a navegar, consulta siempre el parte meteorologico maritimo. Un Beaufort 4-5 es manejable para la mayoria de embarcaciones de recreo; a partir del Fuerza 6, considera seriamente posponer la salida si no tienes experiencia suficiente o si tu barco no esta preparado para esas condiciones.',
  },
  {
    type: 'title',
    text: 'Comparativa de Equipamiento',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Anemometro Digital',
        description: 'Instrumento electronico de medicion precisa de la velocidad del viento.',
        icon: 'mdi:speedometer',
        points: [
          'Precision de ±2% en condiciones normales',
          'Requiere alimentacion electrica o baterias',
          'Puede averiarse en condiciones extremas',
          'Lectura instantanea y registro de datos',
        ],
      },
      {
        title: 'Observacion Beaufort',
        description: 'Estimacion visual de la fuerza del viento mediante efectos observables en el mar y la tierra.',
        icon: 'mdi:eye-outline',
        highlight: true,
        points: [
          'No requiere ningun instrumento',
          'Disponible en cualquier condicion',
          'Precision suficiente para decisiones de seguridad',
          'Habilidad fundamental del navegante experto',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Navegacion y Planificacion de Derrotas',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Al planificar una derrota, la velocidad de tu embarcacion determina los tiempos estimados de llegada (ETA) y el consumo de combustible en embarcaciones a motor. Para un velero, la velocidad dependera ademas de la intensidad y direccion del viento: conocer la fuerza Beaufort prevista te permite anticipar si podras navegar a vela o si necesitaras el motor.',
  },
  {
    type: 'paragraph',
    html: 'En regatas, la conversion entre nudos y metros por segundo es especialmente util para calcular el VMG (Velocity Made Good) y para analizar polares de vela. Los meteorologos y modelos numericos de prediccion suelen dar el viento en m/s o km/h, por lo que la conversion a nudos es un paso habitual en la planificacion tactica.',
  },
];

const schemas: SpeedConverterLocaleContent['schemas'] = [
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

export const content: SpeedConverterLocaleContent = {
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
