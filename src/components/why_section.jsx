const cards = [
  { ico: '🎓', h: 'Ph.D. Technical Experts', p: 'Every patent drafted by a subject-matter expert with advanced technical credentials in your exact field.' },
  { ico: '⚡', h: '2–6 Week Delivery', p: 'Firm timelines communicated upfront. Rush delivery available for time-sensitive applications.' },
  { ico: '🌐', h: '65+ Country Filing', p: 'Single point of contact for global patent strategy — we manage every jurisdiction\'s specific requirements.' },
  { ico: '🔒', h: 'NDA Protected', p: 'Strict confidentiality protocols. Fortune 500 security standards. NDA before any disclosure.' },
];

export function WhySection() {
  return (
    <section className="why-sec">
      <div className="wrap">
        <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 0' }}>
          <div className="label-tag rev" style={{ justifyContent: 'center' }}>
            Why XYZ Company
          </div>
          <h2 className="heading rev d1">
            The Difference That
            <br />
            Wins in Court
          </h2>
        </div>
        <div className="why-grid" style={{ marginTop: 48 }}>
          {cards.map((c, i) => (
            <div key={c.h} className={`why-card rev${i ? ` d${i}` : ''}`}>
              <span className="why-ico">{c.ico}</span>
              <h4>{c.h}</h4>
              <p>{c.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
