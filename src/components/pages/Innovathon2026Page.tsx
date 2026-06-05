import Image from "next/image";
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

const gallery = [
  { img: images.innovathonGallery1, label: "Summer 2024 / Robotics Lab" },
  { img: images.innovathonGallery2, label: "Spring 2025 / Neural Networks", offset: true },
  { img: images.innovathonGallery3, label: "Winter 2025 / Spatial Computing" },
];

export function Innovathon2026Page() {
  return (
    <>
      <Header variant="white" />
      <main className="mt-0">
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-xxl">
          <div className="flex flex-col items-start gap-md">
            <span className="text-label-md text-primary uppercase tracking-[0.2em]">
              BoundaryUnknown Summer 2026
            </span>
            <h1 className="text-[40px] md:text-[64px] font-semibold leading-tight max-w-4xl">
              Summer 2026 Innovathon:{" "}
              <span className="text-primary font-black">Future Systems</span>
            </h1>
            <p className="text-body-lg text-secondary max-w-2xl mt-md">
              An intensive, week-long residency for young pioneers to conceptualize,
              prototype, and build the ethical frameworks and creative tools of the
              next decade.
            </p>
            <Link
              href="/programs/camps"
              className="text-label-md text-secondary uppercase hover:text-primary mt-2"
            >
              ← Back to camp overview
            </Link>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 md:px-6 mb-xxl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter bg-surface-container rounded-[32px] p-xl border border-outline-variant/30">
            <div className="flex items-start gap-md">
              <MaterialIcon name="location_on" className="text-primary text-3xl shrink-0" />
              <div>
                <h3 className="text-headline-md mb-xs">Location</h3>
                <p className="text-body-md text-secondary">
                  Global Innovation Hub, Shanghai
                </p>
                <p className="text-body-sm text-tertiary mt-xs">
                  No. 188 Museum Lane, Jing&apos;an District
                </p>
              </div>
            </div>
            <div className="flex items-start gap-md">
              <MaterialIcon name="calendar_month" className="text-primary text-3xl shrink-0" />
              <div>
                <h3 className="text-headline-md mb-xs">Available Dates</h3>
                <p className="text-body-md text-secondary">Session 1: July 5-10, 2026</p>
                <p className="text-body-md text-secondary">Session 2: August 2-7, 2026</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 md:px-6 mb-xxl">
          <div className="flex flex-col gap-xl">
            <div>
              <h2 className="text-display-md">Core Curriculum</h2>
              <div className="h-1 w-24 bg-primary mt-sm" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {tracks.map((track) => (
                <div
                  key={track.title}
                  className="group bg-white border border-outline-variant p-xl rounded-[32px] flex flex-col justify-between min-h-[400px] hover:border-primary transition-all duration-300"
                >
                  <div className="flex flex-col gap-md">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MaterialIcon name={track.icon} className="text-primary" />
                    </div>
                    <h4 className="text-[28px] font-semibold">{track.title}</h4>
                    <p className="text-body-md text-secondary">{track.description}</p>
                  </div>
                  <div className="flex items-center gap-sm text-primary font-bold uppercase text-xs tracking-widest mt-xl">
                    Explore Track{" "}
                    <MaterialIcon name="arrow_forward" className="text-sm" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface-container-high py-xxl">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-xl">
              <div className="max-w-xl">
                <h2 className="text-display-md">Legacy of Innovation</h2>
                <p className="text-body-md text-secondary mt-sm">
                  A visual retrospective of our past cohorts building future-ready
                  technologies in collaboration with world-class mentors.
                </p>
              </div>
              <button
                type="button"
                className="border border-on-surface px-8 py-3 rounded-full font-bold hover:bg-on-surface hover:text-white transition-all shrink-0"
              >
                View All Archives
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
              {gallery.map((item) => (
                <div
                  key={item.label}
                  className={`flex flex-col gap-md ${item.offset ? "md:translate-y-12" : ""}`}
                >
                  <div className="aspect-[4/5] overflow-hidden rounded-[32px] arched-crop relative">
                    <Image
                      alt={item.label}
                      src={item.img}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <span className="text-label-md uppercase tracking-widest text-tertiary">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 md:px-6 py-xxl">
          <div className="bg-primary rounded-[32px] p-xl md:p-xxl flex flex-col md:flex-row items-center justify-between gap-xl">
            <div className="text-white max-w-2xl">
              <h2 className="text-display-lg leading-tight">
                Ready to shape the <span className="italic font-light">future</span>?
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
