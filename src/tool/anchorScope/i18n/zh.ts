import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AnchorScopeLocaleContent } from '../entry';
import type { AnchorScopeUI } from '../ui';

const slug = 'anchor-scope-calculator';
const title = '锚链长度及回旋半径计算器';
const description =
  '根据海图水深、船首干舷、潮高差及海底底质，精确计算安全锚泊所需的最佳锚链长度、出链比和船体回旋半径。';

const ui: AnchorScopeUI = {
  parametersTitle: '参数设定',
  waterDepthLabel: '海图水深',
  bowHeightLabel: '船首干舷高度',
  tideRangeLabel: '潮位上涨幅度',
  boatLengthLabel: '船体全长 (LOA)',
  rodeTypeLabel: '锚链绳缆类型',
  windConditionLabel: '风力与天气预报',
  seabedTypeLabel: '海底底质类型',
  presetProtected: '避风海湾',
  presetOpen: '开阔海域',
  presetStorm: '大风风暴预警',
  seabedTag: '底质抓力系数',
  catenaryTag: '悬链线缓冲效应',
  unitM: 'm',
  unitFt: 'ft',
  unitMeters: '公制 (m)',
  unitFeet: '英制 (ft)',
  allChainOption: '全铁链 (重悬链线)',
  ropeChainOption: '缆绳与铁链组合',
  allRopeOption: '全尼龙缆绳',
  calmWindOption: '平静 / 微风 (< 15 节)',
  moderateWindOption: '和风 (15 - 25 节)',
  strongWindOption: '强风 / 疾风 (25 - 35 节)',
  stormWindOption: '暴风雨 (> 35 节)',
  sandOption: '沙底 (最佳抓力)',
  mudOption: '软泥 / 淤泥 (良好抓力)',
  clayOption: '硬粘土 (极佳抓力)',
  gravelOption: '砾石 / 碎石 (一般)',
  rockOption: '礁石 (卡锚风险)',
  weedOption: '海草 / 藻类 (抓力较差)',
  resultsTitle: '锚泊分析与尺寸',
  scopeRatioLabel: '有效出链比 (Scope)',
  totalDepthLabel: '总垂直高度',
  recommendedRodeLabel: '建议抛锚出链长度',
  horizontalDistanceLabel: '水平延伸距离',
  swingRadiusLabel: '预估回旋半径',
  minSafeRodeLabel: '平稳时最小长度',
  heavyWeatherRodeLabel: '恶劣天气出链长',
  statusOptimalTitle: '锚泊安全稳固',
  statusOptimalDesc: '计算得出的出链长度可形成良好的悬链线缓冲，确保对锚柄施加水平拉力。',
  statusCautionTitle: '适度范围: 密切关注风力',
  statusCautionDesc: '适用于中等风力。如果阵风或涌浪加剧，请及时放长锚链。',
  statusDangerTitle: '出链不足: 走锚风险',
  statusDangerDesc: '出链比过低。锚柄将被向上提起，极易从海底脱出发生走锚。',
  adviceSand: '沙底能够让锚爪深度抓入。请挂倒挡缓慢倒车以紧实锚泊。',
  adviceMud: '松软淤泥需要宽大锚爪和更长的锚链以接触底层硬土。',
  adviceClay: '硬粘土抓力强劲，但需要锋利的锚尖以便刺入。',
  adviceGravel: '碎石在波浪冲击下易滑动。建议将出链长度增加至少25%。',
  adviceRock: '极易卡死锚具。请务必系结带浮标的解脱绳。',
  adviceWeed: '茂密海草阻碍锚爪切入。请用倒车动力仔细核验抓力。',
  catenaryAllChain: '锚链自重形成的悬链线可吸收波浪冲击，并保持水平拉拽方向。',
  catenaryRopeChain: '混合缆绳需保持至少7比1的出链比以弥补自重不足。',
  catenaryAllRope: '轻质尼龙绳需达到8比1以上，防止波浪将锚柄直接拔起。',
  resetButton: '重置参数',
  visualProfileTitle: '悬链线轮廓图',
  waterlineLabel: '吃水线',
  seabedLabel: '海底面',
  anchorLabel: '船锚',
  catenaryCurveLabel: '悬链线',
  swingCircleLabel: '回旋圆周',
};

