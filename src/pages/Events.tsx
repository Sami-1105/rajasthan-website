import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { CalendarDays, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const upcomingEvents = [
  {
    title: "Rangilo Rajasthan 2026",
    description: "Get ready for our biggest cultural fest of the year! Experience the colors, music, and flavors of Rajasthan right here on campus.",
    date: "April 15-16, 2026",
    location: "VIT Bhopal University Campus",
    image: "https://images.unsplash.com/photo-1773114156068-2291df7d43e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    status: "Upcoming",
  },
];

const pastEvents = [
  {
    year: "2024",
    title: "Padharo Sa",
    description: "Our flagship event that introduced VIT Bhopal to the grandeur of Rajasthani culture.",
    attendees: "500+",
    date: "September 2024",
    image: "https://images.unsplash.com/photo-1672071367695-35958d5c8c04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
  },
  {
    year: "2025",
    title: "Padharo Sa 2.0",
    description: "The much-awaited second edition with Ghoomar dance competitions, attire showcase, and Kalbeliya performance.",
    attendees: "800+",
    date: "January 2025",
    image: "https://images.unsplash.com/photo-1653285634338-9481a8ed9c12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
  },
  {
    year: "2025",
    title: "Thar",
    description: "Desert-themed cultural night with folk tales, puppet shows (Kathputli), and folk musicians.",
    attendees: "600+",
    date: "February 2025",
    image: "https://images.unsplash.com/photo-1670687174580-c003b4716959?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
  },
  {
    year: "2025",
    title: "Rangilo Rajasthan",
    description: "Mega cultural fest with performances, competitions, food stalls, handicraft exhibitions, and cultural workshops.",
    attendees: "1000+",
    date: "March 2025",
    image: "https://images.unsplash.com/photo-1555725305-e823b44548de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
  },
];

const Events = () => {
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
          <p className="text-xs tracking-[0.4em] uppercase text-saffron mb-3">Celebrations</p>
          <h1 className="font-display text-3xl sm:text-4xl text-foreground tracking-wide">
            Our <span className="text-gradient-saffron">Events</span>
          </h1>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-20 bg-background">
        <div className="container">
          <ScrollReveal>
            <h2 className="font-display text-xl tracking-wide text-foreground mb-8">
              Upcoming <span className="text-gradient-saffron">Events</span>
            </h2>
          </ScrollReveal>
          {upcomingEvents.map((event) => (
            <ScrollReveal key={event.title} delay={100}>
              <div className="bg-card border border-border rounded-lg overflow-hidden group">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-56 md:h-72 overflow-hidden">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-saffron/10 text-saffron text-xs tracking-[0.2em] uppercase w-fit mb-4">
                      <span className="h-1.5 w-1.5 rounded-full bg-saffron animate-pulse" />
                      {event.status}
                    </span>
                    <h3 className="font-display text-xl text-foreground mb-3">{event.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{event.description}</p>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2"><CalendarDays size={14} className="text-saffron" />{event.date}</span>
                      <span className="flex items-center gap-2"><MapPin size={14} className="text-saffron" />{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-muted jali-pattern">
        <div className="container">
          <ScrollReveal>
            <h2 className="font-display text-xl tracking-wide text-foreground mb-8">
              Past <span className="text-gradient-saffron">Events</span>
            </h2>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2">
            {pastEvents.map((event, i) => (
              <ScrollReveal key={event.title} delay={i * 80}>
                <div className="bg-card border border-border rounded-lg overflow-hidden group hover:border-saffron/30 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                    <div className="absolute top-3 left-3 px-2 py-1 bg-background/80 backdrop-blur-sm rounded-sm">
                      <span className="text-xs tracking-widest uppercase text-saffron font-display">{event.year}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-base text-foreground mb-2">{event.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{event.description}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="px-2 py-1 bg-saffron/10 text-saffron rounded-sm">{event.attendees} attendees</span>
                      <span>{event.date}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Events;
