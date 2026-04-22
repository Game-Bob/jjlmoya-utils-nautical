import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { NauticalConverterUI, NauticalConverterLocaleContent } from '../index';

const slug = 'nautical-units-converter';
const title = '航海单位换算器';
const description =
  '换算海里、节、英寻和大气压力。包含针对风速的交互式蒲福风级。';

const ui: NauticalConverterUI = {
  distanceCategoryLabel: '距离',
  speedCategoryLabel: '速度',
  depthCategoryLabel: '深度',
  pressureCategoryLabel: '压力',
  nmLabel: '海里 (nm)',
  kmLabel: '千米 (km)',
  miLabel: '英里 (mi)',
  cableLabel: '链',
  knLabel: '节 (kn)',
  kmhLabel: 'km/h',
  msLabel: 'm/s',
  mphLabel: 'mph',
  brozaLabel: '英寻',
  mLabel: '米 (m)',
  ftLabel: '英尺 (ft)',
  mbarLabel: '毫巴 (mbar)',
  mmhgLabel: 'mmHg',
  inhgLabel: 'inHg',
  atmLabel: '标准大气压 (atm)',
  windSeaLabel: '海况',
  forceLabel: '风力',
  effectLabel: '影响',
  copyLabel: '复制数值',
  faqTitle: '常见问题': '参考文献',
};

const faq: NauticalConverterLocaleContent['faq'] = [
  {
    question: '一海里是多少千米？',
    answer: '一海里正好等于1.852千米，即1852米。该度量对应于地球表面纬度的一分弧长。',
  },
  {
    question: '节和千米每小时有什么区别？',
    answer: '一节等于1.852 km/h，因为一节即为每小时一海里。若要将节换算为千米每小时，只需乘以1.852即可。',
  },
  {
    question: '为什么在海上使用海里而不是千米？',
    answer: '因为一海里对应于纬度的一分弧长，这极大简化了使用海图和指南针进行的航法计算。纬度变化一分正好等于移动了一海里。',
  },
  {
    question: '什么是蒲福风级？',
    answer: '这是一种根据在海面上观察到的影响来关联风速的经验性等级。范围从0（无风）到12（飓风），对于近海和远洋航行至关重要。',
  },
  {
    question: '海洋气象中使用什么压力单位？',
    answer: '海洋气象主要使用毫巴 (mbar) 或其等效单位百帕 (hPa)。海平面的正常大气压为1013.25 mbar。',
  },
  {
    question: '一英寻是多少英尺？',
    answer: '一英寻正好等于6英尺，即1.8288米。主要在英语国家使用，用于在旧版海图上表示深度。',
  },
];

const howTo: NauticalConverterLocaleContent['howTo'] = [
  {
    name: '选择换算类别',
    text: '根据您想要换算的物理量，点击四个标签页之一：距离、速度、深度或压力。',
  },
  {
    name: '在任意字段中输入数值',
    text: '在您已知的单位字段中输入数字。所有其他单位将实时自动更新。',
  },
  {
    name: '参考蒲福风级（速度）',
    text: '当您在“速度”标签页中输入速度时，会出现一张卡片，显示相应的蒲福风级和预期的海况。',
  },
  {
    name: '复制结果',
    text: '使用任何字段旁边的复制按钮将数值复制到剪贴板。',
  },
];

