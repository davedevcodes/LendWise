export default function Input({ label, error, className = "", ...props }) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
      )}
      <input
        className={`
          w-full px-4 py-2.5 rounded-xl border text-sm text-gray-900 placeholder-gray-400
          transition-all duration-200 outline-none
          ${error ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200" : "border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100"}
          ${className}
        `}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
