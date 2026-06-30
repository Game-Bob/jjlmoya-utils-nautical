import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EnduranceUI, EnduranceLocaleContent } from '../index';

const slug = 'calculadora-autonomia-nautica';
const title = 'Calculadora de Autonomía Náutica';
const description =
  'Calcula tu alcance máximo y distancia segura según consumo, capacidad y velocidad de crucero. Gestión de combustible para embarcaciones a motor.';

const ui: EnduranceUI = {
  tankCapacityLabel: 'Capacidad del Depósito',
  mainTankLabel: 'Ppal',
  auxTankLabel: 'Aux',
  currentFuelLabel: 'Combustible Actual',
  seaConditionsLabel: 'Condiciones Mar/Viento',
  consumptionLabel: 'Consumo Teórico',
  cruiseSpeedLabel: 'Velocidad Crucero',
  reserveLabel: 'Reserva',
  fuelPriceLabel: 'Precio Litro',
  maxRangeLabel: 'Alcance Máximo',
  realPerformanceLabel: 'Rendimiento Real',
  hoursLabel: 'Autonomía Horas',
  safeMilesLabel: 'Millas Seguras',
  tankValueLabel: 'Valor Tanque',
  inverseCalcLabel: 'Calculo Inverso: ¿Cuánto necesito repostar?',
  desiredDistLabel: 'Distancia Deseada',
  minFuelLabel: 'Combustible Mínimo Requerido',
  warningLabel: 'Recordatorio: Una reserva del 20% es el mínimo absoluto recomendado por seguridad náutica.',
  seaCalm: 'Calma (1.0x)',
  seaLight: 'Marejadilla (+15%)',
  seaModerate: 'Marejada (+30%)',
  seaStorm: 'Temporal (+60%)',
};

const faq: EnduranceLocaleContent['faq'] = [
  {
    question: '¿Cómo se calcula la autonomía de una embarcación a motor?',
    answer: 'La autonomía se calcula dividiendo el combustible disponible entre el consumo horario para obtener las horas totales, y multiplicando ese tiempo por la velocidad de crucero. La herramienta aplica además un factor de mar para reflejar condiciones reales de navegación.',
  },
  {
    question: '¿Por qué se recomienda una reserva del 20% en náutica?',
    answer: 'La reserva del 20% es un estándar de seguridad náutica que garantiza combustible suficiente ante imprevistos: corrientes contrarias, rodeos por mal tiempo, fallos en las previsiones de consumo o necesidad de asistir a otra embarcación. Muchas aseguradoras y capitanías lo consideran obligatorio.',
  },
  {
    question: '¿Qué es el rendimiento en L/MN y cómo afecta a la planificación?',
    answer: 'El rendimiento en litros por milla náutica (L/MN) es la eficiencia real del motor en condiciones de mar. A diferencia del consumo horario, permite calcular exactamente cuánto combustible necesitas para recorrer una distancia concreta, independientemente de tu velocidad.',
  },
  {
    question: '¿Cómo influye el estado del mar en el consumo real?',
    answer: 'El estado del mar incrementa el consumo porque el casco trabaja más contra la resistencia del agua y el viento. En marejadilla el consumo aumenta un 15%, en marejada un 30% y en temporal puede dispararse un 60% o más. Ignorar este factor puede dejar una embarcación sin combustible antes de llegar a puerto.',
  },
];

const howTo: EnduranceLocaleContent['howTo'] = [
  {
    name: 'Introduce la capacidad de tus depósitos',
    text: 'Indica los litros del depósito principal y del auxiliar si tienes uno. La herramienta calculará el porcentaje de llenado actual.',
  },
  {
    name: 'Indica el combustible actual',
    text: 'Introduce los litros reales que tienes en este momento. Puedes medirlos con el nivel del barco o estimarlos según el último repostaje.',
  },
  {
    name: 'Ajusta las condiciones de navegación',
    text: 'Selecciona el estado del mar previsto para tu travesía. El factor de mar corrige el consumo teórico al consumo real esperado.',
  },
  {
    name: 'Introduce consumo y velocidad de crucero',
    text: 'Usa los datos del fabricante o tus propios registros de consumo horario y la velocidad a la que navegarás habitualmente.',
  },
  {
    name: 'Revisa la distancia segura y el cálculo inverso',
    text: 'La herramienta te muestra cuántas millas puedes recorrer con seguridad y cuánto combustible necesitas para llegar a un destino concreto.',
  },
];

