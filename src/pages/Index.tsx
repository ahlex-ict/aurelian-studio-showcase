import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioCard from "@/components/PortfolioCard";
import HeroCarousel from "@/components/HeroCarousel";
import ScrollReveal from "@/components/ScrollReveal";
import { portfolioProjects } from "@/data/portfolio";

const Index = () => {
  const featuredProjects = portfolioProjects.slice(0, 6);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* About Section */}
      <section className="section-padding py-24 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-primary font-display text-lg uppercase tracking-widest mb-6">
            Who is Aurelian Studios?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            Aurelian Studios is a world-renowned automotive photography studio, 
            capturing the essence of automotive excellence across the globe. 
            Our unique and technical style has earned widespread acclaim, 
            with our work being featured in major publications worldwide. 
            A true passion for cars is evident in every shot we take, 
            resulting in images that are distinguishable, captivating, and dynamic.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <Link
            to="/portfolio"
            className="inline-block mt-10 group"
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={featuredProjects[0].image}
                alt="View the portfolio"
                className="w-80 h-48 object-cover image-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end justify-center pb-6">
                <span className="font-display text-lg uppercase tracking-widest">
                  View The Portfolio
                </span>
              </div>
            </div>
          </Link>
        </ScrollReveal>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding pb-24">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-4">
            <button className="btn-filter btn-filter-active">All</button>
            <button className="btn-filter">Featured</button>
            <button className="btn-filter">Portfolio</button>
            <button className="btn-filter">Commercial</button>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <PortfolioCard
                id={project.id}
                title={project.title}
                image={project.image}
                className={
                  index === 1 ? "md:row-span-2 md:aspect-auto" : ""
                }
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
