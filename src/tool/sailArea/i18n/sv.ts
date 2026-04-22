import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SailAreaUI, SailAreaLocaleContent } from '../index';

const slug = 'segelyte-kalkylator';
const title = 'Segelyte och SAD förhållande kalkylator';
const description =
  'Beräkna den totala segelytan och förhållandet mellan segelyta och deplacement (SA/D) för din båt. Nautisk prestandaanalys baserad på I-, J-, P- och E-mått.';

const ui: SailAreaUI = {
  hullSectionLabel: 'Skrovdata',
  totalMassLabel: 'Deplacement',
  rigSystemLabel: 'Rigg',
  intendedUseLabel: 'Avsedd användning',
  rigGeometryLabel: 'Rigggeometri',
  sailConfigLabel: 'Riggtyp',
  genoaOverlapLabel: 'Genoa-överlappning',
  foqueLabel: 'Fock',
  genovaLabel: 'Genoa',
  sadRatioLabel: 'SA/D-förhållande',
  totalAreaLabel: 'Total yta',
  performanceLabel: 'Prestanda',
  sloopLabel: 'Slup (en mast)',
  cutterLabel: 'Kutter (dubbla försegel)',
  ketchLabel: 'Ketch (två master)',
  cruiserLabel: 'Cruiser',
  performanceTypeLabel: 'Prestandatyp',
  racerLabel: 'Racer',
  exportPdfLabel: 'GENERERA TEKNISK RAPPORT',
  faqTitle: 'Vanliga frågor': 'Bibliografi',
};

const faq: SailAreaLocaleContent['faq'] = [
  {
    question: 'Varför är min båt långsam i svag vind?',
    answer: 'Ditt SA/D-förhållande är förmodligen under 15, vilket indikerar en tung deplacementbåt med lite segelyta i förhållande till dess vikt. Dessa båtar behöver vindar över 12 knop för att segla livligt.',
  },
  {
    question: 'Bör jag tömma vattentankarna för att förbättra prestandan?',
    answer: 'Ja, att lätta båten förbättrar direkt SA/D-förhållandet eftersom det faktiska deplacementet minskar. Att tömma vatten- och bränsletankar kan minska deplacementet med flera hundra kilo och höja förhållandet avsevärt.',
  },
  {
    question: 'Vad är Roach på ett segel?',
    answer: 'Roach är den konvexa kurvan på storsegelts akterlik (bakkant). Det ger extra segelyta utöver den geometriska bastriangeln som definieras av P och E. Kappseglingsbåtar har ofta en aggressiv Roach med styva lattor.',
  },
  {
    question: 'Hur mäter jag min båts verkliga deplacement?',
    answer: 'Den mest tillförlitliga metoden är att använda lastat deplacement (med alla förråd, vatten, bränsle och besättning ombord). Det lätta deplacementet från tillverkarens manual är vanligtvis optimistiskt. Använd det faktiska deplacementet i dina normala seglingsförhållanden.',
  },
  {
    question: 'Var hittar jag måtten I, J, P och E för min båt?',
    answer: 'Du hittar dem i ägarmanualen, i ORC- eller IRC-mätbrev, eller i klasscertifikatdokumentation. Du kan också mäta dem direkt ombord med måttband eller genom att kontakta båtbyggaren.',
  },
];

const howTo: SailAreaLocaleContent['howTo'] = [
  {
    name: 'Välj riggtyp',
    text: 'Välj mellan Slup (en mast), Kutter (fock och klyvare) eller Ketch (med mesanmast). Detta avgör hur den totala segelytan beräknas.',
  },
  {
    name: 'Ange deplacementet',
    text: 'Använd din båts faktiska lastade deplacement i kg eller lbs. Denna siffra är avgörande för beräkningen av SA/D-förhållandet.',
  },
  {
    name: 'Mät rigggeometrin',
    text: 'Ange måtten P (masthöjd), E (bomlängd), I (förstriangelns höjd) och J (förstriangelns bas) i meter eller fot.',
  },
  {
    name: 'Justera genoa-överlappningen',
    text: 'Dra i skjutreglaget för att ange din genoa-överlappning: 100 % är en icke-överlappande fock, 130 % är en standardgenoa, 155 % är en stor genoa.',
  },
  {
    name: 'Tolka SA/D-förhållandet',
    text: 'Ett förhållande mellan 16 och 20 indikerar en balanserad cruiser. Över 20 blir båten mycket livlig i svag vind men krävande i friska förhållanden.',
  },
];

