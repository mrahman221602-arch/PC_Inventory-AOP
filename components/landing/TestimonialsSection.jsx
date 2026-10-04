import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "./data";
import { fadeUp, stagger, glassCard, lightCard } from "./shared";

function TestimonialsSection({ isDark = true }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className={`text-3xl font-bold sm:text-4xl ${isDark ? "text-slate-100" : "text-slate-900"}`}>What Users Say</h2>
      </motion.div>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-8 grid gap-4 md:grid-cols-3">
        {testimonials.map((item) => (
          <motion.div key={item.name} variants={fadeUp} className={`p-6 ${isDark ? glassCard : lightCard}`}>
            <div className="mb-4 flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold ${
                  isDark
                    ? "bg-gradient-to-r from-primary-400 to-primary-500 text-slate-950"
                    : "bg-gradient-to-r from-primary-500 to-primary-500 text-white"
                }`}
              >
                {item.name[0]}
              </div>
              <div>
                <p className={`font-medium ${isDark ? "text-slate-100" : "text-slate-900"}`}>{item.name}</p>
                <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>{item.role}</p>
              </div>
            </div>
            <p className={`text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>{item.text}</p>
            <div className="mt-4 flex gap-1 text-primary-300">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary-300" />)}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default TestimonialsSection;
