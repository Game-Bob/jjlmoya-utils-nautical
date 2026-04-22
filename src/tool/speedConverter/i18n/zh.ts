import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SpeedConverterUI, SpeedConverterLocaleContent } from '../index';

const slug = 'nautical-speed-converter';
const title = '航海速度转换器与蒲福风级表';
const description =
  '在节 (Knots)、公里/小时 (km/h)、米/秒 (m/s) 和英里/小时 (mph) 之间即时转换。包含完整的蒲福风级表，附带海况描述和风力影响。';

const beaufortData = [
  { force: 0, name: '无风', sea: '海面平滑如镜', effect: '烟直上', kn: '0' },
  { force: 1, name: '软风', sea: '海面起微波，如鱼鳞状', effect: '烟能表示风向，但风向标不动', kn: '1-3' },
  { force: 2, name: '轻风', sea: '小波，波峰不破碎', effect: '人面感觉有风，树叶微响', kn: '4-6' },
  { force: 3, name: '微风', sea: '小浪，波峰开始破碎，白浪稀疏', effect: '树叶及微枝摇动不息', kn: '7-10' },
  { force: 4, name: '和风', sea: '小浪渐高，白浪渐多', effect: '能吹起地面尘土和纸张', kn: '11-16' },
  { force: 5, name: '劲风', sea: '中浪，白浪很多', effect: '有叶之小树摇摆', kn: '17-21' },
  { force: 6, name: '强风', sea: '大浪形成，白浪布满海面', effect: '举伞困难', kn: '22-27' },
  { force: 7, name: '疾风', sea: '海面被风吹得出现白色浪花', effect: '迎风步行困难', kn: '28-33' },
  { force: 8, name: '大风', sea: '高浪，浪花飞溅影响视线', effect: '步行极感困难', kn: '34-40' },
  { force: 9, name: '烈风', sea: '巨浪，海面卷起浪花', effect: '建筑物有损坏', kn: '41-47' },
  { force: 10, name: '狂风', sea: '极高之浪，海面全白', effect: '树木被连根拔起，破坏重大', kn: '48-55' },
  { force: 11, name: '暴风', sea: '狂浪，海面覆盖层厚泡沫', effect: '普遍性损坏', kn: '56-63' },
  { force: 12, name: '飓风', sea: '空气中充满泡沫及浪花，海面全白', effect: '巨大灾难', kn: '64+' },
];

const ui: SpeedConverterUI = {
  knLabel: '节 (kt)',
  kmhLabel: '公里/小时',
  msLabel: '米/秒',
  mphLabel: '英里/小时',
  beaufortTitle: '蒲福风级 (Beaufort Scale)',
  forceLabel: '风力',
  descriptionLabel: '描述',
  knotsLabel: '节',
  effectLabel: '视觉影响',
  seaStateLabel: '海况',
  windEffectLabel: '陆地影响',
  faqTitle: '常见问题': '参考文献统计',
  beaufortDataJson: JSON.stringify(beaufortData),
};

const faq: SpeedConverterLocaleContent['faq'] = [
  {
    question: '为什么航海速度用“节”来衡量？',
    answer: '“节” (Knot) 是速度单位，等于每小时一海里。其起源具有历史意义：以前海员通过向海中抛出系有等间距结绳的木块来测量船速，计算在规定时间内经过手指的绳结数量。今天，它仍然是航海和航空领域的国际标准单位。',
  },
  {
    question: '什么是蒲福风级？它在航海中如何应用？',
    answer: '蒲福风级（Beaufort Scale）是一个将风速与在海上和陆地上观察到的效应联系起来的经验等级。由英国海军上将弗朗西斯·蒲福于1805年开发，范围从 0（无风）到 12（飓风）。海员通过观察海况来估算风力强度，而无需借助仪器。',
  },
  {
    question: '航行中 SOG 和 STW 有什么区别？',
    answer: 'SOG (Speed Over Ground) 是船舶相对于海床的实际速度，由 GPS 测量。STW (Speed Through Water) 或计程仪速度是船舶相对于周围水的速度。两者之间的差异反映了海流的影响。SOG 用于规划到达时间和计算燃料；STW 用于计算风压差 (leeway)。',
  },
  {
    question: '1 节等于多少公里/小时？',
    answer: '1 节正好等于每小时 1.852 公里，这也是一海里的长度（定义为地球子午线上一角分弧线的长度）。因此，10 节等于 18.52 km/h，20 节等于 37.04 km/h。',
  },
];

const howTo: SpeedConverterLocaleContent['howTo'] = [
  {
    name: '输入任意单位的速度',
    text: '在相应字段（节、公里/小时、米/秒或英里/小时）中键入速度值，所有其他字段将自动更新。',
  },
  {
    name: '查看对应的蒲福风力等级',
    text: '蒲福卡片会实时显示与输入速度对应的风力等级，以及海况和陆地影响。',
  },
  {
    name: '点击蒲福风级表中的行',
    text: '您可以直接在下方表格中选择任何蒲福等级，以查看其在所有格式下的最低速度。',
  },
  {
    name: '使用结果规划您的航行',
    text: '结合速度和风力信息，决定当前条件是否适合您的船型和计划航程。',
  },
];

