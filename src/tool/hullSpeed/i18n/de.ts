import { bibliography } from '../bibliography';
import type { HullSpeedLocaleContent, HullSpeedUI } from '../index';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

const slug = 'rumpfgeschwindigkeit-rechner';
const title = 'Rechner für Rumpfgeschwindigkeit';
const description =
  'Ermittle die theoretische Rumpfgeschwindigkeit aus der Wasserlinienlänge, vergleiche ein Log und sieh, wann ein Verdränger in seine eigene Bugwelle klettert.';

const ui: HullSpeedUI = {
  metric: 'Metrisch',
  imperial: 'Imperial',
  unitGroup: 'Einheiten',
  sceneLabel: 'Wasserlinie und Bugwelle',
  hullSpeedLabel: 'Rumpfgeschwindigkeit',
  knotsUnit: 'kn',
  kmhUnit: 'km/h',
  mphUnit: 'mph',
  ratioLabel: 'S/L',
  froudeLabel: 'Fr',
  lwlLabelMetric: 'Wasserlinienlänge',
  lwlLabelImperial: 'Wasserlinienlänge',
  lwlUnitM: 'm',
  lwlUnitFt: 'ft',
  observedLabel: 'Loggeschwindigkeit',
  observedHint: 'Lass 0 stehen, um die theoretische Welle zu zeichnen. Tippe ein Log, um zu sehen, ob du noch in der Mulde sitzt.',
  stretchHint: 'Zieh den Rumpf, um die Wasserlinie zu strecken',
  hullKindLabel: 'Rumpfform',
  displacement: 'Verdränger',
  semi: 'Halbverdränger',
  planing: 'Gleiter',
  boatsLabel: 'Beispielwasserlinien',
  dinghy: 'Jolle',
  daysailer: 'Daysailer',
  cruiser: 'Kreuzer',
  bluewater: 'Hochsee',
  workboat: 'Arbeitsschiff',
  bandBelow: 'Noch eine kurze Welle',
  bandNear: 'Näher an der Wellenbarriere',
  bandAt: 'Auf der Bugwelle',
  bandAbove: 'Versucht, die Welle zu erklimmen',
  bandPlane: 'Im Gleitmodus, über der Rumpfgeschwindigkeit',
  planingNote:
    'Ein Gleiter kann diese Welle hinter sich lassen. Die Rumpfgeschwindigkeit ist eine Referenz, keine Wand.',
  displacementNote:
    'Ein Verdränger zahlt steil, sobald er seinen eigenen Sog einholt. Nimm sie als praktische Decke, nicht als GPS Ziel.',
  semiNote:
    'Halbverdränger können den klassischen Faktor mit genug Leistung etwas überschreiten, bei scharfem Widerstandsanstieg.',
  waveLegend: 'Bugwelle',
  waterLegend: 'Wasserlinie',
  markLegend: 'Rumpfgeschwindigkeit',
  faqTitle: 'Fragen zur Rumpfgeschwindigkeit',
  bibliographyTitle: 'Quellen',
};

const faq: HullSpeedLocaleContent['faq'] = [
  {
    question: 'Was ist die Rumpfgeschwindigkeit eines Segelboots?',
    answer:
      'Es ist die Geschwindigkeit, bei der ein Verdränger mit einer Bugwelle fährt, die ungefähr so lang ist wie seine Wasserlinie. In nautischen Einheiten schätzt man sie als 1.34 mal die Wurzel der Wasserlinienlänge in Fuß. Das ist eine kritische Geschwindigkeit, kein harter physikalischer Stopp.',
  },
  {
    question: 'Wie berechnet man die Rumpfgeschwindigkeit?',
    answer:
      'Wandle die Wasserlinie in Fuß um, ziehe die Wurzel und multipliziere mit 1.34, um Knoten zu erhalten. Eine 10 m Wasserlinie sind etwa 32.8 ft, also rund 7.7 kn. Derselbe Punkt entspricht einer Froude Zahl nahe 0.40.',
  },
  {
    question: 'Gilt die Rumpfgeschwindigkeit auch für Gleiter?',
    answer:
      'Die Formel beschreibt weiter die Welle, die der Rumpf im Verdrängermodus machen würde. Gleiter und viele Halbverdränger sind gebaut, um über diese Welle zu klettern. Nimm die Zahl als Referenz und lies den Hinweis zur Rumpfform.',
  },
  {
    question: 'Soll ich Wasserlinienlänge oder Gesamtlänge nehmen?',
    answer:
      'Nimm die Länge in der Wasserlinie (LWL), die getauchte Länge, die die Welle wirklich macht. Gesamtlänge, Bugspriete und Überhänge setzen die Wellenlänge nicht. Miss LWL im Wasser, nicht die LOA aus dem Prospekt.',
  },
];

