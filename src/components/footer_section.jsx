import { Link } from 'react-router-dom';

export function FooterSection() {
  return (
    <footer>
      <div className="foot-grid">
        <div className="foot-brand">
          <div className="f-logo">
            Trademark Firm<span style={{ color: 'var(--gold)', marginLeft: 2 }}>.</span>
          </div>
          <p>
            Technology-enabled trademark support for founders and established teams. Search, filing, objection handling,
            opposition support, and renewals across key markets.
          </p>
          <div className="foot-contacts">
            <a href="mailto:info@trademarkfirm.com">Email: info@trademarkfirm.com</a>
            <a href="tel:+13124285732">US: +1-312-428-5732</a>
            <a href="tel:+911204522210">IN: +91-120-4522210</a>
          </div>
        </div>
        <div className="foot-col">
          <h5>Trademark Services</h5>
          <Link to="/registration">Trademark Registration</Link>
          <Link to="/our-services">Objection Replies</Link>
          <Link to="/our-services">Opposition Support</Link>
          <Link to="/our-services">Renewals and Restoration</Link>
          <Link to="/find-your-class">Class Advisory</Link>
        </div>
        <div className="foot-col">
          <h5>Company</h5>
          <Link to="/about-us">About us</Link>
          <Link to="/our-services">What we offer</Link>
          <Link to="/contact">Contact us</Link>
        </div>
        <div className="foot-col">
          <h5>Quick Links</h5>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Sitemap</a>
          <Link to="/registration">Start Registration</Link>
        </div>
      </div>
      <div className="foot-bottom">
        <span>Copyright 2026 Trademark Firm. All rights reserved.</span>
        <span>Offices in USA, UK, India, Germany, Australia</span>
      </div>
    </footer>
  );
}
