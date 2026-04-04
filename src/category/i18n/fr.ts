import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'voile-et-nautique',
  title: 'Voile et Nautique',
  description: 'Outils de calcul nautique pour les navigateurs : marées, tirant d\'eau, conversions d\'unités, surface vélique, vitesse et autonomie. Conçus pour les plaisanciers, les étudiants en navigation et les passionnés de voile.',
  seo: [
    {
      type: 'summary',
      title: 'Outils inclus dans cette catégorie',
      items: [
        'Calculateur de hauteur de marée par la Règle des Douzièmes.',
        'Calculateur de fenêtre de passage sous-quille.',
        'Convertisseur d\'unités nautiques (distance, vitesse, profondeur, pression).',
        'Calculateur de surface vélique (triangulaire, quadrilatérale, génois).',
        'Convertisseur de vitesse et échelle de Beaufort.',
        'Calculateur d\'autonomie de carburant pour bateau.',
      ],
    },
    {
      type: 'title',
      text: 'Calculateurs Nautiques pour la Navigation de Plaisance',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La navigation côtière et hauturière exige la maîtrise de calculs qui vont bien au-delà du cap et de la vitesse. De l\'anticipation de la hauteur d\'eau dans un port à l\'équilibre du plan de voilure pour une croisière, chaque décision à bord a une composante mathématique. Ces outils sont conçus pour faciliter ces calculs rapidement, hors ligne et sans tableaux imprimés.',
    },
    {
      type: 'title',
      text: 'Pourquoi les Unités Nautiques Sont Importantes',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le système d\'unités maritime est international et diffère du système métrique habituel. Le <strong>nœud</strong> (1 mille marin par heure) est l\'unité de vitesse universelle en mer. Le <strong>mille marin</strong> équivaut à 1 852 mètres et est basé sur une minute d\'arc de l\'équateur terrestre. Maîtriser les conversions entre nœuds, km/h, m/s et l\'échelle de Beaufort est indispensable pour interpréter les bulletins météo marins et planifier les traversées en sécurité.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { label: 'Outils', value: '6', icon: 'mdi:tools' },
        { label: 'Langues', value: '3', icon: 'mdi:translate' },
        { label: 'Mille marin', value: '1 852 m', icon: 'mdi:map-marker-distance' },
      ],
    },
    {
      type: 'title',
      text: 'Planification des Manœuvres avec Restrictions de Tirant d\'Eau',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le <strong>tirant d\'eau sous-quille</strong> (UKC) est la marge d\'eau libre entre la quille du bateau et le fond. Le calculer correctement avant d\'entrer dans un port à marée ou de franchir une barre est l\'une des décisions de sécurité les plus critiques de la navigation côtière. Avec les outils de marées et d\'UKC de cette catégorie, vous pouvez estimer la fenêtre de passage sûre à partir des données de votre annuaire local.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Nœud', definition: 'Unité de vitesse égale à un mille marin par heure (1,852 km/h).' },
        { term: 'Mille marin', definition: 'Unité de distance maritime égale à 1 852 mètres, basée sur une minute d\'arc de latitude.' },
        { term: 'Beaufort', definition: 'Échelle empirique de 0 à 12 mesurant l\'intensité du vent par son effet sur la mer.' },
        { term: 'UKC (Tirant d\'eau sous-quille)', definition: 'Distance d\'eau libre entre la quille du navire et le fond marin à un instant donné.' },
        { term: 'Plan de voilure', definition: 'Ensemble des voiles d\'un voilier avec leur distribution, leur surface et leurs caractéristiques.' },
        { term: 'Autonomie', definition: 'Distance maximale qu\'un bateau peut parcourir avec le carburant disponible à une vitesse donnée.' },
      ],
    },
  ],
};
