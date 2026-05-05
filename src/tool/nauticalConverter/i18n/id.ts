import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { NauticalConverterUI, NauticalConverterLocaleContent } from '../index';

const slug = 'konverter-satuan-nautika';
const title = 'Konverter Satuan Bahari';
const description =
  'Konversi mil laut, knot, fathom (depa), dan tekanan atmosfer. Termasuk skala Beaufort interaktif untuk kecepatan angin.';

const ui: NauticalConverterUI = {
  distanceCategoryLabel: 'Jarak',
  speedCategoryLabel: 'Kecepatan',
  depthCategoryLabel: 'Kedalaman',
  pressureCategoryLabel: 'Tekanan',
  nmLabel: 'Mil Laut (nm)',
  kmLabel: 'Kilometer (km)',
  miLabel: 'Mil Darat (mi)',
  cableLabel: 'Kabel (Cable)',
  knLabel: 'Knot (kn)',
  kmhLabel: 'km/jam',
  msLabel: 'm/s',
  mphLabel: 'mph',
  brozaLabel: 'Fathom (Depa)',
  mLabel: 'Meter (m)',
  ftLabel: 'Kaki (ft)',
  mbarLabel: 'Milibar (mbar)',
  mmhgLabel: 'mmHg',
  inhgLabel: 'inHg',
  atmLabel: 'Atmosfer (atm)',
  windSeaLabel: 'Kondisi laut',
  forceLabel: 'Kekuatan',
  effectLabel: 'Efek',
  copyLabel: 'Salin nilai',
};

const faq: NauticalConverterLocaleContent['faq'] = [
  {
    question: 'Berapa kilometer dalam satu mil laut?',
    answer: 'Satu mil laut setara dengan tepat 1,852 kilometer, atau 1852 meter. Ukuran ini sesuai dengan satu menit busur lintang di permukaan Bumi.',
  },
  {
    question: 'Apa perbedaan antara knot dan kilometer per jam?',
    answer: 'Satu knot sama dengan 1,852 km/jam, karena knot adalah satu mil laut per jam. Untuk mengubah knot ke km/jam, cukup kalikan dengan 1,852.',
  },
  {
    question: 'Mengapa mil laut digunakan di laut, bukan kilometer?',
    answer: 'Karena satu mil laut sesuai dengan satu menit busur lintang, yang sangat memudahkan perhitungan navigasi dengan peta dan kompas. Perubahan satu menit busur lintang setara dengan tepat satu mil laut.',
  },
  {
    question: 'Apa itu skala Beaufort?',
    answer: 'Ini adalah skala empiris yang menghubungkan kecepatan angin dengan efek yang dapat diamati di laut. Skalanya berkisar dari 0 (tenang) hingga 12 (topan) dan sangat penting untuk navigasi pesisir dan samudra.',
  },
  {
    question: 'Satuan tekanan apa yang digunakan dalam meteorologi maritim?',
    answer: 'Meteorologi maritim terutama menggunakan milibar (mbar) atau ekuivalennya, hektopascal (hPa). Tekanan atmosfer normal pada permukaan laut adalah 1013,25 mbar.',
  },
  {
    question: 'Berapa kaki dalam satu fathom (depa)?',
    answer: 'Satu fathom setara dengan tepat 6 kaki, yaitu 1,8288 meter. Satuan ini terutama digunakan di negara-negara berbahasa Inggris untuk menyatakan kedalaman pada peta laut lama.',
  },
];

const howTo: NauticalConverterLocaleContent['howTo'] = [
  {
    name: 'Pilih kategori konversi',
    text: 'Klik salah satu dari empat tab: Jarak, Kecepatan, Kedalaman, atau Tekanan tergantung pada besaran yang ingin Anda konversi.',
  },
  {
    name: 'Masukkan nilai di bidang apa pun',
    text: 'Ketik angka pada satuan yang Anda ketahui. Semua satuan lainnya akan diperbarui secara otomatis secara real-time.',
  },
  {
    name: 'Lihat skala Beaufort (kecepatan)',
    text: 'Saat Anda memasukkan kecepatan di tab Kecepatan, sebuah kartu akan muncul menunjukkan kekuatan Beaufort yang sesuai dan perkiraan kondisi laut.',
  },
  {
    name: 'Salin hasilnya',
    text: 'Gunakan tombol salin di samping bidang mana pun untuk menyalin nilai ke papan klip.',
  },
];

