import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { UnderKeelUI, UnderKeelLocaleContent } from '../index';

const slug = 'calculateur-passage-haut-fond';
const title = 'Calculateur de Passage sur Haut Fond';
const description =
  "Calculez la feneˆtre de temps sure pour franchir des barres, chenaux ou points a tirant d'eau restreint. Entrez le tirant d'eau de votre bateau, la sonde de la carte et les donnees de maree pour obtenir l'intervalle de passage sur.";

const ui: UnderKeelUI = {
  parametersLabel: 'Parametres',
  boatDraftLabel: "Tirant d'eau",
  chartDepthLabel: 'Sonde de la carte',
  safetyMarginLabel: 'Marge de securite',
  highTideLabel: 'Pleine mer',
  lowTideLabel: 'Basse mer',
  metersLabel: 'metres',
  passWindowLabel: 'Feneˆtre de passage',
  neededLabel: 'Profondeur necessaire',
  tideRequiredLabel: 'Maree minimale requise',
  statusNeverLabel: 'Pas de passage dans ce cycle',
  statusAlwaysLabel: 'Passage libre tout le cycle',
  statusFromLabel: 'Passage a partir de :',
  statusUntilLabel: "Passage jusqu'a :",
  bottomLabel: 'FOND',
  faqTitle: 'Questions Frequentes',
  bibliographyTitle: 'Bibliographie',
};

const faq: UnderKeelLocaleContent['faq'] = [
  {
    question: "Qu'est-ce que le calcul de passage sur haut-fond?",
    answer: "C'est le calcul du moment ou la profondeur est suffisante en un point critique (comme une barre de sable ou un chenal etroit) pour permettre le transit sur d'un navire selon son tirant d'eau.",
  },
  {
    question: 'Quelle marge de securite est recommandee?',
    answer: "Pour les bateaux de plaisance, une marge minimale de 0,5 a 1 metre au-dessus du tirant d'eau est generalement recommandee. Cette marge compense les erreurs possibles dans le calcul de la maree, les variations de pression atmospherique ou la houle imprevue.",
  },
  {
    question: 'Comment la houle affecte-t-elle le passage?',
    answer: "La houle genere des oscillations verticales dans la coque. Au point le plus bas de la vague, le bateau est plus pres du fond qu'au repos. Pour traverser des zones avec de la houle, la marge doit etre augmentee sensiblement.",
  },
  {
    question: 'Que signifie la sonde sur la carte nautique?',
    answer: "C'est la profondeur minimale en un point lorsque la maree est au zero hydrographique (Datum). Elle s'ajoute a la hauteur de maree a cet instant pour donner la profondeur totale disponible.",
  },
  {
    question: 'Que signifie une sonde soulignee sur la carte?',
    answer: "Cela signifie que ce point se decouvre lorsque la maree est au zero hydrographique. Vous aurez besoin d'une hauteur de maree plus importante pour pouvoir passer dessus.",
  },
  {
    question: "Qu'est-ce que l'effet Squat et comment modifie-t-il le passage?",
    answer: "C'est un phenomene hydrodynamique par lequel un bateau navigant dans des chenaux peu profonds tend a s'enfoncer davantage par rapport a sa ligne de flottaison. Plus vous allez vite, plus le tirant d'eau dynamique augmente et moins vous avez d'eau sous la quille.",
  },
];

const howTo: UnderKeelLocaleContent['howTo'] = [
  {
    name: "Definir le tirant d'eau et la marge",
    text: "Mesurez le tirant d'eau de votre bateau a son point maximum et ajoutez une marge de securite prudente (par exemple 0,5 m).",
  },
  {
    name: 'Consulter la sonde sur la carte',
    text: 'Recherchez la valeur de sonde Datum pour le point critique que vous allez naviguer. Notez si c\'est une zone de sable ou de roche.',
  },
  {
    name: 'Saisir les donnees de maree',
    text: "Utilisez les heures et hauteurs de pleine mer et basse mer de l'annuaire officiel le plus proche.",
  },
  {
    name: 'Verifier votre feneˆtre de passage',
    text: "L'outil vous indiquera l'intervalle de temps exact pendant lequel vous aurez une profondeur suffisante pour naviguer en toute securite.",
  },
];

