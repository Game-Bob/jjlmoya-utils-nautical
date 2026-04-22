import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { NauticalConverterUI, NauticalConverterLocaleContent } from '../index';

const slug = 'konwerter-jednostek';
const title = 'Konwerter Jednostek Morskich';
const description =
  'Konwertuj mile morskie, węzły, sążnie i ciśnienie atmosferyczne. Zawiera interaktywną skalę Beauforta dla prędkości wiatru.';

const ui: NauticalConverterUI = {
  distanceCategoryLabel: 'Odległość',
  speedCategoryLabel: 'Prędkość',
  depthCategoryLabel: 'Głębokość',
  pressureCategoryLabel: 'Ciśnienie',
  nmLabel: 'Mila Morska (nm)',
  kmLabel: 'Kilometr (km)',
  miLabel: 'Mila Lądowa (mi)',
  cableLabel: 'Kabel (Cable)',
  knLabel: 'Węzeł (kn)',
  kmhLabel: 'km/h',
  msLabel: 'm/s',
  mphLabel: 'mph',
  brozaLabel: 'Sążeń',
  mLabel: 'Metr (m)',
  ftLabel: 'Stopa (ft)',
  mbarLabel: 'Milibar (mbar)',
  mmhgLabel: 'mmHg',
  inhgLabel: 'inHg',
  atmLabel: 'Atmosfera (atm)',
  windSeaLabel: 'Stan morza',
  forceLabel: 'Siła',
  effectLabel: 'Efekt',
  copyLabel: 'Kopiuj wartość',
  faqTitle: 'Często Zadawane Pytania': 'Bibliografia',
};

const faq: NauticalConverterLocaleContent['faq'] = [
  {
    question: 'Ile kilometrów ma mila morska?',
    answer: 'Jedna mila morska to dokładnie 1,852 kilometra, czyli 1852 metry. Miara ta odpowiada jednej minucie kątowej szerokości geograficznej na powierzchni Ziemi.',
  },
  {
    question: 'Jaka jest różnica między węzłem a kilometrem na godzinę?',
    answer: 'Jeden węzeł to 1,852 km/h, ponieważ węzeł to jedna mila morska na godzinę. Aby przeliczyć węzły na km/h, wystarczy pomnożyć przez 1,852.',
  },
  {
    question: 'Dlaczego na morzu używa się mil morskich zamiast kilometrów?',
    answer: 'Ponieważ mila morska odpowiada jednej minucie kątowej szerokości geograficznej, co ogromnie upraszcza obliczenia nawigacyjne z mapą i kompasem. Zmiana o jedną minutę kątową szerokości geograficznej odpowiada dokładnie jednej mili morskiej.',
  },
  {
    question: 'Co to jest skala Beauforta?',
    answer: 'Jest to skala empiryczna, która wiąże prędkość wiatru z obserwowalnymi efektami na morzu. Zakres wynosi od 0 (cisza) do 12 (huragan) i jest niezbędna w nawigacji przybrzeżnej i oceanicznej.',
  },
  {
    question: 'Jaka jednostka ciśnienia jest używana w meteorologii morskiej?',
    answer: 'Meteorologia morska posługuje się głównie milibarem (mbar) lub jego odpowiednikiem – hektopaskalem (hPa). Normalne ciśnienie atmosferyczne na poziomie morza wynosi 1013,25 mbar.',
  },
  {
    question: 'Ile stóp ma sążeń?',
    answer: 'Jeden sążeń to dokładnie 6 stóp, czyli 1,8288 metra. Jest używany głównie w krajach anglojęzycznych do określania głębokości na starszych mapach morskich.',
  },
];

const howTo: NauticalConverterLocaleContent['howTo'] = [
  {
    name: 'Wybierz kategorię konwersji',
    text: 'Kliknij jedną z czterech zakładek: Odległość, Prędkość, Głębokość lub Ciśnienie, w zależności od wielkości, którą chcesz przeliczyć.',
  },
  {
    name: 'Wprowadź wartość w dowolnym polu',
    text: 'Wpisz liczbę w jednostce, którą znasz. Wszystkie pozostałe jednostki zostaną automatycznie zaktualizowane w czasie rzeczywistym.',
  },
  {
    name: 'Skorzystaj ze skali Beauforta (prędkość)',
    text: 'Gdy wprowadzisz prędkość w zakładce Prędkość, pojawi się karta pokazująca odpowiednią siłę Beauforta i przewidywany stan morza.',
  },
  {
    name: 'Skopiuj wynik',
    text: 'Użyj przycisku kopiowania obok dowolnego pola, aby skopiować wartość do schowka.',
  },
];

