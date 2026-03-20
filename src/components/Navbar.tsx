import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Team", href: "#team" },
  { label: "Gallery", href: "#gallery" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-display text-gradient-saffron select-none">म</span>
          <div>
            <span className="font-display text-sm tracking-widest text-foreground">
              Mharo Rajasthan
            </span>
            <span className="block text-[10px] text-muted-foreground tracking-wider">
              Club
            </span>
          </div>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#join"
            className="px-5 py-2 text-sm font-medium rounded-sm bg-primary text-primary-foreground hover:opacity-90 active:scale-[0.97] transition-all duration-200"
          >
            Join Us
          </a>
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
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#join"
              className="mt-2 px-5 py-2 text-sm text-center font-medium rounded-sm bg-primary text-primary-foreground"
            >
              Join Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
