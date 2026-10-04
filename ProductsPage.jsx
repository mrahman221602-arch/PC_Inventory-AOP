import { useMemo, useState } from "react";
import { ArrowLeft, ChevronDown, ChevronUp, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "./components/landing/data";
import { ProductCard } from "./components/landing";
import ProductDetailDrawer from "./components/landing/ProductDetailDrawer";

function ProductsPage({ isDark, onAddToCart, addingId }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeTab, setActiveTab] = useState("New Arrival");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortOption, setSortOption] = useState("Recommended");
  
  const categories = useMemo(
    () => ["All", ...new Set(products.map((item) => item.category))],
    []
  );
  
  const filteredProducts = useMemo(() => {
    let result = products;
    if (selectedCategory !== "All") {
      result = products.filter((item) => item.category === selectedCategory);
    }
    
    if (sortOption === "Price: Low to High") {
      return [...result].sort((a, b) => a.price - b.price);
    } else if (sortOption === "Price: High to Low") {
      return [...result].sort((a, b) => b.price - a.price);
    }
    
    return result;
  }, [selectedCategory, sortOption]);

  const [expandedFilters, setExpandedFilters] = useState({
    price: true,
    color: true,
    size: true,
    brand: true,
  });

  const toggleFilter = (key) => setExpandedFilters(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className={`min-h-screen pt-20 ${isDark ? "bg-[#121313] text-slate-100" : "bg-slate-50 text-slate-900"}`}>
      <div className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="mb-8 flex items-center justify-between">
          <Link to="/" className={`inline-flex items-center text-sm font-medium ${isDark ? "text-primary-400 hover:text-primary-300" : "text-primary-600 hover:text-primary-700"}`}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          {/* Left Sidebar */}
          <div className="w-full shrink-0 lg:w-64">
            <h2 className="text-xl font-bold mb-4">Category</h2>
            <div className="flex flex-col space-y-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                    selectedCategory === category
                      ? (isDark ? "bg-white/10 font-semibold text-white" : "bg-slate-200 font-semibold text-slate-900")
                      : (isDark ? "text-slate-400 hover:bg-white/5" : "text-slate-600 hover:bg-slate-100")
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 mb-4">
              <SlidersHorizontal className="h-4 w-4" />
              <h2 className="text-xl font-bold">Filter by:</h2>
            </div>
            
            {/* Mock Filters */}
            <div className="space-y-4">
              {/* Price Filter */}
              <div className={`border-b pb-4 ${isDark ? "border-white/10" : "border-slate-200"}`}>
                <button onClick={() => toggleFilter('price')} className="flex w-full items-center justify-between font-semibold">
                  Price {expandedFilters.price ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {expandedFilters.price && (
                  <div className="mt-3 space-y-2">
                    {["$0 - 100", "$100 - 200", "$200 - 300", "$300 - 400", "Over $400"].map((range) => (
                      <label key={range} className="flex items-center gap-2 text-sm cursor-pointer">
                        <input type="checkbox" className="rounded border-slate-300 text-primary-500 focus:ring-primary-500 bg-transparent" />
                        <span className={isDark ? "text-slate-300" : "text-slate-600"}>{range}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Color Filter */}
              <div className={`border-b pb-4 ${isDark ? "border-white/10" : "border-slate-200"}`}>
                <button onClick={() => toggleFilter('color')} className="flex w-full items-center justify-between font-semibold">
                  Color {expandedFilters.color ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {expandedFilters.color && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["#121313", "#FF6044", "#e2e8f0", "#94a3b8", "#3b82f6", "#a855f7"].map((c, i) => (
                      <button key={i} className={`h-6 w-6 rounded-full border shadow-sm ring-2 ring-offset-2 ${isDark ? "border-white/20 ring-transparent hover:ring-white/50 ring-offset-[#121313]" : "border-slate-200 ring-transparent hover:ring-slate-300 ring-offset-white"}`} style={{ backgroundColor: c }} />
                    ))}
                  </div>
                )}
              </div>

              {/* Size Filter */}
              <div className={`border-b pb-4 ${isDark ? "border-white/10" : "border-slate-200"}`}>
                <button onClick={() => toggleFilter('size')} className="flex w-full items-center justify-between font-semibold">
                  Size {expandedFilters.size ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
              </div>

              {/* Brand Filter */}
              <div className={`border-b pb-4 ${isDark ? "border-white/10" : "border-slate-200"}`}>
                <button onClick={() => toggleFilter('brand')} className="flex w-full items-center justify-between font-semibold">
                  Brand {expandedFilters.brand ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <button className="mt-8 w-full rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/20 transition-transform hover:scale-[1.02]">
              Apply
            </button>
          </div>

          {/* Main Grid Area */}
          <div className="flex-1">
            {/* Top Tabs */}
            <div className={`mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b pb-4 ${isDark ? "border-white/10" : "border-slate-200"}`}>
              <div className="flex items-center gap-6 overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
                {["New Arrival", "Trendy", "Popular", "Recommend"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`whitespace-nowrap pb-4 -mb-[17px] text-sm font-semibold transition-colors border-b-2 ${
                      activeTab === tab
                        ? "border-primary-500 text-primary-500"
                        : (isDark ? "border-transparent text-slate-400 hover:text-slate-200" : "border-transparent text-slate-500 hover:text-slate-800")
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center gap-2 text-sm">
                <span className={isDark ? "text-slate-400" : "text-slate-500"}>Sort by</span>
                <select 
                  className={`rounded-lg border px-3 py-1.5 outline-none font-medium ${isDark ? "border-white/10 bg-white/5 text-slate-200" : "border-slate-200 bg-white text-slate-800"}`}
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="Recommended">Recommended</option>
                  <option value="Price: Low to High">Price: Low to High</option>
                  <option value="Price: High to Low">Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight">{activeTab}</h1>
              <p className={`mt-2 text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                Step Into Style – Fresh Components Just Landed!
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                  isDark={isDark}
                  onAddToCart={onAddToCart}
                  isAdding={addingId === item.id}
                  onSelect={() => setSelectedProduct(item)}
                />
              ))}
            </div>
            
            {/* Pagination Mock */}
            <div className="mt-12 flex items-center justify-center gap-2">
              <span className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"} mr-4`}>Previous</span>
              {[1, 2, 3, 4, 5, "...", 40].map((p, i) => (
                <button key={i} className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-medium ${p === 1 ? "bg-primary-500 text-white" : (isDark ? "text-slate-400 hover:bg-white/5" : "text-slate-500 hover:bg-slate-100")}`}>
                  {p}
                </button>
              ))}
              <span className={`text-sm font-semibold text-primary-500 ml-4 cursor-pointer`}>Next</span>
            </div>
          </div>
        </div>
      </div>
      
      <ProductDetailDrawer
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        isDark={isDark}
        onAddToCart={onAddToCart}
        isAdding={addingId === selectedProduct?.id}
      />
    </div>
  );
}

export default ProductsPage;
