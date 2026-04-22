import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SailAreaUI, SailAreaLocaleContent } from '../index';

const slug = 'kalkulator-luas-layar';
const title = 'Kalkulator Luas Layar dan Rasio SA/D';
const description =
  'Hitung total luas layar dan rasio luas layar terhadap berat kapal (SA/D) Anda. Analisis performa bahari berdasarkan pengukuran I, J, P, dan E.';

const ui: SailAreaUI = {
  hullSectionLabel: 'Data Lambung',
  totalMassLabel: 'Displacement',
  rigSystemLabel: 'Rig',
  intendedUseLabel: 'Tujuan Penggunaan',
  rigGeometryLabel: 'Geometri Rig',
  sailConfigLabel: 'Tipe Rig',
  genoaOverlapLabel: 'Overlap Genoa',
  foqueLabel: 'Jib',
  genovaLabel: 'Genoa',
  sadRatioLabel: 'Rasio SA/D',
  totalAreaLabel: 'Total Luas',
  performanceLabel: 'Performa',
  sloopLabel: 'Sloop (tiang tunggal)',
  cutterLabel: 'Cutter (dua layar depan)',
  ketchLabel: 'Ketch (dua tiang)',
  cruiserLabel: 'Kapal Pesiar (Cruiser)',
  performanceTypeLabel: 'Tipe Performa',
  racerLabel: 'Kapal Balap (Racer)',
  exportPdfLabel: 'BUAT LAPORAN TEKNIS',
  faqTitle: 'Pertanyaan yang Sering Diajukan': 'Bibliografi',
};

const faq: SailAreaLocaleContent['faq'] = [
  {
    question: 'Mengapa kapal saya lambat saat angin sepoi-sepoi?',
    answer: 'Rasio SA/D Anda kemungkinan di bawah 15, yang menunjukkan kapal dengan displacement berat serta luas layar yang kecil relatif terhadap beratnya. Kapal seperti ini membutuhkan angin di atas 12 knot untuk berlayar dengan lincah.',
  },
  {
    question: 'Haruskah saya mengosongkan tangki air untuk meningkatkan performa?',
    answer: 'Ya, meringankan beban kapal secara langsung meningkatkan rasio SA/D karena displacement aktual berkurang. Mengosongkan tangki air dan bahan bakar dapat mengurangi berat hingga ratusan kilogram dan meningkatkan rasio secara signifikan.',
  },
  {
    question: 'Apa itu Roach pada layar?',
    answer: 'Roach adalah lengkungan cembung pada bagian leech (tepi belakang) layar utama. Ini memberikan tambahan luas layar di luar segitiga geometris dasar yang ditentukan oleh P dan E. Kapal balap biasanya memiliki Roach yang agresif dengan batten (tulang layar) yang kaku.',
  },
  {
    question: 'Bagaimana cara mengukur displacement nyata kapal saya?',
    answer: 'Metode paling andal adalah dengan menggunakan displacement muatan penuh (loaded displacement, termasuk semua perbekalan, air, bahan bakar, dan kru). Angka light ship displacement dari manual pabrikan biasanya bersifat optimistis. Gunakan displacement aktual dalam kondisi pelayaran normal Anda.',
  },
  {
    question: 'Di mana saya bisa menemukan ukuran I, J, P, dan E untuk kapal saya?',
    answer: 'Anda dapat menemukannya di manual pemilik, sertifikat rating ORC atau IRC, atau dokumentasi sertifikat kelas. Anda juga bisa mengukurnya langsung di atas kapal dengan pita pengukur atau dengan menghubungi pembuat kapal.',
  },
];

