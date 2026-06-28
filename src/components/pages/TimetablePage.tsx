"use client";

import { useState, useEffect } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useLanguage } from "@/lib/LanguageContext";

interface Detail {
  tag: string;
  when: string;
  title: string;
  html: string;
}

const DETAILS_ZH: Record<string, Detail> = {
  d2_lo_ai: {
    tag: "AI Boost · Creator",
    when: "Day 2 · 上午",
    title: "What is AI? vibe coding 101",
    html: `
      <p>孩子将<b>初步认识 AI</b>：它大概是怎么工作的、如今能做到哪些事，以及——<b>怎样和 AI 有效地对话</b>。</p>
      <div class="quote">课程目标：建立对 AI 的整体认识，学会"好好提问"，为后面动手用 AI 打下基础。</div>
    `
  },
  d2_jiexi: {
    tag: "创业思维",
    when: "Day 2 · 上午",
    title: "主题拆解 · 创业思维",
    html: `
      <p>用一组真实又有趣的例子，带孩子认识 AI 能做的三类事：让生活更有趣（<b>fun</b>）、帮助学习（<b>learning</b>）、让世界更好（<b>good</b>）。</p>
      <div class="quote">课程目标：打开视野，理解"AI 可以用来做很多有意义的事"，并找到自己最感兴趣的方向。</div>
    `
  },
  d2_hi_biz2: {
    tag: "创业思维 · Innovator",
    when: "Day 2 · 上午",
    title: "商业素养课",
    html: `
      <p>通过一局「<b>商业侦探</b>」桌游，在玩中搞清楚一家公司是怎么运转的：CEO、CFO、CTO、CMO 各自做什么，公司靠哪些关键指标判断好坏。</p>
      <div class="quote">课程目标：建立简单的商业"sense"，理解公司就像一台需要分工配合的"团队机器"。</div>
    `
  },
  d2pm_hi: {
    tag: "AI Boost · Innovator",
    when: "Day 2 · 下午",
    title: "What is AI? vibe coding 101",
    html: `
      <p>孩子将<b>初步认识 AI</b>：它大概是怎么工作的、如今能做到哪些事、怎样和 AI 有效对话，并以更具思辨的视角看待 AI 的能力与边界。</p>
      <div class="quote">课程目标：建立对 AI 的整体认识与判断力，学会"好好提问"，为动手用 AI 打基础。</div>
    `
  },
  d2pm_lo: {
    tag: "创业思维 · Creator",
    when: "Day 2 · 下午",
    title: "商业素养课",
    html: `
      <p>通过一局「<b>商业侦探</b>」桌游，在玩中搞清楚一家公司是怎么运转的：CEO、CFO、CTO、CMO 各自做什么，公司靠哪些关键指标判断好坏。</p>
      <div class="quote">课程目标：建立简单的商业"sense"，理解公司就像一台需要分工配合的"团队机器"。</div>
    `
  },
  d2empathy: {
    tag: "创业思维",
    when: "Day 2 · 下午",
    title: "共情力 — 发现痛点、头脑风暴",
    html: `
      <p>好的创意，来自对生活的观察和对痛点的捕捉。这节课带孩子一起头脑风暴：<b>生活里有哪些"问题"？哪些是你最想改变的？</b></p>
      <div class="quote">课程目标：培养观察力与共情力，学会"先看见问题，再谈点子"，为项目找到真实的出发点。</div>
    `
  },
  d2_blueprint: {
    tag: "Teamwork",
    when: "Day 2 · 晚间",
    title: "开始策划你的创业蓝图",
    html: `
      <p>晚间小组时间：从三大主题（AI for <b>fun</b> / <b>learning</b> / <b>good</b>）里，讨论并定下自己小组想做的"创业主题"。</p>
      <div class="quote">课程目标：完成从"我喜欢"到"我们要做什么"的第一步，凝聚小组方向。</div>
    `
  },
  d6show: {
    tag: "Showtime",
    when: "Day 6 · 下午",
    title: "项目路演",
    html: `
      <p><b>It's your show time!</b> 六天的努力在这一刻登场——每个小组上台讲出自己的项目，并展示亲手做出的作品。</p>
      <div class="quote">课程目标：在真实舞台上自信表达，为自己的创造感到骄傲。</div>
    `
  },
  d_mvp: {
    tag: "Teamwork",
    when: "Day 4 / Day 5",
    title: "打造 MVP",
    html: `
      <p>小组开始动手打造自己的 <b>MVP</b>（最小可用产品）——借助 AI 工具，实现<b>从 0 到 1 的突破</b>。</p>
      <div class="quote">课程目标：把想法变成一个能展示、能讲清楚的真实作品。</div>
    `
  },
  d3_vibe_games: {
    tag: "AI Boost",
    when: "Day 3 · 上午",
    title: "Vibe Coding · Games",
    html: `
      <p>会打游戏，不等于会做游戏。这节课从<b>分析经典游戏</b>入手，看看一个好游戏背后有哪些关键设计，并用 AI 工具动手做出自己的小游戏。</p>
      <div class="quote">课程目标：理解游戏设计的基本思路，并亲手做出一个能玩的小游戏。</div>
    `
  },
  d3_vibe_web: {
    tag: "AI Boost",
    when: "Day 3 · 下午",
    title: "Vibe Coding · Apps / Website",
    html: `
      <p>做一个网站不是天方夜谭。这节课一起看看<b>经典网站是怎么诞生的</b>，并用 AI 工具动手搭建属于自己项目的网页或小应用。</p>
      <div class="quote">课程目标：理解一个"受欢迎"的网站从何而来，并搭出自己项目的第一版网页。</div>
    `
  },
  d3_market: {
    tag: "创业思维",
    when: "Day 3 · 下午",
    title: "市场与用户",
    html: `
      <p>一句话搞懂市场和用户：<b>市场 = 一群有相同需求的人，用户 = 具体的那个人。</b>孩子将思考"我的东西到底给谁用"，并借助 AI 描绘目标用户画像。</p>
      <div class="quote">课程目标：建立"为真实用户而做"的意识，明确自己项目的目标人群。</div>
    `
  },
  d4_survey: {
    tag: "创业思维",
    when: "Day 4 · 晨间 + 午休",
    title: "市场问卷调查",
    html: `
      <p><b>做之前先问，别猜。</b>每个小组设计一份属于自己的问卷，午休时走出去采访营地里的其他小朋友，收集真实的反馈。</p>
      <div class="quote">课程目标：学会用调研倾听真实用户的声音，为产品和路演积累一手依据。</div>
    `
  },
  d4plan_lo: {
    tag: "创业思维 · Creator",
    when: "Day 4 · 下午",
    title: "商业计划书 · 填故事",
    html: `
      <p>用<b>讲故事</b>的方式，把自己的小公司说清楚：卖什么、给谁、解决什么烦恼、怎么让别人知道……一句一个角度，轻松完成。</p>
      <div class="quote">课程目标：用孩子能懂的方式完成人生第一份"商业计划"，也是路演稿的雏形。</div>
    `
  },
  d4plan_hi: {
    tag: "创业思维 · Innovator",
    when: "Day 4 · 下午",
    title: "商业计划书 · 三模型",
    html: `
      <p>像专业人士一样，用 <b>SWOT、PEST、Porter</b> 三个"放大镜"从不同角度看清自己的生意，并在 AI 辅助下整合成一份完整的商业计划书。</p>
      <div class="quote">课程目标：学会用分析工具支撑决策，产出一份有说服力的商业计划书。</div>
    `
  },
  d5_lo: {
    tag: "路演准备 · Creator",
    when: "Day 5 · 上午",
    title: "AI 工具 · 路演准备",
    html: `
      <p>用 AI 工具帮助<b>梳理路演结构</b>，甚至制作属于自己的"<b>产品广告</b>"，让项目更打动人。</p>
      <div class="quote">课程目标：把项目讲清楚、讲生动，准备好属于自己的路演素材。</div>
    `
  },
  d5_hi: {
    tag: "路演准备 · Innovator",
    when: "Day 5 · 上午",
    title: "AI 工具 · 路演准备",
    html: `
      <p>用 AI 工具梳理路演逻辑，并制作<b>路演 slides、产品广告</b>等，让表达更专业、更有说服力。</p>
      <div class="quote">课程目标：高效产出专业的路演材料，把项目的价值讲明白。</div>
    `
  },
  d5speak: {
    tag: "路演准备",
    when: "Day 5 · 下午",
    title: "演讲课",
    html: `
      <p>专业的演讲课：先一起学习开场、肢体、声音、控场等表达技巧，再分小组针对各自的稿子做单独辅导。</p>
      <div class="quote">课程目标：克服上台紧张，自信清晰地把项目讲给别人听。</div>
    `
  },
  d6rehearsal: {
    tag: "路演准备",
    when: "Day 6 · 上午",
    title: "彩排及路演准备",
    html: `
      <p>正式路演前的彩排：完整走一遍流程、调试设备、演练评委可能问到的问题，确保下午的路演万无一失。</p>
      <div class="quote">课程目标：让每个孩子都准备充分、信心满满地登上舞台。</div>
    `
  },
  d1open: {
    tag: "Opening",
    when: "Day 1 · 15:00 入营 / 16:00 开营",
    title: "入营 + 开营仪式",
    html: `
      <p>15:00 入营报到；约 16:00 举行开营仪式：开营魔法秀、六天目标介绍，以及由孩子们一起<b>共创营地规则</b>。</p>
      <div class="quote">课程目标：正式开启六天的创客之旅，让孩子从第一刻起就成为营地的主人。</div>
    `
  },
  d1ice: {
    tag: "Teamwork",
    when: "Day 1 · 晚间",
    title: "破冰游戏 · 分组 · 队伍三件套",
    html: `
      <p>晚间破冰：名字大轮转、AI 猜猜猜、找朋友 Bingo，然后分组并共创队名、队徽、队歌。</p>
      <div class="quote">课程目标：快速破冰、结识新朋友，组建接下来并肩作战的小队。</div>
    `
  }
};

