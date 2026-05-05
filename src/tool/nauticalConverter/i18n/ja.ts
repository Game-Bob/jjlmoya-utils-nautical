import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { NauticalConverterUI, NauticalConverterLocaleContent } from '../index';

const slug = 'nautical-units-converter';
const title = '航用単位換算ツール';
const description =
  '海里、ノット、ファゾム、気圧を換算します。風速に対応するインタラクティブなビューフォート風力階級を含みます。';

const ui: NauticalConverterUI = {
  distanceCategoryLabel: '距離',
  speedCategoryLabel: '速度',
  depthCategoryLabel: '水深',
  pressureCategoryLabel: '気圧',
  nmLabel: '海里 (nm)',
  kmLabel: 'キロメートル (km)',
  miLabel: 'マイル (mi)',
  cableLabel: 'ケーブル',
  knLabel: 'ノット (kn)',
  kmhLabel: 'km/h',
  msLabel: 'm/s',
  mphLabel: 'mph',
  brozaLabel: 'ファゾム',
  mLabel: 'メートル (m)',
  ftLabel: 'フィート (ft)',
  mbarLabel: 'ミリバール (mbar)',
  mmhgLabel: 'mmHg',
  inhgLabel: 'inHg',
  atmLabel: '気圧 (atm)',
  windSeaLabel: '海の状態',
  forceLabel: '風力',
  effectLabel: '影響',
  copyLabel: '値をコピー',
};

const faq: NauticalConverterLocaleContent['faq'] = [
  {
    question: '1海里は何キロメートルですか？',
    answer: '1海里は正確に1.852キロメートル（1,852メートル）です。この測定値は、地球表面上の緯度1分（1/60度）に相当します。',
  },
  {
    question: 'ノットと時速キロメートルの違いは何ですか？',
    answer: '1ノットは1海里/時に相当するため、1.852 km/hになります。ノットをkm/hに換算するには、単に1.852を掛けてください。',
  },
  {
    question: 'なぜ海の上ではキロメートルではなく海里が使われるのですか？',
    answer: '海里は緯度1分に相当するため、海図とコンパスを用いた航法計算が大幅に簡素化されるからです。緯度1分の変化は、正確に1海里の移動に相当します。',
  },
  {
    question: 'ビューフォート風力階級とは何ですか？',
    answer: '風速を海面の観察可能な状態に関連付けた経験的な尺度です。0（平穏）から12（台風/ハリケーン）までの段階があり、沿岸および遠洋航海に不可欠です。',
  },
  {
    question: '海洋気象ではどのような気圧単位が使われますか？',
    answer: '海洋気象では、主にミリバール（mbar）またはその同等単位のヘクトパスカル（hPa）が使用されます。海面における標準大気圧は1013.25 mbarです。',
  },
  {
    question: '1ファゾムは何フィートですか？',
    answer: '1ファゾムは正確に6フィート、つまり1.8288メートルです。主に英語圏で、古い海図の水深を表すために使用されています。',
  },
];

const howTo: NauticalConverterLocaleContent['howTo'] = [
  {
    name: '換算カテゴリーを選択する',
    text: '換算したい量に応じて、距離、速度、水深、気圧の4つのタブのいずれかをクリックします。',
  },
  {
    name: '任意のフィールドに値を入力する',
    text: 'わかっている単位の数値を入力します。他のすべての単位がリアルタイムで自動的に更新されます。',
  },
  {
    name: 'ビューフォート階級を参照する（速度）',
    text: '「速度」タブで速度を入力すると、対応するビューフォート風力階級と予想される海の状態を示すカードが表示されます。',
  },
  {
    name: '結果をコピーする',
    text: '任意のスロットの横にあるコピーボタンを使用して、値をクリップボードにコピーします。',
  },
];

