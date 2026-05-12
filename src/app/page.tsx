import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__inner">
          <div>
            <div className="hero__kicker">
              <span className="line"></span> Strategy · GenAI · Quantum · Reinsurance
            </div>
            <h1 className="hero__title">
              At the seam of <em>enterprise</em> and <em>the wavefunction.</em>
            </h1>
            <p className="hero__lede">
              A strategy consultant working where commercial insurance, generative AI,
              and quantum thinking come into contact. Long-form essays, simulators, and
              the occasional <em>metaphysical detour.</em>
            </p>
            <div className="hero__cta">
              <Link href="/latest-thinking" className="btn btn--seal">
                Read latest thinking <span className="btn__arrow">→</span>
              </Link>
              <Link href="/about" className="ilink">
                About the practice
              </Link>
            </div>
          </div>
          <div className="hero__sphere">
            <svg
              className="sphere-svg"
              viewBox="-110 -110 220 220"
              style={{ width: '100%', height: '100%' }}
              aria-hidden="true"
            >
              <use href="#sphere-base" />
            </svg>
          </div>
        </div>
      </section>

      {/* DOSSIER STRIP */}
      <section className="dossier">
        <div className="dossier__inner">
          <div className="dossier__label">— The dossier</div>
          <div className="dossier__col">
            <h5>Discipline</h5>
            <p>
              Strategy consulting,
              <br />
              over a decade.
            </p>
          </div>
          <div className="dossier__col">
            <h5>Practice</h5>
            <p>
              Commercial insurance,
              <br />
              AI operating models.
            </p>
          </div>
          <div className="dossier__col">
            <h5>Curiosity</h5>
            <p>
              <em>
                Quantum algorithms,
                <br />
                fine-tuned cosmology.
              </em>
            </p>
          </div>
          <div className="dossier__col">
            <h5>Roots</h5>
            <p>
              Bengal &amp; the diaspora.
              <br />
              <em
                style={{
                  fontFamily: 'var(--bangla)',
                  color: 'var(--vermilion)',
                }}
              >
                ঢাকা — নিউ ইয়র্ক
              </em>
            </p>
          </div>
        </div>
      </section>

      {/* LATEST INSIGHTS */}
      <section className="insights">
        <div className="insights__hd">
          <h2>
            Latest <em>thinking</em>
          </h2>
          <Link href="/latest-thinking" className="ilink">
            View all writing
          </Link>
        </div>
        <div className="insights__list">
          <article className="acard">
            <div className="acard__meta">
              <span className="mono">22 Apr 2025</span>
              <span className="dot"></span>
              <span className="mono">Insurance · IoT</span>
              <span className="dot"></span>
              <span className="mono">7 min</span>
            </div>
            <Link href="/latest-thinking/risk-engineering" className="acard__title-link">
              <h3 className="acard__title">
                The role of risk engineering and IoT{' '}
                <em>in modern insurance underwriting.</em>
              </h3>
            </Link>
            <p className="acard__excerpt">
              Risk engineering identifies, prevents, and mitigates loss before policy
              claims arrive. Sensors and continuous telemetry are quietly shifting the
              practice from quarterly inspection to continuous underwriting.
            </p>
            <div className="acard__foot">
              <span className="acard__read">Continue reading →</span>
              <span className="tag tag--seal">Featured</span>
            </div>
          </article>
          <article className="acard">
            <div className="acard__meta">
              <span className="mono">14 Oct 2025</span>
              <span className="dot"></span>
              <span className="mono">Quantum · Computing</span>
              <span className="dot"></span>
              <span className="mono">9 min</span>
            </div>
            <Link
              href="/latest-thinking/quantum-computing"
              className="acard__title-link"
            >
              <h3 className="acard__title">
                Quantum computing in risk management —{' '}
                <em>the probabilistic substrate beneath actuarial work.</em>
              </h3>
            </Link>
            <p className="acard__excerpt">
              Exploring how quantum algorithms reshape risk assessment, portfolio
              optimization, and the deeper mathematics that underwrites commercial
              insurance.
            </p>
            <div className="acard__foot">
              <span className="acard__read">Continue reading →</span>
              <span className="tag">Quantum</span>
            </div>
          </article>
          <article className="acard">
            <div className="acard__meta">
              <span className="mono">26 Nov 2025</span>
              <span className="dot"></span>
              <span className="mono">Insurance · Innovation</span>
              <span className="dot"></span>
              <span className="mono">12 min</span>
            </div>
            <Link
              href="/latest-thinking/insurance-innovation"
              className="acard__title-link"
            >
              <h3 className="acard__title">
                Innovation in insurance —{' '}
                <em>digital transformation and the long-cycle business.</em>
              </h3>
            </Link>
            <p className="acard__excerpt">
              The global insurance market is under pressure, but the story is more
              complex than the headlines suggest. A look at structural forces, the model
              errors, and a path back to a defensible curve.
            </p>
            <div className="acard__foot">
              <span className="acard__read">Continue reading →</span>
              <span className="tag">Practice</span>
            </div>
          </article>
        </div>
      </section>

      {/* INTERACTIVE FEATURE */}
      <section className="feature">
        <div className="feature__inner">
          <div>
            <div className="feature__kicker">— Interactive · A simulator</div>
            <h2 className="feature__title">
              Our finetuned <em>universe.</em>
            </h2>
            <p className="feature__body">
              A hands-on instrument for the constants. Drag the dials and watch the
              cosmos collapse, fly apart, or briefly become something stranger than
              ours. The improbable path from the Big Bang to consciousness, made{' '}
              <em>visible.</em>
            </p>
            <a
              href="https://finetuneduniverse.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--seal"
            >
              Open the simulator <span className="btn__arrow">→</span>
            </a>
          </div>
          <div className="feature__sphere-wrap">
            <svg
              className="sphere-svg"
              viewBox="-110 -110 220 220"
              style={{ width: '100%', height: '100%' }}
              aria-hidden="true"
            >
              <use href="#sphere-super" />
            </svg>
          </div>
        </div>
      </section>

      {/* AREAS OF INTEREST */}
      <section className="areas">
        <div className="areas__inner">
          <div className="areas__hd">
            <div className="mono">— Areas of interest</div>
            <h2>
              Four practices that <em>share a single table.</em>
            </h2>
          </div>
          <div className="areas__grid">
            <div className="mono" style={{ color: 'var(--vermilion)' }}>
              i — iv
            </div>
            <div className="area">
              <span className="area__num">i.</span>
              <h4 className="area__title">
                Commercial <em>insurance</em>
              </h4>
              <p className="area__body">
                Building agile teams, digital transformation, and enterprise
                architecture for the long-cycle businesses that actually carry risk.
              </p>
            </div>
            <div className="area">
              <span className="area__num">ii.</span>
              <h4 className="area__title">
                AI <em>implementation</em>
              </h4>
              <p className="area__body">
                Reimagining insurance operations through generative AI — operating
                models that compound, rather than collapse under, complexity.
              </p>
            </div>
            <div className="area">
              <span className="area__num">iii.</span>
              <h4 className="area__title">
                Quantum <em>computing</em>
              </h4>
              <p className="area__body">
                Quantum algorithms, quantum-inspired optimization, and the philosophical
                implications of a probabilistic substrate.
              </p>
            </div>
            <div className="area">
              <span className="area__num">iv.</span>
              <h4 className="area__title">
                Science &amp; <em>spirit</em>
              </h4>
              <p className="area__body">
                Eastern and Western philosophical traditions, and the surprising places
                they intersect with modern physics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