const DETAILS_EN: Record<string, Detail> = {
  d2_lo_ai: {
    tag: "AI Boost · Creator",
    when: "Day 2 · AM",
    title: "What is AI? vibe coding 101",
    html: `
      <p>Children will gain a <b>basic understanding of AI</b>: how it generally works, what it can achieve today, and most importantly—<b>how to converse with AI effectively</b>.</p>
      <div class="quote">Course Goal: Build a holistic understanding of AI and learn how to "ask the right questions," laying the foundation for hands-on AI usage.</div>
    `
  },
  d2_jiexi: {
    tag: "Founder Mindset",
    when: "Day 2 · AM",
    title: "Topic Deconstruction · Founder Mindset",
    html: `
      <p>Through a series of real and engaging examples, kids will understand three categories of things AI can do: making life more fun (<b>fun</b>), helping with learning (<b>learning</b>), and making the world a better place (<b>good</b>).</p>
      <div class="quote">Course Goal: Expand horizons, realize that "AI can be used to do many meaningful things," and discover areas of personal interest.</div>
    `
  },
  d2_hi_biz2: {
    tag: "Business Literacy · Innovator",
    when: "Day 2 · AM",
    title: "Business Literacy",
    html: `
      <p>Through a session of the "<b>Business Detective</b>" board game, kids will learn how a company operates in a play-based environment: what the CEO, CFO, CTO, and CMO do, and what key metrics guide a company's success.</p>
      <div class="quote">Course Goal: Develop basic business intuition, understanding that a company is like a "team machine" requiring collaboration.</div>
    `
  },
  d2pm_hi: {
    tag: "AI Boost · Innovator",
    when: "Day 2 · PM",
    title: "What is AI? vibe coding 101",
    html: `
      <p>Kids will gain a <b>basic understanding of AI</b>: how it works, what it can do today, how to converse with AI effectively, and approach AI capabilities and limitations with a critical perspective.</p>
      <div class="quote">Course Goal: Build a holistic understanding and critical judgment of AI, and learn how to "ask the right questions" for hands-on creation.</div>
    `
  },
  d2pm_lo: {
    tag: "Business Literacy · Creator",
    when: "Day 2 · PM",
    title: "Business Literacy",
    html: `
      <p>Through a session of the "<b>Business Detective</b>" board game, kids will learn how a company operates in a play-based environment: what the CEO, CFO, CTO, and CMO do, and what key metrics guide a company's success.</p>
      <div class="quote">Course Goal: Develop basic business intuition, understanding that a company is like a "team machine" requiring collaboration.</div>
    `
  },
  d2empathy: {
    tag: "Founder Mindset",
    when: "Day 2 · PM",
    title: "Empathy — Discovering Pain Points & Brainstorming",
    html: `
      <p>Great ideas stem from observing life and capturing pain points. This class will guide children to brainstorm: <b>What problems exist in daily life? Which ones do you want to change the most?</b></p>
      <div class="quote">Course Goal: Develop observation and empathy, learning to "see problems before discussing ideas," to find real starting points for projects.</div>
    `
  },
  d2_blueprint: {
    tag: "Teamwork",
    when: "Day 2 · Evening",
    title: "Start Designing Your Business Blueprint",
    html: `
      <p>Evening team session: Discuss and define the "startup theme" for the group from the three major areas (AI for <b>fun</b> / <b>learning</b> / <b>good</b>).</p>
      <div class="quote">Course Goal: Complete the first step from "what I like" to "what we are going to build," aligning team goals.</div>
    `
  },
  d6show: {
    tag: "Showtime",
    when: "Day 6 · PM",
    title: "Project Roadshow",
    html: `
      <p><b>It's your show time!</b> The hard work of six days takes center stage—each team presents their project on stage, explaining their concepts and demonstrating their built creations.</p>
      <div class="quote">Course Goal: Present confidently on a real stage and be proud of what you created.</div>
    `
  },
  d_mvp: {
    tag: "Teamwork",
    when: "Day 4 / Day 5",
    title: "Build MVP",
    html: `
      <p>Teams start building their <b>MVP</b> (Minimum Viable Product)—achieving a <b>breakthrough from 0 to 1</b> using AI tools.</p>
      <div class="quote">Course Goal: Turn ideas into a real, presentable, and clear creation.</div>
    `
  },
  d3_vibe_games: {
    tag: "AI Boost",
    when: "Day 3 · AM",
    title: "Vibe Coding · Games",
    html: `
      <p>Knowing how to play games is not the same as knowing how to build them. This class starts by <b>analyzing classic games</b> to see the key designs behind good games, and using AI tools to build your own mini-game.</p>
      <div class="quote">Course Goal: Understand the basic concepts of game design and build a playable mini-game demo yourself.</div>
    `
  },
  d3_vibe_web: {
    tag: "AI Boost",
    when: "Day 3 · PM",
    title: "Vibe Coding · Apps / Website",
    html: `
      <p>Building a website is not a pipe dream. This class explores <b>how classic websites are created</b> and uses AI tools to construct web pages or applications for your projects.</p>
      <div class="quote">Course Goal: Understand what makes a website popular and build the first web page for your project.</div>
    `
  },
  d3_market: {
    tag: "Founder Mindset",
    when: "Day 3 · PM",
    title: "Market and Users",
    html: `
      <p>Understand market and users in one sentence: <b>Market = a group of people with the same need; User = that specific individual.</b> Kids will think about "who my product is for" and use AI to create user personas.</p>
      <div class="quote">Course Goal: Build the awareness of "creating for real users" and clarify the target audience of the project.</div>
    `
  },
  d4_survey: {
    tag: "Founder Mindset",
    when: "Day 4 · Morning & Lunch Recess",
    title: "Market Survey",
    html: `
      <p><b>Ask before you make, don't guess.</b> Each team designs their own questionnaire and conducts interviews with other kids in the camp during lunch break to collect real feedback.</p>
      <div class="quote">Course Goal: Learn to listen to real user voices through research, gaining primary evidence for product development and pitching.</div>
    `
  },
  d4plan_lo: {
    tag: "Founder Mindset · Creator",
    when: "Day 4 · PM",
    title: "Business Plan · Storytelling",
    html: `
      <p>Tell the company story by <b>filling in blanks</b>: what to sell, for whom, resolving what annoyance, how to make money... exploring one perspective at a time to complete systematically.</p>
      <div class="quote">Course Goal: Complete the first business plan in a kid-friendly way, which also serves as the draft for the pitch script.</div>
    `
  },
  d4plan_hi: {
    tag: "Founder Mindset · Innovator",
    when: "Day 4 · PM",
    title: "Business Plan · Three Models",
    html: `
      <p>Analyze business plans like professionals using <b>SWOT, PEST, and Porter's</b> frameworks from different angles, and consolidate them into a complete business plan with AI assistance.</p>
      <div class="quote">Course Goal: Learn to use analysis tools to support decisions, producing a persuasive business plan.</div>
    `
  },
  d5_lo: {
    tag: "Roadshow Prep · Creator",
    when: "Day 5 · AM",
    title: "AI Tools · Roadshow Prep",
    html: `
      <p>Use AI tools to <b>structure your pitch</b> and create your own "<b>product commercial</b>" to make the project more engaging.</p>
      <div class="quote">Course Goal: Explain and present the project clearly and vividly, preparing your roadshow materials.</div>
    `
  },
  d5_hi: {
    tag: "Roadshow Prep · Innovator",
    when: "Day 5 · AM",
    title: "AI Tools · Roadshow Prep",
    html: `
      <p>Use AI tools to structure pitch logic, and create <b>slides and commercials</b> to make presentations more professional and persuasive.</p>
      <div class="quote">Course Goal: Produce professional roadshow materials efficiently to clearly convey the project's value.</div>
    `
  },
  d5speak: {
    tag: "Roadshow Prep",
    when: "Day 5 · PM",
    title: "Pitch Class",
    html: `
      <p>Professional public speaking class: learn presentation techniques such as openings, body language, vocal range, and pacing, followed by individual team mentoring on scripts.</p>
      <div class="quote">Course Goal: Overcome stage fright and present the project with confidence and clarity.</div>
    `
  },
  d6rehearsal: {
    tag: "Roadshow Prep",
    when: "Day 6 · AM",
    title: "Rehearsal & Roadshow Prep",
    html: `
      <p>Rehearsal before the official roadshow: walk through the entire process, test equipment, and practice Q&A to ensure everything goes smoothly.</p>
      <div class="quote">Course Goal: Ensure every camper is fully prepared and confident for the stage.</div>
    `
  },
  d1open: {
    tag: "Opening",
    when: "Day 1 · 15:00 Arrival / 16:00 Ceremony",
    title: "Camp Check-in & Opening Ceremony",
    html: `
      <p>15:00 Camp check-in; ~16:00 Opening Ceremony: opening magic show, overview of 6-day goals, and co-creating camp rules together.</p>
      <div class="quote">Course Goal: Kick off the six-day maker journey, letting kids become the owners of the camp from the very start.</div>
    `
  },
  d1ice: {
    tag: "Teamwork",
    when: "Day 1 · Evening",
    title: "Icebreaker Games · Grouping · Team Identity Triad",
    html: `
      <p>Evening icebreaking: name rotation, Guess the AI, Friend Bingo, grouping, and co-creating team name, logo, and team song.</p>
      <div class="quote">Course Goal: Break the ice quickly, meet new friends, and establish team identity for the journey.</div>
    `
  }
};

