function Spinner({ className = "" }) {
  return (
    <div
      className={`h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white ${className}`}
      aria-label="Loading"
      role="status"
    />
  );
}

export default Spinner;

