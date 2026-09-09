"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface SectionTitleOverlayProps {
  title: string;
  scrollYProgress: MotionValue<number>;
}

export default function SectionTitleOverlay({ title, scrollYProgress }: SectionTitleOverlayProps) {
  // 1. Appear with slow blurred zoom-out (0 to 0.3)
  // 2. Lock in place (scale 1, fully visible) as content scrolls up over it
  
  const scale = useTransform(scrollYProgress, [0, 0.3], [1.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  
  // Blur decreases to 0, then completely clears to none for crisp pure white text
  const blurValue = useTransform(scrollYProgress, [0, 0.3], [20, 0]);
  const filter = useTransform(blurValue, (v) => (v <= 0.1 ? "none" : `blur(${v}px)`));

  return (
    <motion.div
      style={{
        scale,
        opacity,
        filter,
      }}
      className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none"
    >
      <h2 
        className="font-futuraBold text-[15vw] md:text-[12vw] uppercase tracking-[0.2em] whitespace-nowrap text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.6)] font-black"
        style={{ color: "#ffffff" }}
      >
        {title}
      </h2>
    </motion.div>
  );
}
