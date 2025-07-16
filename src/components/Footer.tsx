export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-white">
            <p>&copy; {new Date().getFullYear()} Jayan Zaman. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://linkedin.com" className="text-gray-400 hover:text-orange-500">
              LinkedIn
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-orange-500">
              Twitter
            </a>
            <a href="https://github.com" className="text-gray-400 hover:text-orange-500">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
