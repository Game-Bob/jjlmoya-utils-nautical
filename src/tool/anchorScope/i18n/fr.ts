import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AnchorScopeLocaleContent } from '../entry';
import type { AnchorScopeUI } from '../ui';

const slug = 'calculateur-longueur-chaine-mouillage';
const title = 'Calculateur de Ligne de Mouillage et Rayon d Evitage';
const description =
  'Calculez la longueur ideale de chaine et de cablot, le ratio de touage et le rayon d evitage pour un mouillage sur en fonction de la sonde, du franc-bord et des fonds.';

const ui: AnchorScopeUI = {
  parametersTitle: 'Parametres',
  waterDepthLabel: 'Sonde aux Cartes',
  bowHeightLabel: 'Franc-Bord Avant',
  tideRangeLabel: 'Marnage de Maree',
  boatLengthLabel: 'Longueur Hors-Tout (LOA)',
  rodeTypeLabel: 'Ligne de Mouillage',
  windConditionLabel: 'Vent et Previsions',
  seabedTypeLabel: 'Nature du Fond',
  presetProtected: 'Crique Calme',
  presetOpen: 'Cote Ouverte',
  presetStorm: 'Avis de Coup de Vent',
  seabedTag: 'Facteur de Tenue du Fond',
  catenaryTag: 'Amortissement Catenoide',
  unitM: 'm',
  unitFt: 'ft',
  unitMeters: 'Metrique (m)',
  unitFeet: 'Imperial (ft)',
  allChainOption: 'Tout Chaine (Lourd Catenoide)',
  ropeChainOption: 'Mixte Cablot et Chaine',
  allRopeOption: 'Tout Cablot Textile',
  calmWindOption: 'Calme / Jolie Brise (< 15 nds)',
  moderateWindOption: 'Bonne Brise (15 - 25 nds)',
  strongWindOption: 'Vent Frais / Coup de Vent (25 - 35 nds)',
  stormWindOption: 'Fort Coup de Vent (> 35 nds)',
  sandOption: 'Sable (Tenue Optimale)',
  mudOption: 'Vase / Limon (Bonne Tenue)',
  clayOption: 'Argile Compacte (Excellente)',
  gravelOption: 'Gravier / Galets (Moyenne)',
  rockOption: 'Roche (Risque de Blocage)',
  weedOption: 'Herbiers / Algues (Faible)',
  resultsTitle: 'Analyse du Mouillage et Dimensions',
  scopeRatioLabel: 'Ratio de Touage Effectif',
  totalDepthLabel: 'Hauteur Verticale Totale',
  recommendedRodeLabel: 'Ligne Recommandee a Filer',
  horizontalDistanceLabel: 'Portee Horizontale',
  swingRadiusLabel: 'Rayon d Evitage Estime',
  minSafeRodeLabel: 'Minimum par Temps Calme',
  heavyWeatherRodeLabel: 'Ligne pour Gros Temps',
  statusOptimalTitle: 'Mouillage Sur et Stable',
  statusOptimalDesc: 'La longueur assure une courbure amortissante et une traction horizontale sur la verge de l ancre.',
  statusCautionTitle: 'Mouillage Correct: Surveiller la Meteo',
  statusCautionDesc: 'Ratio satisfaisant par brise moderee, mais filez plus de chaine si le vent ou le clapot forcit.',
  statusDangerTitle: 'Longueur Insuffisante: Risque de Derapage',
  statusDangerDesc: 'Le ratio est critique. L ancre subit une traction vers le haut et risque de decrocher du fond.',
  adviceSand: 'Le sable offre une excellente tenue. Faites culer le bateau au moteur pour enfouir les pattes.',
  adviceMud: 'La vase molle exige une ancre a large pelle et plus de longueur pour trouver un substrat ferme.',
  adviceClay: 'L argile compacte tient fermement mais necessite des pointes d ancre acerees pour penetrer.',
  adviceGravel: 'Les graviers roulent sous la houle. Augmentez la longueur d au moins 25 pour cent.',
  adviceRock: 'Risque de coincer l ancre. Prevoyez un orin avec bouee pour le deblocage.',
  adviceWeed: 'Les herbiers empechent la penetration de l ancre. Verifiez la tenue au moteur avant la nuit.',
  catenaryAllChain: 'Le poids de la chaine forme une catenaire qui amortit la houle et garde le tirage a plat.',
  catenaryRopeChain: 'Une ligne mixte requiert au minimum un ratio de 7 pour 1.',
  catenaryAllRope: 'Le cablot necessite 8 pour 1 afin d eviter de soulever la verge sous tension.',
  resetButton: 'Reinitialiser',
  visualProfileTitle: 'Profil et Courbe Catenoide',
  waterlineLabel: 'Flottaison',
  seabedLabel: 'Fond Marin',
  anchorLabel: 'Ancre',
  catenaryCurveLabel: 'Courbe de Chaine',
  swingCircleLabel: 'Cercle d Evitage',
};

