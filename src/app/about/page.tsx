import OptimizedImage from '@/components/OptimizedImage';

export default function About() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Me</h2>
          <div className="mt-6">
            <OptimizedImage
              src="/images/jayan_profile.png"
              alt="Jayan Zaman"
              width={400}
              height={400}
              className="rounded-lg shadow-lg float-right ml-6 mb-6"
              priority
            />
            <p className="mt-6 text-lg leading-8 text-gray-600">
              I'm a technology leader with over 15 years of experience in Risk Engineering, Insurance, and Innovation. 
              My expertise spans across enterprise software development, risk management systems, and emerging technologies.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Currently, I'm focused on exploring the intersection of artificial intelligence, quantum computing, and risk management, 
              working to develop innovative solutions that help organizations better understand and mitigate their risks.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Throughout my career, I've led numerous digital transformation initiatives and built high-performing teams 
              that deliver cutting-edge solutions. I'm passionate about mentoring the next generation of technology leaders 
              and contributing to the advancement of risk engineering practices.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">Areas of Expertise</h3>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-gray-200 rounded-lg p-6">
              <OptimizedImage
                src="/images/Risk-Engineering-and-IoT.png"
                alt="Risk Engineering"
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-semibold">Risk Engineering</h4>
              <p className="mt-2 text-gray-600">Enterprise risk assessment, IoT integration, and predictive analytics</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <OptimizedImage
                src="/images/quantum-article.jpg"
                alt="Emerging Technologies"
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-semibold">Emerging Technologies</h4>
              <p className="mt-2 text-gray-600">Quantum computing, AI/ML, and blockchain applications in risk management</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <OptimizedImage
                src="/images/insurance-article.jpg"
                alt="Insurance Innovation"
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-semibold">Insurance Innovation</h4>
              <p className="mt-2 text-gray-600">Digital transformation and modernization of insurance processes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
