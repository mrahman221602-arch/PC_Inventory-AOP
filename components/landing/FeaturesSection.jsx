import { motion } from "framer-motion";
import { features } from "./data";
import { fadeUp, stagger, glassCard, lightCard } from "./shared";

function FeaturesSection({ isDark = true }) {
  return (
    <section id="build-pc" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className={`text-3xl font-bold tracking-tight sm:text-[2.15rem] ${isDark ? "text-slate-100" : "text-slate-900"}`}>Core Platform Features</h2>
        <p className={`mt-3 max-w-2xl text-[0.98rem] leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
          Built to guide every customer journey from idea to final order, with role-based intelligence for your team.
        </p>
      </motion.div>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        {features.map((feature) => (
          <motion.div key={feature.title} variants={fadeUp} whileHover={{ y: -6, scale: 1.01 }} className={`p-6 transition ${isDark ? glassCard : lightCard}`}>
            <div className={`mb-4 inline-flex rounded-xl p-3 ${isDark ? "bg-primary-500/15" : "bg-primary-100"}`}>
              <feature.icon className="h-5 w-5 text-primary-300" />
            </div>
            <h3 className={`text-[1.05rem] font-semibold ${isDark ? "text-slate-100" : "text-slate-900"}`}>{feature.title}</h3>
            <p className={`mt-3 text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default FeaturesSection;
