/**
 * Header Component
 * 
 * Main navigation header with auto-hide behavior.
 * - Disappears when scrolling down
 * - Reappears when scrolling up or mouse near top
 * - Responsive mobile menu with hamburger toggle
 * 
 * @component
 */

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { useScrollHeader } from "@/hooks/useScrollHeader";

/**
 * Navigation links configuration
 * Each link has a label (display text) and href (route path)
 */
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Current route for active link styling
  const location = useLocation();
  
  // Custom hook for header visibility on scroll
  const isVisible = useScrollHeader();

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 section-padding py-6 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Gradient background overlay for better logo visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-transparent pointer-events-none" />
      
      <nav className="relative flex items-center justify-between">
        {/* Logo - links to home page */}
        <Logo />

        {/* Desktop Navigation - hidden on mobile */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`nav-link ${
                  location.pathname === link.href ? "nav-link-active" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-20 bg-background z-40 md:hidden animate-fade-in">
          <ul className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`text-2xl font-display uppercase tracking-widest ${
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
