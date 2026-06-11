"use client";

import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MaterialIcon } from "@/components/MaterialIcon";
import { images } from "@/lib/images";
import { useLanguage } from "@/lib/LanguageContext";

function GridCell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`p-md bg-surface-container rounded-xl border border-outline-variant hover-protocol transition-all duration-300 cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
}

const content = {
  en: {
    backToCamp: "← Back to camp overview",
    title: "Innovathon: Weekly Protocol",
    sub: "A rigorous 6-day intellectual intensive focused on the intersection of artificial intelligence, entrepreneurial logic, and rapid technical prototyping.",
    coreCurriculum: "Core Curriculum",
    teamIntegration: "Team Integration",
    reviewRituals: "Review & Rituals",
    schedule: "Schedule",
    morning: "Morning",
    afternoon: "Afternoon",
    evening: "Evening",
    
    // Cell labels & desc
    arrivalPrep: "Arrival & Prep",
    aiFunGoodLearning: "AI for Fun, Good & Learning",
    introFrameworks: "Introductory Frameworks",
    entThinking: "Entrepreneurial Thinking",
    marketUserArchetypes: "Market & User Archetypes",
    techVentures: "Tech x Ventures",
    bizAnalysisGddPrd: "Business Analysis & GDD/PRD",
    artOfPitch: "The Art of the Pitch",
    narrativeDesignPpt: "Narrative Design & PPT",
    speechBoost: "Speech Boost",
    finalPrep: "Final Performance Prep",
    openingCeremony: "Opening Ceremony",
    protocolOnboarding: "Protocol & Onboarding",
    empathyAiBasics: "Empathy & AI Basics",
    brainstormingPrompting: "Brainstorming + Prompting",
    vibeCodingGames: "Vibe Coding: Games",
    advTechLab: "Adv. Technical Lab",
    vibeCodingWeb: "Vibe Coding: Web",
    appArchitecture: "App Architecture",
    teamSprintMvp: "Team Sprint: MVP",
    rapidPrototyping: "Rapid Prototyping",
    roadshow: "Roadshow",
    finalReveal: "Final Project Reveal",
    icebreaking: "Icebreaking",
    communityRituals: "Community Rituals",
    blueprintLab: "Blueprint Lab",
    entMapping: "Entrepreneurial Mapping",
    gddPrdLock: "GDD/PRD Lock",
    productDefinition: "Product Definition",
    mvpMidnight: "MVP Midnight",
    teamIntegrationLabel: "Team Integration",
    finalPractice: "Final Practice",
    polishingRoadshow: "Polishing Roadshow",
    celebration: "Celebration",
    
    // CTA card
    intensive: "INTENSIVE",
    protocolTitle: "PROTOCOL 01: FOUNDATIONS",
    ctaHeader: "Master the Human-AI Collaboration Loop",
    ctaBody: "Join a cohort of world-class creators for a week of radical intellectual growth.",
    viewSyllabus: "VIEW DETAILED SYLLABUS",
    learnMore: "LEARN MORE",
  },
  zh: {
    backToCamp: "← 返回项目概览",
    title: "Innovathon：日程与大纲",
    sub: "为期 6 天的紧凑思维训练，聚焦于人工智能、商业创业逻辑与技术产品快速开发的交融点。",
    coreCurriculum: "核心学术板块",
    teamIntegration: "团队开发整合",
    reviewRituals: "复盘与仪式",
    schedule: "时间日程",
    morning: "晨间/上午",
    afternoon: "下午",
    evening: "晚间",
    
    // Cell labels & desc
    arrivalPrep: "学员报到与准备",
    aiFunGoodLearning: "AI 娱乐、善意与学习",
    introFrameworks: "基础入门框架",
    entThinking: "创始人创业思维",
    marketUserArchetypes: "市场定位与目标用户画像",
    techVentures: "技术与商业交融",
    bizAnalysisGddPrd: "商业分析及 GDD/PRD 确认",
    artOfPitch: "路演表达的艺术",
    narrativeDesignPpt: "故事线设计与路演 Slide",
    speechBoost: "路演特训",
    finalPrep: "登台前最终演练",
    openingCeremony: "开营仪式",
    protocolOnboarding: "营地规则与入营导学",
    empathyAiBasics: "共情力与 AI 基础",
    brainstormingPrompting: "痛点风暴与 Prompt 技巧",
    vibeCodingGames: "AI 编程：游戏开发",
    advTechLab: "高阶技术开发实验室",
    vibeCodingWeb: "AI 编程：Web 应用",
    appArchitecture: "应用架构与项目部署",
    teamSprintMvp: "团队冲刺：打造 MVP",
    rapidPrototyping: "快速原型开发",
    roadshow: "Demo Day 最终路演",
    finalReveal: "创新项目最终揭晓",
    icebreaking: "破冰游戏",
    communityRituals: "班级建设与营规共创",
    blueprintLab: "创业蓝图实验室",
    entMapping: "商业板块关系图绘制",
    gddPrdLock: "PRD 产品文档确认",
    productDefinition: "核心商业功能定义",
    mvpMidnight: "MVP 冲刺前夜",
    teamIntegrationLabel: "团队系统集成与开发",
    finalPractice: "最终模拟演练",
    polishingRoadshow: "路演特训与 Slide 优化",
    celebration: "结营庆典",
    
    // CTA card
    intensive: "强化集训",
    protocolTitle: "大纲 01：人机协作基石",
    ctaHeader: "掌控人机协作的超级闭环",
    ctaBody: "加入全球顶尖年轻创造者的行列，开启一周的思维风暴与认知跃迁。",
    viewSyllabus: "查看详细大纲",
    learnMore: "了解更多",
  }
};

export function WeeklyProtocolPage() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <>
      <Header />
      <main className="max-w-[1280px] mx-auto px-4 md:px-lg py-xxl">
        <div className="mb-xl border-l-8 border-primary pl-lg">
          <Link
            href="/programs/camps"
            className="text-label-md text-secondary uppercase hover:text-primary mb-4 inline-block"
          >
            {t.backToCamp}
          </Link>
          <h1 className="text-display-lg uppercase tracking-tight mb-sm">
            {t.title}
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">
            {t.sub}
          </p>
        </div>

        <div className="flex flex-wrap gap-md mb-lg">
          {[
            { color: "bg-primary", label: t.coreCurriculum },
            { color: "bg-tertiary-container", label: t.teamIntegration },
            { color: "bg-surface-container-highest", label: t.reviewRituals },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-xs">
              <div className={`w-4 h-4 ${item.color}`} />
              <span className="text-label-md uppercase tracking-tight">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
          <div className="min-w-[1000px] academic-grid gap-sm">
            <div className="p-md text-label-md uppercase tracking-widest text-on-surface-variant">
              {t.schedule}
            </div>
            {["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"].map((d) => (
              <div
                key={d}
                className="p-md text-label-md uppercase tracking-widest text-center border-b-4 border-primary"
              >
                {d}
              </div>
            ))}

            <div className="flex items-center p-md bg-surface-container-low text-label-md uppercase rotate-180 [writing-mode:vertical-lr] text-center border-r border-outline-variant">
              {t.morning}
            </div>
            <GridCell className="opacity-50 italic flex items-center justify-center">
              {t.arrivalPrep}
            </GridCell>
            <GridCell>
              <span className="text-code text-primary uppercase block mb-xs font-mono text-sm">09:00 - 12:00</span>
              <h4 className="text-headline-lg leading-tight mb-sm">{t.aiFunGoodLearning}</h4>
              <p className="text-label-md uppercase tracking-tight text-on-surface-variant">{t.introFrameworks}</p>
            </GridCell>
            <GridCell>
              <span className="text-code text-primary uppercase block mb-xs font-mono text-sm">09:00 - 12:00</span>
              <h4 className="text-headline-lg leading-tight mb-sm">{t.entThinking}</h4>
              <p className="text-label-md uppercase tracking-tight text-on-surface-variant">{t.marketUserArchetypes}</p>
            </GridCell>
            <GridCell>
              <span className="text-code text-primary uppercase block mb-xs font-mono text-sm">09:00 - 12:00</span>
              <h4 className="text-headline-lg leading-tight mb-sm">{t.techVentures}</h4>
              <p className="text-label-md uppercase tracking-tight text-on-surface-variant">{t.bizAnalysisGddPrd}</p>
            </GridCell>
            <GridCell>
              <span className="text-code text-primary uppercase block mb-xs font-mono text-sm">09:00 - 12:00</span>
              <h4 className="text-headline-lg leading-tight mb-sm">{t.artOfPitch}</h4>
              <p className="text-label-md uppercase tracking-tight text-on-surface-variant">{t.narrativeDesignPpt}</p>
            </GridCell>
            <div className="p-md bg-primary text-white rounded-xl border border-outline-variant hover-protocol transition-all duration-300 cursor-pointer shadow-lg">
              <span className="text-code uppercase block mb-xs text-white/80 font-mono text-sm">09:00 - 12:00</span>
              <h4 className="text-headline-lg leading-tight mb-sm">{t.speechBoost}</h4>
              <p className="text-label-md uppercase tracking-tight opacity-80">{t.finalPrep}</p>
            </div>

            <div className="flex items-center p-md bg-surface-container-low text-label-md uppercase rotate-180 [writing-mode:vertical-lr] text-center border-r border-outline-variant">
              {t.afternoon}
            </div>
            <GridCell className="bg-surface-container-highest">
              <span className="text-code text-primary uppercase block mb-xs font-mono text-sm">14:00 - 17:00</span>
              <h4 className="text-headline-lg leading-tight mb-sm">{t.openingCeremony}</h4>
              <p className="text-label-md uppercase tracking-tight text-on-surface-variant">{t.protocolOnboarding}</p>
            </GridCell>
            <GridCell>
              <span className="text-code text-primary uppercase block mb-xs font-mono text-sm">14:00 - 17:00</span>
              <h4 className="text-headline-lg leading-tight mb-sm">{t.empathyAiBasics}</h4>
              <p className="text-label-md uppercase tracking-tight text-on-surface-variant">{t.brainstormingPrompting}</p>
            </GridCell>
            <div className="p-md bg-tertiary-container text-white rounded-xl border border-outline-variant hover-protocol transition-all duration-300 cursor-pointer">
              <span className="text-code uppercase block mb-xs font-mono text-sm">14:00 - 17:00</span>
              <h4 className="text-headline-lg leading-tight mb-sm">{t.vibeCodingGames}</h4>
              <p className="text-label-md uppercase tracking-tight opacity-90">{t.advTechLab}</p>
            </div>
            <div className="p-md bg-tertiary-container text-white rounded-xl border border-outline-variant hover-protocol transition-all duration-300 cursor-pointer">
              <span className="text-code uppercase block mb-xs font-mono text-sm">14:00 - 17:00</span>
              <h4 className="text-headline-lg leading-tight mb-sm">{t.vibeCodingWeb}</h4>
              <p className="text-label-md uppercase tracking-tight opacity-90">{t.appArchitecture}</p>
            </div>
            <GridCell>
              <span className="text-code text-primary uppercase block mb-xs font-mono text-sm">14:00 - 17:00</span>
              <h4 className="text-headline-lg leading-tight mb-sm">{t.teamSprintMvp}</h4>
              <p className="text-label-md uppercase tracking-tight text-on-surface-variant">{t.rapidPrototyping}</p>
            </GridCell>
            <div className="p-md bg-inverse-surface text-inverse-on-surface rounded-xl border border-outline-variant hover-protocol transition-all duration-300 cursor-pointer">
              <span className="text-code text-primary uppercase block mb-xs font-mono text-sm">14:00 - 18:00</span>
              <h4 className="text-headline-lg leading-tight mb-sm">{t.roadshow}</h4>
              <p className="text-label-md uppercase tracking-tight opacity-80">{t.finalReveal}</p>
            </div>

            <div className="flex items-center p-md bg-surface-container-low text-label-md uppercase rotate-180 [writing-mode:vertical-lr] text-center border-r border-outline-variant">
              {t.evening}
            </div>
            <GridCell className="bg-surface-container-highest">
              <span className="text-code text-primary uppercase block mb-xs font-mono text-sm">19:00+</span>
              <h4 className="text-headline-lg leading-tight mb-sm">{t.icebreaking}</h4>
              <p className="text-label-md uppercase tracking-tight text-on-surface-variant">{t.communityRituals}</p>
            </GridCell>
            <GridCell>
              <span className="text-code text-primary uppercase block mb-xs font-mono text-sm">19:00+</span>
              <h4 className="text-headline-lg leading-tight mb-sm">{t.blueprintLab}</h4>
              <p className="text-label-md uppercase tracking-tight text-on-surface-variant">{t.entMapping}</p>
            </GridCell>
            <GridCell>
              <span className="text-code text-primary uppercase block mb-xs font-mono text-sm">19:00+</span>
              <h4 className="text-headline-lg leading-tight mb-sm">{t.gddPrdLock}</h4>
              <p className="text-label-md uppercase tracking-tight text-on-surface-variant">{t.productDefinition}</p>
            </GridCell>
            <GridCell>
              <span className="text-code text-primary uppercase block mb-xs font-mono text-sm">19:00+</span>
              <h4 className="text-headline-lg leading-tight mb-sm">{t.mvpMidnight}</h4>
              <p className="text-label-md uppercase tracking-tight text-on-surface-variant">{t.teamIntegrationLabel}</p>
            </GridCell>
            <GridCell>
              <span className="text-code text-primary uppercase block mb-xs font-mono text-sm">19:00+</span>
              <h4 className="text-headline-lg leading-tight mb-sm">{t.finalPractice}</h4>
              <p className="text-label-md uppercase tracking-tight text-on-surface-variant">{t.polishingRoadshow}</p>
            </GridCell>
            <GridCell className="opacity-50 italic flex items-center justify-center">
              {t.celebration}
            </GridCell>
          </div>
        </div>

        <div className="mt-xxl grid md:grid-cols-2 gap-lg border border-outline-variant bg-surface-container-low rounded-xl overflow-hidden group">
          <div className="relative aspect-video md:aspect-auto min-h-[240px] overflow-hidden">
            <Image
              alt="Innovathon cohort"
              src={images.weeklyProtocolCta}
              fill
              className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute top-md left-md bg-primary text-white px-md py-xs text-label-md uppercase tracking-widest font-bold">
              {t.intensive}
            </div>
          </div>
          <div className="p-xl flex flex-col justify-center">
            <span className="text-code text-primary uppercase mb-sm tracking-widest font-mono">
              {t.protocolTitle}
            </span>
            <h2 className="text-display-md mb-md leading-tight uppercase">
              {t.ctaHeader}
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-lg">
              {t.ctaBody}
            </p>
            <div className="flex flex-wrap items-center gap-md">
              <Link
                href="/programs/camps/timetable"
                className="bg-primary text-white px-lg py-sm text-label-md font-bold uppercase tracking-tight hover:opacity-90 transition-all"
              >
                {t.viewSyllabus}
              </Link>
              <Link
                href="/programs/camps/innovathon-2026"
                className="flex items-center gap-xs text-label-md uppercase tracking-tight text-primary hover:gap-md transition-all group/link"
              >
                {t.learnMore}{" "}
                <MaterialIcon name="arrow_forward" className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

