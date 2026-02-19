import React from "react";
import { LucideIcon } from "lucide-react";

interface ProductUseCase {
  title: string;
  description: string;
  iconSrc?: LucideIcon;
}

interface ProductUseCasesProps {
  title?: string;
  subtitle?: string;
  description?: string;
  useCases?: ProductUseCase[];
}

const ProductUseCases: React.FC<ProductUseCasesProps> = ({
  title = "You're in control",
  subtitle = "USE CASES",
  description = "Types of content Jenni can help you with",
  useCases = [],
}) => {
  return (
    <div className="w-full bg-background py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider mb-2">
            {subtitle}
          </p>
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="flex flex-col">
              {useCase.iconSrc && (
                <div className="mb-4">
                  <useCase.iconSrc className="w-[25px] h-[25px] text-secondary-foreground" />
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
              <p className="text-muted-foreground">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductUseCases;
