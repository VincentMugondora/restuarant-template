import React from 'react';
import { Phone, Mail, MapPin, Send, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  // Using high-quality Unsplash food images for the gallery since f1-f5.jpg aren't present
  const gallery = [
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=500",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=500",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=500",
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=500",
    "https://images.unsplash.com/photo-1484723091791-c0e7e53c979a?auto=format&fit=crop&q=80&w=500"
  ];
  
  return (
    <footer className="bg-[#111111] text-white">
      {/* 1. Instagram Gallery Strip */}
      <div className="grid grid-cols-2 md:grid-cols-5 h-48 md:h-64 overflow-hidden">
        {gallery.map((img, i) => (
          <div key={i} className="relative group cursor-pointer overflow-hidden">
            <img src={img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Gallery" />
            {i === 2 && (
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center pointer-events-none">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl border border-white/30 text-white">
                  <Instagram size={32} />
                </div>
              </div>
            )}
            {/* Hover overlay for other images to match IG feel */}
            {i !== 2 && (
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                 <Instagram size={24} className="text-white/80" />
               </div>
            )}
          </div>
        ))}
      </div>

      {/* 2. Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Col 1: Brand & Contact */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-2xl font-bold">
               <span className="text-brand-yellow font-serif">Food</span>
               <span className="text-brand-green font-serif italic">Lover.</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3"><Phone size={16} className="text-brand-yellow shrink-0" /> (001) 123 456 789</div>
              <div className="flex items-center gap-3"><Mail size={16} className="text-brand-yellow shrink-0" /> hello@gmail.com</div>
              <div className="flex items-center gap-3"><MapPin size={16} className="text-brand-yellow shrink-0" /> 5241 Elgin st. Celina, 10258</div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-6 lg:pl-8">
            <h4 className="text-xl font-bold font-serif">Quick Link</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {['Home', 'About Us', 'Shop', 'Blog', 'Licensing'].map(link => (
                <li key={link} className="flex items-center gap-2 hover:text-brand-green cursor-pointer transition-colors w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0" /> {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Opening Hours */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold font-serif">Opening Hours</h4>
            <div className="space-y-4">
              <div>
                <p className="font-bold">Sunday to Friday</p>
                <p className="text-gray-400 text-sm mt-1">9:30 AM to 12:00 PM</p>
              </div>
              <div>
                <p className="font-bold">Saturday</p>
                <p className="text-gray-400 text-sm mt-1">12:30 PM to 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold font-serif">Newsletter Subscribe</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain.
            </p>
            <form className="relative flex items-center" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email..." 
                className="w-full bg-white text-black px-4 py-3 rounded-md outline-none pr-12 focus:ring-2 focus:ring-brand-yellow transition-all" 
              />
              <button type="submit" className="absolute right-1 p-2 bg-brand-yellow rounded-md text-white hover:bg-yellow-500 transition-colors active:scale-95">
                <Send size={18} />
              </button>
            </form>
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <button key={i} className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${i === 0 ? 'bg-brand-yellow text-black hover:bg-yellow-500' : 'border border-gray-700 text-gray-400 hover:border-brand-yellow hover:text-brand-yellow'}`}>
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Copyright Bar */}
        <div className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
          © Copyright Food Lover 2024. All right reserved.
        </div>
      </div>
    </footer>
  );
}
