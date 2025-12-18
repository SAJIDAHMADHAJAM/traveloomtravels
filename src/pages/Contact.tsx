import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-kashmir.jpg";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 6006256798", "+91 6006256798"],
    action: { href: "tel:+916006256798", label: "Call Now" }
  },
  {
    icon: Mail,
    title: "Email",
    details: ["traveloomsales@gmail.com", "traveloomsales@gmail.com"],
    action: { href: "traveloomsales@gmail.com", label: "Send Email" }
  },
  {
    icon: MapPin,
    title: "Office Address",
    details: ["Chandiloora Gulmarg, Baramulla", "Jammu & Kashmir, India - 193101"],
    action: { href: "https://maps.google.com/?q=Residency+Road+Srinagar", label: "Get Directions" }
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Saturday: 9AM - 7PM", "Sunday: 10AM - 5PM"],
    action: null
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.message) {
      toast({
        title: "Please fill required fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Contact Us" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-sky-dark/70" />
        </div>
        <div className="relative z-10 container-custom text-center text-primary-foreground">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-up">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-up delay-100">
            We're here to help plan your perfect Kashmir trip
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gradient-nature">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">Get in Touch</p>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  We'd Love to Hear From You
                </h2>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <Card key={info.title} className="p-4 bg-card">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                        ))}
                        {info.action && (
                          <a 
                            href={info.action.href} 
                            target={info.action.href.startsWith("http") ? "_blank" : undefined}
                            rel={info.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-sm text-primary hover:underline mt-2 inline-block"
                          >
                            {info.action.label} →
                          </a>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <Card className="p-6 bg-[#25D366] text-primary-foreground">
                <div className="flex items-center gap-4">
                  <MessageCircle className="h-10 w-10" fill="currentColor" />
                  <div>
                    <h3 className="font-semibold text-lg">Quick Response on WhatsApp</h3>
                    <p className="text-sm opacity-90">Get instant replies to your queries</p>
                  </div>
                </div>
                <Button asChild variant="secondary" className="w-full mt-4 bg-primary-foreground text-[#25D366] hover:bg-primary-foreground/90">
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                  </a>
                </Button>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-6 md:p-8 bg-card">
                <h3 className="font-display text-xl font-bold text-foreground mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Tour Inquiry"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your travel plans or any questions..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                    />
                  </div>
                  <Button type="submit" variant="golden" size="lg" disabled={isSubmitting}>
                    <Send className="h-4 w-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>
            </div>
          </div>

          {/* Map */}
          <Card className="mt-12 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52941.04731712159!2d74.77264087832033!3d34.08346500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1856c1e84b6eb%3A0x384e0d6a0e0f9c35!2sSrinagar%2C%20Jammu%20and%20Kashmir!5e0!3m2!1sen!2sin!4v1702900000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Traveloom Office Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </Card>
        </div>
      </section>
    </>
  );
};

export default Contact;
