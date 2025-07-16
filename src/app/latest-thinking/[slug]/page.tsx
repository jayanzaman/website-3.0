import { PrismaClient } from '@prisma/client';
import type { Article } from '@/types/prisma';
import { marked } from 'marked';
import { notFound } from 'next/navigation';
import OptimizedImage from '@/components/OptimizedImage';

const prisma = new PrismaClient();

export async function generateStaticParams() {
  const articles = await prisma.article.findMany({
    where: { published: true },
    select: { slug: true },
  });

  return articles.map((article: { slug: string }) => ({
    slug: article.slug,
  }));
}

export default async function Article({ params }: { params: { slug: string } }) {
  const article = await prisma.article.findUnique({
    where: { slug: params.slug },
  }) as Article | null;

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
            <time dateTime={article.date.toISOString()}>
              {new Date(article.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
            <span className="mx-1">·</span>
            <span>{article.readTime} read</span>
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
