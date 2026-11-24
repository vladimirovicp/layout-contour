/** Локальный файл из public/images; размеры — исходные размеры изображения. */
export interface LocalImage {
  src: `/images/${string}`;
  width: number;
  height: number;
  alt: string;
}

export interface Author {
  id: string;
  name: string;
  /** Подпись для явной маркировки вымышленного автора. */
  notice: string;
  affiliation?: string;
}

export interface Issue {
  slug: string;
  year: number;
  number: number;
  title: string;
  publishedAt: string;
  description: string;
  cover?: LocalImage;
  /** Порядок статей в оглавлении. */
  articleSlugs: string[];
}

export interface ArticleTable {
  caption: string;
  columns: string[];
  rows: string[][];
}

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  table?: ArticleTable;
}

export interface Article {
  slug: string;
  issueSlug: string;
  title: string;
  authorIds: string[];
  category: string;
  publishedAt: string;
  abstract: string;
  keywords: string[];
  sections: ArticleSection[];
  references?: string[];
  image?: { src: string; alt: string };
  pdfPath?: string;
}
