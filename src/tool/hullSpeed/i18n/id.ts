import { bibliography } from '../bibliography';
import type { HullSpeedLocaleContent, HullSpeedUI } from '../index';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

const slug = 'kalkulator-kecepatan-lambung-kapal';
const title = 'Kalkulator kecepatan lambung kapal';
const description =
  'Temukan kecepatan lambung teoretis dari panjang garis air, bandingkan log, dan lihat kapan lambung displacement memanjat gelombang haluannya sendiri.';

const ui: HullSpeedUI = {
  metric: 'Metrik',
  imperial: 'Imperial',
  unitGroup: 'Satuan',
  sceneLabel: 'Garis air dan gelombang haluan',
  hullSpeedLabel: 'Kecepatan lambung',
  knotsUnit: 'kn',
  kmhUnit: 'km/h',
  mphUnit: 'mph',
  ratioLabel: 'S/L',
  froudeLabel: 'Fr',
  lwlLabelMetric: 'Panjang garis air',
  lwlLabelImperial: 'Panjang garis air',
  lwlUnitM: 'm',
  lwlUnitFt: 'ft',
  observedLabel: 'Kecepatan log',
  observedHint: 'Biarkan 0 untuk menggambar gelombang teoretis. Ketik log untuk melihat apakah kamu masih duduk di palung.',
  stretchHint: 'Seret lambung untuk meregangkan garis air',
  hullKindLabel: 'Bentuk lambung',
  displacement: 'Displacement',
  semi: 'Semi displacement',
  planing: 'Planning',
  boatsLabel: 'Contoh garis air',
  dinghy: 'Dinghy',
  daysailer: 'Daysailer',
  cruiser: 'Cruiser',
  bluewater: 'Laut lepas',
  workboat: 'Kapal kerja',
  bandBelow: 'Masih membuat gelombang pendek',
  bandNear: 'Mendekati penghalang gelombang',
  bandAt: 'Menunggang gelombang haluan',
  bandAbove: 'Mencoba memanjat gelombang',
  bandPlane: 'Sudah planning, melewati kecepatan lambung',
  planingNote:
    'Lambung planning bisa meninggalkan gelombang ini. Kecepatan lambung adalah acuan, bukan tembok.',
  displacementNote:
    'Lambung displacement membayar mahal saat menyusul olakannya sendiri. Anggap hasilnya plafon praktis, bukan sasaran GPS.',
  semiNote:
    'Semi displacement bisa sedikit melewati rasio klasik dengan daya cukup, dengan kenaikan hambatan yang tajam.',
  waveLegend: 'Gelombang haluan',
  waterLegend: 'Garis air',
  markLegend: 'Kecepatan lambung',
  faqTitle: 'Pertanyaan kecepatan lambung',
  bibliographyTitle: 'Sumber',
};

const faq: HullSpeedLocaleContent['faq'] = [
  {
    question: 'Apa itu kecepatan lambung pada perahu layar?',
    answer:
      'Itu kecepatan saat lambung displacement berjalan dengan gelombang haluan kira kira sepanjang garis airnya. Dalam satuan nautika biasanya 1.34 kali akar panjang garis air dalam kaki. Ini kecepatan kritis, bukan henti fisik yang kaku.',
  },
  {
    question: 'Bagaimana menghitung kecepatan lambung?',
    answer:
      'Ubah garis air ke kaki, ambil akarnya, lalu kali 1.34 untuk mendapat knot. Garis air 10 m kira kira 32.8 ft, jadi sekitar 7.7 kn. Titik yang sama setara bilangan Froude dekat 0.40.',
  },
  {
    question: 'Apakah kecepatan lambung berlaku untuk kapal planning?',
    answer:
      'Rumus masih menggambarkan gelombang yang akan dibuat lambung jika tetap mode displacement. Planning dan banyak semi displacement dirancang untuk memanjat gelombang itu. Pakai angkanya sebagai acuan, lalu baca catatan bentuk lambung.',
  },
  {
    question: 'Haruskah memakai panjang garis air atau panjang keseluruhan?',
    answer:
      'Pakai panjang garis air (LWL), panjang terendam yang benar benar membuat gelombang. Panjang keseluruhan, cucur, dan overhang tidak menetapkan panjang gelombang. Ukur LWL di air, bukan LOA brosur.',
  },
];

