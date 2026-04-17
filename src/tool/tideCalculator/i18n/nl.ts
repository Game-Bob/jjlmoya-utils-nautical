import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TideCalculatorUI, TideCalculatorLocaleContent } from '../index';

const slug = 'getijde-calculator';
const title = 'Getijdenhoogte Calculator';
const description =
  'Schat de waterdiepte op elk punt in de getijdencyclus met behulp van de nautische Zwölftel-Regel. Ideaal voor kustplanning en studie voor vaarbewijzen.';

const ui: TideCalculatorUI = {
  parametersLabel: 'Parameters',
  highTideLabel: 'Hoogwater',
  lowTideLabel: 'Laagwater',
  targetTimeLabel: 'Opvraagtijd',
  estimatedHeightLabel: 'Geschatte Hoogte',
  metersLabel: 'meter',
  amplitudeLabel: 'Amplitude',
  durationLabel: 'Duur',
  tableBreakdownLabel: 'Zwölftel-verdeling',
  tableHourLabel: 'Tijd',
  tableStateLabel: 'Status',
  tableStartLabel: 'Start',
  tableEndLabel: 'Einde',
  statusUpLabel: 'Opkomend',
  statusDownLabel: 'Afnemend',
  statusOutOfRange: 'Buiten bereik',
  faqTitle: 'Veelgestelde Vragen',
  bibliographyTitle: 'Bibliografie',
};

const faq: TideCalculatorLocaleContent['faq'] = [
  {
    question: 'Wat is de Zwölftel-Regel en waarvoor wordt deze gebruikt?',
    answer:
      'De Zwölftel-Regel (of Twaalfde-regel) is een vereenvoudigde wiskundige methode die in de navigatie wordt gebruikt om de getijdenhoogte te schatten op elk punt tussen hoog- en laagwater. Het is gebaseerd op de waarneming dat de getijdenstroom een sinusvormige curve volgt, waarbij het totale bereik over 6 uur in 12 delen wordt verdeeld (1/12, 2/12, 3/12, 3/12, 2/12, 1/12).',
  },
  {
    question: 'Is deze methode betrouwbaar voor echte navigatie?',
    answer:
      'Het is een zeer nuttige theoretische schattingsmethode voor snelle planning en educatieve doeleinden. Het houdt echter geen rekening met meteorologische factoren zoals atmosferische druk of wind, die de zeespiegel met enkele decimeters kunnen veranderen. Raadpleeg voor echte navigatie altijd de officiële getijdentafels.',
  },
  {
    question: 'Welke gegevens heb ik nodig om de getijdenhoogte te berekenen?',
    answer:
      'U hebt de tijd en hoogte (in meters) nodig van het hoog- en laagwater dat het dichtst bij het moment ligt waarop u wilt opvragen. Deze gegevens vindt u in getijdenalmanakken of maritieme weerapps.',
  },
  {
    question: 'Waarom stijgt het getij niet altijd met dezelfde snelheid?',
    answer:
      'Vanwege de traagheid van grote watermassa\'s en de configuratie van oceaanbekkens. Het getij begint langzaam te stijgen na laagwater, bereikt de maximale snelheid in de middelste uren (de 3/12 uren) und vertraagt weer als het hoogwater nadert.',
  },
  {
    question: 'Hoe beïnvloedt de atmosferische druk het getij?',
    answer:
      'Hoge druk (anticycloon) drukt het water naar beneden, waardoor de werkelijke hoogte afneemt. Lage druk (depressie) zorgt ervoor dat het water hoger kan stijgen. Als algemene regel geldt dat een variatie van 1 hPa ten opzichte van het gemiddelde overeenkomt met een verandering van ongeveer 1 cm in de zeespiegel.',
  },
  {
    question: 'Wat is het getijverschil?',
    answer:
      'Het is het verticale verschil in hoogte tussen een hoogwater en het onmiddellijk voorafgaande of volgende laagwater. Deze meting varieert afhankelijk van de schijngestalte van de maan (spring- en doodtij) en de geografische locatie.',
  },
];

