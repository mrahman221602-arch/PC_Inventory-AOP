import { HeroSection, MainSections } from "./components/landing";

function LandingPage({ isDark, onAddToCart, addingId }) {
  return (
    <div
      className={`min-h-screen scroll-smooth transition-colors ${
        isDark ? "bg-secondary text-slate-100" : "bg-slate-100 text-slate-900"
      }`}
    >
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className={`absolute left-[-10%] top-[-5%] h-80 w-80 rounded-full blur-[100px] ${isDark ? "bg-primary/10" : "bg-primary/5"}`} />
        <div className={`absolute right-[-12%] top-[10%] h-96 w-96 rounded-full blur-[120px] ${isDark ? "bg-primary/5" : "bg-primary/5"}`} />
        <div className={`absolute bottom-[-10%] left-[35%] h-96 w-96 rounded-full blur-[100px] ${isDark ? "bg-primary/10" : "bg-primary/10"}`} />
      </div>

      <HeroSection />
      <MainSections onAddToCart={onAddToCart} isDark={isDark} addingId={addingId} />
    </div>
  );
}

export default LandingPage;
