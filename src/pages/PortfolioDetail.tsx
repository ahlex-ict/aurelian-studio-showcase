import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryImage from "@/components/GalleryImage";
import { portfolioProjects } from "@/data/portfolio";

const PortfolioDetail = () => {
  const { id } = useParams();
  const project = portfolioProjects.find((p) => p.id === id);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <span className="logo-mark text-8xl mb-4">//</span>
          <h1 className="font-display text-4xl mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="nav-link">
            Return to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = portfolioProjects.findIndex((p) => p.id === id);
  const prevProject = portfolioProjects[currentIndex - 1];
  const nextProject = portfolioProjects[currentIndex + 1];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Image */}
      <section className="relative h-[70vh] min-h-[500px]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[image:var(--hero-overlay)]" />
        
        <div className="absolute bottom-0 left-0 right-0 section-padding pb-12">
          <p className="text-primary font-display uppercase tracking-widest text-sm mb-2">
            {project.category}
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding py-16 max-w-4xl">
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </section>

      {/* Project Images */}
      <section className="section-padding pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.images.map((image, index) => (
            <GalleryImage
              key={index}
              src={image}
              alt={`${project.title} - Image ${index + 1}`}
              className="aspect-[4/3]"
            />
          ))}
        </div>
      </section>

      {/* Navigation */}
      <section className="section-padding py-12 border-t border-border">
        <div className="flex justify-between items-center">
          {prevProject ? (
            <Link
              to={`/portfolio/${prevProject.id}`}
              className="flex items-center gap-3 group"
            >
              <ArrowLeft className="group-hover:-translate-x-2 transition-transform" />
              <div>
                <p className="text-muted-foreground text-sm">Previous</p>
                <p className="font-display uppercase">{prevProject.title}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}
          
          {nextProject ? (
            <Link
              to={`/portfolio/${nextProject.id}`}
              className="flex items-center gap-3 group text-right"
            >
              <div>
                <p className="text-muted-foreground text-sm">Next</p>
                <p className="font-display uppercase">{nextProject.title}</p>
              </div>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioDetail;
