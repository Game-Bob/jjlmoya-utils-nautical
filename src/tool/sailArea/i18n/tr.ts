import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SailAreaUI, SailAreaLocaleContent } from '../index';

const slug = 'yelken-alani-hesaplayici';
const title = 'Yelken Alanı ve SA/D Oranı Hesaplayıcı';
const description =
  'Teknenizin toplam yelken alanını ve yelken alanının deplasmana oranını (SA/D) hesaplayın. I, J, P ve E ölçümlerine dayalı denizcilik performansı analizi.';

const ui: SailAreaUI = {
  hullSectionLabel: 'Gövde Verileri',
  totalMassLabel: 'Deplasman',
  rigSystemLabel: 'Arma',
  intendedUseLabel: 'Kullanım Amacı',
  rigGeometryLabel: 'Arma Geometrisi',
  sailConfigLabel: 'Arma Tipi',
  genoaOverlapLabel: 'Cenova Örtüşmesi (Overlap)',
  foqueLabel: 'Flok',
  genovaLabel: 'Cenova',
  sadRatioLabel: 'SA/D Oranı',
  totalAreaLabel: 'Toplam Alan',
  performanceLabel: 'Performans',
  sloopLabel: 'Sloop (Tek Mastalık)',
  cutterLabel: 'Kuter (Çift Ön Yelken)',
  ketchLabel: 'Keç (İki Direkli)',
  cruiserLabel: 'Gezinti (Cruiser)',
  performanceTypeLabel: 'Performans Tipi',
  racerLabel: 'Yarış (Racer)',
  exportPdfLabel: 'TEKNİK RAPOR OLUŞTUR',
  faqTitle: 'Sıkça Sorulan Sorular': 'Kaynakça',
};

const faq: SailAreaLocaleContent['faq'] = [
  {
    question: 'Hafif rüzgarda teknem neden yavaş?',
    answer: 'SA/D oranınız muhtemelen 15\'in altındadır; bu da teknenizin ağırlığına oranla az yelken alanına sahip ağır bir deplasman teknesi olduğunu gösterir. Bu tekneler canlı seyir yapabilmek için 12 knot\'un üzerinde rüzgara ihtiyaç duyarlar.',
  },
  {
    question: 'Performansı artırmak için su tanklarını boşaltmalı mıyım?',
    answer: 'Evet, tekneyi hafifletmek SA/D oranını doğrudan iyileştirir çünkü gerçek deplasman azalır. Su ve yakıt tanklarını boşaltmak deplasmanı birkaç yüz kilogram azaltabilir ve oranı önemli ölçüde yükseltebilir.',
  },
  {
    question: 'Yelkende "Roach" (Yelken Göbeği) nedir?',
    answer: 'Roach, ana yelkenin arka kavisindeki (granda yakası) dışbükey kavisidir. P ve E ile tanımlanan temel geometrik üçgenin ötesinde ekstra yelken alanı sağlar. Yarış tekneleri sert çıtalar yardımıyla agresif bir Roach yapısına sahiptir.',
  },
  {
    question: 'Teknemin gerçek deplasmanını nasıl ölçerim?',
    answer: 'En güvenilir yöntem, yüklü deplasmanı (tüm kumanya, su, yakıt ve mürettebat gemideyken) kullanmaktır. Üretici kılavuzundaki "hafif yük" (light ship) deplasmanı genellikle iyimserdir. Normal seyir koşullarınızdaki gerçek deplasmanı kullanın.',
  },
  {
    question: 'Teknem için I, J, P ve E ölçülerini nerede bulabilirim?',
    answer: 'Bunları kullanım kılavuzunda, ORC veya IRC ölçüm belgelerinde veya sınıf sertifikası belgelerinde bulabilirsiniz. Ayrıca teknede bir şerit metre ile doğrudan ölçebilir veya tekne üreticisiyle iletişime geçebilirsiniz.',
  },
];

