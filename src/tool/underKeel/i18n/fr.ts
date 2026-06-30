import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { UnderKeelUI, UnderKeelLocaleContent } from '../index';

const slug = 'calculateur-passage-haut-fond';
const title = 'Calculateur de Passage sur Haut Fond';
const description =
  "Calculez la fenêtre de temps sûre pour franchir des barres, chenaux ou points à tirant d'eau restreint. Entrez le tirant d'eau de votre bateau, la sonde de la carte et les données de marée pour obtenir l'intervalle de passage sûr.";

const ui: UnderKeelUI = {
  parametersLabel: 'Paramètres',
  boatDraftLabel: "Tirant d'eau",
  chartDepthLabel: 'Sonde de la carte',
  safetyMarginLabel: 'Marge de sécurité',
  highTideLabel: 'Pleine mer',
  lowTideLabel: 'Basse mer',
  metersLabel: 'mètres',
  passWindowLabel: 'Fenêtre de passage',
  neededLabel: 'Profondeur nécessaire',
  tideRequiredLabel: 'Marée minimale requise',
  statusNeverLabel: 'Pas de passage dans ce cycle',
  statusAlwaysLabel: 'Passage libre tout le cycle',
  statusFromLabel: 'Passage à partir de :',
  statusUntilLabel: "Passage jusqu'à :",
  bottomLabel: 'FOND',
};

const faq: UnderKeelLocaleContent['faq'] = [
  {
    question: "Qu'est-ce que le calcul de passage sur haut-fond ?",
    answer: "C'est le calcul du moment où la profondeur est suffisante en un point critique (comme une barre de sable ou un chenal étroit) pour permettre le transit sûr d'un navire selon son tirant d'eau.",
  },
  {
    question: 'Quelle marge de sécurité est recommandée ?',
    answer: "Pour les bateaux de plaisance, une marge minimale de 0,5 à 1 mètre au-dessus du tirant d'eau est généralement recommandée. Cette marge compense les erreurs possibles dans le calcul de la marée, les variations de pression atmosphérique ou la houle imprévue.",
  },
  {
    question: 'Comment la houle affecte-t-elle le passage ?',
    answer: "La houle génère des oscillations verticales dans la coque. Au point le plus bas de la vague, le bateau est plus près du fond qu'au repos. Pour traverser des zones avec de la houle, la marge doit être augmentée sensiblement.",
  },
  {
    question: 'Que signifie la sonde sur la carte nautique ?',
    answer: "C'est la profondeur minimale en un point lorsque la marée est au zéro hydrographique (Datum). Elle s'ajoute à la hauteur de marée à cet instant pour donner la profondeur totale disponible.",
  },
  {
    question: 'Que signifie une sonde soulignée sur la carte ?',
    answer: "Cela signifie que ce point se découvre lorsque la marée est au zéro hydrographique. Vous aurez besoin d'une hauteur de marée plus importante pour pouvoir passer dessus.",
  },
  {
    question: "Qu'est-ce que l'effet Squat et comment modifie-t-il le passage ?",
    answer: "C'est un phénomène hydrodynamique par lequel un bateau navigant dans des chenaux peu profonds tend à s'enfoncer davantage par rapport à sa ligne de flottaison. Plus vous allez vite, plus le tirant d'eau dynamique augmente et moins vous avez d'eau sous la quille.",
  },
];

const howTo: UnderKeelLocaleContent['howTo'] = [
  {
    name: "Définir le tirant d'eau et la marge",
    text: "Mesurez le tirant d'eau de votre bateau à son point maximum et ajoutez une marge de sécurité prudente (par exemple 0,5 m).",
  },
  {
    name: 'Consulter la sonde sur la carte',
    text: "Recherchez la valeur de sonde Datum pour le point critique que vous allez naviguer. Notez si c'est une zone de sable ou de roche.",
  },
  {
    name: 'Saisir les données de marée',
    text: "Utilisez les heures et hauteurs de pleine mer et basse mer de l'annuaire officiel le plus proche.",
  },
  {
    name: 'Vérifier votre fenêtre de passage',
    text: "L'outil vous indiquera l'intervalle de temps exact pendant lequel vous aurez une profondeur suffisante pour naviguer en toute sécurité.",
  },
];

