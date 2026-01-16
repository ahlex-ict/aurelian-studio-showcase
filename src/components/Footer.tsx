import { Link } from "react-router-dom";
import { Instagram, Twitter, Mail } from "lucide-react";
import logoFull from "@/assets/logo-full.png";

const Footer = () => {
  return (
    <footer className="bg-card section-padding py-16 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div>
            <Link to="/" className="mb-4 inline-block">
              <img 
                src={logoFull} 
                alt="Aurelian Studios" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-muted-foreground max-w-md mt-4">
              Aurelian Studios specializes in automotive photography and retouching,
              capturing the essence of automotive excellence worldwide.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-display text-lg uppercase tracking-widest">
              Connect
            </h4>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
            <Link to="/gallery" className="nav-link">Gallery</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Aurelian Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
