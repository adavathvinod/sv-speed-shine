import { Circle, Wrench, Wind, Gauge, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import tyresHero from "@/assets/tyres-hero.jpg";
import wheelBalancing from "@/assets/wheel-balancing.jpg";
import tyreBrandsImage from "@/assets/tyre-brands.jpg";

const services = [
  {
    icon: <Gauge className="h-12 w-12" />,
    title: "Wheel Alignment",
    description: "Precision computerized wheel alignment to ensure optimal tire wear and vehicle handling.",
    features: ["Computerized alignment", "Camber adjustment", "Toe adjustment", "Caster correction"],
  },
  {
    icon: <Circle className="h-12 w-12" />,
    title: "Wheel Balancing",
    description: "High-precision wheel balancing to eliminate vibrations and ensure smooth driving.",
    features: ["Dynamic balancing", "Static balancing", "Weight optimization", "Vibration elimination"],
  },
  {
    icon: <Wrench className="h-12 w-12" />,
    title: "Tyre Puncture Repair",
    description: "Professional puncture repair using industry-standard methods for long-lasting results.",
    features: ["Tubeless repair", "Tube repair", "Sidewall inspection", "Pressure check"],
  },
  {
    icon: <Wind className="h-12 w-12" />,
    title: "Nitrogen Filling",
    description: "Nitrogen inflation for better tire pressure retention and improved fuel efficiency.",
    features: ["99% pure nitrogen", "Better pressure retention", "Reduced oxidation", "Improved mileage"],
  },
];

const tyreBrands = [
  { name: "Bridgestone", country: "Japan" },
  { name: "Yokohama", country: "Japan" },
  { name: "Michelin", country: "France" },
  { name: "Goodyear", country: "USA" },
  { name: "MRF", country: "India" },
  { name: "Apollo", country: "India" },
  { name: "CEAT", country: "India" },
  { name: "JK Tyre", country: "India" },
];

const Tyres = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 bg-card overflow-hidden">
        <div className="absolute inset-0">
          <img src={tyresHero} alt="Wheel alignment service" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-primary font-semibold tracking-widest">TYRE SERVICES</span>
          <h1 className="font-display text-5xl md:text-6xl mt-2 mb-4">WHEEL & TYRE CARE</h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Professional wheel alignment, balancing, and tyre services for optimal performance and safety.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="text-primary font-semibold tracking-widest">OUR SERVICES</span>
              <h2 className="font-display text-4xl md:text-5xl mt-2 mb-4">WHAT WE OFFER</h2>
              <p className="text-muted-foreground">
                From precision wheel alignment to professional tyre care, we provide comprehensive services to keep your vehicle running smoothly and safely.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-card">
              <img src={wheelBalancing} alt="Wheel balancing service" className="w-full h-80 object-cover" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 rounded-lg gradient-card border border-border hover:border-primary transition-all duration-300 shadow-card"
              >
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl tracking-wider mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-sm">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tyre Brands */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="rounded-lg overflow-hidden shadow-card order-2 lg:order-1">
              <img src={tyreBrandsImage} alt="Premium tyre brands" className="w-full h-80 object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-primary font-semibold tracking-widest">PREMIUM BRANDS</span>
              <h2 className="font-display text-4xl md:text-5xl mt-2 mb-4">TYRES WE SERVICE</h2>
              <p className="text-muted-foreground">
                We work with all major tyre brands to provide you the best service and genuine parts.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {tyreBrands.map((brand) => (
              <div
                key={brand.name}
                className="p-6 rounded-lg bg-secondary border border-border hover:border-primary transition-all duration-300 text-center group"
              >
                <Circle className="h-12 w-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-xl tracking-wider mb-1">{brand.name}</h3>
                <p className="text-sm text-muted-foreground">{brand.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-4">
            NEED TYRE SERVICE?
          </h2>
          <p className="text-primary-foreground/80 text-xl mb-8">
            Contact us for professional wheel and tyre services
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

export default Tyres;
