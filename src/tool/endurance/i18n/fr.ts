import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EnduranceUI, EnduranceLocaleContent } from '../index';

const slug = 'calculateur-autonomie-nautique';
const title = "Calculateur d'Autonomie Nautique";
const description =
  "Calculez votre portée maximale et la distance sécurisée selon la consommation, la capacité du réservoir et la vitesse de croisière. Gestion du carburant pour bateaux à moteur.";

const ui: EnduranceUI = {
  tankCapacityLabel: 'Capacité du Réservoir',
  mainTankLabel: 'Principal',
  auxTankLabel: 'Aux',
  currentFuelLabel: 'Carburant actuel',
  seaConditionsLabel: 'Conditions Mer / Vent',
  consumptionLabel: 'Consommation théorique',
  cruiseSpeedLabel: 'Vitesse de croisière',
  reserveLabel: 'Réserve',
  fuelPriceLabel: 'Prix au Litre',
  maxRangeLabel: 'Portée maximale',
  realPerformanceLabel: 'Performance réelle',
  hoursLabel: "Autonomie en heures",
  safeMilesLabel: 'Miles sécurisés',
  tankValueLabel: 'Valeur du réservoir',
  inverseCalcLabel: 'Calcul inverse: Combien dois-je ravitailler ?',
  desiredDistLabel: 'Distance souhaitée',
  minFuelLabel: 'Carburant minimum requis',
  warningLabel: 'Rappel: Une réserve de 20% est le minimum absolu recommandé par la sécurité nautique.',
  seaCalm: 'Calme (1.0x)',
  seaLight: 'Petite houle (+15%)',
  seaModerate: 'Houle modérée (+30%)',
  seaStorm: 'Tempête (+60%)',
};

const faq: EnduranceLocaleContent['faq'] = [
  {
    question: "Comment calcule-t-on l'autonomie d'un bateau à moteur ?",
    answer: "L'autonomie se calcule en divisant le carburant disponible par la consommation horaire pour obtenir les heures totales, puis en multipliant ce temps par la vitesse de croisière. L'outil applique également un facteur d'état de mer pour refléter les conditions réelles de navigation.",
  },
  {
    question: "Pourquoi recommande-t-on une réserve de 20% en navigation ?",
    answer: "La réserve de 20% est une norme de sécurité nautique qui garantit un carburant suffisant en cas d'imprévu: courants contraires, détours par mauvais temps, erreurs dans les estimations de consommation ou nécessité d'assister un autre bateau. De nombreux assureurs et capitaineries la considèrent obligatoire.",
  },
  {
    question: "Qu'est-ce que la performance en L/NM et comment affecte-t-elle la planification ?",
    answer: "La performance en litres par mille nautique (L/NM) est l'efficacité réelle du moteur dans les conditions de mer. Contrairement à la consommation horaire, elle permet de calculer exactement la quantité de carburant nécessaire pour parcourir une distance précise, quelle que soit la vitesse.",
  },
  {
    question: "Comment l'état de la mer affecte-t-il la consommation réelle ?",
    answer: "L'état de la mer augmente la consommation car la coque travaille davantage contre la résistance de l'eau et du vent. Par petite houle la consommation augmente de 15%, par houle modérée de 30%, et par tempête elle peut bondir de 60% ou plus. Ignorer ce facteur peut laisser un bateau sans carburant avant d'arriver au port.",
  },
];

const howTo: EnduranceLocaleContent['howTo'] = [
  {
    name: 'Saisissez la capacité de vos réservoirs',
    text: "Indiquez les litres du réservoir principal et de l'auxiliaire si vous en avez un. L'outil calculera le pourcentage de remplissage actuel.",
  },
  {
    name: 'Indiquez le carburant actuel',
    text: "Saisissez les litres réels que vous avez en ce moment. Vous pouvez les mesurer avec la jauge du bateau ou les estimer d'après le dernier ravitaillement.",
  },
  {
    name: 'Ajustez les conditions de navigation',
    text: "Sélectionnez l'état de mer prévu pour votre traversée. Le facteur de mer corrige la consommation théorique à la consommation réelle attendue.",
  },
  {
    name: 'Saisissez la consommation et la vitesse de croisière',
    text: 'Utilisez les données du fabricant ou vos propres enregistrements de consommation horaire et de vitesse de navigation habituelle.',
  },
  {
    name: 'Vérifiez la distance sécurisée et le calcul inverse',
    text: "L'outil vous montre combien de miles vous pouvez parcourir en sécurité et combien de carburant vous avez besoin pour atteindre une destination précise.",
  },
];

