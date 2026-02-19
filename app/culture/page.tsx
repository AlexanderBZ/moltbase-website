"use client";

import PagePadding from "@/components/landing/page-padding";
import LandingHeader from "@/components/landing/landing-header";
import Footer from "@/components/landing/landing-footer";
import CompantInfoSection from "@/components/shared/company-info-section";

const About = () => {
  return (
    <>
      <PagePadding className="flex flex-col gap-0 bg-background">
        <LandingHeader />
        <div className="flex flex-col gap-10 py-16">
          <CompantInfoSection
            heading="Origin"
            description="Our company was born from a simple observation: the best ideas emerge when talented people come together in an environment that celebrates creativity, encourages risk-taking, and values authentic collaboration. Founded by a diverse group of entrepreneurs, we set out to build not just a successful business, but a workplace where people could do their best work while staying true to themselves."
          />
          <CompantInfoSection
            heading="Mission"
            description="We exist to empower individuals and organizations to reach their full potential through innovative solutions and meaningful connections. Our mission extends beyond profit to include making a positive impact on our communities, fostering inclusive growth, and creating technology that genuinely improves people's lives and work experiences."
          />
          <CompantInfoSection
            heading="Vision"
            description="We envision a world where work is fulfilling, where diverse perspectives are not just welcomed but actively sought, and where technology serves humanity rather than the other way around. Our vision is to be recognized as a company that consistently delivers exceptional value while maintaining the highest standards of ethics, sustainability, and social responsibility."
          />
          <CompantInfoSection
            heading="Values"
            description="Integrity guides every decision we make. Innovation drives us to constantly push boundaries and challenge the status quo. Inclusion ensures every voice is heard and valued. Impact motivates us to create solutions that matter. Collaboration powers our success, recognizing that our collective achievements far exceed what any individual could accomplish alone."
          />
          <CompantInfoSection
            heading="Conclusion"
            description="Our culture is our competitive advantage. It's what attracts top talent, drives innovation, and keeps our customers coming back. We're not just building products; we're building a legacy of positive change, one relationship and one solution at a time. Join us in creating a future where business success and human flourishing go hand in hand."
          />
        </div>
        <Footer />
      </PagePadding>
    </>
  );
};

export default About;
