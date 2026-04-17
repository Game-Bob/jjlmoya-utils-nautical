import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { NauticalConverterUI, NauticalConverterLocaleContent } from '../index';

const slug = 'birim-donusturucu';
const title = 'Denizcilik Birim Dönüştürücü';
const description =
  'Deniz mili, knot, kulaç ve atmosferik basınç birimlerini dönüştürün. Rüzgar hızı için etkileşimli Beaufort ölçeğini içerir.';

const ui: NauticalConverterUI = {
  distanceCategoryLabel: 'Mesafe',
  speedCategoryLabel: 'Hız',
  depthCategoryLabel: 'Derinlik',
  pressureCategoryLabel: 'Basınç',
  nmLabel: 'Deniz Mili (nm)',
  kmLabel: 'Kilometre (km)',
  miLabel: 'Kara Mili (mi)',
  cableLabel: 'Pusula Kablosu (Cable)',
  knLabel: 'Knot (kn)',
  kmhLabel: 'km/s',
  msLabel: 'm/s',
  mphLabel: 'mph',
  brozaLabel: 'Kulaç',
  mLabel: 'Metre (m)',
  ftLabel: 'Ayak (ft)',
  mbarLabel: 'Milibar (mbar)',
  mmhgLabel: 'mmHg',
  inhgLabel: 'inHg',
  atmLabel: 'Atmosfer (atm)',
  windSeaLabel: 'Deniz durumu',
  forceLabel: 'Kuvvet',
  effectLabel: 'Etki',
  copyLabel: 'Değeri kopyala',
  faqTitle: 'Sıkça Sorulan Sorular',
  bibliographyTitle: 'Kaynakça',
};

const faq: NauticalConverterLocaleContent['faq'] = [
  {
    question: 'Bir deniz mili kaç kilometredir?',
    answer: 'Bir deniz mili tam olarak 1,852 kilometreye veya 1852 metreye eşittir. Bu ölçüm, Dünya yüzeyindeki bir enlem dakikasına karşılık gelir.',
  },
  {
    question: 'Knot ile saatteki kilometre arasındaki fark nedir?',
    answer: 'Bir knot saatte bir deniz mili olduğu için 1,852 km/s\'ye eşittir. Knot birimini km/s\'ye çevirmek için 1,852 ile çarpmanız yeterlidir.',
  },
  {
    question: 'Neden denizde kilometre yerine deniz mili kullanılır?',
    answer: 'Çünkü bir deniz mili bir enlem dakikasına karşılık gelir; bu da harita ve pusula ile yapılan seyir hesaplamalarını büyük ölçüde basitleştirir. Enlemdeki bir dakikalık değişim, tam olarak bir deniz miline eşittir.',
  },
  {
    question: 'Beaufort ölçeği nedir?',
    answer: 'Rüzgar hızını deniz üzerindeki gözlemlenebilir etkilerle ilişkilendiren ampirik bir ölçektir. 0 (süt liman) ile 12 (kasırga) arasında değişir; kıyı ve açık deniz seyri için temeldir.',
  },
  {
    question: 'Deniz meteorolojisinde hangi basınç birimi kullanılır?',
    answer: 'Deniz meteorolojisinde temel olarak milibar (mbar) veya eşdeğeri olan hektopaskal (hPa) kullanılır. Deniz seviyesindeki normal atmosferik basınç 1013,25 mbar\'dır.',
  },
  {
    question: 'Bir kulaç kaç ayaktır (ft)?',
    answer: 'Bir kulaç tam olarak 6 ayağa, yani 1,8288 metreye eşittir. Temel olarak İngilizce konuşulan ülkelerde eski deniz haritalarındaki derinlikleri ifade etmek için kullanılır.',
  },
];

