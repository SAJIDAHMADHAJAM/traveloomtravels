import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Calendar, IndianRupee, ArrowRight } from "lucide-react";
import { packages } from "@/data/packages";
import heroImage from "@/assets/hero-kashmir.jpg";
import { Helmet } from "react-helmet-async";

const Packages = () => {
  return (
    <>
      <Helmet>
        <title>Kashmir Tour Packages 2025 | Srinagar, Gulmarg, Pahalgam Tours from ₹12,999 - Traveloom</title>
        <meta name="description" content="Browse our Kashmir tour packages starting ₹12,999. 3N/4D to 6N/7D packages covering Srinagar, Gulmarg, Pahalgam, Sonamarg. Honeymoon, family & adventure tours. Book now!" />
        <meta name="keywords" content="Kashmir packages, Srinagar tour package, Gulmarg package, Pahalgam tour, Kashmir honeymoon package, family Kashmir tour, budget Kashmir trip, Kashmir 3 days package, Kashmir 5 days tour" />
        <link rel="canonical" href="https://traveloom.in/packages" />
        <meta property="og:title" content="Kashmir Tour Packages 2025 | Best Prices - Traveloom" />
        <meta property="og:description" content="Kashmir tour packages from ₹12,999. Srinagar, Gulmarg, Pahalgam, Sonamarg tours." />
        <meta property="og:url" content="https://traveloom.in/packages" />
      </Helmet>

      {/* Hero Section */}
      <header className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Kashmir Tour Packages - Explore Srinagar, Gulmarg, Pahalgam, Sonamarg" 
            className="w-full h-full object-cover" 
            loading="eager"
          />
          <div className="absolute inset-0 bg-sky-dark/70" />
        </div>
        <div className="relative z-10 container-custom text-center text-primary-foreground">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-up">
            Kashmir Tour Packages 2025
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-up delay-100">
            Affordable Kashmir holiday packages from ₹12,999 - Srinagar, Gulmarg, Pahalgam, Sonamarg, Ladakh & Katra tours
          </p>
        </div>
      </header>

      {/* Packages Grid */}
      <section className="section-padding bg-gradient-nature" aria-labelledby="packages-heading">
        <div className="container-custom">
          <h2 id="packages-heading" className="sr-only">Our Kashmir Tour Packages</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={pkg.id} 
                className="overflow-hidden card-hover bg-card animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
                itemScope
                itemType="https://schema.org/TouristTrip"
              >
                <article className="grid md:grid-cols-2">
                  {/* Image */}
                  <div className="relative aspect-[4/3] md:aspect-auto">
                    <img 
                      src={pkg.image} 
                      alt={`${pkg.name} - ${pkg.destinations.join(', ')} Kashmir tour package`}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                      itemProp="image"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-golden text-accent-foreground text-sm font-semibold rounded-full">
                      {pkg.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2" itemProp="name">
                      {pkg.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                      <span itemProp="itinerary">{pkg.destinations.join(" • ")}</span>
                    </div>

                    <div className="space-y-2 mb-4 flex-1" itemProp="description">
                      {pkg.highlights.slice(0, 4).map((highlight, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                          <span className="text-secondary mt-0.5" aria-hidden="true">✓</span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-border pt-4 mt-auto">
                      <div className="flex items-end justify-between">
                        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                          <p className="text-xs text-muted-foreground">Starting from</p>
                          <div className="flex items-center text-2xl font-bold text-primary">
                            <IndianRupee className="h-5 w-5" aria-hidden="true" />
                            <span itemProp="price">{pkg.startingPrice.toLocaleString('en-IN')}</span>
                            <meta itemProp="priceCurrency" content="INR" />
                            <span className="text-sm font-normal text-muted-foreground ml-1">/person</span>
                          </div>
                        </div>
                        <Button asChild variant="default" size="sm">
                          <Link to={`/packages/${pkg.id}`} aria-label={`View details for ${pkg.name}`}>
                            View Details
                            <ArrowRight className="h-4 w-4 ml-1" aria-hidden="true" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </article>
              </Card>
            ))}
          </div>

          {/* Custom Package CTA */}
          <Card className="mt-12 p-8 md:p-12 bg-gradient-hero text-primary-foreground text-center">
            <Calendar className="h-12 w-12 mx-auto mb-4 opacity-80" aria-hidden="true" />
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Looking for a Custom Kashmir Package?
            </h3>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-6">
              Can't find exactly what you're looking for? We create personalized Kashmir, Ladakh & Katra itineraries tailored to your preferences, budget, and schedule. Honeymoon, family, adventure - we've got you covered!
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/booking">Request Custom Kashmir Package</Link>
            </Button>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Packages;
