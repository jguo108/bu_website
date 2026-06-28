"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MaterialIcon } from "@/components/MaterialIcon";
import { InteractiveCanvas } from "@/components/InteractiveCanvas";
import { images } from "@/lib/images";
import { useLanguage } from "@/lib/LanguageContext";

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

const content = {
  en: {
    heroTitle: (
      <>
        Boundary{" "}
        <span className="bg-gradient-to-r from-[#FF751F] via-[#ff934f] to-[#fef9f0] bg-clip-text text-transparent">
          Unknown
        </span>
      </>
    ),
    heroSub: (
      <span className="italic">
        <span className="block">As the &ldquo;connector,&rdquo; Boundary Unknown is breaking boundaries—linking children with the adult world to build a vibrant community of innovation and entrepreneurship.</span>
        <span className="block mt-4">Here, children leave not just with a project, but with the conviction: &ldquo;I, too, can create value for this world.&rdquo;</span>
        <span className="block mt-4">The boundary is unknown—and worth exploring.</span>
      </span>
    ),
    cta: "EXPLORE PROGRAMS",
    formula: (
      <>
        <span className="italic">Creation</span><sup className="text-[0.5em] align-super font-bold text-[#FF751F] [-webkit-text-fill-color:#FF751F]">4P</sup> × (Business + Tech) ={" "}
        <span className="inline-block text-[1.3em] align-middle px-1">∞</span> Vitality
      </>
    ),
    philosophyTitle: (
      <>
        Boundary Unknown
        <span className="bg-gradient-to-r from-[#FF751F] via-[#ff934f] to-[#fef9f0] bg-clip-text text-transparent">
          {" "}3H Mindset Theory
        </span>
      </>
    ),
    f1Title: "Heart (Empathy)",
    f1Desc: "Start from empathy. Step into others' situations, feel the real pain points, and make sure we're solving the problems that truly matter to people.",
    f2Title: "Head (Methodology)",
    f2Desc: "Think with a systematic methodology. Build clear analytical frameworks and sound judgment so that every decision follows a method.",
    f3Title: "Hand (Execution)",
    f3Desc: "Turn ideas into reality with strong execution. Build hands-on, iterate fast, and keep acting—closing in on the real world through practice.",
    programsTitle: "Our Programs",
    campsTag: "Hackathon Bootcamp",
    campsDuration: "6 Days",
    campsTitle: "Innovathon Camp",
    campsDesc: "Innovathon = Innovation + Hackathon—a hackathon-style summer camp built around imagination and creation. In six intense days, kids form teams, think like founders, start from real-life pain points, build a product MVP through vibe coding, and pitch live to professional judges on Demo Day.",
    learnMore: "LEARN MORE",
    incubatorTag: "From 0 to 1",
    incubatorDuration: "Project-Based",
    incubatorTitle: "Incubator Lab",
    incubatorDesc: "How does an MVP become a real “product”—and then a business? The Incubator is for partners ready to iterate their product further and pursue real commercial potential.",
    academyTag: "miniMBA",
    academyDuration: "Systematic Learning",
    academyTitle: "Founders Academy",
    academyDesc: "A course that systematically builds entrepreneurial thinking and AI engineering thinking. Starting from a real idea, kids use entrepreneurial thinking to clarify value and AI engineering thinking to make it real—growing into super individuals of the AI era.",
    missionTitle: "No Creation, No Youth.",
  },
  zh: {
    heroTitle: (
      <>
        未知
        <span className="bg-gradient-to-r from-[#FF751F] via-[#ff934f] to-[#fef9f0] bg-clip-text text-transparent">
          边界
        </span>
      </>
    ),
    heroSub: (
      <span className="italic">
        <span className="block whitespace-nowrap">作为「链接者」，未知边界正打破边界，连接孩子与成人世界，共同构建一个充满活力的创新创业社区。</span>
        <span className="block mt-4 whitespace-nowrap">在这里，孩子们带走的不只是一件作品，更是一份「我也能为世界创造价值」的底气。</span>
        <span className="block mt-4 whitespace-nowrap">边界未知，期待探索。</span>
      </span>
    ),
    cta: "探索项目课程",
    formula: (
      <>
        <span className="italic">创造</span><sup className="text-[0.5em] align-super font-bold text-[#FF751F] [-webkit-text-fill-color:#FF751F]">4P</sup> ×（商业 ＋ 科技）={" "}
        <span className="inline-block text-[1.3em] align-middle px-1">∞</span> 生命力
      </>
    ),
    philosophyTitle: (
      <>
        未知边界
        <span className="bg-gradient-to-r from-[#FF751F] via-[#ff934f] to-[#fef9f0] bg-clip-text text-transparent">
          「3H创业思维理论」
        </span>
      </>
    ),
    f1Title: "Heart「心」",
    f1Desc: "以同理心出发，真正走进他人的处境，感受真实的痛点，确保我们解决的是对人真正重要的问题。",
    f2Title: "Head「脑」",
    f2Desc: "用系统的方法论思考问题，建立清晰的分析框架与判断逻辑，让每一个决策都有章可循。",
    f3Title: "Hand「手」",
    f3Desc: "以强大的执行力把想法落地，动手构建、快速迭代、持续行动，在实践中不断逼近真实世界。",
    programsTitle: "项目课程",
    campsTag: "黑客松式集训营",
    campsDuration: "6 天",
    campsTitle: "Innovathon 少年创客松",
    campsDesc: "Innovathon=Innovation + Hackathon。以想象、创新为主题的黑客松式夏令营。在节奏紧凑的 6 天内，孩子们组建团队、像创始人一样思考、从真实生活中的痛点出发，通过vibe coding构建产品 MVP，并在 Demo Day 向专业评审进行现场路演。",
    learnMore: "了解更多",
    incubatorTag: "From 0 to 1",
    incubatorDuration: "项目制",
    incubatorTitle: "孵化实验室",
    incubatorDesc: "从MVP，如何变成一个真正的「产品」？又如何实现商业化？孵化营正为想进一步迭代产品、寻求真正商业可能性的伙伴。",
    academyTag: "miniMBA",
    academyDuration: "系统性学习",
    academyTitle: "创始人学院",
    academyDesc: "这是一门系统培养创业思维与AI工程思维的课程。孩子从一个真实的想法出发，用创业思维想清楚价值，用 AI 工程思维把价值做出来——培养孩子成为AI时代的超级个体。",
    missionTitle: (
      <>
        <span className="inline-block">无创造，</span>
        <span className="inline-block">不少年。</span>
      </>
    ),
  }
};

