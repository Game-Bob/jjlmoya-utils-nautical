import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SailAreaUI, SailAreaLocaleContent } from '../index';

const slug = 'zeiloppervlak-calculator-nl';
const title = 'Zeiloppervlak en SA/D Ratio Calculator';
const description =
  'Bereken het totale zeiloppervlak en de verhouding zeiloppervlak tot deplacement van uw boot. Nautische prestatieanalyse op basis van I, J, P en E metingen.';

const ui: SailAreaUI = {
  hullSectionLabel: 'Rompgegevens',
  totalMassLabel: 'Waterverplaatsing',
  rigSystemLabel: 'Tuigage',
  intendedUseLabel: 'Beoogd gebruik',
  rigGeometryLabel: 'Geometrie van de tuigage',
  sailConfigLabel: 'Type tuigage',
  genoaOverlapLabel: 'Genua Overlap',
  foqueLabel: 'Fok',
  genovaLabel: 'Genua',
  sadRatioLabel: 'SA/D Verhouding',
  totalAreaLabel: 'Totaal oppervlak',
  performanceLabel: 'Prestatie',
  sloopLabel: 'Sloep (één mast)',
  cutterLabel: 'Kotter (dubbel voorzeil)',
  ketchLabel: 'Ketch (twee masten)',
  cruiserLabel: 'Cruiser',
  performanceTypeLabel: 'Prestatie Type',
  racerLabel: 'Racer',
  exportPdfLabel: 'GENEREER TECHNISCH RAPPORT',
  faqTitle: 'Veelgestelde Vragen',
  bibliographyTitle: 'Bibliografie',
};

const faq: SailAreaLocaleContent['faq'] = [
  {
    question: 'Waarom is mijn boot traag bij lichte wind?',
    answer: 'Uw SA/D-verhouding is waarschijnlijk lager dan 15, wat duidt op een boot met een grote waterverplaatsing en weinig zeiloppervlak in verhouding tot het gewicht. Deze boten hebben wind boven de 12 knopen nodig om levendig te zeilen.',
  },
  {
    question: 'Moet ik de watertanks legen om de prestatie te verbeteren?',
    answer: 'Ja, het lichter maken van de boot verbetert direct de SA/D-verhouding omdat de werkelijke waterverplaatsing afneemt. Het legen van water- en brandstoftanks kan de waterverplaatsing met honderden kilo\'s verminderen en de verhouding aanzienlijk verhogen.',
  },
  {
    question: 'Wat is de Roach op een zeil?',
    answer: 'De Roach is de bolle curve van het achterlijk (achterrand) van het grootzeil. Het zorgt voor extra zeiloppervlak buiten de geometrische basisdriehoek die door P en E wordt gedefinieerd. Wedstrijdboten hebben agressieve Roaches met stijve latten.',
  },
  {
    question: 'Hoe meet ik de werkelijke waterverplaatsing van mijn boot?',
    answer: 'De meest betrouwbare methode is om de beladen waterverplaatsing te gebruiken (met alle voorraden, water, brandstof en bemanning aan boord). De lichte waterverplaatsing uit de handleiding van de bouwer is meestal optimistisch. Gebruik de werkelijke waterverplaatsing in uw normale zeilomstandigheden.',
  },
  {
    question: 'Waar kan ik de I, J, P en E metingen voor mijn boot vinden?',
    answer: 'U vindt deze in de gebruikershandleiding, in ORC- of IRC-meetbrieven, of in documentatie van het klasse-certificaat. U kunt ze ook rechtstreeks aan boord meten met een meetlint of door contact op te nemen met de botenbouwer.',
  },
];