const bibliography: UnderKeelLocaleContent['bibliography'] = [
  {
    name: 'Ministerio de Transportes - Navigation de Plaisance',
    url: 'https://www.mitma.gob.es/marina-mercante/nautica-de-recreo/',
  },
  {
    name: 'Portos de Galicia - Tables des Marees',
    url: 'https://portosdegalicia.gal/es/taboa-de-mareas',
  },
];

const seo: UnderKeelLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Passage sur Haut Fond : Naviguer en Securite au-dessus des Obstacles',
    level: 2,
  },
  {
    type: 'paragraph',
    html: "La planification d'une traversee ne s'arrete pas au trace d'une route sur la carte. Pour le navigateur cotier, l'un des calculs les plus determinants est celui du <strong>passage sur haut-fond</strong> : savoir a quelle heure la profondeur sera suffisante pour franchir un point critique sans s'echouer.",
  },
  {
    type: 'title',
    text: 'Que signifie la sonde de la carte et comment se rapporte-t-elle a la maree?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: "Sur les cartes nautiques, les profondeurs (sondes) sont referencees au <strong>zero hydrographique</strong> (Datum). Ce niveau est, par convention, le plus bas que puisse atteindre la maree dans des conditions normales. La profondeur reelle qu'un bateau trouvera a un instant donne est la somme de cette sonde plus la hauteur de maree a cet instant, calculee selon la Regle des Douzaines.",
  },
  {
    type: 'title',
    text: "Les elements du calcul : Tirant d'eau et Marge",
    level: 3,
  },
  {
    type: 'paragraph',
    html: "Pour utiliser le calculateur de passage sur haut-fond de facon professionnelle, vous devez connaitre deux donnees techniques de votre bateau et une decision personnelle :",
  },
  {
    type: 'list',
    items: [
      "<strong>Tirant d'eau en charge maximale :</strong> Profondeur atteinte par le point le plus bas du bateau (la quille) lorsqu'il est entierement charge.",
      "<strong>Sonde de la carte :</strong> Le chiffre sur la carte nautique pour le point que vous souhaitez franchir. S'il est souligne, le point se decouvre au zero hydrographique.",
      "<strong>Marge de securite :</strong> Marge de securite supplementaire d'au moins 0,5 a 1 metre au-dessus du tirant d'eau.",
    ],
  },
  {
    type: 'title',
    text: 'Comment fonctionne la feneˆtre de passage ?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: "Le calculateur determine le moment exact ou le niveau de l'eau depassera votre tirant d'eau plus la marge choisie. A partir de cette minute, la <strong>feneˆtre de passage</strong> s'ouvre. Si la maree est descendante, l'outil indiquera jusqu'a quelle heure le transit est autorise avant que le niveau tombe en dessous de votre limite de securite.",
  },
  {
    type: 'paragraph',
    html: "Cette planification est vitale pour les voiliers a quille profonde qui souhaitent entrer dans des ports ou la variation des marees peut faire la difference entre une entree confortable ou rester echoue pendant six heures en attendant le prochain cycle.",
  },
  {
    type: 'title',
    text: 'Facteurs affectant le passage reel',
    level: 3,
  },
  {
    type: 'table',
    headers: ['Facteur', 'Effet', 'Recommandation'],
    rows: [
      ['<strong>Houle</strong>', "Reduit l'eau sous la coque", 'Augmenter la marge sensiblement'],
      ['<strong>Effet Squat</strong>', "Augmente le tirant d'eau par succion", 'Reduire la vitesse dans les zones critiques'],
      ['<strong>Fond de sable</strong>', 'Profondeur variable par mauvais temps', 'Garder le sondeur actif et marge supplementaire'],
    ],
  },
  {
    type: 'tip',
    title: 'Conseil de navigation',
    html: "Si votre feneˆtre de passage est tres etroite ou si le temps se degrade, la decision la plus sage est generalement d'attendre au large dans des eaux profondes que la maree monte jusqu'a la hauteur necessaire.",
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
    name: `Comment utiliser : ${title}`,
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
