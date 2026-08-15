import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AnchorScopeLocaleContent } from '../entry';
import type { AnchorScopeUI } from '../ui';

const slug = 'kalkulyator-dliny-yakornoy-cepi';
const title = 'Калькулятор Якорной Цепи и Радиуса Циркуляции';
const description =
  'Рассчитайте оптимальную длину якорной цепи, коэффициент травления и безопасный радиус циркуляции для надежной стоянки на якоре.';

const ui: AnchorScopeUI = {
  parametersTitle: 'Параметры',
  waterDepthLabel: 'Глубина по Карте',
  bowHeightLabel: 'Высота Носа над Водой',
  tideRangeLabel: 'Высота Прилива',
  boatLengthLabel: 'Длина Судна (LOA)',
  rodeTypeLabel: 'Якорная Линия',
  windConditionLabel: 'Сила Ветра и Прогноз',
  seabedTypeLabel: 'Тип Грунта',
  presetProtected: 'Тихая Бухта',
  presetOpen: 'Открытый Берег',
  presetStorm: 'Штормовое Предупреждение',
  seabedTag: 'Коэффициент Держания Грунта',
  catenaryTag: 'Демпфер Цепной Линии',
  unitM: 'м',
  unitFt: 'фт',
  unitMeters: 'Метрическая (м)',
  unitFeet: 'Имперская (фт)',
  allChainOption: 'Только Цепь (Тяжелая Катенария)',
  ropeChainOption: 'Комбинированный Канат и Цепь',
  allRopeOption: 'Только Синтетический Канат',
  calmWindOption: 'Штиль / Слабый Ветер (< 15 уз)',
  moderateWindOption: 'Умеренный Ветер (15 - 25 уз)',
  strongWindOption: 'Сильный Ветер / Шторм (25 - 35 уз)',
  stormWindOption: 'Жестокий Шторм (> 35 уз)',
  sandOption: 'Песок (Оптимальное Держание)',
  mudOption: 'Ил / Мягкая Грязь (Хорошее Держание)',
  clayOption: 'Плотная Глина (Отличное)',
  gravelOption: 'Гравий / Галька (Среднее)',
  rockOption: 'Скалы (Риск Зацепа)',
  weedOption: 'Водоросли / Трава (Слабое)',
  resultsTitle: 'Анализ Стоянки и Размеры',
  scopeRatioLabel: 'Коэффициент Травления (Scope)',
  totalDepthLabel: 'Общая Вертикальная Высота',
  recommendedRodeLabel: 'Рекомендуемая Длина Цепи',
  horizontalDistanceLabel: 'Горизонтальная Дистанция',
  swingRadiusLabel: 'Расчетный Радиус Циркуляции',
  minSafeRodeLabel: 'Минимум в Штиль',
  heavyWeatherRodeLabel: 'Длина для Шторма',
  statusOptimalTitle: 'Безопасная и Прочная Стоянка',
  statusOptimalDesc: 'Рассчитанная длина гарантирует демпфирующую кривую и горизонтальную тягу за веретено якоря.',
  statusCautionTitle: 'Приемлемо: Следите за Ветром',
  statusCautionDesc: 'Соотношение подходит для умеренного ветра. Стравите больше цепи при усилении волнения.',
  statusDangerTitle: 'Недостаточно Цепи: Риск Дрейфа',
  statusDangerDesc: 'Критическое соотношение. Якорь получит вертикальную тягу вверх и может ползти по дну.',
  adviceSand: 'Песок обеспечивает надежное зарывание лап. Дайте задний ход для затягивания якоря.',
  adviceMud: 'Мягкий ил требует широких лап и большей длины цепи для выхода на твердый пласт.',
  adviceClay: 'Глина держит отлично, но требует острого носка якоря для проникновения.',
  adviceGravel: 'Рассыпчатый гравий смещается под нагрузкой. Увеличьте цепь минимум на 25 процентов.',
  adviceRock: 'Высокий риск заклинивания. Всегда используйте буйреп с буйком для подъема.',
  adviceWeed: 'Густые водоросли мешают лапам войти в грунт. Тщательно проверьте держание мотором.',
  catenaryAllChain: 'Вес цепи создает провис, амортизирующий удары волн и удерживающий тягу вдоль дна.',
  catenaryRopeChain: 'Комбинированная линия требует соотношения не менее 7 к 1 для компенсации веса.',
  catenaryAllRope: 'Легкий канат требует 8 к 1 или 10 к 1, чтобы не поднимать веретено якоря.',
  resetButton: 'Сбросить Значения',
  visualProfileTitle: 'Профиль Провеса Цепи',
  waterlineLabel: 'Ватерлиния',
  seabedLabel: 'Морское Дно',
  anchorLabel: 'Якорь',
  catenaryCurveLabel: 'Кривая Цепи',
  swingCircleLabel: 'Круг Циркуляции',
};

