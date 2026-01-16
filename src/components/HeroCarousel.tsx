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

  /**
   * Automatic carousel rotation
   * Changes slide every 5 seconds
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
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
    <section className="relative h-screen min-h-[600px] flex flex-col overflow-hidden">
      {/* Logo and Brand Title - Positioned above carousel */}
      <div className="relative z-20 pt-24 pb-8 section-padding text-center">
        {/* Main logo - larger sizing */}
        <div className="mb-4 animate-fade-in flex justify-center">
          <img 
            src={logoFull} 
            alt="Aurelian Studios" 
            className="h-28 md:h-40 lg:h-52 w-auto"
          />
        </div>
        
        {/* Brand tagline */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 animate-fade-in-up animation-delay-100">
          <span className="hero-subtitle">Automotive</span>
          <span className="hero-subtitle">Photography</span>
          <span className="hero-subtitle text-primary">&</span>
          <span className="hero-subtitle">Retouching</span>
        </div>
      </div>

      {/* Carousel Images Container */}
      <div className="relative flex-1 overflow-hidden">
        {/* Image slides with crossfade transition */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentIndex 
                ? "opacity-100" 
                : "opacity-0"
            }`}
          >
            {/* Static Image - no parallax */}
            <img
              src={image}
              alt={`Portfolio work ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Left/Right Slider Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 
                     w-12 h-12 md:w-16 md:h-16 flex items-center justify-center
                     bg-background/30 hover:bg-background/60 backdrop-blur-sm
                     border border-primary/30 hover:border-primary
                     text-foreground hover:text-primary
                     transition-all duration-300 rounded-sm"
          aria-label="Previous slide"
        >
          <svg 
            className="w-6 h-6 md:w-8 md:h-8" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 
                     w-12 h-12 md:w-16 md:h-16 flex items-center justify-center
                     bg-background/30 hover:bg-background/60 backdrop-blur-sm
                     border border-primary/30 hover:border-primary
                     text-foreground hover:text-primary
                     transition-all duration-300 rounded-sm"
          aria-label="Next slide"
        >
          <svg 
            className="w-6 h-6 md:w-8 md:h-8" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Counter Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 
                        bg-background/50 backdrop-blur-sm px-4 py-2 rounded-sm
                        border border-primary/20">
          <span className="font-display text-sm tracking-widest text-foreground">
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        {/* Subtle vignette overlay effect */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            boxShadow: 'inset 0 0 100px 30px rgba(0,0,0,0.5)'
          }}
        />
      </div>
    </section>
  );
};

export default HeroCarousel;
