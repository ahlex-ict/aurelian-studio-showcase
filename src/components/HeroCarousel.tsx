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
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Portfolio work ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-[image:var(--hero-overlay)]" />

      {/* Content */}
      <div className="relative z-10 text-center section-padding">
        <div className="mb-8 opacity-0 animate-fade-in-up flex justify-center">
          <img 
            src={logoFull} 
            alt="Aurelian Studios" 
            className="h-24 md:h-32 lg:h-40 w-auto"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 opacity-0 animate-fade-in-up animation-delay-200">
          <span className="hero-subtitle">Automotive</span>
          <span className="hero-subtitle">Photography</span>
          <span className="hero-subtitle text-primary">&</span>
          <span className="hero-subtitle">Retouching</span>
        </div>

        <div className="mt-12 opacity-0 animate-fade-in animation-delay-300">
          <Link
            to="/portfolio"
            className="btn-primary"
          >
            View Portfolio
          </Link>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3 z-10">
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-foreground/50" />
      </div>
    </section>
  );
};

export default HeroCarousel;