const faq: AnchorScopeLocaleContent['faq'] = [
  {
    question: 'Что такое коэффициент травления scope при якорной стоянке?',
    answer: 'Это соотношение между общей длиной вытравленной цепи или каната и вертикальной высотой от морского дна до носового клюза.',
  },
  {
    question: 'Зачем прибавлять высоту носа и прилив к глубине по карте?',
    answer: 'Эхолот показывает только глубину под килем. Высота носового роульса и ночной прилив существенно увеличивают вертикальную дистанцию.',
  },
  {
    question: 'В чем разница соотношения для цепи и каната?',
    answer: 'Тяжелая стальная цепь дает провес и допускает 4:1 или 5:1. Легкий канат натягивается в струну и требует от 7:1 до 10:1.',
  },
  {
    question: 'Как рассчитывается радиус циркуляции судна на якоре?',
    answer: 'По теореме Пифагора определяется горизонтальная длина, к которой прибавляют общую длину судна и запас в 3-5 метров.',
  },
  {
    question: 'Как тип морского дна влияет на надежность стоянки?',
    answer: 'Песок и глина обеспечивают наивысшую держащую силу. Ил и водоросли требуют увеличения цепи и проверки мотором.',
  },
  {
    question: 'Для чего нужен демпферный канат snubber на якорной цепи?',
    answer: 'Он снимает ударную нагрузку с брашпиля и электрической лебедки, устраняя металлический скрежет в каюте.',
  },
];

const howTo: AnchorScopeLocaleContent['howTo'] = [
  {
    name: 'Измерить глубину и высоту носа',
    text: 'Определите глубину по карте или эхолоту и прибавьте высоту носового ролика над водой.',
  },
  {
    name: 'Учесть высоту прилива',
    text: 'Проверьте приливные таблицы для учета максимального подъема воды за время стоянки.',
  },
  {
    name: 'Выбрать тип оснастки и силу ветра',
    text: 'Укажите используется ли только цепь или канат и настройте коэффициент безопасности по ветру.',
  },
  {
    name: 'Стравить цепь и закрепить якорь мотором',
    text: 'Стравите нужную длину и дайте реверс мотором для плотного зарывания якоря в дно.',
  },
];

const seo: AnchorScopeLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Расчет Длины Якорной Цепи и Безопасной Стоянки',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Грамотная постановка на якорь гарантирует безопасность экипажа и яхты. Недостаточная длина стравленной цепи является главной причиной ползания якоря и столкновений в бухтах. Точный расчет <strong>коэффициента травления</strong> обеспечивает надежную фиксацию.',
  },
  {
    type: 'title',
    text: 'Компоненты Полной Вертикальной Высоты',
    level: 3,
  },
  {
    type: 'list',
    items: [
      '<strong>Глубина в Точке Стоянки:</strong> Показание эхолота плюс осадка судна.',
      '<strong>Высота Носового Клюза:</strong> Расстояние от поверхности воды до направляющего ролика.',
      '<strong>Максимальный Прилив:</strong> Ожидаемый подъем уровня моря в полную воду.',
    ],
  },
  {
    type: 'title',
    text: 'Таблица Рекомендуемых Пропорций Травления',
    level: 3,
  },
  {
    type: 'table',
    headers: ['Тип Оснастки', 'Тихая Погода (<15 уз)', 'Умеренный Ветер (15-25 уз)', 'Шторм (>30 уз)'],
    rows: [
      ['<strong>Только Цепь</strong>', 'Пропорция 4:1', 'Пропорция 5:1', 'Пропорция 7:1'],
      ['<strong>Канат с Цепным Отрезком</strong>', 'Пропорция 5:1', 'Пропорция 7:1', 'Пропорция 8:1 до 10:1'],
      ['<strong>Только Синтетический Канат</strong>', 'Пропорция 7:1', 'Пропорция 8:1', 'Пропорция 10:1 до 12:1'],
    ],
  },
  {
    type: 'tip',
    title: 'Защита Якорной Лебедки',
    html: 'Никогда не оставляйте натяжение цепи на звездочке лебедки. Всегда закрепляйте эластичный snubber на носовую утку.',
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
    name: `Инструкция: ${title}`,
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
