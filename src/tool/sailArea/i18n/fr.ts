import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SailAreaUI, SailAreaLocaleContent } from '../index';

const slug = 'calculateur-surface-velique';
const title = 'Calculateur de Surface Velique et Ratio SA/D';
const description =
  "Calculez la surface totale de vos voiles et le ratio surface/deplacement. Analyse de performance nautique basee sur les mesures I, J, P et E.";

const ui: SailAreaUI = {
  hullSectionLabel: 'Donnees de la Coque',
  totalMassLabel: 'Deplacement',
  rigSystemLabel: 'Greement',
  intendedUseLabel: 'Usage prevu',
  rigGeometryLabel: 'Geometrie du Greement',
  sailConfigLabel: 'Type de greement',
  genoaOverlapLabel: 'Recouvrement du Genois',
  foqueLabel: 'Foc',
  genovaLabel: 'Genois',
  sadRatioLabel: 'Ratio SA/D',
  totalAreaLabel: 'Surface totale',
  performanceLabel: 'Performance',
  sloopLabel: 'Sloop (un mat)',
  cutterLabel: 'Cotre (double foc)',
  ketchLabel: 'Ketch (deux mats)',
  cruiserLabel: 'Croiseur',
  performanceTypeLabel: 'Performance',
  racerLabel: 'Course',
  exportPdfLabel: 'GENERER RAPPORT TECHNIQUE',
  faqTitle: 'Questions Frequentes',
  bibliographyTitle: 'Bibliographie',
};

const faq: SailAreaLocaleContent['faq'] = [
  {
    question: 'Pourquoi mon bateau est-il lent par petit temps?',
    answer: "Votre ratio SA/D est probablement inferieur a 15, ce qui indique un bateau a fort deplacement avec peu de surface velique par rapport a son poids. Ces bateaux ont besoin de vents superieurs a 12 noeuds pour naviguer avec vivacite.",
  },
  {
    question: 'Dois-je vider les reservoirs d\'eau pour ameliorer les performances?',
    answer: "Oui, alleger le bateau ameliore directement le ratio SA/D car le deplacement reel diminue. Vider les reservoirs d'eau et de carburant peut reduire le deplacement de plusieurs centaines de kilos et augmenter significativement le ratio.",
  },
  {
    question: "Qu'est-ce que le Roach d'une voile?",
    answer: "Le Roach est la courbe convexe de la chute (bord arriere) de la grand-voile. Il apporte une surface velique supplementaire au-dela du triangle geometrique de base defini par P et E. Les bateaux de course ont des Roach importants avec des lattes rigides.",
  },
  {
    question: 'Comment mesurer le deplacement reel de mon bateau?',
    answer: "Le plus fiable est d'utiliser le deplacement en charge (avec tout l'equipement, l'eau, le carburant et l'equipage a bord). Le deplacement lege du manuel du constructeur est souvent optimiste. Utilisez le deplacement reel dans vos conditions habituelles de navigation.",
  },
  {
    question: 'Ou trouver les mesures I, J, P et E de mon bateau?',
    answer: "Vous les trouverez dans le manuel du proprietaire, dans les certificats de jauge ORC ou IRC, ou dans la documentation des certificats de classe. Vous pouvez aussi les mesurer directement a bord avec un metre ruban ou en contactant le chantier constructeur.",
  },
];

