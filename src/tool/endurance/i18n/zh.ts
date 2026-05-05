import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EnduranceUI, EnduranceLocaleContent } from '../index';

const slug = 'nautical-endurance-calculator';
const title = '航行续航能力计算器';
const description =
  '根据燃料消耗、油箱容量和巡航速度，计算您的最大航程和安全距离。适用于机动艇的燃料管理。';

const ui: EnduranceUI = {
  tankCapacityLabel: '油箱容量',
  mainTankLabel: '主油箱',
  auxTankLabel: '备用油箱',
  currentFuelLabel: '当前燃料',
  seaConditionsLabel: '海况 / 风力条件',
  consumptionLabel: '理论油耗',
  cruiseSpeedLabel: '巡航速度',
  reserveLabel: '燃料储备',
  fuelPriceLabel: '每升价格',
  maxRangeLabel: '最大航程',
  realPerformanceLabel: '实际表现',
  hoursLabel: '续航时间',
  safeMilesLabel: '安全航程',
  tankValueLabel: '燃油价值',
  inverseCalcLabel: '反向计算：我需要加多少油？',
  desiredDistLabel: '目标距离',
  minFuelLabel: '最低燃料需求',
  warningLabel: '提醒：出于航海安全考虑，建议燃料储备绝对不低于20%。',
  seaCalm: '风平浪静 (1.0x)',
  seaLight: '轻微涌浪 (+15%)',
  seaModerate: '中等涌浪 (+30%)',
  seaStorm: '风暴 (+60%)',
};

const faq: EnduranceLocaleContent['faq'] = [
  {
    question: '机动艇的续航能力是如何计算 fol 的？',
    answer: '续航能力是通过用可用燃料除以每小时油耗得到总小时数，然后将该时间乘以巡航速度计算得出的。该工具还应用了海况系数，以反映真实的航行条件。',
  },
  {
    question: '为什么航海中建议保留20%的储备燃料？',
    answer: '20%的储备燃料是航海安全标准，用以确保在发生意外情况（如逆流、因恶劣天气绕行、油耗估算错误或需要协助其他船只）时有足够的燃料。许多保险公司和港务局都将其视为强制性要求。',
  },
  {
    question: '什么是L/NM效率，它如何影响航行规划？',
    answer: '每海里升数 (L/NM) 的表现是发动机在海上条件下的实际效率。与每小时油耗不同，它可以让您准确计算出覆盖特定距离所需的燃料量，而不管您的速度如何。',
  },
  {
    question: '海况如何影响实际油耗？',
    answer: '海况会增加油耗，因为船体需要克服更大的水阻和风阻。在轻微涌浪中油耗增加15%，在中等涌浪中增加30%，而在风暴中则可能激增60%或更多。忽视这一因素可能导致船只在到达港口前燃料耗尽。',
  },
];

const howTo: EnduranceLocaleContent['howTo'] = [
  {
    name: '输入油箱容量',
    text: '输入主油箱的升数，如果有备用油箱也请一并输入。工具将计算当前的填充比例。',
  },
  {
    name: '输入当前油位',
    text: '输入当前的实际燃料升数。您可以通过船上的油位计测量，或根据上次加油量进行估算。',
  },
  {
    name: '调整航行条件',
    text: '选择预计的海况。海况系数会将理论油耗修正为预期的实际油耗。',
  },
  {
    name: '输入油耗和巡航速度',
    text: '使用制造商提供的数据或您自己的记录，输入每小时油耗和您通常航行的速度。',
  },
  {
    name: '查看安全距离和反向计算',
    text: '工具将显示您可以安全覆盖的里程数，以及到达特定目的地所需的燃料量。',
  },
];

