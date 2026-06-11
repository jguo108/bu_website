"use client";

import Image from "next/image";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MaterialIcon } from "@/components/MaterialIcon";
import { images } from "@/lib/images";
import { useLanguage } from "@/lib/LanguageContext";

const filtersEn = [
  "All Projects",
  "app and website",
  "retail",
  "Social Impact",
  "Environmental Systems",
] as const;

const filtersZh = [
  "全部项目",
  "应用与网站",
  "零售与文创",
  "社会影响力",
  "环境系统",
] as const;

const projectsEn = [
  {
    title: "Debate Masters",
    categoryKey: "app and website",
    categoryLabel: "app and website",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZqQM1gLilmFnXFTme9Cybjx6MOuDEfbJJSQ9HcAjvdoYtWNEJfCb29UnzEu1KRKfpUjJvLKMdiUi_bQxqsxhGghtQ9bKvHGm_erDP7Rd8JgyGpwMnA-IWE6Xx7vVK83HhQoYH7GhLa8mbJr1jK3Ky8Ufptnvf14w4hxFe9zLUmu9H7P1xqK_I7zmFfrPgnyMdKiAx-cI_C2LU27Z3VGxTDn-qjBa1zffOIsguYPjChyEFZ60RbkibOaDPnunjBp6PRqVGopKcxiL9",
    desc: ["Built by a team of 10-year-olds who loved debating but couldn't find anyone to practice.", "They didn't just want a forum. They wanted structure, scoring, and the thrill of a real match."],
    id: "UNKN-024-01",
  },
  {
    title: "Voyd Explorer",
    categoryKey: "app and website",
    categoryLabel: "app and website",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPEuJ8toaxmq8qFaxueE8tXTnJfNh_R_sG9OJDF7b225rd43hn4g2hAnecw-gqrQS1U9wbYq88jW-O5-CstaHvEtHzx7dl0yXYwxhu8CDE5ewOxsxDdS2Gf2M8sSYKF2q4AZ-EnTjERfRklR-HL_YxWQS6ofxwfaJ1kaCY1EmgKl9ROJvVd3TnTR6NARqyZh31M8fuLaFzMqNak5K-YcvhXi1vvE3TRa4vfOOkkOtvsqE6rx-KkdzxIp6D4ByjqFHr78BtoMXxfVNq",
    desc: ["Designed by kids who thought every drawing app was painfully boring.", "They designed a game-based drawing app with daily challenges and streak rewards."],
    id: "UNKN-2024-08",
  },
  {
    title: "Boxed",
    categoryKey: "retail",
    categoryLabel: "retail",
    img: images.project3,
    desc: ["A blind box series of physical collectibles featuring AI-generated artwork.", "Part art project, part business model."],
    id: "UNKN-2024-12",
  },
  {
    title: "Peace Maker",
    categoryKey: "Social Impact",
    categoryLabel: "Social Impact",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwJLvE0uVWVZMhHxZr2REIo2eKWkytZfYKJqWI-xmhPSpUG_tWo8GkIe3lktPuKZYZoU2LvWbV0F5QirpH3WEVJIwbNR6LznZksRpcDBhYbzZhB3AOKiTQmRvyN8yaOpcNT7lW6WE3h3hrcOYkXMvRJUiypHFyQPVhoXaZOzTdZPYC0VQtOoeqea_Z-RpKhlGGtPTga4JmxjuTxeMCUcsYnjXsPknSIHD4MpDUFfgGmg2ZSmzL_EV-53CsySOVUn-jWr-k2ZQH6f9A",
    desc: ["A desk toy that settles arguments between friends fairly.", "Simple idea. Surprisingly hard to make. They made it anyway."],
    id: "UNKN-2024-05",
  },
  {
    title: "Qing Luan",
    categoryKey: "app and website",
    categoryLabel: "entertainment",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuALnksZb8MhPhrvxP5u_njoHeI9Fnk2imxiKtrFdS79aqj-qz-F0OoNoGV_DVrCBK0NxgP4vWzXYwtAKRmlNZXhcXKsQr2BVe1iVejpLv66WmwheA__hOeCjVJ4BJ0Xa0ouoKNIZEJydjJFNkUkQxL9TNwRtxOi2M53rluihwjyEGRqP7EgxatQ4Qp3jh5gia-LVQqJLnqeGA7dC8Kgkh5XBzEeQgLxH1xNGlByH8iJwC3NgsOa6ng0nlRzIcGrWaJ-eB5deTMyArU9",
    desc: ["An ethical AI pop star agency with transparent ownership and fair revenue splits."],
    id: "UNKN-2024-03",
  },
  {
    title: "Privacy Shield Protocol",
    categoryKey: "Social Impact",
    categoryLabel: "Social Impact",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd5NKDBlDkurLMi9JoMrzbIqZulqqU-BiFfoHUVHVEG86jgHvJZ99sBwChtgUcNVqIdZVMPIUDJG95EHp3A5B_LqoxkiLeXhMImWpudSk19sqMSCf1f7GsztTFdU4v_FkEN3eQaebH8UGcUdXPIn1_eO6i1iZ9uCf1pKQhdYZsB-XGVNRf1e8RP1LCMkbup-VDpbLW9-xblcnrMW9nmf2O-S8Uz56gcd7EVqFP3QOaRtUxlvJ0RjwIpAvUgS1VIJ5uYCOeOu1hjcLi",
    desc: ["A blockchain-based identity verification system designed specifically for stateless individuals."],
    id: "UNKN-2024-19",
  },
];

