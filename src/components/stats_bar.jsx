export function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="stats-inner">
        <div className="stat-cell rev">
          <span className="stat-num">
            <span className="counter" data-t="50">
              0
            </span>
            <span>K+</span>
          </span>
          <span className="stat-label">Patents Filed</span>
          <p className="stat-sub">Globally managed</p>
        </div>
        <div className="stat-cell rev d1">
          <span className="stat-num">
            <span className="counter" data-t="65">
              0
            </span>
            <span>+</span>
          </span>
          <span className="stat-label">Countries</span>
          <p className="stat-sub">USPTO · EPO · WIPO</p>
        </div>
        <div className="stat-cell rev d2">
          <span className="stat-num">
            <span className="counter" data-t="98">
              0
            </span>
            <span>%</span>
          </span>
          <span className="stat-label">Grant Rate</span>
          <p className="stat-sub">Industry-leading</p>
        </div>
        <div className="stat-cell rev d3">
          <span className="stat-num">
            <span className="counter" data-t="15">
              0
            </span>
            <span>+</span>
          </span>
          <span className="stat-label">Years Experience</span>
          <p className="stat-sub">Since 2009</p>
        </div>
      </div>
    </div>
  );
}
