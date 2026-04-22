import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EnduranceUI, EnduranceLocaleContent } from '../index';

const slug = 'menzil-hesaplayici';
const title = 'Denizcilik Menzil Hesaplayıcı';
const description =
  'Yakıt tüketimi, depo kapasitesi ve seyir hızına dayalı olarak maksimum menzilinizi ve güvenli mesafenizi hesaplayın. Motorlu tekneler için yakıt yönetimi.';

const ui: EnduranceUI = {
  tankCapacityLabel: 'Depo Kapasitesi',
  mainTankLabel: 'Ana',
  auxTankLabel: 'Yedek',
  currentFuelLabel: 'Mevcut Yakıt',
  seaConditionsLabel: 'Deniz / Rüzgar Koşulları',
  consumptionLabel: 'Teorik Tüketim',
  cruiseSpeedLabel: 'Seyir Hızı',
  reserveLabel: 'Yedek',
  fuelPriceLabel: 'Litre Başına Fiyat',
  maxRangeLabel: 'Maksimum Menzil',
  realPerformanceLabel: 'Gerçek Performans',
  hoursLabel: 'Menzil Saati',
  safeMilesLabel: 'Güvenli Miller',
  tankValueLabel: 'Depo Değeri',
  inverseCalcLabel: 'Ters Hesaplama: Ne kadar yakıt almalıyım?',
  desiredDistLabel: 'Hedeflenen Mesafe',
  minFuelLabel: 'Gereken Minimum Yakıt',
  warningLabel: 'Hatırlatma: Deniz güvenliği için %20 yedek yakıt önerilen mutlak minimumdur.',
  seaCalm: 'Süt Liman (1.0x)',
  seaLight: 'Hafif Çalkantılı (+%15)',
  seaModerate: 'Orta Çalkantılı (+%30)',
  seaStorm: 'Fırtınalı (+%60)',
  faqTitle: 'Sıkça Sorulan Sorular': 'Kaynakça',
};

const faq: EnduranceLocaleContent['faq'] = [
  {
    question: 'Bir motorlu teknenin menzili nasıl hesaplanır?',
    answer: 'Menzil, toplam saati bulmak için mevcut yakıtın saatlik tüketime bölünmesi ve ardından bu sürenin seyir hızıyla çarpılmasıyla hesaplanır. Araç, gerçek seyir koşullarını yansıtmak için bir deniz durumu faktörü de ekler.',
  },
  {
    question: 'Deniz navigasyonunda neden %20 yedek yakıt önerilir?',
    answer: '%20 yedek, öngörülemeyen durumlar (ters akıntılar, kötü hava nedeniyle rotadan sapan yollar, tüketim tahminlerindeki hatalar veya başka bir tekneye yardım etme ihtiyacı) için yeterli yakıtı garanti eden bir deniz güvenliği standardıdır. Birçok sigortacı ve liman başkanlığı bunu zorunlu kabul eder.',
  },
  {
    question: 'L/NM performansı nedir ve planlamayı nasıl etkiler?',
    answer: 'Deniz mili başına litre (L/NM) cinsinden performans, motorun deniz koşullarındaki gerçek verimliliğidir. Saatlik tüketimin aksine, hızınız ne olursa olsun belirli bir mesafeyi kat etmek için tam olarak ne kadar yakıta ihtiyacınız olduğunu hesaplamanıza olanak tanır.',
  },
  {
    question: 'Deniz durumu gerçek tüketimi nasıl etkiler?',
    answer: 'Deniz durumu tüketimi artırır çünkü gövde su ve rüzgar direncine karşı daha fazla zorlanır. Hafif çalkantılı denizde tüketim %15 artar, orta çalkantılıda %30 ve fırtınada %60 veya daha fazla fırlayabilir. Bu faktörü görmezden gelmek, limana varmadan yakıtın bitmesine neden olabilir.',
  },
];

