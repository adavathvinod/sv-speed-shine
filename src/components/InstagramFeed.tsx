import { Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";
import hero1 from "@/assets/hero-1.jpg";

const instagramPosts = [
  {
    id: 1,
    image: gallery1,
    likes: 234,
    caption: "PPF installation on this stunning BMW 🔥",
  },
  {
    id: 2,
    image: gallery2,
    likes: 189,
    caption: "Ceramic coating transformation ✨",
  },
  {
    id: 3,
    image: gallery3,
    likes: 312,
    caption: "Fresh graphene coating on Audi Q7 🚗",
  },
  {
    id: 4,
    image: gallery4,
    likes: 156,
    caption: "Interior detailing perfection 💎",
  },
  {
    id: 5,
    image: gallery5,
    likes: 278,
    caption: "Another happy customer! ⭐",
  },
  {
    id: 6,
    image: hero1,
    likes: 421,
    caption: "Premium car spa experience 🏆",
  },
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
            <span className="text-primary">@</span>SVCARZ_SPA
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Follow us on Instagram for daily car transformations, behind-the-scenes content, and exclusive offers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, index) => (
            <a
              key={post.id}
              href="https://instagram.com"
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
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
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