import { useEffect } from 'react';
import { gtm_push } from '../utils/gtm_push.js';

function anim_count(el) {
  const t = Number(el.dataset.t);
  const dur = 1600;
  const s = performance.now();
  const ease = (x) => (x < 0.5 ? 2 * x * x : (4 - 2 * x) * x - 1);
  function tick(n) {
    const p = Math.min((n - s) / dur, 1);
    el.textContent = String(Math.round(ease(p) * t));
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = String(t);
  }
  requestAnimationFrame(tick);
}

export function use_landing_effects() {
  useEffect(() => {
    const nav = document.getElementById('mainnav');
    const on_scroll_nav = () => {
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', on_scroll_nav, { passive: true });
    on_scroll_nav();

    const ro = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('vis');
        });
      },
      { threshold: 0.07, rootMargin: '0px 0px -40px 0px' },
    );
    const rev_els = document.querySelectorAll('.rev, .revl, .revr');
    rev_els.forEach((el) => ro.observe(el));

    const co = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.counter').forEach(anim_count);
            co.unobserve(e.target);
          }
        });
      },
      { threshold: 0.25 },
    );
    const stat_inners = document.querySelectorAll('.stats-inner');
    stat_inners.forEach((el) => co.observe(el));

    const sd = {};
    const on_scroll_gtm = () => {
      const dh = document.body.scrollHeight - window.innerHeight;
      const p = dh > 0 ? Math.round((window.scrollY / dh) * 100) : 0;
      [25, 50, 75, 90].forEach((d) => {
        if (p >= d && !sd[d]) {
          sd[d] = true;
          gtm_push(`scroll_${d}`);
        }
      });
    };
    window.addEventListener('scroll', on_scroll_gtm, { passive: true });

    const form_els = document.querySelectorAll('input, select, textarea');
    const on_focus_once = () => gtm_push('form_focus');
    form_els.forEach((el) => {
      el.addEventListener('focus', on_focus_once, { once: true });
    });

    return () => {
      window.removeEventListener('scroll', on_scroll_nav);
      window.removeEventListener('scroll', on_scroll_gtm);
      rev_els.forEach((el) => ro.unobserve(el));
      stat_inners.forEach((el) => co.unobserve(el));
      ro.disconnect();
      co.disconnect();
      form_els.forEach((el) => {
        el.removeEventListener('focus', on_focus_once);
      });
    };
  }, []);
}
