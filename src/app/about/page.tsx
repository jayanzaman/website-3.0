export default function About() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Me
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Technology leader with expertise in software development and insurance technology.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Professional Experience</h3>
              <div className="mt-6 prose prose-indigo prose-lg text-gray-500">
                <p>
                  With over a decade of experience in technology and insurance, I've led teams
                  in developing innovative solutions that bridge the gap between traditional
                  insurance practices and modern technology.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">Skills & Expertise</h3>
              <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-3">
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Technologies</h4>
                  <ul className="mt-2 text-gray-500">
                    <li>JavaScript/TypeScript</li>
                    <li>React/Next.js</li>
                    <li>Node.js</li>
                    <li>Python</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Insurance</h4>
                  <ul className="mt-2 text-gray-500">
                    <li>Risk Engineering</li>
                    <li>Underwriting</li>
                    <li>Claims Processing</li>
                    <li>Policy Management</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Leadership</h4>
                  <ul className="mt-2 text-gray-500">
                    <li>Team Management</li>
                    <li>Project Planning</li>
                    <li>Strategy Development</li>
                    <li>Innovation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
