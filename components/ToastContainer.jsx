import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ShoppingCart, XCircle } from "lucide-react";

function ToastIcon({ variant }) {
  if (variant === "error") return <XCircle className="h-5 w-5 text-primary-300" />;
  if (variant === "success") return <CheckCircle2 className="h-5 w-5 text-primary-300" />;
  return <ShoppingCart className="h-5 w-5 text-primary-300" />;
}

function ToastContainer({ toast, onClose, isDark }) {
  return (
    <AnimatePresence>
      {toast ? (
        <motion.div
          key={toast.id}
          initial={{ opacity: 0, y: 14, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="fixed z-[100] bottom-5 left-1/2 w-[min(92vw,420px)] -translate-x-1/2"
          role="status"
          aria-live="polite"
        >
          <div
            className={[
              "flex items-start gap-3 rounded-2xl border p-4 shadow-xl backdrop-blur-xl",
              isDark
                ? "border-white/10 bg-secondary/80"
                : "border-slate-200 bg-white/90",
            ].join(" ")}
          >
            <div className="pt-0.5">
              <ToastIcon variant={toast.variant} />
            </div>

            <div className="min-w-0 flex-1">
              <div className={`text-sm font-semibold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                {toast.title}
              </div>
              <div className={`mt-1 text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                {toast.message}
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className={`ml-1 inline-flex h-9 w-9 items-center justify-center rounded-xl transition ${
                isDark ? "text-slate-200 hover:bg-white/10" : "text-slate-700 hover:bg-slate-100"
              }`}
              aria-label="Close notification"
            >
              <XCircle className="h-4 w-4 opacity-60" />
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default ToastContainer;

