import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Clock, MapPin, Star, Users, Headphones } from "lucide-react";
import heroImage from "@/assets/hero-kashmir.jpg";
import gulmargImage from "@/assets/gulmarg.jpg";
import pahalgamImage from "@/assets/pahalgam.jpg";
import sonamargImage from "@/assets/sonamarg.jpg";
import srinagarImage from "@/assets/srinagar.jpg";

const destinations = [
  {
    name: "Srinagar",
    description: "The Summer Capital with Dal Lake houseboats and Mughal gardens",
    image: srinagarImage,
  },
  {
    name: "Gulmarg",
    description: "Asia's premier ski resort with the world's highest gondola",
    image: gulmargImage,
  },
  {
    name: "Pahalgam",
    description: "Valley of Shepherds with pristine rivers and meadows",
    image: pahalgamImage,
  },
  {
    name: "Sonamarg",
    description: "The Meadow of Gold with glaciers and alpine beauty",
    image: sonamargImage,
  },
];

const trustBadges = [
  { icon: Shield, title: "Best Price Guarantee", description: "We match any competitor's price" },
  { icon: Users, title: "Local Travel Experts", description: "Born & raised in Kashmir" },
  { icon: Headphones, title: "24×7 Support", description: "Always here to help you" },
  { icon: Star, title: "5000+ Happy Travelers", description: "Trusted by thousands" },
];

const Index = () => {
  return (
    <>
      {/* SEO */}
      <title>Traveloom Tour & Travels - Best Kashmir Tour Packages | Book Now</title>
      <meta name="description" content="Experience the beauty of Kashmir with Traveloom. Customized Kashmir tour packages including Srinagar, Gulmarg, Pahalgam & Sonamarg. Best prices with local expertise." />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Beautiful Kashmir Valley with Dal Lake and snow-capped mountains" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/30 to-foreground/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom text-center text-primary-foreground">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-up">
            <p className="text-sm md:text-base font-medium tracking-widest uppercase text-golden">
              Welcome to Paradise on Earth
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              Experience the Beauty of <span className="text-golden">Kashmir</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Customized Kashmir Tour Packages | Best Prices | Local Experts
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/booking">Book Your Trip Now</Link>
              </Button>
              <Button asChild variant="outline-light" size="xl">
                <Link to="/packages">View Packages</Link>
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
            <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-primary-foreground/80 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 md:py-12 bg-card border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trustBadges.map((badge, index) => (
              <div 
                key={badge.title} 
                className="flex flex-col items-center text-center space-y-2 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-3 rounded-full bg-primary/10">
                  <badge.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm md:text-base text-foreground">{badge.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground hidden sm:block">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="section-padding bg-gradient-nature">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Explore Kashmir</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Popular Destinations
            </h2>
            <p className="text-muted-foreground">
              Discover the most breathtaking locations in the Kashmir Valley, each offering unique experiences and memories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, index) => (
              <Link
                key={dest.name}
                to="/packages"
                className="group relative overflow-hidden rounded-xl aspect-[3/4] card-hover animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-golden" />
                    <span className="text-xs font-medium uppercase tracking-wider">Kashmir</span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold mb-1">{dest.name}</h3>
                  <p className="text-sm text-primary-foreground/80 line-clamp-2">{dest.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="default" size="lg">
              <Link to="/packages">View All Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <p className="text-sm font-medium text-primary tracking-widest uppercase">Why Traveloom</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Your Trusted Kashmir Travel Partner
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At Traveloom, we don't just plan trips – we craft experiences. As locals born and raised in Kashmir, we bring you authentic insights and hidden gems that only insiders know.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {[
                  { icon: "🎯", title: "Custom Packages", desc: "Tailored to your preferences" },
                  { icon: "🏔️", title: "Local Expertise", desc: "Born & raised Kashmiris" },
                  { icon: "💰", title: "Transparent Pricing", desc: "No hidden charges" },
                  { icon: "🚗", title: "Comfortable Transport", desc: "Well-maintained vehicles" },
                  { icon: "🏨", title: "Verified Hotels", desc: "Quality assured stays" },
                  { icon: "📞", title: "24/7 Support", desc: "Always just a call away" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button asChild variant="golden" size="lg" className="mt-4">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src={gulmargImage} alt="Gulmarg" className="rounded-xl shadow-elevated w-full aspect-square object-cover" />
                  <img src={pahalgamImage} alt="Pahalgam" className="rounded-xl shadow-elevated w-full aspect-[4/3] object-cover" />
                </div>
                <div className="space-y-4 pt-8">
                  <img src={sonamargImage} alt="Sonamarg" className="rounded-xl shadow-elevated w-full aspect-[4/3] object-cover" />
                  <img src={srinagarImage} alt="Srinagar" className="rounded-xl shadow-elevated w-full aspect-square object-cover" />
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-golden/20 rounded-full blur-2xl" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-sky-dark/90" />
        </div>
        <div className="relative z-10 container-custom text-center text-primary-foreground">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ready for Your Kashmir Adventure?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Let us plan your perfect trip to paradise. Get personalized recommendations and the best deals on Kashmir tour packages.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="hero" size="xl">
              <Link to="/booking">Book Now</Link>
            </Button>
            <Button asChild variant="outline-light" size="xl">
              <a href="tel:+919876543210">
                <Clock className="h-5 w-5 mr-2" />
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
