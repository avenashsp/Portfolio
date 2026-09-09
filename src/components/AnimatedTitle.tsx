"use client";

import { useState, useEffect } from "react";

const roles = [
  <>ECOMMERCE <br /> STRATEGIST</>,
  <>CONTENT <br /> ANALYST</>,
  <>DIGITAL <br /> MARKETER</>,
];

export default function AnimatedTitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mt-2" style={{ perspective: "1200px" }}>
      <style>{`
        .cube-face {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transform-origin: 50% 50% -80px;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .cube-face-active {
          transform: rotateX(0deg);
          opacity: 1;
        }
        .cube-face-prev {
          transform: rotateX(-90deg);
          opacity: 0;
        }
        .cube-face-next {
          transform: rotateX(90deg);
          opacity: 0;
        }
      `}</style>
      
      {/* Invisible placeholder to maintain layout height */}
      <h1 className="text-transparent font-futuraBold text-[50px] leading-[0.9] sm:text-[70px] md:text-[90px] lg:text-[120px] tracking-tight select-none pointer-events-none" aria-hidden>
        ECOMMERCE <br /> STRATEGIST
      </h1>

      {roles.map((role, i) => {
        let statusClass = "cube-face-next";
        if (i === index) statusClass = "cube-face-active";
        else if (i === (index - 1 + roles.length) % roles.length) statusClass = "cube-face-prev";

        return (
          <h1 
            key={i}
            className={`cube-face ${statusClass} text-white font-futuraBold text-[50px] leading-[0.9] sm:text-[70px] md:text-[90px] lg:text-[120px] tracking-tight`}
          >
            {role}
          </h1>
        );
      })}
    </div>
  );
}
