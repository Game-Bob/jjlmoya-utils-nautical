import type { CategoryLocaleContent } from '../index';

const slug = 'vela-y-nautica';
const title = 'Vela y Náutica';
const description =
  'Herramientas de cálculo náutico para navegantes: mareas, autonomía, superficie vélica, conversores de unidades y velocidad. Ideales para el estudio del PER y Patrón de Yate.';

const seo: CategoryLocaleContent['seo'] = [
  {
    type: 'title',
    text: '¿Por qué usar herramientas digitales en navegación y vela?',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'La navegación moderna ha experimentado una transformación radical con la llegada de las herramientas digitales. Ya sea que te encuentres en una pequeña embarcación de recreo o al mando de un velero de crucero, la capacidad de procesar datos de posición, viento y corriente de forma instantánea no es solo una cuestión de comodidad, sino un pilar fundamental de la seguridad en el mar.',
  },
  {
    type: 'paragraph',
    html: 'Históricamente, el marino dependía exclusivamente del sextante, el cronómetro de marina y las tablas de reducción para determinar su posición en el vasto océano. Hoy, aunque el romanticismo del sextante persiste, la realidad operativa exige una velocidad de respuesta que solo las herramientas de cálculo digital pueden proporcionar.',
  },
  {
    type: 'title',
    text: 'Aspectos Clave para el Navegante Moderno',
    level: 2,
  },
  {
    type: 'title',
    text: 'Geolocalización y Cartografía Digital de Alta Precisión',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La cartografía digital ha democratizado la navegación, permitiendo que incluso barcos pequeños tengan acceso a información que antes estaba limitada a buques comerciales de gran calado. Un patrón responsable utiliza las herramientas digitales para validar su juicio, no para sustituirlo.',
  },
  {
    type: 'list',
    items: [
      'Precisión en la entrada de datos: Errores tipográficos mínimos pueden alejarte kilómetros de tu destino.',
      'Compatibilidad entre dispositivos: Permite sincronizar la planificación en tablet con los sistemas del puente de mando.',
      'Respaldo ante fallos de hardware: Las apps web ligeras son un seguro si el plotter de abordo falla.',
      'Planificación de travesías (Passage Planning): Las calculadoras náuticas permiten estimar consumos y distancias con precisión matemática.',
    ],
  },
  {
    type: 'title',
    text: 'Meteorología Marina y Optimización de la Ruta',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'El viento y el estado del mar son los verdaderos soberanos de la navegación a vela. La interpretación correcta de las escalas de viento (como la escala Beaufort) y su conversión a unidades prácticas como nudos es el día a día de cualquier navegante.',
  },
  {
    type: 'tip',
    title: 'La importancia de la redundancia y el Plan B',
    html: 'Nunca confíes toda tu navegación a un solo sistema electrónico. Mantén siempre una copia de seguridad de tus coordenadas críticas en papel. Las herramientas web son excelentes para la planificación previa, pero el buen marinero siempre tiene un plan de emergencia.',
  },
  {
    type: 'title',
    text: 'Formación Náutica y el uso de Calculadoras',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Incluso en los exámenes oficiales para obtener los títulos náuticos (como el PER en España), el uso de cálculos sobre la carta sigue siendo obligatorio. Las herramientas digitales sirven como el compañero de estudio perfecto, permitiendo a los aspirantes verificar sus ejercicios de estima, cálculos de marea o correcciones de aguja magnética.',
  },
  {
    type: 'paragraph',
    html: 'Nuestra colección de utilidades busca ser ese puente entre la rigurosidad académica de las cartas de papel y la inmediatez de la navegación moderna. Queremos que cada patrón, aficionado o profesional, encuentre aquí el dato rápido y preciso que necesita antes de soltar amarras.',
  },
];

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo,
};
