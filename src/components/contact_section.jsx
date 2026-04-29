import { tech_area_options_contact } from '../data/tech_area_options.js';
import { gtm_push } from '../utils/gtm_push.js';

export function ContactSection() {
  return (
    <section className="contact-sec" id="contact">
      <div className="contact-inner">
        <div className="contact-left">
          <div className="label-tag revl">Start Today</div>
          <h2 className="heading revl d1">
            Build and Protect
            <br />
            Your Brand Identity
          </h2>
          <p className="revl d2">
            Do not let copycats or filing mistakes weaken your brand. Our team supports search, filing, objections,
            opposition handling, and renewals with transparent guidance.
          </p>
          <div className="check-list revl d3">
            <div className="chk">
              <div className="chk-ico">+</div>
              Free initial consultation, no commitment
            </div>
            <div className="chk">
              <div className="chk-ico">+</div>
              Guidance on classes, filing scope, and documentation
            </div>
            <div className="chk">
              <div className="chk-ico">+</div>
              Firm timeline and transparent pricing upfront
            </div>
            <div className="chk">
              <div className="chk-ico">+</div>
              Single point of contact through filing stages
            </div>
            <div className="chk">
              <div className="chk-ico">+</div>
              Ongoing support for objections, oppositions, and renewals
            </div>
          </div>
          <div className="phone-list revl d4">
            <a href="tel:+13124285732" className="ph-link">
              <span>Phone:</span> US: +1-312-428-5732
            </a>
            <a href="tel:+442079938632" className="ph-link">
              <span>Phone:</span> UK: +44-207-993-8632
            </a>
            <a href="tel:+911204522210" className="ph-link">
              <span>Phone:</span> IN: +91-120-4522210
            </a>
          </div>
        </div>
        <div className="contact-right revr">
          <h3>Request a Free Consultation</h3>
          <div className="c-sub">Typically responds within 2 business hours</div>
          <div className="field">
            <label htmlFor="contact-name">Full Name *</label>
            <input id="contact-name" type="text" placeholder="Your full name" />
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="contact-email">Email *</label>
              <input id="contact-email" type="email" placeholder="email@company.com" />
            </div>
            <div className="field">
              <label htmlFor="contact-phone">Phone</label>
              <input id="contact-phone" type="tel" placeholder="+1 000 000" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="contact-company">Company</label>
            <input id="contact-company" type="text" placeholder="Company name (optional)" />
          </div>
          <div className="field">
            <label htmlFor="contact-tech">Business Category *</label>
            <select id="contact-tech" defaultValue="">
              {tech_area_options_contact.map((o, idx) => (
                <option key={`c-${idx}`} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="contact-desc">Describe your trademark requirement</label>
            <textarea
              id="contact-desc"
              placeholder="Brand name or logo, products or services, and filing stage"
              style={{ height: 90 }}
            />
          </div>
          <button type="button" className="form-submit" onClick={() => gtm_push('contact_form')}>
            Send My Consultation Request -&gt;
          </button>
          <div className="form-privacy" style={{ marginTop: 12, fontSize: '0.66rem', color: 'var(--muted)' }}>
            Confidential. NDA available. No spam.
          </div>
        </div>
      </div>
    </section>
  );
}