const seo: SailAreaLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Segelyte-kalkylator: Komplett guide till prestanda och förhållanden',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Segelytan är den aerodynamiska motorn i varje segelfartyg. Den avgör hur mycket vindenergi båten kan fånga och definierar, i kombination med dess deplacement, dess nautiska karaktär: om det blir en långsam cruiser eller en känslig kappseglingsmaskin. Att beräkna detta värde korrekt är det första steget till att förstå beteendet hos varje segelbåt.',
  },
  {
    type: 'paragraph',
    html: 'Segling innebär en konstant dans mellan vindens kraft på seglen och vattnets motstånd mot skrovet. <strong>Segelyte / Deplacement-förhållandet (SA/D)</strong> fångar detta förhållande i ett enda tal som gör att båtar av alla längder och deplacement kan jämföras på lika villkor.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Idealiskt cruiser-förhållande', value: '15-18', icon: 'mdi:anchor' },
      { label: 'Kappseglingsbåtar', value: '+24', icon: 'mdi:sailing' },
      { label: 'Felmarginal', value: '5-10 %', icon: 'mdi:alert-circle-outline' },
    ],
    columns: 3,
  },
  {
    type: 'title',
    text: 'Vad används SA/D-förhållandet till?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Förhållandet <strong>Segelyta / Deplacement</strong> är ett diagnostiskt verktyg som gör att du kan förutsäga båtens beteende innan du sätter segel. Ett lågt förhållande indikerar en robust och säker båt som dock är långsam i svaga vindar; ett högt förhållande erbjuder fart och en känsla av att flyga men kräver större skicklighet hos besättningen när vinden ökar. Ingetdera är överlägset det andra: allt beror på vilken typ av segling som avses.',
  },
  {
    type: 'title',
    text: 'Referenstabell för SA/D-förhållandet',
    level: 4,
  },
  {
    type: 'table',
    headers: ['Förhållande', 'Båttyp', 'Beteende till sjöss'],
    rows: [
      ['< 14', 'Tungt deplacement / Lastfartyg', 'Stabil, långsam, behöver ihållande vind'],
      ['14 - 16.5', 'Långfärdscruiser för hav', 'Balanserad, bekväm, går bra på bidevind'],
      ['16.5 - 20', 'Standardcruiser för marina', 'Livlig i bris, hanterbar, mångsidig'],
      ['20 - 25', 'Performance Cruiser / Sport', 'Snabb, krävande, spännande i svag vind'],
      ['> 25', 'Racer / Extremsport', 'Mycket snabb, nervös, kräver expertbesättning'],
    ],
  },
  {
    type: 'title',
    text: 'Teknisk ordlista över mått (I, J, P, E)',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'I (Förstriangelns höjd)',
        definition: 'Vertikalt avstånd från däck till den punkt där fockfallet fäster vid masten. Definierar höjden på förstriangeln.',
      },
      {
        term: 'J (Förstriangelns bas)',
        definition: 'Horisontellt avstånd från masten till förstäven. Definierar basen på förstriangeln där förseglen fästs.',
      },
      {
        term: 'P (Masthöjd)',
        definition: 'Avstånd från bommen till storsegelts fallskiva högst upp på masten. Definierar höjden på storseglet.',
      },
      {
        term: 'E (Bom-längd)',
        definition: 'Avstånd från masten till storsegelts skothorn vid bommens ände. Definierar basen på storseglet.',
      },
    ],
  },
  {
    type: 'title',
    text: 'Nautiska examensberäkningar (Yachtmaster)',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Beräkning av segelyta och SA/D-förhållandet ingår i kursplanen för <strong>Yachtmaster</strong> och kustskepparexamen. Att förstå rigggeometri och dess förhållande till deplacement är avgörande för att fatta säkerhetsbeslut till sjöss: att reva i tid, välja rätt genoa eller uppskatta båtens beteende inför en byig vind.',
  },
  {
    type: 'tip',
    title: 'Medvindssegel och säkerhet',
    html: 'För oceansegling eller långdistanssegling erbjuder ett SA/D-förhållande mellan 16 och 18 den bästa balansen mellan fart och säkerhet. Båtar med förhållanden över 22 kan behöva reva i vindar på bara styrka 4-5 Beaufort.',
  },
  {
    type: 'title',
    text: 'Hur påverkar genoa-överlappningen prestandan?',
    level: 4,
  },
  {
    type: 'paragraph',
    html: '<strong>Genoa</strong> är det största förseglet, vars skothorn är placerat bakom masten och därmed "överlappar" storseglet. Överlappningsprocenten anger hur mycket längre den vinkelräta linjen mot förliket (LP) är jämfört med J-måttet. En 150 %-genoa har ett LP som motsvarar 150 % av J, vilket ger en mycket större segelyta än en vanlig fock.',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Dacron (Cruising)',
        description: 'Klassiskt material för cruisingsegel. Robust och lättskött.',
        points: [
          'Hög hållbarhet och UV-beständighet',
          'Låga underhållskostnader',
          'Tyngre och töjer sig under belastning',
          'Idealisk för kust- och långfärdssegling',
        ],
      },
      {
        title: 'Laminat (Racing)',
        description: 'Högteknologiska material som Kevlar, Spectra eller Dyneema.',
        highlight: true,
        points: [
          'Minimal töjning: maximal aerodynamisk effektivitet',
          'Betydligt lättare än dacron',
          'Högre kostnad och kortare livslängd',
          'Oumbärlig på båtar med SA/D-förhållande > 22',
        ],
      },
    ],
    columns: 2,
  },
  {
    type: 'title',
    text: 'Seglingsfysik och stabilitet',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Segelytan genererar framdrivande kraft men också ett <strong>krängningsmoment</strong> som tenderar att välta båten. Stabilitet mäts genom det rätande momentet som båten kan sätta emot denna krängande kraft. Ett högt SA/D-förhållande i en båt med lite barlast kan vara farligt, medan samma förhållande i en båt med en djup, tung köl är helt hanterbart.',
  },
  {
    type: 'paragraph',
    html: 'För att beräkna verklig tillgänglig effekt använder fartygsarkitekter ofta <strong>Deplacement-Längd-förhållandet (DLR)</strong> i kombination med SA/D. Båda förhållandena tillsammans beskriver exakt om en båt är en tung skuta eller en kappseglingsplanare.',
  },
  {
    type: 'tip',
    title: 'Stabilitet och säkerhet',
    html: 'Utvärdera aldrig SA/D isolerat. En segelbåt med ett förhållande på 22 och en rätande vinkel på 90 grader är mycket säkrare än en med ett förhållande på 18 och en vinkel på 60 grader. Konsultera alltid din båts stabilitetskurva.',
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
    name: `Hur man använder: ${title}`,
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
