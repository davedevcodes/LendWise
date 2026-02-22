"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: "📊" },
  { href: "/admin#applications", label: "Applications", icon: "📋" },
  { href: "/", label: "View Website", icon: "🌐" },
  { href: "/apply", label: "Apply Page", icon: "📝" },
];

export default function Sidebar({ onClose }) {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-linear-to-br from-navy-900 via-primary-900 to-navy-900 text-white flex flex-col h-full min-h-screen">
      {/* Logo + mobile close button */}
      <div className="p-6 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-primary-500 to-primary-700 flex items-center justify-center shrink-0">
            <span className="font-bold text-sm">L</span>
          </div>
          <div>
            <div className="font-display font-bold text-lg leading-tight">LendWise</div>
            <div className="text-xs text-gray-400">Admin Panel</div>
          </div>
        </div>

        {/* Close button — mobile only */}
        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
              pathname === item.href
                ? "bg-primary-600 text-white"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <span>{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-xs font-bold shrink-0">
            AD
          </div>
          <div className="min-w-0">
            <div className="text-sm font-medium truncate">Admin</div>
            <div className="text-xs text-gray-400 truncate">admin@lendwise.com</div>
          </div>
        </div>
      </div>
    </aside>
  );
}