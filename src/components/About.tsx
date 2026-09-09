"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import GlassCard from "./ui/GlassCard";
import SectionTitleOverlay from "./ui/SectionTitleOverlay";
import SectionContentWrapper from "./ui/SectionContentWrapper";

// Images
import vase from "../../images/vase.png";
import brush from "../../images/brush.png";
import hairdryer from "../../images/hairdryer.png";
import cart from "../../images/cart.png";

export default function About() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Animation variants
  const revealVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } },
  };

  const floatVariants = {
    floating: (delay = 0) => ({
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const,
        delay: delay,
      },
    }),
  };

  return (
    <section id="about" ref={targetRef} className="relative w-full h-[250vh] bg-transparent">
      
      {/* Sticky container that stays in view while scrolling */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Animated Background Title */}
        <SectionTitleOverlay title="ABOUT" scrollYProgress={scrollYProgress} />

        {/* Animated Content Wrapper */}
        <SectionContentWrapper scrollYProgress={scrollYProgress}>
          
          <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center relative z-10 px-6 md:px-16">
            

            {/* Central Glass Card */}
            <div className="relative w-full max-w-[1300px]">
              
              {/* Floating Decor: Vase (Top Left) */}
              <motion.div
                variants={revealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="absolute -top-12 -left-4 md:-top-16 md:-left-8 z-40 pointer-events-none"
              >
                <motion.div custom={0} variants={floatVariants} animate="floating">
                  <Image src={vase} alt="Vase" className="w-[80px] md:w-[130px] lg:w-[160px] h-auto object-contain drop-shadow-2xl" />
                </motion.div>
              </motion.div>

              {/* Floating Decor: Hairdryer (Top Right) */}
              <motion.div
                variants={revealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="absolute -top-10 -right-2 md:-top-12 md:-right-4 z-40 pointer-events-none"
              >
                <motion.div custom={1} variants={floatVariants} animate="floating">
                  <Image src={hairdryer} alt="Hairdryer" className="w-[90px] md:w-[140px] lg:w-[180px] h-auto object-contain drop-shadow-2xl rotate-[15deg]" />
                </motion.div>
              </motion.div>

              {/* Main Card */}
              <div className="relative z-20">
                <GlassCard className="w-full p-10 md:p-16 lg:p-24 rounded-[40px] bg-white/10 backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/20">
                  <div className="max-w-[800px] mx-auto pt-8 md:pt-4">
                    <p className="text-white font-futuraBook text-lg md:text-xl lg:text-[22px] leading-[1.6] text-center tracking-wide">
                      I am an e-commerce strategist with 3+ years of experience in marketplace operations, content optimization, digital marketing, and analytics. I turn digital storefronts into clear, compelling experiences built to convert. With a sharp eye for content, customer journeys, and brand presence, I bring structure to fast-moving work and momentum to every project. I’m at my best where strategy meets execution—solving problems thoughtfully, collaborating easily, and delivering work that creates real value. If you’re looking for someone who blends creativity, commercial thinking, and dependable delivery, I’d love to connect.
                    </p>
                  </div>
                </GlassCard>
              </div>

              {/* Floating Decor: Brush (Bottom Left) */}
              <motion.div
                variants={revealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="absolute -bottom-8 -left-4 md:-bottom-12 md:-left-10 z-30 pointer-events-none"
              >
                <motion.div custom={0.5} variants={floatVariants} animate="floating">
                  <Image src={brush} alt="Makeup Brush" className="w-[60px] md:w-[100px] lg:w-[130px] h-auto object-contain drop-shadow-2xl rotate-12" />
                </motion.div>
              </motion.div>

              {/* Floating Decor: Cart (Bottom Right) */}
              <motion.div
                variants={revealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="absolute -bottom-10 -right-8 md:-bottom-16 md:-right-12 z-30 pointer-events-none"
              >
                <motion.div custom={1.5} variants={floatVariants} animate="floating">
                  <Image src={cart} alt="Shopping Cart" className="w-[100px] md:w-[150px] lg:w-[200px] h-auto object-contain drop-shadow-2xl" />
                </motion.div>
              </motion.div>

            </div>
          </div>
        </SectionContentWrapper>

      </div>
    </section>
  );
}
