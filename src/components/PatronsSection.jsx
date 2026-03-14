import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const patrons = [
  {
    name: "Armas Rosie",
    review: "Appreciation to those who sweeten our journey - our cherished patrons. Your unwavering support is the sugar in our recipe, infusing each moment with a delightful sweetness.",
    active: true,
    initials: "AR",
    bgColor: "bg-blue-200 text-blue-800"
  },
  {
    name: "Stuart Mark",
    review: "The atmosphere is always electric, and the food never disappoints. The chefs here clearly care deeply about their craft, making every visit a special occasion.",
    initials: "SM",
    bgColor: "bg-green-200 text-green-800"
  },
  {
    name: "Stuart Mark",
    review: "Every dish is a masterpiece. From the first bite to the last, it's evident that quality and passion are the main ingredients. I'll definitely be returning!",
    initials: "SM",
    bgColor: "bg-purple-200 text-purple-800"
  },
  {
    name: "Megan Johnson",
    review: "Easily the best dining experience I've had in the city. The attention to detail, from the perfectly balanced menu to the exceptional service, sets a new standard.",
    initials: "MJ",
    bgColor: "bg-pink-200 text-pink-800"
  }
];

export default function PatronsSection() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-[#fdfaf0] py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
      
      {/* Background Decor Curve */}
      <div className="absolute top-1/2 -left-[20%] w-[60%] h-[150%] bg-white rounded-r-full -translate-y-1/2 z-0 opacity-50 block" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-4">
              Our Cherished <span className="text-brand-green">Patrons.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Appreciation to those who sweeten our journey - our cherished patrons.
              Your unwavering support is the sugar in our recipe, infusing each moment 
              with a delightful sweetness.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4 shrink-0">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-yellow-400 flex items-center justify-center text-yellow-500 hover:bg-yellow-400 hover:text-white transition-all active:scale-95 bg-transparent"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-full bg-brand-yellow flex items-center justify-center text-white hover:bg-yellow-500 transition-all shadow-lg active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Grid */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-8 pt-4 no-scrollbar -mx-6 px-6 md:-mx-16 md:px-16 lg:-mx-24 lg:px-24"
        >
          {patrons.map((patron, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col gap-6 p-8 rounded-xl shrink-0 w-[300px] md:w-[350px] transition-transform hover:-translate-y-2 cursor-grab active:cursor-grabbing ${
                patron.active 
                ? 'bg-[#1a1a1a] text-white shadow-xl' 
                : 'bg-white border border-gray-100/50 text-gray-800 shadow-sm'
              }`}
            >
              {/* Giant Quote Icon */}
              <span className={`absolute top-4 right-6 font-serif text-8xl leading-none select-none ${
                patron.active ? 'text-gray-700/50' : 'text-gray-100'
              }`}>
                “
              </span>

              {/* Profile */}
              <div className="flex flex-col gap-4 relative z-10">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl ${patron.bgColor}`}>
                  {patron.initials}
                </div>
                <h3 className="font-bold text-xl">
                  {patron.name}
                </h3>
              </div>

              {/* Review Text */}
              <p className={`relative z-10 leading-relaxed text-sm ${
                patron.active ? 'text-gray-300' : 'text-gray-500'
              }`}>
                {patron.review}
              </p>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
