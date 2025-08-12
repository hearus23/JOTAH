import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      content: "JOTAH papers ka quality ekdam top-notch hai bhai! Smooth rolling aur perfect burn. Mumbai mein sabse achha brand hai ye.",
      name: "Arjun Sharma",
      location: "Mumbai, Maharashtra",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      id: 2,
      content: "Yaar JOTAH se behtar kuch nahi! Natural papers hai aur taste mein koi compromise nahi. Delhi mein sabse popular brand ho gaya hai.",
      name: "Priya Patel",
      location: "Delhi, India",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b407?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      id: 3,
      content: "Bro, JOTAH ka quality control amazing hai! Har sheet perfect hai. Bangalore mein sab dost ye hi use karte hai ab.",
      name: "Rohit Gupta",
      location: "Bangalore, Karnataka",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      id: 4,
      content: "JOTAH papers bilkul natural hai aur health ke liye safe. Pune mein medical students bhi recommend karte hai ise.",
      name: "Sneha Reddy",
      location: "Pune, Maharashtra",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      id: 5,
      content: "Hyderabad mein JOTAH ka craze hai! Premium quality aur reasonable price. Ye brand future mein bahut bada hone wala hai.",
      name: "Vikram Singh",
      location: "Hyderabad, Telangana",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      id: 6,
      content: "Chennai mein sab college students JOTAH hi prefer karte hai. Quality consistent hai aur pocket-friendly bhi.",
      name: "Ananya Krishnan",
      location: "Chennai, Tamil Nadu",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    }
  ];

  const StarRating = () => (
    <div className="flex text-jotah-gold mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-current" />
      ))}
    </div>
  );

  return (
    <section className="py-20 bg-jotah-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-jotah-dark mb-4">
            What Our <span className="text-jotah-gold">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-600">Experience speaks louder than words</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
              <StarRating />
              <p className="text-gray-700 mb-6 italic font-medium leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full mr-4 border-2 border-jotah-gold" 
                />
                <div>
                  <h4 className="text-jotah-dark font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-jotah-gold text-sm font-semibold">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
