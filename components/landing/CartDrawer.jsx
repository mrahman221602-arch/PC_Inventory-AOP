import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react";
import { uiTone } from "./shared";

function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  totalPrice,
  onIncreaseQty,
  onDecreaseQty,
  onRemoveItem,
  onClearCart,
  isDark = true,
}) {
  return (
    <AnimatePresence>
      {isOpen && (
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
              <h3 className={`flex items-center gap-2 text-xl font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                <ShoppingCart className="h-5 w-5 text-primary-500" /> Your Cart
              </h3>
              <button 
                className={`rounded-full p-2 transition-colors ${isDark ? "hover:bg-white/10 text-slate-400 hover:text-white" : "hover:bg-slate-100 text-slate-500 hover:text-slate-900"}`} 
                onClick={onClose}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto px-6 py-6 custom-scrollbar">
              {cartItems.length === 0 ? (
                <div className={`mt-10 rounded-2xl border p-12 text-center flex flex-col items-center justify-center ${isDark ? "border-white/10 bg-white/5 text-slate-400" : "border-slate-200 bg-slate-50 text-slate-500"}`}>
                  <ShoppingCart className="mb-4 h-12 w-12 opacity-20" />
                  <p>Your cart is empty.</p>
                  <p className="mt-1 text-sm">Add some amazing components to get started.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className={`flex gap-4 rounded-2xl border p-4 transition-colors ${isDark ? "border-white/10 bg-white/5 hover:border-white/20" : "border-slate-200 bg-white hover:border-slate-300"}`}>
                      <div className={`h-20 w-20 shrink-0 overflow-hidden rounded-xl p-2 ${isDark ? "bg-white/5" : "bg-slate-50"}`}>
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="h-full w-full object-contain mix-blend-multiply" 
                          style={isDark ? { filter: 'brightness(0.9) contrast(1.1)' } : {}}
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className={`text-sm font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>{item.name}</p>
                            <p className={`text-[10px] uppercase tracking-wider ${isDark ? "text-slate-400" : "text-slate-500"}`}>{item.category}</p>
                          </div>
                          <button onClick={() => onRemoveItem(item.id)} className={`p-1 transition-colors hover:text-red-500 ${isDark ? "text-slate-400" : "text-slate-400"}`}>
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="flex items-end justify-between">
                          <div className="flex items-center gap-1 rounded-lg border p-1 border-slate-200 dark:border-white/10">
                            <button onClick={() => onDecreaseQty(item.id)} className={`rounded p-1 transition-colors ${isDark ? "hover:bg-white/10" : "hover:bg-slate-100"}`}>
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-6 text-center text-xs font-semibold">{item.qty}</span>
                            <button onClick={() => onIncreaseQty(item.id)} className={`rounded p-1 transition-colors ${isDark ? "hover:bg-white/10" : "hover:bg-slate-100"}`}>
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <p className={`text-sm font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>${(item.qty * item.price).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className={`border-t px-6 py-6 ${isDark ? "border-white/10 bg-[#121313]" : "border-slate-100 bg-white"}`}>
                <div className="mb-6 flex flex-col gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className={isDark ? "text-slate-400" : "text-slate-500"}>Subtotal</span>
                    <span className={`font-semibold ${isDark ? "text-slate-200" : "text-slate-800"}`}>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={isDark ? "text-slate-400" : "text-slate-500"}>Shipping</span>
                    <span className={`font-semibold ${isDark ? "text-slate-200" : "text-slate-800"}`}>Calculated at checkout</span>
                  </div>
                  <div className={`mt-2 flex justify-between border-t pt-3 ${isDark ? "border-white/10" : "border-slate-100"}`}>
                    <span className={`text-base font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>Total</span>
                    <span className={`text-xl font-bold text-primary-500`}>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button onClick={onClearCart} className={`h-12 flex-1 rounded-xl border text-sm font-bold transition-colors ${isDark ? "border-white/20 text-slate-200 hover:bg-white/5" : "border-slate-200 text-slate-700 hover:bg-slate-50"}`}>
                    Clear
                  </button>
                  <button className={`h-12 flex-[2] rounded-xl bg-primary-500 text-sm font-bold text-white shadow-lg shadow-primary-500/20 transition-transform hover:scale-[1.02]`}>
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default CartDrawer;
