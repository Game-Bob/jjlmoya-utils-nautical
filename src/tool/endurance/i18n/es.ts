import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EnduranceUI, EnduranceLocaleContent } from '../index';

const slug = 'calculadora-autonomia-nautica';
const title = 'Calculadora de Autonomia Nautica';
const description =
  'Calcula tu alcance maximo y distancia segura segun consumo, capacidad y velocidad de crucero. Gestion de combustible para embarcaciones a motor.';

const ui: EnduranceUI = {
  tankCapacityLabel: 'Capacidad del Deposito',
  mainTankLabel: 'Ppal',
  auxTankLabel: 'Aux',
  currentFuelLabel: 'Combustible Actual',
  seaConditionsLabel: 'Condiciones Mar/Viento',
  consumptionLabel: 'Consumo Teorico',
  cruiseSpeedLabel: 'Velocidad Crucero',
  reserveLabel: 'Reserva',
  fuelPriceLabel: 'Precio Litro',
  maxRangeLabel: 'Alcance Maximo',
  realPerformanceLabel: 'Rendimiento Real',
  hoursLabel: 'Autonomia Horas',
  safeMilesLabel: 'Millas Seguras',
  tankValueLabel: 'Valor Tanque',
  inverseCalcLabel: 'Calculo Inverso: ¿Cuanto necesito repostar?',
  desiredDistLabel: 'Distancia Deseada',
  minFuelLabel: 'Combustible Minimo Requerido',
  warningLabel: 'Recordatorio: Una reserva del 20% es el minimo absoluto recomendado por seguridad nautica.',
  seaCalm: 'Calma (1.0x)',
  seaLight: 'Marejadilla (+15%)',
  seaModerate: 'Marejada (+30%)',
  seaStorm: 'Temporal (+60%)',
  faqTitle: 'Preguntas Frecuentes': 'Referencias',
};

const faq: EnduranceLocaleContent['faq'] = [
  {
    question: '¿Como se calcula la autonomia de una embarcacion a motor?',
    answer: 'La autonomia se calcula dividiendo el combustible disponible entre el consumo horario para obtener las horas totales, y multiplicando ese tiempo por la velocidad de crucero. La herramienta aplica ademas un factor de mar para reflejar condiciones reales de navegacion.',
  },
  {
    question: '¿Por que se recomienda una reserva del 20% en nautica?',
    answer: 'La reserva del 20% es un estandar de seguridad nautica que garantiza combustible suficiente ante imprevistos: corrientes contrarias, rodeos por mal tiempo, fallos en las previsiones de consumo o necesidad de asistir a otra embarcacion. Muchas aseguradoras y capitanias lo consideran obligatorio.',
  },
  {
    question: '¿Que es el rendimiento en L/MN y como afecta a la planificacion?',
    answer: 'El rendimiento en litros por milla nautica (L/MN) es la eficiencia real del motor en condiciones de mar. A diferencia del consumo horario, permite calcular exactamente cuanto combustible necesitas para recorrer una distancia concreta, independientemente de tu velocidad.',
  },
  {
    question: '¿Como influye el estado del mar en el consumo real?',
    answer: 'El estado del mar incrementa el consumo porque el casco trabaja mas contra la resistencia del agua y el viento. En marejadilla el consumo aumenta un 15%, en marejada un 30% y en temporal puede dispararse un 60% o mas. Ignorar este factor puede dejar una embarcacion sin combustible antes de llegar a puerto.',
  },
];

const howTo: EnduranceLocaleContent['howTo'] = [
  {
    name: 'Introduce la capacidad de tus depositos',
    text: 'Indica los litros del deposito principal y del auxiliar si tienes uno. La herramienta calculara el porcentaje de llenado actual.',
  },
  {
    name: 'Indica el combustible actual',
    text: 'Introduce los litros reales que tienes en este momento. Puedes medirlos con el nivel del barco o estimarlos segun el ultimo repostaje.',
  },
  {
    name: 'Ajusta las condiciones de navegacion',
    text: 'Selecciona el estado del mar previsto para tu travesia. El factor de mar corrije el consumo teorico al consumo real esperado.',
  },
  {
    name: 'Introduce consumo y velocidad de crucero',
    text: 'Usa los datos del fabricante o tus propios registros de consumo horario y la velocidad a la que navegaras habitualmente.',
  },
  {
    name: 'Revisa la distancia segura y el calculo inverso',
    text: 'La herramienta te muestra cuantas millas puedes recorrer con seguridad y cuanto combustible necesitas para llegar a un destino concreto.',
  },
];