const howTo: SailAreaLocaleContent['howTo'] = [
  {
    name: 'Selectionner le type de greement',
    text: 'Choisissez entre Sloop (un mat), Cotre (foc et trinquette) ou Ketch (mat de misaine). Cela determine comment la surface totale est calculee.',
  },
  {
    name: 'Entrer le deplacement',
    text: "Utilisez le deplacement reel en charge de votre bateau en kg ou lbs. Ce chiffre est cle pour le calcul du ratio SA/D.",
  },
  {
    name: 'Mesurer la geometrie du greement',
    text: 'Entrez les mesures P (hauteur du mat), E (bome), I (hauteur du triangle de l\'avant) et J (base du triangle de l\'avant) en metres ou pieds.',
  },
  {
    name: 'Ajuster le recouvrement du genois',
    text: 'Deplacez le curseur pour indiquer le recouvrement de votre genois : 100% est un foc sans recouvrement, 130% est un genois standard, 155% est un grand genois.',
  },
  {
    name: 'Interpreter le ratio SA/D',
    text: 'Un ratio entre 16 et 20 est un croiseur equilibre. Au-dessus de 20, le bateau sera tres vif par petit temps mais exigeant avec du vent frais.',
  },
];

const bibliography: SailAreaLocaleContent['bibliography'] = [
  {
    name: 'Societe des Architectes Navals - SNAME',
    url: 'https://www.sname.org/',
  },
  {
    name: 'ORC - Offshore Racing Congress',
    url: 'https://orc.org/',
  },
  {
    name: 'Elvstrom Sailmakers - Manuel de Voilerie',
    url: 'https://www.elvstromsails.com/',
  },
];

