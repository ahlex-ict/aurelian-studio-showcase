import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoFull from "@/assets/logo-full.png";
import { portfolioProjects } from "@/data/portfolio";

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = portfolioProjects.map(p => p.image);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-[50vh] min-h-[500px] flex flex-col overflow-hidden">
      {/* Logo and Brand Title - Above Carousel */}
      <div className="relative z-20 pt-24 pb-8 section-padding text-center bg-background">
        <div className="mb-4 animate-fade-in flex justify-center">
          <img 
            src={logoFull} 
            alt="Aurelian Studios" 
            className="h-20 md:h-28 lg:h-36 w-auto"
          />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 animate-fade-in-up animation-delay-100">
          <span className="hero-subtitle">Automotive</span>
          <span className="hero-subtitle">Photography</span>
          <span className="hero-subtitle text-primary">&</span>
          <span className="hero-subtitle">Retouching</span>
        </div>
      </div>

      {/* Carousel Images - Below branding, no overlay */}
      <div className="relative flex-1 overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentIndex 
                ? "opacity-100 scale-100" 
                : "opacity-0 scale-105"
            }`}
          >
            <img
              src={image}
              alt={`Portfolio work ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-primary w-8" 
                  : "bg-foreground/40 hover:bg-foreground/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 animate-fade-in animation-delay-200">
        <Link
          to="/portfolio"
          className="btn-primary"
        >
          View Portfolio
        </Link>
      </div>
    </section>
  );
};

export default HeroCarousel;
