import { CalendarDays, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

const CurrentEventSection = () => {
  return (
    <section className="py-24 bg-muted jali-pattern">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase text-saffron mb-3">
              Don't Miss
            </p>
            <h2 className="font-display text-2xl sm:text-3xl text-foreground tracking-wide">
              Current <span className="text-gradient-saffron">Event</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="relative max-w-4xl mx-auto bg-card border border-border rounded-lg overflow-hidden group">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1773114156068-2291df7d43e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80"
                  alt="Rangilo Rajasthan 2026"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/50 md:block hidden" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-saffron/10 text-saffron text-xs tracking-[0.2em] uppercase w-fit mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-saffron animate-pulse" />
                  Upcoming
                </span>
                <h3 className="font-display text-xl tracking-wide text-foreground mb-3">
                  Rangilo Rajasthan 2026
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Get ready for our biggest cultural fest of the year! Experience the colors, music, and flavors of Rajasthan right here on campus with performances, competitions, and traditional festivities.
                </p>
                <div className="flex flex-col gap-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDays size={14} className="text-saffron" />
                    April 15-16, 2026
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={14} className="text-saffron" />
                    VIT Bhopal University Campus
                  </div>
                </div>
                <Link
                  to="/events"
                  className="inline-block px-6 py-3 text-xs tracking-[0.3em] uppercase font-medium border border-saffron/40 text-saffron rounded-sm hover:bg-saffron/10 active:scale-[0.97] transition-all duration-200 text-center"
                >
                  View All Events
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CurrentEventSection;