const seo: UnderKeelLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Passage sur Haut-fond: Naviguer en Sécurité au-dessus des Obstacles',
    level: 2,
  },
  {
    type: 'paragraph',
    html: "La planification d'une traversée ne s'arrête pas au tracé d'une route sur la carte. Pour le navigateur côtier, l'un des calculs les plus déterminants est celui du <strong>passage sur haut-fond</strong>: savoir à quelle heure la profondeur sera suffisante pour franchir un point critique sans s'échouer.",
  },
  {
    type: 'title',
    text: 'Que signifie la sonde de la carte et comment se rapporte-t-elle à la marée ?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: "Sur les cartes nautiques, les profondeurs (sondes) sont référencées au <strong>zéro hydrographique</strong> (Datum). Ce niveau est, par convention, le plus bas que puisse atteindre la marée dans des conditions normales. La profondeur réelle qu'un bateau trouvera à un instant donné est la somme de cette sonde plus la hauteur de marée à cet instant, calculée selon la Règle des Douzaines.",
  },
  {
    type: 'title',
    text: "Les éléments du calcul: Tirant d'eau et Marge",
    level: 3,
  },
  {
    type: 'paragraph',
    html: "Pour utiliser le calculateur de passage sur haut-fond de façon professionnelle, vous devez connaître deux données techniques de votre bateau et une décision personnelle :",
  },
  {
    type: 'list',
    items: [
      "<strong>Tirant d'eau en charge maximale :</strong> Profondeur atteinte par le point le plus bas du bateau (la quille) lorsqu'il est entièrement chargé.",
      "<strong>Sonde de la carte :</strong> Le chiffre sur la carte nautique pour le point que vous souhaitez franchir. S'il est souligné, le point se découvre au zéro hydrographique.",
      "<strong>Marge de sécurité :</strong> Marge de sécurité supplémentaire d'au moins 0,5 à 1 mètre au-dessus du tirant d'eau.",
    ],
  },
  {
    type: 'title',
    text: 'Comment fonctionne la fenêtre de passage ?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: "Le calculateur détermine le moment exact où le niveau de l'eau dépassera votre tirant d'eau plus la marge choisie. A partir de cette minute, la <strong>fenêtre de passage</strong> s'ouvre. Si la marée est descendante, l'outil indiquera jusqu'à quelle heure le transit est autorisé avant que le niveau tombe en dessous de votre limite de sécurité.",
  },
  {
    type: 'paragraph',
    html: "Cette planification est vitale pour les voiliers à quille profonde qui souhaitent entrer dans des ports où la variation des marées peut faire la différence entre une entrée confortable ou rester échoué pendant six heures en attendant le prochain cycle.",
  },
  {
    type: 'title',
    text: 'Facteurs affectant le passage réel',
    level: 3,
  },
  {
    type: 'table',
    headers: ['Facteur', 'Effet', 'Recommandation'],
    rows: [
      ['<strong>Houle</strong>', 'Réduit l\'eau sous la coque', 'Augmenter la marge sensiblement'],
      ['<strong>Effet Squat</strong>', "Augmente le tirant d'eau par succion", 'Réduire la vitesse dans les zones critiques'],
      ['<strong>Fond de sable</strong>', 'Profondeur variable par mauvais temps', 'Garder le sondeur actif et marge supplémentaire'],
    ],
  },
  {
    type: 'tip',
    title: 'Conseil de navigation',
    html: "Si votre fenêtre de passage est très étroite ou si le temps se dégrade, la décision la plus sage est généralement d'attendre au large dans des eaux profondes que la marée monte jusqu'à la hauteur nécessaire.",
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
    name: `Comment utiliser: ${title}`,
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
