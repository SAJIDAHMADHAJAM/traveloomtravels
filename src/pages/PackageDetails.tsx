import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Calendar, IndianRupee, Check, X, Clock, ArrowLeft } from "lucide-react";
import { packages } from "@/data/packages";

const PackageDetails = () => {
  const { id } = useParams<{ id: string }>();
  const pkg = packages.find((p) => p.id === id);

  if (!pkg) {
    return <Navigate to="/packages" replace />;
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
        </div>
        <div className="relative z-10 container-custom pb-8 text-primary-foreground">
          <Link 
            to="/packages" 
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Packages
          </Link>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-golden text-accent-foreground text-sm font-semibold rounded-full">
                  {pkg.duration}
                </span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                {pkg.name}
              </h1>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>{pkg.destinations.join(" → ")}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-primary-foreground/70">Starting from</p>
              <div className="flex items-center text-3xl md:text-4xl font-bold text-golden">
                <IndianRupee className="h-6 w-6" />
                {pkg.startingPrice.toLocaleString('en-IN')}
              </div>
              <p className="text-sm text-primary-foreground/70">per person</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="itinerary" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
                  <TabsTrigger value="highlights">Highlights</TabsTrigger>
                </TabsList>

                <TabsContent value="itinerary" className="space-y-6">
                  {pkg.itinerary.map((day, index) => (
                    <Card key={index} className="p-6 bg-card">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <div className="text-center">
                            <p className="text-xs text-primary font-medium">Day</p>
                            <p className="text-xl font-bold text-primary">{day.day}</p>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-display text-xl font-bold text-foreground mb-2">
                            {day.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">{day.description}</p>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {day.activities.map((activity, i) => (
                              <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                <Clock className="h-3 w-3 text-primary flex-shrink-0" />
                                <span>{activity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="inclusions" className="space-y-6">
                  <Card className="p-6 bg-card">
                    <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Check className="h-5 w-5 text-secondary" />
                      Package Inclusions
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {pkg.inclusions.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-foreground/80">
                          <Check className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card className="p-6 bg-card">
                    <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <X className="h-5 w-5 text-destructive" />
                      Package Exclusions
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {pkg.exclusions.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-foreground/80">
                          <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="highlights">
                  <Card className="p-6 bg-card">
                    <h3 className="font-display text-xl font-bold text-foreground mb-4">
                      Trip Highlights
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {pkg.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                          <span className="text-2xl">✨</span>
                          <span className="text-foreground/80">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 bg-card sticky top-24">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  Book This Tour
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-semibold text-foreground">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Destinations</span>
                    <span className="font-semibold text-foreground">{pkg.destinations.length} Places</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-muted-foreground">Starting Price</span>
                    <div className="flex items-center font-bold text-primary text-xl">
                      <IndianRupee className="h-4 w-4" />
                      {pkg.startingPrice.toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>

                <Button asChild variant="golden" size="lg" className="w-full mb-3">
                  <Link to={`/booking?package=${pkg.id}`}>Book Now</Link>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="w-full">
                  <a href="https://wa.me/916006256798?text=Hi, I'm interested in the ${pkg.name} package">
                    WhatsApp Inquiry
                  </a>
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Price varies based on season, hotel category & group size
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PackageDetails;
