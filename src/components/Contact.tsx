"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import GlassButton from "./ui/GlassButton";
import SectionTitleOverlay from "./ui/SectionTitleOverlay";

// Assets
import contactBg from "../../images/contactbg.png";
import linkedinLogo from "../../logo/linkedin_logo.png";
import mailLogo from "../../logo/mail_logo.png";
import instagramLogo from "../../logo/instagram_logo.png";

export default function Contact() {
  const targetRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const [travelDistance, setTravelDistance] = useState<number>(800);
  const [revealed, setRevealed] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("swathymoorthy2000@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  // Calculate the exact overflow of the full uncropped image inside the card
  const updateDistance = useCallback(() => {
    if (cardRef.current && imgRef.current) {
      const cardH = cardRef.current.offsetHeight;
      const measuredImgH = imgRef.current.offsetHeight;
      setTravelDistance(Math.max(0, measuredImgH - cardH));
    }
  }, []);

  useEffect(() => {
    updateDistance();
    window.addEventListener("resize", updateDistance);
    return () => window.removeEventListener("resize", updateDistance);
  }, [updateDistance]);

  // Track scroll progress of the contact section across an expanded 450vh track
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Fade in elements once card arrives, and ensure they stay on screen permanently
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.52) {
      setRevealed(true);
    } else if (latest < 0.25) {
      setRevealed(false);
    }
  });

  // Staggered Fade-Up Variants for the elements inside the card
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.05,
      },
    },
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 55 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  // Card movement: Only begins rising after section title is fully visible (0.40 to 0.54)
  const cardY = useTransform(scrollYProgress, [0.40, 0.54], ["95vh", "0vh"], { clamp: true });

  // Continuous parallax: begins once card docks and smoothly traverses until bottom of image is reached
  const imageParallaxY = useTransform(scrollYProgress, [0.50, 1], [0, -Math.max(0, travelDistance)], { clamp: true });

  return (
    <section id="contact" ref={targetRef} className="relative w-full h-[450vh] bg-transparent">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-end items-center">
        
        {/* Animated Background Title Overlay: pure white, no opacity reduction */}
        <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
          <SectionTitleOverlay title="CONTACT" scrollYProgress={scrollYProgress} />
        </div>

        {/* The Contact Card: fills full screen width, attached to bottom, only top corners rounded */}
        <motion.div
          ref={cardRef}
          style={{ y: cardY }}
          className="w-full h-[85vh] min-h-[580px] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] border-t border-white/25 shadow-[0_-20px_60px_rgba(0,0,0,0.4)] overflow-hidden relative z-20 flex items-center will-change-transform bg-[#121216]"
        >
          {/* Parallax Background Image Layer: left edge fixed to screen left, scaled up to shift subject right, no blend modes or opacity */}
          <motion.div
            style={{ y: imageParallaxY }}
            className="absolute top-0 left-0 w-[118%] md:w-[122%] lg:w-[125%] min-h-full max-w-none will-change-transform pointer-events-none z-0"
          >
            <Image
              ref={imgRef}
              src={contactBg}
              alt="Swathy Moorthy Contact Background"
              onLoad={updateDistance}
              priority
              className="w-full h-full min-h-full object-cover object-top select-none block"
            />
          </motion.div>

          {/* Foreground Content: Staggered Fade-Up Reveals */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={revealed ? "visible" : "hidden"}
            className="relative z-20 w-full max-w-[1400px] mx-auto h-full flex flex-col justify-center px-8 sm:px-14 md:px-20 lg:px-28 py-10 pointer-events-auto"
          >
            {/* "Lets work" Heading */}
            <motion.h3
              variants={fadeUpVariant}
              className="font-playfair text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-wide leading-tight drop-shadow-md"
            >
              Lets work
            </motion.h3>

            {/* "TOGETHER." Heading */}
            <motion.h2
              variants={fadeUpVariant}
              className="font-futuraBold text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tight leading-none drop-shadow-lg mt-1 mb-8 sm:mb-10 md:mb-12"
            >
              TOGETHER.
            </motion.h2>

            {/* Social Buttons Stack */}
            <div className="flex flex-col gap-3.5 sm:gap-4 w-full max-w-[210px] sm:max-w-[230px]">
              
              {/* LinkedIn */}
              <motion.div variants={fadeUpVariant}>
                <a
                  href="https://www.linkedin.com/in/swathy-moorthy-847133210/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                  aria-label="Connect on LinkedIn"
                >
                  <GlassButton className="group flex items-center justify-start gap-4 bg-white/25 hover:bg-white/40 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full shadow-[0_4px_16px_0_rgba(0,0,0,0.12)] hover:shadow-[0_4px_20px_0_rgba(255,255,255,0.25)] transition-all duration-300 font-futuraBook font-bold text-lg sm:text-xl w-full">
                    <Image
                      src={linkedinLogo}
                      alt="LinkedIn"
                      width={26}
                      height={26}
                      className="opacity-90 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300 object-contain flex-shrink-0"
                    />
                    <span className="tracking-wide">LinkedIn</span>
                  </GlassButton>
                </a>
              </motion.div>

              {/* Gmail: Copies email to clipboard on click */}
              <motion.div variants={fadeUpVariant} className="w-full">
                <GlassButton
                  onClick={handleCopyEmail}
                  className="group flex items-center justify-start gap-4 bg-white/25 hover:bg-white/40 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full shadow-[0_4px_16px_0_rgba(0,0,0,0.12)] hover:shadow-[0_4px_20px_0_rgba(255,255,255,0.25)] transition-all duration-300 font-futuraBook font-bold text-lg sm:text-xl w-full"
                  aria-label="Copy Email address to clipboard"
                  title="Click to copy swathymoorthy2000@gmail.com to clipboard"
                >
                  <Image
                    src={mailLogo}
                    alt="Gmail"
                    width={26}
                    height={26}
                    className="opacity-90 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300 object-contain flex-shrink-0"
                  />
                  <span className="tracking-wide transition-all duration-300">
                    {copied ? "Copied!" : "Gmail"}
                  </span>
                </GlassButton>
              </motion.div>

              {/* Instagram */}
              <motion.div variants={fadeUpVariant}>
                <a
                  href="https://www.instagram.com/swathymoorthy_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                  aria-label="Follow on Instagram"
                >
                  <GlassButton className="group flex items-center justify-start gap-4 bg-white/25 hover:bg-white/40 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full shadow-[0_4px_16px_0_rgba(0,0,0,0.12)] hover:shadow-[0_4px_20px_0_rgba(255,255,255,0.25)] transition-all duration-300 font-futuraBook font-bold text-lg sm:text-xl w-full">
                    <Image
                      src={instagramLogo}
                      alt="Instagram"
                      width={26}
                      height={26}
                      className="opacity-90 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300 object-contain flex-shrink-0"
                    />
                    <span className="tracking-wide">Instagram</span>
                  </GlassButton>
                </a>
              </motion.div>

            </div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
