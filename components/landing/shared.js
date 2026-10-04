export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const glassCard =
  "rounded-2xl border border-white/5 bg-secondary backdrop-blur-xl shadow-[0_0_40px_rgba(255,96,68,0.03)]";

export const lightCard =
  "rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(255,96,68,0.03)]";

export const uiSize = {
  iconButton: "flex h-10 w-10 items-center justify-center rounded-xl",
  buttonMd: "inline-flex h-10 items-center justify-center rounded-xl px-4 text-sm",
  buttonMdWide: "inline-flex h-10 items-center justify-center rounded-xl px-5 text-sm",
  buttonLg: "inline-flex h-11 items-center justify-center rounded-xl px-6 text-sm",
  chip: "h-10 rounded-xl border px-4 text-sm",
};

export const uiTone = {
  outline: (isDark) =>
    isDark
      ? "border-white/10 text-slate-300 hover:border-white/20 hover:text-white bg-white/5 hover:bg-white/10"
      : "border-slate-300 text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:bg-slate-50",
  primary: (isDark) =>
    isDark
      ? "bg-primary text-secondary hover:shadow-[0_0_24px_rgba(255,96,68,0.2)]"
      : "bg-primary text-white hover:shadow-[0_0_18px_rgba(255,96,68,0.2)]",
};
