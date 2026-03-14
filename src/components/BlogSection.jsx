import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function BlogSection() {
  return (
    <section className="bg-[#fdfaf0] py-20 px-6 md:px-16 lg:px-24">
      
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
          Our <span className="text-brand-green">Blog</span>
        </h2>
        <p className="text-gray-500 leading-relaxed text-sm md:text-base">
          Dive into the stories behind our kitchen, explore seasonal recipes, and stay 
          updated with the latest culinary trends and events happening at our restaurant.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Featured Post */}
        <div className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[16/7] shadow-lg bg-gray-900">
          <img 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=2000" 
            alt="Featured Post" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" 
            onError={(e) => {
              // Fallback styling if image doesn't exist
              e.target.style.opacity = 0;
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent pointer-events-none" />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16 max-w-2xl z-10 pointer-events-none">
            <p className="text-gray-300 text-sm mb-4">April 2, 2024</p>
            <h3 className="text-white text-2xl md:text-4xl font-serif font-bold mb-4 leading-tight group-hover:text-brand-yellow transition-colors pointer-events-auto w-fit">
              The Palate Pioneer: <br /> Navigating the World of Tastes
            </h3>
            <p className="text-gray-300 text-sm md:text-base mb-6 line-clamp-2 md:line-clamp-none">
              Join us as our head chef explores bold new flavor profiles, sourcing exotic 
              ingredients and combining them with classic culinary techniques in our latest showcase.
            </p>
            <a href="#" className="flex items-center gap-2 text-brand-yellow font-bold hover:underline pointer-events-auto w-fit">
              Read More <ArrowRight size={18} />
            </a>
          </div>

          {/* Top Right Floating Button */}
          <div className="absolute top-6 right-6 z-10">
            <button className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center text-black shadow-lg hover:bg-yellow-400 active:scale-95 transition-all">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Secondary Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {[
            {
              title: "The Culinary Canvas: Artistry on a Plate Buffet",
              date: "April 2, 2024"
            },
            {
              title: "Tasting Traditions: A Culinary and Odyssey",
              date: "April 2, 2024"
            }
          ].map((post, index) => (
            <div key={index} className="flex flex-col gap-4 group">
              <p className="text-gray-500 text-sm">{post.date}</p>
              <h4 className="text-2xl font-serif font-bold text-gray-900 leading-tight group-hover:text-brand-green transition-colors cursor-pointer">
                {post.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Discover the secrets behind crafting the perfect dining experience from scratch, 
                straight from our expert culinary team.
              </p>
              <a href="#" className="flex items-center gap-2 text-brand-yellow font-bold hover:underline w-fit">
                Read More <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
