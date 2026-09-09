"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import GlassCard from "./ui/GlassCard";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Add a small threshold (e.g. 50px) before hiding to avoid jitter at the very top
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Scrolling down
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true); // Scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div 
      className={`fixed top-6 left-1/2 z-50 w-[calc(100%-3rem)] max-w-[1300px] transition-transform duration-500 ease-out ${
        isVisible ? "-translate-x-1/2 translate-y-0" : "-translate-x-1/2 -translate-y-[200%]"
      }`}
    >
      <GlassCard as="nav" className="w-full flex items-center justify-between px-8 py-4 md:px-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
        <div className="relative z-10 font-playfair italic font-black text-3xl md:text-4xl text-white tracking-tight">
          <a href="/" className="cursor-pointer hover:text-[#F25A5F] transition-colors">SM.</a>
        </div>
        <div className="relative z-10 hidden md:flex gap-12 text-white font-futuraBook font-bold text-[20px] tracking-wide">
          <Link href="#about" className="hover:text-[#5893E0] transition-colors">About</Link>
          <Link href="#skills" className="hover:text-[#5893E0] transition-colors">Skills</Link>
          <Link href="#experience" className="hover:text-[#5893E0] transition-colors">Experience</Link>
          <Link href="#projects" className="hover:text-[#5893E0] transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-[#5893E0] transition-colors">Contact</Link>
        </div>
      </GlassCard>
    </div>
  );
}
