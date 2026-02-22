import Link from "next/link";
import Container from "./Container";

const footerLinks = {
  Company: ["About Us", "Careers", "Press", "Blog"],
  Services: ["Personal Loans", "Business Loans", "Mortgages", "Auto Loans"],
  Support: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"],
};

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="font-display font-bold text-xl">LendWise</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Empowering individuals and businesses with smart, accessible financing solutions. Fast approvals, competitive rates.
            </p>
            <div className="flex gap-4 mt-6">
              {["twitter", "linkedin", "facebook"].map((s) => (
                <a key={s} href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                  <span className="text-xs text-gray-400 capitalize">{s[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} LendWise. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/policy" className="text-gray-500 text-sm hover:text-white transition-colors">Privacy</Link>
            <Link href="/policy" className="text-gray-500 text-sm hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
