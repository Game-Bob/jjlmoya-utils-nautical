import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { UnderKeelUI, UnderKeelLocaleContent } from '../index';

const slug = 'ukc-hesaplayici';
const title = 'Omurga Altı Boşluğu UKC Hesaplayıcı';
const description =
  'Sığlıkları, kanalları veya su çekimi (draft) kısıtlı noktaları geçmek için güvenli zaman aralığını hesaplayın. Teknenizin draftını, harita derinliğini ve gelgit verilerini girin.';

const ui: UnderKeelUI = {
  parametersLabel: 'Parametreler',
  boatDraftLabel: 'Tekne Draftı',
  chartDepthLabel: 'Harita Derinliği',
  safetyMarginLabel: 'Emniyet Payı',
  highTideLabel: 'Tam Deniz (Yüksek Gel)',
  lowTideLabel: 'Alçak Deniz (Düşük Gel)',
  metersLabel: 'metre',
  passWindowLabel: 'Geçiş Penceresi',
  neededLabel: 'Gerekli derinlik',
  tideRequiredLabel: 'Gerekli minimum gelgit',
  statusNeverLabel: 'Bu döngüde yeterli boşluk yok',
  statusAlwaysLabel: 'Tüm döngü boyunca güvenli',
  statusFromLabel: 'Geçiş başlangıcı:',
  statusUntilLabel: 'Geçiş bitişi:',
  bottomLabel: 'DENİZ TABANI',
  faqTitle: 'Sıkça Sorulan Sorular': 'Kaynakça',
};

const faq: UnderKeelLocaleContent['faq'] = [
  {
    question: 'Omurga altı boşluğu (UKC) tam olarak nedir?',
    answer: 'Bir teknenin draftına göre, kritik bir noktayı (kum bankı veya dar kanal gibi) emniyetle geçebilmesi için yeterli su derinliğinin olduğu anın hesaplanmasıdır.',
  },
  {
    question: 'Ne kadar emniyet payı önerilir?',
    answer: 'Amatör tekneler için genellikle teknenin draftı üzerine 0.5 ile 1 metre arasında bir minimum emniyet payı önerilir. Bu pay, gelgit hesaplarındaki olası hataları, atmosfer basıncı değişimlerini veya beklenmedik soluğanları telafi eder.',
  },
  {
    question: 'Soluğanlar (swell) omurga altı boşluğunu nasıl etkiler?',
    answer: 'Soluğanlar teknede dikey salınımlara neden olur. Dalganın en düşük noktasında (çukurunda) tekne dibe, durgun halindekinden daha yakın olur. Soluğanlı bölgelerden geçerken emniyet payı önemli ölçüde artırılmalıdır.',
  },
  {
    question: 'Harita derinliği (chart sounding) nedir?',
    answer: 'Gelgitin Harita Düzleminde (Chart Datum) olduğu bir noktadaki minimum derinliktir. Toplam derinliği bulmak için o andaki gelgit yüksekliği ile toplanır.',
  },
  {
    question: 'Haritadaki altı çizili derinlik değeri ne anlama gelir?',
    answer: 'O noktanın gelgit Harita Düzlemindeyken su üzerinde kaldığını (kuruduğunu) ifade eder. Üzerinden geçebilmek için daha yüksek bir gelgit seviyesine ihtiyacınız olacaktır.',
  },
  {
    question: 'Squat etkisi nedir ve geçişi nasıl değiştirir?',
    answer: 'Sığ kanallarda seyreden bir teknenin, hidrodinamik etkilerle su hattına göre daha aşağıya çökme eğilimidir. Ne kadar hızlı giderseniz, dinamik draft o kadar artar ve omurga altında o kadar az su kalır.',
  },
];

