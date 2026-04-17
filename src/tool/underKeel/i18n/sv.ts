import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { UnderKeelUI, UnderKeelLocaleContent } from '../index';

const slug = 'ukc-kalkylator';
const title = 'Kalkylator för kielspeling UKC';
const description =
  'Beräkna det säkra tidsfönstret för att passera grund, kanaler eller punkter med begränsat djupgående. Ange båtens djupgående, sjökortsdjup och tidvattensdata.';

const ui: UnderKeelUI = {
  parametersLabel: 'Parametrar',
  boatDraftLabel: 'Båtens djupgående',
  chartDepthLabel: 'Sjökortsdjup',
  safetyMarginLabel: 'Säkerhetsmarginal',
  highTideLabel: 'Högvatten',
  lowTideLabel: 'Lågvatten',
  metersLabel: 'meter',
  passWindowLabel: 'Passagefönster',
  neededLabel: 'Nödvändigt djup',
  tideRequiredLabel: 'Minsta nödvändiga tidvattenhöjd',
  statusNeverLabel: 'Ingen kielspeling i denna cykel',
  statusAlwaysLabel: 'Passage möjlig hela cykeln',
  statusFromLabel: 'Passage från:',
  statusUntilLabel: 'Passage till:',
  bottomLabel: 'BOTTEN',
  faqTitle: 'Vanliga frågor',
  bibliographyTitle: 'Bibliografi',
};

const faq: UnderKeelLocaleContent['faq'] = [
  {
    question: 'Vad exakt är en beräkning av kielspeling (under-keel clearance)?',
    answer: 'Det är beräkningen av det ögonblick då det finns tillräckligt djup vid en kritisk punkt (som en sandbank eller en smal kanal) för att tillåta säker passage för ett fartyg enligt dess djupgående.',
  },
  {
    question: 'Hur stor säkerhetsmarginal rekommenderas?',
    answer: 'För fritidsbåtar rekommenderas vanligtvis en minsta säkerhetsmarginal på mellan 0,5 och 1 meter över båtens djupgående. Denna marginal kompenserar för möjliga fel i tidvattensberäkningar, lufttrycksvariationer eller oväntad dyning.',
  },
  {
    question: 'Hur påverkar dyning kielspelingen?',
    answer: 'Dyning genererar vertikala svängningar i skrovet. Vid vågens lägsta punkt är båten närmare botten än vid vila. Vid passage av områden med dyning måste säkerhetsmarginalen ökas avsevärt.',
  },
  {
    question: 'Vad är sjökortsdjup (chart sounding)?',
    answer: 'Det är det minsta djupet vid en punkt när tidvattnet är vid sjökortsplan (Chart Datum). Det adderas till tidvattenhöjden vid det tillfället för att ge det totala tillgängliga djupet.',
  },
  {
    question: 'Vad betyder en understruken djupsiffra i sjökortet?',
    answer: 'Det betyder att den punkten är torr (ovan vatten) när tidvattnet är vid sjökortsplan. Du behöver en högre tidvattenhöjd för att kunna passera över den.',
  },
  {
    question: 'Vad är Squat-effekt?',
    answer: 'Det är ett hydrodynamiskt fenomen där ett fartyg som navigerar genom grunda kanaler tenderar att sjunka djupare i förhållande till sin vattenlinje. Ju snabbare du färdas, desto mer ökar det dynamiska djupgåendet och desto mindre vatten har du under kölen.',
  },
];

const howTo: UnderKeelLocaleContent['howTo'] = [
  {
    name: 'Definiera djupgående och säkerhetsmarginal',
    text: 'Mät din båts djupgående vid dess djupaste punkt och lägg till en försiktig säkerhetsmarginal (t.ex. 0,5 m).',
  },
  {
    name: 'Slå upp sjökortsdjupet',
    text: 'Hitta djupvärdet för den kritiska punkt du ska navigera vid. Notera om det är ett sandigt eller stenigt område.',
  },
  {
    name: 'Ange tidvattensdata',
    text: 'Använd tider och höjder för hög- och lågvatten från den närmaste officiella tidvattenalmanackan.',
  },
  {
    name: 'Kontrollera ditt passagefönster',
    text: 'Verktyget visar det exakta tidsintervallet under vilket du kommer att ha tillräckligt djup för att navigera säkert.',
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
    text: 'Kielspeling: Navigera säkert över grund',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Planering av en passage slutar inte med att man ritar en kurs i sjökortet. För kustnavigatören är en av de mest kritiska beräkningarna <strong>kielspeling (Under-Keel Clearance)</strong>: att veta vid vilken tidpunkt det finns tillräckligt med djup för att korsa en kritisk punkt utan att gå på grund.',
  },
  {
    type: 'title',
    text: 'Vad är sjökortsdjup och hur förhåller det sig till tidvattnet?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'I sjökort refererar djup till <strong>sjökortsplan (Chart Datum)</strong>. Detta nivå är den lägsta nivå tidvattnet når under normala förhållanden. Det faktiska djupet din båt kommer att uppleva vid varje givet tillfälle är summan av det sjökortsdjupet plus tidvattenhöjden vid det ögonblicket.',
  },
  {
    type: 'title',
    text: 'Elementen i beräkningen: Djupgående och Marginal',
    level: 3,
  },
  {
    type: 'list',
    items: [
      { term: 'Maximalt lastat djupgående', definition: 'Det djup som nås av båtens lägsta punkt (kölen) vid full last.' },
      { term: 'Sjökortsdjup', definition: 'Siffran i sjökortet för den punkt du vill korsa. Om understruken är punkten torr vid sjökortsplan.' },
      { term: 'Säkerhetsmarginal', definition: 'Extra fritt utrymme på minst 0,5 till 1 meter över djupgåendet.' },
    ],
  },
  {
    type: 'title',
    text: 'Faktorer som påverkar passage',
    level: 3,
  },
  {
    type: 'table',
    headers: ['Faktor', 'Effekt', 'Rekommendation'],
    rows: [
      ['<strong>Dyning</strong>', 'Minskar vattnet under skrovet', 'Öka säkerhetsmarginalen avsevärt'],
      ['<strong>Squat-effekt</strong>', 'Ökar djupgåendet genom sugverkan', 'Minska farten i kritiska områden'],
      ['<strong>Sandbotten</strong>', 'Djupet varierar med stormar', 'Håll ekolodet aktivt och ha extra marginal'],
    ],
  },
  {
    type: 'tip',
    title: 'Navigationstips',
    html: 'Om ditt passagefönster är mycket smalt eller vädret försämras, är det klokaste beslutet vanligtvis att vänta ute på djupt vatten tills tidvattnet stigit till den nödvändiga höjden.',
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
    name: `Hur man använder: ${title}`,
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
