import Image from "next/image";
import hero1 from "../../images/hero1.png";
import hero2 from "../../images/hero2.png";
import downloadIcon from "../../icons/download_icon.png";
import LiveCounters from "./LiveCounters";
import AnimatedTitle from "./AnimatedTitle";
import GlassCard from "./ui/GlassCard";
import GlassButton from "./ui/GlassButton";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen pt-32 flex flex-col justify-between overflow-hidden">

      {/* Background Video */}
      <video
        src="/videos/bgVideo (3).mp4"
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      />

      <div className="flex-1 w-full max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col justify-center relative z-10 pt-4 pb-8">

        {/* Main Content Container */}
        <div className="flex flex-col w-full items-center justify-center relative">

          {/* Glassy Card */}
          <GlassCard className="relative z-10 w-full max-w-[1300px] p-8 md:p-10 lg:px-16 lg:py-12 rounded-[32px] bg-white/20 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/20">
            <h2 className="text-white font-playfair italic text-2xl md:text-3xl lg:text-[28px] mb-2 font-bold tracking-wide">
              Swathy Moorthy
            </h2>
            <AnimatedTitle />
          </GlassCard>

          {/* Download Button */}
          <div className="w-full max-w-[1300px] relative z-30 mt-8 mb-4">
            <GlassButton className="group flex items-center gap-3 bg-white/30 hover:bg-white/40 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full shadow-[0_4px_14px_0_rgba(31,38,135,0.03)] hover:shadow-[0_4px_14px_0_rgba(31,38,135,0.08)] transition-colors duration-300 font-futuraBook font-bold text-lg">
              <Image src={downloadIcon} alt="Download" width={28} height={28} className="opacity-90 grayscale group-hover:grayscale-0 transition-all duration-300" />
              <span>Download Resume</span>
            </GlassButton>
          </div>
        </div>

        {/* Person Image fixed to the bottom and maximizing height */}
        <div className="absolute bottom-0 right-5 md:right-16 lg:right-32 z-20 w-[400px] md:w-[500px] lg:w-[750px] h-full pointer-events-none flex items-end justify-end">
          <div className="relative h-full w-auto group pointer-events-auto transition-all duration-500 ease-out hover:scale-[1.03] origin-bottom">
            <Image
              src={hero1}
              alt="Swathy Moorthy"
              className="w-auto h-full max-w-full object-contain object-bottom"
              priority
            />
            <Image
              src={hero2}
              alt="Swathy Moorthy Alternate"
              className="absolute inset-0 w-full h-full object-contain object-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
              priority
            />
          </div>
        </div>

      </div>

      {/* Stats Strip */}
      <div className="w-full flex justify-center px-6 md:px-16 pb-12 z-30 relative">
        <GlassCard className="w-full max-w-[1300px] bg-white/10 backdrop-blur-2xl border border-white/20 py-8 px-6 md:px-12 rounded-[40px] shadow-[0_8px_32px_0_rgba(31,38,135,0.05)]">
          <LiveCounters />
        </GlassCard>
      </div>

    </section>
  );
}
