import { useState } from 'react';
import { patent_faq_items } from '../data/patent_faq_items.js';

export function PatentFaqSection() {
  const [open_index, set_open_index] = useState(null);

  const toggle_item = (index) => {
    set_open_index((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-sec" id="faq">
      <div className="faq-layout">
        <div className="faq-side">
          <div className="label-tag revl">FAQ</div>
          <h2 className="heading revl d1">
            Common Questions
            <br />
            About Patent Services
          </h2>
          <p className="revl d2">
            Everything you need to know about protecting your intellectual property. Can&apos;t find your answer?
          </p>
          <a href="#contact" className="btn-dark revl d3">
            Ask an Expert <span className="arrow">→</span>
          </a>
        </div>
        <div className="faq-list">
          {patent_faq_items.map((item, i) => (
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
    </section>
  );
}
