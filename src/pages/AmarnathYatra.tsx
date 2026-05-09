import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, MessageCircle, Mail, MapPin, CheckCircle2, ShieldCheck, Plane, Calendar, IndianRupee } from "lucide-react";
import heroImage from "@/assets/hero-kashmir.jpg";

const phone = "+916006256798";
const phoneDisplay = "+91 6006256798";
const email = "traveloomsales@gmail.com";
const whatsappMsg = encodeURIComponent("Hi, I'm interested in Amarnath Yatra Helicopter booking. Please share details.");

const routes = [
  {
    name: "Baltal to Panjtarni Helicopter",
    distance: "Baltal → Panjtarni (one-way ~6 min)",
    price: "₹2,800 onwards",
    note: "Shortest helicopter route. Walk ~6 km to Holy Cave from Panjtarni.",
  },
  {
    name: "Pahalgam (Nunwan) to Panjtarni Helicopter",
    distance: "Pahalgam → Panjtarni",
    price: "₹3,600 onwards",
    note: "Scenic route via Chandanwari. Walk ~6 km to Holy Cave.",
  },
  {
    name: "Neelgrath (Sonamarg) to Panjtarni Helicopter",
    distance: "Neelgrath → Panjtarni",
    price: "₹2,800 onwards",
    note: "Operated near Baltal base camp. Quickest darshan return.",
  },
];

const inclusions = [
  "Confirmed Amarnath helicopter ticket booking",
  "RFID Yatra Permit assistance",
  "Compulsory Health Certificate (CHC) guidance",
  "Hotel accommodation in Srinagar / Pahalgam / Baltal",
  "Pick & drop from Srinagar Airport",
  "Pony / palki / porter coordination at Panjtarni",
  "24x7 on-ground support during yatra",
];

const faqs = [
  {
    q: "Is helicopter booking for Amarnath Yatra 2026 open?",
    a: "Yes, Traveloom Tour & Travels is accepting advance helicopter bookings for the upcoming Shri Amarnathji Yatra. Slots are limited and allotted on first-come-first-serve basis through the Shri Amarnathji Shrine Board (SASB) authorised portal. Call +91 6006256798 to reserve your slot.",
  },
  {
    q: "What documents are legally required for Amarnath Yatra helicopter booking?",
    a: "As per SASB rules you must carry: (1) Valid Government photo ID (Aadhaar/Passport/Voter ID), (2) Compulsory Health Certificate (CHC) issued by an authorised doctor in the current yatra year, (3) RFID Yatra Permit, and (4) 4 passport-size photographs. Children below 13 years and persons above 75 years are NOT permitted as per SASB guidelines.",
  },
  {
    q: "Can pregnant women undertake the Amarnath Yatra?",
    a: "No. As per the Shri Amarnathji Shrine Board's official notification, women with more than 6 weeks of pregnancy are legally not permitted to register or undertake the Yatra, including by helicopter.",
  },
  {
    q: "Is the helicopter ticket refundable if the yatra is cancelled by authorities?",
    a: "Helicopter tickets are governed by the operator and SASB cancellation policy. If the Yatra is suspended by Government / SASB / weather authorities, refunds are processed as per their official policy (usually 75–100% minus operator charges). Voluntary cancellations attract standard cancellation deductions.",
  },
  {
    q: "Who is the legal regulating authority for Amarnath Yatra?",
    a: "The Yatra is regulated by the Shri Amarnathji Shrine Board (SASB), constituted under the J&K Shri Amarnathji Shrine Act, 2000. All registrations, helicopter slots, and security are coordinated by SASB along with the Government of Jammu & Kashmir, CRPF and J&K Police.",
  },
  {
    q: "Is medical insurance mandatory for Amarnath Yatra?",
    a: "While not legally mandatory, SASB strongly recommends travel + medical insurance due to high altitude (Holy Cave is at 12,756 ft). We provide optional insurance add-on with every helicopter booking.",
  },
  {
    q: "Are agents allowed to book Amarnath helicopter tickets?",
    a: "Yes. Authorised travel agents like Traveloom Tour & Travels can assist pilgrims with helicopter bookings, RFID permits, CHC coordination and accommodation, in compliance with SASB guidelines and J&K Tourism Department norms.",
  },
  {
    q: "What is the baggage limit on Amarnath helicopter?",
    a: "As per DGCA and operator rules, only 5 kg per passenger is allowed in the helicopter. Excess luggage must be left at the helipad cloak room at the pilgrim's own risk.",
  },
];

