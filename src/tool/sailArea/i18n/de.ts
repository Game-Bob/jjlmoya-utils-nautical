import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SailAreaUI, SailAreaLocaleContent } from '../index';

const slug = 'segelflaechen-rechner';
const title = 'Segelflächen und SAD Verhältnis Rechner';
const description =
  'Berechnen Sie die Gesamtsegelfläche und das Verhältnis von Segelfläche zu Verdrängung (SA/D) Ihres Bootes. Nautische Leistungsanalyse basierend auf I-, J-, P- und E-Maßen.';

const ui: SailAreaUI = {
  hullSectionLabel: 'Rumpfdaten',
  totalMassLabel: 'Verdrängung',
  rigSystemLabel: 'Rigg',
  intendedUseLabel: 'Verwendungszweck',
  rigGeometryLabel: 'Rigg-Geometrie',
  sailConfigLabel: 'Riggtyp',
  genoaOverlapLabel: 'Genua-Überlappung',
  foqueLabel: 'Fock',
  genovaLabel: 'Genua',
  sadRatioLabel: 'SA/D-Verhältnis',
  totalAreaLabel: 'Gesamtfläche',
  performanceLabel: 'Leistung',
  sloopLabel: 'Slup (ein Mast)',
  cutterLabel: 'Kutter (zwei Vorsegel)',
  ketchLabel: 'Ketsch (zwei Masten)',
  cruiserLabel: 'Fahrtenyacht',
  performanceTypeLabel: 'Leistungstyp',
  racerLabel: 'Regattayacht',
  exportPdfLabel: 'TECHNISCHEN BERICHT ERSTELLEN',
  faqTitle: 'Häufig gestellte Fragen': 'Bibliografie',
};

const faq: SailAreaLocaleContent['faq'] = [
  {
    question: 'Warum ist mein Boot bei leichtem Wind so langsam?',
    answer: 'Wahrscheinlich liegt Ihr SA/D-Verhältnis unter 15, was auf ein Boot mit großer Verdrängung und wenig Segelfläche im Verhältnis zum Gewicht hindeutet. Solche Boote benötigen Windstärken über 12 Knoten, um richtig in Fahrt zu kommen.',
  },
  {
    question: 'Sollte ich die Wassertanks leeren, um die Leistung zu steigern?',
    answer: 'Ja, das Boot leichter zu machen verbessert direkt das SA/D-Verhältnis, da die tatsächliche Verdrängung sinkt. Das Leeren von Wasser- und Kraftstofftanks kann die Verdrängung um mehrere hundert Kilogramm reduzieren und das Verhältnis deutlich steigern.',
  },
  {
    question: 'Was ist das "Roach" (Segelausstellung) bei einem Segel?',
    answer: 'Das Roach ist die konvexe Krümmung des Achterlieks (Hinterkante) des Großsegels. Sie bietet zusätzliche Segelfläche über das geometrische Dreieck hinaus, das durch P und E definiert ist. Regattaboote haben oft ein ausgeprägtes Roach mit durchgehenden Latten.',
  },
  {
    question: 'Wie messe ich die reale Verdrängung meines Bootes?',
    answer: 'Die verlässlichste Methode ist die Verwendung der beladenen Verdrängung (mit Ausrüstung, Wasser, Kraftstoff und Crew an Bord). Die Leerverdrängung laut Herstellerhandbuch ist meist optimistisch. Nutzen Sie die tatsächliche Verdrängung unter normalen Segelbedingungen.',
  },
  {
    question: 'Wo finde ich die Maße I, J, P und E für mein Boot?',
    answer: 'Diese finden Sie im Eignerhandbuch, in Messbriefen (ORC oder IRC) oder in der Dokumentation des Klassenzertifikats. Sie können sie auch direkt an Bord mit einem Maßband messen oder beim Hersteller anfragen.',
  },
];

