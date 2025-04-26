export interface Article {
  id: number;
  slug: string;
  title: string;
  category: string;
  content: string;
  imageUrl: string;
  author: string;
  date: Date;
  readTime: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}
