export default function FormTextarea({ label, id, error, required = false, rows = 4, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={id}
        rows={rows}
        className={`
          w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-400 bg-white/10 hover:bg-white/20 font-semibold border-white/20 backdrop-blur-sm resize-none
          transition-all duration-200 outline-none
          ${error
            ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
            : "border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
          }
        `}
        {...props}
      />
      {error && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">⚠ {error}</p>}
    </div>
  );
}
