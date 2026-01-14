import Header from "@/components/Header";
import Footer from "@/components/Footer";
import portfolioImage from "@/assets/portfolio-4.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="logo-mark text-6xl">//</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold uppercase">
              About
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-2xl md:text-3xl uppercase">
                Capturing Automotive Excellence
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Aurelian Studios is a premier automotive photography studio based 
                in London, but often found traveling the world shooting cars. 
                We have won widespread acclaim for our unique and technical style 
                of automotive images.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our passion for cars is clear in every shot we take, and with 
                nearly two decades of experience, the resulting images are 
                distinguishable, captivating, and dynamic.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From studio shoots to exotic locations, from action shots to 
                atmospheric portraits, we bring a cinematic vision to every project.
              </p>
            </div>

            <div className="relative">
              <img
                src={portfolioImage}
                alt="Studio photography"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding py-16 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl uppercase mb-12 text-center">
            Services
          </h2>
          
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
            ].map((service) => (
              <div key={service.title} className="text-center p-8">
                <h3 className="font-display text-xl uppercase mb-4 text-primary">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
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
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl md:text-5xl text-primary">
                  {stat.number}
                </p>
                <p className="text-muted-foreground text-sm uppercase tracking-widest mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