const content = {
  zh: {
    kicker: "BoundaryUnknown · Summer Maker-thon 2026",
    title: "未知边界 · 2026 暑期创客松 ",
    titleHighlight: "课程表",
    subtitle: "6 天，从一个想法到一件能上台路演的真实作品。青色=AI 课，橙色=创业思维 / 商业课；点击任意板块查看课程内容与目标。",
    clickHint: "点击板块查看 <b>课程详情</b> →",
    legendBiz: "创业思维",
    legendTech: "AI Boost",
    legendTeam: "Teamwork",
    legendShare: "分享与复盘",
    legendPresent: "路演准备 / Showtime",
    legendCream: "Warm up",
    legendLo: "Creator",
    legendHi: "Innovator",
    legendLoRange: "<10 岁",
    legendHiRange: "10 岁+",
    colDay1: "DAY 1",
    subDay1: "开营 · 破冰",
    colDay2: "DAY 2",
    subDay2: "创业思维 × 初识 AI",
    colDay3: "DAY 3",
    subDay3: "市场用户 × Vibe Coding",
    colDay4: "DAY 4",
    subDay4: "市场调研 · 计划书",
    colDay5: "DAY 5",
    subDay5: "路演表达",
    colDay6: "DAY 6",
    subDay6: "路演日",
    rowMorning: "晨间",
    rowMorningSession: "上午",
    rowNoonSession: "中午",
    rowAfternoonSession: "下午",
    rowDinnerSession: "晚餐",
    rowEveningSession: "晚间",
    lunchRecess: "午餐和午休 · Lunch & Recess",
    dinnerRecess: "晚餐及休息 · Dinner & Recess",
    familyTime: "家庭沟通 · Family Time",
    warmup: "Warm up",
    surveyTitle: "市场问卷调查",
    surveyMeta: "设计问卷 → 午休找陌生小朋友做调研",
    loAIPrep: "AI 工具 · 路演准备",
    hiAIPrep: "AI 工具 · 路演准备",
    d2jiexi: "主题拆解 · 创业思维",
    d2loai: "What is AI? vibe coding 101",
    d2hibiz2: "商业素养课",
    d3vibegames: "Vibe Coding · Games",
    d3vibeweb: "Vibe Coding · Apps / Website",
    dmvp: "打造 MVP",
    d5completeAI: "用 AI 完成路演材料",
    d6rehearsal: "路演准备",
    d1open: "入营 + 开营仪式",
    d1openMeta: "15:00 入营 · 16:00 开营仪式",
    d2empathy: "共情力 — 发现痛点、头脑风暴",
    d2share: "分享与复盘",
    d3market: "市场与用户",
    d3discuss: "讨论 PRD / GDD，确定小组方案",
    d4planlo: "商业计划书 · 填故事",
    d4planhi: "商业计划书 · 三模型",
    d5speak: "演讲课（合班）→ 小组单独辅导",
    d6show: "项目路演",
    d1ice: "破冰游戏 · 分组 · 队伍三件套",
    d2blueprint: "开始策划你的创业蓝图",
    d4pitchscript: "路演讲稿准备",
    d5refinement: "继续完善 MVP 及路演",
    d6departure: "结营 · 离营",
    recess: "休息 · Recess"
  },
  en: {
    kicker: "BoundaryUnknown · Summer Maker-thon 2026",
    title: "BoundaryUnknown · 2026 Summer Maker-thon ",
    titleHighlight: "Timetable",
    subtitle: "6 days, from an idea to a real project pitch on stage. Cyan = AI class, Orange = Entrepreneurship / Business class; click any block to view course details.",
    clickHint: "Click a block to view <b>details</b> →",
    legendBiz: "Founder Mindset",
    legendTech: "AI Boost",
    legendTeam: "Teamwork",
    legendShare: "Review & Recap",
    legendPresent: "Roadshow / Showtime",
    legendCream: "Warm up",
    legendLo: "Creator",
    legendHi: "Innovator",
    legendLoRange: "<10 yrs",
    legendHiRange: "10+ yrs",
    colDay1: "DAY 1",
    subDay1: "Onboarding & Icebreaking",
    colDay2: "DAY 2",
    subDay2: "Founder Mindset × Intro to AI",
    colDay3: "DAY 3",
    subDay3: "Market & Users × Vibe Coding",
    colDay4: "DAY 4",
    subDay4: "Market Survey & Biz Plan",
    colDay5: "DAY 5",
    subDay5: "Pitch & Presentation",
    colDay6: "DAY 6",
    subDay6: "Roadshow Day",
    rowMorning: "Morning",
    rowMorningSession: "AM",
    rowNoonSession: "Noon",
    rowAfternoonSession: "PM",
    rowDinnerSession: "Dinner",
    rowEveningSession: "Night",
    lunchRecess: "Lunch & Recess",
    dinnerRecess: "Dinner & Recess",
    familyTime: "Family Time",
    warmup: "Warm up",
    surveyTitle: "Market Survey",
    surveyMeta: "Design questionnaire → Interview peers during lunch break",
    loAIPrep: "AI Tools · Roadshow Prep",
    hiAIPrep: "AI Tools · Roadshow Prep",
    d2jiexi: "Topic Deconstruction · Founder Mindset",
    d2loai: "What is AI? vibe coding 101",
    d2hibiz2: "Business Literacy",
    d3vibegames: "Vibe Coding · Games",
    d3vibeweb: "Vibe Coding · Apps / Website",
    dmvp: "Build MVP",
    d5completeAI: "Complete roadshow materials with AI",
    d6rehearsal: "Rehearsal & Roadshow Prep",
    d1open: "Camp Check-in & Opening Ceremony",
    d1openMeta: "15:00 Arrival · 16:00 Ceremony",
    d2empathy: "Empathy — Discovering Pain Points & Brainstorming",
    d2share: "Review & Recap",
    d3market: "Market and Users",
    d3discuss: "Discuss PRD / GDD, Lock Group Solutions",
    d4planlo: "Business Plan · Storytelling",
    d4planhi: "Business Plan · Three Models",
    d5speak: "Pitch Class (Joint) → Team Mentoring",
    d6show: "Project Roadshow",
    d1ice: "Icebreakers · Grouping · Team Identity",
    d2blueprint: "Start Designing Your Business Blueprint",
    d4pitchscript: "Roadshow Pitch Script Prep",
    d5refinement: "Continue Refining MVP & Pitch",
    d6departure: "Camp Closing & Departure",
    recess: "Recess"
  }
};

