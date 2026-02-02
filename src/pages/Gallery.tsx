import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryImage from "@/components/GalleryImage";
import ScrollReveal from "@/components/ScrollReveal";
import { galleryImages } from "@/data/portfolio";
import logoIcon from "@/assets/logo-icon.png";

const Gallery = () => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  return (
    <div className="min-h-screen">
      <Header />

      {/* Title Section */}
      <section className="pt-32 pb-12 section-padding">
        <ScrollReveal animation="pop">
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
              <div
                onClick={() => setFullscreenImage(image.src)}
                className="cursor-pointer relative aspect-square overflow-hidden rounded-sm group"
              >
                <GalleryImage
                  src={image.src}
                  alt={image.alt}
                  title={image.alt}
                  className="aspect-square group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setFullscreenImage(null)}
        >
          <button
            onClick={() => setFullscreenImage(null)}
            className="absolute top-8 right-8 text-white hover:text-primary transition-colors z-51"
            aria-label="Close fullscreen"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={fullscreenImage}
            alt="Fullscreen view"
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