const howTo: SailAreaLocaleContent['howTo'] = [
  {
    name: 'Pilih tipe rig',
    text: 'Pilih antara Sloop (tiang tunggal), Cutter (jib dan staysail), atau Ketch (tiang mizzen). Ini menentukan cara penghitungan total luas layar.',
  },
  {
    name: 'Masukkan displacement',
    text: 'Gunakan displacement aktual kapal Anda dalam kondisi bermuatan (kg atau lbs). Angka ini adalah kunci untuk penghitungan rasio SA/D.',
  },
  {
    name: 'Ukur geometri rig',
    text: 'Masukkan ukuran P (tinggi tiang), E (boom), I (tinggi segitiga depan), dan J (basis segitiga depan) dalam meter atau kaki.',
  },
  {
    name: 'Sesuaikan overlap genoa',
    text: 'Geser slider untuk menunjukkan overlap genoa Anda: 100% adalah jib non-overlapping, 130% adalah genoa standar, 155% adalah genoa overlap besar.',
  },
  {
    name: 'Interpretasikan rasio SA/D',
    text: 'Rasio antara 16 dan 20 adalah kapal pesiar (cruiser) yang seimbang. Di atas 20, kapal akan sangat lincah dalam angin ringan tetapi menuntut keahlian lebih dalam kondisi angin kencang.',
  },
];

