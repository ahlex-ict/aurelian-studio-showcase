import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryImage from "@/components/GalleryImage";
import { galleryImages } from "@/data/portfolio";

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Title Section */}
      <section className="pt-32 pb-12 section-padding">
        <div className="flex items-center gap-4">
          <span className="logo-mark text-6xl">//</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase">
            Gallery
          </h1>
        </div>
        <p className="text-muted-foreground mt-4 max-w-2xl">
          Browse and download high-resolution images from our collection. 
          Click any image to view in full resolution.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <GalleryImage
              key={index}
              src={image.src}
              alt={image.alt}
              className="aspect-square"
            />
          ))}
          {/* Duplicate for more content */}
          {galleryImages.map((image, index) => (
            <GalleryImage
              key={`dup-${index}`}
              src={image.src}
              alt={image.alt}
              className="aspect-square"
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
