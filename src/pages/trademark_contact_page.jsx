import { TrademarkSubpageShell } from '../components/trademark_subpage_shell.jsx';
import { ContactSection } from '../components/contact_section.jsx';

export function TrademarkContactPage() {
  return (
    <TrademarkSubpageShell
      breadcrumb_label="Contact us"
      eyebrow="Start a conversation"
      title="Contact us"
      intro="Tell us about your brand or filing question — we will respond within two business hours on business days."
      bleed
    >
      <div className="rev d3">
        <ContactSection />
      </div>
    </TrademarkSubpageShell>
  );
}
