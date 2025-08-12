import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to send message",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Mumbai, Maharashtra, India 400001"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 9876543210"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@jotah.com"
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-100 via-white to-slate-50 relative overflow-hidden">
      {/* Light background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 w-32 h-32 border-2 border-jotah-gold rounded-2xl rotate-12 animate-spin-slow"></div>
        <div className="absolute bottom-16 right-16 w-24 h-24 bg-amber-200 rounded-full animate-float blur-md"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-orange-200 transform rotate-45 animate-bounce blur-sm"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-slate-900 mb-6">
              Get in <span className="text-jotah-gold">Touch</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              JOTAH ke baare mein koi questions hai ya retailer banna hai? Hum aapko sunne ke liye excited hai!
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 bg-jotah-gold rounded-full flex items-center justify-center mr-4">
                    <item.icon className="text-jotah-dark" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-semibold">{item.title}</h4>
                    <p className="text-slate-600">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-slate-900 font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-jotah-gold hover:text-jotah-dark transition-colors duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
            <h3 className="text-2xl font-playfair font-semibold text-slate-900 mb-6">Send us a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-900 font-medium">Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder="Your Name"
                          className="bg-slate-50 border-slate-300 text-slate-900 focus:border-jotah-gold"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-900 font-medium">Email</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email"
                          placeholder="your@email.com"
                          className="bg-slate-50 border-slate-300 text-slate-900 focus:border-jotah-gold"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-900 font-medium">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder="How can we help?"
                          className="bg-slate-50 border-slate-300 text-slate-900 focus:border-jotah-gold"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-900 font-medium">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          rows={5}
                          placeholder="Tell us more about your inquiry..."
                          className="bg-slate-50 border-slate-300 text-slate-900 focus:border-jotah-gold resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-jotah-gold text-jotah-dark hover:bg-yellow-400 font-semibold"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
