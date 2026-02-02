import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioCard from "@/components/PortfolioCard";
import ScrollReveal from "@/components/ScrollReveal";
import { portfolioProjects } from "@/data/portfolio";
import logoIcon from "@/assets/logo-icon.png";

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Clients Section */}
      <section className="section-padding pt-32 pb-24">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal animation="pop">
            <div className="flex items-center gap-4 mb-8">
              <img src={logoIcon} alt="Aurelian Studios" className="h-16 w-auto" />
              <h1 className="font-display text-5xl md:text-7xl font-bold uppercase">Clients</h1>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Clients Grid with Blurbs */}
      <section className="section-padding pb-24">
        <div className="max-w-6xl mx-auto">
          {portfolioProjects.map((project, index) => (
            <div key={project.id} className="mb-24 last:mb-0">
              {/* Client Title & Description */}
              <ScrollReveal animation="pop" delay={index * 100}>
            <div className="mb-12">
                  <h2 className="font-display text-3xl md:text-4xl font-bold uppercase mb-4">{project.title}</h2>
                  {project.description && (
                    <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                      {project.description}
                    </p>
                  )}
                </div>
              </ScrollReveal>

              {/* Client Gallery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.images.map((image, imgIndex) => (
                  <ScrollReveal key={`${project.id}-${imgIndex}`} delay={imgIndex * 50} animation="pop">
                    <div className="relative overflow-hidden rounded-sm">
                      <img
                        src={image}
                        alt={`${project.title} - image ${imgIndex + 1}`}
                        className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
