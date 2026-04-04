import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { TideCalculatorUI, TideCalculatorLocaleContent } from '../index';

const slug = 'calculateur-hauteur-maree';
const title = 'Calculateur de Hauteur de Marée';
const description = 'Calculez la hauteur de l\'eau à tout moment en utilisant la Règle des Douzièmes. Outil hors ligne pour les marins, patrons et étudiants en nautisme.';

const ui: TideCalculatorUI = {
  parametros: 'Paramètres',
  pleamar: 'Pleine Mer',
  bajamar: 'Basse Mer',
  horaConsulta: 'Heure de consultation',
  alturaEstimada: 'Hauteur estimée',
  metros: 'mètres',
  amplitud: 'Marnage',
  duracion: 'Durée',
  desglosePorDozavos: 'Détail par Douzièmes',
  hora: 'Heure',
  estado: 'État',
  altura: 'Hauteur',
  subiendo: 'Montante',
  bajando: 'Descendante',
  fueraDeRango: 'Hors de portée',
  inicio: 'Début',
  final: 'Fin',
};

const faq: TideCalculatorLocaleContent['faq'] = [
  {
    question: 'Qu\'est-ce que la Règle des Douzièmes ?',
    answer: 'La Règle des Douzièmes est une méthode mathématique simplifiée utilisée en navigation pour estimer la hauteur de la marée à tout moment entre la pleine mer et la basse mer. Elle divise le marnage en 12 parties suivant une courbe sinusoïdale : 1/12, 2/12, 3/12, 3/12, 2/12, 1/12 pour chacune des six heures du cycle.',
  },
  {
    question: 'Cette méthode est-elle fiable pour la navigation réelle ?',
    answer: 'C\'est une méthode d\'estimation théorique très utile pour la planification rapide et à des fins éducatives. Elle ne tient pas compte des facteurs météorologiques tels que la pression atmosphérique ou le vent. Pour la navigation réelle, consultez toujours les tables officielles des marées.',
  },
  {
    question: 'Quelles données me faut-il pour calculer la hauteur de la marée ?',
    answer: 'Vous devez connaître l\'heure et la hauteur en mètres de la pleine mer et de la basse mer les plus proches du moment que vous souhaitez consulter. Ces données se trouvent dans les annuaires des marées ou dans les applications météorologiques marines.',
  },
  {
    question: 'Pourquoi la marée ne monte-t-elle pas à vitesse constante ?',
    answer: 'En raison de l\'inertie des grandes masses d\'eau et de la configuration des bassins océaniques. La marée commence à monter lentement, atteint sa vitesse maximale aux heures centrales et ralentit à nouveau en approchant de la pleine mer.',
  },
];

const howTo: TideCalculatorLocaleContent['howTo'] = [
  { name: 'Identifiez la pleine mer et la basse mer', text: 'Consultez votre annuaire des marées pour obtenir les heures et hauteurs du cycle qui vous intéresse.' },
  { name: 'Saisissez les données', text: 'Entrez l\'heure et la hauteur de la pleine mer et de la basse mer. L\'outil calculera automatiquement la durée et le marnage.' },
  { name: 'Définissez l\'heure de consultation', text: 'Ajustez l\'heure pour laquelle vous souhaitez connaître le niveau de l\'eau.' },
  { name: 'Analysez le tableau des douzièmes', text: 'Examinez le détail heure par heure pour comprendre les fluctuations du niveau de l\'eau.' },
];

const bibliography: TideCalculatorLocaleContent['bibliography'] = [
  { name: 'SHOM — Service Hydrographique et Océanographique de la Marine', url: 'https://www.shom.fr/' },
  { name: 'Météo-France — Prévisions marines', url: 'https://www.meteofrance.com/previsions-meteo-marine' },
];

const seo: TideCalculatorLocaleContent['seo'] = [
  { type: 'summary', title: 'Points clés de la Règle des Douzièmes', items: ['Le flux tidal suit une courbe sinusoïdale, pas un débit constant.', 'Les heures centrales du cycle ont le plus grand flux d\'eau (3/12 chacune).', 'Le marnage en Manche peut dépasser 10 mètres par endroits.', 'Une baisse de pression de 10 hPa peut élever le niveau de la mer d\'environ 10 cm.'] },
  { type: 'title', text: 'La Règle des Douzièmes : Fondements pour les Marins', level: 2 },
  { type: 'paragraph', html: 'La navigation côtière et l\'entrée dans des ports à tirant d\'eau restreint exigent une connaissance précise de la hauteur de l\'eau à tout moment. Bien que les applications numériques et le GPS fournissent désormais des données en temps réel, la <strong>Règle des Douzièmes</strong> reste un outil fondamental dans la formation de tout patron de plaisance.' },
  { type: 'title', text: 'Distribution du flux tidal sur six heures', level: 3 },
  { type: 'table', headers: ['Heure du cycle', 'Proportion', 'État du flux'], rows: [
    ['1ère heure', '1/12 du marnage', 'Début lent (Étale)'],
    ['2ème heure', '2/12 du marnage', 'Accélération du flux'],
    ['3ème heure', '3/12 du marnage', 'Flux maximum (Fort courant)'],
    ['4ème heure', '3/12 du marnage', 'Maintien du flux'],
    ['5ème heure', '2/12 du marnage', 'Décélération notable'],
    ['6ème heure', '1/12 du marnage', 'Ralentissement final (Vers l\'étale)'],
  ]},
  { type: 'tip', title: 'Note de sécurité', html: 'Cet outil utilise une méthode d\'estimation mathématique. Il ne tient pas compte des facteurs météorologiques ni de la géographie locale. Pour la navigation réelle, consultez toujours les tables officielles des marées de votre service hydrographique national.' },
  { type: 'paragraph', html: 'Le <strong>marnage</strong> est la différence verticale entre la pleine mer et la basse mer. En Manche, il peut dépasser 10 mètres à certains endroits comme Saint-Malo, ce qui en fait l\'une des plus fortes marées du monde. Le <strong>zéro hydrographique</strong> est le niveau de référence des cartes nautiques, proche du niveau des plus basses mers astronomiques.' },
  { type: 'stats', columns: 3, items: [
    { label: 'Heures par cycle', value: '~6h', icon: 'mdi:clock-outline' },
    { label: 'Cycles quotidiens', value: '2', icon: 'mdi:waves' },
    { label: 'Marnage Manche', value: '10+ m', icon: 'mdi:arrow-up-down' },
  ]},
  { type: 'glossary', items: [
    { term: 'Pleine Mer (PM)', definition: 'Le niveau maximal atteint par la marée lors d\'un cycle tidal.' },
    { term: 'Basse Mer (BM)', definition: 'Le niveau minimal atteint par la marée lors d\'un cycle tidal.' },
    { term: 'Étale', definition: 'Le moment de transition où la marée change de sens, avec peu de courant.' },
    { term: 'Zéro hydrographique', definition: 'Niveau de référence des cartes nautiques, proche du niveau des plus basses mers.' },
  ]},
];

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'fr',
};

export const content: TideCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: [appSchema],
};
