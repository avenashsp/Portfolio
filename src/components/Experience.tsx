"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import GlassCard from "./ui/GlassCard";
import eiffelTower from "../../images/eiffel_tower.png";
import notreDame from "../../images/notre_dame.png";
import aayi from "../../images/aayi.png";
import light from "../../images/light.png";
import netevenLogo from "../../logo/neteven_logo.png";
import cognizantLogo from "../../logo/cognizant_logo.png";
import datamaticsLogo from "../../logo/datamatics_logo.png";

const experiences = [
  {
    id: 1,
    title: "Customer Success Manager (Intern)",
    date: "08/2025 - 02/2026",
    logo: netevenLogo,
    bg: eiffelTower,
    bullets: [
      "Conducted seasonal sales analyses across 20 marketplaces, delivering insights on e-commerce trends and high-performing brands to shape yearly client growth strategies.",
      "Led data-driven digital strategy and marketplace expansion, increased brand exposure by over 90%.",
      "Documented and prepared structured reports to streamline content management for both internal teams and external clients.",
    ],
  },
  {
    id: 2,
    title: "International Content Coordinator (Intern)",
    date: "08/2024 - 02/2025",
    logo: netevenLogo,
    bg: notreDame,
    bullets: [
      "Curated and optimized product content for Hardware and Home categories, ensuring brand-aligned, high-quality listings that boosted visibility, discoverability, and sales.",
      "Led content team revisions, ensuring accurate and timely delivery of client-facing product pages for Highbourne and Walmart.",
    ],
  },
  {
    id: 3,
    title: "E-commerce Senior Analyst",
    date: "07/2022 - 01/2023",
    logo: cognizantLogo,
    bg: aayi,
    bullets: [
      "Curated and optimized product content for Hardware and Home categories, ensuring brand-aligned, high-quality listings that boosted visibility, discoverability, and sales.",
      "Led content team revisions, ensuring accurate and timely delivery of client-facing product pages for Highbourne and Walmart.",
    ],
  },
  {
    id: 4,
    title: "E-commerce Analyst",
    date: "09/2020 - 06/2022",
    logo: datamaticsLogo,
    bg: light,
    bullets: [
      "Managed editorial projects for various Walmart Strategic Business Units (SBUs), beauty, baby, pets, personal care, health & wellness and household essentials.",
      "Developed wireframes and page layouts to showcase online design elements for regular updates and new launches.",
      "Pinned best-selling, new, and trending SKUs on Walmart pages during high-demand periods based on GMV, meeting client objectives and customer needs.",
    ],
  },
];

import SectionTitleOverlay from "./ui/SectionTitleOverlay";
import SectionContentWrapper from "./ui/SectionContentWrapper";

export default function Experience() {
  const targetRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Map vertical scroll to horizontal movement
  // Now 4 slides. Total track is 355vw (7.5vw padding on each side, plus 4 * 85vw slides) = 355vw
  // Max translation is -(355vw - 100vw) = -255vw
  // Start horizontal scroll after the vertical scroll finishes and the title completely fades out (0.6)
  const x = useTransform(scrollYProgress, [0.6, 1], ["0vw", "-255vw"]);

  return (
    <section id="experience" ref={targetRef} className="relative h-[600vh] w-full bg-transparent">
      {/* Sticky container that stays in view while scrolling */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">

        <SectionTitleOverlay title="EXPERIENCE" scrollYProgress={scrollYProgress} />
        
        <SectionContentWrapper scrollYProgress={scrollYProgress} yRange={[0.2, 0.4]}>


        {/* Synchronized Timeline at the top */}
        <div 
          className="w-full z-40 pointer-events-none mt-8 md:mt-16 mb-2 md:mb-4 flex-shrink-0"
          style={{ maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" }}
        >
          <motion.div style={{ x }} className="flex w-[355vw] px-[7.5vw] relative h-20 items-center">
            {/* The continuous horizontal line */}
            <div className="absolute left-[7.5vw] right-[7.5vw] top-1/2 -translate-y-1/2 h-px bg-white/40" />
            
            {experiences.map((exp) => {
              const dates = exp.date ? exp.date.split(/\s*[-–]\s*/) : ["", ""];
              return (
                <div key={`timeline-${exp.id}`} className="w-[85vw] h-full flex justify-center items-center flex-shrink-0 relative">
                  {!exp.empty && (
                    <div className="relative flex flex-col items-center justify-center">
                      <span className="absolute bottom-4 text-[10px] md:text-xs font-futuraBook text-white/50 tracking-widest whitespace-nowrap">
                        {dates[0]}
                      </span>
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] relative z-10" />
                      <span className="absolute top-4 text-[10px] md:text-xs font-futuraBook text-white/50 tracking-widest whitespace-nowrap">
                        {dates[1]}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>
        {/* The horizontally moving track */}
        <div className="relative flex-grow flex items-center justify-start w-full">
          <motion.div style={{ x }} className="flex w-[355vw] px-[7.5vw] items-center">

          {experiences.map((exp) => (
            <div key={exp.id} className="w-[85vw] flex flex-col items-center justify-center relative flex-shrink-0">

              {exp.empty ? (
                // Empty placeholder card
                <div className="w-[90%] md:w-[80%] lg:w-[850px] h-[500px] relative z-20">
                  <GlassCard className="w-full h-full rounded-[40px] bg-white/5 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/10 flex items-center justify-center">
                    <span className="text-white/30 font-futuraBook text-xl uppercase tracking-widest">More Experience Coming Soon</span>
                  </GlassCard>
                </div>
              ) : (
                // Populated Card
                <>
                  {/* Main Glass Card Wrapper */}
                  <div className="w-[90%] md:w-[80%] lg:w-[850px] h-[500px] relative z-20">

                    <GlassCard className="w-full h-full rounded-[40px] bg-white/10 backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/20 p-8 md:p-16 flex flex-col items-center justify-center">


                      {/* Logo (Inside Card) */}
                      <div className="relative z-10 mb-4">
                        <Image
                          src={exp.logo!}
                          alt="Company Logo"
                          width={200}
                          height={60}
                          className="object-contain drop-shadow-xl"
                        />
                      </div>

                      <h3 className="relative z-10 text-white font-futuraBold text-xl md:text-3xl lg:text-4xl text-center mt-2 tracking-wide drop-shadow-md">
                        {exp.title.includes("(Intern)") ? (
                          <>
                            {exp.title.replace("(Intern)", "")}
                            <span className="text-base md:text-xl lg:text-2xl text-white/80 whitespace-nowrap">
                              (Intern)
                            </span>
                          </>
                        ) : (
                          exp.title
                        )}
                      </h3>

                      <div className="relative z-10 w-3/4 max-w-[500px] h-px bg-white/40 mt-8 mb-8 flex-shrink-0" />

                      <ul className="relative z-10 w-full max-w-[800px] space-y-6 text-white/90 font-futuraBook text-base md:text-xl leading-relaxed text-left">
                        {exp.bullets?.map((bullet, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-4 mt-2 w-2 h-2 bg-white rounded-full flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                    </GlassCard>
                  </div>
                </>
              )}
            </div>
          ))}

        </motion.div>
        </div>
        
        </SectionContentWrapper>
      </div>
    </section>
  );
}
