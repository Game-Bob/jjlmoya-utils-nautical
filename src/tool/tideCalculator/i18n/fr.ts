import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TideCalculatorUI, TideCalculatorLocaleContent } from '../index';

const slug = 'calculateur-hauteur-maree';
const title = 'Calculateur de Hauteur de Marée';
const description =
  "Estimez le niveau de l'eau à n'importe quel moment du cycle de marée en utilisant la méthode nautique de la Règle des Douzaines. Idéal pour la planification côtière et l'étude du permis bateau.";

const ui: TideCalculatorUI = {
  parametersLabel: 'Paramètres',
  highTideLabel: 'Pleine mer',
  lowTideLabel: 'Basse mer',
  targetTimeLabel: 'Heure de consultation',
  estimatedHeightLabel: 'Hauteur estimée',
  metersLabel: 'mètres',
  amplitudeLabel: 'Amplitude',
  durationLabel: 'Durée',
  tableBreakdownLabel: 'Tableau des douzaines',
  tableHourLabel: 'Heure',
  tableStateLabel: 'État',
  tableStartLabel: 'Début',
  tableEndLabel: 'Fin',
  statusUpLabel: 'Montante',
  statusDownLabel: 'Descendante',
  statusOutOfRange: 'Hors plage',
};

const faq: TideCalculatorLocaleContent['faq'] = [
  {
    question: "Qu'est-ce que la Règle des Douzaines et à quoi sert-elle ?",
    answer:
      "La Règle des Douzaines est une méthode mathématique simplifiée utilisée en navigation pour estimer la hauteur de la marée à tout moment entre la pleine mer et la basse mer. Elle repose sur l'observation que le flux de marée suit une courbe sinusoïdale approximative, divisant l'amplitude totale en 12 parties réparties sur 6 heures (1/12, 2/12, 3/12, 3/12, 2/12, 1/12).",
  },
  {
    question: 'Cette méthode est-elle fiable pour la navigation réelle ?',
    answer:
      "C'est une méthode d'estimation théorique très utile pour la planification rapide et les besoins pédagogiques. Cependant, elle ne tient pas compte des facteurs météorologiques comme la pression atmosphérique ou le vent, qui peuvent modifier le niveau de la mer de plusieurs décimètres. Pour la navigation réelle, consultez toujours les tables officielles des marées.",
  },
  {
    question: 'Quelles données faut-il pour calculer la hauteur de la marée ?',
    answer:
      "Vous avez besoin de l'heure et de la hauteur (en mètres) de la pleine mer et de la basse mer les plus proches du moment que vous souhaitez consulter. Ces données se trouvent dans les annuaires des marées ou les applications météorologiques marines.",
  },
  {
    question: "Pourquoi la marée ne monte-t-elle pas toujours à la même vitesse ?",
    answer:
      "En raison de l'inertie des grandes masses d'eau et de la configuration des bassins océaniques. La marée commence à monter lentement après la basse mer, atteint sa vitesse maximale dans les heures centrales (les heures du 3/12) et ralentit à nouveau en s'approchant de la pleine mer.",
  },
  {
    question: 'Comment la pression atmosphérique affecte-t-elle la marée ?',
    answer:
      "La haute pression (anticiclone) pousse l'eau vers le bas, réduisant la hauteur réelle. La basse pression (dépression) permet à l'eau de monter davantage. En règle générale, une variation de 1 hPa par rapport à la moyenne correspond à un changement d'environ 1 cm du niveau de la mer.",
  },
  {
    question: "Qu'est-ce que le marnage ?",
    answer:
      "C'est la différence verticale de hauteur entre une pleine mer et la basse mer immédiatement précédente ou suivante. Cette mesure varie selon la phase lunaire (marées de vives-eaux et de mortes-eaux) et la situation géographique.",
  },
];

