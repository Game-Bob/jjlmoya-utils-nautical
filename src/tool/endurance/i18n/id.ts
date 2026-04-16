import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EnduranceUI, EnduranceLocaleContent } from '../index';

const slug = 'kalkulator-jarak-tempuh-id';
const title = 'Kalkulator Daya Jelajah Kapal';
const description =
  'Hitung jangkauan maksimum dan jarak aman kapal Anda berdasarkan konsumsi bahan bakar, kapasitas tangki, dan kecepatan jelajah. Manajemen bahan bakar untuk kapal motor.';

const ui: EnduranceUI = {
  tankCapacityLabel: 'Kapasitas Tangki',
  mainTankLabel: 'Utama',
  auxTankLabel: 'Tambahan',
  currentFuelLabel: 'Bahan Bakar Saat Ini',
  seaConditionsLabel: 'Kondisi Laut / Angin',
  consumptionLabel: 'Konsumsi Teoretis',
  cruiseSpeedLabel: 'Kecepatan Jelajah',
  reserveLabel: 'Cadangan',
  fuelPriceLabel: 'Harga per Liter',
  maxRangeLabel: 'Jangkauan Maksimum',
  realPerformanceLabel: 'Performa Nyata',
  hoursLabel: 'Jam Daya Jelajah',
  safeMilesLabel: 'Mil Aman',
  tankValueLabel: 'Nilai Tangki',
  inverseCalcLabel: 'Perhitungan Terbalik: Berapa banyak saya perlu mengisi ulang?',
  desiredDistLabel: 'Jarak yang Diinginkan',
  minFuelLabel: 'Bahan Bakar Minimal yang Dibutuhkan',
  warningLabel: 'Pengingat: Cadangan 20% adalah batas minimum absolut yang direkomendasikan untuk keselamatan pelayaran.',
  seaCalm: 'Tenang (1.0x)',
  seaLight: 'Alun Ringan (+15%)',
  seaModerate: 'Alun Sedang (+30%)',
  seaStorm: 'Badai (+60%)',
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  bibliographyTitle: 'Bibliografi',
};

const faq: EnduranceLocaleContent['faq'] = [
  {
    question: 'Bagaimana cara menghitung daya jelajah kapal motor?',
    answer: 'Daya jelajah dihitung dengan membagi bahan bakar yang tersedia dengan konsumsi per jam untuk mendapatkan total jam, lalu mengalikan waktu tersebut dengan kecepatan jelajah. Alat ini juga menerapkan faktor kondisi laut untuk mencerminkan kondisi navigasi yang sebenarnya.',
  },
  {
    question: 'Mengapa cadangan 20% direkomendasikan dalam navigasi laut?',
    answer: 'Cadangan 20% adalah standar keselamatan bahari yang menjamin ketersediaan bahan bakar jika terjadi peristiwa tak terduga: arus berlawanan, pengalihan rute karena cuaca buruk, kesalahan perkiraan konsumsi, atau kebutuhan untuk membantu kapal lain. Banyak asuransi dan syahbandar menganggap ini wajib.',
  },
  {
    question: 'Apa itu performa L/NM dan bagaimana pengaruhnya terhadap perencanaan?',
    answer: 'Performa dalam liter per mil laut (L/NM) adalah efisiensi nyata mesin pada kondisi laut. Berbeda dengan konsumsi per jam, ini memungkinkan Anda menghitung tepat berapa banyak bahan bakar yang dibutuhkan untuk menempuh jarak tertentu, terlepas dari kecepatan Anda.',
  },
  {
    question: 'Bagaimana kondisi laut memengaruhi konsumsi bahan bakar yang sebenarnya?',
    answer: 'Kondisi laut meningkatkan konsumsi karena lambung kapal bekerja lebih keras melawan hambatan air dan angin. Pada alun ringan konsumsi naik 15%, pada alun sedang 30%, dan saat badai bisa melonjak 60% atau lebih. Mengabaikan faktor ini bisa membuat kapal kehabisan bahan bakar sebelum mencapai pelabuhan.',
  },
];

