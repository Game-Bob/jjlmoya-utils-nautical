import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TideCalculatorUI, TideCalculatorLocaleContent } from '../index';

const slug = 'tide-height-calculator';
const title = '조석 높이 계산기';
const description =
  '항해용 12분의 1 법칙을 사용하여 조석 사이클의 특정 시점의 수심을 추정합니다. 연안 계획 및 선박 자격증 학습에 적합합니다.';

const ui: TideCalculatorUI = {
  parametersLabel: '매개변수',
  highTideLabel: '만조',
  lowTideLabel: '간조',
  targetTimeLabel: '조회 시각',
  estimatedHeightLabel: '추정 조고',
  metersLabel: '미터',
  amplitudeLabel: '조차',
  durationLabel: '지속 시각',
  tableBreakdownLabel: '12분의 1 세부 내역',
  tableHourLabel: '시각',
  tableStateLabel: '상태',
  tableStartLabel: '시작',
  tableEndLabel: '종료',
  statusUpLabel: '밀물',
  statusDownLabel: '썰물',
  statusOutOfRange: '범위 초과',
};

const faq: TideCalculatorLocaleContent['faq'] = [
  {
    question: '12분의 1 법칙(Rule of Twelfths)이란 무엇이며 어디에 쓰이나요?',
    answer:
      '12분의 1 법칙은 만조와 간조 사이의 특정 시점에서 조석의 높이를 추정하기 위해 항해에서 사용하는 간이 수학적 방법입니다. 조석의 흐름이 근사적으로 사인 곡선을 따른다는 관찰에 기초하며, 6시간의 전체 조차를 12개 부분(1/12, 2/12, 3/12, 3/12, 2/12, 1/12)으로 나눕니다.',
  },
  {
    question: '이 방법을 실제 항해에서 신뢰할 수 있나요?',
    answer:
      '빠른 계획 수립 및 교육 목적으로는 매우 유용한 이론적 추정 방법입니다. 하지만 기압이나 바람과 같은 기상 요인을 고려하지 않으므로 실제 수위는 수십 센티미터 차이가 날 수 있습니다. 실제 항해에서는 항상 공식 조석표를 확인하십시오.',
  },
  {
    question: '조고를 계산하려면 어떤 데이터가 필요한가요?',
    answer:
      '조회하고자 하는 시각에서 가장 가까운 만조와 간조의 시각 및 높이(미터 단위)가 필요합니다. 이 데이터는 조석표나 해양 기상 앱에서 확인할 수 있습니다.',
  },
  {
    question: '왜 조석은 항상 같은 속도로 차오르지 않나요?',
    answer:
      '거대한 수괴(water mass)의 관성과 해분(ocean basin)의 형태 때문입니다. 조석은 간조 이후 천천히 오르기 시작하여 중간 시간대(3/12 및 4/12시간째)에 최대 속도에 도달하고, 만조에 가까워지면 다시 느려집니다.',
  },
  {
    question: '기압은 조석에 어떤 영향을 미치나요?',
    answer:
      '고기압(고기압권)은 해수면을 아래로 눌러 실제 높이를 낮춥니다. 저기압(저기압권)은 해수면을 상승시킵니다. 일반적으로 평균 기압에서 1hPa 차이가 나면 해수면이 약 1cm 변하는 것으로 간주합니다.',
  },
  {
    question: '조차(tidal range)란 무엇인가요?',
    answer:
      '만조와 그 직전 또는 직후의 간조 사이의 수직적인 높이 차이입니다. 이 수치는 달의 위상(사리와 조금) 및 지리적 위치에 따라 달라집니다.',
  },
];

const howTo: TideCalculatorLocaleContent['howTo'] = [
  {
    name: '만조 및 간조 확인',
    text: '조석표를 확인하여 관심 있는 조석 사이클의 시각과 높이를 파악합니다.',
  },
  {
    name: '계산기에 데이터 입력',
    text: '만조와 간조의 시각 및 높이를 입력합니다. 툴이 자동으로 지속 시간과 조차를 계산합니다.',
  },
  {
    name: '조회 시각 설정',
    text: '수위를 알고 싶은 시각을 조정합니다. 차트에서 해당 지점이 강조 표시됩니다.',
  },
  {
    name: '12분의 1 표 분석',
    text: '시간대별 세부 내역을 검토하여 전체 기간 동안 수위가 어떻게 변하는지 이해합니다.',
  },
];

