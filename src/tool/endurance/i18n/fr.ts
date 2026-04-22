import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EnduranceUI, EnduranceLocaleContent } from '../index';

const slug = 'calculateur-autonomie-nautique';
const title = "Calculateur d'Autonomie Nautique";
const description =
  "Calculez votre portee maximale et la distance securisee selon la consommation, la capacite du reservoir et la vitesse de croisiere. Gestion du carburant pour bateaux a moteur.";

const ui: EnduranceUI = {
  tankCapacityLabel: 'Capacite du Reservoir',
  mainTankLabel: 'Principal',
  auxTankLabel: 'Aux',
  currentFuelLabel: 'Carburant Actuel',
  seaConditionsLabel: 'Conditions Mer / Vent',
  consumptionLabel: 'Consommation Theorique',
  cruiseSpeedLabel: 'Vitesse de Croisiere',
  reserveLabel: 'Reserve',
  fuelPriceLabel: 'Prix au Litre',
  maxRangeLabel: 'Portee Maximale',
  realPerformanceLabel: 'Performance Reelle',
  hoursLabel: "Autonomie en Heures",
  safeMilesLabel: 'Miles Securises',
  tankValueLabel: 'Valeur du Reservoir',
  inverseCalcLabel: 'Calcul Inverse : Combien dois-je ravitailler ?',
  desiredDistLabel: 'Distance Souhaitee',
  minFuelLabel: 'Carburant Minimum Requis',
  warningLabel: 'Rappel : Une reserve de 20% est le minimum absolu recommande par la securite nautique.',
  seaCalm: 'Calme (1.0x)',
  seaLight: 'Petite houle (+15%)',
  seaModerate: 'Houle moderee (+30%)',
  seaStorm: 'Tempete (+60%)',
  faqTitle: 'Questions Frequentes': 'References',
};

const faq: EnduranceLocaleContent['faq'] = [
  {
    question: "Comment calcule-t-on l'autonomie d'un bateau a moteur ?",
    answer: "L'autonomie se calcule en divisant le carburant disponible par la consommation horaire pour obtenir les heures totales, puis en multipliant ce temps par la vitesse de croisiere. L'outil applique egalement un facteur d'etat de mer pour refleter les conditions reelles de navigation.",
  },
  {
    question: "Pourquoi recommande-t-on une reserve de 20% en navigation ?",
    answer: "La reserve de 20% est une norme de securite nautique qui garantit un carburant suffisant en cas d'imprevu : courants contraires, detours par mauvais temps, erreurs dans les estimations de consommation ou necessite d'assister un autre bateau. De nombreux assureurs et capitaineries la considerent obligatoire.",
  },
  {
    question: "Qu'est-ce que la performance en L/NM et comment affecte-t-elle la planification ?",
    answer: "La performance en litres par mille nautique (L/NM) est l'efficacite reelle du moteur dans les conditions de mer. Contrairement a la consommation horaire, elle permet de calculer exactement la quantite de carburant necessaire pour parcourir une distance precise, quelle que soit la vitesse.",
  },
  {
    question: "Comment l'etat de la mer affecte-t-il la consommation reelle ?",
    answer: "L'etat de la mer augmente la consommation car la coque travaille davantage contre la resistance de l'eau et du vent. Par petite houle la consommation augmente de 15%, par houle moderee de 30%, et par tempete elle peut bondir de 60% ou plus. Ignorer ce facteur peut laisser un bateau sans carburant avant d'arriver au port.",
  },
];

const howTo: EnduranceLocaleContent['howTo'] = [
  {
    name: 'Saisissez la capacite de vos reservoirs',
    text: "Indiquez les litres du reservoir principal et de l'auxiliaire si vous en avez un. L'outil calculera le pourcentage de remplissage actuel.",
  },
  {
    name: 'Indiquez le carburant actuel',
    text: "Saisissez les litres reels que vous avez en ce moment. Vous pouvez les mesurer avec la jauge du bateau ou les estimer d'apres le dernier ravitaillement.",
  },
  {
    name: 'Ajustez les conditions de navigation',
    text: "Selectionnez l'etat de mer prevu pour votre traversee. Le facteur de mer corrige la consommation theorique a la consommation reelle attendue.",
  },
  {
    name: 'Saisissez la consommation et la vitesse de croisiere',
    text: 'Utilisez les donnees du fabricant ou vos propres enregistrements de consommation horaire et de vitesse de navigation habituelle.',
  },
  {
    name: 'Verifiez la distance securisee et le calcul inverse',
    text: "L'outil vous montre combien de miles vous pouvez parcourir en securite et combien de carburant vous avez besoin pour atteindre une destination precise.",
  },
];

