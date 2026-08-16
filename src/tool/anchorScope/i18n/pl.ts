import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AnchorScopeLocaleContent } from '../entry';
import type { AnchorScopeUI } from '../ui';

const slug = 'kalkulator-dlugosci-lancucha-kotwicznego';
const title = 'Kalkulator Kotwiczenia i Długości Łańcucha';
const description =
  'Oblicz optymalną długość łańcucha kotwicznego, współczynnik scope i promień myszkowania dla bezpiecznego kotwiczenia wg głębokości i dna.';

const ui: AnchorScopeUI = {
  parametersTitle: 'Parametry',
  waterDepthLabel: 'Głębokość z Mapy',
  bowHeightLabel: 'Wysokość Dziobu (Wolna Burta)',
  tideRangeLabel: 'Skok Pływu',
  boatLengthLabel: 'Długość Jachtu (LOA)',
  rodeTypeLabel: 'Rodzaj Liny / Łańcucha',
  windConditionLabel: 'Siła Wiatru i Prognoza',
  seabedTypeLabel: 'Rodzaj Dna',
  presetProtected: 'Zatoczka Osłonięta',
  presetOpen: 'Otwarte Wybrzeże',
  presetStorm: 'Ostrzeżenie Sztormowe',
  seabedTag: 'Współczynnik Trzymania Dna',
  catenaryTag: 'Tłumienie Linii Łańcucha',
  unitM: 'm',
  unitFt: 'ft',
  unitMeters: 'Metryczne (m)',
  unitFeet: 'Imperialne (ft)',
  allChainOption: 'Sam Łańcuch (Ciężka Linia Łańcuchowa)',
  ropeChainOption: 'Lina z Odcinkiem Łańcucha',
  allRopeOption: 'Sama Lina Kotwiczna',
  calmWindOption: 'Cisza / Słaby Wiatr (< 15 w)',
  moderateWindOption: 'Umiarkowany Wiatr (15 - 25 w)',
  strongWindOption: 'Silny Wiatr / Sztorm (25 - 35 w)',
  stormWindOption: 'Ciężki Sztorm (> 35 w)',
  sandOption: 'Piasek (Optymalne Trzymanie)',
  mudOption: 'Muł / Ił (Dobre Trzymanie)',
  clayOption: 'Zbita Glina (Bardzo Dobre)',
  gravelOption: 'Żwir / Kamyki (Przeciętne)',
  rockOption: 'Dno Skaliste (Ryzyko Zaklinowania)',
  weedOption: 'Roślinność / Wodorosty (Słabe)',
  resultsTitle: 'Analiza Kotwiczenia i Wymiary',
  scopeRatioLabel: 'Współczynnik Scope',
  totalDepthLabel: 'Całkowita Wysokość Pionowa',
  recommendedRodeLabel: 'Zalecana Długość do Wydania',
  horizontalDistanceLabel: 'Zasięg Poziomy',
  swingRadiusLabel: 'Szacowany Promień Myszkowania',
  minSafeRodeLabel: 'Minimum przy Ciszy',
  heavyWeatherRodeLabel: 'Długość na Sztorm',
  statusOptimalTitle: 'Bezpieczne i Pewne Kotwiczenie',
  statusOptimalDesc: 'Obliczona długość zapewnia krzywą łańcuchową i ciąg poziomy na trzon kotwicy.',
  statusCautionTitle: 'Kotwiczenie Poprawne: Śledź Wiatr',
  statusCautionDesc: 'Współczynnik odpowiedni na umiarkowany wiatr. Wydaj więcej łańcucha przy wzroście fali.',
  statusDangerTitle: 'Zbyt Krótki Łańcuch: Ryzyko Dryfu',
  statusDangerDesc: 'Współczynnik krytyczny. Kotwica będzie ciągnięta do góry i może puścić dno.',
  adviceSand: 'Piasek zapewnia doskonałe zagrzebanie łap. Cofnij jachtem na silniku, aby dociągnąć kotwicę.',
  adviceMud: 'Miękki muł wymaga szerokich łap i dłuższego łańcucha do twardszego podłoża.',
  adviceClay: 'Glina trzyma potężnie, ale wymaga ostrych końcówek kotwicy do przebicia.',
  adviceGravel: 'Luźny żwir przemieszcza się pod szarpnięciami. Wydłuż łańcuch o 25 procent.',
  adviceRock: 'Duże ryzyko zakleszczenia. Zawsze stosuj boję z bojrepem do rwania kotwicy.',
  adviceWeed: 'Gęsta trawa utrudnia wbicie kotwicy. Dokładnie sprawdź trzymanie na silniku.',
  catenaryAllChain: 'Ciężar łańcucha tworzy zwis amortyzujący uderzenia fal i utrzymuje trzon płasko.',
  catenaryRopeChain: 'Lina z łańcuchem wymaga stosunku co najmniej 7 do 1 dla wyrównania masy.',
  catenaryAllRope: 'Lina syntetyczna wymaga stosunku 8 do 1 lub więcej chroniąc przed poderwaniem.',
  resetButton: 'Resetuj Wartości',
  visualProfileTitle: 'Profil Linii Kotwicznej',
  waterlineLabel: 'Linia Wodna',
  seabedLabel: 'Dno Morskie',
  anchorLabel: 'Kotwica',
  catenaryCurveLabel: 'Krzywa Łańcuchowa',
  swingCircleLabel: 'Okrąg Myszkowania',
};