const howTo: EnduranceLocaleContent['howTo'] = [
  {
    name: 'Masukkan kapasitas tangki Anda',
    text: 'Masukkan liter tangki utama dan tangki tambahan jika ada. Alat ini akan menghitung persentase isi saat ini.',
  },
  {
    name: 'Masukkan level bahan bakar saat ini',
    text: 'Masukkan jumlah liter sebenarnya yang Anda miliki sekarang. Anda bisa mengukurnya dengan indikator level kapal atau memperkirakannya dari pengisian terakhir.',
  },
  {
    name: 'Sesuaikan kondisi navigasi',
    text: 'Pilih kondisi laut yang diperkirakan untuk perjalanan Anda. Faktor laut mengoreksi konsumsi teoretis menjadi konsumsi nyata yang diperkirakan.',
  },
  {
    name: 'Masukkan konsumsi dan kecepatan jelajah',
    text: 'Gunakan data pabrikan atau catatan Anda sendiri untuk konsumsi per jam dan kecepatan navigasi yang biasa Anda gunakan.',
  },
  {
    name: 'Tinjau jarak aman dan perhitungan terbalik',
    text: 'Alat ini menunjukkan berapa mil yang bisa Anda tempuh dengan aman dan berapa banyak bahan bakar yang Anda butuhkan untuk mencapai tujuan tertentu.',
  },
];

const bibliography: EnduranceLocaleContent['bibliography'] = [
  {
    name: 'UK Maritime and Coastguard Agency',
    url: 'https://www.gov.uk/government/organisations/maritime-and-coastguard-agency',
  },
  {
    name: 'RYA - Royal Yachting Association',
    url: 'https://www.rya.org.uk/',
  },
];

