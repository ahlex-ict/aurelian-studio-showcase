import { useState } from "react";
import { X, Download } from "lucide-react";

interface GalleryImageProps {
  src: string;
  alt: string;
  className?: string;
}

const GalleryImage = ({ src, alt, className = "" }: GalleryImageProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`portfolio-card group cursor-pointer ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover image-zoom"
          loading="lazy"
        />
        <div className="portfolio-card-overlay" />
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
