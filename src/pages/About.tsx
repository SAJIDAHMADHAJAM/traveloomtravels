import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Award, MapPin, Heart, Target, Eye } from "lucide-react";
import heroImage from "@/assets/hero-kashmir.jpg";
import pahalgamImage from "@/assets/pahalgam.jpg";

const stats = [
  { value: "5000+", label: "Happy Travelers" },
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Tour Packages" },
  { value: "100%", label: "Satisfaction Rate" },
];

const values = [
  {
    icon: Heart,
    title: "Passion for Kashmir",
    description: "We're not just tour operators – we're passionate Kashmiris who want to share the beauty of our homeland with the world."
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "Every traveler is unique. We craft personalized itineraries that match your interests, budget, and travel style."
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "We personally verify all hotels, vehicles, and services to ensure you get the best experience possible."
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "Our team knows every hidden gem, the best viewpoints, and the most authentic local experiences."
  },
];

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="About Traveloom" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-sky-dark/70" />
        </div>
        <div className="relative z-10 container-custom text-center text-primary-foreground">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-up">
            About Traveloom
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-up delay-100">
            Your trusted local Kashmir travel experts since 2014
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 md:py-12 bg-card border-b border-border -mt-16 relative z-10 container-custom rounded-xl shadow-elevated">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-sm font-medium text-primary tracking-widest uppercase">Our Story</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Born in Kashmir, Built with Love
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Traveloom Tour & Travels was founded in 2014 by a group of passionate Kashmiris who wanted to share the unparalleled beauty of their homeland with travelers from around the world.
                </p>
                <p>
                  What started as a small family venture has grown into one of Kashmir's most trusted travel companies. Our deep local roots and genuine love for this paradise on earth set us apart from typical tour operators.
                </p>
                <p>
                  We believe that visiting Kashmir should be more than just checking off tourist spots – it should be an immersive experience that touches your soul. That's why we focus on creating meaningful connections between our guests and the authentic Kashmir.
                </p>
              </div>
              <Button asChild variant="default" size="lg">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={pahalgamImage} 
                alt="Kashmir Valley" 
                className="rounded-xl shadow-elevated w-full aspect-[4/3] object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-golden text-accent-foreground px-6 py-4 rounded-lg shadow-lg">
                <p className="font-display text-2xl font-bold">Since 2014</p>
                <p className="text-sm">Serving Travelers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide authentic, memorable, and hassle-free Kashmir travel experiences while supporting local communities and preserving the natural beauty of our beloved valley.
              </p>
            </Card>
            <Card className="p-8 bg-card">
              <Eye className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and recommended travel partner for anyone visiting Kashmir, known for our exceptional service, local expertise, and genuine hospitality.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Why Choose Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              What Makes Us Different
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={value.title} className="p-6 bg-card card-hover text-center animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-hero text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Kashmir?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Let our local experts plan your perfect Kashmir vacation. We promise an experience you'll cherish forever.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="hero" size="xl">
              <Link to="/booking">Book Your Trip</Link>
            </Button>
            <Button asChild variant="outline-light" size="xl">
              <Link to="/packages">View Packages</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
