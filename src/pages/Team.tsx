import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import heroBg from "@/assets/hero-bg.jpg";

const teamMembers = [
  { name: "Manish Chaudhary", role: "President", initials: "MC" },
  { name: "Yuvraj Rajpurohit", role: "Vice President", initials: "YR" },
  { name: "Vikram Singh Rajput", role: "General Secretary", initials: "VS" },
  { name: "Kavita Meena", role: "Cultural Head", initials: "KM" },
  { name: "Rohit Joshi", role: "Events Head", initials: "RJ" },
  { name: "Nandini Sharma", role: "PR & Outreach", initials: "NS" },
  { name: "Nabh Garg", role: "Technical Head", initials: "NG" },
  { name: "Mansi Kanwar", role: "Social-Media Head", initials: "MK" },
];

const Team = () => {
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
          <p className="text-xs tracking-[0.4em] uppercase text-saffron mb-3">The People</p>
          <h1 className="font-display text-3xl sm:text-4xl text-foreground tracking-wide">
            Our <span className="text-gradient-saffron">Team</span>
          </h1>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 80}>
                <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-saffron/30 hover:glow-saffron transition-all duration-300 group">
                  <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4 border border-border group-hover:border-saffron/40 transition-colors">
                    <span className="font-display text-sm text-gradient-saffron tracking-wider">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="font-display text-sm tracking-wide text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs text-muted-foreground tracking-wider uppercase">
                    {member.role}
                  </p>
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

export default Team;
