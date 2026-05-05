import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { NauticalConverterUI, NauticalConverterLocaleContent } from '../index';

const slug = 'nautische-einheiten-umrechner';
const title = 'Einheitenumrechner für die Seefahrt';
const description =
  'Rechnen Sie Seemeilen, Knoten, Faden und Luftdruck um. Enthält eine interaktive Beaufort-Skala für die Windgeschwindigkeit.';

const ui: NauticalConverterUI = {
  distanceCategoryLabel: 'Entfernung',
  speedCategoryLabel: 'Geschwindigkeit',
  depthCategoryLabel: 'Tiefe',
  pressureCategoryLabel: 'Luftdruck',
  nmLabel: 'Seemeile (nm)',
  kmLabel: 'Kilometer (km)',
  miLabel: 'Meile (mi)',
  cableLabel: 'Kabellänge',
  knLabel: 'Knoten (kn)',
  kmhLabel: 'km/h',
  msLabel: 'm/s',
  mphLabel: 'mph',
  brozaLabel: 'Faden',
  mLabel: 'Meter (m)',
  ftLabel: 'Fuß (ft)',
  mbarLabel: 'Millibar (mbar)',
  mmhgLabel: 'mmHg',
  inhgLabel: 'inHg',
  atmLabel: 'Atmosphäre (atm)',
  windSeaLabel: 'Seegang',
  forceLabel: 'Stärke',
  effectLabel: 'Auswirkung',
  copyLabel: 'Wert kopieren',
};

const faq: NauticalConverterLocaleContent['faq'] = [
  {
    question: 'Wie viele Kilometer hat eine Seemeile?',
    answer: 'Eine Seemeile entspricht exakt 1,852 Kilometern oder 1852 Metern. Dieses Maß entspricht einer Bogenminute der geografischen Breite auf der Erdoberfläche.',
  },
  {
    question: 'Was ist der Unterschied zwischen einem Knoten und einem Kilometer pro Stunde?',
    answer: 'Ein Knoten entspricht 1,852 km/h, da ein Knoten eine Seemeile pro Stunde ist. Um Knoten in km/h umzurechnen, multiplizieren Sie einfach mit 1,852.',
  },
  {
    question: 'Warum werden auf See Seemeilen statt Kilometer verwendet?',
    answer: 'Weil eine Seemeile einer Bogenminute der Breite entspricht, was Navigationsberechnungen mit Karte und Kompass erheblich vereinfacht. Eine Änderung der Breite um eine Bogenminute entspricht genau einer Seemeile.',
  },
  {
    question: 'Was ist die Beaufort-Skala?',
    answer: 'Es handelt sich um eine empirische Skala, die Windgeschwindigkeiten mit beobachtbaren Auswirkungen auf See in Beziehung setzt. Sie reicht von 0 (Windstille) bis 12 (Orkan) und ist für die Küsten- und Hochseenavigation unerlässlich.',
  },
  {
    question: 'Welche Luftdruckeinheit wird in der maritimen Meteorologie verwendet?',
    answer: 'Die maritime Meteorologie verwendet hauptsächlich Millibar (mbar) oder das Äquivalent Hektopascal (hPa). Der normale Luftdruck auf Meereshöhe beträgt 1013,25 mbar.',
  },
  {
    question: 'Wie viele Fuß sind ein Faden?',
    answer: 'Ein Faden entspricht exakt 6 Fuß, also 1,8288 Metern. Er wird hauptsächlich im englischsprachigen Raum verwendet, um Tiefen auf älteren Seekarten anzugeben.',
  },
];

