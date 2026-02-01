/**
 * Index Page (Homepage)
 * 
 * Main landing page for Aurelian Studios featuring:
 * - Full-page hero carousel with automatic rotation
 * - About section with studio description
 * - Featured portfolio grid with scroll reveal animations
 * - Navigation filter buttons
 * 
 * @page
 */

import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioCard from "@/components/PortfolioCard";
import HeroCarousel from "@/components/HeroCarousel";
import ScrollReveal from "@/components/ScrollReveal";
import logoFull from "@/assets/logo-full.png";
import { portfolioProjects } from "@/data/portfolio";

const Index = () => {
  // Get first 6 projects for featured display
  const featuredProjects = portfolioProjects.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Site Header with auto-hide behavior */}
      <Header />

      {/* Full-page Hero Carousel Section */}
      <HeroCarousel />

      {/* Intro Section — Large centered logo + subheading (replaces About) */}
      <section className="section-padding py-24 max-w-5xl mx-auto text-center">
        <div className="flex flex-col items-center justify-center gap-6">
          <img src={logoFull} alt="Aurelian Studios" className="h-36 md:h-48 lg:h-64 w-auto" />
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl">
            Photography & Creative Direction for automotive brands and clients worldwide.
          </p>

          <div>
            <button
              onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary mt-6"
            >
              View Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section id="gallery" className="section-padding pb-24">
        {/* Category Filter Buttons */}
        <ScrollReveal animation="pop">
          <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-4">
            <Link to="/portfolio" className="btn-filter btn-filter-active">All</Link>
            <Link to="/portfolio" className="btn-filter">Featured</Link>
            <Link to="/portfolio" className="btn-filter">Clients</Link>
            <Link to="/gallery" className="btn-filter">Gallery</Link>
          </div>
        </ScrollReveal>

        {/* Responsive Grid of Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100} animation="pop">
              <PortfolioCard
                id={project.id}
                title={project.title}
                image={project.image}
                // Second item spans 2 rows on medium+ screens
                className={
                  index === 1 ? "md:row-span-2 md:aspect-auto" : ""
                }
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export default Index;
