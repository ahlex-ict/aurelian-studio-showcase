import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { portfolioProjects } from "@/data/portfolio";
import logoIcon from "@/assets/logo-icon.png";

const About = () => {
  const [featuredImage, setFeaturedImage] = useState("");

  useEffect(() => {
    // Use the first available portfolio image, or fallback to empty
    const firstImage = portfolioProjects[0]?.image || "";
    setFeaturedImage(firstImage);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 section-padding">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-8">
              <img src={logoIcon} alt="Aurelian Studios" className="h-16 w-auto" />
              <h1 className="font-display text-5xl md:text-7xl font-bold uppercase">
                About
              </h1>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <ScrollReveal delay={100}>
                <h2 className="font-display text-2xl md:text-3xl uppercase">
                  Capturing Automotive Excellence
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Aurelian Studios is a premier digital marketing studio based 
                  in Brisbane
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our passion is clear in every shot we take, resulting in images that are 
                  distinguishable, captivating, and dynamic.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  From studio shoots to exotic locations, from action shots to 
                  atmospheric portraits, we bring a cinematic vision to every project putting
                  your vision at the forefront.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={200}>
              <div className="relative">
                {featuredImage ? (
                  <img
                    src={featuredImage}
                    alt="Studio photography"
                    className="w-full aspect-[4/5] object-cover"
                  />
                ) : (
                  <div className="w-full aspect-[4/5] bg-muted flex items-center justify-center">
                    <p className="text-muted-foreground">No images available</p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding py-16 bg-card">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl uppercase mb-12 text-center">
              Services
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Photography",
                description: "From studio sessions to exotic location shoots, we capture the essence of automotive design with cinematic precision.",
              },
              {
                title: "Retouching",
                description: "Expert post-processing and retouching services to bring out the best in every automotive image.",
              },
              {
                title: "Commercial",
                description: "Full-service commercial automotive photography for brands, manufacturers, and publications worldwide.",
              },
            ].map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 150}>
                <div className="text-center p-8">
                  <h3 className="font-display text-xl uppercase mb-4 text-primary">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "500+", label: "Projects" },
              { number: "50+", label: "Countries" },
              { number: "100+", label: "Awards" },
            ].map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 100}>
                <div>
                  <p className="font-display text-4xl md:text-5xl text-primary">
                    {stat.number}
                  </p>
                  <p className="text-muted-foreground text-sm uppercase tracking-widest mt-2">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
