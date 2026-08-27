import { bibliography } from '../bibliography';
import type { HullSpeedLocaleContent, HullSpeedUI } from '../index';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

const slug = 'kalkulator-predkosci-kadluba';
const title = 'Kalkulator prędkości kadłuba';
const description =
  'Wyznacz teoretyczną prędkość kadłuba z długości linii wodnej, porównaj log i zobacz, kiedy kadłub wypornościowy wspina się na własną falę dziobową.';

const ui: HullSpeedUI = {
  metric: 'Metryczny',
  imperial: 'Imperialny',
  unitGroup: 'Jednostki',
  sceneLabel: 'Linia wodna i fala dziobowa',
  hullSpeedLabel: 'Prędkość kadłuba',
  knotsUnit: 'kn',
  kmhUnit: 'km/h',
  mphUnit: 'mph',
  ratioLabel: 'S/L',
  froudeLabel: 'Fr',
  lwlLabelMetric: 'Długość linii wodnej',
  lwlLabelImperial: 'Długość linii wodnej',
  lwlUnitM: 'm',
  lwlUnitFt: 'ft',
  observedLabel: 'Prędkość z logu',
  observedHint: 'Zostaw 0, aby narysować falę teoretyczną. Wpisz log, by zobaczyć, czy nadal siedzisz w niecce.',
  stretchHint: 'Przeciągnij kadłub, aby rozciągnąć linię wodną',
  hullKindLabel: 'Kształt kadłuba',
  displacement: 'Wypornościowy',
  semi: 'Półwypornościowy',
  planing: 'Ślizgowy',
  boatsLabel: 'Przykładowe linie wodne',
  dinghy: 'Dinghy',
  daysailer: 'Daysailer',
  cruiser: 'Rejsowy',
  bluewater: 'Morski',
  workboat: 'Roboczy',
  bandBelow: 'Wciąż krótka fala',
  bandNear: 'Blisko bariery falowej',
  bandAt: 'Na fali dziobowej',
  bandAbove: 'Próbuje wspiąć się na falę',
  bandPlane: 'W ślizgu, powyżej prędkości kadłuba',
  planingNote:
    'Kadłub ślizgowy może zostawić tę falę za sobą. Prędkość kadłuba to punkt odniesienia, nie mur.',
  displacementNote:
    'Kadłub wypornościowy płaci drogo, gdy dogania własną rufę. Traktuj wynik jako praktyczny sufit, nie cel GPS.',
  semiNote:
    'Półwypornościowce mogą trochę przekroczyć klasyczny stosunek przy dużej mocy, kosztem ostrego wzrostu oporu.',
  waveLegend: 'Fala dziobowa',
  waterLegend: 'Linia wodna',
  markLegend: 'Prędkość kadłuba',
  faqTitle: 'Pytania o prędkość kadłuba',
  bibliographyTitle: 'Źródła',
};

const faq: HullSpeedLocaleContent['faq'] = [
  {
    question: 'Czym jest prędkość kadłuba jachtu żaglowego?',
    answer:
      'To prędkość, przy której kadłub wypornościowy idzie z falą dziobową mniej więcej tak długą jak własna linia wodna. W jednostkach nautycznych szacuje się ją jako 1.34 razy pierwiastek długości linii wodnej w stopach. To prędkość krytyczna, nie twarde fizyczne zatrzymanie.',
  },
  {
    question: 'Jak oblicza się prędkość kadłuba?',
    answer:
      'Przelicz linię wodną na stopy, weź pierwiastek i pomnóż przez 1.34, aby dostać węzły. Linia wodna 10 m to około 32.8 ft, więc około 7.7 kn. Ten sam punkt odpowiada liczbie Froude a bliskiej 0.40.',
  },
  {
    question: 'Czy prędkość kadłuba dotyczy ślizgaczy?',
    answer:
      'Wzór nadal opisuje falę, jaką kadłub zrobiłby w trybie wypornościowym. Ślizgacze i wiele półwypornościowców są zbudowane, by wejść na tę falę. Użyj liczby jako odniesienia i przeczytaj uwagę o kształcie.',
  },
  {
    question: 'Czy brać linię wodną, czy długość całkowitą?',
    answer:
      'Bierz długość na linii wodnej (LWL), zanurzoną długość, która naprawdę robi falę. Długość całkowita, bukszpryty i zwisy nie ustawiają długości fali. Mierz LWL w wodzie, nie LOA z broszury.',
  },
];

