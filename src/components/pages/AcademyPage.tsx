"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useLanguage } from "@/lib/LanguageContext";

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
    comingSoon: "Coming soon...",
  },
  zh: {
    heroTitle: (
      <>
        创始人学院：
        <br />
        <span className="text-primary font-black">30 周的创业出海之旅</span>
      </>
    ),
    heroSub: "跨越两个学期、共 30 周的系统性深度项目，全面传授 AI 技术与创业方法论。学员将深入理解前沿 AI 模型，设计 system 架构，并真正发布落地自己的创新企业。",
    comingSoon: "即将推出...",
  }
};

export function AcademyPage() {
  const { language } = useLanguage();
  const t = content[language];

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
