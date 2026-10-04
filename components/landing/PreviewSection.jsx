import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "./data";
import ProductCard from "./ProductCard";
import { fadeUp, stagger, uiSize } from "./shared";

function PreviewSection({ onAddToCart, isDark = true, addingId }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...new Set(products.map((item) => item.category))],
    []
  );

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return products;
    return products.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const visibleProducts = filteredProducts.slice(0, 6);

  return (
    <section id="products" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className={`text-3xl font-bold tracking-tight sm:text-[2.15rem] ${isDark ? "text-slate-100" : "text-slate-900"}`}>Products & Components</h2>
        <p className={`mt-3 max-w-3xl text-[0.98rem] leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
          Explore different component categories for your next custom build. Add parts to cart and continue with guided checkout.
        </p>
      </motion.div>
      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
            }}
            className={`${uiSize.chip} transition ${
              selectedCategory === category
                ? isDark
                  ? "border-primary-400/60 bg-primary-500/15 text-primary-200"
                  : "border-primary-300 bg-primary-100 text-primary-700"
                : isDark
                  ? "border-white/20 text-slate-300 hover:border-primary-400/40"
                  : "border-slate-300 text-slate-700 hover:border-primary-500/40"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visibleProducts.map((item) => (
          <motion.div key={item.id} variants={fadeUp} whileHover={{ y: -5 }}>
            <ProductCard
              product={item}
              isDark={isDark}
              onAddToCart={onAddToCart}
              isAdding={addingId === item.id}
            />
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-8 flex justify-center">
        <Link
          to="/products"
          className={`h-10 rounded-xl border px-6 text-sm font-medium transition inline-flex items-center ${
            isDark
              ? "border-primary-300/40 bg-primary-500/10 text-primary-200 hover:bg-primary-500/20"
              : "border-primary-300 bg-primary-100 text-primary-700 hover:bg-primary-200"
          }`}
        >
          Show All Products
        </Link>
      </div>
    </section>
  );
}

export default PreviewSection;
