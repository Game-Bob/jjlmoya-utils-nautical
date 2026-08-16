import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AnchorScopeLocaleContent } from '../entry';
import type { AnchorScopeUI } from '../ui';

const slug = 'kalkylator-ankarlangd-kattingskalkulator';
const title = 'Ankarkattingskalkylator och Svajradie';
const description =
  'Berakna optimal langd pa ankarkatting och ankarlina, scope-forhallande och svajradie for saker ankring baserat pa djup och bottenforhallanden.';

const ui: AnchorScopeUI = {
  parametersTitle: 'Parametrar',
  waterDepthLabel: 'Sjokortsdjup',
  bowHeightLabel: 'Fribord vid Staven',
  tideRangeLabel: 'Tidvattenshojd',
  boatLengthLabel: 'Batlangd (LOA)',
  rodeTypeLabel: 'Ankarlina / Katting',
  windConditionLabel: 'Vindstyrka och Prognos',
  seabedTypeLabel: 'Bottekaraktar',
  presetProtected: 'Skyddad Vik',
  presetOpen: 'Oppen Kust',
  presetStorm: 'Kultje / Kuling',
  seabedTag: 'Bottenfasthetsfaktor',
  catenaryTag: 'Kattingkurva Dampning',
  unitM: 'm',
  unitFt: 'ft',
  unitMeters: 'Metrisk (m)',
  unitFeet: 'Imperial (ft)',
  allChainOption: 'Enbart Katting (Tung Kurva)',
  ropeChainOption: 'Kombinerad Lina och Katting',
  allRopeOption: 'Enbart Textillina',
  calmWindOption: 'Lugnt / Latt Bris (< 15 kn)',
  moderateWindOption: 'Frisk Bris (15 - 25 kn)',
  strongWindOption: 'Hard Vind / Kuling (25 - 35 kn)',
  stormWindOption: 'Stormvindar (> 35 kn)',
  sandOption: 'Sand (Optimalt Faste)',
  mudOption: 'Lera / Dy (Gott Faste)',
  clayOption: 'Fast Lera (Mycket Bra)',
  gravelOption: 'Grus / Smasten (Mattligt)',
  rockOption: 'Klippbotten (Risk att Fastna)',
  weedOption: 'Sjogras / Tang (Daligt Faste)',
  resultsTitle: 'Ankringsanalys och Matt',
  scopeRatioLabel: 'Effektivt Scope-Forhallande',
  totalDepthLabel: 'Total Vertikal Hojd',
  recommendedRodeLabel: 'Rekommenderad Kattinglangd',
  horizontalDistanceLabel: 'Horisontellt Avstand',
  swingRadiusLabel: 'Uppskattad Svajradie',
  minSafeRodeLabel: 'Minimum vid Lugnt Vader',
  heavyWeatherRodeLabel: 'Langd for Hardt Vader',
  statusOptimalTitle: 'Saker och Stabil Ankring',
  statusOptimalDesc: 'Beraknad langd ger god fjadring och horisontellt drag i ankarlagget.',
  statusCautionTitle: 'Godtagbart: Bevaka Vindokning',
  statusCautionDesc: 'Forhallandet ar bra for mattlig vind. Slack mer katting om sjon bygger upp.',
  statusDangerTitle: 'For Kort Katting: Risk for Draggning',
  statusDangerDesc: 'Kritiskt forhallande. Ankaret riskerar att lyftas ur botten och dragga.',
  adviceSand: 'Sand ger utmarkt grepp. Backa fast ankaret med motorkraft for att satta flyna.',
  adviceMud: 'Mjuk dy kraver stor ankararea och mer katting for att na fastare lager.',
  adviceClay: 'Fast lera haller extremt bra men kraver vassa ankarspetsar for att tranga ner.',
  adviceGravel: 'Rullande grus ger efter for ryck. Oka kattinglangden med minst 25 procent.',
  adviceRock: 'Hog risk att ankaret kilar fast. Anvand alltid bojlinje for att kunna lassa.',
  adviceWeed: 'Tat tang hindrar ankaret fran att grava ner sig. Kontrollera fastet noga med motorn.',
  catenaryAllChain: 'Kattingens tyngd bildar en kurva som dampar ryck fran vagor och haller draget plant.',
  catenaryRopeChain: 'Kombinerad lina kraver minst 7 till 1 for att kompensera for lagre vikt.',
  catenaryAllRope: 'Latt lina kraver 8 till 1 eller mer for att inte lyfta ankarlagget.',
  resetButton: 'Aterstall Varden',
  visualProfileTitle: 'Kattingkurva Profil',
  waterlineLabel: 'Vattenlinje',
  seabedLabel: 'Havsbotten',
  anchorLabel: 'Ankare',
  catenaryCurveLabel: 'Kattingkurva',
  swingCircleLabel: 'Svajradie',
};

