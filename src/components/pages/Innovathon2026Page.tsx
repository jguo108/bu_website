import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MaterialIcon } from "@/components/MaterialIcon";
import { RegisterButton } from "@/components/RegisterButton";
import { images } from "@/lib/images";

const tracks = [
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

export function Innovathon2026Page() {
  return (
    <>
      <Header variant="white" />
      <main className="mt-0">
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-xxl">
          <div className="flex flex-col items-center text-center gap-md">
            <h1 className="text-[40px] md:text-[64px] font-semibold leading-tight max-w-4xl">
              Summer 2026 Innovathon:{" "}
              <span className="text-primary font-black">Future Systems</span>
            </h1>
            <p className="text-body-lg text-secondary max-w-2xl">
              An intensive, week-long residency for young pioneers to conceptualize,
              prototype, and build the ethical frameworks and creative tools of the
              next decade.
            </p>
            <Link
              href="/programs/camps"
              className="text-label-md text-secondary uppercase hover:text-primary"
            >
              ← Back to camp overview
            </Link>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 md:px-6 mb-xxl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter bg-surface-container rounded-[32px] p-xl border border-outline-variant/30">
            <div className="flex flex-col items-center text-center gap-xs">
              <MaterialIcon name="location_on" className="text-primary text-3xl shrink-0" />
              <h3 className="text-headline-md font-semibold mt-xs">Location</h3>
              <p className="text-body-md text-secondary mt-xs">
                Global Innovation Hub, Shanghai
              </p>
              <p className="text-body-sm text-tertiary">
                No. 188 Museum Lane, Jing&apos;an District
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-xs">
              <MaterialIcon name="calendar_month" className="text-primary text-3xl shrink-0" />
              <h3 className="text-headline-md font-semibold mt-xs">Available Dates</h3>
              <p className="text-body-md text-secondary mt-xs">Session 1: July 5-10, 2026</p>
              <p className="text-body-md text-secondary">Session 2: August 2-7, 2026</p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 md:px-6 mb-xxl">
          <div className="mb-xl">
            <h2 className="text-display-md text-inverse-surface">
              Core Curriculum
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
              View Timetable <MaterialIcon name="arrow_forward" className="text-lg" />
            </Link>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 md:px-6 py-xxl border-t border-outline-variant/30">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-xl">
            <div className="md:col-span-4">
              <h2 className="text-display-md">Frequently Asked Questions</h2>
              <div className="h-1 w-24 bg-primary mt-sm" />
            </div>
            <div className="md:col-span-8 space-y-0 divide-y divide-border">
              {faqs.map((faq) => (
                <details key={faq.q} className="group py-md">
                  <summary className="flex justify-between items-center cursor-pointer list-none text-headline-md text-stone-900 font-semibold">
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
                Ready to shape the <span className="whitespace-nowrap"><span className="italic font-light">future</span>?</span>
              </h2>
              <p className="text-body-lg text-white/90 mt-md">
                Limited spots available for the 2026 cohort. Selection is based on
                passion, creativity, and a drive to solve hard problems.
              </p>
            </div>
            <div className="flex flex-col items-center gap-md">
              <RegisterButton className="bg-white text-primary px-12 py-5 rounded-full font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/10">
                Register for Session
              </RegisterButton>
              <span className="text-white/80 text-label-md text-sm">
                Applications close May 1st, 2026
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
