import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      content: "The quality is unmatched. These papers burn evenly and don't affect the taste at all. JOTAH has become my go-to brand.",
      name: "Marcus Johnson",
      location: "San Francisco, CA",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      id: 2,
      content: "I've tried many brands, but JOTAH's attention to detail and premium quality is evident in every sheet. Absolutely recommended.",
      name: "Sarah Chen",
      location: "Los Angeles, CA",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b407?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      id: 3,
      content: "The craftsmanship is exceptional. You can feel the quality in every sheet. JOTAH has set a new standard in the industry.",
      name: "David Rodriguez",
      location: "Denver, CO",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-lg border border-jotah-charcoal">
              <StarRating />
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4" 
                />
                <div>
                  <h4 className="text-jotah-dark font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
