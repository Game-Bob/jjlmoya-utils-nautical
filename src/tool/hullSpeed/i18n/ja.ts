import { bibliography } from '../bibliography';
import type { HullSpeedLocaleContent, HullSpeedUI } from '../index';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

const slug = 'sailboat-hull-speed-calculator';
const title = '帆船の船体速度計算機';
const description =
  '喫水線長さから理論上の船体速度を求め、実測のログと比べ、排水型船体が自分の船首波に乗り上げる瞬間を見ます。';

const ui: HullSpeedUI = {
  metric: 'メートル法',
  imperial: 'ヤードポンド法',
  unitGroup: '単位',
  sceneLabel: '喫水線と船首波',
  hullSpeedLabel: '船体速度',
  knotsUnit: 'kn',
  kmhUnit: 'km/h',
  mphUnit: 'mph',
  ratioLabel: 'S/L',
  froudeLabel: 'Fr',
  lwlLabelMetric: '喫水線長さ',
  lwlLabelImperial: '喫水線長さ',
  lwlUnitM: 'm',
  lwlUnitFt: 'ft',
  observedLabel: 'ログ速度',
  observedHint: '理論波を描くなら 0 のまま。くぼみに座っているかを見るならログを入力します。',
  stretchHint: '船体をドラッグして喫水線を伸ばす',
  hullKindLabel: '船体形状',
  displacement: '排水型',
  semi: '半排水型',
  planing: '滑走型',
  boatsLabel: '喫水線の例',
  dinghy: 'ディンギー',
  daysailer: 'デイセーラー',
  cruiser: 'クルーザー',
  bluewater: '外洋',
  workboat: '作業船',
  bandBelow: 'まだ短い波',
  bandNear: '波の壁に接近',
  bandAt: '船首波に乗っている',
  bandAbove: '波を登ろうとしている',
  bandPlane: '滑走中、船体速度を超えている',
  planingNote:
    '滑走型はこの波を後ろに残せます。船体速度は目安であり壁ではありません。',
  displacementNote:
    '排水型は自分の航跡に追いつくと急に高くつきます。GPS目標ではなく実用の天井として扱ってください。',
  semiNote:
    '半排水型は十分な出力があれば古典比を少し超えられますが、抵抗は急に上がります。',
  waveLegend: '船首波',
  waterLegend: '喫水線',
  markLegend: '船体速度',
  faqTitle: '船体速度の質問',
  bibliographyTitle: '参考文献',
};

const faq: HullSpeedLocaleContent['faq'] = [
  {
    question: '帆船の船体速度とは何ですか?',
    answer:
      '排水型船体が、ほぼ自分の喫水線と同じ長さの船首波を連れて走る速度です。航海単位では喫水線長さ(フィート)の平方根に 1.34 を掛けて見積もります。臨界速度であり、物理的な完全停止ではありません。',
  },
  {
    question: '船体速度はどう計算しますか?',
    answer:
      '喫水線をフィートに直し、平方根を取り、1.34 を掛けてノットにします。10 m の喫水線は約 32.8 ft なので、およそ 7.7 kn です。同じ点はフルード数 0.40 付近に対応します。',
  },
  {
    question: '滑走艇にも船体速度は使えますか?',
    answer:
      '式は排水モードのままなら船体が作る波をなお説明します。滑走型や多くの半排水型は、その波を乗り越えるために設計されています。数値は目安にし、船体形状の注記を読んでください。',
  },
  {
    question: '喫水線長さと全長のどちらを使いますか?',
    answer:
      '実際に波を作る没水長さである喫水線長さ (LWL) を使います。全長、バウスプリット、オーバーハングは波長を決めません。パンフレットの LOA ではなく、水の中の LWL を測ってください。',
  },
];

const howTo: HullSpeedLocaleContent['howTo'] = [
  {
    name: '喫水線を伸ばす',
    text: '船体をドラッグし、レールを動かし、ディンギーから作業船まで選びます。船体速度はその長さ(フィート)の平方根の 1.34 倍です。',
  },
  {
    name: '船体形状を選ぶ',
    text: '排水型、半排水型、滑走型でキールが変わり、自分の波から抜け出せるかも変わります。',
  },
  {
    name: 'くぼみを読む',
    text: '船体速度では船首波と船尾波が喫水線ひとつ分離れ、船は谷に座ります。それが壁です。',
  },
  {
    name: 'ログを比べる',
    text: '対水速度を入れます。短い波はまだ安く押せる合図です。長い波はくぼみを登っている合図です。',
  },
];

const seo: HullSpeedLocaleContent['seo'] = [
  {
    type: 'title',
    text: '船体速度が本当に伝えていること',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '排水型船体は船首と船尾から波を押し出します。その峰がだいたい喫水線ひとつ分空くと、船は自分の航跡と一緒に進みます。余った出力は速力を買うより水を積み上げます。船乗りが船体速度と呼ぶ状態です。',
  },
  {
    type: 'paragraph',
    html: 'この計算機は、フィート喫水線の平方根あたり 1.34 ノットという一般的なアマチュア比を使います。細長い船体は少し高く、はしけは低くなります。結果は学習用の印として扱い、実際のログと比べてください。',
  },
  {
    type: 'title',
    text: '計算した喫水線の例',
    level: 2,
  },
  {
    type: 'table',
    headers: ['喫水線', '船体速度', '典型的な船'],
    rows: [
      ['4.2 m / 13.8 ft', '5.0 kn', 'ディンギー'],
      ['6.5 m / 21.3 ft', '6.2 kn', 'デイセーラー'],
      ['10 m / 32.8 ft', '7.7 kn', 'ファミリークルーザー'],
      ['13.5 m / 44.3 ft', '8.9 kn', '外洋ヨット'],
      ['18 m / 59.1 ft', '10.3 kn', '小型作業船'],
    ],
  },
  {
    type: 'title',
    text: '船首波の読み方',
    level: 2,
  },
  {
    type: 'list',
    items: [
      '印より下では波は短く、船はまだ安く押せます。',
      '印の近くでは船首波が急になり、燃料や帆が買う速力は減ります。',
      '印の上では波長が LWL と一致します。排水型は古典的な壁にいます。',
      'それより上では排水型は航跡を登ります。滑走型はすでに浮いていることがあります。',
    ],
  },
  {
    type: 'tip',
    title: 'LWL を測り、LOA は使わない',
    html: 'パンフレットの長さはオーバーハングを含みます。波が気にするのは没水した喫水線です。LOA しかないと、計算した船体速度は楽観的になります。',
  },
  {
    type: 'title',
    text: '一文でフルード数',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '船体速度はフルード数 0.40 付近を扱いやすく包んだものです。速さ割る重力かける長さの平方根です。だから船体形状が同じでも、長い喫水線は速くなります。排水限界を上げるきれいな方法は LWL を伸ばすことであり、馬力を足すことではありません。',
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
    name: `${title}の使い方`,
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
