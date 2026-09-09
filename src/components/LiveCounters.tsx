"use client";

import { useEffect, useState, useRef } from "react";

function Counter({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // easeOutExpo
      const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      const currentCount = Math.floor(easeOut * end);
      
      if (currentCount !== countRef.current) {
        setCount(currentCount);
        countRef.current = currentCount;
      }
      
      if (percentage < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={domRef} className="flex flex-col items-center flex-1 min-w-[120px]">
      <span className="text-white font-futuraBold text-[48px] md:text-[64px] leading-none mb-2 tracking-tighter">
        {count}{suffix}
      </span>
      <slot />
    </div>
  );
}

export default function LiveCounters() {
  return (
    <div className="max-w-[1400px] mx-auto flex flex-wrap justify-between items-center text-center gap-6">
      <div className="flex flex-col items-center flex-1 min-w-[120px]">
        <Counter end={20} suffix="+" />
        <span className="text-white font-futuraBook font-bold text-base md:text-xl tracking-wide">Marketplaces</span>
      </div>
      <div className="flex flex-col items-center flex-1 min-w-[120px]">
        <Counter end={10} suffix="+" />
        <span className="text-white font-futuraBook font-bold text-base md:text-xl tracking-wide">Countries</span>
      </div>
      <div className="flex flex-col items-center flex-1 min-w-[120px]">
        <Counter end={60} suffix="%" />
        <span className="text-white font-futuraBook font-bold text-base md:text-xl tracking-wide">Product Visibility</span>
      </div>
      <div className="flex flex-col items-center flex-1 min-w-[120px]">
        <Counter end={3} suffix="+" />
        <span className="text-white font-futuraBook font-bold text-base md:text-xl tracking-wide">Experience</span>
      </div>
    </div>
  );
}
