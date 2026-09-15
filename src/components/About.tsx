"use client";

import { useRef, useMemo } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
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

  // Track scroll progress of this section across an expanded 320vh track
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
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
          
          <div className="w-full max-w-[1300px] mx-auto flex flex-col items-center relative z-10 px-4 sm:px-8 md:px-12 lg:px-16">
            
            {/* Central Glass Card Container with overflow-visible so hero head & floating decor can break out */}
            <div className="relative w-full overflow-visible">
              
              {/* Floating Decor: Hairdryer (Top Right) */}
              <div className="absolute -top-10 -right-2 sm:-top-14 sm:-right-4 md:-top-16 md:-right-6 lg:-top-20 lg:-right-8 z-40 pointer-events-none">
                <motion.div custom={0} variants={floatVariants} animate="floating">
                  <Image
                    src={hairdryer}
                    alt="Hairdryer"
                    className="w-[85px] sm:w-[110px] md:w-[140px] lg:w-[170px] h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)] rotate-[15deg]"
                    priority
                  />
                </motion.div>
              </div>

              {/* Floating Decor: Shopping Cart (Bottom Right) */}
              <div className="absolute -bottom-8 -right-4 sm:-bottom-10 sm:-right-6 md:-bottom-12 md:-right-8 lg:-bottom-14 lg:-right-10 z-40 pointer-events-none">
                <motion.div custom={1.5} variants={floatVariants} animate="floating">
                  <Image
                    src={cart}
                    alt="Shopping Cart"
                    className="w-[95px] sm:w-[125px] md:w-[155px] lg:w-[190px] h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)]"
                    priority
                  />
                </motion.div>
              </div>

              {/* Main Card */}
              <div className="relative z-20 w-full">
                <GlassCard className="w-full min-h-[440px] sm:min-h-[480px] md:min-h-[520px] lg:min-h-[560px] p-6 sm:p-10 md:p-14 lg:p-16 rounded-[32px] sm:rounded-[40px] md:rounded-[48px] bg-white/10 backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/20 flex items-center relative overflow-visible">
                  
                  {/* Grounded Hero Image: positioned on the left, head breaking out above the card */}
                  <div className="absolute bottom-0 left-[-15px] sm:left-[-10px] md:left-[5px] lg:left-[20px] w-[260px] sm:w-[320px] md:w-[400px] lg:w-[470px] xl:w-[500px] h-auto z-30 pointer-events-none flex items-end">
                    <Image
                      src={aboutHero}
                      alt="Swathy Moorthy About"
                      priority
                      className="w-full h-auto object-contain object-bottom select-none origin-bottom drop-shadow-[-8px_16px_32px_rgba(0,0,0,0.4)]"
                    />
                  </div>

                  {/* Text Container with Floated Spacer for Text Wrap */}
                  <div className="relative z-20 w-full text-left">
                    
                    {/* Floated silhouette spacer on the left to wrap text naturally around Swathy's profile */}
                    <div
                      className="hidden sm:block float-left pointer-events-none"
                      style={{
                        width: "36%",
                        height: "460px",
                        shapeOutside: "polygon(0 0, 52% 0, 62% 20%, 76% 40%, 90% 65%, 98% 100%, 0 100%)",
                        clipPath: "polygon(0 0, 52% 0, 62% 20%, 76% 40%, 90% 65%, 98% 100%, 0 100%)",
                      }}
                    />

                    {/* Small screen mobile spacer */}
                    <div className="block sm:hidden float-left w-[38%] h-[280px] pointer-events-none" />

                    {/* Paragraph with Scroll-Driven Typewriter Highlight */}
                    <p className="text-base sm:text-lg md:text-xl lg:text-[22px] xl:text-[24px] leading-[1.65] sm:leading-[1.7] md:leading-[1.75] lg:leading-[1.8] font-futuraBook tracking-wide">
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

                </GlassCard>
              </div>

            </div>
          </div>
        </SectionContentWrapper>

      </div>
    </section>
  );
}
