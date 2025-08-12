import { Sprout, Settings, Heart } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: Sprout,
      title: "Natural Materials",
      description: "We source only the finest natural fibers and materials, ensuring our papers are free from harmful chemicals and additives."
    },
    {
      icon: Settings,
      title: "Precision Crafting",
      description: "Every sheet is manufactured with meticulous attention to detail, ensuring consistent thickness and perfect burn characteristics."
    },
    {
      icon: Heart,
      title: "Passion for Quality",
      description: "Our commitment to excellence drives us to continuously improve and innovate, delivering the ultimate smoking experience."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Dark geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-40 h-40 border-4 border-jotah-gold rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-gray-700 rounded-2xl rotate-45 animate-float"></div>
        <div className="absolute top-1/3 left-1/2 w-12 h-12 bg-gray-600 rounded-full animate-bounce delay-1000"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            About <span className="text-jotah-gold">JOTAH</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dedicated to excellence, committed to quality, passionate about perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-jotah-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="text-jotah-dark text-2xl" />
              </div>
              <h3 className="text-2xl font-playfair font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
