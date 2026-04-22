import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TideCalculatorUI, TideCalculatorLocaleContent } from '../index';

const slug = 'tide-height-calculator';
const title = '潮汐計算機';
const description =
  '航用「12分の1則」を使用して、潮汐サイクルの任意の時点での水深を推定します。沿岸計画や船舶免許の学習に最適です。';

const ui: TideCalculatorUI = {
  parametersLabel: 'パラメータ',
  highTideLabel: '満潮',
  lowTideLabel: '干潮',
  targetTimeLabel: '照会時刻',
  estimatedHeightLabel: '推定潮高',
  metersLabel: 'メートル',
  amplitudeLabel: '潮潮差',
  durationLabel: '継続時間',
  tableBreakdownLabel: '12分の1則の内訳',
  tableHourLabel: '時刻',
  tableStateLabel: '状態',
  tableStartLabel: '開始',
  tableEndLabel: '終了',
  statusUpLabel: '上げ潮',
  statusDownLabel: '下げ潮',
  statusOutOfRange: '範囲外',
  faqTitle: 'よくある質問': '参考文献',
};

const faq: TideCalculatorLocaleContent['faq'] = [
  {
    question: '12分の1則とは何ですか？何に使われますか？',
    answer:
      '12分の1則は、満潮と干潮の間の任意の時点での潮高を推定するために航海で使用される簡略化された数学的手法です。潮の流れが近似的に正弦曲線に従うという観察に基づいており、6時間の全潮差を12の部分（1/12、2/12、3/12、3/12、2/12、1/12）に分割します。',
  },
  {
    question: 'この方法は実際の航海で信頼できますか？',
    answer:
      '迅速な計画作成や教育目的には非常に有用な理論的推定方法です。しかし、気圧や風などの気象要因は考慮されておらず、これらは海面を数十センチメートル変化させる可能性があります。実際の航海では、常に公式の潮汐表を参照してください。',
  },
  {
    question: '潮高を計算するにはどのようなデータが必要ですか？',
    answer:
      '照会したい時刻に最も近い満潮と干潮の時刻および潮高（メートル）が必要です。これらのデータは潮汐暦や海洋気象アプリで見つけることができます。',
  },
  {
    question: 'なぜ潮汐は常に同じ速度で上昇しないのですか？',
    answer:
      '巨大な水塊の慣性と海洋盆地の形状によるものです。潮汐は干潮後にゆっくりと上昇し始め、中間時間（3/12および4/12時間）に最大速度に達し、満潮に近づくにつれて再び減速します。',
  },
  {
    question: '気圧は潮汐にどのように影響しますか？',
    answer:
      '高気圧（高気圧）は海面を押し下げ、実際の潮高を減少させます。低気圧（低気圧）は海面を上昇させます。一般的なルールとして、平均から1hPaの変化は約1cmの海面レベルの変化に対応します。',
  },
  {
    question: '潮差（ちょうさ）とは何ですか？',
    answer:
      '満潮とその直前または直後の干潮との垂直方向の潮高差のことです。この測定値は、月齢（大潮や小潮）や地理的な場所によって変化します。',
  },
];

const howTo: TideCalculatorLocaleContent['howTo'] = [
  {
    name: '満潮と干潮を確認する',
    text: '潮汐暦を参照して、関心のある潮汐サイクルの時刻と潮高を取得します。',
  },
  {
    name: '計算機にデータを入力する',
    text: '満潮と干潮の時刻および潮高を入力します。ツールは自動的に継続時間と潮差を決定します。',
  },
  {
    name: '照会時刻を設定する',
    text: '潮位を知りたい時刻を調整します。チャート上の正確なポイントが強調表示されます。',
  },
  {
    name: '12分の1則の表を分析する',
    text: '1時間ごとの内訳を確認して、全期間を通じて潮位がどのように変動するかを理解します。',
  },
];

const seo: TideCalculatorLocaleContent['seo'] = [
  {
    type: 'title',
    text: '潮汐をマスターする：航海における12分の1則',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '沿岸航行や水深に制限のある港への入港では、常に正確な水深を知る必要があります。今日ではリアルタイムデータを提供するデジタルアプリやGPSが利用可能ですが、<strong>12分の1則</strong>は船舶免許取得や航海訓練における基本的なツールのままです。この法則は数学的な推定手法であり、複雑な計算機を使わずに潮汐サイクルの任意の時点での潮高を近似的に算出できます。',
  },
  {
    type: 'title',
    text: '12分の1則とは具体的に何ですか？',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '12分の1則は、潮の流れが一定ではないという観察に基づいています。水面は、満潮から干潮までの約6時間の間に一定の速度で上昇または下降するわけではありません。その代わり、動きは正弦曲線（サインカーブ）に従います。最初の1時間は潮がゆっくりと動き、中間時間に加速し、次の極値に近づくにつれて再び減速します。',
  },
  {
    type: 'table',
    headers: ['サイクルの時間', '比率', '流れの状態'],
    rows: [
      ['<strong>第1時間</strong>', '全潮差の 1/12', 'ゆっくりとした開始（潮止まり付近）'],
      ['<strong>第2時間</strong>', '全潮差の 2/12', '流れの加速'],
      ['<strong>第3時間</strong>', '全潮差の 3/12', '最大流量（強い潮流）'],
      ['<strong>第4時間</strong>', '全潮差の 3/12', '持続的な流れ'],
      ['<strong>第5時間</strong>', '全潮差の 2/12', '顕著な減速'],
      ['<strong>第6時間</strong>', '全潮差の 1/12', '最終的な減速（次の潮止まりへ）'],
    ],
  },
  {
    type: 'title',
    text: '技術的な制限：実際の潮汐に影響を与える要因',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: '気圧', definition: '低気圧は海面を上昇させ、高気圧は海面を低下させます。一般的に、平均から1hPaの変化につき約1cmの変動があります。' },
      { term: '沿岸風', definition: '持続的な陸に向かう風は、潮汐表の予測値以上に海面を押し上げる（吹き寄せ）可能性があります。' },
      { term: '局所的な地形', definition: '海岸の形状、海底の深さ、河口の存在などは、潮汐の流れを大幅に遅らせたり早めたりすることがあります。' },
    ],
  },
  {
    type: 'tip',
    title: '安全上の注意',
    html: 'このツールは数学的な推定手法を使用しています。気象要因や局所的な地形は考慮されていません。実際の航海では、常に公式の潮汐表を参照してください。',
  },
  {
    type: 'title',
    text: '新しい船乗りのための主要概念',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      {
        term: '潮差（ちょうさ）',
        definition: '満潮と干潮の垂直方向の差。場所によっては数メートルに及ぶこともあれば、地中海のように無視できるほど小さいこともあります。',
      },
      {
        term: '潮汐周期',
        definition: '満潮から次の干潮までの時間間隔。通常は約6時間12分（半日周期の場合）です。',
      },
      {
        term: '基本水準面 (Chart Datum)',
        definition: '海図に示される水深の基準面です。実際の水深が示された水深を下回ることはほとんどありません。',
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
    name: `使い方： ${title}`,
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
