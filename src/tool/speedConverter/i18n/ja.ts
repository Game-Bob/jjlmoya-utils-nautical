import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SpeedConverterUI, SpeedConverterLocaleContent } from '../index';

const slug = 'nautical-speed-converter';
const title = '航用速度換算およびビューフォート風力階級';
const description =
  'ノット、km/h、m/s、mphの間で即座に換算します。海の状態の詳細な説明と陸上の風の影響を含むビューフォート風力階級表を搭載。';

const beaufortData = [
  { force: 0, name: '静穏', sea: '鏡のような海面', effect: '煙は垂直に上がる', kn: '0' },
  { force: 1, name: '至軽風', sea: 'うろこ状のさざ波', effect: '煙は風向を示すが風信器は動かない', kn: '1-3' },
  { force: 2, name: '軽風', sea: '小さな波、頂は砕けない', effect: '顔に風を感じる、葉がそよぐ', kn: '4-6' },
  { force: 3, name: '軟風', sea: '波頭が砕け始める、白波が散在する', effect: '木の葉や細枝が動く', kn: '7-10' },
  { force: 4, name: '和風', sea: '小さな波、白波が多くなり波長が長くなる', effect: '砂埃が立ち、紙が舞う', kn: '11-16' },
  { force: 5, name: '疾風', sea: '中程度の波、至る所に白波が立つ', effect: '小さな樹木が揺れ始める', kn: '17-21' },
  { force: 6, name: '雄風', sea: '大波、頂に白い泡の塊が生じる', effect: '傘がさしにくい', kn: '22-27' },
  { force: 7, name: '強風', sea: '海面が騒ぎ立ち、泡が筋を引いて吹かれる', effect: '風に向かって歩きにくい', kn: '28-33' },
  { force: 8, name: '疾強風', sea: '高い波、水しぶきで視界が低下する', effect: '歩行が非常に困難', kn: '34-40' },
  { force: 9, name: '大強風', sea: '非常に高い大波、海面がうねって転がる', effect: '建物に被害が出始める', kn: '41-47' },
  { force: 10, name: '全強風', sea: '異常に高い大波、海面は真っ白に見える', effect: '樹木が根こそぎ倒れる、大きな被害', kn: '48-55' },
  { force: 11, name: '暴風', sea: '巨大な波、泡が海面を覆い尽くす', effect: '広範囲にわたる壊滅的な被害', kn: '56-63' },
  { force: 12, name: '猛烈な風', sea: '空気は泡としぶきに満たされる', effect: '壊滅的な状況', kn: '64+' },
];

const ui: SpeedConverterUI = {
  knLabel: 'ノット (kt)',
  kmhLabel: 'キロメートル/時',
  msLabel: 'メートル/秒',
  mphLabel: 'マイル/時',
  beaufortTitle: 'ビューフォート風力階級',
  forceLabel: '風力',
  descriptionLabel: '説明',
  knotsLabel: 'ノット',
  effectLabel: '視覚的影響',
  seaStateLabel: '海の状態',
  windEffectLabel: '陸上の影響',
  beaufortDataJson: JSON.stringify(beaufortData),
};

const faq: SpeedConverterLocaleContent['faq'] = [
  {
    question: 'なぜ船の速度は「ノット」で測られるのですか？',
    answer: 'ノットは1時間に1海里進む速度の単位です。その起源は歴史的なもので、船乗りたちが一定の間隔で結び目（ノット）を作ったロープに結びつけた木片を海に投げ込み、一定時間内にいくつの結び目が指の間を通り過ぎたかを数えて速度を測ったことに由来します。今日でも、海洋航行および航空の国際標準単位として使用されています。',
  },
  {
    question: 'ビューフォート風力階級とは何ですか？航海でどう使われますか？',
    answer: 'ビューフォート風力階級は、風速を海面や陸上の観察可能な状態に関連付けた経験的な尺度です。1805年にイギリスのフランシス・ビューフォート提督によって開発され、0（平穏）から12（猛烈な風）まであります。船乗りは計器がなくても、海の状態を観察することで風の強さを推定するために使用します。',
  },
  {
    question: '航法におけるSOGとSTWの違いは何ですか？',
    answer: 'SOG（Speed Over Ground：対地速度）は、GPSで測定される海底に対する実際の速度です。STW（Speed Through Water：対水速度）またはログ速度は、周囲の水に対する船の速度です。両者の差は潮流の影響を反映しています。SOGは到着予定時刻や燃料計算に、STWは風圧流（リーウェイ）の計算に使用されます。',
  },
  {
    question: '1ノットは何km/hですか？',
    answer: '1ノットは正確に時速1.852キロメートルです。これは1海里（地球の子午線の緯度1分として定義）の長さに基づいています。したがって、10ノットは18.52 km/h、20ノットは37.04 km/h、30ノットは55.56 km/hに相当します。',
  },
];

