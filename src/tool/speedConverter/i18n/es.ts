import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { SpeedConverterUI, SpeedConverterLocaleContent } from '../index';

const slug = 'conversor-velocidad-nautica';
const title = 'Conversor de Velocidad Náutica';
const description = 'Convierte velocidades náuticas entre nudos, km/h, mph y m/s. Incluye conversión directa con la escala Beaufort y una tabla completa de referencia con el estado de la mar para cada fuerza de viento.';

const ui: SpeedConverterUI = {
  labelKnots: 'Nudos',
  labelKmh: 'km/h',
  labelMph: 'mph',
  labelMs: 'm/s',
  labelBeaufort: 'Beaufort',
  tableTitle: 'Tabla de referencia Beaufort',
  tableForce: 'Fuerza',
  tableKnots: 'Nudos',
  tableDesc: 'Descripción',
  tableSeaState: 'Estado del mar',
  btnConvert: 'Convertir',
  btnReset: 'Restablecer',
};

const faq: SpeedConverterLocaleContent['faq'] = [
  {
    question: '¿Cuántos km/h son un nudo?',
    answer: 'Un nudo equivale exactamente a 1,852 km/h. Esta conversión se deriva del hecho de que una milla náutica (1852 m) corresponde a un minuto de arco de latitud, y la velocidad en nudos mide millas náuticas por hora.',
  },
  {
    question: '¿Cómo se convierte de nudos a m/s?',
    answer: 'Para convertir nudos a metros por segundo, multiplica por 0,5144. Así, 20 nudos equivalen a 10,29 m/s. Esta conversión es útil en meteorología y física aplicada a la navegación.',
  },
  {
    question: '¿A cuántos nudos corresponde la Fuerza 7 de Beaufort?',
    answer: 'La Fuerza 7 de Beaufort (viento Duro) corresponde a vientos entre 27 y 33 nudos. En estas condiciones, el mar se encrespa con olas de 4 a 5,5 metros y espumas en forma de regueros. Muchos barcos de recreo reduchirán ya su velamen.',
  },
  {
    question: '¿Qué diferencia hay entre velocidad del viento y velocidad del barco?',
    answer: 'Aunque ambas se miden en nudos, tienen origenes distintos. La velocidad del barco se mide mediante corredera electrónica u óptica. La velocidad del viento se mide con anemómetro. En navegación a vela, la diferencia entre viento real y viento aparente es fundamental para optimizar el rendimiento.',
  },
];

const howTo: SpeedConverterLocaleContent['howTo'] = [
  { name: 'Introduce la velocidad en nudos', text: 'Escribe el valor en el campo de nudos. El resultado aparecerá automáticamente en todas las unidades.' },
  { name: 'O selecciona la fuerza Beaufort', text: 'Si prefieres partir de una estimación visual del viento, selecciona la fuerza Beaufort y el campo de nudos se actualizará con el valor mínimo correspondiente.' },
  { name: 'Lee la fila activa en la tabla', text: 'La fila correspondiente a la fuerza Beaufort calculada se resaltará en la tabla de referencia inferior para facilitar la interpretación.' },
];

const bibliography: SpeedConverterLocaleContent['bibliography'] = [
  { name: 'Bowditch — The American Practical Navigator (NIMA)', url: 'https://msi.nga.mil/Publications/APN' },
  { name: 'WMO — Beaufort Wind Scale and Sea State Codes', url: 'https://www.wmo.int/pages/prog/amp/mmop/JCOMM/OPA/SPT/documents/WMO_wave_obs.pdf' },
];

const seo: SpeedConverterLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Equivalencias de Velocidad Náutica',
    items: [
      '1 nudo = 1,852 km/h = 1,151 mph = 0,514 m/s.',
      'La escala Beaufort clasifica el viento de fuerza 0 a fuerza 12.',
      'Fuerza 7 Beaufort = 27–33 nudos (viento duro, olas de 4 m).',
      'Huracán: fuerza 12 desde 63 nudos (más de 117 km/h).',
    ],
  },
  { type: 'title', text: 'El Nudo: Unidad Estándar de Velocidad Marina', level: 2 },
  {
    type: 'paragraph',
    html: 'El <strong>nudo</strong> (kn) es la unidad universal de velocidad en navegación marítima y aeronáutica. Su origen histórico se remonta a los marineros que medían la velocidad del barco lanzando un trozo de madera (el "log" o corredera) al agua y contando el número de nudos en la cuerda que pasaban en un tiempo determinado. Hoy es una unidad de medida internacionalmente reconocida.',
  },
  {
    type: 'table',
    headers: ['Nudos', 'km/h', 'mph', 'm/s'],
    rows: [
      ['5', '9,26', '5,75', '2,57'],
      ['10', '18,52', '11,51', '5,14'],
      ['20', '37,04', '23,02', '10,29'],
      ['30', '55,56', '34,52', '15,43'],
      ['40', '74,08', '46,03', '20,58'],
    ],
  },
  {
    type: 'tip',
    title: 'Regla Práctica',
    html: 'Para convertir rápidamente nudos a km/h en la cabeza, multiplica los nudos por <strong>2 y resta el 7%</strong>. Por ejemplo, 20 nudos × 2 = 40, menos el 7% (2,8) = <strong>37,2 km/h</strong> (el valor exacto es 37,04).',
  },
  { type: 'title', text: 'La Escala Beaufort y el Estado del Mar', level: 3 },
  {
    type: 'paragraph',
    html: 'La escala Beaufort, además de clasificar el viento, describe el estado del mar resultante. Para el marino, la descripción visual del mar es muchas veces más útil que una cifra en nudos, ya que proporciona información directa sobre las condiciones de navegabilidad. Las fuerzas 6-7 suelen ser el límite de comodidad para muchos cruceristas.',
  },
  {
    type: 'stats',
    columns: 3,
    items: [
      { label: 'Viento de regata', value: 'F 3–5', icon: 'mdi:sail' },
      { label: 'Límite crucero', value: 'F 6–7', icon: 'mdi:weather-windy' },
      { label: 'Condiciones de huracán', value: 'F 12+', icon: 'mdi:weather-hurricane' },
    ],
  },
  {
    type: 'glossary',
    items: [
      { term: 'Nudo', definition: 'Unidad de velocidad marina igual a una milla náutica por hora (1,852 km/h).' },
      { term: 'Viento Real', definition: 'La velocidad y dirección del viento medida desde un punto fijo.' },
      { term: 'Viento Aparente', definition: 'El viento que percibe el barco en movimiento, combinación del viento real y el viento de marcha.' },
      { term: 'Beaufort', definition: 'Escala empírica de 0 a 12 que clasifica la velocidad del viento por sus efectos observables.' },
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

export const content: SpeedConverterLocaleContent = {
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
