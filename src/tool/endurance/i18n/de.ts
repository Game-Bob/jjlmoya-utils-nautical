import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EnduranceUI, EnduranceLocaleContent } from '../index';

const slug = 'reichweiten-rechner';
const title = 'Reichweiten Rechner für Motorboote';
const description =
  'Berechnen Sie Ihre maximale Reichweite und Sicherheitsdistanz basierend auf Kraftstoffverbrauch, Tankkapazität und Reisegeschwindigkeit. Kraftstoffmanagement für Motorboote.';

const ui: EnduranceUI = {
  tankCapacityLabel: 'Tankkapazität',
  mainTankLabel: 'Haupttank',
  auxTankLabel: 'Zusatztank',
  currentFuelLabel: 'Aktueller Kraftstoffstand',
  seaConditionsLabel: 'See- / Windbedingungen',
  consumptionLabel: 'Theoretischer Verbrauch',
  cruiseSpeedLabel: 'Reisegeschwindigkeit',
  reserveLabel: 'Reserve',
  fuelPriceLabel: 'Preis pro Liter',
  maxRangeLabel: 'Maximale Reichweite',
  realPerformanceLabel: 'Tatsächliche Leistung',
  hoursLabel: 'Autonomie in Stunden',
  safeMilesLabel: 'Sichere Meilen',
  tankValueLabel: 'Tankwert',
  inverseCalcLabel: 'Rückwärtsrechnung: Wie viel muss ich nachtanken?',
  desiredDistLabel: 'Gewünschte Distanz',
  minFuelLabel: 'Benötigter Mindestkraftstoff',
  warningLabel: 'Erinnerung: Eine Reserve von 20% ist das absolute Minimum, das für die nautische Sicherheit empfohlen wird.',
  seaCalm: 'Ruhig (1.0x)',
  seaLight: 'Leichter Wellengang (+15%)',
  seaModerate: 'Mäßiger Wellengang (+30%)',
  seaStorm: 'Sturm (+60%)',
  faqTitle: 'Häufig gestellte Fragen',
  bibliographyTitle: 'Bibliografie',
};

const faq: EnduranceLocaleContent['faq'] = [
  {
    question: 'Wie wird die Autonomie eines Motorboots berechnet?',
    answer: 'Die Autonomie wird berechnet, indem der verfügbare Kraftstoff durch den Stundenverbrauch geteilt wird, um die Gesamtstunden zu erhalten, und diese Zeit dann mit der Reisegeschwindigkeit multipliziert wird. Das Tool berücksichtigt zudem einen Seegangsfaktor, um reale Navigationsbedingungen widerzuspiegeln.',
  },
  {
    question: 'Warum wird in der Seefahrt eine Reserve von 20% empfohlen?',
    answer: 'Die 20%-Reserve ist ein nautischer Sicherheitsstandard, der ausreichend Kraftstoff für unvorhergesehene Ereignisse garantiert: Gegenströmungen, Umwege wegen schlechten Wetters, Schätzfehler beim Verbrauch oder die Notwendigkeit, einem anderen Schiff zu helfen. Viele Versicherer und Hafenbehörden betrachten dies als obligatorisch.',
  },
  {
    question: 'Was ist die L/NM-Leistung und wie beeinflusst sie die Planung?',
    answer: 'Die Leistung in Litern pro Seemeile (L/NM) gibt die tatsächliche Effizienz des Motors unter Seebedingungen an. Im Gegensatz zum Stundenverbrauch ermöglicht sie die genaue Berechnung des Kraftstoffbedarfs für eine bestimmte Strecke, unabhängig von der Geschwindigkeit.',
  },
  {
    question: 'Wie wirkt sich der Seegang auf den tatsächlichen Verbrauch aus?',
    answer: 'Der Seegang erhöht den Verbrauch, da der Rumpf stärker gegen Wasser- und Windwiderstand arbeiten muss. Bei leichtem Wellengang steigt der Verbrauch um 15%, bei mäßigem um 30% und bei Sturm kann er um 60% oder mehr sprunghaft ansteigen. Das Ignorieren dieses Faktors kann dazu führen, dass einem Schiff der Kraftstoff ausgeht, bevor es den Hafen erreicht.',
  },
];

