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
    <section id="about" className="py-20 bg-jotah-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            About <span className="text-jotah-gold">JOTAH</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
