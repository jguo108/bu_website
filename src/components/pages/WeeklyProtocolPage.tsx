import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MaterialIcon } from "@/components/MaterialIcon";
import { images } from "@/lib/images";

function GridCell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`p-md bg-surface-container rounded-xl border border-outline-variant hover-protocol transition-all duration-300 cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
}

export function WeeklyProtocolPage() {
  return (
    <>
      <Header />
      <main className="max-w-[1280px] mx-auto px-4 md:px-lg py-xxl">
        <div className="mb-xl border-l-8 border-primary pl-lg">
          <Link
            href="/programs/camps"
            className="text-label-md text-secondary uppercase hover:text-primary mb-4 inline-block"
          >
            ← Back to camp
          </Link>
          <h1 className="text-display-lg uppercase tracking-tight mb-sm">
            Innovathon: Weekly Protocol
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">
            A rigorous 6-day intellectual intensive focused on the intersection of
            artificial intelligence, entrepreneurial logic, and rapid technical
            prototyping.
          </p>
        </div>

        <div className="flex flex-wrap gap-md mb-lg">
          {[
            { color: "bg-primary", label: "Core Curriculum" },
            { color: "bg-tertiary-container", label: "Team Integration" },
            { color: "bg-surface-container-highest", label: "Review & Rituals" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-xs">
              <div className={`w-4 h-4 ${item.color}`} />
              <span className="text-label-md uppercase tracking-tight">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
          <div className="min-w-[1000px] academic-grid gap-sm">
            <div className="p-md text-label-md uppercase tracking-widest text-on-surface-variant">
              Schedule
            </div>
            {["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"].map((d) => (
              <div
                key={d}
                className="p-md text-label-md uppercase tracking-widest text-center border-b-4 border-primary"
              >
                {d}
              </div>
            ))}

            <div className="flex items-center p-md bg-surface-container-low text-label-md uppercase rotate-180 [writing-mode:vertical-lr] text-center border-r border-outline-variant">
              Morning
            </div>
            <GridCell className="opacity-50 italic flex items-center justify-center">
              Arrival & Prep
            </GridCell>
            <GridCell>
              <span className="text-code text-primary uppercase block mb-xs font-mono text-sm">09:00 - 12:00</span>
              <h4 className="text-headline-lg leading-tight mb-sm">AI for Fun, Good & Learning</h4>
              <p className="text-label-md uppercase tracking-tight text-on-surface-variant">Introductory Frameworks</p>
            </GridCell>
            <GridCell>
              <span className="text-code text-primary uppercase block mb-xs font-mono text-sm">09:00 - 12:00</span>
              <h4 className="text-headline-lg leading-tight mb-sm">Entrepreneurial Thinking</h4>
              <p className="text-label-md uppercase tracking-tight text-on-surface-variant">Market & User Archetypes</p>
            </GridCell>
            <GridCell>
              <span className="text-code text-primary uppercase block mb-xs font-mono text-sm">09:00 - 12:00</span>
              <h4 className="text-headline-lg leading-tight mb-sm">Tech x Ventures</h4>
              <p className="text-label-md uppercase tracking-tight text-on-surface-variant">Business Analysis & GDD/PRD</p>
            </GridCell>
            <GridCell>
              <span className="text-code text-primary uppercase block mb-xs font-mono text-sm">09:00 - 12:00</span>
              <h4 className="text-headline-lg leading-tight mb-sm">The Art of the Pitch</h4>
              <p className="text-label-md uppercase tracking-tight text-on-surface-variant">Narrative Design & PPT</p>
            </GridCell>
            <div className="p-md bg-primary text-white rounded-xl border border-outline-variant hover-protocol transition-all duration-300 cursor-pointer shadow-lg">
              <span className="text-code uppercase block mb-xs text-white/80 font-mono text-sm">09:00 - 12:00</span>
              <h4 className="text-headline-lg leading-tight mb-sm">Speech Boost</h4>
              <p className="text-label-md uppercase tracking-tight opacity-80">Final Performance Prep</p>
            </div>

            <div className="flex items-center p-md bg-surface-container-low text-label-md uppercase rotate-180 [writing-mode:vertical-lr] text-center border-r border-outline-variant">
              Afternoon
            </div>
            <GridCell className="bg-surface-container-highest">
              <span className="text-code text-primary uppercase block mb-xs font-mono text-sm">14:00 - 17:00</span>
              <h4 className="text-headline-lg leading-tight mb-sm">Opening Ceremony</h4>
              <p className="text-label-md uppercase tracking-tight text-on-surface-variant">Protocol & Onboarding</p>
            </GridCell>
            <GridCell>
              <span className="text-code text-primary uppercase block mb-xs font-mono text-sm">14:00 - 17:00</span>
              <h4 className="text-headline-lg leading-tight mb-sm">Empathy & AI Basics</h4>
              <p className="text-label-md uppercase tracking-tight text-on-surface-variant">Brainstorming + Prompting</p>
            </GridCell>
            <div className="p-md bg-tertiary-container text-white rounded-xl border border-outline-variant hover-protocol transition-all duration-300 cursor-pointer">
              <span className="text-code uppercase block mb-xs font-mono text-sm">14:00 - 17:00</span>
              <h4 className="text-headline-lg leading-tight mb-sm">Vibe Coding: Games</h4>
              <p className="text-label-md uppercase tracking-tight opacity-90">Adv. Technical Lab</p>
            </div>
            <div className="p-md bg-tertiary-container text-white rounded-xl border border-outline-variant hover-protocol transition-all duration-300 cursor-pointer">
              <span className="text-code uppercase block mb-xs font-mono text-sm">14:00 - 17:00</span>
              <h4 className="text-headline-lg leading-tight mb-sm">Vibe Coding: Web</h4>
              <p className="text-label-md uppercase tracking-tight opacity-90">App Architecture</p>
            </div>
            <GridCell>
              <span className="text-code text-primary uppercase block mb-xs font-mono text-sm">14:00 - 17:00</span>
              <h4 className="text-headline-lg leading-tight mb-sm">Team Sprint: MVP</h4>
              <p className="text-label-md uppercase tracking-tight text-on-surface-variant">Rapid Prototyping</p>
            </GridCell>
            <div className="p-md bg-inverse-surface text-inverse-on-surface rounded-xl border border-outline-variant hover-protocol transition-all duration-300 cursor-pointer">
              <span className="text-code text-primary uppercase block mb-xs font-mono text-sm">14:00 - 18:00</span>
              <h4 className="text-headline-lg leading-tight mb-sm">Roadshow</h4>
              <p className="text-label-md uppercase tracking-tight opacity-80">Final Project Reveal</p>
            </div>

            <div className="flex items-center p-md bg-surface-container-low text-label-md uppercase rotate-180 [writing-mode:vertical-lr] text-center border-r border-outline-variant">
              Evening
            </div>
            <GridCell className="bg-surface-container-highest">
              <span className="text-code text-primary uppercase block mb-xs font-mono text-sm">19:00+</span>
              <h4 className="text-headline-lg leading-tight mb-sm">Icebreaking</h4>
              <p className="text-label-md uppercase tracking-tight text-on-surface-variant">Community Rituals</p>
            </GridCell>
            <GridCell>
              <span className="text-code text-primary uppercase block mb-xs font-mono text-sm">19:00+</span>
              <h4 className="text-headline-lg leading-tight mb-sm">Blueprint Lab</h4>
              <p className="text-label-md uppercase tracking-tight text-on-surface-variant">Entrepreneurial Mapping</p>
            </GridCell>
            <GridCell>
              <span className="text-code text-primary uppercase block mb-xs font-mono text-sm">19:00+</span>
              <h4 className="text-headline-lg leading-tight mb-sm">GDD/PRD Lock</h4>
              <p className="text-label-md uppercase tracking-tight text-on-surface-variant">Product Definition</p>
            </GridCell>
            <GridCell>
              <span className="text-code text-primary uppercase block mb-xs font-mono text-sm">19:00+</span>
              <h4 className="text-headline-lg leading-tight mb-sm">MVP Midnight</h4>
              <p className="text-label-md uppercase tracking-tight text-on-surface-variant">Team Integration</p>
            </GridCell>
            <GridCell>
              <span className="text-code text-primary uppercase block mb-xs font-mono text-sm">19:00+</span>
              <h4 className="text-headline-lg leading-tight mb-sm">Final Practice</h4>
              <p className="text-label-md uppercase tracking-tight text-on-surface-variant">Polishing Roadshow</p>
            </GridCell>
            <GridCell className="opacity-50 italic flex items-center justify-center">
              Celebration
            </GridCell>
          </div>
        </div>

        <div className="mt-xxl grid md:grid-cols-2 gap-lg border border-outline-variant bg-surface-container-low rounded-xl overflow-hidden group">
          <div className="relative aspect-video md:aspect-auto min-h-[240px] overflow-hidden">
            <Image
              alt="Innovathon cohort"
              src={images.weeklyProtocolCta}
              fill
              className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute top-md left-md bg-primary text-white px-md py-xs text-label-md uppercase tracking-widest font-bold">
              INTENSIVE
            </div>
          </div>
          <div className="p-xl flex flex-col justify-center">
            <span className="text-code text-primary uppercase mb-sm tracking-widest font-mono">
              PROTOCOL 01: FOUNDATIONS
            </span>
            <h2 className="text-display-md mb-md leading-tight uppercase">
              Master the Human-AI Collaboration Loop
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-lg">
              Join a cohort of world-class creators for a week of radical intellectual
              growth.
            </p>
            <div className="flex flex-wrap items-center gap-md">
              <Link
                href="/programs/camps/timetable"
                className="bg-primary text-white px-lg py-sm text-label-md font-bold uppercase tracking-tight hover:opacity-90 transition-all"
              >
                VIEW DETAILED SYLLABUS
              </Link>
              <Link
                href="/programs/camps/innovathon-2026"
                className="flex items-center gap-xs text-label-md uppercase tracking-tight text-primary hover:gap-md transition-all group/link"
              >
                LEARN MORE{" "}
                <MaterialIcon name="arrow_forward" className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
