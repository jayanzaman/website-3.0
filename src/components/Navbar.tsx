'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Latest Thinking', href: '/latest-thinking' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="topnav">
      <div className="topnav__inner">
        <Link href="/" className="brand">
          <svg className="brand__seal" viewBox="0 0 100 100" aria-hidden="true">
            <use href="#hanko" />
          </svg>
          <span className="brand__name">
            <b>Jayan</b> Zaman{' '}
            <em style={{ color: 'var(--sumi-3)' }}>/ জয়ন জামান</em>
          </span>
        </Link>
        <nav className="topnav__links" aria-label="Main">
          {navigation.map((link) => {
            const isCurrent =
              link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={isCurrent ? 'is-current' : undefined}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
