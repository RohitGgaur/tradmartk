import { DotTrail } from '../components/dot_trail.jsx';
import { TopBar } from '../components/top_bar.jsx';
import { MainNavigation } from '../components/main_navigation.jsx';
import { StatsBar } from '../components/stats_bar.jsx';
import { PatentFaqSection } from '../components/patent_faq_section.jsx';
import { FooterSection } from '../components/footer_section.jsx';
import { ProgressBar } from '../components/progress_bar.jsx';
import { use_landing_effects } from '../hooks/use_landing_effects.js';
import { use_scroll_progress } from '../hooks/use_scroll_progress.js';
import { tech_area_options } from '../data/tech_area_options.js';
import { patent_service_needed_options } from '../data/patent_contact_options.js';
import { Link } from 'react-router-dom';
import { ImageShowcaseSection } from '../components/image_showcase_section.jsx';
import img_showcase_services from '../images/Image3.jpeg';

const patent_mq_row = (
  <>
    <span className="mq-item">
      <b>USPTO</b> Filings<span className="mq-dot" />
    </span>
    <span className="mq-item">
      <b>EPO</b> Applications<span className="mq-dot" />
    </span>
    <span className="mq-item">
      <b>WIPO</b> PCT Filing<span className="mq-dot" />
    </span>
    <span className="mq-item">
      <b>50K+</b> Patents Granted<span className="mq-dot" />
    </span>
    <span className="mq-item">
      <b>65+</b> Countries Covered<span className="mq-dot" />
    </span>
    <span className="mq-item">
      <b>Fortune 500</b> Trusted<span className="mq-dot" />
    </span>
    <span className="mq-item">
      <b>98.7%</b> Grant Rate<span className="mq-dot" />
    </span>
    <span className="mq-item">
      Ph.D. Level <b>Attorneys</b>
      <span className="mq-dot" />
    </span>
  </>
);

const svc_main_cards = [
  { ico: '📄', title: 'Provisional Patent Applications', text: 'Secure your priority date in 24 hours. Our provisionals are technically comprehensive — detailed enough to fully support your non-provisional and protect every embodiment you develop in the next 12 months.', tag: 'Priority Date Protection', num: '01', d: '' },
  { ico: '⚖️', title: 'Non-Provisional Patent Drafting', text: 'Our flagship service. Full specifications with maximally broad independent claims, strategically nested dependents, professional drawings, and complete enablement — built to survive the toughest examination.', tag: 'Core Flagship Service', num: '02', d: 'd1', featured: true },
  { ico: '🌍', title: 'PCT International Applications', text: 'One WIPO filing protects you in 150+ countries. We manage jurisdiction-specific claims, translations, national phase entries, and office action responses across all your target markets.', tag: '150+ Countries', num: '03', d: 'd2' },
  { ico: '📨', title: 'Office Action Responses', text: "USPTO or EPO rejections don't have to be the end. Our prosecution specialists craft compelling arguments and amendments that overcome § 102, § 103, and § 112 rejections — with an 96% allowance rate on responses.", tag: '96% Allowance Rate', num: '04', d: 'd1' },
  { ico: '🔍', title: 'Patentability & Prior Art Search', text: 'Know before you file. Our comprehensive searches cover USPTO, EPO Espacenet, WIPO PatentScope, and non-patent literature — giving you a clear picture of patentability and freedom to operate.', tag: 'Before You File', num: '05', d: 'd2' },
  { ico: '🗂️', title: 'Patent Portfolio Management', text: "Manage, maintain, and monetize your IP assets. From annuity payment tracking to strategic prosecution alignment, we optimize your portfolio's value while minimizing overhead and lapse risk.", tag: 'Ongoing Management', num: '06', d: 'd3' },
  { ico: '💻', title: 'Software & AI Patents', text: 'Navigate Alice/Mayo with claim strategies that actually work. We protect algorithms, machine learning models, and SaaS platforms through a technical framing that sidesteps abstract idea rejections.', tag: 'Alice/Mayo Strategy', num: '07', d: 'd2' },
  { ico: '🧬', title: 'Biotech & Pharma Patents', text: 'Life sciences demand exceptional precision. Our specialists handle sequence listings, composition of matter claims, method claims, and the 112(a) written description standard required by BPAI.', tag: 'Life Sciences Specialist', num: '08', d: 'd3' },
  { ico: '⚙️', title: 'Mechanical & Industrial Patents', text: 'Detailed technical drawings and apparatus claims for hardware innovations — from consumer electronics to complex industrial machinery, precision instruments, and manufacturing processes.', tag: 'Hardware Expertise', num: '09', d: 'd4' },
];