const howTo: SailAreaLocaleContent['howTo'] = [
  {
    name: 'Wählen Sie den Riggtyp aus',
    text: 'Wählen Sie zwischen Slup (ein Mast), Kutter (Fock und Klüver) oder Ketsch (mit Besanmast). Dies entscheidet darüber, wie die Gesamtsegelfläche berechnet wird.',
  },
  {
    name: 'Geben Sie die Verdrängung ein',
    text: 'Nutzen Sie die tatsächliche beladene Verdrängung Ihres Bootes in kg oder lbs. Dieser Wert ist entscheidend für die Berechnung des SA/D-Verhältnisses.',
  },
  {
    name: 'Messen Sie die Rigg-Geometrie',
    text: 'Tragen Sie die Maße P (Masthöhe), E (Großbaum), I (Vordreieckshöhe) und J (Vordreiecksbasis) in Metern oder Fuß ein.',
  },
  {
    name: 'Passen Sie die Genua-Überlappung an',
    text: 'Nutzen Sie den Schieberegler für die Überlappung: 100% ist eine nicht überlappende Fock, 130% eine Standard-Genua, 155% eine große Genua.',
  },
  {
    name: 'Interpretieren Sie das SA/D-Verhältnis',
    text: 'Ein Verhältnis zwischen 16 und 20 kennzeichnet eine ausgewogene Fahrtenyacht. Über 20 wird das Boot bei leichtem Wind sehr lebendig, ist aber bei Starkwind anspruchsvoll.',
  },
];