const howTo: SailAreaLocaleContent['howTo'] = [
  {
    name: 'Selecteer het type tuigage',
    text: 'Kies tussen Sloep (één mast), Kotter (fok en kluiver) of Ketch (bezaansmast). Dit bepaalt hoe het totale zeiloppervlak wordt berekend.',
  },
  {
    name: 'Voer de waterverplaatsing in',
    text: 'Gebruik de werkelijke beladen waterverplaatsing van uw boot in kg of lbs. Dit cijfer is cruciaal voor de berekening van de SA/D-verhouding.',
  },
  {
    name: 'Meet de geometrie van de tuigage',
    text: 'Voer de P (masthoogte), E (gieklengte), I (hoogte voorste driehoek) en J (basis voorste driehoek) metingen in meters of voet in.',
  },
  {
    name: 'Pas de genua overlap aan',
    text: 'Verschuif de regelaar om uw genua overlap aan te geven: 100% is een niet-overlappende fok, 130% is een standaard genua, 155% is een grote overlap genua.',
  },
  {
    name: 'Interpreteer de SA/D verhouding',
    text: 'Een verhouding tussen 16 en 20 duidt op een uitgebalanceerde cruiser. Boven de 20 zal de boot zeer levendig zijn bij lichte wind, maar veeleisend in frisse omstandigheden.',
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
    text: 'Zeiloppervlak Calculator: Volledige Gids voor Prestaties en Ratio\'s',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Zeiloppervlak is de aerodynamische motor van elk zeilschip. Het bepaalt hoeveel windenergie de boot kan vangen en definieert, in combinatie met de waterverplaatsing, het nautische karakter: of het een trage cruiser of een snelle wedstrijdmachine zal zijn. Het correct berekenen van deze waarde is de eerste stap naar het begrijpen van het gedrag van elke zeilboot.',
  },
  {
    type: 'paragraph',
    html: 'Zeilen is een constante dans tussen de kracht van de wind op de zeilen en de weerstand van het water op de romp. De <strong>Sail Area / Displacement ratio (SA/D)</strong> vat deze relatie samen in één getal waarmee boten van elke lengte en waterverplaatsing op gelijke voet kunnen worden vergeleken.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Ideale Cruiser Ratio', value: '15-18', icon: 'mdi:anchor' },
      { label: 'Wedstrijdboten', value: '+24', icon: 'mdi:sailing' },
      { label: 'Foutmarge', value: '5-10%', icon: 'mdi:alert-circle-outline' },
    ],
    columns: 3,
  },
  {
    type: 'title',
    text: 'Waarvoor wordt de SA/D Ratio gebruikt?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'De <strong>Sail Area / Displacement</strong> ratio is een diagnostisch hulpmiddel waarmee u het gedrag van een boot kunt voorspellen voordat u gaat zeilen. Een lage ratio wijst op een robuuste en veilige boot die echter traag is bij lichte wind; een hoge ratio biedt snelheid en een gevoel van vliegen, maar vereist meer vaardigheid van de bemanning als de wind toeneemt. Geen van beide is superieur aan de andere: het hangt allemaal af van het type zeiltocht dat u beoogt.',
  },
  {
    type: 'title',
    text: 'SA/D Verhouding Referentietabel',
    level: 4,
  },
  {
    type: 'table',
    headers: ['Ratio', 'Type Boot', 'Gedrag op Zee'],
    rows: [
      ['< 14', 'Zware Waterverplaatsing / Vrachtschip', 'Stabiel, traag, heeft constante wind nodig'],
      ['14 - 16.5', 'Offshore Passage Cruiser', 'Uitgebalanceerd, comfortabel, goed aan de wind'],
      ['16.5 - 20', 'Standaard Marina Cruiser', 'Levendig bij een briesje, beheersbaar, veelzijdig'],
      ['20 - 25', 'Performance Cruiser / Sport', 'Snel, veeleisend, opwindend bij lichte wind'],
      ['> 25', 'Racer / Extreme Sport', 'Zeer snel, nerveus, vereist ervaren bemanning'],
    ],
  },
  {
    type: 'title',
    text: 'Technisch Lexicon van Metingen (I, J, P, E)',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'I (Hoogte voorste driehoek)',
        definition: 'Verticale afstand van het dek tot het punt waar de val van de fok aan de mast is bevestigd. Definieert de hoogte van de voorste driehoek.',
      },
      {
        term: 'J (Basis voorste driehoek)',
        definition: 'Horizontale afstand van de mast tot de steven (boeg van de boot). Definieert de basis van de voorste driehoek waar de voorzeilen zijn bevestigd.',
      },
      {
        term: 'P (Masthoogte)',
        definition: 'Afstand van de giek tot de valschijf van het grootzeil aan de top van de mast. Definieert de hoogte van het grootzeil.',
      },
      {
        term: 'E (Giek-lengte)',
        definition: 'Afstand van de mast tot de schoothoek van het grootzeil aan het einde van de giek. Definieert de basis van het grootzeil.',
      },
    ],
  },
  {
    type: 'title',
    text: 'Nautische Examenberekeningen (Yachtmaster)',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Berekening van het zeiloppervlak en de SA/D-verhouding maken deel uit van de syllabus voor <strong>Yachtmaster</strong> en kustvaarders-examens. Inzicht in de geometrie van de tuigage en de relatie met de waterverplaatsing is essentieel voor het nemen van veiligheidsbeslissingen op zee: tijdig reven, de juiste genua kiezen of het gedrag van de boot inschatten voor een bui.',
  },
  {
    type: 'tip',
    title: 'Downwind Zeilen en Veiligheid',
    html: 'Voor oceaan- of langeafstandstochten biedt een SA/D-verhouding tussen 16 en 18 de beste balans tussen snelheid en veiligheid. Boten met verhoudingen boven de 22 moeten mogelijk al reven bij windkracht 4-5.',
  },
  {
    type: 'title',
    text: 'Hoe beïnvloedt de Genua Overlap de Prestaties?',
    level: 4,
  },
  {
    type: 'paragraph',
    html: 'De <strong>genua</strong> is het grootste voorzeil, waarvan de schoothoek achter de mast is gepositioneerd, en dus het grootzeil "overlapt". Het overlappingspercentage geeft aan hoeveel langer de loodlijn op het voorlijk (LP) is vergeleken met de J-afstand. Een genua van 150% heeft een LP die gelijk is aan 150% van J, wat een veel groter zeiloppervlak biedt dan een eenvoudige niet-overlappende fok.',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Dacron (Cruising)',
        description: 'Klassiek materiaal voor toerzeilen. Robuust en gemakkelijk te onderhouden.',
        points: [
          'Hoge duurzaamheid en UV-bestendigheid',
          'Lage onderhoudskosten',
          'Zwaarder en uitrekken onder belasting',
          'Ideaal voor kust- en oversteektochten',
        ],
      },
      {
        title: 'Laminaten (Racing)',
        description: 'High-tech materialen zoals Kevlar, Spectra of Dyneema.',
        highlight: true,
        points: [
          'Minimale rek: maximale aerodynamische efficiëntie',
          'Veel lichter dan Dacron',
          'Hogere kosten en kortere levensduur',
          'Essentieel op boten met een SA/D-verhouding > 22',
        ],
      },
    ],
    columns: 2,
  },
  {
    type: 'title',
    text: 'Fysica van het Zeilen en Stabiliteit',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Zeiloppervlak genereert een aandrijvende kracht, maar ook een <strong>hellend moment</strong> waardoor de boot gaat overhellen. Stabiliteit wordt gemeten aan het oprichtend moment dat de boot kan bieden tegen deze hellende kracht. Een hoge SA/D-verhouding in een boot met weinig ballast kan gevaarlijk zijn, terwijl dezelfde verhouding in een boot met een diepe zware kiel volkomen beheersbaar is.',
  },
  {
    type: 'paragraph',
    html: 'Om werkelijk beschikbare kracht te berekenen, gebruiken scheepsbouwers vaak de <strong>Waterverplaatsing-Lengte Verhouding (DLR)</strong> in combinatie met de SA/D. Beide verhoudingen samen beschrijven nauwkeurig of een boot een logge bak is of een snelle wedstrijdboot.',
  },
  {
    type: 'tip',
    title: 'Stabiliteit en Veiligheid',
    html: 'Evalueer SA/D nooit op zichzelf. Een zeilboot met een ratio van 22 en een oprichtingshoek van 90 graden is veel veiliger dan een met een ratio van 18 en een hoek van 60 graden. Raadpleeg altijd de stabiliteitskromme van uw boot.',
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
    name: `Gebruiksaanwijzing: ${title}`,
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
