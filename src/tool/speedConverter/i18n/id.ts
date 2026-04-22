import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SpeedConverterUI, SpeedConverterLocaleContent } from '../index';

const slug = 'pengonversi-kecepatan';
const title = 'Konverter Kecepatan Bahari dan Skala Beaufort';
const description =
  'Konversi antara knot, km/jam, m/s, dan mph secara instan. Termasuk tabel Beaufort lengkap dengan deskripsi kondisi laut dan efek angin.';

const beaufortData = [
  { force: 0, name: 'Tenang (Calm)', sea: 'Laut seperti cermin', effect: 'Asap naik vertikal', kn: '0' },
  { force: 1, name: 'Udara ringan', sea: 'Riak-riak kecil seperti sisik', effect: 'Arah angin ditunjukkan oleh asap', kn: '1-3' },
  { force: 2, name: 'Sepoi lembut', sea: 'Ombak kecil, puncak tidak pecah', effect: 'Angin terasa di wajah, daun berdesir', kn: '4-6' },
  { force: 3, name: 'Sepoi lemah', sea: 'Ombak agak besar, mulai ada buih putih', effect: 'Daun dan ranting bergerak', kn: '7-10' },
  { force: 4, name: 'Sepoi sedang', sea: 'Ombak kecil, banyak buih putih', effect: 'Debu dan kertas terbang', kn: '11-16' },
  { force: 5, name: 'Sepoi segar', sea: 'Ombak sedang, banyak puncak putih', effect: 'Pohon kecil mulai bergoyang', kn: '17-21' },
  { force: 6, name: 'Angin kuat', sea: 'Ombak besar, puncak buih putih', effect: 'Sulit menggunakan payung', kn: '22-27' },
  { force: 7, name: 'Hampir badai', sea: 'Laut bergulung, buih tertiup garis-garis', effect: 'Sulit berjalan melawan angin', kn: '28-33' },
  { force: 8, name: 'Badai (Gale)', sea: 'Ombak tinggi, percikan mengurangi jarak pandang', effect: 'Sangat sulit berjalan', kn: '34-40' },
  { force: 9, name: 'Badai kuat', sea: 'Ombak sangat tinggi, laut bergulung', effect: 'Kerusakan struktur terjadi', kn: '41-47' },
  { force: 10, name: 'Topan (Storm)', sea: 'Ombak luar biasa tinggi, laut memutih', effect: 'Pohon tumbang, kerusakan besar', kn: '48-55' },
  { force: 11, name: 'Topan hebat', sea: 'Ombak raksasa, buih menutupi laut', effect: 'Kerusakan luas', kn: '56-63' },
  { force: 12, name: 'Topan (Hurricane)', sea: 'Udara penuh buih dan percikan', effect: 'Katastrofe total', kn: '64+' },
];

const ui: SpeedConverterUI = {
  knLabel: 'Knot (kt)',
  kmhLabel: 'Kilometer/jam',
  msLabel: 'Meter/detik',
  mphLabel: 'Mil/jam',
  beaufortTitle: 'Skala Beaufort',
  forceLabel: 'Skala',
  descriptionLabel: 'Deskripsi',
  knotsLabel: 'Knot',
  effectLabel: 'Efek Visual',
  seaStateLabel: 'Kondisi Laut',
  windEffectLabel: 'Efek Darat',
  faqTitle: 'Pertanyaan yang Sering Diajukan': 'Bibliografi',
  beaufortDataJson: JSON.stringify(beaufortData),
};

const faq: SpeedConverterLocaleContent['faq'] = [
  {
    question: 'Mengapa kecepatan kapal diukur dalam knot?',
    answer: 'Knot adalah satuan kecepatan yang setara dengan satu mil laut per jam. Asalnya bersifat historis: pelaut mengukur kecepatan kapal dengan melemparkan sepotong kayu ke laut yang diikatkan ke tali dengan simpul (knot) berjarak sama, lalu menghitung berapa banyak simpul yang melewati jari mereka dalam waktu tertentu. Saat ini, knot tetap menjadi satuan standar internasional dalam navigasi maritim dan penerbangan.',
  },
  {
    question: 'Apa itu Skala Beaufort dan bagaimana penggunaannya dalam navigasi?',
    answer: 'Skala Beaufort adalah skala empiris yang menghubungkan kecepatan angin dengan efek yang diamati di laut dan di darat. Dikembangkan oleh Laksamana Inggris Francis Beaufort pada tahun 1805, skalanya berkisar dari 0 (tenang total) hingga 12 (topan). Pelaut menggunakannya untuk memperkirakan intensitas angin tanpa instrumen dengan mengamati kondisi permukaan laut.',
  },
  {
    question: 'Apa perbedaan antara SOG dan STW dalam navigasi?',
    answer: 'SOG (Speed Over Ground) adalah kecepatan aktual kapal terhadap dasar laut, diukur dengan GPS. STW (Speed Through Water) atau kecepatan log adalah kecepatan kapal terhadap air di sekitarnya. Perbedaan antara keduanya mencerminkan efek arus laut. SOG digunakan untuk merencanakan waktu kedatangan dan menghitung bahan bakar; STW digunakan untuk menghitung deviasi (leeway).',
  },
  {
    question: 'Satu knot berapa km/jam?',
    answer: 'Satu knot setara dengan tepat 1,852 kilometer per jam, yang merupakan panjang satu mil laut (didefinisikan sebagai satu menit busur dari meridian terestrial). Oleh karena itu, 10 knot sama dengan 18,52 km/jam, 20 knot sama dengan 37,04 km/jam, dan 30 knot sama dengan 55,56 km/jam.',
  },
];

