import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MaterialIcon } from "@/components/MaterialIcon";
import { images } from "@/lib/images";

export function HomePage() {
  const SHOW_PROJECTS = false;
  return (
    <>
      <Header />
      <main className="max-w-screen-2xl mx-auto px-4 md:px-8 py-xxl">
        <section className="mb-xxl">
          <div className="max-w-3xl">
            <h1 className="text-display-lg mb-md text-on-surface">
              Boundary Unknown
            </h1>
            <p className="text-body-lg text-secondary max-w-2xl">
              Boundary_unknown is a{" "}
              <span className="text-primary">youth future school for curious minds</span>{" "}
              where kids bring an idea, learn to think like founders, and use{" "}
              <span className="text-primary">AI as their tool</span> to build something
              real — a working app, a website, a product.
            </p>
          </div>
        </section>

        <div className="mb-xl">
          <h2 className="text-display-md text-on-surface">Programs</h2>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div className="bg-card border border-border flex flex-col min-h-[600px] group">
            <div className="relative h-80 overflow-hidden">
              <Image
                alt="Camps"
                src={images.campsHero}
                fill
                className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-label-md">
                INTENSIVE
              </div>
            </div>
            <div className="p-xl flex-grow flex flex-col">
              <div className="mb-gutter">
                <span className="text-code text-primary uppercase tracking-widest">
                  6 DAY STRAT-UP SPRINT
                </span>
                <h2 className="text-display-md mt-sm text-on-surface">
                  Innovathon camps
                </h2>
              </div>
              <div className="text-body-md text-on-surface-variant mb-xl leading-relaxed space-y-1">
                <p>Arrive with an idea.</p>
                <p>Leave with an MVP.</p>
                <p>
                  In six intensive days, kids form teams, think like founders, and use
                  AI to build and launch a real product — then pitch it at a live
                  showcase on demo day.
                </p>
              </div>
              <div className="mt-auto pt-lg border-t border-border-muted">
                <Link
                  href="/programs/camps"
                  className="inline-flex items-center gap-2 group/link"
                >
                  <span className="text-label-md uppercase tracking-widest text-on-surface group-hover/link:text-primary transition-colors">
                    Learn more
                  </span>
                  <MaterialIcon
                    name="arrow_forward"
                    className="text-sm group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border flex flex-col min-h-[600px] group">
            <div className="relative h-80 overflow-hidden">
              <Image
                alt="Incubation"
                src={images.incubatorHero}
                fill
                className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-label-md">
                LONG-TERM
              </div>
            </div>
            <div className="p-xl flex-grow flex flex-col">
              <div className="mb-gutter">
                <span className="text-code text-primary uppercase tracking-widest">
                  LONG TERM IDEA LAB
                </span>
                <h2 className="text-display-md mt-sm text-on-surface">Incubator</h2>
              </div>
              <p className="text-body-md text-on-surface-variant mb-xl leading-relaxed">
                For kids who want to go further. We take a raw idea and guide it —
                through research, validation, building, and iteration — into a real
                business product, with mentorship every step of the way.
              </p>
              <div className="mt-auto pt-lg border-t border-border-muted">
                <Link
                  href="/programs/incubator"
                  className="inline-flex items-center gap-2 group/link"
                >
                  <span className="text-label-md uppercase tracking-widest text-on-surface group-hover/link:text-primary transition-colors">
                    Learn more
                  </span>
                  <MaterialIcon
                    name="arrow_forward"
                    className="text-sm group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {SHOW_PROJECTS && (
          <section className="mt-xxl border-t border-border pt-xxl">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-xl">
              <div>
                <span className="text-code text-primary uppercase tracking-widest block mb-xs">
                  Portfolio
                </span>
                <h2 className="text-display-md text-on-surface">Student Projects</h2>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 group/link text-on-surface hover:text-primary transition-colors"
              >
                <span className="text-label-md uppercase tracking-widest">
                  View all projects
                </span>
                <MaterialIcon
                  name="arrow_forward"
                  className="text-sm group-hover/link:translate-x-1 transition-transform"
                />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-lg">
              {[
                { img: images.project1, tag: "AI & Robotics", title: "Auto-Farm Intelligence" },
                { img: images.project2, tag: "SaaS & Web", title: "StudySync Platform" },
                { img: images.project3, tag: "Fintech", title: "KidCoin Wallet" },
              ].map((p) => (
                <Link key={p.title} href="/projects" className="group cursor-pointer">
                  <div className="aspect-video overflow-hidden mb-md border border-border relative">
                    <Image
                      alt={p.title}
                      src={p.img}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-primary uppercase tracking-widest font-mono">
                      {p.tag}
                    </span>
                    <h3 className="text-headline-md text-on-surface">{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mt-xxl bg-card p-xl md:p-xxl border border-border">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <span className="text-code text-primary uppercase tracking-widest mb-md">
              Our Mission
            </span>
            <h2 className="text-display-md text-on-surface mb-lg">
              Empowering the next generation of founders to build with AI.
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-xl max-w-2xl">
              We believe that the best way to learn is by doing. BoundaryUnknown
              provides the space, mentorship, and tools for young minds to transform
              abstract curiosity into tangible innovation.
            </p>
            <Link
              href="/about"
              className="bg-primary text-white px-8 py-3 font-semibold tracking-tight hover:bg-primary-hover transition-colors inline-flex items-center gap-2"
            >
              LEARN MORE ABOUT US
              <MaterialIcon name="arrow_forward" className="text-sm" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
