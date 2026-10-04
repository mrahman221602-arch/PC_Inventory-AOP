import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, ShoppingCart, ChevronDown } from "lucide-react";
import { uiTone } from "./shared";
import Spinner from "../Spinner";
import { useState } from "react";

function ProductDetailDrawer({ product, isOpen, onClose, isDark, onAddToCart, isAdding }) {
  const [activeTab, setActiveTab] = useState("DETAILS");
  
  return (
    <AnimatePresence>
      {isOpen && product && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-[70] backdrop-blur-sm ${isDark ? "bg-[#121313]/60" : "bg-slate-900/30"}`}
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
            className={`fixed right-0 top-0 z-[80] flex h-screen w-full max-w-md flex-col border-l shadow-2xl ${
              isDark ? "border-white/10 bg-[#121313]" : "border-slate-200 bg-white"
            }`}
          >
            {/* Header */}
            <div className={`flex items-center justify-between border-b px-6 py-5 ${isDark ? "border-white/10" : "border-slate-100"}`}>
              <div>
                <h3 className={`text-xl font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>Detail Product</h3>
                <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>Premium Components, All-Day Performance</p>
              </div>
              <button 
                className={`rounded-full p-2 transition-colors ${isDark ? "hover:bg-white/10 text-slate-400 hover:text-white" : "hover:bg-slate-100 text-slate-500 hover:text-slate-900"}`} 
                onClick={onClose}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto px-6 py-6 custom-scrollbar">
              
              {/* Main Image */}
              <div className={`mb-4 flex items-center justify-center rounded-2xl p-8 ${isDark ? "bg-white/5" : "bg-slate-50"}`}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="h-48 object-contain drop-shadow-2xl mix-blend-multiply"
                  style={isDark ? { filter: 'brightness(0.9) contrast(1.1)' } : {}}
                />
              </div>

              {/* Thumbnails */}
              <div className="mb-8 grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`aspect-square cursor-pointer rounded-xl border-2 p-2 transition-colors ${i === 1 ? "border-primary-500" : isDark ? "border-transparent bg-white/5 hover:border-white/20" : "border-transparent bg-slate-50 hover:border-slate-200"}`}>
                    <img 
                      src={product.image} 
                      alt="" 
                      className="h-full w-full object-contain mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity" 
                      style={isDark ? { filter: 'brightness(0.9) contrast(1.1)' } : {}}
                    />
                  </div>
                ))}
              </div>

              {/* Title & Tags */}
              <h2 className={`text-2xl font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>{product.name}</h2>
              
              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className={`rounded-lg border px-3 py-1 text-xs font-semibold ${isDark ? "border-primary-500/30 text-primary-400 bg-primary-500/10" : "border-primary-200 text-primary-600 bg-primary-50"}`}>
                    Gaming
                  </span>
                  <span className={`rounded-lg border px-3 py-1 text-xs font-semibold ${isDark ? "border-white/20 text-slate-300" : "border-slate-200 text-slate-600"}`}>
                    Creator
                  </span>
                </div>
                <div className={`text-3xl font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                  ${product.price}
                </div>
              </div>

              {/* Options */}
              <div className="mt-8 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-bold tracking-wider uppercase ${isDark ? "text-slate-400" : "text-slate-500"}`}>Color:</span>
                    <span className="text-xs font-medium text-green-500">Available</span>
                  </div>
                  <div className="flex gap-3">
                    <button className="h-6 w-6 rounded-full bg-[#121313] ring-2 ring-primary-500 ring-offset-2 ring-offset-transparent"></button>
                    <button className="h-6 w-6 rounded-full bg-slate-400 ring-2 ring-transparent ring-offset-2 ring-offset-transparent hover:ring-slate-400"></button>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-bold tracking-wider uppercase ${isDark ? "text-slate-400" : "text-slate-500"}`}>Size: US 8 (Only One Left)</span>
                    <span className="text-xs font-medium cursor-pointer hover:underline">Size Chart</span>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {["6.0", "6.5", "7.0", "7.5", "8.0", "8.5", "9.0", "9.5", "10.0"].map((size) => (
                      <button 
                        key={size}
                        className={`py-2 text-xs font-semibold border rounded-lg transition-colors ${
                          size === "8.0" 
                            ? "border-primary-500 text-primary-500" 
                            : size === "6.0" || size === "7.0" 
                              ? isDark ? "border-white/5 text-slate-600 cursor-not-allowed" : "border-slate-100 text-slate-300 cursor-not-allowed"
                              : isDark ? "border-white/10 text-slate-300 hover:border-white/30" : "border-slate-200 text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex gap-3">
                <button
                  onClick={() => onAddToCart?.(product)}
                  disabled={isAdding}
                  className="flex h-12 flex-1 items-center justify-center rounded-xl bg-primary-500 text-sm font-bold text-white shadow-lg shadow-primary-500/20 transition-transform hover:scale-[1.02]"
                >
                  {isAdding ? <Spinner /> : (
                    <>
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to cart
                    </>
                  )}
                </button>
                <button className={`flex h-12 flex-1 items-center justify-center rounded-xl border text-sm font-bold transition-colors hover:bg-slate-50 ${isDark ? "border-white/20 text-slate-200 hover:bg-white/5" : "border-slate-200 text-slate-700"}`}>
                  <Heart className="mr-2 h-4 w-4" />
                  Add to wishlist
                </button>
              </div>

              {/* Accordions */}
              <div className={`mt-8 border-t ${isDark ? "border-white/10" : "border-slate-100"}`}>
                {["DETAILS", "REVIEWS", "SHIPPING & RETURN", "CARE INSTRUCTIONS"].map((tab) => (
                  <div key={tab} className={`border-b ${isDark ? "border-white/10" : "border-slate-100"}`}>
                    <button 
                      onClick={() => setActiveTab(activeTab === tab ? "" : tab)}
                      className="flex w-full items-center justify-between py-4"
                    >
                      <span className={`text-xs font-bold tracking-wider uppercase ${isDark ? "text-slate-200" : "text-slate-800"}`}>{tab}:</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${activeTab === tab ? "rotate-180" : ""}`} />
                    </button>
                    {activeTab === tab && (
                      <div className={`pb-4 text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                        {tab === "DETAILS" ? product.description : "Information for this section is currently unavailable. Please contact support for more details."}
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default ProductDetailDrawer;
