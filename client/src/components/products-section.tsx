import productImage1 from "@assets/WhatsApp Image 2025-08-07 at 20.29.16_1754986658170.jpeg";
import productImage2 from "@assets/WhatsApp Image 2025-08-07 at 20.29.17 (1)_1754986658171.jpeg";
import productImage3 from "@assets/WhatsApp Image 2025-08-07 at 20.29.17_1754986658171.jpeg";
import productImage4 from "@assets/WhatsApp Image 2025-08-07 at 20.29.21_1754986658172.jpeg";

export default function ProductsSection() {
  const products = [
    {
      id: 1,
      name: "Classic Premium",
      description: "Ultra-thin, slow-burning papers crafted from the finest natural fibers.",
      price: "$12.99",
      image: productImage1
    },
    {
      id: 2,
      name: "Gold Edition",
      description: "Limited edition papers with gold accents for the ultimate luxury experience.",
      price: "$24.99",
      image: productImage2
    },
    {
      id: 3,
      name: "Organic Natural",
      description: "100% organic hemp papers for the purest, most natural smoking experience.",
      price: "$16.99",
      image: productImage3
    },
    {
      id: 4,
      name: "Premium Collection",
      description: "Our finest collection featuring premium materials and exceptional craftsmanship.",
      price: "$19.99",
      image: productImage4
    }
  ];

  const handleAddToCart = (productName: string) => {
    // TODO: Implement add to cart functionality
    console.log(`Adding ${productName} to cart`);
  };

  return (
    <section id="products" className="py-20 bg-jotah-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            Our <span className="text-jotah-gold">Premium</span> Collection
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover our carefully curated selection of premium rolling papers, each designed to enhance your experience with unparalleled quality and craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-jotah-charcoal rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="p-6">
                <h3 className="text-2xl font-playfair font-semibold text-white mb-2">{product.name}</h3>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-jotah-gold text-xl font-semibold">{product.price}</span>
                  <button 
                    onClick={() => handleAddToCart(product.name)}
                    className="bg-jotah-green text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-jotah-gold text-jotah-dark px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
