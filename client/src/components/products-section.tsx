import productImage1 from "@assets/WhatsApp Image 2025-08-07 at 20.29.16_1754986658170.jpeg";
import productImage2 from "@assets/WhatsApp Image 2025-08-07 at 20.29.17 (1)_1754986658171.jpeg";
import productImage3 from "@assets/WhatsApp Image 2025-08-07 at 20.29.17_1754986658171.jpeg";
import productImage4 from "@assets/WhatsApp Image 2025-08-07 at 20.29.21_1754986658172.jpeg";

export default function ProductsSection() {
  const products = [
    {
      id: 1,
      name: "Classic Premium",
      description: "Ultra-thin, slow-burning papers jo natural fibers se bane hai. Perfect for everyday use!",
      price: "₹149",
      originalPrice: "₹199",
      image: productImage1,
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Gold Edition",
      description: "Limited edition papers with gold accents. Premium luxury experience ke liye perfect!",
      price: "₹299",
      originalPrice: "₹399",
      image: productImage2,
      badge: "Limited"
    },
    {
      id: 3,
      name: "Organic Natural",
      description: "100% organic hemp papers. Sabse natural aur pure smoking experience milega!",
      price: "₹199",
      originalPrice: "₹249",
      image: productImage3,
      badge: "Organic"
    },
    {
      id: 4,
      name: "Premium Collection",
      description: "Hamare finest collection with premium materials aur exceptional craftsmanship.",
      price: "₹249",
      originalPrice: "₹299",
      image: productImage4,
      badge: "Premium"
    }
  ];

  const handleAddToCart = (productName: string) => {
    // TODO: Implement add to cart functionality
    console.log(`Adding ${productName} to cart`);
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-jotah-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-green-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-black text-jotah-dark mb-6">
            Our <span className="gradient-text">Premium</span> Collection
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            🔥 Discover hamare carefully curated selection of premium rolling papers! 
            Har product authentic quality aur best experience ke liye designed hai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group border border-gray-100 relative">
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-jotah-gold text-black px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  {product.badge}
                </span>
              </div>
              
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-playfair font-bold text-jotah-dark mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-black text-jotah-gold">{product.price}</span>
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">
                    Save ₹{parseInt(product.originalPrice.slice(1)) - parseInt(product.price.slice(1))}
                  </div>
                </div>
                
                <button 
                  onClick={() => handleAddToCart(product.name)}
                  className="w-full bg-gradient-to-r from-jotah-gold to-yellow-500 text-black px-6 py-3 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-jotah-gold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block p-1 bg-gradient-to-r from-jotah-gold to-yellow-500 rounded-full">
            <button className="bg-white text-jotah-dark px-10 py-4 rounded-full font-bold text-xl hover:bg-gray-50 transition-all duration-300">
              🔥 View All Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
