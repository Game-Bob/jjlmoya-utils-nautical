import { bibliography } from '../bibliography';
import type { HullSpeedLocaleContent, HullSpeedUI } from '../index';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

const slug = 'tekne-govde-hizi-hesaplayici';
const title = 'Tekne gövde hızı hesaplayıcı';
const description =
  'Su hattı boyundan kuramsal gövde hızını bul, bir log ile karşılaştır ve yer değiştiren bir gövdenin kendi baş dalgasına ne zaman tırmandığını gör.';

const ui: HullSpeedUI = {
  metric: 'Metrik',
  imperial: 'İngiliz',
  unitGroup: 'Birimler',
  sceneLabel: 'Su hattı ve baş dalgası',
  hullSpeedLabel: 'Gövde hızı',
  knotsUnit: 'kn',
  kmhUnit: 'km/h',
  mphUnit: 'mph',
  ratioLabel: 'S/L',
  froudeLabel: 'Fr',
  lwlLabelMetric: 'Su hattı boyu',
  lwlLabelImperial: 'Su hattı boyu',
  lwlUnitM: 'm',
  lwlUnitFt: 'ft',
  observedLabel: 'Log hızı',
  observedHint: 'Kuramsal dalgayı çizmek için 0 bırak. Hâlâ çukurda oturup oturmadığını görmek için bir log yaz.',
  stretchHint: 'Su hattını uzatmak için gövdeyi sürükle',
  hullKindLabel: 'Gövde biçimi',
  displacement: 'Yer değiştiren',
  semi: 'Yarı yer değiştiren',
  planing: 'Kayıcı',
  boatsLabel: 'Örnek su hatları',
  dinghy: 'Dinghy',
  daysailer: 'Daysailer',
  cruiser: 'Gezi',
  bluewater: 'Açık deniz',
  workboat: 'İş teknesi',
  bandBelow: 'Hâlâ kısa bir dalga',
  bandNear: 'Dalga engeline yaklaşıyor',
  bandAt: 'Baş dalgasının üstünde',
  bandAbove: 'Dalgaya tırmanmaya çalışıyor',
  bandPlane: 'Kayışta, gövde hızının ötesinde',
  planingNote:
    'Kayıcı bir gövde bu dalgayı geride bırakabilir. Gövde hızı bir referanstır, duvar değildir.',
  displacementNote:
    'Yer değiştiren bir gövde kendi izine yetişince pahalıya öder. Bunu pratik tavan say, GPS hedefi değil.',
  semiNote:
    'Yarı yer değiştirenler yeterli güçle klasik oranın biraz üstüne çıkabilir, direncin sert artışı pahasına.',
  waveLegend: 'Baş dalgası',
  waterLegend: 'Su hattı',
  markLegend: 'Gövde hızı',
  faqTitle: 'Gövde hızı soruları',
  bibliographyTitle: 'Kaynaklar',
};

const faq: HullSpeedLocaleContent['faq'] = [
  {
    question: 'Bir yelkenlide gövde hızı nedir?',
    answer:
      'Yer değiştiren bir gövdenin, kendi su hattı kadar uzun bir baş dalgasıyla gittiği hızdır. Deniz birimlerinde su hattı boyunun karekökünün 1.34 katı olarak kestirilir. Kritik bir hızdır, sert bir fizik durdurucusu değildir.',
  },
  {
    question: 'Gövde hızı nasıl hesaplanır?',
    answer:
      'Su hattını fite çevir, karekökünü al ve düğüm için 1.34 ile çarp. 10 m su hattı yaklaşık 32.8 ft eder, yani 7.7 kn civarı. Aynı nokta 0.40 civarı bir Froude sayısına denk gelir.',
  },
  {
    question: 'Gövde hızı kayıcı tekneler için geçerli midir?',
    answer:
      'Formül, gövdenin yer değiştirme kipinde yapacağı dalgayı hâlâ anlatır. Kayıcılar ve birçok yarı yer değiştiren bu dalganın üstüne tırmanmak için tasarlanır. Sayıyı referans al, sonra gövde biçimi notunu oku.',
  },
  {
    question: 'Su hattı boyunu mu toplam boyu mu kullanmalıyım?',
    answer:
      'Dalgayı gerçekten yapan batık uzunluk olan su hattı boyunu (LWL) kullan. Toplam boy, civadra ve çıkıntılar dalga boyunu koymaz. LWL yi suda ölç, broşürdeki LOA yi değil.',
  },
];

