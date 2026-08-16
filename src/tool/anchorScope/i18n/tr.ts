import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AnchorScopeLocaleContent } from '../entry';
import type { AnchorScopeUI } from '../ui';

const slug = 'demir-zincir-uzunlugu-hesaplayici';
const title = 'Demirleme Zincir Uzunluğu ve Salınım Yarıçapı';
const description =
  'Su derinliği, baş bodoslama yüksekliği ve dip yapısına göre güvenli demirleme için gereken ideal kaloma oranını ve salınım yarıçapını hesaplayın.';

const ui: AnchorScopeUI = {
  parametersTitle: 'Parametreler',
  waterDepthLabel: 'Harita Derinliği',
  bowHeightLabel: 'Baş Bodoslama Yüksekliği',
  tideRangeLabel: 'Gelgit Farkı',
  boatLengthLabel: 'Tekne Boyu (LOA)',
  rodeTypeLabel: 'Demirleme Donanımı',
  windConditionLabel: 'Rüzgar ve Hava Durumu',
  seabedTypeLabel: 'Dip Yapısı',
  presetProtected: 'Korumalı Koy',
  presetOpen: 'Açık Deniz',
  presetStorm: 'Fırtına Uyarısı',
  seabedTag: 'Dip Tutunma Katsayısı',
  catenaryTag: 'Zincir Eğimi Sönümü',
  unitM: 'm',
  unitFt: 'ft',
  unitMeters: 'Metrik (m)',
  unitFeet: 'İngiliz (ft)',
  allChainOption: 'Tamamı Zincir (Ağır Katener)',
  ropeChainOption: 'Halat ve Zincir Karışımı',
  allRopeOption: 'Tamamı Halat',
  calmWindOption: 'Sakin / Hafif Rüzgar (< 15 knot)',
  moderateWindOption: 'Mutedil Rüzgar (15 - 25 knot)',
  strongWindOption: 'Kuvvetli Rüzgar (25 - 35 knot)',
  stormWindOption: 'Sert Fırtına (> 35 knot)',
  sandOption: 'Kum (Mükemmel Tutunma)',
  mudOption: 'Çamur / Balçık (İyi Tutunma)',
  clayOption: 'Sert Kil (Çok İyi)',
  gravelOption: 'Çakıl / Taşlık (Orta)',
  rockOption: 'Kayalık (Takılma Riski)',
  weedOption: 'Erişte / Yosun (Zayıf)',
  resultsTitle: 'Demirleme Analizi ve Ölçüler',
  scopeRatioLabel: 'Efektif Kaloma Oranı (Scope)',
  totalDepthLabel: 'Toplam Dikey Yükseklik',
  recommendedRodeLabel: 'Kaloma Edilecek Zincir',
  horizontalDistanceLabel: 'Yatay Mesafe',
  swingRadiusLabel: 'Tahmini Salınım Yarıçapı',
  minSafeRodeLabel: 'Sakin Havada Minimum',
  heavyWeatherRodeLabel: 'Fırtınada Zincir Boyu',
  statusOptimalTitle: 'Güvenli ve Sağlam Demirleme',
  statusOptimalDesc: 'Hesaplanan uzunluk darbe emici zincir eğimi ve yatay çekme açısı sağlar.',
  statusCautionTitle: 'Kabul Edilebilir: Rüzgarı İzleyin',
  statusCautionDesc: 'Mutedil hava için uygundur. Rüzgar veya dalga artarsa daha fazla kaloma verin.',
  statusDangerTitle: 'Yetersiz Kaloma: Tarama Riski',
  statusDangerDesc: 'Kritik oran. Çapanın memesi yukarı çekilerek zeminden kurtulabilir.',
  adviceSand: 'Kum zeminde çapanın tırnakları mükemmel gömülür. Tornistan ile demiri oturtun.',
  adviceMud: 'Yumuşak çamur geniş tırnak ve sert tabakaya ulaşmak için daha uzun zincir gerektirir.',
  adviceClay: 'Sert kil mükemmel tutar ancak çapanın saplanması için sivri uçlu olması gerekir.',
  adviceGravel: 'Gevşek çakıl dalga darbesinde kayar. Zincir boyunu en az yüzde 25 artırın.',
  adviceRock: 'Demirin takılma riski yüksektir. Kurtarmak için her zaman amele halatı ve şamandıra kullanın.',
  adviceWeed: 'Yoğun erişte çapanın saplanmasını önler. Tornistanla tutunmayı dikkatle test edin.',
  catenaryAllChain: 'Zincirin ağırlığı dalga darbelerini sönümleyen bir eğim oluşturur ve çekmeyi düz tutar.',
  catenaryRopeChain: 'Karışım halat ağırlık eksikliğini telafi etmek için en az 7 ye 1 oran gerektirir.',
  catenaryAllRope: 'Hafif halat çapanın memesini yukarı kaldırmamak için 8 e 1 veya daha fazla kaloma ister.',
  resetButton: 'Sıfırla',
  visualProfileTitle: 'Zincir Eğim Profili',
  waterlineLabel: 'Su Hattı',
  seabedLabel: 'Deniz Dibi',
  anchorLabel: 'Çapa / Demir',
  catenaryCurveLabel: 'Zincir Yayı',
  swingCircleLabel: 'Salınım Çemberi',
};

