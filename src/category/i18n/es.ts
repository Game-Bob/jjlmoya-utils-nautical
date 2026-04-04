import type { CategoryLocaleContent } from '../index';

const slug = 'vela-y-nautica';
const title = 'Vela y Nautica';
const description =
  'Herramientas de calculo nautico para navegantes: mareas, autonomia, superficie velica, conversores de unidades y velocidad. Ideales para el estudio del PER y Patron de Yate.';

const seo: CategoryLocaleContent['seo'] = [
  {
    type: 'title',
    text: '¿Por que usar herramientas digitales en navegacion y vela?',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'La navegacion moderna ha experimentado una transformacion radical con la llegada de las herramientas digitales. Ya sea que te encuentres en una pequeña embarcacion de recreo o al mando de un velero de crucero, la capacidad de procesar datos de posicion, viento y corriente de forma instantanea no es solo una cuestion de comodidad, sino un pilar fundamental de la seguridad en el mar.',
  },
  {
    type: 'paragraph',
    html: 'Historicamente, el marino dependia exclusivamente del sextante, el cronometro de marina y las tablas de reduccion para determinar su posicion en el vasto oceano. Hoy, aunque el romanticismo del sextante persiste, la realidad operativa exige una velocidad de respuesta que solo las herramientas de calculo digital pueden proporcionar.',
  },
  {
    type: 'title',
    text: 'Aspectos Clave para el Navegante Moderno',
    level: 2,
  },
  {
    type: 'title',
    text: 'Geolocalización y Cartografia Digital de Alta Precision',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La cartografia digital ha democratizado la navegacion, permitiendo que incluso barcos pequeños tengan acceso a informacion que antes estaba limitada a buques comerciales de gran calado. Un patron responsable utiliza las herramientas digitales para validar su juicio, no para sustituirlo.',
  },
  {
    type: 'list',
    items: [
      'Precision en la entrada de datos: Errores tipograficos minimos pueden alejarte kilometros de tu destino.',
      'Compatibilidad entre dispositivos: Permite sincronizar la planificacion en tablet con los sistemas del puente de mando.',
      'Respaldo ante fallos de hardware: Las apps web ligeras son un seguro si el plotter de abordo falla.',
      'Planificacion de travesias (Passage Planning): Las calculadoras nauticas permiten estimar consumos y distancias con precision matematica.',
    ],
  },
  {
    type: 'title',
    text: 'Meteorologia Marina y Optimizacion de la Ruta',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'El viento y el estado del mar son los verdaderos soberanos de la navegacion a vela. La interpretacion correcta de las escalas de viento (como la escala Beaufort) y su conversion a unidades practicas como nudos es el dia a dia de cualquier navegante.',
  },
  {
    type: 'tip',
    title: 'La importancia de la redundancia y el Plan B',
    html: 'Nunca confies toda tu navegacion a un solo sistema electronico. Mantén siempre una copia de seguridad de tus coordenadas criticas en papel. Las herramientas web son excelentes para la planificacion previa, pero el buen marinero siempre tiene un plan de emergencia.',
  },
  {
    type: 'title',
    text: 'Formacion Nautica y el uso de Calculadoras',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Incluso en los examenes oficiales para obtener los titulos nauticos (como el PER en España), el uso de calculos sobre la carta sigue siendo obligatorio. Las herramientas digitales sirven como el compañero de estudio perfecto, permitiendo a los aspirantes verificar sus ejercicios de estima, calculos de marea o correcciones de aguja magnetica.',
  },
  {
    type: 'paragraph',
    html: 'Nuestra coleccion de utilidades busca ser ese puente entre la rigurosidad academica de las cartas de papel y la inmediatez de la navegacion moderna. Queremos que cada patron, aficionado o profesional, encuentre aqui el dato rapido y preciso que necesita antes de soltar amarras.',
  },
];

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo,
};
