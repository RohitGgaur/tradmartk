import { gtm_push } from '../utils/gtm_push.js';

export function FloatingCta() {
  return (
    <div className="float-cta">
      <a
        href="#contact"
        onClick={() => gtm_push('float_cta')}
      >
        <div className="float-dot" />
        Free Consultation
      </a>
    </div>
  );
}
