"use client";

import PagePadding from "@/components/landing/page-padding";
import LandingHeader from "@/components/landing/landing-header";
import Footer from "@/components/landing/landing-footer";
import FeaturesGrid from "@/components/landing/features-grid";
import MissionStatement from "@/components/landing/mission-statement";

const AboutUs = () => {
  return (
    <>
      <PagePadding className="flex flex-col gap-0 bg-background">
        <LandingHeader />
        <MissionStatement
          heading="Why We're Fixing Product Documentation's Broken Core"
          description="We built Atlas View after watching countless brilliant product teams get crushed by the same problem: endless documentation cycles that drain time and resources without delivering clarity. Our mission is to transform the PRD creation process—converting days of frustrating documentation work into minutes of productive creation. By leveraging AI to create comprehensive, structured product requirements documents, we're helping product teams document requirements twice as fast while maintaining perfect clarity for development teams."
          imageSrc="/pngs/about-preview.png"
          imageAlt="Illustration of product managers using Atlas View"
        />
        <FeaturesGrid
          title="Our Uncompromising Standards"
          subtitle="We refuse to accept the status quo of broken product documentation"
          features={[
            {
              image: "",
              title: "Time Is Everything",
              description:
                "Every minute your team wastes on documentation is a minute you're not building. We're obsessed with reclaiming those precious hours through intelligent AI-assisted PRD creation and automated health analysis.",
            },
            {
              image: "",
              title: "Documentation Without Drudgery",
              description:
                "Great products require clear requirements, but creating them shouldn't be painful. We've engineered a system where comprehensive PRDs become a natural byproduct of your thinking, with health scores that guide continuous improvement.",
            },
            {
              image: "",
              title: "Completeness Is Non-Negotiable",
              description:
                "Incomplete PRDs cause costly mistakes and delays. Our AI-powered health analysis ensures every critical requirement is captured by automatically identifying gaps, measuring quality, and suggesting targeted improvements.",
            },
            {
              image: "",
              title: "Structure Creates Clarity",
              description:
                "Disorganized requirements confuse development teams. Our platform supports your custom templates while enforcing logical structure and organization that makes complex requirements instantly understandable.",
            },
            {
              image: "",
              title: "Tools Should Think Like PMs",
              description:
                "We've encoded the expertise of veteran product leaders into our platform and health analysis system, ensuring even junior PMs can create documentation that meets the highest standards of your organization.",
            },
            {
              image: "",
              title: "Ship Products, Not Process",
              description:
                "Your competition doesn't care about your beautiful documentation—they care about beating you to market. Our health scores and template system help you focus on outcomes, not paperwork.",
            },
          ]}
          className="w-[90vw] lg:w-[60vw]"
        />
        <Footer />
      </PagePadding>
    </>
  );
};

export default AboutUs;
