import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import LoanForm from "@/components/apply/LoanForm";
import Card from "@/components/ui/Card";

export const metadata = {
  title: "Apply for a Loan – LendWise",
  description: "Fill out our simple application form to apply for a loan.",
};

const highlights = [
  { icon: "⚡", title: "Fast Decision", desc: "Get a decision within 24 hours" },
  { icon: "🔒", title: "Secure", desc: "256-bit encryption on all data" },
  { icon: "💯", title: "No Hidden Fees", desc: "Transparent terms, always" },
];

export default function ApplyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-linear-to-br from-navy-900 via-primary-900 to-navy-900 pt-24 pb-20">
        <Container>
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-primary-600 text-sm font-semibold uppercase tracking-wider">Loan Application</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-navy-900 mt-3 mb-4">
              Apply in Minutes
            </h1>
            <p className="text-gray-500 max-w-lg mx-auto">
              Complete the form below and our team will review your application promptly.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
            {highlights.map((h) => (
              <div key={h.title} className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-lg transition-all duration-200 border border-white/20 backdrop-blur-sm rounded-xl p-4">
                <span className="text-2xl">{h.icon}</span>
                <div>
                  <div className="text-sm font-semibold text-navy-900">{h.title}</div>
                  <div className="text-xs text-gray-400">{h.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <Card className="max-w-3xl mx-auto" padding={false}>
            <div className="p-8">
              <LoanForm />
            </div>
          </Card>
        </Container>
      </main>
      <Footer />
    </>
  );
}
