import { ChevronDown } from "lucide-react";
import heroBackgroundImage from "@assets/WhatsApp Image 2025-08-07 at 20.29.16_1754991031139.jpeg";

export default function HeroSection() {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackgroundImage})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/60 to-transparent"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-jotah-gold rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-green-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-400 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-playfair font-black text-transparent bg-clip-text bg-gradient-to-r from-jotah-gold via-yellow-500 to-amber-600 mb-4 animate-fade-in">
            JOTAH
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-inter font-bold text-white drop-shadow-2xl mb-6">
            Premium Rolling Papers
          </h2>
        </div>
        
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-lg">
          India ka sabse premium rolling paper brand. Natural, smooth, aur perfect burn ke saath. 
          <span className="text-jotah-gold font-bold"> Experience the difference!</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button 
            onClick={scrollToProducts}
            className="bg-gradient-to-r from-jotah-gold to-yellow-500 text-black px-10 py-4 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-jotah-gold transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
          >
            🔥 Explore Products
          </button>
          <button 
            onClick={scrollToAbout}
            className="border-3 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
          >
            Learn More
          </button>
        </div>

        {/* Features badges */}
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
            <span className="text-white font-semibold">🌿 100% Natural</span>
          </div>
          <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
            <span className="text-white font-semibold">🔥 Perfect Burn</span>
          </div>
          <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
            <span className="text-white font-semibold">⭐ Premium Quality</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30">
          <ChevronDown className="text-white text-2xl" />
        </div>
      </div>
    </section>
  );
}
