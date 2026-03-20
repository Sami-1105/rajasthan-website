import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFadeOut(true);
          setTimeout(onComplete, 600);
          return 100;
        }
        return prev + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Jali pattern overlay */}
      <div className="absolute inset-0 jali-pattern opacity-30" />

      {/* Ornamental spinner */}
      <div className="relative mb-8">
        <div
          className="h-24 w-24 rounded-full border-2 border-muted"
          style={{ animation: "spin-slow 3s linear infinite" }}
        >
          <div
            className="absolute inset-0 rounded-full border-t-2 border-saffron"
            style={{ animation: "spin-slow 2s linear infinite reverse" }}
          />
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
        >
          <span className="text-2xl font-display text-gradient-saffron select-none">म</span>
        </div>
      </div>

      {/* Title */}
      <h1 className="font-display text-2xl tracking-widest text-gradient-saffron mb-4 uppercase">
        Mharo Rajasthan
      </h1>

      {/* Progress bar */}
      <div className="w-48 h-0.5 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-100"
          style={{
            width: `${progress}%`,
            background: `linear-gradient(90deg, hsl(var(--saffron)), hsl(var(--gold)))`,
          }}
        />
      </div>

      <p className="mt-3 text-xs tracking-[0.3em] text-muted-foreground uppercase font-body">
        {progress < 100 ? "Loading..." : "Welcome"}
      </p>
    </div>
  );
};

export default LoadingScreen;