const seo: SpeedConverterLocaleContent['seo'] = [
  {
    type: 'title',
    text: '航海速度转换器与蒲福风级指南',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '速度是航海中的基础数据。了解您的船行驶了多少节，如何将其转换为公里/小时以规划航程，或者当前的空气代表蒲福风级的哪个等级，是每个海员都需要掌握的计算。',
  },
  {
    type: 'paragraph',
    html: '这个航海速度转换器可让您在节、km/h、m/s 和 mph 之间即时转换，同时自动识别相应的蒲福等级及其海况描述和可观察的风力效应。',
  },
  {
    type: 'stats',
    items: [
      { label: '标准单位', value: '节 (kt)', icon: 'mdi:speedometer' },
      { label: '风力等级', value: '蒲福 (0-12)', icon: 'mdi:weather-windy' },
      { label: '关键换算', value: '1 kt = 1.85 km/h', icon: 'mdi:swap-horizontal' },
    ],
  },
  {
    type: 'title',
    text: '为什么速度用“节”来测量？',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>节 (kt)</strong> 是航海和航空领域的官方速度单位。其定义非常精确：1 节等于每小时 1 海里，其中海里 (1852 米) 被定义为地球子午线上的 1 角分弧长。这种与地球几何形状的直接关系使得“节”在航行中非常实用，可以直接在海图上估算距离而无需任何转换。',
  },
  {
    type: 'paragraph',
    html: '历史上，海员使用 <em>测程仪 (chip log)</em> 测量船速：将一块三角形木头抛入海中，其系在一条每隔 14.4 米（30秒内一海里的比例分数）打一个结的绳子上。计算在此期间经过手指的绳结数量即可得出船速，这就是我们今天使用的术语的起源。',
  },
  {
    type: 'title',
    text: '蒲福风级：海员之眼',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>蒲福风级</strong>由英国海军上将弗朗西斯·蒲福爵士于 1805 年开发，作为一种无需依靠仪器，从可观察效应中对风力等级进行分类的经验方法。最初构思是为了估算一艘船可以承载多少帆，今天它是世界气象组织 (WMO) 采用的海洋气象通用参考。',
  },
  {
    type: 'paragraph',
    html: '等级从 <strong>0 级</strong>（无风，海面平滑如镜）到 <strong>12 级</strong>（飓风条件，浪高超过 14 米，空气中充满泡沫和飞溅的浪花）。对于休闲航海者，关键限值通常是小型船只的 6 级（强风，22-27 节），以及远洋帆船的 7-8 级。',
  },
  {
    type: 'table',
    headers: ['蒲福等级', '描述', '海况条件'],
    rows: [
      ['0', '无风', '海面平滑如镜'],
      ['3', '微风', '白浪稀疏，波峰开始破碎'],
      ['6', '强风', '大浪，白色泡沫峰，可能有浪花飞溅'],
      ['9', '烈风', '极高波浪，泡沫和飞溅使能见度降低'],
      ['12', '飓风', '空气中完全充满泡沫，海面全白'],
    ],
  },
  {
    type: 'title',
    text: '航海速度词汇表',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: '节 (kt)', definition: '等于每小时一海里（1852米/小时）的速度单位。航海和航空的国际标准。' },
      { term: 'SOG (Speed Over Ground)', definition: '船舶相对于海床的实际速度，由 GPS 测量。反映了海流对船速的影响。' },
      { term: '计程仪速度 (STW)', definition: '船舶相对于周围水的速度。不包含流量影响；是计算风压差的关键。' },
      { term: '视风 (Apparent Wind)', definition: '船上人员感受到的风，是真风与船舶前进产生的风的矢量之和。在大小和方向上总是与真风不同。' },
    ],
  },
  {
    type: 'title',
    text: '快速换算公式',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '在无法使用数字转换器时，可以使用这些每个海员都应牢记的快速近似值进行手动转换：',
  },
  {
    type: 'list',
    items: [
      '<strong>节转换为公里/小时：</strong> 节数乘以 1.852。快速近似：节数 x 2，减去 8%%。例如，10 kt ≈ 20 - 1.6 = 18.4 km/h。',
      '<strong>节转换为英里/小时：</strong> 节数乘以 1.15。近似：节数 + 15%%。例如，20 kt ≈ 23 mph。',
      '<strong>节转换为米/秒：</strong> 节数乘以 0.514。快速近似：节数除以 2。例如，10 kt ≈ 5 m/s (精确值: 5.14 m/s)。',
    ],
  },
  {
    type: 'tip',
    title: '安全与气候',
    html: '出发前，请务必查看海洋天气预报。蒲福 4-5 级对大多数休闲船只来说是可以应对的；从 6 级向上，如果您缺乏足够的经验或您的船只未做好应对这些条件的准备，请认真考虑推迟出发。',
  },
  {
    type: 'title',
    text: '设备对比',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: '数字风速计',
        description: '精确测量风速的电子仪器。',
        icon: 'mdi:speedometer',
        points: [
          '正常条件下精度为 ±2%%',
          '需要供电或电池',
          '极端条件下可能失效',
          '即时读数和数据记录',
        ],
      },
      {
        title: '蒲福观察法',
        description: '从海面和陆地的可观察效应中视觉估算风力。',
        icon: 'mdi:eye-outline',
        highlight: true,
        points: [
          '完全无需任何仪器',
          '任何条件下都可用',
          '对于安全决策具有足够的精度',
          '资深导航员的基本技能',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: '航行与航程规划',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '在规划航程时，您的船速决定了估计到达时间 (ETA) 和动力船的燃料消耗。对于帆船，速度还取决于风力和风向：了解预测的蒲福风级可以让您预判是否可以航行或是否需要动用引擎。',
  },
  {
    type: 'paragraph',
    html: '在竞赛中，节与米/秒之间的换算对于计算 VMG (Velocity Made Good) 和分析帆极图特别有用。气象学家和数值预报模型通常以 m/s 或 km/h 为单位提供风速，因此转换为“节”是战术规划中的常规步骤。',
  },
];

const schemas: SpeedConverterLocaleContent['schemas'] = [
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

export const content: SpeedConverterLocaleContent = {
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