const howTo: NauticalConverterLocaleContent['howTo'] = [
  {
    name: 'Dönüştürme kategorisini seçin',
    text: 'Dönüştürmek istediğiniz büyüklüğe göre dört sekmeden birine tıklayın: Mesafe, Hız, Derinlik veya Basınç.',
  },
  {
    name: 'Herhangi bir alana değeri girin',
    text: 'Bildiğiniz birimdeki sayıyı yazın. Diğer tüm birimler gerçek zamanlı olarak otomatik olarak güncellenecektir.',
  },
  {
    name: 'Beaufort ölçeğine bakın (hız)',
    text: 'Hız sekmesine bir hız girdiğinizde, ilgili Beaufort kuvvetini ve beklenen deniz durumunu gösteren bir kart belirecektir.',
  },
  {
    name: 'Sonucu kopyalayın',
    text: 'Değeri panoya kopyalamak için herhangi bir alanın yanındaki kopyala düğmesini kullanın.',
  },
];

const bibliography: NauticalConverterLocaleContent['bibliography'] = [
  {
    name: 'Instituto Hidrografico de la Marina',
    url: 'https://armada.defensa.gob.es/ihm/',
  },
  {
    name: 'NOAA - National Weather Service',
    url: 'https://www.weather.gov/mfl/beaufort',
  },
];

