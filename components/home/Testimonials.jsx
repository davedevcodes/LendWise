import SectionWrapper from "@/components/layout/SectionWrapper";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    avatar: "SJ",
    rating: 5,
    text: "LendWise made my business expansion possible. The process was incredibly smooth and the team was helpful every step of the way. Got approved in just 18 hours!",
    amount: "$75,000 Business Loan",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    avatar: "MC",
    rating: 5,
    text: "I was skeptical at first but the rates were genuinely competitive and the application took me only 5 minutes. Funds hit my account the next morning.",
    amount: "$20,000 Personal Loan",
  },
  {
    name: "Priya Sharma",
    role: "Medical Professional",
    avatar: "PS",
    rating: 5,
    text: "As a doctor I was looking for a medical practice loan. LendWise had the best rates and the most transparent terms I found anywhere. Highly recommend.",
    amount: "$150,000 Medical Loan",
  },
  {
    name: "David Martinez",
    role: "First-time Homebuyer",
    avatar: "DM",
    rating: 4,
    text: "The mortgage process is stressful but LendWise made it manageable. Their advisors walked me through everything and found me a great rate for my first home.",
    amount: "$320,000 Mortgage",
  },
  {
    name: "Emma Williams",
    role: "Graduate Student",
    avatar: "EW",
    rating: 5,
    text: "Financing my MBA was a big decision. LendWise offered flexible repayment terms that work with my student budget. Couldn't be happier with my choice.",
    amount: "$45,000 Education Loan",
  },
  {
    name: "James Roberts",
    role: "Real Estate Investor",
    avatar: "JR",
    rating: 5,
    text: "Third time using LendWise for business financing. Consistently fast, fair, and professional. They understand the needs of investors better than traditional banks.",
    amount: "$200,000 Business Loan",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < rating ? "text-amber-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="bg-linear-to-br from-navy-900 via-primary-900 to-navy-900">
      <Container>
        <div className="text-center mb-14">
          <span className="text-primary-600 text-sm font-semibold uppercase tracking-wider">Testimonials</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 mt-3 mb-4">
            What Our Customers <span className="text-primary-600">Say</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Real stories from real people who achieved their financial goals with LendWise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.name} hover className="flex flex-col gap-4 bg-white/10 hover:bg-white/20 text-white font-semibold transition-all duration-200 border border-white/20 backdrop-blur-sm">
              <StarRating rating={t.rating} />
              <p className="text-gray-600 text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
              <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-navy-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
                <div className="ml-auto">
                  <div className="text-xs font-medium text-primary-600 text-right">{t.amount}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
