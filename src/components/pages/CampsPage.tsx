"use client";

import Link from "next/link";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MaterialIcon } from "@/components/MaterialIcon";
import { RegisterButton } from "@/components/RegisterButton";
import { useLanguage } from "@/lib/LanguageContext";

const objectivesEn = [
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

const objectivesZh = [
  {
    icon: "insights",
    title: "像创业者一样思考与行动",
    body: "学员们不仅仅是学习创业的理论——更是在实践中体会。他们需要识别真实问题、在不确定性中做出决策、承担合理的风险并快速迭代。创始人的思维方式正是通过“做”来建立的。",
  },
  {
    icon: "smart_toy",
    title: "AI 素养：主导并妙用 AI，而非恐惧",
    body: "AI 是这一代人的决定性工具。学员们将学会带着明确意图引导 AI——将抽象的想法转化为可运行的产品。他们将理解 AI 的边界、如何高效编写 Prompt，并在协作中始终坐在驾驶员的位置上。",
  },
  {
    icon: "hub",
    title: "系统性思维",
    body: "优秀的创业者看重全局。学员们学习绘制各要素之间的连接图——用户、痛点、解决方案、反馈环，并从系统层面理解为什么一个产品会成功或失败，而不仅仅是堆砌功能。",
  },
  {
    icon: "co_present",
    title: "沟通与路演表达的自信",
    body: "创意的价值取决于你分享它的能力。学员们学习将复杂的项目工作提炼成一个清晰、引人入胜的故事，并在 Demo Day 站在真实观众面前进行路演展示。",
  },
  {
    icon: "groups",
    title: "团队协作与抗挫折力",
    body: "在团队中紧密配合、面对分歧、跨越阻碍并找到出路。他们将认识到失败只是一个实验数据点，而非最终裁决。",
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
    a: "Innovathon 创新营面向 9-18 岁的学生开放。我们保持多元化的年龄分布，以鼓励同伴学习以及多视角的设计协作。",
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
        <span className="text-primary font-black">Future Systems Design</span>
      </>
    ),
    heroSub: "A rigorous six-day intensive exploring the intersection of algorithmic thinking and entrepreneurial frameworks. Designed for curious minds ready to architect the next century.",
    viewDetails: "View Details",
    foundersTitle: "Developing Future Founders",
    foundersDesc: "Our curriculum is designed to build the habits of system architects and tech founders. Through hands-on challenges, we cultivate skills that last a lifetime.",
    systemsMindset: "Systems Mindset",
    quote: "The best way to predict the future is to build it. We give kids the tools and agency to become architects, not just consumers, of technology.",
    coreObjectives: "Core Learning Objectives",
    objectiveLabel: "Objective 0",
    coreCurriculum: "Core Curriculum",
    viewTimetable: "View Timetable",
    location: "Location",
    locationDetail: "Global Innovation Hub, Shanghai",
    locationAddr: "No. 188 Museum Lane, Jing'an District",
    availableDates: "Available Dates",
    date1: "Session 1: July 5-10, 2026",
    date2: "Session 2: August 2-7, 2026",
    faqTitle: "Frequently Asked Questions",
    readyTitle: (
      <>
        Ready to shape the <span className="whitespace-nowrap"><span className="italic font-light">future</span>?</span>
      </>
    ),
    readySub: "Limited spots available for the 2026 cohort. Selection is based on passion, creativity, and a drive to solve hard problems.",
    registerText: "Register for Session",
    applicationsClose: "Applications close May 1st, 2026",
  },
  zh: {
    heroTitle: (
      <>
        Innovathon:
        <br />
        <span className="text-primary font-black">未来系统设计营</span>
      </>
    ),
    heroSub: "为期六天的紧凑集训，深入探索算法思维与创业框架的融合。专为渴望架构下一个世纪的探求者设计。",
    viewDetails: "查看详情",
    foundersTitle: "培养未来的创始人",
    foundersDesc: "我们的课程旨在培养系统架构师和技术创始人的习惯。通过亲自动手的挑战，我们培养伴随一生的能力。",
    systemsMindset: "系统化思维",
    quote: "预测未来的最好方法是亲手去创造它。我们赋予孩子们工具和自主权，让他们成为技术的架构师，而不仅仅是消费者。",
    coreObjectives: "核心学习目标",
    objectiveLabel: "核心目标 0",
    coreCurriculum: "核心学习板块",
    viewTimetable: "查看日程课表",
    location: "营地地点",
    locationDetail: "上海全球创新中心",
    locationAddr: "静安区博览路 188 号",
    availableDates: "开营日期",
    date1: "第一期：2026 年 7 月 5 - 10 日",
    date2: "第二期：2026 年 8 月 2 - 7 日",
    faqTitle: "常见问题",
    readyTitle: (
      <>
        准备好塑造 <span className="whitespace-nowrap"><span className="italic font-light">未来</span> 了吗？</span>
      </>
    ),
    readySub: "2026 年夏季营名额有限。我们将基于学员的热情、创造力以及解决困难痛点的动力进行选拔。",
    registerText: "申请报名",
    applicationsClose: "申请截止日期：2026 年 5 月 1 日",
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

        <section className="max-w-screen-xl mx-auto px-4 md:px-gutter mb-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter bg-surface-container rounded-[32px] p-xl border border-outline-variant/30">
            <div className="flex flex-col items-center text-center gap-xs">
              <MaterialIcon name="location_on" className="text-primary text-3xl shrink-0" />
              <h3 className="text-headline-md font-semibold mt-xs">{t.location}</h3>
              <p className="text-body-md text-secondary mt-xs">
                {t.locationDetail}
              </p>
              <p className="text-body-sm text-tertiary">
                {t.locationAddr}
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-xs">
              <MaterialIcon name="calendar_month" className="text-primary text-3xl shrink-0" />
              <h3 className="text-headline-md font-semibold mt-xs">{t.availableDates}</h3>
              <p className="text-body-md text-secondary mt-xs">{t.date1}</p>
              <p className="text-body-md text-secondary">{t.date2}</p>
            </div>
          </div>
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

        <section className="max-w-screen-xl mx-auto px-4 md:px-gutter py-xxl border-t border-outline-variant/30">
          <div className="bg-primary rounded-[32px] p-xl md:p-xxl flex flex-col md:flex-row items-center justify-between gap-xl">
            <div className="text-white max-w-2xl">
              <h2 className="text-display-lg leading-tight">
                {t.readyTitle}
              </h2>
              <p className="text-body-lg text-white/90 mt-md">
                {t.readySub}
              </p>
            </div>
            <div className="flex flex-col items-center gap-md">
              <RegisterButton className="bg-white text-primary px-12 py-5 rounded-full font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/10">
                {t.registerText}
              </RegisterButton>
              <span className="text-white/80 text-label-md text-sm">
                {t.applicationsClose}
              </span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

