import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="min-h-screen bg-brand-dark bg-[url('/doodle_pattern.svg')] bg-[length:400px_400px] bg-repeat text-white relative overflow-hidden flex flex-col pt-4">
      {/* Background organic shape on the right */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-[#1c1c1c] rounded-l-full translate-x-[20%] z-0 hidden lg:block" />

      <Navbar />

      <main className="flex-1 max-w-[1440px] mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 lg:gap-8 items-center z-10 relative">
        {/* Left Column - Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 pt-10 pb-16 lg:py-0 text-center lg:text-left items-center lg:items-start"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-serif font-bold tracking-tight [text-shadow:0_4px_16px_rgba(0,0,0,0.8)]">
            Your Go-To Spot for <br className="hidden md:block" />
            <span className="mt-2 block">
              Quick and <span className="text-brand-green">Tasty Eats!</span>
            </span>
          </h1>
          
          <p className="text-gray-400 max-w-[450px] leading-relaxed text-sm md:text-base">
            It is a long established fact that a reader will be distracted by 
            the readable content of a page when looking at its layout.
          </p>

          <div className="mt-4 flex flex-col items-center lg:items-start relative">
            <button className="flex items-center gap-2 bg-brand-yellow text-brand-dark font-semibold px-8 py-3.5 rounded-md hover:bg-yellow-400 transition-colors shadow-[0_4px_14px_rgba(255,200,0,0.3)]">
              Order Now
              <ArrowRight size={20} />
            </button>

            {/* Hand drawn arrow pointing to burger (hidden on mobile) */}
            <motion.div 
                className="hidden lg:block absolute -right-32 top-8 w-40 object-contain z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
              <svg viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 10 90 C 40 -10 90 -20 120 70 L 140 50 M 95 65 L 120 70 L 110 95" stroke="#4caf50" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </div>

        </motion.div>

        {/* Right Column - Burger Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end items-center mb-10 lg:mb-0"
        >
          {/* Organic blob mask for the burger image */}
          <div className="relative w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] shrink-0">
            <div className="absolute inset-0 overflow-hidden rounded-[40%_60%_70%_30%/40%_50%_60%_50%] shadow-2xl bg-brand-surface place-content-center flex">
               <img 
                 src="/burger_hero.png" 
                 alt="A delicious hamburger" 
                 className="object-cover w-full h-full lg:scale-110"
               />
            </div>
          </div>
        </motion.div>
      </main>

      {/* Pagination Controls absolute positioned */}
      <div className="absolute bottom-8 left-6 md:left-12 flex items-center gap-4 text-white z-20 hidden md:flex">
        <span className="font-bold">01</span>
        <div className="w-12 h-[2px] bg-gray-600" />
        <span className="text-gray-500 font-bold">04</span>
        <div className="flex gap-2 ml-4">
          <button aria-label="Previous" className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center text-brand-dark hover:bg-yellow-400 transition-colors shadow-md">
            <ArrowLeft size={18} />
          </button>
          <button aria-label="Next" className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 hover:border-brand-yellow hover:text-brand-yellow transition-colors bg-brand-dark/50 backdrop-blur-sm">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
