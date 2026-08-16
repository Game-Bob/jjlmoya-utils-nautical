import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AnchorScopeLocaleContent } from '../entry';
import type { AnchorScopeUI } from '../ui';

const slug = 'anchor-scope-calculator';
const title = 'アンカーチェーン長および振れ回り半径計算機';
const description =
  '水深、船首乾舷、潮位差、海底の地質に基づいて、安全な停泊に必要なアンカーチェーンの長さ、スコープ比、および振れ回り半径を計算します。';

const ui: AnchorScopeUI = {
  parametersTitle: 'パラメータ設定',
  waterDepthLabel: '海図水深',
  bowHeightLabel: '船首乾舷高',
  tideRangeLabel: '潮位上昇幅',
  boatLengthLabel: '船体全長 (LOA)',
  rodeTypeLabel: 'アンカーロープ種別',
  windConditionLabel: '風速および気象予報',
  seabedTypeLabel: '海底の底質',
  presetProtected: '静穏な入江',
  presetOpen: '開けた沿岸',
  presetStorm: '荒天暴風警報',
  seabedTag: '底質把駐力係数',
  catenaryTag: 'カテナリー曲線減衰',
  unitM: 'm',
  unitFt: 'ft',
  unitMeters: 'メートル (m)',
  unitFeet: 'フィート (ft)',
  allChainOption: 'オールチェーン (重カテナリー)',
  ropeChainOption: 'ロープおよびチェーン複合',
  allRopeOption: 'オールナイロンロープ',
  calmWindOption: '穏やか / 微風 (< 15 kt)',
  moderateWindOption: '順風 (15 - 25 kt)',
  strongWindOption: '強風 / 荒天 (25 - 35 kt)',
  stormWindOption: '暴風雨 (> 35 kt)',
  sandOption: '砂地 (最適な把駐力)',
  mudOption: '泥 / 軟泥 (良好な把駐力)',
  clayOption: '硬質粘土 (極めて良好)',
  gravelOption: '小石 / 砂利 (普通)',
  rockOption: '岩礁 (根掛かりリスク)',
  weedOption: '海草 / 藻場 (把駐力弱)',
  resultsTitle: '停泊分析および寸法',
  scopeRatioLabel: '有効スコープ比',
  totalDepthLabel: '合計垂直高',
  recommendedRodeLabel: '推奨繰出チェーン長',
  horizontalDistanceLabel: '水平到達距離',
  swingRadiusLabel: '推定振れ回り半径',
  minSafeRodeLabel: '平穏時最小限',
  heavyWeatherRodeLabel: '荒天時繰出長',
  statusOptimalTitle: '安全かつ強固な停泊状態',
  statusOptimalDesc: '算出された長さにより十分なカテナリー曲線とアンカーシャンクへの水平牽引力が確保されます。',
  statusCautionTitle: '適正範囲: 風向風速の変化に警戒',
  statusCautionDesc: '中程度の風には十分ですが、波浪やうねりが高まる場合はチェーンを延長してください。',
  statusDangerTitle: '繰出長不足: 走錨の危険あり',
  statusDangerDesc: '危険なスコープ比です。アンカーが上方へ引っ張られ底から抜ける恐れがあります。',
  adviceSand: '砂地は爪が深く食い込みます。アスターンで後進をかけ確実にアンカーを効かせてください。',
  adviceMud: '柔らかい泥地では幅広のフルークとより長いチェーンで硬い層まで到達させる必要があります。',
  adviceClay: '硬質粘土は強力に保持しますが、貫通には鋭利なアンカーチップが必要です。',
  adviceGravel: '小石混じりの海底は波の衝撃で滑りやすいため、チェーン長を最低25パーセント増やしてください。',
  adviceRock: '岩の隙間に挟まる危険があります。回収用のアンカーブイを必ずセットしてください。',
  adviceWeed: '密集した海草はアンカーの貫通を妨げます。エンジン後進で把駐力を慎重に確認してください。',
  catenaryAllChain: 'チェーンの重量がカテナリー曲線を形成し、波の衝撃を吸収して水平牽引を維持します。',
  catenaryRopeChain: '複合ロープは重量不足を補うため最低7対1のスコープ比が必要です。',
  catenaryAllRope: '軽量なロープはアンカーを引き起こさないよう8対1以上の繰り出しが必要です。',
  resetButton: '初期値にリセット',
  visualProfileTitle: 'カテナリー曲線プロファイル',
  waterlineLabel: '喫水線',
  seabedLabel: '海底面',
  anchorLabel: 'アンカー',
  catenaryCurveLabel: 'チェーン懸垂線',
  swingCircleLabel: '振れ回り円',
};

