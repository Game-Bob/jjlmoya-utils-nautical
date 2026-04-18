import type { CategoryLocaleContent } from '../index';

const slug = 'segling-och-nautik';
const title = 'Segling & Nautik';
const description =
  'Nautiska beräkningsverktyg för seglare: tidvatten, räckvidd, segelduk, enhetsomvandlare och hastighet. Idealisk för studier inför RYA- och Yachtmaster-examen.';

const seo: CategoryLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Varför använda digitala verktyg vid segling och navigering?',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Modern navigering har genomgått en radikal omvandling med introduktionen av digitala verktyg. Oavsett om du är ombord på en liten fritidsbåt eller vid rodret på en kryssningsjakt, är förmågan att omedelbart bearbeta positions-, vind- och strömdata inte bara en bekvämlighet — det är en grundläggande säkerhetspelare till sjöss.',
  },
  {
    type: 'paragraph',
    html: 'Historiskt sett var sjömannen uteslutande beroende av sextanten, den marina kronometern och reduktionsstabeller för att bestämma positionen på det vida havet. Idag, även om sextantens romantik kvarstår, kräver den operativa verkligheten en svarstid som bara digitala beräkningsverktyg kan tillhandahålla.',
  },
  {
    type: 'title',
    text: 'Viktiga Aspekter för den Moderne Navigatören',
    level: 2,
  },
  {
    type: 'title',
    text: 'Geolokalisering och Högprecisiondig Kartografi',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Digital kartografi har demokratiserat navigeringen och ger även små båtar tillgång till information som tidigare var begränsad till stora kommersiella fartyg. En ansvarsfull skeppare använder digitala verktyg för att validera sitt omdöme, inte för att ersätta det.',
  },
  {
    type: 'list',
    items: [
      'Datainmatningsprecision: Minimala stavfel kan föra dig mil bort från ditt mål.',
      'Kompatibilitet mellan enheter: Synkronisera passageplanering på en surfplatta med bryggans instrument.',
      'Säkerhetskopiering vid maskinvarufel: Lätta webbappar är en försäkring om ombordplottaren kraschar.',
      'Passagering: Nautiska kalkylatorer möjliggör noggranna uppskattningar av bränsleförbrukning och avstånd.',
    ],
  },
  {
    type: 'title',
    text: 'Marin Meteorologi och Ruttoptimering',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Vind och sjötillstånd är seglingens verkliga suveräner. Korrekt tolkning av vindkalor (som Beaufortskalan) och deras omräkning till praktiska enheter som knop är varje navigatörs vardag.',
  },
  {
    type: 'tip',
    title: 'Vikten av redundans och Plan B',
    html: 'Lita aldrig all din navigering till ett enda elektroniskt system. Ha alltid en säkerhetskopia av dina kritiska waypoints på papper. Webbverktyg är utmärkta för planering före avfärd, men en bra sjöman har alltid en nödplan som inte kräver en skärm.',
  },
  {
    type: 'title',
    text: 'Nautisk Utbildning och Användning av Kalkylatorer',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Även i officiella prov för nautiska kvalifikationer (som RYA Dayskipper eller Yachtmaster) förblir sjökortsberäkningar obligatoriska. Digitala verktyg fungerar som den perfekta studiekompanjonen och låter kandidater kontrollera sina bestickövningar, tidvattenberäkningar och kompasskorrektioner.',
  },
  {
    type: 'paragraph',
    html: 'Vår samling av verktyg syftar till att vara den bryggan mellan pappersjökortsens akademiska stränghet och den moderna navigeringens omedelbarhet. Vi vill att varje skeppare, entusiast eller professionell ska hitta här de snabba och exakta uppgifter de behöver innan de kastar loss.',
  },
];

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo,
};
