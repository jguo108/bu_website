"use client";

import Link from "next/link";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MaterialIcon } from "@/components/MaterialIcon";
import { useLanguage } from "@/lib/LanguageContext";
import projectsData from "../../../projects_data.json";

const filtersEn = [
  { label: "Term", key: "term", options: [{ v: "all", l: "All" }, { v: "2026s1", l: "2026 Summer" }, { v: "2026w", l: "2026 Winter" }] },
  { label: "Category", key: "cat", options: [{ v: "all", l: "All" }, { v: "tool", l: "Tools · 8" }, { v: "game", l: "Games · 4" }, { v: "biz", l: "Business · 2" }] }
];

const filtersZh = [
  { label: "期数", key: "term", options: [{ v: "all", l: "全部" }, { v: "2026s1", l: "2026 夏季创客松" }, { v: "2026w", l: "2026 冬季创客松" }] },
  { label: "类型", key: "cat", options: [{ v: "all", l: "全部" }, { v: "tool", l: "工具类 App · 8" }, { v: "game", l: "游戏类 · 4" }, { v: "biz", l: "商业模式 · 2" }] }
];

const content = {
  en: {
    heroEyebrow: "BOUNDARY UNKNOWN",
    heroTitle: "Student Projects",
    heroEntitle: "Explore our projects",
    heroLead: (
      <>
        They aren't just sketching on paper—they're <b>drawing drafts, running market research, refining ideas</b>, and using AI to turn them into real, playable products. What's more impressive is that every project has figured out three things: <b>What am I making, who am I selling to, and why me.</b>
      </>
    ),
    stats: [
      { n: "14", t: "Student Projects" },
      { n: "2", t: "Hackathons · Ongoing" },
      { n: "50+", t: "Young Creators" },
      { n: "2–5", t: "Days to Prototype" }
    ],
    totalProjects: "Total {n} projects",
    indexTitle: "Quick Glance",
    emptyMsg: "No projects found for the selected filters.",
    closingTitle: "Your Turn",
    closingP1: "These projects don't have flashy tech packaging, but they all start from a very specific, real problem—a cold war with parents, a video of walking alone at night, or just 'why aren't the fun games made for us'.",
    closingP2: "What's more precious is that these kids didn't stop at 'thinking about it'. Every term, new projects will be added.",
    cta: "Explore Our Programs →",
    ctaLink: "/",
    footerText: "Boundary Unknown · Student Projects · Content compiled from student pitches",
    viewDetails: "View Details"
  },
  zh: {
    heroEyebrow: "未知边界 · BOUNDARY UNKNOWN",
    heroTitle: "学员项目",
    heroEntitle: "Explore our projects",
    heroLead: (
      <>
        他们不是在纸上画画写写，而是先<b>手绘草图、跑市场调研、反复打磨想法</b>，再借助 AI 把这些变成能扫码就玩、能真实运行的产品——从家庭沟通到深夜安全，从足球游戏到在线辩论。更难得的是，每个项目都想清楚了三件事：<b>我做的是什么、卖给谁、凭什么是我。</b>
      </>
    ),
    stats: [
      { n: "14", t: "个学员项目" },
      { n: "2", t: "期创客松 · 持续更新" },
      { n: "50+", t: "位小创造者" },
      { n: "2–5", t: "天做出可运行原型" }
    ],
    totalProjects: "共 {n} 个项目",
    indexTitle: "项目速览",
    emptyMsg: "这个筛选条件下暂时没有项目。",
    closingTitle: "轮到你了",
    closingP1: "这些项目没有华丽的技术包装，却都从一个特别具体、特别真实的问题出发——可能是自己和爸妈的一次冷战，可能是一条深夜独行的视频，也可能只是「为什么好玩的游戏都不是给我们做的」。",
    closingP2: "更难得的是，这群孩子没有停在「想一想」。每一期，都还会有新的项目加进来。",
    cta: "了解未知边界的课程 →",
    ctaLink: "/",
    footerText: "未知边界 Boundary Unknown · 学员项目展 · 页面内容由学员路演资料整理",
    viewDetails: "查看详情"
  }
};

