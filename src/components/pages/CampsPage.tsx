"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MaterialIcon } from "@/components/MaterialIcon";
import { RegisterButton } from "@/components/RegisterButton";
import { images } from "@/lib/images";

type TabId = "learning-objectives" | "camp-detail" | "apply" | "faq";

const tabs: { id: TabId; label: string }[] = [
  { id: "learning-objectives", label: "Learning Objectives" },
  { id: "camp-detail", label: "Camp Detail" },
  { id: "apply", label: "Apply" },
  { id: "faq", label: "F&Q" },
];

const objectives = [
  {
    title: "Think & Act Like an Entrepreneur",
    body: "Kids don't just learn about entrepreneurship — they practice it. They identify real problems, make decisions under uncertainty, take smart risks, and iterate fast. The mindset of a founder isn't taught through lectures here. It's built through doing.",
  },
  {
    title: "AI Literacy - Use it, Don't Feat it",
    body: "AI is the defining tool of their generation. Kids learn to direct AI with intention — turning vague ideas into working products. They understand what AI can and can't do, how to prompt it effectively, and how to stay in the driver's seat.",
  },
  {
    title: "System Thinking",
    body: "Great entrepreneurs see the whole picture. Kids learn to map how pieces connect — users, problems, solutions, feedback loops — and understand why products succeed or fail as systems, not just features.",
  },
  {
    title: "Communication & Pitch Confidence",
    body: "An idea is only as powerful as your ability to share it. Kids learn to distill their work into a clear, compelling story — and present it live on Demo Day in front of a real audience.",
  },
  {
    title: "Collaboration & Resilience",
    body: "Kids work in teams, navigate disagreement, hit walls, and find ways through. They learn that failure is a data point, not a verdict.",
  },
];

const faqs = [
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

export function CampsPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabId>("learning-objectives");

  const handleTabClick = (id: TabId) => {
    if (id === "camp-detail") {
      router.push("/programs/camps/innovathon-2026");
      return;
    }
    setActiveTab(id);
  };

  return (
    <>
      <Header />
      <main className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <header className="py-xxl grid grid-cols-12 gap-gutter items-end">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="bg-surface-container-highest text-on-surface px-3 py-1 text-label-md rounded-lg">
                SUMMER 2026
              </span>
              <span className="bg-surface-container-highest text-on-surface px-3 py-1 text-label-md rounded-lg">
                Entrepreneurship + AI
              </span>
            </div>
            <h1 className="text-display-lg text-stone-900 mb-6">
              Innovathon: Future Systems Design
            </h1>
            <p className="text-body-lg text-stone-600 max-w-2xl">
              A rigorous six-day intensive exploring the intersection of algorithmic
              thinking and entrepreneurial frameworks. Designed for curious minds ready
              to architect the next century.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col items-start lg:items-end gap-4 mt-6 lg:mt-0">
            <div className="lg:text-right">
              <p className="text-label-md text-stone-500 uppercase">Location</p>
              <p className="text-headline-md text-stone-900">
                Global Innovation Hub, Shanghai
              </p>
            </div>
            <div className="lg:text-right">
              <p className="text-label-md text-stone-500 uppercase">Duration</p>
              <p className="text-headline-md text-stone-900">Session 1: July 5 - 10</p>
              <p className="text-headline-md text-stone-900">Session 2: August 2-7</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/programs/camps/timetable"
                className="text-label-md text-primary uppercase hover:underline"
              >
                View timetable
              </Link>
              <Link
                href="/programs/camps/weekly-protocol"
                className="text-label-md text-primary uppercase hover:underline"
              >
                Weekly protocol
              </Link>
            </div>
          </div>
        </header>

        <div className="w-full h-[300px] md:h-[500px] mb-xxl overflow-hidden bg-surface-container rounded-xl relative">
          <Image
            alt="Camp venue"
            src={images.campDetailHero}
            fill
            className="object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
            sizes="100vw"
            priority
          />
        </div>

        <section className="mb-xxl">
          <div className="grid grid-cols-12 gap-gutter">
            <div className="col-span-12 lg:col-span-4">
              <div className="flex flex-col gap-6 lg:sticky lg:top-32">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleTabClick(tab.id)}
                    className={`text-left text-headline-lg uppercase tracking-tight pb-2 border-b-2 transition-colors ${
                      activeTab === tab.id && tab.id !== "camp-detail"
                        ? "text-stone-900 border-primary"
                        : "text-stone-400 border-transparent hover:text-stone-900"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8">
              {activeTab === "learning-objectives" && (
                <div className="space-y-md">
                  {objectives.map((item) => (
                    <div
                      key={item.title}
                      className="knowledge-block p-lg bg-surface-container-low border border-outline-variant/10 rounded-xl"
                    >
                      <h3 className="text-headline-md mb-2 text-stone-900">
                        {item.title}
                      </h3>
                      <p className="text-body-md text-stone-600">{item.body}</p>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === "apply" && (
                <div className="knowledge-block p-lg bg-surface-container-low border border-outline-variant/10 rounded-xl">
                  <h3 className="text-headline-md mb-2 text-stone-900">
                    Application Process
                  </h3>
                  <p className="text-body-md text-stone-600 mb-6">
                    Admission is selective. Please submit a portfolio of your recent
                    work or a 500-word statement of intent regarding your interest in
                    innovation and entrepreneurship.
                  </p>
                  <RegisterButton className="bg-primary text-white px-8 py-3 font-bold tracking-tight text-xs rounded-xl hover:opacity-90 transition-all">
                    START APPLICATION
                  </RegisterButton>
                </div>
              )}
              {activeTab === "faq" && (
                <div className="space-y-0 divide-y divide-border">
                  {faqs.map((faq) => (
                    <details key={faq.q} className="group py-md">
                      <summary className="flex justify-between items-center cursor-pointer list-none text-headline-md text-stone-900">
                        {faq.q}
                        <MaterialIcon
                          name="expand_more"
                          className="group-open:rotate-180 transition-transform"
                        />
                      </summary>
                      <div className="mt-4 text-body-md text-stone-600 max-w-xl">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="mb-xxl p-xl bg-stone-900 text-white flex flex-col items-center justify-center text-center rounded-xl">
          <h2 className="text-display-md mb-8 max-w-2xl">
            Secure your position in the next cohort of system architects.
          </h2>
          <div className="flex flex-col md:flex-row gap-lg">
            <RegisterButton className="bg-primary text-white px-12 py-4 font-bold tracking-tight text-md rounded-xl hover:opacity-90 transition-all">
              REGISTER NOW
            </RegisterButton>
            <button
              type="button"
              className="border border-white text-white px-12 py-4 font-bold tracking-tight text-md rounded-xl hover:bg-white hover:text-stone-900 transition-all"
            >
              DOWNLOAD SYLLABUS
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
