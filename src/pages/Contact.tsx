import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Instagram, Twitter, Mail, MapPin } from "lucide-react";

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
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="logo-mark text-6xl">//</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold uppercase">
              Contact
            </h1>
          </div>
          <p className="text-muted-foreground text-xl max-w-2xl">
            Have a project in mind? Let's create something extraordinary together.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
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

            <Button
              type="submit"
              className="w-full md:w-auto px-12 py-6 bg-primary text-primary-foreground font-display uppercase tracking-widest hover:bg-primary/90"
            >
              Send Message
            </Button>
          </form>

          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h3 className="font-display text-xl uppercase mb-4">
                Get in Touch
              </h3>
              <p className="text-muted-foreground">
                We're always excited to hear about new projects and collaborations. 
                Whether you're a car manufacturer, magazine, or private collector, 
                we'd love to discuss how we can help capture your vision.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="text-primary" size={24} />
                <span>hello@aurelianstudios.com</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-primary" size={24} />
                <span>London, United Kingdom</span>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl uppercase mb-4">Follow Us</h3>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram size={28} />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitter size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