const seo: EnduranceLocaleContent['seo'] = [
  { type: 'title', text: 'Gestion du Carburant et Autonomie en Navigation a Moteur', level: 2 },
  {
    type: 'paragraph',
    html: "L'<strong>autonomie nautique</strong> est l'un des calculs les plus critiques avant d'appareiller sur un bateau a moteur. Connaitre avec precision le nombre de miles que vous pouvez parcourir avec le carburant disponible est la difference entre une traversee planifiee et une urgence en haute mer.",
  },
  {
    type: 'paragraph',
    html: "Ce calculateur d'autonomie integre le <strong>facteur de conditions de mer</strong>, le pourcentage de reserve de securite et le calcul inverse du carburant necessaire pour que la gestion du carburant soit complete et fiable dans toute situation.",
  },
  { type: 'title', text: "La Regle d'Or : La Regle des Tiers", level: 3 },
  {
    type: 'paragraph',
    html: 'La regle classique de gestion du carburant en nautisme divise le reservoir en trois parties egales pour garantir toujours une marge de securite :',
  },
  {
    type: 'list',
    items: [
      "<strong>Un tiers pour l'aller :</strong> Le carburant necessaire pour atteindre la destination prevue.",
      '<strong>Un tiers pour le retour :</strong> Le carburant pour revenir au port de depart ou au plus proche.',
      "<strong>Un tiers de reserve :</strong> La marge de securite en cas d'imprevu, de courants ou de conditions adverses.",
    ],
  },
  {
    type: 'paragraph',
    html: "Dans le calculateur, vous pouvez configurer le pourcentage de reserve selon votre critere, bien que <strong>descendre sous 20% ne soit jamais recommande</strong>. Avec de grands reservoirs ou des traversees longues, de nombreux skippers experimentes elevent cette marge a 30% voire 33%.",
  },
  { type: 'title', text: 'Facteurs affectant la Consommation (l/h)', level: 3 },
  {
    type: 'paragraph',
    html: "La consommation theorique du fabricant est calculee dans des conditions ideales de laboratoire. En pratique, de multiples facteurs modifient la <strong>consommation reelle</strong> de carburant. La vitesse de coque est la plus determinante : naviguer au-dela de la vitesse economique peut doubler ou tripler la consommation par mile parcouru.",
  },
  {
    type: 'table',
    headers: ['Etat de Navigation', "Effet sur l'Autonomie", 'Conseil'],
    rows: [
      ['<strong>Coque Encrassee</strong>', "Reduit l'autonomie jusqu'a 20%", 'Nettoyez la coque avant la saison'],
      ['<strong>Courant Contraire</strong>', 'Peut reduire la vitesse effective de 30%', 'Calculez toujours avec la vitesse sur le fond'],
      ['<strong>Vent Debout</strong>', 'Augmente la resistance et la consommation de 10-25%', 'Utilisez le facteur petite ou moderee houle'],
      ['<strong>Surcharge</strong>', "Augmente le tirant d'eau et la resistance", "Pesez l'equipement avant de calculer"],
    ],
  },
  { type: 'title', text: "Glossaire Technique d'Autonomie", level: 3 },
  {
    type: 'glossary',
    items: [
      { term: 'Performance (L/NM)', definition: "Litres de carburant consommes par mille nautique parcouru. L'indicateur le plus utile pour planifier les traversees car il relie la consommation a la distance reelle." },
      { term: 'Vitesse de Croisiere', definition: 'La vitesse optimale a laquelle le moteur offre le meilleur equilibre entre vitesse et consommation. Generalement entre 70% et 80% de la puissance maximale.' },
      { term: 'Reserve Critique', definition: "Le pourcentage du reservoir qui ne doit jamais etre consomme. Un minimum de 20% est recommande pour couvrir les imprevu et empecher l'air d'entrer dans le circuit de carburant." },
      { term: 'Consommation Specifique', definition: "Grammes de carburant par kilowattheure de puissance produite (g/kWh). Mesure technique du moteur permettant de comparer l'efficacite entre differents systemes de propulsion." },
    ],
  },
  { type: 'title', text: 'Le Danger des Boues et du Mouvement', level: 3 },
  {
    type: 'paragraph',
    html: 'Une source courante de problemes sur les bateaux avec peu de carburant est les <strong>boues de fond de reservoir</strong>. Quand le niveau baisse trop, les sediments accumules pendant des annees peuvent atteindre le filtre et le boucher, laissant le moteur sans carburant meme si la jauge indique encore quelques litres.',
  },
  {
    type: 'paragraph',
    html: "Le mouvement du bateau en mer avec peu de carburant peut aussi causer des problemes : le liquide oscille avec les vagues et peut momentanement priver la pompe d'alimentation. Maintenir la reserve garantit que cela ne se produise pas a un moment critique comme une manoeuvre d'entree au port.",
  },
  {
    type: 'tip',
    title: "Conseil d'Economie de Carburant",
    html: "Reduire la vitesse de 10-15% par rapport a votre vitesse de croisiere habituelle peut ameliorer l'efficacite jusqu'a 30%. Si vous avez le temps et que le temps le permet, naviguer plus lentement est toujours la decision la plus economique et la plus sure.",
  },
  { type: 'title', text: 'Difference entre Miles Nautiques (NM) et Kilometres', level: 3 },
  {
    type: 'paragraph',
    html: "Un <strong>mille nautique</strong> equivaut a 1 852 metres (1,852 km), et est l'unite de distance universelle en navigation maritime et aeronautique. Il est base sur l'arc d'une minute de degre geographique, ce qui le rend ideal pour la navigation avec des cartes en coordonnees geographiques. La vitesse en milles nautiques par heure s'appelle un noeud (kn).",
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Jauge Analogique a Aiguille',
        description: 'Systeme traditionnel a flotteur',
        points: [
          'Faible cout et installation simple',
          "Ne necessite pas d'electricite pour fonctionner",
          'Imprecision par mer agitee due au mouvement du carburant',
          "N'affiche pas la consommation ni l'autonomie estimee",
        ],
      },
      {
        title: 'Calculateur de Debit Numerique',
        description: 'Capteurs electroniques de debit',
        highlight: true,
        points: [
          'Precision de 1-2% sur la consommation reelle',
          "Affiche l'autonomie, la consommation et le cout en temps reel",
          'Integrable avec chartplotters et NMEA 2000',
          'Necessite un etalonnage initial et une maintenance',
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
    name: `Comment utiliser : ${title}`,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
  } as WithContext<HowTo>,
];

export const content: EnduranceLocaleContent = {
  slug, title, description, ui, seo, faq, bibliography, howTo, schemas,
};