const howTo: HullSpeedLocaleContent['howTo'] = [
  {
    name: 'Su hattını uzat',
    text: 'Gövdeyi sürükle, su hattı rayını kaydır ya da dinghy den iş teknesine kadar seç. Gövde hızı o boyun fit cinsinden karekökünün 1.34 katıdır.',
  },
  {
    name: 'Gövde biçimini seç',
    text: 'Yer değiştiren, yarı yer değiştiren veya kayıcı omurgayı ve teknenin kendi dalgasından çıkıp çıkamayacağını değiştirir.',
  },
  {
    name: 'Çukuru oku',
    text: 'Gövde hızında baş ve kıç dalgası bir su hattı aralıkta durur ve tekne çukurda oturur. Engel budur.',
  },
  {
    name: 'Bir log karşılaştır',
    text: 'Sudaki hızı gir. Daha kısa dalga hâlâ ucuza ittiğin anlamına gelir. Daha uzun dalga çukura tırmandığın anlamına gelir.',
  },
];

const seo: HullSpeedLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Gövde hızının aslında söylediği şey',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Yer değiştiren bir gövde baştan bir dalga, kıçtan bir dalga iter. Bu tepeler yaklaşık bir su hattı aralıkta durunca tekne kendi iziyle gider. Fazladan güç o zaman hız almak yerine su yığar. Denizcilerin gövde hızı dediği durum budur.',
  },
  {
    type: 'paragraph',
    html: 'Hesaplayıcı, su hattı fitinin karekökü başına 1.34 düğümlük yaygın amatör oranı kullanır. İnce uzun gövdeler biraz daha yüksek, mavnalar daha düşük oturabilir. Sonucu bir öğretim işareti say, sonra gerçek bir log ile karşılaştır.',
  },
  {
    type: 'title',
    text: 'Hesaplanmış su hattı örnekleri',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Su hattı', 'Gövde hızı', 'Tipik tekne'],
    rows: [
      ['4.2 m / 13.8 ft', '5.0 kn', 'Dinghy'],
      ['6.5 m / 21.3 ft', '6.2 kn', 'Daysailer'],
      ['10 m / 32.8 ft', '7.7 kn', 'Aile gezisi'],
      ['13.5 m / 44.3 ft', '8.9 kn', 'Açık deniz yatı'],
      ['18 m / 59.1 ft', '10.3 kn', 'Küçük iş teknesi'],
    ],
  },
  {
    type: 'title',
    text: 'Baş dalgası nasıl okunur',
    level: 2,
  },
  {
    type: 'list',
    items: [
      'İşaretin altında dalga kısadır ve tekne hâlâ ucuza sürülür.',
      'İşarete yakın baş dalgası dikleşir, yakıt veya yelken daha az hız alır.',
      'İşaretin üstünde dalga boyu LWL ile eşleşir. Yer değiştiren gövde klasik engeldedir.',
      'Üstünde yer değiştiren gövde izine tırmanır. Kayıcı zaten kalkmış olabilir.',
    ],
  },
  {
    type: 'tip',
    title: 'LWL ölç, LOA değil',
    html: 'Broşür boyu çıkıntıları sayar. Dalga batık su hattına bakar. Elinde yalnız LOA varsa hesaplanan gövde hızı iyimser kalır.',
  },
  {
    type: 'title',
    text: 'Bir cümlede Froude sayısı',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Gövde hızı, 0.40 civarı bir Froude sayısının rahat paketidir: hızın yerçekimi çarpı boyun kareköküne bölümü. Bu yüzden gövde biçimi aynı kalsa bile daha uzun su hatları daha hızlıdır. LWL yi uzatmak yer değiştirme sınırını temiz yükseltir; beygir eklemek yükseltmez.',
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
    name: `${title} nasıl kullanılır`,
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
