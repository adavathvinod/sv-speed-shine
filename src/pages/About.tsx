import { Award, Users, Wrench, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import skHero1 from "@/assets/sk-hero-1.png";

const values = [
  {
    icon: <Award className="h-10 w-10" />,
    title: "Excellence",
    description: "We strive for perfection in every detail, ensuring your vehicle receives the finest care possible.",
  },
  {
    icon: <Wrench className="h-10 w-10" />,
    title: "Expertise",
    description: "Our team has extensive knowledge on all types of vehicles, from daily drivers to luxury cars and bikes.",
  },
  {
    icon: <Heart className="h-10 w-10" />,
    title: "Passion",
    description: "We're car enthusiasts at heart. Every vehicle is treated with the love and attention it deserves.",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Trust",
    description: "Our satisfied customers trust us with their prized possessions. Your satisfaction is our priority.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-semibold tracking-widest">OUR STORY</span>
          <h1 className="font-display text-5xl md:text-6xl mt-2 mb-4">ABOUT SK CARZ</h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Hyderabad's premium destination for car detailing and customization
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-display font-bold tracking-widest text-lg">DETAILING STUDIO</span>
              <h2 className="font-display text-4xl md:text-5xl mt-2 mb-6">WHY CHOOSE US</h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  SK CARZ Detailing Studio offers premium car detailing and customization services designed to enhance both the look and comfort of your vehicle.
                </p>
                <p>
                  Our services include custom-fit seat covers, durable car matting, professional car wash, interior spa, ceramic coating, and paint protection film (PPF). We also provide mud flaps and legal black tinting for added protection and style.
                </p>
                <p>
                  With <strong className="text-foreground">quality materials, skilled workmanship, and a customer-first approach</strong>, SK CARZ is your trusted partner for complete car care and interior upgrades.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div className="text-center">
                  <div className="font-display text-4xl text-primary">3+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-4xl text-primary">500+</div>
                  <div className="text-muted-foreground">Cars Detailed</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-4xl text-primary">5.0★</div>
                  <div className="text-muted-foreground">Google Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={skHero1}
                alt="SK CARZ Detailing Studio Interior"
                className="rounded-lg shadow-card w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-lg shadow-glow">
                <div className="font-display text-3xl text-primary-foreground">100%</div>
                <div className="text-primary-foreground/80">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-widest">OUR VALUES</span>
            <h2 className="font-display text-4xl md:text-5xl mt-2">WHAT DRIVES US</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-8 rounded-lg gradient-card border border-border hover:border-primary transition-all duration-300 text-center"
              >
                <div className="text-primary mb-4 flex justify-center">{value.icon}</div>
                <h3 className="font-display text-2xl tracking-wider mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services We Handle */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-widest">EXPERTISE</span>
            <h2 className="font-display text-4xl md:text-5xl mt-2">OUR SERVICES</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground font-display text-2xl tracking-wider">
            {["Detailing", "PPF", "Ceramic Coating", "Teflon Coating", "Custom Wrapping", "Window Tinting", "Interior Spa", "Exterior Cleaning", "Denting & Painting", "Audio Upgrade", "Accessories", "Seat Covers", "Car Matting", "Mud Flaps"].map((service) => (
              <span key={service} className="hover:text-primary transition-colors cursor-default">
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-4">
            EXPERIENCE THE DIFFERENCE
          </h2>
          <p className="text-primary-foreground/80 text-xl mb-8">
            Visit SK CARZ Detailing Studio and see why we're Hyderabad's most trusted car detailing studio
          </p>
          <Link to="/booking">
            <Button variant="secondary" size="xl" className="bg-background text-foreground hover:bg-background/90">
              Book Your Appointment
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
