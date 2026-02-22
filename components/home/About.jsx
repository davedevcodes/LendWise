import SectionWrapper from "@/components/layout/SectionWrapper";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";

const values = [
  { icon: "🔒", title: "Secure & Trusted", desc: "Bank-level encryption and compliance for all your data." },
  { icon: "⚡", title: "Lightning Fast", desc: "Get approved in under 24 hours with our smart review system." },
  { icon: "💡", title: "Smart Solutions", desc: "AI-powered matching for the best loan products for your needs." },
  { icon: "🤝", title: "Human Support", desc: "Real advisors available 24/7 to guide you through every step." },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-linear-to-br from-navy-900 via-primary-900 to-navy-900">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="text-primary-600 text-sm font-semibold uppercase tracking-wider">About LendWise</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 mt-3 mb-6 leading-tight">
              Financing Made <span className="text-primary-600">Simple</span> for Everyone
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              LendWise is a modern fintech platform committed to removing barriers in financial lending. We leverage technology to make loan applications faster, fairer, and more transparent.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Founded in 2020, we have helped over 50,000 individuals and businesses achieve their financial goals with over $2.4 billion in loans disbursed across 40 states.
            </p>
            <div className="flex gap-8">
              <div>
                <div className="text-3xl font-bold text-primary-600 font-display">98%</div>
                <div className="text-sm text-gray-500">Customer Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 font-display">3.2%</div>
                <div className="text-sm text-gray-500">Starting Interest Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 font-display">5min</div>
                <div className="text-sm text-gray-500">Application Time</div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((v) => (
              <Card key={v.title} hover className="flex flex-col gap-3 bg-white/10 hover:bg-white/20 text-white font-semibold transition-all duration-200 border border-white/20 backdrop-blur-sm">
                <div className="text-4xl">{v.icon}</div>
                <h3 className="font-semibold text-navy-900 text-lg">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
