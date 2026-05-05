import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SailAreaUI, SailAreaLocaleContent } from '../index';

const slug = 'sail-area-calculator';
const title = '돛 면적 및 SA/D 비율 계산기';
const description =
  '요트의 총 돛 면적과 배수량 대비 돛 면적 비율(SA/D)을 계산합니다. I, J, P, E 측정치에 기반한 해양 성능 분석.';

const ui: SailAreaUI = {
  hullSectionLabel: '선체 데이터',
  totalMassLabel: '배수량',
  rigSystemLabel: '리그',
  intendedUseLabel: '용도',
  rigGeometryLabel: '리그 기하학',
  sailConfigLabel: '리그 유형',
  genoaOverlapLabel: '제노아 오버랩',
  foqueLabel: '지브',
  genovaLabel: '제노아',
  sadRatioLabel: 'SA/D 비율',
  totalAreaLabel: '총 면적',
  performanceLabel: '성능',
  sloopLabel: '슬루프 (단일 마스트)',
  cutterLabel: '커터 (이중 헤드세일)',
  ketchLabel: '케치 (이단 마스트)',
  cruiserLabel: '크루저',
  performanceTypeLabel: '성능 유형',
  racerLabel: '레이서',
  exportPdfLabel: '기술 보고서 생성',
};

const faq: SailAreaLocaleContent['faq'] = [
  {
    question: '왜 내 배는 약한 바람에서 느린가요?',
    answer: 'SA/D 비율이 15 미만일 가능성이 높습니다. 이는 무게 대비 돛 면적이 작은 중배수량 선박임을 나타냅니다. 이런 배들은 활발하게 항해하기 위해 12노트 이상의 바람이 필요합니다.',
  },
  {
    question: '성능을 높이기 위해 물 탱크를 비워야 할까요?',
    answer: '네, 배를 가볍게 하는 것은 실제 배수량을 줄여 SA/D 비율을 직접적으로 개선합니다. 물과 연료 탱크를 비우면 배수량을 수백 킬로그램 줄일 수 있어 비율을 유의미하게 높일 수 있습니다.',
  },
  {
    question: '돛의 로치(Roach)란 무엇인가요?',
    answer: '로치는 메인세일의 리치(뒤쪽 가장자리)에 있는 볼록한 곡선 부분을 말합니다. 이는 P와 E로 정의되는 기본 기하학적 삼각형 너머의 추가적인 면적을 제공합니다. 레이싱 보트는 대개 리지드 배튼을 사용한 공격적인 로치를 가지고 있습니다.',
  },
  {
    question: '내 배의 실제 배수량은 어떻게 측정하나요?',
    answer: '가장 신뢰할 수 있는 방법은 만재 배수량(모든 비품, 물, 연료 및 승무원이 탑승한 상태)을 사용하는 것입니다. 건조사 매뉴얼의 경하 배수량은 보통 낙관적인 수치입니다. 일반적인 항해 조건에서의 실제 배수량을 사용하세요.',
  },
  {
    question: '내 배의 I, J, P, E 측정값은 어디서 찾을 수 있나요?',
    answer: '선주 매뉴얼, ORC 또는 IRC 레이팅 증명서, 혹은 클래스 증명서 문서에서 찾을 수 있습니다. 줄자로 배에서 직접 측정하거나 건조사에 문의하여 확인할 수도 있습니다.',
  },
];

const howTo: SailAreaLocaleContent['howTo'] = [
  {
    name: '리그 유형 선택',
    text: '슬루프(단일 마스트), 커터(지브 및 스테이세일), 또는 케치(미즌 마스트) 중 선택하세요. 이는 총 돛 면적 계산 방식을 결정합니다.',
  },
  {
    name: '배수량 입력',
    text: '배의 실제 만재 배수량(kg 또는 lbs)을 사용하십시오. 이 수치는 SA/D 비율 계산의 핵심입니다.',
  },
  {
    name: '리그 기하학 측정',
    text: 'P(마스트 높이), E(붐 길이), I(앞삼각형 높이), J(앞삼각형 밑변) 측정값을 미터 또는 피트 단위로 입력하세요.',
  },
  {
    name: '제노아 오버랩 조정',
    text: '슬라이더를 움직여 제노아 오버랩을 지정하세요. 100%는 오버랩이 없는 지브, 130%는 표준 제노아, 155%는 대형 오버랩 제노아입니다.',
  },
  {
    name: 'SA/D 비율 해석',
    text: '16에서 20 사이의 비율은 균형 잡힌 크루저입니다. 20을 넘으면 약한 바람에서 매우 활발하게 움직이지만 바람이 강해지면 숙련된 조종이 필요합니다.',
  },
];