const projectsZh = [
  {
    title: "辩论大师 (Debate Masters)",
    categoryKey: "app and website",
    categoryLabel: "应用与网站",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZqQM1gLilmFnXFTme9Cybjx6MOuDEfbJJSQ9HcAjvdoYtWNEJfCb29UnzEu1KRKfpUjJvLKMdiUi_bQxqsxhGghtQ9bKvHGm_erDP7Rd8JgyGpwMnA-IWE6Xx7vVK83HhQoYH7GhLa8mbJr1jK3Ky8Ufptnvf14w4hxFe9zLUmu9H7P1xqK_I7zmFfrPgnyMdKiAx-cI_C2LU27Z3VGxTDn-qjBa1zffOIsguYPjChyEFZ60RbkibOaDPnunjBp6PRqVGopKcxiL9",
    desc: ["由一群热爱辩论但找不到练习对手的 10 岁孩子构建。", "他们不仅想要一个论坛，更渴望比赛的规则结构、评分机制以及真实对决的刺激感。"],
    id: "UNKN-024-01",
  },
  {
    title: "Voyd Explorer",
    categoryKey: "app and website",
    categoryLabel: "应用与网站",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPEuJ8toaxmq8qFaxueE8tXTnJfNh_R_sG9OJDF7b225rd43hn4g2hAnecw-gqrQS1U9wbYq88jW-O5-CstaHvEtHzx7dl0yXYwxhu8CDE5ewOxsxDdS2Gf2M8sSYKF2q4AZ-EnTjERfRklR-HL_YxWQS6ofxwfaJ1kaCY1EmgKl9ROJvVd3TnTR6NARqyZh31M8fuLaFzMqNak5K-YcvhXi1vvE3TRa4vfOOkkOtvsqE6rx-KkdzxIp6D4ByjqFHr78BtoMXxfVNq",
    desc: ["由那些觉得所有绘画应用都枯燥无味的学员们设计。", "他们开发了一款游戏化的绘画应用，提供每日挑战和连胜奖励。"],
    id: "UNKN-2024-08",
  },
  {
    title: "Boxed 盲盒产品线",
    categoryKey: "retail",
    categoryLabel: "零售与文创",
    img: images.project3,
    desc: ["融入 AI 生成艺术作品的实体收藏品盲盒系列。", "既是一个创意艺术项目，也是一个可行的商业模式。"],
    id: "UNKN-2024-12",
  },
  {
    title: "和事佬 (Peace Maker)",
    categoryKey: "Social Impact",
    categoryLabel: "社会影响力",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwJLvE0uVWVZMhHxZr2REIo2eKWkytZfYKJqWI-xmhPSpUG_tWo8GkIe3lktPuKZYZoU2LvWbV0F5QirpH3WEVJIwbNR6LznZksRpcDBhYbzZhB3AOKiTQmRvyN8yaOpcNT7lW6WE3h3hrcOYkXMvRJUiypHFyQPVhoXaZOzTdZPYC0VQtOoeqea_Z-RpKhlGGtPTga4JmxjuTxeMCUcsYnjXsPknSIHD4MpDUFfgGmg2ZSmzL_EV-53CsySOVUn-jWr-k2ZQH6f9A",
    desc: ["一款用于公正解决朋友间争吵的桌面玩具。", "想法很简单，实现过程却出乎意料地困难。但他们最终成功做到了。"],
    id: "UNKN-2024-05",
  },
  {
    title: "青鸾虚拟偶像 (Qing Luan)",
    categoryKey: "app and website",
    categoryLabel: "娱乐与文化",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuALnksZb8MhPhrvxP5u_njoHeI9Fnk2imxiKtrFdS79aqj-qz-F0OoNoGV_DVrCBK0NxgP4vWzXYwtAKRmlNZXhcXKsQr2BVe1iVejpLv66WmwheA__hOeCjVJ4BJ0Xa0ouoKNIZEJydjJFNkUkQxL9TNwRtxOi2M53rluihwjyEGRqP7EgxatQ4Qp3jh5gia-LVQqJLnqeGA7dC8Kgkh5XBzEeQgLxH1xNGlByH8iJwC3NgsOa6ng0nlRzIcGrWaJ-eB5deTMyArU9",
    desc: ["一个产权透明、收入分成合理的合规 AI 虚拟偶像经纪公司。"],
    id: "UNKN-2024-03",
  },
  {
    title: "Privacy Shield 隐私验证协议",
    categoryKey: "Social Impact",
    categoryLabel: "社会影响力",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd5NKDBlDkurLMi9JoMrzbIqZulqqU-BiFfoHUVHVEG86jgHvJZ99sBwChtgUcNVqIdZVMPIUDJG95EHp3A5B_LqoxkiLeXhMImWpudSk19sqMSCf1f7GsztTFdU4v_FkEN3eQaebH8UGcUdXPIn1_eO6i1iZ9uCf1pKQhdYZsB-XGVNRf1e8RP1LCMkbup-VDpbLW9-xblcnrMW9nmf2O-S8Uz56gcd7EVqFP3QOaRtUxlvJ0RjwIpAvUgS1VIJ5uYCOeOu1hjcLi",
    desc: ["专为无国籍人士设计的基于区块链的身份验证系统。"],
    id: "UNKN-2024-19",
  },
];

