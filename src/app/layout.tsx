import type { Metadata } from 'next';
import { Spectral, Tiro_Bangla, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SvgSymbols from '@/components/SvgSymbols';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-spectral',
  display: 'swap',
});

const tiroBangla = Tiro_Bangla({
  subsets: ['bengali', 'latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-tiro-bangla',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jayan Zaman — Strategy, GenAI, Quantum, Reinsurance',
  description:
    'A strategy consultant working where commercial insurance, generative AI, and quantum thinking come into contact.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spectral.variable} ${tiroBangla.variable} ${plexMono.variable}`}>
      <body>
        <SvgSymbols />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
