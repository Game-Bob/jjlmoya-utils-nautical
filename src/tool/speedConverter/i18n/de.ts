import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SpeedConverterUI, SpeedConverterLocaleContent } from '../index';

const slug = 'geschwindigkeits-umrechner';
const title = 'Nautischer Geschwindigkeitsumrechner und Beaufort Skala';
const description =
  'Rechnen Sie sofort zwischen Knoten, km/h, m/s und mph um. Inklusive vollständiger Beaufort-Tabelle mit Beschreibungen des Seegangs und Windeffekten.';

const beaufortData = [
  { force: 0, name: 'Windstille', sea: 'Spiegelglatte See', effect: 'Rauch steigt senkrecht empor', kn: '0' },
  { force: 1, name: 'Leiser Zug', sea: 'Kleine, schuppenförmige Kräuselwellen', effect: 'Windrichtung nur durch Rauchabdrift erkennbar', kn: '1-3' },
  { force: 2, name: 'Leichte Brise', sea: 'Kleine, kurze Wellen, Kämme brechen nicht', effect: 'Wind im Gesicht spürbar, Blätter rascheln', kn: '4-6' },
  { force: 3, name: 'Schwache Brise', sea: 'Anfängt zu brechen, Schaumköpfe', effect: 'Blätter und dünne Zweige bewegen sich', kn: '7-10' },
  { force: 4, name: 'Mäßige Brise', sea: 'Kleine Wellen, Schaumköpfe werden zahlreicher', effect: 'Staub und loses Papier werden angehoben', kn: '11-16' },
  { force: 5, name: 'Frische Brise', sea: 'Mäßige Wellen von großer Länge, überall Schaumköpfe', effect: 'Kleine Laubbäume beginnen zu schwanken', kn: '17-21' },
  { force: 6, name: 'Starker Wind', sea: 'Große Wellen beginnen sich zu bilden, weiße Schaumkämme', effect: 'Schirme schwierig zu halten', kn: '22-27' },
  { force: 7, name: 'Steifer Wind', sea: 'See türmt sich, Schaum legt sich in Streifen', effect: 'Spürbare Hemmung beim Gehen gegen den Wind', kn: '28-33' },
  { force: 8, name: 'Stürmischer Wind', sea: 'Mäßig hohe Wellenberge, Gischt gießt über', effect: 'Erhebliche Behinderung beim Gehen', kn: '34-40' },
  { force: 9, name: 'Sturm', sea: 'Hohe Wellenberge, dichte Schaumstreifen', effect: 'Kleinere Schäden an Häusern (Dachziegel fallen)', kn: '41-47' },
  { force: 10, name: 'Schwerer Sturm', sea: 'Sehr hohe Wellen, See weiß durch Schaum', effect: 'Bäume werden entwurzelt, bedeutende Schäden', kn: '48-55' },
  { force: 11, name: 'Orkanartiger Sturm', sea: 'Außergewöhnlich hohe Wellen, Sichtweite eingeschränkt', effect: 'Schwere Sturmschäden überall', kn: '56-63' },
  { force: 12, name: 'Orkan', sea: 'Luft mit GISCHT und Schaum gefüllt, See ganz weiß', effect: 'Schwerste Verwüstungen', kn: '64+' },
];

const ui: SpeedConverterUI = {
  knLabel: 'Knoten (kt)',
  kmhLabel: 'Kilometer/Stunde',
  msLabel: 'Meter/Sekunde',
  mphLabel: 'Meilen/Stunde',
  beaufortTitle: 'Beaufort-Skala',
  forceLabel: 'Stärke',
  descriptionLabel: 'Beschreibung',
  knotsLabel: 'Knoten',
  effectLabel: 'Visueller Effekt',
  seaStateLabel: 'Seegang',
  windEffectLabel: 'Effekt an Land',
  faqTitle: 'Häufig gestellte Fragen': 'Bibliografie',
  beaufortDataJson: JSON.stringify(beaufortData),
};

