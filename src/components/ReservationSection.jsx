import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ReservationSection() {
  return (
    <section className="relative bg-[#111111] py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Burger Watermark Background */}
      <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none translate-x-10 translate-y-10">
         <img src="/burger_outline.png" alt="" className="w-[400px] lg:w-[600px]" onError={(e) => { e.target.style.display = 'none'; }} />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left: Reservation Form Card */}
        <div className="bg-white rounded-xl p-6 md:p-8 shadow-2xl">
          <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Smooth Reservations for <br /> Memorable Dining Experiences
          </h3>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-700">Your Name*</label>
                <input type="text" placeholder="Your full name" className="bg-gray-100 px-3 py-2.5 rounded-md text-sm outline-none focus:ring-2 focus:ring-brand-yellow transition-all" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-700">Your email*</label>
                <input type="email" placeholder="Your email" className="bg-gray-100 px-3 py-2.5 rounded-md text-sm outline-none focus:ring-2 focus:ring-brand-yellow transition-all" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-700">Phone number*</label>
                <input type="text" placeholder="Your phone number" className="bg-gray-100 px-3 py-2.5 rounded-md text-sm outline-none focus:ring-2 focus:ring-brand-yellow transition-all" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-700">Reservation Date*</label>
                <input type="date" className="bg-gray-100 px-3 py-2.5 rounded-md text-sm text-gray-500 outline-none focus:ring-2 focus:ring-brand-yellow transition-all" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-700">Reservation Time*</label>
                <input type="time" className="bg-gray-100 px-3 py-2.5 rounded-md text-sm text-gray-500 outline-none focus:ring-2 focus:ring-brand-yellow transition-all" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-700">Person*</label>
                <select className="bg-gray-100 px-3 py-2.5 rounded-md text-sm text-gray-500 outline-none focus:ring-2 focus:ring-brand-yellow transition-all cursor-pointer">
                  <option>Person-1</option>
                  <option>Person-2</option>
                  <option>Person-4+</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-700">Notes*</label>
              <textarea rows="3" className="bg-gray-100 px-3 py-2.5 rounded-md text-sm outline-none focus:ring-2 focus:ring-brand-yellow resize-none transition-all"></textarea>
            </div>

            <button type="submit" className="w-full bg-brand-yellow text-black font-bold py-3 mt-2 rounded-md hover:bg-yellow-400 transition-colors shadow-lg active:scale-[0.98]">
              Request Reservation
            </button>
          </form>
        </div>

        {/* Right: Text Content */}
        <div className="text-white flex flex-col items-start gap-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight">
            Elevate Your Dining Experience with a Reserved Table at <br className="hidden lg:block"/> <span className="text-brand-green">Fast Food</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed max-w-lg">
            Whether you're planning an intimate dinner or a grand celebration, reserving your table with us ensures priority service and an evening tailored perfectly to your tastes.
          </p>
          <button className="bg-brand-yellow text-black font-bold px-6 py-3 rounded-md flex items-center gap-2 hover:bg-yellow-400 transition-all shadow-xl active:scale-95 mt-2">
            Read More <ArrowRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}
