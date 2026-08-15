import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AnchorScopeLocaleContent } from '../entry';
import type { AnchorScopeUI } from '../ui';

const slug = 'anchor-scope-calculator';
const title = '닻줄 길이 및 선회 반경 계산기';
const description =
  '수심, 선수 건현, 조석 간만의 차 및 해저 지질을 기반으로 안전한 묘박에 필요한 최적의 닻줄 길이, 스코프 비율 및 선회 반경을 계산합니다.';

const ui: AnchorScopeUI = {
  parametersTitle: '파라미터 설정',
  waterDepthLabel: '해도 수심',
  bowHeightLabel: '선수 건현 높이',
  tideRangeLabel: '조위 상승폭',
  boatLengthLabel: '선체 전장 (LOA)',
  rodeTypeLabel: '닻줄 종류',
  windConditionLabel: '풍속 및 기상 예보',
  seabedTypeLabel: '해저 저질',
  presetProtected: '평온한 만',
  presetOpen: '개방된 연안',
  presetStorm: '폭풍 경보',
  seabedTag: '저질 파지력 계수',
  catenaryTag: '현수선 완충 효과',
  unitM: 'm',
  unitFt: 'ft',
  unitMeters: '미터 (m)',
  unitFeet: '피트 (ft)',
  allChainOption: '전체 체인 (중현수선)',
  ropeChainOption: '로프 및 체인 혼합',
  allRopeOption: '전체 나일론 로프',
  calmWindOption: '평온 / 미풍 (< 15 kt)',
  moderateWindOption: '온화한 바람 (15 - 25 kt)',
  strongWindOption: '강풍 / 풍랑 (25 - 35 kt)',
  stormWindOption: '거친 폭풍 (> 35 kt)',
  sandOption: '모래 (최적 파지력)',
  mudOption: '진흙 / 펄 (우수한 파지력)',
  clayOption: '단단한 점토 (매우 우수)',
  gravelOption: '자갈 / 조약돌 (보통)',
  rockOption: '암초 (걸림 위험)',
  weedOption: '해조류 (파지력 낮음)',
  resultsTitle: '묘박 분석 및 제원',
  scopeRatioLabel: '유효 스코프 비율',
  totalDepthLabel: '총 수직 높이',
  recommendedRodeLabel: '권장 닻줄 방출 길이',
  horizontalDistanceLabel: '수평 도달 거리',
  swingRadiusLabel: '추정 선회 반경',
  minSafeRodeLabel: '평온 시 최소 길이',
  heavyWeatherRodeLabel: '악천후 방출 길이',
  statusOptimalTitle: '안전하고 안정적인 정박',
  statusOptimalDesc: '계산된 길이는 완충 현수선과 닻 자루에 대한 수평 인장력을 완벽하게 보장합니다.',
  statusCautionTitle: '적정 범위: 기상 변화 주시',
  statusCautionDesc: '온화한 기상에 적합합니다. 파도나 바람이 거세지면 체인을 추가로 내어주십시오.',
  statusDangerTitle: '방출 길이 부족: 주묘 위험',
  statusDangerDesc: '위험한 스코프 비율입니다. 닻이 위로 들려 해저에서 빠질 수 있습니다.',
  adviceSand: '모래는 닻의 발톱이 깊게 박힙니다. 후진 엔진으로 닻을 단단히 세팅하십시오.',
  adviceMud: '부드러운 펄에서는 넓은 면적의 플루크와 더 긴 체인으로 단단한 층에 도달해야 합니다.',
  adviceClay: '점토는 파지력이 강하지만 관통을 위해 날카로운 닻날이 요구됩니다.',
  adviceGravel: '자갈 바닥은 충격에 미끄러지기 쉬우므로 체인 길이를 최소 25퍼센트 늘리십시오.',
  adviceRock: '암초에 걸릴 위험이 큽니다. 회수를 위해 반드시 부표줄을 연결하십시오.',
  adviceWeed: '울창한 해조류는 닻이 박히는 것을 방해합니다. 후진으로 파지력을 세밀하게 점검하십시오.',
  catenaryAllChain: '체인의 자체 무게가 현수선을 형성하여 충격을 흡수하고 수평 당김을 유지합니다.',
  catenaryRopeChain: '혼합 로프는 부족한 중량을 보완하기 위해 최소 7대 1의 비율이 필요합니다.',
  catenaryAllRope: '가벼운 로프는 닻자루가 들리지 않도록 8대 1 이상의 스코프를 유지하십시오.',
  resetButton: '초기화',
  visualProfileTitle: '현수선 프로파일',
  waterlineLabel: '흘수선',
  seabedLabel: '해저면',
  anchorLabel: '닻',
  catenaryCurveLabel: '체인 현수선',
  swingCircleLabel: '선회원',
};

