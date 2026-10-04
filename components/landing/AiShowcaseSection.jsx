import { motion } from "framer-motion";
import { aiProfiles } from "./data";
import { fadeUp, stagger, glassCard, lightCard } from "./shared";

function AiShowcaseSection({ isDark = true }) {
  return (
    <section id="ai-assistant" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className={`text-3xl font-bold tracking-tight sm:text-[2.15rem] ${isDark ? "text-slate-100" : "text-slate-900"}`}>AI Assistant Showcase</h2>
        <p className={`mt-3 max-w-3xl text-[0.98rem] leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
          AI recommends complete builds by budget and usage, supports gaming/office/editing/streaming profiles,
          and can escalate requests into expert consultation tickets.
        </p>
      </motion.div>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[["Budget", "$800"], ["Usage", "Gaming"], ["Suggested Build Score", "89/100"], ["Compatibility", "Passed"]].map(([title, value]) => (
          <motion.div key={title} variants={fadeUp} className={`p-5 ${isDark ? glassCard : lightCard}`}>
            <p className={`text-xs uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>{title}</p>
            <p className="mt-2 text-xl font-semibold text-primary-300">{value}</p>
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-8 grid gap-3 md:grid-cols-4">
        {aiProfiles.map((Icon, i) => (
          <div key={i} className={`rounded-xl border p-4 text-center text-sm ${isDark ? "border-white/10 bg-secondary/60 text-slate-300" : "border-slate-200 bg-white text-slate-700"}`}>
            <Icon className="mx-auto mb-2 h-5 w-5 text-primary-300" />
            {["Gaming", "Office", "Editing", "Streaming"][i]} Build Template
          </div>
        ))}
      </div>
    </section>
  );
}

export default AiShowcaseSection;
