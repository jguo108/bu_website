"use client";

import Link from "next/link";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MaterialIcon } from "@/components/MaterialIcon";
import { useLanguage } from "@/lib/LanguageContext";

const objectivesEn = [
  {
    icon: "auto_awesome",
    title: "Cross-disciplinary Creativity",
    body: "Real creation happens at the boundaries between disciplines. Kids blend business, technology, and creativity—using AI to turn cross-disciplinary ideas into things no one has seen before.",
  },
  {
    icon: "smart_toy",
    title: "AI Leadership",
    body: "It's not about being replaced by AI, but getting things done with it. From knowing how to use it to knowing how to direct it, kids—like founders leading a team—make AI reliably produce the results they want.",
  },
  {
    icon: "diversity_3",
    title: "Empathy & Collaboration",
    body: "Good products begin with understanding others. Kids first read real people and real needs, then collaborate with peers and with AI to build, together, the things they care about.",
  },
  {
    icon: "bolt",
    title: "Self-Driven Motivation",
    body: "When a project truly belongs to them, kids don't need to be pushed. Facing real users and real feedback, each takes responsibility for their own work and runs forward on their own.",
  },
];

const objectivesZh = [
  {
    icon: "auto_awesome",
    title: "跨界创造力 · Cross-disciplinary Creativity",
    body: "真正的创造发生在学科的边界上。孩子把商业、技术与创意揉到一起，用 AI 把跨界的想法，做成别人没见过的东西。",
  },
  {
    icon: "smart_toy",
    title: "AI 领导力 · AI Leadership",
    body: "不是被 AI 取代，而是带着 AI 成事。从会用，到会指挥，孩子像创始人带团队一样，让 AI 稳定产出自己想要的结果。",
  },
  {
    icon: "diversity_3",
    title: "共情协作力 · Empathy & Collaboration",
    body: "好产品始于对他人的理解。孩子先读懂真实的人、真实的需求，再与同伴、与 AI 协作，把在意的事一起做出来。",
  },
  {
    icon: "bolt",
    title: "自驱型动力 · Self-Driven Motivation",
    body: "当项目真正属于自己，孩子就不必被推着走。面对真实的用户和反馈，他为自己的作品负责，自己往前跑。",
  },
];

const tracksEn = [
  {
    icon: "diversity_1",
    title: "AI for Good",
    description:
      "Designing intelligent systems that solve urgent global challenges—from climate modeling to accessible healthcare distribution.",
  },
  {
    icon: "potted_plant",
    title: "AI for Fun",
    description:
      "Unlocking creative potential through generative art, procedural storytelling, and new forms of interactive digital play.",
  },
  {
    icon: "school",
    title: "AI for Learning",
    description:
      "Redefining pedagogy with personalized AI tutors, immersive history simulations, and cognitive augmentation tools.",
  },
];

const tracksZh = [
  {
    icon: "diversity_1",
    title: "AI for Good (技术向善)",
    description:
      "设计智能系统以解决紧迫的全球性挑战——从气候建模到无障碍医疗资源的普惠分配。",
  },
  {
    icon: "potted_plant",
    title: "AI for Fun (创意无界)",
    description:
      "通过生成式艺术、程序化叙事以及全新的数字互动娱乐形式，释放并激发无尽的创意潜能。",
  },
  {
    icon: "school",
    title: "AI for Learning (认知革命)",
    description:
      "用个性化 AI 导师、沉浸式历史模拟以及认知增强工具，重新定义未来的教学与学习范式。",
  },
];

const faqsEn = [
  {
    q: "What are the age requirements for participants?",
    a: "The Innovathon is open to students aged 9–18. We maintain a diverse cohort to encourage peer-to-peer mentoring and multi-generational perspectives on design.",
  },
  {
    q: "Do I need prior coding experience?",
    a: "While prior experience is helpful, it is not mandatory. We provide pre-program digital modules and Vibe Coding tools to bring all participants up to a baseline level.",
  },
  {
    q: "What should I bring to the program?",
    a: "Participants should bring a laptop capable of running standard development tools. All other specialized hardware, prototyping materials, and daily sustenance will be provided.",
  },
];

const faqsZh = [
  {
    q: "参与学员有年龄限制吗？",
    a: "Innovathon少年创客松面向 9-18 岁的学生开放。我们保持多元化的年龄分布，以鼓励同伴学习以及多视角的设计协作。",
  },
  {
    q: "我需要有编程基础吗？",
    a: "虽然有一些编程基础会有所帮助，但这不是必需的。我们在开营前提供自学导学模块，并教授 Vibe Coding（提示词编程）工具，帮助所有学员迅速达到基准开发水平。",
  },
  {
    q: "我需要携带什么装备？",
    a: "学员需要自带一台能够运行标准开发工具的笔记本电脑。其他所有专业硬件模块、原型制作材料以及每日的餐饮都由营地统一提供。",
  },
];

