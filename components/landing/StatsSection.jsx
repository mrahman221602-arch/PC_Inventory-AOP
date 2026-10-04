import { motion } from "framer-motion";
import { stats } from "./data";
import { fadeUp, stagger, glassCard, lightCard } from "./shared";

function StatsSection({ isDark = true }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-4 md:grid-cols-4">
        {stats.map((item) => (
          <motion.div key={item.label} variants={fadeUp} className={`p-6 text-center ${isDark ? glassCard : lightCard}`}>
            <p className="text-3xl font-bold text-primary-300">{item.value}</p>
            <p className={`mt-2 text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default StatsSection;