const faq: AnchorScopeLocaleContent['faq'] = [
  {
    question: '묘박 시 스코프 비율이란 무엇인가요?',
    answer: '해저면에서 선수 롤러까지의 총 수직 높이와 바다에 방출한 닻줄 전체 길이 간의 수학적 비율입니다.',
  },
  {
    question: '수심에 선수 건현과 조위를 더해야 하는 이유는?',
    answer: '수심계는 선저 아래의 깊이만 측정합니다. 선수 롤러 높이와 만조 수위가 더해져 실제 수직 거리가 대폭 증가합니다.',
  },
  {
    question: '체인과 로프의 스코프 비율 차이는?',
    answer: '무거운 체인은 현수선 곡선을 형성하여 4:1~5:1로 충분하지만, 가벼운 로프는 7:1~10:1이 요구됩니다.',
  },
  {
    question: '선회 반경은 어떻게 계산하나요?',
    answer: '피타고라스 정리로 수평 거리를 구한 후 선체 전장과 3~5미터의 안전 여유를 더해 산출합니다.',
  },
  {
    question: '해저 저질이 파지력에 미치는 영향은?',
    answer: '모래와 점토가 가장 견고한 파지력을 제공합니다. 해조류나 자갈밭에서는 닻줄을 더 길게 내어야 합니다.',
  },
  {
    question: '스너버 로프의 기능은 무엇인가요?',
    answer: '양묘기에 가해지는 파도의 충격 하중을 흡수하고 체인의 덜컹거림 소음을 제거합니다.',
  },
];

const howTo: AnchorScopeLocaleContent['howTo'] = [
  {
    name: '해도 수심 및 선수 높이 측정',
    text: '정박지의 수심을 확인하고 수면에서 선수 롤러까지의 높이를 더합니다.',
  },
  {
    name: '조위 상승폭 반영',
    text: '조석표를 확인하여 정박 시간 동안의 최고 만조 수위 상승분을 추가합니다.',
  },
  {
    name: '닻줄 종류 및 예상 풍속 선택',
    text: '올체인 또는 혼합 여부를 선택하고 기상 예보에 맞춰 안전 계수를 조정합니다.',
  },
  {
    name: '닻줄 방출 및 닻 세팅',
    text: '계산된 길이만큼 닻줄을 내어준 뒤 엔진 후진으로 닻을 단단히 고정시킵니다.',
  },
];

const seo: AnchorScopeLocaleContent['seo'] = [
  {
    type: 'title',
    text: '안전한 묘박 계산: 닻줄 길이와 선회 반경',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '올바른 묘박은 선박과 승조원의 안전을 보장하는 핵심 기술입니다. 부족한 닻줄 길이는 주묘 및 야간 충돌 사고의 주원인입니다. 정확한 <strong>스코프 비율</strong>을 유지함으로써 강풍 속에서도 안전하게 묘박할 수 있습니다.',
  },
  {
    type: 'title',
    text: '총 수직 높이의 계산 요소',
    level: 3,
  },
  {
    type: 'list',
    items: [
      '<strong>정박지 수심:</strong> 음향 측심기 수심에 선박의 흘수를 더한 값.',
      '<strong>선수 건현 높이:</strong> 수면에서 선수 롤러까지의 수직 거리.',
      '<strong>최대 조위 상승폭:</strong> 만조 시 증가하는 해수면 높이.',
    ],
  },
  {
    type: 'title',
    text: '권장 스코프 비율 기준표',
    level: 3,
  },
  {
    type: 'table',
    headers: ['닻줄 구성', '평온한 날씨 (<15 kt)', '온화한 바람 (15-25 kt)', '거친 폭풍 (>30 kt)'],
    rows: [
      ['<strong>전체 체인</strong>', '4:1 비율', '5:1 비율', '7:1 비율'],
      ['<strong>로프-체인 혼합</strong>', '5:1 비율', '7:1 비율', '8:1 ~ 10:1 비율'],
      ['<strong>전체 나일론 로프</strong>', '7:1 비율', '8:1 비율', '10:1 ~ 12:1 비율'],
    ],
  },
  {
    type: 'tip',
    title: '양묘기 보호 수칙',
    html: '닻줄의 하중을 양묘기 지프시에 직접 걸어두지 마십시오. 항상 볼라드에 고정된 스너버 로프를 체결하십시오.',
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
    name: `사용 설명서: ${title}`,
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