const howTo: SailAreaLocaleContent['howTo'] = [
  {
    name: 'Arma tipini seçin',
    text: 'Sloop (tek direk), Kuter (flok ve trinket) veya Keç (mizana direği olan) arasından seçim yapın. Bu, toplam yelken alanının nasıl hesaplanacağını belirler.',
  },
  {
    name: 'Deplasmanı girin',
    text: 'Teknenizin gerçek yüklü deplasmanını kg veya lbs cinsinden kullanın. Bu rakam SA/D oranı hesaplaması için anahtardır.',
  },
  {
    name: 'Arma geometrisini ölçün',
    text: 'P (direk yüksekliği), E (bumba boyu), I (ön üçgen yüksekliği) ve J (ön üçgen tabanı) ölçülerini metre veya ayak cinsinden girin.',
  },
  {
    name: 'Cenova örtüşmesini ayarlayın',
    text: 'Cenova örtüşmenizi belirtmek için kaydırıcıyı kullanın: %100 örtüşmeyen bir floktur, %130 standart bir cenovadır, %155 büyük örtüşmeli bir cenovadır.',
  },
  {
    name: 'SA/D oranını yorumlayın',
    text: '16 ile 20 arasındaki bir oran dengeli bir gezinti teknesidir (cruiser). 20\'nin üzerindeki oranlarda tekne hafif rüzgarda çok canlı olacaktır ancak sert koşullarda daha fazla deneyim gerektirir.',
  },
];

