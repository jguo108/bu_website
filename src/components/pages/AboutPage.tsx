"use client";

import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MaterialIcon } from "@/components/MaterialIcon";
import { useLanguage } from "@/lib/LanguageContext";

const teamEn = [
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

const teamZh = [
  {
    title: "我们的导师",
    desc: "前麻省理工学院（MIT）研究员，专注于认知架构以及人工智能与经典伦理学的交叉领域研究。",
    role: "学术导师",
  },
  {
    title: "我们的顾问",
    desc: "深科技创业孵化专家，协助学员将系统性的前沿知识转化为切实可行的全球化方案。",
    role: "战略与规模拓展",
    offset: true,
  },
  {
    title: "我们的社区",
    desc: "知行合一的实践引领者，协助学员将复杂的理论转化为可运行的代码和硬件原型。",
    role: "产品实验室",
  },
];

const foundersEn = [
  {
    name: "Cece Fang",
    role: "Co-founder",
    image: "/images/team/cece_fang.png",
    intro: "Founder of Boundary Unknown. With over a decade of experience in the investment industry, Cece has partnered with and analyzed countless entrepreneurs. Her deep insights into entrepreneurial talent led to the creation of Boundary Unknown, a program designed to foster the next generation of 'super individuals' capable of thriving in the AI era through real-world execution.",
  },
  {
    name: "Lexie Wu",
    role: "Co-founder",
    image: "/images/team/lexie_wu.png",
    intro: "Co-founder of Boundary Unknown. Lexie is an experienced educator and program designer who specializes in experiential learning and project-based curricula. She is passionate about creating environments where kids can build real projects, test their limits, and learn how to navigate uncertainty with confidence.",
  },
  {
    name: "Jing Guo",
    role: "AI Advisor",
    image: "/images/team/jing_guo.png",
    intro: "AI Advisor for Boundary Unknown. Jing is a senior AI research scientist and tech leader with extensive experience in machine learning and cognitive architectures. He advises on our technical curriculum, ensuring that students learn to build AI-first prototypes using modern development frameworks and real-world workflows.",
  },
];

const foundersZh = [
  {
    name: "Cece Fang",
    role: "联合创始人",
    image: "/images/team/cece_fang.png",
    intro: "Boundary Unknown 创始人。拥有十余年投资行业经验，曾与无数创业者深度合作。她对创业者特质的深刻洞察促成了 Boundary Unknown 的创立，旨在通过真实商业环境的锤炼，培养在 AI 时代敢想敢为的“超级个体”。",
  },
  {
    name: "Lexie Wu",
    role: "联合创始人",
    image: "/images/team/lexie_wu.png",
    intro: "Boundary Unknown 联合创始人。资深教育家与项目设计专家，专注于体验式学习与项目制课程研发。她致力于为孩子们创造动手实践的真实场景，引导他们在不确定性中建立自信与解决问题的能力。",
  },
  {
    name: "Jing Guo",
    role: "AI 顾问",
    image: "/images/team/jing_guo.png",
    intro: "Boundary Unknown AI 顾问。资深人工智能科学家与技术领袖，在机器学习和认知架构领域拥有丰富经验。他为技术课程提供专业指导，确保学员能够掌握最新的 AI 工具，在真实开发流程中构建以 AI 为核心的原型产品。",
  },
];

const philosophyEn = [
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

const philosophyZh = [
  {
    title: "心 (共情)",
    desc: "深度的情感共鸣，确保我们解决对人类生活真正有价值的痛点，深刻感知用户的真实处境。",
  },
  {
    title: "脑 (认知)",
    desc: "在人工智能、商业和金融领域具备系统性知识与严谨的分析能力，引导我们走向技术和市场现实。",
    offset: true,
  },
  {
    title: "手 (行动)",
    desc: "快速迭代的反馈与坚定不移的执行力。我们在实践中构建、测试并再次行动，不断提升精度以连接理论与真实世界。",
  },
];

const content = {
  en: {
    title: "Who are we?",
    bio: "The world is pushed forward, little by little, by those who dare to create.\
YC distilled it into a single line — Make something people want. Lu Qi and MiraclePlus place their faith in walking alongside founders, using technology and innovation to create lasting value, from zero to one.\
What we want to do is plant that same seed a little earlier.\
BoundaryUnknown is an innovation-and-entrepreneurship camp for kids. We believe entrepreneurial thinking shouldn't wait until adulthood — at its heart, it's a way of facing the world: observing life, spotting a real problem, thinking clearly about 'who this matters to and who it can help,' then rolling up your sleeves to build the solution, and finally stepping onto the stage to tell the world about it.\
Here, kids aren't fed empty concepts, nor taught slick sales talk. We hold to one thing only — great creation always begins with genuine care for real people: Who is your product for? Whose trouble does it solve? Our kids learn to spot opportunities like entrepreneurs, build like designers, and present with the confidence of a speaker — and through teamwork, to listen, to make hard choices, and to keep going.\
From Boundary unknown, what each child takes home isn't just a finished project, but the quiet confidence that 'I, too, can create value for the world.'\
What we hope to nurture is the next generation of people who make something people want.\
The boundary is unknown — and that's exactly why it's worth exploring.",
    philosophyTitle: "Our Philosophy:",
    integratedMastery: "Integrated Mastery",
    leadershipTitle: "Co-Founders & Leadership",
  },
  zh: {
    title: "我们是谁？",
    bio: "世界，是被那些敢于创造的人「一点点推动的」。\
    YC 把这件事浓缩成一句话——Make something people want（做出人们真正需要的东西）;陆奇和奇绩，则把信念放在「陪伴创业者，用技术与创新，从 0 到 1 地创造长期价值」。我们想做的，是把这颗种子,种得更早一点。\
未知边界是一个面向孩子的创新创业营。我们相信，创业思维不该等到成年才学——它本质上是一种面对世界的方式:观察生活、发现一个真实的问题，想清楚「这件事对谁重要、能帮到谁」，再动手把解决办法做出来，最后站上舞台,把想法讲给世界听。\
在这里，孩子不灌输空泛的概念，也不学「忽悠的话术」。我们只坚持一件事——好的创造，永远始于对真实的人的关心:你的东西给谁用?解决了谁的烦恼?他们会像创业者一样发现机会、像设计师一样动手实现、像演讲者一样自信表达，并在团队协作中学会倾听、取舍与坚持。\
在未知边界，孩子带走的不只是一件作品，更是一份「我也能为世界创造价值」的底气。\
我们想守护的，是下一代「做出人们真正想要的东西」的人。\
边界未知，所以值得探索。",
    philosophyTitle: "我们的教育理念：",
    integratedMastery: "融会贯通",
    leadershipTitle: "联合创始人与领导团队",
  }
};

export function AboutPage() {
  const { language } = useLanguage();
  const team = language === "zh" ? teamZh : teamEn;
  const founders = language === "zh" ? foundersZh : foundersEn;
  const philosophy = language === "zh" ? philosophyZh : philosophyEn;
  const t = content[language];

  return (
    <>
      <Header variant="white" />
      <main className="mt-24">
        <section className="max-w-screen-xl mx-auto px-4 md:px-8 py-xxl flex flex-col items-center text-center">
          <h1 className="text-[40px] md:text-[64px] font-semibold leading-tight text-inverse-surface max-w-4xl mb-md">
            {t.title}
          </h1>
          <p className="text-body-lg text-secondary max-w-3xl mb-xl leading-relaxed">
            {t.bio}
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
                {t.philosophyTitle} <span className="text-primary">3H Theory</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </div>
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-xl lg:gap-24 relative">
              <div className="relative w-[340px] h-[340px] md:w-[480px] md:h-[480px] shrink-0">
                {/* Heart Circle */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-2/3 bg-[#D06A4C]/12 rounded-full flex items-center justify-center transition-transform hover:scale-105 duration-500">
                  <div className="text-center mb-20">
                    <MaterialIcon name="favorite" className="text-[#D06A4C] text-3xl mb-1 block mx-auto" />
                    <p className="text-label-md font-bold uppercase tracking-widest text-[#D06A4C]">Heart</p>
                  </div>
                </div>
                {/* Head Circle */}
                <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-[#3CA685]/12 rounded-full flex items-center justify-center transition-transform hover:scale-105 duration-500">
                  <div className="text-center mt-16 mr-16">
                    <MaterialIcon name="psychology" className="text-[#2E8268] text-3xl mb-1 block mx-auto" />
                    <p className="text-label-md font-bold uppercase tracking-widest text-[#2E8268]">Head</p>
                  </div>
                </div>
                {/* Hand Circle */}
                <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-[#4A89C8]/12 rounded-full flex items-center justify-center transition-transform hover:scale-105 duration-500">
                  <div className="text-center mt-16 ml-16">
                    <MaterialIcon name="front_hand" className="text-[#3D7CB5] text-3xl mb-1 block mx-auto" />
                    <p className="text-label-md font-bold uppercase tracking-widest text-[#3D7CB5]">Hand</p>
                  </div>
                </div>
                {/* Central Circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 bg-primary rounded-full flex items-center justify-center shadow-2xl z-10 animate-pulse border-4 border-white/20">
                  <p className="text-white font-bold text-center uppercase px-4 leading-tight text-sm">
                    {t.integratedMastery}
                  </p>
                </div>
              </div>
              <div className="flex-1 space-y-md text-left w-full">
                {philosophy.map((item, idx) => {
                  const headingColors = ["text-[#D06A4C]", "text-[#2E8268]", "text-[#3D7CB5]"];
                  return (
                    <div
                      key={item.title}
                      className={`p-lg rounded-2xl sticker-card bg-card border border-border ${item.offset ? "ml-0 lg:ml-8" : ""}`}
                    >
                      <h4 className={`text-headline-lg ${headingColors[idx]} mb-2`}>{item.title}</h4>
                      <p className="text-body-md text-on-surface-variant">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-xxl bg-surface-container-low border-t border-border-muted w-full">
          <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
            <div className="text-center mb-xl">
              <h2 className="text-display-md mb-sm text-on-surface">
                {t.leadershipTitle}
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </div>
            <div className="max-w-5xl mx-auto flex flex-col gap-lg md:gap-xl">
              {founders.map((member) => (
                <div
                  key={member.name}
                  className="flex flex-col md:flex-row items-center md:items-stretch gap-lg md:gap-xl p-lg rounded-2xl bg-card border border-border group hover:border-primary/30 transition-all duration-300 sticker-card"
                >
                  {/* Left Column: Photo + Name + Role */}
                  <div className="flex flex-col items-center text-center w-60 shrink-0">
                    <div className="relative w-44 h-44 rounded-2xl overflow-hidden border-4 border-border/85 group-hover:border-primary transition-all duration-500 shadow-md group-hover:shadow-xl group-hover:scale-105 mb-sm bg-card">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        sizes="176px"
                      />
                    </div>
                    <h3 className="text-headline-lg text-on-surface mb-xs transition-colors duration-300 group-hover:text-primary">
                      {member.name}
                    </h3>
                    <p className="text-body-md text-on-surface-variant font-medium">
                      {member.role}
                    </p>
                  </div>

                  {/* Right Column: Intro */}
                  <div className="flex-1 flex items-center text-center md:text-left px-sm md:px-lg">
                    <p className="text-body-md text-secondary leading-relaxed">
                      {member.intro}
                    </p>
                  </div>
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

