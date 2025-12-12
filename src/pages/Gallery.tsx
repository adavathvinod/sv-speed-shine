import { useState } from "react";
import Layout from "@/components/layout/Layout";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const galleryImages = [
  { src: gallery1, category: "Interior", title: "Hexagon LED Detailing Bay" },
  { src: gallery2, category: "Exterior", title: "Mini Cooper S - PPF Application" },
  { src: gallery3, category: "Detailing", title: "SUV Under Inspection Lights" },
  { src: gallery4, category: "Exterior", title: "Mahindra Thar Fleet" },
  { src: gallery5, category: "Exterior", title: "Premium Cars at SV CARZ" },
  { src: hero1, category: "Detailing", title: "Lamborghini Urus Detailing" },
  { src: hero2, category: "Ceramic", title: "BMW M4 Ceramic Coating" },
  { src: hero3, category: "PPF", title: "Audi RS7 PPF Installation" },
];

const categories = ["All", "Exterior", "Interior", "Detailing", "Ceramic", "PPF"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-semibold tracking-widest">OUR WORK</span>
          <h1 className="font-display text-5xl md:text-6xl mt-2 mb-4">GALLERY</h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Explore our portfolio of premium car detailing work on luxury vehicles
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold tracking-wider transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-primary/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image.src)}
                className="relative overflow-hidden rounded-lg aspect-[4/3] group cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-primary text-sm tracking-wider">{image.category}</span>
                    <h3 className="font-display text-xl tracking-wider">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <img
              src={selectedImage}
              alt="Gallery"
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-foreground hover:text-primary font-display text-xl tracking-wider"
            >
              CLOSE ✕
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
