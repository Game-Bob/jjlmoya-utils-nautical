import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TideCalculatorUI, TideCalculatorLocaleContent } from '../index';

const slug = 'gelgit-hesaplayici-tr';
const title = 'Gelgit Yüksekliği Hesaplayıcı';
const description =
  'Nautik "On İkide Bir" (Rule of Twelfths) kuralını kullanarak gelgit döngüsünün herhangi bir noktasındaki su derinliğini tahmin edin. Kıyı planlaması ve amatör denizci belgesi çalışmaları için idealdir.';

const ui: TideCalculatorUI = {
  parametersLabel: 'Parametreler',
  highTideLabel: 'Tam Deniz (Yüksek Gel)',
  lowTideLabel: 'Alçak Deniz (Düşük Gel)',
  targetTimeLabel: 'Sorgu zamanı',
  estimatedHeightLabel: 'Tahmini Yükseklik',
  metersLabel: 'metre',
  amplitudeLabel: 'Genlik (Amplitüd)',
  durationLabel: 'Süre',
  tableBreakdownLabel: 'On İkide Bir Dağılımı',
  tableHourLabel: 'Zaman',
  tableStateLabel: 'Durum',
  tableStartLabel: 'Başlangıç',
  tableEndLabel: 'Bitiş',
  statusUpLabel: 'Yükseliyor',
  statusDownLabel: 'Alçalıyor',
  statusOutOfRange: 'Aralık dışı',
  faqTitle: 'Sıkça Sorulan Sorular',
  bibliographyTitle: 'Kaynakça',
};

const faq: TideCalculatorLocaleContent['faq'] = [
  {
    question: 'On İkide Bir Kuralı nedir ve ne için kullanılır?',
    answer:
      'On İkide Bir Kuralı, tam deniz ve alçak deniz arasındaki herhangi bir noktada gelgit yüksekliğini tahmin etmek için navigasyonda kullanılan basitleştirilmiş bir matematiksel yöntemdir. Gelgit akışının yaklaşık bir sinüzoidal eğriyi takip ettiği gözlemi temel alınarak, toplam genlik 6 saatlik bir süre boyunca 12 parçaya bölünür (1/12, 2/12, 3/12, 3/12, 2/12, 1/12).',
  },
  {
    question: 'Bu yöntem gerçek navigasyon için güvenilir midir?',
    answer:
      'Hızlı planlama ve eğitim amaçları için çok yararlı bir teorik tahmin yöntemidir. Ancak, hava basıncı veya rüzgar gibi deniz seviyesini birkaç desimetre değiştirebilen meteorolojik faktörleri hesaba katmaz. Gerçek navigasyon için daima resmi gelgit tablolarına başvurun.',
  },
  {
    question: 'Gelgit yüksekliğini hesaplamak için hangi verilere ihtiyacım var?',
    answer:
      'Sorgulamak istediğiniz ana en yakın tam deniz ve alçak denizin zamanına ve yüksekliğine (metre cinsinden) ihtiyacınız vardır. Bu veriler gelgit almanaklarında veya marin hava durumu uygulamalarında bulunur.',
  },
  {
    question: 'Gelgit neden her zaman aynı hızda yükselmez?',
    answer:
      'Büyük su kütlelerinin eylemsizliği ve okyanus havzalarının konfigürasyonu nedeniyle. Gelgit, alçak denizden sonra yavaşça yükselmeye başlar, orta saatlerde (3/12 ve 4/12 saatleri) maksimum hıza ulaşır ve tam denize yaklaştıkça tekrar yavaşlar.',
  },
  {
    question: 'Atmosfer basıncı gelgiti nasıl etkiler?',
    answer:
      'Yüksek basınç (antisiklon) suyu aşağı iterek gerçek yüksekliği azaltır. Alçak basınç (depresyon) suyun daha fazla yükselmesine izin verir. Genel bir kural olarak, ortalamadan 1 hPa\'lık bir sapma, deniz seviyesinde yaklaşık 1 cm\'lik bir değişime karşılık gelir.',
  },
  {
    question: 'Gelgit genliği (tidal range) nedir?',
    answer:
      'Bir tam deniz ile hemen öncesindeki veya sonrasındaki alçak deniz arasındaki dikey yükseklik farkıdır. Bu ölçüm ayın evrelerine (syzygy - ilk dördün/son dördün) ve coğrafi konuma göre değişir.',
  },
];

const howTo: TideCalculatorLocaleContent['howTo'] = [
  {
    name: 'Tam deniz ve alçak denizi belirleyin',
    text: 'İlgilendiğiniz gelgit döngüsü için zaman ve yükseklik bilgilerini almak üzere gelgit almanağınıza başvurun.',
  },
  {
    name: 'Verileri hesaplayıcıya girin',
    text: 'Tam deniz ve alçak deniz zamanını ve yüksekliğini girin. Araç, süreyi ve genliği otomatik olarak belirleyecektir.',
  },
  {
    name: 'Sorgu zamanını ayarlayın',
    text: 'Su seviyesini bilmek istediğiniz zamanı ayarlayın. Grafikte vurgulanan tam noktayı göreceksiniz.',
  },
  {
    name: 'On ikide bir tablosunu analiz edin',
    text: 'Su seviyesinin tüm dönem boyunca nasıl dalgalanacağını anlamak için saat bazlı dağılımı inceleyin.',
  },
];

