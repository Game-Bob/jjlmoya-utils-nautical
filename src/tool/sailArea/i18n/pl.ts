import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SailAreaUI, SailAreaLocaleContent } from '../index';

const slug = 'kalkulator-powierzchni-zagli';
const title = 'Kalkulator Powierzchni Żagli i Współczynnika SA/D';
const description =
  'Oblicz całkowitą powierzchnię żagli i współczynnik powierzchni żagli do wyporności Twojego jachtu. Analiza osiągów morskich na podstawie wymiarów I, J, P i E.';

const ui: SailAreaUI = {
  hullSectionLabel: 'Dane kadłuba',
  totalMassLabel: 'Wyporność',
  rigSystemLabel: 'Ożaglowanie',
  intendedUseLabel: 'Przeznaczenie',
  rigGeometryLabel: 'Geometria takielunku',
  sailConfigLabel: 'Typ ożaglowania',
  genoaOverlapLabel: 'Nakładanie genui',
  foqueLabel: 'Fok',
  genovaLabel: 'Genua',
  sadRatioLabel: 'Współczynnik SA/D',
  totalAreaLabel: 'Całkowita powierzchnia',
  performanceLabel: 'Osiągi',
  sloopLabel: 'Sloop (jeden maszt)',
  cutterLabel: 'Kuter (podwójny sztaksiel)',
  ketchLabel: 'Kecz (dwa maszty)',
  cruiserLabel: 'Turystyczny',
  performanceTypeLabel: 'Typ osiągów',
  racerLabel: 'Regatowy',
  exportPdfLabel: 'GENERUJ RAPORT TECHNICZNY',
  faqTitle: 'Często Zadawane Pytania',
  bibliographyTitle: 'Bibliografia',
};

const faq: SailAreaLocaleContent['faq'] = [
  {
    question: 'Dlaczego mój jacht jest wolny przy słabym wietrze?',
    answer: 'Prawdopodobnie Twój współczynnik SA/D jest poniżej 15, co wskazuje na jacht o dużej wyporności z małą powierzchnią żagli w stosunku do jego wagi. Takie jachty potrzebują wiatru powyżej 12 węzłów, aby nabrać prędkości.',
  },
  {
    question: 'Czy powinienem opróżnić zbiorniki wody, aby poprawić osiągi?',
    answer: 'Tak, odciążenie jachtu bezpośrednio poprawia współczynnik SA/D, ponieważ zmniejsza się rzeczywista wyporność. Opróżnienie zbiorników wody i paliwa może zmniejszyć wyporność o kilkaset kilogramów i znacząco podnieść współczynnik.',
  },
  {
    question: 'Co to jest Roach (garb) na żaglu?',
    answer: 'Roach to wypukła krzywizna liku tylnego grota. Zapewnia ona dodatkową powierzchnię żagla poza podstawowym trójkątem geometrycznym zdefiniowanym przez P i E. Jachty regatowe mają agresywne garby ze sztywnymi listwami.',
  },
  {
    question: 'Jak zmierzyć rzeczywistą wyporność mojego jachtu?',
    answer: 'Najbardziej wiarygodną metodą jest użycie wyporności załadowanego jachtu (ze wszystkimi zapasami, wodą, paliwem i załogą na pokładzie). Wyporność jachtu pustego z instrukcji budowniczego jest zazwyczaj optymistyczna. Używaj rzeczywistej wyporności w normalnych warunkach żeglugi.',
  },
  {
    question: 'Gdzie mogę znaleźć wymiary I, J, P i E dla mojego jachtu?',
    answer: 'Znajdziesz je w instrukcji obsługi, w certyfikatach pomiarowych ORC lub IRC, lub w dokumentacji certyfikatu klasy. Możesz także zmierzyć je bezpośrednio na jachcie za pomocą miarki lub kontaktując się ze stocznią.',
  },
];

