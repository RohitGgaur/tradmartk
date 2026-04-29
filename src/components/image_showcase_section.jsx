/**
 * Editorial image section (one or two columns). Uses .rev* for scroll reveal.
 * Single image: add class image-showcase-sec--single for centered hero-style layout.
 */
export function ImageShowcaseSection({ label, heading, description, items, compact = false }) {
  const is_single = Array.isArray(items) && items.length === 1;
  const sec_class = [
    compact === true ? 'image-showcase-sec image-showcase-sec--compact' : 'image-showcase-sec',
    is_single ? 'image-showcase-sec--single' : '',
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <section className={sec_class} aria-label={typeof label === 'string' ? label : 'Image gallery'}>
      <div className="image-showcase-inner wrap">
        <div className="image-showcase-head">
          {label ? <div className="label-tag rev">{label}</div> : null}
          {heading ? <h2 className="heading rev d1">{heading}</h2> : null}
          {description ? <p className="body-lg rev d2 image-showcase-desc">{description}</p> : null}
        </div>
        <div className={`image-showcase-grid${is_single ? ' image-showcase-grid--single' : ''}`}>
          {items.map((item, i) => (
            <figure
              key={item.alt + String(i)}
              className={`image-showcase-card rev d${Math.min(i + 2, 6)}`}
            >
              <div className="image-showcase-frame">
                <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
              </div>
              {item.caption ? <figcaption>{item.caption}</figcaption> : null}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