const timeline_items = [
  { n: '01', h: 'Free Consultation & NDA', p: 'We sign a mutual NDA before you share a single detail. Then a 60-minute deep dive with your dedicated attorney to understand the invention and identify the right protection strategy.', tag: 'Day 1', d: '' },
  { n: '02', h: 'Invention Disclosure & Discovery', p: 'Structured inventor interviews extract all embodiments, variations, and alternative implementations. We map the complete technical scope to ensure nothing is left unprotected.', tag: 'Days 2–4', d: 'd1' },
  { n: '03', h: 'Prior Art Search & Claim Strategy', p: 'Comprehensive search across USPTO, EPO, WIPO, and NPL databases. We identify the exact whitespace where your broadest claims can be staked — building a claim tree for maximum protection.', tag: 'Days 3–6', d: 'd2' },
  { n: '04', h: 'Technical Drawings & Figures', p: 'Professional patent drawings prepared by draftsmen who specialize in USPTO/EPO figure requirements — supporting every claim limitation with precise visual disclosure.', tag: 'Days 5–10', d: 'd3' },
  { n: '05', h: 'Full Specification Drafting', p: 'Complete patent specification — background, summary, detailed description, all claims, and abstract — crafted for enablement, written description compliance, and strategic breadth.', tag: 'Days 10–21', d: 'd4' },
  { n: '06', h: 'Client Review & Revision Rounds', p: "Two rounds of structured revisions until you are fully satisfied with the scope, language, and coverage. You see everything before it's filed — no surprises.", tag: 'Days 21–28', d: 'd5' },
  { n: '07', h: 'Filing & Active Prosecution', p: 'We file directly with the patent office and provide ongoing prosecution support throughout examination — office action responses, continuations, RCEs, and grant monitoring.', tag: 'Ongoing', d: 'd6' },
];

const tech_domain_cards = [
  { count: '50K+ Patents', icon: '🤖', h: 'Software & AI / ML', p: 'Machine learning, NLP, computer vision, algorithms, SaaS platforms, fintech, blockchain' },
  { count: '8K+ Patents', icon: '⚡', h: 'Semiconductor & Electronics', p: 'Integrated circuits, FPGA, RF systems, power electronics, sensors, PCB design' },
  { count: '6K+ Patents', icon: '🧬', h: 'Biotechnology', p: 'CRISPR/gene editing, biologics, diagnostics, protein engineering, biosensors' },
  { count: '4K+ Patents', icon: '💊', h: 'Pharmaceuticals', p: 'Small molecules, formulation patents, method of treatment, drug delivery systems' },
  { count: '7K+ Patents', icon: '⚙️', h: 'Mechanical & Industrial', p: 'Precision machinery, manufacturing processes, robotics, automation, tooling' },
  { count: '3K+ Patents', icon: '🌿', h: 'Clean Energy', p: 'Solar technology, battery storage, hydrogen fuel cells, green chemistry, EV systems' },
  { count: '5K+ Patents', icon: '🏥', h: 'Medical Devices', p: 'Class II & III devices, surgical instruments, implants, wearable health tech, diagnostics' },
  { count: '4K+ Patents', icon: '🛡️', h: 'Defense & Aerospace', p: 'Navigation systems, materials science, advanced propulsion, communication technology' },
];

const pricing_cards = [
  { tier: 'Startup', name: 'Provisional Shield', desc: 'Establish your priority date fast. Perfect for early-stage inventions with 12 months to develop further.', cta: 'outline', cta_text: 'Get a Quote →', d: '', features: [{ ok: true, t: 'Comprehensive provisional specification' }, { ok: true, t: 'Inventor interview (90 min)' }, { ok: true, t: 'Basic patent drawings included' }, { ok: true, t: 'USPTO filing support' }, { ok: true, t: 'NDA before disclosure' }, { ok: false, t: 'PCT/international strategy' }, { ok: false, t: 'Claims prosecution support' }] },
  { tier: 'Most Popular', name: 'Full Patent Protection', desc: 'The complete non-provisional package. Strategically drafted for maximum breadth and examination readiness.', cta: 'solid', cta_text: 'Get a Quote →', d: 'd2', highlight: true, features: [{ ok: true, t: 'Complete non-provisional specification' }, { ok: true, t: 'Prior art & patentability search' }, { ok: true, t: 'Professional patent drawings' }, { ok: true, t: 'Two revision rounds included' }, { ok: true, t: 'Prosecution support (1 OA)' }, { ok: true, t: 'PCT filing strategy session' }, { ok: true, t: 'Dedicated attorney — cradle to grant' }] },
  { tier: 'Enterprise', name: 'Global IP Portfolio', desc: 'For companies building serious IP moats. Full PCT strategy, multi-jurisdiction management, and ongoing prosecution.', cta: 'outline', cta_text: 'Contact Us →', d: 'd4', features: [{ ok: true, t: 'Everything in Full Protection' }, { ok: true, t: 'PCT application + 5 national phases' }, { ok: true, t: 'Unlimited prosecution OA responses' }, { ok: true, t: 'Portfolio audit & gap analysis' }, { ok: true, t: 'Annuity tracking & management' }, { ok: true, t: 'IP strategy consulting sessions' }, { ok: true, t: 'Dedicated partner-level attorney' }] },
];

