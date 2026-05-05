import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { NauticalConverterUI, NauticalConverterLocaleContent } from '../index';

const slug = 'nautical-units-converter';
const title = '해양 단위 변환기';
const description =
  '해리, 노트, 패덤(길), 대기압을 변환합니다. 풍속에 따른 대화형 보포트 풍력 계급표를 포함합니다.';

const ui: NauticalConverterUI = {
  distanceCategoryLabel: '거리',
  speedCategoryLabel: '속도',
  depthCategoryLabel: '수심',
  pressureCategoryLabel: '기압',
  nmLabel: '해리 (nm)',
  kmLabel: '킬로미터 (km)',
  miLabel: '법정 마일 (mi)',
  cableLabel: '케이블 (Cable)',
  knLabel: '노트 (kn)',
  kmhLabel: 'km/h',
  msLabel: 'm/s',
  mphLabel: 'mph',
  brozaLabel: '패덤 (Fathom)',
  mLabel: '미터 (m)',
  ftLabel: '피트 (ft)',
  mbarLabel: '밀리바 (mbar)',
  mmhgLabel: 'mmHg',
  inhgLabel: 'inHg',
  atmLabel: '기압 (atm)',
  windSeaLabel: '해상 상태',
  forceLabel: '풍력',
  effectLabel: '영향',
  copyLabel: '값 복사',
};

const faq: NauticalConverterLocaleContent['faq'] = [
  {
    question: '1해리는 몇 킬로미터인가요?',
    answer: '1해리는 정확히 1.852킬로미터, 즉 1852미터입니다. 이 측정값은 지구 표면의 위도 1분(1/60도)에 해당합니다.',
  },
  {
    question: '노트와 시속 킬로미터의 차이는 무엇인가요?',
    answer: '1노트는 시간당 1해리를 이동하는 속도이므로 1.852 km/h와 같습니다. 노트를 km/h로 변환하려면 단순히 1.852를 곱하면 됩니다.',
  },
  {
    question: '바다에서는 왜 킬로미터 대신 해리를 사용하나요?',
    answer: '해리는 위도 1분에 해당하므로 해도와 나침반을 이용한 항해 계산을 크게 단순화해주기 때문입니다. 위도 1분의 변화는 정확히 1해리의 이동과 일치합니다.',
  },
  {
    question: '보포트 풍력 계급이란 무엇인가요?',
    answer: '풍속을 해수면에서 관찰되는 현상과 연관시킨 경험적인 척도입니다. 0(고요함)에서 12(태풍)까지의 등급이 있으며, 연안 및 원양 항해에 필수적입니다.',
  },
  {
    question: '해양 기상학에서는 어떤 기압 단위를 사용하나요?',
    answer: '해양 기상학에서는 주로 밀리바(mbar) 또는 그와 동일한 헥토파스칼(hPa)을 사용합니다. 해수면에서의 표준 대기압은 1013.25 mbar입니다.',
  },
  {
    question: '1패덤은 몇 피트인가요?',
    answer: '1패덤은 정확히 6피트, 즉 1.8288미터입니다. 주로 영어권 국가에서 오래된 해도상의 수심을 표시할 때 사용합니다.',
  },
];

const howTo: NauticalConverterLocaleContent['howTo'] = [
  {
    name: '변환 범주 선택',
    text: '변환하려는 물리량에 따라 거리, 속도, 수심, 기압 중 하나의 탭을 클릭하세요.',
  },
  {
    name: '아무 필드에나 값 입력',
    text: '알고 있는 단위의 숫자를 입력하세요. 다른 모든 단위가 실시간으로 자동 업데이트됩니다.',
  },
  {
    name: '보포트 계급표 참조 (속도)',
    text: '속도 탭에서 속도를 입력하면, 해당 속도에 맞는 보포트 풍력 등급과 예상 해상 상태를 보여주는 카드가 나타납니다.',
  },
  {
    name: '결과 복사하기',
    text: '필드 옆의 복사 버튼을 사용하여 값을 클립보드에 복사할 수 있습니다.',
  },
];