const faq: AnchorScopeLocaleContent['faq'] = [
  {
    question: '什么是锚泊中的出链比 (Scope)?',
    answer: '出链比是指放入水中的锚链或缆绳总长度与海底到船首锚链滚轮总垂直高度之间的数学比例。',
  },
  {
    question: '为何必须将船首干舷与潮差计入总深度?',
    answer: '测深仪仅显示龙骨下深度。船首滚轮高出水面的距离以及夜间高潮水位会使实际垂直高度大幅增加。',
  },
  {
    question: '全铁链与缆绳在出链比上有何区别?',
    answer: '重质铁链依靠自重下垂形成悬链线，4:1至5:1即可；轻质缆绳绷直受力，需7:1至10:1。',
  },
  {
    question: '如何计算船舶的锚泊回旋半径?',
    answer: '利用勾股定理求出锚链水平跨度，加上船体全长以及3至5米的安全余量即可得出。',
  },
  {
    question: '海底底质对抓力有何影响?',
    answer: '沙底和粘土提供最高抓力；海草与碎石底质需要加长出链并用倒车动力测试。',
  },
  {
    question: '锚链减震止动绳 (Snubber) 的作用是什么?',
    answer: '吸收涌浪对电动起锚机的冲击负荷，并消除锚链传导到舱内的金属震动噪音。',
  },
];

const howTo: AnchorScopeLocaleContent['howTo'] = [
  {
    name: '测量海图水深与船首高度',
    text: '确认锚泊点水深，并加上船首导缆轮距离水面的垂直高度。',
  },
  {
    name: '计入潮位上涨幅度',
    text: '查阅潮汐表，将停泊期间预计的最大高潮上涨值加入计算。',
  },
  {
    name: '选择索具类型与预报风力',
    text: '选择全链或组合缆绳，并根据预报风力调整安全系数。',
  },
  {
    name: '抛锚出链并倒车紧锚',
    text: '放出计算出的锚链长度，挂倒挡缓慢加油门使锚爪紧紧抓入海底。',
  },
];

const seo: AnchorScopeLocaleContent['seo'] = [
  {
    type: 'title',
    text: '安全锚泊计算: 锚链长度与回旋半径',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '规范的锚泊是确保船舶与船员安全的基本技能。出链长度不足是走锚和夜间锚地碰撞的主要原因。通过计算精确的<strong>出链比</strong>，即使在大风天气下船舶也能稳固停泊。',
  },
  {
    type: 'title',
    text: '总垂直高度的构成要素',
    level: 3,
  },
  {
    type: 'list',
    items: [
      '<strong>锚地水深:</strong> 测深仪水深加上船舶实际吃水深度。',
      '<strong>船首干舷高度:</strong> 水面至船首锚滚轮的垂直跨度。',
      '<strong>最大潮汐落差:</strong> 滞泊期间满潮时的海面上升量。',
    ],
  },
  {
    type: 'title',
    text: '推荐出链比基准表',
    level: 3,
  },
  {
    type: 'table',
    headers: ['索具类型', '风平浪静 (<15 节)', '和风起浪 (15-25 节)', '狂风暴雨 (>30 节)'],
    rows: [
      ['<strong>全铁链配置</strong>', '4:1 比例', '5:1 比例', '7:1 比例'],
      ['<strong>缆绳-铁链组合</strong>', '5:1 比例', '7:1 比例', '8:1 至 10:1 比例'],
      ['<strong>全尼龙缆绳</strong>', '7:1 比例', '8:1 比例', '10:1 至 12:1 比例'],
    ],
  },
  {
    type: 'tip',
    title: '保护电动起锚机',
    html: '严禁将锚链拉力直接承受在起锚机的链轮上。请务必使用系于船首系缆桩的弹性减震绳。',
  },
  {
    type: 'paragraph',
    html: '出航前请同时确认预报和实际海况。',
  },
  {
    type: 'paragraph',
    html: '检查水深余量，并为航行保留安全裕度。',
  },
  {
    type: 'paragraph',
    html: '记录输入数据，之后可以重复同一计算。',
  },
  {
    type: 'paragraph',
    html: '风力或水流变化时，请比较多个条件。',
  },
  {
    type: 'paragraph',
    html: '计算可以帮助规划航线，但不能代替船上的观察。',
  },
];

const schemas: AnchorScopeLocaleContent['schemas'] = [
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
    name: `使用指南: ${title}`,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
  } as WithContext<HowTo>,
];

export const content: AnchorScopeLocaleContent = {
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
