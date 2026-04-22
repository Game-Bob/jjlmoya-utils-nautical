import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SpeedConverterUI, SpeedConverterLocaleContent } from '../index';

const slug = 'kalkulator-predkosci';
const title = 'Kalkulator Prędkości Morskiej i Skala Beauforta';
const description =
  'Natychmiastowe przeliczanie między węzłami, km/h, m/s i mph. Zawiera pełną tabelę Beauforta z opisami stanu morza i efektami wiatru.';

const beaufortData = [
  { force: 0, name: 'Cisza', sea: 'Morze gładkie jak lustro', effect: 'Dym wznosi się pionowo', kn: '0' },
  { force: 1, name: 'Powiew', sea: 'Małe zmarszczki przypominające rybią łuskę', effect: 'Kierunek wiatru wskazuje dym, ale nie wiatromierze', kn: '1-3' },
  { force: 2, name: 'Słaby powiew', sea: 'Małe falki, grzbiety nie załamują się', effect: 'Wiatr odczuwalny na twarzy, liście szeleszczą', kn: '4-6' },
  { force: 3, name: 'Łagodny wiatr', sea: 'Większe fale, gdzieniegdzie białe grzybiacze', effect: 'Liście i małe gałązki w ciągłym ruchu', kn: '7-10' },
  { force: 4, name: 'Umiarkowany wiatr', sea: 'Małe fale wydłużają się, liczne białe grzybiacze', effect: 'Wiatr podnosi kurz i luźne papiery', kn: '11-16' },
  { force: 5, name: 'Dość silny wiatr', sea: 'Średnie fale, wszędzie białe grzybiacze', effect: 'Małe drzewa zaczynają się kołysać', kn: '17-21' },
  { force: 6, name: 'Silny wiatr', sea: 'Duże fale, białe grzbiety piany', effect: 'Trudność w posługiwaniu się parasolem', kn: '22-27' },
  { force: 7, name: 'Bardzo silny wiatr', sea: 'Morze piętrzy się, piana układa się w pasma', effect: 'Trudność w marszu pod wiatr', kn: '28-33' },
  { force: 8, name: 'Sztorm', sea: 'Wysokie fale, pył wodny ogranicza widoczność', effect: 'Bardzo duża trudność w marszu', kn: '34-40' },
  { force: 9, name: 'Silny sztorm', sea: 'Bardzo wysokie fale, morze staje się białe od piany', effect: 'Możliwe uszkodzenia konstrukcji budynków', kn: '41-47' },
  { force: 10, name: 'Bardzo silny sztorm', sea: 'Wyjątkowo wysokie fale, całe morze białe', effect: 'Drzewa z korzeniami wyrywane z ziemi, znaczne szkody', kn: '48-55' },
  { force: 11, name: 'Gwałtowny sztorm', sea: 'Olbrzymie fale, piana pokrywa całe morze', effect: 'Rozległe zniszczenia', kn: '56-63' },
  { force: 12, name: 'Huragan', sea: 'Powietrze wypełnione pianą i pyłem wodnym', effect: 'Katastrofalne zniszczenia', kn: '64+' },
];

const ui: SpeedConverterUI = {
  knLabel: 'Węzły (kt)',
  kmhLabel: 'Kilometry/godzinę',
  msLabel: 'Metry/sekundę',
  mphLabel: 'Mile/godzinę',
  beaufortTitle: 'Skala Beauforta',
  forceLabel: 'Stopień',
  descriptionLabel: 'Opis',
  knotsLabel: 'Węzły',
  effectLabel: 'Efekt Wizualny',
  seaStateLabel: 'Stan Morza',
  windEffectLabel: 'Efekt na Lądzie',
  faqTitle: 'Często Zadawane Pytania': 'Bibliografia',
  beaufortDataJson: JSON.stringify(beaufortData),
};

