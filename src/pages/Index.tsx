/**
 * Index Page (Homepage)
 * 
 * Main landing page for Aurelian Studios featuring:
 * - Full-page hero carousel with automatic rotation
 * - About section with studio description
 * - Featured portfolio grid with scroll reveal animations
 * - Navigation filter buttons
 * 
 * @page
 */

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryImage from "@/components/GalleryImage";
import ScrollReveal from "@/components/ScrollReveal";
import logoFull from "@/assets/logo-full.png";
import { portfolioProjects } from "@/data/portfolio";

const Index = () => {
  // Display all portfolio projects
  const featuredProjects = portfolioProjects;
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      {/* Site Header with auto-hide behavior */}
      <Header />

      {/* Simple Black Landing Section */}
      <section className="w-full bg-black pt-20 pb-10 md:pt-24 md:pb-10">
        <div className="max-w-5xl mx-auto px-4 flex flex-col items-center justify-center">
          <img src={logoFull} alt="Aurelian Studios" className="h-[22vh] md:h-[32vh] lg:h-[42vh] w-auto" />
        </div>
      </section>

      {/* Full Gallery Section */}
      <section id="gallery" className="section-padding pb-24">
        {/* Flatten all images from all projects into single grid with folder info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredProjects.flatMap((project) =>
            project.images.map((image, imgIndex) => (
              <ScrollReveal key={`${project.id}-${imgIndex}`} delay={imgIndex * 50} animation="pop">
                <div
                  onClick={() => setFullscreenImage(image)}
                  className="cursor-pointer relative aspect-square overflow-hidden rounded-sm group"
                >
                  <GalleryImage
                    src={image}
                    alt={project.title}
                    title={project.title}
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
            ))
          )}
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

      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export default Index;
