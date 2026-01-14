import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioCard from "@/components/PortfolioCard";
import { portfolioProjects } from "@/data/portfolio";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const featuredProjects = portfolioProjects.slice(0, 6);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Automotive photography hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[image:var(--hero-overlay)]" />
        </div>

        <div className="relative z-10 text-center section-padding">
          <h1 className="hero-title mb-4 opacity-0 animate-fade-in-up">
            <span className="block">AURELIAN</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 opacity-0 animate-fade-in-up animation-delay-200">
            <span className="hero-subtitle">Automotive</span>
            <span className="hero-subtitle">Photography</span>
            <span className="hero-subtitle text-primary">&</span>
            <span className="hero-subtitle">Retouching</span>
          </div>

          <div className="mt-12 opacity-0 animate-fade-in animation-delay-300">
            <Link
              to="/portfolio"
              className="inline-block border-2 border-primary text-primary px-10 py-4 font-display uppercase tracking-widest text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              View Portfolio
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-foreground/50" />
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding py-24 max-w-4xl mx-auto text-center">
        <h2 className="text-primary font-display text-lg uppercase tracking-widest mb-6 opacity-0 animate-fade-in">
          Who is Aurelian Studios?
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
          Aurelian Studios is a world-renowned automotive photography studio, 
          capturing the essence of automotive excellence across the globe. 
          Our unique and technical style has earned widespread acclaim, 
          with our work being featured in major publications worldwide. 
          A true passion for cars is evident in every shot we take, 
          resulting in images that are distinguishable, captivating, and dynamic.
        </p>
        
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
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding pb-24">
        <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-4">
          <button className="nav-link nav-link-active whitespace-nowrap">All</button>
          <button className="nav-link whitespace-nowrap">Featured</button>
          <button className="nav-link whitespace-nowrap">Portfolio</button>
          <button className="nav-link whitespace-nowrap">Commercial</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredProjects.map((project, index) => (
            <PortfolioCard
              key={project.id}
              id={project.id}
              title={project.title}
              image={project.image}
              className={
                index === 1 ? "md:row-span-2 md:aspect-auto" : ""
              }
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