const howTo: EnduranceLocaleContent['howTo'] = [
  {
    name: 'Depo kapasitenizi girin',
    text: 'Ana deponun litre miktarını ve varsa yedek depoyu girin. Araç, mevcut doluluk yüzdesini hesaplayacaktır.',
  },
  {
    name: 'Mevcut yakıt seviyesini girin',
    text: 'Şu anda elinizde bulunan gerçek litre miktarını girin. Bunu teknenizin göstergesinden ölçebilir veya son yakıt alımından tahmin edebilirsiniz.',
  },
  {
    name: 'Seyir koşullarını ayarlayın',
    text: 'Geçişiniz için beklenen deniz durumunu seçin. Deniz faktörü, teorik tüketimi beklenen gerçek tüketime göre düzeltir.',
  },
  {
    name: 'Tüketim ve seyir hızını girin',
    text: 'Saatlik tüketim ve genellikle seyrettiğiniz hız için üretici verilerini veya kendi kayıtlarınızı kullanın.',
  },
  {
    name: 'Güvenli mesafeyi ve ters hesaplamayı gözden geçirin',
    text: 'Araç, kaç mil güvenle kat edebileceğinizi ve belirli bir hedefe ulaşmak için ne kadar yakıta ihtiyacınız olduğunu gösterir.',
  },
];

