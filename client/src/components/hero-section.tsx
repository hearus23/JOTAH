import { ChevronDown } from "lucide-react";

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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      {/* Dynamic geometric patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-40 h-40 bg-jotah-gold rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-blue-400 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-32 h-32 bg-green-400 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-20 w-56 h-56 bg-purple-400 rounded-full animate-bounce delay-500"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-pink-400 rounded-full animate-pulse delay-1500"></div>
        </div>
      </div>
      
      {/* Geometric shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 right-16 w-16 h-16 border-4 border-jotah-gold rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-16 left-16 w-12 h-12 border-4 border-blue-400 rotate-12 animate-pulse"></div>
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-green-400 transform rotate-45 animate-bounce"></div>
      </div>
      
      {/* Wave pattern at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill="rgba(255,255,255,0.8)"></path>
        </svg>
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
