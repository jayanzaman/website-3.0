import { marked } from 'marked';
import { notFound } from 'next/navigation';
import OptimizedImage from '@/components/OptimizedImage';
import { articles } from '@/data/articles';

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((entry) => entry.slug === slug);

  if (!article) {
    notFound();
  }

  const content = marked(article.content);

  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              {article.category}
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {article.title}
          </h1>
          <div className="mt-4 flex items-center justify-center text-gray-500 text-sm">
            <time dateTime={new Date(article.date).toISOString()}>
              {article.date}
            </time>
            <span className="mx-1">·</span>
            <span>{article.readTime}</span>
          </div>
        </div>

        <div className="mt-12">
          <OptimizedImage
            src={article.imageUrl}
            alt={article.title}
            width={1200}
            height={600}
            className="w-full h-64 object-cover rounded-lg"
            priority
          />
        </div>

        <div
          className="mt-12 prose prose-indigo mx-auto"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}
