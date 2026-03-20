import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Mail, MapPin, Instagram, Linkedin } from "lucide-react";
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
  {/* Email */}
  <a
    href="mailto:mharorajasthanvitb@gmail.com"
    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-saffron transition-colors"
  >
    <div className="p-2 rounded-sm bg-muted border border-border">
      <Mail size={16} className="text-saffron" />
    </div>
    mharorajasthanvitb@gmail.com
  </a>

  {/* Location */}
  <div className="flex items-center gap-3 text-sm text-muted-foreground">
    <div className="p-2 rounded-sm bg-muted border border-border">
      <MapPin size={16} className="text-saffron" />
    </div>
    VIT Bhopal University, Madhya Pradesh
  </div>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/mharo.rajasthan_vitb?igsh=NnRkdzdrZmcydGFl"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-saffron transition-colors"
  >
    <div className="p-2 rounded-sm bg-muted border border-border">
      <Instagram size={16} className="text-saffron" />
    </div>
    @mharorajasthan_vitb
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/mharo-rajasthan-club-50803835a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-saffron transition-colors"
  >
    <div className="p-2 rounded-sm bg-muted border border-border">
      <Linkedin size={16} className="text-saffron" />
    </div>
    Mharo Rajasthan Club
  </a>
</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
