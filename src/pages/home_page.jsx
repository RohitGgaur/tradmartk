import { Link } from 'react-router-dom';
import { DotTrail } from '../components/dot_trail.jsx';
import { TopBar } from '../components/top_bar.jsx';
import { MainNavigation } from '../components/main_navigation.jsx';
import { FooterSection } from '../components/footer_section.jsx';
import { use_landing_effects } from '../hooks/use_landing_effects.js';
import img_home_1 from '../images/Image1.jpeg';
import { useMemo } from 'react';

const service_cards = [
  {
    title: 'Trademark Search and Filing',
    text: 'Class mapping, conflict checks, and filing packs tailored to your real business categories.',
    to: '/registration',
  },
  {
    title: 'Objection and Opposition',
    text: 'Drafted replies, hearing support, and evidence flow when registry or third-party challenges appear.',
    to: '/our-services',
  },
  {
    title: 'Renewal and Lifecycle',
    text: 'Calendar-driven renewals, ownership updates, and portfolio continuity support.',
    to: '/our-services',
  },
];

export function HomePage() {
  use_landing_effects();

  const gallery_item = useMemo(
    () => ({
      src: img_home_1,
      alt: 'Trademark symbols overview and usage context',
      label: 'Trademark symbols',
    }),
    [],
  );

  const quick_stats = useMemo(
    () => [
      { k: 'Typical response', v: 'Within 2 business hours' },
      { k: 'Registration term', v: '10-year validity + renewals' },
      { k: 'Scope planning', v: 'Nice class advisory' },
      { k: 'Support', v: 'Objections + oppositions' },
    ],
    [],
  );

  const faq_items = useMemo(
    () => [
      {
        q: 'Do I need a trademark search before filing?',
        a: 'Yes, a clearance search reduces the risk of objections and conflicts. We use it to shape filing scope and class selection.',
      },
      {
        q: 'What is the difference between ™ and ®?',
        a: '™ is commonly used while an application is pending; ® is used after the mark is officially registered (where local rules allow).',
      },
      {
        q: 'How do I choose the right class?',
        a: 'Classes map to goods and services. We recommend a scope that matches how you sell today and what you plan to launch next.',
      },
      {
        q: 'What happens if I receive an objection?',
        a: 'We prepare a structured reply, align evidence/specimens, and track the matter through hearings if required.',
      },
    ],
    [],
  );

  const who_can_apply = useMemo(
    () => [
      'Individuals',
      'Proprietorships',
      'Partnership firms',
      'LLPs',
      'Indian companies',
      'Foreign companies',
      'Trusts and societies',
    ],
    [],
  );

  const testimonials = useMemo(
    () => [
      {
        quote:
          'The intake was fast, the class scope was clear, and we always knew the next milestone. Filing felt controlled instead of chaotic.',
        name: 'Founder, D2C Brand',
      },
      {
        quote:
          'We received an objection and the response pack was crisp. The team handled wording, evidence, and timeline follow-ups without us chasing.',
        name: 'Ops Lead, Marketplace Seller',
      },
      {
        quote:
          'Renewal reminders and ownership updates saved us from a deadline miss. Portfolio hygiene finally feels organised.',
        name: 'In-house Counsel, SME',
      },
    ],
    [],
  );

  return (
    <div className="page-drafting tm-home-v3-page">
      <DotTrail />
      <TopBar />
      <MainNavigation />

      <section className="tm-home-v3-hero">
        <div className="tm-home-v3-hero-bg" aria-hidden />
        <div className="wrap tm-home-v3-hero-inner">
          <div className="tm-home-v3-left rev">
            <div className="tm-home-v3-eyebrow">Trademark Firm</div>
            <h1>
              Premium trademark support
              <span>for ambitious brands</span>
            </h1>
            <p>
              We help founders and established teams protect names, logos, and brand identity through practical filing,
              objection handling, opposition strategy, and renewal discipline.
            </p>
            <div className="tm-home-v3-actions">
              <Link to="/registration" className="btn-gold">
                Start Registration <span className="arrow">-&gt;</span>
              </Link>
              <Link to="/our-services" className="btn-outline">
                Explore Services
              </Link>
            </div>
            <div className="tm-home-v3-tags">
              <span>Trademark-first desk</span>
              <span>Transparent milestones</span>
              <span>Fast response windows</span>
            </div>
          </div>

          <aside className="tm-home-v3-right rev d1">
            <div className="tm-home-v3-panel">
              <h3>What you get</h3>
              <ul>
                <li>Practical class strategy before filing</li>
                <li>Clear next-step updates at each stage</li>
                <li>Support for objections and oppositions</li>
                <li>Renewal hygiene so marks stay active</li>
              </ul>
              <Link to="/contact">Book consultation</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="tm-home-v3-gallery">
        <div className="wrap">
          <div className="tm-home-v3-head rev">
            <div className="label-tag">Inside our process</div>
            <h2 className="heading">From search to certificate, professionally handled</h2>
            <p className="tm-home-v3-head-sub">
              Dedicated workflows for filing quality, response speed, and long-term brand protection.
            </p>
          </div>

          <div className="tm-home-v3-gallery-wrap">
            <figure className="tm-home-v3-gallery-main rev d1">
              <div className="tm-home-v3-gallery-main_frame">
                <img
                  src={gallery_item.src}
                  alt={gallery_item.alt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="tm-home-v3-gallery-cap">{gallery_item.label}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="tm-home-v3-trust">
        <div className="wrap">
          <div className="tm-home-v3-trust-grid rev">
            {quick_stats.map((s) => (
              <div key={s.k} className="tm-home-v3-stat">
                <div className="tm-home-v3-stat-k">{s.k}</div>
                <div className="tm-home-v3-stat-v">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tm-home-v3-services">
        <div className="wrap">
          <div className="tm-home-v3-head rev">
            <div className="label-tag">Core services</div>
            <h2 className="heading">Legal support designed for real business timelines</h2>
          </div>
          <div className="tm-home-v3-card-grid">
            {service_cards.map((card, idx) => (
              <article key={card.title} className={`tm-home-v3-card rev d${Math.min(idx + 1, 4)}`}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <Link to={card.to}>Learn more</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tm-home-v3-scope rev">
        <div className="wrap tm-home-v3-scope-inner">
          <div className="tm-home-v3-scope-copy">
            <div className="label-tag">Eligibility</div>
            <h2 className="heading">Who can apply?</h2>
            <p className="tm-home-v3-scope-sub">
              The applicant named in the filing becomes the proprietor if the application is accepted. We help structure
              the application so ownership, address details, and classification remain consistent.
            </p>
          </div>
          <div className="tm-home-v3-chip-grid">
            {who_can_apply.map((x) => (
              <div key={x} className="tm-home-v3-chip">
                {x}
              </div>
            ))}
          </div>
          <div className="tm-home-v3-scope-actions">
            <Link to="/find-your-class" className="btn-outline">
              Find your class
            </Link>
            <Link to="/registration" className="btn-gold">
              See registration guide <span className="arrow">-&gt;</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="tm-home-v3-faq">
        <div className="wrap">
          <div className="tm-home-v3-head rev">
            <div className="label-tag">Common questions</div>
            <h2 className="heading">Quick answers before you file</h2>
          </div>
          <div className="tm-home-v3-faq-grid">
            {faq_items.map((it, i) => (
              <div key={it.q} className={`tm-home-v3-faq-card rev d${Math.min(i + 1, 6)}`}>
                <h3>{it.q}</h3>
                <p>{it.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tm-home-v3-testimonials">
        <div className="wrap">
          <div className="tm-home-v3-head rev">
            <div className="label-tag">Client notes</div>
            <h2 className="heading">Why teams choose Trademark Firm</h2>
          </div>
          <div className="tm-home-v3-test-grid">
            {testimonials.map((t, i) => (
              <figure key={t.name} className={`tm-home-v3-test rev d${Math.min(i + 1, 6)}`}>
                <div className="tm-home-v3-test-stars">★★★★★</div>
                <blockquote>{t.quote}</blockquote>
                <figcaption>{t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="tm-home-v3-cta rev d2">
        <div className="wrap tm-home-v3-cta-inner">
          <h2>Need a clear trademark game plan?</h2>
          <p>
            Share your mark and business category. We will suggest practical next steps for filing and protection.
          </p>
          <Link to="/contact" className="btn-gold">
            Contact Us <span className="arrow">-&gt;</span>
          </Link>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