const seo: NauticalConverterLocaleContent['seo'] = [
  {
    type: 'title',
    text: '航海单位精确度的重要性',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '海上航行需要一套属于自己的语言，一套在几个世纪的航海探索中不断完善的度量体系。航海单位并不是一种历史怪癖，而是与地球几何形状和航海者实际需求相一致的数学逻辑工具。',
  },
  {
    type: 'paragraph',
    html: '与陆地不同，陆地上几米的误差很少会导致严重后果，而在海上，一次错误的换算可能意味着安全锚泊。单位的精确度不仅仅是一个学术问题：它关乎航行本身。',
  },
  {
    type: 'paragraph',
    html: '当我们远离海岸线时，缺乏视觉参考使得计算出的位置成为我们唯一可以采取行动的依据。对于负责任的航海者来说，了解如何在海里、千米、节和米之间进行准确换算不是可选项。',
  },
  {
    type: 'title',
    text: '为什么我们使用海里而不是千米？',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '答案在于地球本身的形状。一<strong>海里</strong>正好等于地球表面纬度的一分弧长，即1852米。角度测量与线性距离之间的这种直接对应关系是在航海中普遍使用它的关键。',
  },
  {
    type: 'paragraph',
    html: '使用这个单位，海图上纬度的一分变化总是正好对应于行驶的一海里。这极大简化了在不需要额外换算系数的情况下对位置、速度和到达时间的计算。',
  },
  {
    type: 'title',
    text: '海上速度：节',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>节</strong>是相当于每小时一海里的速度单位。它的名字源于古代测量速度的技术：将一块系在绳子上的木片投入水中，绳子上打有等间距的结（节），统计在固定时间内有多少个结穿过手指。',
  },
  {
    type: 'paragraph',
    html: '如今，虽然我们使用 GPS 卫星和先进的电子系统，但“节”仍然是国际航空和航海中的标准单位。一节等于 1.852 km/h 或 0.514 m/s。',
  },
  {
    type: 'title',
    text: '深度与锚泊：英寻、米与英尺',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '在航海世界里，深度不仅仅是一个统计数据：它是安全锚泊与搁浅之间的界限。从历史上看，<strong>英寻</strong>（1.8288 米或正好 6 英尺）是英语世界测量深度的主要单位。',
  },
  {
    type: 'paragraph',
    html: '然而，全球化和技术进步使得大多数现代海图和回声测深仪已经常态化地使用“米”。现代航海者必须能够熟练地在英寻、米和英尺之间切换，尤其是在查阅旧海图或标定为英制单位的仪器时。',
  },
  {
    type: 'title',
    text: '气象与大气压力',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '对于船长来说，气压计是天气的神谕。以<strong>毫巴</strong> (mbar) 为单位测量的大气压力是预测天气变化最可靠的指标。气压快速下降预示着强风和恶劣天气的到来。',
  },
  {
    type: 'paragraph',
    html: '理解压力变化对任何航海者都至关重要。海平面的正常大气压为 1013.25 mbar（一个大气压）。较高的数值表示天气稳定，而较低的数值，尤其是快速下降时，则预示着可能存在危险的低压系统正在接近。',
  },
  {
    type: 'title',
    text: '风力与海况等级：从蒲福到道格拉斯',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '以节为单位的风速，在与<strong>蒲福风级</strong>相关联时才有了生命力。蒲福风级由英国海军上将弗朗西斯·蒲福于 1805 年开发，这种经验等级将风速与海面及陆地上可观察到的影响联系起来。',
  },
  {
    type: 'list',
    items: [
      '<strong>0-3级 (0-10 kn)：</strong> 这种海况非常平静，适合初学者或家庭出游。',
      '<strong>4-5级 (11-21 kn)：</strong> 是帆船航行的理想风力，有中浪和白色浪花。',
      '<strong>6-7级 (22-33 kn)：</strong> 属于大风至劲风状态。建议有经验者航行并进行收帆。',
      '<strong>8级以上 (超过 34 kn)：</strong> 狂风。仅限拥有合适船只的资深航海者。',
    ],
  },
  {
    type: 'paragraph',
    html: '同样，道格拉斯浪级将海况分为从 0（平滑如镜）到 9（极其壮观且危险）的等级，允许航海者根据天气预报预测地平线之外的情况。',
  },
  {
    type: 'tip',
    title: '安全提示',
    html: '使用此换算器规划行程时，请始终牢记实际情况可能与预测有所不同。请咨询官方天气预报，绝不要低估大海快速变化的能力。',
  },
  {
    type: 'title',
    text: '离线规划与移动性',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '该工具设计为在浏览器加载后即可离线工作，非常适合在网络受限的船上使用。所有换算都在设备本地计算，无需将任何数据发送到服务器。',
  },
];

const schemas: NauticalConverterLocaleContent['schemas'] = [
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

export const content: NauticalConverterLocaleContent = {
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
