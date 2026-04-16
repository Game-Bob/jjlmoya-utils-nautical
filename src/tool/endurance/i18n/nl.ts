import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EnduranceUI, EnduranceLocaleContent } from '../index';

const slug = 'actieradius-calculator-nl';
const title = 'Nautische Actieradius Calculator';
const description =
  'Bereken uw maximale bereik und veilige afstand op basis van brandstofverbruik, tankinhoud en kruissnelheid. Brandstofbeheer voor motorboten.';

const ui: EnduranceUI = {
  tankCapacityLabel: 'Tankinhoud',
  mainTankLabel: 'Hoofdtank',
  auxTankLabel: 'Hulptank',
  currentFuelLabel: 'Huidige Brandstof',
  seaConditionsLabel: 'Zee- / Windcondities',
  consumptionLabel: 'Theoretisch Verbruik',
  cruiseSpeedLabel: 'Kruissnelheid',
  reserveLabel: 'Reserve',
  fuelPriceLabel: 'Prijs per Liter',
  maxRangeLabel: 'Maximale Actieradius',
  realPerformanceLabel: 'Werkelijke Prestatie',
  hoursLabel: 'Uren Autonomie',
  safeMilesLabel: 'Veilige Mijlen',
  tankValueLabel: 'Tankwaarde',
  inverseCalcLabel: 'Omgekeerde Berekening: Hoeveel moet ik bijtanken?',
  desiredDistLabel: 'Gewenste Afstand',
  minFuelLabel: 'Minimaal Benodigde Brandstof',
  warningLabel: 'Herinnering: Een reserve van 20% is het absolute minimum dat wordt aanbevolen voor de nautische veiligheid.',
  seaCalm: 'Kalm (1.0x)',
  seaLight: 'Lichte deining (+15%)',
  seaModerate: 'Matige deining (+30%)',
  seaStorm: 'Storm (+60%)',
  faqTitle: 'Veelgestelde Vragen',
  bibliographyTitle: 'Bibliografie',
};

const faq: EnduranceLocaleContent['faq'] = [
  {
    question: 'Hoe wordt de autonomie van een motorboot berekend?',
    answer: 'De autonomie wordt berekend door de beschikbare brandstof te delen door het verbruik per uur voor de totale vaartijd, en deze tijd vervolgens te vermenigvuldigen met de kruissnelheid. De tool past ook een zeegangfactor toe voor een realistisch beeld van de omstandigheden.',
  },
  {
    question: 'Waarom is een reserve van 20% aanbevolen in de zeevaart?',
    answer: 'De reserve van 20% is een nautische veiligheidsnorm die voldoende brandstof garandeert in geval van onvoorziene gebeurtenissen: tegenstroom, omwegen door slecht weer, rekenfouten in het verbruik of de noodzaak om een ander schip te helpen. Veel verzekeraars en havenautoriteiten stellen dit verplicht.',
  },
  {
    question: 'Wat is de L/NM prestatie en hoe beïnvloedt dit de planning?',
    answer: 'De prestatie in liters per zeemijl (L/NM) is de werkelijke efficiëntie van de motor onder zeecondities. In tegenstelling tot het verbruik per uur, kunt u hiermee precies berekenen hoeveel brandstof er nodig is voor een specifieke afstand, ongeacht de snelheid.',
  },
  {
    question: 'Welk effect heeft de zeegang op het werkelijke verbruik?',
    answer: 'De zeegang verhoogt het verbruik omdat de romp harder moet werken tegen water- en windweerstand. Bij lichte deining stijgt het verbruik met 15%, bij matige deining met 30% en bij storm kan dit oplopen tot 60% of meer. Het negeren van deze factor kan een schip zonder brandstof laten zitten voordat de haven wordt bereikt.',
  },
];

