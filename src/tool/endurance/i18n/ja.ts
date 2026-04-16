import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EnduranceUI, EnduranceLocaleContent } from '../index';

const slug = 'nautical-endurance-calculator';
const title = '航続距離計算ツール';
const description =
  '燃料消費量、タンク容量、巡航速度に基づいて、最大航続距離と安全距離を計算します。モーターボート向けの燃料管理ツールです。';

const ui: EnduranceUI = {
  tankCapacityLabel: 'タンク容量',
  mainTankLabel: 'メイン',
  auxTankLabel: 'サブ',
  currentFuelLabel: '現在の燃料',
  seaConditionsLabel: '海況・風況',
  consumptionLabel: '理論上の消費量',
  cruiseSpeedLabel: '巡航速度',
  reserveLabel: '予備燃料',
  fuelPriceLabel: 'リッターあたりの価格',
  maxRangeLabel: '最大航続距離',
  realPerformanceLabel: '実際のパフォーマンス',
  hoursLabel: '航続時間',
  safeMilesLabel: '安全航行距離',
  tankValueLabel: 'タンク値',
  inverseCalcLabel: '逆算：必要な給油量は？',
  desiredDistLabel: '目標距離',
  minFuelLabel: '最低必要燃料',
  warningLabel: '注意：海上の安全のため、予備燃料は最低20%確保することを強く推奨します。',
  seaCalm: '穏やか (1.0x)',
  seaLight: '軽いうねり (+15%)',
  seaModerate: '中程度のうねり (+30%)',
  seaStorm: '荒天 (+60%)',
  faqTitle: 'よくある質問',
  bibliographyTitle: '参考文献',
};

const faq: EnduranceLocaleContent['faq'] = [
  {
    question: 'モーターボートの航続距離はどのように計算されますか？',
    answer: '航続距離は、使用可能な燃料を時間あたりの消費量で割って総時間を求め、その時間に巡航速度を掛けて算出します。このツールでは、実際の航行条件を反映するために海況係数も適用されます。',
  },
  {
    question: 'なぜ海上航行では20%の予備燃料が推奨されるのですか？',
    answer: '20%の予備燃料は、逆潮、悪天候による迂回、消費見積もりの誤差、または他船の救助が必要になった場合など、予期せぬ事態に備えて燃料を確保するための海上安全基準です。多くの保険会社や港湾当局がこれを義務と考えています。',
  },
  {
    question: 'L/NMパフォーマンスとは何ですか？また、計画にどのように影響しますか？',
    answer: '1海里あたりのリットル数（L/NM）で表されるパフォーマンスは、海況におけるエンジンの実際の効率を示します。時間あたりの消費量とは異なり、速度に関係なく、特定の距離をカバーするために正確にどれだけの燃料が必要かを計算できます。',
  },
  {
    question: '海況は実際の燃料消費量にどのように影響しますか？',
    answer: '海況が悪化すると、船体が水や風の抵抗に対してより強く働く必要があるため、消費量が増加します。軽いうねりでは消費量は15%増加し、中程度のうねりでは30%、荒天時には60%以上に跳ね上がることがあります。この要因を無視すると、入港前に燃料切れになる危険があります。',
  },
];

const howTo: EnduranceLocaleContent['howTo'] = [
  {
    name: 'タンク容量を入力する',
    text: 'メインタンクのリットル数を入力し、サブタンクがある場合はその容量も入力します。ツールが現在の充填率を計算します。',
  },
  {
    name: '現在の燃料レベルを入力する',
    text: '現在持っている実際の燃料量を入力します。燃料計で測定するか、前回の給油量から推定してください。',
  },
  {
    name: '航行条件を調整する',
    text: '予定している航路の予想海況を選択します。海況係数が理論上の消費量を予想される実際の消費量に補正します。',
  },
  {
    name: '消費量と巡航速度を入力する',
    text: 'メーカーのデータ、またはご自身の記録から時間あたりの消費量と、普段航行する速度を入力してください。',
  },
  {
    name: '安全距離と逆算結果を確認する',
    text: '安全に走行できる海里数と、特定の目的地に到達するために必要な燃料量が表示されます。',
  },
];

const bibliography: EnduranceLocaleContent['bibliography'] = [
  {
    name: 'UK Maritime and Coastguard Agency',
    url: 'https://www.gov.uk/government/organisations/maritime-and-coastguard-agency',
  },
  {
    name: 'RYA - Royal Yachting Association',
    url: 'https://www.rya.org.uk/',
  },
];

