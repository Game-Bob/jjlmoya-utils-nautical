import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { NauticalConverterUI, NauticalConverterLocaleContent } from '../index';

const slug = 'conversor-nautico';
const title = 'Conversor de Unidades Náuticas';
const description = 'Convierte entre las principales unidades náuticas: distancia (millas náuticas, km, millas terrestres, metros), velocidad (nudos, km/h, mph, m/s), profundidad (metros, pies, brazas) y presión (mbar, hPa, psi, atm, mmHg). Incluye escala Beaufort completa.';

const ui: NauticalConverterUI = {
  tabDistance: 'Distancia',
  tabSpeed: 'Velocidad',
  tabDepth: 'Profundidad',
  tabPressure: 'Presión',
  labelValue: 'Valor',
  labelFrom: 'Desde',
  labelTo: 'Hasta',
  labelResult: 'Resultado',
  beaufortTitle: 'Escala Beaufort',
  beaufortForce: 'Fuerza',
  beaufortSpeed: 'Velocidad (nudos)',
  beaufortDesc: 'Descripción',
  btnCopy: 'Copiar',
  copied: 'Copiado',
};

const faq: NauticalConverterLocaleContent['faq'] = [
  {
    question: '¿Qué es una milla náutica y por qué se usa en navegación?',
    answer: 'Una milla náutica equivale a 1852 metros y corresponde aproximadamente a un minuto de arco de latitud. Se usa en navegación porque facilita el cálculo directo con cartas y compases: 1 minuto de latitud = 1 milla náutica. Esto simplifica enormemente la navegación astronómica y por carta.',
  },
  {
    question: '¿Cuál es la diferencia entre nudo y km/h?',
    answer: 'Un nudo es una milla náutica por hora. Equivale a 1,852 km/h. Un barco que navega a 10 nudos recorre 10 millas náuticas en una hora, es decir, 18,52 kilómetros. El nudo es la unidad estándar de velocidad en navegación marítima y aviación.',
  },
  {
    question: '¿Qué es una braza y cuándo se utiliza?',
    answer: 'La braza (fathom) equivale a 6 pies o 1,8288 metros. Históricamente se usaba para medir profundidades marinas y aún aparece en cartas náuticas antiguas y en la tradición anglosajona. Equivale aproximadamente a la envergadura de los brazos de un hombre.',
  },
  {
    question: '¿Para qué sirve la escala Beaufort?',
    answer: 'La escala Beaufort clasifica la fuerza del viento del 0 (calma) al 12 (huracán) según la velocidad y los efectos observables en el mar y en tierra. Es fundamental para la comunicación meteorológica marina y para la toma de decisiones de seguridad en la navegación.',
  },
];

const howTo: NauticalConverterLocaleContent['howTo'] = [
  { name: 'Selecciona la categoría', text: 'Elige entre distancia, velocidad, profundidad o presión según la conversión que necesites realizar.' },
  { name: 'Introduce el valor y las unidades', text: 'Escribe el valor numérico y selecciona la unidad de origen y la unidad de destino en los menús desplegables.' },
  { name: 'Lee el resultado', text: 'El resultado aparece automáticamente. Usa el botón "Copiar" para transferirlo a tu portapapeles.' },
  { name: 'Consulta la escala Beaufort', text: 'Desplázate hacia abajo para ver la tabla Beaufort completa con rangos de velocidad en nudos y descripciones del estado del viento.' },
];

const bibliography: NauticalConverterLocaleContent['bibliography'] = [
  { name: 'Bowditch — The American Practical Navigator (NIMA)', url: 'https://msi.nga.mil/Publications/APN' },
  { name: 'IMO — International Convention on Standards of Training (STCW)', url: 'https://www.imo.org/en/OurWork/HumanElement/Pages/STCW-Conv.aspx' },
];

const seo: NauticalConverterLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Datos Clave del Conversor Náutico',
    items: [
      '1 milla náutica = 1852 m = 1 minuto de arco de latitud.',
      '1 nudo = 1,852 km/h = 0,5144 m/s.',
      '1 braza = 6 pies = 1,8288 metros.',
      'La escala Beaufort clasifica el viento de 0 (calma) a 12 (huracán).',
    ],
  },
  { type: 'title', text: 'Sistema Internacional de Unidades en Náutica', level: 2 },
  {
    type: 'paragraph',
    html: 'La navegación marítima convive con distintos sistemas de medida que han evolucionado durante siglos. El marino moderno debe manejar con fluidez unidades del Sistema Internacional junto a unidades tradicionales como la <strong>milla náutica</strong>, el <strong>nudo</strong> y la <strong>braza</strong>, que siguen siendo de uso obligado en cartas, publicaciones y comunicaciones oficiales.',
  },
  {
    type: 'table',
    headers: ['Unidad', 'Equivalencia métrica', 'Uso principal'],
    rows: [
      ['Milla náutica (NM)', '1852 m', 'Distancias en carta y navegación'],
      ['Nudo (kn)', '1,852 km/h', 'Velocidad de buques y viento'],
      ['Braza (fathom)', '1,8288 m', 'Profundidades (cartas antiguas)'],
      ['hPa / mbar', '1 hPa = 1 mbar', 'Presión atmosférica marina'],
    ],
  },
  {
    type: 'tip',
    title: 'Consejo de Navegación',
    html: 'Al planificar una travesía, trabaja siempre en millas náuticas y nudos. Esto permite relacionar directamente la distancia con el tiempo: si navegas a <strong>6 nudos</strong>, en 1 hora recorres <strong>6 millas náuticas</strong>.',
  },
  { type: 'title', text: 'La Escala Beaufort en la Práctica', level: 3 },
  {
    type: 'paragraph',
    html: 'Desarrollada por el Almirante Francis Beaufort en 1806, la escala que lleva su nombre relaciona la velocidad del viento con sus efectos visibles sobre el mar. Fue adoptada internacionalmente en 1939 y sigue siendo la referencia estándar en los <strong>boletines meteorológicos marinos</strong> de todo el mundo.',
  },
  {
    type: 'stats',
    columns: 3,
    items: [
      { label: 'Fuerza mínima', value: '0 kn', icon: 'mdi:weather-windy' },
      { label: 'Viento de tormenta', value: 'Fuerza 10', icon: 'mdi:weather-hurricane' },
      { label: 'Huracán desde', value: '63+ kn', icon: 'mdi:alert' },
    ],
  },
  {
    type: 'glossary',
    items: [
      { term: 'Milla náutica', definition: 'Unidad de distancia marina equivalente a 1852 metros, basada en un minuto de arco de latitud.' },
      { term: 'Nudo', definition: 'Unidad de velocidad marina: una milla náutica por hora (1,852 km/h).' },
      { term: 'Braza', definition: 'Unidad de longitud anglosajona para profundidades: 6 pies o 1,8288 metros.' },
      { term: 'hPa', definition: 'Hectopascal, unidad de presión atmosférica equivalente al milibar (mbar).' },
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

export const content: NauticalConverterLocaleContent = {
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
