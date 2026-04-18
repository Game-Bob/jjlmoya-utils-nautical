import type { CategoryLocaleContent } from '../index';

const slug = 'zeglowanie-i-nawigacja';
const title = 'Żeglarstwo & Nawigacja';
const description =
  'Narzędzia do obliczeń nautycznych dla żeglarzy: pływy, zasięg, powierzchnia żagla, przeliczniki jednostek i prędkość. Idealne do nauki na egzaminy RYA i Yachtmaster.';

const seo: CategoryLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Dlaczego warto używać cyfrowych narzędzi podczas żeglowania i nawigacji?',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Nowoczesna nawigacja przeszła radykalną transformację wraz z pojawieniem się cyfrowych narzędzi. Czy jesteś na małej łodzi rekreacyjnej, czy przy sterze jachtu rejsowego, zdolność do natychmiastowego przetwarzania danych pozycji, wiatru i prądu to nie tylko kwestia wygody — jest to fundamentalny filar bezpieczeństwa na morzu.',
  },
  {
    type: 'paragraph',
    html: 'Historycznie marynarz polegał wyłącznie na sekstansie, chronometrze morskim i tablicach redukcyjnych, by określić pozycję na rozległym oceanie. Dziś, choć romantyzm sekstansu trwa, rzeczywistość operacyjna wymaga szybkości reakcji, którą zapewnić mogą tylko cyfrowe narzędzia obliczeniowe.',
  },
  {
    type: 'title',
    text: 'Kluczowe Aspekty dla Nowoczesnego Nawigatora',
    level: 2,
  },
  {
    type: 'title',
    text: 'Geolokalizacja i Wysokoprecyzyjna Kartografia Cyfrowa',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Kartografia cyfrowa zdemokratyzowała nawigację, dając nawet małym łodziom dostęp do informacji wcześniej ograniczonych do dużych statków handlowych. Odpowiedzialny skipper używa cyfrowych narzędzi do weryfikacji swojego osądu, nie do jego zastępowania.',
  },
  {
    type: 'list',
    items: [
      'Dokładność wprowadzania danych: Minimalne błędy typograficzne mogą zabrać cię o mile od celu.',
      'Kompatybilność między urządzeniami: Synchronizuj planowanie trasy na tablecie z instrumentami nawigacyjnymi.',
      'Kopia zapasowa przy awarii sprzętu: Lekkie aplikacje webowe są ubezpieczeniem na wypadek awarii plotera pokładowego.',
      'Planowanie Rejsu: Kalkulatory nautyczne umożliwiają dokładne szacowanie zużycia paliwa i odległości.',
    ],
  },
  {
    type: 'title',
    text: 'Meteorologia Morska i Optymalizacja Trasy',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Wiatr i stan morza to prawdziwi władcy żeglowania. Prawidłowa interpretacja skal wiatru (takich jak skala Beauforta) i ich przeliczanie na praktyczne jednostki, jak węzły, jest codzienną rzeczywistością każdego nawigatora.',
  },
  {
    type: 'tip',
    title: 'Znaczenie redundancji i Planu B',
    html: 'Nigdy nie powierzaj całej nawigacji jedynemu systemowi elektronicznemu. Zawsze przechowuj kopię zapasową kluczowych punktów trasy na papierze. Narzędzia webowe są doskonałe do planowania przed rejsem, ale dobry żeglarz zawsze ma plan awaryjny, który nie wymaga ekranu.',
  },
  {
    type: 'title',
    text: 'Szkolenie Nautyczne i Używanie Kalkulatorów',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Nawet w oficjalnych egzaminach na patenty nautyczne (takie jak RYA Dayskipper lub Yachtmaster), obliczenia na mapach pozostają obowiązkowe. Cyfrowe narzędzia służą jako doskonały towarzysz nauki, pozwalając kandydatom weryfikować ćwiczenia z nawigacji zliczeniowej, obliczeń pływów i poprawek kompasu.',
  },
  {
    type: 'paragraph',
    html: 'Nasza kolekcja narzędzi ma na celu być mostem między akademicką rzetelnością papierowych map a bezpośredniością nowoczesnej nawigacji. Chcemy, aby każdy skipper, entuzjasta lub profesjonalista znalazł tutaj szybkie i dokładne dane potrzebne przed odbiciem od brzegu.',
  },
];

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo,
};
