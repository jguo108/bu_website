"use client";

import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MaterialIcon } from "@/components/MaterialIcon";
import { RegisterButton } from "@/components/RegisterButton";
import { images } from "@/lib/images";
import { useLanguage } from "@/lib/LanguageContext";



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

