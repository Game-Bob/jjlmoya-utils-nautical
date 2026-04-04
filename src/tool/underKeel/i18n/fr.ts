import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { UnderKeelUI, UnderKeelLocaleContent } from '../index';

const slug = 'tirant-deau-sous-quille';
const title = 'Calculateur de Tirant d\'Eau sous Quille';
const description = 'Déterminez si vous avez assez d\'eau pour passer sur un haut-fond critique en fonction de votre tirant d\'eau. Fenêtre de passage sécurisé avec les marées.';

const ui: UnderKeelUI = {
  vasoDeBajo: 'Passage de Haut-fond',
  caladoDelBarco: 'Tirant d\'eau',
  sondaDeLaCarta: 'Sonde de la carte',
  resguardoSeguridad: 'Marge de sécurité',
  pleamar: 'Pleine Mer',
  bajamar: 'Basse Mer',
  ventanaDePaso: 'Fenêtre de passage',
  necesario: 'Nécessaire',
  mareaReq: 'Marée req.',
  nuncaHayCalado: 'Jamais assez de profondeur',
  pasoLibreTodoCiclo: 'Passage libre tout le cycle',
  desdeHora: 'À partir de :',
  hastaHora: 'Jusqu\'à :',
  fondo: 'FOND',
};

const faq: UnderKeelLocaleContent['faq'] = [
  {
    question: 'Qu\'est-ce que le tirant d\'eau sous quille ?',
    answer: 'Le tirant d\'eau sous quille est la distance verticale entre le point le plus bas du navire (la quille) et le fond marin. C\'est un paramètre de sécurité critique pour éviter l\'échouage lors de la navigation en eaux peu profondes.',
  },
  {
    question: 'Quelle marge de sécurité dois-je utiliser ?',
    answer: 'Pour les bateaux de plaisance, une marge de sécurité minimale de 0,5 à 1 mètre au-dessus du tirant d\'eau du bateau est recommandée. Cette marge compense les erreurs possibles dans le calcul des marées et l\'action des vagues imprévues.',
  },
  {
    question: 'Comment l\'effet de vague affecte-t-il le passage ?',
    answer: 'L\'action des vagues crée des oscillations verticales dans la coque. Au creux de la vague, le bateau est plus proche du fond qu\'au repos. En traversant des zones avec des vagues, la marge de sécurité doit être considérablement augmentée.',
  },
  {
    question: 'Qu\'est-ce que le zéro hydrographique ?',
    answer: 'Le zéro hydrographique est le niveau de référence auquel toutes les profondeurs (sondes) des cartes marines sont rattachées. Il est choisi de sorte que les profondeurs réelles ne soient presque jamais inférieures aux profondeurs indiquées dans des conditions normales.',
  },
];

const howTo: UnderKeelLocaleContent['howTo'] = [
  { name: 'Définissez le tirant d\'eau et la marge', text: 'Mesurez le tirant d\'eau maximal de votre bateau et ajoutez une marge de sécurité prudente (par exemple 0,5 m).' },
  { name: 'Consultez la sonde sur votre carte nautique', text: 'Recherchez la valeur de la sonde zéro hydrographique pour le point de passage critique.' },
  { name: 'Saisissez les données de marée', text: 'Utilisez les heures et hauteurs de pleine mer et de basse mer de l\'annuaire officiel.' },
  { name: 'Vérifiez votre fenêtre de passage', text: 'L\'outil indiquera l\'intervalle de temps exact pendant lequel vous aurez suffisamment de profondeur.' },
];

const bibliography: UnderKeelLocaleContent['bibliography'] = [
  { name: 'SHOM — Tables des marées des ports de France', url: 'https://www.shom.fr/les-produits/annuaire-des-marees/' },
  { name: 'Cerema — Guide de navigation côtière', url: 'https://www.cerema.fr/' },
];

const seo: UnderKeelLocaleContent['seo'] = [
  { type: 'summary', title: 'Points clés pour la planification de passage', items: ['La profondeur réelle est la sonde de la carte plus la hauteur de marée actuelle.', 'La marge de sécurité minimale recommandée est de 0,5 à 1 mètre.', 'L\'effet de squat augmente le tirant d\'eau dynamique à vitesse élevée.', 'En conditions de houle, augmentez considérablement votre marge de sécurité.'] },
  { type: 'title', text: 'Tirant d\'Eau sous Quille : Navigation Sécurisée', level: 2 },
  { type: 'paragraph', html: 'La planification d\'une traversée ne se termine pas par le tracé d\'un cap sur la carte. Pour le navigateur côtier, l\'un des calculs les plus déterminants est celui du <strong>passage de haut-fond</strong>. Ce calcul répond à la question fondamentale : à quelle heure aurai-je suffisamment de profondeur pour passer sur ce point critique sans m\'échouer ?' },
  { type: 'title', text: 'Les Éléments du Calcul', level: 3 },
  { type: 'paragraph', html: 'Pour utiliser le calculateur de tirant d\'eau sous quille de façon professionnelle, vous avez besoin de trois données précises : le <strong>tirant d\'eau en charge maximale</strong>, la <strong>sonde de la carte</strong> (le chiffre indiqué sur la carte nautique) et la <strong>marge de sécurité</strong> (au moins 0,5 à 1 mètre).' },
  { type: 'table', headers: ['Facteur', 'Effet', 'Recommandation'], rows: [
    ['Houle', 'Réduit l\'eau sous la coque', 'Augmenter significativement la marge'],
    ['Effet Squat', 'Augmente le tirant d\'eau par succion', 'Réduire la vitesse dans les zones critiques'],
    ['Fond de sable', 'Profondeur variable avec les tempêtes', 'Utiliser le sondeur et une marge extra'],
  ]},
  { type: 'tip', title: 'Conseil de navigation', html: 'Si votre fenêtre de passage est très étroite ou si le temps se dégrade, la décision la plus sage est généralement d\'attendre en eaux profondes que la marée atteigne la hauteur nécessaire.' },
  { type: 'glossary', items: [
    { term: 'Tirant d\'eau', definition: 'La profondeur atteinte par le point le plus bas du navire (la quille) sous la ligne de flottaison.' },
    { term: 'Zéro hydrographique', definition: 'La profondeur de référence des cartes nautiques — la profondeur minimale garantie dans des conditions normales.' },
    { term: 'Marge de sécurité', definition: 'Espace de sécurité supplémentaire au-delà du tirant d\'eau pour assurer le passage en toute sécurité.' },
    { term: 'Squat', definition: 'L\'enfoncement du navire lors de la navigation en eaux peu profondes dû aux effets hydrodynamiques.' },
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

export const content: UnderKeelLocaleContent = {
  slug, title, description, ui, seo, faq, bibliography, howTo,
  schemas: [appSchema],
};
