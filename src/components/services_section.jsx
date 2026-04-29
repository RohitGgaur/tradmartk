const svc_cards = [
  { ico: '📄', title: 'Provisional Patent Applications', text: 'Secure your priority date immediately. Our provisionals are comprehensive enough to support your full non-provisional — protecting 12 months of development.', num: '01', d: '' },
  { ico: '⚖️', title: 'Non-Provisional Patents', text: 'Full specifications with robust independent and dependent claims, detailed drawings, and enablement — ready for USPTO and EPO examination.', num: '02', d: 'd1' },
  { ico: '🌍', title: 'PCT International Applications', text: 'Single WIPO PCT filing covering 150+ countries. We manage jurisdiction-specific requirements and national phase entries across your target markets.', num: '03', d: 'd2' },
  { ico: '💊', title: 'Biotechnology & Pharma', text: 'Life sciences specialists handle sequence listings, method claims, and composition claims — meeting the stringent enablement demands of biotech patents.', num: '04', d: 'd3' },
  { ico: '💻', title: 'Software & AI Patents', text: 'Navigate the Alice/Mayo framework with claim strategies that protect your algorithms and models without triggering abstract idea rejections.', num: '05', d: 'd4' },
  { ico: '⚙️', title: 'Mechanical & Industrial', text: 'Detailed mechanical drawings, method and apparatus claims for hardware innovations — from consumer products to complex industrial machinery.', num: '06', d: 'd5' },
];

export function ServicesSection() {
  return (
    <section className="services-sec" id="services">
      <div className="svc-header">
        <div>
          <div className="label-tag rev">Our Services</div>
          <h2 className="heading rev d1">
            Complete Patent
            <br />
            Drafting Coverage
          </h2>
        </div>
        <p className="body-lg rev d2" style={{ maxWidth: 400 }}>
          From provisional applications to complex PCT filings — crafted with technical depth and strategic
          foresight.
        </p>
      </div>
      <div className="svc-grid">
        {svc_cards.map((c) => (
          <div key={c.num} className={`svc-card rev${c.d ? ` ${c.d}` : ''}`}>
            <div className="svc-ico">{c.ico}</div>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
            <div className="svc-num">{c.num}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
