import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SpeedConverterUI, SpeedConverterLocaleContent } from '../index';

const slug = 'nautical-speed-converter';
const title = '해양 속도 변환기 및 보포트 풍력 계급';
const description =
  '노트, km/h, m/s, mph 단위를 즉시 변환하세요. 해상 상태 설명과 바람의 영향이 포함된 전체 보포트 풍력 계급표를 포함합니다.';

const beaufortData = [
  { force: 0, name: '고요함', sea: '거울같이 잔잔한 바다', effect: '연기가 수직으로 올라감', kn: '0' },
  { force: 1, name: '실바람', sea: '비늘 같은 물결', effect: '연기의 흐름으로 풍향을 알 수 있으나 풍향계는 움직이지 않음', kn: '1-3' },
  { force: 2, name: '남실바람', sea: '작은 물결, 파도 머리가 부서지지 않음', effect: '얼굴에 바람이 느껴지고 나뭇잎이 흔들림', kn: '4-6' },
  { force: 3, name: '산들바람', sea: '약간 큰 물결, 군데군데 흰 파도 머리가 보임', effect: '나뭇잎과 가는 가지가 쉼 없이 흔들림', kn: '7-10' },
  { force: 4, name: '건들바람', sea: '작은 파도, 흰 파도 머리가 자주 보임', effect: '먼지가 일고 종이가 날림', kn: '11-16' },
  { force: 5, name: '흔들바람', sea: '보통 크기의 파도, 많은 흰 파도 머리', effect: '작은 나무가 흔들리기 시작함', kn: '17-21' },
  { force: 6, name: '된바람', sea: '큰 파도가 일기 시작하고 거품이 생김', effect: '우산을 쓰기 어려움', kn: '22-27' },
  { force: 7, name: '센바람', sea: '물결이 높아지고 거품이 줄무늬를 이루어 날림', effect: '바람을 거슬러 걷기 힘듦', kn: '28-33' },
  { force: 8, name: '큰바람', sea: '높은 파도, 물보라로 인해 시야가 제한됨', effect: '걷기가 매우 힘듦', kn: '34-40' },
  { force: 9, name: '큰강풍', sea: '매우 높은 파도, 바다가 굽이침', effect: '건물에 약간의 피해가 발생할 수 있음', kn: '41-47' },
  { force: 10, name: '노대바람', sea: '비정상적으로 높은 파도, 바다가 하얗게 보임', effect: '나무가 뽑히고 상당한 피해가 발생함', kn: '48-55' },
  { force: 11, name: '왕바람', sea: '거대한 파도, 거품이 바다를 뒤덮음', effect: '광범위한 피해 발생', kn: '56-63' },
  { force: 12, name: '싹쓸바람', sea: '공기가 거품과 물보라로 가득 참', effect: '모든 것이 궤멸되는 대재앙', kn: '64+' },
];

const ui: SpeedConverterUI = {
  knLabel: '노트 (kt)',
  kmhLabel: '킬로미터/시',
  msLabel: '미터/초',
  mphLabel: '마일/시',
  beaufortTitle: '보포트 풍력 계급',
  forceLabel: '풍력',
  descriptionLabel: '설명',
  knotsLabel: '노트',
  effectLabel: '시각적 영향',
  seaStateLabel: '해상 상태',
  windEffectLabel: '육상 영향',
  faqTitle: '자주 묻는 질문',
  bibliographyTitle: '참고 문헌',
  beaufortDataJson: JSON.stringify(beaufortData),
};

const faq: SpeedConverterLocaleContent['faq'] = [
  {
    question: '왜 배의 속도는 노트(knot)를 사용하나요?',
    answer: '노트는 시간당 1해리를 이동하는 속도 단위입니다. 역사적으로 선원들이 일정한 간격으로 매듭(knot)을 지은 줄에 나무 조각을 매달아 바다에 던진 뒤, 일정 시간 동안 몇 개의 매듭이 빠져나가는지를 세어 속도를 측정했던 것에서 유래했습니다. 오늘날에도 해상 항해와 항공 분야의 국제 표준 단위로 쓰입니다.',
  },
  {
    question: '보포트 계급이란 무엇이며 항해에서 어떻게 사용되나요?',
    answer: '보포트 계급은 바람의 속도를 해상이나 육상에서 관찰되는 현상과 연관시킨 경험적인 수치입니다. 1805년 영국 해군 제독 프랜시스 보포트가 고안했으며, 0(고요함)부터 12(싹쓸바람)까지의 등급이 있습니다. 선원들은 계측기 없이 바다 상태를 관찰하여 바람의 세기를 추정하는 데 사용합니다.',
  },
  {
    question: '항해에서 SOG와 STW의 차이는 무엇인가요?',
    answer: 'SOG(Speed Over Ground: 대지속도)는 GPS로 측정되는 해저 바닥에 대한 실제 이동 속도입니다. STW(Speed Through Water: 대수속도) 또는 로그 속도는 주변 물에 대한 선박의 속도입니다. 두 속도의 차이는 해류의 영향을 나타냅니다. SOG는 도착 시간 및 연료 계산에 사용되고, STW는 풍압 편차(leeway) 계산에 사용됩니다.',
  },
  {
    question: '1노트는 몇 km/h인가요?',
    answer: '1노트는 정확히 시속 1.852킬로미터입니다. 이는 지구 자오선의 위도 1분에 해당하는 1해리의 길이를 바탕으로 합니다. 따라서 10노트는 18.52 km/h, 20노트는 37.04 km/h, 30노트는 55.56 km/h가 됩니다.',
  },
];