const content = {
  en: {
    title: "Student Projects",
    desc1: "These aren't school assignments. They're not thought experiments.",
    desc2: (
      <>
        They're <strong>real products</strong> — built around real problems, pitched like real businesses, and created by kids who refused to wait until they were older to make something worth using.
      </>
    ),
    desc3: "That's exactly where every great business starts.",
    sortByDate: "Sort by Date",
    loadMore: "Load More Projects",
  },
  zh: {
    title: "学员项目",
    desc1: "这些不是普通的课堂作业，更不是空洞的思想实验。",
    desc2: (
      <>
        它们是<strong>解决真实痛点的产品</strong>——围绕实际问题构建，像真实的初创企业一样进行商业路演。这群孩子们拒绝等待长大后再去创造有价值的东西。
      </>
    ),
    desc3: "而这，正是一切伟大商业开始的地方。",
    sortByDate: "按日期排序",
    loadMore: "加载更多项目",
  }
};

export function ProjectsPage() {
  const [activeFilterIndex, setActiveFilterIndex] = useState<number>(0);
  const { language } = useLanguage();
  const filters = language === "zh" ? filtersZh : filtersEn;
  const projects = language === "zh" ? projectsZh : projectsEn;
  const t = content[language];

  const filtered =
    activeFilterIndex === 0
      ? projects
      : projects.filter(
          (p) => p.categoryKey.toLowerCase() === filtersEn[activeFilterIndex].toLowerCase()
        );

  return (
    <>
      <Header />
      <main className="max-w-screen-2xl mx-auto px-4 md:px-8 py-xxl">
        <header className="mb-xl">
          <h1 className="text-display-lg text-on-surface mb-md">{t.title}</h1>
          <div className="text-body-lg text-on-surface-variant max-w-2xl space-y-4">
            <p className="leading-[1.7]">{t.desc1}</p>
            <p className="leading-[1.7]">{t.desc2}</p>
            <p className="leading-[1.7]">{t.desc3}</p>
          </div>
        </header>

        <div className="flex flex-wrap items-center gap-sm mb-xl border-b border-border pb-md">
          {filters.map((f, i) => (
            <button
              key={f}
              type="button"
              onClick={() => setActiveFilterIndex(i)}
              className={`px-md py-xs text-label-md rounded-full uppercase transition-colors cursor-pointer ${
                activeFilterIndex === i
                  ? "bg-primary text-white"
                  : "bg-surface-container-highest text-on-surface-variant hover:bg-primary hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-xs text-on-surface-variant hidden sm:flex">
            <MaterialIcon name="filter_list" className="text-sm" />
            <span className="text-label-md uppercase">{t.sortByDate}</span>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="bg-card border border-border flex flex-col group hover:border-primary transition-all duration-300 rounded-2xl overflow-hidden"
            >
              <div className="aspect-video w-full overflow-hidden bg-surface-dim relative rounded-t-2xl">
                <Image
                  alt={project.title}
                  src={project.img}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-lg flex flex-col flex-grow">
                <span className="bg-surface-container text-on-secondary-container px-sm py-1 text-[10px] uppercase tracking-widest rounded-lg w-fit mb-sm">
                  {project.categoryLabel}
                </span>
                <h3 className="text-headline-lg mb-sm group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="text-body-sm text-on-surface-variant mb-md flex-grow space-y-2">
                  {project.desc.map((d, i) => (
                    <p key={i}>
                      {d.startsWith("Built") || d.startsWith("Designed") || d.startsWith("A ") || d.startsWith("由") || d.startsWith("融入") || d.startsWith("专为") ? (
                        <em>{d}</em>
                      ) : (
                        d
                      )}
                    </p>
                  ))}
                </div>
                <div className="knowledge-block-thin pl-md py-1 mt-auto">
                  <span className="text-code text-on-surface">ID: {project.id}</span>
                </div>
              </div>
            </article>
          ))}
        </section>

        <div className="mt-xxl flex justify-center">
          <button
            type="button"
            className="border border-[#1A1A1A] text-[#1A1A1A] text-label-md uppercase px-xl py-md hover:bg-[#1A1A1A] hover:text-white transition-colors duration-300 rounded-xl cursor-pointer"
          >
            {t.loadMore}
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}

