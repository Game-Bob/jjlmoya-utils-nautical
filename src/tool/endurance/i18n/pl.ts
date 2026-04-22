import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EnduranceUI, EnduranceLocaleContent } from '../index';

const slug = 'calcolatore-autonomia-polacco';
const title = 'Kalkulator Autonomii Jachtu';
const description =
  'Oblicz maksymalny zasięg i bezpieczny dystans na podstawie zużycia paliwa, pojemności zbiornika i prędkości przelotowej. Zarządzanie paliwem dla łodzi motorowych.';

const ui: EnduranceUI = {
  tankCapacityLabel: 'Pojemność Zbiornika',
  mainTankLabel: 'Główny',
  auxTankLabel: 'Pomocniczy',
  currentFuelLabel: 'Aktualne Paliwo',
  seaConditionsLabel: 'Warunki Morskie / Wiatrowe',
  consumptionLabel: 'Zużycie Teoretyczne',
  cruiseSpeedLabel: 'Prędkość Przelotowa',
  reserveLabel: 'Rezerwa',
  fuelPriceLabel: 'Cena za Litr',
  maxRangeLabel: 'Maksymalny Zasięg',
  realPerformanceLabel: 'Wydajność Rzeczywista',
  hoursLabel: 'Godziny Autonomii',
  safeMilesLabel: 'Bezpieczne Mile',
  tankValueLabel: 'Wartość Zbiornika',
  inverseCalcLabel: 'Obliczenie Odwrotne: Ile muszę dotankować?',
  desiredDistLabel: 'Docelowy Dystans',
  minFuelLabel: 'Minimalne Wymagane Paliwo',
  warningLabel: 'Przypomnienie: Rezerwa 20% to absolutne minimum zalecane dla bezpieczeństwa żeglugi.',
  seaCalm: 'Spokojne (1.0x)',
  seaLight: 'Lekka fala (+15%)',
  seaModerate: 'Umiarkowana fala (+30%)',
  seaStorm: 'Sztorm (+60%)',
  faqTitle: 'Często Zadawane Pytania': 'Bibliografia',
};

const faq: EnduranceLocaleContent['faq'] = [
  {
    question: 'Jak oblicza się autonomię łodzi motorowej?',
    answer: 'Autonomię oblicza się, dzieląc dostępne paliwo przez godzinowe zużycie, aby otrzymać łączną liczbę godzin, a następnie mnożąc ten czas przez prędkość przelotową. Narzędzie uwzględnia również współczynnik stanu morza, aby odzwierciedlić rzeczywiste warunki żeglugi.',
  },
  {
    question: 'Dlaczego w żegludze zaleca się 20% rezerwy?',
    answer: 'Rezerwa 20% to standard bezpieczeństwa morskiego, który gwarantuje wystarczającą ilość paliwa w przypadku nieprzewidzianych zdarzeń: przeciwnych prądów, zboczenia z kursu z powodu złej pogody, błędów w szacowaniu zużycia czy konieczności udzielenia pomocy innej jednostce. Wielu ubezpieczycieli i kapitanatów uznaje to za obowiązkowe.',
  },
  {
    question: 'Co to jest wydajność L/NM i jak wpływa na planowanie?',
    answer: 'Wydajność w litrach na milę morską (L/NM) to rzeczywista efektywność silnika w danych warunkach morskich. W przeciwieństwie do zużycia godzinowego, pozwala ona dokładnie obliczyć, ile paliwa potrzeba do pokonania określonego dystansu, niezależnie od prędkości.',
  },
  {
    question: 'Jak stan morza wpływa na rzeczywiste zużycie paliwa?',
    answer: 'Stan morza zwiększa zużycie, ponieważ kadłub musi ciężej pracować przeciwko oporowi wody i wiatru. Przy lekkiej fali zużycie wzrasta o 15%, przy umiarkowanej o 30%, a podczas sztormu może skoczyć o 60% lub więcej. Zignorowanie tego czynnika może sprawić, że jednostka zostanie bez paliwa przed dotarciem do portu.',
  },
];

