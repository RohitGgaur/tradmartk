import { DotTrail } from '../components/dot_trail.jsx';
import { TopBar } from '../components/top_bar.jsx';
import { MainNavigation } from '../components/main_navigation.jsx';
import { StatsBar } from '../components/stats_bar.jsx';
import { FooterSection } from '../components/footer_section.jsx';
import { ProgressBar } from '../components/progress_bar.jsx';
import { ContactSection } from '../components/contact_section.jsx';
import { CtaBanner } from '../components/cta_banner.jsx';
import { use_landing_effects } from '../hooks/use_landing_effects.js';
import { use_scroll_progress } from '../hooks/use_scroll_progress.js';
import { Link } from 'react-router-dom';
import { ImageShowcaseSection } from '../components/image_showcase_section.jsx';
import img_showcase_drafting from '../images/Image5.jpeg';

const mq_dup = (
  <>
    <span className="mq-item">
      <b>Claims</b> That Count<span className="mq-dot" />
    </span>
    <span className="mq-item">
      <b>USPTO</b> Ready<span className="mq-dot" />
    </span>
    <span className="mq-item">
      <b>EPO</b> Aligned<span className="mq-dot" />
    </span>
    <span className="mq-item">
      <b>Enablement</b> First<span className="mq-dot" />
    </span>
    <span className="mq-item">
      Ph.D. <b>Drafters</b>
      <span className="mq-dot" />
    </span>
  </>
);

const deliverables = [
  {
    ico: '📐',
    title: 'Strategic claim sets',
    text: 'Independent claims scoped for strength; dependents hedge against design-arounds and help in prosecution.',
    num: '01',
    d: '',
  },
  {
    ico: '📑',
    title: 'Specification & figures',
    text: 'Detailed description and drawings that satisfy written description and enablement — not boilerplate.',
    num: '02',
    d: 'd1',
  },
  {
    ico: '🧭',
    title: 'Prior-art aware drafting',
    text: 'Claims are framed with known references in mind so you enter examination with fewer surprises.',
    num: '03',
    d: 'd2',
  },
  {
    ico: '🌐',
    title: 'PCT & national-phase ready',
    text: 'Language and figure conventions chosen so international filings do not require a full rewrite.',
    num: '04',
    d: 'd3',
  },
];

const draft_phases = [
  { n: '01', h: 'Disclosure & NDA', p: 'Structured interview to capture embodiments, alternatives, and commercial goals before any drafting begins.', tag: 'Kickoff', d: '' },
  { n: '02', h: 'Claim architecture', p: 'Draft claim tree and filing strategy aligned to USPTO/EPO practice in your technology area.', tag: 'Strategy', d: 'd1' },
  { n: '03', h: 'Specification build', p: 'Full spec, figures, and claims with two revision cycles so you approve scope before filing.', tag: 'Draft', d: 'd2' },
  { n: '04', h: 'Filing & handoff', p: 'Formal filing package, confirmation numbers, and prosecution roadmap for office actions.', tag: 'File', d: 'd3' },
];

