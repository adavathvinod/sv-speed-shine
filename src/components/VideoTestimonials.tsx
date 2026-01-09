import { Play, Star, Quote } from "lucide-react";

const YOUTUBE_URL = "https://youtube.com/shorts/TeOavs83xJc?si=4U_iVAaidtUpIIjG";

interface Testimonial {
  id: number;
  name: string;
  car: string;
  service: string;
  rating: number;
  quote: string;
  videoThumbnail: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    car: "BMW 5 Series",
    service: "Full Ceramic Coating",
    rating: 5,
    quote: "Absolutely stunning results! My BMW looks better than showroom condition. The ceramic coating is incredible.",
    videoThumbnail: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Priya Sharma",
    car: "Audi Q7",
    service: "PPF + Detailing",
    rating: 5,
    quote: "Best investment for my Audi! The PPF is invisible and the team's attention to detail is unmatched.",
    videoThumbnail: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Mohammed Syed",
    car: "Mercedes GLE",
    service: "Graphene Coating",
    rating: 5,
    quote: "The graphene coating has transformed my Mercedes. Water beads off like magic. Highly recommend SV CARZ!",
    videoThumbnail: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop",
  }
];

const VideoTestimonials = () => {
  const handleVideoClick = () => {
    window.open(YOUTUBE_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Customer Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-4">
            Video <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Watch real transformations and hear directly from our satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              {/* Video Thumbnail */}
              <div 
                className="relative aspect-video cursor-pointer overflow-hidden"
                onClick={handleVideoClick}
              >
                <img 
                  src={testimonial.videoThumbnail}
                  alt={`${testimonial.name}'s ${testimonial.car}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                  <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {testimonial.service}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                  <p className="text-muted-foreground text-sm pl-4 italic">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.car}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default VideoTestimonials;