const howTo: SailAreaLocaleContent['howTo'] = [
  {
    name: 'Wybierz typ ożaglowania',
    text: 'Wybierz pomiędzy Sloop (jeden maszt), Kuter (fok i sztaksiel) lub Kecz (maszt bezana). Determinuje to sposób obliczania całkowitej powierzchni żagli.',
  },
  {
    name: 'Wprowadź wyporność',
    text: 'Użyj rzeczywistej wyporności Twojego jachtu w kg lub funtach pod obciążeniem. Ta liczba jest kluczowa dla obliczenia współczynnika SA/D.',
  },
  {
    name: 'Zmierz geometrię takielunku',
    text: 'Wprowadź wymiary P (wysokość masztu), E (bom), I (wysokość przedniego trójkąta) i J (podstawa przedniego trójkąta) w metrach lub stopach.',
  },
  {
    name: 'Dostosuj nakładanie genui',
    text: 'Przesuń suwak, aby wskazać nakładanie genui: 100% to fok nienakładający się, 130% to standardowa genua, 155% to genua o dużym nakładaniu.',
  },
  {
    name: 'Zinterpretuj współczynnik SA/D',
    text: 'Współczynnik pomiędzy 16 a 20 to zrównoważony jacht turystyczny. Powyżej 20 jacht będzie bardzo szybki przy słabym wietrze, ale wymagający w trudniejszych warunkach.',
  },
];

const bibliography: SailAreaLocaleContent['bibliography'] = [
  {
    name: 'Society of Naval Architects and Marine Engineers - SNAME',
    url: 'https://www.sname.org/',
  },
  {
    name: 'ORC - Offshore Racing Congress',
    url: 'https://orc.org/',
  },
  {
    name: 'Elvstrom Sailmakers - Sail Manual',
    url: 'https://www.elvstromsails.com/',
  },
];

