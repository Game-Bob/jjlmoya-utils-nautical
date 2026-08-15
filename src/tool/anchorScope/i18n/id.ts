import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AnchorScopeLocaleContent } from '../entry';
import type { AnchorScopeUI } from '../ui';

const slug = 'kalkulator-panjang-rantai-jangkar';
const title = 'Kalkulator Panjang Rantai Jangkar dan Radius Putar';
const description =
  'Hitung panjang ideal rantai jangkar, rasio scope dan radius putar aman berdasarkan kedalaman laut, tinggi haluan dan kondisi dasar perairan.';

const ui: AnchorScopeUI = {
  parametersTitle: 'Parameter',
  waterDepthLabel: 'Kedalaman Peta',
  bowHeightLabel: 'Tinggi Lambung Haluan',
  tideRangeLabel: 'Kenaikan Pasang Surut',
  boatLengthLabel: 'Panjang Kapal (LOA)',
  rodeTypeLabel: 'Tali / Rantai Jangkar',
  windConditionLabel: 'Kekuatan Angin & Prakiraan',
  seabedTypeLabel: 'Jenis Dasar Laut',
  presetProtected: 'Teluk Tenang',
  presetOpen: 'Laut Terbuka',
  presetStorm: 'Peringatan Badai',
  seabedTag: 'Faktor Cengkeram Dasar Laut',
  catenaryTag: 'Redaman Kurva Rantai',
  unitM: 'm',
  unitFt: 'ft',
  unitMeters: 'Metrik (m)',
  unitFeet: 'Imperial (ft)',
  allChainOption: 'Semua Rantai (Kurva Berat)',
  ropeChainOption: 'Kombinasi Tali dan Rantai',
  allRopeOption: 'Semua Tali Sintetis',
  calmWindOption: 'Tenang / Angin Lembut (< 15 knot)',
  moderateWindOption: 'Angin Sedang (15 - 25 knot)',
  strongWindOption: 'Angin Kencang / Badai (25 - 35 knot)',
  stormWindOption: 'Badai Hebat (> 35 knot)',
  sandOption: 'Pasir (Cengkeraman Maksimal)',
  mudOption: 'Lumpur (Cengkeraman Baik)',
  clayOption: 'Lempung Padat (Sangat Baik)',
  gravelOption: 'Kerikil / Batu Kecil (Sedang)',
  rockOption: 'Batu Karang (Risiko Tersangkut)',
  weedOption: 'Lamun / Rumput Laut (Lemah)',
  resultsTitle: 'Analisis Labuh Jangkar dan Dimensi',
  scopeRatioLabel: 'Rasio Scope Efektif',
  totalDepthLabel: 'Total Ketinggian Vertikal',
  recommendedRodeLabel: 'Rekomendasi Panjang Rantai',
  horizontalDistanceLabel: 'Jarak Horizontal',
  swingRadiusLabel: 'Estimasi Radius Putar',
  minSafeRodeLabel: 'Minimum Saat Tenang',
  heavyWeatherRodeLabel: 'Panjang Saat Cuaca Buruk',
  statusOptimalTitle: 'Labuh Jangkar Aman dan Stabil',
  statusOptimalDesc: 'Panjang terhitung menjamin kurva redaman dan tarikan horizontal rata pada batang jangkar.',
  statusCautionTitle: 'Cukup Aman: Pantau Perubahan Angin',
  statusCautionDesc: 'Sesuai untuk angin sedang. Ulur lebih banyak rantai jika gelombang bertambah besar.',
  statusDangerTitle: 'Rantai Kurang: Risiko Jangkar Larut',
  statusDangerDesc: 'Rasio kritis. Batang jangkar akan terangkat ke atas dan dapat terlepas dari dasar laut.',
  adviceSand: 'Pasir memberikan penetrasi kuku jangkar yang kokoh. Mundurkan mesin perlahan agar menancap.',
  adviceMud: 'Lumpur lunak membutuhkan kuku jangkar lebar dan rantai lebih panjang untuk lapisan padat.',
  adviceClay: 'Lempung memegang sangat kuat tetapi membutuhkan ujung jangkar tajam untuk menembus.',
  adviceGravel: 'Kerikil mudah bergeser saat ada hentakan. Tambah rantai minimal 25 persen.',
  adviceRock: 'Risiko tinggi jangkar macet. Selalu gunakan tali pelampung pembebas jangkar.',
  adviceWeed: 'Lamun tebal menghalangi jangkar menembus dasar. Periksa cengkeraman mesin dengan teliti.',
  catenaryAllChain: 'Bobot rantai membentuk lengkungan yang meredam sentakan ombak dan menjaga tarikan mendatar.',
  catenaryRopeChain: 'Kombinasi tali memerlukan rasio minimal 7 banding 1 untuk mengimbangi bobot yang ringan.',
  catenaryAllRope: 'Tali nilon membutuhkan rasio 8 banding 1 atau lebih agar batang jangkar tidak terungkit.',
  resetButton: 'Reset Nilai',
  visualProfileTitle: 'Profil Kurva Rantai',
  waterlineLabel: 'Garis Air',
  seabedLabel: 'Dasar Laut',
  anchorLabel: 'Jangkar',
  catenaryCurveLabel: 'Kurva Rantai',
  swingCircleLabel: 'Lingkaran Putar',
};