const howTo: EnduranceLocaleContent['howTo'] = [
  {
    name: 'Wprowadź pojemność zbiornika',
    text: 'Wpisz litry głównego zbiornika oraz pomocniczego, jeśli go posiadasz. Narzędzie obliczy aktualny procent napełnienia.',
  },
  {
    name: 'Wprowadź aktualny poziom paliwa',
    text: 'Wpisz rzeczywistą ilość litrów, którą masz w tej chwili. Możesz ją zmierzyć wskaźnikiem na łodzi lub oszacować na podstawie ostatniego tankowania.',
  },
  {
    name: 'Dostosuj warunki żeglugi',
    text: 'Wybierz oczekiwany stan morza dla swojej trasy. Współczynnik morski koryguje teoretyczne zużycie do przewidywanego zużycia rzeczywistego.',
  },
  {
    name: 'Wprowadź zużycie i prędkość przelotową',
    text: 'Użyj danych producenta lub własnych zapisów dotyczących zużycia godzinowego i prędkości, z jaką zwykle się poruszasz.',
  },
  {
    name: 'Sprawdź bezpieczny dystans i obliczenie odwrotne',
    text: 'Narzędzie pokazuje, ile mil możesz bezpiecznie przebyć i ile paliwa potrzebujesz, aby dotrzeć do konkretnego celu.',
  },
];

