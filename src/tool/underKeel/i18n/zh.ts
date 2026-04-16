import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { UnderKeelUI, UnderKeelLocaleContent } from '../index';

const slug = 'under-keel-clearance-calculator';
const title = '龙骨下富裕深度 UKC 计算器';
const description =
  '计算通过浅滩、航道或吃水受限地点的安全时间窗口。输入您的船只吃水、海图深度和潮汐数据，以获得精确的安全通行间隔。';

const ui: UnderKeelUI = {
  parametersLabel: '参数',
  boatDraftLabel: '船只吃水',
  chartDepthLabel: '海图深度',
  safetyMarginLabel: '安全裕度',
  highTideLabel: '高潮',
  lowTideLabel: '低潮',
  metersLabel: '米',
  passWindowLabel: '通行窗口',
  neededLabel: '所需深度',
  tideRequiredLabel: '所需最低潮高',
  statusNeverLabel: '此周期内无通过余地',
  statusAlwaysLabel: '整个周期内均可安全通行',
  statusFromLabel: '通行开始时间：',
  statusUntilLabel: '通行结束时间：',
  bottomLabel: '海床',
  faqTitle: '常见问题',
  bibliographyTitle: '参考文献统计',
};

const faq: UnderKeelLocaleContent['faq'] = [
  {
    question: '究竟什么是龙骨下富裕深度 (UKC) 计算？',
    answer: '它是计算在关键点（如沙洲或狭窄航道）有足够水深的时刻，以便根据船只的吃水深度允许船舶安全通行。',
  },
  {
    question: '推荐的安全裕度是多少？',
    answer: '对于休闲船只，通常建议在船只吃水深度基础上增加 0.5 到 1 米的最小安全裕度。该裕度可补偿潮汐计算中的可能误差、大气压力变化或意外涌浪。',
  },
  {
    question: '涌浪如何影响龙骨下富裕深度？',
    answer: '涌浪会产生船体的垂直振荡。在波浪的最底点，船只比静止时更接近底部。通过有涌浪的区域时，必须大幅增加安全裕度。',
  },
  {
    question: '什么是海图深度 (chart sounding)？',
    answer: '它是当潮汐处于海图基准面 (Chart Datum) 时某一点的最小深度。将其与该时刻的潮高相加，即得出总可用深度。',
  },
  {
    question: '海图上带有下划线的深度值意味着什么？',
    answer: '这表示当潮汐处于海图基准面时，该点会露出（干出）。您需要更大的潮高才能通过。',
  },
  {
    question: '什么是兴波下沉 (Squat effect)？它如何改变通行？',
    answer: '这是一种流体动力现象，在浅水航道中航行的船舶相对于其水线往往会沉得更低。航速越快，动态吃水增加越多，龙骨下的水就越少。',
  },
];

const howTo: UnderKeelLocaleContent['howTo'] = [
  {
    name: '定义吃水和安全裕度',
    text: '测量船只在最大点的吃水深度，并增加一个审慎的安全裕度（例如 0.5 米）。',
  },
  {
    name: '查找海图深度',
    text: '找到您要导航的关键点的基准深度值。注意该区域是沙质还是岩石。',
  },
  {
    name: '输入潮汐数据',
    text: '使用最近的官方潮汐年鉴中的高潮和低潮时刻及高度。',
  },
  {
    name: '检查您的通行窗口',
    text: '该工具将显示确切的时间间隔，在此期间您将有足够的深度进行安全导航。',
  },
];

const bibliography: UnderKeelLocaleContent['bibliography'] = [
  {
    name: 'Ministerio de Transportes - Recreational Boating',
    url: 'https://www.mitma.gob.es/marina-mercante/nautica-de-recreo/',
  },
  {
    name: 'Portos de Galicia - Tide Tables',
    url: 'https://portosdegalicia.gal/es/taboa-de-mareas',
  },
];

const seo: UnderKeelLocaleContent['seo'] = [
  {
    type: 'title',
    text: '龙骨下富裕深度：在浅滩安全航行',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '航段规划并不止于在海图上画出航线。对于沿海导航员来说，最关键的计算之一就是 <strong>龙骨下富裕深度 (Under-Keel Clearance)</strong>：了解在什么时间会有足够的深度通过关键点而不搁浅。',
  },
  {
    type: 'title',
    text: '海图深度是多少？它与潮汐有何关系？',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '在航海图上，深度（测深）参考自 <strong>海图基准面 (Chart Datum)</strong>。按照惯例，这个水平是潮汐在正常条件下达到的最低水平。您的船只在任何特定时刻发现的实际深度是该测深值加上该瞬间的潮高。',
  },
  {
    type: 'title',
    text: '计算要素：吃水与裕度',
    level: 3,
  },
  {
    type: 'list',
    items: [
      { term: '最大负载吃水：', definition: '船只最低点（龙骨）在满载时达到的深度。' },
      { term: '海图深度：', definition: '航海图上您想要穿过的点的数字。如果有下划线，则该点在海图基准面时会干出。' },
      { term: '安全裕度：', definition: '吃水之上的额外净空（至少 0.5 到 1 米）。' },
    ],
  },
  {
    type: 'title',
    text: '通行窗口是如何工作的？',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '计算器确定水位上升到您的吃水加上所选安全裕度之上的确切时刻。从那一分钟起，<strong>通行窗口</strong>开启。如果潮汐正在退潮，工具将指示允许通过的时间，直到水位降至您的安全限值以下。',
  },
  {
    type: 'title',
    text: '影响实际通行的因素',
    level: 3,
  },
  {
    type: 'table',
    headers: ['因素', '效应', '建议'],
    rows: [
      ['<strong>涌浪</strong>', '减少船体下方的水', '显著增加安全裕度'],
      ['<strong>兴波下沉 (Squat effect)</strong>', '通过吸力增加吃水', '在关键区域降低航速'],
      ['<strong>沙质底质</strong>', '深度随风暴而变化', '保持测深仪开启并留出额外裕度'],
    ],
  },
  {
    type: 'tip',
    title: '航行提示',
    html: '如果您的通行窗口非常窄或天气恶化，最明智的决定通常是在外海深水区等待，直到潮汐上升到所需高度。',
  },
];

const schemas: UnderKeelLocaleContent['schemas'] = [
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
    name: `如何使用： ${title}`,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
  } as WithContext<HowTo>,
];

export const content: UnderKeelLocaleContent = {
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
