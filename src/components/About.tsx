"use client";

import { useRef, useMemo, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent, MotionValue } from "framer-motion";
import GlassCard from "./ui/GlassCard";
import SectionTitleOverlay from "./ui/SectionTitleOverlay";
import SectionContentWrapper from "./ui/SectionContentWrapper";

// Images
import aboutHero from "../../images/about_hero.png";
import hairdryer from "../../images/hairdryer.png";
import cart from "../../images/cart.png";

const ABOUT_TEXT =
  "I am an e-commerce strategist with 3+ years of experience in marketplace operations, content optimization, digital marketing, and analytics. I turn digital storefronts into clear, compelling experiences built to convert. With a sharp eye for content, customer journeys, and brand presence, I bring structure to fast-moving work and momentum to every project. I’m at my best where strategy meets execution—solving problems thoughtfully, collaborating easily, and delivering work that creates real value. If you’re looking for someone who blends creativity, commercial thinking, and dependable delivery, I’d love to connect.";

interface WordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function TypewriterWord({ word, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0.22, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className="inline-block mr-[0.28em] text-white font-futuraBook tracking-wide select-none"
    >
      {word}
    </motion.span>
  );
}

export default function About() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  // Track scroll progress of this section across an expanded 320vh track
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Trigger smooth fade-up animations when the section content arrives
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.18) {
      setRevealed(true);
    } else if (latest < 0.08) {
      setRevealed(false);
    }
  });

  // Floating animation variants for decorative items (hairdryer and shopping cart)
  const floatVariants = {
    floating: (delay = 0) => ({
      y: [0, -14, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const,
        delay: delay,
      },
    }),
  };

  // Pre-split the text into words and compute their active scroll ranges
  const words = useMemo(() => ABOUT_TEXT.split(" "), []);
  const highlightStart = 0.35;
  const highlightEnd = 0.85;
  const totalWords = words.length;
  const step = (highlightEnd - highlightStart) / totalWords;

  return (
    <section id="about" ref={targetRef} className="relative w-full h-[320vh] bg-transparent">

      {/* Sticky container that stays in view while scrolling */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center">

        {/* Animated Background Title */}
        <SectionTitleOverlay title="ABOUT" scrollYProgress={scrollYProgress} />

        {/* Animated Content Wrapper: arrives between 0.18 and 0.35, then locks into place */}
        <SectionContentWrapper scrollYProgress={scrollYProgress} yRange={[0.18, 0.35]}>

          <div className="w-full h-full flex items-center justify-center relative z-10 px-4 sm:px-6 md:px-8">

            {/* Central Glass Card Container - Smaller width & centered horizontally */}
            <div className="relative w-full max-w-[1080px] mx-auto overflow-visible flex items-center justify-center">

              {/* Grounded Hero Image: fixed to the left edge of the card, reduced in size */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
                className="absolute bottom-0 left-0 z-30 pointer-events-none select-none flex items-end h-[440px] sm:h-[480px] md:h-[520px] lg:h-[560px] max-h-[82vh]"
              >
                <Image
                  src={aboutHero}
                  alt="Swathy Moorthy About"
                  priority
                  className="h-full w-auto object-contain object-bottom select-none origin-bottom drop-shadow-[-8px_16px_32px_rgba(0,0,0,0.4)]"
                />
              </motion.div>

              {/* Floating Decor: Hairdryer (Top Right) with smooth fade-up entrance */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="absolute -top-7 -right-2 sm:-top-9 sm:-right-3 md:-top-11 md:-right-4 lg:-top-14 lg:-right-6 z-40 pointer-events-none"
              >
                <motion.div custom={0} variants={floatVariants} animate="floating">
                  <Image
                    src={hairdryer}
                    alt="Hairdryer"
                    className="w-[65px] sm:w-[82px] md:w-[102px] lg:w-[125px] h-auto object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.5)] rotate-[15deg]"
                    priority
                  />
                </motion.div>
              </motion.div>

              {/* Floating Decor: Shopping Cart (Bottom Right) with smooth fade-up entrance */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="absolute -bottom-7 -right-2 sm:-bottom-9 sm:-right-3 md:-bottom-11 md:-right-4 lg:-bottom-13 lg:-right-6 z-40 pointer-events-none"
              >
                <motion.div custom={1.5} variants={floatVariants} animate="floating">
                  <Image
                    src={cart}
                    alt="Shopping Cart"
                    className="w-[75px] sm:w-[95px] md:w-[118px] lg:w-[140px] h-auto object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.5)]"
                    priority
                  />
                </motion.div>
              </motion.div>

              {/* Main Centered Glass Card - Reduced width & height */}
              <div className="relative z-20 w-full">
                <GlassCard className="w-full min-h-[400px] sm:min-h-[430px] md:min-h-[460px] lg:min-h-[490px] p-6 sm:p-8 md:p-10 lg:p-12 rounded-[28px] sm:rounded-[36px] md:rounded-[42px] bg-white/10 backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/20 flex items-center relative overflow-visible">

                  {/* Normal Paragraph Text Container beside the image */}
                  <div className="relative z-20 w-full flex justify-end items-center">
                    <div className="w-full max-w-[580px] md:max-w-[620px] lg:max-w-[660px] text-left">
                      <p className="text-sm sm:text-base md:text-[18px] lg:text-[19.5px] leading-[1.65] sm:leading-[1.7] md:leading-[1.75] font-futuraBook tracking-wide">
                        {words.map((word, index) => {
                          const wordStart = highlightStart + index * step;
                          const wordEnd = Math.min(0.85, wordStart + step * 2.2);

                          return (
                            <TypewriterWord
                              key={index}
                              word={word}
                              progress={scrollYProgress}
                              range={[wordStart, wordEnd]}
                            />
                          );
                        })}
                      </p>
                    </div>
                  </div>

                </GlassCard>
              </div>

            </div>
          </div>
        </SectionContentWrapper>

      </div>
    </section>
  );
}