const seo: EnduranceLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Manajemen Bahan Bakar dan Daya Jelajah dalam Navigasi Kapal Motor',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>Daya jelajah bahari</strong> adalah salah satu perhitungan paling kritis sebelum berlayar dengan kapal motor. Mengetahui secara tepat berapa mil yang dapat Anda tempuh dengan bahan bakar yang tersedia adalah pembeda antara pelayaran yang terencana dan keadaan darurat di laut.',
  },
  {
    type: 'paragraph',
    html: 'Kalkulator daya jelajah ini mengintegrasikan <strong>faktor kondisi laut</strong>, persentase cadangan keselamatan, dan perhitungan bahan bakar terbalik sehingga manajemen bahan bakar menjadi lengkap dan andal dalam situasi apa pun.',
  },
  {
    type: 'title',
    text: 'Aturan Emas: Aturan Sepertiga',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Aturan manajemen bahan bakar klasik dalam navigasi laut membagi tangki menjadi tiga bagian yang sama untuk selalu menjamin margin keselamatan:',
  },
  {
    type: 'list',
    items: [
      '<strong>Sepertiga untuk perjalanan berangkat:</strong> Bahan bakar yang dibutuhkan untuk mencapai tujuan yang direncanakan.',
      '<strong>Sepertiga untuk perjalanan pulang:</strong> Bahan bakar untuk kembali ke pelabuhan keberangkatan atau yang terdekat.',
      '<strong>Sepertiga sebagai cadangan:</strong> Margin keselamatan untuk peristiwa tak terduga, arus, atau kondisi buruk.',
    ],
  },
  {
    type: 'paragraph',
    html: 'Dalam kalkulator, Anda dapat mengatur persentase cadangan sesuai kriteria Anda sendiri, meskipun <strong>berada di bawah 20% tidak pernah direkomendasikan</strong>. Dengan tangki yang lebih besar atau perjalanan panjang, banyak nakhoda berpengalaman menaikkan margin ini menjadi 30% atau bahkan 33%.',
  },
  {
    type: 'title',
    text: 'Faktor-faktor yang Memengaruhi Konsumsi (l/h)',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Konsumsi teoretis pabrikan dihitung dalam kondisi laboratorium yang ideal. Dalam praktiknya, banyak faktor yang mengubah <strong>konsumsi bahan bakar nyata</strong>. Kecepatan lambung adalah yang paling menentukan: navigasi di atas kecepatan ekonomis dapat melipatgandakan atau melipatgandakan konsumsi per mil yang ditempuh.',
  },
  {
    type: 'table',
    headers: ['Kondisi Navigasi', 'Efek pada Daya Jelajah', 'Saran'],
    rows: [
      ['<strong>Lambung Kotor</strong>', 'Mengurangi daya jelajah hingga 20%', 'Bersihkan lambung sebelum musim berlayar'],
      ['<strong>Arus Berlawanan</strong>', 'Dapat mengurangi kecepatan efektif sebesar 30%', 'Selalu hitung dengan kecepatan di atas tanah (SOG)'],
      ['<strong>Angin Berlawanan</strong>', 'Meningkatkan hambatan dan konsumsi sebesar 10-25%', 'Gunakan faktor alun ringan atau sedang'],
      ['<strong>Beban Berlebih</strong>', 'Meningkatkan draf dan hambatan', 'Timbang peralatan dan perbekalan sebelum menghitung'],
    ],
  },
  {
    type: 'title',
    text: 'Glosarium Teknis Daya Jelajah',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: 'Performa (L/NM)', definition: 'Liter bahan bakar yang dikonsumsi per mil laut yang ditempuh. Indikator paling berguna untuk merencanakan pelayaran karena menghubungkan konsumsi dengan jarak aktual.' },
      { term: 'Kecepatan Jelajah', definition: 'Kecepatan optimal di mana mesin menawarkan keseimbangan terbaik antara kecepatan dan konsumsi. Umumnya antara 70% dan 80% dari daya maksimum.' },
      { term: 'Cadangan Kritis', definition: 'Persentase tangki yang tidak boleh dikonsumsi. Minimal 20% direkomendasikan untuk menutupi kontinjensi dan mencegah udara masuk ke sirkuit bahan bakar.' },
      { term: 'Konsumsi Spesifik', definition: 'Gram bahan bakar per kilowatt-jam daya yang dihasilkan (g/kWh). Ukuran teknis mesin yang memungkinkan perbandingan efisiensi di antara berbagai sistem propulsi.' },
    ],
  },
  {
    type: 'title',
    text: 'Bahaya Endapan dan Goncangan',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Sumber masalah umum pada kapal dengan level bahan bakar rendah adalah <strong>endapan dasar tangki</strong>. Ketika level turun terlalu rendah, sedimen yang terkumpul selama bertahun-tahun dapat mencapai filter dan menyumbatnya, membuat mesin mati meskipun indikator menunjukkan masih ada beberapa liter.',
  },
  {
    type: 'paragraph',
    html: 'Goncangan kapal di laut dengan sedikit bahan bakar juga dapat menyebabkan masalah: cairan bergoyang mengikuti ombak dan dapat menyebabkan pompa bahan bakar kosong sesaat. Menjaga cadangan memastikan hal ini tidak terjadi pada saat kritis seperti manuver masuk pelabuhan.',
  },
  {
    type: 'tip',
    title: 'Tips Menghemat Bahan Bakar',
    html: 'Mengurangi kecepatan sebesar 10-15% di bawah kecepatan jelajah biasa Anda dapat meningkatkan efisiensi hingga 30%. Jika Anda memiliki waktu dan cuaca mendukung, berlayar lebih lambat selalu merupakan keputusan yang paling ekonomis dan aman.',
  },
  {
    type: 'title',
    text: 'Perbedaan antara Mil Laut (NM) dan Kilometer',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Satu <strong>mil laut</strong> setara dengan 1.852 meter (1,852 km), dan merupakan unit jarak universal dalam navigasi maritim dan aeronautika. Ini didasarkan pada satu menit busur derajat geografis, sehingga ideal untuk navigasi dengan peta dalam koordinat geografis. Kecepatan dalam mil laut per jam disebut knot (kn).',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Indikator Analog Jarum',
        description: 'Sistem pelampung tradisional',
        points: [
          'Biaya rendah dan pemasangan sederhana',
          'Tidak memerlukan listrik untuk beroperasi',
          'Tidak akurat di laut bergelombang karena goncangan bahan bakar',
          'Tidak menunjukkan konsumsi atau perkiraan daya jelajah',
        ],
      },
      {
        title: 'Kalkulator Aliran Digital',
        description: 'Sensor aliran elektronik',
        highlight: true,
        points: [
          'Akurasi 1-2% pada konsumsi nyata',
          'Menunjukkan daya jelajah, konsumsi, dan biaya secara real-time',
          'Dapat diintegrasikan dengan chartplotter dan NMEA 2000',
          'Memerlukan kalibrasi awal dan perawatan',
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
    name: `Cara menggunakan: ${title}`,
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
