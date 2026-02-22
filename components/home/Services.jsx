import SectionWrapper from "@/components/layout/SectionWrapper";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import Link from "next/link";

const services = [
  {
    icon: "👤",
    title: "Personal Loans",
    desc: "Cover unexpected expenses, consolidate debt, or fund a major purchase.",
    rate: "From 5.99% APR",
    amount: "Up to $50,000",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: "🏢",
    title: "Business Loans",
    desc: "Fuel your business growth with flexible funding and fast approvals.",
    rate: "From 6.99% APR",
    amount: "Up to $500,000",
    color: "from-indigo-500 to-purple-600",
  },
  {
    icon: "🏠",
    title: "Mortgages",
    desc: "Turn your dream home into reality with competitive mortgage rates.",
    rate: "From 3.5% APR",
    amount: "Up to $2,000,000",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: "🚗",
    title: "Auto Loans",
    desc: "Drive away in your dream car with low-rate auto financing.",
    rate: "From 4.49% APR",
    amount: "Up to $100,000",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: "🎓",
    title: "Education Loans",
    desc: "Invest in your future with student-friendly loan options.",
    rate: "From 3.99% APR",
    amount: "Up to $150,000",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: "🏥",
    title: "Medical Loans",
    desc: "Get the healthcare you need without financial stress.",
    rate: "From 5.49% APR",
    amount: "Up to $75,000",
    color: "from-cyan-500 to-blue-600",
  },
];

export default function Services() {
  return (
    <SectionWrapper id="services">
      <Container>
        <div className="text-center mb-14">
          <span className="text-primary-600 text-sm font-semibold uppercase tracking-wider">Our Services</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 mt-3 mb-4">
            Loans for Every <span className="text-primary-600">Need</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Whatever your financial goal, we have a loan product designed to help you get there — quickly and affordably.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Card key={s.title} hover className="relative overflow-hidden group bg-white/10 hover:bg-white/20 text-white font-semibold transition-all duration-200 border border-white/20 backdrop-blur-sm">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${s.color} opacity-5 rounded-full -translate-y-8 translate-x-8 group-hover:opacity-10 transition-opacity`} />
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-bold text-navy-900 text-lg mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">{s.desc}</p>
              <div className="flex gap-4 pt-4 border-t border-gray-100">
                <div>
                  <div className="text-xs text-gray-400">Rate</div>
                  <div className="text-sm font-semibold text-primary-600">{s.rate}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Amount</div>
                  <div className="text-sm font-semibold text-navy-900">{s.amount}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-colors"
          >
            Apply for a Loan →
          </Link>
        </div>
      </Container>
    </SectionWrapper>
  );
}
