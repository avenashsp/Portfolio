"use client";

export default function Footer() {
  return (
    <footer className="w-full relative z-30 bg-gradient-to-r from-[#121216] via-[#23232c] to-[#121216] border-t border-white/20 shadow-[0_-16px_50px_rgba(0,0,0,0.7)] py-4 sm:py-6 md:py-8 lg:py-10 overflow-hidden flex items-center justify-center">
      {/* Subtle smoky glass highlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] via-transparent to-black/40 pointer-events-none" />
      
      {/* Full width brand name stretching across screen */}
      <div className="w-full px-2 sm:px-4 md:px-6 flex items-center justify-center text-center relative z-10">
        <h2 className="text-white tracking-tight whitespace-nowrap text-[12vw] sm:text-[11.5vw] md:text-[11vw] lg:text-[10.8vw] leading-none select-none drop-shadow-[0_6px_30px_rgba(0,0,0,0.9)] w-full flex items-center justify-center">
          <span className="font-playfair font-normal mr-2 sm:mr-4 md:mr-6">
            Swathy
          </span>
          <span className="font-futuraBold font-black uppercase tracking-normal">
            MOORTHY
          </span>
        </h2>
      </div>
    </footer>
  );
}
