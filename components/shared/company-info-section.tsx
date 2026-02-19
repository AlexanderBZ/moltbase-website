import React from "react";
import Image from "next/image";

interface TextSectionProps {
  heading: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

const CompantInfoSection: React.FC<TextSectionProps> = ({
  heading,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <section className="px-5 max-w-5xl mx-auto w-[90vw] lg:w-[60vw]">
      <h2 className="text-2xl lg:text-4xl font-bold leading-tight mb-5 max-w-3xl">
        {heading}
      </h2>

      {imageSrc && imageAlt && (
        <div className="rounded-2xl overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1000}
            height={400}
            className="w-full h-[40vh] lg:h-[50vh] object-cover"
          />
        </div>
      )}

      <div className="text-lg">
        <p>{description}</p>
      </div>
    </section>
  );
};

export default CompantInfoSection;
