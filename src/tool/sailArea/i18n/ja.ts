import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SailAreaUI, SailAreaLocaleContent } from '../index';

const slug = 'sail-area-calculator';
const title = 'セール面積・SA/D比計算ツール';
const description =
  'ヨットの総セール面積と、排水量に対するセール面積比（SA/D比）を計算します。I、J、P、Eの各寸法に基づいた航海パフォーマンス分析。';

const ui: SailAreaUI = {
  hullSectionLabel: '船体データ',
  totalMassLabel: '排水量',
  rigSystemLabel: 'リグ',
  intendedUseLabel: '使用目的',
  rigGeometryLabel: 'リグの幾何寸法',
  sailConfigLabel: 'リグ形式',
  genoaOverlapLabel: 'ジェノアのオーバーラップ',
  foqueLabel: 'ジブ',
  genovaLabel: 'ジェノア',
  sadRatioLabel: 'SA/D比',
  totalAreaLabel: '総面積',
  performanceLabel: 'パフォーマンス',
  sloopLabel: 'スループ（1本マスト）',
  cutterLabel: 'カッター（前帆2枚）',
  ketchLabel: 'ケッチ（2本マスト）',
  cruiserLabel: 'クルーザー',
  performanceTypeLabel: 'パフォーマンス型',
  racerLabel: 'レーサー',
  exportPdfLabel: 'テクニカルレポートを生成',
};

const faq: SailAreaLocaleContent['faq'] = [
  {
    question: 'なぜ私の船は軽風で遅いのですか？',
    answer: 'SA/D比が15を下回っている可能性があります。これは、重量に対してセール面積が小さい重排水量艇であることを示しています。このような船が活発に帆走するには、12ノット以上の風が必要です。',
  },
  {
    question: 'パフォーマンス向上のために水タンクを空にすべきですか？',
    answer: 'はい、船体を軽くすることは実際の排水量を減らすため、SA/D比を直接的に向上させます。水や燃料のタンクを空にすることで、排水量を数百キログラム削減し、比率を大幅に高めることができます。',
  },
  {
    question: 'セールの「ローチ (Roach)」とは何ですか？',
    answer: 'ローチとは、メインセールのリーチ（後縁）の凸状の膨らみのことです。PとEで定義される基本的な幾何学的三角形を超えた追加のセール面積を提供します。レーシング艇は、リジッドバテンを用いたアグレッシブなローチを持つことが一般的です。',
  },
  {
    question: '自分の船の実際の排水量はどうやって測ればいいですか？',
    answer: '最も信頼できる方法は、満載排水量（備品、水、燃料、乗組員をすべて載せた状態）を使用することです。ビルダーの記録にある軽荷排水量は、通常楽観的な数値です。通常の帆走条件での実際の排水量を使用してください。',
  },
  {
    question: '自船のI、J、P、E寸法はどこで確認できますか？',
    answer: 'オーナーズマニュアル、ORCまたはIRCのレーティング証明書、あるいはクラス証明書のドキュメントに記載されています。また、メジャーを使って船上で直接測定するか、造船所に問い合わせることもできます。',
  },
];

const howTo: SailAreaLocaleContent['howTo'] = [
  {
    name: 'リグ形式を選択する',
    text: 'スループ（1本マスト）、カッター（ジブとステイセルの2枚）、またはケッチ（ミズンマストあり）から選択します。これにより、総セール面積の計算方法が決まります。',
  },
  {
    name: '排水量を入力する',
    text: 'ヨットの実際の満載排水量（kgまたはlbs）を入力します。この数値はSA/D比の計算の鍵となります。',
  },
  {
    name: 'リグの寸法を入力する',
    text: 'P（マスト高）、E（ブーム長）、I（フォアトライアングル高）、J（フォアトライアングル底辺）をメートルまたはフィートで入力してください。',
  },
  {
    name: 'ジェノアのオーバーラップを調整する',
    text: 'スライダーを動かしてジェノアのオーバーラップを指定します。100%はオーバーラップなしのジブ、130%は標準的なジェノア、155%は大型のジェノアです。',
  },
  {
    name: 'SA/D比を解釈する',
    text: '比率が16から20の間であれば、バランスのとれたクルーザーです。20を超えると軽風で非常に活発になりますが、強風下での操船は難しくなります。',
  },
];