const seo: SailAreaLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Segelflächen-Rechner: Kompletter Leitfaden zu Leistung und Kennzahlen',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Die Segelfläche ist der aerodynamische Motor jedes Segelschiffs. Sie bestimmt, wie viel Windenergie das Boot einfangen kann, und definiert zusammen mit der Verdrängung seinen Charakter: Ob es ein gemütlicher Tourer oder eine sensible Rennmaschine ist. Die korrekte Berechnung dieses Wertes ist der erste Schritt zum Verständnis des Verhaltens jeder Segelyacht.',
  },
  {
    type: 'paragraph',
    html: 'Segeln ist ein ständiges Zusammenspiel zwischen der Windkraft in den Segeln und dem Wasserwiderstand am Rumpf. Das <strong>Verhältnis von Segelfläche zu Verdrängung (SA/D)</strong> fasst diese Beziehung in einer Zahl zusammen, die es erlaubt, Boote jeglicher Länge und Verdrängung direkt miteinander zu vergleichen.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Ideales Cruiser-Verhältnis', value: '15-18', icon: 'mdi:anchor' },
      { label: 'Regattaboote', value: '+24', icon: 'mdi:sailing' },
      { label: 'Fehlermarge', value: '5-10%', icon: 'mdi:alert-circle-outline' },
    ],
    columns: 3,
  },
  {
    type: 'title',
    text: 'Wofür wird das SA/D-Verhältnis verwendet?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Das <strong>SA/D-Verhältnis</strong> ist ein Diagnosewerkzeug, das es erlaubt, das Verhalten eines Bootes vorherzusagen, bevor man die Segel setzt. Ein niedriges Verhältnis deutet auf ein robustes und sicheres, aber bei Leichtwind langsames Boot hin; ein hohes Verhältnis bietet Speed und ein Gefühl von Leichtigkeit, erfordert aber mehr Können der Crew, wenn der Wind zunimmt. Keines ist dem anderen überlegen: Alles hängt vom Einsatzzweck ab.',
  },
  {
    type: 'title',
    text: 'SA/D-Referenztabelle',
    level: 4,
  },
  {
    type: 'table',
    headers: ['Verhältnis', 'Bootstyp', 'Verhalten auf See'],
    rows: [
      ['< 14', 'Schwere Verdränger / Lastensegler', 'Stabil, langsam, braucht konstanten Wind'],
      ['14 - 16.5', 'Hochsee-Fahrtenyacht', 'Ausgewogen, komfortabel, gute Amwind-Eigenschaften'],
      ['16.5 - 20', 'Standard Fahrtenyacht', 'Lebendig bei Brise, gut beherrschbar, vielseitig'],
      ['20 - 25', 'Performance Cruiser / Sport', 'Schnell, fordernd, aufregend bei Leichtwind'],
      ['> 25', 'Racer / Extremsport', 'Sehr schnell, nervös, benötigt Profi-Crew'],
    ],
  },
  {
    type: 'title',
    text: 'Technisches Glossar der Maße (I, J, P, E)',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'I (Vordreieckshöhe)',
        definition: 'Vertikaler Abstand vom Deck bis zum Punkt am Mast, an dem das Vorsegel-Fall angeschlagen ist. Definiert die Höhe des Vordreiecks.',
      },
      {
        term: 'J (Vordreiecksbasis)',
        definition: 'Horizontaler Abstand vom Mast bis zum Vorsteven (Bug). Definiert die Basis des Vordreiecks, an der Vorsegel gefahren werden.',
      },
      {
        term: 'P (Masthöhe)',
        definition: 'Abstand vom Großbaum bis zum Austritt des Großfalls am Masttopp. Definiert die wirksame Höhe des Großsegels.',
      },
      {
        term: 'E (Großbaum-Länge)',
        definition: 'Abstand vom Mast bis zum Schothorn des Großsegels am Ende des Baums. Definiert die Basis des Großsegels.',
      },
    ],
  },
  {
    type: 'title',
    text: 'Berechnungen für Segelscheine (Sportseeschifferschein)',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Die Berechnung der Segelfläche und des SA/D-Verhältnisses ist Teil des Lehrplans für fortgeschrittene <strong>Segelscheine</strong>. Das Verständnis der Rigg-Geometrie und ihrer Beziehung zur Verdrängung ist essentiell für Sicherheitsentscheidungen auf See: rechtzeitiges Reffen, Wahl der richtigen Genua oder die Einschätzung des Bootverhaltens vor einer Böenfront.',
  },
  {
    type: 'tip',
    title: 'Vorgewendete Segel und Sicherheit',
    html: 'Für Blauwassersegeln oder Langstrecken bietet ein SA/D-Verhältnis zwischen 16 und 18 die beste Balance zwischen Speed und Sicherheit. Boote mit einem Verhältnis über 22 müssen oft schon bei Windstärken von 4-5 Beaufort reffen.',
  },
  {
    type: 'title',
    text: 'Wie beeinflusst die Genua-Überlappung die Leistung?',
    level: 4,
  },
  {
    type: 'paragraph',
    html: 'Die <strong>Genua</strong> ist das größte Vorsegel, dessen Schothorn hinter dem Mast liegt und das Großsegel "überlappt". Der Prozentsatz der Überlappung gibt an, wie viel länger das Lot auf das Vorliek (LP) im Vergleich zum J-Maß ist. Eine 150%-Genua hat ein LP, das 150% von J entspricht, was eine deutlich größere Fläche als eine einfache Arbeitsfock bietet.',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Dacron (Cruising)',
        description: 'Klassisches Material für Fahrtensegel. Robust und leicht zu pflegen.',
        points: [
          'Hohe Langlebigkeit und UV-Beständigkeit',
          'Geringe Wartungskosten',
          'Höheres Gewicht und Dehnung unter Last',
          'Ideal für Küsten- und Langfahrtsegeln',
        ],
      },
      {
        title: 'Laminate (Racing)',
        description: 'Hochleistungsmaterialien wie Kevlar, Spectra oder Dyneema.',
        highlight: true,
        points: [
          'Minimale Dehnung: maximale aerodynamische Effizienz',
          'Deutlich leichter als Dacron',
          'Höhere Kosten und kürzere Lebensdauer',
          'Essentiell auf Booten mit einem SA/D-Verhältnis > 22',
        ],
      },
    ],
    columns: 2,
  },
  {
    type: 'title',
    text: 'Physik des Segelns und Stabilität',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Die Segelfläche erzeugt vortreibende Kraft, aber auch ein <strong>Krängungsmoment</strong>, das das Boot zum Neigen bringt. Die Stabilität wird durch das aufrichtende Moment gemessen, das das Boot dieser Kraft entgegensetzt. Ein hohes SA/D-Verhältnis bei einem Boot mit wenig Ballast kann gefährlich sein, während dasselbe Verhältnis bei einer Yacht mit tiefem, schwerem Kiel völlig unproblematisch ist.',
  },
  {
    type: 'paragraph',
    html: 'Um die real verfügbare Power zu berechnen, nutzen Schiffbauingenieure oft das <strong>Verdrängungs-Längen-Verhältnis (DLR)</strong> in Kombination mit dem SA/D. Beide Werte zusammen beschreiben präzise, ob ein Boot ein schwerer Verdränger oder ein rasanter Gleiter ist.',
  },
  {
    type: 'tip',
    title: 'Stabilität und Sicherheit',
    html: 'Bewerten Sie SA/D niemals isoliert. Eine Segelyacht mit einem Verhältnis von 22 und einem Aufrichtwinkel von 90 Grad ist weitaus sicherer als eine mit einem Verhältnis von 18 und einem Winkel von 60 Grad. Konsultieren Sie immer die Stabilitätskurve Ihres Bootes.',
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
    name: `Bedienungsanleitung: ${title}`,
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
