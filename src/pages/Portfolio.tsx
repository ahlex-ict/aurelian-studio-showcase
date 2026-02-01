import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioCard from "@/components/PortfolioCard";
import ScrollReveal from "@/components/ScrollReveal";
import { portfolioProjects } from "@/data/portfolio";
import portfolioBanner from "@/assets/portfolio-banner.jpg";

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={portfolioBanner}
            alt="Clients banner"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding py-12">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mb-8">Clients</h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-4">
            <button className="btn-filter btn-filter-active">All</button>
            <button className="btn-filter">Featured</button>
            <button className="btn-filter">Clients</button>
            <button className="btn-filter">Commercial</button>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioProjects.map((project, index) => (
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

export default Portfolio;
