import { tech_area_options } from '../data/tech_area_options.js';
import { gtm_push } from '../utils/gtm_push.js';

export function HeroSection() {
  return (
    <section className="hero">
      <div className="h-grid" />
      <div className="h-glow" />

      <div className="hero-left">
        <div className="hero-eyebrow">
          <div className="hero-eyebrow-line" />
          <span>Precision IP Protection Since 2009</span>
        </div>
        <h1>
          Ironclad
          <br />
          <span className="outline">Patents That</span>
          <br />
          <em>Defend & Win</em>
        </h1>
        <p className="hero-desc">
          Your breakthrough deserves <strong>world-class legal protection.</strong> Our Ph.D.-level patent
          attorneys craft applications that withstand the toughest USPTO and EPO examinations — securing
          the broadest claims for your innovation.
        </p>
        <div className="hero-btns">
          <a href="#contact" className="btn-gold">
            Get Free Consultation <span className="arrow">→</span>
          </a>
          <a href="#process" className="btn-ghost">
            See Our Process
          </a>
        </div>
        <div className="hero-trust">
          <div className="trust-item">
            <span className="trust-num">
              50K<span style={{ color: 'var(--gold)', fontSize: '1rem' }}>+</span>
            </span>
            <span className="trust-lbl">Patents Filed</span>
          </div>
          <div className="trust-sep" />
          <div className="trust-item">
            <span className="trust-num">
              65<span style={{ color: 'var(--gold)', fontSize: '1rem' }}>+</span>
            </span>
            <span className="trust-lbl">Countries</span>
          </div>
          <div className="trust-sep" />
          <div className="trust-item">
            <span className="trust-num">
              98<span style={{ color: 'var(--gold)', fontSize: '1rem' }}>%</span>
            </span>
            <span className="trust-lbl">Grant Rate</span>
          </div>
          <div className="trust-sep" />
          <div className="trust-item">
            <span className="trust-num">
              15<span style={{ color: 'var(--gold)', fontSize: '1rem' }}>+</span>
            </span>
            <span className="trust-lbl">Yrs Experience</span>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-right-inner">
          <div className="hero-engage">
            <div className="hero-engage-tag">What we do for inventors & teams</div>
            <h3>Full-spectrum patent services — from first sketch to granted claims</h3>
            <ul>
              <li>
                <strong style={{ color: 'var(--navy)' }}>Patent drafting &amp; prosecution</strong> — specifications,
                claims, and drawings tuned for USPTO, EPO, and PCT.
              </li>
              <li>
                <strong style={{ color: 'var(--navy)' }}>Searches &amp; strategy</strong> — know what is patentable
                before you invest.
              </li>
              <li>
                <strong style={{ color: 'var(--navy)' }}>Global filing</strong> — one team coordinating 65+ countries
                with consistent quality.
              </li>
              <li>
                <strong style={{ color: 'var(--navy)' }}>Confidential by default</strong> — NDA first, then we listen.
              </li>
            </ul>
          </div>
          <div className="hero-right-spacer" aria-hidden="true" />
          <div className="form-card" id="hero-form">
            <div className="fc-badge">Free Consultation</div>
            <h3>
              Protect Your
              <br />
              Innovation Today
            </h3>
            <p className="fc-sub">No commitment · NDA available · Responds in 2hrs</p>
            <div className="field">
              <label htmlFor="hero-name">Full Name *</label>
              <input id="hero-name" type="text" placeholder="Your full name" />
            </div>
            <div className="field-row">
              <div className="field">
                <label htmlFor="hero-email">Email *</label>
                <input id="hero-email" type="email" placeholder="email@company.com" />
              </div>
              <div className="field">
                <label htmlFor="hero-phone">Phone</label>
                <input id="hero-phone" type="tel" placeholder="+1 000 000 0000" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="hero-tech">Technology Area</label>
              <select id="hero-tech" defaultValue="">
                {tech_area_options.map((o, idx) => (
                  <option key={`hero-tech-${idx}`} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="hero-brief">Invention Brief</label>
              <textarea id="hero-brief" placeholder="Describe your invention in 2–3 sentences..." />
            </div>
            <button type="button" className="form-submit" onClick={() => gtm_push('hero_form')}>
              Request Free Consultation →
            </button>
            <div className="form-privacy">🔒 100% Confidential &nbsp;·&nbsp; NDA Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