const seo: EnduranceLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Zarządzanie Paliwem i Autonomia w Żegludze Motorowej',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>Autonomia morska</strong> to jedno z najbardziej krytycznych obliczeń przed wypłynięciem łodzią motorową. Dokładna wiedza o tym, ile mil można pokonać z dostępnym paliwem, stanowi różnicę między zaplanowanym rejsem a sytuacją awaryjną na morzu.',
  },
  {
    type: 'paragraph',
    html: 'Ten kalkulator autonomii integruje <strong>współczynnik warunków morskich</strong>, procent rezerwy bezpieczeństwa oraz odwrotne obliczanie paliwa, aby zarządzanie paliwem było pełne i niezawodne w każdej sytuacji.',
  },
  {
    type: 'title',
    text: 'Złota Zasada: Zasada Trzech Części',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Klasyczna zasada zarządzania paliwem w żegludze dzieli zbiornik na trzy równe części, aby zawsze zagwarantować margines bezpieczeństwa:',
  },
  {
    type: 'list',
    items: [
      '<strong>Jedna trzecia na drogę tam:</strong> Paliwo potrzebne do dotarcia do zaplanowanego celu.',
      '<strong>Jedna trzecia na powrót:</strong> Paliwo na powrót do portu wyjścia lub najbliższego portu.',
      '<strong>Jedna trzecia jako rezerwa:</strong> Margines bezpieczeństwa na nieprzewidziane zdarzenia, prądy lub trudne warunki.',
    ],
  },
  {
    type: 'paragraph',
    html: 'W kalkulatorze możesz ustawić procent rezerwy według własnych kryteriów, choć <strong>zejście poniżej 20% nigdy nie jest zalecane</strong>. Przy większych zbiornikach lub długich rejsach wielu doświadczonych skipperów podnosi ten margines do 30% lub nawet 33%.',
  },
  {
    type: 'title',
    text: 'Czynniki wpływające na zużycie (l/h)',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Teoretyczne zużycie producenta jest obliczane w idealnych warunkach laboratoryjnych. W praktyce wiele czynników zmienia <strong>rzeczywiste zużycie paliwa</strong>. Prędkość kadłubowa jest najbardziej decydująca: żegluga powyżej prędkości ekonomicznej może dwu- lub trzykrotnie zwiększyć zużycie na każdą przebyte milę.',
  },
  {
    type: 'table',
    headers: ['Stan Żeglugi', 'Wpływ na Autonomię', 'Rada'],
    rows: [
      ['<strong>Zarośnięty Kadłub</strong>', 'Zmniejsza autonomię nawet o 20%', 'Wyczyść kadłub przed sezonem'],
      ['<strong>Prąd Przeciwny</strong>', 'Może zmniejszyć prędkość efektywną o 30%', 'Zawsze licz z prędkością nad dnem (SOG)'],
      ['<strong>Wiatr Przeciwny</strong>', 'Zwiększa opór i zużycie o 10-25%', 'Użyj współczynnika lekkiej lub umiarkowanej fali'],
      ['<strong>Przeładowanie</strong>', 'Zwiększa zanurzenie i opór', 'Zważ sprzęt i zapasy przed obliczeniami'],
    ],
  },
  {
    type: 'title',
    text: 'Słownik Techniczny Autonomii',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: 'Wydajność (L/NM)', definition: 'Litry paliwa zużyte na przebyte milę morską. Najbardziej użyteczny wskaźnik do planowania rejsów, ponieważ łączy zużycie z faktycznym dystansem.' },
      { term: 'Prędkość Przelotowa', definition: 'Optymalna prędkość, przy której silnik oferuje najlepszą równowagę między szybkością a zużyciem. Zazwyczaj między 70% a 80% mocy maksymalnej.' },
      { term: 'Rezerwa Krytyczna', definition: 'Procent zbiornika, który nigdy nie powinien zostać zużyty. Zaleca się minimum 20%, aby pokryć nieprzewidziane sytuacje i zapobiec dostaniu się powietrza do układu paliwowego.' },
      { term: 'Zużycie Jednostkowe', definition: 'Gramy paliwa na kilowatogodzinę wytworzonej mocy (g/kWh). Techniczna miara silnika pozwalająca na porównanie wydajności różnych układów napędowych.' },
    ],
  },
  {
    type: 'title',
    text: 'Niebezpieczeństwo osadów i ruchu',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Częstym źródłem problemów na jednostkach z niskim poziomem paliwa są <strong>osady na dnie zbiornika</strong>. Gdy poziom spadnie zbyt nisko, osady gromadzone latami mogą dotrzeć do filtra i go zatkać, pozostawiając silnik bez paliwa, mimo że wskaźnik pokazuje jeszcze kilka litrów.',
  },
  {
    type: 'paragraph',
    html: 'Ruch łodzi na morzu przy małej ilości paliwa również może powodować problemy: ciecz kołysze się wraz z falami i może momentalnie zapowietrzyć pompę paliwową. Utrzymywanie rezerwy gwarantuje, że nie stanie się to w krytycznym momencie, takim jak manewr wejścia do portu.',
  },
  {
    type: 'tip',
    title: 'Rada dot. oszczędzania paliwa',
    html: 'Zmniejszenie prędkości o 10-15% poniżej zwykłej prędkości przelotowej może poprawić wydajność nawet o 30%. Jeśli masz czas i pogoda sprzyja, wolniejsze płynięcie jest zawsze najbardziej ekonomiczną i bezpieczną decyzją.',
  },
  {
    type: 'title',
    text: 'Różnica między milami morskimi (NM) a kilometrami',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Jedna <strong>mila morska</strong> to 1852 metry (1,852 km) i jest uniwersalną jednostką odległości w nawigacji morskiej i lotniczej. Opiera się na jednej minucie kątowej stopnia geograficznego, co czyni ją idealną do nawigacji z mapami we współrzędnych geograficznych. Prędkość w milach morskich na godzinę nazywana jest węzłem (kn).',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Analogowy Wskaźnik Igłowy',
        description: 'Tradycyjny system pływakowy',
        points: [
          'Niski koszt i prosta instalacja',
          'Nie wymaga prądu do działania',
          'Niedokładny przy wzburzonym morzu z powodu ruchu paliwa',
          'Nie pokazuje zużycia ani szacowanej autonomii',
        ],
      },
      {
        title: 'Cyfrowy Kalkulator Przepływu',
        description: 'Elektroniczne czujniki przepływu',
        highlight: true,
        points: [
          'Wydajność 1-2% dokładności przy rzeczywistym zużyciu',
          'Pokazuje autonomię, zużycie i koszty w czasie rzeczywistym',
          'Możliwość integracji z chartploterami i NMEA 2000',
          'Wymaga wstępnej kalibracji i konserwacji',
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
    name: `Jak używać: ${title}`,
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
