import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { UnderKeelUI, UnderKeelLocaleContent } from '../index';

const slug = 'ukc-rechner';
const title = 'Kalkulator für die Kielfreiheit UKC';
const description =
  'Berechnen Sie das sichere Zeitfenster zum Überqueren von Untiefen, Kanälen oder tiefgangsbeschränkten Stellen. Geben Sie den Tiefgang Ihres Bootes, die Kartentiefe und Gezeitendaten ein, um das genaue sichere Durchfahrtsintervall zu erhalten.';

const ui: UnderKeelUI = {
  parametersLabel: 'Parameter',
  boatDraftLabel: 'Tiefgang des Bootes',
  chartDepthLabel: 'Kartentiefe',
  safetyMarginLabel: 'Sicherheitsmarge',
  highTideLabel: 'Hochwasser',
  lowTideLabel: 'Niedrigwasser',
  metersLabel: 'Meter',
  passWindowLabel: 'Durchfahrtsfenster',
  neededLabel: 'Benötigte Tiefe',
  tideRequiredLabel: 'Mindestens benötigte Gezeitenhöhe',
  statusNeverLabel: 'Keine Kielfreiheit in diesem Zyklus',
  statusAlwaysLabel: 'Kielfreiheit während des gesamten Zyklus',
  statusFromLabel: 'Durchfahrt ab:',
  statusUntilLabel: 'Durchfahrt bis:',
  bottomLabel: 'GRUND',
  faqTitle: 'Häufig gestellte Fragen': 'Bibliografie',
};

const faq: UnderKeelLocaleContent['faq'] = [
  {
    question: 'Was genau ist eine Kielfreiheitsberechnung (UKC)?',
    answer: 'Es ist die Berechnung des Zeitpunkts, an dem an einer kritischen Stelle (z. B. einer Sandbank oder einem engen Kanal) genügend Tiefe vorhanden ist, um eine sichere Durchfahrt eines Schiffes entsprechend seinem Tiefgang zu ermöglichen.',
  },
  {
    question: 'Welche Sicherheitsmarge wird empfohlen?',
    answer: 'Für Sportboote wird in der Regel eine Mindestsicherheitsmarge zwischen 0,5 und 1 Meter über dem Tiefgang des Bootes empfohlen. Diese Marge kompensiert mögliche Fehler bei Gezeitenberechnungen, Luftdruckschwankungen oder unerwarteten Seegang.',
  },
  {
    question: 'Wie beeinflusst Seegang die Kielfreiheit?',
    answer: 'Seegang erzeugt vertikale Schwingungen im Rumpf. Am tiefsten Punkt der Welle ist das Boot dem Boden näher als in Ruhe. Beim Durchfahren von Gebieten mit Seegang muss die Sicherheitsmarge erheblich erhöht werden.',
  },
  {
    question: 'Was ist die in der Karte angegebene Tiefe (Kartentiefe)?',
    answer: 'Es ist die minimale Tiefe an einem Punkt, wenn die Gezeitenhöhe bei Kartennull liegt. Sie wird zur aktuellen Gezeitenhöhe addiert, um die gesamte verfügbare Tiefe zu erhalten.',
  },
  {
    question: 'Was bedeutet eine unterstrichene Tiefenangabe in der Seekarte?',
    answer: 'Es bedeutet, dass diese Stelle bei Kartennull trockenfällt. Sie benötigen eine entsprechende Gezeitenhöhe, um darüber hinwegfahren zu können.',
  },
  {
    question: 'Was ist der Squat-Effekt und wie verändert er die Durchfahrt?',
    answer: 'Es ist ein hydrodynamisches Phänomen, bei dem ein Schiff, das durch flache Kanäle fährt, dazu neigt, tiefer relativ zu seiner Wasserlinie einzusinken. Je schneller man fährt, desto mehr nimmt der dynamische Tiefgang zu und desto weniger Wasser hat man unter dem Kiel.',
  },
];

