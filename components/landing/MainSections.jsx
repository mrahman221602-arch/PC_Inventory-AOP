import {
  TrustBadgesSection,
  FeaturesSection,
  HowItWorksSection,
  ConsultationHighlightSection,
  AiShowcaseSection,
  PreviewSection,
  WhyChooseSection,
  TestimonialsSection,
  StatsSection,
  CtaSection,
  FaqSection,
} from "./";

function MainSections({ onAddToCart, isDark = true, addingId }) {
  return (
    <main>
      <TrustBadgesSection isDark={isDark} />
      <FeaturesSection isDark={isDark} />
      <HowItWorksSection isDark={isDark} />
      <ConsultationHighlightSection isDark={isDark} />
      <AiShowcaseSection isDark={isDark} />
      <PreviewSection onAddToCart={onAddToCart} isDark={isDark} addingId={addingId} />
      <WhyChooseSection isDark={isDark} />
      <TestimonialsSection isDark={isDark} />
      <StatsSection isDark={isDark} />
      <FaqSection isDark={isDark} />
      <CtaSection isDark={isDark} />
    </main>
  );
}

export default MainSections;
