/**
 * GalleryImage Component
 * 
 * Interactive gallery image with hover effects.
 * Features:
 * - Title overlay on hover with slide-up animation
 * - Lightbox modal for full-size viewing
 * - Download button in lightbox
 * 
 * @component
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text for accessibility
 * @param {string} title - Optional title displayed on hover
 * @param {string} className - Additional CSS classes
 */

import { useState } from "react";
import { X, Download } from "lucide-react";

interface GalleryImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
}

const GalleryImage = ({ src, alt, title, className = "" }: GalleryImageProps) => {
  // State for lightbox visibility
  const [isOpen, setIsOpen] = useState(false);

  // Use title if provided, otherwise fall back to alt text
  const displayTitle = title || alt;

  return (
    <>
      {/* Main Image Container */}
      <div
        className={`gallery-card group cursor-pointer relative overflow-hidden ${className}`}
        onClick={() => setIsOpen(true)}
      >
        {/* Image Container */}
        <div className="w-full h-full">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        
        {/* Hover Overlay with Title - slides up on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-all duration-500 
                        flex items-end p-6 pointer-events-none">
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

      {/* Lightbox Modal - Full screen image viewer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          
          {/* Download Button */}
          <a
            href={src}
            download
            className="absolute top-6 right-20 p-2 text-foreground hover:text-primary transition-colors"
            onClick={(e) => e.stopPropagation()}
            aria-label="Download high-resolution image"
          >
            <Download size={28} />
          </a>

          {/* Full Size Image */}
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