const howTo: SpeedConverterLocaleContent['howTo'] = [
  {
    name: '아무 단위로나 속도 입력',
    text: '노트, km/h, m/s, mph 중 알고 있는 단위 필드에 숫자를 입력하면 다른 모든 필드가 자동으로 업데이트됩니다.',
  },
  {
    name: '해당 보포트 풍력 확인',
    text: '보포트 카드는 입력된 속도에 해당하는 풍력 등급을 해상 및 육상 상태의 영향과 함께 실시간으로 보여줍니다.',
  },
  {
    name: '보포트 표의 행 클릭',
    text: '아래 표에서 특정 보포트 등급을 선택하면 해당 등급의 최소 속도를 모든 단위로 확인할 수 있습니다.',
  },
  {
    name: '결과를 항해 계획에 활용',
    text: '속도와 바람 정보를 조합하여 현재 기상 조건이 본인의 배와 계획된 항로에 적합한지 판단하세요.',
  },
];

const bibliography: SpeedConverterLocaleContent['bibliography'] = [
  {
    name: 'Met Office - The Beaufort Scale',
    url: 'https://www.metoffice.gov.uk/weather/guides/coast-and-sea/beaufort-scale',
  },
  {
    name: 'IMO - International Maritime Organization',
    url: 'https://www.imo.org/',
  },
];

