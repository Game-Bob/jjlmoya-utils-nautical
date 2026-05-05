import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { UnderKeelUI, UnderKeelLocaleContent } from '../index';

const slug = 'under-keel-clearance-calculator';
const title = 'キール下余裕 UKC 計算機';
const description =
  '浅瀬、運河、または喫水制限のある地点を通過するための安全な時間枠を計算します。自船の喫水、海図の水深、および潮汐データを入力して、正確な航行可能時間を確認してください。';

const ui: UnderKeelUI = {
  parametersLabel: 'パラメータ',
  boatDraftLabel: '船の喫水',
  chartDepthLabel: '海図水深',
  safetyMarginLabel: '安全余裕',
  highTideLabel: '満潮',
  lowTideLabel: '干潮',
  metersLabel: 'メートル',
  passWindowLabel: '航行可能時間',
  neededLabel: '必要な水深',
  tideRequiredLabel: '必要な最小潮高',
  statusNeverLabel: 'このサイクルでは航行不能',
  statusAlwaysLabel: 'このサイクル中ずっと航行可能',
  statusFromLabel: '航行開始:',
  statusUntilLabel: '航行終了:',
  bottomLabel: '海底部',
};

const faq: UnderKeelLocaleContent['faq'] = [
  {
    question: 'キール下余裕（UKC）計算とは具体的に何ですか？',
    answer: '喫水制限のある場所（砂州や狭い水路など）において、自船の喫水に対して安全に航行できるだけの十分な水深があるかどうか、またいつ航行可能になるかを計算することです。',
  },
  {
    question: '推奨される安全余裕はどれくらいですか？',
    answer: 'レジャーボートの場合、通常は船の喫水より0.5～1メートル以上の最小安全余裕を確保することが推奨されます。この余裕は、潮汐計算の誤差、気圧変化、予期せぬうねりなどを補うためのものです。',
  },
  {
    question: 'うねりはキール下余裕にどう影響しますか？',
    answer: 'うねりは船体に上下の揺れ（ヒービング）を発生させます。波の谷の部分では、船体は静止時よりも海底に近づきます。うねりのある場所を通過する場合は、安全余裕を大幅に増やす必要があります。',
  },
  {
    question: '海図水深（chart sounding）とは何ですか？',
    answer: '基本水準面（Chart Datum）におけるその地点の最低水深のことです。これにその瞬間の潮高を加えることで、利用可能な全水深が算出されます。',
  },
  {
    question: '海図の下線付きの水深の数字はどういう意味ですか？',
    answer: 'その地点が基本水準面の時に干出する（水面上に露出する）ことを意味します。そこを通過するには、その数字より大きな潮高が必要になります。',
  },
  {
    question: 'スクワット現象（Squat effect）とは何ですか？',
    answer: '浅い水路を航行する船舶が、流体力学的な影響によって静止時よりも沈み込む現象のことです。速度が速いほど、動的な喫水が増加し、キール下の水深が減少します。',
  },
];

const howTo: UnderKeelLocaleContent['howTo'] = [
  {
    name: '喫水と安全余裕の定義',
    text: '船の最大喫水を測定し、慎重な安全余裕（例：0.5m）を加えます。',
  },
  {
    name: '海図水深を確認する',
    text: '航行しようとしている重要地点の海図水深値を確認します。底質が砂地か岩場かも考慮してください。',
  },
  {
    name: '潮汐データを入力する',
    text: '最寄りの公式潮汐暦から、満潮と干潮の時刻および潮高を使用します。',
  },
  {
    name: '航行可能時間を確認する',
    text: 'ツールは、安全に航行するために十分な水深が得られる正確な時間帯を表示します。',
  },
];

const seo: UnderKeelLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'キール下余裕：浅瀬を安全に航行するために',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '航海計画は、海図にコースを引くだけでは終わりません。沿岸航行者にとって最も重要な計算の一つが <strong>キール下余裕（Under-Keel Clearance）</strong> です。座礁することなく重要地点を通過するために、いつ十分な水深が得られるかを知る必要があります。',
  },
  {
    type: 'title',
    text: '海図水深と潮汐の関係は？',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '海図上の水深は <strong>基本水準面（Chart Datum）</strong> を基準としています。これは通常、潮が最も下がるレベルを基準にしています。ある瞬間に船が見つける実際の水深は、その海図水深とその瞬間の潮高の合計になります。',
  },
  {
    type: 'title',
    text: '計算の要素：喫水と余裕',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: '最大積載喫水', definition: '満載状態で船の最低部（キール）が達する深さ。' },
      { term: '海図水深', definition: '通過したい地点の海図上の数字。下線付きの場合、基本水準面では干出します。' },
      { term: '安全余裕', definition: '喫水の上に確保する、少なくとも0.5～1メートルの追加の余裕。' },
    ],
  },
  {
    type: 'title',
    text: '航行可能時間はどのように決まるか？',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '計算機は、水位が「喫水＋選択した安全余裕」を超える正確な瞬間を特定します。その時点から <strong>航行可能時間</strong> が始まります。下げ潮の場合、水位が安全限界を下回るまで、いつまで航行が許可されるかを表示します。',
  },
  {
    type: 'title',
    text: '実際の航行に影響を与える要因',
    level: 3,
  },
  {
    type: 'table',
    headers: ['要因', '影響', '推奨事項'],
    rows: [
      ['<strong>うねり</strong>', '船体下の水深を減少させる', '安全余裕を大幅に増やす'],
      ['<strong>スクワット現象</strong>', '吸い込みによって喫水が増加する', '危険な場所では速度を落とす'],
      ['<strong>砂地</strong>', '嵐によって深さが変化する', '測深儀を常時作動させ、追加の余裕を持つ'],
    ],
  },
  {
    type: 'tip',
    title: '航海のヒント',
    html: '航行可能時間が非常に短い場合や天候が悪化した場合は、潮が必要な高さまで上がるまで、沖合の深い場所で待機するのが最も賢明な判断です。',
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
    name: `使い方： ${title}`,
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
