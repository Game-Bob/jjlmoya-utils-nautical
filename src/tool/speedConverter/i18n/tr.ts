import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SpeedConverterUI, SpeedConverterLocaleContent } from '../index';

const slug = 'hiz-donusturucu';
const title = 'Nautik Hız Dönüştürücü ve Beaufort Ölçeği';
const description =
  'Knot, km/s, m/s ve mph birimleri arasında anında dönüştürme yapın. Deniz durumu açıklamaları ve rüzgar etkilerini içeren tam Beaufort tablosu dahildir.';

const beaufortData = [
  { force: 0, name: 'Sakin', sea: 'Deniz süt liman, ayna gibi', effect: 'Duman dikine yükselir', kn: '0' },
  { force: 1, name: 'Esinti', sea: 'Deniz yüzeyinde pul şeklinde küçük kırışıklıklar', effect: 'Rüzgar yönü dumanın sürüklenmesiyle belli olur', kn: '1-3' },
  { force: 2, name: 'Hafif rüzgar', sea: 'Hafif dalgacıklar, dalga tepeleri kırılmaz', effect: 'Rüzgar yüzde hissedilir, yapraklar hışırdar', kn: '4-6' },
  { force: 3, name: 'Tatlı rüzgar', sea: 'Belirgin dalgacıklar, yer yer beyaz köpükler', effect: 'Yapraklar ve ince dallar sürekli hareket eder', kn: '7-10' },
  { force: 4, name: 'Orta rüzgar', sea: 'Küçük dalgalar uzamaya başlar, sık beyaz köpükler', effect: 'Toz ve kağıtlar uçuşur', kn: '11-16' },
  { force: 5, name: 'Sert rüzgar', sea: 'Orta boy dalgalar, her yerde beyaz köpükler', effect: 'Küçük ağaçlar sallanmaya başlar', kn: '17-21' },
  { force: 6, name: 'Kuvvetli rüzgar', sea: 'Büyük dalgalar oluşmaya başlar, beyaz köpüklü tepeler yaygındır', effect: 'Şemsiye kullanmak zorlaşır', kn: '22-27' },
  { force: 7, name: 'Fırtınamsı rüzgar', sea: 'Deniz kabarır, köpükler rüzgar yönünde çizgiler oluşturur', effect: 'Rüzgara karşı yürümek zorlaşır', kn: '28-33' },
  { force: 8, name: 'Fırtına', sea: 'Yüksek dalgalar, serpinti görüşü azaltır', effect: 'Yürümek çok güçleşir', kn: '34-40' },
  { force: 9, name: 'Kuvvetli fırtına', sea: 'Çok yüksek dalgalar, denizin yüzeyi beyaz bir görünüm alır', effect: 'Binalarda hafif hasar görülebilir', kn: '41-47' },
  { force: 10, name: 'Tam fırtına', sea: 'Çok yüksek ve devrilen dalgalar, deniz tamamen beyaz görünür', effect: 'Ağaçlar kökünden sökülür, önemli hasar oluşur', kn: '48-55' },
  { force: 11, name: 'Çok şiddetli fırtına', sea: 'Olağanüstü yüksek dalgalar, köpük denizi kaplar', effect: 'Yaygın hasar oluşur', kn: '56-63' },
  { force: 12, name: 'Kasırga', sea: 'Hava köpük ve serpinti ile doludur', effect: 'Tam bir felaket durumu', kn: '64+' },
];

const ui: SpeedConverterUI = {
  knLabel: 'Knot (kt)',
  kmhLabel: 'Kilometre/saat',
  msLabel: 'Metre/saniye',
  mphLabel: 'Mil/saat',
  beaufortTitle: 'Beaufort Ölçeği',
  forceLabel: 'Kuvvet',
  descriptionLabel: 'Açıklama',
  knotsLabel: 'Knot',
  effectLabel: 'Görsel Etki',
  seaStateLabel: 'Deniz Durumu',
  windEffectLabel: 'Karadaki Etki',
  faqTitle: 'Sıkça Sorulan Sorular': 'Kaynakça',
  beaufortDataJson: JSON.stringify(beaufortData),
};