const howTo: EnduranceLocaleContent['howTo'] = [
  {
    name: 'Geben Sie Ihre Tankkapazität ein',
    text: 'Tragen Sie die Liter des Haupttanks und des Zusatztanks ein, falls vorhanden. Das Tool berechnet den aktuellen Füllstand in Prozent.',
  },
  {
    name: 'Geben Sie den aktuellen Kraftstoffstand ein',
    text: 'Tragen Sie die tatsächliche Litermenge ein, die Sie gerade haben. Sie können diese am Füllstandsanzeiger ablesen oder anhand der letzten Betankung schätzen.',
  },
  {
    name: 'Passen Sie die Navigationsbedingungen an',
    text: 'Wählen Sie den für Ihre Überfahrt erwarteten Seegang aus. Der Seegangsfaktor korrigiert den theoretischen Verbrauch auf den erwarteten realen Verbrauch.',
  },
  {
    name: 'Geben Sie Verbrauch und Reisegeschwindigkeit ein',
    text: 'Nutzen Sie Herstellerangaben oder eigene Aufzeichnungen für den Stundenverbrauch und die Geschwindigkeit, mit der Sie gewöhnlich navigieren.',
  },
  {
    name: 'Prüfen Sie die sichere Distanz und Rückwärtsrechnung',
    text: 'Das Tool zeigt an, wie viele Meilen Sie sicher zurücklegen können und wie viel Kraftstoff Sie benötigen, um ein bestimmtes Ziel zu erreichen.',
  },
];

const bibliography: EnduranceLocaleContent['bibliography'] = [
  {
    name: 'UK Maritime and Coastguard Agency',
    url: 'https://www.gov.uk/government/organisations/maritime-and-coastguard-agency',
  },
  {
    name: 'RYA - Royal Yachting Association',
    url: 'https://www.rya.org.uk/',
  },
];

