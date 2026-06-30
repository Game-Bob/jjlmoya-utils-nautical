import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { NauticalConverterUI, NauticalConverterLocaleContent } from '../index';

const slug = 'convertisseur-unites-nautiques';
const title = "Convertisseur d'Unités Nautiques";
const description =
  'Convertissez les milles nautiques, nœuds, brasses et pression atmosphérique. Inclut une échelle de Beaufort interactive pour la vitesse du vent.';

const ui: NauticalConverterUI = {
  distanceCategoryLabel: 'Distance',
  speedCategoryLabel: 'Vitesse',
  depthCategoryLabel: 'Profondeur',
  pressureCategoryLabel: 'Pression',
  nmLabel: 'Mille nautique (nm)',
  kmLabel: 'Kilomètre (km)',
  miLabel: 'Mille terrestre (mi)',
  cableLabel: 'Encablure',
  knLabel: 'Nœud (kn)',
  kmhLabel: 'km/h',
  msLabel: 'm/s',
  mphLabel: 'mph',
  brozaLabel: 'Brasse',
  mLabel: 'Mètre (m)',
  ftLabel: 'Pied (ft)',
  mbarLabel: 'Millibar (mbar)',
  mmhgLabel: 'mmHg',
  inhgLabel: 'inHg',
  atmLabel: 'Atmosphère (atm)',
  windSeaLabel: 'État de la mer',
  forceLabel: 'Force',
  effectLabel: 'Effet',
  copyLabel: 'Copier la valeur',
};

const faq: NauticalConverterLocaleContent['faq'] = [
  {
    question: 'Combien de kilomètres y a-t-il dans un mille nautique?',
    answer: "Un mille nautique équivaut exactement à 1,852 kilomètres, soit 1852 mètres. Cette mesure correspond à une minute d'arc de latitude à la surface de la Terre.",
  },
  {
    question: 'Quelle est la différence entre un nœud et un kilomètre par heure?',
    answer: 'Un nœud équivaut à 1,852 km/h, car un nœud correspond à un mille nautique par heure. Pour convertir des nœuds en km/h, il suffit de multiplier par 1,852.',
  },
  {
    question: 'Pourquoi utilise-t-on les milles nautiques plutôt que les kilomètres en mer?',
    answer: "Parce que le mille nautique correspond à une minute d'arc de latitude, ce qui simplifie énormément les calculs de navigation à la carte et au compas. Un changement d'une minute de latitude équivaut exactement à un mille nautique.",
  },
  {
    question: "Qu'est-ce que l'échelle de Beaufort?",
    answer: "C'est une échelle empirique qui met en relation la vitesse du vent avec les effets observables sur la mer. Elle va de 0 (calme) à 12 (ouragan) et est essentielle pour la navigation côtière et océanique.",
  },
  {
    question: "Quelle unité de pression est utilisée en météo maritime?",
    answer: "La météo maritime utilise principalement le millibar (mbar) ou son équivalent hectopascal (hPa). La pression atmosphérique normale au niveau de la mer est de 1013,25 mbar.",
  },
  {
    question: 'Combien de pieds y a-t-il dans une brasse?',
    answer: 'Une brasse équivaut exactement à 6 pieds, soit 1,8288 mètres. Elle est principalement utilisée dans les pays anglophones pour exprimer les profondeurs sur les anciennes cartes nautiques.',
  },
];

const howTo: NauticalConverterLocaleContent['howTo'] = [
  {
    name: 'Sélectionner la catégorie de conversion',
    text: "Cliquez sur l'un des quatre onglets: Distance, Vitesse, Profondeur ou Pression selon la grandeur que vous souhaitez convertir.",
  },
  {
    name: 'Saisir la valeur dans n\'importe quel champ',
    text: "Tapez le nombre dans l'unité que vous connaissez. Toutes les autres unités se mettent à jour automatiquement en temps réel.",
  },
  {
    name: 'Consulter l\'échelle de Beaufort (vitesse)',
    text: "Lorsque vous saisissez une vitesse dans l'onglet Vitesse, une carte apparaît indiquant la force de Beaufort correspondante et l'état de la mer prévu.",
  },
  {
    name: 'Copier le résultat',
    text: "Utilisez le bouton de copie à côté de n'importe quel champ pour copier la valeur dans le presse-papiers.",
  },
];

