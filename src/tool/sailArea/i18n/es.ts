import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SailAreaUI, SailAreaLocaleContent } from '../index';

const slug = 'calculadora-superficie-velica';
const title = 'Calculadora de Superficie Vélica y Ratio SA/D';
const description =
  'Calcula el área total de tus velas y el ratio superficie/desplazamiento. Análisis de rendimiento náutico basado en medidas I, J, P y E.';

const ui: SailAreaUI = {
  hullSectionLabel: 'Datos del Casco',
  totalMassLabel: 'Desplazamiento',
  rigSystemLabel: 'Aparejo',
  intendedUseLabel: 'Uso previsto',
  rigGeometryLabel: 'Geometría del Aparejo',
  sailConfigLabel: 'Tipo de aparejo',
  genoaOverlapLabel: 'Solape del Génova',
  foqueLabel: 'Foque',
  genovaLabel: 'Génova',
  sadRatioLabel: 'Ratio SA/D',
  totalAreaLabel: 'Superficie total',
  performanceLabel: 'Rendimiento',
  sloopLabel: 'Sloop (un palo)',
  cutterLabel: 'Cutter (doble proa)',
  ketchLabel: 'Ketch (dos palos)',
  cruiserLabel: 'Crucero',
  performanceTypeLabel: 'Performance',
  racerLabel: 'Regata',
  exportPdfLabel: 'GENERAR INFORME TÉCNICO',
};

const faq: SailAreaLocaleContent['faq'] = [
  {
    question: '¿Por qué mi barco es lento con poco viento?',
    answer: 'Probablemente tu ratio SA/D es inferior a 15, lo que indica un barco de desplazamiento pesado con poca superficie vélica en relación a su peso. Estos barcos necesitan vientos de más de 12 nudos para navegar con vivacidad.',
  },
  {
    question: '¿Debo vaciar los tanques de agua para mejorar el rendimiento?',
    answer: 'Sí, aligerar el barco mejora directamente el ratio SA/D porque el desplazamiento real disminuye. Vaciar tanques de agua y combustible puede reducir el desplazamiento varios cientos de kilos y subir el ratio significativamente.',
  },
  {
    question: '¿Qué es el Roach en una vela?',
    answer: 'El Roach es la curva convexa de la baluma (borde posterior) de la vela mayor. Aporta superficie vélica extra más allá del triángulo geométrico base definido por P y E. Los barcos de regata tienen Roach agresivos con sables rígidos.',
  },
  {
    question: '¿Cómo se mide el desplazamiento real de mi barco?',
    answer: 'Lo más fiable es usar el desplazamiento en carga (con todos los pertrechos, agua, combustible y tripulación a bordo). El desplazamiento en rosca del manual del constructor suele ser optimista. Usa el desplazamiento real en las condiciones habituales de navegación.',
  },
  {
    question: '¿Dónde encuentro las medidas I, J, P y E de mi barco?',
    answer: 'Las encontrarás en el manual del propietario, en los certificados de rating ORC o IRC, o en la documentación de los certificados de clase. También puedes medirlas directamente a bordo con cinta métrica o consultando al astillero constructor.',
  },
];

const howTo: SailAreaLocaleContent['howTo'] = [
  {
    name: 'Selecciona el tipo de aparejo',
    text: 'Elige entre Sloop (un palo), Cutter (foque y trinqueta) o Ketch (palo de mesana). Esto determina cómo se calcula la superficie total.',
  },
  {
    name: 'Introduce el desplazamiento',
    text: 'Usa el desplazamiento real en carga de tu barco en kg o lbs. Este dato es clave para el cálculo del ratio SA/D.',
  },
  {
    name: 'Mide la geometría del aparejo',
    text: 'Introduce las medidas P (altura del palo), E (botavara), I (altura del triángulo de proa) y J (base del triángulo de proa) en metros o pies.',
  },
  {
    name: 'Ajusta el solape del génova',
    text: 'Mueve el slider para indicar el solape de tu génova: 100% es un foque sin solape, 130% es un génova estándar, 155% es un génova de gran solape.',
  },
  {
    name: 'Interpreta el ratio SA/D',
    text: 'Un ratio entre 16 y 20 es un crucero equilibrado. Por encima de 20 el barco será muy vivo en poco viento pero exigente con viento fresco.',
  },
];

