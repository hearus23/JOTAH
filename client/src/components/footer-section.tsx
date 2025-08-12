import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-gradient-to-br from-jotah-dark to-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-jotah-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-4xl font-playfair font-black text-transparent bg-clip-text bg-gradient-to-r from-jotah-gold to-yellow-500 mb-4">
              JOTAH
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              India ka sabse premium rolling paper brand. Natural, authentic aur high-quality papers jo har smoker ke liye perfect hai. Join the JOTAH family today!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-jotah-gold text-black p-3 rounded-full hover:bg-yellow-500 transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-jotah-gold text-black p-3 rounded-full hover:bg-yellow-500 transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-jotah-gold text-black p-3 rounded-full hover:bg-yellow-500 transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-jotah-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-jotah-gold transition-colors duration-300">Home</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-jotah-gold transition-colors duration-300">Products</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-jotah-gold transition-colors duration-300">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-jotah-gold transition-colors duration-300">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-jotah-gold transition-colors duration-300">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-jotah-gold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-jotah-gold" />
                <span className="text-gray-300">info@jotah.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-jotah-gold" />
                <span className="text-gray-300">+91 9876543210</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-jotah-gold mt-1" />
                <span className="text-gray-300">Mumbai, Maharashtra<br />India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 JOTAH. All rights reserved. Made with ❤️ in India.
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-jotah-gold transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-jotah-gold transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-jotah-gold transition-colors duration-300">Return Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}