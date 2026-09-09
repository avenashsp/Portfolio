"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    // Simulate loading progress
    const duration = 2000; // 2 seconds
    const interval = 20; // Update every 20ms
    const steps = duration / interval;
    let currentStep = 0;

    let timer: NodeJS.Timeout;

    // Delay start by 600ms so the user sees 0% during the entry animation
    const startTimeout = setTimeout(() => {
      timer = setInterval(() => {
        currentStep++;
        // Easing function for smoother progress near the end
        const rawProgress = (currentStep / steps);
        const easedProgress = 1 - Math.pow(1 - rawProgress, 4);

        const nextProgress = Math.min(Math.round(easedProgress * 100), 100);
        setProgress(nextProgress);

        if (currentStep >= steps) {
          clearInterval(timer);
          setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "auto";
          }, 400); // Pause briefly at 100% before fading out
        }
      }, interval);
    }, 600);

    return () => {
      clearTimeout(startTimeout);
      if (timer) clearInterval(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a] backdrop-blur-3xl"
        >
          <div className="w-[80%] max-w-md flex flex-col items-center">
            {/* Loading Text */}
            <div className="mb-6 text-white/80 text-[10px] md:text-xs font-futuraBook tracking-[0.4em] uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
              Initializing Experience
            </div>

            {/* Glassy Track */}
            <div className="w-full h-6 md:h-8 bg-white/5 backdrop-blur-xl rounded-full shadow-[inset_0_2px_15px_rgba(0,0,0,0.5)] border border-white/10 p-1 relative">
              {/* Progress Bar */}
              <motion.div
                className="relative h-full bg-gradient-to-r from-white/10 via-white/50 to-white/90 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] border border-white/30"
                style={{ width: `${progress}%` }}
              >
                {/* Shiny Glare */}
                <div className="absolute top-[1px] left-1 right-1 h-1/3 bg-gradient-to-b from-white/80 to-transparent rounded-full" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
