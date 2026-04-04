import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'vela-y-nautica',
  title: 'Vela y Náutica',
  description: 'Herramientas de cálculo náutico para navegantes: mareas, calado, conversiones de unidades, superficies vélicas, velocidad y autonomía. Diseñadas para patrones de recreo, estudiantes del PER y aficionados a la vela.',
  seo: [
    {
      type: 'summary',
      title: 'Herramientas incluidas en esta categoría',
      items: [
        'Calculadora de marea por la Regla de los Dozavos.',
        'Calculador de paso de bajo por under-keel clearance.',
        'Conversor de unidades náuticas (distancia, velocidad, profundidad, presión).',
        'Calculadora de superficie vélica (triangular, cuadrilateral, génova).',
        'Conversor de velocidad y escala Beaufort.',
        'Calculadora de autonomía de combustible para barcos.',
      ],
    },
    {
      type: 'title',
      text: 'Calculadoras Náuticas para la Navegación de Recreo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La navegación costera y oceánica exige dominar un conjunto de cálculos que van mucho más allá del rumbo y la velocidad. Desde anticipar la altura del agua en un puerto con seco hasta dimensionar correctamente el plan vélico de un crucero, cada decisión a bordo tiene un componente matemático. Estas herramientas están diseñadas para facilitar esos cálculos de forma rápida, offline y sin necesidad de tablas impresas.',
    },
    {
      type: 'title',
      text: 'Por qué las Unidades Náuticas Importan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El sistema de unidades marítimo es internacional y difiere del sistema métrico habitual. El <strong>nudo</strong> (1 milla náutica por hora) es la unidad de velocidad universal en el mar. La <strong>milla náutica</strong> equivale a 1.852 metros y se basa en un minuto de arco del ecuador terrestre. Dominar las conversiones entre nudos, km/h, m/s y la escala Beaufort es imprescindible para interpretar partes meteorológicos y planificar travesías con seguridad.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { label: 'Herramientas', value: '6', icon: 'mdi:tools' },
        { label: 'Idiomas', value: '3', icon: 'mdi:translate' },
        { label: 'Milla náutica', value: '1.852 m', icon: 'mdi:map-marker-distance' },
      ],
    },
    {
      type: 'title',
      text: 'Planificación de Maniobras con Restricción de Calado',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El <strong>under-keel clearance</strong> (UKC) es el margen de agua libre entre la quilla del barco y el fondo. Calcularlo correctamente antes de entrar en un puerto con bajos o cruzar una barra es una de las decisiones de seguridad más críticas de la navegación costera. Con las herramientas de mareas y UKC de esta categoría, puedes estimar la ventana de tiempo segura para el paso con los datos de tu anuario local.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Nudo', definition: 'Unidad de velocidad equivalente a una milla náutica por hora (1,852 km/h).' },
        { term: 'Milla náutica', definition: 'Unidad de distancia marina equivalente a 1.852 metros, basada en un minuto de arco de latitud.' },
        { term: 'Beaufort', definition: 'Escala empírica de 0 a 12 que mide la intensidad del viento por su efecto sobre el mar.' },
        { term: 'UKC (Under-Keel Clearance)', definition: 'Distancia de agua libre entre la quilla del barco y el fondo marino en un momento dado.' },
        { term: 'Plan vélico', definition: 'Conjunto de velas de un velero con su distribución, área y características de cada una.' },
        { term: 'Autonomía', definition: 'Distancia máxima que puede recorrer una embarcación con el combustible disponible a una velocidad dada.' },
      ],
    },
  ],
};
