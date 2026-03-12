import { Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import skGallery1 from "@/assets/sk-gallery-1.png";
import skGallery2 from "@/assets/sk-gallery-2.png";
import skGallery3 from "@/assets/sk-gallery-3.png";
import skGallery4 from "@/assets/sk-gallery-4.png";
import skGallery5 from "@/assets/sk-gallery-5.png";
import skHero1 from "@/assets/sk-hero-1.png";

const instagramPosts = [
  { id: 1, image: skGallery1, likes: 234, caption: "Hyundai Creta looking fresh after detailing 🔥" },
  { id: 2, image: skGallery2, likes: 189, caption: "Land Rover Defender at our studio ✨" },
  { id: 3, image: skGallery3, likes: 312, caption: "Mahindra Thar ready for PPF protection 🚗" },
  { id: 4, image: skGallery4, likes: 156, caption: "Royal Enfield Interceptor detailing 💎" },
  { id: 5, image: skGallery5, likes: 278, caption: "Stunning red beauty ready for delivery ⭐" },
  { id: 6, image: skHero1, likes: 421, caption: "Premium car care experience 🏆" },
];

const InstagramFeed = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="h-8 w-8 text-primary" />
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">
              Follow Our Journey
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-primary">@</span>SK_CARZ._
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Follow us on Instagram for daily car transformations, behind-the-scenes content, and exclusive offers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, index) => (
            <a
              key={post.id}
              href="https://www.instagram.com/sk_carz._"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-3">
                <div className="flex items-center gap-2 text-white text-sm mb-1">
                  <span>❤️ {post.likes}</span>
                </div>
                <p className="text-white text-xs line-clamp-2">{post.caption}</p>
              </div>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="h-4 w-4 text-white" />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="https://www.instagram.com/sk_carz._" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="group">
              <Instagram className="h-5 w-5 mr-2 group-hover:text-primary transition-colors" />
              Follow Us on Instagram
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
