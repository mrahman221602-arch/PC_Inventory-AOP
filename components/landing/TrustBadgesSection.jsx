import { motion } from "framer-motion";
import { trustBadges } from "./data";
import { fadeUp, stagger, glassCard, lightCard } from "./shared";

function TrustBadgesSection({ isDark = true }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6"
      >
        {trustBadges.map((badge) => (
          <motion.div key={badge.label} variants={fadeUp} className={`flex items-center gap-2 p-3 ${isDark ? glassCard : lightCard}`}>
            <badge.icon className="h-4 w-4 text-primary-300" />
            <p className={`text-xs ${isDark ? "text-slate-300" : "text-slate-700"}`}>{badge.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default TrustBadgesSection;