const howTo: EnduranceLocaleContent['howTo'] = [
  {
    name: 'Voer uw tankinhoud in',
    text: 'Voer het aantal liters van de hoofdtank in en van de hulptank als u die heeft. De tool berekent het huidige vulpercentage.',
  },
  {
    name: 'Voer het huidige brandstofniveau in',
    text: 'Voer het werkelijke aantal liters in dat u nu heeft. U kunt dit aflezen van de niveaumeter of schatten op basis van de laatste tankbeurt.',
  },
  {
    name: 'Pas de vaaromstandigheden aan',
    text: 'Selecteer de verwachte zeegang voor uw oversteek. De zeegangfactor corrigeert het theoretische verbruik naar het verwachte werkelijke verbruik.',
  },
  {
    name: 'Voer verbruik en kruissnelheid in',
    text: 'Gebruik fabrieksgegevens of uw eigen gegevens voor het verbruik per uur en de snelheid waarmee u gewoonlijk vaart.',
  },
  {
    name: 'Bekijk de veilige afstand en omgekeerde berekening',
    text: 'De tool toont hoeveel mijl u veilig kunt afleggen en hoeveel brandstof u nodig heeft voor een specifieke bestemming.',
  },
];

const bibliography: EnduranceLocaleContent['bibliography'] = [
  {
    name: 'UK Maritime and Coastguard Agency',
    url: 'https://www.gov.uk/government/organisations/maritime-and-coastguard-agency',
  },
  {
    name: 'RYA - Royal Yachting Association',
    url: 'https://www.rya.org.uk/',
  },
];

