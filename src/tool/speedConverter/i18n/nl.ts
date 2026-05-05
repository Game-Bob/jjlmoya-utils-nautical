import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SpeedConverterUI, SpeedConverterLocaleContent } from '../index';

const slug = 'snelheidsomzetter';
const title = 'Nautische Snelheidsomzetter en Beaufort schaal';
const description =
  'Reken direct om tussen knopen, km/u, m/s en mph. Inclusief volledige Beaufort-tabel met beschrijvingen van de zeetoestand en windeffecten.';

const beaufortData = [
  { force: 0, name: 'Stil', sea: 'Zee als een spiegel', effect: 'Rook stijgt recht omhoog', kn: '0' },
  { force: 1, name: 'Flauw en stil', sea: 'Rimpelingen als schubben', effect: 'Windrichting af te leiden uit rookdrift', kn: '1-3' },
  { force: 2, name: 'Flauwe koelte', sea: 'Kleine kabbelingen, koppen breken niet', effect: 'Wind voelbaar in gezicht, bladeren ritselen', kn: '4-6' },
  { force: 3, name: 'Lichte koelte', sea: 'Grote kabbelingen, enkele witte koppen', effect: 'Bladeren en twijgen voortdurend in beweging', kn: '7-10' },
  { force: 4, name: 'Matige koelte', sea: 'Kleine golven, veel witte koppen', effect: 'Stof en los papier waaien op', kn: '11-16' },
  { force: 5, name: 'Vrij krachtige wind', sea: 'Matige golven, veel schuimkoppen', effect: 'Kleine bomen in blad beginnen te zwaaien', kn: '17-21' },
  { force: 6, name: 'Krachtige wind', sea: 'Grote golven, witte schuimkammen', effect: 'Moeilijk paraplu te gebruiken', kn: '22-27' },
  { force: 7, name: 'Harde wind', sea: 'Zee hoopt zich op, schuim waait in strepen', effect: 'Moeilijk om tegen de wind in te lopen', kn: '28-33' },
  { force: 8, name: 'Stormachtige wind', sea: 'Hoge golven, verwaaiend water vermindert zicht', effect: 'Lopen zeer moeilijk', kn: '34-40' },
  { force: 9, name: 'Storm', sea: 'Zeer hoge golven, zee begint te rollen', effect: 'Lichte schade aan gebouwen', kn: '41-47' },
  { force: 10, name: 'Zware storm', sea: 'Zeer hoge golven met overhangende kammen, zee ziet wit', effect: 'Bomen worden ontworteld, aanzienlijke schade', kn: '48-55' },
  { force: 11, name: 'Zeer zware storm', sea: 'Buitengewoon hoge golven, schuim bedekt de zee', effect: 'Uitgebreide schade aan gebouwen', kn: '56-63' },
  { force: 12, name: 'Orkaan', sea: 'Lucht is gevuld met schuim en verwaaiend water', effect: 'Totale verwoesting', kn: '64+' },
];

const ui: SpeedConverterUI = {
  knLabel: 'Knopen (kt)',
  kmhLabel: 'Kilometer/uur',
  msLabel: 'Meter/seconde',
  mphLabel: 'Mijl/uur',
  beaufortTitle: 'Beaufort-schaal',
  forceLabel: 'Kracht',
  descriptionLabel: 'Beschrijving',
  knotsLabel: 'Knopen',
  effectLabel: 'Visueel Effect',
  seaStateLabel: 'Zeetoestand',
  windEffectLabel: 'Effect op Land',
  beaufortDataJson: JSON.stringify(beaufortData),
};

const faq: SpeedConverterLocaleContent['faq'] = [
  {
    question: 'Waarom wordt bootsnelheid gemeten in knopen?',
    answer: 'De knoop is een eenheid van snelheid die gelijk is aan één zeemijl per uur. De oorsprong is historisch: zeelieden maten de snelheid van het vaartuig door een stuk hout in zee te werpen dat aan een touw was gebonden met op gelijke afstand knopen. Ze telden hoeveel knopen er in een bepaalde tijd door hun vingers gingen. Tegenwoordig blijft het de internationale standaardeenheid in de maritieme navigatie en luchtvaart.',
  },
  {
    question: 'Wat is de Beaufort-schaal en hoe wordt deze gebruikt bij navigatie?',
    answer: 'De Beaufort-schaal is een empirische schaal die de windsnelheid relateert aan waargenomen effecten op zee en op land. Ontwikkeld door de Britse admiraal Francis Beaufort in 1805, loopt deze van 0 (windstil) tot 12 (orkaan). Zeilers gebruiken het om de windintensiteit zonder instrumenten in te schatten door de toestand van de zee te observeren.',
  },
  {
    question: 'Wat is het verschil tussen SOG en STW bij navigatie?',
    answer: 'SOG (Speed Over Ground) is de werkelijke snelheid van het vaartuig ten opzichte van de zeebodem, gemeten door GPS. STW (Speed Through Water) of log-snelheid is de snelheid van het vaartuig ten opzichte van het omringende water. Het verschil tussen beide weerspiegelt het effect van zeestromingen. SOG wordt gebruikt voor het plannen van aankomsten en het berekenen van brandstof; STW wordt gebruikt voor het berekenen van de drift (leeway).',
  },
  {
    question: 'Hoeveel km/u is één knoop?',
    answer: 'Eén knoop is precies gelijk aan 1,852 kilometer per uur, wat de lengte is van één zeemijl (gedefinieerd als één boogminuut van de aardmeridiaan). Daarom is 10 knopen gelijk aan 18,52 km/u, 20 knopen gelijk aan 37,04 km/u en 30 knopen gelijk aan 55,56 km/u.',
  },
];