const seo: SailAreaLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Calculadora de Superficie Vélica: Guía Completa de Rendimiento y Ratios',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'La superficie vélica es el motor aerodinámico de cualquier embarcación de vela. Determina cuánta energía del viento puede capturar el barco y, en combinación con su desplazamiento, define su carácter náutico: si será un crucero perezoso o una máquina de regata nerviosa. Calcular correctamente este valor es el primer paso para entender el comportamiento de cualquier velero.',
  },
  {
    type: 'paragraph',
    html: 'Navegar a vela implica una danza constante entre la fuerza del viento sobre las velas y la resistencia del agua sobre el casco. El <strong>ratio Superficie Vélica / Desplazamiento (SA/D)</strong> captura esta relación en un solo número que permite comparar barcos de cualquier eslora y desplazamiento en igualdad de condiciones.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Ratio Crucero Ideal', value: '15-18', icon: 'mdi:anchor' },
      { label: 'Barcos de Regata', value: '+24', icon: 'mdi:sailing' },
      { label: 'Margen de Error', value: '5-10%', icon: 'mdi:alert-circle-outline' },
    ],
    columns: 3,
  },
  {
    type: 'title',
    text: '¿Para qué sirve calcular el Ratio SA/D?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'El ratio <strong>Sail Area / Displacement</strong> es una herramienta de diagnóstico que permite predecir el comportamiento del barco antes de zarpar. Un ratio bajo indica un barco robusto y seguro pero lento en poco viento; un ratio alto ofrece velocidad y sensación de vuelo pero exige mayor habilidad en la tripulación cuando el viento arrecia. Ninguno es superior al otro: todo depende del tipo de navegación que se pretende realizar.',
  },
  {
    type: 'title',
    text: 'Tabla de Referencia de Ratios SA/D',
    level: 4,
  },
  {
    type: 'table',
    headers: ['Ratio', 'Tipo de Barco', 'Comportamiento en el Mar'],
    rows: [
      ['< 14', 'Desplazamiento Pesado / Barco de Carga', 'Estable, lento, requiere viento sostenido'],
      ['14 - 16.5', 'Crucero de Travesía Offshore', 'Equilibrado, cómodo, buena mar de proa'],
      ['16.5 - 20', 'Crucero Estándar de Marina', 'Vivo con brisa, manejable, versátil'],
      ['20 - 25', 'Performance Cruiser / Sport', 'Rápido, exigente, emocionante con poco viento'],
      ['> 25', 'Regata / Sport Extremo', 'Muy rápido, nervioso, exige tripulación experta'],
    ],
  },
  {
    type: 'title',
    text: 'Glosario Técnico de Medidas (I, J, P, E)',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'I (Altura del Foretriángulo)',
        definition: 'Distancia vertical desde la cubierta hasta el punto donde se engancha la driza del foque en el palo. Define la altura del triángulo de proa.',
      },
      {
        term: 'J (Base del Foretriángulo)',
        definition: 'Distancia horizontal desde el palo hasta la roda (proa del barco). Define la base del triángulo de proa donde van enrolladas o apareadas las velas de proa.',
      },
      {
        term: 'P (Altura del Palo)',
        definition: 'Distancia desde la cubierta hasta la polea de la driza de mayor en la cruceta superior o tope del palo. Define la altura de la vela mayor.',
      },
      {
        term: 'E (Longitud de la Botavara)',
        definition: 'Distancia desde el palo hasta el puño de escota de la vela mayor en el extremo de la botavara. Define la base de la vela mayor.',
      },
    ],
  },
  {
    type: 'title',
    text: 'Cálculos para Exámenes Náuticos (PER y Patrón de Yate)',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'El cálculo de superficie vélica y el ratio SA/D forma parte del temario de los exámenes del <strong>Patrón de Embarcaciones de Recreo (PER)</strong> y del <strong>Patrón de Yate</strong> en España. Comprender la geometría del aparejo y su relación con el desplazamiento es fundamental para tomar decisiones de seguridad en la mar: reducir vela a tiempo, elegir el génova adecuado o estimar el comportamiento del barco ante una galerna.',
  },
  {
    type: 'tip',
    title: 'Velas de Portantes y Seguridad',
    html: 'Para navegación oceánica o de travesía larga, un ratio SA/D entre 16 y 18 ofrece el mejor equilibrio entre velocidad y seguridad. Barcos con ratios superiores a 22 pueden requerir rizos con vientos de solo Fuerza 4-5.',
  },
  {
    type: 'title',
    text: '¿Cómo afecta el Solape del Génova?',
    level: 4,
  },
  {
    type: 'paragraph',
    html: 'El <strong>génova</strong> es la vela de proa más grande, cuyo punto de escota se sitúa detrás del palo, "solapando" la vela mayor. El porcentaje de solape indica cuánto más larga es la perpendicular al grátil (LP) respecto a la distancia J. Un génova del 150% tiene una LP equivalente al 150% de J, aportando una superficie vélica muy superior a un simple foque.',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Dacron (Crucero)',
        description: 'Material clásico para velas de crucero. Robusto y fácil de mantener.',
        points: [
          'Alta durabilidad y resistencia UV',
          'Bajo coste de mantenimiento',
          'Mayor peso y stretch bajo carga',
          'Ideal para navegación de altura y travesía',
        ],
      },
      {
        title: 'Laminadas (Regata)',
        description: 'Materiales de alta tecnología como Kevlar, Spectra o Dyneema.',
        highlight: true,
        points: [
          'Mínimo stretch: máxima eficiencia aerodinámica',
          'Mucho menor peso que el Dacron',
          'Mayor coste y vida útil más corta',
          'Imprescindible en barcos de ratio SA/D > 22',
        ],
      },
    ],
    columns: 2,
  },
  {
    type: 'title',
    text: 'Física de la Navegación y Estabilidad',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La superficie vélica genera una fuerza propulsora pero también un <strong>momento escorante</strong> que tiende a tumbar el barco. La estabilidad se mide por el par adrizante que el barco puede oponer a este momento. Un ratio SA/D alto en un barco con poco lastre puede ser peligroso, mientras que el mismo ratio en un barco con quilla profunda y pesada es perfectamente manejable.',
  },
  {
    type: 'paragraph',
    html: 'Para calcular la potencia real disponible, los arquitectos navales utilizan el <strong>Displacement-Length Ratio (DLR)</strong> en combinación con el SA/D. Ambos ratios juntos describen con precisión si un barco es un remolcador marino o un planeador de regata.',
  },
  {
    type: 'tip',
    title: 'Estabilidad y Seguridad',
    html: 'Nunca evalúes el SA/D de forma aislada. Un velero con ratio de 22 y un ángulo de adrizado de 90 grados es mucho más seguro que uno con ratio de 18 y ángulo de adrizado de 60 grados. Consulta siempre la curva de estabilidad de tu barco.',
  },
];

const schemas: SailAreaLocaleContent['schemas'] = [
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

export const content: SailAreaLocaleContent = {
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