const seo: SailAreaLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Kalkulator Powierzchni Żagli: Kompletny Przewodnik po Osiągach i Współczynnikach',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Powierzchnia żagli to silnik aerodynamiczny każdej jednostki żaglowej. Określa ona, jak dużo energii wiatru jacht może przechwycić i, w połączeniu z jego wypornością, definiuje jego charakter: czy będzie to wolny jacht turystyczny, czy szybka maszyna regatowa. Prawidłowe obliczenie tej wartości to pierwszy krok do zrozumienia zachowania każdego jachtu żaglowego.',
  },
  {
    type: 'paragraph',
    html: 'Żeglarstwo to nieustanny taniec pomiędzy siłą wiatru napierającego na żagle a oporem wody stawiającym opór kadłubowi. <strong>Współczynnik Powierzchnia Żagli / Wyporność (SA/D)</strong> ujmuje tę zależność w jednej liczbie, która pozwala porównywać jachty o dowolnej długości i wyporności na równych zasadach.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Idealny współczynnik Cruiser', value: '15-18', icon: 'mdi:anchor' },
      { label: 'Jachty regatowe', value: '+24', icon: 'mdi:sailing' },
      { label: 'Margines błędu', value: '5-10%', icon: 'mdi:alert-circle-outline' },
    ],
    columns: 3,
  },
  {
    type: 'title',
    text: 'Do czego służy współczynnik SA/D?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Współczynnik <strong>Powierzchnia Żagli / Wyporność</strong> to narzędzie diagnostyczne, które pozwala przewidzieć zachowanie jachtu przed wypłynięciem. Niski współczynnik wskazuje na solidny i bezpieczny, ale wolny jacht przy słabych wiatrach; wysoki współczynnik oferuje prędkość i poczucie lotu, ale wymaga większych umiejętności załogi, gdy wiatr przybiera na sile. Żaden nie jest lepszy od drugiego: wszystko zależy od rodzaju planowanej żeglugi.',
  },
  {
    type: 'title',
    text: 'Tabela referencyjna współczynnika SA/D',
    level: 4,
  },
  {
    type: 'table',
    headers: ['Współczynnik', 'Typ jachtu', 'Zachowanie na morzu'],
    rows: [
      ['< 14', 'Duża wyporność / Jednostka towarowa', 'Stabilny, wolny, potrzebuje stałego wiatru'],
      ['14 - 16.5', 'Jacht pełnomorski', 'Zrównoważony, komfortowy, dobry na wiatr'],
      ['16.5 - 20', 'Standardowy jacht turystyczny', 'Szybki przy bryzie, łatwy w prowadzeniu, wszechstronny'],
      ['20 - 25', 'Performance Cruiser / Sport', 'Szybki, wymagający, ekscytujący przy słabym wietrze'],
      ['> 25', 'Regatowy / Sport ekstremalny', 'Bardzo szybki, nerwowy, wymaga doświadczonej załogi'],
    ],
  },
  {
    type: 'title',
    text: 'Techniczny glosariusz wymiarów (I, J, P, E)',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'I (Wysokość przedniego trójkąta)',
        definition: 'Pionowa odległość od pokładu do punktu, w którym fał foka jest zamocowany na maszcie. Definiuje wysokość przedniego trójkąta.',
      },
      {
        term: 'J (Podstawa przedniego trójkąta)',
        definition: 'Pozioma odległość od masztu do stewy (dziobu jachtu). Definiuje podstawę przedniego trójkąta, na którym zamocowane są sztaksle.',
      },
      {
        term: 'P (Wysokość masztu)',
        definition: 'Odległość od bomu do rolki fału grota na szczycie masztu. Definiuje wysokość grota.',
      },
      {
        term: 'E (Długość bomu)',
        definition: 'Odległość od masztu do rogu szotowego grota na końcu bomu. Definiuje podstawę grota.',
      },
    ],
  },
  {
    type: 'title',
    text: 'Obliczenia na egzaminy żeglarskie (Yachtmaster)',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Obliczanie powierzchni żagli i współczynnika SA/D stanowi część programu egzaminów na stopnie <strong>Yachtmaster</strong> i skipera przybrzeżnego. Zrozumienie geometrii takielunku i jej związku z wypornością jest niezbędne do podejmowania decyzji dotyczących bezpieczeństwa na morzu: refowania na czas, wyboru odpowiedniej genui lub szacowania zachowania jachtu przed nadejściem szkwału.',
  },
  {
    type: 'tip',
    title: 'Żagle kursowe i bezpieczeństwo',
    html: 'W żegludze oceanicznej lub długodystansowej, współczynnik SA/D pomiędzy 16 a 18 oferuje najlepszą równowagę pomiędzy prędkością a bezpieczeństwem. Jachty ze współczynnikiem powyżej 22 mogą wymagać refowania przy wietrze o sile zaledwie 4-5 w skali Beauforta.',
  },
  {
    type: 'title',
    text: 'Jak nakładanie genui wpływa na osiągi?',
    level: 4,
  },
  {
    type: 'paragraph',
    html: '<strong>Genua</strong> to największy sztaksiel, którego róg szotowy znajduje się za masztem, "nakładając się" na grot. Procent nakładania wskazuje, o ile dłuższa jest prostopadła do liku przedniego (LP) w porównaniu do odległości J. Genua 150% ma LP równe 150% wymiaru J, zapewniając znacznie większą powierzchnię żagla niż zwykły fok nienakładający się.',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Dacron (Turystyczny)',
        description: 'Klasyczny materiał na żagle turystyczne. Solidny i łatwy w konserwacji.',
        points: [
          'Wysoka trwałość i odporność na promieniowanie UV',
          'Niskie koszty konserwacji',
          'Większa waga i rozciąganie pod obciążeniem',
          'Idealny do żeglugi przybrzeżnej i pełnomorskiej',
        ],
      },
      {
        title: 'Laminaty (Regatowy)',
        description: 'Zaawansowane technicznie materiały, takie jak Kevlar, Spectra lub Dyneema.',
        highlight: true,
        points: [
          'Minimalne rozciąganie: maksymalna wydajność aerodynamiczna',
          'Znacznie lżejsze niż Dacron',
          'Wyższy koszt i krótsza żywotność',
          'Niezbędne na jachtach o współczynniku SA/D > 22',
        ],
      },
    ],
    columns: 2,
  },
  {
    type: 'title',
    text: 'Fizyka żeglowania i stabilność',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Powierzchnia żagli generuje siłę napędową, ale także <strong>moment przechylający</strong>, który dąży do przechylenia jachtu. Stabilność mierzona jest momentem prostującym, który jacht może przeciwstawić tej sile przechylającej. Wysoki współczynnik SA/D w jachcie z małym balastem może być niebezpieczny, podczas gdy ten sam współczynnik w jachcie z głębokim i ciężkim kilem jest całkowicie kontrolowany.',
  },
  {
    type: 'paragraph',
    html: 'Aby obliczyć rzeczywistą dostępną moc, architekci okrętowi często używają <strong>współczynnika wyporności do długości (DLR)</strong> w połączeniu z SA/D. Oba współczynniki razem precyzyjnie opisują, czy jacht jest morskim holownikiem, czy regatowym ślizgaczem.',
  },
  {
    type: 'tip',
    title: 'Stabilność i bezpieczeństwo',
    html: 'Nigdy nie oceniaj SA/D w izolacji. Jacht żaglowy o współczynniku 22 i kącie prostującym 90 stopni jest znacznie bezpieczniejszy niż ten o współczynniku 18 i kącie 60 stopni. Zawsze sprawdzaj krzywą stabilności swojego jachtu.',
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
    name: `Jak używać: ${title}`,
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
