"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import GlassCard from "./ui/GlassCard";
import SectionTitleOverlay from "./ui/SectionTitleOverlay";
import SectionContentWrapper from "./ui/SectionContentWrapper";

export default function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="projects" ref={targetRef} className="relative w-full h-[250vh] bg-transparent">
      
      {/* Sticky container that stays in view while scrolling */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* Animated Background Title */}
        <SectionTitleOverlay title="PROJECTS" scrollYProgress={scrollYProgress} />

        {/* Animated Content Wrapper */}
        <SectionContentWrapper scrollYProgress={scrollYProgress}>
          
          <div className="w-full max-w-[1400px] h-full relative flex flex-col items-center justify-center z-10 px-4">
            
            <div className="w-[90%] md:w-[80%] lg:w-[850px] h-[300px] md:h-[500px] relative z-20 mx-auto">
              <GlassCard className="w-full h-full rounded-[40px] bg-white/5 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/10 flex items-center justify-center">
                <span className="text-white/30 font-futuraBook text-xl md:text-3xl uppercase tracking-widest text-center px-8">
                  Projects Coming Soon
                </span>
              </GlassCard>
            </div>

          </div>

        </SectionContentWrapper>
      </div>
    </section>
  );
}
