import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TideCalculatorUI, TideCalculatorLocaleContent } from '../index';

const slug = 'calculateur-hauteur-maree';
const title = 'Calculateur de Hauteur de Maree';
const description =
  "Estimez le niveau de l'eau a n'importe quel moment du cycle de maree en utilisant la methode nautique de la Regle des Douzaines. Ideal pour la planification cotiere et l'etude du permis bateau.";

const ui: TideCalculatorUI = {
  parametersLabel: 'Parametres',
  highTideLabel: 'Pleine mer',
  lowTideLabel: 'Basse mer',
  targetTimeLabel: 'Heure de consultation',
  estimatedHeightLabel: 'Hauteur estimee',
  metersLabel: 'metres',
  amplitudeLabel: 'Amplitude',
  durationLabel: 'Duree',
  tableBreakdownLabel: 'Tableau des douzaines',
  tableHourLabel: 'Heure',
  tableStateLabel: 'Etat',
  tableStartLabel: 'Debut',
  tableEndLabel: 'Fin',
  statusUpLabel: 'Montante',
  statusDownLabel: 'Descendante',
  statusOutOfRange: 'Hors plage',
  faqTitle: 'Questions Frequentes': 'Bibliographie',
};

const faq: TideCalculatorLocaleContent['faq'] = [
  {
    question: "Qu'est-ce que la Regle des Douzaines et a quoi sert-elle?",
    answer:
      "La Regle des Douzaines est une methode mathematique simplifiee utilisee en navigation pour estimer la hauteur de la maree a tout moment entre la pleine mer et la basse mer. Elle repose sur l'observation que le flux de maree suit une courbe sinusoidale approximative, divisant l'amplitude totale en 12 parties reparties sur 6 heures (1/12, 2/12, 3/12, 3/12, 2/12, 1/12).",
  },
  {
    question: 'Cette methode est-elle fiable pour la navigation reelle?',
    answer:
      "C'est une methode d'estimation theorique tres utile pour la planification rapide et les besoins pedagogiques. Cependant, elle ne tient pas compte des facteurs meteorologiques comme la pression atmospherique ou le vent, qui peuvent modifier le niveau de la mer de plusieurs decimetres. Pour la navigation reelle, consultez toujours les tables officielles des marees.",
  },
  {
    question: 'Quelles donnees faut-il pour calculer la hauteur de la maree?',
    answer:
      "Vous avez besoin de l'heure et de la hauteur (en metres) de la pleine mer et de la basse mer les plus proches du moment que vous souhaitez consulter. Ces donnees se trouvent dans les annuaires des marees ou les applications meteorologiques marines.",
  },
  {
    question: "Pourquoi la maree ne monte-t-elle pas toujours a la meme vitesse?",
    answer:
      "En raison de l'inertie des grandes masses d'eau et de la configuration des bassins oceaniques. La maree commence a monter lentement apres la basse mer, atteint sa vitesse maximale dans les heures centrales (les heures du 3/12) et ralentit a nouveau en s'approchant de la pleine mer.",
  },
  {
    question: 'Comment la pression atmospherique affecte-t-elle la maree?',
    answer:
      "La haute pression (anticyclone) pousse l'eau vers le bas, reduisant la hauteur reelle. La basse pression (depression) permet a l'eau de monter davantage. En regle generale, une variation de 1 hPa par rapport a la moyenne correspond a un changement d'environ 1 cm du niveau de la mer.",
  },
  {
    question: "Qu'est-ce que le marnage?",
    answer:
      "C'est la difference verticale de hauteur entre une pleine mer et la basse mer immediatement precedente ou suivante. Cette mesure varie selon la phase lunaire (marees de vives-eaux et de mortes-eaux) et la situation geographique.",
  },
];

