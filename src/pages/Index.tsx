import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Clock, MapPin, Star, Users, Headphones } from "lucide-react";
import heroImage from "@/assets/hero-kashmir.jpg";
import gulmargImage from "@/assets/gulmarg.jpg";
import pahalgamImage from "@/assets/pahalgam.jpg";
import sonamargImage from "@/assets/sonamarg.jpg";
import srinagarImage from "@/assets/srinagar.jpg";
import { Helmet } from "react-helmet-async";

const destinations = [
  {
    name: "Srinagar",
    description: "The Summer Capital with Dal Lake houseboats and Mughal gardens",
    image: srinagarImage,
    alt: "Dal Lake Srinagar with houseboats and Mughal gardens - Kashmir tour destination"
  },
  {
    name: "Gulmarg",
    description: "Asia's premier ski resort with the world's highest gondola",
    image: gulmargImage,
    alt: "Gulmarg ski resort with snow covered mountains and gondola - Kashmir tour"
  },
  {
    name: "Pahalgam",
    description: "Valley of Shepherds with pristine rivers and meadows",
    image: pahalgamImage,
    alt: "Pahalgam valley with Lidder river and green meadows - Kashmir tourism"
  },
  {
    name: "Sonamarg",
    description: "The Meadow of Gold with glaciers and alpine beauty",
    image: sonamargImage,
    alt: "Sonamarg golden meadows with Thajiwas glacier - Kashmir trip"
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
      <Helmet>
        <title>Best Kashmir Tour Packages | Srinagar, Gulmarg, Pahalgam Tours - Traveloom</title>
        <meta name="description" content="Book affordable Kashmir tour packages from ₹12,999. Explore Srinagar Dal Lake, Gulmarg Gondola, Pahalgam valleys, Sonamarg glaciers. Local experts, 24/7 support, best prices. Call +91 6006256798" />
        <meta name="keywords" content="Kashmir tour packages, Kashmir tourism, Srinagar tour, Gulmarg trip, Pahalgam vacation, Sonamarg tour, Ladakh packages, Katra tour, Kashmir honeymoon, Dal Lake houseboat, Kashmir holiday 2025" />
        <link rel="canonical" href="https://traveloom.in/" />
        <meta property="og:title" content="Best Kashmir Tour Packages - Traveloom" />
        <meta property="og:description" content="Book Kashmir tours from ₹12,999. Srinagar, Gulmarg, Pahalgam, Sonamarg with local experts." />
        <meta property="og:url" content="https://traveloom.in/" />
      </Helmet>

      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Beautiful Kashmir Valley panorama with Dal Lake, snow-capped Himalayan mountains and lush green meadows - Best Kashmir tour packages" 
            className="w-full h-full object-cover"
            loading="eager"
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
              Best <span className="text-golden">Kashmir</span> Tour Packages
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Affordable Kashmir Holiday Packages | Srinagar, Gulmarg, Pahalgam, Sonamarg, Ladakh & Katra Tours | Local Experts Since 2014
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/booking">Book Your Kashmir Trip Now</Link>
              </Button>
              <Button asChild variant="outline-light" size="xl">
                <Link to="/packages">View Tour Packages</Link>
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
      </header>

      {/* Trust Badges */}
      <section className="py-8 md:py-12 bg-card border-b border-border" aria-label="Why choose Traveloom">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trustBadges.map((badge, index) => (
              <div 
                key={badge.title} 
                className="flex flex-col items-center text-center space-y-2 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-3 rounded-full bg-primary/10">
                  <badge.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-sm md:text-base text-foreground">{badge.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground hidden sm:block">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="section-padding bg-gradient-nature" aria-labelledby="destinations-heading">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Explore Kashmir</p>
            <h2 id="destinations-heading" className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Popular Kashmir Tour Destinations
            </h2>
            <p className="text-muted-foreground">
              Discover the most breathtaking locations in Kashmir Valley - from Dal Lake houseboats in Srinagar to Gulmarg Gondola, Pahalgam valleys and Sonamarg glaciers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, index) => (
              <Link
                key={dest.name}
                to="/packages"
                className="group relative overflow-hidden rounded-xl aspect-[3/4] card-hover animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
                aria-label={`Explore ${dest.name} tour packages`}
              >
                <img 
                  src={dest.image} 
                  alt={dest.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-golden" aria-hidden="true" />
                    <span className="text-xs font-medium uppercase tracking-wider">Kashmir, India</span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold mb-1">{dest.name}</h3>
                  <p className="text-sm text-primary-foreground/80 line-clamp-2">{dest.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="default" size="lg">
              <Link to="/packages">View All Kashmir Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-card" aria-labelledby="why-choose-heading">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <p className="text-sm font-medium text-primary tracking-widest uppercase">Why Traveloom</p>
              <h2 id="why-choose-heading" className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Your Trusted Kashmir Travel Partner Since 2014
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At Traveloom, we don't just plan trips – we craft unforgettable Kashmir experiences. As locals born and raised in Kashmir, we bring you authentic insights, hidden gems, and the best tour packages for Srinagar, Gulmarg, Pahalgam, Sonamarg, Ladakh and Katra.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {[
                  { icon: "🎯", title: "Custom Kashmir Packages", desc: "Tailored to your preferences" },
                  { icon: "🏔️", title: "Local Kashmir Experts", desc: "Born & raised Kashmiris" },
                  { icon: "💰", title: "Best Price Guarantee", desc: "No hidden charges" },
                  { icon: "🚗", title: "Comfortable Transport", desc: "Well-maintained vehicles" },
                  { icon: "🏨", title: "Verified Kashmir Hotels", desc: "Quality assured stays" },
                  { icon: "📞", title: "24/7 Tour Support", desc: "Always just a call away" },
                ].map((item) => (
                  <article key={item.title} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                    <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </article>
                ))}
              </div>

              <Button asChild variant="golden" size="lg" className="mt-4">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src={gulmargImage} alt="Gulmarg ski resort Kashmir tour" className="rounded-xl shadow-elevated w-full aspect-square object-cover" loading="lazy" />
                  <img src={pahalgamImage} alt="Pahalgam valley Kashmir tourism" className="rounded-xl shadow-elevated w-full aspect-[4/3] object-cover" loading="lazy" />
                </div>
                <div className="space-y-4 pt-8">
                  <img src={sonamargImage} alt="Sonamarg glacier Kashmir trip" className="rounded-xl shadow-elevated w-full aspect-[4/3] object-cover" loading="lazy" />
                  <img src={srinagarImage} alt="Srinagar Dal Lake Kashmir vacation" className="rounded-xl shadow-elevated w-full aspect-square object-cover" loading="lazy" />
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-golden/20 rounded-full blur-2xl" aria-hidden="true" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0">
          <img src={heroImage} alt="" className="w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-sky-dark/90" />
        </div>
        <div className="relative z-10 container-custom text-center text-primary-foreground">
          <h2 id="cta-heading" className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ready for Your Kashmir Adventure?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Book your Kashmir tour package today! Best prices on Srinagar, Gulmarg, Pahalgam, Sonamarg, Ladakh & Katra tours. Call +91 6006256798 for instant booking.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="hero" size="xl">
              <Link to="/booking">Book Kashmir Tour Now</Link>
            </Button>
            <Button asChild variant="outline-light" size="xl">
              <a href="tel:+916006256798" aria-label="Call us at +91 6006256798">
                <Clock className="h-5 w-5 mr-2" aria-hidden="true" />
                Call +91 6006256798
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