const trust_badges = [
  { flag: '🇺🇸', text: ' USPTO Registered' },
  { flag: '🇪🇺', text: ' EPO Authorised' },
  { flag: '🌍', text: ' WIPO PCT Agent' },
  { flag: '🏆', text: ' IAM 1000 Ranked' },
  { flag: '⭐', text: ' IP Stars 2024' },
  { flag: '🔒', text: ' ISO 27001 Certified' },
  { flag: '🇮🇳', text: ' Indian Patent Office' },
  { flag: '🤝', text: ' Fortune 500 Trusted' },
];

export function PatentServicesPage() {
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
        <span className="cur">Patent Services</span>
      </div>

      <section className="hero">
        <div className="h-grid" />
        <div className="h-glow" />
        <div className="h-ring" />
        <div className="h-ring2" />
        <div className="hero-content">
          <div className="hero-badge">
            <div className="hero-badge-dot" />
            Complete Patent Protection Suite
          </div>
          <h1>
            Every Patent Service
            <br />
            Your <em>Innovation</em>
            <br />
            <span className="outline">Will Ever Need</span>
          </h1>
          <p className="hero-sub">
            From <strong>provisional filings</strong> to <strong>global PCT applications</strong>, office action responses to
            litigation support — XYZ Company provides end-to-end intellectual property protection backed by 15+ years
            and 50,000+ granted patents.
          </p>
          <div className="hero-btns">
            <a href="#contact" className="btn-gold">
              Start Free Consultation <span className="arrow">→</span>
            </a>
            <a href="#services" className="btn-ghost">
              Explore Services
            </a>
          </div>
          <div className="hero-pills">
            {['USPTO Filings', 'EPO Applications', 'WIPO PCT', 'Office Action Response', 'Patent Searches', 'IP Strategy', 'Litigation Support', 'Portfolio Management'].map((label) => (
              <div key={label} className="hero-pill">
                <div className="hero-pill-dot" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="marquee">
        <div className="mq-track">
          {patent_mq_row}
          {patent_mq_row}
        </div>
      </div>

      <StatsBar />

      <section className="services-main" id="services">
        <div className="svc-intro">
          <div>
            <div className="label-tag revl">Our Services</div>
            <h2 className="heading revl d1">
              Full-Suite
              <br />
              Patent Protection
            </h2>
          </div>
          <p className="body-lg revr">
            Whether you&apos;re a solo inventor protecting your first breakthrough or a Fortune 500 managing a global IP
            portfolio — we have the exact service you need, delivered by specialists who live and breathe patent law.
          </p>
        </div>

        <div className="svc-grid-main">
          {svc_main_cards.map((c) => (
            <div key={c.num} className={`svc-card rev${c.featured ? ' featured' : ''}${c.d ? ` ${c.d}` : ''}`}>
              <div className="svc-ico">{c.ico}</div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <div className="svc-tag">{c.tag}</div>
              <div className="svc-num">{c.num}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="compare-sec">
        <div className="wrap">
          <div className="label-tag rev">Why It Matters</div>
          <h2 className="heading rev d1" style={{ marginBottom: 48 }}>
            Generic Firm vs. XYZ Company
          </h2>
          <div className="compare-inner">
            <div className="compare-col rev">
              <div className="cmp-head bad">❌ &nbsp; Generic Patent Firm</div>
              <div className="cmp-body">
                {[
                  ['Template-Based Drafting', 'Boilerplate specs with narrow claims that competitors can easily design around — costing millions in lost exclusivity.'],
                  ['No Technical Depth', "Attorneys who don't understand your technology miss critical embodiments, leaving gaps your competitors will exploit."],
                  ['Slow & Opaque Process', "Weeks of silence, unclear timelines, and surprise bills. You don't know what you're getting until it's too late."],
                  ['No Prosecution Support', "File and forget. When the office action arrives, you're handed off to another attorney who doesn't know your case."],
                  ['Single-Jurisdiction Thinking', 'Applications drafted for USPTO only — not built for the international protection modern businesses need.'],
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
              <div className="cmp-head good">✓ &nbsp; XYZ Company</div>
              <div className="cmp-body">
                {[
                  ['Strategic Claim Architecture', 'Maximally broad independent claims with a defense-in-depth dependent tree that survives design-arounds and inter partes review.'],
                  ['Ph.D.-Level Technical Specialists', 'Attorneys matched to your exact technology domain — they understand your invention at publication level, not a summary.'],
                  ['Transparent Milestones & Pricing', 'Fixed timelines, milestone reviews, and clear pricing — you know exactly what happens at every step, with no hidden fees.'],
                  ['Dedicated Attorney — Cradle to Grant', 'Your assigned attorney drafts, prosecutes, and responds to every office action. One point of contact, full continuity.'],
                  ['Built for Global Protection', 'Every specification is drafted with PCT and national phase strategy in mind — protecting you in 65+ countries from day one.'],
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
        label="Global practice"
        heading={
          <>
            Filings &amp; partnerships
            <br />
            worldwide
          </>
        }
        description="USPTO, EPO, and WIPO-aligned workflows — local depth with the reach your portfolio needs."
        items={[
          {
            src: img_showcase_services,
            alt: 'How filings work across jurisdictions — USPTO, EPO, WIPO, and national phases',
            caption:
              'Multi-jurisdiction support and attorney-led collaboration — one team from filing through grant.',
          },
        ]}
      />

      <section className="process-sec" id="process">
        <div className="process-wrap">
          <div className="process-left">
            <div className="label-tag revl" style={{ color: 'rgba(200,146,42,.7)' }}>
              Our Methodology
            </div>
            <h2 className="heading light revl d1">
              How We Protect
              <br />
              Your Innovation
            </h2>
            <p className="revl d2">
              A structured, transparent 7-phase process that turns your invention disclosure into a battle-ready patent
              — with clear milestones, no surprises, and your dedicated attorney at every step.
            </p>
            <a href="#contact" className="btn-gold revl d3">
              Start Today <span className="arrow">→</span>
            </a>
          </div>
          <div className="timeline">
            {timeline_items.map((t) => (
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

      <section className="tech-sec" id="expertise">
        <div className="tech-header">
          <div>
            <div className="label-tag revl">Technology Expertise</div>
            <h2 className="heading revl d1">
              Deep Domain Coverage
              <br />
              Across Every Sector
            </h2>
          </div>
          <p className="body-lg revr" style={{ maxWidth: 400 }}>
            Our team includes Ph.D. engineers, scientists, and registered patent practitioners in every major technology
            sector.
          </p>
        </div>
        <div className="tech-grid">
          {tech_domain_cards.map((c, i) => (
            <div key={c.h} className={`tech-card rev${i ? ` d${Math.min(i, 6)}` : ''}`}>
              <div className="tech-count">{c.count}</div>
              <span className="tech-icon">{c.icon}</span>
              <h4>{c.h}</h4>
              <p>{c.p}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pricing-sec" id="pricing">
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: 8 }}>
            <div className="label-tag rev" style={{ justifyContent: 'center' }}>
              Transparent Pricing
            </div>
          </div>
          <h2 className="heading rev d1" style={{ textAlign: 'center', marginBottom: 12 }}>
            Choose Your Protection Level
          </h2>
          <p className="body-lg rev d2" style={{ textAlign: 'center', margin: '0 auto 0', maxWidth: 500 }}>
            All plans include a dedicated attorney, NDA upfront, and firm delivery timelines. No hidden fees.
          </p>
        </div>
        <div className="pricing-grid">
          {pricing_cards.map((card) => (
            <div key={card.name} className={`price-card rev${card.highlight ? ' highlight' : ''}${card.d ? ` ${card.d}` : ''}`}>
              <div className="price-tier">{card.tier}</div>
              <div className="price-name">{card.name}</div>
              <div className="price-desc">{card.desc}</div>
              <div className="price-features">
                {card.features.map((f) => (
                  <div key={f.t} className="pf">
                    <div className={`pf-chk ${f.ok ? 'ok' : 'na'}`}>{f.ok ? '✓' : '–'}</div>
                    {f.t}
                  </div>
                ))}
              </div>
              <a href="#contact" className={`price-cta ${card.cta}`}>
                {card.cta_text}
              </a>
            </div>
          ))}
        </div>
        <p className="price-note rev">
          All prices depend on technology complexity. <strong>Free consultation</strong> — we&apos;ll give you a firm quote
          before any commitment.
        </p>
      </section>

      <section className="trust-sec">
        <div className="trust-header rev">
          <p>Trusted by companies across every industry — from first-time inventors to global enterprises</p>
        </div>
        <div className="trust-logos rev d1">
          {trust_badges.map((b) => (
            <div key={b.text} className="trust-badge">
              <span>{b.flag}</span>
              {b.text}
            </div>
          ))}
        </div>
      </section>

      <PatentFaqSection />

      <section className="contact-sec" id="contact">
        <div className="contact-inner">
          <div className="contact-left">
            <div className="label-tag revl">Get Started</div>
            <h2 className="heading revl d1">
              Protect Your Innovation
              <br />
              Starting Today
            </h2>
            <p className="revl d2">
              Your breakthrough deserves world-class IP protection. Our specialists are ready to assess your invention,
              explain your options, and build a strategy — no commitment required.
            </p>
            <div className="check-list revl d3">
              <div className="chk">
                <div className="chk-ico">✓</div>Free 60-minute consultation with a specialist attorney
              </div>
              <div className="chk">
                <div className="chk-ico">✓</div>NDA signed before any invention disclosure
              </div>
              <div className="chk">
                <div className="chk-ico">✓</div>Firm quote and timeline — no hidden fees
              </div>
              <div className="chk">
                <div className="chk-ico">✓</div>Dedicated attorney as your single point of contact
              </div>
              <div className="chk">
                <div className="chk-ico">✓</div>Responds within 2 business hours
              </div>
            </div>
            <div className="phone-list revl d4">
              <a href="tel:+13124285732" className="ph-link">
                <span>📞</span>US: +1-312-428-5732
              </a>
              <a href="tel:+442079938632" className="ph-link">
                <span>📞</span>UK: +44-207-993-8632
              </a>
              <a href="tel:+911204522210" className="ph-link">
                <span>📞</span>IN: +91-120-4522210
              </a>
            </div>
          </div>
          <div className="contact-right revr">
            <h3>Request Free Consultation</h3>
            <div className="c-sub">Responds within 2 business hours · NDA available</div>
            <div className="field">
              <label htmlFor="ps-contact-name">Full Name *</label>
              <input id="ps-contact-name" type="text" placeholder="Your full name" />
            </div>
            <div className="field-row">
              <div className="field">
                <label htmlFor="ps-contact-email">Email *</label>
                <input id="ps-contact-email" type="email" placeholder="email@company.com" />
              </div>
              <div className="field">
                <label htmlFor="ps-contact-phone">Phone</label>
                <input id="ps-contact-phone" type="tel" placeholder="+1 000 000 0000" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="ps-contact-company">Company</label>
              <input id="ps-contact-company" type="text" placeholder="Company name (optional)" />
            </div>
            <div className="field">
              <label htmlFor="ps-service">Service Needed *</label>
              <select id="ps-service" defaultValue="">
                {patent_service_needed_options.map((o, idx) => (
                  <option key={`svc-${idx}`} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="ps-tech">Technology Area</label>
              <select id="ps-tech" defaultValue="">
                {tech_area_options.map((o, idx) => (
                  <option key={`ta-${idx}`} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="ps-brief">Brief Description</label>
              <textarea id="ps-brief" placeholder="Tell us about your invention or IP needs in 2–3 sentences..." />
            </div>
            <button type="button" className="form-submit">
              Send My Consultation Request →
            </button>
            <div className="form-privacy">🔒 Strictly confidential · NDA available · No spam ever</div>
          </div>
        </div>
      </section>

      <div className="cta-banner">
        <div className="cta-inner rev">
          <div className="label-tag" style={{ justifyContent: 'center', color: 'rgba(200,146,42,.7)' }}>
            Don&apos;t Wait — File First
          </div>
          <h2>
            Your Competitor Is
            <br />
            Filing Right <em>Now.</em>
          </h2>
          <p>
            Patent protection is strictly first-come, first-served. Every day you delay is an opportunity for someone else
            to claim your innovation. The cost of filing is nothing compared to the cost of losing your patent rights.
          </p>
          <div className="cta-btns">
            <a href="#contact" className="btn-gold">
              Get Free Consultation <span className="arrow">→</span>
            </a>
            <a href="mailto:info@xyzcompany.com" className="btn-ghost">
              Email Us Directly
            </a>
          </div>
          <div className="cta-guarantee">🔒 100% Confidential &nbsp;·&nbsp; NDA Available &nbsp;·&nbsp; No Commitment Required</div>
        </div>
      </div>

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