const seo: SailAreaLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Kalkulator Luas Layar: Panduan Lengkap Performa dan Rasio',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Luas layar adalah mesin aerodinamis bagi setiap kapal layar. Ini menentukan seberapa banyak energi angin yang dapat ditangkap kapal dan, digabungkan dengan displacement-nya, menentukan karakter baharinya: apakah akan menjadi kapal pesiar yang lambat atau mesin balap yang responsif. Menghitung nilai ini dengan benar adalah langkah pertama untuk memahami perilaku setiap kapal layar.',
  },
  {
    type: 'paragraph',
    html: 'Berlayar melibatkan tarian konstan antara kekuatan angin pada layar dan hambatan air pada lambung kapal. <strong>Rasio Luas Layar / Displacement (SA/D)</strong> menangkap hubungan ini dalam satu angka yang memungkinkan kapal dengan panjang dan displacement berapa pun untuk dibandingkan secara setara.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Rasio Cruiser Ideal', value: '15-18', icon: 'mdi:anchor' },
      { label: 'Kapal Balap', value: '+24', icon: 'mdi:sailing' },
      { label: 'Margin Kesalahan', value: '5-10%', icon: 'mdi:alert-circle-outline' },
    ],
    columns: 3,
  },
  {
    type: 'title',
    text: 'Apa Kegunaan Rasio SA/D?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Rasio <strong>Luas Layar / Displacement</strong> adalah alat diagnostik yang memungkinkan Anda memprediksi perilaku kapal sebelum berlayar. Rasio yang rendah menunjukkan kapal yang kokoh dan aman tetapi lambat dalam angin ringan; rasio yang tinggi menawarkan kecepatan tetapi menuntut keterampilan kru yang lebih besar saat angin kencang. Tidak ada yang lebih unggul: semuanya tergantung pada jenis pelayaran yang diinginkan.',
  },
  {
    type: 'title',
    text: 'Tabel Referensi Rasio SA/D',
    level: 4,
  },
  {
    type: 'table',
    headers: ['Rasio', 'Tipe Kapal', 'Perilaku di Laut'],
    rows: [
      ['< 14', 'Displacement Berat / Kapal Kargo', 'Stabil, lambat, butuh angin stabil'],
      ['14 - 16.5', 'Kapal Pesiar Samudra (Offshore)', 'Seimbang, nyaman, bagus saat melawan angin'],
      ['16.5 - 20', 'Kapal Pesiar Standar', 'Lincah saat berangin, mudah dikendalikan, serbaguna'],
      ['20 - 25', 'Performance Cruiser / Sport', 'Cepat, menuntut, seru dalam angin ringan'],
      ['> 25', 'Kapal Balap / Olahraga Ekstrem', 'Sangat cepat, reaktif, butuh kru ahli'],
    ],
  },
  {
    type: 'title',
    text: 'Glosarium Teknis Pengukuran (I, J, P, E)',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'I (Tinggi Segitiga Depan)',
        definition: 'Jarak vertikal dari dek ke titik di mana halyard jib terpasang pada tiang. Menentukan tinggi segitiga depan.',
      },
      {
        term: 'J (Basis Segitiga Depan)',
        definition: 'Jarak horizontal dari tiang ke linggi depan (haluan kapal). Menentukan basis segitiga depan tempat layar depan dipasang.',
      },
      {
        term: 'P (Tinggi Tiang)',
        definition: 'Jarak dari dek ke sheave halyard layar utama di puncak tiang. Menentukan tinggi layar utama.',
      },
      {
        term: 'E (Panjang Boom)',
        definition: 'Jarak dari tiang ke clew layar utama di ujung boom. Menentukan basis layar utama.',
      },
    ],
  },
  {
    type: 'title',
    text: 'Perhitungan dalam Ujian Bahari (Yachtmaster)',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Penghitungan luas layar dan rasio SA/D merupakan bagian dari silabus ujian <strong>Yachtmaster</strong> dan nakhoda pesisir. Memahami geometri rig dan hubungannya dengan displacement sangat penting untuk mengambil keputusan keselamatan di laut: reefing tepat waktu, memilih genoa yang tepat, atau memperkirakan perilaku kapal sebelum badai datang.',
  },
  {
    type: 'tip',
    title: 'Layar Downwind dan Keselamatan',
    html: 'Untuk pelayaran samudra atau jarak jauh, rasio SA/D antara 16 dan 18 menawarkan keseimbangan terbaik antara kecepatan dan keselamatan. Kapal dengan rasio di atas 22 mungkin perlu melakukan reefing saat angin baru mencapai skala 4-5 Beaufort.',
  },
  {
    type: 'title',
    text: 'Bagaimana Overlap Genoa Memengaruhi Performa?',
    level: 4,
  },
  {
    type: 'paragraph',
    html: '<strong>Genoa</strong> adalah layar depan terbesar, yang ujungnya (clew) berada di belakang tiang, "tumpang tindih" (overlap) dengan layar utama. Persentase overlap menunjukkan seberapa panjang garis tegak lurus luff (LP) dibandingkan dengan jarak J. Genoa 150% memiliki LP setara dengan 150% dari J, memberikan luas layar yang jauh lebih besar daripada jib biasa.',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Dacron (Cruising)',
        description: 'Material klasik untuk layar cruiser. Kokoh dan mudah dirawat.',
        points: [
          'Daya tahan tinggi dan tahan UV',
          'Biaya perawatan rendah',
          'Lebih berat dan mudah melar saat dibebani',
          'Ideal untuk pelayaran pesisir dan samudra',
        ],
      },
      {
        title: 'Laminates (Racing)',
        description: 'Material teknologi tinggi seperti Kevlar, Spectra, atau Dyneema.',
        highlight: true,
        points: [
          'Melar minimal: efisiensi aerodinamis maksimal',
          'Jauh lebih ringan daripada Dacron',
          'Biaya lebih tinggi dan usia pakai lebih pendek',
          'Sangat penting pada kapal dengan rasio SA/D > 22',
        ],
      },
    ],
    columns: 2,
  },
  {
    type: 'title',
    text: 'Fisika Berlayar dan Stabilitas',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Luas layar menghasilkan tenaga penggerak tetapi juga <strong>momen kemiringan</strong> (heeling moment) yang cenderung membalikkan kapal. Stabilitas diukurnya dengan momen penegak (righting moment) yang dapat dilawan kapal terhadap kekuatan heeling ini. Rasio SA/D yang tinggi pada kapal dengan ballast sedikit bisa berbahaya, sedangkan rasio yang sama pada kapal dengan keel yang dalam dan berat sangat aman untuk dikendalikan.',
  },
  {
    type: 'paragraph',
    html: 'Untuk menghitung tenaga tersedia yang nyata, arsitek kapal sering menggunakan <strong>Rasio Displacement-Length (DLR)</strong> dikombinasikan dengan SA/D. Kedua rasio ini bersama-sama menjelaskan secara tepat apakah kapal itu adalah kapal penarik laut atau kapal planer balap.',
  },
  {
    type: 'tip',
    title: 'Stabilitas dan Keselamatan',
    html: 'Jangan mengevaluasi SA/D secara terpisah. Kapal layar dengan rasio 22 dan sudut penegak 90 derajat jauh lebih aman daripada kapal dengan rasio 18 dan sudut penegak 60 derajat. Selalu konsultasikan kurva stabilitas kapal Anda.',
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
    name: `Cara menggunakan: ${title}`,
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
