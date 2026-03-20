import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-display text-gradient-saffron select-none">म</span>
              <div>
                <span className="font-display text-sm tracking-widest text-foreground">
                  Mharo Rajasthan
                </span>
                <span className="block text-[10px] text-muted-foreground tracking-wider">
                  VIT Bhopal University
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Celebrating the vibrant culture, traditions, and heritage of the Land of Kings.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xs tracking-[0.3em] uppercase text-foreground mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Events", to: "/events" },
                { label: "Team", to: "/team" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-saffron transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xs tracking-[0.3em] uppercase text-foreground mb-4">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:mharorajasthan@vitbhopal.ac.in"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-saffron transition-colors"
              >
                <Mail size={14} />
                mharorajasthan@vitbhopal.ac.in
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-saffron transition-colors"
              >
                <Instagram size={14} />
                @mharorajasthan_vitb
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Mharo Rajasthan Club, VIT Bhopal University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
