import { ShoppingCart } from "lucide-react";
import Spinner from "../Spinner";

function ProductCard({ product, isDark, onAddToCart, isAdding = false, onSelect }) {
  return (
    <div 
      className={`group overflow-hidden rounded-none p-4 transition-all hover:shadow-xl ${
        isDark ? "border border-white/10 bg-white/5 hover:border-white/20" : "border border-slate-200 bg-white hover:border-slate-300"
      }`}
    >
      <div 
        className={`relative mb-4 aspect-[4/3] cursor-pointer overflow-hidden p-4 ${isDark ? "bg-white/5" : "bg-slate-50"}`} 
        onClick={onSelect}
      >
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-xl mix-blend-multiply" 
          style={isDark ? { filter: 'brightness(0.9) contrast(1.1)' } : {}}
        />
      </div>

      <div>
        <h3 className={`text-lg font-bold cursor-pointer transition-colors hover:text-primary-500 ${isDark ? "text-slate-100" : "text-slate-900"}`} onClick={onSelect}>
          {product.name}
        </h3>
        
        <div className={`mt-3 flex items-center justify-between text-[11px] uppercase tracking-wider ${isDark ? "text-slate-400" : "text-slate-500"}`}>
          <div className="flex gap-1.5 items-center">
            <span>Sold:</span> <span className={isDark ? "text-slate-200 font-semibold" : "text-slate-800 font-semibold"}>{product.reviews * 12}pcs</span>
          </div>
          <div className="flex gap-1.5 items-center">
            <span>Avail:</span> <span className={isDark ? "text-slate-200 font-semibold" : "text-slate-800 font-semibold"}>{product.stock === "In Stock" ? "300pcs" : "80pcs"}</span>
          </div>
        </div>

        <div className={`mt-3 flex items-center justify-between text-[11px] uppercase tracking-wider ${isDark ? "text-slate-400" : "text-slate-500"}`}>
          <div className="flex items-center gap-2">
            <span>Color</span>
            <div className="flex items-center gap-1">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500 ring-1 ring-offset-1 ring-transparent ring-offset-[#121313] hover:ring-red-500 cursor-pointer"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-blue-500 ring-1 ring-offset-1 ring-transparent ring-offset-[#121313] hover:ring-blue-500 cursor-pointer"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-green-500 ring-1 ring-offset-1 ring-transparent ring-offset-[#121313] hover:ring-green-500 cursor-pointer"></span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span>Size</span>
            <select className={`bg-transparent outline-none cursor-pointer font-semibold ${isDark ? "text-slate-200" : "text-slate-800"}`}>
              <option>US 8.0</option>
              <option>US 8.5</option>
              <option>US 9.0</option>
            </select>
          </div>
        </div>

        <div className={`mt-5 pt-4 border-t flex items-end justify-between ${isDark ? "border-white/10" : "border-slate-100"}`}>
          <div>
            <p className={`text-[11px] uppercase tracking-wider mb-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}>Price</p>
            <p className={`text-2xl font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
              ${product.price}
            </p>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); onAddToCart?.(product); }}
            disabled={isAdding}
            className={`flex h-11 items-center justify-center border px-4 text-sm font-semibold transition-all duration-300 ${
              isDark 
                ? "border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white hover:shadow-[0_0_15px_rgba(255,96,68,0.4)]" 
                : "border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            }`}
          >
            {isAdding ? (
              <Spinner />
            ) : (
              <>
                <ShoppingCart className="h-[18px] w-[18px]" />
                <span className="ml-2 w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:w-auto group-hover:opacity-100 lg:w-0 lg:opacity-0">
                  Add to cart
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
