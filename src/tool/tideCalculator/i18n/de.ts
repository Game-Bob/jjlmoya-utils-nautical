import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TideCalculatorUI, TideCalculatorLocaleContent } from '../index';

const slug = 'gezeiten-rechner';
const title = 'Gezeitenhöhenrechner';
const description =
  'Schätzen Sie die Wassertiefe zu jedem Zeitpunkt des Gezeitenzyklus mithilfe der nautischen Zwölftel-Regel. Ideal für die Küstenplanung und das Studium für den Sportbootführerschein.';

const ui: TideCalculatorUI = {
  parametersLabel: 'Parameter',
  highTideLabel: 'Hochwasser',
  lowTideLabel: 'Niedrigwasser',
  targetTimeLabel: 'Abfragezeitpunkt',
  estimatedHeightLabel: 'Geschätzte Höhe',
  metersLabel: 'Meter',
  amplitudeLabel: 'Tidenhub',
  durationLabel: 'Dauer',
  tableBreakdownLabel: 'Zwölftel-Aufschlüsselung',
  tableHourLabel: 'Zeit',
  tableStateLabel: 'Zustand',
  tableStartLabel: 'Beginn',
  tableEndLabel: 'Ende',
  statusUpLabel: 'Auflaufend',
  statusDownLabel: 'Ablaufend',
  statusOutOfRange: 'Außerhalb des Bereichs',
  faqTitle: 'Häufig gestellte Fragen',
  bibliographyTitle: 'Bibliografie',
};

const faq: TideCalculatorLocaleContent['faq'] = [
  {
    question: 'Was ist die Zwölftel-Regel und wofür wird sie verwendet?',
    answer:
      'Die Zwölftel-Regel ist eine vereinfachte mathematische Methode in der Navigation, um die Gezeitenhöhe zu jedem Zeitpunkt zwischen Hoch- und Niedrigwasser zu schätzen. Sie basiert auf der Beobachtung, dass der Gezeitenfluss einer annähernden Sinuskurve folgt, wobei der gesamte Tidenhub über 6 Stunden in 12 Teile unterteilt wird (1/12, 2/12, 3/12, 3/12, 2/12, 1/12).',
  },
  {
    question: 'Ist diese Methode für die reale Navigation zuverlässig?',
    answer:
      'Es ist eine sehr nützliche theoretische Schätzmethode für die schnelle Planung und zu Ausbildungszwecken. Sie berücksichtigt jedoch keine meteorologischen Faktoren wie Luftdruck oder Wind, die den Meeresspiegel um mehrere Dezimeter verändern können. Konsultieren Sie für die reale Navigation immer offizielle Gezeitentafeln.',
  },
  {
    question: 'Welche Daten benötige ich, um die Gezeitenhöhe zu berechnen?',
    answer:
      'Sie benötigen die Uhrzeit und die Höhe (in Metern) des Hochwassers und des Niedrigwassers, die dem Zeitpunkt Ihrer Abfrage am nächsten liegen. Diese Daten finden Sie in Gezeitenkalendern oder Marine-Wetter-Apps.',
  },
  {
    question: 'Warum steigt die Gezeit nicht immer mit der gleichen Geschwindigkeit?',
    answer:
      'Aufgrund der Trägheit großer Wassermassen und der Konfiguration der Ozeanbecken. Die Gezeit beginnt nach dem Niedrigwasser langsam zu steigen, erreicht in den mittleren Stunden (den 3/12-Stunden) ihre maximale Geschwindigkeit und verlangsamt sich wieder, wenn sie sich dem Hochwasser nähert.',
  },
  {
    question: 'Wie beeinflusst der Luftdruck die Gezeiten?',
    answer:
      'Hoher Luftdruck (Antizyklon) drückt das Wasser nach unten und verringert die tatsächliche Höhe. Niedriger Luftdruck (Depression) lässt das Wasser höher steigen. Als Faustgel gilt: Eine Abweichung von 1 hPa vom Mittelwert entspricht etwa 1 cm Veränderung des Meeresspiegels.',
  },
  {
    question: 'Was ist der Tidenhub?',
    answer:
      'Es ist der vertikale Höhenunterschied zwischen einem Hochwasser und dem unmittelbar vorangehenden oder folgenden Niedrigwasser. Dieses Maß variiert je nach Mondphase (Spring- und Nipptiden) und geografischer Lage.',
  },
];

