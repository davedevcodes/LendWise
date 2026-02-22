import SectionWrapper from "@/components/layout/SectionWrapper";
import Container from "@/components/layout/Container";
import Link from "next/link";

export default function CTA() {
  return (
    <SectionWrapper className="bg-linear-to-br from-navy-900 via-primary-900 to-navy-900">
      <Container>
        <div className="relative bg-linear-to-br from-purple-900 to-primary-900 rounded-3xl p-10 md:p-16 overflow-hidden text-center">
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Ready to Take the Next <span className="text-primary-300">Financial Step?</span>
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
              Join 50,000+ customers who trust LendWise. Apply in minutes and get a decision in hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply"
                className="px-8 py-4 rounded-xl bg-primary-500 hover:bg-primary-400 text-white font-semibold text-lg transition-all shadow-xl shadow-primary-500/30"
              >
                Start Your Application →
              </Link>
              <Link
                href="/policy"
                className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-lg transition-all border border-white/20"
              >
                Read Our Policy
              </Link>
            </div>
            <p className="text-white/30 text-sm mt-6">No credit score impact to check your rate.</p>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