const faq: AnchorScopeLocaleContent['faq'] = [
  {
    question: 'Demirlemede kaloma oranı scope ne anlama gelir?',
    answer: 'Kaloma oranı, denize serilen toplam zincir boyunun deniz dibinden baş makarasına kadar olan toplam dikey mesafeye oranıdır.',
  },
  {
    question: 'Neden baş yüksekliği ve gelgit derinliğe eklenmelidir?',
    answer: 'İskandil sadece omurga altındaki suyu ölçer. Baş yüksekliği ve gece yükselen gelgit dikey mesafeyi büyük oranda artırır.',
  },
  {
    question: 'Zincir ile halat arasındaki kaloma oranı farkı nedir?',
    answer: 'Ağır zincir katener yayı yaparak 4:1 veya 5:1 kaloma ile tutar. Hafif halat gergin çektiği için 7:1 ila 10:1 gerektirir.',
  },
  {
    question: 'Salınım yarıçapı nasıl hesaplanır?',
    answer: 'Pisagor teoremiyle yatay zincir mesafesi bulunur, üzerine tekne boyu ve 3-5 metrelik güvenlik payı eklenir.',
  },
  {
    question: 'Deniz dibi yapısı tutunmayı nasıl etkiler?',
    answer: 'Kum ve kil en güçlü tutunmayı sağlar. Erişte ve kayalık zeminlerde daha fazla zincir ve özenli denetim gerekir.',
  },
  {
    question: 'Zincir boşluğu snubber halatının görevi nedir?',
    answer: 'Irgatı dalga sarsıntılarından korur ve zincirin tekneye ilettiği gürültüyü keser.',
  },
];

const howTo: AnchorScopeLocaleContent['howTo'] = [
  {
    name: 'Derinliği ve baş bodoslama yüksekliğini ölçmek',
    text: 'Demir yerindeki derinliği saptayın ve baş makarasının su üstündeki yüksekliğini ekleyin.',
  },
  {
    name: 'Gelgit farkını dahil etmek',
    text: 'Konaklama süresince beklenen maksimum gelgit yükselişini hesaplamaya katın.',
  },
  {
    name: 'Donanım ve rüzgar şiddetini seçmek',
    text: 'Zincir veya halat donanımınızı ve beklenen rüzgara göre katsayıyı belirleyin.',
  },
  {
    name: 'Kaloma vermek ve demiri gömmek',
    text: 'Hesaplanan miktarda zincir kaloma edin ve tornistanla demiri zemine iyice oturtun.',
  },
];

const seo: AnchorScopeLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Güvenli Demirleme İçin Zincir Uzunluğu ve Salınım Hesabı',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Denizde güvenliğin ilk kuralı doğru demir atmaktır. Yetersiz kaloma oranı, çapanın taramasına ve gece çatışmalarına yol açar. Doğru <strong>kaloma oranı</strong> ile fırtınalı gecelerde dahi tekneniz emniyette kalır.',
  },
  {
    type: 'title',
    text: 'Toplam Dikey Mesafenin Hesaplanması',
    level: 3,
  },
  {
    type: 'list',
    items: [
      '<strong>İskandil Derinliği:</strong> Dip derinliği artı teknenin su çekimi.',
      '<strong>Baş Bodoslama Yüksekliği:</strong> Su hattı ile baş makarası arasındaki yükseklik.',
      '<strong>Gelgit Yükselişi:</strong> Yüksek suda oluşacak su seviyesi artışı.',
    ],
  },
  {
    type: 'title',
    text: 'Önerilen Kaloma Oranları Tablosu',
    level: 3,
  },
  {
    type: 'table',
    headers: ['Donanım Türü', 'Sakin Hava (<15 knot)', 'Mutedil Rüzgar (15-25 knot)', 'Sert Fırtına (>30 knot)'],
    rows: [
      ['<strong>Tamamı Zincir</strong>', '4:1 Oranı', '5:1 Oranı', '7:1 Oranı'],
      ['<strong>Halat-Zincir Karışımı</strong>', '5:1 Oranı', '7:1 Oranı', '8:1 ila 10:1'],
      ['<strong>Tamamı Halat</strong>', '7:1 Oranı', '8:1 Oranı', '10:1 ila 12:1'],
    ],
  },
  {
    type: 'tip',
    title: 'Demir Irgatının Korunması',
    html: 'Yükünü hiçbir zaman doğrudan ırgatın kavaletası üzerine bırakmayın. Daima koçboynuzuna bağlı esnek bir snubber halatı kullanın.',
  },
  {
    type: 'paragraph',
    html: 'Seferden önce tahmin ile gerçek deniz durumunu birlikte değerlendirin.',
  },
  {
    type: 'paragraph',
    html: 'Derinlik payını kontrol edin ve güvenli bir rezerv bırakın.',
  },
  {
    type: 'paragraph',
    html: 'Sonuçları daha sonra karşılaştırmak için giriş değerlerini kaydedin.',
  },
  {
    type: 'paragraph',
    html: 'Rüzgar veya akıntı değiştiğinde birkaç senaryoyu karşılaştırın.',
  },
  {
    type: 'paragraph',
    html: 'Bu hesap planlamaya yardımcı olur, ancak teknedeki gözlemin yerini tutmaz.',
  },
];

const schemas: AnchorScopeLocaleContent['schemas'] = [
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
    name: `Kılavuz: ${title}`,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
  } as WithContext<HowTo>,
];

export const content: AnchorScopeLocaleContent = {
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
