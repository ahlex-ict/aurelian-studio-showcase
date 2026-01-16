/**
 * useScrollReveal Hook
 * 
 * Custom hook for detecting when an element enters the viewport
 * and triggering reveal animations. Uses Intersection Observer API.
 * 
 * Features:
 * - Configurable visibility threshold
 * - Re-triggers animation when navigating back to page
 * - Efficient observation with automatic cleanup
 * 
 * @param {number} threshold - Percentage of element visible to trigger (0-1)
 * @returns {Object} ref - Ref to attach to target element
 * @returns {boolean} isVisible - Whether element is currently visible
 * 
 * @example
 * const { ref, isVisible } = useScrollReveal(0.1);
 * return <div ref={ref} className={isVisible ? 'visible' : 'hidden'}>Content</div>
 */

import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export const useScrollReveal = (threshold = 0.1) => {
  // Ref to attach to the DOM element we're observing
  const ref = useRef<HTMLDivElement>(null);
  
  // Visibility state - triggers animation classes
  const [isVisible, setIsVisible] = useState(false);
  
  // Track route changes to re-trigger animations
  const location = useLocation();

  /**
   * Reset visibility when route changes
   * This ensures animations re-trigger when navigating between pages
   */
  useEffect(() => {
    setIsVisible(false);
  }, [location.pathname]);

  /**
   * Set up Intersection Observer to detect element visibility
   * Triggers once when element enters viewport
   */
  useEffect(() => {
    // Small delay to ensure DOM is ready after route change
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Only trigger when entering viewport
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { 
          threshold,
          // Root margin adds buffer zone for earlier triggering
          rootMargin: '0px 0px -50px 0px'
        }
      );

      // Start observing if ref is attached
      if (ref.current) {
        observer.observe(ref.current);
      }

      // Cleanup observer on unmount
      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [threshold, location.pathname]);

  return { ref, isVisible };
};