const howTo: HullSpeedLocaleContent['howTo'] = [
  {
    name: 'Rozciągnij linię wodną',
    text: 'Przeciągnij kadłub, przesuń szynę linii wodnej albo wybierz od dinghy po jednostkę roboczą. Prędkość kadłuba to 1.34 razy pierwiastek tej długości w stopach.',
  },
  {
    name: 'Wybierz kształt kadłuba',
    text: 'Wypornościowy, półwypornościowy albo ślizgowy zmienia kil i to, czy jednostka wyjdzie z własnej fali.',
  },
  {
    name: 'Odczytaj nieckę',
    text: 'Przy prędkości kadłuba fala dziobowa i rufowa siedzą o jedną linię wodną od siebie, a jacht siada w dolinie. To jest bariera.',
  },
  {
    name: 'Porównaj log',
    text: 'Wpisz prędkość względem wody. Krótsza fala znaczy, że pchanie jest jeszcze tanie. Dłuższa fala znaczy, że wchodzisz w nieckę.',
  },
];

const seo: HullSpeedLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Co naprawdę mówi prędkość kadłuba',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Kadłub wypornościowy pcha falę od dziobu i drugą od rufy. Gdy te grzbiety stoją mniej więcej o jedną linię wodną, jacht jedzie z własnym śladem. Dodatkowa moc wtedy głównie piętrzy wodę zamiast kupować prędkość. Ten stan żeglarze nazywają prędkością kadłuba.',
  },
  {
    type: 'paragraph',
    html: 'Kalkulator używa zwykłego amatorskiego stosunku 1.34 węzła na pierwiastek stóp linii wodnej. Smukłe, długie kadłuby mogą trochę wyżej, barki niżej. Traktuj wynik jako kreskę do nauki i porównaj prawdziwy log.',
  },
  {
    type: 'title',
    text: 'Przeliczone przykłady linii wodnej',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Linia wodna', 'Prędkość kadłuba', 'Typowa jednostka'],
    rows: [
      ['4.2 m / 13.8 ft', '5.0 kn', 'Dinghy'],
      ['6.5 m / 21.3 ft', '6.2 kn', 'Daysailer'],
      ['10 m / 32.8 ft', '7.7 kn', 'Jacht rejsowy'],
      ['13.5 m / 44.3 ft', '8.9 kn', 'Jacht morski'],
      ['18 m / 59.1 ft', '10.3 kn', 'Mała jednostka robocza'],
    ],
  },
  {
    type: 'title',
    text: 'Jak czytać falę dziobową',
    level: 2,
  },
  {
    type: 'list',
    items: [
      'Poniżej kreski fala jest krótka i pchanie jachtu jest jeszcze tanie.',
      'Blisko kreski fala dziobowa stromieje, a paliwo albo żagiel kupują mniej prędkości.',
      'Na kresce długość fali zgadza się z LWL. Kadłub wypornościowy stoi przy klasycznej barierze.',
      'Powyżej kadłub wypornościowy wspina się na ślad. Ślizgowy może już być uniesiony.',
    ],
  },
  {
    type: 'tip',
    title: 'Mierz LWL, nie LOA',
    html: 'Długość z broszury obejmuje zwisy. Fala dba o zanurzoną linię wodną. Jeśli masz tylko LOA, wyliczona prędkość kadłuba będzie zbyt optymistyczna.',
  },
  {
    type: 'title',
    text: 'Liczba Froude a w jednym zdaniu',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Prędkość kadłuba to wygodne opakowanie liczby Froude a bliskiej 0.40: prędkość dzielona przez pierwiastek z grawitacji razy długość. Dlatego dłuższe linie wodne są szybsze, nawet gdy kształt kadłuba się nie zmienia. Rozciąganie LWL czyści limit wyporności; dodawanie koni mechanicznych nie.',
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
    name: `Jak używać: ${title}`,
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
