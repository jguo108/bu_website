import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MaterialIcon } from "@/components/MaterialIcon";
import { RegisterButton } from "@/components/RegisterButton";

const team = [
  {
    tag: "Academic Excellence",
    title: "Our Teachers",
    desc: "Former MIT Research Fellow specializing in cognitive architectures and the intersection of AI with classical ethics.",
    role: "Faculty Lead",
  },
  {
    tag: "Global Operations",
    title: "Our Linkers",
    desc: "Expert in scaling deep-tech ventures, Elena ensures our systematic knowledge translates into feasible, global-scale plans.",
    role: "Scale & Strategy",
    offset: true,
  },
  {
    tag: "Innovation & Development",
    title: "Our Community",
    desc: "Leading the 'Hand' of our philosophy, Marcus converts complex theories into iterative code and hardware prototypes.",
    role: "Product Lab",
  },
];

const philosophy = [
  {
    title: "Heart (Empathy)",
    desc: "Deep emotional resonance ensures we solve problems that actually matter to human lives, feeling customer pain points at a visceral level.",
  },
  {
    title: "Head (Knowledge)",
    desc: "Systematic knowledge and analytical rigor across AI, business, and finance guide our actions toward technical and market reality.",
    offset: true,
  },
  {
    title: "Hand (Action)",
    desc: "Iterative feedback and relentless execution. We build, test, and act again with increased precision to bridge theory and the world.",
  },
];

export function AboutPage() {
  return (
    <>
      <Header />
      <main className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <section className="mt-xxl">
          <div className="max-w-3xl mb-xl">
            <h1 className="text-display-lg mb-md text-on-surface">Who are we?</h1>
            <div className="text-body-lg text-on-surface-variant leading-[1.7]">
              <p>
                Boundary Unknown was founded by Cece Fang. Having worked in the
                investment industry for over a decade, she has met countless
                entrepreneurs. From them, she observed many exceptional and rare
                qualities—qualities that we believe are crucial in the age of AI.
                That&apos;s why she founded Boundary Unknown: to give children the
                opportunity to continuously practice and iterate their abilities in
                real entrepreneurial environments, and to cultivate super individuals
                who dare to think and dare to act.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
            {team.map((member) => (
              <div
                key={member.title}
                className={`sticker-card p-lg rounded-2xl flex flex-col group bg-card border border-border ${member.offset ? "lg:mt-8" : ""}`}
              >
                <span className="bg-white/50 text-primary px-sm py-1 text-[10px] uppercase tracking-widest rounded-lg w-fit mb-sm">
                  {member.tag}
                </span>
                <h3 className="text-headline-lg mb-sm group-hover:text-primary transition-colors">
                  {member.title}
                </h3>
                <p className="text-body-md text-on-surface-variant mb-md flex-grow">
                  {member.desc}
                </p>
                <div className="knowledge-block-thin pl-md py-1 mt-auto">
                  <span className="text-label-md text-on-surface uppercase opacity-50">
                    {member.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-xxl">
          <div className="text-center mb-xl">
            <h2 className="text-display-md mb-sm">
              Our Philosophy: <span className="text-primary">3H Theory</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-xl lg:gap-24 relative">
            <div className="relative w-[340px] h-[340px] md:w-[480px] md:h-[480px] shrink-0">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-2/3 border-2 border-primary bg-primary/5 rounded-full flex items-center justify-center transition-transform hover:scale-105 duration-500">
                <div className="text-center mb-20">
                  <MaterialIcon name="favorite" className="text-primary text-3xl mb-1 block mx-auto" />
                  <p className="text-label-md font-bold uppercase tracking-widest text-primary">Heart</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-2/3 h-2/3 border-2 border-primary bg-primary/5 rounded-full flex items-center justify-center transition-transform hover:scale-105 duration-500">
                <div className="text-center mt-16 mr-16">
                  <MaterialIcon name="psychology" className="text-primary text-3xl mb-1 block mx-auto" />
                  <p className="text-label-md font-bold uppercase tracking-widest text-primary">Head</p>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-2/3 h-2/3 border-2 border-primary bg-primary/5 rounded-full flex items-center justify-center transition-transform hover:scale-105 duration-500">
                <div className="text-center mt-16 ml-16">
                  <MaterialIcon name="front_hand" className="text-primary text-3xl mb-1 block mx-auto" />
                  <p className="text-label-md font-bold uppercase tracking-widest text-primary">Hand</p>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 bg-primary rounded-full flex items-center justify-center shadow-2xl z-10 animate-pulse border-4 border-white/20">
                <p className="text-white font-bold text-center uppercase px-4 leading-tight text-sm">
                  Integrated Mastery
                </p>
              </div>
            </div>
            <div className="flex-1 space-y-md text-left w-full">
              {philosophy.map((item) => (
                <div
                  key={item.title}
                  className={`p-lg rounded-2xl sticker-card bg-card border border-border ${item.offset ? "ml-0 lg:ml-8" : ""}`}
                >
                  <h4 className="text-headline-lg text-primary mb-2">{item.title}</h4>
                  <p className="text-body-md text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-xxl mb-xxl">
          <div className="bg-inverse-surface text-inverse-on-surface rounded-3xl p-xl md:p-24 flex flex-col md:flex-row justify-between items-center gap-xl relative overflow-hidden">
            <div className="relative z-10 max-w-xl">
              <h2 className="text-display-lg mb-md leading-tight">
                Ready to explore the <span className="text-primary">unknown</span>?
              </h2>
              <p className="text-body-lg opacity-80 mb-xl">
                Reach out to our team for research collaborations, admission
                inquiries, or general partnership discussions.
              </p>
              <div className="space-y-lg">
                <a
                  href="mailto:hello@boundaryunknown.edu"
                  className="flex items-center gap-md group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                    <MaterialIcon name="mail" className="text-white" />
                  </div>
                  <span className="text-headline-md group-hover:text-primary transition-colors">
                    hello@boundaryunknown.edu
                  </span>
                </a>
                <div className="flex items-center gap-md group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                    <MaterialIcon name="chat" className="text-white" />
                  </div>
                  <span className="text-headline-md group-hover:text-primary transition-colors">
                    +1 (555) 890-2341 (WhatsApp)
                  </span>
                </div>
              </div>
            </div>
            <div className="relative z-10 w-full md:w-auto">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-xl rounded-2xl space-y-md w-full md:min-w-[320px] shadow-2xl">
                <div className="text-center pb-md border-b border-white/10">
                  <p className="text-label-md text-primary uppercase tracking-widest mb-1">
                    Global HQ
                  </p>
                  <p className="text-body-lg font-semibold">Cambridge, MA</p>
                </div>
                <RegisterButton className="w-full bg-primary text-white py-4 rounded-xl text-headline-md uppercase tracking-wider hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20">
                  Send Message
                </RegisterButton>
              </div>
            </div>
            <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -left-24 -top-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