const faq: AnchorScopeLocaleContent['faq'] = [
  {
    question: 'Vad innebar scope-forhallandet vid ankring?',
    answer: 'Scope ar forhallandet mellan den utlagda kattinglangden och det totala vertikala avstandet fran botten till bogrullen.',
  },
  {
    question: 'Varfor maste fribord och tidvatten raknas med?',
    answer: 'Ekolodet visar endast djupet under kolen. Fribordet och ett stigande tidvatten okar det vertikala avstandet avsevart.',
  },
  {
    question: 'Vad ar skillnaden i forhallande mellan katting och lina?',
    answer: 'Tung kätting bildar en hängkurva (4:1 till 5:1). Lätt lina sträcks rak och kräver 7:1 till 10:1.',
  },
  {
    question: 'Hur beraknas batens svajradie pa ankarplatsen?',
    answer: 'Med Pythagoras sats raknas det horisontella avstandet ut, plus batens totallangd och en sakerhetsmarginal pa 3 till 5 meter.',
  },
  {
    question: 'Hur paverkar bottenmaterialet ankringens sakerhet?',
    answer: 'Sand och lera ger bast hallfasthet. Grus och tang kraver extra kattinglangd eller en annan ankarvik.',
  },
  {
    question: 'Vad ar fordelen med en ryckdampare (snubber) pa kattingen?',
    answer: 'Den avlastar ankarpelet fran stotar orsakade av vagor och minskar metalliskt buller ombord.',
  },
];

const howTo: AnchorScopeLocaleContent['howTo'] = [
  {
    name: 'Mata sjokortsdjup och boghojd',
    text: 'Kontrollera djupet pa platsen och lagg till bogrullens hojd over vattenytan.',
  },
  {
    name: 'Lagg till tidvattenshojd',
    text: 'Se tidvattentabellen for hogsta forvantade vattenstand under vistelsen.',
  },
  {
    name: 'Valj utrustning och vindstyrka',
    text: 'Valj katting eller lina och anpassa sakerhetsfaktorn efter vindprognosen.',
  },
  {
    name: 'Lagga ut katting och satta ankaret',
    text: 'Slack ut beraknad langd och backa forsiktigt med motorn for att grava ner ankaret.',
  },
];

const seo: AnchorScopeLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Berakning av Ankarkatting och Saker Svajradie',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'En korrekt utlagd ankarlina ar avgorande for batens och besattningens sakerhet. For kort katting ar den vanligaste orsaken till draggande ankare. Genom ratt <strong>scope-forhallande</strong> ligger baten tryggt aven i hard vind.',
  },
  {
    type: 'title',
    text: 'Bestamning av den Totala Vertikala Hojden',
    level: 3,
  },
  {
    type: 'list',
    items: [
      '<strong>Djup pa Ankarplatsen:</strong> Ekolodets djup plus batens djupgaende.',
      '<strong>Fribord vid Staven:</strong> Avstandet fran vattenytan upp till bogrullen.',
      '<strong>Tidvattenshojd:</strong> Maximal vattenstigning vid hogvatten.',
    ],
  },
  {
    type: 'title',
    text: 'Tabell over Rekommenderade Forhallanden',
    level: 3,
  },
  {
    type: 'table',
    headers: ['Utrustningstyp', 'Lugnt Vader (<15 kn)', 'Frisk Bris (15-25 kn)', 'Hard Vind (>30 kn)'],
    rows: [
      ['<strong>Enbart Katting</strong>', 'Forhallande 4:1', 'Forhallande 5:1', 'Forhallande 7:1'],
      ['<strong>Kombinerad Katting-Lina</strong>', 'Forhallande 5:1', 'Forhallande 7:1', 'Forhallande 8:1 till 10:1'],
      ['<strong>Enbart Textillina</strong>', 'Forhallande 7:1', 'Forhallande 8:1', 'Forhallande 10:1 till 12:1'],
    ],
  },
  {
    type: 'tip',
    title: 'Skydda Ankarpelet',
    html: 'Lat aldrig ankardraget belasta ankarpelets kabbelaris direkt. Anvand alltid en avlastande snubberlina fast i en knap.',
  },
  {
    type: 'paragraph',
    html: 'Kontrollera prognosen och det verkliga sjöläget före avfärd.',
  },
  {
    type: 'paragraph',
    html: 'Kontrollera djupmarginalen och lämna en säkerhetsreserv.',
  },
  {
    type: 'paragraph',
    html: 'Skriv ner värdena så att beräkningen kan upprepas senare.',
  },
  {
    type: 'paragraph',
    html: 'Jämför flera scenarier när vind eller ström förändras.',
  },
  {
    type: 'paragraph',
    html: 'Beräkningen hjälper planeringen men ersätter inte uppsikt ombord.',
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
    name: `Instruktion: ${title}`,
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
