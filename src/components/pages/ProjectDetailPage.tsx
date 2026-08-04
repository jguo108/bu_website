"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MaterialIcon } from "@/components/MaterialIcon";
import { useLanguage } from "@/lib/LanguageContext";
import projectsData from "../../../projects_data.json";

export function ProjectDetailPage({ id }: { id: string }) {
  const { language } = useLanguage();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    notFound();
  }

  const t = {
    en: { back: "Back to Projects", team: "Team", term: "Term" },
    zh: { back: "返回学员项目", team: "团队", term: "期数" }
  }[language];

  return (
    <div className="bg-[#FFFFFF] text-[#0B0B0C] font-sans min-h-screen">
      <Header variant="white" />
      <main className="max-w-[800px] mx-auto px-6 py-12">
        <Link href="/projects" className="inline-flex items-center gap-2 text-[#6E6E73] hover:text-[#FF5A15] font-semibold text-sm mb-8 transition-colors">
          <MaterialIcon name="arrow_back" className="text-[18px]" />
          {t.back}
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[12px] font-extrabold text-[#FF5A15] tracking-wider">{project.no.t} {project.no.d}</span>
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#FFF1EA] text-[#E14700] border border-[#FFD9C6]">{project.chip}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">{project.title}</h1>
          <h2 className="text-xl md:text-2xl text-[#6E6E73] font-semibold mb-6">{project.subtitle}</h2>
          <p className="text-lg md:text-xl font-bold text-[#3A3A3F]">{project.tagline}</p>
        </header>

        <div className="flex flex-wrap gap-x-6 gap-y-2 p-4 bg-[#F6F5F3] border border-[#E7E5E1] rounded-xl text-sm text-[#3A3A3F] mb-10">
          {project.team && (
            <span className="inline-flex items-baseline gap-2">
              <span className="font-extrabold text-[#9A9AA1] tracking-widest text-xs">{t.team}</span>
              <span className="font-semibold">{project.team}</span>
            </span>
          )}
          <span className="inline-flex items-baseline gap-2">
            <span className="font-extrabold text-[#9A9AA1] tracking-widest text-xs">{t.term}</span>
            <span className="font-semibold">{project.termLabel}</span>
          </span>
        </div>

        <figure className="mb-12 rounded-2xl overflow-hidden border border-[#E7E5E1] bg-[#F1EFEC]">
          <img src={project.img} alt={project.title} className="w-full h-auto object-contain" />
        </figure>

        <article className="prose prose-lg max-w-none prose-p:text-[#33333A] prose-p:leading-relaxed">
          <p className="text-xl text-[#2C2C31] font-medium mb-10 leading-[1.8]" dangerouslySetInnerHTML={{ __html: project.lede }}></p>
          
          <div className="flex flex-col gap-8">
            {project.rows.map((row, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start">
                <div className={`flex-none text-xs font-extrabold tracking-widest text-white rounded-lg text-center py-1.5 px-4 w-max ${row.hi ? 'bg-[#FF5A15]' : 'bg-[#0B0B0C]'}`}>
                  {row.k}
                </div>
                <p className="m-0 text-[16px] text-[#33333A] leading-[1.8]" dangerouslySetInnerHTML={{ __html: row.v as string }}></p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-[#F6F5F3] border-l-4 border-[#FF5A15] rounded-r-xl text-lg font-bold text-[#2C2C31]">
            {project.slogan}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
