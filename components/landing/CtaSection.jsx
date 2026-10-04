import { motion } from "framer-motion";
import { fadeUp, glassCard, lightCard, uiSize, uiTone } from "./shared";

function CtaSection({ isDark = true }) {
  return (
    <section id="cta" className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className={`overflow-hidden p-8 text-center sm:p-10 ${isDark ? glassCard : lightCard}`}>
        <h2 className={`text-3xl font-bold tracking-tight sm:text-[2.15rem] ${isDark ? "text-slate-100" : "text-slate-900"}`}>Ready to Build Your Dream PC?</h2>
        <p className={`mx-auto mt-3 max-w-2xl text-[0.98rem] leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
          Start with AI, connect with experts, and turn your ideal setup into reality.
        </p>
        <motion.div className="mt-8 flex flex-wrap justify-center gap-3" whileHover={{ scale: 1.01 }}>
          <a
            href="#build-pc"
            className={`${uiSize.buttonLg} font-semibold ${uiTone.primary(isDark)}`}
          >
            Get Started Now
          </a>
          <a href="#expert-consultation" className={`inline-flex h-11 items-center rounded-xl border px-6 text-sm font-medium ${isDark ? "border-white/20 text-slate-100" : "border-slate-300 text-slate-700"}`}>
            Book a Consultation
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default CtaSection;
