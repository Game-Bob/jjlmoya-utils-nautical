import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { UnderKeelUI, UnderKeelLocaleContent } from '../index';

const slug = 'kalkulator-ruang-bebas-kapal';
const title = 'Kalkulator Ruang Bebas di Bawah Lunas UKC';
const description =
  'Hitung jendela waktu aman untuk melintasi gosong pasir, kanal, atau titik dengan draf terbatas. Masukkan draf kapal, kedalaman peta, dan data pasang surut Anda.';

const ui: UnderKeelUI = {
  parametersLabel: 'Parameter',
  boatDraftLabel: 'Draf Kapal',
  chartDepthLabel: 'Kedalaman Peta',
  safetyMarginLabel: 'Margin Keamanan',
  highTideLabel: 'Pasang Tinggi',
  lowTideLabel: 'Surut Rendah',
  metersLabel: 'meter',
  passWindowLabel: 'Jendela Lintasan',
  neededLabel: 'Kedalaman yang dibutuhkan',
  tideRequiredLabel: 'Minimum pasang yang dibutuhkan',
  statusNeverLabel: 'Tidak ada ruang bebas dalam siklus ini',
  statusAlwaysLabel: 'Aman sepanjang siklus',
  statusFromLabel: 'Lintasan dari:',
  statusUntilLabel: 'Lintasan hingga:',
  bottomLabel: 'DASAR LAUT',
  faqTitle: 'Pertanyaan yang Sering Diajukan': 'Bibliografi',
};

const faq: UnderKeelLocaleContent['faq'] = [
  {
    question: 'Apa sebenarnya kalkulasi ruang bebas di bawah lunas (under-keel clearance)?',
    answer: 'Ini adalah perhitungan saat kedalaman air mencukupi di titik kritis (seperti gosong pasir atau kanal sempit) untuk memungkinkan transit kapal dengan aman sesuai dengan draf (sarat air) kapal tersebut.',
  },
  {
    question: 'Berapa margin keamanan yang direkomendasikan?',
    answer: 'Untuk kapal rekreasi, margin keamanan minimum antara 0,5 dan 1 meter di atas draf kapal biasanya direkomendasikan. Margin ini mengompensasi kemungkinan kesalahan dalam perhitungan pasang surut, variasi tekanan atmosfer, atau alun (swell) yang tidak terduga.',
  },
  {
    question: 'Bagaimana alun (swell) memengaruhi ruang bebas di bawah lunas?',
    answer: 'Alun menghasilkan osilasi vertikal pada lambung kapal. Pada titik terendah gelombang, kapal lebih dekat ke dasar laut daripada saat diam. Saat melintasi area dengan alun, margin keamanan harus ditingkatkan secara substansial.',
  },
  {
    question: 'Apa itu sounding peta (chart sounding)?',
    answer: 'Ini adalah kedalaman minimum di suatu titik ketika pasang berada pada Chart Datum. Nilai ini ditambahkan ke ketinggian pasang pada saat itu untuk memberikan total kedalaman yang tersedia.',
  },
  {
    question: 'Apa arti nilai sounding yang digarisbawahi di peta?',
    answer: 'Artinya titik tersebut terekspos (mengering) ketika pasang berada pada Chart Datum. Anda akan memerlukan ketinggian pasang yang lebih besar untuk dapat melewatinya.',
  },
  {
    question: 'Apa itu efek Squat dan bagaimana pengaruhnya terhadap lintasan?',
    answer: 'Ini adalah fenomena hidrodinamika di mana kapal yang menavigasi kanal dangkal cenderung tenggelam lebih rendah relatif terhadap garis airnya. Semakin cepat Anda melaju, semakin draf dinamis meningkat dan semakin sedikit air di bawah lunas.',
  },
];

