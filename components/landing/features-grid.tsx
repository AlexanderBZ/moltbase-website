import React from "react";
import FeatureSquare from "./feature-square";

interface FeaturesGridProps {
  features: models.IFeatureProps[];
  title: string;
  subtitle: string;
  className?: string;
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({
  features,
  title,
  subtitle,
  className = "",
}) => {
  const featurePairs = [];
  for (let i = 0; i < features.length; i += 2) {
    featurePairs.push(features.slice(i, i + 2));
  }

  return (
    <section
      className={`py-16 px-4 max-w-6xl mx-auto flex flex-col items-center ${className}`}
    >
      <div className="text-center mb-12 w-[75vw] lg:w-[50vw]">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl">{subtitle}</p>
      </div>

      {featurePairs.map((pair, index) => (
        <React.Fragment key={index}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pair.map((feature, featureIndex) => (
              <div className="flex flex-col" key={featureIndex}>
                {index !== 0 && <hr className="my-8 border-border" />}
                <FeatureSquare
                  image={feature.image}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            ))}
          </div>
        </React.Fragment>
      ))}
    </section>
  );
};

export default FeaturesGrid;