const howTo: SpeedConverterLocaleContent['howTo'] = [
  {
    name: '任意の単位で速度を入力する',
    text: '対応するフィールド（ノット、km/h、m/s、mph）に速度を入力すると、他のすべてのフィールドが自動的に更新されます。',
  },
  {
    name: '対応するビューフォート風力を確認する',
    text: 'ビューフォートカードには、入力された速度に対応する風力階級、海の状態、陸上の影響がリアルタイムで表示されます。',
  },
  {
    name: 'ビューフォート表の行をクリックする',
    text: '下表の任意の風力階級を直接選択して、その階級の最小速度を全フォーマットで確認できます。',
  },
  {
    name: '結果を航海計画に使用する',
    text: '速度と風の情報を組み合わせて、現在のコンディションが自分の船のタイプや計画している航路に適切かどうかを判断してください。',
  },
];

const seo: SpeedConverterLocaleContent['seo'] = [
  {
    type: 'title',
    text: '航用速度換算およびビューフォート風力階級ガイド',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '速度は海洋航行における基本的なデータです。自船が何ノットで進んでいるのか、それが航海計画のために時速何キロに相当するのか、また現在の風がビューフォート階級でいくつなのかを知ることは、すべての船乗りが習得すべき計算です。',
  },
  {
    type: 'paragraph',
    html: 'この航用速度換算ツールを使用すると、ノット、km/h、m/s、mphの間で即座に変換でき、対応するビューフォート風力、海の状態の説明、観察可能な風の影響が自動的に特定されます。',
  },
  {
    type: 'stats',
    items: [
      { label: '標準単位', value: 'ノット (kt)', icon: 'mdi:speedometer' },
      { label: '風力尺度', value: 'ビューフォート (0-12)', icon: 'mdi:weather-windy' },
      { label: '主要な換算', value: '1 kt = 1.852 km/h', icon: 'mdi:swap-horizontal' },
    ],
  },
  {
    type: 'title',
    text: 'なぜ速度はノットで測られるのか？',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>ノット (kt)</strong> は、海上および航空航法における公式の速度単位です。その定義は正確で、1ノットは1海里/時に等しく、海里 (1852 m) は地球の子午線の緯度1分として定義されています。地球の幾何学とのこの直接的な関係により、ノットは航海にとって特に実用的な単位となり、海図上で換算なしに距離を直接見積もることができます。',
  },
  {
    type: 'paragraph',
    html: '歴史的に、船乗りたちは<em>ログ（測程儀）</em>を使用して速度を測りました。一定間隔（30秒間に進む1海里の比例端数である14.4メートルごと）に結び目を作ったロープに結びつけた三角形の木片を海に投げ込み、その間に指の間を通り過ぎた結び目の数を数えることで船の速度を得ていました。これが今日私たちが使っている用語の由来です。',
  },
  {
    type: 'title',
    text: 'ビューフォート風力階級：船乗りの目',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>ビューフォート風力階級</strong>は、1805年にイギリスのフランシス・ビューフォート提督によって、計器を使わずに観察可能な影響から風の強さを分類するための経験的な方法として開発されました。もともとは船がどれだけの帆を張れるかを推定するために考案されましたが、今日では世界気象機関 (WMO) によって採用され、海洋気象における世界共通の基準となっています。',
  },
  {
    type: 'paragraph',
    html: '階級は<strong>風力0</strong>（静穏、鏡のような海面）から<strong>風力12</strong>（14メートルを超える波と泡としぶきに満たされた空気のハリケーン状態）まであります。レジャーセーラーにとっての批判的な限界は、通常、小型艇では風力6（雄風、22-27ノット）、外洋ヨットでは風力7-8となります。',
  },
  {
    type: 'table',
    headers: ['ビューフォート風力', '説明', '海の状態'],
    rows: [
      ['0', '静穏', '鏡のような海面'],
      ['3', '軟風', '白波が散在し、波頭が砕け始める'],
      ['6', '雄風', '大波、頂に白い泡の塊、しぶきの可能性'],
      ['9', '大強風', '非常に高い大波、泡としぶきで視界が低下'],
      ['12', '猛烈な風', '空気中がしぶきで満たされ、海面は真っ白'],
    ],
  },
  {
    type: 'title',
    text: '航用速度用語集',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: 'ノット (kt)', definition: '1時間に1海里進む速度の単位 (1852 m/h)。海上および航空航法の国際標準。' },
      { term: 'SOG (Speed Over Ground)', definition: 'GPSで測定される海底に対する船の実際の速度。潮流が船速に与える影響を反映する。' },
      { term: 'ログ速度 (STW)', definition: 'ログで測定される周囲の水に対する船の速度。潮流の影響を含まない。風圧流の計算に不可欠。' },
      { term: '見かけの風', definition: '船上で乗組員が感じる風。真の風と船の前進によって生じる風のベクトル和。常に真の風とは強さと方向が異なる。' },
    ],
  },
  {
    type: 'title',
    text: '簡易換算式',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'デジタル換算ツールが使えないときに手動で速度を換算するには、すべての船乗りが暗記しておくべき以下の近似式を使用してください。',
  },
  {
    type: 'list',
    items: [
      '<strong>ノットからkm/hへ:</strong> ノットに1.852を掛けます。簡易計算：ノットを2倍して8％引く。例：10 kt ≈ 20 - 1.6 = 18.4 km/h。',
      '<strong>ノットからmphへ:</strong> ノットに1.15を掛けます。簡易計算：ノットに15％加える。例：20 kt ≈ 23 mph。',
      '<strong>ノットからm/sへ:</strong> ノットに0.514を掛けます。簡易計算：ノットを2で割る。例：10 kt ≈ 5 m/s（正確には5.14 m/s）。',
    ],
  },
  {
    type: 'tip',
    title: '安全と気象',
    html: '出航前には必ず海上気象予報を確認してください。ビューフォート風力4-5はほとんどのレジャー船にとって管理可能な範囲ですが、風力6以上の場合、十分な経験がない、または船の準備が整っていないなら、出航の見合わせを真剣に検討してください。',
  },
  {
    type: 'title',
    text: '装備の比較',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'デジタル風速計',
        description: '風速を正確に測定するための電子機器。',
        icon: 'mdi:speedometer',
        points: [
          '通常条件下で±2%の精度',
          '電力または電池が必要',
          '極限状態では故障の可能性がある',
          '即座の読み取りとデータ記録が可能',
        ],
      },
      {
        title: 'ビューフォート観察',
        description: '海面や陸上の観察可能な状態から風力を視覚的に推定。',
        icon: 'mdi:eye-outline',
        highlight: true,
        points: [
          '計器を一切必要としない',
          'どのような状況でも利用可能',
          '安全上の判断に十分な精度',
          '熟練した航海者の必須スキル',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: '航海と航路計画',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '航路を計画する際、船速は到着予定時刻 (ETA) と燃料消費量（動力船の場合）を決定します。ヨットの場合、速度は風の強さと方向にも依存します。予測されるビューフォート風力を知ることで、帆走できるか、あるいはエンジンが必要になるかを予測できます。',
  },
  {
    type: 'paragraph',
    html: 'レースでは、ノットとメートル毎秒の換算は、VMG (Velocity Made Good) の計算やセール・ポーラー図の分析に特に有用です。気象学者や数値予報モデルは通常、風速をm/sまたはkm/hで提供するため、ノットへの換算は戦術計画における日常的なステップとなります。',
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
    name: `使い方： ${title}`,
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