const seo: SpeedConverterLocaleContent['seo'] = [
  {
    type: 'title',
    text: '해양 속도 변환기 및 보포트 풍력 계급 가이드',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '속도는 해상 항해에서 가장 기본이 되는 데이터입니다. 배가 몇 노트로 가고 있는지, 그것이 항해 계획을 위해 시속 몇 킬로미터로 환산되는지, 혹은 현재 바람이 보포트 계급으로 얼마인지를 아는 것은 모든 항해사가 갖춰야 할 필수 지식입니다.',
  },
  {
    type: 'paragraph',
    html: '이 해양 속도 변환기를 통해 노트, km/h, m/s, mph 사이를 즉시 변환할 수 있으며, 해상 상태 설명과 바람의 영향이 포함된 해당 보포트 등급을 자동으로 식별할 수 있습니다.',
  },
  {
    type: 'stats',
    items: [
      { label: '표준 단위', value: '노트 (kt)', icon: 'mdi:speedometer' },
      { label: '풍력 척도', value: '보포트 (0-12)', icon: 'mdi:weather-windy' },
      { label: '주요 환산', value: '1 kt = 1.852 km/h', icon: 'mdi:swap-horizontal' },
    ],
  },
  {
    type: 'title',
    text: '왜 속도 단위로 노트를 사용하나요?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>노트 (kt)</strong>는 해상 및 항공 항해의 공식 속도 단위입니다. 정의는 명확합니다. 1노트는 시간당 1해리를 이동하는 속도이며, 여기서 1해리(1852m)는 지구 자오선의 위도 1분으로 정의됩니다. 지구의 기하학적 형태와 직접 연결되어 있다는 점 덕분에 별도의 변환 없이 해도에서 직접 거리를 추정할 수 있어 항해에 매우 실용적입니다.',
  },
  {
    type: 'paragraph',
    html: '역사적으로 선원들은 <em>섹스턴트(Log)</em>를 사용해 속도를 쟀습니다. 14.4미터(30초 동안 이동하는 1해리의 비율적 분수)마다 매듭을 지은 줄에 삼각형 나무 조각을 매달아 바다에 던진 뒤, 일정 시간 동안 손가락 사이로 빠져나간 매듭의 수를 세었습니다. 이것이 오늘날 우리가 사용하는 용어의 기원입니다.',
  },
  {
    type: 'title',
    text: '보포트 풍력 계급: 항해사의 눈',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>보포트 풍력 계급</strong>은 1805년 영국 해군 제독 프랜시스 보포트 경이 계측기 없이 관찰 가능한 현상만으로 바람의 세기를 분류하기 위해 고안한 경험적 방법입니다. 원래 군함이 얼마나 많은 돛을 펼 수 있는지 추정하기 위해 만들어졌으나, 오늘날에는 세계기상기구(WMO)에서 채택한 해양 기상학의 범용 기준이 되었습니다.',
  },
  {
    type: 'paragraph',
    html: '계급은 <strong>풍력 0</strong>(완전 고요함, 거울 같은 바다)부터 <strong>풍력 12</strong>(14미터 이상의 파도와 물보라로 가득 찬 싹쓸바람)까지 있습니다. 레저용 선박의 경우 보통 풍력 6(된바람, 22-27노트)이 임계점이며, 원양 요트는 풍력 7~8부터 주의가 필요합니다.',
  },
  {
    type: 'table',
    headers: ['보포트 등급', '설명', '해상 상태'],
    rows: [
      ['0', '고요함', '거울같이 잔잔한 바다'],
      ['3', '산들바람', '군데군데 흰 파도 머리가 보임'],
      ['6', '된바람', '큰 파도가 일기 시작하고 거품이 생김'],
      ['9', '큰강풍', '매우 높은 파도, 시야가 불투명함'],
      ['12', '싹쓸바람', '공기가 물보라로 가득 차고 바다가 온통 하얗게 보임'],
    ],
  },
  {
    type: 'title',
    text: '해양 속도 용어 사전',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: '노트 (kt)', definition: '시간당 1해리(1852m)를 이동하는 속도 단위. 해상 및 항공 항해의 국제 표준.' },
      { term: 'SOG (Speed Over Ground)', definition: 'GPS로 측정되는 실제 지면에 대한 배의 속도. 해류의 영향이 포함된 실제 이동 속도.' },
      { term: '로그 속도 (STW)', definition: '물에 대한 선박의 상대 속도로, 로그 계측기로 측정함. 해류의 영향을 배제하며 풍압 편차 계산의 기준이 됨.' },
      { term: '겉보기 바람 (Apparent Wind)', definition: '선박이 나아가면서 발생하는 바람과 실제 바람의 벡터 합으로 선상에서 느껴지는 바람. 실제 바람과 정량 및 방향이 항상 다름.' },
    ],
  },
  {
    type: 'title',
    text: '빠른 변환 공식',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '디지털 변환기를 사용할 수 없을 때 수동으로 속도를 변환하려면 모든 항해사가 숙지해야 할 다음의 근사치를 사용하세요.',
  },
  {
    type: 'list',
    items: [
      '<strong>노트에서 km/h로:</strong> 노트에 1.852를 곱합니다. 빠른 계산법: 노트를 2배한 뒤 8%를 뺍니다. 예: 10 kt ≈ 20 - 1.6 = 18.4 km/h.',
      '<strong>노트에서 mph로:</strong> 노트에 1.15를 곱합니다. 근사치: 노트에 15%를 더합니다. 예: 20 kt ≈ 23 mph.',
      '<strong>노트에서 m/s로:</strong> 노트에 0.514를 곱합니다. 빠른 계산법: 노트를 2로 나눕니다. 예: 10 kt ≈ 5 m/s (정확히는 5.14 m/s).',
    ],
  },
  {
    type: 'tip',
    title: '안전 및 기상 정보',
    html: '출항 전에는 항상 해상 기상 예보를 확인하십시오. 보포트 4-5는 대부분의 레저 선박이 감당할 수 있지만, 풍력 6 이상부터는 본인의 경험이 부족하거나 선박 준비가 덜 되었다면 출항 연기를 진지하게 고려해야 합니다.',
  },
  {
    type: 'title',
    text: '장비 비교',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: '디지털 풍속계',
        description: '풍속을 정밀하게 측정하는 전자 장비.',
        icon: 'mdi:speedometer',
        points: [
          '정상 조건에서 ±2%의 정확도',
          '전원 또는 배터리 필요',
          '극한 조건에서 고장 가능성 있음',
          '즉각적인 수치 확인 및 데이터 기록 가능',
        ],
      },
      {
        title: '보포트 관찰법',
        description: '해상 및 육상의 현상을 관찰하여 풍력을 시각적으로 추정.',
        icon: 'mdi:eye-outline',
        highlight: true,
        points: [
          '어떤 장비도 필요하지 않음',
          '모든 기상 상황에서 가능',
          '안전 판단을 내리기에 충분한 정확도',
          '숙련된 항해사의 필수 기술',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: '항해 및 항로 계획',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '항로를 짤 때 배의 속도는 도착 예정 시간(ETA)과 연료 소모량(동력선의 경우)을 결정합니다. 요트의 경우 속도는 바람의 세기와 방향에 따라 달라지므로, 보포트 풍력 예보를 알면 돛으로 갈 수 있을지 엔진을 써야 할지 미리 예측할 수 있습니다.',
  },
  {
    type: 'paragraph',
    html: '레이싱에서는 VMG(Velocity Made Good) 계산과 폴라 다이어그램 분석을 위해 노트와 m/s 사이의 변환이 매우 유용합니다. 기상학자나 수치 예보 모델은 주로 m/s나 km/h 단위를 제공하므로 이를 노트로 바꾸는 것은 전술 계획의 일상적인 단계입니다.',
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
    name: `사용 방법: ${title}`,
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
