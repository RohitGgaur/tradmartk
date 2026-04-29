import { useState } from 'react';
import { faq_items } from '../data/faq_items.js';

export function FaqSection() {
  const [open_index, set_open_index] = useState(null);

  const toggle_item = (index) => {
    set_open_index((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-sec" id="faq">
      <div className="wrap">
        <div className="faq-layout">
          <div className="faq-side">
            <div className="label-tag revl">FAQ</div>
            <h2 className="heading revl d1">
              Frequently
              <br />
              Asked Questions
            </h2>
            <p className="revl d2">
              Everything you need to know about our patent drafting process. Still have questions?
            </p>
            <a href="#contact" className="btn-dark revl d3">
              Ask an Expert <span className="arrow">→</span>
            </a>
          </div>
          <div className="faq-list">
            {faq_items.map((item, i) => (
              <div
                key={item.q}
                className={`faq-item rev${open_index === i ? ' open' : ''}${i ? ` d${i}` : ''}`}
              >
                <div
                  className="faq-q"
                  onClick={() => toggle_item(i)}
                  onKeyDown={(e) => e.key === 'Enter' && toggle_item(i)}
                  role="button"
                  tabIndex={0}
                >
                  <span className="faq-qt">{item.q}</span>
                  <div className="faq-tog">+</div>
                </div>
                <div className="faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