export function TimetablePage() {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const { language } = useLanguage();
  const DETAILS = language === "zh" ? DETAILS_ZH : DETAILS_EN;
  const t = content[language];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedKey(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (selectedKey) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedKey]);

  return (
    <div className="timetable-container min-h-screen bg-[#0E0E0C] text-[#EDE7D7] antialiased">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Noto+Sans+SC:wght@300;400;500;700&family=Noto+Serif+SC:wght@600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .timetable-container {
          --hermes: #F5740A;
          --hermes-soft: rgba(245, 116, 10, 0.16);
          --hermes-line: rgba(245, 116, 10, 0.55);
          --bg: #0E0E0C;
          --panel: #17160F;
          --panel2: #1E1D15;
          --ink: #EDE7D7;
          --muted: #8C887A;
          --line: #33312A;
          --tech: #54C7A6;
          --tech-bg: rgba(84, 199, 166, 0.12);
          --team: #E8C24A;
          --team-bg: rgba(232, 194, 74, 0.12);
          --share: #6FA8DC;
          --share-bg: rgba(111, 168, 220, 0.12);
          --present: #C49BE6;
          --present-bg: rgba(196, 155, 230, 0.12);
          --cream: #D9CBA8;
          --cream-bg: rgba(217, 203, 168, 0.10);
          --lo: #7FB2E0;
          --hi: #E0B84A;
        }

        .wrap {
          max-width: 1320px;
          margin: 0 auto;
          padding: 32px 22px 80px;
        }

        /* ---------- header ---------- */
        .top {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
          margin-bottom: 48px;
          max-width: 896px;
          margin-left: auto;
          margin-right: auto;
          border-bottom: 1px solid var(--line);
          padding-bottom: 24px;
        }
        .kicker {
          font-family: "JetBrains Mono", monospace;
          color: var(--hermes);
          font-size: 13px;
          letter-spacing: 5px;
          text-transform: uppercase;
          font-weight: 600;
        }
        h1 {
          font-family: "Noto Serif SC", serif;
          font-weight: 700;
          margin: 10px 0 0;
          font-size: 34px;
          line-height: 1.25;
        }
        @media (min-width: 768px) {
          h1 {
            font-size: 44px;
          }
        }
        h1 .em {
          color: var(--hermes);
        }
        .sub {
          color: var(--muted);
          font-size: 14px;
          margin-top: 8px;
          max-width: 720px;
          line-height: 1.7;
          margin-left: auto;
          margin-right: auto;
        }
        .sub b {
          color: var(--ink);
        }
        .hint {
          font-family: "JetBrains Mono", monospace;
          font-size: 12px;
          color: var(--muted);
          border: 1px solid var(--line);
          border-radius: 6px;
          padding: 8px 12px;
          white-space: nowrap;
        }
        .hint b {
          color: var(--hermes);
        }

        /* ---------- legend ---------- */
        .legend {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 18px;
          margin: 22px 0 32px;
          align-items: center;
          justify-content: center;
        }
        .lg {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 12.5px;
          color: var(--muted);
          font-family: "JetBrains Mono", monospace;
          letter-spacing: .5px;
        }
        .dot {
          width: 11px;
          height: 11px;
          border-radius: 2px;
          display: inline-block;
        }

        /* ---------- grid ---------- */
        .scroll {
          overflow-x: auto;
          padding-bottom: 8px;
        }
        .grid {
          display: grid;
          grid-template-columns: 54px repeat(6, minmax(238px, 1fr));
          column-gap: 8px;
          row-gap: 4px;
          min-width: 1520px;
        }
        .corner {}
        .dhead {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 7px;
          padding: 12px 12px 11px;
        }
        .dhead .dn {
          font-family: "JetBrains Mono", monospace;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 2px;
          color: var(--ink);
        }
        .dhead .dt {
          font-size: 11.5px;
          color: var(--muted);
          margin-top: 3px;
          letter-spacing: .3px;
        }
        .dhead.now {
          border-color: var(--hermes-line);
        }
        .dhead.now .dn {
          color: var(--hermes);
        }

        .rlabel {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "JetBrains Mono", monospace;
          font-size: 11px;
          letter-spacing: 3px;
          color: var(--muted);
          text-transform: uppercase;
        }

        .cell {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .cell .blk {
          flex: 0 0 auto;
        }
        .cell .blk.grow {
          flex: 1 1 auto;
        }
        /* 让每格内容填满本行高度，消除空白 */
        .cell > .blk:only-child {
          flex: 1 1 auto;
        }
        .cell > .pair:last-child, .cell > .pair.grow {
          flex: 1 1 auto;
        }
        .cell .blk.grow, .cell > .blk:only-child {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .blk {
          border: 1px solid var(--line);
          border-left-width: 3px;
          border-radius: 7px;
          background: var(--panel);
          padding: 11px 12px;
          cursor: default;
          position: relative;
          transition: transform .12s ease, border-color .12s ease, background .12s ease;
        }
        .blk .tag {
          font-family: "JetBrains Mono", monospace;
          font-size: 9.5px;
          letter-spacing: 2px;
          text-transform: uppercase;
          display: block;
          margin-bottom: 6px;
        }
        .blk .ttl {
          font-size: 13px;
          line-height: 1.5;
          font-weight: 500;
          color: var(--ink);
        }
        .blk .meta {
          font-size: 11px;
          color: var(--muted);
          margin-top: 6px;
          line-height: 1.5;
        }

        .blk.click {
          cursor: pointer;
        }
        .blk.click:hover {
          transform: translateY(-2px);
          z-index: 2;
        }
        .blk.click .arrow {
          position: absolute;
          top: 10px;
          right: 11px;
          color: var(--hermes);
          font-size: 14px;
          opacity: 0;
          transition: opacity .12s ease;
        }
        .blk.click:hover .arrow {
          opacity: 1;
        }
        .blk.star {
          background: var(--hermes-soft);
          border-color: var(--hermes-line);
        }
        .blk.star .tag {
          color: var(--hermes);
        }
        .blk.star:hover {
          background: rgba(245,116,10,.24);
        }
        .blk.star .arrow {
          opacity: .55;
        }

        /* ---------- 分班：并排两个框 ---------- */
        .splabel {
          font-family: "JetBrains Mono", monospace;
          font-size: 9px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--muted);
          margin: 1px 0 1px 1px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .splabel .em {
          color: var(--hermes);
        }
        .pair {
          display: flex;
          gap: 6px;
          align-items: stretch;
        }
        .pcol {
          flex: 1 1 0;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .pcol>.subbox {
          flex: 1 1 0;
        }
        .subbox {
          flex: 1 1 0;
          min-width: 0;
          border: 1px solid var(--line);
          border-left-width: 3px;
          border-radius: 7px;
          background: var(--panel);
          padding: 9px 10px;
          position: relative;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition: transform .12s ease, border-color .12s ease, background .12s ease;
        }
        .subbox:hover {
          transform: translateY(-2px);
          z-index: 2;
        }
        .subbox .age {
          align-self: flex-start;
        }
        /* 按课程类型配色：创业思维/商业=橙，AI 课=青 */
        .subbox.cat-biz {
          border-left-color: var(--hermes);
          background: var(--hermes-soft);
        }
        .subbox.cat-ai {
          border-left-color: var(--tech);
          background: var(--tech-bg);
        }
        .subbox .arrow {
          position: absolute;
          top: 8px;
          right: 9px;
          color: var(--hermes);
          font-size: 13px;
          opacity: 0;
          transition: opacity .12s ease;
        }
        .subbox:hover .arrow {
          opacity: .7;
        }
        .subbox .bt {
          font-size: 12.5px;
          line-height: 1.5;
          color: var(--ink);
          font-weight: 500;
          margin-top: 5px;
        }
        .subbox .bm {
          font-size: 10.5px;
          color: var(--muted);
          margin-top: 5px;
          line-height: 1.5;
        }
        .age {
          font-family: "JetBrains Mono", monospace;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: .5px;
          padding: 2px 6px;
          border-radius: 4px;
          display: inline-block;
        }
        .age.lo {
          background: rgba(127,178,224,.18);
          color: var(--lo);
        }
        .age.hi {
          background: rgba(224,184,74,.18);
          color: var(--hi);
        }
        .chip-ai {
          display: inline-block;
          font-family: "JetBrains Mono", monospace;
          font-size: 9px;
          background: var(--hermes-soft);
          color: var(--hermes);
          border: 1px solid var(--hermes-line);
          border-radius: 4px;
          padding: 1px 5px;
          letter-spacing: 0.5px;
        }
        .ai-here {
          display: inline-block;
          font-family: "JetBrains Mono", monospace;
          font-size: 8.5px;
          background: var(--hermes-soft);
          color: var(--hermes);
          border: 1px solid var(--hermes-line);
          border-radius: 4px;
          padding: 0 4px;
          margin-left: 5px;
          letter-spacing: 0.3px;
          vertical-align: 1px;
        }
        .tbd {
          display: inline-block;
          font-family: "JetBrains Mono", monospace;
          font-size: 8.5px;
          background: rgba(140, 136, 122, 0.18);
          color: var(--muted);
          border: 1px dashed var(--line);
          border-radius: 4px;
          padding: 0 4px;
          margin-left: 5px;
          letter-spacing: 0.3px;
          vertical-align: 1px;
        }

        /* category tints */
        .c-biz {
          border-left-color: var(--hermes);
        }
        .c-tech {
          border-left-color: var(--tech);
          background: var(--tech-bg);
        }
        .c-tech .tag, .c-tech .stag {
          color: var(--tech);
        }
        .c-team {
          border-left-color: var(--team);
          background: var(--team-bg);
        }
        .c-team .tag {
          color: var(--team);
        }
        .c-share {
          border-left-color: var(--share);
          background: var(--share-bg);
        }
        .c-share .tag {
          color: var(--share);
        }
        /* 分享与复盘：时间短，做矮一点 */
        .blk.c-share {
          padding: 5px 11px;
        }
        .blk.c-share .tag {
          margin-bottom: 2px;
        }
        .blk.c-share .ttl {
          font-size: 12px;
        }
        .c-present {
          border-left-color: var(--present);
          background: var(--present-bg);
        }
        .c-present .tag, .c-present .stag {
          color: var(--present);
        }
        .c-cream {
          border-left-color: var(--cream);
          background: var(--cream-bg);
        }
        .c-cream .tag {
          color: var(--cream);
        }
        .c-show {
          background: var(--hermes);
          border-color: var(--hermes);
          border-left-color: #fff;
        }
        .c-show .tag {
          color: rgba(255,255,255,.85);
        }
        .c-show .ttl {
          color: #1a1208;
          font-weight: 700;
        }
        .c-show .arrow {
          color: #1a1208;
        }

        .empty {
          border: 1px dashed var(--line);
          border-radius: 7px;
          min-height: 38px;
          opacity: .55;
          flex: 1 1 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 10px;
          font-size: 11px;
          color: var(--muted);
          letter-spacing: 1px;
        }

        /* 横贯长条：午餐 / 晚餐 / 家庭沟通 */
        .bar {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 7px;
          font-family: "JetBrains Mono", monospace;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .bar.meal {
          background: var(--cream-bg);
          border: 1px solid var(--line);
          border-left: 3px solid var(--cream);
          color: var(--cream);
          font-size: 12px;
          padding: 11px;
        }
        .bar.thin {
          background: var(--panel2);
          border: 1px dashed var(--line);
          color: var(--muted);
          font-size: 10px;
          padding: 5px;
          letter-spacing: 2.5px;
        }

        /* ---------- modal ---------- */
        .quote {
          border-left: 3px solid var(--hermes);
          background: var(--hermes-soft);
          padding: 12px 16px;
          border-radius: 0 6px 6px 0;
          font-size: 14px;
          line-height: 1.8;
          margin: 14px 0;
          color: #F0E6D2;
        }
        .cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin: 12px 0;
        }
        .card {
          border: 1px solid var(--line);
          border-radius: 8px;
          padding: 14px 16px;
          background: #1B1A12;
        }
        .card .h {
          font-family: "JetBrains Mono", monospace;
          font-size: 11px;
          letter-spacing: 1.5px;
          color: var(--hermes);
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .card p, .card li {
          font-size: 13px;
          line-height: 1.7;
          color: #D8D2C2;
        }
        .tools {
          font-family: "JetBrains Mono", monospace;
          font-size: 12px;
          color: var(--muted);
          border-top: 1px solid var(--line);
          margin-top: 22px;
          padding-top: 14px;
          line-height: 1.8;
        }
        .tools b {
          color: var(--tech);
        }
        /* ---------- modal ---------- */
        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(8,8,6,.78);
          backdrop-filter: blur(3px);
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 40px 18px;
          z-index: 50;
          overflow-y: auto;
        }
        .modal {
          background: #15140E;
          border: 1px solid var(--line);
          border-top: 3px solid var(--hermes);
          border-radius: 10px;
          max-width: 760px;
          width: 100%;
          padding: 30px 34px 38px;
          box-shadow: 0 30px 80px rgba(0,0,0,.6);
          animation: rise .18s ease;
          position: relative;
        }
        @keyframes rise {
          from {
            transform: translateY(14px);
            opacity: 0;
          }
          to {
            transform: none;
            opacity: 1;
          }
        }
        .m-tag {
          font-family: "JetBrains Mono", monospace;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--hermes);
        }
        .m-bar {
          width: 46px;
          height: 3px;
          background: var(--hermes);
          border-radius: 2px;
          margin: 12px 0 14px;
        }
        .modal h2 {
          font-family: "Noto Serif SC", serif;
          font-weight: 700;
          font-size: 25px;
          margin: 0 0 4px;
          line-height: 1.3;
          color: var(--ink);
        }
        .m-when {
          font-family: "JetBrains Mono", monospace;
          font-size: 12px;
          color: var(--muted);
          margin-bottom: 18px;
        }
        .modal h3 {
          font-family: "Noto Serif SC", serif;
          font-size: 17px;
          margin: 22px 0 8px;
          color: var(--hermes);
        }
        .modal p {
          font-size: 14.5px;
          line-height: 1.95;
          color: var(--ink);
          margin: 8px 0;
        }
        .modal ul {
          margin: 8px 0;
          padding-left: 20px;
        }
        .modal li {
          font-size: 14px;
          line-height: 1.85;
          margin: 5px 0;
          color: #D8D2C2;
        }
        .modal b {
          color: #fff;
        }
        .close {
          position: sticky;
          top: 0;
          float: right;
          background: none;
          border: 1px solid var(--line);
          color: var(--muted);
          width: 32px;
          height: 32px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 16px;
          line-height: 1;
          margin: -6px -10px 0 0;
        }
        .close:hover {
          border-color: var(--hermes);
          color: var(--hermes);
        }
        @media(max-width:560px) {
          .cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <Header variant="dark" />
      <main className="wrap">
        <div className="top">
          <div className="kicker">{t.kicker}</div>
          <h1>
            {t.title}
            <span className="em">{t.titleHighlight}</span>
          </h1>
          <div className="sub">
            {language === "zh" ? (
              <>
                6 天，从一个想法到一件能上台路演的真实作品。
                <b style={{ color: "var(--tech)" }}>青色</b>=AI 课，
                <b style={{ color: "var(--hermes)" }}>橙色</b>=创业思维 / 商业课；点击任意板块查看
                <b>课程内容与目标</b>。
              </>
            ) : (
              <>
                6 days, from an idea to a real project pitch on stage.{" "}
                <b style={{ color: "var(--tech)" }}>Cyan</b>=AI class,{" "}
                <b style={{ color: "var(--hermes)" }}>Orange</b>=Founder Mindset / Business class; click any block to view{" "}
                <b>course details and goals</b>.
              </>
            )}
          </div>
          <div className="hint" dangerouslySetInnerHTML={{ __html: t.clickHint }} />
        </div>

        <div className="legend">
          <span className="lg">
            <span className="dot" style={{ background: "var(--hermes)" }}></span>
            {t.legendBiz}
          </span>
          <span className="lg">
            <span className="dot" style={{ background: "var(--tech)" }}></span>
            {t.legendTech}
          </span>
          <span className="lg">
            <span className="dot" style={{ background: "var(--team)" }}></span>
            {t.legendTeam}
          </span>
          <span className="lg">
            <span className="dot" style={{ background: "var(--share)" }}></span>
            {t.legendShare}
          </span>
          <span className="lg">
            <span className="dot" style={{ background: "var(--present)" }}></span>
            {t.legendPresent}
          </span>
          <span className="lg">
            <span className="dot" style={{ background: "var(--cream)" }}></span>
            {t.legendCream}
          </span>
          <span className="lg">
            <span className="age lo" style={{ margin: 0 }}>
              {t.legendLo}
            </span>
            {t.legendLoRange}
          </span>
          <span className="lg">
            <span className="age hi" style={{ margin: 0 }}>
              {t.legendHi}
            </span>
            {t.legendHiRange}
          </span>
        </div>

        <div className="scroll">
          <div className="grid">
            {/* header row */}
            <div className="corner"></div>
            <div className="dhead"><div className="dn">{t.colDay1}</div><div className="dt">{t.subDay1}</div></div>
            <div className="dhead"><div className="dn">{t.colDay2}</div><div className="dt">{t.subDay2}</div></div>
            <div className="dhead"><div className="dn">{t.colDay3}</div><div className="dt">{t.subDay3}</div></div>
            <div className="dhead"><div className="dn">{t.colDay4}</div><div className="dt">{t.subDay4}</div></div>
            <div className="dhead"><div className="dn">{t.colDay5}</div><div className="dt">{t.subDay5}</div></div>
            <div className="dhead"><div className="dn">{t.colDay6}</div><div className="dt">{t.subDay6}</div></div>

            {/* 晨间 row */}
            <div className="rlabel">{t.rowMorning}</div>
            <div className="cell"><div className="empty"></div></div>
            <div className="cell"><div className="blk c-cream"><span className="tag">Morning</span><div className="ttl">{t.warmup}</div></div></div>
            <div className="cell"><div className="blk c-cream"><span className="tag">Morning</span><div className="ttl">{t.warmup}</div></div></div>
            <div className="cell"><div className="blk click star c-biz" onClick={() => setSelectedKey("d4_survey")}><span className="arrow">›</span><span className="tag">{t.legendBiz}</span><div className="ttl">{t.surveyTitle}</div><div className="meta">{t.surveyMeta}</div></div></div>
            <div className="cell">
              <div className="pair">
                <div className="subbox lo cat-ai" onClick={() => setSelectedKey("d5_lo")}><span className="arrow">›</span><span className="age lo">{t.legendLo}</span><div className="bt">{t.loAIPrep}</div></div>
                <div className="subbox hi cat-ai" onClick={() => setSelectedKey("d5_hi")}><span className="arrow">›</span><span className="age hi">{t.legendHi}</span><div className="bt">{t.hiAIPrep}</div></div>
              </div>
            </div>
            <div className="cell"><div className="blk c-cream"><span className="tag">Morning</span><div className="ttl">{t.warmup}</div></div></div>

            {/* 上午 row */}
            <div className="rlabel">{t.rowMorningSession}</div>
            <div className="cell"><div className="empty"></div></div>
            {/* D2 am */}
            <div className="cell">
              <div className="blk click c-biz" onClick={() => setSelectedKey("d2_jiexi")}><span className="arrow">›</span><span className="tag">{t.legendBiz}</span><div className="ttl">{t.d2jiexi}</div></div>
              <div className="pair grow">
                <div className="subbox lo cat-ai" onClick={() => setSelectedKey("d2_lo_ai")}><span className="arrow">›</span><span className="age lo">{t.legendLo}</span><div className="bt">{t.d2loai}</div></div>
                <div className="subbox hi cat-biz" onClick={() => setSelectedKey("d2_hi_biz2")}><span className="arrow">›</span><span className="age hi">{t.legendHi}</span><div className="bt">{t.d2hibiz2}</div></div>
              </div>
            </div>
            {/* D3 am */}
            <div className="cell">
              <div className="pair">
                <div className="subbox lo cat-ai" onClick={() => setSelectedKey("d3_vibe_games")}><span className="arrow">›</span><span className="age lo">{t.legendLo}</span><div className="bt">{t.d3vibegames}</div></div>
                <div className="subbox hi cat-ai" onClick={() => setSelectedKey("d3_vibe_games")}><span className="arrow">›</span><span className="age hi">{t.legendHi}</span><div className="bt">{t.d3vibegames}</div></div>
              </div>
            </div>
            {/* D4 am */}
            <div className="cell">
              <div className="blk click c-team" onClick={() => setSelectedKey("d_mvp")}><span className="arrow">›</span><span className="tag">{t.legendTeam}</span><div className="ttl">{t.dmvp}</div></div>
            </div>
            {/* D5 am */}
            <div className="cell">
              <div className="blk c-team"><span className="tag">{t.legendTeam}</span><div className="ttl">{t.d5completeAI}</div></div>
              <div className="blk click c-team grow" onClick={() => setSelectedKey("d_mvp")}><span className="arrow">›</span><span className="tag">{t.legendTeam}</span><div className="ttl">{t.dmvp}</div></div>
            </div>
            {/* D6 am */}
            <div className="cell"><div className="blk click c-present" onClick={() => setSelectedKey("d6rehearsal")}><span className="arrow">›</span><span className="tag">{t.legendPresent}</span><div className="ttl">{t.d6rehearsal}</div></div></div>

            {/* 中午 bar (Day 2-6) */}
            <div className="rlabel">{t.rowNoonSession}</div>
            <div></div>
            <div className="bar meal" style={{gridColumn:'span 5'}}>{t.lunchRecess}</div>

            {/* 下午 row */}
            <div className="rlabel">{t.rowAfternoonSession}</div>
            {/* D1 pm */}
            <div className="cell"><div className="blk click c-biz" onClick={() => setSelectedKey("d1open")}><span className="arrow">›</span><span className="tag">Opening</span><div className="ttl">{t.d1open}</div><div className="meta">{t.d1openMeta}</div></div></div>
            {/* D2 pm */}
            <div className="cell">
              <div className="pair">
                <div className="subbox lo cat-biz" onClick={() => setSelectedKey("d2pm_lo")}><span className="arrow">›</span><span className="age lo">{t.legendLo}</span><div className="bt">{t.d2hibiz2}</div></div>
                <div className="subbox hi cat-ai" onClick={() => setSelectedKey("d2pm_hi")}><span className="arrow">›</span><span className="age hi">{t.legendHi}</span><div className="bt">{t.d2loai}</div></div>
              </div>
              <div className="blk click star c-biz grow" onClick={() => setSelectedKey("d2empathy")}><span className="arrow">›</span><span className="tag">{t.legendBiz}</span><div className="ttl">{t.d2empathy}</div></div>
              <div className="blk c-share"><span className="tag">{t.legendShare}</span><div className="ttl">{t.legendShare}</div></div>
            </div>
            {/* D3 pm */}
            <div className="cell">
              <div className="pair">
                <div className="subbox lo cat-biz" onClick={() => setSelectedKey("d3_market")}><span className="arrow">›</span><span className="age lo">{t.legendLo}</span><div className="bt">{t.d3market}</div></div>
                <div className="subbox hi cat-biz" onClick={() => setSelectedKey("d3_market")}><span className="arrow">›</span><span className="age hi">{t.legendHi}</span><div className="bt">{t.d3market}</div></div>
              </div>
              <div className="pair grow">
                <div className="subbox lo cat-ai" onClick={() => setSelectedKey("d3_vibe_web")}><span className="arrow">›</span><span className="age lo">{t.legendLo}</span><div className="bt">{t.d3vibeweb}</div></div>
                <div className="subbox hi cat-ai" onClick={() => setSelectedKey("d3_vibe_web")}><span className="arrow">›</span><span className="age hi">{t.legendHi}</span><div className="bt">{t.d3vibeweb}</div></div>
              </div>
            </div>
            {/* D4 pm */}
            <div className="cell">
              <div className="pair">
                <div className="subbox lo cat-biz" onClick={() => setSelectedKey("d4plan_lo")}><span className="arrow">›</span><span className="age lo">{t.legendLo}</span><div className="bt">{t.d4planlo}</div></div>
                <div className="subbox hi cat-biz" onClick={() => setSelectedKey("d4plan_hi")}><span className="arrow">›</span><span className="age hi">{t.legendHi}</span><div className="bt">{t.d4planhi}</div></div>
              </div>
              <div className="blk click c-team grow" onClick={() => setSelectedKey("d_mvp")}><span className="arrow">›</span><span className="tag">{t.legendTeam}</span><div className="ttl">{t.dmvp}</div></div>
              <div className="blk c-share"><span className="tag">{t.legendShare}</span><div className="ttl">{t.legendShare}</div></div>
            </div>
            {/* D5 pm */}
            <div className="cell">
              <div className="blk click star c-present grow" onClick={() => setSelectedKey("d5speak")}><span className="arrow">›</span><span className="tag">{t.legendPresent}</span><div className="ttl">{t.d5speak}</div></div>
              <div className="blk c-share"><span className="tag">{t.legendShare}</span><div className="ttl">{t.legendShare}</div></div>
            </div>
            {/* D6 pm */}
            <div className="cell"><div className="blk click c-show" onClick={() => setSelectedKey("d6show")}><span className="arrow">›</span><span className="tag">Showtime</span><div className="ttl">{t.d6show}</div></div></div>

            {/* 晚餐 bar (Day 1-5) */}
            <div className="rlabel">{t.rowDinnerSession}</div>
            <div className="bar meal" style={{gridColumn:'span 5'}}>{t.dinnerRecess}</div>
            <div></div>

            {/* 晚间 row */}
            <div className="rlabel">{t.rowEveningSession}</div>
            <div className="cell"><div className="blk click c-biz" onClick={() => setSelectedKey("d1ice")}><span className="arrow">›</span><span className="tag">{t.legendTeam}</span><div className="ttl">{t.d1ice}</div></div></div>
            <div className="cell"><div className="blk click c-team" onClick={() => setSelectedKey("d2_blueprint")}><span className="arrow">›</span><span className="tag">{t.legendTeam}</span><div className="ttl">{t.d2blueprint}</div></div></div>
            <div className="cell"><div className="blk c-team"><span className="tag">{t.legendTeam}</span><div className="ttl">{t.d3discuss}</div></div></div>
            <div className="cell"><div className="blk c-present"><span className="tag">{t.legendPresent}</span><div className="ttl">{t.d4pitchscript}</div></div></div>
            <div className="cell"><div className="blk c-team"><span className="tag">{t.legendTeam}</span><div className="ttl">{t.d5refinement}</div></div></div>
            <div className="cell"><div className="empty">{t.d6departure}</div></div>

            {/* 家庭沟通 bar (Day 1-5) */}
            <div className="rlabel"></div>
            <div className="bar thin" style={{gridColumn:'span 5'}}>{t.familyTime}</div>
            <div></div>
          </div>
        </div>
      </main>

      {/* Overlay Modal */}
      {selectedKey && DETAILS[selectedKey] && (
        <div
          className="overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedKey(null);
          }}
        >
          <div className="modal">
            <button
              type="button"
              className="close"
              onClick={() => setSelectedKey(null)}
            >
              ✕
            </button>
            <div className="m-tag">{DETAILS[selectedKey].tag}</div>
            <div className="m-bar"></div>
            <h2>{DETAILS[selectedKey].title}</h2>
            <div className="m-when">{DETAILS[selectedKey].when}</div>
            <div
              dangerouslySetInnerHTML={{ __html: DETAILS[selectedKey].html }}
            />
          </div>
        </div>
      )}

      <Footer variant="dark" />
    </div>
  );
}