const faq: SpeedConverterLocaleContent['faq'] = [
  {
    question: 'Tekne hızı neden knot birimiyle ölçülür?',
    answer: 'Knot, saatte bir deniz miline eşit olan hız birimidir. Kökeni tarihseldir: denizciler, eşit aralıklarla düğüm (knot) atılmış bir ipe bağlı tahta parçasını denize atarak ve belirli bir sürede kaç düğümün ellerinden geçtiğini sayarak hızı ölçerlerdi. Günümüzde denizcilik ve havacılıkta uluslararası standart birim olmaya devam etmektedir.',
  },
  {
    question: 'Beaufort Ölçeği nedir ve navigasyonda nasıl kullanılır?',
    answer: 'Beaufort Ölçeği, rüzgar hızını deniz ve karadaki gözlemlenebilir etkilerle ilişkilendiren ampirik bir ölçektir. 1805 yılında İngiliz Amiral Francis Beaufort tarafından geliştirilmiştir ve 0 (tam sakin) ile 12 (kasırga) arasındadır. Denizciler, deniz durumunu gözlemleyerek alet olmaksızın rüzgarın şiddetini tahmin etmek için kullanırlar.',
  },
  {
    question: 'Denizcilikte SOG ve STW arasındaki fark nedir?',
    answer: 'SOG (Speed Over Ground - Yere göre hız), GPS tarafından ölçülen, teknenin deniz tabanına göre gerçek hızıdır. STW (Speed Through Water - Suya göre hız) veya log hızı, teknenin çevresindeki suya göre hızıdır. İkisi arasındaki fark deniz akıntılarının etkisini yansıtır. SOG varış planlaması ve yakıt hesabı için; STW ise rüzgar sapması (leeway) hesabı için kullanılır.',
  },
  {
    question: 'Bir knot kaç km/s eder?',
    answer: 'Bir knot tam olarak saatte 1.852 kilometreye eşittir; bu da bir deniz milinin uzunluğudur (terrestriyal meridyenin bir yay dakikası olarak tanımlanır). Bu nedenle 10 knot 18.52 km/s, 20 knot 37.04 km/s ve 30 knot 55.56 km/s eder.',
  },
];

const howTo: SpeedConverterLocaleContent['howTo'] = [
  {
    name: 'Hızı herhangi bir birimde girin',
    text: 'Hız değerini ilgili alana (knot, km/s, m/s veya mph) yazın; diğer tüm alanlar otomatik olarak güncellenecektir.',
  },
  {
    name: 'Eşdeğer Beaufort kuvvetini kontrol edin',
    text: 'Beaufort kartı, girilen hıza karşılık gelen rüzgar kuvvetini, deniz durumu ve kara etkileriyle birlikte gerçek zamanlı olarak gösterir.',
  },
  {
    name: 'Beaufort tablosundaki bir satıra tıklayın',
    text: 'Tablodaki herhangi bir Beaufort derecesini seçerek o derecenin tüm birimlerdeki minimum hızını görebilirsiniz.',
  },
  {
    name: 'Sonuçları rotanızı planlamak için kullanın',
    text: 'Hız ve rüzgar bilgilerini birleştirerek koşulların tekneniz ve planladığınız seyir için uygun olup olmadığına karar verin.',
  },
];

