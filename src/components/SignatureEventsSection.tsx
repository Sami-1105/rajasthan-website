import ScrollReveal from "./ScrollReveal";

const events = [
  {
    year: "2024",
    title: "Padharo Sa",
    description:
      "Our flagship event that introduced VIT Bhopal to the grandeur of Rajasthani culture. Featured traditional dance performances, folk music, and authentic Rajasthani cuisine.",
    attendees: "500+",
    date: "September 2024",
    image:
      "https://images.unsplash.com/photo-1672071367695-35958d5c8c04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
  },
  {
    year: "2025",
    title: "Padharo Sa 2.0",
    description:
      "The much-awaited second edition that doubled in size and grandeur! Included Ghoomar dance competitions, traditional attire showcase, and a mesmerizing Kalbeliya performance.",
    attendees: "800+",
    date: "January 2025",
    image:
      "https://images.unsplash.com/photo-1653285634338-9481a8ed9c12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
  },
  {
    year: "2025",
    title: "Thar",
    description:
      "A unique desert-themed cultural night featuring traditional Rajasthani folk tales, puppet shows (Kathputli), and an authentic desert setup with folk musicians and bonfire.",
    attendees: "600+",
    date: "February 2025",
    image:
      "https://images.unsplash.com/photo-1670687174580-c003b4716959?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
  },
  {
    year: "2025",
    title: "Rangilo Rajasthan",
    description:
      "Our mega cultural fest celebrating Rajasthan in all its glory! Day of non-stop performances, competitions, food stalls, handicraft exhibitions, and cultural workshops.",
    attendees: "1000+",
    date: "March 2025",
    image:
      "https://images.unsplash.com/photo-1555725305-e823b44548de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
  },
];

const SignatureEventsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-saffron mb-3">
              Our Legacy
            </p>
            <h2 className="font-display text-2xl sm:text-3xl text-foreground tracking-wide mb-3">
              Our Signature <span className="text-gradient-saffron">Events</span>
            </h2>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto">
              Celebrating Rajasthani culture through memorable events that bring our campus together
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {events.map((event, i) => (
            <ScrollReveal key={event.title} delay={i * 100}>
              <div className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-saffron/30 hover:glow-saffron transition-all duration-300">
                <div className={`grid md:grid-cols-2 ${i % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}>
                  <div className={`relative h-56 md:h-72 overflow-hidden ${i % 2 === 1 ? "md:col-start-2" : ""}`}>
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
                    {/* Year badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-sm">
                      <span className="text-xs tracking-[0.2em] uppercase text-saffron font-display">
                        {event.year}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="font-display text-lg tracking-wide text-foreground mb-3">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="px-2 py-1 bg-saffron/10 text-saffron rounded-sm">
                        {event.attendees} attendees
                      </span>
                      <span>{event.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureEventsSection;
