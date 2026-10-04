import { Users, Globe, Send } from "lucide-react";

function Footer({ isDark = true }) {
  return (
    <footer id="contact" className={`border-t ${isDark ? "border-white/10 bg-secondary/95" : "border-slate-200 bg-white/95"}`}>
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <h3 className="text-xl font-semibold">
            <span className="bg-gradient-to-r from-primary-300 to-primary-300 bg-clip-text text-transparent">
              PC Builder Pro
            </span>
          </h3>
          <p className="mt-3 max-w-md text-sm text-slate-400">
            Premium guided PC building and inventory intelligence for modern hardware businesses.
          </p>
          <div className="mt-4 flex gap-3 text-slate-300">
            <a href="#" className="rounded-lg border border-white/15 p-2 hover:text-primary-300"><Users className="h-4 w-4" /></a>
            <a href="#" className="rounded-lg border border-white/15 p-2 hover:text-primary-300"><Globe className="h-4 w-4" /></a>
            <a href="#" className="rounded-lg border border-white/15 p-2 hover:text-primary-300"><Send className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="mb-3 font-medium">Product</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><a href="#build-pc" className="hover:text-primary-300">Build PC</a></li>
            <li><a href="#ai-assistant" className="hover:text-primary-300">AI Assistant</a></li>
            <li><a href="#expert-consultation" className="hover:text-primary-300">Expert Consultation</a></li>
            <li><a href="#products" className="hover:text-primary-300">Inventory</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-medium">Company</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><a href="#about" className="hover:text-primary-300">About Us</a></li>
            <li><a href="#contact" className="hover:text-primary-300">Contact</a></li>
            <li><a href="#contact" className="hover:text-primary-300">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-medium">Support</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><a href="#contact" className="hover:text-primary-300">Help Center</a></li>
            <li><a href="#expert-consultation" className="hover:text-primary-300">Live Chat</a></li>
            <li><a href="#about" className="hover:text-primary-300">FAQ</a></li>
            <li><a href="#contact" className="hover:text-primary-300">Privacy Policy</a></li>
            <li><a href="#contact" className="hover:text-primary-300">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-500">
        Copyright {new Date().getFullYear()} PC Builder Pro. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