const seo: TideCalculatorLocaleContent['seo'] = [
  {
    type: 'title',
    text: '조석 마스터하기: 항해의 12분의 1 법칙',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '연안 항해나 수심이 제한된 항구에 입항할 때는 항상 정확한 수심을 아는 것이 중요합니다. 오늘날 실시간 데이터를 제공하는 디지털 앱과 GPS가 널리 쓰이지만, <strong>12분의 1 법칙</strong>은 여전히 모든 선장과 항해사 교육의 기초가 되는 도구입니다. 이 법칙은 복잡한 계산기 없이도 조석 사이클의 특정 지점의 조고를 근사치로 구할 수 있게 해주는 수학적 추정법입니다.',
  },
  {
    type: 'title',
    text: '12분의 1 법칙이란 정확히 무엇인가요?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '12분의 1 법칙은 조석의 흐름이 일정하지 않다는 관찰에 근거합니다. 해수면은 만조와 간조 사이의 약 6시간 동안 일정한 속도로 오르내리지 않습니다. 대신 사인 곡선을 그리며 움직입니다. 첫 1시간 동안은 천천히 움직이다가 중간 시간대에 속도가 붙고, 다음 극값에 가까워지면 다시 속도가 줄어듭니다.',
  },
  {
    type: 'table',
    headers: ['사이클 시간대', '비율', '흐름 상태'],
    rows: [
      ['<strong>1시간째</strong>', '조차의 1/12', '느린 시작 (게류 시점)'],
      ['<strong>2시간째</strong>', '조차의 2/12', '흐름 가속'],
      ['<strong>3시간째</strong>', '조차의 3/12', '최대 흐름 (강한 조류)'],
      ['<strong>4시간째</strong>', '조차의 3/12', '흐름 유지'],
      ['<strong>5시간째</strong>', '조차의 2/12', '눈에 띄는 감속'],
      ['<strong>6시간째</strong>', '조차의 1/12', '최종 감속 (다음 게류를 향해)'],
    ],
  },
  {
    type: 'title',
    text: '기술적 한계: 실제 조석에 영향을 미치는 요인들',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: '기압', definition: '저기압은 해수면을 높이고, 고기압은 해수면을 낮춥니다. 일반적으로 평균 기압에서 1hPa 차이당 약 1cm의 변동이 발생합니다.' },
      { term: '연안풍', definition: '지속적으로 육지 쪽으로 부는 바람은 조석표의 예측치보다 수위를 더 높게 쌓을 수 있습니다.' },
      { term: '국지적 지형', definition: '해안의 형태, 해저 수심, 강어귀의 유무는 조석의 흐름을 상당히 지연시키거나 가속화할 수 있습니다.' },
    ],
  },
  {
    type: 'tip',
    title: '안전 유의 사항',
    html: '본 툴은 수학적 추정법을 사용합니다. 기상 요인이나 국지적 지형은 반영되지 않습니다. 실제 항해 시에는 반드시 공식 조석표를 참조하십시오.',
  },
  {
    type: 'title',
    text: '초보 선원을 위한 핵심 개념',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      {
        term: '조차 (Tidal range)',
        definition: '만조와 간조 사이의 수직적 높이 차이. 비스케이만에서는 수 미터에 달할 수 있으나 지중해에서는 거의 무시할 수준입니다.',
      },
      {
        term: '조석 지속 시간',
        definition: '만조와 다음 간조 사이의 시간 간격. 보통 약 6시간 12분 정도입니다(반일주조 사이클).',
      },
      {
        term: '기본 수준면 (Chart datum)',
        definition: '해도상에 표시된 수심의 기준면입니다. 실제 수심은 해도에 표시된 수치보다 낮아지는 경우가 거의 없습니다.',
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
    name: `사용법: ${title}`,
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
