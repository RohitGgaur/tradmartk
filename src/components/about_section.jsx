export function AboutSection() {
  return (
    <div className="about-sec">
      <div className="about-left">
        <div className="label-tag rev">The Problem</div>
        <h2 className="heading rev d1">A Weak Patent Is Worse Than No Patent</h2>
        <p className="body-lg rev d2">
          Most patent drafting mistakes aren&apos;t discovered until litigation — when it&apos;s too late and
          the costs are catastrophic. Poor claim drafting gives competitors legal room to copy your
          innovation.
        </p>
        <p className="body-lg rev d3" style={{ marginTop: 16 }}>
          XYZ Company&apos;s drafters are technical experts <em>and</em> legal strategists. We don&apos;t
          just document your invention — we build a defensive fortress around it.
        </p>
        <div className="about-pills rev d4">
          <span className="ap">Technically rigorous specs</span>
          <span className="ap">Strategically crafted claims</span>
          <span className="ap">Litigation-ready language</span>
          <span className="ap">Full embodiment coverage</span>
        </div>
        <div style={{ marginTop: 32 }} className="rev d5">
          <a href="#contact" className="btn-dark">
            Protect My Innovation <span className="arrow">→</span>
          </a>
        </div>
      </div>
      <div className="about-right">
        <div className="label-tag revl" style={{ color: 'rgba(200,146,42,.7)' }}>
          Risk Assessment
        </div>
        <div className="error-card revl d1">
          <div className="ec-head">
            <div className="ec-dots">
              <div className="ec-d r" />
              <div className="ec-d y" />
              <div className="ec-d g" />
            </div>
            <div className="ec-title">poorly_drafted_patent.pdf — Vulnerabilities Found</div>
          </div>
          <div className="ec-body">
            <div className="ec-row">
              <div className="ec-x">✕</div>
              <div className="ec-text">
                <strong>Overly Narrow Claims</strong>
                <span>Competitors design around your patent with minor modifications — costing millions.</span>
              </div>
            </div>
            <div className="ec-row">
              <div className="ec-x">✕</div>
              <div className="ec-text">
                <strong>Indefinite Language</strong>
                <span>Vague claim terms trigger USPTO rejections and costly delays.</span>
              </div>
            </div>
            <div className="ec-row">
              <div className="ec-x">✕</div>
              <div className="ec-text">
                <strong>Missing Embodiments</strong>
                <span>Key variations left unprotected — competitors exploit every gap.</span>
              </div>
            </div>
            <div className="ec-row">
              <div className="ec-x">✕</div>
              <div className="ec-text">
                <strong>Enablement Failures</strong>
                <span>Insufficient disclosure means your patent gets invalidated during litigation.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="risk-badge revl d2">
          <span className="risk-num">94%</span>
          <span>
            of weak patents
            <br />
            fail in litigation
          </span>
        </div>
      </div>
    </div>
  );
}
