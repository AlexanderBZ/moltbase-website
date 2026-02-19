import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface MissionStatementProps {
  heading: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const MissionStatement: React.FC<MissionStatementProps> = ({
  heading,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0 }}
      className="py-16 px-5 max-w-5xl mx-auto mb-10 w-[90vw] lg:w-[60vw]"
    >
      <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-10 max-w-3xl">
        {heading}
      </h2>

      <div className="rounded-2xl overflow-hidden mb-10">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1000}
            height={400}
            className="w-full h-[40vh] lg:h-[50vh] object-cover"
          />
        ) : (
          <div className="bg-muted w-full h-80 rounded-2xl"></div>
        )}
      </div>

      <div className="text-lg">
        <p>{description}</p>
      </div>
    </motion.section>
  );
};

export default MissionStatement;
