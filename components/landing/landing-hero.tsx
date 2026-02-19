"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";

const LandingHero = ({
  title,
  subtitle,
  buttonTitle = "Start today - it's free",
  href = "/sign-up",
}: {
  title?: string;
  subtitle?: string;
  buttonTitle?: string;
  href?: string;
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0 }}
      className="flex flex-col items-center justify-start px-4 max-w-7xl mx-auto text-center h-[calc(100vh-80px)] pt-14 overflow-clip"
    >
      <h1 className="text-5xl font-bold mb-6">{title}</h1>
      <p className="text-lg mb-8 text-secondary-foreground w-[80vw] lg:w-[40vw]">
        {subtitle}
      </p>

      <Button asChild>
        <Link href={href}>{buttonTitle}</Link>
      </Button>

      <Image
        src="/pngs/dashboard-preview.png"
        alt="Dashboard Preview"
        width={1200}
        height={800}
        className="w-[90vw] lg:w-[60vw] rounded-lg shadow-xl border border-border mt-10"
      />
    </motion.section>
  );
};

export default LandingHero;
