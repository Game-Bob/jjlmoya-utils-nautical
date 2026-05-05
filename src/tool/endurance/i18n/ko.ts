import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EnduranceUI, EnduranceLocaleContent } from '../index';

const slug = 'nautical-endurance-calculator';
const title = '선박 항속 거리 계산기';
const description =
  '연료 소비량, 탱크 용량 및 순항 속도를 바탕으로 최대 항속 거리 및 안전 거리를 계산합니다. 모터보트를 위한 연료 관리 툴입니다.';

const ui: EnduranceUI = {
  tankCapacityLabel: '탱크 용량',
  mainTankLabel: '메인',
  auxTankLabel: '보조',
  currentFuelLabel: '현재 연료량',
  seaConditionsLabel: '해상 / 풍랑 상태',
  consumptionLabel: '이론상 소비량',
  cruiseSpeedLabel: '순항 속도',
  reserveLabel: '예비 연료',
  fuelPriceLabel: '리터당 가격',
  maxRangeLabel: '최대 항속 거리',
  realPerformanceLabel: '실제 성능',
  hoursLabel: '항속 시간',
  safeMilesLabel: '안전 항행 거리',
  tankValueLabel: '탱크 잔량 가치',
  inverseCalcLabel: '역산: 얼마나 더 주유해야 할까요?',
  desiredDistLabel: '목표 거리',
  minFuelLabel: '최소 필요 연료',
  warningLabel: '주의: 해상 안전을 위해 예비 연료는 최소 20%를 확보하는 것을 권장합니다.',
  seaCalm: '잔잔함 (1.0x)',
  seaLight: '약한 물결 (+15%)',
  seaModerate: '보통 물결 (+30%)',
  seaStorm: '거친 풍랑 (+60%)',
};

const faq: EnduranceLocaleContent['faq'] = [
  {
    question: '모터보트의 항속 거리는 어떻게 계산하나요?',
    answer: '항속 거리는 사용 가능한 연료를 시간당 소비량으로 나누어 총 유지 시간을 구한 뒤, 여기에 순항 속도를 곱하여 계산합니다. 이 툴은 실제 항해 조건을 반영하기 위해 해상 상태 계수를 추가로 적용합니다.',
  },
  {
    question: '해상 항해에서 20%의 예비 연료를 권장하는 이유는 무엇인가요?',
    answer: '20% 예비 연료는 역조, 기상 악화로 인한 우회, 소비량 추정 오류 또는 타선 구조 등 예기치 못한 상황에 대비하기 위한 해상 안전 기준입니다. 많은 보험사와 항만 당국에서 이를 필수 사항으로 간주합니다.',
  },
  {
    question: 'L/NM 성능이란 무엇이며 계획에 어떤 영향을 미치나요?',
    answer: '해리당 리터(L/NM) 성능은 실제 해상 조건에서의 엔진 효율을 나타냅니다. 시간당 소비량과 달리, 속도와 관계없이 특정 거리를 이동하는 데 정확히 얼마만큼의 연료가 필요한지 계산할 수 있게 해줍니다.',
  },
  {
    question: '해상 상태는 실제 연료 소비에 어떤 영향을 미치나요?',
    answer: '해상 상태가 나빠지면 선체가 물과 바람의 저항에 더 강하게 부딪혀야 하므로 소비량이 증가합니다. 약한 물결에서는 소비량이 15%, 보통 물결에서는 30%, 거친 풍랑 시에는 60% 이상까지 급증할 수 있습니다. 이 요인을 무시하면 입항 전에 연료가 고갈될 위험이 있습니다.',
  },
];

