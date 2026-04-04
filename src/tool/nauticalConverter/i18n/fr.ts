import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { NauticalConverterUI, NauticalConverterLocaleContent } from '../index';

const slug = 'convertisseur-unites-nautiques';
const title = 'Convertisseur d\'Unites Nautiques';
const description =
  'Convertissez les milles nautiques, noeuds, brasses et pression atmospherique. Inclut une echelle de Beaufort interactive pour la vitesse du vent.';

const ui: NauticalConverterUI = {
  distanceCategoryLabel: 'Distance',
  speedCategoryLabel: 'Vitesse',
  depthCategoryLabel: 'Profondeur',
  pressureCategoryLabel: 'Pression',
  nmLabel: 'Mille nautique (nm)',
  kmLabel: 'Kilometre (km)',
  miLabel: 'Mille terrestre (mi)',
  cableLabel: 'Encablure',
  knLabel: 'Noeud (kn)',
  kmhLabel: 'km/h',
  msLabel: 'm/s',
  mphLabel: 'mph',
  brozaLabel: 'Brasse',
  mLabel: 'Metre (m)',
  ftLabel: 'Pied (ft)',
  mbarLabel: 'Millibar (mbar)',
  mmhgLabel: 'mmHg',
  inhgLabel: 'inHg',
  atmLabel: 'Atmosphere (atm)',
  windSeaLabel: 'Etat de la mer',
  forceLabel: 'Force',
  effectLabel: 'Effet',
  copyLabel: 'Copier la valeur',
  faqTitle: 'Questions Frequentes',
  bibliographyTitle: 'Bibliographie',
};

const faq: NauticalConverterLocaleContent['faq'] = [
  {
    question: 'Combien de kilometres y a-t-il dans un mille nautique?',
    answer: 'Un mille nautique equivaut exactement a 1,852 kilometres, soit 1852 metres. Cette mesure correspond a une minute d\'arc de latitude a la surface de la Terre.',
  },
  {
    question: 'Quelle est la difference entre un noeud et un kilometre par heure?',
    answer: 'Un noeud equivaut a 1,852 km/h, car un noeud correspond a un mille nautique par heure. Pour convertir des noeuds en km/h, il suffit de multiplier par 1,852.',
  },
  {
    question: 'Pourquoi utilise-t-on les milles nautiques plutot que les kilometres en mer?',
    answer: 'Parce que le mille nautique correspond a une minute d\'arc de latitude, ce qui simplifie enormement les calculs de navigation a la carte et au compas. Un changement d\'une minute de latitude equivaut exactement a un mille nautique.',
  },
  {
    question: 'Qu\'est-ce que l\'echelle de Beaufort?',
    answer: 'C\'est une echelle empirique qui met en relation la vitesse du vent avec les effets observables sur la mer. Elle va de 0 (calme) a 12 (ouragan) et est essentielle pour la navigation cotiere et oceanique.',
  },
  {
    question: 'Quelle unite de pression est utilisee en meteorologie maritime?',
    answer: 'La meteorologie maritime utilise principalement le millibar (mbar) ou son equivalent hectopascal (hPa). La pression atmospherique normale au niveau de la mer est de 1013,25 mbar.',
  },
  {
    question: 'Combien de pieds y a-t-il dans une brasse?',
    answer: 'Une brasse equivaut exactement a 6 pieds, soit 1,8288 metres. Elle est principalement utilisee dans les pays anglophones pour exprimer les profondeurs sur les anciennes cartes nautiques.',
  },
];

const howTo: NauticalConverterLocaleContent['howTo'] = [
  {
    name: 'Selectionner la categorie de conversion',
    text: 'Cliquez sur l\'un des quatre onglets : Distance, Vitesse, Profondeur ou Pression selon la grandeur que vous souhaitez convertir.',
  },
  {
    name: 'Saisir la valeur dans n\'importe quel champ',
    text: 'Tapez le nombre dans l\'unite que vous connaissez. Toutes les autres unites se mettent a jour automatiquement en temps reel.',
  },
  {
    name: 'Consulter l\'echelle de Beaufort (vitesse)',
    text: 'Lorsque vous saisissez une vitesse dans l\'onglet Vitesse, une carte apparait indiquant la force de Beaufort correspondante et l\'etat de la mer prevu.',
  },
  {
    name: 'Copier le resultat',
    text: 'Utilisez le bouton de copie a cote de n\'importe quel champ pour copier la valeur dans le presse-papiers.',
  },
];

const bibliography: NauticalConverterLocaleContent['bibliography'] = [
  {
    name: 'Instituto Hidrografico de la Marina',
    url: 'https://armada.defensa.gob.es/ihm/',
  },
  {
    name: 'NOAA - National Weather Service',
    url: 'https://www.weather.gov/mfl/beaufort',
  },
];

