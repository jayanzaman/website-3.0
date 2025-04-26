import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Hi, I'm</span>
              <span className="block text-indigo-600">Jayan Zaman</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              A passionate technologist and innovator with expertise in software development,
              risk engineering, and insurance technology.
            </p>
            <div className="mt-8 sm:mt-12">
              <Link
                href="/latest-thinking"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Read My Latest Articles
              </Link>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="relative">
              <Image
                src="/images/jayan_profile.png"
                alt="Jayan Zaman"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
