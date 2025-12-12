import { Shield, Sparkles, Droplets, Car, Paintbrush, Wrench, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const services = [
  {
    icon: <Shield className="h-12 w-12" />,
    title: "Paint Protection Film (PPF)",
    description: "Ultimate protection against stone chips, scratches, and road debris. Our premium PPF maintains your car's showroom finish.",
    features: ["Self-healing technology", "10-year warranty", "UV protection", "Invisible finish"],
    price: "Starting ₹25,000",
  },
  {
    icon: <Sparkles className="h-12 w-12" />,
    title: "Ceramic Coating",
    description: "Long-lasting hydrophobic coating that provides deep gloss and protection against environmental contaminants.",
    features: ["5-year protection", "Hydrophobic effect", "Enhanced gloss", "Easy maintenance"],
    price: "Starting ₹15,000",
  },
  {
    icon: <Droplets className="h-12 w-12" />,
    title: "Graphene Coating",
    description: "Next-generation nano coating with superior durability and heat dissipation properties.",
    features: ["7-year protection", "Heat resistant", "Anti-static", "Ultra-hydrophobic"],
    price: "Starting ₹20,000",
  },
  {
    icon: <Car className="h-12 w-12" />,
    title: "Exterior Detailing",
    description: "Complete exterior restoration including paint correction, polishing, and protection.",
    features: ["Paint correction", "Swirl removal", "Clay bar treatment", "Wax protection"],
    price: "Starting ₹3,000",
  },
  {
    icon: <Paintbrush className="h-12 w-12" />,
    title: "Interior Detailing",
    description: "Deep cleaning and conditioning of all interior surfaces including leather, fabric, and plastics.",
    features: ["Steam cleaning", "Leather conditioning", "Odor removal", "Sanitization"],
    price: "Starting ₹2,500",
  },
  {
    icon: <Wrench className="h-12 w-12" />,
    title: "Car Decor & Accessories",
    description: "Custom wraps, alloy wheels, accessories, and wheel alignment services.",
    features: ["Custom wraps", "Alloy wheels", "Accessories", "Wheel alignment"],
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
    features: ["Full exterior detail", "Interior deep clean", "Paint correction (1 stage)", "Ceramic spray coating", "Engine bay cleaning"],
    popular: true,
  },
  {
    name: "Ultimate",
    price: "₹24,999",
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
            Professional detailing services for luxury and high-end vehicles. We use only the finest products and techniques.
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

      {/* Packages */}
      <section className="py-20 bg-card">
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
            <a href="tel:+918019130798">
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
