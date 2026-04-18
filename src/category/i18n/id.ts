import type { CategoryLocaleContent } from '../index';

const slug = 'pelayaran-dan-nautika';
const title = 'Pelayaran & Nautika';
const description =
  'Alat perhitungan nautika untuk pelaut: pasang surut, ketahanan, luas layar, konverter satuan dan kecepatan. Ideal untuk belajar ujian RYA dan Yachtmaster.';

const seo: CategoryLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Mengapa menggunakan alat digital dalam berlayar dan navigasi?',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Navigasi modern telah mengalami transformasi radikal dengan hadirnya alat digital. Baik Anda berada di kapal rekreasi kecil maupun di kemudi kapal pesiar, kemampuan untuk memproses data posisi, angin, dan arus secara instan bukan hanya soal kenyamanan — ini adalah pilar keselamatan fundamental di laut.',
  },
  {
    type: 'paragraph',
    html: 'Secara historis, pelaut bergantung sepenuhnya pada sekstan, kronometer laut, dan tabel reduksi untuk menentukan posisi di lautan luas. Hari ini, meskipun romantisme sekstan tetap ada, realitas operasional menuntut kecepatan respons yang hanya bisa disediakan oleh alat perhitungan digital.',
  },
  {
    type: 'title',
    text: 'Aspek Kunci untuk Navigator Modern',
    level: 2,
  },
  {
    type: 'title',
    text: 'Geolokasi dan Kartografi Digital Presisi Tinggi',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Kartografi digital telah mendemokratisasi navigasi, memberikan akses ke informasi yang sebelumnya terbatas hanya untuk kapal komersial besar, bahkan untuk kapal kecil. Seorang skipper yang bertanggung jawab menggunakan alat digital untuk memvalidasi penilaiannya, bukan menggantikannya.',
  },
  {
    type: 'list',
    items: [
      'Presisi entri data: Kesalahan pengetikan minimal dapat membawa Anda bermil-mil dari tujuan.',
      'Kompatibilitas lintas perangkat: Sinkronkan perencanaan perjalanan di tablet dengan instrumen jembatan.',
      'Cadangan kegagalan perangkat keras: Aplikasi web ringan adalah asuransi jika plotter kapal mogok.',
      'Perencanaan Perjalanan: Kalkulator nautika memungkinkan estimasi akurat konsumsi bahan bakar dan jarak.',
    ],
  },
  {
    type: 'title',
    text: 'Meteorologi Laut dan Optimasi Rute',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Angin dan kondisi laut adalah penguasa sejati berlayar. Interpretasi yang benar dari skala angin (seperti skala Beaufort) dan konversinya ke satuan praktis seperti knot adalah realitas sehari-hari setiap navigator.',
  },
  {
    type: 'tip',
    title: 'Pentingnya redundansi dan Rencana B',
    html: 'Jangan pernah mempercayakan semua navigasi Anda pada satu sistem elektronik. Selalu simpan cadangan titik waypoint kritis Anda di atas kertas. Alat web sangat baik untuk perencanaan pra-perjalanan, tetapi pelaut yang baik selalu memiliki rencana darurat yang tidak memerlukan layar.',
  },
  {
    type: 'title',
    text: 'Pelatihan Nautika dan Penggunaan Kalkulator',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Bahkan dalam ujian resmi untuk kualifikasi nautika (seperti RYA Dayskipper atau Yachtmaster), perhitungan peta tetap wajib. Alat digital berfungsi sebagai teman belajar yang sempurna, memungkinkan kandidat memverifikasi latihan navigasi mati, perhitungan pasang surut, dan koreksi kompas mereka.',
  },
  {
    type: 'paragraph',
    html: 'Koleksi utilitas kami bertujuan menjadi jembatan antara ketelitian akademis peta kertas dan keterlibatan navigasi modern. Kami ingin setiap skipper, penggemar, atau profesional menemukan di sini data cepat dan akurat yang mereka butuhkan sebelum berangkat.',
  },
];

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo,
};
