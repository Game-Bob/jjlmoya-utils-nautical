import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TideCalculatorUI, TideCalculatorLocaleContent } from '../index';

const slug = 'tide-height-calculator';
const title = '潮汐高度计算器';
const description =
  '使用航海“十二分之一法则”估算潮汐周期中任意点的水深。是海岸规划和航海执照学习的理想工具。';

const ui: TideCalculatorUI = {
  parametersLabel: '参数',
  highTideLabel: '高潮',
  lowTideLabel: '低潮',
  targetTimeLabel: '查询时间',
  estimatedHeightLabel: '估算高度',
  metersLabel: '米',
  amplitudeLabel: '潮差',
  durationLabel: '持续时间',
  tableBreakdownLabel: '十二分之一法则详解',
  tableHourLabel: '时间',
  tableStateLabel: '状态',
  tableStartLabel: '开始',
  tableEndLabel: '结束',
  statusUpLabel: '上涨',
  statusDownLabel: '下降',
  statusOutOfRange: '超出范围',
  faqTitle: '常见问题': '参考文献统计',
};

const faq: TideCalculatorLocaleContent['faq'] = [
  {
    question: '什么是十二分之一法则（Rule of Twelfths），它有什么用途？',
    answer:
      '十二分之一法则是航海中常用的一种简化的数学方法，用于估算满潮和干潮之间任意时间点的潮水高度。它基于潮汐流近似遵循正弦曲线的观察，将 6 小时的总潮差分为 12 份（1/12, 2/12, 3/12, 3/12, 2/12, 1/12）。',
  },
  {
    question: '这种方法在实际航行中可靠吗？',
    answer:
      '这是一种非常实用的理论估算方法，适用于快速规划和教学目的。然而，它不考虑大气压力或风等气象因素，这些因素可能会改变海平面数分米。对于实际航行，请始终参考官方潮汐表。',
  },
  {
    question: '计算潮汐高度需要哪些数据？',
    answer:
      '您需要离您查询时刻最近的高潮和低潮的时间及高度（以米为单位）。这些数据可以在潮汐年鉴或海洋天气应用程序中找到。',
  },
  {
    question: '为什么潮汐并不总是以恒定的速度上涨？',
    answer:
      '这是由于巨大水体的惯性和海洋盆地的构造。潮汐在低潮后开始缓慢上升，在中间小时（第 3 和第 4 个 1/12 小时）达到最大速度，并在接近高潮时再次放缓。',
  },
  {
    question: '大气压力如何影响潮汐？',
    answer:
      '高压（反气旋）将水向下推，降低实际高度。低压（气旋）则允许海水上升得更高。作为一般规则，气压相对于平均值变化 1 hPa，对应海平面约 1 cm 的变化。',
  },
  {
    question: '什么是潮差（tidal range）？',
    answer:
      '它是高潮与紧接其前后的低潮之间的垂直高度差。该测量值会根据月相（大潮和小潮）以及地理位置而变化。',
  },
];

const howTo: TideCalculatorLocaleContent['howTo'] = [
  {
    name: '识别高潮和低潮',
    text: '查阅您的潮汐年鉴，获取您感兴趣的潮汐周期的时刻和高度。',
  },
  {
    name: '在计算器中输入数据',
    text: '输入高潮和低潮的时间和高度。工具将自动确定持续时间和潮差。',
  },
  {
    name: '设置查询时间',
    text: '调整您想要了解水位的时间。您将在图表上看到突出显示的准确点。',
  },
  {
    name: '分析十二分之一法则表格',
    text: '查看逐小时详解，以了解水位在整个期间内将如何波动。',
  },
];

const seo: TideCalculatorLocaleContent['seo'] = [
  {
    type: 'title',
    text: '掌握潮汐：航海中的十二分之一法则',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '沿岸航行和进入水深有限的港口需要随时准确了解水深。虽然现在已有提供实时数据的数字应用程序和 GPS，但<strong>十二分之一法则</strong>仍然是任何业余或专业航海人员培训中的基础工具。这一法则是数学估算方法，让您无需复杂计算器即可近似计算潮汐周期中任意点的潮汐高度。',
  },
  {
    type: 'title',
    text: '究竟什么是十二分之一法则？',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '十二分之一法则是基于潮汐流非恒定的观察。在满潮和干潮之间的约六小时内，水位的上涨或下降速度并不一致。相反，其运动遵循正弦曲线。在第一个小时内潮汐移动缓慢；在中间小时内加速，并在接近下一个极端点时再次放缓。',
  },
  {
    type: 'table',
    headers: ['周期小时', '比例', '流动态征'],
    rows: [
      ['<strong>第 1 小时</strong>', '潮差的 1/12', '缓慢开始（平潮期）'],
      ['<strong>第 2 小时</strong>', '潮差的 2/12', '流速加快'],
      ['<strong>第 3 小时</strong>', '潮差 of 3/12', '最大流速（强潮汐）'],
      ['<strong>第 4 小时</strong>', '潮差 of 3/12', '持续流速'],
      ['<strong>第 5 小时</strong>', '潮差的 2/12', '显著减速'],
      ['<strong>第 6 小时</strong>', '潮差的 1/12', '最后放缓（趋向平潮）'],
    ],
  },
  {
    type: 'title',
    text: '技术限制：影响实际潮汐的因素',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: '大气压力', definition: '低压使海平面升高；高压使其降低。一般规则是，气压相对于平均值每变化 1 hPa，海平面变动约 1 cm。' },
      { term: '沿岸风', definition: '持续的向岸风会将海水推高，超过潮汐表预测的水平。' },
      { term: '局部地形', definition: '海岸形状、海床深度以及河口的存在会显著延迟或加速潮汐流。' },
    ],
  },
  {
    type: 'tip',
    title: '安全提示',
    html: '本工具使用数学估算方法。它不考虑气象因素或局部地形。对于实际航行，请始终参考官方潮汐表。',
  },
  {
    type: 'title',
    text: '新手海员的关键概念',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      {
        term: '潮差 (Tidal range)',
        definition: '高潮与低潮之间的垂直高度差。在某些海湾可达数米；在地中海则几乎可以忽略不计。',
      },
      {
        term: '潮汐持续时间',
        definition: '高潮与下一次低潮之间的时间间隔。通常约为 6 小时 12 分钟（半日潮周期）。',
      },
      {
        term: '海图基准面 (Chart datum)',
        definition: '测量航海图上所有深度的参考基准。实际水深几乎从不低于所示水深。',
      },
    ],
  },
];

const schemas: TideCalculatorLocaleContent['schemas'] = [
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

export const content: TideCalculatorLocaleContent = {
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
