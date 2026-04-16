import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { UnderKeelUI, UnderKeelLocaleContent } from '../index';

const slug = 'ukc-kalkulator-pl';
const title = 'Kalkulator Rezerwy pod Stępką UKC';
const description =
  'Oblicz bezpieczne okno czasowe na pokonanie mielizn, kanałów lub punktów z ograniczonym zanurzeniem. Wprowadź zanurzenie łodzi, głębokość z mapy i dane pływowe.';

const ui: UnderKeelUI = {
  parametersLabel: 'Parametry',
  boatDraftLabel: 'Zanurzenie łodzi',
  chartDepthLabel: 'Głębokość z mapy',
  safetyMarginLabel: 'Margines bezpieczeństwa',
  highTideLabel: 'Wysoka woda',
  lowTideLabel: 'Niska woda',
  metersLabel: 'metry',
  passWindowLabel: 'Okno przejścia',
  neededLabel: 'Wymagana głębokość',
  tideRequiredLabel: 'Minimalny wymagany pływ',
  statusNeverLabel: 'Brak rezerwy w tym cyklu',
  statusAlwaysLabel: 'Bezpiecznie przez cały cykl',
  statusFromLabel: 'Przejście od:',
  statusUntilLabel: 'Przejście do:',
  bottomLabel: 'DNO',
  faqTitle: 'Często zadawane pytania',
  bibliographyTitle: 'Bibliografia',
};

const faq: UnderKeelLocaleContent['faq'] = [
  {
    question: 'Czym dokładnie jest obliczenie rezerwy pod stępką (under-keel clearance)?',
    answer: 'Jest to obliczenie momentu, w którym w krytycznym punkcie (takim jak mielizna lub wąski kanał) jest wystarczająca głębokość, aby umożliwić bezpieczne przejście jednostki zgodnie z jej zanurzeniem.',
  },
  {
    question: 'Jaki margines bezpieczeństwa jest zalecany?',
    answer: 'Dla jednostek rekreacyjnych zazwyczaj zaleca się minimalny margines bezpieczeństwa od 0,5 do 1 metra powyżej zanurzenia łodzi. Margines ten kompensuje błędy w obliczeniach pływów lub zmiany ciśnienia.',
  },
  {
    question: 'Jak falowanie wpływa na rezerwę pod stępką?',
    answer: 'Falowanie generuje pionowe oscylacje kadłuba. W najniższym punkcie fali łódź znajduje się bliżej dna niż w spoczynku. Podczas przechodzenia przez obszary z falowaniem margines musi zostać zwiększony.',
  },
  {
    question: 'Co to jest głębokość z mapy (chart sounding)?',
    answer: 'Jest to minimalna głębokość w danym punkcie, gdy pływ jest na poziomie Zero Mapy (Chart Datum). Dodaje się ją do wysokości pływu w danym momencie, aby uzyskać całkowitą dostępną głębokość.',
  },
  {
    question: 'Co oznacza podkreślona wartość głębokości na mapie?',
    answer: 'Oznacza to, że ten punkt jest odsłonięty (osycha), gdy pływ jest na poziomie Zero Mapy. Będziesz potrzebować większej wysokości pływu, aby móc nad nim przepłynąć.',
  },
  {
    question: 'Co to jest efekt Squat?',
    answer: 'To zjawisko hydrodynamiczne, polegające na tym, że jednostka nawigująca przez płytkie kanały ma tendencję do głębszego osiadania względem linii wodnej. Im szybciej płyniesz, tym mniej wody masz pod stępką.',
  },
];

const howTo: UnderKeelLocaleContent['howTo'] = [
  {
    name: 'Zdefiniuj zanurzenie i margines',
    text: 'Zmierz zanurzenie łodzi w jej najniższym punkcie i dodaj ostrożny margines bezpieczeństwa (np. 0,5 m).',
  },
  {
    name: 'Sprawdź głębokość na mapie',
    text: 'Znajdź wartość głębokości dla krytycznego punktu, przez który będziesz nawigować. Zwróć uwagę, czy jest to obszar piaszczysty czy skalisty.',
  },
  {
    name: 'Wprowadź dane pływowe',
    text: 'Użyj czasów i wysokości wysokiej i niskiej wody z najbliższego oficjalnego almanachu pływów.',
  },
  {
    name: 'Sprawdź swoje okno przejścia',
    text: 'Narzędzie pokaże dokładny przedział czasowy, w którym będziesz mieć wystarczającą głębokość do bezpiecznej nawigacji.',
  },
];

const bibliography: UnderKeelLocaleContent['bibliography'] = [
  {
    name: 'Ministerio de Transportes - Recreational Boating',
    url: 'https://www.mitma.gob.es/marina-mercante/nautica-de-recreo/',
  },
  {
    name: 'Portos de Galicia - Tide Tables',
    url: 'https://portosdegalicia.gal/es/taboa-de-mareas',
  },
];

const seo: UnderKeelLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Rezerwa pod stępką: Bezpieczna nawigacja nad mieliznami',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Planowanie przejścia nie kończy się na wykreśleniu kursu na mapie. Dla nawigatora przybrzeżnego jednym z najbardziej krytycznych obliczeń jest <strong>rezerwa pod stępką (Under-Keel Clearance)</strong>: wiedza o tym, o której godzinie będzie wystarczająca głębokość, aby pokonać krytyczny punkt bez wejścia na mieliznę.',
  },
  {
    type: 'title',
    text: 'Głębokość z mapy a pływ',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Na mapach morskich głębokości odnoszą się do <strong>Zero Mapy (Chart Datum)</strong>. Rzeczywista głębokość, jaką napotka Twoja łódź w dowolnym momencie, jest sumą tej głębokości i wysokości pływu w danej chwili.',
  },
  {
    type: 'title',
    text: 'Elementy obliczeń: Zanurzenie i Margines',
    level: 3,
  },
  {
    type: 'list',
    items: [
      { term: 'Maksymalne zanurzenie pod ładunkiem', definition: 'Głębokość osiągana przez najniższy punkt łodzi (stępkę) przy pełnym obciążeniu.' },
      { term: 'Głębokość z mapy', definition: 'Liczba na mapie morskiej dla punktu, który chcesz pokonać. Jeśli podkreślona, punkt osycha przy Zero Mapy.' },
      { term: 'Margines bezpieczeństwa', definition: 'Dodatkowa rezerwa (co najmniej 0,5 do 1 metra) powyżej zanurzenia.' },
    ],
  },
  {
    type: 'title',
    text: 'Czynniki wpływające na przejście',
    level: 3,
  },
  {
    type: 'table',
    headers: ['Czynnik', 'Efekt', 'Rekomendacja'],
    rows: [
      ['<strong>Falowanie</strong>', 'Zmniejsza wodę pod kadłubem', 'Znacznie zwiększ margines bezpieczeństwa'],
      ['<strong>Efekt Squat</strong>', 'Zwiększa zanurzenie przez ssanie', 'Zredukuj prędkość w krytycznych obszarach'],
      ['<strong>Piaszczyste dno</strong>', 'Zmienna głębokość przez sztormy', 'Utrzymuj echosondę włączoną'],
    ],
  },
  {
    type: 'tip',
    title: 'Wskazówka nawigacyjna',
    html: 'Jeśli okno przejścia jest bardzo wąskie lub pogoda się pogarsza, najrozsądniejszą decyzją jest poczekanie, aż pływ wzrośnie.',
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
    name: `Jak używać: ${title}`,
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