const howTo: UnderKeelLocaleContent['howTo'] = [
  {
    name: 'Draft ve emniyet payını tanımlayın',
    text: 'Teknenizin draftını en derin noktasından ölçün ve üzerine ihtiyatlı bir emniyet payı (örneğin 0.5 m) ekleyin.',
  },
  {
    name: 'Harita derinliğine bakın',
    text: 'Geçeceğiniz kritik nokta için haritadaki derinlik değerini bulun. Bölgenin kumlu mu yoksa kayalık mı olduğuna dikkat edin.',
  },
  {
    name: 'Gelgit verilerini girin',
    text: 'En yakın resmi gelgit almanağından tam ve alçak deniz zamanlarını ve yüksekliklerini kullanın.',
  },
  {
    name: 'Geçiş pencerenizi kontrol edin',
    text: 'Araç, emniyetle seyretmek için yeterli derinliğe sahip olacağınız tam zaman aralığını gösterecektir.',
  },
];

const seo: UnderKeelLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Omurga Altı Boşluğu: Sığlıklar Üzerinde Emniyetli Seyir',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Bir geçiş planı yapmak sadece harita üzerinde bir rota çizmekle bitmez. Kıyı navigasyonunda en kritik hesaplamalardan biri <strong>omurga altı boşluğudur (Under-Keel Clearance)</strong>: karaya oturmadan kritik bir noktayı geçmek için hangi saatte yeterli derinlik olacağını bilmektir.',
  },
  {
    type: 'title',
    text: 'Harita derinliği nedir ve gelgit ile nasıl ilişkilidir?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Deniz haritalarında derinlikler <strong>Harita Düzlemine (Chart Datum)</strong> göredir. Bu seviye, gelgitin normal koşullarda ulaştığı en düşük seviyedir. Teknenizin herhangi bir anda bulacağı gerçek derinlik, o harita derinliği ile o andaki gelgit yüksekliğinin toplamıdır.',
  },
  {
    type: 'title',
    text: 'Hesaplamanın unsurları: Draft ve Pay',
    level: 3,
  },
  {
    type: 'list',
    items: [
      { term: 'Maksimum yüklü draft:', definition: 'Tam yüklü teknenin en alt noktasının (omurga) ulaştığı derinlik.' },
      { term: 'Harita derinliği:', definition: 'Harita üzerindeki derinlik rakamı. Altı çiziliyse Harita Düzleminde kurur.' },
      { term: 'Emniyet payı:', definition: 'Draft üzerine en az 0.5 ile 1 metre arasında eklenen emniyet boşluğu.' },
    ],
  },
  {
    type: 'title',
    text: 'Geçiş penceresi nasıl çalışır?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Hesaplayıcı, su seviyesinin draftınız artı seçilen emniyet payının üzerine çıkacağı tam anı belirler. O dakikadan itibaren <strong>geçiş penceresi</strong> açılır. Gelgit alçalıyorsa (ebb), araç su seviyesi emniyet sınırınızın altına düşene kadar geçişe ne zamana kadar izin verildiğini belirtir.',
  },
  {
    type: 'title',
    text: 'Geçişi etkileyen faktörler',
    level: 3,
  },
  {
    type: 'table',
    headers: ['Faktör', 'Etki', 'Öneri'],
    rows: [
      ['<strong>Soluğan (Swell)</strong>', 'Gövde altındaki suyu azaltır', 'Emniyet payını önemli ölçüde artırın'],
      ['<strong>Squat etkisi</strong>', 'Vakum ile draftı artırır', 'Kritik bölgelerde hızı düşürün'],
      ['<strong>Kumlu zemin</strong>', 'Derinlik fırtınalarla değişebilir', 'İskandili açık tutun ve ek pay bırakın'],
    ],
  },
  {
    type: 'tip',
    title: 'Navigasyon İpucu',
    html: 'Geçiş pencereniz çok darsa veya hava kötüleşiyorsa, en bilgece karar genellikle gelgit gereken yüksekliğe çıkana kadar açıkta, derin suda beklemektir.',
  },
];

const schemas: UnderKeelLocaleContent['schemas'] = [
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

export const content: UnderKeelLocaleContent = {
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
