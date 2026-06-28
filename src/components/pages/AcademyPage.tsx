"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useLanguage } from "@/lib/LanguageContext";

const levelsEn = [
  {
    tag: "L1",
    color: "#E5915F",
    title: "User",
    sub: "AI can do it",
    quote: "I made a real thing with AI.",
    have: "What you hold: a real, AI-built piece you can show to actual people.",
    transition: "Shift: from “using” to “directing” — starting to actively control what AI produces.",
  },
  {
    tag: "L2",
    color: "#D2691E",
    title: "Director",
    sub: "Knows how to do it",
    quote: "I actively direct AI to build what I intend.",
    have: "What you hold: a piece refined through iteration, produced to your intent.",
    transition: "Shift: from “directing” to “doing it well” — building a reusable system.",
  },
  {
    tag: "L3",
    color: "#B14A1E",
    title: "Independent Builder",
    sub: "Doing it well · harness",
    quote: "I built a method/workflow that reliably produces good results.",
    have: "What you hold: a reusable “recipe” / workflow, not just a single piece.",
    transition: null,
  },
];

const levelsZh = [
  {
    tag: "L1",
    color: "#E5915F",
    title: "使用者",
    sub: "AI 可以做",
    quote: "我用 AI 做成了一个真东西",
    have: "手里有：一个用 AI 做出来的、能拿给真实的人看的作品",
    transition: "跃迁：从「会用」到「会指挥」——开始主动控制 AI 的产出",
  },
  {
    tag: "L2",
    color: "#D2691E",
    title: "指挥者",
    sub: "知道怎么做",
    quote: "我主动指挥 AI，做出符合我意图的东西",
    have: "手里有：一个被我反复调教、按我的意图产出的作品",
    transition: "跃迁：从「会指挥」到「会做好」——搭一套能复用的系统",
  },
  {
    tag: "L3",
    color: "#B14A1E",
    title: "独立开发者",
    sub: "怎么做好 · harness",
    quote: "我建了一套能稳定产出好结果的方法/流程",
    have: "手里有：一套可复用的「配方」/工作流，不只是一个作品",
    transition: null,
  },
];

const content = {
  en: {
    heroTitle: (
      <>
        Founders Academy:
        <br />
        <span className="text-primary font-black">The 30-Week Venture Journey</span>
      </>
    ),
    heroSub: "A complete, two-semester curriculum designed to turn students into AI-first builders and system entrepreneurs. Learn advanced AI orchestration, validation, deployment, and GTM.",
    ladderTitle: "The AI Capability Ladder: User · Director · Independent Builder",
    comingSoon: "Coming soon...",
  },
  zh: {
    heroTitle: (
      <>
        创始人学院：
        <br />
        <span className="text-primary font-black">系统性的AI学习和创业思维建构</span>
      </>
    ),
    heroSub: "孩子从一个真实的想法出发，用创业思维想清楚价值，用AI工程思维把价值做出来——旨在培养孩子成为AI时代的超级个体。",
    ladderTitle: "AI 能力进阶主线：使用者 · 指挥者 · 独立开发者",
    comingSoon: "即将推出...",
  }
};

export function AcademyPage() {
  const { language } = useLanguage();
  const t = content[language];
  const levels = language === "zh" ? levelsZh : levelsEn;

  return (
    <>
      <Header variant="white" />
      <main className="mt-24">
        {/* HERO SECTION */}
        <section className="max-w-screen-xl mx-auto px-4 md:px-gutter py-xxl flex flex-col items-center text-center">
          <h1 className="text-[40px] md:text-[64px] font-semibold leading-tight text-inverse-surface max-w-4xl mb-md">
            {t.heroTitle}
          </h1>
          <p className="text-body-lg text-secondary max-w-2xl mb-xl">
            {t.heroSub}
          </p>
        </section>

        {/* AI CAPABILITY LADDER */}
        <section className="max-w-4xl mx-auto px-4 md:px-gutter mb-24">
          <h2 className="text-xl md:text-2xl font-semibold leading-tight text-inverse-surface mb-md">
            {t.ladderTitle}
          </h2>

          {/* Levels */}
          <div className="flex flex-col">
            {levels.map((lvl) => (
              <div key={lvl.tag}>
                <div className="flex flex-col sm:flex-row items-stretch bg-white border border-outline-variant/40 rounded-xl overflow-hidden">
                  {/* Badge */}
                  <div
                    className="flex items-center justify-center shrink-0 py-4 sm:py-0 sm:w-20"
                    style={{ backgroundColor: lvl.color }}
                  >
                    <span className="text-xl md:text-2xl font-black text-white tracking-wide">
                      {lvl.tag}
                    </span>
                  </div>
                  {/* Title block */}
                  <div className="flex flex-col justify-center px-4 py-3 sm:w-48 shrink-0 border-b sm:border-b-0 sm:border-r border-outline-variant/40">
                    <h3 className="text-lg md:text-xl font-semibold text-inverse-surface">
                      {lvl.title}
                    </h3>
                    <span className="text-label-md text-tertiary mt-0.5">{lvl.sub}</span>
                  </div>
                  {/* Detail block */}
                  <div className="flex flex-col justify-center px-4 py-3 flex-1 gap-1">
                    <p className="text-body-sm italic text-secondary">&quot;{lvl.quote}&quot;</p>
                    <p className="text-label-md font-semibold text-primary">{lvl.have}</p>
                  </div>
                </div>

                {/* Transition */}
                {lvl.transition && (
                  <div className="border-l-2 border-dashed border-outline-variant ml-5 pl-3 py-2 my-0.5">
                    <span className="text-label-md font-semibold text-secondary">
                      ↑ {lvl.transition}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* INFO HIGHLIGHTS */}
        <section className="max-w-screen-xl mx-auto px-4 md:px-gutter mb-24">
          <div className="flex flex-col items-center justify-center bg-surface-container rounded-[32px] py-16 px-8 border border-outline-variant/30 min-h-[200px] text-center">
            <span className="text-xl md:text-2xl font-medium text-secondary tracking-widest uppercase font-mono">
              {t.comingSoon}
            </span>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
