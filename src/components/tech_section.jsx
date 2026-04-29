const cells = [
  { icon: '🤖', h: 'Software & AI', p: 'ML, NLP, algorithms, SaaS, fintech' },
  { icon: '⚡', h: 'Semiconductor', p: 'IC, FPGA, RF, power electronics' },
  { icon: '🧬', h: 'Biotechnology', p: 'CRISPR, biologics, diagnostics' },
  { icon: '🌿', h: 'Clean Energy', p: 'Solar, battery, green chemistry' },
  { icon: '⚙️', h: 'Mechanical', p: 'Robotics, automotive, aerospace' },
  { icon: '🧪', h: 'Chemical & Pharma', p: 'Drug synthesis, formulations, polymers' },
];

export function TechSection() {
  return (
    <section className="tech-sec" id="expertise">
      <div className="wrap">
        <div className="label-tag rev">Technology Expertise</div>
        <h2 className="heading rev d1">Deep Technical Domain Coverage</h2>
        <p className="body-lg rev d2">
          Our team includes Ph.D. engineers, scientists, and registered patent practitioners across every
          major sector.
        </p>
        <div className="tech-grid">
          {cells.map((c, i) => (
            <div key={c.h} className={`tech-cell rev${i ? ` d${i}` : ''}`}>
              <span className="tech-icon">{c.icon}</span>
              <h4>{c.h}</h4>
              <p>{c.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