const seo: NauticalConverterLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Denizcilik birimlerinde hassasiyetin önemi',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Denizde seyir yapmak, yüzyıllar süren deniz araştırmalarıyla rafine edilmiş kendine has bir dil, bir ölçüm sistemi gerektirir. Denizcilik birimleri tarihsel bir tuhaflık değil, Dünya\'nın geometrisi ve denizcinin pratik ihtiyaçlarıyla uyumlu, matematiksel olarak tutarlı araçlardır.',
  },
  {
    type: 'paragraph',
    html: 'Birkaç metrelik hatanın nadiren ciddi sonuçlar doğurduğu karanın aksine, denizde yanlış bir dönüştürme, güvenli bir yerde demirlemek ile bir sığlıkta karaya oturmak arasındaki fark anlamına gelebilir. Birimlerdeki hassasiyet akademik bir mesele değildir: seyirin kendisidir.',
  },
  {
    type: 'paragraph',
    html: 'Kıyıdan uzaklaştığımızda, görsel referansların eksikliği, hesaplanan konumu üzerinde hareket edebileceğimiz tek gerçeklik haline getirir. Deniz mili, kilometre, knot ve metre arasında doğru dönüştürme yapmayı bilmek, sorumlu denizci için bir seçenek değil, zorunluluktur.',
  },
  {
    type: 'title',
    text: 'Neden kilometre yerine deniz mili kullanıyoruz?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Cevap, Dünya\'nın kendi şeklinde yatar. Bir <strong>deniz mili</strong> Dünya yüzeyindeki tam olarak bir enlem dakikasına, yani 1852 metreye eşittir. Açısal ölçüm ile doğrusal mesafe arasındaki bu doğrudan uygunluk, seyrüseferdeki evrensel kullanımının anahtarıdır.',
  },
  {
    type: 'paragraph',
    html: 'Bu birimi kullanarak, bir deniz haritasındaki enlemdeki bir dakikalık değişim, her zaman kat edilen tam olarak bir deniz miline karşılık gelir. Bu durum; ek dönüştürme katsayılarına ihtiyaç duymadan konum, hız ve varış süresi hesaplamalarını muazzam derecede basitleştirir.',
  },
  {
    type: 'title',
    text: 'Denizde hız: Knot',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>Knot</strong>, saatte bir deniz miline eşit olan hız birimidir. Adı, düzenli aralıklarla düğümler (knots) atılmış bir ipe bağlı tahta parçasının suya atılması ve sabit bir sürede parmakların arasından kaç düğümün geçtiğinin sayılmasıyla hızı ölçen eski bir teknikten gelmektedir.',
  },
  {
    type: 'paragraph',
    html: 'Bugün GPS uyduları ve sofistike elektronik sistemler kullansak da, knot uluslararası havacılık ve deniz navigasyonunda standart birim olmaya devam etmektedir. Bir knot 1,852 km/s veya 0,514 m/sn\'ye eşittir.',
  },
  {
    type: 'title',
    text: 'Derinlik ve demirleme: Kulaç, Metre ve Ayak',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Denizcilik dünyasında derinlik sadece bir istatistik değildir: güvenli bir demirleme yeri ile karaya oturma arasındaki farktır. Tarihsel olarak <strong>kulaç</strong> (1,8288 metre veya tam olarak 6 ayak), İngilizce konuşulan dünyada derinlikleri ölçmek için baskın birimdi.',
  },
  {
    type: 'paragraph',
    html: 'Ancak küreselleşme ve teknoloji, çoğu modern haritada ve sonar cihazında metre kullanımını standart hale getirmiştir. Modern denizci, özellikle eski haritalara veya İngiliz ölçü birimlerine göre kalibre edilmiş aletlere bakarken kulaç, metre ve ayak birimleri arasında rahatça geçiş yapabilmelidir.',
  },
  {
    type: 'title',
    text: 'Meteoroloji ve Atmosferik Basınç',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Bir kaptan için barometre hava durumunun kahinidir. <strong>Milibar</strong> (mbar) cinsinden ölçülen atmosferik basınç, yaklaşan hava değişikliklerinin en güvenilir göstergesidir. Basınçtaki hızlı düşüş, şiddetli rüzgarların ve kötü havanın habercisidir.',
  },
  {
    type: 'paragraph',
    html: 'Basınç değişimlerini anlamak her denizci için hayati önem taşır. Deniz seviyesindeki normal atmosferik basınç 1013,25 mbar\'dır (bir atmosfer). Daha yüksek değerler istikrarlı havayı gösterirken, daha düşük değerler, özellikle hızla düşüyorsa, potansiyel olarak tehlikeli alçak basınç sistemlerinin yaklaştığına işaret eder.',
  },
  {
    type: 'title',
    text: 'Rüzgar ve Deniz Ölçekleri: Beaufort\'tan Douglas\'a',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Knot cinsinden rüzgar hızı, <strong>Beaufort ölçeği</strong> ile ilişkilendirildiğinde anlam kazanan bir sayıdır. 1805 yılında İngiliz Amiral Francis Beaufort tarafından geliştirilen bu ampirik ölçek, rüzgar hızını hem deniz yüzeyindeki hem de karadaki gözlemlenebilir etkilerle ilişkilendirir.',
  },
  {
    type: 'list',
    items: [
      '<strong>Kuvvet 0-3 (0-10 kn):</strong> Sakin seyir koşulları, öğrenmek veya aile gezileri için ideal.',
      '<strong>Kuvvet 4-5 (11-21 kn):</strong> Yatlar için ideal yelken rüzgarı, orta dalgalar ve beyaz köpükler.',
      '<strong>Kuvvet 6-7 (22-33 kn):</strong> Sert rüzgardan fırtınamsı rüzgara. Deneyim ve camadan vurma (reefing) önerilir.',
      '<strong>Kuvvet 8+ (34 kn üzeri):</strong> Fırtına. Sadece uygun teknelere sahip deneyimli denizciler için.',
    ],
  },
  {
    type: 'paragraph',
    html: 'Benzer şekilde, Douglas ölçeği deniz durumunu 0\'dan (çarşaf gibi) 9\'a (olağanüstü) kadar derecelendirerek denizcinin hava raporlarına dayanarak ufkun ötesindeki koşulları tahmin etmesine olanak tanır.',
  },
  {
    type: 'tip',
    title: 'Güvenlik İpucu',
    html: 'Bir seyahat planlamak için bu dönüştürücüyü kullanırken, gerçek koşulların tahminlerden farklı olabileceğini her zaman göz önünde bulundurun. Resmi hava durumu tahminlerine danışın ve denizin hızla değişme kapasitesini asla hafife almayın.',
  },
  {
    type: 'title',
    text: 'Çevrimdışı planlama ve hareket kabiliyeti',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Bu araç, tarayıcıya yüklendikten sonra internet bağlantısı olmadan çalışacak şekilde tasarlanmıştır; bu da onu bağlantının sınırlı olabileceği teknede kullanım için ideal kılar. Tüm dönüştürmeler, sunucuya veri göndermeden cihaz üzerinde yerel olarak hesaplanır.',
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
    name: `Nasıl kullanılır: ${title}`,
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
