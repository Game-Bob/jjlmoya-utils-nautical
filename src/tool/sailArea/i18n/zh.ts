import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SailAreaUI, SailAreaLocaleContent } from '../index';

const slug = 'sail-area-calculator';
const title = '帆面积及 SA/D 比例计算器';
const description =
  '计算您船只的总帆面积以及帆面积与排水量的比例（SA/D 比）。基于 I、J、P 和 E 测量值的航海性能分析。';

const ui: SailAreaUI = {
  hullSectionLabel: '船体数据',
  totalMassLabel: '排水量',
  rigSystemLabel: '索具',
  intendedUseLabel: '预期用途',
  rigGeometryLabel: '索具几何尺寸',
  sailConfigLabel: '索具类型',
  genoaOverlapLabel: '热那亚帆重叠度',
  foqueLabel: '大前帆',
  genovaLabel: '热那亚帆',
  sadRatioLabel: 'SA/D 比例',
  totalAreaLabel: '总面积',
  performanceLabel: '性能',
  sloopLabel: '单桅船 (Sloop)',
  cutterLabel: '双前帆船 (Cutter)',
  ketchLabel: '双桅船 (Ketch)',
  cruiserLabel: '巡航型',
  performanceTypeLabel: '性能类型',
  racerLabel: '竞赛型',
  exportPdfLabel: '生成技术报告',
};

const faq: SailAreaLocaleContent['faq'] = [
  {
    question: '为什么我的船在微风下行驶缓慢？',
    answer: '您的 SA/D 比例可能低于 15，这表明该船属于重排水量船只，相对于其重量而言帆面积较小。这类船只通常需要 12 节以上的风速才能轻快航行。',
  },
  {
    question: '我应该排空水箱以提高性能吗？',
    answer: '是的，减轻船只重量会直接提高 SA/D 比例，因为实际排水量减少了。排空淡水和燃油箱可以减少数百公斤的排水量，并显著提升该比例。',
  },
  {
    question: '帆上的“Roach”（帆边外扩）是什么？',
    answer: 'Roach 是主帆后缘（曳尾缘）的凸起曲线。它提供了超出由 P 和 E 定义的基础几何三角形之外的额外帆面积。竞赛类船只通常具有 aggressive Roach，并配合硬帆骨。',
  },
  {
    question: '如何测量我船只的真实排水量？',
    answer: '最可靠的方法是使用满载排水量（包括所有备品、水、燃油和在船人员）。建造商手册中的轻载排水量通常过于乐观。请使用您正常航行条件下的实际排水量。',
  },
  {
    question: '在哪里可以找到我船只的 I, J, P 和 E 测量值？',
    answer: '您可以在船主手册、ORC 或 IRC 等级证书，或者船级证书文档中找到它们。您也可以在船上用卷尺直接测量，或联系造船厂确认。',
  },
];

const howTo: SailAreaLocaleContent['howTo'] = [
  {
    name: '选择索具类型',
    text: '在单桅 (Sloop)、双前帆 (Cutter) 或双桅 (Ketch) 索具之间选择。这决定了总帆面积的计算方式。',
  },
  {
    name: '输入排水量',
    text: '使用您船只的实际满载排水量（单位为公斤或磅）。该数值是计算 SA/D 比例的关键。',
  },
  {
    name: '测量索具几何尺寸',
    text: '输入 P（桅杆高度）、E（帆杆长度）、I（前三角高度）和 J（前三角底边长度）的测量值，单位为米或英尺。',
  },
  {
    name: '调整热那亚帆重叠度',
    text: '移动滑块以指示您的帆重叠比例：100% 为不重叠的三角帆，130% 为标准热那亚帆，155% 为大重叠热那亚帆。',
  },
  {
    name: '解读 SA/D 比例',
    text: '比例在 16 到 20 之间属于平衡的巡航船。超过 20 时，船只在微风下非常活跃，但在劲风条件下对操控要求更高。',
  },
];

