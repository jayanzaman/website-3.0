import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="ftr__inner">
        <div className="ftr__top">
          <div>
            <div className="ftr__manifesto">
              A practice for thinking <em>at the edges</em> of strategy, science,
              and the inner life.
              <span
                style={{
                  display: 'block',
                  marginTop: 'var(--s-3)',
                  fontFamily: 'var(--bangla)',
                  fontSize: 'var(--t-17)',
                  color: 'var(--vermilion)',
                  fontStyle: 'italic',
                }}
              >
                বাংলা চিন্তন, বিশ্ব চিন্তন
              </span>
            </div>
          </div>
          <div>
            <h5>Read</h5>
            <Link href="/latest-thinking">Latest thinking</Link>
            <br />
            <Link href="/latest-thinking/quantum-computing">Quantum computing</Link>
            <br />
            <Link href="/latest-thinking/risk-engineering">Risk engineering & IoT</Link>
            <br />
            <Link href="/latest-thinking/insurance-innovation">Insurance innovation</Link>
          </div>
          <div>
            <h5>Practice</h5>
            <Link href="/about">About</Link>
            <br />
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <h5>Elsewhere</h5>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <br />
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
        <div className="ftr__bottom">
          <span>© {new Date().getFullYear()} Jayan Zaman. All rights reserved.</span>
          <span>Set in Spectral, Tiro Bangla &amp; IBM Plex Mono.</span>
        </div>
      </div>
    </footer>
  );
}
