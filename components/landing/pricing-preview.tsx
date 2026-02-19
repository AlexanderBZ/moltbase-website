import React from "react";
import PricingSquare from "./pricing-square";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const PricingPreview: React.FC<models.IPricingProps> = ({
  heading,
  subheading,
  plans,
  teamHeading,
  teamDescription,
  teamCtaText,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0 }}
      className="py-16 px-4 max-w-5xl mx-auto"
    >
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold mb-4">{heading}</h2>
        <p className="text-xl">{subheading}</p>
      </div>

      <div className="flex justify-center mb-10">
        <Tabs
          defaultValue="annual"
          className="flex flex-col items-center w-full gap-10"
        >
          <TabsList className="inline-flex bg-muted rounded-full p-1">
            <TabsTrigger
              value="monthly"
              className="px-4 py-2 text-sm rounded-full"
            >
              Monthly
            </TabsTrigger>
            <TabsTrigger
              value="annual"
              className="px-4 py-2 text-sm rounded-full"
            >
              Annual
            </TabsTrigger>
          </TabsList>

          <TabsContent value="monthly">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {plans.map((plan, index) => (
                <PricingSquare
                  key={index}
                  plan={plan}
                  billingCycle="monthly"
                  index={index}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="annual">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {plans.map((plan, index) => (
                <PricingSquare
                  key={index}
                  plan={plan}
                  billingCycle="annual"
                  index={index}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="bg-secondary rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
          {teamHeading}
        </h3>
        <p className="mb-6 max-w-2xl mx-auto text-primary-foreground">
          {teamDescription}
        </p>
        <Button asChild>
          <Link
            href="/login"
            className={buttonVariants({ variant: "secondary" })}
          >
            {teamCtaText}
          </Link>
        </Button>
      </div>
    </motion.section>
  );
};

export default PricingPreview;
