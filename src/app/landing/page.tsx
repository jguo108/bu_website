"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

// Deterministic pseudo-random so server and client render identically (no
// hydration mismatch) and we never call an impure function during render.
const seeded = (n: number) => {
  const x = Math.sin(n * 12.9898) * 43758.5453;
  return x - Math.floor(x);
};

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  width: seeded(i + 1) * 3 + 1 + "px",
  height: seeded(i + 2) * 3 + 1 + "px",
  top: seeded(i + 3) * 100 + "%",
  left: seeded(i + 4) * 100 + "%",
  animation: `star-pulse ${seeded(i + 5) * 3 + 2}s infinite ease-in-out ${seeded(i + 6) * 2}s, float ${seeded(i + 7) * 4 + 4}s infinite ease-in-out`,
}));

export default function LandingPage() {
  const [phase, setPhase] = useState<"shimmer" | "dissolve" | "text">("shimmer");
  const { language, t } = useLanguage();

  useEffect(() => {
    // Sequence the animations
    const dissolveTimer = setTimeout(() => setPhase("dissolve"), 3000);
    const textTimer = setTimeout(() => setPhase("text"), 4500);

    return () => {
      clearTimeout(dissolveTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <main className="relative w-full h-screen bg-[#1d1c17] overflow-hidden flex items-center justify-center font-['Work_Sans']">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes star-pulse {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-shimmer {
          background: linear-gradient(
            90deg,
            rgba(255, 117, 31, 0.4) 0%,
            rgba(255, 255, 255, 1) 25%,
            rgba(255, 117, 31, 1) 50%,
            rgba(255, 255, 255, 1) 75%,
            rgba(255, 117, 31, 0.4) 100%
          );
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        .infinity-dissolve {
          transition: all 1.5s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          filter: blur(24px);
          transform: scale(1.5);
        }
        .infinity-visible {
          transition: all 1.5s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 1;
          filter: blur(0px);
          transform: scale(1);
        }
        .text-reveal {
          transition: all 2s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 1;
          transform: translateY(0);
          filter: blur(0px);
        }
        .text-hidden {
          opacity: 0;
          transform: translateY(20px);
          filter: blur(10px);
        }
      `}} />

      {/* Floating particles background for "starlight" effect */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#FF751F]"
            style={{
              width: p.width,
              height: p.height,
              top: p.top,
              left: p.left,
              animation: p.animation,
              boxShadow: '0 0 8px 2px rgba(255, 117, 31, 0.4)'
            }}
          />
        ))}
      </div>

      {/* Infinity Symbol */}
      <div 
        className={`absolute z-10 flex items-center justify-center w-full h-full ${
          phase === "text" ? "infinity-dissolve" : phase === "dissolve" ? "infinity-dissolve" : "infinity-visible"
        }`}
      >
        <div className="text-[180px] md:text-[280px] font-light leading-none animate-shimmer select-none">
          ∞
        </div>
      </div>

      {/* Brand Reveal */}
      <div 
        className={`absolute z-20 flex flex-col items-center justify-center ${
          phase === "text" ? "text-reveal" : "text-hidden"
        }`}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-[#fef9f0] uppercase">
          Boundary<span className="text-[#FF751F]">Unknown</span>
        </h1>
        <p className="mt-6 text-[#c2c9b3] tracking-[0.3em] text-xs md:text-sm uppercase max-w-md text-center leading-loose">
          {t("footer.desc").split("\n").join(" ")}
        </p>
        
        <Link 
          href="/"
          className={`mt-12 px-8 py-3 border border-[#FF751F] text-[#FF751F] rounded-full uppercase tracking-widest text-xs font-semibold hover:bg-[#FF751F] hover:text-white transition-all duration-500 delay-1000 ${
            phase === "text" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {language === "zh" ? "进入学院" : "Enter Academy"}
        </Link>
      </div>

    </main>
  );
}

