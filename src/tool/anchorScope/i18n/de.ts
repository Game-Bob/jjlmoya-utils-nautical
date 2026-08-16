import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AnchorScopeLocaleContent } from '../entry';
import type { AnchorScopeUI } from '../ui';

const slug = 'anker-kettenlaenge-rechner';
const title = 'Anker Kettenlänge und Schwoikreis Rechner';
const description =
  'Berechnen Sie die optimale Ankerkettenlänge, das Kettenverhältnis und den Schwoikreis für sicheres Ankern basierend auf Wassertiefe, Freibord und Seegrund.';

const ui: AnchorScopeUI = {
  parametersTitle: 'Parameter',
  waterDepthLabel: 'Kartentiefe',
  bowHeightLabel: 'Bug-Freibord',
  tideRangeLabel: 'Tidenhub',
  boatLengthLabel: 'Bootslänge (LOA)',
  rodeTypeLabel: 'Ankergeschirr',
  windConditionLabel: 'Windstärke',
  seabedTypeLabel: 'Ankergrund',
  presetProtected: 'Ruhige Bucht',
  presetOpen: 'Offene Küste',
  presetStorm: 'Sturmwarnung',
  seabedTag: 'Haltekraft Ankergrund',
  catenaryTag: 'Ketten-Kettenlinie',
  unitM: 'm',
  unitFt: 'ft',
  unitMeters: 'Metrisch (m)',
  unitFeet: 'Imperial (ft)',
  allChainOption: 'Nur Kette (Schwere Kettenlinie)',
  ropeChainOption: 'Leine mit Kettenvorlauf',
  allRopeOption: 'Reine Ankerleine',
  calmWindOption: 'Ruhig / Leichte Brise (< 15 kn)',
  moderateWindOption: 'Mäßige Brise (15 - 25 kn)',
  strongWindOption: 'Starker Wind (25 - 35 kn)',
  stormWindOption: 'Sturmbruch (> 35 kn)',
  sandOption: 'Sand (Optimaler Halt)',
  mudOption: 'Schlick / Schlamm (Guter Halt)',
  clayOption: 'Fester Ton (Sehr Gut)',
  gravelOption: 'Kies / Schotter (Mäßig)',
  rockOption: 'Felsgrund (Verhakungsrisiko)',
  weedOption: 'Seegras / Algen (Geringer Halt)',
  resultsTitle: 'Ankeranalyse und Dimensionen',
  scopeRatioLabel: 'Effektives Verhältnis (Scope)',
  totalDepthLabel: 'Gesamte Vertikalhöhe',
  recommendedRodeLabel: 'Empfohlene Kettenlänge',
  horizontalDistanceLabel: 'Horizontaler Abstand',
  swingRadiusLabel: 'Geschätzter Schwoikreis',
  minSafeRodeLabel: 'Minimum bei Flaute',
  heavyWeatherRodeLabel: 'Sturm-Kettenlänge',
  statusOptimalTitle: 'Sicherer Halt und Horizontalkraft',
  statusOptimalDesc: 'Die berechnete Länge sichert eine dämpfende Kettenlinie und flachen Zug am Ankerschaft.',
  statusCautionTitle: 'Akzeptabel: Wetterlage beobachten',
  statusCautionDesc: 'Günstig für mäßigen Wind. Stecken Sie mehr Kette bei auffrischendem Seegang.',
  statusDangerTitle: 'Zu wenig Kette: Slippgefahr',
  statusDangerDesc: 'Kritisches Verhältnis. Der Ankerschaft wird nach oben gehebelt und kann ausbrechen.',
  adviceSand: 'Sand bietet perfekten Halt für moderne Flügelanker. Anker mit Rückwärtsschub eingraben.',
  adviceMud: 'Weicher Schlamm erfordert große Flügelfläche und mehr Kette für festen Grund.',
  adviceClay: 'Ton hält extrem stark, benötigt jedoch scharfe Ankerspitzen zum Eindringen.',
  adviceGravel: 'Kies gibt unter Last nach. Erhöhen Sie die Kettenlänge um mindestens 25 Prozent.',
  adviceRock: 'Hohes Risiko des Festklemmens. Unbedingt Trippleine mit Boje verwenden.',
  adviceWeed: 'Dichtes Kraut verhindert das Eingraben. Halt mit Rückwärtsschub genau prüfen.',
  catenaryAllChain: 'Das Eigengewicht der Kette bildet einen Bogen, der Ruckdämpfung erzeugt.',
  catenaryRopeChain: 'Eine Mischleine erfordert mindestens ein Verhältnis von 7 zu 1.',
  catenaryAllRope: 'Leinen benötigen ein Verhältnis von 8 zu 1 oder mehr gegen Ausbrechen.',
  resetButton: 'Werte Zurücksetzen',
  visualProfileTitle: 'Kettenlinien-Profil',
  waterlineLabel: 'Wasserlinie',
  seabedLabel: 'Seegrund',
  anchorLabel: 'Anker',
  catenaryCurveLabel: 'Kettenlinie',
  swingCircleLabel: 'Schwoikreis',
};

