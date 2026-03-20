import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Mail, MapPin, Instagram } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="relative container text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-saffron mb-3">Reach Out</p>
          <h1 className="font-display text-3xl sm:text-4xl text-foreground tracking-wide">
            Contact <span className="text-gradient-saffron">Us</span>
          </h1>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <div className="grid gap-12 md:grid-cols-2">
            <ScrollReveal direction="left">
              <div>
                <h2 className="font-display text-xl text-foreground tracking-wide mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-4">
                  <a href="mailto:mharorajasthan@vitbhopal.ac.in" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-saffron transition-colors">
                    <div className="p-2 rounded-sm bg-muted border border-border">
                      <Mail size={16} className="text-saffron" />
                    </div>
                    mharorajasthan@vitbhopal.ac.in
                  </a>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="p-2 rounded-sm bg-muted border border-border">
                      <MapPin size={16} className="text-saffron" />
                    </div>
                    VIT Bhopal University, Madhya Pradesh
                  </div>
                  <a href="#" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-saffron transition-colors">
                    <div className="p-2 rounded-sm bg-muted border border-border">
                      <Instagram size={16} className="text-saffron" />
                    </div>
                    @mharorajasthan_vitb
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-saffron/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-saffron/50 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-saffron/50 transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 text-xs tracking-[0.3em] uppercase font-medium bg-primary text-primary-foreground rounded-sm hover:opacity-90 active:scale-[0.97] transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