const faq: SpeedConverterLocaleContent['faq'] = [
  {
    question: 'Dlaczego prędkość statku mierzy się w węzłach?',
    answer: 'Węzeł to jednostka prędkości równa jednej mili morskiej na godzinę. Jego pochodzenie jest historyczne: żeglarze mierzyli prędkość statku, wrzucając do morza kawałek drewna przywiązany do liny z węzłami w regularnych odstępach, licząc, ile węzłów przeszło przez ich palce w określonym czasie. Dziś pozostaje ona międzynarodową jednostką standardową w nawigacji morskiej i lotnictwie.',
  },
  {
    question: 'Co to jest skala Beauforta i jak jest używana w nawigacji?',
    answer: 'Skala Beauforta to empiryczna skala wiążąca prędkość wiatru z obserwowanymi efektami na morzu i lądzie. Opracowana przez brytyjskiego admirała Francisa Beauforta w 1805 roku, obejmuje zakres od 0 (absolutna cisza) do 12 (huragan). Żeglarze używają jej do szacowania intensywności wiatru bez przyrządów, obserwując stan morza.',
  },
  {
    question: 'Jaka jest różnica między SOG a STW w nawigacji?',
    answer: 'SOG (Speed Over Ground) to rzeczywista prędkość jednostki względem dna morskiego, mierzona przez GPS. STW (Speed Through Water) lub prędkość logu to prędkość jednostki względem otaczającej wody. Różnica między nimi odzwierciedla wpływ prądów morskich. SOG służy do planowania czasu przybycia i obliczania paliwa; STW służy do obliczania dryfu.',
  },
  {
    question: 'Ile km/h to jeden węzeł?',
    answer: 'Jeden węzeł to dokładnie 1,852 kilometra na godzinę, co odpowiada długości jednej mili morskiej (zdefiniowanej jako jedna minuta kątowa południka ziemskiego). Zatem 10 węzłów to 18,52 km/h, 20 węzłów to 37,04 km/h, a 30 węzłów to 55,56 km/h.',
  },
];

const howTo: SpeedConverterLocaleContent['howTo'] = [
  {
    name: 'Wpisz prędkość w dowolnej jednostce',
    text: 'Wpisz wartość prędkości w odpowiednim polu (węzły, km/h, m/s lub mph), a wszystkie pozostałe pola zostaną automatycznie zaktualizowane.',
  },
  {
    name: 'Sprawdź odpowiedni stopień Beauforta',
    text: 'Karta Beauforta pokazuje w czasie rzeczywistym siłę wiatru odpowiadającą wprowadzonej prędkości, wraz ze stanem morza i efektami na lądzie.',
  },
  {
    name: 'Kliknij wiersz w tabeli Beauforta',
    text: 'Możesz bezpośrednio wybrać dowolny stopień Beauforta w poniższej tabeli, aby zobaczyć jego minimalną prędkość we wszystkich formatach.',
  },
  {
    name: 'Użyj wyników do planowania nawigacji',
    text: 'Połącz informacje o prędkości i wietrze, aby zdecydować, czy warunki są odpowiednie dla Twojej jednostki i zaplanowanego rejsu.',
  },
];