const howTo: SpeedConverterLocaleContent['howTo'] = [
  {
    name: 'Masukkan kecepatan dalam satuan apa pun',
    text: 'Ketik nilai kecepatan di bidang yang sesuai (knot, km/jam, m/s, atau mph) dan semua bidang lainnya akan diperbarui secara otomatis.',
  },
  {
    name: 'Periksa skala Beaufort yang setara',
    text: 'Kartu Beaufort menunjukkan secara real-time skala angin yang sesuai dengan kecepatan yang dimasukkan, beserta kondisi laut dan efek darat.',
  },
  {
    name: 'Klik baris di tabel Beaufort',
    text: 'Anda dapat langsung memilih skala Beaufort apa pun di tabel bawah untuk melihat kecepatan minimumnya dalam semua format.',
  },
  {
    name: 'Gunakan hasil untuk merencanakan navigasi Anda',
    text: 'Gabungkan informasi kecepatan dan angin untuk memutuskan apakah kondisinya sesuai untuk jenis kapal dan pelayaran yang Anda rencanakan.',
  },
];

const seo: SpeedConverterLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Panduan Konverter Kecepatan Bahari dan Skala Beaufort',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Kecepatan adalah data fundamental dalam navigasi maritim. Mengetahui berapa knot kecepatan kapal Anda, bagaimana itu diterjemahkan ke dalam kilometer per jam untuk merencanakan pelayaran, atau skala Beaufort berapa yang mewakili angin yang Anda alami, adalah perhitungan yang perlu dikuasai setiap pelaut.',
  },
  {
    type: 'paragraph',
    html: 'Konverter kecepatan bahari ini memungkinkan Anda mengubah antara knot, km/jam, m/s, dan mph secara instan, sambil secara otomatis mengidentifikasi skala Beaufort yang sesuai beserta deskripsi kondisi laut dan efek angin yang dapat diamati.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Satuan Standar', value: 'Knot (kt)', icon: 'mdi:speedometer' },
      { label: 'Skala Angin', value: 'Beaufort (0-12)', icon: 'mdi:weather-windy' },
      { label: 'Konversi Kunci', value: '1 kt = 1,85 km/jam', icon: 'mdi:swap-horizontal' },
    ],
  },
  {
    type: 'title',
    text: 'Mengapa kecepatan diukur dalam Knot?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>Knot (kt)</strong> adalah satuan resmi kecepatan dalam navigasi laut dan udara. Definisinya presisi: satu knot sama dengan satu mil laut per jam, di mana mil laut (1852 m) didefinisikan sebagai satu menit busur meridian terestrial. Hubungan langsung dengan geometri Bumi inilah yang membuat knot menjadi satuan yang sangat praktis untuk navigasi, memungkinkan estimasi jarak langsung pada peta laut tanpa konversi.',
  },
  {
    type: 'paragraph',
    html: 'Secara historis, pelaut mengukur kecepatan kapal menggunakan <em>chip log</em>: sepotong kayu segitiga yang dilemparkan ke laut yang diikatkan ke tali dengan simpul setiap 14,4 meter (fraksi proporsional dari satu mil laut dalam 30 detik). Menghitung simpul yang melewati jari mereka selama waktu itu memberikan kecepatan kapal, yang menjadi asal istilah yang kita gunakan hari ini.',
  },
  {
    type: 'title',
    text: 'Skala Beaufort: Mata Pelaut',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>Skala Beaufort</strong> dikembangkan pada tahun 1805 oleh Laksamana Inggris Sir Francis Beaufort sebagai metode empiris untuk mengklasifikasikan kekuatan angin dari efek yang dapat diamati, tanpa instrumen. Awalnya dirancang untuk memperkirakan berapa banyak layar yang dapat dibawa kapal, saat ini skala ini menjadi referensi universal dalam meteorologi maritim, yang diadopsi oleh Organisasi Meteorologi Dunia (WMO).',
  },
  {
    type: 'paragraph',
    html: 'Skalanya berkisar dari <strong>Skala 0</strong> (tenang total, laut seperti cermin) hingga <strong>Skala 12</strong> (kondisi topan dengan gelombang di atas 14 meter dan udara penuh buih dan percikan). Bagi pelaut rekreasi, batas kritis biasanya adalah Skala 6 (angin kuat, 22-27 knot) untuk kapal kecil dan Skala 7-8 untuk kapal pesiar samudra.',
  },
  {
    type: 'table',
    headers: ['Skala Beaufort', 'Deskripsi', 'Kondisi Laut'],
    rows: [
      ['0', 'Tenang', 'Laut seperti cermin'],
      ['3', 'Sepoi lemah', 'Puncak mulai pecah, ada beberapa buih putih'],
      ['6', 'Angin kuat', 'Ombak besar, puncak buih putih, mungkin ada percikan'],
      ['9', 'Badai kuat', 'Ombak sangat tinggi, jarak pandang berkurang oleh buih'],
      ['12', 'Topan', 'Udara penuh buih, laut memutih sepenuhnya'],
    ],
  },
  {
    type: 'title',
    text: 'Glosarium Kecepatan Bahari',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: 'Knot (kt)', definition: 'Satuan kecepatan yang setara dengan satu mil laut per jam (1852 m/jam). Standar internasional dalam navigasi laut dan udara.' },
      { term: 'SOG (Speed Over Ground)', definition: 'Kecepatan aktual kapal terhadap dasar laut, diukur dengan GPS. Mencerminkan efek arus laut terhadap kecepatan kapal.' },
      { term: 'Kecepatan Log (STW)', definition: 'Kecepatan kapal terhadap air di sekitarnya, diukur dengan instrumen log. Tidak termasuk efek arus; kunci untuk menghitung leeway.' },
      { term: 'Angin Semu (Apparent Wind)', definition: 'Angin yang dirasakan kru di atas kapal, hasil dari penjumlahan vektor angin sejati dan angin yang tercipta karena pergerakan kapal. Selalu berbeda dari angin sejati dalam besaran dan arah.' },
    ],
  },
  {
    type: 'title',
    text: 'Rumus Konversi Cepat',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Untuk mengonversi kecepatan secara manual saat Anda tidak memiliki akses ke konverter digital, gunakan perkiraan cepat yang perlu diingat setiap pelaut:',
  },
  {
    type: 'list',
    items: [
      '<strong>Knot ke km/jam:</strong> Kalikan knot dengan 1,852. Perkiraan cepat: knot x 2, dikurangi 8%. Misalnya, 10 kt ≈ 20 - 1,6 = 18,4 km/jam.',
      '<strong>Knot ke mph:</strong> Kalikan knot dengan 1,15. Perkiraan: knot + 15%. Misalnya, 20 kt ≈ 23 mph.',
      '<strong>Knot ke m/s:</strong> Kalikan knot dengan 0,514. Perkiraan cepat: bagi knot dengan 2. Misalnya, 10 kt ≈ 5 m/s (persisnya: 5,14 m/s).',
    ],
  },
  {
    type: 'tip',
    title: 'Keselamatan dan Klimatologi',
    html: 'Sebelum berangkat, selalu konsultasikan prakiraan cuaca maritim. Beaufort 4-5 masih dapat ditangani oleh sebagian besar kapal rekreasi; dari Skala 6 ke atas, pertimbangkan serius untuk menunda keberangkatan jika Anda kurang pengalaman atau kapal Anda tidak siap untuk kondisi tersebut.',
  },
  {
    type: 'title',
    text: 'Perbandingan Peralatan',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Anemometer Digital',
        description: 'Instrumen elektronik untuk pengukuran kecepatan angin yang presisi.',
        icon: 'mdi:speedometer',
        points: [
          'Akurasi ±2% dalam kondisi normal',
          'Membutuhkan daya listrik atau baterai',
          'Dapat gagal dalam kondisi ekstrem',
          'Pembacaan instan dan perekaman data',
        ],
      },
      {
        title: 'Observasi Beaufort',
        description: 'Estimasi visual kekuatan angin dari efek yang dapat diamati di laut dan darat.',
        icon: 'mdi:eye-outline',
        highlight: true,
        points: [
          'Tidak membutuhkan instrumen sama sekali',
          'Tersedia dalam kondisi apa pun',
          'Akurasi cukup untuk keputusan keselamatan',
          'Keterampilan dasar bagi navigator ahli',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Navigasi dan Perencanaan Pelayaran',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Saat merencanakan pelayaran, kecepatan kapal Anda menentukan perkiraan waktu kedatangan (ETA) dan konsumsi bahan bakar untuk kapal motor. Untuk kapal layar, kecepatan juga tergantung pada kekuatan dan arah angin: mengetahui prediksi skala Beaufort memungkinkan Anda mengantisipasi apakah Anda bisa berlayar atau perlu menggunakan mesin.',
  },
  {
    type: 'paragraph',
    html: 'Dalam balapan, konversi antara knot dan meter per detik sangat berguna untuk menghitung VMG (Velocity Made Good) dan untuk menganalisis kutub layar (sail polars). Ahli meteorologi dan model prakiraan numerik biasanya memberikan angin dalam m/s atau km/jam, sehingga konversi ke knot adalah langkah rutin dalam perencanaan taktis.',
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
    name: `Cara menggunakan: ${title}`,
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
