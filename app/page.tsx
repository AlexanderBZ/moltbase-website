import PagePadding from "@/components/landing/page-padding";
import LandingHeader from "@/components/landing/landing-header";
import LandingHero from "@/components/landing/landing-hero";
import Footer from "@/components/landing/landing-footer";
import LandingGetStarted from "@/components/landing/landing-get-started";
import LandingFAQ from "@/components/landing/landing-faq";
import FeaturesGrid from "@/components/landing/features-grid";

const Landing = () => {
  return (
    // Force light mode for the landing page only
    <PagePadding className="flex flex-col gap-0 w-full bg-background">
      {/* Header */}
      <LandingHeader />

      {/* Hero */}
      <LandingHero
        title={"Your Early-Stage Product Compass"}
        subtitle={
          "Decide what to build next - before you burn a sprint. Run instant AI-driven simulations that show which features delight users, crush churn, and move the metrics that matter."
        }
        buttonTitle="Get A Demo"
        href="/demo"
      />

      {/* Feature Highlights */}
      <FeaturesGrid
        title="What You Can Do With Atlas View"
        subtitle="Transform feature ideas into data-driven decisions in minutes, not weeks."
        features={[
          {
            image: "",
            title: "Upload an Idea",
            description:
              "Share your feature concept in plain English or import directly from Jira/Linear tickets.",
          },
          {
            image: "",
            title: "Define Success",
            description:
              "Select your key metrics (activation, retention, MRR, NPS) and target customer segments.",
          },
          {
            image: "",
            title: "Run the Sim",
            description:
              "Watch AI agents that mirror your ideal customers interact with your proposed features in a realistic market context.",
          },
          {
            image: "",
            title: "Get an Action Card",
            description:
              "Receive clear guidance: 🚦 Ship it, 🛠️ Refine it, or ❌ Shelf it - with specific design recommendations and risk assessments.",
          },
        ]}
      />

      {/* FAQ */}
      <LandingFAQ
        faqItems={[
          {
            question: "Who is Atlas View built for?",
            answer:
              "Seed & Series A founders with ≤ 20 engineers building B2B SaaS or prosumer apps fighting for product-market fit. Perfect for teams that care about speed, conviction, and runway conservation over exhaustive research decks.",
          },
          {
            question: "How accurate are the simulations?",
            answer:
              "Our behavioral LLM agents use dynamic competitor models that research Crunchbase, Product Hunt, and social chatter for real-time market intelligence.",
          },
          {
            question: "What data do I need to get started?",
            answer:
              "Just describe your feature idea in plain English and answer any follow up questions from our AI assistant. Our agents conduct thorough company research to provide relevant insights for your business context.",
          },
          {
            question: "How does this save development time?",
            answer:
              "Instead of building features blindly or spending weeks on user research, get data-backed go/no-go decisions in minutes. Kill bad ideas fast, double-down on winners.",
          },
          {
            question: "What does pricing look like?",
            answer:
              "We offer custom pricing tailored to your organization's specific needs and usage requirements. Sign up for a demo for a personalized consultation.",
          },
        ]}
      />

      {/* Call to Action */}
      <LandingGetStarted
        title="Ready to pick winning features daily?"
        subtitle="Stop second-guessing. Start shipping the right stuff, faster."
        buttonTitle="Get A Demo"
        href="/demo"
      />

      {/* Footer */}
      <Footer />
    </PagePadding>
  );
};

export default Landing;