const seo: SailAreaLocaleContent['seo'] = [
  {
    type: 'title',
    text: '돛 면적 계산기: 성능 및 비율 완벽 가이드',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '돛 면적은 모든 범선의 공기역학적 엔진입니다. 배가 얼마나 많은 바람 에너지를 포착할 수 있는지를 결정하며, 배수량과 결합하여 느긋한 크루저가 될지 예민한 레이싱 머신이 될지 그 성격을 규정합니다. 이 값을 올바르게 계산하는 것은 요트의 거동을 이해하는 첫 걸음입니다.',
  },
  {
    type: 'paragraph',
    html: '항해는 돛에 가해지는 바람의 힘과 선체에 가해지는 물의 저항 사이의 끊임없는 춤과 같습니다. <strong>돛 면적 / 배수량 비율(SA/D)</strong>은 이 관계를 하나의 숫자로 포착하여 길이와 배수량이 다른 선박들을 대등하게 비교할 수 있게 해줍니다.',
  },
  {
    type: 'stats',
    items: [
      { label: '이상적인 크루저 비율', value: '15-18', icon: 'mdi:anchor' },
      { label: '레이싱 보트', value: '+24', icon: 'mdi:sailing' },
      { label: '오차 범위', value: '5-10%', icon: 'mdi:alert-circle-outline' },
    ],
    columns: 3,
  },
  {
    type: 'title',
    text: 'SA/D 비율은 어디에 사용되나요?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>SA/D 비율</strong>은 출항 전 배의 거동을 예측할 수 있게 해주는 진단 도구입니다. 낮은 비율은 튼튼하고 안전하지만 약한 바람에서 느린 배임을 나타내며, 높은 비율은 속도와 "날아가는 듯한" 느낌을 제공하지만 바람이 강해질 때 더 큰 기술을 요구합니다. 어느 쪽이 더 우월한 것이 아니라, 의도하는 항해 유형에 따라 선택이 달라집니다.',
  },
  {
    type: 'title',
    text: 'SA/D 비율 참조표',
    level: 4,
  },
  {
    type: 'table',
    headers: ['비율', '선박 유형', '해상 거동'],
    rows: [
      ['14 미만', '중배수량 / 화물선', '안정적이지만 느림, 지속적인 바람 필요'],
      ['14 - 16.5', '원양 항해용 크루저', '균형 잡히고 편안함, 풍상 성능 양호'],
      ['16.5 - 20', '표준형 마리나 크루저', '산들바람에도 활발함, 제어 용이, 다목적'],
      ['20 - 25', '퍼포먼스 크루저 / 스포츠', '빠르고 도전적임, 약한 바람에서 흥미로움'],
      ['25 초과', '레이서 / 익스트림 스포츠', '매우 빠르고 예민함, 숙련된 팀 필요'],
    ],
  },
  {
    type: 'title',
    text: '측정치 기술 용어 사전 (I, J, P, E)',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'I (앞삼각형 높이)',
        definition: '덱에서 마스트의 지브 할야드 부착점까지의 수직 거리. 앞삼각형의 높이를 규정합니다.',
      },
      {
        term: 'J (앞삼각형 밑변)',
        definition: '마스트에서 선수(Stem)까지의 수평 거리. 헤드세일이 설치되는 앞삼각형의 밑변을 규정합니다.',
      },
      {
        term: 'P (마스트 높이)',
        definition: '덱에서 마스트 상단의 메인세일 할야드 시브까지의 거리. 메인세일의 높이를 규정합니다.',
      },
      {
        term: 'E (붐 길이)',
        definition: '마스트에서 붐 끝의 메인세일 클루까지의 거리. 메인세일의 밑변을 규정합니다.',
      },
    ],
  },
  {
    type: 'title',
    text: '항해 자격 시험 계산 (Yachtmaster)',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '돛 면적 계산과 SA/D 비율은 <strong>Yachtmaster</strong> 및 연안 스키퍼 시험 교육과정의 일부입니다. 리그 기하학과 배수량의 관계를 이해하는 것은 제때 리핑하기, 적절한 제노아 선택하기, 혹은 돌풍 전 배의 거동 예측하기 등 해상 안전 결정을 내리는 데 필수적입니다.',
  },
  {
    type: 'tip',
    title: '뒷바람용 돛과 안전성',
    html: '외양 항해나 장거리 항해의 경우, SA/D 비율 16에서 18 사이가 속도와 안전성 사이의 최적의 균형을 제공합니다. 비율이 22를 넘는 배들은 보포트 계급 4-5 정도의 바람에서도 리핑이 필요할 수 있습니다.',
  },
  {
    type: 'title',
    text: '제노아 오버랩은 성능에 어떤 영향을 주나요?',
    level: 4,
  },
  {
    type: 'paragraph',
    html: '<strong>제노아</strong>는 돛의 끝(Clew)이 마스트 뒤쪽에 위치하여 메인세일과 "중첩(Overlap)"되는 가장 큰 헤드세일입니다. 오버랩 퍼센트는 라프(Luff)에 대한 수선(LP)이 J 길이에 비해 얼마나 긴지를 나타냅니다. 150% 제노아는 J의 150%에 해당하는 LP를 가져, 일반적인 지브보다 훨씬 큰 면적을 제공합니다.',
  },
  {
    type: 'comparative',
    items: [
      {
        title: '데크론 (크루징용)',
        description: '크루징용 돛의 클래식한 소재. 튼튼하고 관리가 쉽습니다.',
        points: [
          '높은 내구성과 UV 저항성',
          '낮은 유지 관리 비용',
          '무게가 더 나가고 하중 하에서 늘어남',
          '연안 및 원양 크루징에 이상적',
        ],
      },
      {
        title: '라미네이트 (레이싱용)',
        description: '케블라, 스펙트라, 다이니마와 같은 첨단 기술 소재.',
        highlight: true,
        points: [
          '최소한의 늘어남: 최대의 공기역학적 효율',
          '데크론보다 훨씬 가벼움',
          '높은 비용 및 짧은 수명',
          'SA/D 비율 > 22인 선박에 필수적',
        ],
      },
    ],
    columns: 2,
  },
  {
    type: 'title',
    text: '항해의 물리 및 안정성',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '돛 면적은 추진력을 발생시키지만 배를 기울어지게 하는 <strong>힐링 모멘트(Heeling moment)</strong>도 생성합니다. 안정성은 배가 이 기울어지는 힘에 대항할 수 있는 복원 모멘트(Righting moment)로 측정됩니다. 밸러스트가 적은 배에서 높은 SA/D 비율은 위험할 수 있지만, 깊고 무거운 킬을 가진 배에서는 같은 비율이라도 완벽하게 제어 가능합니다.',
  },
  {
    type: 'paragraph',
    html: '실제 가용 출력을 계산하기 위해 조선 설계사들은 SA/D와 함께 <strong>배수량-길이 비율(DLR)</strong>을 자주 사용합니다. 두 비율을 함께 보면 배가 "비대한 거북이"인지 "레이싱용 평면 활주선"인지 정확히 파악할 수 있습니다.',
  },
  {
    type: 'tip',
    title: '안정성과 안전',
    html: 'SA/D를 단독으로 평가하지 마십시오. 비율이 22이면서 복원 각도가 90도인 요트가 비율이 18이면서 복원 각도가 60도인 요트보다 훨씬 안전합니다. 항상 본인 배의 안정성 곡선을 확인하십시오.',
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
    name: `사용 방법: ${title}`,
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
