import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { UnderKeelUI, UnderKeelLocaleContent } from '../index';

const slug = 'ukc-calculator';
const title = 'Kielspeling UKC Calculator';
const description =
  'Bereken het veilige tijdvenster om drempels, kanalen of diepgang-beperkte punten te passeren. Voer de diepgang van uw boot, de kaartdiepte en getijdegegevens in.';

const ui: UnderKeelUI = {
  parametersLabel: 'Parameters',
  boatDraftLabel: 'Diepgang Boot',
  chartDepthLabel: 'Kaartdiepte',
  safetyMarginLabel: 'Veiligheidsmarge',
  highTideLabel: 'Hoogwater',
  lowTideLabel: 'Laagwater',
  metersLabel: 'meter',
  passWindowLabel: 'Vaarvenster',
  neededLabel: 'Benodigde diepte',
  tideRequiredLabel: 'Minimaal benodigd getij',
  statusNeverLabel: 'Geen kielspeling in deze cyclus',
  statusAlwaysLabel: 'Altijd veilig gedurende de cyclus',
  statusFromLabel: 'Vaarvenster vanaf:',
  statusUntilLabel: 'Vaarvenster tot:',
  bottomLabel: 'BODEM',
  faqTitle: 'Veelgestelde Vragen': 'Bibliografie',
};

const faq: UnderKeelLocaleContent['faq'] = [
  {
    question: 'Wat is een kielspeling-berekening precies?',
    answer: 'Het is de berekening van het moment waarop er voldoende diepte is op een kritiek punt (zoals een zandbank of een nauw kanaal) om een veilig transport van een schip mogelijk te maken, afhankelijk van de diepgang.',
  },
  {
    question: 'Hoeveel veiligheidsmarge wordt aanbevolen?',
    answer: 'Voor recreatievaartuigen wordt meestal een minimale veiligheidsmarge tussen 0,5 en 1 meter boven de diepgang van de boot aanbevolen. Deze marge compenseert mogelijke fouten in getijdeberekeningen, atmosferische drukvariaties of onverwachte deining.',
  },
  {
    question: 'Welke invloed heeft deining op de kielspeling?',
    answer: 'Deining veroorzaakt verticale oscillaties in de romp. Op het laagste punt van de golf bevindt de boot zich dichter bij de bodem dan in rust. Bij het passeren van gebieden met deining moet de veiligheidsmarge aanzienlijk worden verhoogd.',
  },
  {
    question: 'Wat is de kaartdiepte?',
    answer: 'Het is de minimale diepte op een punt wanneer het getij op Chart Datum staat. Het wordt opgeteld bij de getijdenhoogte van dat moment om de totale beschikbare diepte te geven.',
  },
  {
    question: 'Wat betekent een onderstreepte diepteschatting op de kaart?',
    answer: 'Het betekent dat dat punt droogvalt wanneer het getij op Chart Datum staat. U hebt dan een hogere getijdenhoogte nodig om eroverheen te kunnen varen.',
  },
  {
    question: 'Wat is het Squat-effect?',
    answer: 'Het is een hydrodynamisch fenomeen waarbij een schip dat door ondiepe kanalen vaart, de neiging heeft lager te zinken ten opzichte van de waterlijn. Hoe sneller u vaart, hoe meer de dynamische diepgang toeneemt en hoe minder water u onder de kiel hebt.',
  },
];

const howTo: UnderKeelLocaleContent['howTo'] = [
  {
    name: 'Definieer diepgang en veiligheidsmarge',
    text: 'Meet de diepgang van uw boot op het maximale punt en voeg een prudente veiligheidsmarge toe (bijv. 0,5 m).',
  },
  {
    name: 'Zoek de kaartdiepte op',
    text: 'Zoek de waarde voor het kritieke punt waar u gaat varen. Let op of het een zanderig of rotsachtig gebied is.',
  },
  {
    name: 'Voer de getijdengegevens in',
    text: 'Gebruik de tijden en hoogtes van hoog- en laagwater uit de dichtstbijzijnde officiële getijdenalmanak.',
  },
  {
    name: 'Controleer uw vaarvenster',
    text: 'De tool toont het exacte tijdsinterval waarin u voldoende diepte hebt om veilig te navigeren.',
  },
];

const seo: UnderKeelLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Kielspeling: Veilig Navigeren over Ondiepten',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Het plannen van een passage eindigt niet met het tekenen van een koers op de kaart. Voor de kustnavigator is een van de meest kritische berekeningen de <strong>kielspeling (UKC)</strong>: weten op welk tijdstip er voldoende diepte zal zijn om een kritiek punt over te steken zonder vast te lopen.',
  },
  {
    type: 'title',
    text: 'Wat is de kaartdiepte en hoe verhoudt deze zich tot het getij?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Op zeekaarten zijn diepten (peilingen) gerelateerd aan het <strong>Reductievlak (Chart Datum)</strong>. De werkelijke diepte die uw boot op een bepaald moment zal vinden, is de som van die peiling plus de getijdenhoogte op dat moment.',
  },
  {
    type: 'title',
    text: 'Elementen van de berekening: Diepgang en Marge',
    level: 3,
  },
  {
    type: 'list',
    items: [
      { term: 'Maximale beladen diepgang', definition: 'De diepte die het laagste punt van de boot (de kiel) bereikt bij volledige belading.' },
      { term: 'Kaartdiepte', definition: 'Het getal op de zeekaart voor het punt dat u wilt oversteken.' },
      { term: 'Veiligheidsmarge', definition: 'Extra vrije ruimte van minimaal 0,5 tot 1 meter boven de diepgang.' },
    ],
  },
  {
    type: 'title',
    text: 'Factoren die de passage beïnvloeden',
    level: 3,
  },
  {
    type: 'table',
    headers: ['Factor', 'Effect', 'Aanbeveling'],
    rows: [
      ['<strong>Deining</strong>', 'Vermindert het water onder de romp', 'Verhoog de veiligheidsmarge aanzienlijk'],
      ['<strong>Squat-effect</strong>', 'Verhoogt de diepgang door aanzuiging', 'Snelheid verminderen in kritieke gebieden'],
      ['<strong>Zandbodem</strong>', 'Diepte variabel door stormen', 'Houd dieptemeter actief en extra marge aan'],
    ],
  },
  {
    type: 'tip',
    title: 'Navigatietip',
    html: 'Als uw vaarvenster erg nauw is of het weer verslechtert, is het meestal de verstandigste beslissing om buitengaats in diep water te wachten tot het getij tot de vereiste hoogte is gestegen.',
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
    name: `Gebruiksaanwijzing: ${title}`,
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
