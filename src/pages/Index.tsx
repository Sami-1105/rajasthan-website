import { useState, useCallback } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TeamCards from "@/components/TeamCards";

const Index = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadComplete} />}
      <div className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        <Navbar />
        <HeroSection />
        <TeamCards />

        {/* Recruitment Status Footer */}
        <div className="bg-muted border-t border-border py-6">
          <div className="container text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Recruitment Status:{" "}
              <span className="text-saffron font-medium">Open for 2025 Batch</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