const howTo: TideCalculatorLocaleContent['howTo'] = [
  {
    name: 'Identificeer hoog- en laagwater',
    text: 'Raadpleeg uw getijdenalmanak voor de tijden en hoogtes van de getijdencyclus waarin u geïnteresseerd bent.',
  },
  {
    name: 'Voer de gegevens in de calculator in',
    text: 'Voer de tijd en hoogte van hoogwater en laagwater in. De tool bepaalt automatisch de duur en de amplitude.',
  },
  {
    name: 'Stel de opvraagtijd in',
    text: 'Pas de tijd aan waarvoor u het waterniveau wilt weten. U ziet het exacte punt gemarkeerd op de grafiek.',
  },
  {
    name: 'Analyseer de twaalfden-tabel',
    text: 'Bekijk de verdeling per uur om te begrijpen hoe het waterniveau gedurende de gehele periode zal fluctueren.',
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
    text: 'Het getij beheersen: de Zwölftel-Regel in de navigatie',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Kustnavigatie en het binnenlopen van havens met beperkte diepte vereisen te allen tijde een nauwkeurige kennis van de waterdiepte. Hoewel er tegenwoordig digitale toepassingen en GPS beschikbaar zijn die real-time gegevens leveren, blijft de <strong>Zwölftel-Regel</strong> een fundamenteel hulpmiddel in de training van elke schipper. Deze regel is een wiskundige schattingsmethode waarmee u, bij benadering en zonder complexe rekenmachines, de getijdenhoogte op elk punt in een getijdencyclus kunt berekenen.',
  },
  {
    type: 'title',
    text: 'Wat is de Zwölftel-Regel precies?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'De Zwölftel-Regel is gebaseerd op de waarneming dat de getijdenstroom niet constant is. Het water stijgt of daalt niet met dezelfde snelheid gedurende de ongeveer zes uur tussen hoog- en laagwater. In plaats daarvan volgt de beweging een sinusvormige curve. Tijdens het eerste uur beweegt het getij langzaam; het versnelt in de middelste uren en vertraagt weer als het het volgende extreme punt bereikt.',
  },
  {
    type: 'table',
    headers: ['Uur van de cyclus', 'Proportie', 'Stroomtoestand'],
    rows: [
      ['<strong>1e Uur</strong>', '1/12 van het bereik', 'Langzame start (Doodtij)'],
      ['<strong>2e Uur</strong>', '2/12 van het bereik', 'Versnellende stroom'],
      ['<strong>3e Uur</strong>', '3/12 van het bereik', 'Maximale stroom (Sterke stroom)'],
      ['<strong>4e Uur</strong>', '3/12 van het bereik', 'Aanhoudende stroom'],
      ['<strong>5e Uur</strong>', '2/12 van het bereik', 'Merkbare vertraging'],
      ['<strong>6e Uur</strong>', '1/12 van het bereik', 'Uiteindelijke vertraging (Richting stroomkentering)'],
    ],
  },
  {
    type: 'title',
    text: 'Technische beperkingen: Factoren die het werkelijke getij beïnvloeden',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: 'Atmosferische druk', definition: 'Een depressie doet de zeespiegel stijgen; een anticycloon doet deze dalen. Als algemene regel geldt: ~1 cm variatie per hPa verschil ten opzichte van het gemiddelde.' },
      { term: 'Kustwind', definition: 'Aanhoudende aanlandige wind kan het water opstuwen boven de niveaus die in de getijdentafels worden voorspeld.' },
      { term: 'Lokale topografie', definition: 'Kustvorm, zeebodemdiepte en de aanwezigheid van estuaria kunnen de getijdenstroom aanzienlijk vertragen of versnellen.' },
    ],
  },
  {
    type: 'tip',
    title: 'Veiligheidsopmerking',
    html: 'Deze tool maakt gebruik van een wiskundige schattingsmethode. Er wordt geen rekening gehouden met meteorologische factoren of lokale topografie. Raadpleeg voor echte navigatie altijd de officiële getijdentafels.',
  },
  {
    type: 'title',
    text: 'Kernconcepten voor nieuwe zeilers',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Getijverschil',
        definition: 'Verticaal verschil tussen hoogwater en laagwater. In de Golf van Biskaje kan dit enkele meters bedragen; in de Middellandse Zee is het bijna verwaarloosbaar.',
      },
      {
        term: 'Getijduur',
        definition: 'Tijdsinterval tussen hoogwater en het volgende laagwater. Meestal ongeveer 6 uur en 12 minuten (semi-diurnal cyclus).',
      },
      {
        term: 'Reductievlak (Chart datum)',
        definition: 'Referentieniveau van waaruit alle diepten op zeekaarten worden gemeten. Werkelijke diepten zijn bijna nooit minder dan de aangegeven diepten.',
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
    name: `Gebruiksaanwijzing: ${title}`,
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
