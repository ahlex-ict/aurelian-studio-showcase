/**
 * Logo Component
 * 
 * Displays the Aurelian Studios logo with responsive sizing.
 * Links to homepage on click.
 * 
 * Features:
 * - Icon-only logo for compact header display
 * - Smooth hover transition effects
 * - Larger sizing for better visibility
 * 
 * @component
 * @param {string} className - Additional CSS classes for customization
 */

import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <Link 
      to="/" 
      className={`flex items-center gap-3 group transition-transform duration-300 hover:scale-105 ${className}`}
    >
      {/* Logo Icon - larger sizing for better visibility */}
      <img 
        src={logoIcon} 
        alt="Aurelian Studios" 
        className="h-14 md:h-16 w-auto transition-transform duration-300"
      />
    </Link>
  );
};

export default Logo;