const bibliography: TideCalculatorLocaleContent['bibliography'] = [
  {
    name: 'Puertos del Estado - Tide Prediction',
    url: 'https://portus.puertos.es/#/',
  },
  {
    name: 'Instituto Hidrografico de la Marina',
    url: 'https://armada.defensa.gob.es/ihm/',
  },
];

const seo: TideCalculatorLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Gelgitte Uzmanlaşmak: Navigasyonda On İkide Bir Kuralı',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Kıyı navigasyonu ve sınırlı derinliğe sahip limanlara giriş, her an su derinliği hakkında kesin bilgi gerektirir. Günümüzde gerçek zamanlı veri sağlayan dijital uygulamalar ve GPS mevcut olsa da, <strong>On İkide Bir Kuralı</strong> her türlü tekne kaptanı eğitiminde temel bir araç olmaya devam etmektedir. Bu kural, karmaşık hesap makineleri olmadan bir gelgit döngüsünün herhangi bir noktasında gelgit yüksekliğini yaklaşık olarak hesaplamanıza olanak tanıyan matematiksel bir tahmin yöntemidir.',
  },
  {
    type: 'title',
    text: 'On İkide Bir Kuralı tam olarak nedir?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'On İkide Bir Kuralı, gelgit akışının sabit olmadığı gözlemine dayanır. Su, tam deniz ile alçak deniz arasındaki yaklaşık altı saat boyunca aynı hızda yükselmez veya alçalmaz. Bunun yerine, hareket sinüzoidal bir eğriyi takip eder. İlk saat boyunca gelgit yavaş hareket eder; orta saatlerde hızlanır ve bir sonraki uç noktaya yaklaştıkça tekrar yavaşlar.',
  },
  {
    type: 'table',
    headers: ['Döngü Saati', 'Oran', 'Akış Durumu'],
    rows: [
      ['<strong>1. Saat</strong>', 'Genliğin 1/12\'si', 'Yavaş başlangıç (Durgun su başı)'],
      ['<strong>2. Saat</strong>', 'Genliğin 2/12\'si', 'Hızlanan akış'],
      ['<strong>3. Saat</strong>', 'Genliğin 3/12\'si', 'Maksimum akış (Güçlü akıntı)'],
      ['<strong>4. Saat</strong>', 'Genliğin 3/12\'si', 'Sürekli akış'],
      ['<strong>5. Saat</strong>', 'Genliğin 2/12\'si', 'Belirgin yavaşlama'],
      ['<strong>6. Saat</strong>', 'Genliğin 1/12\'si', 'Son yavaşlama (Durgun suya doğru)'],
    ],
  },
  {
    type: 'title',
    text: 'Teknik sınırlamalar: Gerçek gelgiti etkileyen faktörler',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: 'Atmosfer basıncı', definition: 'Alçak basınç deniz seviyesini yükseltir; yüksek basınç ise düşürür. Genel kural olarak, ortalamadan her 1 hPa\'lık fark için ~1 cm değişim olur.' },
      { term: 'Kıyı rüzgarı', definition: 'Karaya doğru esen sürekli rüzgarlar, suyu gelgit tablolarında tahmin edilen seviyelerin üzerine yığabilir.' },
      { term: 'Yerel topografya', definition: 'Kıyı şekli, deniz tabanı derinliği ve nehir ağızlarının varlığı gelgit akışını önemli ölçüde geciktirebilir veya hızlandırabilir.' },
    ],
  },
  {
    type: 'tip',
    title: 'Güvenlik Notu',
    html: 'Bu araç matematiksel bir tahmin yöntemi kullanmaktadır. Meteorolojik faktörleri veya yerel topografyayı hesaba katmaz. Gerçek navigasyon için daima resmi gelgit tablolarına başvurun.',
  },
  {
    type: 'title',
    text: 'Yeni denizciler için temel kavramlar',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Gelgit genliği',
        definition: 'Tam deniz ile alçak deniz arasındaki dikey fark. Bazı bölgelerde birkaç metre olabilir; Akdeniz\'de ise neredeyse ihmal edilebilir düzeydedir.',
      },
      {
        term: 'Gelgit süresi',
        definition: 'Bir tam deniz ile bir sonraki alçak deniz arasındaki zaman aralığı. Tipik olarak yaklaşık 6 saat 12 dakikadır.',
      },
      {
        term: 'Harita düzlemi (Chart datum)',
        definition: 'Deniz haritalarındaki tüm derinliklerin ölçüldüğü referans seviyesidir. Gerçek derinlikler neredeyse hiçbir zaman belirtilenlerden daha az değildir.',
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
    name: `Nasıl kullanılır: ${title}`,
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