const seo: EnduranceLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'モーターボート航行における燃料管理と航続距離',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>海上航続距離</strong>は、モーターボートで出航する前に最も重要な計算の一つです。利用可能な燃料で正確に何海里走行できるかを知ることは、計画的な航行か、海上での緊急事態かの分かれ目となります。',
  },
  {
    type: 'paragraph',
    html: 'この航続距離計算ツールは、<strong>海況要因</strong>、安全予備燃料の割合、燃料の逆算機能を統合しており、あらゆる状況において完全で信頼性の高い燃料管理を可能にします。',
  },
  {
    type: 'title',
    text: '黄金律：3分の1の法則',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '海上航行における古典的な燃料管理ルールでは、常に安全マージンを確保するためにタンクを3つの等分に分けます：',
  },
  {
    type: 'list',
    items: [
      '<strong>3分の1を行きに：</strong> 予定の目的地に到達するために必要な燃料。',
      '<strong>3分の1を帰りに：</strong> 出発港または最寄りの港に戻るための燃料。',
      '<strong>3分の1を予備に：</strong> 予期せぬ事態、潮流、悪条件のための安全マージン。',
    ],
  },
  {
    type: 'paragraph',
    html: '計算ツールでは予備燃料の割合をご自身の基準に合わせて設定できますが、<strong>20%を下回ることは推奨されません</strong>。大型タンクや長距離航行の場合、経験豊富な船長は、このマージンを30%または33%まで引き上げることがよくあります。',
  },
  {
    type: 'title',
    text: '消費量（l/h）に影響を与える要因',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'メーカーの理論上の消費量は、理想的な実験室条件下で計算されています。実際には、複数の要因が<strong>実際の燃料消費量</strong>を変化させます。船体速度が最も決定的です：経済速度以上で航行すると、走行海里あたりの消費量が2倍から3倍になることがあります。',
  },
  {
    type: 'table',
    headers: ['航行状態', '航続距離への影響', 'アドバイス'],
    rows: [
      ['<strong>汚れた船体</strong>', '航続距離を最大20%低下させる', 'シーズン前に船体を清掃してください'],
      ['<strong>逆潮</strong>', '有効速度を30%低下させることがある', '常に対地速度で計算してください'],
      ['<strong>向かい風</strong>', '抵抗と消費量を10-25%増加させる', '軽度または中程度のうねり係数を使用してください'],
      ['<strong>過積載</strong>', '喫水と抵抗を増加させる', '計算前に装備品と備蓄品の重量を確認してください'],
    ],
  },
  {
    type: 'title',
    text: '航続距離に関するテクニカル用語集',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: 'パフォーマンス (L/NM)', definition: '走行した1海里あたりの消費燃料リットル数。消費量と実際の距離を結びつけるため、航路計画に最も役立つ指標です。' },
      { term: '巡航速度', definition: 'エンジンが速度と消費量のバランスを最も良く保てる最適な速度。通常、最大出力の70%〜80%の間です。' },
      { term: '限界予備燃料', definition: '決して消費してはならないタンクの割合。不測の事態への対応と、燃料回路への空気混入を防ぐため、最低20%が推奨されます。' },
      { term: '比燃料消費量', definition: '発生した1キロワット時あたりの燃料グラム数（g/kWh）。異なる推進システム間での効率比較を可能にするエンジンの技術的尺度。' },
    ],
  },
  {
    type: 'title',
    text: '沈殿物と揺れの危険性',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '燃料レベルが低い船でよくある問題の原因は、<strong>タンクの底の沈殿物（スラッジ）</strong>です。レベルが下がりすぎると、長年蓄積された堆積物がフィルターに達して目詰まりを起こし、ゲージに数リットル残っていてもエンジンが停止してしまうことがあります。',
  },
  {
    type: 'paragraph',
    html: '燃料が少ない状態での海上の揺れも問題を引き起こします。液体が波に合わせて揺れるため、燃料ポンプが一瞬空になることがあります。予備燃料を維持することで、入港時の操船といった重要な瞬間にこれが起こらないようにします。',
  },
  {
    type: 'tip',
    title: '燃料節約のコツ',
    html: '通常の巡航速度より10〜15%速度を落とすだけで、効率が最大30%向上します。時間に余裕があり、天候が良い場合は、ゆっくり行くことが常に最も経済的で安全な決断です。',
  },
  {
    type: 'title',
    text: '海里 (NM) とキロメートルの違い',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>海里 (Nautical Mile)</strong> は1,852メートル (1.852 km) であり、海上および航空航法における世界共通の距離単位です。これは地球の緯度1分の弧に基づいているため、地理座標による海図を用いた航法に理想的です。1時間あたりの海里数による速度はノット (kn) と呼ばれます。',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'アナログ式燃料計',
        description: '伝統的なフロート方式',
        points: [
          '低コストで取り付けが簡単',
          '動作に電力を必要としない',
          '燃料の揺れにより、荒れた海では不正確になる',
          '消費量や推定航続距離を表示しない',
        ],
      },
      {
        title: 'デジタル式流量計',
        description: '電子流量センサー',
        highlight: true,
        points: [
          '実際の消費量に対して1〜2%の精度',
          '航続可能距離、消費量、総コストをリアルタイムで表示',
          'チャートプロッターやNMEA 2000と統合可能',
          '初回校正とメンテナンスが必要',
        ],
      },
    ],
  },
];

const schemas: EnduranceLocaleContent['schemas'] = [
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

export const content: EnduranceLocaleContent = {
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