const seo: EnduranceLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Gestión de Combustible y Autonomía en Navegación a Motor',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'La <strong>autonomía náutica</strong> es uno de los cálculos más críticos antes de zarpar en una embarcación a motor. Conocer con precisión cuántas millas puedes recorrer con el combustible disponible es la diferencia entre una travesía planificada y una emergencia en alta mar.',
  },
  {
    type: 'paragraph',
    html: 'Esta calculadora de autonomía integra el <strong>factor de condiciones de mar</strong>, el porcentaje de reserva de seguridad y el cálculo inverso de combustible necesario para que la gestión de combustible sea completa y fiable en cualquier situación.',
  },
  {
    type: 'title',
    text: 'La Regla de Oro: La Regla de los Tercios',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La regla clásica de gestión de combustible en náutica divide el depósito en tres partes iguales para garantizar siempre un margen de seguridad:',
  },
  {
    type: 'list',
    items: [
      '<strong>Un tercio para la ida:</strong> El combustible necesario para llegar al destino previsto.',
      '<strong>Un tercio para la vuelta:</strong> El combustible de regreso al puerto de salida o al más cercano.',
      '<strong>Un tercio de reserva:</strong> El margen de seguridad ante imprevistos, corrientes o condiciones adversas.',
    ],
  },
  {
    type: 'paragraph',
    html: 'En la calculadora puedes configurar el porcentaje de reserva según tu criterio, aunque <strong>nunca se recomienda bajar del 20%</strong>. Con depósitos más grandes o travesías largas, muchos patrones experimentados elevan este margen al 30% o incluso al 33%.',
  },
  {
    type: 'title',
    text: 'Factores que afectan al Consumo (l/h)',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'El consumo teórico del fabricante se calcula en condiciones ideales de laboratorio. En la práctica, múltiples factores alteran el <strong>consumo real</strong> de combustible. La velocidad de casco es el más determinante: navegar a velocidades superiores a la velocidad económica puede duplicar o triplicar el consumo por milla recorrida.',
  },
  {
    type: 'table',
    headers: ['Estado de la Navegación', 'Efecto en la Autonomía', 'Consejo'],
    rows: [
      ['<strong>Casco con Incrustaciones</strong>', 'Reduce la autonomía hasta un 20%', 'Limpia el casco antes de temporada'],
      ['<strong>Corriente en Contra</strong>', 'Puede reducir la velocidad efectiva un 30%', 'Calcula siempre con la velocidad real sobre el fondo'],
      ['<strong>Viento de Proa</strong>', 'Aumenta la resistencia y el consumo un 10-25%', 'Usa el factor de marejada o marejada para el cálculo'],
      ['<strong>Exceso de Carga</strong>', 'Aumenta el calado y la resistencia', 'Pesa el equipo y provisiones antes de calcular'],
    ],
  },
  {
    type: 'title',
    text: 'Glosario Técnico de Autonomía',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: 'Rendimiento (L/MN)', definition: 'Litros de combustible consumidos por cada milla náutica recorrida. Es el indicador más útil para planificar travesías porque relaciona consumo con distancia real.' },
      { term: 'Velocidad de Crucero', definition: 'La velocidad óptima a la que el motor ofrece el mejor equilibrio entre velocidad y consumo. Generalmente entre el 70% y el 80% de la potencia máxima.' },
      { term: 'Reserva Crítica', definition: 'El porcentaje del depósito que nunca debe consumirse. Se recomienda un mínimo del 20% para cubrir imprevistos y evitar que entre aire en el circuito de combustible.' },
      { term: 'Consumo Específico', definition: 'Gramos de combustible por kilovatio-hora de potencia producida (g/kWh). Medida técnica del motor que permite comparar la eficiencia entre distintos propulsores.' },
    ],
  },
  {
    type: 'title',
    text: 'El Peligro de los Lodos y el Movimiento',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Una fuente habitual de problemas en embarcaciones con poco combustible son los <strong>lodos del fondo del depósito</strong>. Cuando el nivel baja mucho, los sedimentos acumulados durante años pueden llegar al filtro y taponarlo, dejando el motor sin combustible aunque el nivel marque algunos litros.',
  },
  {
    type: 'paragraph',
    html: 'El movimiento del barco en mar con poco combustible también puede causar problemas: el líquido oscila con las olas y puede dejar momentáneamente sin alimentación a la bomba. Mantener la reserva garantiza que esto no ocurra en un momento crítico como una maniobra de entrada a puerto.',
  },
  {
    type: 'tip',
    title: 'Consejo de Ahorro',
    html: 'Reducir la velocidad entre un 10% y un 15% respecto a la de crucero habitual puede mejorar la eficiencia hasta un 30%. Si tienes tiempo y el tiempo acompaña, navegar más despacio es siempre la decisión más económica y segura.',
  },
  {
    type: 'title',
    text: 'Diferencia entre Millas Náuticas (MN) y Kilómetros',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Una <strong>milla náutica</strong> equivale a 1.852 metros (1,852 km), y es la unidad de distancia universal en navegación marítima y aérea. Está basada en el arco de un minuto de grado geográfico, lo que la hace ideal para la navegación con cartas en coordenadas geográficas. La velocidad en millas náuticas por hora se denomina nudo (kn).',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Indicador Analógico de Aguja',
        description: 'Sistema tradicional de flotador',
        points: [
          'Bajo coste y sencillez de instalación',
          'No requiere electricidad para funcionar',
          'Imprecisión en mar movido por el movimiento del combustible',
          'No muestra consumo ni autonomía estimada',
        ],
      },
      {
        title: 'Calculador de Flujo Digital',
        description: 'Sensores electrónicos de caudal',
        highlight: true,
        points: [
          'Précisión del 1-2% en el consumo real',
          'Muestra autonomía, consumo y coste en tiempo real',
          'Integrable con chartplotters y NMEA 2000',
          'Requiere calibración inicial y mantenimiento',
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
    name: `Cómo usar: ${title}`,
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
