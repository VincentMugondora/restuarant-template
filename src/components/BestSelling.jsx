import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  { name: "Classic Cheese Burger", price: "10.00", image: "/cheese_burger.png" },
  { name: "Double Patty Monster", price: "13.00", image: "/double_burger.png" },
  { name: "Fresh Veggie Burger", price: "15.00", image: "/veggie_burger.png" },
  { name: "Original Tasty Burger", price: "12.00", image: "/burger-her.png" },
];

export default function BestSelling() {
  return (
    <section className="bg-[#fdfaf0] py-20 px-6 md:px-16 relative overflow-hidden">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
          Best Selling <span className="text-brand-green">Items</span>
        </h2>
        <p className="text-gray-500 leading-relaxed">
          Discover the dishes our guests can't get enough of. From towering hand-crafted burgers to crisp, refreshing sides, these are the proven crowd-pleasers that define our menu.
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative flex items-center">
        
        {/* Navigation Arrows */}
        <button className="absolute -left-4 lg:-left-12 z-10 w-10 h-10 rounded-full border border-yellow-400 flex items-center justify-center text-yellow-500 hover:bg-yellow-400 hover:text-white transition-all bg-white/50 backdrop-blur-sm">
          <ChevronLeft size={20} />
        </button>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {products.map((item, index) => (
            <div key={index} className="group cursor-pointer transition-transform duration-300 hover:-translate-y-2">
              {/* Image Container (Square) */}
              <div className="aspect-square bg-white rounded-lg flex items-center justify-center p-6 shadow-sm border border-gray-50 group-hover:shadow-md transition-shadow">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Details */}
              <div className="mt-6 flex flex-col gap-2">
                <h3 className="font-bold text-gray-800 text-lg leading-tight group-hover:text-brand-green transition-colors">
                  {item.name}
                </h3>
                
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>

                <p className="font-bold text-xl text-gray-900 mt-1">
                  ${item.price} <span className="text-sm font-semibold text-gray-500">USD</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <button className="absolute -right-4 lg:-right-12 z-10 w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center text-white hover:bg-yellow-500 transition-all shadow-lg shadow-yellow-200">
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
