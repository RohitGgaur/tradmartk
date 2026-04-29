export function CtaBanner() {
  return (
    <div className="cta-banner">
      <div className="cta-inner rev">
        <div className="label-tag" style={{ justifyContent: 'center', color: 'rgba(200,146,42,.7)' }}>
          Don&apos;t Wait — File First
        </div>
        <h2>
          Your Competitors Are
          <br />
          Filing Right Now.
        </h2>
        <p>
          Patent protection is first-come, first-served. Every day you delay is an opportunity for someone
          else to claim your innovation. Let&apos;s secure it — together.
        </p>
        <div className="cta-btns">
          <a href="#contact" className="btn-gold">
            Get Free Consultation <span className="arrow">→</span>
          </a>
          <a href="mailto:info@xyzcompany.com" className="btn-ghost">
            Email Us Directly
          </a>
        </div>
        <div className="cta-guarantee">🔒 100% Confidential · NDA Available · No Commitment Required</div>
      </div>
    </div>
  );
}