const howTo: TideCalculatorLocaleContent['howTo'] = [
  {
    name: 'Identifier la pleine mer et la basse mer',
    text: "Consultez votre annuaire des marees pour obtenir les heures et hauteurs du cycle de maree qui vous interesse.",
  },
  {
    name: 'Saisir les donnees dans le calculateur',
    text: "Entrez l'heure et la hauteur de la pleine mer et de la basse mer. L'outil determinera automatiquement la duree et l'amplitude.",
  },
  {
    name: "Definir l'heure de consultation",
    text: "Ajustez l'heure pour laquelle vous souhaitez connaitre le niveau de l'eau. Vous verrez le point exact mis en evidence sur le graphique.",
  },
  {
    name: 'Analyser le tableau des douzaines',
    text: "Examinez la ventilation heure par heure pour comprendre comment le niveau de l'eau va fluctuer pendant toute la periode.",
  },
];

const seo: TideCalculatorLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Maitriser la maree : La Regle des Douzaines en navigation',
    level: 2,
  },
  {
    type: 'paragraph',
    html: "La navigation cotiere et l'entree dans des ports a tirant d'eau restreint necessitent une connaissance precise de la hauteur de l'eau a tout moment. Bien qu'aujourd'hui des applications numeriques et des GPS fournissent des donnees en temps reel, la <strong>Regle des Douzaines</strong> reste un outil fondamental dans la formation de tout skipper ou capitaine de yacht. Cette regle est une methode d'estimation mathematique qui permet de calculer, de facon approximative et sans calculatrices complexes, la hauteur de la maree a n'importe quel point d'un cycle mareal.",
  },
  {
    type: 'title',
    text: "Qu'est-ce que la Regle des Douzaines?",
    level: 3,
  },
  {
    type: 'paragraph',
    html: "La Regle des Douzaines repose sur l'observation que le flux de maree n'est pas constant. L'eau ne monte ni ne descend a la meme vitesse pendant les six heures (environ) qui separent une pleine mer d'une basse mer. Le mouvement suit plutot une courbe sinusoidale. Pendant la premiere heure, la maree se deplace lentement; elle accelere dans les heures centrales et ralentit a nouveau en s'approchant de l'extremum suivant.",
  },
  {
    type: 'table',
    headers: ['Heure du cycle', 'Proportion', 'Etat du flux'],
    rows: [
      ['<strong>1re heure</strong>', '1/12 du marnage', 'Depart lent (Etale)'],
      ['<strong>2e heure</strong>', '2/12 du marnage', 'Acceleration du flux'],
      ['<strong>3e heure</strong>', '3/12 du marnage', 'Flux maximum (Courant fort)'],
      ['<strong>4e heure</strong>', '3/12 du marnage', 'Flux soutenu'],
      ['<strong>5e heure</strong>', '2/12 du marnage', 'Deceleration notable'],
      ['<strong>6e heure</strong>', '1/12 du marnage', 'Freinage final (Vers l\'etale)'],
    ],
  },
  {
    type: 'tip',
    title: 'Note de securite',
    html: "Cet outil utilise une methode d'estimation mathematique. Il ne tient pas compte des facteurs meteorologiques ni de la topographie locale. Pour la navigation reelle, consultez toujours les tables officielles des marees.",
  },
  {
    type: 'title',
    text: 'Concepts cles pour les nouveaux navigateurs',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Marnage',
        definition: "Difference verticale entre la pleine mer et la basse mer. Dans le golfe de Gascogne il peut atteindre plusieurs metres; en Mediterranee il est presque negligeable.",
      },
      {
        term: 'Duree de la maree',
        definition: "Intervalle de temps entre la pleine mer et la prochaine basse mer. Environ 6 heures et 12 minutes (cycle semi-diurne).",
      },
      {
        term: 'Zero hydrographique',
        definition: "Niveau de reference a partir duquel toutes les profondeurs sur les cartes nautiques sont mesurees. Les profondeurs reelles sont presque toujours superieures.",
      },
    ],
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
    name: `Comment utiliser : ${title}`,
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