const howTo: HullSpeedLocaleContent['howTo'] = [
  {
    name: 'Regangkan garis air',
    text: 'Seret lambung, geser rel garis air, atau pilih dari dinghy sampai kapal kerja. Kecepatan lambung adalah 1.34 kali akar panjang itu dalam kaki.',
  },
  {
    name: 'Pilih bentuk lambung',
    text: 'Displacement, semi displacement, atau planning mengubah lunas dan apakah kapal bisa keluar dari gelombangnya sendiri.',
  },
  {
    name: 'Baca palung',
    text: 'Pada kecepatan lambung gelombang haluan dan buritan berjarak satu garis air dan kapal duduk di palung. Itulah penghalangnya.',
  },
  {
    name: 'Bandingkan log',
    text: 'Masukkan kecepatan terhadap air. Gelombang lebih pendek berarti kamu masih mendorong murah. Gelombang lebih panjang berarti kamu memanjat palung.',
  },
];

const seo: HullSpeedLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Apa yang benar benar dikatakan kecepatan lambung',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Lambung displacement mendorong gelombang dari haluan dan dari buritan. Ketika puncak itu berjarak kira kira satu garis air, kapal berjalan dengan olakannya sendiri. Daya ekstra lalu menumpuk air alih alih membeli kecepatan. Kondisi itu yang disebut pelaut kecepatan lambung.',
  },
  {
    type: 'paragraph',
    html: 'Kalkulator memakai rasio amatir lazim 1.34 knot per akar kaki garis air. Lambung ramping dan panjang bisa sedikit lebih tinggi, ponton lebih rendah. Anggap hasilnya tanda belajar, lalu bandingkan log sungguhan.',
  },
  {
    type: 'title',
    text: 'Contoh garis air yang dihitung',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Garis air', 'Kecepatan lambung', 'Kapal khas'],
    rows: [
      ['4.2 m / 13.8 ft', '5.0 kn', 'Dinghy'],
      ['6.5 m / 21.3 ft', '6.2 kn', 'Daysailer'],
      ['10 m / 32.8 ft', '7.7 kn', 'Cruiser keluarga'],
      ['13.5 m / 44.3 ft', '8.9 kn', 'Yacht laut lepas'],
      ['18 m / 59.1 ft', '10.3 kn', 'Kapal kerja kecil'],
    ],
  },
  {
    type: 'title',
    text: 'Cara membaca gelombang haluan',
    level: 2,
  },
  {
    type: 'list',
    items: [
      'Di bawah tanda gelombang pendek dan kapal masih murah didorong.',
      'Dekat tanda gelombang haluan menajam dan bahan bakar atau layar membeli lebih sedikit kecepatan.',
      'Pada tanda panjang gelombang cocok dengan LWL. Lambung displacement ada di penghalang klasik.',
      'Di atasnya lambung displacement memanjat olakan. Lambung planning mungkin sudah terangkat.',
    ],
  },
  {
    type: 'tip',
    title: 'Ukur LWL, bukan LOA',
    html: 'Panjang brosur memasukkan overhang. Gelombang peduli garis air yang terendam. Jika hanya punya LOA, kecepatan lambung yang dihitung akan terlalu cerah.',
  },
  {
    type: 'title',
    text: 'Bilangan Froude dalam satu kalimat',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Kecepatan lambung adalah bungkus nyaman bilangan Froude dekat 0.40: kecepatan dibagi akar gravitasi kali panjang. Itu sebab garis air lebih panjang lebih cepat meski bentuk lambung sama. Meregangkan LWL cara bersih menaikkan batas displacement; menambah tenaga kuda bukan.',
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
    name: `Cara memakai ${title}`,
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
