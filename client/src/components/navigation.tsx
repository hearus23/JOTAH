import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur-lg border-b border-gray-700/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <div className="flex items-center">
            <div className="text-3xl font-playfair font-black text-transparent bg-clip-text bg-gradient-to-r from-jotah-gold to-yellow-500 cursor-pointer animate-glow" onClick={() => scrollToSection('home')}>
              JOTAH
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-jotah-gold transition-all duration-300 font-semibold text-lg hover:scale-105">Home</button>
              <button onClick={() => scrollToSection('products')} className="text-white hover:text-jotah-gold transition-all duration-300 font-semibold text-lg hover:scale-105">Products</button>
              <button onClick={() => scrollToSection('what-the-fun')} className="text-white hover:text-jotah-gold transition-all duration-300 font-semibold text-lg hover:scale-105">What the Fun</button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-jotah-gold transition-all duration-300 font-semibold text-lg hover:scale-105">About</button>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-jotah-gold to-yellow-500 text-black px-6 py-2 rounded-full font-bold hover:from-yellow-500 hover:to-jotah-gold transition-all duration-300 hover:scale-105 shadow-lg">Contact</button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-white hover:text-jotah-gold focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 border-t border-gray-700">
            <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-white hover:text-jotah-gold w-full text-left">Home</button>
            <button onClick={() => scrollToSection('products')} className="block px-3 py-2 text-white hover:text-jotah-gold w-full text-left">Products</button>
            <button onClick={() => scrollToSection('what-the-fun')} className="block px-3 py-2 text-white hover:text-jotah-gold w-full text-left">What the Fun</button>
            <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-white hover:text-jotah-gold w-full text-left">About</button>
            <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-white hover:text-jotah-gold w-full text-left">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
}
