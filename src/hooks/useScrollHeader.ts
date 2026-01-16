/**
 * useScrollHeader Hook
 * 
 * Custom hook that controls header visibility based on scroll behavior.
 * 
 * Behavior:
 * - Header hides when scrolling down
 * - Header shows when scrolling up
 * - Header shows when mouse is near top of viewport (within 80px)
 * - Always shows at top of page (within first 50px)
 * 
 * @returns {boolean} isVisible - Whether header should be visible
 * 
 * @example
 * const isVisible = useScrollHeader();
 * return <header className={isVisible ? 'visible' : 'hidden'}>...</header>
 */

import { useState, useEffect, useCallback } from "react";

export const useScrollHeader = () => {
  // Header visibility state based on scroll direction
  const [isVisible, setIsVisible] = useState(true);
  
  // Track previous scroll position for direction detection
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Track if mouse is near top of viewport
  const [isNearTop, setIsNearTop] = useState(false);

  /**
   * Handle scroll events to show/hide header
   * Shows header when scrolling up, hides when scrolling down
   */
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Show header when scrolling up or at very top of page
    if (currentScrollY < lastScrollY || currentScrollY < 50) {
      setIsVisible(true);
    } 
    // Hide header when scrolling down past 100px threshold
    else if (currentScrollY > 100 && currentScrollY > lastScrollY) {
      setIsVisible(false);
    }
    
    // Update last scroll position for next comparison
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  /**
   * Handle mouse movement near top of viewport
   * Shows header when mouse is within 80px of top
   */
  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Track if mouse is in the top 80px zone
    setIsNearTop(e.clientY < 80);
  }, []);

  /**
   * Set up scroll and mouse event listeners
   */
  useEffect(() => {
    // Add event listeners with passive option for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    
    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleScroll, handleMouseMove]);

  // Header is visible if either scroll-based visibility OR mouse near top
  return isVisible || isNearTop;
};
