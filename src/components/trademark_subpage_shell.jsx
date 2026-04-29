import { Link } from 'react-router-dom';
import { DotTrail } from './dot_trail.jsx';
import { TopBar } from './top_bar.jsx';
import { MainNavigation } from './main_navigation.jsx';
import { FooterSection } from './footer_section.jsx';
import { use_landing_effects } from '../hooks/use_landing_effects.js';

/**
 * Shared wrapper for trademark marketing subpages (About, Services, etc.).
 */
export function TrademarkSubpageShell({ breadcrumb_label, eyebrow, title, intro, children, bleed = false }) {
  use_landing_effects();

  return (
    <div className="page-drafting">
      <DotTrail />
      <TopBar />
      <MainNavigation />
      <div className="bc">
        <Link to="/">Home</Link>
        <span className="sep">›</span>
        <span className="cur">{breadcrumb_label}</span>
      </div>
      <header className="tm-sub-hero">
        <div className="wrap">
          {eyebrow ? <div className="label-tag rev">{eyebrow}</div> : null}
          <h1 className="heading rev d1">{title}</h1>
          {intro ? <p className="body-lg rev d2 tm-sub-intro">{intro}</p> : null}
        </div>
      </header>
      {bleed ? (
        <div className="tm-sub-bleed">{children}</div>
      ) : (
        <div className="tm-sub-body wrap">{children}</div>
      )}
      <FooterSection />
    </div>
  );
}
