import { Shield, Sparkles, Droplets, Car, Paintbrush, Wrench, Check, Sofa, Palette, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PricingCalculator from "@/components/PricingCalculator";

const services = [
  {
    icon: <Shield className="h-12 w-12" />,
    title: "Paint Protection Film (PPF)",
    description: "Ultimate protection against stone chips, scratches, and road debris. Our premium PPF maintains your car's showroom finish.",
    features: ["Upto 10 years warranty", "200mm thickness", "Hydrophobic", "Easy removable"],
    price: "Starting ₹60,000",
  },
  {
    icon: <Sparkles className="h-12 w-12" />,
    title: "Ceramic Coating",
    description: "Long-lasting hydrophobic coating that provides deep gloss and protection against environmental contaminants.",
    features: ["3 years warranty", "Hydrophobic effect", "Enhanced gloss", "Easy maintenance"],
    price: "Starting ₹10,000",
  },
  {
    icon: <Sofa className="h-12 w-12" />,
    title: "Custom Seat Covers",
    description: "Premium custom-fit seat covers designed to match your vehicle's interior and provide lasting comfort.",
    features: ["Custom fit design", "Premium materials", "Multiple colors", "Durable finish"],
    price: "Contact for pricing",
  },
  {
    icon: <Car className="h-12 w-12" />,
    title: "Interior Spa & Cleaning",
    description: "Complete interior deep cleaning, sanitization, and conditioning for a fresh cabin experience.",
    features: ["Deep cleaning", "AC foam cleaning", "Dashboard polish", "Sanitization"],
    price: "Starting ₹2,500",
  },
  {
    icon: <Sun className="h-12 w-12" />,
    title: "Window Tinting",
    description: "Legal black tinting for UV protection, heat reduction, and enhanced privacy and style.",
    features: ["Legal tint levels", "UV protection", "Heat reduction", "Enhanced privacy"],
    price: "Starting ₹3,000",
  },
  {
    icon: <Palette className="h-12 w-12" />,
    title: "Custom Wrapping & Decor",
    description: "Custom vehicle wraps, car matting, mud flaps, accessories, and denting & painting services.",
    features: ["Custom wraps", "Car matting", "Mud flaps", "Denting & painting"],
    price: "Contact for pricing",
  },
];

const packages = [
  {
    name: "Essential",
    price: "₹4,999",
    features: ["Exterior wash", "Interior vacuum", "Dashboard polish", "Tire dressing"],
    popular: false,
  },
  {
    name: "Premium",
    price: "₹9,999",
    features: ["Full exterior detail", "Interior deep clean", "Paint correction (2 stage)", "Ceramic spray coating", "Engine bay cleaning"],
    popular: true,
  },
  {
    name: "Ultimate",
    price: "₹34,999",
    features: ["Complete PPF package", "Ceramic coating", "Full interior restoration", "Headlight restoration", "1-year maintenance"],
    popular: false,
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-semibold tracking-widest">PREMIUM CAR CARE</span>
          <h1 className="font-display text-5xl md:text-6xl mt-2 mb-4">OUR SERVICES</h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Professional detailing and customization services. We use only the finest products and techniques.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 rounded-lg gradient-card border border-border hover:border-primary transition-all duration-300 shadow-card"
              >
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-display text-2xl tracking-wider mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="font-display text-xl text-primary">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold tracking-widest">INSTANT QUOTE</span>
            <h2 className="font-display text-4xl md:text-5xl mt-2">GET YOUR ESTIMATE</h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <PricingCalculator />
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-widest">VALUE PACKAGES</span>
            <h2 className="font-display text-4xl md:text-5xl mt-2">DETAILING PACKAGES</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative p-8 rounded-lg border ${
                  pkg.popular
                    ? "border-primary shadow-glow bg-secondary"
                    : "border-border gradient-card"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="font-display text-3xl tracking-wider text-center mb-2">
                  {pkg.name}
                </h3>
                <div className="font-display text-4xl text-primary text-center mb-6">
                  {pkg.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/booking">
                  <Button
                    variant={pkg.popular ? "hero" : "outline"}
                    className="w-full"
                  >
                    Book Now
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-4">
            NEED A CUSTOM QUOTE?
          </h2>
          <p className="text-primary-foreground/80 text-xl mb-8">
            Contact us for personalized packages tailored to your vehicle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button variant="secondary" size="xl" className="bg-background text-foreground hover:bg-background/90">
                Book Appointment
              </Button>
            </Link>
            <a href="tel:+917780762489">
              <Button variant="heroOutline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