export function ProjectsPage() {
  const { language } = useLanguage();
  const t = content[language];
  const filters = language === "zh" ? filtersZh : filtersEn;
  // For now, use the Chinese data for both languages, as translating 14 projects is extensive.
  // In a real scenario, we'd have a projectsEn array as well.
  const projects = projectsData;

  const [termFilter, setTermFilter] = useState("all");
  const [catFilter, setCatFilter] = useState("all");

  const filteredProjects = projects.filter(p => 
    (termFilter === "all" || p.term === termFilter) &&
    (catFilter === "all" || p.cat === catFilter)
  );

  return (
    <div className="bg-[#FFFFFF] text-[#0B0B0C] font-sans min-h-screen">
      <Header variant="white" />
      
      {/* HERO */}
      <header className="bg-[#0B0B0C] text-white pt-[74px] pb-[70px] relative overflow-hidden">
        <div className="absolute -bottom-[180px] -right-[140px] w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,90,21,0.30),rgba(255,90,21,0)_68%)] pointer-events-none" />
        <div className="max-w-[1080px] mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-[9px] text-[12px] font-extrabold tracking-[0.2em] text-[#FF5A15] mb-[22px] before:content-[''] before:w-[26px] before:h-[2px] before:bg-[#FF5A15]">
            {t.heroEyebrow}
          </div>
          <h1 className="text-[clamp(40px,7vw,72px)] leading-[1.1] mb-[10px] font-extrabold tracking-[0.02em]">
            {t.heroTitle}
          </h1>
          <p className="m-0 mb-[26px] text-[clamp(16px,2.2vw,22px)] font-bold tracking-[0.09em] text-[#FF5A15]">
            {t.heroEntitle}
          </p>
          <p className="max-w-[660px] text-[17px] text-[#C4C4CB] m-0 leading-[1.75]">
            {t.heroLead}
          </p>
          <div className="flex flex-wrap gap-[44px] mt-[44px] pt-[32px] border-t border-white/15">
            {t.stats.map((stat, i) => (
              <div key={i}>
                <div className="text-[34px] font-extrabold tracking-[-0.02em] leading-none">
                  {stat.n.includes("14") || stat.n.includes("2") || stat.n.includes("50") ? (
                    <span className="text-[#FF5A15]">{stat.n}</span>
                  ) : (
                    stat.n
                  )}
                </div>
                <div className="text-[13px] text-[#8C8C93] mt-[8px] font-semibold tracking-[0.04em]">
                  {stat.t}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* FILTERS */}
      <nav className="sticky top-[60px] md:top-[72px] z-50 bg-white/95 backdrop-blur-md border-b border-[#E7E5E1]">
        <div className="max-w-[1080px] mx-auto px-6 py-[14px] flex items-center gap-[10px] flex-wrap">
          <div className="flex items-center gap-[8px] flex-wrap">
            <span className="text-[11px] font-extrabold tracking-[0.16em] text-[#9A9AA1] mr-[2px]">{filters[0].label}</span>
            {filters[0].options.map(opt => (
              <button 
                key={opt.v}
                onClick={() => setTermFilter(opt.v)}
                className={`border border-[#E7E5E1] text-[13.5px] font-bold px-[15px] py-[7px] rounded-full cursor-pointer transition-colors whitespace-nowrap ${termFilter === opt.v ? 'bg-[#0B0B0C] border-[#0B0B0C] text-white' : 'bg-white text-[#3A3A3F] hover:border-[#BFBDB8]'}`}
              >
                {opt.l}
              </button>
            ))}
          </div>
          <div className="w-[1px] h-[20px] bg-[#E7E5E1] mx-[4px] hidden md:block"></div>
          <div className="flex items-center gap-[8px] flex-wrap">
            <span className="text-[11px] font-extrabold tracking-[0.16em] text-[#9A9AA1] mr-[2px]">{filters[1].label}</span>
            {filters[1].options.map(opt => (
              <button 
                key={opt.v}
                onClick={() => setCatFilter(opt.v)}
                className={`border border-[#E7E5E1] text-[13.5px] font-bold px-[15px] py-[7px] rounded-full cursor-pointer transition-colors whitespace-nowrap ${catFilter === opt.v ? 'bg-[#FF5A15] border-[#FF5A15] text-white' : 'bg-white text-[#3A3A3F] hover:border-[#BFBDB8]'}`}
              >
                {opt.l}
              </button>
            ))}
          </div>
          <div className="w-full md:w-auto md:ml-auto text-[13px] text-[#6E6E73] font-semibold order-last md:order-none mt-2 md:mt-0">
            {t.totalProjects.replace('{n}', filteredProjects.length.toString())}
          </div>
        </div>
      </nav>

      <main className="max-w-[1080px] mx-auto px-6">
        {/* INDEX */}
        <section className="py-[34px] pb-[6px]">
          <h2 className="text-[12px] tracking-[0.2em] text-[#9A9AA1] font-extrabold m-0 mb-[14px]">{t.indexTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[10px]">
            {filteredProjects.map(p => (
              <a 
                key={p.id} 
                href={`#${p.id}`}
                className="flex items-center gap-[11px] no-underline border border-[#E7E5E1] rounded-[12px] p-[11px_13px] bg-white transition-all hover:border-[#FF5A15] hover:bg-[#FFF1EA] hover:-translate-y-[1px]"
              >
                <span className="text-[10px] font-extrabold text-[#FF5A15] tracking-[0.06em] whitespace-nowrap">{p.no.t} {p.no.d}</span>
                <span className="text-[14.5px] font-bold">{p.title}</span>
                <span className="ml-auto text-[11px] text-[#6E6E73] font-semibold">{p.chip}</span>
              </a>
            ))}
          </div>
        </section>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] py-[34px] pb-[10px]">
          {filteredProjects.map(p => (
            <Link key={p.id} href={`/projects/${p.id}`} className="group flex flex-col bg-white border border-[#E7E5E1] rounded-[20px] overflow-hidden hover:border-[#FF5A15] hover:shadow-[0_8px_30px_rgba(255,90,21,0.12)] transition-all duration-300">
              <div className="aspect-[4/3] relative overflow-hidden bg-[#F1EFEC] border-b border-[#E7E5E1]">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-[24px] flex flex-col flex-1">
                <div className="flex justify-between items-start mb-[16px]">
                  <span className="text-[10px] font-extrabold text-[#FF5A15] tracking-[0.12em]">{p.no.t} {p.no.d}</span>
                  <span className="text-[10px] font-bold px-[10px] py-[4px] rounded-full bg-[#FFF1EA] text-[#E14700] border border-[#FFD9C6] whitespace-nowrap">{p.chip}</span>
                </div>
                <h3 className="text-[20px] font-extrabold tracking-[-0.01em] mb-[6px] group-hover:text-[#FF5A15] transition-colors line-clamp-1">{p.title}</h3>
                <p className="text-[13px] text-[#6E6E73] font-semibold mb-[12px] line-clamp-1">{p.subtitle}</p>
                <p className="text-[14px] text-[#3A3A3F] font-medium leading-[1.6] line-clamp-2 mb-[20px]">{p.tagline}</p>
                
                <div className="mt-auto pt-[16px] border-t border-[#E7E5E1] flex justify-between items-center">
                  <span className="text-[11px] text-[#9A9AA1] font-extrabold tracking-wider">{p.termLabel}</span>
                  <span className="text-[13px] font-bold text-[#FF5A15] flex items-center gap-[4px] group-hover:translate-x-1 transition-transform">
                    {t.viewDetails} <MaterialIcon name="arrow_forward" className="text-[16px]" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="py-[70px] text-center text-[#6E6E73] text-[15px]">
            {t.emptyMsg}
          </p>
        )}

        {/* CLOSING */}
        <section className="bg-[#0B0B0C] text-white rounded-[18px] sm:rounded-[24px] p-[40px_24px] sm:p-[52px_40px] my-[44px] mb-[60px] text-center relative overflow-hidden">
          <div className="absolute -top-[120px] -right-[120px] w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,90,21,0.26),rgba(255,90,21,0)_68%)] pointer-events-none" />
          <div className="relative z-10">
            <h3 className="m-0 mb-[16px] text-[27px] font-extrabold tracking-[-0.015em]">{t.closingTitle}</h3>
            <p className="max-w-[640px] mx-auto mb-[12px] text-[#B8B8C0] text-[15.5px]">{t.closingP1}</p>
            <p className="max-w-[640px] mx-auto mb-[12px] text-[#B8B8C0] text-[15.5px]">{t.closingP2}</p>
            <a href={t.ctaLink} className="inline-block mt-[24px] bg-[#FF5A15] text-white no-underline font-extrabold text-[15px] px-[28px] py-[13px] rounded-full transition-colors hover:bg-white hover:text-[#0B0B0C]">
              {t.cta}
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#E7E5E1] py-[28px] pb-[44px] text-center text-[#9A9AA1] text-[12.5px]">
        <div dangerouslySetInnerHTML={{ __html: t.footerText.replace('未知边界 Boundary Unknown', '<b>未知边界 Boundary Unknown</b>') }}></div>
      </footer>
    </div>
  );
}