const seo: SpeedConverterLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Nautik Hız Dönüştürücü ve Beaufort Ölçeği Kılavuzu',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Hız, deniz navigasyonunda temel bir veridir. Teknenizin kaç knot hız yaptığını bilmek, bir seyri planlamak için bunun km/s cinsinden karşılığını hesaplamak veya maruz kaldığınız rüzgarın Beaufort kuvvetini tahmin etmek, her denizcinin usta olması gereken hesaplamalardır.',
  },
  {
    type: 'paragraph',
    html: 'Bu nautik hız dönüştürücü; knot, km/s, m/s ve mph arasında anında dönüşüm yapmanıza olanak tanırken, deniz durumu açıklaması ve gözlemlenebilir rüzgar etkileriyle birlikte karşılık gelen Beaufort kuvvetini otomatik olarak belirler.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Standart Birim', value: 'Knot (kt)', icon: 'mdi:speedometer' },
      { label: 'Rüzgar Ölçeği', value: 'Beaufort (0-12)', icon: 'mdi:weather-windy' },
      { label: 'Temel Dönüşüm', value: '1 kt = 1.85 km/s', icon: 'mdi:swap-horizontal' },
    ],
  },
  {
    type: 'title',
    text: 'Hız neden Knot ile ölçülür?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>Knot (kt)</strong> deniz ve hava navigasyonundaki resmi hız birimidir. Tanımı kesindir: bir knot, saatte bir deniz miline eşittir. Deniz mili (1852 m) ise terrestriyal meridyenin bir yay dakikası olarak tanımlanır. Dünya geometrisiyle olan bu doğrudan ilişki, knot birimini seyir için özellikle pratik kılar ve mesafelerin herhangi bir dönüştürme yapmadan doğrudan deniz haritası üzerinde tahmin edilmesine olanak tanır.',
  },
  {
    type: 'paragraph',
    html: 'Tarihsel olarak denizciler hızı <em>parakete</em> kullanarak ölçerlerdi: Her 14.4 metrede bir düğüm atılmış bir ipe bağlı üçgen bir tahta parçası denize atılırdı (bu mesafe 30 saniyede bir deniz milinin orantılı kesridir). Bu süre zarfında parmaklarının arasından geçen düğümleri saymak hızı verirdi ve bugün kullandığımız terim böyle doğdu.',
  },
  {
    type: 'title',
    text: 'Beaufort Ölçeği: Denizcinin Gözü',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>Beaufort Ölçeği</strong>, 1805 yılında İngiliz Amiral Sir Francis Beaufort tarafından alet kullanmadan, gözlemlenebilir etkilerden rüzgar şiddetini sınıflandırmak için ampirik bir yöntem olarak geliştirilmiştir. Başlangıçta bir geminin ne kadar yelken taşıyabileceğini tahmin etmek için tasarlanmış olsa da günümüzde deniz meteorolojisinde evrensel bir referanstır.',
  },
  {
    type: 'paragraph',
    html: 'Ölçek <strong>Kuvvet 0</strong>\'dan (tam sakin, ayna gibi deniz) <strong>Kuvvet 12</strong>\'ye (14 metrenin üzerinde dalgaların olduğu kasırga koşulları) kadar uzanır. Amatör denizciler için kritik limitler genellikle küçük tekneler için Kuvvet 6 (kuvvetli rüzgar, 22-27 knot) ve açık deniz yatları için Kuvvet 7-8\'dir.',
  },
  {
    type: 'table',
    headers: ['Beaufort Kuvveti', 'Açıklama', 'Deniz Durumu'],
    rows: [
      ['0', 'Sakin', 'Ayna gibi deniz'],
      ['3', 'Tatlı rüzgar', 'Yer yer beyaz köpükler, dalga tepeleri kırılmaya başlar'],
      ['6', 'Kuvvetli rüzgar', 'Büyük dalgalar, beyaz köpüklü tepeler, serpinti görülebilir'],
      ['9', 'Kuvvetli fırtına', 'Çok yüksek dalgalar, köpük ve serpinti nedeniyle görüş azalır'],
      ['12', 'Kasırga', 'Hava tamamen köpük dolu, deniz tamamen beyaz'],
    ],
  },
  {
    type: 'title',
    text: 'Nautik Hız Sözlüğü',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: 'Knot (kt)', definition: 'Saatte bir deniz miline (1852 m/s) eşit hız birimi. Havacılık ve denizcilikte uluslararası standart.' },
      { term: 'SOG (Speed Over Ground)', definition: 'Teknenin yere (deniz tabanına) göre hızı. Akıntıların tekne hızı üzerindeki etkisini yansıtır.' },
      { term: 'Log Hızı (STW)', definition: 'Teknenin suya göre hızı. Akıntı etkisini içermez; rüzgar sapması hesabı için temeldir.' },
      { term: 'Nispi (Görünen) Rüzgar', definition: 'Teknedekilerin hissettiği rüzgardır, gerçek rüzgar ile seyir rüzgarının vektörel toplamıdır. Gerçek rüzgardan her zaman farklıdır.' },
    ],
  },
  {
    type: 'title',
    text: 'Hızlı Dönüşüm Formülleri',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Dijital bir cihazınız olmadığında manuel dönüşüm yapmak için bu pratik tahminleri kullanabilirsiniz:',
  },
  {
    type: 'list',
    items: [
      '<strong>Knot -> km/s:</strong> Knot değerini 1.852 ile çarpın. Hızlı tahmin: knot x 2, eksi %%8. Örn: 10 kt ≈ 20 - 1.6 = 18.4 km/s.',
      '<strong>Knot -> mph:</strong> Knot değerini 1.15 ile çarpın. Hızlı tahmin: knot + %%15. Örn: 20 kt ≈ 23 mph.',
      '<strong>Knot -> m/s:</strong> Knot değerini 0.514 ile çarpın. Hızlı tahmin: knot değerini 2\'ye bölün. Örn: 10 kt ≈ 5 m/s.',
    ],
  },
  {
    type: 'tip',
    title: 'Güvenlik ve Meteoroloji',
    html: 'Denize açılmadan önce mutlaka deniz meteoroloji raporlarını inceleyin. Beaufort 4-5 çoğu tekne için yönetilebilirdir; Kuvvet 6 ve üzerinde, yeterli deneyiminiz yoksa seyri ertelemeyi ciddi şekilde düşünün.',
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
    name: `Nasıl kullanılır: ${title}`,
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