const howTo: SpeedConverterLocaleContent['howTo'] = [
  {
    name: 'Voer de snelheid in een willekeurige eenheid in',
    text: 'Typ de snelheidswaarde in het overeenkomstige veld (knopen, km/u, m/s of mph) en alle andere velden worden automatisch bijgewerkt.',
  },
  {
    name: 'Controleer de bijbehorende Beaufort-kracht',
    text: 'De Beaufort-kaart toont in realtime de windkracht die overeenkomt met de ingevoerde snelheid, met de zeetoestand en landeffecten.',
  },
  {
    name: 'Klik op een rij in de Beaufort-tabel',
    text: 'U kunt elke Beaufort-schaal direct selecteren in de onderstaande tabel om de minimumsnelheid in alle formaten te zien.',
  },
  {
    name: 'Gebruik de resultaten om uw navigatie te plannen',
    text: 'Combineer de snelheids- en windinformatie om te beslissen of de omstandigheden geschikt zijn voor uw type vaartuig en de geplande oversteek.',
  },
];

const seo: SpeedConverterLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Gids voor de Nautische Snelheidsomzetter en de Beaufort-schaal',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Snelheid is een fundamenteel gegeven in de maritieme navigatie. Weten hoeveel knopen uw boot maakt, hoe dat zich vertaalt in kilometers per uur voor het plannen van een tocht, of welke Beaufort-kracht de wind die u ervaart vertegenwoordigt, zijn berekeningen die elke zeiler moet beheersen.',
  },
  {
    type: 'paragraph',
    html: 'Met deze nautische snelheidsomzetter kunt u direct omrekenen tussen knopen, km/u, m/s en mph, terwijl automatisch de bijbehorende Beaufort-kracht wordt geïdentificeerd met de beschrijving van de zeetoestand en waarneembare windeffecten.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Standaard Eenheid', value: 'Knopen (kt)', icon: 'mdi:speedometer' },
      { label: 'Windschaal', value: 'Beaufort (0-12)', icon: 'mdi:weather-windy' },
      { label: 'Belangrijkste Omzetting', value: '1 kt = 1,85 km/u', icon: 'mdi:swap-horizontal' },
    ],
  },
  {
    type: 'title',
    text: 'Waarom wordt snelheid gemeten in Knopen?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'De <strong>knoop (kt)</strong> is de officiële eenheid van snelheid in de maritieme en luchtvaartnavigatie. De definitie is nauwkeurig: één knoop is gelijk aan één zeemijl per uur, waarbij de zeemijl (1852 m) is gedefinieerd als één boogminuut van de aardmeridiaan. Deze directe relatie met de geometrie van de aarde maakt de knoop tot een bijzonder praktische eenheid voor navigatie, waardoor afstanden direct op een zeekaart kunnen worden geschat zonder enige conversie.',
  },
  {
    type: 'paragraph',
    html: 'Historisch gezien maten zeelieden de snelheid van hun schip met een <em>logscheit</em>: een driehoekig stuk hout dat in zee werd geworpen en vastzat aan een lijn met knopen op elke 14,4 meter (de proportionele fractie van een zeemijl in 30 seconden). Door de knopen te tellen die gedurende die tijd door hun vingers gingen, kregen ze de snelheid van het vaartuig, wat leidde tot de term die we tegenwoordig gebruiken.',
  },
  {
    type: 'title',
    text: 'De Beaufort-schaal: Het Oog van de Zeiler',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'De <strong>Beaufort-schaal</strong> werd in 1805 ontwikkeld door de Britse admiraal Sir Francis Beaufort als empirische methode om de windkracht te classificeren op basis van waarneembare effecten, zonder instrumentatie. Oorspronkelijk bedacht om in te schatten hoeveel zeil een schip kon voeren, is het tegenwoordig een universele referentie in de maritieme meteorologie, overgenomen door de Wereld Meteorologische Organisatie (WMO).',
  },
  {
    type: 'paragraph',
    html: 'De schaal loopt van <strong>Kracht 0</strong> (bladstil, zee als een spiegel) tot <strong>Kracht 12</strong> (orkaancondities met golven boven de 14 meter en lucht vol schuim en verwaaiend water). Voor de pleziervaarder liggen de kritische grenzen meestal bij Kracht 6 (krachtige wind, 22-27 knopen) voor kleine schepen en Kracht 7-8 voor oceaanwaardige jachten.',
  },
  {
    type: 'table',
    headers: ['Beaufort Kracht', 'Beschrijving', 'Zeetoestand'],
    rows: [
      ['0', 'Stil', 'Zee als een spiegel'],
      ['3', 'Lichte koelte', 'Enkele witte koppen, kammen beginnen te breken'],
      ['6', 'Krachtige wind', 'Grote golven, witte schuimkammen, verstuivend water mogelijk'],
      ['9', 'Storm', 'Zeer hoge golven, zichtbaarheid verminderd door schuim en stuivend water'],
      ['12', 'Orkaan', 'Lucht volledig gevuld met schuim, zee is helemaal wit'],
    ],
  },
  {
    type: 'title',
    text: 'Nautische Snelheid Glossarium',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      { term: 'Knoop (kt)', definition: 'Eenheid van snelheid gelijk aan één zeemijl per uur (1852 m/u). Internationale standaard in maritieme en luchtvaartnavigatie.' },
      { term: 'SOG (Speed Over Ground)', definition: 'Werkelijke vaartuigsnelheid over de zeebodem, gemeten door GPS. Weerspiegelt het effect van zeestromingen op de bootsnelheid.' },
      { term: 'Log-snelheid (STW)', definition: 'Snelheid van het vaartuig ten opzichte van het omringende water, gemeten door de log. Omvat geen stroomeffecten; cruciaal voor het berekenen van de drift.' },
      { term: 'Schijnbare Wind', definition: 'Wind die de bemanning aan boord ervaart, het resultaat van de vectorsom van de ware wind en de rijwind die ontstaat door het varen. Verschilt altijd van de ware wind in sterkte en richting.' },
    ],
  },
  {
    type: 'title',
    text: 'Sneltoetsformules voor Omzetting',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Gebruik deze snelle benaderingen die elke zeiler uit het hoofd moet kennen om snelheden handmatig om te rekenen als u geen toegang heeft tot een digitale omvormer:',
  },
  {
    type: 'list',
    items: [
      '<strong>Knopen naar km/u:</strong> Vermenigvuldig knopen met 1,852. Snelle benadering: knopen x 2, min 8%%. Bijvoorbeeld, 10 kt ≈ 20 - 1,6 = 18,4 km/u.',
      '<strong>Knopen naar mph:</strong> Vermenigvuldig knopen met 1,15. Benadering: knopen + 15%%. Bijvoorbeeld, 20 kt ≈ 23 mph.',
      '<strong>Knopen naar m/s:</strong> Vermenigvuldig knopen met 0,514. Snelle benadering: deel knopen door 2. Bijvoorbeeld, 10 kt ≈ 5 m/s (exact: 5,14 m/s).',
    ],
  },
  {
    type: 'tip',
    title: 'Veiligheid en Klimatologie',
    html: 'Raadpleeg voor het uitvaren altijd de maritieme weersverwachting. Beaufort 4-5 is hanteerbaar voor de meeste pleziervaartuigen; vanaf Kracht 6 en hoger moet u serieus overwegen om het vertrek uit te stellen als u niet over voldoende ervaring beschikt of uw boot niet voorbereid is op die omstandigheden.',
  },
  {
    type: 'title',
    text: 'Vergelijking van Apparatuur',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Digitale Anemometer',
        description: 'Elektronisch instrument voor nauwkeurige meting van de windsnelheid.',
        icon: 'mdi:speedometer',
        points: [
          'Nauwkeurigheid van ±2%% onder normale omstandigheden',
          'Vereist elektrische voeding of batterijen',
          'Kan falen in extreme omstandigheden',
          'Directe aflezing en gegevensregistratie',
        ],
      },
      {
        title: 'Beaufort Waarneming',
        description: 'Visuele schatting van de windkracht op basis van waarneembare effecten op zee en land.',
        icon: 'mdi:eye-outline',
        highlight: true,
        points: [
          'Vereist geen enkel instrument',
          'Beschikbaar in alle omstandigheden',
          'Voldoende nauwkeurigheid voor veiligheidsbeslissingen',
          'Fundamentele vaardigheid van de ervaren navigator',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Navigatie en Tochtplanning',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Bij het plannen van een tocht bepaalt uw vaartuigsnelheid de verwachte aankomsttijd (ETA) en het brandstofverbruik voor motorvaartuigen. Voor een zeiljacht hangt de snelheid ook af van de windkracht en -richting: als u de voorspelde Beaufort-kracht kent, kunt u anticiperen of u kunt zeilen of dat u de motor nodig heeft.',
  },
  {
    type: 'paragraph',
    html: 'Bij wedstrijdzeilen is de omzetting tussen knopen en meter per seconde vooral handig voor het berekenen van VMG (Velocity Made Good) en voor het analyseren van zeilpolairs. Meteorologen en numerieke voorspellingsmodellen geven de wind meestal in m/s of km/u, dus de conversie naar knopen is een routineuze stap in tactische planning.',
  },
];

const schemas: SpeedConverterLocaleContent['schemas'] = [
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

export const content: SpeedConverterLocaleContent = {
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
