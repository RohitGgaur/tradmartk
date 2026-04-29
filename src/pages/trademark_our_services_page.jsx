import { Link } from 'react-router-dom';
import { TrademarkSubpageShell } from '../components/trademark_subpage_shell.jsx';

const pillars = [
  {
    key: 'filing',
    title: 'Filings and marketplace posture',
    blurb:
      'From first briefing to examiner conversations, we align specimens, descriptions, and class coverage so storefronts and filings stay consistent.',
    icon: '🧾',
    items: [
      {
        heading: 'Domain and brand footprint',
        text: 'Align domain strategy with what you intend to register so conflicting handles do not disrupt launch plans.',
      },
      {
        heading: 'E-commerce and seller channels',
        text: 'Workups tuned for storefronts, carts, and marketplace policies across online channels.',
      },
      {
        heading: 'International filing coordination',
        text: 'Plan foreign filings when you already trade abroad or intend to expand.',
      },
      {
        heading: 'Renewal rhythm',
        text: 'Calendars, fee windows, and ownership hygiene so registrations stay active.',
      },
      {
        heading: 'Examiner response packs',
        text: 'Structured replies where the registry raises formality or substance points.',
      },
    ],
  },
  {
    key: 'objection',
    title: 'Objections and contested pathways',
    blurb:
      'Where someone challenges your mark, or you must challenge theirs, we translate registry language into clear next steps.',
    icon: '⚖️',
    items: [
      {
        heading: 'Opposition counters and defence',
        text: 'Counter statements and annexures when a contested proceeding lands on your file.',
      },
      {
        heading: 'Opposition strategy',
        text: 'Filing pathways when you lead the challenge with practical forum aware strategy.',
      },
      {
        heading: 'Objection briefing',
        text: 'Separate examiner level edits from tribunal level disputes so effort goes to the right forum.',
      },
    ],
  },
  {
    key: 'lifecycle',
    title: 'Watch, restoration and proof packs',
    blurb:
      'Marks age, owners change, and certificates are requested by banks and platforms. We keep these maintenance workflows clean.',
    icon: '🗂️',
    items: [
      {
        heading: 'Watchlists',
        text: 'Alerting when similar marks surface so you can decide whether to escalate.',
      },
      {
        heading: 'Reinstatement where lapses happened',
        text: 'Pathfinding when timelines are missed. We map what is realistically possible before making promises.',
      },
      {
        heading: 'Certificates and extracts',
        text: 'Registry ready dossiers for counterparties who need ownership and timeline proof fast.',
      },
    ],
  },
];

export function TrademarkOurServicesPage() {
  return (
    <TrademarkSubpageShell
      breadcrumb_label="Our Services"
      eyebrow="Our Services"
      title="What we offer"
      intro="We run Trademark Firm on repeatable checklists tied to dashboards, fewer spreadsheets, clearer owners, and predictable next steps."
    >
      <section className="tm-services-intro rev d2">
        <p className="tm-prose tm-offer-lead">
          You get the same scaffold whether you sell products, operate marketplaces, or scale SaaS: structured intake,
          shared notes, and status updates that are easy to understand.
        </p>
        <div className="tm-services-kpis">
          {[
            ['Milestones', 'Clear stage-by-stage updates'],
            ['Scope', 'Class plan that matches your business'],
            ['Support', 'Objections, oppositions, renewals'],
          ].map(([k, v]) => (
            <div key={k} className="tm-services-kpi">
              <div className="tm-services-kpi-k">{k}</div>
              <div className="tm-services-kpi-v">{v}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="tm-pillars">
        {pillars.map((pillar) => (
          <section key={pillar.key} className={`tm-pillar rev d${pillar.key === 'filing' ? '3' : pillar.key === 'objection' ? '4' : '5'}`}>
            <div className="tm-pillar-top">
              <div className="tm-pillar-ico" aria-hidden>
                {pillar.icon}
              </div>
              <h2 className="tm-pillar-title">{pillar.title}</h2>
            </div>
            <p className="tm-pillar-blurb">{pillar.blurb}</p>
            <ul className="tm-pillar-list">
              {pillar.items.map((row) => (
                <li key={row.heading}>
                  <span className="tm-pillar-item-title">{row.heading}</span>
                  <span className="tm-pillar-item-text">{row.text}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="tm-services-how rev d6" aria-label="How we work">
        <div className="tm-services-how-head">
          <div className="label-tag">How we work</div>
          <h2 className="heading">A calm workflow, even when the registry is not</h2>
        </div>
        <div className="tm-services-how-grid">
          {[
            ['01', 'Intake + search', 'We capture your mark, use story, categories, and geography. Then we run a clearance pass and recommend scope.'],
            ['02', 'Filing pack', 'We prepare specifications, class mapping, and supporting details so filings match how you sell.'],
            ['03', 'Tracking + responses', 'If an objection lands, we draft replies, organise evidence, and follow through hearings if needed.'],
            ['04', 'Grant + renewals', 'We document ownership, extracts, and renewal windows so the mark stays alive over time.'],
          ].map(([n, h, p]) => (
            <div key={n} className="tm-services-step">
              <div className="tm-services-step-n">{n}</div>
              <div>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="tm-services-deliver rev d6" aria-label="Deliverables and inputs">
        <div className="tm-services-deliver-grid">
          <div className="tm-services-box">
            <h3>What we typically deliver</h3>
            <ul>
              <li>Class plan and scope notes you can forward internally</li>
              <li>Filing-ready application pack and submission tracking</li>
              <li>Draft objection replies and hearing briefs where required</li>
              <li>Opposition / counter statement support when disputes arise</li>
              <li>Renewal reminders and portfolio hygiene checklists</li>
            </ul>
          </div>
          <div className="tm-services-box alt">
            <h3>What we need from you</h3>
            <ul>
              <li>Mark details (name/logo) and the exact way you use it</li>
              <li>Products/services list, channels, and near-term roadmap</li>
              <li>Entity details for ownership (applicant name, address)</li>
              <li>Any prior filings, notices, or registry communications</li>
              <li>Target markets if you plan international expansion</li>
            </ul>
          </div>
        </div>
      </section>

      <aside className="tm-services-footer rev d6">
        <p className="tm-services-footer-note">
          Service descriptions summarise common engagements. They are informational, not a promise that every remedy or
          registry route will apply to every dossier.
        </p>
        <div className="tm-services-footer-next">
          <span className="tm-services-footer-label">Explore next</span>
          <nav className="tm-services-footer-links" aria-label="Related pages">
            <Link className="tm-services-footer-chip" to="/registration">Registration</Link>
            <Link className="tm-services-footer-chip" to="/find-your-class">Find your class</Link>
            <Link className="tm-services-footer-chip" to="/about-us">About us</Link>
            <Link className="tm-services-footer-chip" to="/contact">Contact us</Link>
          </nav>
        </div>
      </aside>
    </TrademarkSubpageShell>
  );
}
