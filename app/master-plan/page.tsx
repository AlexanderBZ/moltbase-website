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
            heading="Mission Statement"
            description="Our mission is to revolutionize the way teams collaborate and achieve their goals. We believe that with the right tools and mindset, every organization can unlock its full potential and create meaningful impact in their industry."
          />
          <CompantInfoSection
            heading="The Company"
            description="Founded on the principles of innovation and excellence, our company has grown from a small startup to a leading force in the industry. We pride ourselves on our diverse team of experts who bring unique perspectives and cutting-edge solutions to complex challenges."
          />
          <CompantInfoSection
            heading="The Present"
            description="Today's business landscape is rapidly evolving, with organizations facing unprecedented challenges in efficiency, collaboration, and growth. Many companies struggle with outdated processes, siloed departments, and the inability to adapt quickly to market changes."
          />
          <CompantInfoSection
            heading="The Possibility"
            description="We envision a future where businesses operate seamlessly, where data-driven decisions are the norm, and where teams collaborate effortlessly across geographical boundaries. The potential for transformation is immense when the right technology meets visionary leadership."
          />
          <CompantInfoSection
            heading="The Solution"
            description="Our comprehensive platform addresses these challenges head-on by providing intuitive tools that streamline workflows, enhance communication, and deliver actionable insights. We combine advanced analytics with user-friendly interfaces to create solutions that actually get used."
          />
          <CompantInfoSection
            heading="How We Can Do It"
            description="Through continuous innovation, strategic partnerships, and a deep understanding of our customers' needs, we deliver solutions that make a real difference. Our agile development process ensures we stay ahead of trends while maintaining the reliability and security our clients depend on."
          />
          <CompantInfoSection
            heading="Conclusion"
            description="The future belongs to organizations that embrace change and leverage technology to drive growth. Together, we can build a more efficient, connected, and successful business world. Join us on this journey to transform the way work gets done."
          />
        </div>
        <Footer />
      </PagePadding>
    </>
  );
};

export default About;
