import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { EnduranceUI, EnduranceLocaleContent } from '../index';

const slug = 'autonomie-bateau';
const title = 'Calculateur d\'Autonomie de Bateau';
const description = 'Calculez l\'autonomie en carburant de votre bateau à moteur en heures et milles nautiques. Entrez la capacité du réservoir, la consommation horaire, le pourcentage de réserve et la vitesse. Inclut aussi un mode inverse : pour un trajet donné, calculez le carburant nécessaire.';

const ui: EnduranceUI = {
  modeNormal: 'Calculer l\'autonomie',
  modeInverse: 'Carburant nécessaire',
  labelTank: 'Capacité du réservoir',
  labelConsumption: 'Consommation',
  labelReserve: 'Réserve',
  labelSpeed: 'Vitesse',
  labelDistance: 'Distance',
  labelUsableFuel: 'Carburant utilisable',
  labelHours: 'Autonomie (heures)',
  labelMiles: 'Autonomie (milles)',
  labelRequiredFuel: 'Carburant nécessaire',
  btnCalculate: 'Calculer',
  btnReset: 'Réinitialiser',
  resultHours: 'Autonomie (heures)',
  resultMiles: 'Autonomie (NM)',
};

const faq: EnduranceLocaleContent['faq'] = [
  {
    question: 'Quel pourcentage de réserve de carburant dois-je maintenir ?',
    answer: 'La pratique nautique standard recommande de maintenir entre 20% et 25% du réservoir en réserve. Certaines réglementations et assurances exigent un minimum de 10%. Pour les longues traversées ou les océans, il est conseillé d\'augmenter cette marge à 30% pour couvrir les imprévus.',
  },
  {
    question: 'Comment la consommation de carburant varie-t-elle avec la vitesse ?',
    answer: 'La consommation des moteurs essence et diesel n\'est pas linéaire avec la vitesse. À des vitesses de croisière modérées (60–70% du maximum), la consommation par mille est la plus efficiente. Naviguer à vitesse maximale peut tripler la consommation horaire.',
  },
  {
    question: 'Qu\'est-ce que la vitesse économique de croisière ?',
    answer: 'C\'est la vitesse à laquelle le bateau obtient la meilleure efficacité en termes de milles parcourus par litre. Sur les bateaux semi-planants, c\'est généralement la vitesse de semi-déplacement, entre 8 et 12 nœuds typiquement.',
  },
  {
    question: 'Comment le courant et le vent affectent-ils la consommation ?',
    answer: 'Naviguer contre le courant ou le vent de face peut augmenter la consommation de 15% à 30%. Inversement, un courant favorable peut la réduire significativement. La calculatrice fournit des valeurs théoriques en conditions idéales ; ajoutez toujours une marge de sécurité de 20–30%.',
  },
];

const howTo: EnduranceLocaleContent['howTo'] = [
  { name: 'Entrez les données du réservoir', text: 'Indiquez la capacité totale du réservoir en litres, la consommation horaire habituelle et le pourcentage de réserve à maintenir.' },
  { name: 'Entrez la vitesse de croisière', text: 'Entrez la vitesse prévue en nœuds. Le résultat vous donnera l\'autonomie en heures et en milles nautiques.' },
  { name: 'Utilisez le mode inverse pour planifier', text: 'Si vous connaissez votre destination, activez le mode "Carburant nécessaire" et entrez la distance. L\'outil calculera le carburant minimum nécessaire incluant la réserve.' },
  { name: 'Ajoutez une marge de sécurité', text: 'Les résultats sont théoriques. Ajoutez toujours 20–30% supplémentaires pour compenser les courants, le vent contraire et les variations de consommation réelles.' },
];

const bibliography: EnduranceLocaleContent['bibliography'] = [
  { name: 'Chapman Piloting, Seamanship and Small Boat Handling — Hearst Marine Books', url: 'https://www.chapman.com/' },
  { name: 'SHOM — Guide du navigateur (publications nautiques)', url: 'https://www.shom.fr/les-donnees/publications-nautiques/' },
];

const seo: EnduranceLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Données Clés sur l\'Autonomie Nautique',
    items: [
      'Autonomie (h) = Carburant utilisable / Consommation horaire.',
      'Milles d\'autonomie = Heures × Vitesse en nœuds.',
      'Réserve recommandée : 20–25% du réservoir total.',
      'La vitesse optimale maximise les milles par litre.',
    ],
  },
  { type: 'title', text: 'Planification du Carburant en Navigation à Moteur', level: 2 },
  {
    type: 'paragraph',
    html: 'Calculer l\'autonomie en carburant est l\'une des opérations les plus critiques en navigation à moteur. Manquer de carburant en mer est une urgence grave. Une bonne planification exige de connaître la consommation réelle du moteur, la capacité du réservoir et de toujours réserver une marge de sécurité.',
  },
  {
    type: 'table',
    headers: ['Variable', 'Formule', 'Unités'],
    rows: [
      ['Carburant utilisable', 'Réservoir × (1 − réserve/100)', 'litres'],
      ['Autonomie (h)', 'Carburant utilisable / Consommation', 'heures'],
      ['Autonomie (NM)', 'Heures × Vitesse', 'milles nautiques'],
      ['Carburant nécessaire', 'Heures × Consommation / (1 − réserve/100)', 'litres'],
    ],
  },
  {
    type: 'tip',
    title: 'La Règle des Tiers',
    html: 'Une règle classique : utilisez <strong>un tiers du carburant</strong> pour aller, <strong>un tiers pour revenir</strong> et gardez <strong>un tiers en réserve</strong>. Cette règle garantit que vous ne manquerez jamais de carburant même si le retour est plus long que prévu.',
  },
  {
    type: 'glossary',
    items: [
      { term: 'Autonomie', definition: 'La distance ou le temps maximum qu\'un bateau peut naviguer avec le carburant disponible.' },
      { term: 'Consommation spécifique', definition: 'Litres consommés par heure à une vitesse donnée. Varie avec les rpm et la charge du moteur.' },
      { term: 'Réserve de sécurité', definition: 'Le pourcentage du carburant total maintenu intact pour les urgences et détournements.' },
      { term: 'Vitesse économique', definition: 'La vitesse à laquelle le bateau parcourt la plus grande distance possible par litre de carburant.' },
    ],
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

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

export const content: EnduranceLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, appSchema],
};