const faq: AnchorScopeLocaleContent['faq'] = [
  {
    question: 'アンカリングにおけるスコープ比とは何ですか？',
    answer: '海中に繰り出したアンカーチェーンやロープの全長と、海底から船首バウローラーまでの合計垂直距離との比率です。',
  },
  {
    question: 'なぜ水深に船首乾舷と潮位差を加算する必要があるのですか？',
    answer: '魚探はキール下の深さのみを表示します。乾舷の高さと満潮時の潮位上昇が加わることで実質垂直距離が大幅に増加します。',
  },
  {
    question: 'チェーンとロープで必要なスコープ比はどう違いますか？',
    answer: '重いチェーンは自重で垂れ下がるため4:1から5:1で済みますが、軽いロープは直線的になるため7:1から10:1が必要です。',
  },
  {
    question: '錨泊時の振れ回り半径はどのように計算しますか？',
    answer: 'ピタゴラスの定理によりチェーンの水平距離を算出し、そこに船体全長および3から5メートルの安全マージンを加算します。',
  },
  {
    question: '海底の底質は把駐力にどのような影響を与えますか？',
    answer: '砂地や粘土は最も強固な把駐力を発揮します。海草や岩場ではチェーンを長く伸ばすか別の錨地を選択してください。',
  },
  {
    question: 'チェーンスナバーロープの役割は何ですか？',
    answer: 'ウインドラスへの衝撃荷重を吸収し、停泊中の金属擦れ音や振動を緩和する役割を果たします。',
  },
];

const howTo: AnchorScopeLocaleContent['howTo'] = [
  {
    name: '海図水深と船首乾舷の測定',
    text: '錨地の水深を確認し、水面から船首バウローラーまでの高さを加算します。',
  },
  {
    name: '予想される潮位上昇の加算',
    text: '潮汐表を確認し、停泊中に予想される最高潮位の上昇幅を加えます。',
  },
  {
    name: 'ロープ種別と予報風速の選択',
    text: 'オールチェーンか複合ロープかを選択し、予報風速に応じた安全係数を設定します。',
  },
  {
    name: 'チェーンの繰出とアンカーの効かせ',
    text: '計算された長さを繰り出し、エンジンを微速後進に入れてアンカーを海底にしっかり効かせます。',
  },
];

const seo: AnchorScopeLocaleContent['seo'] = [
  {
    type: 'title',
    text: '安全なアンカリング計算: チェーン長と振れ回り半径',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '正しいアンカリングは船舶と乗員の安全を確保するための基本です。繰り出し長さの不足は走錨や錨地での衝突事故の最大の原因となります。適切な<strong>スコープ比</strong>を計算することで、夜間や強風下でも安全に錨泊できます。',
  },
  {
    type: 'title',
    text: '合計垂直高さの構成要素',
    level: 3,
  },
  {
    type: 'list',
    items: [
      '<strong>錨地水深:</strong> 測深器の水深に船体の喫水を加えた値。',
      '<strong>船首乾舷高:</strong> 水面からバウローラーまでの垂直距離。',
      '<strong>満潮時の潮位差:</strong> 滞在中の満潮による水面上昇幅。',
    ],
  },
  {
    type: 'title',
    text: '推奨スコープ比の基準表',
    level: 3,
  },
  {
    type: 'table',
    headers: ['索具の構成', '平穏時 (<15 kt)', '順風 (15-25 kt)', '荒天時 (>30 kt)'],
    rows: [
      ['<strong>オールチェーン</strong>', '比率 4:1', '比率 5:1', '比率 7:1'],
      ['<strong>ロープ・チェーン複合</strong>', '比率 5:1', '比率 7:1', '比率 8:1 から 10:1'],
      ['<strong>オールナイロンロープ</strong>', '比率 7:1', '比率 8:1', '比率 10:1 から 12:1'],
    ],
  },
  {
    type: 'tip',
    title: 'ウインドラスの保護対策',
    html: 'アンカーの荷重をウインドラスのジプシーに直接掛けたまま放置しないでください。必ずクリートに係止したスナバーロープを使用してください。',
  },
  {
    type: 'paragraph',
    html: '出航前に予報と実際の海況を確認してください。',
  },
  {
    type: 'paragraph',
    html: '必要な水深に安全な余裕を残して計画します。',
  },
  {
    type: 'paragraph',
    html: '入力値を記録すると、後で同じ計算を再現できます。',
  },
  {
    type: 'paragraph',
    html: '風や潮流が変わる場合は複数の条件を比較します。',
  },
  {
    type: 'paragraph',
    html: 'この計算は計画を助けますが、船上での見張りに代わるものではありません。',
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
    name: `使用方法: ${title}`,
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
