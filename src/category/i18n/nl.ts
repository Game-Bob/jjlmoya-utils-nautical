import type { CategoryLocaleContent } from '../index';

const slug = 'zeilen-en-nautiek';
const title = 'Zeilen & Nautiek';
const description =
  'Nautische berekeningstools voor zeilers: getijden, actieradius, zeilvlak, eenheidsconverters en snelheid. Ideaal voor de voorbereiding op RYA- en Yachtmaster-examens.';

const seo: CategoryLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Waarom digitale tools gebruiken bij zeilen en navigeren?',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Moderne navigatie heeft een radicale transformatie ondergaan met de komst van digitale tools. Of u nu op een kleine recreatievaarder bent of aan het roer van een cruisingjacht staat, de mogelijkheid om positie-, wind- en stroomgegevens direct te verwerken is niet alleen een kwestie van gemak — het is een fundamentele pijler van veiligheid op zee.',
  },
  {
    type: 'paragraph',
    html: 'Historisch gezien was de zeevaarder uitsluitend afhankelijk van de sextant, de maritieme chronometer en reductiestabellen om zijn positie op de uitgestrekte oceaan te bepalen. Vandaag de dag, hoewel het romantisme van de sextant voortduurt, vraagt de operationele realiteit om een reactiesnelheid die alleen digitale berekeningstools kunnen bieden.',
  },
  {
    type: 'title',
    text: 'Sleutelaspecten voor de Moderne Navigator',
    level: 2,
  },
  {
    type: 'title',
    text: 'Geolocatie en Hoogprecisie Digitale Cartografie',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Digitale cartografie heeft navigatie gedemocratiseerd en geeft zelfs kleine boten toegang tot informatie die voorheen beperkt was tot grote commerciële vaartuigen. Een verantwoordelijke schipper gebruikt digitale tools om zijn oordeel te valideren, niet om het te vervangen.',
  },
  {
    type: 'list',
    items: [
      'Nauwkeurigheid van gegevensinvoer: Minimale typefouten kunnen u mijlen van uw bestemming verwijderd brengen.',
      'Apparaatoverschrijdende compatibiliteit: Synchroniseer reisplanning op een tablet met bruginstrumenten.',
      'Hardware-storingbackup: Lichte web-apps zijn een verzekering als de boordplotter crasht.',
      'Reisplanning: Nautische rekenmachines maken nauwkeurige schattingen van brandstofverbruik en afstanden mogelijk.',
    ],
  },
  {
    type: 'title',
    text: 'Marine Meteorologie en Routeoptimalisatie',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Wind en zeegang zijn de ware heersers van het zeilen. Correcte interpretatie van windschalen (zoals de Beaufortschaal) en hun omrekening naar praktische eenheden zoals knopen is de dagelijkse realiteit van elke navigator.',
  },
  {
    type: 'tip',
    title: 'Het belang van redundantie en Plan B',
    html: 'Vertrouw nooit al uw navigatie aan één enkel elektronisch systeem. Bewaar altijd een back-up van uw kritieke waypoints op papier. Web-tools zijn uitstekend voor planning voorafgaand aan de tocht, maar een goede zeiler heeft altijd een noodplan dat geen scherm vereist.',
  },
  {
    type: 'title',
    text: 'Nautische Opleiding en het Gebruik van Rekenmachines',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Zelfs in officiële examens voor nautische kwalificaties (zoals de RYA Dayskipper of Yachtmaster) blijven kaartberekeningen verplicht. Digitale tools dienen als de perfecte studiebegeleider, waardoor kandidaten hun bestek-oefeningen, getijberekeningen en kompascorrecties kunnen verifiëren.',
  },
  {
    type: 'paragraph',
    html: 'Onze collectie utilities beoogt die brug te zijn tussen het academische rigor van papieren zeekaarten en de onmiddellijkheid van moderne navigatie. We willen dat elke schipper, liefhebber of professional hier de snelle en nauwkeurige gegevens vindt die ze nodig hebben voordat ze uitvaren.',
  },
];

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo,
};
