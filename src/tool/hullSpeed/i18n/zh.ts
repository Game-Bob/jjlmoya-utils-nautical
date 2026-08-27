import { bibliography } from '../bibliography';
import type { HullSpeedLocaleContent, HullSpeedUI } from '../index';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

const slug = 'sailboat-hull-speed-calculator';
const title = '帆船船体速度计算器';
const description =
  '由水线长度求出理论船体速度，对照实测航程仪读数，并看排水型船体何时爬上自己的艏波。';

const ui: HullSpeedUI = {
  metric: '公制',
  imperial: '英制',
  unitGroup: '单位',
  sceneLabel: '水线与艏波',
  hullSpeedLabel: '船体速度',
  knotsUnit: 'kn',
  kmhUnit: 'km/h',
  mphUnit: 'mph',
  ratioLabel: 'S/L',
  froudeLabel: 'Fr',
  lwlLabelMetric: '水线长度',
  lwlLabelImperial: '水线长度',
  lwlUnitM: 'm',
  lwlUnitFt: 'ft',
  observedLabel: '航程仪速度',
  observedHint: '留 0 以绘制理论波。输入航程仪读数，看你是否仍坐在波谷里。',
  stretchHint: '拖动船体以拉长水线',
  hullKindLabel: '船体形状',
  displacement: '排水型',
  semi: '半排水型',
  planing: '滑行型',
  boatsLabel: '水线示例',
  dinghy: '小艇',
  daysailer: '日航帆船',
  cruiser: '巡航船',
  bluewater: '远海',
  workboat: '工作船',
  bandBelow: '仍是短波',
  bandNear: '接近波浪屏障',
  bandAt: '骑在艏波上',
  bandAbove: '正试图爬上波浪',
  bandPlane: '已滑行，超过船体速度',
  planingNote:
    '滑行型船体可以把这道波甩在后面。船体速度是参照，不是墙。',
  displacementNote:
    '排水型追上自己的伴流时会付出陡峭代价。把它当成实用上限，不是 GPS 目标。',
  semiNote:
    '半排水型在功率足够时可以略微超过经典比值，但阻力会急剧上升。',
  waveLegend: '艏波',
  waterLegend: '水线',
  markLegend: '船体速度',
  faqTitle: '船体速度问题',
  bibliographyTitle: '参考文献',
};

const faq: HullSpeedLocaleContent['faq'] = [
  {
    question: '帆船的船体速度是什么?',
    answer:
      '排水型船体带着大约与自身水线等长的艏波前进时的速度。航海单位里通常用 1.34 乘以英尺水线长度的平方根来估计。这是临界速度，不是硬性的物理停点。',
  },
  {
    question: '如何计算船体速度?',
    answer:
      '把水线换成英尺，开平方，再乘 1.34 得到节。10 m 水线约 32.8 ft，所以大约 7.7 kn。同一点对应弗劳德数约 0.40。',
  },
  {
    question: '滑行艇也适用船体速度吗?',
    answer:
      '公式仍描述船体若停留在排水模式会造出的波。滑行型和许多半排水型就是为了爬过那道波而设计的。把数字当参照，再读船体形状说明。',
  },
  {
    question: '该用水线长还是总长?',
    answer:
      '用水线长 (LWL)，也就是真正造波的浸水长度。总长、艏斜桅和悬伸并不决定波长。在水里量 LWL，不要用量册上的 LOA。',
  },
];

const howTo: HullSpeedLocaleContent['howTo'] = [
  {
    name: '拉长水线',
    text: '拖动船体、移动水线滑轨，或从小艇选到工作船。船体速度是该长度(英尺)平方根的 1.34 倍。',
  },
  {
    name: '选择船体形状',
    text: '排水型、半排水型或滑行型会改变龙骨，以及船能否爬出自己的波。',
  },
  {
    name: '读波谷',
    text: '在船体速度时，艏波和艉波相隔一条水线，船坐在谷里。那就是屏障。',
  },
  {
    name: '对照航程仪',
    text: '输入对水速度。较短的波表示你仍推得便宜。较长的波表示你正在爬谷。',
  },
];

const seo: HullSpeedLocaleContent['seo'] = [
  {
    type: 'title',
    text: '船体速度真正在说什么',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '排水型船体从船首推一道波，从船尾再推一道。当这两道峰大约相隔一条水线时，船就带着自己的伴流走。多余功率这时主要把水堆起来，而不是买速度。水手把这种状态叫做船体速度。',
  },
  {
    type: 'paragraph',
    html: '本计算器使用常见的业余比值：每英尺水线平方根 1.34 节。细长船体可以略高，驳船更低。把结果当教学记号，再拿真实航程仪对照。',
  },
  {
    type: 'title',
    text: '算过的水线例子',
    level: 2,
  },
  {
    type: 'table',
    headers: ['水线', '船体速度', '典型船只'],
    rows: [
      ['4.2 m / 13.8 ft', '5.0 kn', '小艇'],
      ['6.5 m / 21.3 ft', '6.2 kn', '日航帆船'],
      ['10 m / 32.8 ft', '7.7 kn', '家庭巡航船'],
      ['13.5 m / 44.3 ft', '8.9 kn', '远海游艇'],
      ['18 m / 59.1 ft', '10.3 kn', '小型工作船'],
    ],
  },
  {
    type: 'title',
    text: '如何读艏波',
    level: 2,
  },
  {
    type: 'list',
    items: [
      '标记以下时波短，船仍便宜推动。',
      '靠近标记时艏波变陡，燃油或帆买到的速度变少。',
      '正好在标记上时波长等于 LWL。排水型处于经典屏障。',
      '再往上，排水型爬自己的伴流。滑行型可能已经抬起来。',
    ],
  },
  {
    type: 'tip',
    title: '量 LWL，不要量 LOA',
    html: '宣传册长度包含悬伸。波浪在乎浸入的水线。若只有 LOA，算出的船体速度会偏乐观。',
  },
  {
    type: 'title',
    text: '一句话里的弗劳德数',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '船体速度是把弗劳德数约 0.40 包成好用的形式：速度除以重力乘长度的平方根。所以即使船体形状不变，更长的水线也更快。抬高排水极限的干净办法是拉长 LWL，不是加马力。',
  },
];

const schemas: HullSpeedLocaleContent['schemas'] = [
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
    name: `如何使用${title}`,
    step: howTo.map((step) => ({
      '@type': 'HowToStep',
      name: step.name,
      text: step.text,
    })),
  } as WithContext<HowTo>,
];

export const content: HullSpeedLocaleContent = {
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
