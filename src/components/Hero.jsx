import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="relative h-[96vh] min-h-[600px] w-full bg-[#161616] text-white overflow-hidden flex flex-col">

      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-10 opacity-30 pointer-events-none bg-[url('/doodle_pattern.svg')] bg-[length:400px_400px] bg-repeat mix-blend-screen" />

      <div
        className="absolute top-0 left-0 h-full w-[85%] bg-[#0f0f0f] z-0 hidden lg:block"
        style={{ clipPath: 'ellipse(75% 100% at 0% 50%)' }}
      />

      {/* NAVIGATION - Tightened padding */}
      <div className="relative z-50 shrink-0">
        <Navbar />
      </div>

      {/* MAIN CONTENT - Uses flex-1 to occupy remaining space */}
      <main className="relative z-10 flex-1 flex items-center max-w-[1440px] mx-auto w-full px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-center">

          {/* LEFT: Text Content - Reduced font sizes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl leading-[1.1] font-bold font-serif mb-4 tracking-tight">
              Your Go-To <br /> Spot for <br />
              Quick and <span className="text-brand-green">Tasty Eats!</span>
            </h1>

            <p className="text-gray-400 text-base md:text-lg max-w-[500px] mb-8 leading-relaxed">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, making it look like readable English.
            </p>

            <div className="relative inline-block">
              <button className="flex items-center gap-2 bg-brand-yellow text-black font-bold px-8 py-3 rounded-md hover:bg-yellow-400 transition-all active:scale-95 shadow-lg">
                Order Now
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>

          {/* RIGHT: Burger Image - Scaled based on height (vh) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* The size here is tied to vh to prevent overflow */}
            <div className="relative w-[280px] h-[280px] md:w-[40vh] md:h-[40vh] lg:w-[65vh] lg:h-[65vh] max-w-[550px] max-h-[550px]">
              <div
                className="w-full h-full overflow-hidden shadow-2xl border-4 border-[#1a1a1a]"
                style={{
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                  background: '#111'
                }}
              >
                <img
                  src="/burger_hero.png"
                  alt="Burger"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* FOOTER CONTROLS - Positioned at bottom of viewport */}
      <div className="relative z-20 px-6 md:px-16 lg:px-24 pb-8 flex items-center justify-between lg:justify-start lg:gap-12 shrink-0">

        <div className="flex items-center gap-3 text-lg font-bold font-serif">
          <span className="text-brand-yellow">01</span>
          <div className="w-12 md:w-20 h-[1px] bg-gray-800" />
          <span className="text-gray-600 font-medium text-sm">04</span>
        </div>

        <div className="flex gap-3">
          <button className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center text-black hover:scale-105 transition-transform">
            <ArrowLeft size={18} />
          </button>
          <button className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-white hover:border-brand-yellow transition-all">
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </div>
  );
}