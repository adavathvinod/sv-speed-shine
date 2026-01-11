import { Award, Users, Wrench, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import gallery1 from "@/assets/gallery-1.jpeg";

const values = [
  {
    icon: <Award className="h-10 w-10" />,
    title: "Excellence",
    description: "We strive for perfection in every detail, ensuring your vehicle receives the finest care possible.",
  },
  {
    icon: <Wrench className="h-10 w-10" />,
    title: "Expertise",
    description: "Our team has extensive knowledge on all types of vehicles, from daily drivers to exotic supercars.",
  },
  {
    icon: <Heart className="h-10 w-10" />,
    title: "Passion",
    description: "We're car enthusiasts at heart. Every vehicle is treated with the love and attention it deserves.",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Trust",
    description: "Over 500 satisfied customers trust us with their prized possessions. Your satisfaction is our priority.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-semibold tracking-widest">OUR STORY</span>
          <h1 className="font-display text-5xl md:text-6xl mt-2 mb-4">ABOUT SV CARZ SPA</h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Hyderabad's premier destination for luxury car detailing and protection
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-display font-bold tracking-widest text-lg">SHINE & SMILE</span>
              <h2 className="font-display text-4xl md:text-5xl mt-2 mb-6">WHY CHOOSE US</h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  At SV CARZ SPA, we believe every vehicle deserves showroom-quality care. Founded by car enthusiasts with a passion for perfection, we've built a reputation as Hyderabad's most trusted car detailing studio.
                </p>
                <p>
                  Our state-of-the-art facility features cutting-edge hexagonal LED lighting systems that reveal every imperfection, ensuring no detail is missed. We use only premium products from globally recognized brands.
                </p>
                <p>
                  Whether you drive a daily commuter or an exotic supercar, our team has <strong className="text-foreground">very good knowledge on any kind of vehicle</strong>. We treat every car as if it were our own.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div className="text-center">
                  <div className="font-display text-4xl text-primary">5+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-4xl text-primary">500+</div>
                  <div className="text-muted-foreground">Cars Detailed</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-4xl text-primary">4.7★</div>
                  <div className="text-muted-foreground">Google Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={gallery1}
                alt="SV CARZ SPA Interior"
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
            <h2 className="font-display text-4xl md:text-5xl mt-2">BRANDS WE WORK WITH</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground font-display text-2xl tracking-wider">
            {["Audi", "BMW", "Mercedes", "Lamborghini", "Land Rover", "Toyota", "Kia", "Volkswagen", "Skoda", "Mahindra", "Mini Cooper", "Porsche"].map((brand) => (
              <span key={brand} className="hover:text-primary transition-colors cursor-default">
                {brand}
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
            Visit SV CARZ SPA and see why we're Hyderabad's most trusted car detailing studio
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
