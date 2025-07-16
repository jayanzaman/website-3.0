'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Latest Thinking', href: '/latest-thinking' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className="bg-black">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-6">
          <div className="flex items-center">
            <Link href="/" className="text-white text-xl font-semibold">
              Jayan Zaman
            </Link>
          </div>
          <div className="ml-10 space-x-8">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? 'text-orange-500'
                    : 'text-white hover:text-orange-500'
                } text-sm font-medium transition-colors duration-200`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
