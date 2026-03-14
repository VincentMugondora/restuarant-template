import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define our slides (assuming placeholders for other images)
  const slides = [
    { id: 1, src: "/burger-her.png", alt: "Classic Burger" },
    { id: 2, src: "/cheese_burger.png", alt: "Cheese Burger" },
    { id: 3, src: "/double_burger.png", alt: "Double Burger" },
    { id: 4, src: "/veggie_burger.png", alt: "Veggie Burger" },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

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
            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-5xl leading-[1.1] font-bold font-serif mb-4 tracking-tight">
              Your Go-To Spot for Quick and <span className="text-brand-green">Tasty Eats!</span>
            </h1>

            <p className="text-gray-400 text-base md:text-lg max-w-[500px] mb-8 leading-relaxed">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            <div className="relative inline-block">
              <button className="flex items-center gap-2 bg-brand-yellow text-black font-bold px-8 py-3 rounded-md hover:bg-yellow-400 transition-all active:scale-95 shadow-lg">
                Order Now
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>

          {/* RIGHT: Burger Image - Scaled based on height (vh) */}
          <div className="relative flex justify-center lg:justify-end">
            {/* The size here is tied to vh to prevent overflow */}
            <div className="relative w-[280px] h-[280px] md:w-[40vh] md:h-[40vh] lg:w-[65vh] lg:h-[65vh] max-w-[550px] max-h-[550px]">
              <div
                className="w-full h-full overflow-visible drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-transparent relative"
              >
                <AnimatePresence mode="popLayout">
                  <motion.img
                    key={currentIndex}
                    src={slides[currentIndex].src}
                    alt={slides[currentIndex].alt}
                    className="w-full h-full object-cover absolute inset-0"
                    initial={{ opacity: 0, scale: 0.8, rotate: 15, x: 100 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: -15, x: -100 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER CONTROLS - Positioned at bottom of viewport */}
      <div className="relative z-20 px-6 md:px-16 lg:px-24 pb-8 flex items-center justify-between lg:justify-start lg:gap-12 shrink-0">

        <div className="flex items-center gap-3 text-lg font-bold font-serif w-32">
          <AnimatePresence mode="wait">
             <motion.span 
               key={currentIndex}
               initial={{ y: 10, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               exit={{ y: -10, opacity: 0 }}
               transition={{ duration: 0.2 }}
               className="text-brand-yellow inline-block"
             >
               0{currentIndex + 1}
             </motion.span>
          </AnimatePresence>
          <div className="w-12 md:w-20 h-[1px] bg-gray-800" />
          <span className="text-gray-600 font-medium text-sm">0{slides.length}</span>
        </div>

        <div className="flex gap-3">
          <button onClick={handlePrev} className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center text-black hover:scale-105 transition-transform active:scale-95">
            <ArrowLeft size={18} />
          </button>
          <button onClick={handleNext} className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-white hover:border-brand-yellow hover:text-brand-yellow transition-all active:scale-95">
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </div>
  );
}