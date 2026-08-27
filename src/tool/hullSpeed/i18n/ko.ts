import { bibliography } from '../bibliography';
import type { HullSpeedLocaleContent, HullSpeedUI } from '../index';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

const slug = 'sailboat-hull-speed-calculator';
const title = '세일보트 선체속도 계산기';
const description =
  '흘수선 길이로 이론 선체속도를 구하고 로그와 비교하며, 배수형 선체가 제 선수파를 타고 오르는 순간을 봅니다.';

const ui: HullSpeedUI = {
  metric: '미터법',
  imperial: '야드파운드법',
  unitGroup: '단위',
  sceneLabel: '흘수선과 선수파',
  hullSpeedLabel: '선체속도',
  knotsUnit: 'kn',
  kmhUnit: 'km/h',
  mphUnit: 'mph',
  ratioLabel: 'S/L',
  froudeLabel: 'Fr',
  lwlLabelMetric: '흘수선 길이',
  lwlLabelImperial: '흘수선 길이',
  lwlUnitM: 'm',
  lwlUnitFt: 'ft',
  observedLabel: '로그 속도',
  observedHint: '이론 파를 그리려면 0으로 두세요. 아직 골에 앉아 있는지 보려면 로그를 입력하세요.',
  stretchHint: '선체를 끌어 흘수선을 늘리세요',
  hullKindLabel: '선체 형상',
  displacement: '배수형',
  semi: '반배수형',
  planing: '활주형',
  boatsLabel: '흘수선 예시',
  dinghy: '딩기',
  daysailer: '데이세일러',
  cruiser: '크루저',
  bluewater: '외양',
  workboat: '작업선',
  bandBelow: '아직 짧은 파',
  bandNear: '파 장벽에 가까움',
  bandAt: '선수파를 타고 있음',
  bandAbove: '파를 오르려 함',
  bandPlane: '활주 중, 선체속도를 넘김',
  planingNote:
    '활주형 선체는 이 파를 뒤에 남길 수 있습니다. 선체속도는 기준이지 벽이 아닙니다.',
  displacementNote:
    '배수형 선체는 제 항적을 따라잡으면 값이 가파르게 오릅니다. GPS 목표가 아니라 실용 천장으로 보세요.',
  semiNote:
    '반배수형은 출력이 충분하면 고전 비를 조금 넘을 수 있지만 저항이 급히 오릅니다.',
  waveLegend: '선수파',
  waterLegend: '흘수선',
  markLegend: '선체속도',
  faqTitle: '선체속도 질문',
  bibliographyTitle: '참고문헌',
};

const faq: HullSpeedLocaleContent['faq'] = [
  {
    question: '세일보트의 선체속도는 무엇인가요?',
    answer:
      '배수형 선체가 제 흘수선과 거의 같은 길이의 선수파를 끌고 가는 속도입니다. 항해 단위로는 흘수선 길이(피트)의 제곱근에 1.34를 곱해 어림합니다. 임계 속도이지 단단한 물리 정지는 아닙니다.',
  },
  {
    question: '선체속도는 어떻게 계산하나요?',
    answer:
      '흘수선을 피트로 바꾸고 제곱근을 취한 뒤 1.34를 곱해 노트를 얻습니다. 10 m 흘수선은 약 32.8 ft이므로 대략 7.7 kn입니다. 같은 점은 프루드 수 0.40 근처에 해당합니다.',
  },
  {
    question: '활주선에도 선체속도가 적용되나요?',
    answer:
      '식은 배수 모드에 머물렀을 때 선체가 만들 파를 여전히 설명합니다. 활주형과 많은 반배수형은 그 파 위로 오르도록 설계됩니다. 숫자는 기준으로 쓰고 선체 형상 설명을 읽으세요.',
  },
  {
    question: '흘수선 길이와 전장 중 무엇을 쓰나요?',
    answer:
      '실제로 파를 만드는 잠긴 길이인 흘수선 길이(LWL)를 쓰세요. 전장, 선수돌이, 오버행은 파장을 정하지 않습니다. 안내책 LOA가 아니라 물속의 LWL을 재세요.',
  },
];

