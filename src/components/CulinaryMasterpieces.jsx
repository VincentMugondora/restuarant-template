import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

const masterpieces = [
  { name: "Pasta with Tomatoes and Basil", image: "/pasta.png", active: true },
  { name: "Testy Beef Burger", image: "/burger-her.png" },
  { name: "Philly Steak Sandwich", image: "/double_burger.png" }, // Reused double burger as sandwich proxy
  { name: "Lemon Ice Tea", image: "/ice-tea.png" },
  { name: "Tasty Mint Julep Cocktail", image: "/cocktail.png" },
  { name: "Spinach Artichoke Spectacle", image: "/pizza.png" },
  { name: "TNC Combo Meals", image: "/combo.png" },
  { name: "Fried Chicken Legs", image: "/chicken.png" },
];

export default function CulinaryMasterpieces() {
  return (
    <section className="bg-[#fdfaf0] py-20 px-6 md:px-16 lg:px-24">
      {/* Header Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
            Handpicked Culinary <br />
            <span className="text-brand-green">Masterpieces</span>
          </h2>
          <p className="text-gray-500 mt-4 leading-relaxed">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque...
          </p>
        </div>
        <button className="bg-brand-yellow text-black font-bold px-8 py-3.5 rounded-md flex items-center justify-center gap-2 hover:bg-yellow-400 transition-colors shrink-0 shadow-[0_4px_14px_rgba(255,200,0,0.3)] active:scale-95 w-full md:w-auto mt-4 md:mt-0">
          View More <ArrowRight size={18} />
        </button>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {masterpieces.map((item, index) => (
          <div key={index} className="flex flex-col group cursor-pointer">
            {/* Image Box */}
            <div className="aspect-square bg-white rounded-lg p-6 flex items-center justify-center shadow-sm border border-gray-50 mb-6 group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-2">
              <img src={item.image} alt={item.name} className="w-full h-full object-contain" onError={(e) => {
                 // Fallback if image doesn't exist
                 e.target.src = "/cheese_burger.png"; 
              }}/>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-gray-800 text-base group-hover:text-brand-green transition-colors">{item.name}</h3>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-brand-yellow text-brand-yellow" />
                ))}
              </div>
              <p className="font-bold text-lg text-gray-900">$10.00 USD</p>
              
              {/* Conditional Button Styling */}
              <button className={`mt-2 py-2.5 px-6 rounded-full text-xs font-bold transition-all w-fit active:scale-95 ${
                item.active 
                ? 'bg-brand-yellow text-black border border-brand-yellow shadow-md hover:bg-yellow-400' 
                : 'bg-transparent text-gray-700 border border-gray-400 hover:border-gray-900 hover:text-black'
              }`}>
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
