"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MaterialIcon } from "@/components/MaterialIcon";
import { images } from "@/lib/images";
import { useLanguage } from "@/lib/LanguageContext";

const stepsEn = [
  { icon: "query_stats", title: "Validation", desc: "Stress-testing your core hypothesis against market realities and technical constraints." },
  { icon: "precision_manufacturing", title: "Prototype", desc: "Iterative development cycles focusing on MVP functionality and scalable architecture." },
  { icon: "rocket_launch", title: "Launch", desc: "Strategic GTM planning, investor pitching, and full-scale deployment to users." },
];

const stepsZh = [
  { icon: "query_stats", title: "市场调查", desc: "什么是用户真正想要的产品？怎样做有效的市场调查？从真实需求出发，构建产品蓝图。" },
  { icon: "precision_manufacturing", title: "原型开发", desc: "聚焦于 MVP（最小可行性产品）功能与可扩展架构的迭代开发周期。" },
  { icon: "rocket_launch", title: "商业发布", desc: "制定战略性的 GTM（进入市场）规划、投资人路演以及向用户进行完整规模的部署。" },
];

const content = {
  en: {
    heroTitle: (
      <>
        The Incubation Track:
        <br />
        <span className="text-primary">From Idea to Venture</span>
      </>
    ),
    heroSub: "Bridging the gap between academic exploration and market-ready innovation. We provide the scaffolding for your most ambitious AI projects to scale.",
    pathTitle: "The Path to Launch",
  },
  zh: {
    heroTitle: (
      <>
        孵化课程路线：
        <br />
        <span className="text-primary">从创意到商业项目</span>
      </>
    ),
    heroSub: "架设起学术探索与商业创新之间的桥梁。我们为最具雄心壮志的 AI 创意提供商业化起飞的支架与资源。",
    pathTitle: "通往发布之路",
  }
};

export function IncubatorPage() {
  const { language } = useLanguage();
  const steps = language === "zh" ? stepsZh : stepsEn;
  const t = content[language];

  return (
    <>
      <Header variant="white" />
      <main className="mt-24">
        <section className="max-w-screen-xl mx-auto px-4 md:px-gutter py-xxl flex flex-col items-center text-center">
          <h1 className="text-[40px] md:text-[64px] font-semibold leading-tight text-inverse-surface max-w-4xl mb-md">
            {t.heroTitle}
          </h1>
          <p className="text-body-lg text-secondary max-w-2xl">
            {t.heroSub}
          </p>
        </section>

        <section className="max-w-screen-xl mx-auto px-4 md:px-gutter py-xxl">
          <div className="text-center mb-xl">
            <h2 className="text-display-md text-inverse-surface mb-sm">
              {t.pathTitle}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {steps.map((step) => (
              <div
                key={step.title}
                className="bg-stone-950 text-stone-50 p-xl rounded-[32px] flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-md">
                  <MaterialIcon name={step.icon} className="text-white text-3xl" />
                </div>
                <h3 className="text-headline-lg mb-sm">{step.title}</h3>
                <p className="text-body-sm text-stone-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

