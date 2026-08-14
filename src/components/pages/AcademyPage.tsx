"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useLanguage } from "@/lib/LanguageContext";

const content = {
  en: {
    heroEyebrow: "UNKNOWN BOUNDARIES · 3-STAGE ADVANCEMENT",
    heroTitle: (
      <>
        From Using AI, to <span className="text-[#E8590C]">Building Startups with AI</span>
      </>
    ),
    heroTagline: (
      <>
        Three capability levels, each forming a complete <strong>Creation + Entrepreneurship</strong> loop: spend one semester mastering AI, and the next turning it into a presentable project. <strong>Advancement is based on ability, not age.</strong>
      </>
    ),
    overviewTitle: "THREE-STAGE OVERVIEW",
    overviewSub: "3 Levels × 2 Semesters: The Advancement Path",
    overviewQuote: (
      <>
        Each level consists of two semesters: <b>Semester 1: AI Foundation</b> (building AI skills) → <b>Semester 2: Kids Entrepreneur</b> (building a complete project). The logic: <b>Level 1</b> finds passion; <b>Level 2</b> turns passion into a market product; <b>Level 3</b> thinks about how the product creates value—both business and social.
      </>
    ),
    ageLabel: "Suggested Age",
    refLabel: "Ref Only",
    businessLabel: "Business",
    sem1: "Semester 1",
    sem2: "Semester 2",
    coreContent: "Core Content",
    output: "Output",
    themeType: "Themes",
    skillsLabel: "Knowledge & Skills",
    levels: [
      {
        level: "1",
        capBgClass: "bg-gradient-to-br from-[#F2A878] to-[#EE9257]",
        badgeClass: "bg-white/25 border border-white/45",
        role: "User",
        badge: "Interest & Passion",
        ageText: "Ability first · Suggested G4–5",
        aiText: "Understand and use AI, spark interest & creativity",
        businessText: "Understand daily business, be a little creator",
        sem1Content: (
          <>
            Hands-on with 6 AI domains: <b>Chat, Art, Games, Mini-apps, Websites, Agents</b>. Build a showable mini-project after every one or two classes.
          </>
        ),
        sem1Output: (
          <>
            <b>6 types of AI creations</b> + Growth Portfolio
          </>
        ),
        sem2Content: (
          <>
            What is a <b>user</b>? What is a <b>market</b>? Starting from simple business models, understand how industries work and try building your own <b>"product/project"</b>.
          </>
        ),
        sem2Tags: ["IP Design", "Publishing", "Mini Games", "Media Channel", "Merch"],
        sem2Note: "Actual themes may vary based on progress and circumstances",
        sem2Output: "Complete project + Final presentation",
        sem1Skills: [
          { title: "Image Creation", desc: "Learn to use prompts to describe scenes (who + where + style), design exclusive characters with consistent styles, and complete theme posters." },
          { title: "Video Creation", desc: "Animate images with Image-to-Video, design storyboards to tell stories, edit with subtitles and music, and complete animated shorts." },
          { title: "Web Creation", desc: "Build your own web pages by talking to AI, learn to \"tweak\" and optimize styles, and create interactive websites and apps." },
          { title: "Game Creation", desc: "Explain game rules clearly, and let AI help you build playable games; create your own character assets, adjust difficulty, and challenge high scores." }
        ],
        sem2Skills: [
          { title: "TBD", desc: "Content to be added" }
        ]
      },
      {
        level: "2",
        capBgClass: "bg-gradient-to-br from-[#EC8748] to-[#E8590C]",
        badgeClass: "bg-white/25 border border-white/45",
        role: "Director",
        badge: "Build Products",
        ageText: "Ability first · Reference G5–7",
        aiText: "Direct AI · Turn ideas into products via chat",
        businessText: "Turn passion into market-ready products",
        sem1Content: (
          <>
            <b>Vibe Coding</b>—using modern AI coding tools to systematically build real products by directing and instructing AI.
          </>
        ),
        sem1Output: (
          <>
            <b>5 complete personal projects</b> including web apps, mobile apps and games.
          </>
        ),
        sem2Content: (
          <>
            <b>From creation to value creation.</b> Creating is easy in the AI era, but "valuable creation" requires deep thought. We put creations in real business environments to get feedback, iterate, and learn to <b>"do it better"</b>.
          </>
        ),
        sem2Tags: ["Cultural IP", "Games", "Health Tech", "Pets", "Merch Design", "Open a Store", "Campus Solutions"],
        sem2Note: "Actual themes may vary based on progress and circumstances",
        sem2Output: "Pitch presentation. Projects can be submitted to hackathons and business competitions.",
        sem1Skills: [
          { title: "Full-Stack Web Dev", desc: "Next.js / React component-based development, building and deploying real, usable web applications." },
          { title: "Mobile App Dev", desc: "Cross-platform development with React Native + Expo, building installable mobile apps." },
          { title: "Data Management", desc: "Understand database structures and cloud storage concepts." },
          { title: "Multi-Service Integration", desc: "Integrate AI, voice, and map features into applications." },
          { title: "Software Engineering Methodology", desc: "Brainstorming → PRD (Product Requirements Document) → Implementation → Debugging → Iteration." }
        ],
        sem2Skills: [
          { title: "TBD", desc: "Content to be added" }
        ]
      },
      {
        level: "3",
        capBgClass: "bg-gradient-to-br from-[#2B2723] to-[#1A1A1A]",
        badgeClass: "bg-[#E8590C]/90 border-transparent",
        role: "Independent Builder",
        badge: "Create Value",
        ageText: "Strictly by ability · Reference G7+",
        aiText: "Build big · Create award winning products",
        businessText: "Think about value creation - business & social",
        sem1Content: (
          <>
            Continue with the previous vibe coding theme, upgrade from building personal projects to potentially <b>award winning</b> projects.
          </>
        ),
        sem1Output: (
          <>
            <b>5 complete projects</b> with the potential to enter world prestigious AI competitions.
          </>
        ),
        sem2Content: (
          <>
            <b>mini MBA: Broad learning, deep thinking.</b> We guide kids to think about a product's <b>business value</b> and <b>social value</b>. We explore more <b>tech, business, and social innovations</b>.
          </>
        ),
        sem2Tags: ["AI Innovation", "Frontier Tech", "Business Models", "Climate Action", "Clean Energy", "Health & Wellbeing", "Sustainable Cities"],
        sem2Note: "Covers tech, business, and social innovation aligned with UN SDGs. Actual themes may vary.",
        sem2Output: "Projects can be submitted to hackathons and business competitions.",
      }
    ]
  },
  zh: {
    heroEyebrow: "UNKNOWN BOUNDARIES · 三阶段进阶",
    heroTitle: (
      <>
        从会用 AI，到<span className="text-[#E8590C]">带着 AI 创业</span>
      </>
    ),
    heroTagline: (
      <>
        三个能力层，每层都是一次完整的<strong>创造 + 创业</strong>闭环：先用一学期把 AI 用熟，再用一学期把它变成一个能讲清楚、拿得出手的项目。<strong>升级看能力，不看年龄。</strong>
      </>
    ),
    overviewTitle: "三阶段总览",
    overviewSub: "三层 × 两学期，一张图看懂进阶路径",
    overviewQuote: (
      <>
        每一层都分两个学期：<b>第一学期 AI Foundation</b>（打 AI 技能基础）→ <b>第二学期 Kids Entrepreneur</b>（用技能做一个完整项目）。三层的进阶逻辑：<b>Level 1</b> 找到自己感兴趣、热爱的东西；<b>Level 2</b> 把喜欢的东西做成一个能放在市场上的产品；<b>Level 3</b> 思考这个产品如何为大家创造价值——商业价值与社会价值。
      </>
    ),
    ageLabel: "适合年龄",
    refLabel: "仅参考",
    businessLabel: "商业",
    sem1: "第一学期",
    sem2: "第二学期",
    coreContent: "核心内容",
    output: "产出",
    themeType: "主题类型",
    skillsLabel: "知识和技能",
    levels: [
      {
        level: "1",
        capBgClass: "bg-gradient-to-br from-[#F2A878] to-[#EE9257]",
        badgeClass: "bg-white/25 border border-white/45",
        role: "使用者",
        badge: "兴趣与热爱",
        ageText: "能力优先 · 首期建议 G4–5",
        aiText: "了解 AI、学用 AI，激发兴趣和创造力",
        businessText: "了解生活中的商业、了解各行各业如何运转，做一个「小小创造家」",
        sem1Content: (
          <>
            6 大 AI 板块轮流上手——<b>聊天、画画、做游戏、做小程序、建网站、搭智能体</b>，每节课都做出一个能秀出来的小作品。
          </>
        ),
        sem1Output: (
          <>
            <b>6 类 AI 创作作品</b> + 成长档案
          </>
        ),
        sem2Content: (
          <>
            什么是<b>用户</b>？什么是<b>市场</b>？从简单的商业模式出发，了解一个行业如何运转，并在这个行业里尝试做自己的<b>「产品/项目」</b>。
          </>
        ),
        sem2Tags: ["IP 设计", "图书出版", "小游戏", "频道/自媒体", "潮玩周边"],
        sem2Note: "实际主题根据课程进度和实际情况可能有所变化",
        sem2Output: "完整作品 + 期末展示",
        sem1Skills: [
          { title: "图片创作", desc: "学会用提示词描述画面（谁 + 在哪 + 什么风格），统一风格设计专属角色，完成主题海报" },
          { title: "视频创作", desc: "图生视频让画面动起来，设计分镜讲故事，剪辑配字幕音乐，完成动画短片" },
          { title: "网页创作", desc: "和 AI 对话搭建自己的网页，学会「改一下」优化样式，做出互动网站和应用" },
          { title: "游戏创作", desc: "把游戏规则说清楚，AI 帮你做出能玩的游戏；自制角色素材，调整难度挑战高分" }
        ],
        sem2Skills: [
          { title: "待补充", desc: "内容即将推出" }
        ]
      },
      {
        level: "2",
        capBgClass: "bg-gradient-to-br from-[#EC8748] to-[#E8590C]",
        badgeClass: "bg-white/25 border border-white/45",
        role: "指挥者",
        badge: "做成产品",
        ageText: "能力优先 · 参考 G5–7",
        aiText: "会指挥 · 通过和AI对话，把想法变成产品",
        businessText: "把喜欢的东西做成一个能放在市场上的产品",
        sem1Content: (
          <>
            <b>Vibe Coding</b>——不写代码，依靠 AI编程工具，系统性地指导AI,把想法变成真实产品。
          </>
        ),
        sem1Output: (
          <>
            <b>5 款完整产品</b>包含网页应用，手机应用和游戏。
          </>
        ),
        sem2Content: (
          <>
            <b>从创造，到创造价值。</b>在 AI 时代创造变得很容易，但「有价值的创造」依然是我们需要深度思考和学习的过程。我们尝试带小朋友一起，把创造放在真实的商业环境中，收到真实反馈，并迭代产品，学会如何<b>「做得更好」</b>。
          </>
        ),
        sem2Tags: ["文创×非遗", "游戏", "健康科技", "宠物", "周边设计", "开一家店", "校园难题"],
        sem2Note: "实际主题根据课程进度和实际情况可能有所变化",
        sem2Output: "路演展示。作品可以提交黑客松、商赛等平台。",
        sem1Skills: [
          { title: "Web 全栈开发", desc: "Next.js / React 组件化开发，搭建真实可用的 Web 应用并部署上线" },
          { title: "移动端 App 开发", desc: "React Native + Expo 跨平台开发，构建可安装的手机的应用" },
          { title: "数据管理", desc: "理解数据库结构和云端存储概念" },
          { title: "多服务集成", desc: "给应用集成AI，语音，地图功能" },
          { title: "软件工程方法论", desc: "脑洞 → 需求文档 → 实现 → 调试 → 迭代" }
        ],
        sem2Skills: [
          { title: "待补充", desc: "内容即将推出" }
        ]
      },
      {
        level: "3",
        capBgClass: "bg-gradient-to-br from-[#2B2723] to-[#1A1A1A]",
        badgeClass: "bg-[#E8590C]/90 border-transparent",
        role: "独立开发者",
        badge: "创造价值",
        ageText: "严格按能力 · 参考 G7+",
        aiText: "心怀世界 · 做出能够获奖的产品",
        businessText: "思考自己的创造如何产生价值——商业价值与社会价值",
        sem1Content: (
          <>
            继续上一层级的vibe coding主题，重点从个人项目升级到具备获奖潜质的项目。
          </>
        ),
        sem1Output: (
          <>
            <b>5个完整的项目</b>，具备参加全世界最具影响力的AI创客比赛的潜力。
          </>
        ),
        sem2Content: (
          <>
            <b>mini MBA：广泛学习，深度思考。</b>我们想带孩子们思考一个产品的<b>商业价值</b>，也思考它带来的<b>社会价值</b>。在这个阶段，我们想和孩子们一起探索更多的<b>科技创新、商业创新和社会创新</b>。
          </>
        ),
        sem2Tags: ["AI 创新", "前沿科技", "商业模式创新", "气候行动", "清洁能源", "健康福祉", "可持续城市"],
        sem2Note: "涵盖科技创新、商业创新与对齐联合国可持续发展目标（SDGs）的社会创新，实际主题根据课程进度和实际情况可能有所变化",
        sem2Output: "作品可以提交黑客松、商赛等平台。",
      }
    ]
  }
};

