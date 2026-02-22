export default function FormSelect({ label, id, options, error, required = false, placeholder = "Select an option", ...props }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={id}
        className={`
          w-full px-4 py-3 rounded-xl text-gray-400 text-sm bg-white/10 hover:bg-white/20font-semibold transition-all duration-200 border border-white/20 backdrop-blur-sm
         outline-none appearance-none cursor-pointer
          ${error
            ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
            : "border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
          }
        `}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value || opt} value={opt.value || opt}>
            {opt.label || opt}
          </option>
        ))}
      </select>
      {error && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">⚠ {error}</p>}
    </div>
  );
}
