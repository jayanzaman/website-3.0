import Link from 'next/link';
import { PrismaClient } from '@prisma/client';
import type { Article } from '@/types/prisma';

const prisma = new PrismaClient();

export default async function LatestThinking() {
  const articles = await prisma.article.findMany({
    where: { published: true },
    orderBy: { date: 'desc' },
  });

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Latest Thinking
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Insights and thoughts on technology, insurance, and innovation.
          </p>
        </div>

        <div className="mt-12 grid gap-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
          {articles.map((article: Article) => (
            <div key={article.id}>
              <div>
                <Link href={`/latest-thinking/${article.slug}`}>
                  <img
                    className="h-48 w-full object-cover rounded-lg"
                    src={article.imageUrl}
                    alt={article.title}
                  />
                </Link>
              </div>
              <div className="mt-4">
                <div className="inline-block">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    {article.category}
                  </span>
                </div>
              </div>
              <Link href={`/latest-thinking/${article.slug}`} className="block mt-4">
                <h3 className="text-xl font-semibold text-gray-900">{article.title}</h3>
                <p className="mt-3 text-base text-gray-500">
                  {article.content.substring(0, 150)}...
                </p>
              </Link>
              <div className="mt-6 flex items-center">
                <div className="text-sm text-gray-500">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