const seo: NauticalConverterLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'L\'importance de la precision dans les unites nautiques',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Naviguer en mer necessite un langage propre, un systeme de mesures affine au cours de siecles d\'exploration maritime. Les unites nautiques ne sont pas un caprice historique, mais des outils mathematiquement coherents avec la geometrie de la Terre et les besoins pratiques du navigateur.',
  },
  {
    type: 'paragraph',
    html: 'Contrairement a ce qui se passe sur terre, ou une erreur de quelques metres a rarement des consequences graves, en mer une mauvaise conversion peut signifier la difference entre mouiller en eaux sures ou s\'echouer sur un haut-fond. La precision dans les unites n\'est pas une question academique : c\'est de la navigation.',
  },
  {
    type: 'paragraph',
    html: 'Lorsque nous nous eloignons de la cote, l\'absence de references visuelles fait de la position calculee la seule realite sur laquelle nous pouvons agir. Savoir convertir avec exactitude entre milles nautiques, kilometres, noeuds et metres n\'est pas facultatif pour le navigateur responsable.',
  },
  {
    type: 'title',
    text: 'Pourquoi utilise-t-on les milles nautiques plutot que les kilometres?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La reponse reside dans la forme meme de la Terre. Un <strong>mille nautique</strong> equivaut exactement a une minute d\'arc de latitude a la surface terrestre, soit 1852 metres. Cette correspondance directe entre mesure angulaire et distance lineaire est la cle de son usage universel en navigation.',
  },
  {
    type: 'paragraph',
    html: 'En utilisant cette unite, un changement d\'une minute de latitude sur une carte nautique correspond toujours exactement a un mille nautique parcouru. Cela simplifie enormement les calculs de position, vitesse et temps d\'arrivee sans avoir besoin de facteurs de conversion supplementaires.',
  },
  {
    type: 'title',
    text: 'La vitesse en mer : Le noeud',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Le <strong>noeud</strong> est l\'unite de vitesse equivalente a un mille nautique par heure. Son nom vient de l\'ancienne technique de mesure de la vitesse consistant a jeter une planchette de bois attachee a une corde avec des noeuds regulierement espaces et a compter combien de noeuds passaient entre les doigts en un temps fixe.',
  },
  {
    type: 'paragraph',
    html: 'Aujourd\'hui, bien que nous utilisions des satellites GPS et des systemes electroniques sophistiques, le noeud reste l\'unite standard dans l\'aviation internationale et la navigation maritime. Un noeud equivaut a 1,852 km/h ou 0,514 m/s.',
  },
  {
    type: 'title',
    text: 'Profondeur et mouillage : Brasses, Metres et Pieds',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Dans le monde nautique, la profondeur n\'est pas une simple statistique : c\'est la difference entre un mouillage sur et un echouage. Historiquement, la <strong>brasse</strong> (fathom en anglais, 1,8288 metres ou exactement 6 pieds) etait l\'unite predominante pour mesurer les profondeurs dans le monde anglophone.',
  },
  {
    type: 'paragraph',
    html: 'Cependant, la mondialisation et la technologie ont introduit l\'usage constant des metres sur la plupart des cartes et sondeurs modernes. Le navigateur actuel doit savoir se deplacer aisement entre brasses, metres et pieds, surtout lorsqu\'il consulte d\'anciennes cartes nautiques ou des instruments calibres en unites imperiales.',
  },
  {
    type: 'title',
    text: 'Meteorologie et Pression Atmospherique',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Pour un skipper, le barometre est l\'oracle de la meteo. La pression atmospherique, mesuree en <strong>millibars</strong> (mbar), est l\'indicateur le plus fiable des changements meteorologiques imminents. Une chute rapide de pression annonce l\'arrivee de vents forts et de mauvais temps.',
  },
  {
    type: 'paragraph',
    html: 'Comprendre les variations de pression est vital pour tout navigateur. La pression atmospherique normale au niveau de la mer est de 1013,25 mbar (une atmosphere). Des valeurs superieures indiquent un temps stable, tandis que des valeurs inferieures, surtout si elles chutent rapidement, signalent l\'approche de systemes de basse pression potentiellement dangereux.',
  },
  {
    type: 'title',
    text: 'Echelles de Vent et de Mer : De Beaufort a Douglas',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La vitesse du vent en noeuds est un nombre qui prend vie reelle lorsqu\'il est associe a l\'<strong>echelle de Beaufort</strong>. Developpee par l\'amiral britannique Francis Beaufort en 1805, cette echelle empirique met en relation la vitesse du vent avec les effets observables a la surface de la mer et sur terre.',
  },
  {
    type: 'list',
    items: [
      '<strong>Force 0-3 (0-10 kn) :</strong> Conditions de navigation tranquilles, ideales pour apprendre ou les sorties familiales.',
      '<strong>Force 4-5 (11-21 kn) :</strong> Vent ideal pour les voiliers, avec vagues moderees et moutons visibles.',
      '<strong>Force 6-7 (22-33 kn) :</strong> Conditions de vent frais a grand frais. Experience et prise de ris recommandees.',
      '<strong>Force 8+ (plus de 34 kn) :</strong> Coup de vent. Reserve aux navigateurs experimentes sur embarcations adaptees.',
    ],
  },
  {
    type: 'paragraph',
    html: 'De meme, l\'echelle de Douglas classe l\'etat de la mer de 0 (calme plat) a 9 (phenomenal), permettant au navigateur d\'anticiper les conditions qu\'il trouvera au-dela de l\'horizon en se basant sur les bulletins meteorologiques.',
  },
  {
    type: 'tip',
    title: 'Conseil de Securite',
    html: 'Lorsque vous utilisez ce convertisseur pour planifier une sortie, gardez toujours a l\'esprit que les conditions reelles peuvent differer des previsions. Consultez la meteo officielle et ne sous-estimez jamais la capacite de la mer a changer rapidement.',
  },
  {
    type: 'title',
    text: 'Planification hors ligne et mobilite',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Cet outil est concu pour fonctionner sans connexion internet une fois charge dans le navigateur, ce qui le rend ideal pour une utilisation a bord ou la connectivite peut etre limitee. Toutes les conversions sont calculees localement sur l\'appareil, sans envoyer de donnees a aucun serveur.',
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
    name: `Comment utiliser : ${title}`,
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
