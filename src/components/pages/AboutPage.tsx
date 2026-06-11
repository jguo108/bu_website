"use client";

import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MaterialIcon } from "@/components/MaterialIcon";
import { useLanguage } from "@/lib/LanguageContext";

const teamEn = [
  {
    title: "Our Teachers",
    desc: "Former MIT Research Fellow specializing in cognitive architectures and the intersection of AI with classical ethics.",
    role: "Faculty Lead",
  },
  {
    title: "Our Linkers",
    desc: "Expert in scaling deep-tech ventures, Elena ensures our systematic knowledge translates into feasible, global-scale plans.",
    role: "Scale & Strategy",
    offset: true,
  },
  {
    title: "Our Community",
    desc: "Leading the 'Hand' of our philosophy, Marcus converts complex theories into iterative code and hardware prototypes.",
    role: "Product Lab",
  },
];

const teamZh = [
  {
    title: "我们的导师",
    desc: "前麻省理工学院（MIT）研究员，专注于认知架构以及人工智能与经典伦理学的交叉领域研究。",
    role: "学术导师",
  },
  {
    title: "我们的顾问",
    desc: "深科技创业孵化专家，协助学员将系统性的前沿知识转化为切实可行的全球化方案。",
    role: "战略与规模拓展",
    offset: true,
  },
  {
    title: "我们的社区",
    desc: "知行合一的实践引领者，协助学员将复杂的理论转化为可运行的代码和硬件原型。",
    role: "产品实验室",
  },
];

const foundersEn = [
  {
    name: "Cece Fang",
    role: "Co-founder",
    image: "/images/team/cece_fang.png",
  },
  {
    name: "Lexie Wu",
    role: "Co-founder",
    image: "/images/team/lexie_wu.png",
  },
  {
    name: "Jing Guo",
    role: "AI Advisor",
    image: "/images/team/jing_guo.png",
  },
];

const foundersZh = [
  {
    name: "Cece Fang",
    role: "联合创始人",
    image: "/images/team/cece_fang.png",
  },
  {
    name: "Lexie Wu",
    role: "联合创始人",
    image: "/images/team/lexie_wu.png",
  },
  {
    name: "Jing Guo",
    role: "AI 顾问",
    image: "/images/team/jing_guo.png",
  },
];

const philosophyEn = [
  {
    title: "Heart (Empathy)",
    desc: "Deep emotional resonance ensures we solve problems that actually matter to human lives, feeling customer pain points at a visceral level.",
  },
  {
    title: "Head (Knowledge)",
    desc: "Systematic knowledge and analytical rigor across AI, business, and finance guide our actions toward technical and market reality.",
    offset: true,
  },
  {
    title: "Hand (Action)",
    desc: "Iterative feedback and relentless execution. We build, test, and act again with increased precision to bridge theory and the world.",
  },
];

const philosophyZh = [
  {
    title: "心 (共情)",
    desc: "深度的情感共鸣，确保我们解决对人类生活真正有价值的痛点，深刻感知用户的真实处境。",
  },
  {
    title: "脑 (认知)",
    desc: "在人工智能、商业和金融领域具备系统性知识与严谨的分析能力，引导我们走向技术和市场现实。",
    offset: true,
  },
  {
    title: "手 (行动)",
    desc: "快速迭代的反馈与坚定不移的执行力。我们在实践中构建、测试并再次行动，不断提升精度以连接理论与真实世界。",
  },
];

const content = {
  en: {
    title: "Who are we?",
    bio: "Boundary Unknown was founded by Cece Fang. Having worked in the investment industry for over a decade, she has met countless entrepreneurs. From them, she observed many exceptional and rare qualities—qualities that we believe are crucial in the age of AI. That's why she founded Boundary Unknown: to give children the opportunity to continuously practice and iterate their abilities in real entrepreneurial environments, and to cultivate super individuals who dare to think and dare to act.",
    philosophyTitle: "Our Philosophy:",
    integratedMastery: "Integrated Mastery",
    leadershipTitle: "Co-Founders & Leadership",
  },
  zh: {
    title: "我们是谁？",
    bio: "Boundary Unknown 由 Cece Fang 创立。在投资行业从业十余年的经历中，她遇到了无数的创业者，并从中观察到许多稀缺且优秀的品质——我们深信，这些品质在 AI 时代尤为关键。这也正是她创立 Boundary Unknown 的初衷：让孩子们能够在真实的创业环境中不断锻炼和迭代自己的能力，培养敢想、敢做的“超级个体”。",
    philosophyTitle: "我们的教育理念：",
    integratedMastery: "融会贯通",
    leadershipTitle: "联合创始人与领导团队",
  }
};

