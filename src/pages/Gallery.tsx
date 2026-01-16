import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryImage from "@/components/GalleryImage";
import ScrollReveal from "@/components/ScrollReveal";
import { galleryImages } from "@/data/portfolio";
import logoIcon from "@/assets/logo-icon.png";

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Title Section */}
      <section className="pt-32 pb-12 section-padding">
        <ScrollReveal animation="slide-up">
          <div className="flex items-center gap-4">
            <img src={logoIcon} alt="Aurelian Studios" className="h-16 w-auto" />
            <h1 className="font-display text-5xl md:text-7xl font-bold uppercase title-animated">
              Gallery
            </h1>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Browse and download high-resolution images from our collection. 
            Click any image to view in full resolution.
          </p>
        </ScrollReveal>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <ScrollReveal key={index} delay={index * 80} animation="pop">
              <GalleryImage
                src={image.src}
                alt={image.alt}
                title={image.alt}
                className="aspect-square"
              />
            </ScrollReveal>
          ))}
          {/* Duplicate for more content */}
          {galleryImages.map((image, index) => (
            <ScrollReveal key={`dup-${index}`} delay={(index + galleryImages.length) * 80} animation="pop">
              <GalleryImage
                src={image.src}
                alt={image.alt}
                title={image.alt}
                className="aspect-square"
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
