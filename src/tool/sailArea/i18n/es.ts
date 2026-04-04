import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SailAreaUI, SailAreaLocaleContent } from '../index';

const slug = 'calculadora-superficie-velica';
const title = 'Calculadora de Superficie Velica y Ratio SA/D';
const description =
  'Calcula el area total de tus velas y el ratio superficie/desplazamiento. Analisis de rendimiento nautico basado en medidas I, J, P y E.';

const ui: SailAreaUI = {
  hullSectionLabel: 'Datos del Casco',
  totalMassLabel: 'Desplazamiento',
  rigSystemLabel: 'Aparejo',
  intendedUseLabel: 'Uso previsto',
  rigGeometryLabel: 'Geometria del Aparejo',
  sailConfigLabel: 'Tipo de aparejo',
  genoaOverlapLabel: 'Solape del Genova',
  foqueLabel: 'Foque',
  genovaLabel: 'Genova',
  sadRatioLabel: 'Ratio SA/D',
  totalAreaLabel: 'Superficie total',
  performanceLabel: 'Rendimiento',
  sloopLabel: 'Sloop (un palo)',
  cutterLabel: 'Cutter (doble proa)',
  ketchLabel: 'Ketch (dos palos)',
  cruiserLabel: 'Crucero',
  performanceTypeLabel: 'Performance',
  racerLabel: 'Regata',
  exportPdfLabel: 'GENERAR INFORME TECNICO',
  faqTitle: 'Preguntas Frecuentes',
  bibliographyTitle: 'Referencias',
};

const faq: SailAreaLocaleContent['faq'] = [
  {
    question: '¿Por que mi barco es lento con poco viento?',
    answer: 'Probablemente tu ratio SA/D es inferior a 15, lo que indica un barco de desplazamiento pesado con poca superficie velica en relacion a su peso. Estos barcos necesitan vientos de mas de 12 nudos para navegar con vivacidad.',
  },
  {
    question: '¿Debo vaciar los tanques de agua para mejorar el rendimiento?',
    answer: 'Si, aligerar el barco mejora directamente el ratio SA/D porque el desplazamiento real disminuye. Vaciar tanques de agua y combustible puede reducir el desplazamiento varios cientos de kilos y subir el ratio significativamente.',
  },
  {
    question: '¿Que es el Roach en una vela?',
    answer: 'El Roach es la curva convexa de la baluma (borde posterior) de la vela mayor. Aporta superficie velica extra mas alla del triangulo geometrico base definido por P y E. Los barcos de regata tienen Roach agresivos con batons rigidos.',
  },
  {
    question: '¿Como se mide el desplazamiento real de mi barco?',
    answer: 'Lo mas fiable es usar el desplazamiento en carga (con todos los pertrechos, agua, combustible y tripulacion a bordo). El desplazamiento en rosca del manual del constructor suele ser optimista. Usa el desplazamiento real en las condiciones habituales de navegacion.',
  },
  {
    question: '¿Donde encuentro las medidas I, J, P y E de mi barco?',
    answer: 'Las encontraras en el manual del propietario, en los certificados de rating ORC o IRC, o en la documentacion de los certificados de clase. Tambien puedes medirlas directamente a bordo con cinta metrica o consultando al astillero constructor.',
  },
];

const howTo: SailAreaLocaleContent['howTo'] = [
  {
    name: 'Selecciona el tipo de aparejo',
    text: 'Elige entre Sloop (un palo), Cutter (foque y trinqueta) o Ketch (palo de mesana). Esto determina como se calcula la superficie total.',
  },
  {
    name: 'Introduce el desplazamiento',
    text: 'Usa el desplazamiento real en carga de tu barco en kg o lbs. Este dato es clave para el calculo del ratio SA/D.',
  },
  {
    name: 'Mide la geometria del aparejo',
    text: 'Introduce las medidas P (altura del palo), E (boma), I (altura del triangulo de proa) y J (base del triangulo de proa) en metros o pies.',
  },
  {
    name: 'Ajusta el solape del genova',
    text: 'Mueve el slider para indicar el solape de tu genova: 100% es un foque sin solape, 130% es un genova estandar, 155% es un genova de gran solape.',
  },
  {
    name: 'Interpreta el ratio SA/D',
    text: 'Un ratio entre 16 y 20 es un crucero equilibrado. Por encima de 20 el barco sera muy vivo en poco viento pero exigente con viento fresco.',
  },
];

const bibliography: SailAreaLocaleContent['bibliography'] = [
  {
    name: 'Sociedad de Arquitectos Navales - SNAME',
    url: 'https://www.sname.org/',
  },
  {
    name: 'ORC - Offshore Racing Congress',
    url: 'https://orc.org/',
  },
  {
    name: 'Elvstrom Sailmakers - Manual de Veleria',
    url: 'https://www.elvstromsails.com/',
  },
];

