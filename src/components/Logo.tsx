import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <Link to="/" className={`flex items-center gap-1 ${className}`}>
      <span className="logo-mark text-3xl leading-none">//</span>
    </Link>
  );
};

export default Logo;