const seo: NauticalConverterLocaleContent['seo'] = [
  {
    type: 'title',
    text: '해양 단위 정밀도의 중요성',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '바다를 항해하는 데는 수세기에 걸친 해양 탐험을 통해 다듬어진 고유한 언어와 측정 체계가 필요합니다. 해양 단위는 역사적 유물이 아니라, 지구의 기하학적 구조 및 항해자의 실질적인 필요에 맞춘 수학적으로 일관된 도구입니다.',
  },
  {
    type: 'paragraph',
    html: '육지에서는 몇 미터의 오차가 심각한 결과를 초래하는 경우가 드물지만, 바다에서의 잘못된 변환은 안전한 투묘와 천퇴(얕은 곳) 좌초를 가르는 차이가 될 수 있습니다. 단위 정밀도는 학문적인 문제가 아니라 항해 그 자체입니다.',
  },
  {
    type: 'paragraph',
    html: '해안에서 멀어지면 시각적 기준이 사라지기 때문에 계산된 위치만이 우리가 행동할 수 있는 유일한 현실이 됩니다. 해리, 킬로미터, 노트, 미터 사이를 정확하게 변환하는 법을 아는 것은 책임감 있는 항해자에게 선택이 아닌 필수입니다.',
  },
  {
    type: 'title',
    text: '왜 킬로미터 대신 해리를 사용하나요?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '해답은 지구의 형상 그 자체에 있습니다. 1<strong>해리</strong>는 정확히 지구 표면의 위도 1분에 해당하며, 이는 1852미터입니다. 각도 측정값과 선형 거리 사이의 이러한 직접적인 대응은 항해에서 해리가 보편적으로 사용되는 핵심 이유입니다.',
  },
  {
    type: 'paragraph',
    html: '이 단위를 사용하면 해동상에서 위도 1분의 변화는 항상 정확히 1해리를 이동한 것과 일치합니다. 이는 추가적인 변환 계수 없이도 위치, 속도, 도착 예정 시간을 계산하는 과정을 엄청나게 단순화해 줍니다.',
  },
  {
    type: 'title',
    text: '해상의 속도: 노트',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>노트</strong>는 시속 1해리와 동일한 속도 단위입니다. 그 이름은 일정한 간격으로 매듭(knot)을 지은 밧줄에 통나무 조각을 매달아 바다에 던진 뒤, 일정 시간 동안 손가락 사이로 빠져나간 매듭의 수를 세어 속도를 측정했던 옛 기술에서 유래했습니다.',
  },
  {
    type: 'paragraph',
    html: '오늘날에는 GPS 위성과 정교한 전자 시스템을 사용하지만, 노트는 여전히 국제 항공 및 해상 항해의 표준 단위로 남아 있습니다. 1노트는 1.852 km/h 또는 0.514 m/s와 같습니다.',
  },
  {
    type: 'title',
    text: '수심과 투묘: 패덤, 미터, 피트',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '해양 세계에서 수심은 단순한 통계가 아닙니다. 안전한 투묘와 좌초 사이의 차이를 의미합니다. 역사적으로 영어권에서는 수심 측정의 주요 단위로 <strong>패덤</strong>(1.8288미터 또는 정확히 6피트)을 사용해 왔습니다.',
  },
  {
    type: 'paragraph',
    html: '하지만 세계화와 기술 발전으로 대부분의 현대 해도와 어군 탐지기에서는 미터 체계를 상시 사용하게 되었습니다. 현대의 항해자는 특히 오래된 해도나 야드-파운드법으로 교정된 계기를 참조할 때 패덤, 미터, 피트 사이를 능숙하게 오갈 수 있어야 합니다.',
  },
  {
    type: 'title',
    text: '기상학 및 대기압',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '선장에게 기압계는 날씨를 알려주는 신탁과 같습니다. <strong>밀리바</strong>(mbar)로 측정되는 대기압은 다가올 기상 변화를 보여주는 가장 신뢰할 수 있는 지표입니다. 기압이 급격히 떨어지는 것은 강풍과 악천후의 도래를 예고합니다.',
  },
  {
    type: 'paragraph',
    html: '기압 변화를 이해하는 것은 모든 항해자에게 매우 중요합니다. 해수면에서의 표준 대기압은 1013.25 mbar(1기압)입니다. 이보다 높은 값은 안정한 날씨를 나타내며, 낮은 값, 특히 기압이 빠르게 하강하는 경우는 잠재적으로 위험한 저기압 시스템의 접근을 경고하는 것입니다.',
  },
  {
    type: 'title',
    text: '풍력 및 해상 상태 척도: 보포트에서 더글러스까지',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '노트 단위의 풍속은 <strong>보포트 풍력 계급</strong>과 연결될 때 실제적인 의미를 갖게 됩니다. 1805년 해군 제독 프랜시스 보포트가 고안한 이 경험적 척도는 풍속을 해수면 및 육상에서 관찰되는 현상과 연관시킵니다.',
  },
  {
    type: 'list',
    items: [
      '<strong>풍력 0-3 (0-10 kn):</strong> 평온한 항해 조건. 초보자나 가족 나들이에 적합.',
      '<strong>풍력 4-5 (11-21 kn):</strong> 요트 항해에 이상적인 바람. 적당한 파도와 흰 물보라.',
      '<strong>풍력 6-7 (22-33 kn):</strong> 된바람에서 강풍에 가까운 상태. 숙련된 기술과 축범(리핑) 권장.',
      '<strong>풍력 8+ (34 kn 이상):</strong> 강풍·폭풍. 적절한 선박을 갖춘 숙련된 항해자 전용.',
    ],
  },
  {
    type: 'paragraph',
    html: '마찬가지로 더글러스 해상 상태 계급은 바다의 상태를 0(거울처럼 잔잔함)에서 9(경이로울 정도로 거침)까지로 분류하여, 항해자가 기상 보고를 바탕으로 수평선 너머의 상황을 예측할 수 있게 해줍니다.',
  },
  {
    type: 'tip',
    title: '안전 요령',
    html: '이 변환기를 사용하여 항해 계획을 세울 때, 실제 상황은 예측과 다를 수 있음을 항상 유념하십시오. 공식 기상 예보를 확인하고, 바다가 급격히 변할 수 있음을 결코 과소평가하지 마십시오.',
  },
  {
    type: 'title',
    text: '오프라인 계획 및 이동성',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '이 툴은 일단 브라우저에 로드되면 인터넷 연결 없이도 작동하도록 설계되어, 통신이 제한될 수 있는 선상에서도 사용하기에 적합합니다. 모든 변환은 서버로 데이터를 전송하지 않고 기기 내에서 로컬로 계산됩니다.',
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
    name: `사용 방법: ${title}`,
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