const faq: SpeedConverterLocaleContent['faq'] = [
  {
    question: 'Warum wird die Geschwindigkeit auf See in Knoten gemessen?',
    answer: 'Der Knoten ist eine Geschwindigkeitseinheit, die einer Seemeile pro Stunde entspricht. Der Ursprung ist historisch: Seeleute maßen die Schiffsgeschwindigkeit, indem sie ein an ein Seil gebundenes Holzstück ins Meer warfen, in das in regelmäßigen Abständen Knoten geknüpft waren. Sie zählten, wie viele Knoten in einer bestimmten Zeit durch ihre Finger glitten. Heute ist es die internationale Standardeinheit in der Schifffahrt und Luftfahrt.',
  },
  {
    question: 'Was ist die Beaufort-Skala und wie wird sie in der Navigation verwendet?',
    answer: 'Die Beaufort-Skala ist eine empirische Skala, die die Windgeschwindigkeit mit beobachtbaren Auswirkungen auf See und an Land in Beziehung setzt. Sie wurde 1805 vom britischen Admiral Francis Beaufort entwickelt und reicht von 0 (Windstille) bis 12 (Orkan). Segler nutzen sie, um die Windstärke ohne Instrumente durch Beobachtung des Seegangs abzuschätzen.',
  },
  {
    question: 'Was ist der Unterschied zwischen SOG und STW in der Navigation?',
    answer: 'SOG (Speed Over Ground) ist die tatsächliche Geschwindigkeit des Schiffes relativ zum Meeresboden, gemessen per GPS. STW (Speed Through Water) oder Logge-Geschwindigkeit ist die Geschwindigkeit des Schiffes relativ zum umgebenden Wasser. Der Unterschied zwischen beiden spiegelt den Einfluss von Meeresströmungen wider. SOG wird für die Ankunftsplanung und Kraftstoffberechnung genutzt; STW für die Berechnung der Abdrift.',
  },
  {
    question: 'Wie viele km/h sind ein Knoten?',
    answer: 'Ein Knoten entspricht exakt 1,852 Kilometern pro Stunde, was der Länge einer Seemeile entspricht (definiert als eine Bogenminute des Erdimeridians). Daher entsprechen 10 Knoten 18,52 km/h, 20 Knoten 37,04 km/h und 30 Knoten 55,56 km/h.',
  },
];

const howTo: SpeedConverterLocaleContent['howTo'] = [
  {
    name: 'Geben Sie die Geschwindigkeit in einer beliebigen Einheit ein',
    text: 'Tippen Sie den Geschwindigkeitswert in das entsprechende Feld (Knoten, km/h, m/s oder mph) ein und alle anderen Felder werden automatisch aktualisiert.',
  },
  {
    name: 'Prüfen Sie die entsprechende Beaufort-Stärke',
    text: 'Die Beaufort-Karte zeigt in Echtzeit die zur eingegebenen Geschwindigkeit passende Windstärke mit Seegang und Auswirkungen an Land an.',
  },
  {
    name: 'Klicken Sie auf eine Zeile in der Beaufort-Tabelle',
    text: 'Sie können jede Beaufort-Stärke direkt in der Tabelle unten auswählen, um deren Mindestgeschwindigkeit in allen Formaten zu sehen.',
  },
  {
    name: 'Nutzen Sie die Ergebnisse für Ihre Planung',
    text: 'Kombinieren Sie Geschwindigkeits- und Windinformationen, um zu entscheiden, ob die Bedingungen für Ihren Schiffstyp und die geplante Reise angemessen sind.',
  },
];

