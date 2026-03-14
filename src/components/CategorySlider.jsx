import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  { name: "Combo Meals", icon: "🍱" },
  { name: "Pasta", icon: "🍝" },
  { name: "Burger", icon: "🍔" },
  { name: "Sandwich", icon: "🥪" },
  { name: "Sides & Fries", icon: "🍟" },
  { name: "Kids' Meals", icon: "🧸" },
];

export default function CategorySlider() {
  const [activeCategory, setActiveCategory] = useState("Burger");
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#fdfaf0] py-12 px-4 md:px-16 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center gap-4">
        
        {/* Left Arrow - Hidden on mobile */}
        <button 
          onClick={scrollLeft}
          className="hidden md:flex w-10 h-10 rounded-full border border-yellow-400 items-center justify-center text-yellow-500 hover:bg-yellow-400 hover:text-white transition-all shrink-0 active:scale-95"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Categories Container */}
        <div 
          ref={scrollRef}
          className="flex-1 flex overflow-x-auto gap-8 md:gap-4 justify-between no-scrollbar py-4 px-2"
        >
          {categories.map((cat, index) => {
            const isActive = activeCategory === cat.name;
            return (
              <div 
                key={index} 
                onClick={() => setActiveCategory(cat.name)}
                className={`group flex flex-col items-center gap-4 min-w-[100px] cursor-pointer transition-transform ${isActive ? '-translate-y-2' : 'hover:-translate-y-2'}`}
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full transition-shadow text-4xl mb-1 ${isActive ? 'shadow-lg shadow-yellow-200/50 bg-white' : 'bg-transparent'}`}>
                  {cat.icon}
                </div>
                <span className={`text-sm md:text-base font-bold whitespace-nowrap transition-colors ${isActive ? 'text-green-600' : 'text-gray-800 group-hover:text-green-600'}`}>
                  {cat.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Right Arrow - Hidden on mobile */}
        <button 
          onClick={scrollRight}
          className="hidden md:flex w-10 h-10 rounded-full bg-yellow-400 items-center justify-center text-white hover:bg-yellow-500 transition-all shrink-0 shadow-lg shadow-yellow-200 active:scale-95"
        >
          <ChevronRight size={20} />
        </button>

      </div>

      {/* Tailwind CSS for hiding scrollbars */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