export function LandingPage() {
  const SHOW_PROJECTS = false;
  const { language } = useLanguage();
  const t = content[language];

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
              {t.heroTitle}
            </h1>

            {/* Subtext */}
            <p className="text-body-lg text-zinc-400 w-full leading-relaxed mb-12 text-center">
              {t.heroSub}
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
              <button
                type="button"
                onClick={handleScrollToPrograms}
                className="w-full sm:w-auto bg-[#FF751F] text-white font-semibold tracking-tight px-10 py-4 hover:bg-[#e05f10] transition-all hover:scale-105 duration-300 shadow-lg shadow-[#FF751F]/15 cursor-pointer uppercase text-xs"
              >
                {t.cta}
              </button>
            </div>
          </div>
        </section>

        {/* CREATION FORMULA */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes formula-shimmer {
            0%, 100% { background-position: 0% center; opacity: 0.8; }
            50% { background-position: 200% center; opacity: 1; }
          }
          .formula-shimmer {
            background: linear-gradient(90deg, #ffffff 0%, #FF751F 25%, #ffffff 50%, #FF751F 75%, #ffffff 100%);
            background-size: 200% auto;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
            animation: formula-shimmer 3.5s ease-in-out infinite;
          }
        `}} />
        <section className="flex justify-center py-12 md:py-20 mb-12">
          <div className="formula-shimmer text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-center leading-tight">
            {t.formula}
          </div>
        </section>

        {/* CORE METHODOLOGY HIGHLIGHTS */}
        <section className="py-12 md:py-20 border-t border-zinc-900 bg-zinc-950/20 backdrop-blur-sm rounded-[32px] px-6 md:px-12 mb-24">
          <div ref={featuresReveal.ref} className={featuresReveal.className}>
            <div className="mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                {t.philosophyTitle}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              
              {/* Card 1: Heart */}
              <div className="flex flex-col gap-6 p-8 rounded-[24px] bg-zinc-950/40 border border-zinc-900/80 hover:border-[#D06A4C]/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group">
                {/* Glow Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D06A4C]/5 blur-[48px] rounded-full group-hover:bg-[#D06A4C]/10 transition-colors duration-500" />
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#D06A4C]/10 flex items-center justify-center border border-[#D06A4C]/20 group-hover:border-[#D06A4C]/40 transition-colors">
                      <MaterialIcon name="favorite" className="text-[#D06A4C] text-2xl transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <h3 className="text-xl font-bold uppercase text-white tracking-tight transition-colors duration-300 group-hover:text-[#D06A4C]">
                      {t.f1Title}
                    </h3>
                  </div>
                  <span className="text-4xl font-mono font-black text-zinc-800/60 group-hover:text-[#D06A4C] transition-colors duration-500">
                    01
                  </span>
                </div>
                
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {t.f1Desc}
                </p>
              </div>

              {/* Card 2: Head */}
              <div className="flex flex-col gap-6 p-8 rounded-[24px] bg-zinc-950/40 border border-zinc-900/80 hover:border-[#2E8268]/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group">
                {/* Glow Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#2E8268]/5 blur-[48px] rounded-full group-hover:bg-[#2E8268]/10 transition-colors duration-500" />
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#2E8268]/10 flex items-center justify-center border border-[#2E8268]/20 group-hover:border-[#2E8268]/40 transition-colors">
                      <MaterialIcon name="psychology" className="text-[#2E8268] text-2xl transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <h3 className="text-xl font-bold uppercase text-white tracking-tight transition-colors duration-300 group-hover:text-[#2E8268]">
                      {t.f2Title}
                    </h3>
                  </div>
                  <span className="text-4xl font-mono font-black text-zinc-800/60 group-hover:text-[#2E8268] transition-colors duration-500">
                    02
                  </span>
                </div>
                
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {t.f2Desc}
                </p>
              </div>

              {/* Card 3: Hand */}
              <div className="flex flex-col gap-6 p-8 rounded-[24px] bg-zinc-950/40 border border-zinc-900/80 hover:border-[#3D7CB5]/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group">
                {/* Glow Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#3D7CB5]/5 blur-[48px] rounded-full group-hover:bg-[#3D7CB5]/10 transition-colors duration-500" />
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#3D7CB5]/10 flex items-center justify-center border border-[#3D7CB5]/20 group-hover:border-[#3D7CB5]/40 transition-colors">
                      <MaterialIcon name="front_hand" className="text-[#3D7CB5] text-2xl transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <h3 className="text-xl font-bold uppercase text-white tracking-tight transition-colors duration-300 group-hover:text-[#3D7CB5]">
                      {t.f3Title}
                    </h3>
                  </div>
                  <span className="text-4xl font-mono font-black text-zinc-800/60 group-hover:text-[#3D7CB5] transition-colors duration-500">
                    03
                  </span>
                </div>
                
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {t.f3Desc}
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
                {t.programsTitle}
              </h2>
            </div>

            {/* Program Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Card 1: Innovathon Camps */}
              <div className="bg-zinc-950/40 border border-zinc-900 hover:border-zinc-800 backdrop-blur-lg rounded-[32px] p-6 md:p-8 xl:p-10 flex flex-col justify-between group transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF751F]/5 blur-[64px] rounded-full group-hover:bg-[#FF751F]/10 transition-colors duration-500" />
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#FF751F] border border-[#FF751F]/30 px-3 py-1 rounded-full bg-[#FF751F]/5">
                      {t.campsTag}
                    </span>
                    <span className="text-zinc-500 font-mono text-sm uppercase">
                      {t.campsDuration}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-xl xl:text-2xl font-black uppercase text-[#FF751F] mb-6 tracking-tight whitespace-nowrap">
                    {t.campsTitle}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-lg">
                    {t.campsDesc}
                  </p>
                </div>

                <div className="pt-6 border-t border-zinc-900 flex justify-between items-center">
                  <Link
                    href="/programs/camps"
                    className="inline-flex items-center gap-2 group/link text-xs font-bold uppercase tracking-widest text-white hover:text-[#FF751F] transition-colors"
                  >
                    {t.learnMore}
                    <MaterialIcon
                      name="arrow_forward"
                      className="text-xs group-hover/link:translate-x-1.5 transition-transform"
                    />
                  </Link>
                </div>
              </div>

              {/* Card 2: Incubator */}
              <div className="bg-zinc-950/40 border border-zinc-900 hover:border-zinc-800 backdrop-blur-lg rounded-[32px] p-6 md:p-8 xl:p-10 flex flex-col justify-between group transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#D06A4C]/3 blur-[64px] rounded-full group-hover:bg-[#D06A4C]/8 transition-colors duration-500" />
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#FF751F] border border-[#FF751F]/30 px-3 py-1 rounded-full bg-[#FF751F]/5">
                      {t.incubatorTag}
                    </span>
                    <span className="text-zinc-500 font-mono text-sm uppercase">
                      {t.incubatorDuration}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-xl xl:text-2xl font-black uppercase text-[#FF751F] mb-6 tracking-tight whitespace-nowrap">
                    {t.incubatorTitle}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-lg">
                    {t.incubatorDesc}
                  </p>
                </div>

                <div className="pt-6 border-t border-zinc-900 flex justify-between items-center">
                  <Link
                    href="/programs/incubator"
                    className="inline-flex items-center gap-2 group/link text-xs font-bold uppercase tracking-widest text-white hover:text-[#FF751F] transition-colors"
                  >
                    {t.learnMore}
                    <MaterialIcon
                      name="arrow_forward"
                      className="text-xs group-hover/link:translate-x-1.5 transition-transform"
                    />
                  </Link>
                </div>
              </div>

              {/* Card 3: AI Founders Academy */}
              <div className="bg-zinc-950/40 border border-zinc-900 hover:border-zinc-800 backdrop-blur-lg rounded-[32px] p-6 md:p-8 xl:p-10 flex flex-col justify-between group transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF751F]/4 blur-[64px] rounded-full group-hover:bg-[#FF751F]/8 transition-colors duration-500" />
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#FF751F] border border-[#FF751F]/30 px-3 py-1 rounded-full bg-[#FF751F]/5">
                      {t.academyTag}
                    </span>
                    <span className="text-zinc-500 font-mono text-sm uppercase">
                      {t.academyDuration}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-xl xl:text-2xl font-black uppercase text-[#FF751F] mb-6 tracking-tight whitespace-nowrap">
                    {t.academyTitle}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-lg">
                    {t.academyDesc}
                  </p>
                </div>

                <div className="pt-6 border-t border-zinc-900 flex justify-between items-center">
                  <Link
                    href="/programs/academy"
                    className="inline-flex items-center gap-2 group/link text-xs font-bold uppercase tracking-widest text-white hover:text-[#FF751F] transition-colors"
                  >
                    {t.learnMore}
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

        {/* MISSION + REGISTER PROMPT */}
        <section className="py-12 md:py-20 text-center">
          <div ref={ctaReveal.ref} className={`${ctaReveal.className} max-w-5xl mx-auto`}>
            <div className="bg-zinc-950/40 border border-zinc-900/80 rounded-[48px] p-8 md:p-20 relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[30%] bg-[#FF751F]/5 blur-[64px] rounded-full" />
              
              <h2 className="formula-shimmer text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
                {t.missionTitle}
              </h2>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer variant="dark" />

    </div>
  );
}

