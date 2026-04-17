import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TideCalculatorUI, TideCalculatorLocaleContent } from '../index';

const slug = 'kalkulator-pasang-surut';
const title = 'Kalkulator Ketinggian Pasang Surut';
const description =
  'Estimasi kedalaman air pada titik mana pun dalam siklus pasang surut menggunakan Aturan Seperdua Belas (Rule of Twelfths). Ideal untuk perencanaan pesisir dan studi lisensi nautika.';

const ui: TideCalculatorUI = {
  parametersLabel: 'Parameter',
  highTideLabel: 'Pasang Tinggi',
  lowTideLabel: 'Surut Rendah',
  targetTimeLabel: 'Waktu kueri',
  estimatedHeightLabel: 'Estimasi Ketinggian',
  metersLabel: 'meter',
  amplitudeLabel: 'Amplitudo',
  durationLabel: 'Durasi',
  tableBreakdownLabel: 'Rincian Seperdua Belas',
  tableHourLabel: 'Waktu',
  tableStateLabel: 'Status',
  tableStartLabel: 'Mulai',
  tableEndLabel: 'Selesai',
  statusUpLabel: 'Naik',
  statusDownLabel: 'Turun',
  statusOutOfRange: 'Di luar jangkauan',
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  bibliographyTitle: 'Bibliografi',
};

const faq: TideCalculatorLocaleContent['faq'] = [
  {
    question: 'Apa itu Aturan Seperdua Belas (Rule of Twelfths) dan untuk apa digunakan?',
    answer:
      'Aturan Seperdua Belas adalah metode matematika sederhana yang digunakan dalam navigasi untuk mengestimasi ketinggian pasang surut pada titik mana pun antara waktu pasang dan surut. Metode ini didasarkan pada pengamatan bahwa aliran pasang surut mengikuti kurva sinusoidal perkiraan, membagi total rentang menjadi 12 bagian selama 6 jam (1/12, 2/12, 3/12, 3/12, 2/12, 1/12).',
  },
  {
    question: 'Apakah metode ini dapat diandalkan untuk navigasi nyata?',
    answer:
      'Ini adalah metode estimasi teoritis yang sangat berguna untuk perencanaan cepat dan tujuan pendidikan. Namun, metode ini tidak memperhitungkan faktor meteorologi seperti tekanan atmosfer atau angin, yang dapat mengubah permukaan laut beberapa desimeter. Untuk navigasi nyata, selalu konsultasikan tabel pasang surut resmi.',
  },
  {
    question: 'Data apa yang saya perlukan untuk menghitung ketinggian pasang surut?',
    answer:
      'Anda memerlukan waktu dan ketinggian (dalam meter) dari pasang tinggi dan surut rendah terdekat dengan momen yang ingin Anda kueri. Data ini dapat ditemukan di almanak pasang surut atau aplikasi cuaca maritim.',
  },
  {
    question: 'Mengapa air pasang tidak selalu naik dengan kecepatan yang sama?',
    answer:
      'Karena inersia massa air yang besar dan konfigurasi cekungan samudra. Air pasang mulai naik perlahan setelah surut, mencapai kecepatan maksimum di jam-jam tengah (jam ke-3/12 dan ke-4/12) dan melambat kembali saat mendekati pasang tinggi.',
  },
  {
    question: 'Bagaimana tekanan atmosfer memengaruhi pasang surut?',
    answer:
      'Tekanan tinggi (antisiklon) menekan air ke bawah, mengurangi ketinggian aktual. Tekanan rendah (depresi) memungkinkan air naik lebih tinggi. Sebagai aturan umum, variasi 1 hPa dari rata-rata berhubungan dengan perubahan permukaan laut sekitar 1 cm.',
  },
  {
    question: 'Apa itu rentang pasang surut (tidal range)?',
    answer:
      'Ini adalah perbedaan ketinggian vertikal antara pasang tinggi dan surut rendah yang segera mendahului atau menyertainya. Pengukuran ini bervariasi menurut fase bulan (pasang perbani dan pasang purnama) serta lokasi geografis.',
  },
];

const howTo: TideCalculatorLocaleContent['howTo'] = [
  {
    name: 'Identifikasi pasang tinggi dan surut rendah',
    text: 'Konsultasikan almanak pasang surut Anda untuk mendapatkan waktu dan ketinggian siklus pasang surut yang Anda minati.',
  },
  {
    name: 'Masukkan data ke dalam kalkulator',
    text: 'Masukkan waktu dan ketinggian pasang tinggi serta surut rendah. Alat ini akan menentukan durasi dan amplitudo secara otomatis.',
  },
  {
    name: 'Atur waktu kueri',
    text: 'Sesuaikan waktu di mana Anda ingin mengetahui level air. Anda akan melihat titik tepat yang disorot pada grafik.',
  },
  {
    name: 'Analisis tabel seperdua belas',
    text: 'Tinjau rincian jam demi jam untuk memahami bagaimana level air akan berfluktuasi selama seluruh periode tersebut.',
  },
];

