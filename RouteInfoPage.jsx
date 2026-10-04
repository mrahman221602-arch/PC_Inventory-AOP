import { Link } from "react-router-dom";

function RouteInfoPage({ title, description, isDark }) {
  return (
    <div className={`min-h-[70vh] ${isDark ? "bg-secondary text-slate-100" : "bg-slate-100 text-slate-900"}`}>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
        <p className={`mt-3 max-w-2xl text-[1rem] leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
          {description}
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex h-10 items-center rounded-xl bg-gradient-to-r from-primary-500 to-primary-500 px-5 text-sm font-semibold text-white"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RouteInfoPage;