const seo: SailAreaLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'セール面積計算ツール：パフォーマンスと比率の完全ガイド',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'セール面積は、帆船における空気力学的な「エンジン」です。船がどれだけの風エネルギーを捉えられるかを決定し、排水量と組み合わさることで、その船の航海上の性格（ゆったりとしたクルーザーか、敏感なレーシングマシンか）を定義します。この値を正しく計算することは、ヨットの挙動を理解するための第一歩です。',
  },
  {
    type: 'paragraph',
    html: '帆走とは、セールにかかる風の力と船体にかかる水の抵抗との絶え間ないダンスです。<strong>セール面積／排水量比（SA/D比）</strong>は、この関係を単一の数値に集約したもので、長さや排水量が異なるあらゆる船を対等な立場で比較することを可能にします。',
  },
  {
    type: 'stats',
    items: [
      { label: '理想的なクルーザー比率', value: '15-18', icon: 'mdi:anchor' },
      { label: 'レーシング艇', value: '+24', icon: 'mdi:sailing' },
      { label: '誤差範囲', value: '5-10%', icon: 'mdi:alert-circle-outline' },
    ],
    columns: 3,
  },
  {
    type: 'title',
    text: 'SA/D比は何に使用されますか？',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>SA/D比</strong>は、出航前に船の挙動を予測するための診断ツールです。比率が低い場合は頑丈で安全ですが、軽風では遅い船であることを示します。比率が高い場合はスピードと「飛ぶような」感覚を提供しますが、風が強まった際に乗組員のより高度なスキルが求められます。どちらかが優れているわけではなく、意図する帆走のタイプによります。',
  },
  {
    type: 'title',
    text: 'SA/D比 リファレンス表',
    level: 4,
  },
  {
    type: 'table',
    headers: ['比率', '船のタイプ', '海上での挙動'],
    rows: [
      ['14未満', '重排水量艇／貨物船', '安定しているが遅い、持続的な風が必要'],
      ['14 - 16.5', '遠洋航海用クルーザー', 'バランスが良く快適、のぼり性能が良い'],
      ['16.5 - 20', '標準的なマリーナ・クルーザー', 'そよ風で活発、扱いやすく多目的'],
      ['20 - 25', 'パフォーマンス・クルーザー', '速い、操船スキルを要する、軽風でエキサイティング'],
      ['25超', 'レーサー／エクストリーム', '非常に速いが過敏、熟練したクルーが必要'],
    ],
  },
  {
    type: 'title',
    text: '寸法のテクニカル用語集 (I, J, P, E)',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'I (フォアトライアングル高)',
        definition: 'デッキからマスト上のジブハリアードの取り付け位置までの垂直距離。前三角の高さ。',
      },
      {
        term: 'J (フォアトライアングル底辺)',
        definition: 'マストからステム（船首）までの水平距離。前帆を取り付ける前三角の底辺。',
      },
      {
        term: 'P (マスト高)',
        definition: 'デッキからマスト上部のメインハリアード・シーブまでの距離。メインセールの高さ。',
      },
      {
        term: 'E (ブーム長)',
        definition: 'マストからブーム端のメインセール・クルまでの距離。メインセールの底辺。',
      },
    ],
  },
  {
    type: 'title',
    text: '航海試験での計算 (ヨットマスター資格)',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'セール面積の計算とSA/D比は、<strong>ヨットマスター</strong>や沿岸スキッパー資格の試験範囲に含まれています。リグの幾何学寸法と排水量の関係を理解することは、海の上での安全な判断（早めの縮帆、適切なジェノアの選択、突風前の船体挙動の予測など）を下すために不可欠です。',
  },
  {
    type: 'tip',
    title: '追い風用のセールと安全性',
    html: '外洋航海や長距離航行の場合、SA/D比が16から18の間であることが、スピードと安全性の最良のバランスを提供します。比率が22を超える船は、風力4〜5（ビューフォート階級）程度の風でもリーフィング（縮帆）が必要になる場合があります。',
  },
  {
    type: 'title',
    text: 'ジェノアのオーバーラップはパフォーマンスにどう影響しますか？',
    level: 4,
  },
  {
    type: 'paragraph',
    html: '<strong>ジェノア</strong>は、クル（帆の角）がマストの後方に位置し、メインセールと「重なる（オーバーラップ）」ほど大きな前帆のことです。オーバーラップのパーセンテージは、ラフ（前縁）に対する垂線（LP）がJ寸法に対してどれだけ長いかを示します。150%ジェノアはJの150%に相当するLPを持ち、通常のジブよりもはるかに大きなセール面積を提供します。',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'ダクロン (クルージング用)',
        description: 'クルージング用セールの定番素材。頑丈でメンテナンスが容易。',
        points: [
          '耐久性と耐UV性能が高い',
          'メンテナンスコストが低い',
          '重量があり、荷重下で伸びやすい',
          '沿岸および遠洋のクルージングに最適',
        ],
      },
      {
        title: 'ラミネート (レース用)',
        description: 'ケブラー、スペクトラ、ダイニーマなどのハイテク素材。',
        highlight: true,
        points: [
          '伸びが最小限：空力効率を最大化',
          'ダクロンより大幅に軽量',
          '高コストで寿命が短い',
          'SA/D比が22を超える船には不可欠',
        ],
      },
    ],
    columns: 2,
  },
  {
    type: 'title',
    text: '帆走の物理学と復原性',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'セール面積は推進力を生み出しますが、同時に船を傾けようとする<strong>ヒールモーメント</strong>も発生させます。復原性は、船がこの傾く力に対抗できる「復原モーメント」によって測られます。バラストが少ない船で高いSA/D比を持つことは危険を伴う場合がありますが、深く重いキールを持つ船では同じ比率でも完璧に制御可能です。',
  },
  {
    type: 'paragraph',
    html: '実際の利用可能なパワーを計算するために、造船技師はSA/D比に加えて<strong>排水量・長さ比（DLR）</strong>をよく使用します。これら2つの比率を組み合わせることで、その船が「海のタグボート」なのか「レーシング・プレーナー」なのかを正確に説明できます。',
  },
  {
    type: 'tip',
    title: '復原性と安全性',
    html: 'SA/D比だけを孤立させて評価しないでください。比率22で復原角度90度の船は、比率18で復原角度60度の船よりもはるかに安全です。常に自船の復原力曲線を確認してください。',
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
    name: `使い方： ${title}`,
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
