import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { faqItems } from "./data";
import { fadeUp, stagger, glassCard, lightCard } from "./shared";

function FaqSection({ isDark = true }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className={`text-3xl font-bold tracking-tight sm:text-[2.15rem] ${isDark ? "text-slate-100" : "text-slate-900"}`}>
          Frequently Asked Questions
        </h2>
        <p className={`mt-3 max-w-2xl text-[0.98rem] leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
          Clear answers about guided builds, consultation flow, AI support, and inventory-backed recommendations.
        </p>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-8 grid gap-4 md:grid-cols-2"
      >
        {faqItems.map((item) => (
          <motion.div
            key={item.q}
            variants={fadeUp}
            className={`p-5 ${isDark ? glassCard : lightCard}`}
          >
            <div className="mb-3 flex items-start gap-2">
              <HelpCircle className="mt-0.5 h-4 w-4 text-primary-400" />
              <h3 className={`text-[1.02rem] font-semibold ${isDark ? "text-slate-100" : "text-slate-900"}`}>{item.q}</h3>
            </div>
            <p className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>{item.a}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default FaqSection;