const seo: NauticalConverterLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Pentingnya presisi dalam satuan bahari',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Menelusuri lautan membutuhkan bahasanya sendiri, sebuah sistem pengukuran yang telah disempurnakan selama berabad-abad penjelajahan maritim. Satuan bahari bukanlah keanehan sejarah, melainkan alat yang koheren secara matematis yang selaras dengan geometri Bumi dan kebutuhan praktis navigator.',
  },
  {
    type: 'paragraph',
    html: 'Berbeda dengan di darat, di mana kesalahan beberapa meter jarang berakibat serius, di laut konversi yang salah dapat berarti perbedaan antara berlabuh di air yang aman atau kandas di dangkalan. Presisi dalam satuan bukanlah masalah akademis: itu adalah navigasi.',
  },
  {
    type: 'paragraph',
    html: 'Saat kita menjauh dari pantai, kurangnya referensi visual membuat posisi yang dihitung menjadi satu-satunya realitas yang dapat kita tindak lanjuti. Mengetahui cara mengonversi secara akurat antara mil laut, kilometer, knot, dan meter bukanlah pilihan bagi navigator yang bertanggung jawab.',
  },
  {
    type: 'title',
    text: 'Mengapa kita menggunakan mil laut, bukan kilometer?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Jawabannya terletak pada bentuk Bumi itu sendiri. Satu <strong>mil laut</strong> setara dengan tepat satu menit busur lintang di permukaan Bumi, yaitu 1852 meter. Korespondensi langsung antara pengukuran sudut dan jarak linier ini adalah kunci penggunaan universalnya dalam navigasi.',
  },
  {
    type: 'paragraph',
    html: 'Dengan menggunakan satuan ini, perubahan satu menit busur lintang pada peta laut selalu sesuai dengan tepat satu mil laut yang ditempuh. Ini sangat menyederhanakan perhitungan posisi, kecepatan, dan waktu kedatangan tanpa perlu faktor konversi tambahan.',
  },
  {
    type: 'title',
    text: 'Kecepatan di laut: Knot',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>Knot</strong> adalah satuan kecepatan yang setara dengan satu mil laut per jam. Namanya berasal dari teknik lama mengukur kecepatan dengan melemparkan potongan kayu yang diikat ke tali dengan simpul (knot) yang berjarak teratur ke dalam air dan menghitung berapa banyak simpul yang melewati jari dalam waktu yang tetap.',
  },
  {
    type: 'paragraph',
    html: 'Saat ini, meskipun kita menggunakan satelit GPS dan sistem elektronik yang canggih, knot tetap menjadi satuan standar dalam penerbangan internasional dan navigasi maritim. Satu knot setara dengan 1,852 km/jam atau 0,514 m/s.',
  },
  {
    type: 'title',
    text: 'Kedalaman dan labuh jangkar: Fathom, Meter, dan Kaki',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Dalam dunia bahari, kedalaman bukan sekadar statistik: itu adalah perbedaan antara labuh jangkar yang aman dan kandas. Secara historis, <strong>fathom</strong> (1,8288 meter atau tepat 6 kaki) adalah satuan dominan untuk mengukur kedalaman di dunia berbahasa Inggris.',
  },
  {
    type: 'paragraph',
    html: 'Namun, globalisasi dan teknologi telah memperkenalkan penggunaan meter secara konstan pada sebagian besar peta dan pemerum gema modern. Navigator modern harus nyaman berpindah antara fathom, meter, dan kaki, terutama saat berkonsultasi dengan peta laut lama atau instrumen yang dikalibrasi dalam satuan imperial.',
  },
  {
    type: 'title',
    text: 'Meteorologi dan Tekanan Atmosfer',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Bagi seorang nakhoda, barometer adalah peramal cuaca. Tekanan atmosfer, diukur dalam <strong>milibar</strong> (mbar), adalah indikator paling andal akan perubahan cuaca yang akan datang. Penurunan tekanan yang cepat menandakan datangnya angin kencang dan cuaca buruk.',
  },
  {
    type: 'paragraph',
    html: 'Memahami variasi tekanan sangat penting bagi navigator mana pun. Tekanan atmosfer normal pada permukaan laut adalah 1013,25 mbar (satu atmosfer). Nilai yang lebih tinggi menunjukkan cuaca stabil, sementara nilai yang lebih rendah, terutama jika turun dengan cepat, menandakan mendekatnya sistem tekanan rendah yang berpotensi berbahaya.',
  },
  {
    type: 'title',
    text: 'Skala Angin dan Laut: Dari Beaufort ke Douglas',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Kecepatan angin dalam knot adalah angka yang menjadi nyata saat dikaitkan dengan <strong>skala Beaufort</strong>. Dikembangkan oleh Laksamana Inggris Francis Beaufort pada tahun 1805, skala empiris ini menghubungkan kecepatan angin dengan efek yang dapat diamati baik di permukaan laut maupun di darat.',
  },
  {
    type: 'list',
    items: [
      '<strong>Skala 0-3 (0-10 kn):</strong> Kondisi pelayaran tenang, ideal untuk belajar atau wisata keluarga.',
      '<strong>Skala 4-5 (11-21 kn):</strong> Angin pelayaran ideal untuk kapal pesiar, dengan gelombang sedang dan buih putih.',
      '<strong>Skala 6-7 (22-33 kn):</strong> Kondisi angin kencang hingga hampir badai. Disarankan pengalaman dan pengurangan layar (reefing).',
      '<strong>Skala 8+ (di atas 34 kn):</strong> Badai. Hanya untuk navigator berpengalaman dengan kapal yang sesuai.',
    ],
  },
  {
    type: 'paragraph',
    html: 'Demikian pula, skala Douglas mengklasifikasikan kondisi laut dalam derajat dari 0 (tenang seperti kaca) hingga 9 (fenomenal), yang memungkinkan navigator mengantisipasi kondisi di balik cakrawala berdasarkan laporan cuaca.',
  },
  {
    type: 'tip',
    title: 'Tips Keselamatan',
    html: 'Saat menggunakan konverter ini untuk merencanakan perjalanan, selalu ingat bahwa kondisi aktual mungkin berbeda dari prediksi. Konsultasikan prakiraan cuaca resmi dan jangan pernah meremehkan kemampuan laut untuk berubah dengan cepat.',
  },
  {
    type: 'title',
    text: 'Perencanaan luring dan mobilitas',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Alat ini dirancang untuk bekerja tanpa koneksi internet setelah dimuat di peramban, sehingga ideal untuk digunakan di atas kapal di mana konektivitas mungkin terbatas. Semua konversi dihitung secara lokal di perangkat, tanpa mengirim data apa pun ke server.',
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
    name: `Cara menggunakan: ${title}`,
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
