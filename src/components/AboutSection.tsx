import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <ScrollReveal direction="left">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-saffron mb-3">
                Who We Are
              </p>
              <h2 className="font-display text-2xl sm:text-3xl text-foreground tracking-wide mb-6">
                About Our <span className="text-gradient-saffron">Club</span>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The Maharo Rajasthan Club at our college is a student-led organization dedicated to promoting and celebrating the culture and traditions of Rajasthan. We provide a platform for students interested in Rajasthani culture to come together, share knowledge and skills, and organize various events and activities.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                From Ghoomar and Rajasthan Day celebrations to Jaipur Literature Festival and traditional sports competitions, our club offers a diverse range of experiences. Through these initiatives, we aim to preserve and showcase Rajasthan's rich heritage while fostering a sense of community and cultural awareness among the students.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                Our club serves as a platform for students to connect with their roots while creating unforgettable memories through vibrant cultural events and festivals on campus.
              </p>
              <Link
                to="/about"
                className="inline-block px-6 py-3 text-xs tracking-[0.3em] uppercase font-medium border border-saffron/40 text-saffron rounded-sm hover:bg-saffron/10 active:scale-[0.97] transition-all duration-200"
              >
                Read More
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={200}>
            <div className="relative rounded-lg overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1534758755011-03cdf52658d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80"
                alt="Hawa Mahal, Jaipur"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