const seo: EnduranceLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Brandstofbeheer en Autonomie in de Motorvaart',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>Nautische autonomie</strong> is een van de meest kritische berekeningen voordat u uitvaart met een motorboot. Precies weten hoeveel mijl u kunt afleggen met de beschikbare brandstof maakt het verschil tussen een geplande oversteek en een noodtoestand op zee.',
  },
  {
    type: 'paragraph',
    html: 'Deze actieradius calculator integreert de <strong>zeegangfactor</strong>, het percentage veiligheidsreserve en de omgekeerde brandstofberekening voor een volledig en betrouwbaar brandstofbeheer in elke situatie.',
  },
  {
    type: 'title',
    text: 'De Gouden Regel: De Regel van Derden',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'De klassieke brandstofbeheerregel in de zeevaart verdeelt de tank in drie gelijke delen om altijd een veiligheidsmarge te garanderen:',
  },
  {
    type: 'list',
    items: [
      '<strong>Een derde voor de heenreis:</strong> De benodigde brandstof om de geplande bestemming te bereiken.',
      '<strong>Een derde voor de terugreis:</strong> De brandstof om terug te keren naar de vertrekhaven of de dichtstbijzijnde haven.',
      '<strong>Een derde als reserve:</strong> De veiligheidsmarge voor onvoorziene gebeurtenissen, stromingen of slechte omstandigheden.',
    ],
  },
  {
    type: 'paragraph',
    html: 'In de calculator kunt u het reservepercentage naar eigen inzicht instellen, hoewel <strong>onder de 20% gaan nooit wordt aanbevolen</strong>. Bij grotere tanks of lange oversteken verhogen veel ervaren schippers deze marge tot 30% of zelfs 33%.',
  },
  {
    type: 'title',
    text: 'Factoren die het Verbruik Beïnvloeden (l/u)',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Het theoretische verbruik van de fabrikant wordt berekend onder ideale laboratoriumomstandigheden. In de praktijk veranderen meerdere factoren het <strong>werkelijke brandstofverbruik</strong>. De rompsnelheid is de meest beslissende factor: boven de economische snelheid varen kan het verbruik per afgelegde mijl verdubbelen of verdrievoudigen.',
  },
  {
    type: 'table',
    headers: ['Vaartoestand', 'Effect op Autonomie', 'Advies'],
    rows: [
      ['<strong>Vuile Romp</strong>', 'Vermindert autonomie tot 20%', 'Reinig de romp voor het seizoen'],
      ['<strong>Tegenstroom</strong>', 'Kan effectieve snelheid met 30% verlagen', 'Reken altijd met de snelheid over de grond (SOG)'],
      ['<strong>Tegenwind</strong>', 'Verhoogt weerstand en verbruik met 10-25%', 'Gebruik de lichte of matige deiningfactor'],
      ['<strong>Overbelading</strong>', 'Verhoogt diepgang en weerstand', 'Weeg uitrusting en proviand voor het berekenen'],
    ],
  },
  {
    type: 'title',
    text: 'Technisch Glossarium Autonomie',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: 'Prestatie (L/NM)', definition: 'Liters verbruikte brandstof per afgelegde zeemijl. De meest nuttige indicator voor het plannen van tochten omdat het verbruik koppelt aan de werkelijke afstand.' },
      { term: 'Kruissnelheid', definition: 'De optimale snelheid waarbij de motor de beste balans biedt tussen snelheid en verbruik. Meestal tussen 70% en 80% van het maximale vermogen.' },
      { term: 'Kritieke Reserve', definition: 'Het percentage van de tank dat nooit verbruikt mag worden. Een minimum van 20% wordt aanbevolen voor onvoorziene omstandigheden en om te voorkomen dat er lucht in het brandstofcircuit komt.' },
      { term: 'Specifiek Verbruik', definition: 'Gram brandstof per kilowattuur geproduceerd vermogen (g/kWh). Technische motormaat waarmee de efficiëntie tussen verschillende aandrijfsystemen kan worden vergeken.' },
    ],
  },
  {
    type: 'title',
    text: 'Het Gevaar van Slib en Beweging',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Een veelvoorkomende bron van problemen bij schepen met een laag brandstofniveau is <strong>slib op de tankbodem</strong>. Als het niveau te laag wordt, kunnen sedimenten die zich in de loop der jaren hebben verzameld het filter bereiken en verstoppen, waardoor de motor uitvalt terwijl de meter nog enkele liters aangeeft.',
  },
  {
    type: 'paragraph',
    html: 'De beweging van de boot op zee met weinig brandstof kan ook problemen veroorzaken: de vloeistof schommelt met de golven en kan de brandstofpomp kortstondig droog laten lopen. Het handhaven van de reserve zorgt ervoor dat dit niet gebeurt op een kritiek moment, zoals bij het binnenvaren van een haven.',
  },
  {
    type: 'tip',
    title: 'Bespaartip voor Brandstof',
    html: 'De snelheid met 10-15% verlagen onder uw gebruikelijke kruissnelheid kan de efficiëntie met wel 30% verbeteren. Als u de tijd heeft en het weer gunstig is, is langzamer varen altijd de meest economische en veilige beslissing.',
  },
  {
    type: 'title',
    text: 'Verschil tussen Zeemijlen (NM) en Kilometers',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Een <strong>zeemijl</strong> is gelijk aan 1.852 meter (1,852 km) en is de universele afstandseenheid in de maritieme en luchtvaartnavigatie. Het is gebaseerd op één boogminuut van een geografische graad, wat het ideaal maakt voor navigatie met zeekaarten in geografische coördinaten. Snelheid in zeemijlen per uur wordt een knoop (kn) genoemd.',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Analoge Wijzermeter',
        description: 'Traditioneel vlottersysteem',
        points: [
          'Lage kosten en eenvoudige installatie',
          'Geen elektriciteit nodig voor werking',
          'Onnauwkeurig bij ruwe zee door brandstofbeweging',
          'Toont geen verbruik of geschatte autonomie',
        ],
      },
      {
        title: 'Digitale Flowcalculator',
        description: 'Elektronische flowsensoren',
        highlight: true,
        points: [
          '1-2% nauwkeurigheid op werkelijk verbruik',
          'Toont autonomie, verbruik en kosten in realtime',
          'Integreerbaar met kaartplotters en NMEA 2000',
          'Vereist initiële kalibratie en onderhoud',
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
    name: `Gebruiksaanwijzing: ${title}`,
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