const seo: EnduranceLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Gestion de Combustible y Autonomia en Navegacion a Motor',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'La <strong>autonomia nautica</strong> es uno de los calculos mas criticos antes de zarpar en una embarcacion a motor. Conocer con precision cuantas millas puedes recorrer con el combustible disponible es la diferencia entre una travesia planificada y una emergencia en alta mar.',
  },
  {
    type: 'paragraph',
    html: 'Esta calculadora de autonomia integra el <strong>factor de condiciones de mar</strong>, el porcentaje de reserva de seguridad y el calculo inverso de combustible necesario para que la gestion de combustible sea completa y fiable en cualquier situacion.',
  },
  {
    type: 'title',
    text: 'La Regla de Oro: La Regla de los Tercios',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La regla clasica de gestion de combustible en nautica divide el deposito en tres partes iguales para garantizar siempre un margen de seguridad:',
  },
  {
    type: 'list',
    items: [
      '<strong>Un tercio para la ida:</strong> El combustible necesario para llegar al destino previsto.',
      '<strong>Un tercio para la vuelta:</strong> El combustible de regreso al puerto de salida o al mas cercano.',
      '<strong>Un tercio de reserva:</strong> El margen de seguridad ante imprevistos, corrientes o condiciones adversas.',
    ],
  },
  {
    type: 'paragraph',
    html: 'En la calculadora puedes configurar el porcentaje de reserva segun tu criterio, aunque <strong>nunca se recomienda bajar del 20%</strong>. Con depositos mas grandes o travesias largas, muchos patrones experimentados elevan este margen al 30% o incluso al 33%.',
  },
  {
    type: 'title',
    text: 'Factores que afectan al Consumo (l/h)',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'El consumo teorico del fabricante se calcula en condiciones ideales de laboratorio. En la practica, multiples factores alteran el <strong>consumo real</strong> de combustible. La velocidad de casco es el mas determinante: navegar a velocidades superiores a la velocidad economica puede duplicar o triplicar el consumo por milla recorrida.',
  },
  {
    type: 'table',
    headers: ['Estado de la Navegacion', 'Efecto en la Autonomia', 'Consejo'],
    rows: [
      ['<strong>Casco con Incrustaciones</strong>', 'Reduce la autonomia hasta un 20%', 'Limpia el casco antes de temporada'],
      ['<strong>Corriente en Contra</strong>', 'Puede reducir la velocidad efectiva un 30%', 'Calcula siempre con la velocidad real sobre el fondo'],
      ['<strong>Viento de Proa</strong>', 'Aumenta la resistencia y el consumo un 10-25%', 'Usa el factor de marejada o marejada para el calculo'],
      ['<strong>Exceso de Carga</strong>', 'Aumenta el calado y la resistencia', 'Pesa el equipo y provisiones antes de calcular'],
    ],
  },
  {
    type: 'title',
    text: 'Glosario Tecnica de Autonomia',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: 'Rendimiento (L/MN)', definition: 'Litros de combustible consumidos por cada milla nautica recorrida. Es el indicador mas util para planificar travesias porque relaciona consumo con distancia real.' },
      { term: 'Velocidad de Crucero', definition: 'La velocidad optima a la que el motor ofrece el mejor equilibrio entre velocidad y consumo. Generalmente entre el 70% y el 80% de la potencia maxima.' },
      { term: 'Reserva Critica', definition: 'El porcentaje del deposito que nunca debe consumirse. Se recomienda un minimo del 20% para cubrir imprevistos y evitar que entre aire en el circuito de combustible.' },
      { term: 'Consumo Especifico', definition: 'Gramos de combustible por kilovatio-hora de potencia producida (g/kWh). Medida tecnica del motor que permite comparar la eficiencia entre distintos propulsores.' },
    ],
  },
  {
    type: 'title',
    text: 'El Peligro de los Lodos y el Movimiento',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Una fuente habitual de problemas en embarcaciones con poco combustible son los <strong>lodos del fondo del deposito</strong>. Cuando el nivel baja mucho, los sedimentos acumulados durante anos pueden llegar al filtro y taponarlo, dejando el motor sin combustible aunque el nivel marque algunos litros.',
  },
  {
    type: 'paragraph',
    html: 'El movimiento del barco en mar con poco combustible tambien puede causar problemas: el liquido oscila con las olas y puede dejar momentaneamente sin alimentacion a la bomba. Mantener la reserva garantiza que esto no ocurra en un momento critico como una maniobra de entrada a puerto.',
  },
  {
    type: 'tip',
    title: 'Consejo de Ahorro',
    html: 'Reducir la velocidad entre un 10% y un 15% respecto a la de crucero habitual puede mejorar la eficiencia hasta un 30%. Si tienes tiempo y el tiempo acompana, navegar mas despacio es siempre la decision mas economica y segura.',
  },
  {
    type: 'title',
    text: 'Diferencia entre Millas Náuticas (MN) y Kilometros',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Una <strong>milla nautica</strong> equivale a 1.852 metros (1,852 km), y es la unidad de distancia universal en navegacion maritima y aerea. Esta basada en el arco de un minuto de grado geografico, lo que la hace ideal para la navegacion con cartas en coordenadas geograficas. La velocidad en millasnáuticas por hora se denomina nudo (kn).',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Indicador Analogico de Aguja',
        description: 'Sistema tradicional de flotador',
        points: [
          'Bajo coste y sencillez de instalacion',
          'No requiere electricidad para funcionar',
          'Imprecision en mar movido por el movimiento del combustible',
          'No muestra consumo ni autonomia estimada',
        ],
      },
      {
        title: 'Calculador de Flujo Digital',
        description: 'Sensores electronicos de caudal',
        highlight: true,
        points: [
          'Precision del 1-2% en el consumo real',
          'Muestra autonomia, consumo y coste en tiempo real',
          'Integrable con chartplotters y NMEA 2000',
          'Requiere calibracion inicial y mantenimiento',
        ],
      },
    ],
  },
];

const schemas: EnduranceLocaleContent['schemas'] = [
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

export const content: EnduranceLocaleContent = {
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