const content = {
  en: {
    heroTitle: (
      <>
        Innovathon:
        <br />
        <span className="text-primary font-black">Youth Creator Hackathon</span>
      </>
    ),
    heroSub: "Innovathon = Innovation + Hackathon—a hackathon-style summer camp built around imagination and creation. In six intense days, kids form teams, think like founders, start from real-life pain points, build a product MVP through vibe coding, and pitch live to professional judges on Demo Day.",
    viewDetails: "View Details",
    foundersTitle: "Developing Future Founders",
    foundersDesc: "Our curriculum is designed to build the habits of system architects and tech founders. Through hands-on challenges, we cultivate skills that last a lifetime.",
    systemsMindset: "Systems Mindset",
    quote: "The best way to predict the future is to build it. We give kids the tools and agency to become architects, not just consumers, of technology.",
    coreObjectives: "Core Learning Objectives",
    objectiveLabel: "Objective 0",
    coreCurriculum: "Core Curriculum",
    viewTimetable: "View Timetable",
    faqTitle: "Frequently Asked Questions",
  },
  zh: {
    heroTitle: (
      <>
        Innovathon:
        <br />
        <span className="text-primary font-black">少年创客松</span>
      </>
    ),
    heroSub: "Innovathon=Innovation + Hackathon。以想象、创新为主题的黑客松式夏令营。在节奏紧凑的 6 天内，孩子们组建团队、像创始人一样思考、从真实生活中的痛点出发，通过vibe coding构建产品 MVP，并在 Demo Day 向专业评审进行现场路演。",
    viewDetails: "查看详情",
    foundersTitle: "培养未来的创始人",
    foundersDesc: "我们的课程旨在培养系统架构师和技术创始人的习惯。通过亲自动手的挑战，我们培养伴随一生的能力。",
    systemsMindset: "系统化思维",
    quote: "预测未来的最好方法是亲手去创造它。我们赋予孩子们工具和自主权，让他们成为技术的架构师，而不仅仅是消费者。",
    coreObjectives: "核心学习目标",
    objectiveLabel: "核心目标 0",
    coreCurriculum: "核心学习板块",
    viewTimetable: "查看日程课表",
    faqTitle: "常见问题",
  }
};

export function CampsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { language } = useLanguage();
  const objectives = language === "zh" ? objectivesZh : objectivesEn;
  const tracks = language === "zh" ? tracksZh : tracksEn;
  const faqs = language === "zh" ? faqsZh : faqsEn;
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

        <section className="max-w-screen-xl mx-auto px-4 md:px-gutter py-xxl border-t border-outline-variant/30">
          <div className="mb-xl flex flex-col items-center text-center">
            <h2 className="text-display-md text-inverse-surface">
              {t.coreObjectives}
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
                  {t.objectiveLabel}{activeIndex + 1}
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

        <section className="max-w-screen-xl mx-auto px-4 md:px-gutter py-xxl border-t border-outline-variant/30">
          <div className="mb-xl flex flex-col items-center text-center">
            <h2 className="text-display-md text-inverse-surface">
              {t.coreCurriculum}
            </h2>
            <div className="h-1 w-24 bg-primary mt-sm" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {tracks.map((track) => (
              <div
                key={track.title}
                className="bg-stone-950 text-stone-50 p-xl rounded-[32px] flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-md">
                  <MaterialIcon name={track.icon} className="text-white text-3xl" />
                </div>
                <h3 className="text-headline-lg mb-sm">{track.title}</h3>
                <p className="text-body-sm text-stone-400">{track.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-xl">
            <Link
              href="/programs/camps/timetable"
              className="inline-flex items-center gap-xs bg-stone-900 text-white hover:bg-stone-800 px-8 py-3 rounded-full text-md font-bold tracking-tight transition-all active:scale-95 shadow-md hover:shadow-lg"
            >
              {t.viewTimetable} <MaterialIcon name="arrow_forward" className="text-lg" />
            </Link>
          </div>
        </section>

        <section className="max-w-screen-xl mx-auto px-4 md:px-gutter py-xxl border-t border-outline-variant/30">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-xl">
            <div className="md:col-span-4">
              <h2 className="text-display-md">{t.faqTitle}</h2>
              <div className="h-1 w-24 bg-primary mt-sm" />
            </div>
            <div className="md:col-span-8 space-y-0 divide-y divide-border">
              {faqs.map((faq) => (
                <details key={faq.q} className="group py-md">
                  <summary className="flex justify-between items-center cursor-pointer list-none text-headline-md text-stone-900 font-semibold select-none">
                    {faq.q}
                    <MaterialIcon
                      name="expand_more"
                      className="group-open:rotate-180 transition-transform"
                    />
                  </summary>
                  <div className="mt-4 text-body-md text-secondary leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

