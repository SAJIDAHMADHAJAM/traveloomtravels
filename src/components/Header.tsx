import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Packages", path: "/packages" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Traveloom Tour and Travels" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+916006256798" className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              +91 6006256798
            </a>
            <a href="mailto:traveloomsales@gmail.com" className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              Email Us
            </a>
            <Button asChild variant="golden" size="lg">
              <Link to="/booking">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium transition-colors py-2 ${
                    location.pathname === link.path ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a href="tel:+916006256798" className="flex items-center gap-2 text-base font-medium text-foreground/80 py-2">
                <Phone className="h-4 w-4" />
                +91 6006256798
              </a>
              <a href="mailto:traveloomsales@gmail.com" className="flex items-center gap-2 text-base font-medium text-foreground/80 py-2">
                <Mail className="h-4 w-4" />
                traveloomsales@gmail.com
              </a>
              <Button asChild variant="golden" className="mt-2">
                <Link to="/booking" onClick={() => setIsMenuOpen(false)}>Book Now</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
