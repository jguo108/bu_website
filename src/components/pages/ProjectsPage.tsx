"use client";

import Image from "next/image";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MaterialIcon } from "@/components/MaterialIcon";
import { images } from "@/lib/images";

const filters = [
  "All Projects",
  "app and website",
  "retail",
  "Social Impact",
  "Environmental Systems",
] as const;

const projects = [
  {
    title: "Debate Masters",
    category: "app and website",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZqQM1gLilmFnXFTme9Cybjx6MOuDEfbJJSQ9HcAjvdoYtWNEJfCb29UnzEu1KRKfpUjJvLKMdiUi_bQxqsxhGghtQ9bKvHGm_erDP7Rd8JgyGpwMnA-IWE6Xx7vVK83HhQoYH7GhLa8mbJr1jK3Ky8Ufptnvf14w4hxFe9zLUmu9H7P1xqK_I7zmFfrPgnyMdKiAx-cI_C2LU27Z3VGxTDn-qjBa1zffOIsguYPjChyEFZ60RbkibOaDPnunjBp6PRqVGopKcxiL9",
    desc: ["Built by a team of 10-year-olds who loved debating but couldn't find anyone to practice.", "They didn't just want a forum. They wanted structure, scoring, and the thrill of a real match."],
    id: "UNKN-024-01",
  },
  {
    title: "Voyd Explorer",
    category: "App and website",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPEuJ8toaxmq8qFaxueE8tXTnJfNh_R_sG9OJDF7b225rd43hn4g2hAnecw-gqrQS1U9wbYq88jW-O5-CstaHvEtHzx7dl0yXYwxhu8CDE5ewOxsxDdS2Gf2M8sSYKF2q4AZ-EnTjERfRklR-HL_YxWQS6ofxwfaJ1kaCY1EmgKl9ROJvVd3TnTR6NARqyZh31M8fuLaFzMqNak5K-YcvhXi1vvE3TRa4vfOOkkOtvsqE6rx-KkdzxIp6D4ByjqFHr78BtoMXxfVNq",
    desc: ["Designed by kids who thought every drawing app was painfully boring.", "They designed a game-based drawing app with daily challenges and streak rewards."],
    id: "UNKN-2024-08",
  },
  {
    title: "Boxed",
    category: "retail",
    img: images.project3,
    desc: ["A blind box series of physical collectibles featuring AI-generated artwork.", "Part art project, part business model."],
    id: "UNKN-2024-12",
  },
  {
    title: "Peace Maker",
    category: "socail impact",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwJLvE0uVWVZMhHxZr2REIo2eKWkytZfYKJqWI-xmhPSpUG_tWo8GkIe3lktPuKZYZoU2LvWbV0F5QirpH3WEVJIwbNR6LznZksRpcDBhYbzZhB3AOKiTQmRvyN8yaOpcNT7lW6WE3h3hrcOYkXMvRJUiypHFyQPVhoXaZOzTdZPYC0VQtOoeqea_Z-RpKhlGGtPTga4JmxjuTxeMCUcsYnjXsPknSIHD4MpDUFfgGmg2ZSmzL_EV-53CsySOVUn-jWr-k2ZQH6f9A",
    desc: ["A desk toy that settles arguments between friends fairly.", "Simple idea. Surprisingly hard to make. They made it anyway."],
    id: "UNKN-2024-05",
  },
  {
    title: "Qing Luan",
    category: "entertainment",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuALnksZb8MhPhrvxP5u_njoHeI9Fnk2imxiKtrFdS79aqj-qz-F0OoNoGV_DVrCBK0NxgP4vWzXYwtAKRmlNZXhcXKsQr2BVe1iVejpLv66WmwheA__hOeCjVJ4BJ0Xa0ouoKNIZEJydjJFNkUkQxL9TNwRtxOi2M53rluihwjyEGRqP7EgxatQ4Qp3jh5gia-LVQqJLnqeGA7dC8Kgkh5XBzEeQgLxH1xNGlByH8iJwC3NgsOa6ng0nlRzIcGrWaJ-eB5deTMyArU9",
    desc: ["An ethical AI pop star agency with transparent ownership and fair revenue splits."],
    id: "UNKN-2024-03",
  },
  {
    title: "Privacy Shield Protocol",
    category: "Social Impact",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd5NKDBlDkurLMi9JoMrzbIqZulqqU-BiFfoHUVHVEG86jgHvJZ99sBwChtgUcNVqIdZVMPIUDJG95EHp3A5B_LqoxkiLeXhMImWpudSk19sqMSCf1f7GsztTFdU4v_FkEN3eQaebH8UGcUdXPIn1_eO6i1iZ9uCf1pKQhdYZsB-XGVNRf1e8RP1LCMkbup-VDpbLW9-xblcnrMW9nmf2O-S8Uz56gcd7EVqFP3QOaRtUxlvJ0RjwIpAvUgS1VIJ5uYCOeOu1hjcLi",
    desc: ["A blockchain-based identity verification system designed specifically for stateless individuals."],
    id: "UNKN-2024-19",
  },
];

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All Projects");

  const filtered =
    activeFilter === "All Projects"
      ? projects
      : projects.filter(
          (p) => p.category.toLowerCase() === activeFilter.toLowerCase()
        );

  return (
    <>
      <Header />
      <main className="max-w-screen-2xl mx-auto px-4 md:px-8 py-xxl">
        <header className="mb-xl">
          <h1 className="text-display-lg text-on-surface mb-md">Student Projects</h1>
          <div className="text-body-lg text-on-surface-variant max-w-2xl space-y-4">
            <p className="leading-[1.7]">
              These aren&apos;t school assignments. They&apos;re not thought experiments.
            </p>
            <p className="leading-[1.7]">
              They&apos;re <strong>real products</strong> — built around real problems,
              pitched like real businesses, and created by kids who refused to wait until
              they were older to make something worth using.
            </p>
            <p className="leading-[1.7]">
              That&apos;s exactly where every great business starts.
            </p>
          </div>
        </header>

        <div className="flex flex-wrap items-center gap-sm mb-xl border-b border-border pb-md">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActiveFilter(f)}
              className={`px-md py-xs text-label-md rounded-full uppercase transition-colors ${
                activeFilter === f
                  ? "bg-primary text-white"
                  : "bg-surface-container-highest text-on-surface-variant hover:bg-primary hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-xs text-on-surface-variant hidden sm:flex">
            <MaterialIcon name="filter_list" className="text-sm" />
            <span className="text-label-md uppercase">Sort by Date</span>
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
                  {project.category}
                </span>
                <h3 className="text-headline-lg mb-sm group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="text-body-sm text-on-surface-variant mb-md flex-grow space-y-2">
                  {project.desc.map((d, i) => (
                    <p key={i}>
                      {d.startsWith("Built") || d.startsWith("Designed") || d.startsWith("A ") ? (
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
            className="border border-[#1A1A1A] text-[#1A1A1A] text-label-md uppercase px-xl py-md hover:bg-[#1A1A1A] hover:text-white transition-colors duration-300 rounded-xl"
          >
            Load More Projects
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
