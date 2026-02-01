/**
 * HeroCarousel Component
 * 
 * Full-page hero section with automatic image carousel.
 * Features:
 * - Full viewport height display
 * - Automatic rotation between portfolio images (5 second intervals)
 * - Slider navigation instead of dot indicators
 * - Brand logo and title prominently displayed
 * - Smooth crossfade transitions between images
 * 
 * @component
 */

import { useEffect, useState } from "react";
import logoFull from "@/assets/logo-full.png";
import { portfolioProjects } from "@/data/portfolio";

const HeroCarousel = () => {
  // Track current active slide index
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Extract images from portfolio projects for carousel
  const images = portfolioProjects.map(p => p.image);

  if (images.length === 0) {
    return (
      <section className="w-full h-screen min-h-screen bg-black" aria-hidden>
        {/* No images available yet */}
      </section>
    );
  }

  /**
   * Automatic carousel rotation
   * Changes slide every 5 seconds
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.max(1, images.length));
    }, 5000);
    
    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [images.length]);

  /**
   * Navigate to previous slide
   */
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  /**
   * Navigate to next slide
   */
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="relative w-full h-screen min-h-screen overflow-hidden">
      {/* Background image layer - absolute so it fills the viewport */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-0" : "opacity-0 z-0"
            }`}
          >
            <img
              src={image}
              alt={`Portfolio work ${index + 1}`}
              loading="eager"
              decoding="async"
              className="w-full h-full object-contain object-center bg-black"
            />
          </div>
        ))}

        {/* Vignette overlay for cinematic look */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ boxShadow: "inset 0 0 120px 30px rgba(0,0,0,0.6)" }}
        />
      </div>

      {/* No overlay text on hero — images only (navigation arrows remain) */}

      {/* Left/Right Slider Navigation Arrows (overlayed) */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 
                   w-12 h-12 md:w-16 md:h-16 flex items-center justify-center
                   bg-background/30 hover:bg-background/60 backdrop-blur-sm
                   border border-primary/30 hover:border-primary
                   text-foreground hover:text-primary
                   transition-all duration-300 rounded-sm"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 
                   w-12 h-12 md:w-16 md:h-16 flex items-center justify-center
                   bg-background/30 hover:bg-background/60 backdrop-blur-sm
                   border border-primary/30 hover:border-primary
                   text-foreground hover:text-primary
                   transition-all duration-300 rounded-sm"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
};

export default HeroCarousel;
