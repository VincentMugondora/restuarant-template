import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FeaturedSection() {
  return (
    <section className="bg-[#fdfaf0] py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Overlapping Images */}
        <div className="relative flex justify-center lg:justify-start">
          {/* Main Large Image */}
          <div className="relative w-[300px] h-[350px] md:w-[400px] md:h-[450px]">
            <img 
              src="/double_burger.png" 
              alt="Featured Burger" 
              className="w-full h-full object-cover rounded-xl shadow-2xl bg-brand-surface"
            />
            
            {/* Overlapping Smaller Image */}
            <motion.div 
              initial={{ x: 20, y: 20, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="absolute -right-6 -bottom-6 md:-right-12 md:-bottom-12 w-[180px] h-[180px] md:w-[260px] md:h-[260px] border-[8px] md:border-[10px] border-[#fdfaf0] rounded-lg shadow-xl overflow-hidden bg-brand-surface"
            >
              <img 
                src="/cheese_burger.png" 
                alt="Featured Sides" 
                className="w-full h-full object-cover scale-110"
              />
            </motion.div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="flex flex-col gap-6 text-center lg:text-left mt-10 lg:mt-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
            Captivating Culinary <br />
            <span className="text-brand-green">Favorites.</span>
          </h2>
          
          <p className="text-gray-500 text-lg leading-relaxed max-w-[550px] mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-8 mt-4 justify-center lg:justify-start">
            <button className="bg-brand-yellow text-black font-bold px-8 py-4 rounded-md hover:bg-yellow-400 transition-all flex items-center gap-2 shadow-[0_4px_14px_rgba(255,200,0,0.3)] active:scale-95">
              Order Now
              <ArrowRight size={20} />
            </button>
            
            <a href="#" className="hidden sm:block text-brand-green font-bold border-b-2 border-transparent hover:border-brand-green transition-all pb-1">
              About TastyFlow
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
