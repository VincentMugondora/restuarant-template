import { Search, ShoppingBag, ArrowRight } from "lucide-react";

export default function Navbar() {
  const navLinks = ["Home", "About Us", "Shop", "Services", "Blog", "Pages", "Contact Us"];

  return (
    <nav className="flex items-center justify-between py-6 px-6 md:px-12 max-w-[1440px] mx-auto w-full z-10 relative">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="relative text-brand-yellow flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            <path d="M12 5v14" className="text-brand-green" />
            <path d="M15 8l-3 3" className="text-brand-green" />
          </svg>
        </div>
        <span className="text-2xl font-serif font-bold italic">
          <span className="text-brand-yellow">Food </span>
          <span className="text-brand-green">Lover.</span>
        </span>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex items-center gap-6 text-sm font-medium">
        {navLinks.map((link, idx) => (
          <li key={idx}>
            <a 
              href={`#${link.toLowerCase().replace(" ", "")}`} 
              className={`hover:text-brand-yellow transition-colors ${link === "Home" ? "text-brand-yellow font-bold" : "text-white"}`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="hidden lg:flex items-center gap-5">
        <button aria-label="Search" className="text-gray-300 hover:text-white transition-colors">
          <Search size={22} />
        </button>
        <button aria-label="Cart" className="text-gray-300 hover:text-white transition-colors relative">
          <ShoppingBag size={22} />
          <span className="absolute -top-1.5 -right-2 bg-brand-yellow text-brand-dark text-[10px] font-bold px-1.5 py-0.5 rounded-full">
            0
          </span>
        </button>
        
        <button className="flex items-center gap-2 bg-brand-yellow text-brand-dark font-medium px-5 py-2.5 rounded-md hover:bg-yellow-400 transition-colors ml-2">
          Order Now
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Mobile Menu Toggle (Simplified for hero focus) */}
      <button className="lg:hidden text-white">
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="28" height="28">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
}
