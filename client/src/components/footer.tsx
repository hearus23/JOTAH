import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const quickLinks = [
    { name: "Home", section: "home" },
    { name: "Products", section: "products" },
    { name: "About", section: "about" },
    { name: "Contact", section: "contact" }
  ];

  const supportLinks = [
    "Privacy Policy",
    "Terms of Service", 
    "Shipping Info",
    "Returns"
  ];

  const socialLinks = [
    { icon: Instagram, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Youtube, href: "#" }
  ];

  return (
    <footer className="bg-jotah-deep border-t border-jotah-charcoal py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-playfair font-bold text-jotah-gold mb-4">JOTAH</div>
            <p className="text-gray-400 mb-6 max-w-md">
              Premium rolling papers crafted for connoisseurs who demand excellence. Experience the difference quality makes.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="text-gray-400 hover:text-jotah-gold transition-colors duration-300"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.section)}
                    className="text-gray-400 hover:text-jotah-gold transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-jotah-gold transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-jotah-charcoal mt-8 pt-8 text-center">
          <p className="text-gray-500">
            © 2024 JOTAH Premium Rolling Papers. All rights reserved. | Age verification required.
          </p>
        </div>
      </div>
    </footer>
  );
}