const seo: EnduranceLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Kraftstoffmanagement und Autonomie in der Motorschifffahrt',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Die <strong>nautische Autonomie</strong> ist eine der kritischsten Berechnungen vor dem Auslaufen mit einem Motorboot. Genau zu wissen, wie viele Meilen Sie mit dem verfügbaren Kraftstoff zurücklegen können, ist der Unterschied zwischen einer geplanten Überfahrt und einem Notfall auf See.',
  },
  {
    type: 'paragraph',
    html: 'Dieser Reichweiten-Rechner integriert den <strong>Seegangsfaktor</strong>, den Prozentsatz der Sicherheitsreserve und die Kraftstoff-Rückwärtsrechnung, damit das Kraftstoffmanagement in jeder Situation vollständig und zuverlässig ist.',
  },
  {
    type: 'title',
    text: 'Die goldene Regel: Die Drittel-Regel',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Die klassische Regel des Kraftstoffmanagements in der Seefahrt teilt den Tank in drei gleiche Teile auf, um stets eine Sicherheitsmarge zu garantieren:',
  },
  {
    type: 'list',
    items: [
      '<strong>Ein Drittel für die Hinfahrt:</strong> Der benötigte Kraftstoff, um das geplante Ziel zu erreichen.',
      '<strong>Ein Drittel für die Rückfahrt:</strong> Der Kraftstoff, um zum Abfahrtshafen oder dem nächstgelegenen Hafen zurückzukehren.',
      '<strong>Ein Drittel als Reserve:</strong> Die Sicherheitsmarge für unvorhergesehene Ereignisse, Strömungen oder widrige Bedingungen.',
    ],
  },
  {
    type: 'paragraph',
    html: 'Im Rechner können Sie den Reserve-Prozentsatz nach Ihren eigenen Kriterien festlegen, wobei <strong>weniger als 20% niemals empfohlen wird</strong>. Bei größeren Tanks oder langen Überfahrten erhöhen viele erfahrene Skipper diese Marge auf 30% oder sogar 33%.',
  },
  {
    type: 'title',
    text: 'Faktoren, die den Verbrauch beeinflussen (l/h)',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Der theoretische Verbrauch des Herstellers wird unter idealen Laborbedingungen berechnet. In der Praxis verändern multiple Faktoren den <strong>tatsächlichen Kraftstoffverbrauch</strong>. Die Rumpfgeschwindigkeit ist dabei am entscheidendsten: Das Navigieren oberhalb der wirtschaftlichen Geschwindigkeit kann den Verbrauch pro zurückgelegter Meile verdoppeln oder verdreifachen.',
  },
  {
    type: 'table',
    headers: ['Navigationszustand', 'Auswirkung auf die Autonomie', 'Empfehlung'],
    rows: [
      ['<strong>Bewachsener Rumpf</strong>', 'Reduziert die Autonomie um bis zu 20%', 'Reinigen Sie den Rumpf vor der Saison'],
      ['<strong>Gegenströmung</strong>', 'Kann die effektive Geschwindigkeit um 30% senken', 'Rechnen Sie immer mit der Geschwindigkeit über Grund'],
      ['<strong>Gegenwind</strong>', 'Erhöht Widerstand und Verbrauch um 10-25%', 'Nutzen Sie den Faktor für leichten oder mäßigen Wellengang'],
      ['<strong>Überladung</strong>', 'Erhöht Tiefgang und Widerstand', 'Wiegen Sie Ausrüstung und Vorräte vor der Berechnung'],
    ],
  },
  {
    type: 'title',
    text: 'Technisches Glossar zur Autonomie',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: 'Leistung (L/NM)', definition: 'Verbrauchte Liter Kraftstoff pro zurückgelegter Seemeile. Der nützlichste Indikator für die Planung von Überfahrten, da er den Verbrauch mit der tatsächlichen Distanz verknüpft.' },
      { term: 'Reisegeschwindigkeit', definition: 'Die optimale Geschwindigkeit, bei der der Motor das beste Gleichgewicht zwischen Schnelligkeit und Verbrauch bietet. In der Regel zwischen 70% und 80% der Höchstleistung.' },
      { term: 'Kritische Reserve', definition: 'Der Prozentsatz des Tanks, der niemals verbraucht werden darf. Ein Minimum von 20% wird empfohlen, um Unvorhergesehenes abzudecken und das Eindringen von Luft in das Kraftstoffsystem zu verhindern.' },
      { term: 'Spezifischer Verbrauch', definition: 'Gramm Kraftstoff pro Kilowattstunde erzeugter Leistung (g/kWh). Technisches Motorenmaß, das den Effizienzvergleich zwischen verschiedenen Antriebssystemen ermöglicht.' },
    ],
  },
  {
    type: 'title',
    text: 'Die Gefahr von Schlamm und Bewegung',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Eine häufige Problemquelle auf Schiffen mit niedrigem Kraftstoffstand ist <strong>Tankschlamm</strong>. Wenn der Stand zu weit sinkt, können sich über Jahre angesammelte Sedimente bis zum Filter bewegen und ihn verstopfen, wodurch der Motor ausfällt, obwohl die Anzeige noch einige Liter anzeigt.',
  },
  {
    type: 'paragraph',
    html: 'Auch die Bewegung des Bootes bei Seegang mit wenig Kraftstoff kann Probleme verursachen: Die Flüssigkeit schwankt mit den Wellen und kann die Kraftstoffpumpe kurzzeitig trockenlaufen lassen. Das Einhalten der Reserve stellt sicher, dass dies nicht in einem kritischen Moment wie einem Hafenmanöver passiert.',
  },
  {
    type: 'tip',
    title: 'Tipp zum Kraftstoffsparen',
    html: 'Eine Verringerung der Geschwindigkeit um 10-15% unter Ihre übliche Reisegeschwindigkeit kann die Effizienz um bis zu 30% steigern. Wenn Sie Zeit haben und das Wetter günstig ist, ist langsomeres Fahren immer die wirtschaftlichste und sicherste Entscheidung.',
  },
  {
    type: 'title',
    text: 'Unterschied zwischen Seemeilen (NM) und Kilometern',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Eine <strong>Seemeile</strong> entspricht 1.852 Metern (1,852 km) und ist die universelle Distanzeinheit in der maritimen und aeronautischen Navigation. Sie basiert auf einer Bogenminute eines Breitengrades, was sie ideal für die Navigation mit Seekarten in geografischen Koordinaten macht. Die Geschwindigkeit in Seemeilen pro Stunde wird Knoten (kn) genannt.',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Analoge Nadelanzeige',
        description: 'Traditionelles Schwimmersystem',
        points: [
          'Geringe Kosten und einfache Installation',
          'Benötigt keinen Strom für den Betrieb',
          'Ungenau bei unruhiger See durch Kraftstoffbewegung',
          'Zeigt weder Verbrauch noch geschätzte Autonomie an',
        ],
      },
      {
        title: 'Digitaler Durchflussrechner',
        description: 'Elektronische Durchflusssensoren',
        highlight: true,
        points: [
          '1-2% Genauigkeit beim realen Verbrauch',
          'Zeigt Autonomie, Verbrauch und Kosten in Echtzeit an',
          'Integrierbar in Kartenplotter und NMEA 2000',
          'Erfordert initiale Kalibrierung und Wartung',
        ],
      },
    ],
  },
];

const schemas: EnduranceLocaleContent['schemas'] = [
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

export const content: EnduranceLocaleContent = {
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
