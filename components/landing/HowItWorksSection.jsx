import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { steps } from "./data";
import { fadeUp, stagger, glassCard, lightCard } from "./shared";

function HowItWorksSection({ isDark = true }) {
  return (
    <section id="expert-consultation" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className={`text-3xl font-bold sm:text-4xl ${isDark ? "text-slate-100" : "text-slate-900"}`}>How It Works</h2>
      </motion.div>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        {steps.map((step, idx) => (
          <motion.div key={step} variants={fadeUp} className={`relative p-5 ${isDark ? glassCard : lightCard}`}>
            <div className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-primary-400 to-primary-500 text-xs font-bold text-slate-950">
              {idx + 1}
            </div>
            <p className={`text-sm ${isDark ? "text-slate-200" : "text-slate-700"}`}>{step}</p>
            {idx < steps.length - 1 && <ChevronRight className="absolute right-4 top-5 hidden h-4 w-4 text-slate-500 lg:block" />}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default HowItWorksSection;