const howTo: UnderKeelLocaleContent['howTo'] = [
  {
    name: 'Tentukan draf dan margin keamanan',
    text: 'Ukur draf kapal Anda pada titik maksimumnya dan tambahkan margin keamanan yang bijaksana (misalnya 0,5 m).',
  },
  {
    name: 'Cari nilai sounding peta',
    text: 'Temukan nilai Datum sounding untuk titik kritis yang akan Anda navigasikan. Perhatikan apakah itu area berpasir atau berbatu.',
  },
  {
    name: 'Masukkan data pasang surut',
    text: 'Gunakan waktu dan ketinggian pasang tinggi dan surut rendah dari almanak pasang surut resmi terdekat.',
  },
  {
    name: 'Periksa jendela lintasan Anda',
    text: 'Alat ini akan menunjukkan interval waktu yang tepat di mana Anda akan memiliki kedalaman yang cukup untuk menavigasi dengan aman.',
  },
];

const seo: UnderKeelLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Ruang Bebas di Bawah Lunas: Navigasi Aman di Atas Kedangkalan',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Merencanakan lintasan tidak berakhir dengan menggambar rute di peta. Bagi navigator pesisir, salah satu perhitungan paling kritis adalah <strong>ruang bebas di bawah lunas (under-keel clearance)</strong>: mengetahui jam berapa akan ada cukup kedalaman untuk melintasi titik kritis tanpa kandas.',
  },
  {
    type: 'title',
    text: 'Apa itu sounding peta dan bagaimana hubungannya dengan pasang surut?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Pada peta navigasi, kedalaman (sounding) merujuk pada <strong>Chart Datum</strong>. Level ini, berdasarkan konvensi, adalah level terendah yang dicapai pasang surut dalam kondisi normal. Kedalaman aktual yang akan ditemukan kapal Anda pada saat tertentu adalah jumlah dari sounding tersebut ditambah ketinggian pasang pada saat itu.',
  },
  {
    type: 'title',
    text: 'Elemen kalkulasi: Draf dan Margin',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Untuk menggunakan kalkulator ruang bebas di bawah lunas secara profesional, Anda perlu mengetahui dua detail teknis tentang kapal Anda dan satu keputusan pribadi:',
  },
  {
    type: 'list',
    items: [
      { term: 'Draf beban maksimum', definition: 'Kedalaman yang dicapai oleh titik terendah kapal (lunas) saat terisi penuh.' },
      { term: 'Sounding peta', definition: 'Angka pada peta navigasi untuk titik yang ingin Anda lintasi. Jika digarisbawahi, titik tersebut mengering pada Chart Datum.' },
      { term: 'Margin keamanan', definition: 'Ruang bebas tambahan (setidaknya 0,5 hingga 1 meter) di atas draf sebagai cadangan keamanan.' },
    ],
  },
  {
    type: 'title',
    text: 'Bagaimana jendela lintasan bekerja?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Kalkulator menentukan saat tepat ketika level air akan naik di atas draf Anda ditambah margin keamanan yang dipilih. Sejak menit itu, <strong>jendela lintasan</strong> terbuka. Jika air surut, alat ini akan menunjukkan sampai jam berapa lintas diizinkan sebelum level air turun di bawah batas keamanan Anda.',
  },
  {
    type: 'title',
    text: 'Faktor yang memengaruhi lintasan aktual',
    level: 3,
  },
  {
    type: 'table',
    headers: ['Faktor', 'Efek', 'Rekomendasi'],
    rows: [
      ['<strong>Alun (Swell)</strong>', 'Mengurangi air di bawah lambung', 'Tingkatkan margin keamanan secara signifikan'],
      ['<strong>Efek Squat</strong>', 'Meningkatkan draf melalui hisapan', 'Kurangi kecepatan di area kritis'],
      ['<strong>Dasar berpasir</strong>', 'Kedalaman variabel karena badai', 'Aktifkan perum gema (sounder) dan margin ekstra'],
    ],
  },
  {
    type: 'tip',
    title: 'Tips Navigasi',
    html: 'Jika jendela lintasan Anda sangat sempit atau cuaca memburuk, keputusan paling bijaksana biasanya adalah menunggu di perairan dalam sampai pasang naik ke ketinggian yang dibutuhkan.',
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
    name: `Cara menggunakan: ${title}`,
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