const seo: SpeedConverterLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Leitfaden zum nautischen Geschwindigkeitsumrechner und zur Beaufort-Skala',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Geschwindigkeit ist ein fundamentaler Datenpunkt in der maritimen Navigation. Zu wissen, wie viele Knoten Ihr Boot macht, wie sich das in Kilometer pro Stunde für die Reiseplanung übersetzt oder welche Beaufort-Stärke der Wind hat, dem Sie ausgesetzt sind, sind Berechnungen, die jeder Segler beherrschen muss.',
  },
  {
    type: 'paragraph',
    html: 'Dieser nautische Geschwindigkeitsumrechner ermöglicht es Ihnen, sofort zwischen Knoten, km/h, m/s und mph umzurechnen, während er automatisch die entsprechende Beaufort-Stärke mit Seegangsbeschreibung und beobachtbaren Windeffekten identifiziert.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Standardeinheit', value: 'Knoten (kt)', icon: 'mdi:speedometer' },
      { label: 'Windskala', value: 'Beaufort (0-12)', icon: 'mdi:weather-windy' },
      { label: 'Wichtige Umrechnung', value: '1 kt = 1,85 km/h', icon: 'mdi:swap-horizontal' },
    ],
  },
  {
    type: 'title',
    text: 'Warum wird Geschwindigkeit in Knoten gemessen?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Der <strong>Knoten (kt)</strong> ist die offizielle Geschwindigkeitseinheit in der See- und Luftfahrt. Seine Definition ist präzise: Ein Knoten entspricht einer Seemeile pro Stunde, wobei die Seemeile (1852 m) als eine Bogenminute des Erdmeridians definiert ist. Diese direkte Beziehung zur Erdlänge macht den Knoten zu einer besonders praktischen Einheit für die Navigation, da Entfernungen direkt auf einer Seekarte ohne Umrechnung abgeschätzt werden können.',
  },
  {
    type: 'paragraph',
    html: 'Historisch gesehen maßen Seeleute die Schiffsgeschwindigkeit mit dem <em>Logscheit</em>: ein dreieckiges Holzstück, das an einer Leine ins Meer geworfen wurde, in der alle 14,4 Meter (der proportionale Bruchteil einer Seemeile in 30 Sekunden) Knoten geknüpft waren. Das Zählen der Knoten gab ihnen die Geschwindigkeit, woraus der heute verwendete Begriff entstand.',
  },
  {
    type: 'title',
    text: 'Die Beaufort-Skala: Das Auge des Seemanns',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Die <strong>Beaufort-Skala</strong> wurde 1805 vom britischen Admiral Sir Francis Beaufort als empirische Methode zur Klassifizierung der Windstärke anhand beobachtbarer Auswirkungen ohne Instrumente entwickelt. Ursprünglich konzipiert, um abzuschätzen, wie viel Segelfläche ein Schiff tragen kann, ist sie heute eine universelle Referenz in der maritimen Meteorologie, übernommen von der Weltorganisation für Meteorologie (WMO).',
  },
  {
    type: 'paragraph',
    html: 'Die Skala reicht von <strong>Stärke 0</strong> (totale Windstille, spiegelglatte See) bis <strong>Stärke 12</strong> (Orkanbedingungen mit Wellen über 14 Metern und Luft voller Gischt). Für den Freizeitschiffer liegen kritische Grenzen meist bei Stärke 6 (starker Wind, 22-27 Knoten) für kleine Fahrzeuge und Stärke 7-8 für Hochseyachten.',
  },
  {
    type: 'table',
    headers: ['Beaufort-Stärke', 'Beschreibung', 'Seebedingungen'],
    rows: [
      ['0', 'Windstille', 'Spiegelglatte See'],
      ['3', 'Schwache Brise', 'Schaumköpfe, Kämme beginnen zu brechen'],
      ['6', 'Starker Wind', 'Große Wellen, weiße Schaumkämme, Gischt möglich'],
      ['9', 'Sturm', 'Sehr hohe Wellenberge, Sicht durch Gischt eingeschränkt'],
      ['12', 'Orkan', 'Luft ganz mit Gischt gefüllt, See völlig weiß'],
    ],
  },
  {
    type: 'title',
    text: 'Nautisches Geschwindigkeitsglossar',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: 'Knoten (kt)', definition: 'Geschwindigkeitseinheit gleich einer Seemeile pro Stunde (1852 m/h). Internationaler Standard in der Schifffahrt und Luftfahrt.' },
      { term: 'SOG (Speed Over Ground)', definition: 'Tatsächliche Geschwindigkeit des Schiffes über Grund, gemessen per GPS. Spiegelt den Einfluss von Meeresströmungen wider.' },
      { term: 'Logge-Geschwindigkeit (STW)', definition: 'Geschwindigkeit des Schiffes relativ zum umgebenden Wasser, gemessen durch die Logge. Ohne Strömungseinfluss; wichtig für die Abdriftberechnung.' },
      { term: 'Scheinbarer Wind', definition: 'Der vom Bordpersonal wahrgenommene Wind, resultierend aus der Vektorsumme aus wahrem Wind und Fahrtwind. Weicht immer in Stärke und Richtung vom wahren Wind ab.' },
    ],
  },
  {
    type: 'title',
    text: 'Schnelle Umrechnungsformeln',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Um Geschwindigkeiten manuell umzurechnen, wenn Sie keinen Zugriff auf einen digitalen Konverter haben, nutzen Sie diese Faustformeln, die jeder Segler auswendig können sollte:',
  },
  {
    type: 'list',
    items: [
      '<strong>Knoten in km/h:</strong> Multiplizieren Sie Knoten mit 1,852. Schnelle Annäherung: Knoten x 2, minus 8%. Zum Beispiel: 10 kt ≈ 20 - 1,6 = 18,4 km/h.',
      '<strong>Knoten in mph:</strong> Multiplizieren Sie Knoten mit 1,15. Annäherung: Knoten + 15%. Zum Beispiel: 20 kt ≈ 23 mph.',
      '<strong>Knoten in m/s:</strong> Multiplizieren Sie Knoten mit 0,514. Schnelle Annäherung: Teilen Sie Knoten durch 2. Zum Beispiel: 10 kt ≈ 5 m/s (exakt: 5,14 m/s).',
    ],
  },
  {
    type: 'tip',
    title: 'Sicherheit und Klimatologie',
    html: 'Konsultieren Sie vor dem Auslaufen immer den Seewetterbericht. Beaufort 4-5 ist für die meisten Freizeitfahrzeuge gut beherrschbar; ab Stärke 6 sollten Sie ernsthaft in Betracht ziehen, das Auslaufen zu verschieben, wenn Sie nicht über ausreichend Erfahrung verfügen oder Ihr Boot nicht für diese Bedingungen gerüstet ist.',
  },
  {
    type: 'title',
    text: 'Vergleich der Ausrüstung',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Digitaler Anemometer',
        description: 'Elektronisches Instrument für die präzise Messung der Windgeschwindigkeit.',
        icon: 'mdi:speedometer',
        points: [
          'Genauigkeit von ±2% unter normalen Bedingungen',
          'Benötigt Stromversorgung oder Batterien',
          'Kann bei extremen Bedingungen versagen',
          'Sofortiges Ablesen und Datenaufzeichnung',
        ],
      },
      {
        title: 'Beaufort Beobachtung',
        description: 'Visuelle Schätzung der Windstärke anhand beobachtbarer Auswirkungen auf See und an Land.',
        icon: 'mdi:eye-outline',
        highlight: true,
        points: [
          'Benötigt keinerlei Instrumente',
          'In jedem Zustand verfügbar',
          'Ausreichende Genauigkeit für Sicherheitsentscheidungen',
          'Grundlegende Fertigkeit des erfahrenen Navigators',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Navigation und Reiseplanung',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Bei der Reiseplanung bestimmt Ihre Schiffsgeschwindigkeit die voraussichtliche Ankunftszeit (ETA) und bei Motorschiffen den Kraftstoffverbrauch. Für eine Segelyacht hängt die Geschwindigkeit zudem von der Windstärke und -richtung ab: Die Kenntnis der vorhergesagten Beaufort-Stärke lässt Sie antizipieren, ob Sie segeln können oder den Motor benötigen.',
  },
  {
    type: 'paragraph',
    html: 'Im Regattasport ist die Umrechnung zwischen Knoten und Metern pro Sekunde besonders nützlich für die Berechnung von VMG (Velocity Made Good) und die Analyse von Segelpolaren. Meteorologen und numerische Vorhersagemodelle geben den Wind typischerweise in m/s oder km/h an, sodass die Umrechnung in Knoten ein routinemäßiger Schritt in der taktischen Planung ist.',
  },
];

const schemas: SpeedConverterLocaleContent['schemas'] = [
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

export const content: SpeedConverterLocaleContent = {
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
