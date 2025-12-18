import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Calendar, IndianRupee, ArrowRight } from "lucide-react";
import { packages } from "@/data/packages";
import heroImage from "@/assets/hero-kashmir.jpg";

const Packages = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Kashmir Tour Packages" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-sky-dark/70" />
        </div>
        <div className="relative z-10 container-custom text-center text-primary-foreground">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-up">
            Kashmir Tour Packages
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-up delay-100">
            Choose from our carefully curated packages for an unforgettable Kashmir experience
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="section-padding bg-gradient-nature">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={pkg.id} 
                className="overflow-hidden card-hover bg-card animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid md:grid-cols-2">
                  {/* Image */}
                  <div className="relative aspect-[4/3] md:aspect-auto">
                    <img 
                      src={pkg.image} 
                      alt={pkg.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-golden text-accent-foreground text-sm font-semibold rounded-full">
                      {pkg.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                      {pkg.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{pkg.destinations.join(" • ")}</span>
                    </div>

                    <div className="space-y-2 mb-4 flex-1">
                      {pkg.highlights.slice(0, 4).map((highlight, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                          <span className="text-secondary mt-0.5">✓</span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-border pt-4 mt-auto">
                      <div className="flex items-end justify-between">
                        <div>
                          <p className="text-xs text-muted-foreground">Starting from</p>
                          <div className="flex items-center text-2xl font-bold text-primary">
                            <IndianRupee className="h-5 w-5" />
                            {pkg.startingPrice.toLocaleString('en-IN')}
                            <span className="text-sm font-normal text-muted-foreground ml-1">/person</span>
                          </div>
                        </div>
                        <Button asChild variant="default" size="sm">
                          <Link to={`/packages/${pkg.id}`}>
                            View Details
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Custom Package CTA */}
          <Card className="mt-12 p-8 md:p-12 bg-gradient-hero text-primary-foreground text-center">
            <Calendar className="h-12 w-12 mx-auto mb-4 opacity-80" />
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Looking for a Custom Package?
            </h3>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-6">
              Can't find exactly what you're looking for? Let us create a personalized itinerary tailored to your preferences, budget, and schedule.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/booking">Request Custom Package</Link>
            </Button>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Packages;
