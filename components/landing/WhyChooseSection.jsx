import { motion } from "framer-motion";
import { reasons } from "./data";
import { fadeUp, stagger, glassCard, lightCard } from "./shared";

function WhyChooseSection({ isDark = true }) {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className={`text-3xl font-bold sm:text-4xl ${isDark ? "text-slate-100" : "text-slate-900"}`}>Why Choose PC Builder Pro</h2>
      </motion.div>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-8 grid gap-4 md:grid-cols-2">
        {reasons.map((item) => (
          <motion.div key={item.title} variants={fadeUp} className={`p-6 ${isDark ? glassCard : lightCard}`}>
            <item.icon className="h-6 w-6 text-primary-300" />
            <h3 className={`mt-4 text-lg font-semibold ${isDark ? "text-slate-100" : "text-slate-900"}`}>{item.title}</h3>
            <p className={`mt-2 text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default WhyChooseSection;
