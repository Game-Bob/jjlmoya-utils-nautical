import type { CategoryLocaleContent } from '../index';

const slug = 'sailing-and-nautical';
const title = '航海与帆船工具';
const description =
  '为水手提供的航海计算工具：潮汐、续航力、帆面积、单位转换器和速度。非常适合RYA和游艇大师考试学习。';

const seo: CategoryLocaleContent['seo'] = [
  {
    type: 'title',
    text: '为什么在航海和导航中使用数字工具？',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '现代航海随着数字工具的出现经历了根本性变革。无论您是在一艘小型休闲船上，还是在游艇的舵上，即时处理位置、风速和水流数据的能力不仅仅是方便问题，更是海上安全的基本支柱。',
  },
  {
    type: 'paragraph',
    html: '从历史上看，海员完全依赖六分仪、航海天文钟和换算表来确定在广阔海洋上的位置。今天，尽管六分仪的浪漫依然存在，但实际操作现实需要只有数字计算工具才能提供的响应速度。',
  },
  {
    type: 'title',
    text: '现代导航员的关键方面',
    level: 2,
  },
  {
    type: 'title',
    text: '地理定位与高精度数字海图',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '数字海图使导航民主化，让小型船只也能访问以前仅限于大型商船的信息。负责任的船长使用数字工具来验证自己的判断，而不是取代它。',
  },
  {
    type: 'list',
    items: [
      '数据输入精度：最小的拼写错误可能使您偏离目的地数海里。',
      '跨设备兼容性：将平板电脑上的航线规划与驾驶台仪器同步。',
      '硬件故障备份：轻量级网络应用程序是船载绘图仪崩溃时的保险。',
      '航线规划：航海计算器可以准确估算燃油消耗和距离。',
    ],
  },
  {
    type: 'title',
    text: '海洋气象与航线优化',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '风和海况是航海的真正主宰。正确解读风力等级（如蒲福风级）并将其转换为节等实用单位，是每位导航员的日常现实。',
  },
  {
    type: 'tip',
    title: '冗余与B计划的重要性',
    html: '永远不要将所有导航依赖于单一电子系统。始终在纸上保留关键航点的备份。网络工具非常适合航行前计划，但优秀的水手始终拥有不需要屏幕的应急计划。',
  },
  {
    type: 'title',
    text: '航海训练与计算器的使用',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '即使在航海资格的官方考试中（如RYA日间船长或游艇大师），海图计算仍然是必修内容。数字工具是完美的学习伴侣，允许考生验证推测导航练习、潮汐计算和罗盘修正。',
  },
  {
    type: 'paragraph',
    html: '我们的实用工具集合旨在成为纸质海图的学术严谨性与现代导航的即时性之间的桥梁。我们希望每位船长、爱好者或专业人士在启航前都能在这里找到所需的快速、准确的数据。',
  },
];

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo,
};
