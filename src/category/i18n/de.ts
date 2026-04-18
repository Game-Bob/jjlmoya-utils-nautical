import type { CategoryLocaleContent } from '../index';

const slug = 'segeln-und-nautik';
const title = 'Segeln & Nautik';
const description =
  'Nautische Berechnungstools für Segler: Gezeiten, Reichweite, Segelfläche, Einheitenkonverter und Geschwindigkeit. Ideal für die Vorbereitung auf RYA- und Yachtmaster-Prüfungen.';

const seo: CategoryLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Warum digitale Werkzeuge beim Segeln und Navigieren verwenden?',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Die moderne Navigation hat mit dem Aufkommen digitaler Werkzeuge eine radikale Transformation erfahren. Ob auf einem kleinen Freizeitboot oder am Steuer einer Kreuzyacht – die Fähigkeit, Positions-, Wind- und Strömungsdaten sofort zu verarbeiten, ist nicht nur eine Frage des Komforts, sondern ein grundlegendes Sicherheitsprinzip auf See.',
  },
  {
    type: 'paragraph',
    html: 'Historisch gesehen war der Seefahrer ausschließlich auf Sextant, Marinechronometer und Reduktionsseiten angewiesen, um seine Position auf dem weiten Ozean zu bestimmen. Heute, obwohl die Romantik des Sextanten fortbesteht, verlangt die betriebliche Realität eine Reaktionsgeschwindigkeit, die nur digitale Berechnungstools liefern können.',
  },
  {
    type: 'title',
    text: 'Wichtige Aspekte für den modernen Navigator',
    level: 2,
  },
  {
    type: 'title',
    text: 'Geolokalisierung und hochpräzise digitale Kartographie',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Die digitale Kartographie hat die Navigation demokratisiert und gibt auch kleinen Booten Zugang zu Informationen, die früher großen Handelsschiffen vorbehalten waren. Ein verantwortungsvoller Skipper nutzt digitale Tools, um sein Urteilsvermögen zu validieren, nicht um es zu ersetzen.',
  },
  {
    type: 'list',
    items: [
      'Dateneingabegenauigkeit: Minimale Tippfehler können Sie Meilen von Ihrem Ziel entfernen.',
      'Geräteübergreifende Kompatibilität: Synchronisieren Sie die Reisestreckenplanung auf einem Tablet mit Bordinstrumenten.',
      'Backup bei Hardwareausfall: Leichte Web-Apps sind eine Versicherung, wenn der Bordplotter abstürzt.',
      'Reiseroutenplanung: Nautische Rechner ermöglichen genaue Schätzungen von Kraftstoffverbrauch und Entfernungen.',
    ],
  },
  {
    type: 'title',
    text: 'Seemeteorologie und Routenoptimierung',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Wind und Seegang sind die wahren Herrscher des Segelns. Die korrekte Interpretation von Windskalen (wie der Beaufort-Skala) und ihre Umrechnung in praktische Einheiten wie Knoten ist die tägliche Realität jedes Navigators.',
  },
  {
    type: 'tip',
    title: 'Die Bedeutung von Redundanz und Plan B',
    html: 'Vertrauen Sie nie Ihrer gesamten Navigation einem einzigen elektronischen System. Halten Sie immer eine Sicherungskopie Ihrer kritischen Wegpunkte auf Papier bereit. Web-Tools eignen sich hervorragend für die Vorausplanung, aber ein guter Seemann hat immer einen Notfallplan, der keinen Bildschirm benötigt.',
  },
  {
    type: 'title',
    text: 'Nautische Ausbildung und die Verwendung von Rechnern',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Selbst in offiziellen Prüfungen für nautische Qualifikationen (wie dem RYA Dayskipper oder Yachtmaster) bleiben Kartenberechnungen obligatorisch. Digitale Tools dienen als perfekte Lernbegleiter, die es Kandidaten ermöglichen, ihre Koppelnavigationsübungen, Gezeitenberechnungen und Kompasskorrekturen zu überprüfen.',
  },
  {
    type: 'paragraph',
    html: 'Unsere Sammlung von Werkzeugen soll diese Brücke zwischen dem akademischen Anspruch von Papierkarten und der Unmittelbarkeit moderner Navigation bilden. Wir möchten, dass jeder Skipper, Enthusiast oder Profi hier die schnellen und genauen Daten findet, die er braucht, bevor er ablegt.',
  },
];

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo,
};
