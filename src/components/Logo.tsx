import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <img 
        src={logoIcon} 
        alt="Aurelian Studios" 
        className="h-10 w-auto"
      />
    </Link>
  );
};

export default Logo;
