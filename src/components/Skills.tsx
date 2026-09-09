"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import GlassCard from "./ui/GlassCard";
import SectionTitleOverlay from "./ui/SectionTitleOverlay";
import SectionContentWrapper from "./ui/SectionContentWrapper";

import dmImage from "../../images/dm.png";

const skills = [
  { id: 1, name: "Content Strategy", description: "Crafting engaging content plans that align with brand voice and audience needs.", position: "top-[15%] left-[5%] md:left-[18%]" },
  { id: 2, name: "Digital Marketing", description: "Driving online growth through targeted campaigns and multi-channel strategies.", position: "top-[15%] right-[5%] md:right-[18%]" },
  { id: 3, name: "Quality Control", description: "Ensuring high standards and consistency across all deliverables.", position: "top-[38%] left-[2%] md:left-[12%]" },
  { id: 4, name: "Product Analysis", description: "Evaluating market fit and product performance to guide improvements.", position: "top-[38%] right-[2%] md:right-[12%]" },
  { id: 5, name: "SEO & SEM", description: "Optimizing search visibility and managing ad spend for maximum ROI.", position: "top-[61%] left-[4%] md:left-[14%]" },
  { id: 6, name: "BO Operations", description: "Streamlining backend processes for improved efficiency and scale.", position: "top-[61%] right-[4%] md:right-[14%]" },
  { id: 7, name: "Client Reporting", description: "Translating complex data into actionable insights for stakeholders.", position: "top-[84%] left-[8%] md:left-[22%]" },
  { id: 8, name: "Data Analysis", description: "Leveraging metrics to uncover trends and drive strategic decisions.", position: "top-[84%] right-[8%] md:right-[22%]" },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const floatVariants = {
    floating: (delay = 0) => ({
      y: [0, -12, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const,
        delay: delay,
      },
    }),
  };

  const revealVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: (customDelay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: customDelay },
    }),
  };

  return (
    <section id="skills" ref={targetRef} className="relative w-full h-[250vh] bg-transparent">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* Animated Background Title */}
        <SectionTitleOverlay title="SKILLS" scrollYProgress={scrollYProgress} />

        {/* Animated Content Wrapper */}
        <SectionContentWrapper scrollYProgress={scrollYProgress}>
          <div className="w-full max-w-[1400px] h-full min-h-[700px] relative flex flex-col items-center justify-center z-10">

            {/* Central Card */}
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] flex items-end justify-center z-20 mx-auto mt-16 md:mt-24 lg:mt-32">
              <GlassCard className="absolute inset-0 w-full h-full rounded-[40px] bg-white/10 backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/20" />

              {/* Images inside card container, breaking out of top */}
              <motion.div
                variants={revealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-[125%] h-[120%] pointer-events-none"
              >
                <Image
                  src={dmImage}
                  alt="Swathy Moorthy Skills"
                  className="absolute bottom-0 left-0 w-full h-full object-contain object-bottom origin-bottom"
                />
              </motion.div>
            </div>

            {/* Floating Skills */}
            {skills.map((skill, index) => {
              const isHovered = hoveredSkill === skill.id;
              const isAnyHovered = hoveredSkill !== null;

              return (
                <motion.div
                  key={skill.id}
                  variants={revealVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  custom={index * 0.1 + 0.2}
                  className={`absolute z-30 ${skill.position}`}
                >
                  <div
                    className="transition-opacity duration-500"
                    style={{ opacity: isAnyHovered ? (isHovered ? 1 : 0.25) : 0.8 }}
                    onMouseEnter={() => setHoveredSkill(skill.id)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <motion.div
                      custom={index * 0.4}
                      variants={floatVariants}
                      animate="floating"
                    >
                      <div
                        className={`cursor-pointer px-6 py-3 rounded-full transition-all duration-300 relative flex flex-col items-center ${isHovered
                          ? "bg-white/20 backdrop-blur-xl border border-white/30 shadow-[0_4px_14px_0_rgba(31,38,135,0.1)] scale-105"
                          : "bg-transparent border border-transparent scale-100"
                          }`}
                      >
                        <span className="text-white font-futuraBook font-bold text-xl md:text-2xl lg:text-3xl tracking-wide whitespace-nowrap drop-shadow-md">
                          {skill.name}
                        </span>

                        {/* Hover Popup */}
                        <div 
                          className={`absolute top-full mt-4 w-64 md:w-80 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl transition-all duration-300 pointer-events-none z-50 ${isHovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95'}`}
                        >
                          <p className="text-white/90 text-sm md:text-base font-futuraBook leading-relaxed text-center whitespace-normal">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}

          </div>
        </SectionContentWrapper>

      </div>
    </section>
  );
}
