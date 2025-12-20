import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Users, Phone, Mail, User, Plane } from "lucide-react";
import { packages } from "@/data/packages";
import heroImage from "@/assets/hero-kashmir.jpg";
import emailjs from "emailjs-com";

const Booking = () => {
  const [searchParams] = useSearchParams();
  const preselectedPackage = searchParams.get("package") || "";
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    arrivalDate: "",
    numberOfDays: "",
    adults: "2",
    children: "0",
    selectedPackage: preselectedPackage,
    needTickets: false,
    specialRequirements: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  if (
    !formData.fullName ||
    !formData.phone ||
    !formData.arrivalDate ||
    !formData.numberOfDays ||
    !formData.adults
  ) {
    toast({
      title: "Please fill all required fields",
      variant: "destructive",
    });
    setIsSubmitting(false);
    return;
  }

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email || "Not provided",
        arrivalDate: formData.arrivalDate,
        numberOfDays: formData.numberOfDays,
        adults: formData.adults,
        children: formData.children,
        selectedPackage: formData.selectedPackage || "Not selected",
        needTickets: formData.needTickets ? "Yes" : "No",
        specialRequirements:
          formData.specialRequirements || "No special requirements",
        year: new Date().getFullYear(),
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    toast({
      title: "Booking Request Received!",
      description:
        "Our team will contact you within 2 hours to confirm your booking.",
    });

    setFormData({
      fullName: "",
      phone: "",
      email: "",
      arrivalDate: "",
      numberOfDays: "",
      adults: "2",
      children: "0",
      selectedPackage: "",
      needTickets: false,
      specialRequirements: "",
    });
  } catch (error) {
    console.error("EmailJS Error:", error);
    toast({
      title: "Something went wrong",
      description: "Please try again or contact us directly.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <>
      {/* Hero */}
      <section className="relative h-[35vh] min-h-[280px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Book Kashmir Tour" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-sky-dark/70" />
        </div>
        <div className="relative z-10 container-custom text-center text-primary-foreground">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-up">
            Book Your Trip
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-up delay-100">
            Fill in your details and we'll plan your perfect Kashmir getaway
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding bg-gradient-nature">
        <div className="container-custom max-w-4xl">
          <Card className="p-6 md:p-10 bg-card shadow-elevated">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Details */}
              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Personal Details
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Trip Details */}
              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Trip Details
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="arrivalDate">Arrival Date *</Label>
                    <Input
                      id="arrivalDate"
                      name="arrivalDate"
                      type="date"
                      value={formData.arrivalDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="numberOfDays">Number of Days *</Label>
                    <Select 
                      value={formData.numberOfDays} 
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, numberOfDays: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        {[3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((day) => (
                          <SelectItem key={day} value={day.toString()}>
                            {day} Days
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="selectedPackage">Preferred Package</Label>
                    <Select 
                      value={formData.selectedPackage} 
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, selectedPackage: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a package (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="custom">Custom Package</SelectItem>
                        {packages.map((pkg) => (
                          <SelectItem key={pkg.id} value={pkg.id}>
                            {pkg.name} - {pkg.duration}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Travelers */}
              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Number of Travelers
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="adults">Adults (12+ years) *</Label>
                    <Select 
                      value={formData.adults} 
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, adults: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Adult" : "Adults"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="children">Children (2-11 years)</Label>
                    <Select 
                      value={formData.children} 
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, children: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[0, 1, 2, 3, 4, 5].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Child" : "Children"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Additional */}
              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Plane className="h-5 w-5 text-primary" />
                  Additional Requirements
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="needTickets"
                      checked={formData.needTickets}
                      onCheckedChange={(checked) => 
                        setFormData((prev) => ({ ...prev, needTickets: checked === true }))
                      }
                    />
                    <Label htmlFor="needTickets" className="cursor-pointer">
                      I need help with Flight/Train tickets booking
                    </Label>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="specialRequirements">Special Requirements</Label>
                    <Textarea
                      id="specialRequirements"
                      name="specialRequirements"
                      placeholder="Any dietary restrictions, accessibility needs, special requests..."
                      value={formData.specialRequirements}
                      onChange={handleChange}
                      rows={4}
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <Button 
                  type="submit" 
                  variant="golden" 
                  size="xl" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Booking Request"}
                </Button>
                <p className="text-sm text-muted-foreground text-center mt-4">
                  Our travel expert will call you within 2 hours to discuss your requirements and provide the best quote.
                </p>
              </div>
            </form>
          </Card>

          {/* Contact Options */}
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <Card className="p-6 bg-card text-center">
              <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Call Us Directly</h3>
              <a href="tel:+919876543210" className="text-primary hover:underline">
                +91 6006256798
              </a>
            </Card>
            <Card className="p-6 bg-card text-center">
              <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
              <a href="mailto:info@traveloom.com" className="text-primary hover:underline">
                tarveloomsales@gmail.com
              </a>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