const howTo: TideCalculatorLocaleContent['howTo'] = [
  {
    name: 'Hoch- und Niedrigwasser identifizieren',
    text: 'Schauen Sie in Ihrem Gezeitenkalender nach den Zeiten und Höhen für den Gezeitenzyklus, der Sie interessiert.',
  },
  {
    name: 'Daten in den Rechner eingeben',
    text: 'Geben Sie Uhrzeit und Höhe von Hoch- und Niedrigwasser ein. Das Tool ermittelt Dauer und Amplitude automatisch.',
  },
  {
    name: 'Abfragezeitpunkt festlegen',
    text: 'Stellen Sie die Zeit ein, für die Sie den Wasserstand wissen möchten. Sie sehen den genauen Punkt im Diagramm markiert.',
  },
  {
    name: 'Zwölftel-Tabelle analysieren',
    text: 'Überprüfen Sie die stündliche Aufschlüsselung, um zu verstehen, wie der Wasserstand über den gesamten Zeitraum schwankt.',
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
    text: 'Die Gezeiten meistern: Die Zwölftel-Regel in der Navigation',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Küstennavigation und das Einlaufen in Häfen mit geringer Wassertiefe erfordern genaue Kenntnisse über den aktuellen Wasserstand. Obwohl heute digitale Anwendungen und GPS zur Verfügung stehen, bleibt die <strong>Zwölftel-Regel</strong> ein grundlegendes Werkzeug in der Ausbildung jedes Skippers. Diese Regel ist eine mathematische Schätzmethode, mit der Sie die Gezeitenhöhe zu jedem Zeitpunkt eines Gezeitenzyklus näherungsweise berechnen können.',
  },
  {
    type: 'title',
    text: 'Was genau ist die Zwölftel-Regel?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Die Zwölftel-Regel basiert auf der Beobachtung, dass der Gezeitenfluss nicht konstant ist. Das Wasser steigt oder fällt während der etwa sechs Stunden zwischen Hochwasser und Niedrigwasser nicht gleichmäßig schnell. Stattdessen folgt die Bewegung einer Sinuskurve. In der ersten Stunde bewegt sich die Gezeit langsam, beschleunigt in den mittleren Stunden und verlangsamt sich wieder, wenn sie das nächste Extrem erreicht.',
  },
  {
    type: 'table',
    headers: ['Stunde des Zyklus', 'Anteil', 'Flusszustand'],
    rows: [
      ['<strong>1. Stunde</strong>', '1/12 des Tidenhubs', 'Langsamer Beginn (Stillwasser)'],
      ['<strong>2. Stunde</strong>', '2/12 des Tidenhubs', 'Beschleunigender Fluss'],
      ['<strong>3. Stunde</strong>', '3/12 des Tidenhubs', 'Maximaler Fluss (Starke Strömung)'],
      ['<strong>4. Stunde</strong>', '3/12 des Tidenhubs', 'Anhaltender Fluss'],
      ['<strong>5. Stunde</strong>', '2/12 des Tidenhubs', 'Spürbare Verlangsamung'],
      ['<strong>6. Stunde</strong>', '1/12 des Tidenhubs', 'Finale Verlangsamung (Richtung Stillwasser)'],
    ],
  },
  {
    type: 'title',
    text: 'Technische Einschränkungen: Faktoren, die die reale Gezeit beeinflussen',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: 'Luftdruck', definition: 'Ein Tiefdruckgebiet lässt den Meeresspiegel steigen, ein Hochdruckgebiet lässt ihn sinken. Faustregel: ~1 cm Abweichung pro hPa Differenz zum Mittelwert.' },
      { term: 'Küstenwind', definition: 'Anhaltender auflandiger Wind kann das Wasser über die in den Gezeitentafeln vorhergesagten Werte aufstauen.' },
      { term: 'Lokale Topografie', definition: 'Küstenform, Wassertiefe und das Vorhandensein von Flussmündungen können den Gezeitenfluss erheblich verzögern oder beschleunigen.' },
    ],
  },
  {
    type: 'tip',
    title: 'Sicherheitshinweis',
    html: 'Dieses Tool verwendet eine mathematische Schätzmethode. Meteorologische Faktoren oder lokale Topografie werden nicht berücksichtigt. Konsultieren Sie für die reale Navigation immer offizielle Gezeitentafeln.',
  },
  {
    type: 'title',
    text: 'Kernkonzepte für neue Segler',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Tidenhub',
        definition: 'Vertikaler Unterschied zwischen Hochwasser und Niedrigwasser. In der Biskaya kann er mehrere Meter betragen, im Mittelmeer ist er fast vernachlässigbar.',
      },
      {
        term: 'Gezeitendauer',
        definition: 'Zeitintervall zwischen Hochwasser und dem nächsten Niedrigwasser. Typischerweise etwa 6 Stunden und 12 Minuten.',
      },
      {
        term: 'Seekartennull',
        definition: 'Bezugsniveau, von dem alle Tiefenangaben in Seekarten gemessen werden. Die tatsächliche Tiefe ist fast nie geringer als angegeben.',
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
    name: `Benutzung: ${title}`,
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