export function AboutPage() {
  const { language } = useLanguage();
  const team = language === "zh" ? teamZh : teamEn;
  const founders = language === "zh" ? foundersZh : foundersEn;
  const philosophy = language === "zh" ? philosophyZh : philosophyEn;
  const t = content[language];

  return (
    <>
      <Header variant="white" />
      <main className="mt-24">
        <section className="max-w-screen-xl mx-auto px-4 md:px-8 py-xxl flex flex-col items-center text-center">
          <h1 className="text-[40px] md:text-[64px] font-semibold leading-tight text-inverse-surface max-w-4xl mb-md">
            {t.title}
          </h1>
          <p className="text-body-lg text-secondary max-w-3xl mb-xl leading-relaxed">
            {t.bio}
          </p>
        </section>

        <section className="max-w-screen-2xl mx-auto px-4 md:px-8 pb-xxl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
            {team.map((member) => (
              <div
                key={member.title}
                className="sticker-card p-lg rounded-2xl flex flex-col group bg-card border border-border"
              >
                <h3 className="text-headline-lg mb-sm group-hover:text-primary transition-colors">
                  {member.title}
                </h3>
                <p className="text-body-md text-on-surface-variant mb-md flex-grow">
                  {member.desc}
                </p>
                <div className="knowledge-block-thin pl-md py-1 mt-auto">
                  <span className="text-label-md text-on-surface uppercase opacity-50">
                    {member.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-xxl mb-xxl">
          <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
            <div className="text-center mb-xl">
              <h2 className="text-display-md mb-sm">
                {t.philosophyTitle} <span className="text-primary">3H Theory</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </div>
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-xl lg:gap-24 relative">
              <div className="relative w-[340px] h-[340px] md:w-[480px] md:h-[480px] shrink-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-2/3 border-2 border-primary bg-primary/5 rounded-full flex items-center justify-center transition-transform hover:scale-105 duration-500">
                  <div className="text-center mb-20">
                    <MaterialIcon name="favorite" className="text-primary text-3xl mb-1 block mx-auto" />
                    <p className="text-label-md font-bold uppercase tracking-widest text-primary">Heart</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-2/3 h-2/3 border-2 border-primary bg-primary/5 rounded-full flex items-center justify-center transition-transform hover:scale-105 duration-500">
                  <div className="text-center mt-16 mr-16">
                    <MaterialIcon name="psychology" className="text-primary text-3xl mb-1 block mx-auto" />
                    <p className="text-label-md font-bold uppercase tracking-widest text-primary">Head</p>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-2/3 h-2/3 border-2 border-primary bg-primary/5 rounded-full flex items-center justify-center transition-transform hover:scale-105 duration-500">
                  <div className="text-center mt-16 ml-16">
                    <MaterialIcon name="front_hand" className="text-primary text-3xl mb-1 block mx-auto" />
                    <p className="text-label-md font-bold uppercase tracking-widest text-primary">Hand</p>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 bg-primary rounded-full flex items-center justify-center shadow-2xl z-10 animate-pulse border-4 border-white/20">
                  <p className="text-white font-bold text-center uppercase px-4 leading-tight text-sm">
                    {t.integratedMastery}
                  </p>
                </div>
              </div>
              <div className="flex-1 space-y-md text-left w-full">
                {philosophy.map((item) => (
                  <div
                    key={item.title}
                    className={`p-lg rounded-2xl sticker-card bg-card border border-border ${item.offset ? "ml-0 lg:ml-8" : ""}`}
                  >
                    <h4 className="text-headline-lg text-primary mb-2">{item.title}</h4>
                    <p className="text-body-md text-on-surface-variant">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-xxl bg-surface-container-low border-t border-border-muted w-full">
          <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
            <div className="text-center mb-xl">
              <h2 className="text-display-md mb-sm text-on-surface">
                {t.leadershipTitle}
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-xl justify-items-center">
              {founders.map((member) => (
                <div key={member.name} className="flex flex-col items-center text-center group">
                  <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-border/85 group-hover:border-primary transition-all duration-500 shadow-md group-hover:shadow-xl group-hover:scale-105 mb-md bg-card">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(max-width: 768px) 240px, 288px"
                    />
                  </div>
                  <h3 className="text-headline-lg text-on-surface mb-xs transition-colors duration-300 group-hover:text-primary">
                    {member.name}
                  </h3>
                  <p className="text-body-md text-on-surface-variant font-medium">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

