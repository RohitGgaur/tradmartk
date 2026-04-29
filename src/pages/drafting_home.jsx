import { DotTrail } from '../components/dot_trail.jsx';
import { TopBar } from '../components/top_bar.jsx';
import { MainNavigation } from '../components/main_navigation.jsx';
import { BreadcrumbNav } from '../components/breadcrumb_nav.jsx';
import { HeroSection } from '../components/hero_section.jsx';
import { MarqueeSection } from '../components/marquee_section.jsx';
import { StatsBar } from '../components/stats_bar.jsx';
import { AboutSection } from '../components/about_section.jsx';
import { ServicesSection } from '../components/services_section.jsx';
import { ProcessSection } from '../components/process_section.jsx';
import { TechSection } from '../components/tech_section.jsx';
import { WhySection } from '../components/why_section.jsx';
import { TestimonialsSection } from '../components/testimonials_section.jsx';
import { FaqSection } from '../components/faq_section.jsx';
import { ContactSection } from '../components/contact_section.jsx';
import { CtaBanner } from '../components/cta_banner.jsx';
import { FooterSection } from '../components/footer_section.jsx';
import { FloatingCta } from '../components/floating_cta.jsx';
import { ImageShowcaseSection } from '../components/image_showcase_section.jsx';
import { use_landing_effects } from '../hooks/use_landing_effects.js';
import img_showcase_home from '../images/Image1.jpeg';

export function DraftingHome() {
  use_landing_effects();

  return (
    <div className="page-drafting">
      <DotTrail />
      <TopBar />
      <MainNavigation />
      <BreadcrumbNav />
      <HeroSection />
      <MarqueeSection />
      <StatsBar />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ImageShowcaseSection
        label="From our desks"
        heading={
          <>
            Where patents
            <br />
            take shape
          </>
        }
        description="A glimpse of how inventions become filing-ready applications — collaborative reviews, detailed figures, and prosecution-focused drafts."
        items={[
          {
            src: img_showcase_home,
            alt: 'Trademark and patent practice — technical review, drafting, and documentation together',
            caption:
              'Technical review, drafting, and documentation — one team from disclosure to filing-ready specs.',
          },
        ]}
      />
      <TechSection />
      <WhySection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <CtaBanner />
      <FooterSection />
      <FloatingCta />
    </div>
  );
}
