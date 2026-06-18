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
        Beyond the{" "}
        <span className="bg-gradient-to-r from-[#FF751F] via-[#ff934f] to-[#fef9f0] bg-clip-text text-transparent">
          Boundaries
        </span>
      </>
    ),
    heroSub: (
      <>
        Where curious minds bring a raw idea, learn to think like startup founders, and leverage cutting-edge{" "}
        <span className="text-white font-semibold">AI systems</span> to architect real, working products.
      </>
    ),
    cta: "EXPLORE PROGRAMS",
    philosophyTitle: "Philosophy",
    f1Title: "Founder Mindset",
    f1Desc: "Identify systemic challenges, perform rapid target user validation, analyze metrics, and design dynamic feedback loops.",
    f2Title: "AI-First Development",
    f2Desc: "Stay in the driver's seat. Harness the power of generative AI, prompt engineering, and LLM orchestration to translate thoughts into codebase.",
    f3Title: "Working Prototypes",
    f3Desc: "No empty theories. Students assemble, iterate, and publish fully functional web architectures or robotics MVPs ready to showcase.",
    programsTitle: "Our Programs",
    campsTag: "Intensive Sprint",
    campsDuration: "6 Days",
    campsTitle: "Innovathon Camps",
    campsDesc: "In six fast-paced days, kids form teams, think like founders, write prompts to build product MVPs, and present live pitches on Demo Day to professional judges.",
    learnMore: "LEARN MORE",
    incubatorTag: "Long-Term Track",
    incubatorDuration: "Semester",
    incubatorTitle: "Incubator Lab",
    incubatorDesc: "For builders who seek complete validation. We take raw tech prototypes and guide them through customer interviews, data structures, deployment, and seed iterations.",
    academyTag: "Full-Year Track",
    academyDuration: "30 Weeks / 2 Semesters",
    academyTitle: "Founders Academy",
    academyDesc: "A comprehensive 30-week journey spanned across two semesters, teaching about AI and entrepreneurship. Students learn advanced AI models, design systems, and launch functional startups.",
    missionTitle: "Dare to Think, Dare to Act.",
    missionDesc: "We believe that the best way to learn is by doing. BoundaryUnknown provides the space, mentorship, and cloud compute nodes for young minds to transform curiosity into ventures."
  },
  zh: {
    heroTitle: (
      <>
        超越
        <span className="bg-gradient-to-r from-[#FF751F] via-[#ff934f] to-[#fef9f0] bg-clip-text text-transparent">
          边界
        </span>
      </>
    ),
    heroSub: (
      <>
        在这里，好奇的心灵带着粗糙的创意而来，学习像初创创始人一样思考，并利用前沿的{" "}
        <span className="text-white font-semibold">AI 系统</span> 架构真实、可运行的产品。
      </>
    ),
    cta: "探索项目课程",
    philosophyTitle: "教学理念",
    f1Title: "创始人思维",
    f1Desc: "识别系统性挑战，进行快速的真实用户验证，分析商业数据指标，并设计动态的反馈闭环。",
    f2Title: "AI 优先开发",
    f2Desc: "保持主导地位。利用生成式 AI、提示词工程和 LLM 编排，将头脑中的想法转化为真正的代码库。",
    f3Title: "可运行的原型",
    f3Desc: "拒绝空谈理论。学员们亲自动手组装、迭代并发布功能完备的 Web 架构或机器人 MVP 原型。",
    programsTitle: "项目课程",
    campsTag: "短期冲刺营",
    campsDuration: "6 天",
    campsTitle: "Innovathon 创新营",
    campsDesc: "在节奏紧凑的 6 天内，孩子们组建团队、像创始人一样思考、通过编写提示词构建产品 MVP，并在 Demo Day 向专业评审进行现场路演。",
    learnMore: "了解更多",
    incubatorTag: "长期路线",
    incubatorDuration: "单学期",
    incubatorTitle: "孵化实验室",
    incubatorDesc: "专为追求完整商业验证的创造者设计。我们以原始的技术原型为起点，引导他们进行真实用户访谈、数据架构设计、项目部署及种子用户迭代。",
    academyTag: "学年路线",
    academyDuration: "30 周 / 双学期",
    academyTitle: "创始人学院",
    academyDesc: "跨越两个学期、共 30 周的系统性深度项目，全面传授 AI 技术与创业方法论。学员将深入理解前沿 AI 模型，设计系统架构，并真正发布落地自己的创新企业。",
    missionTitle: (
      <>
        <span className="inline-block">无创造，</span>
        <span className="inline-block">不少年。</span>
      </>
    ),
    missionDesc: "我们相信，最好的学习方式就是动手实践。BoundaryUnknown 为年轻人提供探索空间、导师指导以及云端计算资源，将抽象的好奇心转化为真正的创新实践。"
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
            <p className="text-body-lg text-zinc-400 max-w-2xl leading-relaxed mb-12">
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

        {/* CORE METHODOLOGY HIGHLIGHTS */}
        <section className="py-12 md:py-20 border-t border-zinc-900 bg-zinc-950/20 backdrop-blur-sm rounded-[32px] px-6 md:px-12 mb-24">
          <div ref={featuresReveal.ref} className={featuresReveal.className}>
            <div className="mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                {t.philosophyTitle}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              
              <div className="flex flex-col gap-4 group">
                <span className="text-4xl font-mono font-extrabold text-zinc-800 group-hover:text-[#FF751F] transition-colors duration-300">
                  01
                </span>
                <h3 className="text-xl font-bold uppercase text-white tracking-tight">
                  {t.f1Title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {t.f1Desc}
                </p>
              </div>

              <div className="flex flex-col gap-4 group">
                <span className="text-4xl font-mono font-extrabold text-zinc-800 group-hover:text-[#FF751F] transition-colors duration-300">
                  02
                </span>
                <h3 className="text-xl font-bold uppercase text-white tracking-tight">
                  {t.f2Title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {t.f2Desc}
                </p>
              </div>

              <div className="flex flex-col gap-4 group">
                <span className="text-4xl font-mono font-extrabold text-zinc-800 group-hover:text-[#FF751F] transition-colors duration-300">
                  03
                </span>
                <h3 className="text-xl font-bold uppercase text-white tracking-tight">
                  {t.f3Title}
                </h3>
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
                  <h3 className="text-2xl md:text-3xl lg:text-xl xl:text-2xl font-black uppercase text-white mb-6 tracking-tight whitespace-nowrap">
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
                  <h3 className="text-2xl md:text-3xl lg:text-xl xl:text-2xl font-black uppercase text-white mb-6 tracking-tight whitespace-nowrap">
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
                  <h3 className="text-2xl md:text-3xl lg:text-xl xl:text-2xl font-black uppercase text-white mb-6 tracking-tight whitespace-nowrap">
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
              
              <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-8 leading-tight">
                {t.missionTitle}
              </h2>
              
              <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                {t.missionDesc}
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer variant="dark" />

    </div>
  );
}

