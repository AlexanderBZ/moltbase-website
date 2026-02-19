import React from "react";
import { Button } from "../ui/button";

function PricingSquare({
  plan,
  billingCycle,
  index,
}: {
  plan: models.IPricingPlan;
  billingCycle: string;
  index: number;
}) {
  return (
    <div
      key={index}
      className="flex flex-col justify-between border border-border rounded-lg p-8"
    >
      <div>
        <h3 className="font-medium mb-2">{plan.title}</h3>
        <div className="mb-6">
          <span className="text-6xl font-bold">
            ${billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice}
          </span>
          <span className="text-muted-foreground">/month</span>
        </div>

        <div className="space-y-4 mb-8">
          {plan.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-start">
              <svg
                className="h-5 w-5 text-primary-foreground mr-2 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{feature.text}</span>
            </div>
          ))}
        </div>
      </div>

      <Button>{plan.ctaText}</Button>
    </div>
  );
}

export default PricingSquare;
