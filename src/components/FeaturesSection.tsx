import { Heart, CalendarDays, Users, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: Heart,
    title: "Rich Culture",
    description: "Experience the vibrant traditions and customs of Rajasthan",
    color: "text-saffron",
  },
  {
    icon: CalendarDays,
    title: "Cultural Events",
    description: "Regular festivals, programs, and cultural celebrations",
    color: "text-maroon",
  },
  {
    icon: Users,
    title: "Community",
    description: "Join a vibrant community celebrating Rajasthani heritage",
    color: "text-gold",
  },
  {
    icon: MapPin,
    title: "Connect",
    description: "Network with fellow Rajasthanis and culture enthusiasts",
    color: "text-terracotta",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted jali-pattern">
      <div className="container">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 100}>
              <div className="group relative bg-card border border-border rounded-lg p-6 text-center hover:border-saffron/30 hover:glow-saffron transition-all duration-300">
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-12 rounded-b-full"
                  style={{
                    background: `linear-gradient(90deg, hsl(var(--saffron)), hsl(var(--gold)))`,
                  }}
                />
                <div className={`inline-flex p-3 rounded-full bg-muted mb-4 ${feature.color}`}>
                  <feature.icon size={24} />
                </div>
                <h3 className="font-display text-base tracking-wide text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
