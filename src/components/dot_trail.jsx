import { useEffect, useRef } from 'react';

export function DotTrail({ compact = false }) {
  const ref_main = useRef(null);
  const ref_ring = useRef(null);
  const ref_sm1 = useRef(null);
  const ref_sm2 = useRef(null);

  useEffect(() => {
    const main = ref_main.current;
    const ring = ref_ring.current;
    const sm1 = ref_sm1.current;
    const sm2 = compact ? null : ref_sm2.current;
    if (!main || !ring || !sm1) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let s1x = 0;
    let s1y = 0;
    let s2x = 0;
    let s2y = 0;

    const on_move = (e) => {
      mx = e.clientX;
      my = e.clientY;
      main.style.left = `${mx}px`;
      main.style.top = `${my}px`;
      main.style.opacity = '0.85';
      ring.style.opacity = '0.55';
    };

    const on_leave = () => {
      main.style.opacity = '0';
      ring.style.opacity = '0';
      sm1.style.opacity = '0';
      if (sm2) sm2.style.opacity = '0';
    };

    const on_enter = () => {
      main.style.opacity = '0.85';
      ring.style.opacity = '0.55';
    };

    document.addEventListener('mousemove', on_move);
    document.addEventListener('mouseleave', on_leave);
    document.addEventListener('mouseenter', on_enter);

    const interactive = document.querySelectorAll('a, button, input, select, textarea');
    const on_el_enter = () => document.body.classList.add('cursor-hover');
    const on_el_leave = () => document.body.classList.remove('cursor-hover');
    interactive.forEach((el) => {
      el.addEventListener('mouseenter', on_el_enter);
      el.addEventListener('mouseleave', on_el_leave);
    });

    let raf = 0;
    function animate() {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;

      s1x += (mx - s1x) * (compact ? 0.05 : 0.06);
      s1y += (my - s1y) * (compact ? 0.05 : 0.06);
      sm1.style.left = `${s1x}px`;
      sm1.style.top = `${s1y}px`;

      if (sm2) {
        s2x += (mx - s2x) * 0.04;
        s2y += (my - s2y) * 0.04;
        sm2.style.left = `${s2x}px`;
        sm2.style.top = `${s2y}px`;
      }

      raf = requestAnimationFrame(animate);
    }
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('mousemove', on_move);
      document.removeEventListener('mouseleave', on_leave);
      document.removeEventListener('mouseenter', on_enter);
      interactive.forEach((el) => {
        el.removeEventListener('mouseenter', on_el_enter);
        el.removeEventListener('mouseleave', on_el_leave);
      });
    };
  }, [compact]);

  return (
    <>
      <div className="dot-trail" ref={ref_main} />
      <div className="dot-trail ring" ref={ref_ring} />
      <div className="dot-trail sm" ref={ref_sm1} />
      {!compact ? <div className="dot-trail sm" ref={ref_sm2} /> : null}
    </>
  );
}
