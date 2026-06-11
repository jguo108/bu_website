import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MaterialIcon } from "@/components/MaterialIcon";

const team = [
  {
    title: "Our Teachers",
    desc: "Former MIT Research Fellow specializing in cognitive architectures and the intersection of AI with classical ethics.",
    role: "Faculty Lead",
  },
  {
    title: "Our Linkers",
    desc: "Expert in scaling deep-tech ventures, Elena ensures our systematic knowledge translates into feasible, global-scale plans.",
    role: "Scale & Strategy",
    offset: true,
  },
  {
    title: "Our Community",
    desc: "Leading the 'Hand' of our philosophy, Marcus converts complex theories into iterative code and hardware prototypes.",
    role: "Product Lab",
  },
];

const founders = [
  {
    name: "Cece Fang",
    role: "Co-founder",
    image: "/images/team/cece_fang.png",
  },
  {
    name: "Lexie Wu",
    role: "Co-founder",
    image: "/images/team/lexie_wu.png",
  },
  {
    name: "Jing Guo",
    role: "AI Advisor",
    image: "/images/team/jing_guo.png",
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
      <Header variant="white" />
      <main className="mt-24">
        <section className="max-w-screen-xl mx-auto px-4 md:px-8 py-xxl flex flex-col items-center text-center">
          <h1 className="text-[40px] md:text-[64px] font-semibold leading-tight text-inverse-surface max-w-4xl mb-md">
            Who are we?
          </h1>
          <p className="text-body-lg text-secondary max-w-3xl mb-xl leading-relaxed">
            Boundary Unknown was founded by Cece Fang. Having worked in the
            investment industry for over a decade, she has met countless
            entrepreneurs. From them, she observed many exceptional and rare
            qualities—qualities that we believe are crucial in the age of AI.
            That&apos;s why she founded Boundary Unknown: to give children the
            opportunity to continuously practice and iterate their abilities in
            real entrepreneurial environments, and to cultivate super individuals
            who dare to think and dare to act.
          </p>
        </section>

        <section className="max-w-screen-2xl mx-auto px-4 md:px-8 pb-xxl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
            {team.map((member) => (
              <div
                key={member.title}
                className="sticker-card p-lg rounded-2xl flex flex-col group bg-card border border-border"
              >
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

        <section className="mt-xxl mb-xxl">
          <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
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
          </div>
        </section>

        <section className="py-xxl bg-surface-container-low border-t border-border-muted w-full">
          <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
            <div className="text-center mb-xl">
              <h2 className="text-display-md mb-sm text-on-surface">
                Co-Founders & Leadership
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-xl justify-items-center">
              {founders.map((member) => (
                <div key={member.name} className="flex flex-col items-center text-center group">
                  <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-border/85 group-hover:border-primary transition-all duration-500 shadow-md group-hover:shadow-xl group-hover:scale-105 mb-md bg-card">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(max-width: 768px) 240px, 288px"
                    />
                  </div>
                  <h3 className="text-headline-lg text-on-surface mb-xs transition-colors duration-300 group-hover:text-primary">
                    {member.name}
                  </h3>
                  <p className="text-body-md text-on-surface-variant font-medium">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
