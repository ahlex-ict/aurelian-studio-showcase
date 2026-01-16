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
  const { ref, isVisible } = useScrollReveal(0.1);

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-700 ease-out";
    
    if (!isVisible) {
      switch (animation) {
        case "pop":
          return `${baseClasses} opacity-0 scale-75`;
        case "fade":
          return `${baseClasses} opacity-0`;
        case "slide-up":
          return `${baseClasses} opacity-0 translate-y-16`;
        case "slide-right":
          return `${baseClasses} opacity-0 -translate-x-16`;
        case "scale":
          return `${baseClasses} opacity-0 scale-90`;
        default:
          return `${baseClasses} opacity-0 scale-75`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