const faq: AnchorScopeLocaleContent['faq'] = [
  {
    question: 'Qu est-ce que le ratio de touage scope au mouillage?',
    answer: 'C est le rapport entre la longueur totale de ligne payee a l eau et la hauteur verticale totale entre le fond marin et le davier de proue. Il garantit une traction a plat.',
  },
  {
    question: 'Pourquoi faut-il additionner le franc-bord et la maree?',
    answer: 'Le sondeur ne mesure que l eau sous la quille. Le franc-bord avant et le marnage nocturne augmentent considerablement la hauteur reelle, causant des derapages.',
  },
  {
    question: 'Quelle est la difference de ratio entre la chaine et le cablot?',
    answer: 'La chaine lourde cree un catenoide et permet des ratios de 4:1 a 5:1. Le cablot textile etant leger exige 7:1 a 10:1 pour ne pas soulever l ancre.',
  },
  {
    question: 'Comment calcule-t-on le rayon d evitage dans une crique?',
    answer: 'On calcule la distance horizontale du mouillage au theoreme de Pythagore, puis on ajoute la longueur du bateau et une marge de 3 a 5 metres.',
  },
  {
    question: 'Quel est l effet du fond sur la tenue de l ancre?',
    answer: 'Le sable et l argile garantissent la meilleure accroche. La vase et les algues exigent de filer plus long ou de changer de crique.',
  },
  {
    question: 'A quoi sert une patte d oie ou main de fer amortisseuse?',
    answer: 'Elle soulage le guindeau electrique des chocs de la houle et supprime les bruits metalliques transmis a la coque pendant la nuit.',
  },
];

const howTo: AnchorScopeLocaleContent['howTo'] = [
  {
    name: 'Mesurer la profondeur et la hauteur du davier',
    text: 'Notez la profondeur sur la carte et ajoutez la hauteur de votre davier d etrave au-dessus de l eau.',
  },
  {
    name: 'Integrer le marnage de maree',
    text: 'Consultez l annuaire des marees pour ajouter la hausse maximale prevue pendant votre mouillage.',
  },
  {
    name: 'Choisir la ligne et la force du vent',
    text: 'Indiquez si vous utilisez du tout chaine ou mixte et ajustez selon le vent prevu.',
  },
  {
    name: 'Filer la longueur et tester la tenue au moteur',
    text: 'Filez le nombre de metres calcule, puis enclenchez la marche arriere pour enfouir l ancre.',
  },
];

const seo: AnchorScopeLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Calcul de Mouillage Sur: Longueur de Chaine et Evitage',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Reussir son mouillage est indispensable pour la securite en mer. Un ratio de filage insuffisant provoque le derapage de l ancre et des collisions au mouillage. Calculer le bon <strong>ratio de touage</strong> permet de dormir sur ses deux oreilles.',
  },
  {
    type: 'title',
    text: 'Calcul de la Hauteur Verticale Reelle',
    level: 3,
  },
  {
    type: 'list',
    items: [
      '<strong>Sonde au Fondeur:</strong> Hauteur d eau lue au sondeur plus le tirant d eau.',
      '<strong>Franc-Bord d Etrave:</strong> Hauteur du davier au-dessus de la ligne de flottaison.',
      '<strong>Marnage de Maree:</strong> Elevation maximale du niveau de la mer a marée haute.',
    ],
  },
  {
    type: 'title',
    text: 'Tableau des Ratios de Mouillage',
    level: 3,
  },
  {
    type: 'table',
    headers: ['Greement de Ligne', 'Temps Calme (<15 nds)', 'Brise Etablie (15-25 nds)', 'Coup de Vent (>30 nds)'],
    rows: [
      ['<strong>Tout Chaine</strong>', 'Ratio 4:1', 'Ratio 5:1', 'Ratio 7:1'],
      ['<strong>Mixte Cablot-Chaine</strong>', 'Ratio 5:1', 'Ratio 7:1', 'Ratio 8:1 a 10:1'],
      ['<strong>Tout Cablot Textile</strong>', 'Ratio 7:1', 'Ratio 8:1', 'Ratio 10:1 a 12:1'],
    ],
  },
  {
    type: 'tip',
    title: 'Proteger votre guindeau',
    html: 'Ne laissez jamais travailler la chaine en direct sur le barbotin. Utilisez toujours une main de fer textile frappee sur un taquet avant.',
  },
  {
    type: 'paragraph',
    html: "Vérifiez la météo et l'état réel de la mer avant le départ.",
  },
  {
    type: 'paragraph',
    html: 'Contrôlez la marge de profondeur et gardez une réserve de sécurité.',
  },
  {
    type: 'paragraph',
    html: 'Notez les valeurs utilisées pour pouvoir refaire le calcul plus tard.',
  },
  {
    type: 'paragraph',
    html: 'Comparez plusieurs scénarios lorsque le vent ou le courant change.',
  },
  {
    type: 'paragraph',
    html: 'Le calcul aide à préparer la route, mais ne remplace pas la veille à bord.',
  },
];

const schemas: AnchorScopeLocaleContent['schemas'] = [
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
    name: `Guide: ${title}`,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
  } as WithContext<HowTo>,
];

export const content: AnchorScopeLocaleContent = {
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