const howTo: NauticalConverterLocaleContent['howTo'] = [
  {
    name: 'Wählen Sie die Umrechnungskategorie',
    text: 'Klicken Sie auf einen der vier Reiter: Entfernung, Geschwindigkeit, Tiefe oder Luftdruck, je nachdem, welche Größe Sie umrechnen möchten.',
  },
  {
    name: 'Geben Sie den Wert in ein beliebiges Feld ein',
    text: 'Tippen Sie die Zahl in der Einheit ein, die Ihnen bekannt ist. Alle anderen Einheiten werden automatisch in Echtzeit aktualisiert.',
  },
  {
    name: 'Nutzen Sie die Beaufort-Skala (Geschwindigkeit)',
    text: 'Wenn Sie eine Geschwindigkeit im Reiter Geschwindigkeit eingeben, erscheint eine Karte mit der entsprechenden Beaufort-Stärke und dem zu erwartenden Seegang.',
  },
  {
    name: 'Kopieren Sie das Ergebnis',
    text: 'Nutzen Sie die Kopierschaltfläche neben jedem Feld, um den Wert in die Zwischenablage zu kopieren.',
  },
];

const seo: NauticalConverterLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Die Bedeutung der Präzision bei nautischen Einheiten',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Das Navigieren auf See erfordert eine eigene Sprache, ein Maßsystem, das über Jahrhunderte der maritimen Erkundung verfeinert wurde. Nautische Einheiten sind keine historische Besonderheit, sondern mathematisch kohärente Werkzeuge, die auf die Geometrie der Erde und die praktischen Bedürfnisse des Navigators abgestimmt sind.',
  },
  {
    type: 'paragraph',
    html: 'Anders als an Land, wo ein Fehler von wenigen Metern selten schwerwiegende Folgen hat, kann eine falsche Umrechnung auf See den Unterschied zwischen sicherem Ankern und dem Auflaufen auf eine Untiefe bedeuten. Präzision bei den Einheiten ist keine akademische Angelegenheit: Sie ist Navigation.',
  },
  {
    type: 'paragraph',
    html: 'Wenn wir uns von der Küste entfernen, macht der Mangel an visuellen Referenzen die berechnete Position zur einzigen Realität, nach der wir handeln können. Genau zu wissen, wie man zwischen Seemeilen, Kilometern, Knoten und Metern umrechnet, ist für den verantwortungsbewussten Navigator unerlässlich.',
  },
  {
    type: 'title',
    text: 'Warum verwenden wir Seemeilen statt Kilometer?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Die Antwort liegt in der Form der Erde selbst. Eine <strong>Seemeile</strong> entspricht genau einer Bogenminute der geografischen Breite auf der Erdoberfläche, also 1852 Metern. Diese direkte Entsprechung zwischen Winkelmaß und linearer Distanz ist der Schlüssel zu ihrer universellen Verwendung in der Navigation.',
  },
  {
    type: 'paragraph',
    html: 'Mit dieser Einheit entspricht eine Änderung der Breite um eine Bogenminute auf einer Seekarte immer genau einer zurückgelegten Seemeile. Dies vereinfacht Berechnungen von Position, Geschwindigkeit und Ankunftszeit enorm, ohne dass zusätzliche Umrechnungsfaktoren benötigt werden.',
  },
  {
    type: 'title',
    text: 'Geschwindigkeit auf See: Der Knoten',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Der <strong>Knoten</strong> ist die Einheit der Geschwindigkeit, die einer Seemeile pro Stunde entspricht. Sein Name stammt von der alten Technik, die Geschwindigkeit zu messen, indem ein an ein Seil gebundenes Holzscheit mit regelmäßig beabstandeten Knoten ins Wasser geworfen und gezählt wurde, wie viele Knoten in einer festgelegten Zeit durch die Finger glitten.',
  },
  {
    type: 'paragraph',
    html: 'Obwohl wir heute GPS-Satelliten und hochentwickelte elektronische Systeme nutzen, bleibt der Knoten die Standardeinheit in der internationalen Luftfahrt und Seeschifffahrt. Ein Knoten entspricht 1,852 km/h oder 0,514 m/s.',
  },
  {
    type: 'title',
    text: 'Tiefe und Ankern: Faden, Meter und Fuß',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'In der nautischen Welt ist die Tiefe nicht bloß eine Statistik: Sie ist der Unterschied zwischen einem sicheren Ankerplatz und einer Grundberührung. Historisch gesehen war der <strong>Faden</strong> (1,8288 Meter oder exakt 6 Fuß) die vorherrschende Einheit zur Messung von Tiefen im englischsprachigen Raum.',
  },
  {
    type: 'paragraph',
    html: 'Globalisierung und Technologie haben jedoch dazu geführt, dass auf den meisten modernen Karten und Echoloten Meter verwendet werden. Der moderne Navigator muss sich sicher zwischen Faden, Metern und Fuß bewegen können, besonders wenn er ältere Seekarten oder auf imperiale Einheiten kalibrierte Instrumente nutzt.',
  },
  {
    type: 'title',
    text: 'Meteorologie und Luftdruck',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Für einen Skipper ist das Barometer das Orakel des Wetters. Der in <strong>Millibar</strong> (mbar) gemessene Luftdruck ist der zuverlässigste Indikator für bevorstehende Wetteränderungen. Ein schneller Druckabfall kündigt die Ankunft von Starkwind und schlechtem Wetter an.',
  },
  {
    type: 'paragraph',
    html: 'Das Verständnis von Druckveränderungen ist für jeden Navigator lebensnotwendig. Der normale Luftdruck auf Meereshöhe beträgt 1013,25 mbar (eine Atmosphäre). Höhere Werte deuten auf stabiles Wetter hin, während niedrigere Werte, besonders bei schnellem Abfall, das Herannahen potenziell gefährlicher Tiefdrucksysteme signalisieren.',
  },
  {
    type: 'title',
    text: 'Wind- und Seegangsskalen: Von Beaufort bis Douglas',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Die Windgeschwindigkeit in Knoten ist eine Zahl, die erst in Verbindung mit der <strong>Beaufort-Skala</strong> lebendig wird. Diese 1805 vom britischen Admiral Francis Beaufort entwickelte empirische Skala setzt die Windgeschwindigkeit in Beziehung zu beobachtbaren Auswirkungen sowohl auf der Meeresoberfläche als auch an Land.',
  },
  {
    type: 'list',
    items: [
      '<strong>Stärke 0-3 (0-10 kn):</strong> Ruhige Segelbedingungen, ideal für Anfänger oder Familienausflüge.',
      '<strong>Stärke 4-5 (11-21 kn):</strong> Idealer Segelwind für Yachten, mit mäßigen Wellen und Schaumkronen.',
      '<strong>Stärke 6-7 (22-33 kn):</strong> Starker Wind bis steifer Brise. Erfahrung und Reffen empfohlen.',
      '<strong>Stärke 8+ (über 34 kn):</strong> Sturm. Nur für erfahrene Navigatoren mit geeigneten Schiffen.',
    ],
  },
  {
    type: 'paragraph',
    html: 'Gleichermaßen klassifiziert die Douglas-Skala den Seegang in Graden von 0 (spiegelglatt) bis 9 (außergewöhnlich schwer), was dem Navigator ermöglicht, Bedingungen jenseits des Horizonts basierend auf Wetterberichten vorherzusehen.',
  },
  {
    type: 'tip',
    title: 'Sicherheitstipp',
    html: 'Wenn Sie diesen Konverter für die Planung einer Fahrt nutzen, bedenken Sie immer, dass tatsächliche Bedingungen von Vorhersagen abweichen können. Konsultieren Sie offizielle Wetterberichte und unterschätzen Sie niemals die Fähigkeit des Meeres, sich schnell zu verändern.',
  },
  {
    type: 'title',
    text: 'Offline-Planung und Mobilität',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Dieses Tool ist so konzipiert, dass es nach dem Laden im Browser auch ohne Internetverbindung funktioniert. Dies macht es ideal für den Einsatz an Bord, wo die Konnektivität eingeschränkt sein kann. Alle Umrechnungen werden lokal auf dem Gerät berechnet, ohne dass Daten an einen Server gesendet werden.',
  },
];

const schemas: NauticalConverterLocaleContent['schemas'] = [
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

export const content: NauticalConverterLocaleContent = {
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