const AmarnathYatra = () => {
  const pageUrl = "https://traveloom.in/amarnath-yatra-helicopter-booking";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristTrip",
        name: "Amarnath Yatra Helicopter Booking 2026",
        description:
          "Book Amarnath Yatra helicopter tickets from Baltal, Pahalgam and Neelgrath (Sonamarg) to Panjtarni with Traveloom Tour & Travels. SASB-compliant booking, RFID permit assistance, hotels and 24x7 support.",
        touristType: ["Pilgrims", "Religious Travellers"],
        url: pageUrl,
        image: "https://traveloom.in/og-kashmir.jpg",
        provider: {
          "@type": "TravelAgency",
          name: "Traveloom Tour & Travels",
          telephone: phoneDisplay,
          email,
          url: "https://traveloom.in",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Chandiloora Gulmarg",
            addressLocality: "Baramulla",
            addressRegion: "Jammu & Kashmir",
            postalCode: "193101",
            addressCountry: "IN",
          },
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: "2800",
          availability: "https://schema.org/InStock",
          url: pageUrl,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://traveloom.in/" },
          { "@type": "ListItem", position: 2, name: "Amarnath Yatra Helicopter Booking", item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Amarnath Yatra Helicopter Booking 2026 | Baltal & Pahalgam Tickets - Traveloom</title>
        <meta
          name="description"
          content="Book Amarnath Yatra helicopter tickets online for 2026. Baltal, Pahalgam & Sonamarg to Panjtarni helicopter booking with RFID permit, hotels & darshan assistance. Call +91 6006256798."
        />
        <meta
          name="keywords"
          content="Amarnath Yatra helicopter booking, Amarnath helicopter ticket 2026, Baltal helicopter booking, Pahalgam Panjtarni helicopter, Neelgrath helicopter Amarnath, Amarnath yatra package, Amarnath darshan booking, SASB helicopter, Amarnath Yatra registration, Holy Cave Amarnath, Shri Amarnathji Shrine Board, Amarnath tour operator, Amarnath yatra agent Kashmir"
        />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Amarnath Yatra Helicopter Booking 2026 | Traveloom Tour & Travels" />
        <meta
          property="og:description"
          content="Confirmed Amarnath helicopter tickets from Baltal, Pahalgam & Sonamarg. Trusted SASB-compliant operator. Book now: +91 6006256798."
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content="https://traveloom.in/og-kashmir.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Amarnath Yatra Helicopter Booking 2026" />
        <meta
          name="twitter:description"
          content="Book Amarnath helicopter tickets for Baltal & Pahalgam routes. Call +91 6006256798."
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="geo.region" content="IN-JK" />
        <meta name="geo.placename" content="Amarnath, Jammu and Kashmir" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Hero */}
      <section
        className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.6)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-custom text-white px-4">
          <p className="uppercase tracking-[0.3em] text-sm md:text-base text-secondary mb-4">
            Har Har Mahadev | Bam Bam Bhole
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Amarnath Yatra Helicopter Booking 2026
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90">
            Confirmed helicopter tickets from <strong>Baltal</strong>, <strong>Pahalgam</strong> &{" "}
            <strong>Neelgrath (Sonamarg)</strong> to Panjtarni. SASB-compliant booking, RFID permit
            assistance, hotels & 24x7 darshan support by Traveloom Tour & Travels.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="golden" size="lg">
              <a href={`tel:${phone}`}>
                <Phone className="mr-2 h-5 w-5" /> Call {phoneDisplay}
              </a>
            </Button>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <a href={`https://wa.me/916006256798?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Book Amarnath Helicopter Tickets with India's Trusted Kashmir Operator
          </h2>
          <p className="text-lg text-muted-foreground text-center leading-relaxed">
            The holy <strong>Shri Amarnathji Yatra</strong> is one of India's most revered Hindu pilgrimages,
            culminating at the naturally formed ice Shivling inside the Holy Cave at 12,756 ft in the
            Kashmir Himalayas. <strong>Traveloom Tour & Travels</strong> offers end-to-end{" "}
            <strong>Amarnath Yatra helicopter booking</strong> services — confirmed tickets, RFID
            registration assistance, Compulsory Health Certificate (CHC) coordination, accommodation
            and dedicated on-ground support — fully compliant with the Shri Amarnathji Shrine Board
            (SASB) guidelines.
          </p>
        </div>
      </section>

      {/* Routes */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Amarnath Helicopter Routes & Fares
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            All fares are one-way per passenger and subject to SASB &amp; operator revisions for the
            2026 yatra season. Round-trip combos available.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {routes.map((r) => (
              <Card key={r.name} className="p-6 hover:shadow-elegant transition-all">
                <Plane className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{r.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{r.distance}</p>
                <p className="text-2xl font-bold text-primary flex items-center mb-3">
                  <IndianRupee className="h-5 w-5" /> {r.price.replace("₹", "")}
                </p>
                <p className="text-sm text-foreground/80">{r.note}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            What's Included in Our Amarnath Helicopter Package
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {inclusions.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-lg bg-card border">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
        <div className="container-custom max-w-4xl text-center">
          <ShieldCheck className="h-14 w-14 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Reserve Your Amarnath Helicopter Slot Today
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Slots are limited and sell out within hours of opening. Speak directly to our Yatra desk.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
            <Card className="p-6">
              <Phone className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold mb-1">Call Us</h3>
              <a href={`tel:${phone}`} className="text-primary hover:underline">{phoneDisplay}</a>
            </Card>
            <Card className="p-6">
              <Mail className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold mb-1">Email</h3>
              <a href={`mailto:${email}`} className="text-primary hover:underline break-all">{email}</a>
            </Card>
            <Card className="p-6">
              <MapPin className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold mb-1">Office</h3>
              <p className="text-sm text-muted-foreground">Chandiloora Gulmarg, Baramulla, J&K - 193101</p>
            </Card>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="golden" size="lg">
              <Link to="/booking">
                <Calendar className="mr-2 h-5 w-5" /> Book Online
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <a href={`https://wa.me/916006256798?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Legal FAQs */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Amarnath Yatra — Legal &amp; Frequently Asked Questions
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            Important legal, regulatory and safety information as per the Shri Amarnathji Shrine
            Board (SASB) and Government of Jammu &amp; Kashmir.
          </p>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 p-6 rounded-lg bg-muted/50 border text-sm text-muted-foreground">
            <p className="font-semibold text-foreground mb-2">Disclaimer:</p>
            <p>
              Traveloom Tour & Travels is an authorised travel facilitator and is not the official
              booking authority. All Amarnath Yatra helicopter tickets, RFID permits and registrations
              are governed by the Shri Amarnathji Shrine Board (SASB) under the J&K Shri Amarnathji
              Shrine Act, 2000. Fares, schedules and rules are subject to change as per SASB / DGCA /
              Government of J&K notifications. Pilgrims are advised to verify final details on{" "}
              <a href="https://jksasb.nic.in" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                jksasb.nic.in
              </a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AmarnathYatra;
