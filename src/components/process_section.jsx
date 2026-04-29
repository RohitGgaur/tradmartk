const steps = [
  { n: '01', title: 'Invention Discovery', text: 'Deep consultation to extract the full technical scope, identify all embodiments, and map the competitive landscape to inform claim strategy.' },
  { n: '02', title: 'Prior Art & Claim Strategy', text: 'Comprehensive prior art analysis to find the whitespace. We design a claim tree with maximum-breadth independent claims and hedging dependents.' },
  { n: '03', title: 'Technical Drawings', text: 'Professional patent drawings that satisfy USPTO/EPO requirements — supporting every claim limitation with precise visual disclosure.' },
  { n: '04', title: 'Full Specification', text: 'Complete spec including background, summary, detailed description, claims, and abstract — crafted for enablement and written description compliance.' },
  { n: '05', title: 'Client Review & Revision', text: 'You review and provide feedback. Typically two rounds of revisions until you\'re fully satisfied with scope and language before filing.' },
  { n: '06', title: 'Filing & Prosecution', text: 'We file directly with the patent office and provide ongoing prosecution support — office action responses, continuations, and monitoring.' },
];

export function ProcessSection() {
  return (
    <section className="process-sec" id="process">
      <div className="wrap">
        <div className="process-header">
          <div>
            <div className="label-tag rev">
              <span style={{ background: 'rgba(200,146,42,.15)', padding: '3px 8px', borderRadius: 3 }}>
                Our Methodology
              </span>
            </div>
            <h2 className="heading light rev d1">
              Our 6-Phase
              <br />
              Drafting Process
            </h2>
          </div>
          <p className="body-lg light rev d2">
            A structured, transparent process that turns your invention disclosure into a battle-ready patent
            application — with clear milestones at every step.
          </p>
        </div>
        <div className="steps-grid">
          {steps.map((s, i) => (
            <div key={s.n} className={`step rev${i ? ` d${i}` : ''}`}>
              <div className="step-num">{s.n}</div>
              <div className="step-icon">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