const seo: SailAreaLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Calculateur de Surface Velique : Guide Complet de Performance et Ratios',
    level: 2,
  },
  {
    type: 'paragraph',
    html: "La surface velique est le moteur aerodynamique de tout voilier. Elle determine combien d'energie du vent le bateau peut capturer et, combinee a son deplacement, definit son caractere nautique : s'il sera un croiseur paresseux ou une machine de course nerveuse. Calculer correctement cette valeur est la premiere etape pour comprendre le comportement de tout voilier.",
  },
  {
    type: 'paragraph',
    html: "La navigation a voile implique une danse constante entre la force du vent sur les voiles et la resistance de l'eau sur la coque. Le <strong>ratio Surface Velique / Deplacement (SA/D)</strong> capture cette relation en un seul nombre permettant de comparer des bateaux de toute longueur et deplacement a conditions egales.",
  },
  {
    type: 'stats',
    items: [
      { label: 'Ratio Croiseur Ideal', value: '15-18', icon: 'mdi:anchor' },
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
    html: "Le ratio <strong>Sail Area / Displacement</strong> est un outil de diagnostic permettant de predire le comportement du bateau avant l'appareillage. Un ratio faible indique un bateau robuste et sur mais lent par petit vent ; un ratio eleve offre de la vitesse et une sensation de vol mais exige une plus grande habilete de l'equipage quand le vent forcit.",
  },
  {
    type: 'title',
    text: 'Tableau de Reference des Ratios SA/D',
    level: 4,
  },
  {
    type: 'table',
    headers: ['Ratio', 'Type de Bateau', 'Comportement en Mer'],
    rows: [
      ['< 14', 'Fort Deplacement / Cargo', 'Stable, lent, necessite du vent soutenu'],
      ['14 - 16.5', 'Croiseur Hauturier', 'Equilibre, confortable, bon au pres'],
      ['16.5 - 20', 'Croiseur Standard de Port', 'Vif dans la brise, maniable, polyvalent'],
      ['20 - 25', 'Performance Cruiser / Sport', 'Rapide, exigeant, grisant par petit temps'],
      ['> 25', 'Course / Sport Extreme', 'Tres rapide, nerveux, equipage experimente requis'],
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
        definition: "Distance verticale du pont jusqu'au point d'accroche de la drisse de foc sur le mat. Definit la hauteur du triangle avant.",
      },
      {
        term: 'J (Base du Triangle Avant)',
        definition: "Distance horizontale du mat jusqu'a l'etrave (proue du bateau). Definit la base du triangle avant ou les voiles d'avant sont enroules ou etarques.",
      },
      {
        term: 'P (Hauteur du Mat)',
        definition: "Distance du pont jusqu'a la poulie de drisse de grand-voile au sommet du mat. Definit la hauteur de la grand-voile.",
      },
      {
        term: 'E (Longueur de la Bome)',
        definition: "Distance du mat jusqu'au point d'ecoute de la grand-voile a l'extremite de la bome. Definit la base de la grand-voile.",
      },
    ],
  },
  {
    type: 'title',
    text: "Calculs pour Examens Nautiques (Capitaine de Yacht)",
    level: 3,
  },
  {
    type: 'paragraph',
    html: "Le calcul de la surface velique et du ratio SA/D fait partie du programme des examens de <strong>Capitaine de Yacht</strong> et des brevets cotiers. Comprendre la geometrie du greement et sa relation avec le deplacement est essentiel pour prendre des decisions de securite en mer : reduire la voilure a temps, choisir le bon genois ou estimer le comportement du bateau face a un grain.",
  },
  {
    type: 'tip',
    title: 'Voiles Portantes et Securite',
    html: "Pour la navigation oceanique ou les longues traversees, un ratio SA/D entre 16 et 18 offre le meilleur equilibre entre vitesse et securite. Les bateaux avec des ratios superieurs a 22 peuvent avoir besoin de ris avec des vents de seulement Force 4-5.",
  },
  {
    type: 'title',
    text: 'Comment le Recouvrement du Genois Affecte-t-il les Performances ?',
    level: 4,
  },
  {
    type: 'paragraph',
    html: "Le <strong>genois</strong> est la plus grande voile d'avant, dont le point d'ecoute se situe derriere le mat, \"recouvrant\" la grand-voile. Le pourcentage de recouvrement indique de combien la perpendiculaire au guindant (LP) est plus longue que la distance J. Un genois de 150% a un LP equivalent a 150% de J, apportant une surface velique bien superieure a un simple foc sans recouvrement.",
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Dacron (Croisiere)',
        description: 'Materiau classique pour voiles de croisiere. Robuste et facile a entretenir.',
        points: [
          'Haute durabilite et resistance UV',
          'Faible cout de maintenance',
          'Plus lourd et allongement sous charge',
          'Ideal pour navigation cotiere et hauturiere',
        ],
      },
      {
        title: 'Lamines (Course)',
        description: 'Materiaux haute technologie : Kevlar, Spectra ou Dyneema.',
        highlight: true,
        points: [
          "Allongement minimal : efficacite aerodynamique maximale",
          'Beaucoup plus leger que le Dacron',
          'Cout plus eleve et duree de vie plus courte',
          'Indispensable sur les bateaux avec ratio SA/D > 22',
        ],
      },
    ],
    columns: 2,
  },
  {
    type: 'title',
    text: 'Physique de la Navigation et Stabilite',
    level: 3,
  },
  {
    type: 'paragraph',
    html: "La surface velique genere une force propulsive mais aussi un <strong>couple de gite</strong> qui tend a faire chavirer le bateau. La stabilite est mesuree par le couple de redressement que le bateau peut opposer a ce couple de gite. Un ratio SA/D eleve sur un bateau avec peu de lest peut etre dangereux, tandis que le meme ratio sur un bateau a quille profonde et lourde est parfaitement maniable.",
  },
  {
    type: 'paragraph',
    html: "Pour calculer la puissance reelle disponible, les architectes navals utilisent le <strong>Displacement-Length Ratio (DLR)</strong> en combinaison avec le SA/D. Les deux ratios ensemble decrivent precisement si un bateau est un remorqueur marin ou un planer de course.",
  },
  {
    type: 'tip',
    title: 'Stabilite et Securite',
    html: "N'evaluez jamais le SA/D de facon isolee. Un voilier avec un ratio de 22 et un angle de redressement de 90 degres est bien plus sur que l'un avec un ratio de 18 et un angle de redressement de 60 degres. Consultez toujours la courbe de stabilite de votre bateau.",
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
    name: `Comment utiliser : ${title}`,
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