const howTo: HullSpeedLocaleContent['howTo'] = [
  {
    name: '흘수선을 늘리기',
    text: '선체를 끌고, 레일을 움직이고, 딩기부터 작업선까지 고르세요. 선체속도는 그 길이(피트) 제곱근의 1.34배입니다.',
  },
  {
    name: '선체 형상 고르기',
    text: '배수형, 반배수형, 활주형은 킬을 바꾸고 배가 제 파에서 빠져나올 수 있는지도 바꿉니다.',
  },
  {
    name: '골 읽기',
    text: '선체속도에서는 선수파와 선미파가 흘수선 하나만큼 떨어지고 배는 골에 앉습니다. 그것이 장벽입니다.',
  },
  {
    name: '로그 비교하기',
    text: '대물 속도를 넣으세요. 더 짧은 파는 아직 싸게 민다는 뜻입니다. 더 긴 파는 골을 오르고 있다는 뜻입니다.',
  },
];

const seo: HullSpeedLocaleContent['seo'] = [
  {
    type: 'title',
    text: '선체속도가 실제로 말하는 것',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '배수형 선체는 선수와 선미에서 파를 밀어냅니다. 그 마루가 대략 흘수선 하나만큼 떨어지면 배는 제 항적과 함께 갑니다. 여분 출력은 속력을 사기보다 물을 쌓습니다. 선원이 선체속도라 부르는 상태입니다.',
  },
  {
    type: 'paragraph',
    html: '이 계산기는 피트 흘수선 제곱근당 1.34노트의 흔한 아마추어 비를 씁니다. 가늘고 긴 선체는 조금 높고 바지선은 낮습니다. 결과는 학습 표시로 보고 실제 로그와 비교하세요.',
  },
  {
    type: 'title',
    text: '계산한 흘수선 예',
    level: 2,
  },
  {
    type: 'table',
    headers: ['흘수선', '선체속도', '전형적인 배'],
    rows: [
      ['4.2 m / 13.8 ft', '5.0 kn', '딩기'],
      ['6.5 m / 21.3 ft', '6.2 kn', '데이세일러'],
      ['10 m / 32.8 ft', '7.7 kn', '가족 크루저'],
      ['13.5 m / 44.3 ft', '8.9 kn', '외양 요트'],
      ['18 m / 59.1 ft', '10.3 kn', '소형 작업선'],
    ],
  },
  {
    type: 'title',
    text: '선수파 읽는 법',
    level: 2,
  },
  {
    type: 'list',
    items: [
      '표시 아래에서는 파가 짧고 배는 아직 싸게 밀립니다.',
      '표시 근처에서는 선수파가 가팔라지고 연료나 돛이 사는 속력이 줄어듭니다.',
      '표시 위에서는 파장이 LWL과 맞습니다. 배수형은 고전 장벽에 있습니다.',
      '그보다 위에서는 배수형이 항적을 오릅니다. 활주형은 이미 떠 있을 수 있습니다.',
    ],
  },
  {
    type: 'tip',
    title: 'LWL을 재고 LOA는 쓰지 마세요',
    html: '안내책 길이는 오버행을 포함합니다. 파가 신경 쓰는 것은 잠긴 흘수선입니다. LOA만 있으면 계산된 선체속도는 낙관적입니다.',
  },
  {
    type: 'title',
    text: '한 문장으로 프루드 수',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '선체속도는 프루드 수 0.40 근처를 다루기 쉽게 싼 값입니다. 속력을 중력 곱하기 길이의 제곱근으로 나눈 것입니다. 그래서 선체 형상이 같아도 더 긴 흘수선이 더 빠릅니다. 배수 한계를 올리는 깨끗한 방법은 LWL을 늘리는 것이지 마력을 더하는 것이 아닙니다.',
  },
];

const schemas: HullSpeedLocaleContent['schemas'] = [
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
    name: `${title} 사용법`,
    step: howTo.map((step) => ({
      '@type': 'HowToStep',
      name: step.name,
      text: step.text,
    })),
  } as WithContext<HowTo>,
];

export const content: HullSpeedLocaleContent = {
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
