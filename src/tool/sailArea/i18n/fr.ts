import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SailAreaUI, SailAreaLocaleContent } from '../index';

const slug = 'calculateur-surface-velique';
const title = 'Calculateur de Surface Vélique et Ratio SA/D';
const description =
  "Calculez la surface totale de vos voiles et le ratio surface/déplacement. Analyse de performance nautique basée sur les mesures I, J, P et E.";

const ui: SailAreaUI = {
  hullSectionLabel: 'Données de la Coque',
  totalMassLabel: 'Déplacement',
  rigSystemLabel: 'Gréement',
  intendedUseLabel: 'Usage prévu',
  rigGeometryLabel: 'Géométrie du Gréement',
  sailConfigLabel: 'Type de gréement',
  genoaOverlapLabel: 'Recouvrement du Génois',
  foqueLabel: 'Foc',
  genovaLabel: 'Génois',
  sadRatioLabel: 'Ratio SA/D',
  totalAreaLabel: 'Surface totale',
  performanceLabel: 'Performance',
  sloopLabel: 'Sloop (un mât)',
  cutterLabel: 'Cotre (double foc)',
  ketchLabel: 'Ketch (deux mâts)',
  cruiserLabel: 'Croiseur',
  performanceTypeLabel: 'Performance',
  racerLabel: 'Course',
  exportPdfLabel: 'GÉNÉRER RAPPORT TECHNIQUE',
};

const faq: SailAreaLocaleContent['faq'] = [
  {
    question: 'Pourquoi mon bateau est-il lent par petit temps ?',
    answer: "Votre ratio SA/D est probablement inférieur à 15, ce qui indique un bateau à fort déplacement avec peu de surface vélique par rapport à son poids. Ces bateaux ont besoin de vents supérieurs à 12 nœuds pour naviguer avec vivacité.",
  },
  {
    question: 'Dois-je vider les réservoirs d\'eau pour améliorer les performances ?',
    answer: "Oui, alléger le bateau améliore directement le ratio SA/D car le déplacement réel diminue. Vider les réservoirs d'eau et de carburant peut réduire le déplacement de plusieurs centaines de kilos et augmenter significativement le ratio.",
  },
  {
    question: "Qu'est-ce que le Roach d'une voile ?",
    answer: "Le Roach est la courbe convexe de la chute (bord arrière) de la grand-voile. Il apporte une surface vélique supplémentaire au-delà du triangle géométrique de base défini par P et E. Les bateaux de course ont des Roach importants avec des lattes rigides.",
  },
  {
    question: 'Comment mesurer le déplacement réel de mon bateau ?',
    answer: "Le plus fiable est d'utiliser le déplacement en charge (avec tout l'équipement, l'eau, le carburant et l'équipage à bord). Le déplacement lège du manuel du constructeur est souvent optimiste. Utilisez le déplacement réel dans vos conditions habituelles de navigation.",
  },
  {
    question: 'Où trouver les mesures I, J, P et E de mon bateau ?',
    answer: "Vous les trouverez dans le manuel du propriétaire, dans les certificats de jauge ORC ou IRC, ou dans la documentation des certificats de classe. Vous pouvez aussi les mesurer directement à bord avec un mètre ruban ou en contactant le chantier constructeur.",
  },
];

const howTo: SailAreaLocaleContent['howTo'] = [
  {
    name: 'Sélectionner le type de gréement',
    text: 'Choisissez entre Sloop (un mât), Cotre (foc et trinquette) ou Ketch (mât de misaine). Cela détermine comment la surface totale est calculée.',
  },
  {
    name: 'Entrer le déplacement',
    text: "Utilisez le déplacement réel en charge de votre bateau en kg ou lbs. Ce chiffre est clé pour le calcul du ratio SA/D.",
  },
  {
    name: 'Mesurer la géométrie du gréement',
    text: "Entrez les mesures P (hauteur du mât), E (bôme), I (hauteur du triangle de l'avant) et J (base du triangle de l'avant) en mètres ou pieds.",
  },
  {
    name: 'Ajuster le recouvrement du génois',
    text: 'Déplacez le curseur pour indiquer le recouvrement de votre génois: 100% est un foc sans recouvrement, 130% est un génois standard, 155% est un grand génois.',
  },
  {
    name: 'Interpréter le ratio SA/D',
    text: 'Un ratio entre 16 et 20 est un croiseur équilibré. Au-dessus de 20, le bateau sera très vif par petit temps mais exigeant avec du vent frais.',
  },
];

