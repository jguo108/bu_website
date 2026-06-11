"use client";

import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MaterialIcon } from "@/components/MaterialIcon";
import { RegisterButton } from "@/components/RegisterButton";
import { images } from "@/lib/images";
import { useLanguage } from "@/lib/LanguageContext";

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
        Summer 2026 Innovathon:{" "}
        <span className="text-primary font-black">Future Systems</span>
      </>
    ),
    heroSub: "An intensive, week-long residency for young pioneers to conceptualize, prototype, and build the ethical frameworks and creative tools of the next decade.",
    backToCamp: "← Back to camp overview",
    location: "Location",
    locationDetail: "Global Innovation Hub, Shanghai",
    locationAddr: "No. 188 Museum Lane, Jing'an District",
    availableDates: "Available Dates",
    date1: "Session 1: July 5-10, 2026",
    date2: "Session 2: August 2-7, 2026",
    coreCurriculum: "Core Curriculum",
    viewTimetable: "View Timetable",
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
        2026 夏季 Innovathon：
        <br />
        <span className="text-primary font-black">未来系统设计营</span>
      </>
    ),
    heroSub: "为期一周的紧凑集训，专为年轻探索先锋设计，旨在构想、开发并建立未来十年的伦理框架与创意工具。",
    backToCamp: "← 返回创新营概览",
    location: "营地地点",
    locationDetail: "上海全球创新中心",
    locationAddr: "静安区博览路 188 号",
    availableDates: "开营日期",
    date1: "第一期：2026 年 7 月 5 - 10 日",
    date2: "第二期：2026 年 8 月 2 - 7 日",
    coreCurriculum: "核心学习板块",
    viewTimetable: "查看日程课表",
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

export function Innovathon2026Page() {
  const { language } = useLanguage();
  const tracks = language === "zh" ? tracksZh : tracksEn;
  const faqs = language === "zh" ? faqsZh : faqsEn;
  const t = content[language];

  return (
    <>
      <Header variant="white" />
      <main className="mt-0">
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-xxl">
          <div className="flex flex-col items-center text-center gap-md">
            <h1 className="text-[40px] md:text-[64px] font-semibold leading-tight max-w-4xl">
              {t.heroTitle}
            </h1>
            <p className="text-body-lg text-secondary max-w-2xl">
              {t.heroSub}
            </p>
            <Link
              href="/programs/camps"
              className="text-label-md text-secondary uppercase hover:text-primary"
            >
              {t.backToCamp}
            </Link>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 md:px-6 mb-xxl">
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

        <section className="max-w-7xl mx-auto px-4 md:px-6 mb-xxl">
          <div className="mb-xl">
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

        <section className="max-w-7xl mx-auto px-4 md:px-6 py-xxl border-t border-outline-variant/30">
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

        <section className="max-w-7xl mx-auto px-4 md:px-6 py-xxl">
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

