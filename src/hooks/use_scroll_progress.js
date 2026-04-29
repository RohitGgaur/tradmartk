import { useEffect } from 'react';

export function use_scroll_progress(progress_bar_id) {
  useEffect(() => {
    const pb = document.getElementById(progress_bar_id);
    if (!pb) return () => {};

    const on_scroll = () => {
      const dh = document.body.scrollHeight - window.innerHeight;
      const p = dh > 0 ? (window.scrollY / dh) * 100 : 0;
      pb.style.width = `${p}%`;
    };

    window.addEventListener('scroll', on_scroll, { passive: true });
    on_scroll();

    return () => {
      window.removeEventListener('scroll', on_scroll);
    };
  }, [progress_bar_id]);
}
