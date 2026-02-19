import React from "react";
import Image from "next/image";

const FeatureSquare: React.FC<models.IFeatureProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="mb-4">
      {image !== "" && (
        <Image
          src={image}
          alt="Feature Square"
          width={450}
          height={690}
          className="w-full h-[225px] lg:h-[250px] object-cover object-top rounded-lg mb-4"
        />
      )}
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureSquare;
