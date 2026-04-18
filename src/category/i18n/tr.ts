import type { CategoryLocaleContent } from '../index';

const slug = 'yelken-ve-denizcilik';
const title = 'Yelken & Denizcilik';
const description =
  'Denizciler için nautik hesaplama araçları: gelgit, menzil, yelken alanı, birim dönüştürücüler ve hız. RYA ve Yachtmaster sınavı çalışması için ideal.';

const seo: CategoryLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Neden yelken ve navigasyonda dijital araçlar kullanılmalı?',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Modern navigasyon, dijital araçların ortaya çıkmasıyla köklü bir dönüşüm geçirdi. İster küçük bir eğlence teknesinde olun, ister bir kruvaziyer yatın dümenini tutun, konum, rüzgar ve akıntı verilerini anında işleme kabiliyeti yalnızca bir kolaylık meselesi değil — denizde güvenliğin temel bir direğidir.',
  },
  {
    type: 'paragraph',
    html: 'Tarihsel olarak denizci, geniş okyanusta pozisyonunu belirlemek için yalnızca sekstana, deniz kronometresine ve indirgeme tablolarına bağımlıydı. Bugün, sekstanın romantizmi devam etse de, operasyonel gerçeklik yalnızca dijital hesaplama araçlarının sağlayabileceği bir yanıt hızını talep etmektedir.',
  },
  {
    type: 'title',
    text: 'Modern Navigatör için Temel Yönler',
    level: 2,
  },
  {
    type: 'title',
    text: 'Coğrafi Konum ve Yüksek Hassasiyetli Dijital Kartografi',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Dijital kartografi navigasyonu demokratikleştirdi; daha önce büyük ticari gemilerle sınırlı olan bilgilere küçük teknelerin de erişimini sağladı. Sorumlu bir kaptan dijital araçları kendi kararını değiştirmek için değil, doğrulamak için kullanır.',
  },
  {
    type: 'list',
    items: [
      'Veri girişi hassasiyeti: Minimum yazım hataları sizi hedefinizden denizlerce uzaklaştırabilir.',
      'Cihazlar arası uyumluluk: Tablette yapılan geçiş planlamasını köprü araçlarıyla senkronize edin.',
      'Donanım arızası yedeği: Hafif web uygulamaları, gemideki plotter çöktüğünde bir sigortadır.',
      'Geçiş Planlama: Nautik hesaplayıcılar yakıt tüketimi ve mesafelerin doğru tahminini sağlar.',
    ],
  },
  {
    type: 'title',
    text: 'Deniz Meteorolojisi ve Rota Optimizasyonu',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Rüzgar ve deniz durumu yelkenciliğin gerçek hükümdarlarıdır. Rüzgar ölçeklerinin (Beaufort ölçeği gibi) doğru yorumlanması ve deniz mili gibi pratik birimlere dönüştürülmesi her navigatörün günlük gerçekliğidir.',
  },
  {
    type: 'tip',
    title: 'Yedeklilik ve B Planının önemi',
    html: 'Tüm navigasyonunuzu hiçbir zaman tek bir elektronik sisteme güvenmeyin. Kritik ara noktalarınızın yedek kopyasını her zaman kağıt üzerinde saklayın. Web araçları seyahat öncesi planlama için mükemmeldir, ancak iyi bir denizci her zaman ekran gerektirmeyen bir acil durum planına sahiptir.',
  },
  {
    type: 'title',
    text: 'Denizcilik Eğitimi ve Hesaplayıcıların Kullanımı',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Denizcilik yeterliklerine yönelik resmi sınavlarda (RYA Dayskipper veya Yachtmaster gibi) bile harita hesaplamaları zorunlu olmaya devam etmektedir. Dijital araçlar, adayların dümen açısı alıştırmalarını, gel-git hesaplamalarını ve pusula düzeltmelerini doğrulamasına olanak tanıyan mükemmel bir çalışma arkadaşı olarak hizmet vermektedir.',
  },
  {
    type: 'paragraph',
    html: 'Araç koleksiyonumuz, kağıt haritaların akademik titizliği ile modern navigasyonun anlık gerçekliği arasındaki köprü olmayı hedeflemektedir. Her kaptan, meraklı veya profesyonelin demirden ayrılmadan önce ihtiyaç duydukları hızlı ve doğru verileri burada bulmasını istiyoruz.',
  },
];

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo,
};
