import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Star, Shield, Sparkles, Droplets, Award, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import VideoTestimonials from "@/components/VideoTestimonials";
import InstagramFeed from "@/components/InstagramFeed";
import skHero1 from "@/assets/sk-hero-1.png";
import skGallery1 from "@/assets/sk-gallery-1.png";
import skGallery2 from "@/assets/sk-gallery-2.png";
import skGallery3 from "@/assets/sk-gallery-3.png";
import skGallery4 from "@/assets/sk-gallery-4.png";
import skGallery5 from "@/assets/sk-gallery-5.png";

const heroSlides = [
  {
    image: skHero1,
    title: "PREMIUM CAR DETAILING",
    subtitle: "Expert PPF, Ceramic Coating & Customization",
  },
  {
    image: skGallery2,
    title: "DETAILING STUDIO",
    subtitle: "Professional Care for Every Vehicle",
  },
  {
    image: skGallery3,
    title: "PROTECT YOUR INVESTMENT",
    subtitle: "Paint Protection Film & Ceramic Coating",
  },
];

const services = [
  {
    icon: <Shield className="h-10 w-10" />,
    title: "PPF",
    description: "Paint Protection Film for ultimate scratch resistance",
  },
  {
    icon: <Sparkles className="h-10 w-10" />,
    title: "Ceramic Coating",
    description: "Long-lasting hydrophobic protection",
  },
  {
    icon: <Droplets className="h-10 w-10" />,
    title: "Interior Spa",
    description: "Deep interior cleaning & conditioning",
  },
  {
    icon: <Award className="h-10 w-10" />,
    title: "Custom Seat Covers",
    description: "Premium custom-fit seat covers",
  },
];

const reviews = [
  {
    name: "Google Reviewer",
    text: "Very professional work and the service is awesome at affordable price.",
    rating: 5,
  },
  {
    name: "Satisfied Customer",
    text: "Good communication and great skills on bike and car's.",
    rating: 5,
  },
  {
    name: "Happy Client",
    text: "Excellent service and quality work.",
    rating: 5,
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 gradient-hero" />
          </div>
        ))}

        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container mx-auto px-4">
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <span className="inline-block px-6 py-2 border border-primary text-primary text-sm tracking-widest mb-6">
                HYDERABAD'S PREMIUM DETAILING STUDIO
              </span>
            </div>
            <h1
              className="font-display text-5xl md:text-7xl lg:text-8xl tracking-widest mb-4 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              {heroSlides[currentSlide].title}
            </h1>
            <p
              className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              {heroSlides[currentSlide].subtitle}
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <Link to="/booking">
                <Button variant="hero" size="xl">
                  Book Appointment <ChevronRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="heroOutline" size="xl">
                  View Services
                </Button>
              </Link>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-12">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-primary w-8"
                      : "bg-foreground/30 hover:bg-foreground/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Address Section */}
      <section className="py-4 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <a
            href="https://maps.google.com/?q=SK+Carz+Detaling+Studio+Hastinapuram+Hyderabad"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 text-muted-foreground hover:text-primary transition-colors"
          >
            <MapPin className="h-5 w-5 text-primary" />
            <span>215, ZP Rd, Valmiki Ambedkar Awas Yojana, Sriramana Colony, Hastinapuram, Hyderabad, Telangana 500079</span>
          </a>
        </div>
      </section>

      {/* Rating Section */}
      <section className="py-8 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-6 w-6 fill-primary-foreground text-primary-foreground"
                  />
                ))}
              </div>
              <span className="font-display text-3xl text-primary-foreground">5.0</span>
              <span className="text-primary-foreground/80">(Google Reviews)</span>
            </div>
            <div className="text-primary-foreground font-display text-xl tracking-wider">
              GOOGLE VERIFIED REVIEWS
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-widest">WHAT WE OFFER</span>
            <h2 className="font-display text-4xl md:text-5xl mt-2">OUR SERVICES</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-8 rounded-lg gradient-card border border-border hover:border-primary transition-all duration-300 shadow-card hover:shadow-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-display text-2xl tracking-wider mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services <ChevronRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-widest">OUR WORK</span>
            <h2 className="font-display text-4xl md:text-5xl mt-2">GALLERY</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[skGallery1, skGallery3, skGallery5].map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg aspect-[4/3] group"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/gallery">
              <Button variant="outline" size="lg">
                View Full Gallery <ChevronRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-widest">TESTIMONIALS</span>
            <h2 className="font-display text-4xl md:text-5xl mt-2">WHAT CUSTOMERS SAY</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="p-8 rounded-lg gradient-card border border-border"
              >
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= review.rating
                          ? "fill-primary text-primary"
                          : "text-muted"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{review.text}"</p>
                <p className="font-display text-lg tracking-wider">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <VideoTestimonials />

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-4">
            READY TO TRANSFORM YOUR CAR?
          </h2>
          <p className="text-primary-foreground/80 text-xl mb-8">
            Book your appointment today and experience the SK CARZ difference
          </p>
          <Link to="/booking">
            <Button
              variant="secondary"
              size="xl"
              className="bg-background text-foreground hover:bg-background/90"
            >
              Book Appointment Now <ChevronRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Instagram Feed */}
      <InstagramFeed />

      {/* Stats */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Cars Detailed" },
              { number: "5.0★", label: "Google Rating" },
              { number: "3+", label: "Years Experience" },
              { number: "100%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-4xl md:text-5xl text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