const seo: EnduranceLocaleContent['seo'] = [
  {
    type: 'title',
    text: '机动艇航行中的燃料管理与续航能力',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>航海续航能力</strong>是驾驶机动艇出海前最关键的计算之一。准确了解使用现有燃料可以覆盖多少海里，是计划航行与海上紧急情况之间的区别。',
  },
  {
    type: 'paragraph',
    html: '此续航能力计算器集成了<strong>海况因素</strong>、安全储备百分比和燃料反向计算功能，使燃料管理在任何情况下都完整可靠。',
  },
  {
    type: 'title',
    text: '金科玉律：三分之一规则',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '航海中经典的燃料管理规则将油箱分成三等份，以始终保证安全余量：',
  },
  {
    type: 'list',
    items: [
      '<strong>三分之一用于去程：</strong> 抵达计划目的地所需的燃料。',
      '<strong>三分之一用于回程：</strong> 返回出发港或最近港口所需的燃料。',
      '<strong>三分之一作为储备：</strong> 用于应对意外情况、潮流或不利条件的安全余量。',
    ],
  },
  {
    type: 'paragraph',
    html: '在计算器中，您可以根据自己的标准设置储备百分比，但<strong>绝不建议低于20%</strong>。对于较大的油箱或长途航线，许多经验丰富的船长会将此余量提高到30%甚至33%。',
  },
  {
    type: 'title',
    text: '影响油耗 (l/h) 的因素',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '制造商的理论油耗是在理想的实验室条件下计算得出的。在实际操作中，多种因素会改变<strong>实际油耗</strong>。船体速度是最具决定性的因素：以超过经济速度的速度航行，每海里的消耗量可能会翻倍甚至增加两倍。',
  },
  {
    type: 'table',
    headers: ['航行状态', '对续航能力的影响', '建议'],
    rows: [
      ['<strong>船体污损</strong>', '降低续航能力高达20%', '在季节开始前清洁船体'],
      ['<strong>顶流</strong>', '可能降低有效速度30%', '始终以对地速度 (SOG) 计算'],
      ['<strong>顶风</strong>', '增加阻力和油耗10-25%', '使用轻微或中等涌浪系数'],
      ['<strong>超载</strong>', '增加吃水和阻力', '计算前称量装备和物资的重量'],
    ],
  },
  {
    type: 'title',
    text: '续航能力技术术语表',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: '效率 (L/NM)', definition: '每航行一海里消耗的燃料升数。规划航线最实用的指标，因为它将油耗与实际距离联系起来。' },
      { term: '巡航速度', definition: '发动机在速度和油耗之间提供最佳平衡的最佳速度。通常在最大功率的70%到80%之间。' },
      { term: '临界储备', definition: '油箱中绝不能消耗的百分比。建议至少保留20%，以应对突发情况并防止空气进入燃料回路。' },
      { term: '比油耗', definition: '每产出1千瓦时功率消耗的燃料克数 (g/kWh)。用于比较不同推进系统效率的发动机技术衡量标准。' },
    ],
  },
  {
    type: 'title',
    text: '油泥与晃动的危险',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '燃料油位较低的船只常见的故障源是<strong>油箱底部油泥</strong>。当油位降得太低时，多年积累的沉淀物可能会到达过滤器并造成堵塞，即使油表显示还有几升，也会导致发动机断油。',
  },
  {
    type: 'paragraph',
    html: '燃料较少时船只在海上的晃动也会产生问题：液体随波浪震荡，可能导致燃油泵瞬间吸空。保持储备燃料可确保这种情况不会在进港操纵等关键时刻发生。',
  },
  {
    type: 'tip',
    title: '省油窍门',
    html: '将速度降低到常用巡航速度以下10-15%，效率可提高多达30%。如果您有时间且天气良好，慢速航行始终是最经济安全的选择。',
  },
  {
    type: 'title',
    text: '海里 (NM) 与公里的区别',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '1 <strong>海里</strong> 等于1852米 (1.852 km)，是航海和航空导行的通用距离单位。它基于地球纬度的一分弧长，非常适合在地理坐标海图上导航。以海里每小时计算的速度称为节 (kn)。',
  },
  {
    type: 'comparative',
    items: [
      {
        title: '指针式机械油表',
        description: '传统浮子系统',
        points: [
          '成本低且安装简单',
          '运行无需电力',
          '海况差时因燃料晃动而读数不准',
          '不显示油耗或预计续航里程',
        ],
      },
      {
        title: '数字流量计算器',
        description: '电子流量传感器',
        highlight: true,
        points: [
          '实际油耗精度可达1-2%',
          '实时显示续航、消耗和成本',
          '可与海图绘图仪和 NMEA 2000 集成',
          '需要初始校准和维护',
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
    name: `使用方法： ${title}`,
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
