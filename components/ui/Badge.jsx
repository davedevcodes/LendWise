const variants = {
  success: "bg-emerald-100 text-emerald-700",
  warning: "bg-amber-100 text-amber-700",
  danger: "bg-red-100 text-red-700",
  info: "bg-blue-100 text-blue-700",
  neutral: "bg-gray-100 text-gray-700",
  primary: "bg-primary-100 text-primary-700",
};

export default function Badge({ children, variant = "neutral", className = "" }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-semibold ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