const faq: AnchorScopeLocaleContent['faq'] = [
  {
    question: 'Was bedeutet das Kettenverhältnis Scope beim Ankern?',
    answer: 'Scope bezeichnet das Verhältnis zwischen der ausgesteckten Kettenlänge und der vertikalen Gesamthöhe vom Grund bis zur Bugrolle. Es stellt sicher, dass der Zug flach am Anker anliegt.',
  },
  {
    question: 'Warum müssen Freibord und Tidenhub addiert werden?',
    answer: 'Das Echolot misst nur die Tiefe ab Kiel. Bei hohem Bug und auflaufender Flut steigt die vertikale Höhe drastisch an, was bei Vernachlässigung zum Ausbrechen des Ankers führt.',
  },
  {
    question: 'Welches Verhältnis gilt für Kette im Vergleich zu Leine?',
    answer: 'Schwere Kette ermöglicht Verhältnisse von 4:1 bis 5:1 dank Durchhang. Leichte Leine ohne Eigengewicht erfordert 7:1 bis 10:1.',
  },
  {
    question: 'Wie wird der Schwoikreis eines Schiffs berechnet?',
    answer: 'Der Schwoikreis ergibt sich aus der horizontalen Ankerdistanz plus der Schiffserklänge und einer Sicherheitsreserve von 3 bis 5 Metern.',
  },
  {
    question: 'Wie beeinflusst der Seegrund die Haltekraft?',
    answer: 'Sand und fester Ton bieten den besten Halt. Kies und Kraut erfordern deutlich mehr Kettenlänge oder alternative Ankerplätze.',
  },
  {
    question: 'Welchen Zweck hat ein Ketten-Snubber oder Ruckdämpfer?',
    answer: 'Ein elastischer Snubber entlastet die elektrische Ankerwinde von Schwell und Schlägen und verhindert Störgeräusche im Vorschiff.',
  },
];

const howTo: AnchorScopeLocaleContent['howTo'] = [
  {
    name: 'Wassertiefe und Bugfreibord ermitteln',
    text: 'Messen Sie die Kartentiefe am Ankerplatz und addieren Sie die Höhe der Bugrolle über Wasser.',
  },
  {
    name: 'Tidenhub berücksichtigen',
    text: 'Prüfen Sie den Gezeitenkalender für die maximale Wasserstandserhöhung während der Liegezeit.',
  },
  {
    name: 'Geschirr und Windstärke wählen',
    text: 'Wählen Sie Ihr Ankergeschirr und die erwartete Windstärke für den Sicherheitsfaktor.',
  },
  {
    name: 'Kette stecken und einfahren',
    text: 'Stecken Sie die berechnete Länge und graben Sie das Geschirr mit Rückwärtsgas sauber ein.',
  },
];

const seo: AnchorScopeLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Kettenlänge und Schwoikreis für sicheres Ankern',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Sicheres Ankern ist eine Kernkompetenz der Seemannschaft. Eine zu kurze Ankerkette ist die häufigste Ursache für slippende Anker und Kollisionen in engen Buchten. Mit dem korrekten <strong>Kettenverhältnis</strong> liegt das Schiff auch bei Starkwind stabil.',
  },
  {
    type: 'title',
    text: 'Vertikale Gesamthöhe richtig bestimmen',
    level: 3,
  },
  {
    type: 'list',
    items: [
      '<strong>Wassertiefe am Platz:</strong> Tiefe des Echolots zuzüglich Tiefgang.',
      '<strong>Bug-Freibord:</strong> Vertikaler Abstand von der Wasseroberfläche zur Bugrolle.',
      '<strong>Maximaler Tidenhub:</strong> Zusätzliche Wassertiefe bei Hochwasser.',
    ],
  },
  {
    type: 'title',
    text: 'Empfohlene Anker-Verhältnisse',
    level: 3,
  },
  {
    type: 'table',
    headers: ['Geschirrtyp', 'Ruhiges Wetter (<15 kn)', 'Frische Brise (15-25 kn)', 'Starkwind (>30 kn)'],
    rows: [
      ['<strong>Reine Kette</strong>', 'Verhältnis 4:1', 'Verhältnis 5:1', 'Verhältnis 7:1'],
      ['<strong>Kette mit Leine</strong>', 'Verhältnis 5:1', 'Verhältnis 7:1', 'Verhältnis 8:1 bis 10:1'],
      ['<strong>Reine Leine</strong>', 'Verhältnis 7:1', 'Verhältnis 8:1', 'Verhältnis 10:1 bis 12:1'],
    ],
  },
  {
    type: 'tip',
    title: 'Ankerwinde entlasten',
    html: 'Legen Sie die Last niemals dauerhaft auf die Kettennuss der Winde. Verwenden Sie stets eine elastische Hahnepot oder Kettengabel auf der Bugklampe.',
  },
  {
    type: 'title',
    text: 'Kettenlänge nach Wassertiefe und Wind',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Berechnen Sie die Kettenlänge immer für den höchsten erwarteten Wasserstand. So bleibt der Ankergrund auch bei steigendem Wasser und wechselndem Wind zuverlässig berücksichtigt.',
  },
  {
    type: 'table',
    headers: ['Bedingung', 'Empfehlung', 'Hinweis'],
    rows: [
      ['Ruhige Bucht', 'Mindestens 4:1', 'Kettenzug flach halten'],
      ['Frische Brise', 'Etwa 5:1', 'Schwoikreis freihalten'],
      ['Starker Wind', 'Bis 7:1', 'Ankergrund und Reserve prüfen'],
    ],
  },
  {
    type: 'title',
    text: 'Sicherheitsreserve beim Ankern',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Rechnen Sie eine Reserve für Tiefenfehler, Wellen und Bewegung des Schiffs ein. Prüfen Sie anschließend, ob der berechnete Schwoikreis frei von flachen Stellen und anderen Booten ist.',
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
    name: `Anleitung: ${title}`,
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
