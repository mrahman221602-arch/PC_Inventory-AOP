import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    topText: "Smart & Fast",
    bottomText: "Build Your Perfect PC",
    buttonText: "SHOP NOW",
    buttonHref: "/products",
    bgImage: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=2000&auto=format&fit=crop",
  },
  {
    topText: "Expert Advice",
    bottomText: "Talk To Our Engineers",
    buttonText: "BOOK SECURELY",
    buttonHref: "/consultation",
    bgImage: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2000&auto=format&fit=crop",
  },
  {
    topText: "Live Inventory",
    bottomText: "Only Parts In Stock",
    buttonText: "BROWSE CATALOG",
    buttonHref: "/products",
    bgImage: "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?q=80&w=2000&auto=format&fit=crop",
  }
];

function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const goNext = () => setIndex((prev) => (prev + 1) % slides.length);
  const goPrev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-secondary">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index].bgImage})` }}
        >
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center px-4 max-w-5xl z-10 pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center justify-center"
            >
              <h1 className="flex flex-col items-center select-none font-extrabold italic tracking-tight">
                <span className="text-4xl md:text-6xl lg:text-[5rem] text-primary drop-shadow-xl mb-1 leading-none uppercase">
                  {slides[index].topText}
                </span>
                <span className="text-5xl md:text-7xl lg:text-[6rem] text-white drop-shadow-2xl leading-none uppercase">
                  {slides[index].bottomText}
                </span>
              </h1>
              <div className="mt-12">
                <Link
                  to={slides[index].buttonHref}
                  className="inline-flex items-center justify-center bg-primary hover:bg-[#FF6044]/90 px-10 py-4 text-secondary font-extrabold uppercase tracking-widest text-lg transition-transform hover:scale-105 shadow-[0_0_20px_rgba(255,96,68,0.4)]"
                >
                  {slides[index].buttonText}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <button
        onClick={goPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 text-primary hover:text-white transition-colors p-2 drop-shadow-md"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-12 h-12 md:w-16 md:h-16" strokeWidth={3} />
      </button>

      <button
        onClick={goNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 text-primary hover:text-white transition-colors p-2 drop-shadow-md"
        aria-label="Next slide"
      >
        <ChevronRight className="w-12 h-12 md:w-16 md:h-16" strokeWidth={3} />
      </button>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? "bg-primary shadow-[0_0_10px_rgba(255,96,68,0.8)]" : "bg-white hover:opacity-100 opacity-50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
