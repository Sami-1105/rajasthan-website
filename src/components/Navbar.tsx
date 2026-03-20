import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Events", to: "/events" },
  { label: "Team", to: "/team" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <span className="text-2xl font-display text-gradient-saffron select-none">म</span>
          <div>
            <span className="font-display text-sm tracking-widest text-foreground">
              Mharo Rajasthan
            </span>
            <span className="block text-[10px] text-muted-foreground tracking-wider">
              VIT Bhopal University
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`px-4 py-2 text-sm tracking-wide transition-colors duration-200 ${
                location.pathname === link.to
                  ? "text-saffron"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground active:scale-95 transition-transform"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border animate-fade-in">
          <div className="container py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`py-2 text-sm transition-colors ${
                  location.pathname === link.to
                    ? "text-saffron"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