const faq: AnchorScopeLocaleContent['faq'] = [
  {
    question: 'Apa itu rasio scope pada labuh jangkar?',
    answer: 'Scope adalah perbandingan antara panjang rantai yang diulur ke air dengan jarak vertikal total dari dasar laut ke rol haluan.',
  },
  {
    question: 'Mengapa tinggi haluan dan pasang surut harus dihitung?',
    answer: 'Echosounder hanya mengukur air di bawah lunas. Tinggi haluan dan pasang air laut menambah kedalaman vertikal riil.',
  },
  {
    question: 'Apa perbedaan rasio antara rantai penuh dan tali?',
    answer: 'Rantai besi yang berat membentuk lengkungan gantung (4:1 hingga 5:1). Tali yang ringan menarik lurus sehingga perlu 7:1 hingga 10:1.',
  },
  {
    question: 'Bagaimana cara menghitung radius putar kapal?',
    answer: 'Dengan rumus Phytagoras diperoleh jarak horizontal, lalu ditambah panjang kapal dan batas aman 3 hingga 5 meter.',
  },
  {
    question: 'Bagaimana pengaruh dasar laut terhadap kekuatan jangkar?',
    answer: 'Pasir dan lempung memberi daya cengkeram terbaik. Lumpur dan bebatuan membutuhkan rantai lebih panjang.',
  },
  {
    question: 'Apa fungsi tali peredam snubber pada rantai jangkar?',
    answer: 'Mengurangi beban kejut pada mesin penarik jangkar (windlass) dan meredam bunyi gesekan logam saat malam hari.',
  },
];

const howTo: AnchorScopeLocaleContent['howTo'] = [
  {
    name: 'Ukur kedalaman dan tinggi haluan',
    text: 'Catat kedalaman pada peta laut dan tambahkan tinggi rol haluan di atas permukaan air.',
  },
  {
    name: 'Tambahkan kenaikan pasang surut',
    text: 'Periksa tabel pasang surut untuk memperkirakan kenaikan air tertinggi selama kapal berlabuh.',
  },
  {
    name: 'Pilih jenis tali dan kekuatan angin',
    text: 'Tentukan penggunaan rantai atau tali serta sesuaikan faktor pengali dengan prakiraan cuaca.',
  },
  {
    name: 'Ulur rantai dan tancapkan jangkar',
    text: 'Ulur panjang rantai sesuai hitungan dan masukkan gigi mundur perlahan untuk menancapkan jangkar.',
  },
];

const seo: AnchorScopeLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Kalkulasi Labuh Jangkar Aman: Panjang Rantai dan Radius Putar',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Keahlian labuh jangkar yang benar sangat penting bagi keselamatan kapal dan awaknya. Rantai yang terlalu pendek menjadi penyebab utama jangkar larut dan tabrakan kapal saat malam hari. Dengan <strong>rasio scope yang tepat</strong>, kapal tetap stabil bahkan saat badai.',
  },
  {
    type: 'title',
    text: 'Komponen Total Ketinggian Vertikal',
    level: 3,
  },
  {
    type: 'list',
    items: [
      '<strong>Kedalaman Perairan:</strong> Kedalaman echosounder ditambah sarat air kapal.',
      '<strong>Tinggi Lambung Haluan:</strong> Jarak dari muka air ke titik tumpu rantai di haluan.',
      '<strong>Kenaikan Pasang Maksimal:</strong> Tambahan tinggi air saat pasang tertinggi.',
    ],
  },
  {
    type: 'title',
    text: 'Tabel Rekomendasi Rasio Labuh Jangkar',
    level: 3,
  },
  {
    type: 'table',
    headers: ['Jenis Rangkaian', 'Cuaca Tenang (<15 knot)', 'Angin Sedang (15-25 knot)', 'Badai Kencang (>30 knot)'],
    rows: [
      ['<strong>Semua Rantai</strong>', 'Rasio 4:1', 'Rasio 5:1', 'Rasio 7:1'],
      ['<strong>Kombinasi Tali-Rantai</strong>', 'Rasio 5:1', 'Rasio 7:1', 'Rasio 8:1 hingga 10:1'],
      ['<strong>Semua Tali Sintetis</strong>', 'Rasio 7:1', 'Rasio 8:1', 'Rasio 10:1 hingga 12:1'],
    ],
  },
  {
    type: 'tip',
    title: 'Melindungi Windlass Jangkar',
    html: 'Jangan biarkan beban tarikan bertumpu langsung pada poros mesin jangkar. Selalu pasang tali snubber yang diikatkan kuat pada bolder haluan.',
  },
];

const schemas: AnchorScopeLocaleContent['schemas'] = [
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
    name: `Panduan: ${title}`,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
  } as WithContext<HowTo>,
];

export const content: AnchorScopeLocaleContent = {
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
