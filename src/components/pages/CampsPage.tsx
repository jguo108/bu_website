"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MaterialIcon } from "@/components/MaterialIcon";
import { images } from "@/lib/images";

const objectives = [
  {
    icon: "insights",
    title: "Think & Act Like an Entrepreneur",
    body: "Kids don't just learn about entrepreneurship — they practice it. They identify real problems, make decisions under uncertainty, take smart risks, and iterate fast. The mindset of a founder is built through doing.",
  },
  {
    icon: "smart_toy",
    title: "AI Literacy - Use it, Don't Fear it",
    body: "AI is the defining tool of their generation. Kids learn to direct AI with intention — turning vague ideas into working products. They understand what AI can and can't do, how to prompt it effectively, and how to stay in the driver's seat.",
  },
  {
    icon: "hub",
    title: "System Thinking",
    body: "Great entrepreneurs see the whole picture. Kids learn to map how pieces connect — users, problems, solutions, feedback loops — and understand why products succeed or fail as systems, not just features.",
  },
  {
    icon: "co_present",
    title: "Communication & Pitch Confidence",
    body: "An idea is only as powerful as your ability to share it. Kids learn to distill their work into a clear, compelling story — and present it live on Demo Day in front of a real audience.",
  },
  {
    icon: "groups",
    title: "Collaboration & Resilience",
    body: "Kids work in teams, navigate disagreement, hit walls, and find ways through. They learn that failure is a data point, not a verdict.",
  },
];

export function CampsPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Header variant="white" />
      <main className="mt-24">
        <section className="max-w-screen-xl mx-auto px-4 md:px-gutter py-xxl flex flex-col items-center text-center">
          <h1 className="text-[40px] md:text-[64px] font-semibold leading-tight text-inverse-surface max-w-4xl mb-md">
            Innovathon: <span className="text-primary font-black">Future Systems Design</span>
          </h1>
          <p className="text-body-lg text-secondary max-w-2xl mb-xl">
            A rigorous six-day intensive exploring the intersection of algorithmic
            thinking and entrepreneurial frameworks. Designed for curious minds ready
            to architect the next century.
          </p>
          <Link
            href="/programs/camps/innovathon-2026"
            className="inline-flex items-center gap-xs bg-stone-900 text-white hover:bg-stone-800 px-8 py-3 rounded-full text-md font-bold tracking-tight transition-all active:scale-95 shadow-md hover:shadow-lg"
          >
            View Details <MaterialIcon name="arrow_forward" className="text-lg" />
          </Link>
        </section>

        <section className="bg-white border-y border-outline-variant py-xxl">
          <div className="max-w-screen-xl mx-auto px-4 md:px-gutter grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
            <div className="space-y-md">
              <h2 className="text-display-md text-inverse-surface">Developing Future Founders</h2>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Our curriculum is designed to build the habits of system architects and tech founders.
                Through hands-on challenges, we cultivate skills that last a lifetime.
              </p>
              <div className="knowledge-block-thin pl-md">
                <p className="text-label-md text-primary uppercase tracking-widest mb-xs">
                  Systems Mindset
                </p>
                <p className="text-body-sm text-secondary italic">
                  &quot;The best way to predict the future is to build it. We give kids the tools and agency to become architects, not just consumers, of technology.&quot;
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-full overflow-hidden border-8 border-surface-container-high">
              <Image
                src={images.campsHero}
                alt="Camp venue"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <section className="max-w-screen-xl mx-auto px-4 md:px-gutter py-xxl">
          <div className="mb-xl">
            <h2 className="text-display-md text-inverse-surface">
              Core Learning Objectives
            </h2>
            <div className="h-1 w-24 bg-primary mt-sm" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-stretch">
            <div className="lg:col-span-5 flex flex-col gap-sm justify-center">
              {objectives.map((item, i) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`text-left p-md rounded-2xl border transition-all duration-300 flex items-center gap-md cursor-pointer ${
                    activeIndex === i
                      ? "bg-stone-900 border-primary text-white shadow-md scale-[1.02]"
                      : "bg-white border-outline-variant/30 text-stone-700 hover:bg-stone-50 hover:border-outline-variant hover:scale-[1.01]"
                  }`}
                >
                  <span className={`font-mono text-label-md shrink-0 ${activeIndex === i ? "text-primary" : "text-stone-400"}`}>
                    0{i + 1}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${activeIndex === i ? "bg-primary/20 text-primary border border-primary/30" : "bg-stone-100 text-stone-600"}`}>
                    <MaterialIcon name={item.icon} className="text-xl font-semibold" />
                  </div>
                  <span className="font-semibold text-base tracking-tight leading-tight">{item.title}</span>
                </button>
              ))}
            </div>

            <div className="lg:col-span-7 bg-stone-950 text-stone-50 p-xl rounded-[32px] relative overflow-hidden flex flex-col justify-center min-h-[400px] border border-stone-800 shadow-xl">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/15 rounded-full blur-[80px] pointer-events-none animate-pulse-glow" />
              
              <div key={activeIndex} className="animate-fade-in-up flex flex-col items-center text-center gap-md relative z-10 px-md">
                <div className="w-20 h-20 bg-primary/20 border border-primary/40 rounded-full flex items-center justify-center mb-sm shadow-[0_0_40px_rgba(208,106,76,0.25)]">
                  <MaterialIcon name={objectives[activeIndex].icon} className="text-primary text-4xl" />
                </div>
                <span className="text-label-md text-primary font-mono tracking-widest">
                  Objective 0{activeIndex + 1}
                </span>
                <h3 className="text-display-md text-white font-bold leading-tight max-w-lg">
                  {objectives[activeIndex].title}
                </h3>
                <p className="text-body-lg text-stone-300 leading-relaxed max-w-xl mt-sm">
                  {objectives[activeIndex].body}
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
