import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import PolicySection from "@/components/policy/PolicySection";

export const metadata = {
  title: "Loan Policy – LendWise",
  description: "Read our lending policies, eligibility requirements, and terms.",
};

export default function PolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-linear-to-br from-navy-900 via-primary-900 to-navy-900 pt-24 pb-20">
        <Container className="max-w-4xl">
          {/* Header */}
          <div className="mb-12 pb-8 border-b border-gray-200">
            <span className="text-primary-600 text-sm font-semibold uppercase tracking-wider">Legal</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-navy-900 mt-3 mb-4">
              Loan Policy & Terms
            </h1>
            <p className="text-gray-500">Last updated: January 1, 2025. Please read these policies carefully before applying.</p>
          </div>

          <PolicySection title="1. Eligibility Requirements">
            <p>To be eligible for a loan through LendWise, applicants must meet the following criteria:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Be at least 18 years of age at the time of application</li>
              <li>Be a legal resident or citizen of the United States</li>
              <li>Have a valid government-issued photo ID</li>
              <li>Have a verifiable source of income or employment</li>
              <li>Maintain an active bank account in your name</li>
              <li>Have a minimum credit score of 580 for most loan products</li>
            </ul>
          </PolicySection>

          <PolicySection title="2. Loan Products and Rates">
            <p>LendWise offers a range of loan products designed to fit various financial needs. Interest rates vary based on creditworthiness, loan type, amount, and repayment term. Our current Annual Percentage Rates (APR) range from 3.49% to 29.99%, depending on the product and the applicant's financial profile.</p>
            <p>All advertised rates represent the lowest available rate for the most qualified applicants. The actual rate offered to you may differ based on your credit history, income verification, debt-to-income ratio, and other factors considered during underwriting.</p>
          </PolicySection>

          <PolicySection title="3. Loan Terms and Repayment">
            <p>Loan terms range from 12 to 84 months depending on the loan type and amount. All repayments are made in equal monthly installments on a fixed schedule unless otherwise agreed upon in writing.</p>
            <p>Early repayment is permitted without penalty for most loan products. Please review your specific loan agreement for terms applicable to your loan.</p>
          </PolicySection>

          <PolicySection title="4. Privacy and Data Protection">
            <p>LendWise is committed to protecting your personal and financial information. All data submitted through our platform is encrypted using industry-standard 256-bit SSL encryption. We do not sell your personal information to third parties.</p>
            <p>We collect information necessary to process your loan application, comply with regulatory requirements, and improve our services. We may share information with credit bureaus, identity verification services, and banking partners as required to fulfill your loan request.</p>
          </PolicySection>

          <PolicySection title="5. Fees and Charges">
            <p>LendWise is committed to transparency in all fees. The following charges may apply:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Origination Fee:</strong> 0%–5% of loan amount, deducted from disbursement</li>
              <li><strong>Late Payment Fee:</strong> $15 or 5% of the payment amount, whichever is greater</li>
              <li><strong>Returned Payment Fee:</strong> $25 per occurrence</li>
              <li><strong>Prepayment Penalty:</strong> None for most products</li>
            </ul>
          </PolicySection>

          <PolicySection title="6. Application Process and Decisions">
            <p>Submitting an application does not guarantee loan approval. LendWise reserves the right to approve, conditionally approve, or deny any application based on underwriting criteria. We will notify applicants of decisions typically within 24–72 hours of application submission.</p>
            <p>We evaluate applications using a holistic review including credit history, income verification, employment stability, debt-to-income ratio, and the purpose of the loan. Denied applicants may request a written explanation of the decision.</p>
          </PolicySection>

          <PolicySection title="7. Responsible Lending Commitment">
            <p>LendWise is committed to responsible lending practices. We encourage all applicants to carefully consider their financial situation before applying for a loan. Borrowing more than you can afford to repay can lead to financial hardship. Our advisors are available to help you determine the right loan product and amount for your circumstances.</p>
            <p>If you experience financial hardship during your loan term, please contact us immediately. We offer hardship plans and modified repayment options to help borrowers in need.</p>
          </PolicySection>

          <PolicySection title="8. Contact Us">
            <p>If you have questions about these policies or your loan, please contact our support team:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Email: support@lendwise.com</li>
              <li>Phone: 1-800-LENDWISE (Mon–Fri, 8am–8pm EST)</li>
              <li>Address: 123 Financial District, New York, NY 10004</li>
            </ul>
          </PolicySection>
        </Container>
      </main>
      <Footer />
    </>
  );
}