const seo: SpeedConverterLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Przewodnik po Kalkulatorze Prędkości Morskiej i Skali Beauforta',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Prędkość jest fundamentalnym parametrem w nawigacji morskiej. Wiedza o tym, ile węzłów płynie Twój jacht, jak to się przekłada na kilometry na godzinę przy planowaniu rejsu lub jaki stopień Beauforta reprezentuje wiatr, którego doświadczasz, to obliczenia, które każdy żeglarz musi opanować.',
  },
  {
    type: 'paragraph',
    html: 'Ten morski przelicznik prędkości pozwala na natychmiastową zamianę między węzłami, km/h, m/s i mph, automatycznie identyfikując odpowiedni stopień Beauforta wraz z opisem stanu morza i obserwowalnymi efektami wiatru.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Jednostka standardowa', value: 'Węzły (kt)', icon: 'mdi:speedometer' },
      { label: 'Skala wiatru', value: 'Beaufort (0-12)', icon: 'mdi:weather-windy' },
      { label: 'Kluczowe przeliczenie', value: '1 kt = 1,85 km/h', icon: 'mdi:swap-horizontal' },
    ],
  },
  {
    type: 'title',
    text: 'Dlaczego prędkość mierzy się w Węzłach?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>Węzeł (kt)</strong> jest oficjalną jednostką prędkości w nawigacji morskiej i powietrznej. Jego definicja jest precyzyjna: jeden węzeł równa się jednej mili morskiej na godzinę, gdzie mila morska (1852 m) jest zdefiniowana jako jedna minuta kątowa południka ziemskiego. Ta bezpośrednia relacja z geometrią Ziemi sprawia, że węzeł jest szczególnie praktyczną jednostką w nawigacji, pozwalającą na bezpośrednie szacowanie odległości na mapie morskiej bez żadnych przeliczeń.',
  },
  {
    type: 'paragraph',
    html: 'Historycznie żeglarze mierzyli prędkość jednostki za pomocą <em>logu</em>: trójkątnej klocka drewna wrzucanego do morza, przywiązanego do liny z węzłami co 14,4 metra (proporcjonalny ułamek mili morskiej w 30 sekundach). Liczenie węzłów przechodzących przez ich palce w tym czasie podawało prędkość jednostki, dając początek terminowi, którego używamy dzisiaj.',
  },
  {
    type: 'title',
    text: 'Skala Beauforta: Oko Żeglarza',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>Skala Beauforta</strong> została opracowana w 1805 roku przez brytyjskiego admirała Sir Francisa Beauforta jako empiryczna metoda klasyfikacji siły wiatru na podstawie obserwowalnych efektów, bez użycia przyrządów. Pierwotnie pomyślana do szacowania, jak dużą powierzchnię żagli może nieść statek, jest dziś uniwersalnym punktem odniesienia w meteorologii morskiej, przyjętym przez Światową Organizację Meteorologiczną (WMO).',
  },
  {
    type: 'paragraph',
    html: 'Skala obejmuje zakres od <strong>stopnia 0</strong> (absolutna cisza, morze jak lustro) do <strong>stopnia 12</strong> (huragan z falami powyżej 14 metrów i powietrzem wypełnionym pianą i pyłem wodnym). Dla żeglarza rekreacyjnego krytycznymi limitami są zazwyczaj stopień 6 (silny wiatr, 22-27 węzłów) dla małych jednostek oraz stopień 7-8 dla jachtów pełnomorskich.',
  },
  {
    type: 'table',
    headers: ['Stopień Beauforta', 'Opis', 'Warunki na morzu'],
    rows: [
      ['0', 'Cisza', 'Morze gładkie jak lustro'],
      ['3', 'Łagodny wiatr', 'Gdzieniegdzie białe grzybiacze, grzbiety zaczynają się załamywać'],
      ['6', 'Silny wiatr', 'Duże fale, białe grzbiety piany, możliwy pył wodny'],
      ['9', 'Silny sztorm', 'Bardzo wysokie fale, widoczność ograniczona przez pianę i pył wodny'],
      ['12', 'Huragan', 'Powietrze całkowicie wypełnione pianą, morze zupełnie białe'],
    ],
  },
  {
    type: 'title',
    text: 'Glosariusz Prędkości Morskiej',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: 'Węzeł (kt)', definition: 'Jednostka prędkości równa jednej mili morskiej na godzinę (1852 m/h). Międzynarodowy standard w nawigacji morskiej i powietrznej.' },
      { term: 'SOG (Speed Over Ground)', definition: 'Rzeczywista prędkość jednostki względem dna, mierzona przez GPS. Odzwierciedla wpływ prądów morskich na prędkość jachtu.' },
      { term: 'Log Speed (STW)', definition: 'Prędkość jednostki względem otaczającej wody, mierzona przez log. Nie uwzględnia wpływu prądów; kluczowa do obliczania dryfu.' },
      { term: 'Wiatr pozorny', definition: 'Wiatr odczuwalny przez załogę na pokładzie, będący sumą wektorową wiatru rzeczywistego i wiatru własnego powstałego z ruchu jednostki. Zawsze różni się od wiatru rzeczywistego siłą i kierunkiem.' },
    ],
  },
  {
    type: 'title',
    text: 'Szybkie Wzory Przeliczania',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Aby ręcznie przeliczyć prędkość, gdy nie masz dostępu do cyfrowego konwertera, użyj tych szybkich przybliżeń, które każdy żeglarz powinien znać na pamięć:',
  },
  {
    type: 'list',
    items: [
      '<strong>Węzły na km/h:</strong> Pomnóż węzły przez 1,852. Szybkie przybliżenie: węzły x 2, minus 8%%. Na przykład, 10 kt ≈ 20 - 1,6 = 18,4 km/h.',
      '<strong>Węzły na mph:</strong> Pomnóż węzły przez 1,15. Przybliżenie: węzły + 15%%. Na przykład, 20 kt ≈ 23 mph.',
      '<strong>Węzły na m/s:</strong> Pomnóż węzły przez 0,514. Szybkie przybliżenie: podziel węzły przez 2. Na przykład, 10 kt ≈ 5 m/s (dokładnie: 5,14 m/s).',
    ],
  },
  {
    type: 'tip',
    title: 'Bezpieczeństwo i Klimatologia',
    html: 'Przed wypłynięciem zawsze sprawdzaj morską prognozę pogody. Beaufort 4-5 jest do opanowania dla większości jednostek rekreacyjnych; od stopnia 6 wzwyż poważnie rozważ odłożenie wypłynięcia, jeśli nie masz wystarczającego doświadczenia lub Twój jacht nie jest przygotowany na takie warunki.',
  },
  {
    type: 'title',
    text: 'Porównanie Wyposażenia',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Anemometr cyfrowy',
        description: 'Elektroniczny przyrząd do precyzyjnego pomiaru prędkości wiatru.',
        icon: 'mdi:speedometer',
        points: [
          'Dokładność ±2%% w normalnych warunkach',
          'Wymaga zasilania elektrycznego lub baterii',
          'Może zawieść w ekstremalnych warunkach',
          'Natychmiastowy odczyt i rejestracja danych',
        ],
      },
      {
        title: 'Obserwacja Beauforta',
        description: 'Wizualne szacowanie siły wiatru na podstawie obserwowalnych efektów na morzu i lądzie.',
        icon: 'mdi:eye-outline',
        highlight: true,
        points: [
          'Nie wymaga żadnych przyrządów',
          'Dostępna w każdych warunkach',
          'Wystarczająca dokładność dla decyzji dotyczących bezpieczeństwa',
          'Podstawowa umiejętność doświadczonego nawigatora',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Nawigacja i Planowanie Rejsu',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Podczas planowania rejsu prędkość jednostki określa przewidywany czas przybycia (ETA) oraz zużycie paliwa w przypadku jednostek motorowych. Dla jachtu żaglowego prędkość zależy również od siły i kierunku wiatru: znajomość prognozowanego stopnia Beauforta pozwala przewidzieć, czy będziesz mógł płynąć pod żaglami, czy będziesz potrzebować silnika.',
  },
  {
    type: 'paragraph',
    html: 'W regatach przeliczanie węzłów na metry na sekundę jest szczególnie przydatne do obliczania VMG (Velocity Made Good) i analizowania polarnych żagli. Meteorolodzy i numeryczne modele prognoz zazwyczaj podają wiatr w m/s lub km/h, więc przeliczanie na węzły jest rutynowym krokiem w planowaniu taktycznym.',
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
    name: `Jak używać: ${title}`,
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
