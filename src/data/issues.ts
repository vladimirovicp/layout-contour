import type { Issue } from './types';

// Вымышленные выпуски. Даты — часть учебных данных, а не история публикаций.
export const issues: Issue[] = [
  {
    slug: '2026-01',
    year: 2026,
    number: 1,
    title: 'Открытость и описание материалов',
    publishedAt: '2026-03-16',
    description:
      'Вымышленный учебный выпуск о представлении текстов, описании материалов и навигации по научному журналу. Не содержит результатов исследований.',
    articleSlugs: [
      'open-science-review',
      'long-material-description',
      'data-documentation-matrix',
      'reading-without-images',
    ],
  },
  {
    slug: '2025-02',
    year: 2025,
    number: 2,
    title: 'Текст и читательский маршрут',
    publishedAt: '2025-10-20',
    description:
      'Вымышленный учебный выпуск о структуре аннотаций, ключевых словах и переходах между страницами. Материалы предназначены для проверки интерфейса.',
    articleSlugs: [
      'abstract-as-reading-map',
      'keywords-in-context',
      'issue-reading-order',
      'editorial-comment-example',
    ],
  },
  {
    slug: '2025-01',
    year: 2025,
    number: 1,
    title: 'Материал и его структура',
    publishedAt: '2025-04-14',
    description:
      'Вымышленный учебный выпуск о заголовках, совместном авторстве, версиях текста и неполных метаданных. Не представляет научных доказательств.',
    articleSlugs: [
      'headings-and-sections',
      'coauthor-display-example',
      'text-version-note',
      'minimal-metadata-example',
    ],
  },
];