const faq: AnchorScopeLocaleContent['faq'] = [
  {
    question: 'Co oznacza współczynnik scope przy kotwiczeniu?',
    answer: 'Scope to stosunek całkowitej długości wydanego łańcucha lub liny do pionowej odległości od dna do rolki dziobowej.',
  },
  {
    question: 'Dlaczego należy dodać wolną burtę i skok pływu?',
    answer: 'Echosonda podaje tylko głębokość pod kilem. Dziób i przypływ powiększają rzeczywistą wysokość pionową.',
  },
  {
    question: 'Jaka jest różnica stosunku pomiędzy łańcuchem a liną?',
    answer: 'Ciężki łańcuch umożliwia stosunek 4:1 do 5:1. Lekka lina bez masy własnej wymaga 7:1 do 10:1.',
  },
  {
    question: 'Jak oblicza się promień myszkowania jachtu na kotwicy?',
    answer: 'Z twierdzenia Pitagorasa liczy się odległość poziomą, dodaje długość całkowitą jachtu oraz margines 3 do 5 metrów.',
  },
  {
    question: 'Jak rodzaj dna morskiego wpływa na siłę trzymania?',
    answer: 'Piasek i glina gwarantują najlepsze trzymanie. Skały i wodorosty wymagają większej uwagi i sprawdzenia silnikiem.',
  },
  {
    question: 'Do czego służy stoper elastyczny (snubber) na łańcuchu?',
    answer: 'Odciąża windę kotwiczną od szarpnięć fali i wycisza chrobot metalu w kabinie dziobowej.',
  },
];

const howTo: AnchorScopeLocaleContent['howTo'] = [
  {
    name: 'Zmierzyć głębokość i wysokość dziobu',
    text: 'Sprawdź głębokość na kotwicowisku i dodaj wysokość rolki dziobowej nad wodą.',
  },
  {
    name: 'Uwzględnić skok pływu',
    text: 'Sprawdź tablice pływów pod kątem maksymalnego przyboru wody w czasie postoju.',
  },
  {
    name: 'Wybrać linię i siłę wiatru',
    text: 'Wybierz typ olinowania kotwicy i spodziewany wiatr dla właściwego współczynnika.',
  },
  {
    name: 'Wydać łańcuch i zaryć kotwicę',
    text: 'Wydaj obliczoną długość i cofnij powoli na silniku, aby zaryć kotwicę w dnie.',
  },
];

const seo: AnchorScopeLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Bezpieczne Kotwiczenie: Długość Łańcucha i Promień Myszkowania',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Prawidłowe kotwiczenie to podstawa bezpieczeństwa na wodzie. Zbyt krótki łańcuch jest główną przyczyną dryfowania i kolizji na kotwicowisku. Precyzyjne obliczenie <strong>współczynnika scope</strong> gwarantuje spokojny sen całej załogi.',
  },
  {
    type: 'title',
    text: 'Składowe Całkowitej Wysokości Pionowej',
    level: 3,
  },
  {
    type: 'list',
    items: [
      '<strong>Głębokość z Echosondy:</strong> Odczyt głębokości plus zanurzenie jachtu.',
      '<strong>Wysokość Wolnej Burty Dziobu:</strong> Odstęp od lustra wody do rolki kotwicznej.',
      '<strong>Wysokość Przypływu:</strong> Maksymalny skok pływu w trakcie postoju.',
    ],
  },
  {
    type: 'title',
    text: 'Tabela Zalecanych Proporcji Kotwiczenia',
    level: 3,
  },
  {
    type: 'table',
    headers: ['Rodzaj Olinowania', 'Pogoda Spokojna (<15 w)', 'Umiarkowany Wiatr (15-25 w)', 'Sztorm (>30 w)'],
    rows: [
      ['<strong>Sam Łańcuch</strong>', 'Stosunek 4:1', 'Stosunek 5:1', 'Stosunek 7:1'],
      ['<strong>Lina z Łańcuchem</strong>', 'Stosunek 5:1', 'Stosunek 7:1', 'Stosunek 8:1 do 10:1'],
      ['<strong>Sama Lina Syntetyczna</strong>', 'Stosunek 7:1', 'Stosunek 8:1', 'Stosunek 10:1 do 12:1'],
    ],
  },
  {
    type: 'tip',
    title: 'Ochrona Windy Kotwicznej',
    html: 'Nigdy nie zostawiaj pracującego łańcucha bezpośrednio na bębnie windy. Zawsze stosuj elastyczny szpon kotwiczny zamocowany do polera dziobowego.',
  },
  {
    type: 'paragraph',
    html: 'Przed wypłynięciem sprawdź prognozę oraz rzeczywisty stan morza.',
  },
  {
    type: 'paragraph',
    html: 'Skontroluj zapas głębokości i pozostaw bezpieczną rezerwę.',
  },
  {
    type: 'paragraph',
    html: 'Zapisz dane wejściowe, aby później powtórzyć obliczenia.',
  },
  {
    type: 'paragraph',
    html: 'Porównaj kilka scenariuszy, gdy zmienia się wiatr lub prąd.',
  },
  {
    type: 'paragraph',
    html: 'Obliczenie pomaga planować trasę, ale nie zastępuje obserwacji na pokładzie.',
  },
];

const schemas: AnchorScopeLocaleContent['schemas'] = [
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
    name: `Instrukcja: ${title}`,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
  } as WithContext<HowTo>,
];

export const content: AnchorScopeLocaleContent = {
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
