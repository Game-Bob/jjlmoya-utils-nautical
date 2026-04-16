import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { UnderKeelUI, UnderKeelLocaleContent } from '../index';

const slug = 'under-keel-clearance-calculator';
const title = '용골 하부 간격 UKC 계산기';
const description =
  '모래턱, 수로 또는 흘수 제한 지점을 통과하기 위한 안전한 시간대를 계산합니다. 선박 흘수, 해도 수심 및 조석 데이터를 입력하여 정확한 안전 항해 가능 시간을 확인하세요.';

const ui: UnderKeelUI = {
  parametersLabel: '매개변수',
  boatDraftLabel: '선박 흘수',
  chartDepthLabel: '해도 수심',
  safetyMarginLabel: '안전 여유',
  highTideLabel: '만조',
  lowTideLabel: '간조',
  metersLabel: '미터',
  passWindowLabel: '항해 가능 시간대',
  neededLabel: '필요 수심',
  tideRequiredLabel: '최소 필요 조고',
  statusNeverLabel: '이 사이클에는 통과 불가',
  statusAlwaysLabel: '사이클 내내 통과 가능',
  statusFromLabel: '통과 시작:',
  statusUntilLabel: '통과 종료:',
  bottomLabel: '바닥면',
  faqTitle: '자주 묻는 질문',
  bibliographyTitle: '참고 문헌',
};

const faq: UnderKeelLocaleContent['faq'] = [
  {
    question: '용골 하부 간격(UKC) 계산이란 정확히 무엇인가요?',
    answer: '선박의 흘수(물에 잠긴 깊이)에 따라 모래턱이나 좁은 수로 같은 위험 지점을 안전하게 통과할 수 있는 충분한 수심이 확보되는 시점을 계산하는 것입니다.',
  },
  {
    question: '어느 정도의 안전 여유를 권장하나요?',
    answer: '레저용 선박의 경우 일반적으로 선박 흘수보다 0.5~1미터 이상의 최소 안전 여유를 두는 것이 권장됩니다. 이 여유는 조석 계산 오차, 기압 변화 또는 예상치 못한 너울(swell)을 상쇄하기 위한 것입니다.',
  },
  {
    question: '너울은 용골 하부 간격에 어떤 영향을 주나요?',
    answer: '너울은 선체를 상하로 흔듭니다. 파도의 골(lowest point)에서는 배가 정지해 있을 때보다 바닥에 더 가까워집니다. 너울이 있는 지역을 통과할 때는 안전 여유를 대폭 늘려야 합니다.',
  },
  {
    question: '해도 수심(chart sounding)이란 무엇인가요?',
    answer: '조석이 기본 수준면(Chart Datum)일 때 해당 지점의 최소 수심입니다. 여기에 현재 조고를 더하면 실제 가용 수심이 됩니다.',
  },
  {
    question: '해도의 수심 숫자 아래에 선이 그어져 있는 것은 무엇을 의미하나요?',
    answer: '해당 지점이 기본 수준면일 때 수면 위로 노출(간출)된다는 뜻입니다. 그 위를 통과하려면 해당 수치보다 훨씬 높은 조고가 필요합니다.',
  },
  {
    question: '스쿼트 현상(Squat effect)이란 무엇이며 항해에 어떤 영향을 주나요?',
    answer: '수심이 얕은 수로를 항행하는 선박이 유체역학적 현상으로 인해 정지 시보다 더 깊게 가라앉는 현상입니다. 속도가 빠를수록 동적 흘수가 증가하여 용골 아래 수심이 줄어들게 됩니다.',
  },
];

const howTo: UnderKeelLocaleContent['howTo'] = [
  {
    name: '흘수 및 안전 여유 설정',
    text: '선박의 최대 흘수를 확인하고 충분한 안전 여유(예: 0.5m)를 더합니다.',
  },
  {
    name: '해도 수심 확인',
    text: '항해하려는 위험 지점의 해도 수심 값을 확인합니다. 바닥이 모래인지 암반인지 확인하세요.',
  },
  {
    name: '조석 데이터 입력',
    text: '가장 가까운 공식 조석표에서 만조와 간조의 시각 및 조고를 입력합니다.',
  },
  {
    name: '항해 가능 시간 확인',
    text: '본 툴은 안전한 항해를 위해 충분한 수심이 확보되는 정확한 시간대를 보여줍니다.',
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
    text: '용골 하부 간격: 얕은 물에서의 안전 항해',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '항해 계획은 해도에 경로를 그리는 것으로 끝나지 않습니다. 연안 항해사에게 가장 중요한 계산 중 하나는 <strong>용골 하부 간격(Under-Keel Clearance, UKC)</strong>입니다. 즉, 좌초 없이 위험 지점을 통과하기 위해 언제 충분한 수심이 확보될지 아는 것입니다.',
  },
  {
    type: 'title',
    text: '해도 수심과 조석의 관계는?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '해도의 수심(sounding)은 <strong>기본 수준면(Chart Datum)</strong>을 기준으로 합니다. 이 수준은 관례적으로 조석이 정상적인 조건에서 도달하는 최저 수위입니다. 특정 시점에 배가 마주하게 될 실제 수심은 해도 수심에 해당 시점의 조고를 더한 값입니다.',
  },
  {
    type: 'title',
    text: '계산 요소: 흘수 및 여유량',
    level: 3,
  },
  {
    type: 'list',
    items: [
      { term: '최대 적재 흘수', definition: '만재 상태에서 선박의 최하단(용골)이 잠기는 깊이.' },
      { term: '해도 수심', definition: '해당 지점의 해도상 수치. 밑줄이 그어져 있다면 기본 수준면에서 노출되는 지점입니다.' },
      { term: '안전 여유', definition: '흘수 위에 추가로 확보하는 최소 0.5~1미터의 여유량.' },
    ],
  },
  {
    type: 'title',
    text: '항해 가능 시간대는 어떻게 작동하나요?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '계산기는 수위가 흘수와 안전 여유의 합보다 높아지는 정확한 시점을 결정합니다. 그 시점부터 <strong>항해 가능 시간대</strong>가 열립니다. 썰물 때라면 수위가 안전 한계선 아래로 떨어지기 전까지 통과 가능한 시간을 알려줍니다.',
  },
  {
    type: 'title',
    text: '실제 항해에 영향을 미치는 요인들',
    level: 3,
  },
  {
    type: 'table',
    headers: ['요인', '영향', '권장 사항'],
    rows: [
      ['<strong>너울</strong>', '선체 하부 수심 감소', '안전 여유를 대폭 늘릴 것'],
      ['<strong>스쿼트 현상</strong>', '흡입력으로 인한 흘수 증가', '위험 구역에서는 속도를 줄일 것'],
      ['<strong>모래 바닥</strong>', '폭풍으로 변하는 수심', '음향측심기를 켜두고 추가 여유 확보'],
    ],
  },
  {
    type: 'tip',
    title: '항해 팁',
    html: '항해 가능 시간이 매우 짧거나 기상이 악화되는 경우, 조석이 필요한 높이까지 차오를 때까지 수심이 깊은 먼 바다에서 대기하는 것이 가장 현명한 결정입니다.',
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
    name: `사용법: ${title}`,
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
