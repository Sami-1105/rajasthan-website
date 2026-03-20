import TypewriterText from "./TypewriterText";
import heroBg from "@/assets/hero-bg.jpg";

const typewriterTexts = [
  "Celebrating the Land of Kings?",
  "Embracing Rajasthani Heritage?",
  "Living the Marwadi Spirit?",
  "Keeping Our Culture Alive?",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Grid lines (Android Club style) */}
      <div className="absolute inset-0 opacity-[0.04]">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-px bg-foreground"
            style={{ left: `${(i + 1) * 12.5}%` }}
          />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-px bg-foreground"
            style={{ top: `${(i + 1) * 16.66}%` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative container pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Decorative border (Android Club style bracket) */}
          <div className="relative pl-6 border-l-2 border-gradient-saffron">
            {/* Top horizontal line */}
            <div
              className="absolute left-0 top-0 h-0.5 w-16"
              style={{ background: `linear-gradient(90deg, hsl(var(--saffron)), hsl(var(--gold)))` }}
            />

            <p
              className="text-xs tracking-[0.4em] uppercase text-saffron mb-4 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              VIT Bhopal University
            </p>

            <h1
              className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight text-foreground mb-4 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              Wanna be part of{" "}
              <TypewriterText
                texts={typewriterTexts}
                className="text-gradient-saffron"
              />
            </h1>

            {/* Bottom horizontal line */}
            <div
              className="absolute left-0 bottom-0 h-0.5 w-12"
              style={{ background: `linear-gradient(90deg, hsl(var(--gold)), hsl(var(--saffron)))` }}
            />
          </div>

          <div
            className="mt-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <h2 className="font-display text-xl tracking-widest text-foreground">
              Mharo Rajasthan Club
            </h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-md leading-relaxed">
              Celebrating the vibrant culture, traditions, and heritage of Rajasthan — the Land of Kings. Join us in keeping our rich legacy alive.
            </p>
          </div>

          {/* Status badge */}
          <div
            className="mt-10 inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-muted border border-border opacity-0 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs tracking-widest uppercase text-muted-foreground">
              Recruitments Open — Core Team 2025
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
