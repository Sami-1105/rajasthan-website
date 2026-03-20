import { useState, useCallback } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import CurrentEventSection from "@/components/CurrentEventSection";
import SignatureEventsSection from "@/components/SignatureEventsSection";
import Footer from "@/components/Footer";

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
        <FeaturesSection />
        <AboutSection />
        <CurrentEventSection />
        <SignatureEventsSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
