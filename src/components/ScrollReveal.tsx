/**
 * ScrollReveal Component
 * 
 * Wrapper component that animates children into view on scroll.
 * Uses Intersection Observer for efficient viewport detection.
 * 
 * Animation Types:
 * - pop: Scale up from 75% with fade
 * - fade: Simple opacity fade
 * - slide-up: Slide up from below with fade
 * - slide-right: Slide in from left with fade
 * - scale: Subtle scale from 90% with fade
 * 
 * @component
 * @param {ReactNode} children - Content to animate
 * @param {string} className - Additional CSS classes
 * @param {number} delay - Animation delay in milliseconds
 * @param {string} animation - Animation type to use
 * 
 * @example
 * <ScrollReveal animation="pop" delay={100}>
 *   <h2>Animated Title</h2>
 * </ScrollReveal>
 */

import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "pop" | "fade" | "slide-up" | "slide-right" | "scale";
}

const ScrollReveal = ({ 
  children, 
  className = "", 
  delay = 0, 
  animation = "pop" 
}: ScrollRevealProps) => {
  // Use custom hook to detect viewport visibility
  const { ref, isVisible } = useScrollReveal(0.1);

  /**
   * Generate CSS classes based on visibility and animation type
   * Returns initial hidden state or final visible state classes
   */
  const getAnimationClasses = () => {
    // Base transition classes applied to all animations
    const baseClasses = "transition-all duration-700 ease-out";
    
    // Hidden state - before element enters viewport
    if (!isVisible) {
      switch (animation) {
        case "pop":
          // Scale down and fade out
          return `${baseClasses} opacity-0 scale-75`;
        case "fade":
          // Just fade out
          return `${baseClasses} opacity-0`;
        case "slide-up":
          // Move down and fade out
          return `${baseClasses} opacity-0 translate-y-16`;
        case "slide-right":
          // Move left and fade out
          return `${baseClasses} opacity-0 -translate-x-16`;
        case "scale":
          // Slight scale down and fade out
          return `${baseClasses} opacity-0 scale-90`;
        default:
          return `${baseClasses} opacity-0 scale-75`;
      }
    }
    
    // Visible state - fully revealed
    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      // Apply delay using inline style for precise timing
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
