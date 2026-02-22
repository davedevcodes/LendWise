import SectionWrapper from "@/components/layout/SectionWrapper";
import Container from "@/components/layout/Container";

const steps = [
  {
    step: "01",
    title: "Fill the Application",
    desc: "Complete our simple 5-minute online form with your personal and financial details.",
    icon: "📝",
  },
  {
    step: "02",
    title: "Quick Review",
    desc: "Our smart system reviews your application within hours, not days.",
    icon: "🔍",
  },
  {
    step: "03",
    title: "Get Approved",
    desc: "Receive your approval decision with competitive rate offers tailored for you.",
    icon: "✅",
  },
  {
    step: "04",
    title: "Receive Funds",
    desc: "Once accepted, funds are deposited to your account within 1–2 business days.",
    icon: "💰",
  },
];

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" className="bg-gradient-to-br from-primary-600 to-primary-800">
      <Container>
        <div className="text-center mb-14">
          <span className="text-primary-200 text-sm font-semibold uppercase tracking-wider">Process</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            How It Works
          </h2>
          <p className="text-primary-200 max-w-xl mx-auto">
            Getting a loan has never been this straightforward. Four simple steps stand between you and your funds.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-white/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.step} className="relative text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-3xl group-hover:bg-white/20 transition-colors">
                  {step.icon}
                </div>
                <div className="inline-block px-3 py-1 rounded-lg bg-white/10 text-primary-200 text-xs font-bold mb-3">
                  Step {step.step}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-primary-200 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
