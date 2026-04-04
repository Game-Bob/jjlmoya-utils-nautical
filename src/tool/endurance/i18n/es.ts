import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { EnduranceUI, EnduranceLocaleContent } from '../index';

const slug = 'autonomia-barco';
const title = 'Calculadora de Autonomía de Barco';
const description = 'Calcula la autonomía de tu embarcación a motor en horas y millas náuticas. Introduce la capacidad del depósito, el consumo por hora, el porcentaje de reserva y la velocidad. También incluye modo inverso: dado un trayecto, calcula el combustible necesario.';

const ui: EnduranceUI = {
  modeNormal: 'Calcular autonomía',
  modeInverse: 'Combustible necesario',
  labelTank: 'Capacidad del depósito',
  labelConsumption: 'Consumo',
  labelReserve: 'Reserva',
  labelSpeed: 'Velocidad',
  labelDistance: 'Distancia',
  labelUsableFuel: 'Combustible útil',
  labelHours: 'Horas de autonomía',
  labelMiles: 'Millas de autonomía',
  labelRequiredFuel: 'Combustible necesario',
  btnCalculate: 'Calcular',
  btnReset: 'Restablecer',
  resultHours: 'Autonomía (horas)',
  resultMiles: 'Autonomía (millas)',
};

const faq: EnduranceLocaleContent['faq'] = [
  {
    question: '¿Qué porcentaje de reserva de combustible debo mantener?',
    answer: 'La práctica náutica habitual recomienda mantener entre el 20% y el 25% del depósito como reserva. Algunos reguladores y seguros exigen un mínimo del 10%. Para travesías largas u océanos, se recomienda aumentar este margen al 30% para cubrir imprevistos como condiciones adversas o demoras en el puerto de destino.',
  },
  {
    question: '¿Cómo varía el consumo de combustible con la velocidad?',
    answer: 'El consumo de los motores de gasolina y diésel no es lineal con la velocidad. A velocidades de crucero moderadas (60-70% del máximo), el consumo por milla es el más eficiente. Navegar a velocidad máxima puede triplicar el consumo por hora. Para maximizar la autonomía, consulta las curvas de consumo de tu motor.',
  },
  {
    question: '¿Qué es la velocidad de crucero económica?',
    answer: 'Es la velocidad a la que la embarcación obtiene el mejor rendimiento en términos de millas recorridas por litro. En embarcaciones semiplaneo, suele ser la velocidad de semideplazo, normalmente entre 8 y 12 nudos. Para motos de agua y lanchas rápidas, el punto de eficiencia máxima suele estar en el plano completo a velocidades moderadas.',
  },
  {
    question: '¿Cómo afecta la corriente y el viento al consumo?',
    answer: 'Navegar contra corriente o viento de cara puede aumentar el consumo entre un 15% y un 30%. A la inversa, una corriente favorable puede reducirlo significativamente. La calculadora proporciona valores teóricos en condiciones ideales; añade siempre un margen de seguridad del 20-30% para condiciones reales.',
  },
];

const howTo: EnduranceLocaleContent['howTo'] = [
  { name: 'Introduce los datos del depósito', text: 'Indica la capacidad total del depósito en litros, el consumo horario habitual y el porcentaje de reserva que deseas mantener.' },
  { name: 'Introduce la velocidad de crucero', text: 'Introduce la velocidad prevista en nudos. El resultado te dará la autonomía en horas y millas náuticas.' },
  { name: 'Usa el modo inverso para planificar', text: 'Si conoces tu destino, activa el modo "Combustible necesario" e introduce la distancia. La herramienta calculará el combustible mínimo necesario incluyendo la reserva.' },
  { name: 'Añade margen de seguridad', text: 'Los resultados son teóricos. Añade siempre un 20-30% adicional para compensar corrientes, viento en contra y variaciones de consumo reales.' },
];

const bibliography: EnduranceLocaleContent['bibliography'] = [
  { name: 'Chapman Piloting, Seamanship and Small Boat Handling — Hearst Marine Books', url: 'https://www.chapman.com/' },
  { name: 'Bowditch — The American Practical Navigator, NIMA Pub. 9', url: 'https://msi.nga.mil/Publications/APN' },
];

const seo: EnduranceLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Claves de la Autonomía Náutica',
    items: [
      'Autonomía (h) = Combustible útil / Consumo por hora.',
      'Millas de autonomía = Horas × Velocidad en nudos.',
      'Reserva recomendada: 20–25% del depósito total.',
      'A velocidad óptima se maximizan las millas por litro.',
    ],
  },
  { type: 'title', text: 'Planificación del Combustible en Navegación a Motor', level: 2 },
  {
    type: 'paragraph',
    html: 'Calcular la autonomía de combustible es una de las operaciones más críticas en la navegación a motor. Quedarse sin combustible en mar abierto supone una emergencia grave. Una buena planificación requiere conocer el consumo real del motor, la capacidad del depósito y siempre reservar un margen de seguridad para los imprevistos.',
  },
  {
    type: 'table',
    headers: ['Variable', 'Fórmula', 'Unidades'],
    rows: [
      ['Combustible útil', 'Depósito × (1 - reserva/100)', 'litros'],
      ['Autonomía (h)', 'Combustible útil / Consumo', 'horas'],
      ['Autonomía (NM)', 'Horas × Velocidad', 'millas náuticas'],
      ['Combustible necesario', 'Horas × Consumo / (1 - reserva/100)', 'litros'],
    ],
  },
  {
    type: 'tip',
    title: 'Regla del Tercio',
    html: 'Una regla clásica en navegación: usa <strong>un tercio del combustible</strong> para ir, <strong>un tercio para volver</strong> y guarda <strong>un tercio como reserva</strong>. Esta regla garantiza que nunca te quedarás sin combustible aunque el regreso sea más largo de lo previsto.',
  },
  { type: 'title', text: 'Factores que Afectan al Consumo Real', level: 3 },
  {
    type: 'paragraph',
    html: 'El consumo real de una embarcación puede variar significativamente respecto al teórico por factores como el <strong>estado de la mar</strong> (olas frontales aumentan el consumo hasta un 30%), el <strong>estado del casco</strong> (fouling, incrustaciones), la <strong>carga a bordo</strong> y las <strong>corrientes y viento contrarios</strong>. Calibra siempre tu consumo real en condiciones similares a las previstas.',
  },
  {
    type: 'stats',
    columns: 3,
    items: [
      { label: 'Reserva mínima', value: '20%', icon: 'mdi:fuel' },
      { label: 'Penalización viento contra', value: '+25%', icon: 'mdi:weather-windy' },
      { label: 'Penalización fouling casco', value: '+10–15%', icon: 'mdi:sailboat' },
    ],
  },
  {
    type: 'glossary',
    items: [
      { term: 'Autonomía', definition: 'La distancia o tiempo máximo que puede navegar una embarcación con el combustible disponible.' },
      { term: 'Consumo específico', definition: 'Litros consumidos por hora a una velocidad determinada. Varía con las rpm y la carga del motor.' },
      { term: 'Reserva de seguridad', definition: 'Porcentaje del combustible total que se mantiene intocable para emergencias y desviaciones.' },
      { term: 'Velocidad económica', definition: 'La velocidad a la que la embarcación recorre la mayor distancia posible por litro de combustible.' },
    ],
  },
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

export const content: EnduranceLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, appSchema],
};