const seo: EnduranceLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Motorlu Navigasyonda Yakıt Yönetimi ve Menzil',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>Deniz menzili</strong>, bir motorlu tekneyle yola çıkmadan önceki en kritik hesaplamalardan biridir. Elinizdeki yakıtla tam olarak kaç mil kat edebileceğinizi bilmek, planlı bir geçiş ile denizdeki acil bir durum arasındaki farkı belirler.',
  },
  {
    type: 'paragraph',
    html: 'Bu menzil hesaplayıcı, yakıt yönetiminin her durumda eksiksiz ve güvenilir olması için <strong>deniz durumu faktörünü</strong>, emniyet yedeği yüzdesini ve ters yakıt hesaplamasını entegre eder.',
  },
  {
    type: 'title',
    text: 'Altın Kural: Üçte Bir Kuralı',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Deniz navigasyonundaki klasik yakıt yönetimi kuralı, her zaman bir emniyet marjı garanti etmek için depoyu üç eşit parçaya böler:',
  },
  {
    type: 'list',
    items: [
      '<strong>Üçte biri gidiş için:</strong> Planlanan hedefe ulaşmak için gereken yakıt.',
      '<strong>Üçte biri dönüş için:</strong> Kalkış limanına veya en yakın limana geri dönmek için gereken yakıt.',
      '<strong>Üçte biri yedek olarak:</strong> Beklenmedik olaylar, akıntılar veya olumsuz koşullar için emniyet marjı.',
    ],
  },
  {
    type: 'paragraph',
    html: 'Hesaplayıcıda yedek yüzdesini kendi kriterlerinize göre ayarlayabilirsiniz, ancak <strong>%20\'nin altına inmek asla önerilmez</strong>. Büyük depolarda veya uzun geçişlerde, birçok deneyimli kaptan bu marjı %30 hatta %33\'e çıkarır.',
  },
  {
    type: 'title',
    text: 'Tüketimi Etkileyen Faktörler (l/h)',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Üreticinin teorik tüketimi ideal laboratuvar koşulları altında hesaplanır. Uygulamada, birden fazla faktör <strong>gerçek yakıt tüketimini</strong> değiştirir. Gövde hızı en belirleyici olanıdır: ekonomik hızın üzerinde seyretmek, kat edilen mil başına tüketimi ikiye hatta üçe katlayabilir.',
  },
  {
    type: 'table',
    headers: ['Navigasyon Durumu', 'Menzil Üzerindeki Etkisi', 'Tavsiye'],
    rows: [
      ['<strong>Kirli Gövde</strong>', 'Menzili %20\'ye kadar azaltır', 'Sezon öncesi gövdeyi temizleyin'],
      ['<strong>Karşı Akıntı</strong>', 'Etkili hızı %30 azaltabilir', 'Her zaman yere göre hız (SOG) ile hesaplayın'],
      ['<strong>Karşı Rüzgar</strong>', 'Direnci ve tüketimi %10-25 artırır', 'Hafif veya orta çalkantılı deniz faktörünü kullanın'],
      ['<strong>Aşırı Yükleme</strong>', 'Su çekimini ve direnci artırır', 'Hesaplama yapmadan önce ekipman ve kumanyaları tartın'],
    ],
  },
  {
    type: 'title',
    text: 'Menzil Teknik Terimler Sözlüğü',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: 'Performans (L/NM)', definition: 'Kat edilen deniz mili başına tüketilen yakıt litresi. Tüketimi gerçek mesafeye bağladığı için geçiş planlamasında en yararlı göstergedir.' },
      { term: 'Seyir Hızı', definition: 'Motorun hız ve tüketim arasında en iyi dengeyi sunduğu optimum hız. Genellikle maksimum gücün %70\'i ile %80\'i arasındadır.' },
      { term: 'Kritik Yedek', definition: 'Deponun asla tüketilmemesi gereken yüzdesi. Beklenmedik durumları karşılamak ve yakıt devresine hava girmesini önlemek için minimum %20 önerilir.' },
      { term: 'Özgül Tüketim', definition: 'Üretilen kilovat-saat güç başına gram yakıt (g/kWh). Farklı tahrik sistemleri arasında verimliliği karşılaştırmayı sağlayan teknik motor ölçümü.' },
    ],
  },
  {
    type: 'title',
    text: 'Tortu ve Hareket Tehlikesi',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Düşük yakıt seviyelerine sahip teknelerde sıkça karşılaşılan bir sorun kaynağı <strong>depo dibi tortusu</strong>dur. Seviye çok düştüğünde, yıllar içinde biriken tortular filtreye ulaşabilir ve onu tıkayabilir, böylece gösterge birkaç litre gösterse bile motorun yakıtsız kalmasına neden olabilir.',
  },
  {
    type: 'paragraph',
    html: 'Az yakıtla denizde teknenin hareketi de sorunlara yol açabilir: Sıvı dalgalarla çalkalanır ve yakıt pompasını anlık olarak susuz bırakabilir. Yedeği korumak, bunun liman giriş manevrası gibi kritik bir anda gerçekleşmemesini sağlar.',
  },
  {
    type: 'tip',
    title: 'Yakıt Tasarrufu İpucu',
    html: 'Hızı olağan seyir hızınızın %10-15 altına düşürmek verimliliği %30\'a kadar artırabilir. Zamanınız varsa ve hava uygunsa, daha yavaş gitmek her zaman en ekonomik ve güvenli karardır.',
  },
  {
    type: 'title',
    text: 'Deniz Mili (NM) ile Kilometre Arasındaki Fark',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Bir <strong>deniz mili</strong> 1.852 metreye (1,852 km) eşittir ve denizcilik ile havacılık navigasyonunda evrensel mesafe birimidir. Coğrafi bir derecenin bir yay dakikasına dayanır, bu da onu coğrafi koordinatlardaki haritalarla navigasyon için ideal kılar. Saatteki deniz mili cinsinden hıza knot (kn) denir.',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Analog İğneli Gösterge',
        description: 'Geleneksel şamandıra sistemi',
        points: [
          'Düşük maliyet ve basit kurulum',
          'Çalışmak için elektriğe ihtiyaç duymaz',
          'Yakıt hareketi nedeniyle dalgalı denizlerde hatalı ölçüm yapar',
          'Tüketimi veya tahmini menzili göstermez',
        ],
      },
      {
        title: 'Dijital Akış Hesaplayıcı',
        description: 'Elektronik akış sensörleri',
        highlight: true,
        points: [
          'Gerçek tüketimde %1-2 doğruluk',
          'Menzil, tüketim ve maliyeti gerçek zamanlı gösterir',
          'Chartplotter ve NMEA 2000 ile entegre edilebilir',
          'Başlangıç kalibrasyonu ve bakım gerektirir',
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
    name: `Nasıl kullanılır: ${title}`,
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
