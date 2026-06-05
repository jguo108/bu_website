"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MaterialIcon } from "@/components/MaterialIcon";
import { images } from "@/lib/images";

const days = [
  { phase: "Phase 01", label: "Day 1: Arrival" },
  { phase: "Phase 02", label: "Day 2: Insight" },
  { phase: "Phase 03", label: "Day 3: Define" },
  { phase: "Phase 04", label: "Day 4: Blue Print" },
  { phase: "Phase 05", label: "Day 5: MVP Day" },
  { phase: "Phase 06", label: "Day 6: Roadshow" },
];

const day1Sessions = [
  { time: "09:00 - 10:30", title: "Arrival & Connection", location: "Main Camp Ground", active: true },
  { time: "11:00 - 13:00", title: "Keynote: Future of Agents", location: "Academic Theater" },
  { time: "14:30 - 17:00", title: "Team Formation", location: "Collaborative Lounge" },
  { time: "18:30 - 21:00", title: "Dinner & Icebreaking", location: "Outdoor Pavilion" },
];

export function TimetablePage() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <>
      <Header />
      <main className="max-w-screen-2xl mx-auto px-4 md:px-8 py-16">
        <header className="mb-12">
          <Link
            href="/programs/camps"
            className="text-label-md text-secondary uppercase hover:text-primary mb-4 inline-block"
          >
            ← Back to camp
          </Link>
          <h1 className="text-display-lg text-on-surface mb-4">Curriculum Timetable</h1>
          <p className="text-body-lg text-secondary max-w-2xl">
            From initial connection to the final roadshow, track your 6-day journey of
            intensive technical execution and AI exploration.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-2">
              The Timeline
            </h3>
            <div className="flex flex-col gap-3">
              {days.map((day, i) => (
                <button
                  key={day.label}
                  type="button"
                  onClick={() => setActiveDay(i)}
                  className={`sticker-card flex flex-col items-start p-6 border rounded-2xl w-full text-left transition-all ${
                    activeDay === i
                      ? "border-primary"
                      : "bg-white border-border hover:border-primary"
                  }`}
                  style={
                    activeDay === i
                      ? { backgroundColor: "#FF751F", color: "white", borderColor: "#FF751F" }
                      : undefined
                  }
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1">
                    {day.phase}
                  </span>
                  <span className="text-headline-md font-bold">{day.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-2">
              Schedule Outline
            </h3>
            <div className="bg-surface-container border border-border rounded-2xl p-6 flex flex-col gap-4 h-full min-h-[400px]">
              <div className="flex items-center justify-between pb-4 border-b border-border mb-2">
                <h2 className="text-headline-lg font-bold">{days[activeDay].label}</h2>
                <MaterialIcon name="bolt" className="text-primary" filled />
              </div>
              <div className="flex flex-col gap-3">
                {day1Sessions.map((session, i) => (
                  <div
                    key={session.title}
                    className={`p-5 bg-white rounded-2xl border cursor-pointer group transition-all ${
                      i === 0 && activeDay === 0
                        ? "knowledge-block border-border hover:border-primary"
                        : "border-transparent hover:border-primary"
                    }`}
                  >
                    <span className={`text-label-md block mb-1 ${i === 0 && activeDay === 0 ? "text-primary" : "text-secondary"}`}>
                      {session.time}
                    </span>
                    <h4 className="text-headline-md font-bold mb-1">{session.title}</h4>
                    <p className="text-xs text-secondary">{session.location}</p>
                  </div>
                ))}
              </div>
              {activeDay === 0 && (
                <div className="mt-auto pt-6 border-t border-border">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-border">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-border relative shrink-0">
                      <Image src={images.facilitator} alt="Lead Facilitator" fill className="object-cover" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider">Lead Facilitator</p>
                      <p className="text-sm text-secondary">Dr. Aris Thorne, AI Research</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-2">
              Session Details
            </h3>
            <div className="bg-white border border-border rounded-2xl flex flex-col overflow-hidden h-full">
              <div className="p-6 md:p-10 flex-grow">
                <h2 className="text-3xl font-bold mb-6">{days[activeDay].label}</h2>
                <div className="flex flex-wrap gap-3 mb-10">
                  <div className="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-full border border-border">
                    <MaterialIcon name="location_on" className="text-sm" />
                    <span className="text-xs font-bold uppercase tracking-wider">Main Auditorium</span>
                  </div>
                  <div className="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-full border border-border">
                    <MaterialIcon name="group" className="text-sm" />
                    <span className="text-xs font-bold uppercase tracking-wider">120 Attendees</span>
                  </div>
                </div>
                <div className="space-y-6 text-body-lg mb-10 leading-relaxed">
                  <p>
                    Arrive at camp and connect with new companions! Open your heart,
                    communicate with sincerity, build trust, and discover your unique
                    place within the team.
                  </p>
                </div>
                <div className="space-y-5">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary border-b border-border pb-3">
                    What to expect
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "Team bonding and ice-breaking sessions.",
                      "Understanding the core values of sincerity and trust.",
                      "Setting personal and group goals for the academy.",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <MaterialIcon name="check_circle" filled className="text-on-surface" />
                        <span className="text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-6 md:p-8 bg-surface-container border-t border-border">
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-primary text-white p-6 rounded-2xl sticker-card flex flex-col justify-between aspect-square">
                    <MaterialIcon name="menu_book" className="text-4xl" filled />
                    <div>
                      <h5 className="font-bold text-sm uppercase tracking-wider mb-1">Pre-read Materials</h5>
                      <p className="text-[10px] opacity-80 uppercase tracking-widest">Sync with Workspace</p>
                    </div>
                  </div>
                  <div className="bg-white border border-border p-6 rounded-2xl sticker-card flex flex-col justify-between aspect-square">
                    <MaterialIcon name="forum" className="text-4xl text-primary" />
                    <div>
                      <h5 className="font-bold text-sm uppercase tracking-wider mb-1">Team Chat</h5>
                      <p className="text-[10px] text-secondary uppercase tracking-widest">Join Conversation</p>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full py-5 bg-stone-900 text-white font-bold uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-primary transition-colors flex items-center justify-center gap-3 group"
                >
                  Add to My Calendar
                  <MaterialIcon name="arrow_forward" className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-24 border-t border-border pt-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="w-full md:max-w-xl">
              <h3 className="text-headline-lg font-bold mb-4 uppercase tracking-tight">
                Curriculum Progress
              </h3>
              <p className="text-secondary mb-8 text-sm">
                Track your journey from Ignition to Delivery.
              </p>
              <div className="w-full bg-white h-6 rounded-full overflow-hidden border border-border p-1">
                <div className="bg-primary h-full w-1/6 rounded-full" />
              </div>
              <div className="flex justify-between mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
                <span>Phase 01</span>
                <span className="text-primary">Day 1: 16% Complete</span>
              </div>
            </div>
            <div className="flex gap-16 text-right">
              <div>
                <span className="block text-5xl font-bold text-stone-900 mb-2">144</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Intensive Hours</span>
              </div>
              <div>
                <span className="block text-5xl font-bold text-stone-900 mb-2">12</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Industry Mentors</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
