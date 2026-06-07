"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MaterialIcon } from "@/components/MaterialIcon";
import { InteractiveCanvas } from "@/components/InteractiveCanvas";
import { useRegister } from "@/components/RegisterProvider";
import { images } from "@/lib/images";

// Custom scroll reveal hook
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px", // triggers slightly before entering viewport fully
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, []);

  return {
    ref,
    className: `transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) transform ${
      isRevealed ? "opacity-100 translate-y-0 filter blur-0" : "opacity-0 translate-y-12 filter blur-sm"
    }`,
  };
}

export function LandingPage() {
  const SHOW_PROJECTS = false;
  const { openRegister } = useRegister();
  const heroReveal = useScrollReveal();
  const featuresReveal = useScrollReveal();
  const programsReveal = useScrollReveal();
  const projectsReveal = useScrollReveal();
  const ctaReveal = useScrollReveal();

  const handleScrollToPrograms = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById("programs-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#070707] text-[#fef9f0] antialiased selection:bg-[#FF751F] selection:text-white relative overflow-x-hidden font-sans">
      
      {/* Glow Effects in Background */}
      <div className="absolute top-[15%] left-[50%] -translate-x-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[#FF751F]/5 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[50%] left-[5%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] bg-[#D06A4C]/3 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[75%] right-[5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-[#FF751F]/4 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Interactive Background Canvas */}
      <InteractiveCanvas />

      {/* Header */}
      <Header variant="dark" />

      <main className="relative z-10 max-w-screen-2xl mx-auto px-4 md:px-8 py-12">
        
        {/* HERO SECTION */}
        <section className="min-h-[75vh] flex flex-col justify-center items-center text-center py-12 md:py-24">
          <div ref={heroReveal.ref} className={`${heroReveal.className} max-w-4xl flex flex-col items-center`}>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white uppercase max-w-3xl mb-8">
              Beyond the<br />
              <span className="bg-gradient-to-r from-[#FF751F] via-[#ff934f] to-[#fef9f0] bg-clip-text text-transparent">
                Boundaries
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-body-lg text-zinc-400 max-w-2xl leading-relaxed mb-12">
              Where curious minds bring a raw idea, learn to think like startup founders, and leverage cutting-edge{" "}
              <span className="text-white font-semibold">AI systems</span> to architect real, working products.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
              <button
                type="button"
                onClick={openRegister}
                className="w-full sm:w-auto bg-[#FF751F] text-white font-semibold tracking-tight px-10 py-4 hover:bg-[#e05f10] transition-all hover:scale-105 duration-300 shadow-lg shadow-[#FF751F]/15 cursor-pointer uppercase text-xs"
              >
                APPLY / REGISTER
              </button>
              <button
                type="button"
                onClick={handleScrollToPrograms}
                className="w-full sm:w-auto border border-zinc-700 bg-zinc-950/40 backdrop-blur-md text-white font-semibold tracking-tight px-10 py-4 hover:bg-zinc-900/60 hover:border-zinc-500 transition-all duration-300 cursor-pointer uppercase text-xs"
              >
                EXPLORE PROGRAMS
              </button>
            </div>
          </div>
        </section>

        {/* CORE METHODOLOGY HIGHLIGHTS */}
        <section className="py-12 md:py-20 border-t border-zinc-900 bg-zinc-950/20 backdrop-blur-sm rounded-[32px] px-6 md:px-12 mb-24">
          <div ref={featuresReveal.ref} className={featuresReveal.className}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              
              <div className="flex flex-col gap-4 group">
                <span className="text-4xl font-mono font-extrabold text-zinc-800 group-hover:text-[#FF751F] transition-colors duration-300">
                  01
                </span>
                <h3 className="text-xl font-bold uppercase text-white tracking-tight">
                  Founder Mindset
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Identify systemic challenges, perform rapid target user validation, analyze metrics, and design dynamic feedback loops.
                </p>
              </div>

              <div className="flex flex-col gap-4 group">
                <span className="text-4xl font-mono font-extrabold text-zinc-800 group-hover:text-[#FF751F] transition-colors duration-300">
                  02
                </span>
                <h3 className="text-xl font-bold uppercase text-white tracking-tight">
                  AI-First Development
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Stay in the driver&apos;s seat. Harness the power of generative AI, prompt engineering, and LLM orchestration to translate thoughts into codebase.
                </p>
              </div>

              <div className="flex flex-col gap-4 group">
                <span className="text-4xl font-mono font-extrabold text-zinc-800 group-hover:text-[#FF751F] transition-colors duration-300">
                  03
                </span>
                <h3 className="text-xl font-bold uppercase text-white tracking-tight">
                  Working Prototypes
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  No empty theories. Students assemble, iterate, and publish fully functional web architectures or robotics MVPs ready to showcase.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* PROGRAMS SECTION */}
        <section id="programs-section" className="py-12 md:py-20 mb-24">
          <div ref={programsReveal.ref} className={programsReveal.className}>
            
            {/* Section Header */}
            <div className="mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                Our Programs
              </h2>
            </div>

            {/* Twin Program Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              
              {/* Card 1: Innovathon Camps */}
              <div className="bg-zinc-950/40 border border-zinc-900 hover:border-zinc-800 backdrop-blur-lg rounded-[32px] p-8 md:p-12 flex flex-col justify-between group transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF751F]/5 blur-[64px] rounded-full group-hover:bg-[#FF751F]/10 transition-colors duration-500" />
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#FF751F] border border-[#FF751F]/30 px-3 py-1 rounded-full bg-[#FF751F]/5">
                      Intensive Sprite
                    </span>
                    <span className="text-zinc-500 font-mono text-sm uppercase">
                      6 Days
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black uppercase text-white mb-6">
                    Innovathon Camps
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-lg">
                    In six fast-paced days, kids form teams, think like founders, write prompts to build product MVPs, and present live pitches on Demo Day to professional judges.
                  </p>
                </div>

                <div className="pt-6 border-t border-zinc-900 flex justify-between items-center">
                  <Link
                    href="/programs/camps"
                    className="inline-flex items-center gap-2 group/link text-xs font-bold uppercase tracking-widest text-white hover:text-[#FF751F] transition-colors"
                  >
                    LEARN MORE
                    <MaterialIcon
                      name="arrow_forward"
                      className="text-xs group-hover/link:translate-x-1.5 transition-transform"
                    />
                  </Link>
                </div>
              </div>

              {/* Card 2: Incubator */}
              <div className="bg-zinc-950/40 border border-zinc-900 hover:border-zinc-800 backdrop-blur-lg rounded-[32px] p-8 md:p-12 flex flex-col justify-between group transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#D06A4C]/3 blur-[64px] rounded-full group-hover:bg-[#D06A4C]/8 transition-colors duration-500" />
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#FF751F] border border-[#FF751F]/30 px-3 py-1 rounded-full bg-[#FF751F]/5">
                      Long-Term Track
                    </span>
                    <span className="text-zinc-500 font-mono text-sm uppercase">
                      Semester
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black uppercase text-white mb-6">
                    Incubator Lab
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-lg">
                    For builders who seek complete validation. We take raw tech prototypes and guide them through customer interviews, data structures, deployment, and seed iterations.
                  </p>
                </div>

                <div className="pt-6 border-t border-zinc-900 flex justify-between items-center">
                  <Link
                    href="/programs/incubator"
                    className="inline-flex items-center gap-2 group/link text-xs font-bold uppercase tracking-widest text-white hover:text-[#FF751F] transition-colors"
                  >
                    LEARN MORE
                    <MaterialIcon
                      name="arrow_forward"
                      className="text-xs group-hover/link:translate-x-1.5 transition-transform"
                    />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* STUDENT PROJECTS */}
        {SHOW_PROJECTS && (
          <section className="py-12 md:py-20 mb-24">
            <div ref={projectsReveal.ref} className={projectsReveal.className}>
              
              {/* Header */}
              <div className="flex flex-col items-center text-center gap-4 mb-16">
                <div>
                  <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                    Built by Students
                  </h2>
                </div>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 group/link text-xs font-bold uppercase tracking-widest text-[#FF751F] hover:text-white transition-colors"
                >
                  View all projects
                  <MaterialIcon
                    name="arrow_forward"
                    className="text-xs group-hover/link:translate-x-1.5 transition-transform"
                  />
                </Link>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Project 1 */}
                <Link href="/projects" className="group flex flex-col gap-4">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] border border-zinc-900 bg-zinc-950">
                    <Image
                      alt="Auto-Farm Intelligence"
                      src={images.project1}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[800ms] ease-out brightness-90"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                  </div>
                  <div className="flex flex-col gap-1 px-2">
                    <span className="text-[10px] text-[#FF751F] uppercase tracking-widest font-mono font-bold">
                      AI & Robotics
                    </span>
                    <h4 className="text-xl font-bold uppercase text-white group-hover:text-[#FF751F] transition-colors duration-300">
                      Auto-Farm Intelligence
                    </h4>
                  </div>
                </Link>

                {/* Project 2 */}
                <Link href="/projects" className="group flex flex-col gap-4">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] border border-zinc-900 bg-zinc-950">
                    <Image
                      alt="StudySync Platform"
                      src={images.project2}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[800ms] ease-out brightness-90"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                  </div>
                  <div className="flex flex-col gap-1 px-2">
                    <span className="text-[10px] text-[#FF751F] uppercase tracking-widest font-mono font-bold">
                      SaaS & Web
                    </span>
                    <h4 className="text-xl font-bold uppercase text-white group-hover:text-[#FF751F] transition-colors duration-300">
                      StudySync Platform
                    </h4>
                  </div>
                </Link>

                {/* Project 3 */}
                <Link href="/projects" className="group flex flex-col gap-4">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] border border-zinc-900 bg-zinc-950">
                    <Image
                      alt="KidCoin Wallet"
                      src={images.project3}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[800ms] ease-out brightness-90"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                  </div>
                  <div className="flex flex-col gap-1 px-2">
                    <span className="text-[10px] text-[#FF751F] uppercase tracking-widest font-mono font-bold">
                      Fintech
                    </span>
                    <h4 className="text-xl font-bold uppercase text-white group-hover:text-[#FF751F] transition-colors duration-300">
                      KidCoin Wallet
                    </h4>
                  </div>
                </Link>

              </div>
            </div>
          </section>
        )}

        {/* MISSION + REGISTER PROMPT */}
        <section className="py-12 md:py-20 text-center">
          <div ref={ctaReveal.ref} className={`${ctaReveal.className} max-w-4xl mx-auto`}>
            <div className="bg-zinc-950/40 border border-zinc-900/80 rounded-[48px] p-8 md:p-20 relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[30%] bg-[#FF751F]/5 blur-[64px] rounded-full" />
              
              <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-8 leading-tight">
                Empowering the next generation of founders to build with AI.
              </h2>
              
              <p className="text-zinc-400 text-sm md:text-base mb-12 max-w-xl mx-auto leading-relaxed">
                We believe that the best way to learn is by doing. BoundaryUnknown provides the space, mentorship, and cloud compute nodes for young minds to transform curiosity into ventures.
              </p>

              <button
                type="button"
                onClick={openRegister}
                className="bg-[#FF751F] text-white font-semibold tracking-tight px-12 py-4 hover:bg-[#e05f10] transition-all hover:scale-105 duration-300 shadow-lg shadow-[#FF751F]/15 cursor-pointer uppercase text-xs"
              >
                Start Your Proposal
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer variant="dark" />

    </div>
  );
}
