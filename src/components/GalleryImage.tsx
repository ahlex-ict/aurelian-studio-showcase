/**
 * GalleryImage Component
 * 
 * Interactive gallery image with 3D parallax "look around" effect.
 * Features:
 * - Subtle zoom (1.15x) on hover with smooth transitions
 * - Mouse-tracked transform origin for "looking around" effect
 * - Title overlay on hover with slide-up animation
 * - Lightbox modal for full-size viewing
 * - Download button in lightbox
 * - Vignette effect on hover for depth
 * 
 * @component
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text for accessibility
 * @param {string} title - Optional title displayed on hover
 * @param {string} className - Additional CSS classes
 */

import { useState, useRef } from "react";
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
  
  // State for hover detection (activates parallax)
  const [isHovering, setIsHovering] = useState(false);
  
  // Mouse position as percentage (0-100) for transform origin
  const [position, setPosition] = useState({ x: 50, y: 50 });
  
  // Reference to container for position calculations
  const containerRef = useRef<HTMLDivElement>(null);

  /**
   * Handle mouse movement for 3D parallax effect
   * Calculates mouse position as percentage with reduced sensitivity
   * Using dampened calculation for subtler movement
   */
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    
    // Calculate raw mouse position as percentage (0-100)
    const rawX = ((e.clientX - rect.left) / rect.width) * 100;
    const rawY = ((e.clientY - rect.top) / rect.height) * 100;
    
    // Apply dampening for more subtle movement (reduce sensitivity)
    // Moves position 30% toward mouse from center
    const dampenedX = 50 + (rawX - 50) * 0.3;
    const dampenedY = 50 + (rawY - 50) * 0.3;
    
    setPosition({ x: dampenedX, y: dampenedY });
  };

  /**
   * Activate parallax effect on mouse enter
   */
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  /**
   * Deactivate parallax and reset position on mouse leave
   */
  const handleMouseLeave = () => {
    setIsHovering(false);
    // Smoothly return to center
    setPosition({ x: 50, y: 50 });
  };

  // Use title if provided, otherwise fall back to alt text
  const displayTitle = title || alt;

  return (
    <>
      {/* Main Image Container */}
      <div
        ref={containerRef}
        className={`gallery-card group cursor-pointer relative overflow-hidden ${className}`}
        onClick={() => setIsOpen(true)}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* 3D Parallax "Look Around" Image Container */}
        <div 
          className="w-full h-full transition-transform duration-300 ease-out"
          style={{
            // Subtle zoom: 1.15x instead of 1.4x
            transform: isHovering ? 'scale(1.15)' : 'scale(1)',
            // Transform origin follows dampened mouse position
            transformOrigin: `${position.x}% ${position.y}%`,
          }}
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-all duration-300"
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

        {/* Subtle vignette effect for depth */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            boxShadow: 'inset 0 0 60px 20px rgba(0,0,0,0.4)'
          }}
        />
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