const seo: SailAreaLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Yelken Alanı Hesaplayıcı: Performans ve Oranlar İçin Tam Kılavuz',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Yelken alanı, herhangi bir yelkenli teknenin aerodinamik motorudur. Teknenin ne kadar rüzgar enerjisi yakalayabileceğini belirler ve deplasmanıyla birleşerek denizcilik karakterini tanımlar: yavaş bir gezinti teknesi mi yoksa hassas bir yarış makinesi mi olacağı buna bağlıdır. Bu değeri doğru hesaplamak, herhangi bir yelkenlinin davranışını anlamanın ilk adımıdır.',
  },
  {
    type: 'paragraph',
    html: 'Yelken seyrinde, yelkenlerdeki rüzgar kuvveti ile gövdedeki su direnci arasında sürekli bir dans vardır. <strong>Yelken Alanı / Deplasman oranı (SA/D)</strong>, bu ilişkiyi tek bir sayıya indirger ve herhangi bir uzunluktaki ve deplasmandaki teknelerin eşit şartlarda karşılaştırılmasına olanak tanır.',
  },
  {
    type: 'stats',
    items: [
      { label: 'İdeal Gezinti Oranı', value: '15-18', icon: 'mdi:anchor' },
      { label: 'Yarış Tekneleri', value: '+24', icon: 'mdi:sailing' },
      { label: 'Hata Payı', value: '5-10%', icon: 'mdi:alert-circle-outline' },
    ],
    columns: 3,
  },
  {
    type: 'title',
    text: 'SA/D Oranı Ne İçin Kullanılır?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>Yelken Alanı / Deplasman</strong> oranı, denize açılmadan önce tekne davranışını tahmin etmenizi sağlayan bir teşhis aracıdır. Düşük oran; sağlam ve güvenli ancak hafif rüzgarda yavaş bir tekneye işaret eder; yüksek oran ise hız ve "uçma" hissi sunar ancak rüzgar arttığında daha fazla mürettebat becerisi gerektirir. Biri diğerinden üstün değildir: her şey amaçlanan seyir tipine bağlıdır.',
  },
  {
    type: 'title',
    text: 'SA/D Oranı Referans Tablosu',
    level: 4,
  },
  {
    type: 'table',
    headers: ['Oran', 'Tekne Tipi', 'Denizdeki Davranış'],
    rows: [
      ['< 14', 'Ağır Deplasman / Yük Gemisi', 'Stabil, yavaş, sürekli rüzgar bekler'],
      ['14 - 16.5', 'Okyanus Geçiş Teknesi', 'Dengeli, konforlu, orsa performansı iyi'],
      ['16.5 - 20', 'Standart Marina Gezinti Teknesi', 'Esintide canlı, yönetilebilir, çok yönlü'],
      ['20 - 25', 'Performans Cruiser / Spor', 'Hızlı, talepkar, hafif havada heyecanlı'],
      ['> 25', 'Racer / Ekstrem Spor', 'Çok hızlı, tepkili, uzman mürettebat ister'],
    ],
  },
  {
    type: 'title',
    text: 'Ölçülerin Teknik Sözlüğü (I, J, P, E)',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'I (Ön Üçgen Yüksekliği)',
        definition: 'Güvertedeki flok mandarı noktasının direk üzerindeki dikey mesafesi. Ön üçgenin yüksekliğini tanımlar.',
      },
      {
        term: 'J (Ön Üçgen Tabanı)',
        definition: 'Direk ile baş bodoslama (tekne burnu) arasındaki yatay mesafe. Ön yelkenlerin basıldığı ön üçgenin tabanını tanımlar.',
      },
      {
        term: 'P (Direk Yüksekliği)',
        definition: 'Bumbadan direğin en üstündeki ana yelken mandar makarasına olan mesafe. Ana yelkenin yüksekliğini tanımlar.',
      },
      {
        term: 'E (Bumba Boyu)',
        definition: 'Direkten bumbanın sonundaki ana yelken ıskota köşesine kadar olan mesafe. Ana yelkenin tabanını tanımlar.',
      },
    ],
  },
  {
    type: 'title',
    text: 'Denizcilik Sınavı Hesaplamaları (Yachtmaster)',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Yelken alanı hesaplaması ve SA/D oranı, <strong>Yachtmaster</strong> ve kıyı kaptanlığı sınavlarının müfredatının bir parçasıdır. Arma geometrisini ve deplasmanla ilişkisini anlamak, denizde güvenlik kararları almak için temeldir: zamanında camadan vurmak, doğru cenovayı seçmek veya bir fırtına öncesinde tekne davranışını tahmin etmek gibi.',
  },
  {
    type: 'tip',
    title: 'Pupa Yelkenleri ve Güvenlik',
    html: 'Okyanus veya uzun mesafe geçiş seyirleri için 16 ile 18 arasındaki bir SA/D oranı hız ve güvenlik arasındaki en iyi dengeyi sunar. Oranı 22\'nin üzerindeki teknelerin Beaufort 4-5 kuvvetindeki rüzgarlarda bile camadan vurması gerekebilir.',
  },
  {
    type: 'title',
    text: 'Cenova Örtüşmesi (Overlap) Performansı Nasıl Etkiler?',
    level: 4,
  },
  {
    type: 'paragraph',
    html: '<strong>Cenova</strong>, ıskota köşesi direğin arkasında kalan ve ana yelkeni "örten" en büyük ön yelkendir. Örtüşme (overlap) yüzdesi, ön yaka dikmesinin (LP) J mesafesine göre ne kadar uzun olduğunu gösterir. %%150\'lik bir cenova, J\'nin %%150\'sine eşdeğer bir LP\'ye sahiptir ve basit bir örtüşmeyen floka göre çok daha büyük yelken alanı sağlar.',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Dakron (Gezinti/Cruising)',
        description: 'Gezinti yelkenleri için klasik malzeme. Sağlam ve bakımı kolaydır.',
        points: [
          'Yüksek dayanıklılık ve UV direnci',
          'Düşük bakım maliyeti',
          'Yük altında daha fazla ağırlık ve esneme',
          'Kıyı ve geçiş seyirleri için ideal'
        ],
      },
      {
        title: 'Laminat (Yarış/Racing)',
        description: 'Kevlar, Spectra veya Dyneema gibi yüksek teknolojili malzemeler.',
        highlight: true,
        points: [
          'Minimum esneme: maksimum aerodinamik verimlilik',
          'Dakron\'dan çok daha hafiftir',
          'Daha yüksek maliyet ve daha kısa hizmet ömrü',
          'SA/D oranı > 22 olan teknelerde gereklidir',
        ],
      },
    ],
    columns: 2,
  },
  {
    type: 'title',
    text: 'Yelken Fiziği ve Stabilite',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Yelken alanı itici bir güç oluşturur ancak aynı zamanda teknenin devrilmesine neden olan bir <strong>bayılma momenti</strong> (heeling moment) oluşturur. Stabilite, teknenin bu bayılma kuvvetine karşı koyabileceği düzelme momenti (righting moment) ile ölçülür. Az safralı bir teknede yüksek SA/D oranı tehlikeli olabilirken, derin ve ağır bir salmaya sahip bir teknede aynı oran mükemmel bir şekilde yönetilebilir.',
  },
  {
    type: 'paragraph',
    html: 'Gerçek mevcut gücü hesaplamak için gemi inşa mühendisleri genellikle SA/D ile birlikte <strong>Deplasman-Boy Oranı\'nı (DLR)</strong> kullanırlar. Her iki oran birlikte bir teknenin "deniz römorkörü" mü yoksa "yarış süzücüsü" mü olduğunu tam olarak tanımlar.',
  },
  {
    type: 'tip',
    title: 'Stabilite ve Güvenlik',
    html: 'SA/D oranını asla tek başına değerlendirmeyin. 22 oranına ve 90 derecelik bir düzelme açısına sahip bir yelkenli, 18 oranına ve 60 derecelik bir düzelme açısına sahip olandan çok daha güvenlidir. Daima teknenizin stabilite eğrisine danışın.',
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
    name: `Nasıl kullanılır: ${title}`,
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