const seo: NauticalConverterLocaleContent['seo'] = [
  {
    type: 'title',
    text: '航用単位における精度の重要性',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '海を航行するには独自の言語、つまり何世紀にもわたる海洋探索を通じて洗練されてきた計測システムが必要です。航用単位は歴史的な奇癖ではなく、地球の幾何学と航海者の実用的なニーズに整合した、数学的に一貫性のあるツールです。',
  },
  {
    type: 'paragraph',
    html: '数メートルの誤差が深刻な結果を招くことが稀な陸上とは異なり、海上での誤った換算は、安全な投錨か浅瀬への座礁かの分かれ目になる可能性があります。単位の精度は学術的な問題ではなく、航海そのものです。',
  },
  {
    type: 'paragraph',
    html: '海岸から離れると、視覚的な基準がなくなるため、計算された位置が行動できる唯一の現実となります。海里、キロメートル、ノット、メートルの間を正確に換算する方法を知ることは、責任ある航海者にとって必須のスキルです。',
  },
  {
    type: 'title',
    text: 'なぜキロメートルではなく海里を使うのか？',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'その答えは地球そのものの形にあります。1<strong>海里</strong>は正確に地球表面上の緯度1分に相当し、1852メートルです。角度測定と線形距離のこの直接的な対応が、航法における世界共通の使用の鍵となっています。',
  },
  {
    type: 'paragraph',
    html: 'この単位を使用すると、海図上の緯度1分の変化は、航行した正確に1海里に常に相当します。これにより、追加の換算係数を必要とせず、位置、速度、到着時間の計算が非常に簡単になります。',
  },
  {
    type: 'title',
    text: '海上の速度：ノット',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>ノット</strong>は、1時間に1海里進む速度の単位です。その名前は、一定の間隔で結び目（ノット）を作ったロープに結びつけた木片を水中に投げ込み、一定時間に指の間をいくつ結び目が通り過ぎたかを数えて速度を測った古い技術に由来します。',
  },
  {
    type: 'paragraph',
    html: '今日ではGPS衛星や高度な電子システムを使用していますが、ノットは依然として国際航空および海上航行の標準単位です。1ノットは1.852 km/hまたは0.514 m/sに相当します。',
  },
  {
    type: 'title',
    text: '水深と投錨：ファゾム、メートル、フィート',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '航海の世界では、水深は単なる統計ではありません。安全な投錨か座礁かの違いを意味します。歴史的に、英語圏では水深を測る主な単位として<strong>ファゾム</strong>（1.8288メートル、または正確に6フィート）が使われてきました。',
  },
  {
    type: 'paragraph',
    html: 'しかし、グローバル化と技術革新により、現代の海図や魚群探知機の多くではメートルが常に使用されるようになりました。現代の航海者は、特に古い海図やヤード・ポンド法で校正された計器を参照する場合、ファゾム、メートル、フィートの間を自在に使い分ける必要があります。',
  },
  {
    type: 'title',
    text: '気象と大気圧',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '船長にとって、気圧計は天気の神託です。<strong>ミリバール</strong>（mbar）で測定される大気圧は、差し迫った天候の変化を示す最も信頼できる指標です。気圧の急速な低下は、強風と悪天候の到来を告げています。',
  },
  {
    type: 'paragraph',
    html: '気圧の変化を理解することは、あらゆる航海者にとって死活的に重要です。海面における標準大気圧は1013.25 mbar（1気圧）です。これより高い値は天候の安定を示し、低い値、特に急速に低下している場合は、潜在的に危険な低気圧システムの接近を警告しています。',
  },
  {
    type: 'title',
    text: '風と海の尺度：ビューフォートからダグラスまで',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'ノット単位の風速は、<strong>ビューフォート風力階級</strong>と関連付けられることで実感を伴うようになります。1805年にイギリスのフランシス・ビューフォート提督によって開発されたこの経験的な尺度は、風速を海面や陸上の両方で観察可能な影響に関連付けています。',
  },
  {
    type: 'list',
    items: [
      '<strong>風力0-3 (0-10 kn):</strong> 穏やかな航行条件。初心者や家族での外出に理想的。',
      '<strong>風力4-5 (11-21 kn):</strong> ヨットにとって理想的な帆走風。適度な波と白波。',
      '<strong>風力6-7 (22-33 kn):</strong> 強風から雄風。経験と縮帆（リーフィング）が推奨される。',
      '<strong>風力8+ (34 kn以上):</strong> 疾風・嵐。適切な船体を持つ経験豊富な航海者のみ。',
    ],
  },
  {
    type: 'paragraph',
    html: '同様に、ダグラス海況階級は海の状態を0（鏡面のよう）から9（驚異的）までの段階に分類しており、航海者は天気予報に基づいて水平線の向こうの状況を予測することができます。',
  },
  {
    type: 'tip',
    title: '安全上のヒント',
    html: 'この換算ツールを使用して航海を計画する際は、実際の状況が予測と異なる場合があることを常に念頭に置いてください。公式の天気予報を確認し、海が急速に変化する可能性を決して過小評価しないでください。',
  },
  {
    type: 'title',
    text: 'オフライン計画とモビリティ',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'このツールは、一度ブラウザに読み込まれるとインターネット接続なしで動作するように設計されており、接続が制限される可能性のある船上での使用に最適です。すべての換算はデバイス上でローカルに計算され、サーバーにデータが送信されることはありません。',
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
    name: `使い方： ${title}`,
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
