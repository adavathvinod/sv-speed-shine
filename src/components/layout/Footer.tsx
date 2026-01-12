import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/sv-carz-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="SV CARZ SPA - Shine & Smile" className="h-20 w-auto" />
            <p className="text-muted-foreground">
              Hyderabad's premier car detailing studio. We bring showroom shine to every vehicle.
            </p>
            <div className="flex items-center gap-2 text-primary">
              <span className="text-2xl font-display">★ 4.7</span>
              <span className="text-muted-foreground">(35 Reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-2xl tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Gallery", path: "/gallery" },
                { name: "Book Appointment", path: "/booking" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-2xl tracking-wider mb-6">Our Services</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>PPF (Paint Protection Film)</li>
              <li>Ceramic Coating</li>
              <li>Graphene Coating</li>
              <li>Interior Detailing</li>
              <li>Exterior Polish</li>
              <li>Car Decor & Wraps</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-2xl tracking-wider mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  Plot No: 1, Beside Raghavendra Tiffins and Navvena Hospital, Padmavathi Nagar, Hasthinapuram, Hyderabad
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+918019130798" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 80191 30798
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:svcarz98@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  svcarz98@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Mon - Sun: 9:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} SV CARZ SPA. All rights reserved. | Shine & Smile</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
