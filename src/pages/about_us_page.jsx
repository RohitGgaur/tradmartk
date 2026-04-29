import { Link } from 'react-router-dom';
import { DotTrail } from '../components/dot_trail.jsx';
import { TopBar } from '../components/top_bar.jsx';
import { MainNavigation } from '../components/main_navigation.jsx';
import { FooterSection } from '../components/footer_section.jsx';
import { use_landing_effects } from '../hooks/use_landing_effects.js';
import img_about_visual from '../images/Image1.jpeg';

export function AboutUsPage() {
  use_landing_effects();

  const focus_cards = [
    {
      title: 'Marks and names',
      text: 'Word marks, device marks, and combined presentations scoped to how customers actually find you.',
    },
    {
      title: 'Logos and visuals',
      text: 'Filing paths that anchor protection to the visuals you rely on in apps, storefronts, and campaigns.',
    },
    {
      title: 'Adjacent compliance support',
      text: 'When certifications or regulatory documentation affect launch plans, we align trademark timelines with those workflows.',
    },
  ];

  return (
    <div className="page-drafting tm-about-page">
      <DotTrail />
      <TopBar />
      <MainNavigation />
      <div className="bc">
        <Link to="/">Home</Link>
        <span className="sep">&gt;</span>
        <span className="cur">About us</span>
      </div>

      <header className="tm-about-hero">
        <div className="tm-about-hero-bg" aria-hidden />
        <div className="tm-about-hero-inner wrap">
          <div className="tm-about-hero-copy rev">
            <div className="tm-about-hero-eyebrow">About Trademark Firm</div>
            <h1 className="tm-about-hero-title">
              <span className="tm-about-hero-line">Counsel that keeps pace </span>
              <span className="tm-about-hero-accent">with your brand.</span>
            </h1>
            <p className="tm-about-hero-lead">
              Trademark Firm exists because brands move faster than paperwork. Search, filing, examiner dialogue, and
              renewals explained clearly so your team can focus on business growth.
            </p>
            <ul className="tm-about-hero-metrics" aria-label="At a glance">
              <li className="tm-about-metric">
                <span className="tm-about-metric-k">Practice desk</span>
                <span className="tm-about-metric-v">Trademark first</span>
              </li>
              <li className="tm-about-metric">
                <span className="tm-about-metric-k">Working style</span>
                <span className="tm-about-metric-v">Transparent milestones</span>
              </li>
              <li className="tm-about-metric">
                <span className="tm-about-metric-k">Coverage</span>
                <span className="tm-about-metric-v">Global ready filings</span>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div className="tm-about-shell wrap">
        <div className="tm-about-grid">
          <div className="tm-about-main rev d1">
            <section className="tm-about-panel">
              <h2 className="tm-about-h2">Our mission</h2>
              <p className="tm-about-p">
                Keep marks searchable and filings defensible without burying teams in jargon. We pair careful search
                notes with filing scope that matches how you sell today.
              </p>
              <p className="tm-about-p">
                We avoid recycled boilerplate. If a chosen sign sits in a noisy field, we say so early so you can pivot
                before costs stack up.
              </p>
            </section>

            <section className="tm-about-panel">
              <h2 className="tm-about-h2">What we focus on</h2>
              <p className="tm-about-p">
                Day to day work spans names, logos, trade dress cues, examiner responses, opposition support, and renewal
                hygiene once marks mature.
              </p>
              <div className="tm-about-cards">
                {focus_cards.map((c) => (
                  <article key={c.title} className="tm-about-mini-card">
                    <h3 className="tm-about-h3">{c.title}</h3>
                    <p>{c.text}</p>
                  </article>
                ))}
              </div>
            </section>

            <p className="tm-about-note">
              Content on this page is prepared for Trademark Firm and does not copy third party brochures. Formal advice
              depends on your facts, so speak with us before making material filing decisions.
            </p>

            <div className="tm-about-cta">
              <Link to="/contact" className="btn-gold">
                Talk to our team <span className="arrow">-&gt;</span>
              </Link>
              <Link to="/our-services" className="btn-outline tm-about-cta-secondary">
                View services
              </Link>
            </div>
          </div>

          <aside className="tm-about-side rev d2">
            <div className="tm-about-side-card">
              <div className="tm-about-side-frame">
                <img
                  src={img_about_visual}
                  alt="Collaborative trademark strategy session"
                  decoding="async"
                  loading="lazy"
                />
              </div>
              <p className="tm-about-side-caption">
                Strategy sessions and filing reviews, alignment between what ships and what you file.
              </p>
            </div>
            <div className="tm-about-quote">
              <blockquote>
                Integrity over volume: fewer surprises, tighter correspondence, and one accountable thread until the file
                reaches the stage you need.
              </blockquote>
            </div>
          </aside>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}

