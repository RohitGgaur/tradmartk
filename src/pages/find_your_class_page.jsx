import { TrademarkSubpageShell } from '../components/trademark_subpage_shell.jsx';
import { Link } from 'react-router-dom';

export function FindYourClassPage() {
  const toc_items = [
    { href: '#overview', text: 'Overview' },
    { href: '#inputs', text: 'What we need from you' },
    { href: '#how', text: 'How we pick classes' },
    { href: '#examples', text: 'Quick examples' },
    { href: '#mistakes', text: 'Common mistakes' },
    { href: '#faq', text: 'FAQ' },
  ];

  const intake_points = [
    {
      title: 'What you sell today',
      text: 'Your primary goods or services, priced and described the same way customers see them.',
    },
    {
      title: 'How customers buy',
      text: 'Website, app, marketplace listings, retail, distributors, or service contracts.',
    },
    {
      title: 'Near-term roadmap',
      text: 'Launches planned in the next 12 to 24 months so we reduce coverage gaps early.',
    },
    {
      title: 'Existing brand assets',
      text: 'Name, logo files, taglines, packaging cues, and how you intend to use them.',
    },
  ];

  const method_steps = [
    {
      n: '01',
      h: 'Map offerings to Nice classes',
      p: 'We translate your product/service list into class candidates and confirm what is actually registrable.',
    },
    {
      n: '02',
      h: 'Scope the specification',
      p: 'We draft practical descriptions so protection matches your business without unnecessary breadth.',
    },
    {
      n: '03',
      h: 'Check overlaps and adjacency',
      p: 'We flag likely conflicts, related classes, and risky similarity zones before filing.',
    },
    {
      n: '04',
      h: 'Finalise a filing plan',
      p: 'You get a clean class plan you can share internally, plus next steps for registration.',
    },
  ];

  const example_rows = [
    { k: 'Restaurant / cafe', v: 'Usually services-focused (e.g., food & beverage services).' },
    { k: 'Mobile app (SaaS)', v: 'Often software/services with supporting classes depending on delivery model.' },
    { k: 'Clothing brand', v: 'Typically product classes for apparel; sometimes retail/service angles too.' },
    { k: 'Cosmetics', v: 'Product class for cosmetics; consider related categories if expanding.' },
    { k: 'Consulting', v: 'Services class aligned to the industry and the type of advisory you provide.' },
    { k: 'E-commerce seller', v: 'Depends on goods sold; marketplace activity alone is not the class.' },
  ];

  const mistake_cards = [
    {
      title: 'Picking a class by keyword only',
      text: 'Similar words can live in different classes. The correct class depends on how the offering is sold and described.',
    },
    {
      title: 'Over-filing in unrelated classes',
      text: 'Too many classes increases cost and can complicate objections without adding real protection.',
    },
    {
      title: 'Under-filing and leaving gaps',
      text: 'If your mark spans products and services, filing only one side can leave a practical coverage hole.',
    },
    {
      title: 'Vague descriptions',
      text: 'Generic or mismatched specifications invite objections. Clean, business-aligned wording is safer.',
    },
  ];

  const faq_items = [
    {
      q: 'Can I file in multiple classes?',
      a: 'Yes. If your mark genuinely covers multiple goods/services, multi-class filing can be appropriate. We keep it tight so it stays defensible.',
    },
    {
      q: 'Is my domain name the same as a class?',
      a: 'No. Domains are identifiers; classes map to the goods/services you offer under the mark.',
    },
    {
      q: 'Do classes affect objections?',
      a: 'They can. Incorrect class choice and overly broad wording may trigger examination issues or conflict risk.',
    },
    {
      q: 'What if I expand later?',
      a: 'You can file additional applications later. We usually plan for realistic near-term launches so you avoid immediate re-filing.',
    },
  ];

  return (
    <TrademarkSubpageShell
      breadcrumb_label="Find your class"
      eyebrow="Nice classification"
      title="Find your class"
      intro="Choose classes carefully to avoid coverage gaps, unnecessary objections, and expensive re-filing cycles."
    >
      <div className="tm-class-v2">
        <aside className="tm-class-v2-side">
          <div className="tm-class-v2-side_card">
            <div className="tm-class-v2-side_title">On this page</div>
            <nav className="tm-class-v2-toc" aria-label="Find your class sections">
              {toc_items.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.text}
                </a>
              ))}
            </nav>
            <div className="tm-class-v2-side_note">
              If you share your product/service list and selling channels, we can suggest a clean class plan in a short call.
            </div>
            <div className="tm-class-v2-side_actions">
              <Link to="/contact" className="btn-gold">
                Get class advice <span className="arrow">-&gt;</span>
              </Link>
              <Link to="/registration" className="btn-outline">
                See registration guide
              </Link>
            </div>
          </div>
        </aside>

        <main className="tm-class-v2-main">
          <section className="tm-class-v2-card" id="overview">
            <h2 className="tm-class-v2-h2">Overview</h2>
            <p className="tm-class-v2-lead">
              Nice classes define what your trademark protects. Class strategy is not a checkbox; it is the link between your
              business model and what the registry records.
            </p>
            <p>
              The goal is simple: cover what you sell today, reduce gaps for near-term launches, and keep the wording clean
              so the application stays defensible.
            </p>
            <div className="tm-class-v2-callout">
              <div className="k">Rule of thumb</div>
              <div className="v">
                Choose classes based on your goods/services, not on the platform you sell on. Marketplace presence is not a
                class.
              </div>
            </div>
          </section>

          <section className="tm-class-v2-card" id="inputs">
            <h2 className="tm-class-v2-h2">What we need from you</h2>
            <div className="tm-class-v2-grid">
              {intake_points.map((c) => (
                <article key={c.title} className="tm-class-v2-mini">
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="tm-class-v2-card" id="how">
            <h2 className="tm-class-v2-h2">How we pick classes</h2>
            <div className="tm-class-v2-steps">
              {method_steps.map((s) => (
                <div key={s.n} className="tm-class-v2-step">
                  <div className="n" aria-hidden>
                    {s.n}
                  </div>
                  <div>
                    <h3>{s.h}</h3>
                    <p>{s.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="tm-class-v2-card" id="examples">
            <h2 className="tm-class-v2-h2">Quick examples</h2>
            <p className="tm-class-v2-muted">
              Examples below are directional. Final class choices depend on your exact specification and how you use the mark.
            </p>
            <div className="tm-class-v2-table" role="table" aria-label="Examples">
              {example_rows.map((row) => (
                <div key={row.k} className="tm-class-v2-row" role="row">
                  <div className="a" role="cell">
                    {row.k}
                  </div>
                  <div className="b" role="cell">
                    {row.v}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="tm-class-v2-card" id="mistakes">
            <h2 className="tm-class-v2-h2">Common mistakes we help you avoid</h2>
            <div className="tm-class-v2-mistakes">
              {mistake_cards.map((c) => (
                <article key={c.title} className="tm-class-v2-mistake">
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="tm-class-v2-card" id="faq">
            <h2 className="tm-class-v2-h2">FAQ</h2>
            <div className="tm-class-v2-faq">
              {faq_items.map((it) => (
                <div key={it.q} className="tm-class-v2-faq_item">
                  <h3>{it.q}</h3>
                  <p>{it.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="tm-class-v2-cta">
            <div className="tm-class-v2-cta_inner">
              <h2>Want a clear class plan before you file?</h2>
              <p>Share your offering list and channels. We will suggest practical next steps and a clean scope.</p>
              <div className="tm-class-v2-cta_actions">
                <Link to="/contact" className="btn-gold">
                  Talk to us <span className="arrow">-&gt;</span>
                </Link>
                <Link to="/our-services" className="btn-outline">
                  View services
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </TrademarkSubpageShell>
  );
}
