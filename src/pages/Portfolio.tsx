import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioCard from "@/components/PortfolioCard";
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
            alt="Portfolio banner"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding py-12">
        <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-4">
          <button className="nav-link nav-link-active whitespace-nowrap">All</button>
          <button className="nav-link whitespace-nowrap">Featured</button>
          <button className="nav-link whitespace-nowrap">Portfolio</button>
          <button className="nav-link whitespace-nowrap">Commercial</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioProjects.map((project, index) => (
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

export default Portfolio;
