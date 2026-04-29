import { all_testimonials } from '../data/all_testimonials.js';

const offices = [
  { flag: '🇺🇸', text: 'USA — Chicago' },
  { flag: '🇬🇧', text: 'UK — London' },
  { flag: '🇮🇳', text: 'India — Noida' },
  { flag: '🇩🇪', text: 'Germany — Munich' },
  { flag: '🇦🇺', text: 'Australia — Sydney' },
];

export function TestimonialsSection() {
  return (
    <section className="test-sec">
      <div className="wrap">
        <div className="label-tag rev">
          <span style={{ background: 'rgba(200,146,42,.15)', padding: '3px 8px', borderRadius: 3 }}>
            Client Success
          </span>
        </div>
        <h2 className="heading light rev d1">Innovators Trust XYZ Company</h2>
        <p className="body-lg light rev d2" style={{ marginBottom: 28, maxWidth: 620 }}>
          Voices from medtech, AI, biotech, semiconductors, and first-time inventors — every story is about claims
          that held, deadlines met, and IP that survived examination and licensing.
        </p>
        <div className="test-grid">
          {all_testimonials.map((t, i) => (
            <div key={`${t.av}-${i}`} className={`tcard rev${i ? ` d${Math.min(i, 6)}` : ''}`}>
              <div className="t-stars">{t.stars}</div>
              <p>&quot;{t.quote}&quot;</p>
              <div className="t-author">
                <div className="t-avatar">{t.av}</div>
                <div>
                  <span className="t-name">{t.name}</span>
                  <span className="t-role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="office-strip">
          {offices.map((o) => (
            <div key={o.text} className="office-badge">
              <span>{o.flag}</span>
              {o.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
