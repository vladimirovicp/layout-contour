import type { Article } from './types';

interface HomeContent {
  title: string;
  description: string;
  notice: string;
  featuredArticleSlugs: Article['slug'][];
}

export const home: HomeContent = {
  title: 'Научный журнал «Контур»',
  description: 'Тексты об открытой науке, описании материалов и читательских маршрутах. Познакомьтесь с текущим выпуском и подборкой статей из архива.',
  notice: 'Вымышленный учебный журнал. Авторы и содержание придуманы для макета; материалы не являются научными доказательствами.',
  // Ручная подборка из общего набора, а не оглавление текущего выпуска.
  featuredArticleSlugs: [
    'open-science-review',
    'long-material-description',
    'abstract-as-reading-map',
    'minimal-metadata-example',
  ],
};