const seo: NauticalConverterLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Znaczenie precyzji w jednostkach morskich',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Żegluga po morzu wymaga własnego języka – systemu miar doskonalonego przez stulecia morskich eksploracji. Jednostki morskie nie są historycznym dziwactwem, lecz matematycznie spójnymi narzędziami dostosowanymi do geometrii Ziemi i praktycznych potrzeb nawigatora.',
  },
  {
    type: 'paragraph',
    html: 'W przeciwieństwie do lądu, gdzie błąd kilku metrów rzadko ma poważne konsekwencje, na morzu błędna konwersja może oznaczać różnicę między bezpiecznym kotwiczeniem a wejściem na mieliznę. Precyzja jednostek nie jest kwestią akademicką: to jest nawigacja.',
  },
  {
    type: 'paragraph',
    html: 'Gdy oddalamy się od brzegu, brak wizualnych punktów odniesienia sprawia, że obliczona pozycja jest jedyną rzeczywistością, na podstawie której możemy działać. Umiejętność dokładnego przeliczania mil morskich, kilometrów, węzłów i metrów nie jest dla odpowiedzialnego nawigatora opcjonalna.',
  },
  {
    type: 'title',
    text: 'Dlaczego używamy mil morskich zamiast kilometrów?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Odpowiedź leży w samym kształcie Ziemi. Jedna <strong>mila morska</strong> odpowiada dokładnie jednej minucie kątowej szerokości geograficznej na powierzchni Ziemi, czyli 1852 metrom. Ta bezpośrednia odpowiedniość między pomiarem kątowym a odległością liniową jest kluczem do jej powszechnego stosowania w nawigacji.',
  },
  {
    type: 'paragraph',
    html: 'Dzięki zastosowaniu tej jednostki, zmiana o jedną minutę kątową szerokości geograficznej na mapie morskiej zawsze odpowiada dokładnie jednej przebytej mili morskiej. To ogromnie upraszcza obliczenia pozycji, prędkości i czasu przybycia bez konieczności stosowania dodatkowych współczynników konwersji.',
  },
  {
    type: 'title',
    text: 'Prędkość na morzu: Węzeł',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>Węzeł</strong> to jednostka prędkości odpowiadająca jednej mili morskiej na godzinę. Nazwa pochodzi od starożytnej techniki pomiaru prędkości poprzez wyrzucanie do wody kawałka drewna przywiązanego do liny z zawiązanymi w regularnych odstępach węzłami i liczenie, ile węzłów przeszło przez palce w określonym czasie.',
  },
  {
    type: 'paragraph',
    html: 'Dziś, choć używamy satelitów GPS i wyrafinowanych systemów elektronicznych, węzeł pozostaje standardową jednostką w międzynarodowym lotnictwie i żegludze morskiej. Jeden węzeł to 1,852 km/h lub 0,514 m/s.',
  },
  {
    type: 'title',
    text: 'Głębokość i kotwiczenie: Sążnie, Metry i Stopy',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'W świecie morskim głębokość nie jest tylko statystyką – to różnica między bezpiecznym kotwicowiskiem a wejściem na dno. Historycznie, <strong>sążeń</strong> (1,8288 metra lub dokładnie 6 stóp) był dominującą jednostką miary głębokości w świecie anglojęzycznym.',
  },
  {
    type: 'paragraph',
    html: 'Jednak globalizacja i technologia wprowadziły stałe użycie metrów na większości nowoczesnych map i echosondach. Nowoczesny nawigator musi sprawnie poruszać się między sążniami, metrami i stopami, zwłaszcza podczas korzystania ze starszych map morskich lub instrumentów skalibrowanych w jednostkach imperialnych.',
  },
  {
    type: 'title',
    text: 'Meteorologia i ciśnienie atmosferyczne',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Dla skippera barometr jest wyrocznią pogody. Ciśnienie atmosferyczne, mierzone w <strong>milibarach</strong> (mbar), jest najbardziej wiarygodnym wskaźnikiem nadchodzących zmian pogodowych. Gwałtowny spadek ciśnienia zwiastuje nadejście silnych wiatrów i złej pogody.',
  },
  {
    type: 'paragraph',
    html: 'Zrozumienie zmian ciśnienia jest kluczowe dla każdego nawigatora. Normalne ciśnienie atmosferyczne na poziomie morza wynosi 1013,25 mbar (jedna atmosfera). Wyższe wartości wskazują na stabilną pogodę, podczas gdy niższe (zwłaszcza szybko spadające) sygnalizują zbliżanie się potencjalnie niebezpiecznych układów niskiego ciśnienia.',
  },
  {
    type: 'title',
    text: 'Skale wiatru i morza: Od Beauforta do Douglasa',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Prędkość wiatru w węzłach to liczba, która nabiera znaczenia w powiązaniu ze <strong>skalą Beauforta</strong>. Opracowana przez brytyjskiego admirała Francisa Beauforta w 1805 roku, ta empiryczka skala wiąże prędkość wiatru z obserwowalnymi efektami zarówno na powierzchni morza, jak i na lądzie.',
  },
  {
    type: 'list',
    items: [
      '<strong>Siła 0-3 (0-10 kn):</strong> Spokojne warunki żeglarskie, idealne do nauki lub rejsów rodzinnych.',
      '<strong>Siła 4-5 (11-21 kn):</strong> Idealny wiatr żeglarski dla jachtów, z umiarkowanymi falami i białymi grzywaczami.',
      '<strong>Siła 6-7 (22-33 kn):</strong> Silny wiatr do bardzo silnego. Zalecane doświadczenie i refowanie.',
      '<strong>Siła 8+ (powyżej 34 kn):</strong> Sztorm. Tylko dla doświadczonych nawigatorów na odpowiednich jednostkach.',
    ],
  },
  {
    type: 'paragraph',
    html: 'Podobnie skala Douglasa klasyfikuje stan morza w stopniach od 0 (gładkie jak lustro) do 9 (fenomenalne), co pozwala nawigującemu przewidywać warunki za horyzontem na podstawie komunikatów pogodowych.',
  },
  {
    type: 'tip',
    title: 'Wskazówka Bezpieczeństwa',
    html: 'Używając tego konwertera do planowania rejsu, zawsze pamiętaj, że rzeczywiste warunki mogą odbiegać od prognoz. Konsultuj oficjalne prognozy pogody i nigdy nie lekceważ zdolności morza do gwałtownych zmian.',
  },
  {
    type: 'title',
    text: 'Planowanie offline i mobilność',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Narzędzie zostało zaprojektowane tak, aby po załadowaniu w przeglądarce działało bez połączenia z Internetem, co czyni je idealnym do użytku na pokładzie, gdzie łączność może być ograniczona. Wszystkie konwersje są obliczane lokalnie na urządzeniu, bez przesyłania jakichkolwiek danych na serwer.',
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
    name: `Jak używać: ${title}`,
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