export function PatentDraftingPage() {
  use_landing_effects();
  use_scroll_progress('progressBar');

  return (
    <div className="page-patent-services">
      <ProgressBar />
      <DotTrail compact />
      <TopBar />
      <MainNavigation />

      <div className="bc">
        <Link to="/">Home</Link>
        <span className="sep">›</span>
        <Link to="/patent-services">Patent Services</Link>
        <span className="sep">›</span>
        <span className="cur">Patent Drafting</span>
      </div>

      <section className="hero">
        <div className="h-grid" />
        <div className="h-glow" />
        <div className="h-ring" />
        <div className="h-ring2" />
        <div className="hero-content">
          <div className="hero-badge">
            <div className="hero-badge-dot" />
            flagship drafting practice
          </div>
          <h1>
            Patent Drafting
            <br />
            Built for <em>Examination</em>
            <br />
            <span className="outline">& Licensing</span>
          </h1>
          <p className="hero-sub">
            The specification and claims are the patent. We write them so they{' '}
            <strong>withstand §§ 102, 103, and 112</strong>, support your broadest defensible scope, and read clearly
            to investors, licensees, and courts — not just examiners.
          </p>
          <div className="hero-btns">
            <a href="#contact" className="btn-gold">
              Talk to a Drafter <span className="arrow">→</span>
            </a>
            <Link to="/patent-services" className="btn-ghost">
              See all services
            </Link>
          </div>
          <div className="hero-pills">
            {['Non-provisional', 'Provisional', 'PCT entry', 'Continuations', 'Software / AI', 'Life sciences'].map(
              (label) => (
                <div key={label} className="hero-pill">
                  <div className="hero-pill-dot" />
                  {label}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <div className="marquee">
        <div className="mq-track">
          {mq_dup}
          {mq_dup}
        </div>
      </div>

      <StatsBar />

      <section className="services-main" id="deliverables">
        <div className="svc-intro">
          <div>
            <div className="label-tag revl">Deliverables</div>
            <h2 className="heading revl d1">
              What &quot;done&quot;
              <br />
              looks like
            </h2>
          </div>
          <p className="body-lg revr">
            You receive a filing-ready application package — not a rough draft. Every section exists to support your
            claims and survive scrutiny in prosecution and beyond.
          </p>
        </div>
        <div className="svc-grid-main">
          {deliverables.map((c) => (
            <div key={c.num} className={`svc-card rev${c.d ? ` ${c.d}` : ''}`}>
              <div className="svc-ico">{c.ico}</div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <div className="svc-tag">Drafting desk</div>
              <div className="svc-num">{c.num}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="compare-sec">
        <div className="wrap">
          <div className="label-tag rev">Why drafting quality matters</div>
          <h2 className="heading rev d1" style={{ marginBottom: 48 }}>
            Thin drafting vs. litigation-ready drafting
          </h2>
          <div className="compare-inner">
            <div className="compare-col rev">
              <div className="cmp-head bad">❌ &nbsp; Thin or template specs</div>
              <div className="cmp-body">
                {[
                  ['Narrow independent claims', 'Easy for competitors to invent around after a quick design change.'],
                  ['Missing embodiments', 'Unclaimed variations become free space for copyists.'],
                  ['Weak figure support', 'Examiner maps prior art to your figures; gaps become rejections.'],
                ].map(([strong, span]) => (
                  <div key={strong} className="cmp-row">
                    <div className="cmp-icon x">✕</div>
                    <div className="cmp-text">
                      <strong>{strong}</strong>
                      <span>{span}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="compare-col rev d2">
              <div className="cmp-head good">✓ &nbsp; XYZ drafting standard</div>
              <div className="cmp-body">
                {[
                  ['Layered claim strategy', 'Broadest supportable independent plus dependents that close loopholes.'],
                  ['Full embodiment coverage', 'Alternatives and fallbacks captured so scope is defensible.'],
                  ['Figures tied to limitations', 'Every important limitation is illustrated and described consistently.'],
                ].map(([strong, span]) => (
                  <div key={strong} className="cmp-row">
                    <div className="cmp-icon chk">✓</div>
                    <div className="cmp-text">
                      <strong>{strong}</strong>
                      <span>{span}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageShowcaseSection
        label="The drafting room"
        heading={
          <>
            Claims, figures,
            <br />
            &amp; enablement
          </>
        }
        description="Specification and drawings built to support your broadest defensible scope — not boilerplate."
        items={[
          {
            src: img_showcase_drafting,
            alt: 'Patent drafting — claims, figures, specification, and examiner-ready review',
            caption: 'Claims, figures, and specification — built for enablement and prosecution in one cohesive draft.',
          },
        ]}
      />

      <section className="process-sec" id="process">
        <div className="process-wrap">
          <div className="process-left">
            <div className="label-tag revl" style={{ color: 'rgba(200,146,42,.7)' }}>
              How we draft
            </div>
            <h2 className="heading light revl d1">
              From your notes
              <br />
              to filed claims
            </h2>
            <p className="revl d2">
              A focused four-phase path keeps you informed at each milestone — no black-box drafting, no surprise
              scope changes on filing day.
            </p>
            <a href="#contact" className="btn-gold revl d3">
              Start a drafting engagement <span className="arrow">→</span>
            </a>
          </div>
          <div className="timeline">
            {draft_phases.map((t) => (
              <div key={t.n} className={`tl-item rev${t.d ? ` ${t.d}` : ''}`}>
                <div className="tl-left">
                  <div className="tl-num">{t.n}</div>
                  <div className="tl-line" />
                </div>
                <div className="tl-content">
                  <h3>{t.h}</h3>
                  <p>{t.p}</p>
                  <span className="tl-tag">{t.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <CtaBanner />
      <FooterSection patent_variant />

      <div className="float-cta">
        <a href="#contact">
          <div className="float-dot" />
          Free Consultation
        </a>
      </div>
    </div>
  );
}