const howTo: TideCalculatorLocaleContent['howTo'] = [
  {
    name: 'Identifier la pleine mer et la basse mer',
    text: "Consultez votre annuaire des marées pour obtenir les heures et hauteurs du cycle de marée qui vous intéresse.",
  },
  {
    name: 'Saisir les données dans le calculateur',
    text: "Entrez l'heure et la hauteur de la pleine mer et de la basse mer. L'outil déterminera automatiquement la durée et l'amplitude.",
  },
  {
    name: "Définir l'heure de consultation",
    text: "Ajustez l'heure pour laquelle vous souhaitez connaître le niveau de l'eau. Vous verrez le point exact mis en évidence sur le graphique.",
  },
  {
    name: 'Analyser le tableau des douzaines',
    text: "Examinez la ventilation heure par heure pour comprendre comment le niveau de l'eau va fluctuer pendant toute la période.",
  },
];

const seo: TideCalculatorLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Maîtriser la marée: La Règle des Douzaines en navigation',
    level: 2,
  },
  {
    type: 'paragraph',
    html: "La navigation côtière et l'entrée dans des ports à tirant d'eau restreint nécessitent une connaissance précise de la hauteur de l'eau à tout moment. Bien qu'aujourd'hui des applications numériques et des GPS fournissent des données en temps réel, la <strong>Règle des Douzaines</strong> reste un outil fondamental dans la formation de tout skipper ou capitaine de yacht. Cette règle est une méthode d'estimation mathématique qui permet de calculer, de façon approximative et sans calculatrices complexes, la hauteur de la marée à n'importe quel point d'un cycle maréal.",
  },
  {
    type: 'title',
    text: "Qu'est-ce que la Règle des Douzaines ?",
    level: 3,
  },
  {
    type: 'paragraph',
    html: "La Règle des Douzaines repose sur l'observation que le flux de marée n'est pas constant. L'eau ne monte ni ne descend à la même vitesse pendant les six heures (environ) qui séparent une pleine mer d'une basse mer. Le mouvement suit plutôt une courbe sinusoïdale. Pendant la première heure, la marée se déplace lentement; elle accélère dans les heures centrales et ralentit à nouveau en s'approchant de l'extremum suivant.",
  },
  {
    type: 'table',
    headers: ['Heure du cycle', 'Proportion', 'État du flux'],
    rows: [
      ['<strong>1re heure</strong>', '1/12 du marnage', 'Départ lent (Étale)'],
      ['<strong>2e heure</strong>', '2/12 du marnage', 'Accélération du flux'],
      ['<strong>3e heure</strong>', '3/12 du marnage', 'Flux maximum (Courant fort)'],
      ['<strong>4e heure</strong>', '3/12 du marnage', 'Flux soutenu'],
      ['<strong>5e heure</strong>', '2/12 du marnage', 'Décélération notable'],
      ['<strong>6e heure</strong>', '1/12 du marnage', 'Freinage final (Vers l\'étale)'],
    ],
  },
  {
    type: 'tip',
    title: 'Note de sécurité',
    html: "Cet outil utilise une méthode d'estimation mathématique. Il ne tient pas compte des facteurs météorologiques ni de la topographie locale. Pour la navigation réelle, consultez toujours les tables officielles des marées.",
  },
  {
    type: 'title',
    text: 'Concepts clés pour les nouveaux navigateurs',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Marnage',
        definition: "Différence verticale entre la pleine mer et la basse mer. Dans le golfe de Gascogne il peut atteindre plusieurs mètres; en Méditerranée il est presque négligeable.",
      },
      {
        term: 'Durée de la marée',
        definition: "Intervalle de temps entre la pleine mer et la prochaine basse mer. Environ 6 heures et 12 minutes (cycle semi-diurne).",
      },
      {
        term: 'Zéro hydrographique',
        definition: "Niveau de référence à partir duquel toutes les profondeurs sur les cartes nautiques sont mesurées. Les profondeurs réelles sont presque toujours supérieures.",
      },
    ],
  },
  {
    type: 'paragraph',
    html: "Vérifiez la météo et l'état réel de la mer avant le départ.",
  },
  {
    type: 'paragraph',
    html: 'Contrôlez la marge de profondeur et gardez une réserve de sécurité.',
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
    name: `Comment utiliser: ${title}`,
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