const bibliography: TideCalculatorLocaleContent['bibliography'] = [
  {
    name: 'Puertos del Estado - Tide Prediction',
    url: 'https://portus.puertos.es/#/',
  },
  {
    name: 'Instituto Hidrografico de la Marina',
    url: 'https://armada.defensa.gob.es/ihm/',
  },
];

const seo: TideCalculatorLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Menguasai Pasang Surut: Aturan Seperdua Belas dalam Navigasi',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Navigasi pesisir dan memasuki pelabuhan dengan kedalaman terbatas memerlukan pengetahuan akurat tentang kedalaman air setiap saat. Meskipun aplikasi digital dan GPS yang menyediakan data real-time sudah tersedia saat ini, <strong>Aturan Seperdua Belas</strong> tetap menjadi alat fundamental dalam pelatihan nakhoda kapal rekreasi atau kapten kapal pesiar. Aturan ini adalah metode estimasi matematika yang memungkinkan Anda menghitung level air secara perkiraan tanpa kalkulator rumit pada titik mana pun dalam siklus pasang surut.',
  },
  {
    type: 'title',
    text: 'Apa sebenarnya Aturan Seperdua Belas itu?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Aturan Seperdua Belas didasarkan pada pengamatan bahwa aliran pasang surut tidak konstan. Air tidak naik atau turun dengan kecepatan yang sama selama sekitar enam jam antara pasang tinggi dan surut rendah. Sebaliknya, pergerakannya mengikuti kurva sinusoidal. Selama jam pertama air bergerak perlahan; kecepatannya meningkat di jam-jam tengah dan melambat kembali saat mendekati titik ekstrem berikutnya.',
  },
  {
    type: 'table',
    headers: ['Jam Siklus', 'Proporsi', 'Status Aliran'],
    rows: [
      ['<strong>Jam ke-1</strong>', '1/12 dari rentang', 'Mulai perlahan (Slack water)'],
      ['<strong>Jam ke-2</strong>', '2/12 dari rentang', 'Aliran meningkat'],
      ['<strong>Jam ke-3</strong>', '3/12 dari rentang', 'Aliran maksimum (Arus kuat)'],
      ['<strong>Jam ke-4</strong>', '3/12 dari rentang', 'Aliran berkelanjutan'],
      ['<strong>Jam ke-5</strong>', '2/12 dari rentang', 'Perlambatan nyata'],
      ['<strong>Jam ke-6</strong>', '1/12 dari rentang', 'Perlambatan akhir (Menuju slack water)'],
    ],
  },
  {
    type: 'title',
    text: 'Batasan teknis: Faktor-faktor yang memengaruhi pasang surut nyata',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: 'Tekanan atmosfer', definition: 'Depresi mengangkat permukaan laut; antisiklon menurunkannya. Sebagai aturan umum, variasi ~1 cm per perbedaan 1 hPa dari rata-rata.' },
      { term: 'Angin pesisir', definition: 'Angin darat yang berkelanjutan dapat menumpuk air di atas level yang diprediksi dalam tabel pasang surut.' },
      { term: 'Topografi lokal', definition: 'Bentuk pesisir, kedalaman dasar laut, dan keberadaan muara dapat secara signifikan menunda atau mempercepat aliran pasang surut.' },
    ],
  },
  {
    type: 'tip',
    title: 'Catatan Keselamatan',
    html: 'Alat ini menggunakan metode estimasi matematika. Alat ini tidak memperhitungkan faktor meteorologi atau topografi lokal. Untuk navigasi nyata, selalu konsultasikan tabel pasang surut resmi.',
  },
  {
    type: 'title',
    text: 'Konsep kunci bagi pelaut baru',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Rentang pasang surut (Tidal range)',
        definition: 'Perbedaan vertikal antara pasang tinggi dan surut rendah. Di Teluk Biscay bisa mencapai beberapa meter; di Mediterania hampir tidak berarti.',
      },
      {
        term: 'Durasi pasang surut',
        definition: 'Interval waktu antara pasang tinggi dan surut rendah berikutnya. Biasanya sekitar 6 jam 12 menit (siklus semi-diurnal).',
      },
      {
        term: 'Chart datum',
        definition: 'Level referensi dari mana semua kedalaman pada peta laut diukur. Kedalaman aktual hampir tidak pernah kurang dari yang ditunjukkan.',
      },
    ],
  },
];

const schemas: TideCalculatorLocaleContent['schemas'] = [
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

export const content: TideCalculatorLocaleContent = {
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
