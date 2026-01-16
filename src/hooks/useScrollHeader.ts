import { useState, useEffect, useCallback } from "react";

export const useScrollHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNearTop, setIsNearTop] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Show header when scrolling up or at top
    if (currentScrollY < lastScrollY || currentScrollY < 50) {
      setIsVisible(true);
    } else if (currentScrollY > 100 && currentScrollY > lastScrollY) {
      // Hide header when scrolling down past 100px
      setIsVisible(false);
    }
    
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Show header when mouse is near top of page
    setIsNearTop(e.clientY < 80);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleScroll, handleMouseMove]);

  return isVisible || isNearTop;
};
