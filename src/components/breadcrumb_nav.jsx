import { Link, useLocation } from 'react-router-dom';

/** Shown below the main nav except on home, where breadcrumbs are redundant. */
export function BreadcrumbNav() {
  const { pathname } = useLocation();
  if (pathname === '/') return null;

  return (
    <div className="bc">
      <Link to="/">Home</Link>
      <span className="sep">›</span>
      <span className="cur">Overview</span>
    </div>
  );
}