export function AcademyPage() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div className="bg-[#FAF6F0] min-h-screen font-sans text-[#3D3833]">
      <Header variant="white" />

      <main className="pt-20 lg:pt-24">
        {/* HERO SECTION */}
        <div className="relative overflow-hidden bg-[#1A1A1A] text-[#FAF6F0] py-[60px] pb-[48px]">
          {/* Decorators */}
          <div className="absolute -top-[80px] -right-[80px] w-[380px] h-[380px] bg-[#E8590C] rounded-full opacity-15" />
          <div className="absolute -bottom-[120px] right-[160px] w-[240px] h-[240px] border-2 border-[#E8590C] rounded-full opacity-25" />

          <div className="max-w-[1120px] mx-auto px-[28px] relative z-10">
            <div className="inline-block border border-[#E8590C] text-[#FF7A2E] px-[14px] py-[5px] rounded-[2px] text-[12px] tracking-[2px] mb-[20px] font-semibold">
              {t.heroEyebrow}
            </div>
            <h1 className="text-[38px] font-bold mb-[14px] tracking-[1px] leading-[1.25] font-serif">
              {t.heroTitle}
            </h1>
            <p className="text-[16px] text-[#C9BFB2] max-w-[680px] leading-[1.7]">
              {t.heroTagline}
            </p>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="max-w-[1120px] mx-auto px-[28px] py-[36px] pb-[80px]">
          <h2 className="text-[13px] font-bold text-[#E8590C] tracking-[3px] uppercase mb-[6px]">
            {t.overviewTitle}
          </h2>
          <div className="text-[24px] font-bold text-[#1A1A1A] mb-[22px] font-serif tracking-[0.5px]">
            {t.overviewSub}
          </div>
          <blockquote className="border-l-4 border-[#6B7257] bg-[#EBEDE4] py-[14px] px-[20px] my-[18px] mb-[30px] rounded-r-[4px] text-[#3D3833] text-[14px]">
            {t.overviewQuote}
          </blockquote>

          <div className="flex flex-wrap gap-[16px] my-[20px] items-stretch">
            {t.levels.map((lvl: any, idx: number) => {
              const staircaseMargin = idx === 0 ? 'lg:mt-[120px]' : idx === 1 ? 'lg:mt-[60px]' : 'lg:mt-0';

              return (
                <div key={idx} className={`flex-1 min-w-[290px] basis-[320px] rounded-[12px] overflow-hidden border border-[#E0D6C8] bg-white shadow-[0_10px_26px_rgba(60,40,20,0.09)] flex flex-col ${staircaseMargin}`}>
                  {/* Cap */}
                  <div className={`relative overflow-hidden text-white py-[20px] px-[20px] min-h-[112px] flex flex-col justify-between gap-[6px] ${lvl.capBgClass}`}>
                    <span className="absolute -right-[4px] -top-[24px] font-serif font-bold text-[104px] leading-none text-white/10 pointer-events-none">
                      {lvl.level}
                    </span>
                    <div className="relative z-10 text-[10.5px] tracking-[3px] font-bold opacity-85">LEVEL</div>
                    <div className="relative z-10 flex items-end gap-[9px] flex-wrap">
                      <span className="font-serif text-[34px] font-bold leading-[0.9]">{lvl.level}</span>
                      <span className="text-[17px] font-extrabold font-serif pb-[2px]">{lvl.role}</span>
                      <span className={`px-[10px] py-[2px] rounded-[20px] text-[11px] font-bold mb-[3px] ${lvl.badgeClass}`}>
                        {lvl.badge}
                      </span>
                    </div>
                  </div>

                  {/* Age */}
                  <div className="text-[11px] py-[9px] px-[16px] bg-[#FDF6F1] border-b border-[#E0D6C8] text-[#3D3833] leading-[1.5]">
                    <b className="text-[#B8460A] font-extrabold">{t.ageLabel}</b> {lvl.ageText}
                    <span className="inline-block bg-[#F5E6D8] text-[#A05A1E] border border-dashed border-[#C98A4E] text-[9px] font-bold px-[5px] rounded-[4px] ml-[3px]">
                      {t.refLabel}
                    </span>
                  </div>

                  {/* Spine */}
                  <div className="text-[11px] py-[9px] px-[16px] border-b border-[#E0D6C8] text-[#3D3833] leading-[1.6]">
                    <b className="text-[#B8460A] font-extrabold">AI</b> {lvl.aiText} &nbsp;|&nbsp; <b className="text-[#B8460A] font-extrabold">{t.businessLabel}</b> {lvl.businessText}
                  </div>

                  {/* Semesters */}
                  <div className="flex flex-1 items-stretch flex-col lg:flex-row">
                    {/* Sem 1 */}
                    <div className="flex-1 min-w-0 py-[14px] px-[15px] border-b-2 lg:border-b-0 lg:border-r-2 border-[#E3D8C8]">
                      <div className="flex items-center gap-[6px] text-[12px] font-extrabold text-[#1A1A1A] font-serif">
                        <span className="w-[7px] h-[7px] rounded-full bg-[#E8590C] shrink-0"></span>
                        {t.sem1}
                      </div>
                      <div className="text-[9.5px] text-[#8C8279] font-bold tracking-[0.5px] mt-[2px] ml-[13px] uppercase">
                        AI Foundation
                      </div>
                      <div className="mt-[10px]">
                        <span className="inline-block text-[9.5px] font-extrabold tracking-[0.5px] text-[#B8460A] border border-[#E8590C] rounded-[5px] py-[1px] px-[6px] mb-[4px]">
                          {t.coreContent}
                        </span>
                        <span className="block text-[11.5px] text-[#3D3833] leading-[1.55] mt-[3px]">
                          {lvl.sem1Content}
                        </span>
                      </div>
                      {lvl.sem1Skills && lvl.sem1Skills.length > 0 && (
                        <div className="mt-[10px]">
                          <span className="inline-block text-[9.5px] font-extrabold tracking-[0.5px] text-[#B8460A] border border-[#E8590C] rounded-[5px] py-[1px] px-[6px] mb-[4px]">
                            {t.skillsLabel}
                          </span>
                          <ul className="flex flex-col gap-[6px] mt-[3px]">
                            {lvl.sem1Skills.map((skill: any, i: number) => (
                              <li key={i} className="text-[11.5px] text-[#3D3833] leading-[1.55] flex items-start gap-[6px]">
                                <span className="text-[#E8590C] font-bold mt-[1px]">•</span>
                                <span>
                                  <b>{skill.title}</b>{language === 'en' ? ': ' : '：'}{skill.desc}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div className="mt-[10px]">
                        <span className="inline-block text-[9.5px] font-extrabold tracking-[0.5px] text-white bg-[#E8590C] border border-[#E8590C] rounded-[5px] py-[1px] px-[6px] mb-[4px]">
                          {t.output}
                        </span>
                        <span className="block text-[11.5px] text-[#3D3833] leading-[1.55] mt-[3px]">
                          {lvl.sem1Output}
                        </span>
                      </div>
                    </div>

                    {/* Sem 2 */}
                    <div className="flex-1 min-w-0 py-[14px] px-[15px] bg-[#FDF6F1]">
                      <div className="flex items-center gap-[6px] text-[12px] font-extrabold text-[#1A1A1A] font-serif">
                        <span className="w-[7px] h-[7px] rounded-full bg-[#E8590C] shrink-0"></span>
                        {t.sem2}
                      </div>
                      <div className="text-[9.5px] text-[#8C8279] font-bold tracking-[0.5px] mt-[2px] ml-[13px] uppercase">
                        Kids Entrepreneur
                      </div>
                      <div className="mt-[10px]">
                        <span className="inline-block text-[9.5px] font-extrabold tracking-[0.5px] text-[#B8460A] border border-[#E8590C] rounded-[5px] py-[1px] px-[6px] mb-[4px]">
                          {t.coreContent}
                        </span>
                        <span className="block text-[11.5px] text-[#3D3833] leading-[1.55] mt-[3px]">
                          {lvl.sem2Content}
                        </span>
                      </div>
                      {lvl.sem2Skills && lvl.sem2Skills.length > 0 && (
                        <div className="mt-[10px]">
                          <span className="inline-block text-[9.5px] font-extrabold tracking-[0.5px] text-[#B8460A] border border-[#E8590C] rounded-[5px] py-[1px] px-[6px] mb-[4px]">
                            {t.skillsLabel}
                          </span>
                          <ul className="flex flex-col gap-[6px] mt-[3px]">
                            {lvl.sem2Skills.map((skill: any, i: number) => (
                              <li key={i} className="text-[11.5px] text-[#3D3833] leading-[1.55] flex items-start gap-[6px]">
                                <span className="text-[#E8590C] font-bold mt-[1px]">•</span>
                                <span>
                                  <b>{skill.title}</b>{language === 'en' ? ': ' : '：'}{skill.desc}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div className="mt-[10px] bg-white border border-[#F1CBAB] rounded-[8px] py-[8px] px-[10px]">
                        <span className="inline-block text-[9.5px] font-extrabold tracking-[0.5px] text-white bg-[#B8460A] border border-[#B8460A] rounded-[5px] py-[1px] px-[6px] mb-[4px]">
                          {t.themeType}
                        </span>
                        <div className="flex flex-wrap gap-[5px] mt-[5px]">
                          {lvl.sem2Tags.map((tag: string, i: number) => (
                            <span key={i} className="inline-block bg-white border border-[#E8590C] text-[#B8460A] text-[10.5px] font-bold py-[2px] px-[9px] rounded-[12px] whitespace-nowrap">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="block text-[9px] text-[#8C8279] mt-[6px] leading-[1.4]">
                          {lvl.sem2Note}
                        </span>
                      </div>
                      <div className="mt-[10px]">
                        <span className="inline-block text-[9.5px] font-extrabold tracking-[0.5px] text-white bg-[#E8590C] border border-[#E8590C] rounded-[5px] py-[1px] px-[6px] mb-[4px]">
                          {t.output}
                        </span>
                        <span className="block text-[11.5px] text-[#3D3833] leading-[1.55] mt-[3px]">
                          {lvl.sem2Output}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
