import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import logoIcon from "@/assets/logo-icon.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <div className="flex-1 flex items-center justify-center section-padding">
        <div className="text-center">
          <img src={logoIcon} alt="Aurelian Studios" className="h-24 w-auto mx-auto mb-8" />
          <h1 className="font-display text-8xl md:text-9xl text-primary mb-4">404</h1>
          <p className="text-muted-foreground text-xl mb-8">Page not found</p>
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
