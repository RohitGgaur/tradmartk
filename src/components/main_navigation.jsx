import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const primary_nav = [
  { to: '/', label: 'Home' },
  { to: '/about-us', label: 'About us' },
  { to: '/our-services', label: 'Our Services' },
  { to: '/registration', label: 'Registration' },
  { to: '/find-your-class', label: 'Find your class' },
  { to: '/contact', label: 'Contact us' },
];

export function MainNavigation() {
  const [menu_open, set_menu_open] = useState(false);

  const close_menu = useCallback(() => {
    set_menu_open(false);
    document.body.style.overflow = '';
  }, []);

  const toggle_menu = useCallback(() => {
    set_menu_open((o) => {
      const next = !o;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  }, []);

  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    const on_anchor = () => close_menu();
    anchors.forEach((a) => a.addEventListener('click', on_anchor));
    return () => {
      anchors.forEach((a) => a.removeEventListener('click', on_anchor));
    };
  }, [close_menu]);

  return (
    <>
      <nav id="mainnav" className="site-nav">
        <Link to="/" className="logo">
          Trademark Firm<div className="logo-dot" />
        </Link>
        <ul className="nav-links">
          {primary_nav.map((item) => (
            <li key={item.to}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
          <li>
            <Link to="/contact" className="nav-cta">
              Get started
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className={`hmb${menu_open ? ' open' : ''}`}
          id="hmb"
          aria-label="Open menu"
          onClick={toggle_menu}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        className={`mdov${menu_open ? ' open' : ''}`}
        id="mdov"
        onClick={close_menu}
        onKeyDown={(e) => e.key === 'Enter' && close_menu()}
        role="presentation"
      />
      <div className={`mdrawer${menu_open ? ' open' : ''}`} id="mdrawer">
        <div className="md-head">
          <div className="md-logo">
            Trademark Firm<span style={{ color: 'var(--gold)' }}>.</span>
          </div>
          <button type="button" className="md-x" id="mdx" onClick={close_menu}>
            ✕
          </button>
        </div>
        <ul className="md-links">
          {primary_nav.map((item) => (
            <li key={`m-${item.to}`}>
              <Link to={item.to} onClick={close_menu}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="md-cta" onClick={close_menu}>
          Get started →
        </Link>
      </div>
    </>
  );
}
