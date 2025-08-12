import { Leaf, Award, Flame } from "lucide-react";
import brandImage from "@assets/WhatsApp Image 2025-08-07 at 20.29.16_1754985828768.jpeg";
import sectionBackgroundImage from "@assets/WhatsApp Image 2025-08-07 at 20.29.17 (1)_1754991031140.jpeg";

export default function BrandStorySection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{
          backgroundImage: `url(${sectionBackgroundImage})`,
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-jotah-dark mb-6">
              The Art of <span className="text-jotah-gold">Perfection</span>
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Since our inception, JOTAH has been committed to crafting the finest rolling papers using traditional techniques combined with modern innovation. Each sheet represents our dedication to quality, purity, and the perfect smoking experience.
            </p>
            <p className="text-lg text-gray-500 mb-8">
              Our papers are made from carefully selected natural fibers, ensuring a clean burn and pure taste that enhances rather than masks the natural flavors of your preferred blend.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <Leaf className="text-jotah-green text-2xl mr-3" />
                <span className="text-jotah-dark font-semibold">100% Natural</span>
              </div>
              <div className="flex items-center">
                <Award className="text-jotah-gold text-2xl mr-3" />
                <span className="text-jotah-dark font-semibold">Premium Quality</span>
              </div>
              <div className="flex items-center">
                <Flame className="text-red-500 text-2xl mr-3" />
                <span className="text-jotah-dark font-semibold">Perfect Burn</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src={brandImage} 
              alt="JOTAH Premium Rolling Papers" 
              className="rounded-2xl shadow-2xl w-full object-cover h-96" 
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-jotah-gold/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
