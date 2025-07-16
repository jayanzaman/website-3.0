import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import { articles } from '@/data/articles';

export default function LatestThinking() {

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Latest Thinking</h1>
          <p className="mt-4 text-xl text-gray-600">
            Insights and thoughts on technology, insurance, and innovation.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-12 lg:col-span-3">
            <div className="grid gap-16 lg:grid-cols-3">
              {articles.map((article) => (
                <div key={article.id} className="flex flex-col h-full">
                  <Link href={`/latest-thinking/${article.slug}`} className="group flex flex-col h-full">
                    <div className="relative overflow-hidden rounded-lg shadow-md mb-4">
                      <OptimizedImage
                        src={article.imageUrl}
                        alt={article.title}
                        className="transform transition-transform duration-300 group-hover:scale-105"
                        aspectRatio="16/9"
                      />
                      <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs p-1 rounded">
                        {article.title}
                      </div>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 group-hover:text-orange-500 mb-2">
                      {article.title}
                    </h2>
                    <p className="text-base text-gray-600 flex-grow">
                      {article.content.substring(0, 150)}...
                    </p>
                    <p className="mt-4 text-sm text-orange-500 group-hover:underline inline-flex items-center">
                      Read more <span className="ml-1">→</span>
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