const seo: EnduranceLocaleContent['seo'] = [
  { type: 'title', text: 'Gestion du Carburant et Autonomie en Navigation à Moteur', level: 2 },
  {
    type: 'paragraph',
    html: "L'<strong>autonomie nautique</strong> est l'un des calculs les plus critiques avant d'appareiller sur un bateau à moteur. Connaître avec précision le nombre de miles que vous pouvez parcourir avec le carburant disponible est la différence entre une traversée planifiée et une urgence en haute mer.",
  },
  {
    type: 'paragraph',
    html: "Ce calculateur d'autonomie intègre le <strong>facteur de conditions de mer</strong>, le pourcentage de réserve de sécurité et le calcul inverse du carburant nécessaire pour que la gestion du carburant soit complète et fiable dans toute situation.",
  },
  { type: 'title', text: "La Règle d'Or: La Règle des Tiers", level: 3 },
  {
    type: 'paragraph',
    html: 'La règle classique de gestion du carburant en nautisme divise le réservoir en trois parties égales pour garantir toujours une marge de sécurité:',
  },
  {
    type: 'list',
    items: [
      "<strong>Un tiers pour l'aller:</strong> Le carburant nécessaire pour atteindre la destination prévue.",
      '<strong>Un tiers pour le retour:</strong> Le carburant pour revenir au port de départ ou au plus proche.',
      "<strong>Un tiers de réserve:</strong> La marge de sécurité en cas d'imprévu, de courants ou de conditions adverses.",
    ],
  },
  {
    type: 'paragraph',
    html: "Dans le calculateur, vous pouvez configurer le pourcentage de réserve selon votre critère, bien que <strong>descendre sous 20% ne soit jamais recommandé</strong>. Avec de grands réservoirs ou des traversées longues, de nombreux skippers expérimentés élèvent cette marge à 30% voire 33%.",
  },
  { type: 'title', text: 'Facteurs affectant la Consommation (l/h)', level: 3 },
  {
    type: 'paragraph',
    html: "La consommation théorique du fabricant est calculée dans des conditions idéales de laboratoire. En pratique, de multiples facteurs modifient la <strong>consommation réelle</strong> de carburant. La vitesse de coque est la plus déterminante: naviguer au-delà de la vitesse économique peut doubler ou tripler la consommation par mille parcouru.",
  },
  {
    type: 'table',
    headers: ['État de Navigation', "Effet sur l'Autonomie", 'Conseil'],
    rows: [
      ['<strong>Coque Encrassée</strong>', "Réduit l'autonomie jusqu'à 20%", 'Nettoyez la coque avant la saison'],
      ['<strong>Courant Contraire</strong>', 'Peut réduire la vitesse effective de 30%', 'Calculez toujours avec la vitesse sur le fond'],
      ['<strong>Vent Debout</strong>', 'Augmente la résistance et la consommation de 10-25%', 'Utilisez le facteur petite ou modérée houle'],
      ['<strong>Surcharge</strong>', "Augmente le tirant d'eau et la résistance", "Pesez l'équipement avant de calculer"],
    ],
  },
  { type: 'title', text: "Glossaire Technique d'Autonomie", level: 3 },
  {
    type: 'glossary',
    items: [
      { term: 'Performance (L/NM)', definition: "Litres de carburant consommés par mille nautique parcouru. L'indicateur le plus utile pour planifier les traversées car il relie la consommation à la distance réelle." },
      { term: 'Vitesse de Croisière', definition: 'La vitesse optimale à laquelle le moteur offre le meilleur équilibre entre vitesse et consommation. Généralement entre 70% et 80% de la puissance maximale.' },
      { term: 'Réserve Critique', definition: "Le pourcentage du réservoir qui ne doit jamais être consommé. Un minimum de 20% est recommandé pour couvrir les imprévus et empêcher l'air d'entrer dans le circuit de carburant." },
      { term: 'Consommation Spécifique', definition: "Grammes de carburant par kilowattheure de puissance produite (g/kWh). Mesure technique du moteur permettant de comparer l'efficacité entre différents systèmes de propulsion." },
    ],
  },
  { type: 'title', text: 'Le Danger des Boues et du Mouvement', level: 3 },
  {
    type: 'paragraph',
    html: 'Une source courante de problèmes sur les bateaux avec peu de carburant est les <strong>boues de fond de réservoir</strong>. Quand le niveau baisse trop, les sédiments accumulés pendant des années peuvent atteindre le filtre et le boucher, laissant le moteur sans carburant même si la jauge indique encore quelques litres.',
  },
  {
    type: 'paragraph',
    html: "Le mouvement du bateau en mer avec peu de carburant peut aussi causer des problèmes: le liquide oscille avec les vagues et peut momentanément priver la pompe d'alimentation. Maintenir la réserve garantit que cela ne se produise pas à un moment critique comme une manœuvre d'entrée au port.",
  },
  {
    type: 'tip',
    title: "Conseil d'Économie de Carburant",
    html: "Réduire la vitesse de 10-15% par rapport à votre vitesse de croisière habituelle peut améliorer l'efficacité jusqu'à 30%. Si vous avez le temps et que le temps le permet, naviguer plus lentement est toujours la décision la plus économique et la plus sûre.",
  },
  { type: 'title', text: 'Différence entre Miles Nautiques (NM) et Kilomètres', level: 3 },
  {
    type: 'paragraph',
    html: "Un <strong>mille nautique</strong> équivaut à 1 852 mètres (1,852 km), et est l'unité de distance universelle en navigation maritime et aéronautique. Il est basé sur l'arc d'une minute de degré géographique, ce qui le rend idéal pour la navigation avec des cartes en coordonnées géographiques. La vitesse en milles nautiques par heure s'appelle un nœud (kn).",
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Jauge Analogique à Aiguille',
        description: 'Système traditionnel à flotteur',
        points: [
          'Faible coût et installation simple',
          "Ne nécessite pas d'électricité pour fonctionner",
          'Imprécision par mer agitée due au mouvement du carburant',
          "N'affiche pas la consommation ni l'autonomie estimée",
        ],
      },
      {
        title: 'Calculateur de Débit Numérique',
        description: 'Capteurs électroniques de débit',
        highlight: true,
        points: [
          'Précision de 1-2% sur la consommation réelle',
          "Affiche l'autonomie, la consommation et le coût en temps réel",
          'Intégrable avec chartplotters et NMEA 2000',
          'Nécessite un étalonnage initial et une maintenance',
        ],
      },
    ],
  },
];

const schemas: EnduranceLocaleContent['schemas'] = [
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

export const content: EnduranceLocaleContent = {
  slug, title, description, ui, seo, faq, bibliography, howTo, schemas,
};
