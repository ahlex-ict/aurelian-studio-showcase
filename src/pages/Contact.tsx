import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Instagram, Twitter, Facebook, Mail, MapPin } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    
    // Get contact email from environment variable
    const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;
    
    if (!contactEmail) {
      toast({
        title: "Configuration Error",
        description: "Contact email is not configured. Please try again later.",
        variant: "destructive",
      });
      return;
    }
    
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:${encodeURIComponent(contactEmail)}?subject=${encodeURIComponent(
      subject || "Contact from website",
    )}&body=${encodeURIComponent(body)}`;
    // Open user's email client with prefilled message
    window.location.href = mailto;

    toast({
      title: "Email client opened",
      description: "Your email client should open to send the message.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

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
                Contact
              </h1>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-muted-foreground text-xl max-w-2xl">
              Have a project in mind? Let's create something extraordinary together.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm uppercase tracking-widest mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-card border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm uppercase tracking-widest mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-card border-border focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm uppercase tracking-widest mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                  className="bg-card border-border focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm uppercase tracking-widest mb-2">
                  Message
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="bg-card border-border focus:border-primary resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </ScrollReveal>

          {/* Contact Info */}
          <div className="space-y-10">
            <ScrollReveal delay={100}>
              <div>
                <h3 className="font-display text-xl uppercase mb-4">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground">
                  We're always excited to hear about new projects and collaborations. 
                  we'd love to discuss how we can help capture your vision.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="text-primary" size={24} />
                  <span>
                    {import.meta.env.VITE_CONTACT_EMAIL || "contact@aurelianstudios.com"}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-primary" size={24} />
                  <span>Brisbane, Queensland, Australia</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div>
                <h3 className="font-display text-xl uppercase mb-4">Follow Us</h3>
                <div className="flex gap-6">
                  <a
                    href="https://www.instagram.com/aurelianstudios.co?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram size={28} />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Facebook size={28} />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter size={28} />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
