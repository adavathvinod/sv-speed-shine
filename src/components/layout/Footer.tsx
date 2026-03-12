import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/sk-carz-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="SK CARZ Detailing Studio" className="h-20 w-auto" />
            <p className="text-muted-foreground">
              Hyderabad's premium car detailing and customization studio. Quality materials, skilled workmanship, and a customer-first approach.
            </p>
            <div className="flex items-center gap-2 text-primary">
              <span className="text-2xl font-display">★ 5.0</span>
              <span className="text-muted-foreground">(Google Reviews)</span>
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
              <li>Custom Seat Covers</li>
              <li>Interior Spa</li>
              <li>Window Tinting</li>
              <li>Car Matting & Accessories</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-2xl tracking-wider mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  215, ZP Rd, Valmiki Ambedkar Awas Yojana, Sriramana Colony, Hastinapuram, Hyderabad, Telangana 500079
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+917780762489" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 77807 62489
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:skcarz@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  skcarz@gmail.com
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
          <p>© 2026 SK CARZ Detailing Studio. All rights reserved. | <a href="http://wimira.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">wimira.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