const seo: SailAreaLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Calculateur de Surface Vélique: Guide Complet de Performance et Ratios',
    level: 2,
  },
  {
    type: 'paragraph',
    html: "La surface vélique est le moteur aérodynamique de tout voilier. Elle détermine combien d'énergie du vent le bateau peut capturer et, combinée à son déplacement, définit son caractère nautique: s'il sera un croiseur paresseux ou une machine de course nerveuse. Calculer correctement cette valeur est la première étape pour comprendre le comportement de tout voilier.",
  },
  {
    type: 'paragraph',
    html: "La navigation à voile implique une danse constante entre la force du vent sur les voiles et la résistance de l'eau sur la coque. Le <strong>ratio Surface Vélique / Déplacement (SA/D)</strong> capture cette relation en un seul nombre permettant de comparer des bateaux de toute longueur et déplacement à conditions égales.",
  },
  {
    type: 'stats',
    items: [
      { label: 'Ratio Croiseur Idéal', value: '15-18', icon: 'mdi:anchor' },
      { label: 'Bateaux de Course', value: '+24', icon: 'mdi:sailing' },
      { label: "Marge d'Erreur", value: '5-10%', icon: 'mdi:alert-circle-outline' },
    ],
    columns: 3,
  },
  {
    type: 'title',
    text: 'A quoi sert le calcul du Ratio SA/D ?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: "Le ratio <strong>Sail Area / Displacement</strong> est un outil de diagnostic permettant de prédire le comportement du bateau avant l'appareillage. Un ratio faible indique un bateau robuste et sûr mais lent par petit vent; un ratio élevé offre de la vitesse et une sensation de vol mais exige une plus grande habileté de l'équipage quand le vent forcit.",
  },
  {
    type: 'title',
    text: 'Tableau de Référence des Ratios SA/D',
    level: 4,
  },
  {
    type: 'table',
    headers: ['Ratio', 'Type de Bateau', 'Comportement en Mer'],
    rows: [
      ['< 14', 'Fort Déplacement / Cargo', 'Stable, lent, nécessite du vent soutenu'],
      ['14 - 16.5', 'Croiseur Hauturier', 'Équilibré, confortable, bon au près'],
      ['16.5 - 20', 'Croiseur Standard de Port', 'Vif dans la brise, maniable, polyvalent'],
      ['20 - 25', 'Performance Cruiser / Sport', 'Rapide, exigeant, grisant par petit temps'],
      ['> 25', 'Course / Sport Extrême', 'Très rapide, nerveux, équipage expérimenté requis'],
    ],
  },
  {
    type: 'title',
    text: 'Glossaire Technique des Mesures (I, J, P, E)',
    level: 3,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'I (Hauteur du Triangle Avant)',
        definition: "Distance verticale du pont jusqu'au point d'accroche de la drisse de foc sur le mât. Définit la hauteur du triangle avant.",
      },
      {
        term: 'J (Base du Triangle Avant)',
        definition: "Distance horizontale du mât jusqu'à l'étrave (proue du bateau). Définit la base du triangle avant où les voiles d'avant sont enroulées ou étarquées.",
      },
      {
        term: 'P (Hauteur du Mât)',
        definition: "Distance du pont jusqu'à la poulie de drisse de grand-voile au sommet du mât. Définit la hauteur de la grand-voile.",
      },
      {
        term: 'E (Longueur de la Bôme)',
        definition: "Distance du mât jusqu'au point d'écoute de la grand-voile à l'extrémité de la bôme. Définit la base de la grand-voile.",
      },
    ],
  },
  {
    type: 'title',
    text: 'Calculs pour Examens Nautiques (Capitaine de Yacht)',
    level: 3,
  },
  {
    type: 'paragraph',
    html: "Le calcul de la surface vélique et du ratio SA/D fait partie du programme des examens de <strong>Capitaine de Yacht</strong> et des brevets côtiers. Comprendre la géométrie du gréement et sa relation avec le déplacement est essentiel pour prendre des décisions de sécurité en mer: réduire la voilure à temps, choisir le bon génois ou estimer le comportement du bateau face à un grain.",
  },
  {
    type: 'tip',
    title: 'Voiles Portantes et Sécurité',
    html: "Pour la navigation océanique ou les longues traversées, un ratio SA/D entre 16 et 18 offre le meilleur équilibre entre vitesse et sécurité. Les bateaux avec des ratios supérieurs à 22 peuvent avoir besoin de ris avec des vents de seulement Force 4-5.",
  },
  {
    type: 'title',
    text: 'Comment le Recouvrement du Génois Affecte-t-il les Performances ?',
    level: 4,
  },
  {
    type: 'paragraph',
    html: "Le <strong>génois</strong> est la plus grande voile d'avant, dont le point d'écoute se situe derrière le mât, \"recouvrant\" la grand-voile. Le pourcentage de recouvrement indique de combien la perpendiculaire au guindant (LP) est plus longue que la distance J. Un génois de 150% a un LP équivalent à 150% de J, apportant une surface vélique bien supérieure à un simple foc sans recouvrement.",
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Dacron (Croisière)',
        description: 'Matériau classique pour voiles de croisière. Robuste et facile à entretenir.',
        points: [
          'Haute durabilité et résistance UV',
          'Faible coût de maintenance',
          'Plus lourd et allongement sous charge',
          'Idéal pour navigation côtière et hauturière',
        ],
      },
      {
        title: 'Laminées (Course)',
        description: 'Matériaux haute technologie: Kevlar, Spectra ou Dyneema.',
        highlight: true,
        points: [
          "Allongement minimal: efficacité aérodynamique maximale",
          'Beaucoup plus léger que le Dacron',
          'Coût plus élevé et durée de vie plus courte',
          'Indispensable sur les bateaux avec ratio SA/D > 22',
        ],
      },
    ],
    columns: 2,
  },
  {
    type: 'title',
    text: 'Physique de la Navigation et Stabilité',
    level: 3,
  },
  {
    type: 'paragraph',
    html: "La surface vélique génère une force propulsive mais aussi un <strong>couple de gite</strong> qui tend à faire chavirer le bateau. La stabilité est mesurée par le couple de redressement que le bateau peut opposer à ce couple de gite. Un ratio SA/D élevé sur un bateau avec peu de lest peut être dangereux, tandis que le même ratio sur un bateau à quille profonde et lourde est parfaitement maniable.",
  },
  {
    type: 'paragraph',
    html: "Pour calculer la puissance réelle disponible, les architectes navals utilisent le <strong>Displacement-Length Ratio (DLR)</strong> en combinaison avec le SA/D. Les deux ratios ensemble décrivent précisément si un bateau est un remorqueur marin ou un planeur de course.",
  },
  {
    type: 'tip',
    title: 'Stabilité et Sécurité',
    html: "N'évaluez jamais le SA/D de façon isolée. Un voilier avec un ratio de 22 et un angle de redressement de 90 degrés est bien plus sûr que l'un avec un ratio de 18 et un angle de redressement de 60 degrés. Consultez toujours la courbe de stabilité de votre bateau.",
  },
];

const schemas: SailAreaLocaleContent['schemas'] = [
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

export const content: SailAreaLocaleContent = {
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