const howTo: EnduranceLocaleContent['howTo'] = [
  {
    name: '탱크 용량 입력',
    text: '메인 탱크의 용량을 입력하고, 보조 탱크가 있다면 해당 용량도 입력합니다. 툴이 현재 충전 비율을 계산합니다.',
  },
  {
    name: '현재 연료 레벨 입력',
    text: '현재 보유하고 있는 실제 연료량을 입력합니다. 선박의 레벨 게이지로 측정하거나 마지막 주유량을 바탕으로 추정하세요.',
  },
  {
    name: '항해 조건 조정',
    text: '예정된 항로의 예상 해상 상태를 선택합니다. 해상 계수가 이론상 소비량을 예상되는 실제 소비량으로 보정해 줍니다.',
  },
  {
    name: '소비량 및 순항 속도 입력',
    text: '제조사 데이터나 본인의 기록을 바탕으로 시간당 소비량과 주로 항해하는 속도를 입력하세요.',
  },
  {
    name: '안전 거리 및 역산 결과 확인',
    text: '안전하게 항해할 수 있는 해리 수와 특정 목적지에 도달하기 위해 필요한 연료량을 보여줍니다.',
  },
];

const seo: EnduranceLocaleContent['seo'] = [
  {
    type: 'title',
    text: '모터보트 항해에서의 연료 관리 및 항속 거리',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>해상 항속 거리</strong>는 모터보트를 타고 출항하기 전에 확인해야 할 가장 중요한 계산 중 하나입니다. 보유한 연료로 정확히 몇 해리나 갈 수 있는지 아는 것이 계획된 항해와 해상 비상사태를 가르는 차이가 됩니다.',
  },
  {
    type: 'paragraph',
    html: '이 항속 거리 계산기는 <strong>해상 상태 요인</strong>, 안전 예비 연료 비율, 그리고 역 연료 계산 기능을 통합하여 어떤 상황에서도 완벽하고 신뢰할 수 있는 연료 관리를 가능하게 합니다.',
  },
  {
    type: 'title',
    text: '황금률: 3분의 1 법칙',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '해상 항해의 고전적인 연료 관리 법칙은 항상 안전 마진을 확보하기 위해 탱크를 세 부분으로 나눕니다:',
  },
  {
    type: 'list',
    items: [
      '<strong>3분의 1은 갈 때:</strong> 예정된 목적지까지 도달하는 데 필요한 연료.',
      '<strong>3분의 1은 올 때:</strong> 출발항이나 가장 가까운 항구로 돌아오기 위한 연료.',
      '<strong>3분의 1은 예비용:</strong> 예기치 못한 상황, 조류 또는 악조건에 대비한 안전 마진.',
    ],
  },
  {
    type: 'paragraph',
    html: '계산기에서 예비 연료 비율을 본인의 기준에 맞춰 설정할 수 있지만, <strong>20% 미만으로 설정하는 것은 절대 권장되지 않습니다</strong>. 대형 탱크를 가졌거나 장거리 항해를 하는 숙련된 선장들은 이 마진을 30% 또는 33%까지 높이기도 합니다.',
  },
  {
    type: 'title',
    text: '소비량(l/h)에 영향을 미치는 요인들',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '제조사의 이론상 소비량은 이상적인 실험실 조건에서 계산된 것입니다. 실제로는 여러 요인이 <strong>실제 연료 소비량</strong>을 변화시킵니다. 선체 속도가 가장 결정적입니다. 경제 속도 이상으로 항해하면 이동 해리당 소비량이 2배에서 3배까지 늘어날 수 있습니다.',
  },
  {
    type: 'table',
    headers: ['항해 상태', '항속 거리에 미치는 영향', '조언'],
    rows: [
      ['<strong>오염된 선체</strong>', '항속 거리를 최대 20% 감소시킴', '시즌 전에 선체를 청소하세요'],
      ['<strong>역조</strong>', '유효 속도를 30%까지 낮출 수 있음', '항상 대지 속도(SOG)로 계산하세요'],
      ['<strong>맞바람</strong>', '저항과 소비량을 10-25% 증가시킴', '약한 물결 또는 보통 물결 계수를 사용하세요'],
      ['<strong>과적</strong>', '흘수와 저항을 증가시킴', '계산 전에 장비와 비축품의 무게를 확인하세요'],
    ],
  },
  {
    type: 'title',
    text: '항속 거리 기술 용어 사전',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: '성능 (L/NM)', definition: '이동한 해리당 소비된 연료 리터 수. 소비량과 실제 거리를 연결해 주므로 항해 계획 시 가장 유용한 지표입니다.' },
      { term: '순항 속도', definition: '엔진이 속도와 소비량 사이에서 최적의 균형을 제공하는 속도. 일반적으로 최대 출력의 70%에서 80% 사이입니다.' },
      { term: '임계 예비량', definition: '절대 소비해서는 안 되는 탱크의 비율. 비상시 대응 및 연료 회로에 공기가 유입되는 것을 방지하기 위해 최소 20%를 권장합니다.' },
      { term: '비연료 소비량', definition: '발생한 전력 1킬로와트시당 연료 그램 수(g/kWh). 서로 다른 추진 시스템 간의 효율성을 비교할 수 있게 해주는 엔진의 기술적 척도입니다.' },
    ],
  },
  {
    type: 'title',
    text: '슬러지와 흔들림의 위험',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '연료 레벨이 낮은 선박에서 흔히 발생하는 문제의 원인은 <strong>탱크 바닥의 슬러지</strong>입니다. 레벨이 너무 낮아지면 수년간 쌓인 침전물이 필터에 도달해 이를 막을 수 있으며, 게이지에 몇 리터가 남아 있어도 엔진이 멈출 수 있습니다.',
  },
  {
    type: 'paragraph',
    html: '연료가 적은 상태에서 파도에 의한 배의 흔들림도 문제를 일으킬 수 있습니다. 액체가 요동치면서 연료 펌프가 일시적으로 마를 수 있기 때문입니다. 예비 연료를 유지하면 입항을 위한 조타와 같은 중요한 순간에 이런 일이 발생하는 것을 방지할 수 있습니다.',
  },
  {
    type: 'tip',
    title: '연료 절약 팁',
    html: '일반적인 순항 속도보다 10-15%만 속도를 줄여도 효율을 최대 30%까지 높일 수 있습니다. 시간적 여유가 있고 날씨가 좋다면, 천천히 가는 것이 언제나 가장 경제적이고 안전한 결정입니다.',
  },
  {
    type: 'title',
    text: '해리 (NM)와 킬로미터의 차이',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>해리 (Nautical Mile)</strong>는 1,852미터(1.852 km)이며, 해상 및 항공 항법에서 통용되는 보편적인 거리 단위입니다. 이것은 지구 위도 1분의 호 길이에 기반하므로, 지리 좌표를 사용하는 해도에서의 항해에 이상적입니다. 시간당 해리 수로 나타내는 속도는 노트(kn)라고 합니다.',
  },
  {
    type: 'comparative',
    items: [
      {
        title: '아날로그 바늘 계기',
        description: '전통적인 플로트 방식',
        points: [
          '저렴한 비용과 간단한 설치',
          '작동에 전기가 필요 없음',
          '거친 바다에서는 연료의 움직임으로 인해 부정확함',
          '소비량이나 예상 항속 거리를 보여주지 않음',
        ],
      },
      {
        title: '디지털 유량 계산기',
        description: '전자식 유량 센서',
        highlight: true,
        points: [
          '실제 소비량에 대해 1-2%의 정확도',
          '항속 거리, 소비량 및 비용을 실시간으로 표시',
          '차트플로터 및 NMEA 2000과 통합 가능',
          '초기 교정 및 유지보수가 필요함',
        ],
      },
    ],
  },
];

const schemas: EnduranceLocaleContent['schemas'] = [
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
    name: `사용 방법: ${title}`,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
  } as WithContext<HowTo>,
];

export const content: EnduranceLocaleContent = {
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
