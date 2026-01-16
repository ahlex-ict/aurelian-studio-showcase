import { useState, useRef } from "react";
import { X, Download } from "lucide-react";

interface GalleryImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
}

const GalleryImage = ({ src, alt, title, className = "" }: GalleryImageProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [parallaxStyle, setParallaxStyle] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    setParallaxStyle({
      x: x * 20,
      y: y * 20,
    });
  };

  const handleMouseLeave = () => {
    setParallaxStyle({ x: 0, y: 0 });
  };

  const displayTitle = title || alt;

  return (
    <>
      <div
        ref={containerRef}
        className={`gallery-card group cursor-pointer relative overflow-hidden ${className}`}
        onClick={() => setIsOpen(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Parallax Image */}
        <div 
          className="w-full h-full transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${parallaxStyle.x}px, ${parallaxStyle.y}px) scale(1.1)`,
          }}
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        
        {/* Hover Overlay with Title */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="font-display text-xl md:text-2xl uppercase tracking-wide text-foreground">
              {displayTitle}
            </h3>
            <span className="text-primary text-sm uppercase tracking-widest mt-1 block">
              Click to view
            </span>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <button
            className="absolute top-6 right-6 p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          
          <a
            href={src}
            download
            className="absolute top-6 right-20 p-2 text-foreground hover:text-primary transition-colors"
            onClick={(e) => e.stopPropagation()}
            aria-label="Download"
          >
            <Download size={28} />
          </a>

          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default GalleryImage;
