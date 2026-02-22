export default function PolicySection({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="font-display text-2xl font-bold text-navy-900 mb-4 pb-3 border-b border-gray-200">{title}</h2>
      <div className="text-gray-600 leading-relaxed space-y-4">{children}</div>
    </section>
  );
}
