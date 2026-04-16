import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TideCalculatorUI, TideCalculatorLocaleContent } from '../index';

const slug = 'kalkulator-plywow-pl';
const title = 'Kalkulator Wysokości Pływów';
const description =
  'Oszacuj głębokość wody w dowolnym punkcie cyklu pływów za pomocą nawigacyjnej zasady dwunastu części. Idealny do planowania przybrzeżnego i nauki do licencji morskiej.';

const ui: TideCalculatorUI = {
  parametersLabel: 'Parametry',
  highTideLabel: 'Wysoka Woda',
  lowTideLabel: 'Niska Woda',
  targetTimeLabel: 'Czas zapytania',
  estimatedHeightLabel: 'Szacowana Wysokość',
  metersLabel: 'metry',
  amplitudeLabel: 'Skok Pływu',
  durationLabel: 'Czas Trwania',
  tableBreakdownLabel: 'Rozkład Dwunastych Części',
  tableHourLabel: 'Czas',
  tableStateLabel: 'Stan',
  tableStartLabel: 'Start',
  tableEndLabel: 'Koniec',
  statusUpLabel: 'Wznoszenie',
  statusDownLabel: 'Opadanie',
  statusOutOfRange: 'Poza zakresem',
  faqTitle: 'Często Zadawane Pytania',
  bibliographyTitle: 'Bibliografia',
};

const faq: TideCalculatorLocaleContent['faq'] = [
  {
    question: 'Co to jest zasada dwunastych części i do czego służy?',
    answer:
      'Zasada dwunastych części to uproszczona metoda matematyczna stosowana w nawigacji do szacowania wysokości pływu w dowolnym momencie między wysoką a niską wodą. Opiera się na obserwacji, że przepływ pływów następuje po przybliżonej krzywej sinusoidalnej, dzieląc całkowity skok na 12 części w ciągu 6 godzin (1/12, 2/12, 3/12, 3/12, 2/12, 1/12).',
  },
  {
    question: 'Czy ta metoda jest wiarygodna w rzeczywistej nawigacji?',
    answer:
      'Jest to bardzo przydatna teoretyczna metoda szacowania do szybkiego planowania i celów edukacyjnych. Nie uwzględnia ona jednak czynników meteorologicznych, takich jak ciśnienie atmosferyczne czy wiatr, które mogą zmienić poziom morza o kilka decymetrów. W przypadku rzeczywistej nawigacji należy zawsze korzystać z oficjalnych tablic pływów.',
  },
  {
    question: 'Jakich danych potrzebuję do obliczenia wysokości pływu?',
    answer:
      'Potrzebujesz czasu i wysokości (w metrach) wysokiej i niskiej wody najbliższej momentowi, o który chcesz zapytać. Dane te można znaleźć w almanachach pływowych lub aplikacjach pogodowych dla żeglarzy.',
  },
  {
    question: 'Dlaczego pływ nie zawsze wznosi się z tą samą prędkością?',
    answer:
      'Wynika to z bezwładności dużych mas wody i konfiguracji basenów oceanicznych. Pływ zaczyna wznosić się powoli po niskiej wodzie, osiąga maksymalną prędkość w środkowych godzinach (3/12 i 4/12 wody) i ponownie zwalnia, gdy zbliża się do wysokiej wody.',
  },
  {
    question: 'Jak ciśnienie atmosferyczne wpływa na pływy?',
    answer:
      'Wysokie ciśnienie (antycyklon) spycha wodę w dół, zmniejszając rzeczywistą wysokość. Niskie ciśnienie (niż) pozwala wodzie podnieść się wyżej. Zasadniczo zmiana o 1 hPa od średniej odpowiada zmianie poziomu morza o około 1 cm.',
  },
  {
    question: 'Co to jest skok pływu?',
    answer:
      'Jest to pionowa różnica wysokości między wysoką wodą a bezpośrednio poprzedzającą ją lub następującą po niej niską wodą. Pomiar ten zmienia się w zależności od fazy księżyca (pływy syzygijne i kwadraturowe) oraz lokalizacji geograficznej.',
  },
];

const howTo: TideCalculatorLocaleContent['howTo'] = [
  {
    name: 'Zidentyfikuj wysoką i niską wodę',
    text: 'Sprawdź w swoim almanachu pływów czasy i wysokości cyklu pływowego, który Cię interesuje.',
  },
  {
    name: 'Wprowadź dane do kalkulatora',
    text: 'Wprowadź czas i wysokość wysokiej i niskiej wody. Narzędzie automatycznie określi czas trwania i skok pływu.',
  },
  {
    name: 'Ustaw czas zapytania',
    text: 'Dostosuj czas, dla którego chcesz poznać poziom wody. Zobaczysz dokładny punkt zaznaczony na wykresie.',
  },
  {
    name: 'Przeanalizuj tabelę dwunastych części',
    text: 'Przejrzyj rozkład godzina po godzinie, aby zrozumieć, jak poziom wody będzie się zmieniać w całym okresie.',
  },
];

