import { Link } from 'react-router-dom';
import { TrademarkSubpageShell } from '../components/trademark_subpage_shell.jsx';

const why_register = [
  'Creates a public ownership record through registry publication.',
  'Helps distinguish your brand from competing marks in the market.',
  'Improves legal footing against infringement and imitation attempts.',
  'Supports licensing, franchising, and investor diligence conversations.',
  'Adds long-term value to brand assets and commercial negotiations.',
  'Enables formal use of registration status once grant requirements are met.',
];

const eligible_entities = [
  'Individuals',
  'Joint applicants',
  'Sole proprietorships',
  'Partnership firms',
  'Limited Liability Partnerships (LLPs)',
  'Indian companies and foreign companies',
  'Trusts and societies',
];

export function RegistrationPage() {
  const toc_items = [
    { href: '#overview', text: 'Overview' },
    { href: '#what-is', text: 'What is a trademark?' },
    { href: '#act', text: 'Trade Marks Act, 1999' },
    { href: '#why', text: 'Why register?' },
    { href: '#eligibility', text: 'Eligibility' },
    { href: '#process', text: 'Process' },
  ];

  return (
    <TrademarkSubpageShell
      breadcrumb_label="Registration"
      eyebrow="India online filing"
      title="Trademark registration online"
      intro="A practical guide to filing trademark applications in India, from class selection to objection handling and renewals."
    >
      <div className="tm-reg-v2">
        <aside className="tm-reg-v2-side">
          <div className="tm-reg-v2-side_card">
            <div className="tm-reg-v2-side_title">On this page</div>
            <nav className="tm-reg-v2-toc" aria-label="Registration page sections">
              {toc_items.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.text}
                </a>
              ))}
            </nav>
            <div className="tm-reg-v2-facts">
              <div className="tm-reg-v2-fact">
                <div className="k">Validity</div>
                <div className="v">10 years + renewals</div>
              </div>
              <div className="tm-reg-v2-fact">
                <div className="k">Symbols</div>
                <div className="v">Use ™ pending, ® after grant</div>
              </div>
              <div className="tm-reg-v2-fact">
                <div className="k">Focus</div>
                <div className="v">Class plan + objection support</div>
              </div>
            </div>
            <div className="tm-reg-v2-side_actions">
              <Link to="/contact" className="btn-gold">
                Book consultation <span className="arrow">-&gt;</span>
              </Link>
              <Link to="/find-your-class" className="btn-outline">
                Find your class
              </Link>
            </div>
          </div>
        </aside>

        <article className="tm-reg-root tm-reg-v2-main">
          <section className="tm-reg-section tm-reg-v2-card" id="overview">
            <div className="tm-reg-v2-card_head">
              <h2 className="tm-reg-h2">Overview</h2>
              <span className="tm-reg-v2-tag">India filing</span>
            </div>
            <p className="tm-reg-lead">
              Trademark registration secures exclusive legal rights over your brand identity, such as names, logos,
              symbols, and distinctive marks used for goods or services.
            </p>
            <p>
              In India, trademark law operates under the Trade Marks Act, 1999. A typical filing includes clearance checks,
              class selection, and application submission. If examiners raise objections, responses are filed and tracked
              to closure before final grant.
            </p>
            <div className="tm-reg-v2-callout">
              <div className="tm-reg-v2-callout_k">Tip</div>
              <div className="tm-reg-v2-callout_v">
                Most avoidable delays come from wrong class scope or inconsistent use. We align the filing with how you
                actually sell.
              </div>
            </div>
            <p>
              <strong className="tm-reg-brand-strong">Trademark Firm</strong> simplifies each stage with structured
              milestones, practical documentation support, and renewal tracking so rights remain active.
            </p>
          </section>

          <section className="tm-reg-section tm-reg-v2-card" id="what-is">
          <h2 className="tm-reg-h2">What is a trademark?</h2>
          <p>
            A trademark is a form of intellectual property used to identify and distinguish one business from another.
            It may include words, logos, labels, shapes, packaging style, and combinations of visual elements where
            legally registrable.
          </p>
          <p>
            Strong marks are distinctive, consistently used, and correctly classified at filing.
          </p>
          <div className="tm-reg-v2-mini_grid">
            <div className="tm-reg-v2-mini">
              <div className="t">™ (TM)</div>
              <div className="d">Often used while the application is pending.</div>
            </div>
            <div className="tm-reg-v2-mini">
              <div className="t">®</div>
              <div className="d">Used after registration is granted (where rules allow).</div>
            </div>
          </div>
        </section>

          <section className="tm-reg-section tm-reg-v2-card" id="act">
          <h2 className="tm-reg-h2">Trade Marks Act, 1999</h2>
          <p>
            The Act governs registration, assignment, licensing, protection, and enforcement of trademark rights in India.
            Administration is handled by the Controller General of Patents, Designs and Trade Marks under the Ministry of Commerce and Industry.
          </p>
        </section>

          <section className="tm-reg-section tm-reg-v2-card" id="why">
          <h2 className="tm-reg-h2">Why register?</h2>
          <p className="tm-reg-muted">
            Registered marks are generally valid for ten years from filing and can be renewed thereafter under applicable rules.
          </p>
          <ul className="tm-reg-checklist">
            {why_register.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        </section>

          <section className="tm-reg-section tm-reg-elig tm-reg-v2-card" id="eligibility">
          <h2 className="tm-reg-h2">Eligibility</h2>
          <p>The applicant named in the form becomes the registered owner if the application is accepted.</p>
          <div className="tm-reg-chip-grid">
            {eligible_entities.map((entity) => (
              <div key={entity} className="tm-reg-chip">{entity}</div>
            ))}
          </div>
        </section>

          <section className="tm-reg-process tm-reg-v2-card" id="process">
          <h2 className="tm-reg-h2">Typical registration pathway</h2>
          <ol className="tm-steps">
            <li><strong>Search and class planning</strong> - identify conflicts and filing scope.</li>
            <li><strong>Application filing</strong> - prepare and submit form with supporting details.</li>
            <li><strong>Examination and responses</strong> - handle objections, hearings, and oppositions if any.</li>
            <li><strong>Grant and renewal cycle</strong> - maintain continuity through deadline tracking.</li>
          </ol>
        </section>

          <p className="tm-reg-disclaimer">
            This page is informational and not a substitute for case-specific legal advice.
          </p>

          <div className="tm-reg-actions">
            <Link to="/contact" className="btn-gold">
              Book Consultation <span className="arrow">-&gt;</span>
            </Link>
            <Link to="/find-your-class" className="btn-outline">
              Find your class
            </Link>
          </div>
        </article>
      </div>
    </TrademarkSubpageShell>
  );
}
