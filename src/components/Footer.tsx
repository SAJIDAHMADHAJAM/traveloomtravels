import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-sky-dark text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={logo} alt="Traveloom" className="h-12 w-auto brightness-0 invert" />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted partner for unforgettable Kashmir experiences. We specialize in customized tour packages with local expertise and best prices.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors" aria-label="Youtube">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Tour Packages", path: "/packages" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
                { name: "Book Now", path: "/booking" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Destinations</h4>
            <ul className="space-y-3">
              {["Srinagar", "Gulmarg", "Pahalgam", "Sonamarg", "Doodhpathri", "Yousmarg"].map((dest) => (
                <li key={dest}>
                  <Link to="/packages" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {dest}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-golden" />
                <span className="text-sm text-primary-foreground/80">
                  Chandiloora Gulmarg, Baramulla,<br />Jammu & Kashmir, India - 193402
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-golden" />
                <a href="tel:+919876543210" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  +91 6006256798
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-golden" />
                <a href="mailto:info@traveloom.com" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  traveloomsales@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Traveloom Tour & Travels. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
