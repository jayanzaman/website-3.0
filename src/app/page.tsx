import OptimizedImage from '@/components/OptimizedImage';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl mb-6">
                Technology & Strategy Consultant
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Where enterprise architecture meets emerging technologies:
                GenAI, quantum computing, and philosophical insights.
              </p>
              <Link
                href="/about"
                className="inline-block bg-orange-500 text-white px-8 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
            <div className="mt-12 lg:mt-0 w-full lg:max-w-2xl">
              <OptimizedImage
                src="/images/manuel-CANL3bzp6wU-unsplash.jpg"
                alt="Infinity symbol representing continuous innovation"
                className="rounded-lg shadow-xl"
                aspectRatio="16/9"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Latest Thinking</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col h-full">
            <Link href="/latest-thinking/quantum-computing" className="group flex flex-col h-full">
              <div className="overflow-hidden rounded-lg shadow-md mb-4">
                <OptimizedImage
                  src="/images/quantum-article.png"
                  alt="Quantum Computing"
                  className="transform transition-transform duration-300 group-hover:scale-105"
                  aspectRatio="16/9"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quantum Computing in Risk Management</h3>
              <p className="text-gray-600 flex-grow">Exploring the potential of quantum computing in revolutionizing risk assessment and management.</p>
            </Link>
          </div>
          <div className="flex flex-col h-full">
            <Link href="/latest-thinking/risk-engineering" className="group flex flex-col h-full">
              <div className="overflow-hidden rounded-lg shadow-md mb-4">
                <OptimizedImage
                  src="/images/Risk-Engineering-and-IoT.png"
                  alt="Risk Engineering and IoT"
                  className="transform transition-transform duration-300 group-hover:scale-105"
                  aspectRatio="16/9"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">The Future of Risk Engineering with IoT</h3>
              <p className="text-gray-600 flex-grow">How Internet of Things is transforming the landscape of risk engineering.</p>
            </Link>
          </div>
          <div className="flex flex-col h-full">
            <Link href="/latest-thinking/insurance-innovation" className="group flex flex-col h-full">
              <div className="overflow-hidden rounded-lg shadow-md mb-4">
                <OptimizedImage
                  src="/images/insurance-article.jpg"
                  alt="Insurance Innovation"
                  className="transform transition-transform duration-300 group-hover:scale-105"
                  aspectRatio="16/9"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation in Insurance Industry</h3>
              <p className="text-gray-600 flex-grow">Digital transformation and the future of insurance technology.</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