const howTo: HullSpeedLocaleContent['howTo'] = [
  {
    name: 'Wasserlinie strecken',
    text: 'Zieh den Rumpf, bewege die Schiene oder wähle von der Jolle bis zum Arbeitsschiff. Die Rumpfgeschwindigkeit ist 1.34 mal die Wurzel dieser Länge in Fuß.',
  },
  {
    name: 'Rumpfform wählen',
    text: 'Verdränger, Halbverdränger oder Gleiter ändert den Kiel und ob das Boot aus seiner eigenen Welle herausklettern kann.',
  },
  {
    name: 'Die Mulde lesen',
    text: 'Bei Rumpfgeschwindigkeit sitzen Bug und Heckwelle eine Wasserlinie auseinander und das Boot liegt im Trog. Das ist die Barriere.',
  },
  {
    name: 'Ein Log vergleichen',
    text: 'Gib die Fahrt durchs Wasser ein. Eine kürzere Welle heißt, du fährst noch günstig. Eine längere Welle heißt, du kletterst in die Mulde.',
  },
];

const seo: HullSpeedLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Was die Rumpfgeschwindigkeit wirklich sagt',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Ein Verdränger schiebt eine Welle vom Bug und eine vom Heck. Liegen diese Kämme etwa eine Wasserlinie auseinander, fährt das Boot mit seinem eigenen Sog. Extra Leistung türmt dann vor allem Wasser auf, statt Fahrt zu kaufen. Diesen Zustand nennen Segler Rumpfgeschwindigkeit.',
  },
  {
    type: 'paragraph',
    html: 'Der Rechner nutzt das übliche Amateurverhältnis 1.34 Knoten je Wurzel der Wasserlinie in Fuß. Schlanke, lange Rümpfe liegen etwas höher, Lastkähne tiefer. Nimm das Ergebnis als Lehrstrich und vergleiche es mit einem echten Log.',
  },
  {
    type: 'title',
    text: 'Durchgerechnete Wasserlinien',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Wasserlinie', 'Rumpfgeschwindigkeit', 'Typisches Boot'],
    rows: [
      ['4.2 m / 13.8 ft', '5.0 kn', 'Jolle'],
      ['6.5 m / 21.3 ft', '6.2 kn', 'Daysailer'],
      ['10 m / 32.8 ft', '7.7 kn', 'Familienkreuzer'],
      ['13.5 m / 44.3 ft', '8.9 kn', 'Hochseeyacht'],
      ['18 m / 59.1 ft', '10.3 kn', 'Kleines Arbeitsschiff'],
    ],
  },
  {
    type: 'title',
    text: 'Die Bugwelle lesen',
    level: 2,
  },
  {
    type: 'list',
    items: [
      'Unter der Marke ist die Welle kurz und das Boot noch günstig zu treiben.',
      'Nahe der Marke wird die Bugwelle steiler und Kraftstoff oder Segel kaufen weniger Fahrt.',
      'Auf der Marke passt die Wellenlänge zur LWL. Ein Verdränger steht an der klassischen Barriere.',
      'Darüber klettert ein Verdränger in seinen Sog. Ein Gleiter kann schon oben sein.',
    ],
  },
  {
    type: 'tip',
    title: 'LWL messen, nicht LOA',
    html: 'Die Prospektlänge enthält Überhänge. Die Welle interessiert die getauchte Wasserlinie. Hast du nur LOA, wird die berechnete Rumpfgeschwindigkeit zu optimistisch.',
  },
  {
    type: 'title',
    text: 'Die Froude Zahl in einem Satz',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Rumpfgeschwindigkeit ist eine bequeme Verpackung einer Froude Zahl nahe 0.40: Fahrt geteilt durch die Wurzel aus Schwerkraft mal Länge. Deshalb sind längere Wasserlinien schneller, auch wenn die Rumpfform gleich bleibt. LWL strecken hebt die Verdrängergrenze sauber; Pferdestärken tun das nicht.',
  },
];

const schemas: HullSpeedLocaleContent['schemas'] = [
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
    name: `${title} verwenden`,
    step: howTo.map((step) => ({
      '@type': 'HowToStep',
      name: step.name,
      text: step.text,
    })),
  } as WithContext<HowTo>,
];

export const content: HullSpeedLocaleContent = {
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