const seo: SailAreaLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Calculadora de Superficie Velica: Guia Completa de Rendimiento y Ratios',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'La superficie velica es el motor aerodinamico de cualquier embarcacion de vela. Determina cuanta energia del viento puede capturar el barco y, en combinacion con su desplazamiento, define su caracter nautico: si sera un crucero perezoso o una maquina de regata nerviosa. Calcular correctamente este valor es el primer paso para entender el comportamiento de cualquier velero.',
  },
  {
    type: 'paragraph',
    html: 'Navegar a vela implica una danza constante entre la fuerza del viento sobre las velas y la resistencia del agua sobre el casco. El <strong>ratio Superficie Velica / Desplazamiento (SA/D)</strong> captura esta relacion en un solo numero que permite comparar barcos de cualquier eslora y desplazamiento en igualdad de condiciones.',
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
    text: '¿Para que sirve calcular el Ratio SA/D?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'El ratio <strong>Sail Area / Displacement</strong> es una herramienta de diagnostico que permite predecir el comportamiento del barco antes de zarpar. Un ratio bajo indica un barco robusto y seguro pero lento en poco viento; un ratio alto ofrece velocidad y sensacion de vuelo pero exige mayor habilidad en la tripulacion cuando el viento arrecia. Ninguno es superior al otro: todo depende del tipo de navegacion que se pretende realizar.',
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
      ['14 - 16.5', 'Crucero de Travesia Offshore', 'Equilibrado, comodo, buena mar de proa'],
      ['16.5 - 20', 'Crucero Estandar de Marina', 'Vivo con brisa, manejable, versatil'],
      ['20 - 25', 'Performance Cruiser / Sport', 'Rapido, exigente, emocionante con poco viento'],
      ['> 25', 'Regata / Sport Extremo', 'Muy rapido, nervioso, exige tripulacion experta'],
    ],
  },
  {
    type: 'title',
    text: 'Glosario Tecnico de Medidas (I, J, P, E)',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'I (Altura del Foretriangulo)',
        definition: 'Distancia vertical desde la cubierta hasta el punto donde se engancha la driza del foque en el palo. Define la altura del triangulo de proa.',
      },
      {
        term: 'J (Base del Foretriangulo)',
        definition: 'Distancia horizontal desde el palo hasta la roda (proa del barco). Define la base del triangulo de proa donde van enrolladas o apareadas las velas de proa.',
      },
      {
        term: 'P (Altura del Palo)',
        definition: 'Distancia desde la cubierta hasta la polea de la driza de mayor en la cruceta superior o tope del palo. Define la altura de la vela mayor.',
      },
      {
        term: 'E (Longitud del Boma)',
        definition: 'Distancia desde el palo hasta el puno de escota de la vela mayor en el extremo del boma. Define la base de la vela mayor.',
      },
    ],
  },
  {
    type: 'title',
    text: 'Calculos para Examenes Nauticos (PER y Patron de Yate)',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'El calculo de superficie velica y el ratio SA/D forma parte del temario de los examenes del <strong>Patron de Embarcaciones de Recreo (PER)</strong> y del <strong>Patron de Yate</strong> en Espana. Comprender la geometria del aparejo y su relacion con el desplazamiento es fundamental para tomar decisiones de seguridad en la mar: reducir vela a tiempo, elegir el genova adecuado o estimar el comportamiento del barco ante una galerna.',
  },
  {
    type: 'tip',
    title: 'Velas de Portantes y Seguridad',
    html: 'Para navegacion oceanic o de travesia larga, un ratio SA/D entre 16 y 18 ofrece el mejor equilibrio entre velocidad y seguridad. Barcos con ratios superiores a 22 pueden requerir rizos con vientos de solo Fuerza 4-5.',
  },
  {
    type: 'title',
    text: '¿Como afecta el Solape del Genova?',
    level: 4,
  },
  {
    type: 'paragraph',
    html: 'El <strong>genova</strong> es la vela de proa mas grande, cuyo punto de escota se situa detras del palo, "solapando" la vela mayor. El porcentaje de solape indica cuanto mas larga es la perpendicular al gratil (LP) respecto a la distancia J. Un genova del 150% tiene una LP equivalente al 150% de J, aportando una superficie velica muy superior a un simple foque.',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Dacron (Crucero)',
        description: 'Material clasico para velas de crucero. Robusto y facil de mantener.',
        points: [
          'Alta durabilidad y resistencia UV',
          'Bajo coste de mantenimiento',
          'Mayor peso y stretch bajo carga',
          'Ideal para navegacion de eslora y travesia',
        ],
      },
      {
        title: 'Laminadas (Regata)',
        description: 'Materiales de alta tecnologia como Kevlar, Spectra o Dyneema.',
        highlight: true,
        points: [
          'Minimo stretch: maxima eficiencia aerodinamica',
          'Mucho menor peso que el Dacron',
          'Mayor coste y vida util mas corta',
          'Imprescindible en barcos de ratio SA/D > 22',
        ],
      },
    ],
    columns: 2,
  },
  {
    type: 'title',
    text: 'Fisica de la Navegacion y Estabilidad',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La superficie velica genera una fuerza propulsora pero tambien un <strong>momento escorante</strong> que tiende a tumbar el barco. La estabilidad se mide por el par adrizante que el barco puede oponer a este momento. Un ratio SA/D alto en un barco con poco lastre puede ser peligroso, mientras que el mismo ratio en un barco con quilla profunda y pesada es perfectamente manejable.',
  },
  {
    type: 'paragraph',
    html: 'Para calcular la potencia real disponible, los arquitectos navales utilizan el <strong>Displacement-Length Ratio (DLR)</strong> en combinacion con el SA/D. Ambos ratios juntos describen con precision si un barco es un remolcador marino o un planeador de regata.',
  },
  {
    type: 'tip',
    title: 'Estabilidad y Seguridad',
    html: 'Nunca evalues el SA/D de forma aislada. Un velero con ratio de 22 y un angulo de adrizado de 90 grados es mucho mas seguro que uno con ratio de 18 y angulo de adrizado de 60 grados. Consulta siempre la curva de estabilidad de tu barco.',
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
    name: `Como usar: ${title}`,
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
