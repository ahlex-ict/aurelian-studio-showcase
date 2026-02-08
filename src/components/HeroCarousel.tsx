/**
 * HeroCarousel Component
 * 
 * Stacked center carousel with peek effect.
 * Features:
 * - Fixed card size centered on screen
 * - Visible preview of next/prev cards on sides
 * - Smooth transitions between slides
 * - Arrow navigation
 * 
 * @component
 */

import { useEffect, useState } from "react";
import { portfolioProjects } from "@/data/portfolio";

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Extract all images from portfolio projects for carousel
  const images = portfolioProjects.flatMap(p => p.images);
  /**
   * Automatic carousel rotation
   * Changes slide every 5 seconds
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.max(1, images.length));
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) {
    return (
      <section className="w-full py-16 bg-black" aria-hidden>
        {/* No images available */}
      </section>
    );
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // Get prev, current, and next image indices
  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  return (
    <section className="relative w-full py-16 md:py-24 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Stacked Center Carousel */}
        <div className="relative h-80 md:h-96 flex items-center justify-center perspective">
          {/* Previous card (left peek) */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-20 h-20 md:w-28 md:h-28 opacity-40 scale-75">
            <img
              src={images[prevIndex]}
              alt="Previous"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>

          {/* Current card (center) */}
          <div className="relative w-48 h-64 md:w-72 md:h-96 z-10">
            <img
              src={images[currentIndex]}
              alt={`Carousel image ${currentIndex + 1}`}
              className="w-full h-full object-cover rounded-sm shadow-2xl"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Next card (right peek) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-20 h-20 md:w-28 md:h-28 opacity-40 scale-75">
            <img
              src={images[nextIndex]}
              alt="Next"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-8 mt-12">
          <button
            onClick={goToPrevious}
            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center
                       border border-primary text-primary hover:bg-primary hover:text-background
                       transition-all duration-300 rounded-sm"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Slide counter */}
          <div className="text-center text-foreground">
            <p className="text-sm uppercase tracking-widest">
              {currentIndex + 1} / {images.length}
            </p>
          </div>

          <button
            onClick={goToNext}
            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center
                       border border-primary text-primary hover:bg-primary hover:text-background
                       transition-all duration-300 rounded-sm"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
