import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Mail, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { uiTone } from "../landing/shared";

function Login({ isDark = true, setIsLoggedIn }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login/signup
    setIsLoggedIn(true);
    navigate("/");
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 ${isDark ? "bg-[#121313] text-white" : "bg-slate-50 text-slate-900"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`w-full max-w-md p-8 rounded-2xl border backdrop-blur-xl shadow-2xl ${
          isDark ? "bg-white/5 border-white/10" : "bg-white border-slate-200"
        }`}
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold italic tracking-tight">
            <span className="bg-gradient-to-r from-[#FF6044] to-[#FF8066] bg-clip-text text-transparent">
              {isLogin ? "Welcome Back" : "Create Account"}
            </span>
          </h2>
          <p className={`mt-2 text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            {isLogin ? "Enter your details to access your workspace." : "Join us to build your dream PC."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <AnimatePresence mode="popLayout">
            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, height: 0, scale: 0.95 }}
                animate={{ opacity: 1, height: "auto", scale: 1 }}
                exit={{ opacity: 0, height: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative">
                  <User className={`absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 ${isDark ? "text-slate-500" : "text-slate-400"}`} />
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full pl-12 pr-4 py-3 rounded-xl border outline-none transition-all ${
                      isDark
                        ? "bg-secondary/50 border-white/10 focus:border-[#FF6044] focus:bg-secondary text-white"
                        : "bg-slate-100 border-transparent focus:border-[#FF6044] focus:bg-white text-slate-900"
                    }`}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative">
            <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 ${isDark ? "text-slate-500" : "text-slate-400"}`} />
            <input
              type="email"
              required
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full pl-12 pr-4 py-3 rounded-xl border outline-none transition-all ${
                isDark
                  ? "bg-secondary/50 border-white/10 focus:border-[#FF6044] focus:bg-secondary text-white"
                  : "bg-slate-100 border-transparent focus:border-[#FF6044] focus:bg-white text-slate-900"
              }`}
            />
          </div>

          <div className="relative">
            <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 ${isDark ? "text-slate-500" : "text-slate-400"}`} />
            <input
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full pl-12 pr-4 py-3 rounded-xl border outline-none transition-all ${
                isDark
                  ? "bg-secondary/50 border-white/10 focus:border-[#FF6044] focus:bg-secondary text-white"
                  : "bg-slate-100 border-transparent focus:border-[#FF6044] focus:bg-white text-slate-900"
              }`}
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3.5 rounded-xl font-semibold shadow-lg transition-all active:scale-95 ${
              isDark 
                ? "bg-[#FF6044] hover:bg-[#ff7055] text-white shadow-[#FF6044]/20" 
                : "bg-[#FF6044] hover:bg-[#e5563d] text-white shadow-[#FF6044]/30"
            }`}
          >
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className={`font-semibold transition-colors hover:underline ${isDark ? "text-[#FF6044]" : "text-[#e5563d]"}`}
            >
              {isLogin ? "Sign Up" : "Log In"}
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