const seo: SailAreaLocaleContent['seo'] = [
  {
    type: 'title',
    text: '帆面积计算器：性能与比例完整指南',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '帆面积是任何帆船的“气动引擎”。它决定了船只能捕获多少风能，并结合其排水量，定义了其航海特性：是慢速巡航船还是灵敏的竞赛机器。正确计算此值是理解任何帆船行为的第一步。',
  },
  {
    type: 'paragraph',
    html: '航行涉及帆上的风力指向与船体上的水阻力之间的持续平衡。<strong>帆面积 / 排水量比例 (SA/D)</strong> 通过一个数值捕捉这种关系，使不同长度和排水量的船只能够在平等的基础上进行比较。',
  },
  {
    type: 'stats',
    items: [
      { label: '理想巡航比例', value: '15-18', icon: 'mdi:anchor' },
      { label: '竞赛型船只', value: '+24', icon: 'mdi:sailing' },
      { label: '误差范围', value: '5-10%', icon: 'mdi:alert-circle-outline' },
    ],
    columns: 3,
  },
  {
    type: 'title',
    text: 'SA/D 比例有什么用途？',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>SA/D 比例</strong>是一种诊断工具，可让您在起航前预测船只行为。低比例表示船只坚固安全，但在轻风中较慢；高比例提供速度和“飞翔”感，但在风力增大时对组员技能要求更高。两者并无优劣之分：完全取决于预期的航行类型。',
  },
  {
    type: 'title',
    text: 'SA/D 比例参考表',
    level: 4,
  },
  {
    type: 'table',
    headers: ['比例', '船只类型', '海上表现'],
    rows: [
      ['< 14', '重排水量 / 货运船只', '稳定但缓慢，需要持续的风力'],
      ['14 - 16.5', '远洋远航巡航船', '平衡、舒适、上风性能好'],
      ['16.5 - 20', '标准港池巡航船', '在微风中活跃，易于操控，多功能'],
      ['20 - 25', '高性能巡航 / 运动型', '快速、要求高、在轻风中令人兴奋'],
      ['> 25', '竞赛 / 极限运动型', '非常快且灵敏，需要专家级组员'],
    ],
  },
  {
    type: 'title',
    text: '测量技术术语表 (I, J, P, E)',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'I (前三角高度)',
        definition: '从甲板到前帆升降索在桅杆上连接点的垂直距离。定义了前三角的高度。',
      },
      {
        term: 'J (前三角底边长度)',
        definition: '从桅杆到船首（森林座）的水平距离。定义了前帆安装的前三角基准底边长度。',
      },
      {
        term: 'P (桅杆高度)',
        definition: '从主帆帆杆到桅杆顶部主帆升降索滑轮的距离。定义了主帆的高度。',
      },
      {
        term: 'E (帆杆长度)',
        definition: '从桅杆到帆杆末端主帆后角 (Clew) 的距离。定义了主帆的底边长度。',
      },
    ],
  },
  {
    type: 'title',
    text: '航海执照计算 (Yachtmaster)',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '帆面积计算和 SA/D 比例是 <strong>Yachtmaster</strong> 和近岸船长考试大纲的一部分。理解索具几何形状及其与排水量的关系对于做出海上安全决策至关重要：及时缩帆、选择正确的热那亚帆或在狂风来临前预估船只行为。',
  },
  {
    type: 'tip',
    title: '顺风帆与安全',
    html: '对于远洋或远距离航行，SA/D 比例在 16 到 18 之间提供了速度与安全性之间的最佳平衡。比例超过 22 的船只可能在仅有 4-5 级蒲福风级时就需要缩帆。',
  },
  {
    type: 'title',
    text: '热那亚帆重叠度如何影响性能？',
    level: 4,
  },
  {
    type: 'paragraph',
    html: '<strong>热那亚帆 (Genoa)</strong> 是最大的头帆，其后角位于桅杆后方，与主帆“重叠”。重叠百分比表示帆宽垂直线 (LP) 与 J 距离相比长出多少。150% 的热那亚帆具有相当于 J 长度 150% 的 LP，提供比简单的前三角帆大得多的面积。',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Dacron (巡航级)',
        description: '巡航帆的经典材料。坚固且易于维护。',
        points: [
          '高耐用性和耐紫外线性能',
          '维护成本低',
          '重量较重且在载荷下易拉伸',
          '近岸和远航巡航的理想选择',
        ],
      },
      {
        title: '层压材料 (竞赛级)',
        description: '高科技材料，如凯夫拉 (Kevlar)、Spectra 或迪尼玛 (Dyneema)。',
        highlight: true,
        points: [
          '极低拉伸：最大化气动效率',
          '比 Dacron 轻得多',
          '成本较高且使用寿命较短',
          '对于 SA/D 比例 > 22 的船只是必不可少的',
        ],
      },
    ],
    columns: 2,
  },
  {
    type: 'title',
    text: '航行物理学与稳定性',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '帆面积产生驱动力，但也会产生 <strong>倾侧力矩 (Heeling moment)</strong>，倾向于使船只倾覆。稳定性通过船只抵抗这种倾侧力的复原力矩来衡量。压载较少的船只具有高 SA/D 比例可能很危险，而同样的比例在具有深重龙骨的船上则是完全可以掌控的。',
  },
  {
    type: 'paragraph',
    html: '为了计算实际可用功率，造船工程师通常将 <strong>排水量-长度比 (DLR)</strong> 与 SA/D 结合使用。这两个比例共同精准描述了一艘船是海上的“拖船”还是“竞速滑行艇”。',
  },
  {
    type: 'tip',
    title: '稳定性与安全',
    html: '切勿孤立地评估 SA/D。一艘比例为 22 且复原角为 90 度的帆船远比比例为 18 且复原角为 60 度的帆船安全。请务必参考您船只的稳定性曲线。',
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
    name: `如何使用： ${title}`,
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