const bibliography: TideCalculatorLocaleContent['bibliography'] = [
  {
    name: 'Puertos del Estado - Tide Prediction',
    url: 'https://portus.puertos.es/#/',
  },
  {
    name: 'Instituto Hidrografico de la Marina',
    url: 'https://armada.defensa.gob.es/ihm/',
  },
];

const seo: TideCalculatorLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Mistrzostwo w Pływach: Zasada Dwunastych Części w Nawigacji',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Nawigacja przybrzeżna i wchodzenie do portów o ograniczonej głębokości wymagają dokładnej wiedzy o głębokości wody w każdym momencie. Chociaż obecnie dostępne są aplikacje cyfrowe i GPS dostarczające dane w czasie rzeczywistym, <strong>Zasada Dwunastych Części</strong> pozostaje podstawowym narzędziem w szkoleniu każdego sternika jachtowego lub kapitana jachtowego. Zasada ta jest matematyczną metodą szacowania, która pozwala obliczyć w przybliżeniu i bez skomplikowanych kalkulatorów wysokość pływu w dowolnym momencie cyklu pływowego.',
  },
  {
    type: 'title',
    text: 'Czym dokładnie jest Zasada Dwunastych Części?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Zasada dwunastych części opiera się na obserwacji, że przepływ pływów nie jest stały. Woda nie wznosi się ani nie opada z tą samą prędkością w ciągu około sześciu godzin między wysoką a niską wodą. Zamiast tego ruch następuje po krzywej sinusoidalnej. W ciągu pierwszej godziny pływ przemieszcza się powoli; przyspiesza w środkowych godzinach i ponownie zwalnia w miarę zbliżania się do kolejnego ekstremum.',
  },
  {
    type: 'table',
    headers: ['Godzina Cyklu', 'Proporcja', 'Stan Przepływu'],
    rows: [
      ['<strong>1. Godzina</strong>', '1/12 skoku pływu', 'Powolny start (Woda stojąca)'],
      ['<strong>2. Godzina</strong>', '2/12 skoku pływu', 'Przepływ przyspieszający'],
      ['<strong>3. Godzina</strong>', '3/12 skoku pływu', 'Maksymalny przepływ (Silny prąd)'],
      ['<strong>4. Godzina</strong>', '3/12 skoku pływu', 'Przepływ podtrzymany'],
      ['<strong>5. Godzina</strong>', '2/12 skoku pływu', 'Zauważalne spowolnienie'],
      ['<strong>6. Godzina</strong>', '1/12 skoku pływu', 'Końcowe spowolnienie (W kierunku martwej wody)'],
    ],
  },
  {
    type: 'title',
    text: 'Ograniczenia techniczne: Czynniki wpływające na rzeczywisty pływ',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: 'Ciśnienie atmosferyczne', definition: 'Niż podnosi poziom morza; wyż go obniża. Przyjmuje się zasadę ~1 cm zmiany na każdy 1 hPa różnicy względem średniej.' },
      { term: 'Wiatr przybrzeżny', definition: 'Utrzymujące się wiatry dopychające mogą spiętrzać wodę powyżej poziomów przewidzianych w tablicach pływów.' },
      { term: 'Lokalna topografia', definition: 'Kształt wybrzeża, głębokość dna i obecność estuariów mogą znacząco opóźnić lub przyspieszyć przepływ pływów.' },
    ],
  },
  {
    type: 'tip',
    title: 'Uwaga dotycząca bezpieczeństwa',
    html: 'To narzędzie wykorzystuje matematyczną metodę szacowania. Nie uwzględnia czynników meteorologicznych ani lokalnej topografii. W przypadku rzeczywistej nawigacji należy zawsze korzystać z oficjalnych tablic pływów.',
  },
  {
    type: 'title',
    text: 'Kluczowe pojęcia dla nowych żeglarzy',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Skok pływu',
        definition: 'Pionowa różnica między wysoką a niską wodą. W Zatoce Biskajskiej może wynosić kilka metrów; w regionie Morza Śródziemnego jest niemal pomijalny.',
      },
      {
        term: 'Czas trwania pływu',
        definition: 'Interwał czasowy między wysoką wodą a następną niską wodą. Zazwyczaj około 6 godzin i 12 minut (cykl półdobowy).',
      },
      {
        term: 'Zero mapy (Chart datum)',
        definition: 'Poziom odniesienia, od którego mierzone są wszystkie głębokości na mapach morskich. Rzeczywiste głębokości niemal nigdy nie są mniejsze niż te wskazane.',
      },
    ],
  },
];

const schemas: TideCalculatorLocaleContent['schemas'] = [
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

export const content: TideCalculatorLocaleContent = {
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
