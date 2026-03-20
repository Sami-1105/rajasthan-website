import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import heroBg from "@/assets/hero-bg.jpg";

const About = () => {
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
          <p className="text-xs tracking-[0.4em] uppercase text-saffron mb-3">Who We Are</p>
          <h1 className="font-display text-3xl sm:text-4xl text-foreground tracking-wide">
            About <span className="text-gradient-saffron">Mharo Rajasthan</span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <div className="grid gap-12 md:grid-cols-2 items-start">
            <ScrollReveal direction="left">
              <div className="space-y-4">
                <h2 className="font-display text-xl text-foreground tracking-wide">Our Mission</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The Maharo Rajasthan Club at VIT Bhopal is a student-led organization dedicated to promoting and celebrating the culture and traditions of Rajasthan. We provide a platform for students interested in Rajasthani culture to come together, share knowledge and skills, and organize various events and activities.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  From Ghoomar and Rajasthan Day celebrations to Jaipur Literature Festival and traditional sports competitions, our club offers a diverse range of experiences.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <div className="space-y-4">
                <h2 className="font-display text-xl text-foreground tracking-wide">Our Vision</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Through our initiatives, we aim to preserve and showcase Rajasthan's rich heritage while fostering a sense of community and cultural awareness among the students.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We collaborate with other cultural clubs to promote diversity and harmony on campus. Members also participate in intercollegiate cultural competitions representing our college and state.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={300}>
            <div className="mt-16 relative rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1534758755011-03cdf52658d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80"
                alt="Hawa Mahal"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="font-display text-sm tracking-widest text-saffron">पधारो म्हारे देस</p>
                <p className="text-xs text-muted-foreground mt-1">Welcome to our land</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
