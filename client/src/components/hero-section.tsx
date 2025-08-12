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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-jotah-deep via-jotah-dark to-jotah-charcoal"></div>
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6">
          <span className="text-jotah-gold">JOTAH</span><br />
          Premium Rolling Papers
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Crafted for connoisseurs who demand excellence. Experience the finest quality rolling papers designed for the perfect session.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={scrollToProducts}
            className="bg-jotah-gold text-jotah-dark px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Products
          </button>
          <button 
            onClick={scrollToAbout}
            className="border-2 border-jotah-gold text-jotah-gold px-8 py-4 rounded-lg font-semibold hover:bg-jotah-gold hover:text-jotah-dark transition-all duration-300"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-jotah-gold text-2xl" />
      </div>
    </section>
  );
}