const howTo: UnderKeelLocaleContent['howTo'] = [
  {
    name: 'Tiefgang und Sicherheitsmarge festlegen',
    text: 'Messen Sie den Tiefgang Ihres Bootes am tiefsten Punkt und addieren Sie eine vorsorgliche Sicherheitsmarge (z. B. 0,5 m).',
  },
  {
    name: 'Kartentiefe nachschlagen',
    text: 'Suchen Sie die Tiefenangabe für die kritische Stelle, die Sie befahren möchten. Beachten Sie, ob es sich um ein sandiges oder felsiges Gebiet handelt.',
  },
  {
    name: 'Gezeitendaten eingeben',
    text: 'Verwenden Sie die Zeiten und Höhen von Hoch- und Niedrigwasser aus dem nächsten offiziellen Gezeitenkalender.',
  },
  {
    name: 'Durchfahrtsfenster prüfen',
    text: 'Das Tool zeigt das genaue Zeitintervall an, in dem Sie über genügend Tiefe für eine sichere Navigation verfügen.',
  },
];

const seo: UnderKeelLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Kielfreiheit: Sicher über Untiefen navigieren',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Die Planung einer Durchfahrt endet nicht mit dem Zeichnen eines Kurses in der Karte. Für den Küstennavigator ist eine der kritischsten Berechnungen die <strong>Kielfreiheit (Under-Keel Clearance)</strong>: zu wissen, zu welcher Zeit genügend Tiefe vorhanden ist, um eine kritische Stelle ohne Grundberührung zu passieren.',
  },
  {
    type: 'title',
    text: 'Was ist die Kartentiefe und wie hängt sie mit der Gezeit zusammen?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'In Seekarten beziehen sich Tiefenangaben (Soundings) auf <strong>Kartennull (Chart Datum)</strong>. Dieses Niveau ist per Konvention der niedrigste Stand, den die Gezeiten unter normalen Bedingungen erreichen. Die tatsächliche Tiefe, die Ihr Boot zu einem bestimmten Zeitpunkt vorfindet, ist die Summe aus dieser Tiefenangabe plus der Gezeitenhöhe zu diesem Zeitpunkt.',
  },
  {
    type: 'title',
    text: 'Die Elemente der Berechnung: Tiefgang und Marge',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Um den Kielfreiheitsrechner professionell zu nutzen, müssen Sie zwei technische Details über Ihr Boot kennen und eine persönliche Entscheidung treffen:',
  },
  {
    type: 'list',
    items: [
      '<strong>Maximaler Tiefgang:</strong> Die Tiefe, die der tiefste Punkt des Bootes (der Kiel) bei voller Beladung erreicht.',
      '<strong>Kartentiefe:</strong> Die Zahl in der Seekarte für den Punkt, den Sie überqueren möchten. Wenn unterstrichen, fällt die Stelle bei Kartennull trocken.',
      '<strong>Sicherheitsmarge:</strong> Zusätzliche Freigabe von mindestens 0,5 bis 1 Meter über dem Tiefgang.',
    ],
  },
  {
    type: 'title',
    text: 'Wie funktioniert das Durchfahrtsfenster?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Der Rechner ermittelt den genauen Zeitpunkt, an dem der Wasserstand über Ihren Tiefgang plus der gewählten Sicherheitsmarge steigt. Ab dieser Minute öffnet sich das <strong>Durchfahrtsfenster</strong>. Wenn die Gezeit abläuft (Ebbe), zeigt das Tool an, bis zu welcher Zeit die Durchfahrt erlaubt ist, bevor der Wasserstand unter Ihr Sicherheitslimit sinkt.',
  },
  {
    type: 'title',
    text: 'Faktoren, die die tatsächliche Durchfahrt beeinflussen',
    level: 3,
  },
  {
    type: 'table',
    headers: ['Faktor', 'Effekt', 'Empfehlung'],
    rows: [
      ['<strong>Seegang</strong>', 'Verringert das Wasser unter dem Rumpf', 'Sicherheitsmarge deutlich erhöhen'],
      ['<strong>Squat-Effekt</strong>', 'Erhöht den Tiefgang durch Sogwirkung', 'Geschwindigkeit an kritischen Stellen reduzieren'],
      ['<strong>Sandiger Grund</strong>', 'Tiefe variabel durch Stürme', 'Echolot aktiv halten und Extra-Marge einplanen'],
    ],
  },
  {
    type: 'tip',
    title: 'Navigationstipp',
    html: 'Wenn Ihr Durchfahrtsfenster sehr schmal ist oder sich das Wetter verschlechtert, ist es meist die klügste Entscheidung, draußen im tiefen Wasser zu warten, bis die Gezeit die erforderliche Höhe erreicht hat.',
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
    name: `Benutzung: ${title}`,
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
