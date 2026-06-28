"use client";

import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MaterialIcon } from "@/components/MaterialIcon";
import { useLanguage } from "@/lib/LanguageContext";

const teamEn = [
  {
    title: "Our Mentors",
    desc: "We believe children deserve exposure to the real business world.\
Our mentors come from investment, banking, corporate management, and engineering. They bring years of firsthand experience: real decisions, real trade-offs, real consequences.\
Their role here is a professional one — translating that experience into knowledge children can genuinely understand and apply.",
    role: "Practical Mentor",
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
    desc: "我们始终相信，孩子需要接触真实的世界。\
所以，我们的导师团队来自投资、投行、企业管理与工程技术一线。他们在各自领域积累了多年的实战经验——真实的判断、真实的取舍、真实的代价。\
他们来到这里，做一件专业的事：把这些经验严肃地转化为孩子能够理解和运用的知识。",
    role: "真实世界",
  },
  {
    title: "我们的学员",
    desc: "我们的学员，是一群心里有热爱、手里有想法的孩子。他们也许年纪还小，却已经不满足于现成的答案，开始好奇世界能不能不一样。我们陪他们走到未知的边界上，把一份热爱、一个念头，一步步探索成真正属于自己的创造——在这里，每一个认真想做点什么的孩子，都被当作认真的创造者对待。",
    role: "热爱与坚持",
    offset: true,
  },
  {
    title: "我们的社区",
    desc: "我们最珍惜的，是这里的人。认同「教育长期性」的家长，走过真实创业与行业的导师，还有一群有热爱、有想法的孩子——他们在这里相遇，慢慢长成一个温暖而优质的社区。我们愿做彼此的链接者：把孩子轻轻带进真实的成年世界，把一个个好想法，链接到真实的机会面前。",
    role:"独行快，众行远",
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
    role: "创始人",
    image: "/images/team/cece_fang.png",
    intro: "Boundary Unknown 创始人。拥有十余年投行及投资行业经验，深谙企业从初创到上市的价值成长逻辑，笃信投资与教育皆是长期主义的实践，致力于将创业思维，融入少年成长教育，点燃“未来超级个体”的梦想。",
  },
  {
    name: "Lexie Wu",
    role: "联合创始人",
    image: "/images/team/lexie_wu.png",
    intro: "Boundary Unknown 联合创始人。十余年财务及交易咨询经验。在过去的工作中，我接触过很多创始人，我发现，成功的人往往不是最聪明的，而是最有主动性的——自己找问题、自己动手、失败了再来。我们相信，这种能力，是可以从小培养的。未知边界基于这个判断建立——让孩子在真实项目里反复动手、拿到反馈、迭代。最好的学习，永远发生在真实的实践里。",
  },
  {
    name: "Jing Guo",
    role: "联合创始人",
    image: "/images/team/jing_guo.png",
    intro: "Boundary Unknown联合创始人。计算机博士，前 Bloomberg 工程师。他为课程引入系统性的工程思维框架，确保学员所用的工具与开发流程与真实行业接轨——从 AI 工具选型到原型构建，每一步有据可依。",
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
    bio: [
      "The world is driven forward, bit by bit, by those who dare to create.",
      "YC demands: 「Make something people want.」 MiraclePlus vows: 「From 0 to 1, create long-term value.」 Miracle Edge is here to plant this seed earlier.",
      "Entrepreneurial thinking shouldn't wait for adulthood. It is a mindset for life: Spot a real problem. Build the solution. Stand on the stage and change the world.",
      "As the ultimate 「connector,」 Miracle Edge bridges youth and the adult world to co-create a powerful innovation ecosystem.",
      "Here, children don't just build projects—they forge the rock-solid belief: 「I, too, can create value for this world.」",
      "The horizon is unknown. Explore it.",
    ],
    philosophyTitle: "Our Philosophy:",
    integratedMastery: "Integrated Mastery",
    leadershipTitle: "Co-Founders & Leadership",
  },
  zh: {
    title: "我们是谁？",
    bio: [
      "世界，是被那些敢于创造的人「一点点推动的」。",
      "YC 说：Make something people want（做人们真正需要的东西）；陆奇和奇绩则坚信：陪伴创业者，从 0 到 1 创造长期价值。",
      <strong key="seed" className="font-bold text-on-surface">而未知边界想做的，是把这颗种子，种得更早一点。</strong>,
      "我们坚信，创业思维不该等到成年才学——它本质上是一种面对世界的方式：发现真实问题，动手解决问题，最终站上舞台，把想法讲给世界听。",
      "作为「链接者」，未知边界正打破边界，连接孩子与成人世界，共同构建一个充满活力的创新创业社区。",
      "在这里，孩子们带走的不只是一件作品，更是一份「我也能为世界创造价值」的底气。",
      <strong key="explore" className="font-bold text-on-surface">边界未知，所以值得探索。</strong>,
    ],
    philosophyTitle: "我们的教育理念：",
    integratedMastery: "超级个体",
    leadershipTitle: "我们的团队",
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
          <div className="text-body-lg text-secondary max-w-3xl mb-xl leading-relaxed space-y-md text-left">
            {t.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
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
                    <div className="relative w-44 h-44 rounded-full overflow-hidden transition-all duration-500 shadow-md group-hover:shadow-xl group-hover:scale-105 mb-sm">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
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

