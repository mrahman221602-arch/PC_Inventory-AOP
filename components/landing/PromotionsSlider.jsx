import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Bot, Headset } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    icon: Cpu,
    title: "Weekend Build Discounts",
    description: "Extra savings on CPUs, GPUs, and cases when you complete a guided build this weekend.",
    ctaLabel: "Browse components",
    ctaHref: "/products",
  },
  {
    icon: Bot,
    title: "AI Build Advice",
    description: "Not sure where to start? Let the AI assistant propose 3 balanced builds for your budget.",
    ctaLabel: "Ask the AI",
    ctaHref: "/ai-assistant",
  },
  {
    icon: Headset,
    title: "Priority Consultation",
    description: "Reserve priority time with our expert agents for high-end or workstation builds.",
    ctaLabel: "Book expert",
    ctaHref: "/expert-consultation",
  },
];

function PromotionsSlider({ isDark = true }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const current = slides[index];

  return (
    <section className="mx-auto mt-20 mb-10 max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className={`relative overflow-hidden rounded-[2.5rem] border ${isDark ? 'border-white/5 bg-[#121313]/60' : 'border-slate-200 bg-white/60'} p-10 backdrop-blur-3xl sm:p-16 shadow-[0_0_50px_rgba(255,96,68,0.03)]`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current.title}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-8 inline-flex p-5 rounded-3xl bg-primary/10 text-primary ring-1 ring-primary/20">
              <current.icon className="h-10 w-10" strokeWidth={1.5} />
            </div>
            <h2 className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${isDark ? "text-slate-50" : "text-slate-900"}`}>
              {current.title}
            </h2>
            <p className={`mt-5 max-w-lg text-base sm:text-lg leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              {current.description}
            </p>
            {current.ctaHref && (
              <Link
                to={current.ctaHref}
                className="mt-10 text-sm font-bold tracking-widest uppercase text-primary hover:text-primary/80 transition-colors inline-flex items-center"
              >
                {current.ctaLabel} <span className="ml-3 text-lg leading-none">&rarr;</span>
              </Link>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-14 flex justify-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                i === index ? "w-10 bg-primary" : isDark ? "w-2 bg-white/20 hover:bg-white/40" : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PromotionsSlider;
