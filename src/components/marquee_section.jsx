export function MarqueeSection() {
  const row = (
    <>
      <span className="mq-item">
        <b>USPTO</b> Filings<span className="mq-dot" />
      </span>
      <span className="mq-item">
        <b>EPO</b> Applications<span className="mq-dot" />
      </span>
      <span className="mq-item">
        <b>WIPO</b> PCT<span className="mq-dot" />
      </span>
      <span className="mq-item">
        <b>50K+</b> Patents Filed<span className="mq-dot" />
      </span>
      <span className="mq-item">
        <b>65+</b> Countries<span className="mq-dot" />
      </span>
      <span className="mq-item">
        <b>Fortune 500</b> Clients<span className="mq-dot" />
      </span>
      <span className="mq-item">
        <b>98.7%</b> Grant Rate<span className="mq-dot" />
      </span>
      <span className="mq-item">
        Since <b>2009</b>
        <span className="mq-dot" />
      </span>
    </>
  );
  return (
    <div className="marquee">
      <div className="mq-track">
        {row}
        {row}
      </div>
    </div>
  );
}
