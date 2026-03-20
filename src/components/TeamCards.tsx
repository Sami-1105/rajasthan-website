import { useEffect, useRef, useState } from "react";
import culturalImg from "@/assets/cultural-card.png";
import heritageImg from "@/assets/heritage-card.png";
import communityImg from "@/assets/community-card.png";

const cards = [
  {
    title: "CULTURAL TEAM",
    image: culturalImg,
    description:
      "From Ghoomar to Kalbelia, our Cultural Team preserves and performs the magnificent folk arts of Rajasthan — bringing tradition to life on stage.",
    cta: "EXPLORE",
  },
  {
    title: "HERITAGE TEAM",
    image: heritageImg,
    description:
      "Our Heritage Team documents and celebrates the architectural marvels, historical tales, and artistic traditions that define the Land of Kings.",
    cta: "EXPLORE",
  },
  {
    title: "COMMUNITY TEAM",
    image: communityImg,
    description:
      "The Community Team builds bridges — organizing festivals, outreach events, and fostering unity among students passionate about Rajasthani culture.",
    cta: "APPLY NOW",
  },
];

const TeamCards = () => {
  return (
    <section className="relative py-24 bg-background jali-pattern">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-saffron mb-3">
            Our Departments
          </p>
          <h2 className="font-display text-2xl sm:text-3xl text-foreground tracking-wide">
            Join the <span className="text-gradient-saffron">Legacy</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card, i) => (
            <CardItem key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CardItem = ({
  card,
  index,
}: {
  card: (typeof cards)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group relative bg-card border border-border rounded-lg overflow-hidden transition-all duration-500 hover:glow-saffron hover:border-saffron/30 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{
        transitionDelay: visible ? `${index * 100}ms` : "0ms",
        filter: visible ? "blur(0)" : "blur(4px)",
      }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-muted">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-sm tracking-[0.2em] text-saffron mb-3">
          {card.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          {card.description}
        </p>
        <button className="w-full py-3 text-xs tracking-[0.3em] uppercase font-medium border border-saffron/40 text-saffron rounded-sm hover:bg-saffron/10 active:scale-[0.97] transition-all duration-200">
          {card.cta}
        </button>
      </div>
    </div>
  );
};

export default TeamCards;
