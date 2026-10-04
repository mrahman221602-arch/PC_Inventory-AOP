import { motion } from "framer-motion";
import { ArrowRight, Bot, Clock3, Headset, Ticket } from "lucide-react";
import { fadeUp, glassCard, lightCard } from "./shared";

function ConsultationHighlightSection({ isDark = true }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className={`grid gap-8 p-8 lg:grid-cols-2 ${isDark ? glassCard : lightCard}`}>
        <div>
          <h2 className={`text-3xl font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>Consultation System That Actually Guides Users</h2>
          <p className={`mt-4 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            Human-to-human consultation is a core product strength. Customers book structured token-based sessions,
            reserve time slots, and receive focused guidance from available experts.
          </p>
          <div className={`mt-6 space-y-3 text-sm ${isDark ? "text-slate-200" : "text-slate-700"}`}>
            <p className="flex items-center gap-2"><Ticket className="h-4 w-4 text-primary-300" /> Token or ticket-based booking flow</p>
            <p className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-primary-300" /> Time-slot reservation and queue management</p>
            <p className="flex items-center gap-2"><Headset className="h-4 w-4 text-primary-300" /> Agent availability and guided handoff</p>
            <p className="flex items-center gap-2"><Bot className="h-4 w-4 text-primary-300" /> AI fallback when experts are offline</p>
          </div>
        </div>
        <div className={`rounded-2xl border p-6 ${isDark ? "border-white/10 bg-secondary/70" : "border-slate-200 bg-slate-50"}`}>
          <p className={`text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>Consultation Flow</p>
          <div className="mt-5 space-y-3">
            {["Request Guidance", "Get Token", "Book Slot", "Live Session", "Order Finalization"].map((item) => (
              <div key={item} className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm ${isDark ? "bg-secondary/80" : "bg-white border border-slate-200"}`}>
                <span>{item}</span>
                <ArrowRight className="h-4 w-4 text-primary-300" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default ConsultationHighlightSection;
