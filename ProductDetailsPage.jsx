import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { products } from "./components/landing/data";
import Spinner from "./components/Spinner";

function ProductDetailsPage({ isDark, onAddToCart, addingId }) {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === String(id));

  if (!product) {
    return (
      <div className={`min-h-[70vh] ${isDark ? "bg-secondary text-slate-100" : "bg-slate-100 text-slate-900"}`}>
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className={isDark ? "text-slate-300" : "text-slate-600"}>Product not found.</p>
          <Link to="/products" className="mt-4 inline-flex h-10 items-center rounded-xl bg-gradient-to-r from-primary-500 to-primary-500 px-5 text-sm font-semibold text-white">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDark ? "bg-secondary text-slate-100" : "bg-slate-100 text-slate-900"}`}>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Link to="/products" className={`inline-flex items-center text-sm ${isDark ? "text-primary-300" : "text-primary-700"}`}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          <div className={`overflow-hidden rounded-2xl border ${isDark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white"}`}>
            <img src={product.image} alt={product.name} className="h-[360px] w-full object-cover" />
          </div>

          <div>
            <div className="flex items-center gap-3">
              <span className={`rounded-full px-3 py-1 text-xs font-medium ${isDark ? "bg-primary-500/15 text-primary-200" : "bg-primary-100 text-primary-700"}`}>
                {product.category}
              </span>
              <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${product.stock === "Low Stock" ? (isDark ? "bg-primary-500/15 text-primary-200" : "bg-primary-100 text-primary-700") : (isDark ? "bg-primary-500/15 text-primary-200" : "bg-primary-100 text-primary-700")}`}>
                <CheckCircle2 className="h-3.5 w-3.5" /> {product.stock}
              </span>
            </div>

            <h1 className="mt-4 text-4xl font-bold tracking-tight">{product.name}</h1>
            <p className={`mt-3 max-w-xl text-[0.98rem] leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              {product.description}
            </p>

            <div className="mt-6 flex items-end gap-3">
              <div className={`text-3xl font-bold ${isDark ? "text-primary-300" : "text-primary-700"}`}>${product.price}</div>
              {product.oldPrice ? (
                <div className={`pb-1 text-sm line-through ${isDark ? "text-slate-400" : "text-slate-500"}`}>${product.oldPrice}</div>
              ) : null}
              {product.discountPct ? (
                <div className={`pb-1 text-sm font-semibold ${isDark ? "text-primary-300" : "text-primary-600"}`}>-{product.discountPct}%</div>
              ) : null}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => onAddToCart?.(product)}
                disabled={addingId === product.id}
                className={`inline-flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-primary-500 to-primary-500 px-6 text-sm font-semibold text-white ${
                  addingId === product.id ? "opacity-90" : ""
                }`}
              >
                {addingId === product.id ? (
                  <span className="inline-flex items-center gap-2">
                    <Spinner />
                    Adding...
                  </span>
                ) : (
                  "Add to Cart"
                )}
              </button>
              <Link
                to="/build-pc"
                className={`inline-flex h-11 items-center justify-center rounded-xl border px-6 text-sm font-medium ${isDark ? "border-white/20 text-slate-100" : "border-slate-300 text-slate-700"}`}
              >
                Use in Build
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