const seo: NauticalConverterLocaleContent['seo'] = [
  {
    type: 'title',
    text: "L'importance de la précision dans les unités nautiques",
    level: 2,
  },
  {
    type: 'paragraph',
    html: "Naviguer en mer nécessite un langage propre, un système de mesures affiné au cours de siècles d'exploration maritime. Les unités nautiques ne sont pas un caprice historique, mais des outils mathématiquement cohérents avec la géométrie de la Terre et les besoins pratiques du navigateur.",
  },
  {
    type: 'paragraph',
    html: "Contrairement à ce qui se passe sur terre, où une erreur de quelques mètres a rarement des conséquences graves, en mer une mauvaise conversion peut signifier la différence entre mouiller en eaux sûres ou s'échouer sur un haut-fond. La précision dans les unités n'est pas une question académique: c'est de la navigation.",
  },
  {
    type: 'paragraph',
    html: "Lorsque nous nous éloignons de la côte, l'absence de références visuelles fait de la position calculée la seule réalité sur laquelle nous pouvons agir. Savoir convertir avec exactitude entre milles nautiques, kilomètres, nœuds et mètres n'est pas facultatif pour le navigateur responsable.",
  },
  {
    type: 'title',
    text: 'Pourquoi utilise-t-on les milles nautiques plutôt que les kilomètres?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: "La réponse réside dans la forme même de la Terre. Un <strong>mille nautique</strong> équivaut exactement à une minute d'arc de latitude à la surface terrestre, soit 1852 mètres. Cette correspondance directe entre mesure angulaire et distance linéaire est la clé de son usage universel en navigation.",
  },
  {
    type: 'paragraph',
    html: "En utilisant cette unité, un changement d'une minute de latitude sur une carte nautique correspond toujours exactement à un mille nautique parcouru. Cela simplifie énormément les calculs de position, vitesse et temps d'arrivée sans avoir besoin de facteurs de conversion supplémentaires.",
  },
  {
    type: 'title',
    text: 'La vitesse en mer: Le nœud',
    level: 3,
  },
  {
    type: 'paragraph',
    html: "Le <strong>nœud</strong> est l'unité de vitesse équivalente à un mille nautique par heure. Son nom vient de l'ancienne technique de mesure de la vitesse consistant à jeter une planchette de bois attachée a une corde avec des nœuds régulièrement espacés et à compter combien de nœuds passaient entre les doigts en un temps fixe.",
  },
  {
    type: 'paragraph',
    html: "Aujourd'hui, bien que nous utilisions des satellites GPS et des systèmes électroniques sophistiqués, le nœud reste l'unité standard dans l'aviation internationale et la navigation maritime. Un nœud équivaut à 1,852 km/h ou 0,514 m/s.",
  },
  {
    type: 'title',
    text: 'Profondeur et mouillage: Brasses, Mètres et Pieds',
    level: 3,
  },
  {
    type: 'paragraph',
    html: "Dans le monde nautique, la profondeur n'est pas une simple statistique: c'est la différence entre un mouillage sûr et un échouage. Historiquement, la <strong>brasse</strong> (fathom en anglais, 1,8288 mètres ou exactement 6 pieds) était l'unité prédominante pour mesurer les profondeurs dans le monde anglophone.",
  },
  {
    type: 'paragraph',
    html: "Cependant, la mondialisation et la technologie ont introduit l'usage constant des mètres sur la plupart des cartes et sondeurs modernes. Le navigateur actuel doit savoir se déplacer aisément entre brasses, mètres et pieds, surtout lorsqu'il consulte d'anciennes cartes nautiques ou des instruments calibrés en unités impériales.",
  },
  {
    type: 'title',
    text: 'Météorologie et Pression Atmosphérique',
    level: 3,
  },
  {
    type: 'paragraph',
    html: "Pour un skipper, le baromètre est l'oracle de la météo. La pression atmosphérique, mesurée en <strong>millibars</strong> (mbar), est l'indicateur le plus fiable des changements météorologiques imminents. Une chute rapide de pression annonce l'arrivée de vents forts et de mauvais temps.",
  },
  {
    type: 'paragraph',
    html: "Comprendre les variations de pression est vital pour tout navigateur. La pression atmosphérique normale au niveau de la mer est de 1013,25 mbar (une atmosphère). Des valeurs supérieures indiquent un temps stable, tandis que des valeurs inférieures, surtout si elles chutent rapidement, signalent l'approche de systèmes de basse pression potentiellement dangereux.",
  },
  {
    type: 'title',
    text: 'Échelles de Vent et de Mer: De Beaufort à Douglas',
    level: 3,
  },
  {
    type: 'paragraph',
    html: "La vitesse du vent en nœuds est un nombre qui prend vie réelle lorsqu'il est associé à l'<strong>échelle de Beaufort</strong>. Développée par l'amiral britannique Francis Beaufort en 1805, cette échelle empirique met en relation la vitesse du vent avec les effets observables à la surface de la mer et sur terre.",
  },
  {
    type: 'list',
    items: [
      '<strong>Force 0-3 (0-10 kn):</strong> Conditions de navigation tranquilles, idéales pour apprendre ou les sorties familiales.',
      '<strong>Force 4-5 (11-21 kn):</strong> Vent idéal pour les voiliers, avec vagues modérées et moutons visibles.',
      '<strong>Force 6-7 (22-33 kn):</strong> Conditions de vent frais à grand frais. Expérience et prise de ris recommandées.',
      '<strong>Force 8+ (plus de 34 kn):</strong> Coup de vent. Réservé aux navigateurs expérimentés sur embarcations adaptées.',
    ],
  },
  {
    type: 'paragraph',
    html: "De même, l'échelle de Douglas classe l'état de la mer de 0 (calme plat) à 9 (phénoménal), permettant au navigateur d'anticiper les conditions qu'il trouvera au-delà de l'horizon en se basant sur les bulletins météorologiques.",
  },
  {
    type: 'tip',
    title: 'Conseil de Sécurité',
    html: "Lorsque vous utilisez ce convertisseur pour planifier une sortie, gardez toujours à l'esprit que les conditions réelles peuvent différer des prévisions. Consultez la météo officielle et ne sous-estimez jamais la capacité de la mer à changer rapidement.",
  },
  {
    type: 'title',
    text: 'Planification hors ligne et mobilité',
    level: 3,
  },
  {
    type: 'paragraph',
    html: "Cet outil est conçu pour fonctionner sans connexion internet une fois chargé dans le navigateur, ce qui le rend idéal pour une utilisation à bord où la connectivité peut être limitée. Toutes les conversions sont calculées localement sur l'appareil, sans envoyer de données à aucun serveur.",
  },
];

const schemas: NauticalConverterLocaleContent['schemas'] = [
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

export const content: NauticalConverterLocaleContent = {
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
