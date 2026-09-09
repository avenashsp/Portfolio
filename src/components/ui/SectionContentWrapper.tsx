"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface SectionContentWrapperProps {
  children: React.ReactNode;
  scrollYProgress: MotionValue<number>;
  yRange?: [number, number];
}

export default function SectionContentWrapper({ children, scrollYProgress, yRange = [0.4, 0.8] }: SectionContentWrapperProps) {
  // Content scrolls up into view, triggering individual whileInView animations
  const y = useTransform(scrollYProgress, yRange, ["100vh", "0vh"]);

  return (
    <motion.div
      style={{ y }}
      className="w-full h-full flex flex-col items-center justify-center relative z-10"
    >
      {children}
    </motion.div>
  );
}
