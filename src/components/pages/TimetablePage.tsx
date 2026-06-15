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
    tag: "AI Boost · 低龄",
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
    tag: "创业思维 · 高龄",
    when: "Day 2 · 上午",
    title: "商业素养课",
    html: `
      <p>通过一局「<b>商业侦探</b>」桌游，在玩中搞清楚一家 company 是怎么运转的：CEO、CFO、CTO、CMO 各自做什么，公司靠哪些关键指标判断好坏。</p>
      <div class="quote">课程目标：建立简单的商业"sense"，理解公司就像一台需要分工配合的"团队机器"。</div>
    `
  },
  d2pm_hi: {
    tag: "AI Boost · 高龄",
    when: "Day 2 · 下午",
    title: "What is AI? vibe coding 101",
    html: `
      <p>孩子将<b>初步认识 AI</b>：它大概是怎么工作的、如今能做到哪些事、怎样和 AI 有效对话，并以更具思辨的视角看待 AI 的能力与边界。</p>
      <div class="quote">课程目标：建立对 AI 的整体认识与判断力，学会"好好提问"，为动手用 AI 打基础。</div>
    `
  },
  d2pm_lo: {
    tag: "创业思维 · 低龄",
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
    tag: "AI Boost · 低龄",
    when: "Day 3 · 上午",
    title: "Vibe Coding · Games",
    html: `
      <p>会打游戏，不等于会做游戏。这节课从<b>分析经典游戏</b>入手，看看一个好游戏背后有哪些关键设计，并用 AI 工具动手做出自己的小游戏。</p>
      <div class="quote">课程目标：理解游戏设计的基本思路，并亲手做出一个能玩的小游戏。</div>
    `
  },
  d3_vibe_web: {
    tag: "AI Boost · 高龄",
    when: "Day 3 · 上午",
    title: "Vibe Coding · Web & Apps",
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
    tag: "创业思维 · 低龄",
    when: "Day 4 · 下午",
    title: "商业计划书 · 填故事",
    html: `
      <p>用<b>讲故事</b>的方式，把自己的小公司说清楚：卖什么、给谁、解决什么烦恼、怎么让别人知道……一句一个角度，轻松完成。</p>
      <div class="quote">课程目标：用孩子能懂的方式完成人生第一份"商业计划"，也是路演稿的雏形。</div>
    `
  },
  d4plan_hi: {
    tag: "创业思维 · 高龄",
    when: "Day 4 · 下午",
    title: "商业计划书 · 三模型",
    html: `
      <p>像专业人士一样，用 <b>SWOT、PEST、Porter</b> 三个"放大镜"从不同角度看清自己的生意，并在 AI 辅助下整合成一份完整的商业计划书。</p>
      <div class="quote">课程目标：学会用分析工具支撑决策，产出一份有说服力的商业计划书。</div>
    `
  },
  d5_lo: {
    tag: "路演准备 · 低龄",
    when: "Day 5 · 上午",
    title: "AI 工具 · 路演准备",
    html: `
      <p>用 AI 工具帮助<b>梳理路演结构</b>，甚至制作属于自己的"<b>产品广告</b>"，让项目更打动人。</p>
      <div class="quote">课程目标：把项目讲清楚、讲生动，准备好属于自己的路演稿的雏形。</div>
    `
  },
  d5_hi: {
    tag: "路演准备 · 高龄",
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
    tag: "AI Boost · Younger Cohort",
    when: "Day 2 · Morning",
    title: "What is AI? Vibe Coding 101",
    html: `
      <p>Children will <b>get to know AI</b>: how it works, what it can do today, and—most importantly—<b>how to converse with AI effectively</b>.</p>
      <div class="quote">Course Objective: Develop a general understanding of AI, learn how to ask "good questions," and build a foundation for hands-on AI creation.</div>
    `
  },
  d2_jiexi: {
    tag: "Founder Mindset",
    when: "Day 2 · Morning",
    title: "Topic Deconstruction · Founder Mindset",
    html: `
      <p>Through a series of real and engaging examples, children will discover three categories of things AI can do: make life more fun (<b>fun</b>), assist learning (<b>learning</b>), and make the world a better place (<b>good</b>).</p>
      <div class="quote">Course Objective: Expand their horizons, understand that "AI can be used to do many meaningful things," and identify their direction of interest.</div>
    `
  },
  d2_hi_biz2: {
    tag: "Founder Mindset · Older Cohort",
    when: "Day 2 · Morning",
    title: "Business Literacy",
    html: `
      <p>Through a round of the "<b>Business Detective</b>" board game, children will learn how a company operates in a play-based setting: what the CEO, CFO, CTO, and CMO do, and what key metrics determine success.</p>
      <div class="quote">Course Objective: Build basic business "sense" and understand that a company is like a "team machine" requiring division of labor and collaboration.</div>
    `
  },
  d2pm_hi: {
    tag: "AI Boost · Older Cohort",
    when: "Day 2 · Afternoon",
    title: "What is AI? Vibe Coding 101",
    html: `
      <p>Students will <b>develop an initial understanding of AI</b>: how it works, what it is capable of today, how to converse with AI effectively, and view AI's capabilities and boundaries through a critical lens.</p>
      <div class="quote">Course Objective: Establish a holistic understanding and judgment of AI, learn how to "ask good questions," and lay a solid foundation for hands-on AI usage.</div>
    `
  },
  d2pm_lo: {
    tag: "Founder Mindset · Younger Cohort",
    when: "Day 2 · Afternoon",
    title: "Business Literacy",
    html: `
      <p>Through a round of the "<b>Business Detective</b>" board game, children will learn how a company operates in a play-based setting: what the CEO, CFO, CTO, and CMO do, and what key metrics determine success.</p>
      <div class="quote">Course Objective: Build basic business "sense" and understand that a company is like a "team machine" requiring division of labor and collaboration.</div>
    `
  },
  d2empathy: {
    tag: "Founder Mindset",
    when: "Day 2 · Afternoon",
    title: "Empathy — Discovering Pain Points & Brainstorming",
    html: `
      <p>Great ideas come from observing life and identifying pain points. This session guides children to brainstorm together: <b>What "problems" exist in daily life? Which ones do you want to change the most?</b></p>
      <div class="quote">Course Objective: Foster observation skills and empathy, learn to "identify the problem first, then brainstorm ideas," and find a real starting point for their project.</div>
    `
  },
  d2_blueprint: {
    tag: "Teamwork",
    when: "Day 2 · Evening",
    title: "Start Designing Your Business Blueprint",
    html: `
      <p>Evening group time: Discuss and select the team's "venture theme" from the three main domains (AI for <b>fun</b> / <b>learning</b> / <b>good</b>).</p>
      <div class="quote">Course Objective: Complete the first step of transitioning from "what I like" to "what we will build," aligning the team's direction.</div>
    `
  },
  d6show: {
    tag: "Showtime",
    when: "Day 6 · Afternoon",
    title: "Project Roadshow",
    html: `
      <p><b>It's your showtime!</b> Six days of hard work culminate in this moment—each team will pitch their project on stage and demonstrate the product they built from scratch.</p>
      <div class="quote">Course Objective: Deliver a confident presentation on a real stage and take pride in their creation.</div>
    `
  },
  d_mvp: {
    tag: "Teamwork",
    when: "Day 4 / Day 5",
    title: "Build MVP",
    html: `
      <p>Teams begin building their own <b>MVP</b> (Minimum Viable Product)—leveraging AI tools to achieve a <b>0 to 1 breakthrough</b>.</p>
      <div class="quote">Course Objective: Turn ideas into a real, presentable, and well-explained product.</div>
    `
  },
  d3_vibe_games: {
    tag: "AI Boost · Younger Cohort",
    when: "Day 3 · Morning",
    title: "Vibe Coding · Games",
    html: `
      <p>Knowing how to play games is not the same as knowing how to build them. This session starts by <b>analyzing classic games</b>, exploring key design principles, and using AI tools to build their own mini-games.</p>
      <div class="quote">Course Objective: Understand the fundamentals of game design and build a playable mini-game from scratch.</div>
    `
  },
  d3_vibe_web: {
    tag: "AI Boost · Older Cohort",
    when: "Day 3 · Morning",
    title: "Vibe Coding · Web & Apps",
    html: `
      <p>Building a website is not out of reach. In this session, we will explore <b>how classic websites are created</b> and use AI tools to build web pages or mini-apps for their projects.</p>
      <div class="quote">Course Objective: Understand what makes a website popular and build the first web page of their project.</div>
    `
  },
  d3_market: {
    tag: "Founder Mindset",
    when: "Day 3 · Afternoon",
    title: "Market & Users",
    html: `
      <p>Understand markets and users in one sentence: <b>Market = a group of people with the same need; User = that specific individual.</b> Students will think about "who my product is for" and use AI to create target user personas.</p>
      <div class="quote">Course Objective: Cultivate a "build for real users" mindset and clarify the target audience for their projects.</div>
    `
  },
  d4_survey: {
    tag: "Founder Mindset",
    when: "Day 4 · Morning & Lunch Break",
    title: "Market Survey",
    html: `
      <p><b>Ask before you build, don't guess.</b> Each team will design their own survey and interview other campers during lunch break to gather real-world feedback.</p>
      <div class="quote">Course Objective: Learn to listen to real users through research, accumulating first-hand insights for the product and pitch.</div>
    `
  },
  d4plan_lo: {
    tag: "Founder Mindset · Younger Cohort",
    when: "Day 4 · Afternoon",
    title: "Business Plan · Storytelling",
    html: `
      <p>Explain their mini-company through <b>storytelling</b>: what they sell, to whom, what problems they solve, and how they get noticed... wrapping it up step by step.</p>
      <div class="quote">Course Objective: Complete their first-ever "business plan" in a kid-friendly way, laying the groundwork for their pitch script.</div>
    `
  },
  d4plan_hi: {
    tag: "Founder Mindset · Older Cohort",
    when: "Day 4 · Afternoon",
    title: "Business Plan · Three Models",
    html: `
      <p>Like a professional, use <b>SWOT, PEST, and Porter's Five Forces</b> as analytical lenses to evaluate their venture, integrating them into a comprehensive business plan with AI assistance.</p>
      <div class="quote">Course Objective: Learn to back decisions with analytical tools, producing a persuasive business plan.</div>
    `
  },
  d5_lo: {
    tag: "Roadshow Prep · Younger Cohort",
    when: "Day 5 · Morning",
    title: "AI Tools · Roadshow Prep",
    html: `
      <p>Use AI tools to help <b>structure their roadshow pitches</b>, and even create their own "<b>product commercials</b>" to make their project more compelling.</p>
      <div class="quote">Course Objective: Present their projects clearly and vividly, preparing their roadshow materials.</div>
    `
  },
  d5_hi: {
    tag: "Roadshow Prep · Older Cohort",
    when: "Day 5 · Morning",
    title: "AI Tools · Roadshow Prep",
    html: `
      <p>Use AI tools to map out roadshow logic, and create professional materials like <b>pitch slides and product commercials</b> to make presentations persuasive.</p>
      <div class="quote">Course Objective: Efficiently output professional roadshow materials that clearly articulate their project's value.</div>
    `
  },
  d5speak: {
    tag: "Roadshow Prep",
    when: "Day 5 · Afternoon",
    title: "Pitch Presentation Class",
    html: `
      <p>A professional public speaking class: learn presentation techniques like hooks, body language, vocal modulation, and stage presence, followed by group-specific individual coaching sessions.</p>
      <div class="quote">Course Objective: Overcome stage fright, and pitch their project confidently and clearly to others.</div>
    `
  },
  d6rehearsal: {
    tag: "Roadshow Prep",
    when: "Day 6 · Morning",
    title: "Rehearsal & Roadshow Prep",
    html: `
      <p>Dress rehearsal before the official roadshow: walk through the entire flow, test equipment, and practice Q&As for judges' potential questions to ensure a smooth afternoon presentation.</p>
      <div class="quote">Course Objective: Make sure every child is fully prepared and steps onto the stage with confidence.</div>
    `
  },
  d1open: {
    tag: "Opening",
    when: "Day 1 · 15:00 Check-in / 16:00 Ceremony",
    title: "Camp Check-in & Opening Ceremony",
    html: `
      <p>15:00 Camp arrival and check-in; around 16:00 Opening Ceremony: opening magic show, overview of the 6-day goals, and co-creating camp rules together with the kids.</p>
      <div class="quote">Course Objective: Kick off the 6-day maker journey, making children the masters of the camp from the very first moment.</div>
    `
  },
  d1ice: {
    tag: "Teamwork",
    when: "Day 1 · Evening",
    title: "Icebreaker Games · Grouping · Team Identity Triad",
    html: `
      <p>Evening icebreakers: name rotation game, "Guess the AI", and Friend Bingo. Followed by team division and co-creating team names, logos, and team songs.</p>
      <div class="quote">Course Objective: Break the ice quickly, meet new friends, and establish the teams that will collaborate for the rest of the camp.</div>
    `
  }
};

const content = {
  zh: {
    title: "未知边界 · 2026 暑期创客松 ",
    titleHighlight: "课程表",
    subtitle: "6 天，从一个想法到一件能上台路演的真实作品。青色=AI 课，橙色=创业思维 / 商业课；点击任意板块查看课程内容与目标。",
    colDay1: "DAY 1",
    colDay2: "DAY 2",
    colDay3: "DAY 3",
    colDay4: "DAY 4",
    colDay5: "DAY 5",
    colDay6: "DAY 6",
    subDay1: "开营 · 破冰",
    subDay2: "创业思维 × 初识 AI",
    subDay3: "市场用户 × Vibe Coding",
    subDay4: "市场调研 · 计划书",
    subDay5: "路演表达",
    subDay6: "路演日",
    rowMorning: "晨间",
    rowMorningSession: "上午",
    rowNoonSession: "中午",
    rowAfternoonSession: "下午",
    rowDinnerSession: "晚餐",
    rowEveningSession: "晚间",
    legendBiz: "创业思维",
    legendTech: "AI Boost",
    legendTeam: "Teamwork",
    legendShare: "分享与复盘",
    legendPresent: "路演准备 / Showtime",
    legendCream: "Warm up",
    legendLo: "低龄",
    legendHi: "高龄",
    legendLoRange: "<10 岁",
    legendHiRange: "10 岁+",
    clickHint: "点击板块查看 课程详情 →",
    kicker: "BoundaryUnknown · Summer Maker-thon 2026",
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
    d3vibeweb: "Vibe Coding · Web & Apps",
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
    d6departure: "结营 · 离营"
  },
  en: {
    title: "Boundary Unknown · 2026 Summer Maker-thon ",
    titleHighlight: "Timetable",
    subtitle: "6 days, from an idea to a real product ready for a stage pitch. Cyan = AI class, Orange = Entrepreneurial mindset / Business class. Click on any block to view course details and objectives.",
    colDay1: "DAY 1",
    colDay2: "DAY 2",
    colDay3: "DAY 3",
    colDay4: "DAY 4",
    colDay5: "DAY 5",
    colDay6: "DAY 6",
    subDay1: "Onboarding & Icebreaking",
    subDay2: "Founder Mindset × Intro to AI",
    subDay3: "Market & User × Vibe Coding",
    subDay4: "Market Research & Business Plan",
    subDay5: "Roadshow Pitching",
    subDay6: "Demo Day",
    rowMorning: "Morning",
    rowMorningSession: "AM",
    rowNoonSession: "Noon",
    rowAfternoonSession: "PM",
    rowDinnerSession: "Dinner",
    rowEveningSession: "Night",
    legendBiz: "Founder Mindset",
    legendTech: "AI Boost",
    legendTeam: "Teamwork",
    legendShare: "Review & Recap",
    legendPresent: "Roadshow Prep / Showtime",
    legendCream: "Warm up",
    legendLo: "Younger",
    legendHi: "Older",
    legendLoRange: "< 10 years old",
    legendHiRange: "10 years+",
    clickHint: "Click block to view Course Details →",
    kicker: "BoundaryUnknown · Summer Maker-thon 2026",
    lunchRecess: "Lunch & Recess",
    dinnerRecess: "Dinner & Recess",
    familyTime: "Family Time",
    warmup: "Warm up",
    surveyTitle: "Market Survey",
    surveyMeta: "Design questionnaire → survey other kids during lunch",
    loAIPrep: "AI Tools · Roadshow Prep",
    hiAIPrep: "AI Tools · Roadshow Prep",
    d2jiexi: "Topic Deconstruction · Founder Mindset",
    d2loai: "What is AI? Vibe Coding 101",
    d2hibiz2: "Business Literacy",
    d3vibegames: "Vibe Coding · Games",
    d3vibeweb: "Vibe Coding · Web & Apps",
    dmvp: "Build MVP",
    d5completeAI: "Complete Roadshow Materials with AI",
    d6rehearsal: "Roadshow Prep",
    d1open: "Camp Check-in & Opening Ceremony",
    d1openMeta: "15:00 Check-in · 16:00 Ceremony",
    d2empathy: "Empathy — Discovering Pain Points & Brainstorming",
    d2share: "Review & Recap",
    d3market: "Market & Users",
    d3discuss: "Discuss PRD / GDD, Lock Group Solutions",
    d4planlo: "Business Plan · Storytelling",
    d4planhi: "Business Plan · Three Models",
    d5speak: "Pitch Class (Combined) → Group Mentoring",
    d6show: "Project Roadshow",
    d1ice: "Icebreaker Games · Grouping · Team Identity Triad",
    d2blueprint: "Start Designing Your Business Blueprint",
    d4pitchscript: "Roadshow Pitch Script Preparation",
    d5refinement: "Continue Refining MVP and Pitch",
    d6departure: "Camp Closing & Departure"
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
    <>
      <style>{`
        .timetable-grid {
          display: grid;
          grid-template-columns: 54px repeat(6, minmax(238px, 1fr));
          column-gap: 8px;
          row-gap: 6px;
          min-width: 1520px;
        }
        .rlabel {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 3px;
          color: #8C887A;
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
          border: 1px solid #e6e1d9;
          border-left-width: 3px;
          border-radius: 8px;
          background: #ffffff;
          padding: 11px 12px;
          cursor: default;
          position: relative;
          transition: transform .12s ease, border-color .12s ease, background .12s ease;
        }
        .blk.click {
          cursor: pointer;
        }
        .blk.click:hover {
          transform: translateY(-2px);
          border-color: #D06A4C;
          box-shadow: 0 4px 12px rgba(0,0,0,0.04);
          z-index: 2;
        }
        .blk .tag {
          font-family: var(--font-mono);
          font-size: 9.5px;
          letter-spacing: 2px;
          text-transform: uppercase;
          display: block;
          margin-bottom: 6px;
        }
        .blk .ttl {
          font-size: 13px;
          line-height: 1.5;
          font-weight: 600;
          color: #141413;
        }
        .blk .meta {
          font-size: 11px;
          color: #5f5e5e;
          margin-top: 6px;
          line-height: 1.5;
        }
        .blk.click .arrow {
          position: absolute;
          top: 10px;
          right: 11px;
          color: #D06A4C;
          font-size: 14px;
          opacity: 0;
          transition: opacity .12s ease;
        }
        .blk.click:hover .arrow {
          opacity: 1;
        }
        .blk.star {
          background: rgba(208, 106, 76, 0.03);
          border-color: rgba(208, 106, 76, 0.3);
        }
        .blk.star .tag {
          color: #D06A4C;
        }
        .blk.star:hover {
          background: rgba(208, 106, 76, 0.08);
          border-color: #D06A4C;
        }
        .blk.star .arrow {
          opacity: 0.55;
        }
        .c-biz {
          border-left-color: #D06A4C;
        }
        .c-tech {
          border-left-color: #3CA685;
          background: rgba(60, 166, 133, 0.04);
        }
        .c-tech .tag {
          color: #3CA685;
        }
        .c-tech:hover {
          background: rgba(60, 166, 133, 0.08);
        }
        .c-team {
          border-left-color: #D4A313;
          background: rgba(212, 163, 19, 0.04);
        }
        .c-team .tag {
          color: #D4A313;
        }
        .c-team:hover {
          background: rgba(212, 163, 19, 0.08);
        }
        .c-share {
          border-left-color: #4A89C8;
          background: rgba(74, 137, 200, 0.04);
        }
        .c-share .tag {
          color: #4A89C8;
        }
        .c-share:hover {
          background: rgba(74, 137, 200, 0.08);
        }
        .c-present {
          border-left-color: #9B70C8;
          background: rgba(155, 112, 200, 0.04);
        }
        .c-present .tag {
          color: #9B70C8;
        }
        .c-present:hover {
          background: rgba(155, 112, 200, 0.08);
        }
        .c-cream {
          border-left-color: #B0985E;
          background: rgba(176, 152, 94, 0.04);
        }
        .c-cream .tag {
          color: #B0985E;
        }
        .c-cream:hover {
          background: rgba(176, 152, 94, 0.08);
        }
        .c-show {
          background: #D06A4C;
          border-color: #D06A4C;
          border-left-color: #ffffff;
        }
        .c-show .tag {
          color: rgba(255, 255, 255, 0.85);
        }
        .c-show .ttl {
          color: #ffffff;
          font-weight: 700;
        }
        .empty {
          border: 1px dashed #e6e1d9;
          border-radius: 8px;
          min-height: 38px;
          opacity: 0.55;
          flex: 1 1 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 10px;
          font-size: 11px;
          color: #5f5e5e;
          letter-spacing: 1px;
        }
        .pair {
          display: flex;
          gap: 6px;
          align-items: stretch;
          width: 100%;
        }
        .subbox {
          flex: 1 1 0;
          min-width: 0;
          border: 1px solid #e6e1d9;
          border-left-width: 3px;
          border-radius: 8px;
          background: #ffffff;
          padding: 10px 10px;
          position: relative;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition: transform .12s ease, border-color .12s ease, background .12s ease;
        }
        .subbox:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.04);
          z-index: 2;
        }
        .subbox .age {
          align-self: flex-start;
          margin-bottom: 4px;
        }
        .subbox.cat-biz {
          border-left-color: #D06A4C;
          background: rgba(208, 106, 76, 0.03);
        }
        .subbox.cat-biz:hover {
          background: rgba(208, 106, 76, 0.08);
          border-color: #D06A4C;
        }
        .subbox.cat-ai {
          border-left-color: #3CA685;
          background: rgba(60, 166, 133, 0.03);
        }
        .subbox.cat-ai:hover {
          background: rgba(60, 166, 133, 0.08);
          border-color: #3CA685;
        }
        .subbox .arrow {
          position: absolute;
          top: 8px;
          right: 9px;
          color: #D06A4C;
          font-size: 13px;
          opacity: 0;
          transition: opacity .12s ease;
        }
        .subbox:hover .arrow {
          opacity: 0.7;
        }
        .subbox .bt {
          font-size: 12px;
          line-height: 1.4;
          color: #141413;
          font-weight: 600;
        }
        .age {
          font-family: var(--font-mono);
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: .5px;
          padding: 2px 6px;
          border-radius: 4px;
          display: inline-block;
        }
        .age.lo {
          background: rgba(74, 137, 200, 0.12);
          color: #4A89C8;
        }
        .age.hi {
          background: rgba(212, 163, 19, 0.12);
          color: #D4A313;
        }
        .bar {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          font-family: var(--font-mono);
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .bar.meal {
          background: rgba(176, 152, 94, 0.04);
          border: 1px solid #e6e1d9;
          border-left: 3px solid #B0985E;
          color: #8A733F;
          font-size: 12px;
          padding: 11px;
        }
        .bar.thin {
          background: #fbfaf6;
          border: 1px dashed #e6e1d9;
          color: #8C887A;
          font-size: 10px;
          padding: 5px;
          letter-spacing: 2.5px;
        }
        .quote {
          border-left: 3px solid #D06A4C;
          background: rgba(208, 106, 76, 0.04);
          padding: 12px 16px;
          border-radius: 0 8px 8px 0;
          font-size: 14px;
          line-height: 1.8;
          margin: 14px 0;
          color: #8A503F;
          font-style: italic;
        }
      `}</style>

      <Header variant="white" />
      <main className="max-w-screen-xl mx-auto px-4 md:px-gutter py-24 mt-4">
        <header className="flex flex-col items-center text-center gap-md mb-16 max-w-4xl mx-auto">
          <div className="text-xs font-semibold tracking-[0.2em] text-primary uppercase font-mono mb-2">{t.kicker}</div>
          <h1 className="text-[40px] md:text-[64px] font-semibold leading-tight text-stone-900 font-serif">
            {t.title}<span className="text-primary font-black">{t.titleHighlight}</span>
          </h1>
          <p className="text-body-lg text-secondary max-w-2xl mt-4">
            {t.subtitle}
          </p>
        </header>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8 select-none">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-stone-500 font-mono">
            <span className="w-3 h-3 rounded bg-primary" /> {t.legendBiz}
          </span>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-stone-500 font-mono">
            <span className="w-3 h-3 rounded bg-[#3CA685]" /> {t.legendTech}
          </span>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-stone-500 font-mono">
            <span className="w-3 h-3 rounded bg-[#D4A313]" /> {t.legendTeam}
          </span>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-stone-500 font-mono">
            <span className="w-3 h-3 rounded bg-[#4A89C8]" /> {t.legendShare}
          </span>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-stone-500 font-mono">
            <span className="w-3 h-3 rounded bg-[#9B70C8]" /> {t.legendPresent}
          </span>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-stone-500 font-mono">
            <span className="w-3 h-3 rounded bg-[#B0985E]" /> {t.legendCream}
          </span>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-stone-500 font-mono">
            <span className="age lo" style={{ margin: 0 }}>{t.legendLo}</span> {t.legendLoRange}
          </span>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-stone-500 font-mono">
            <span className="age hi" style={{ margin: 0 }}>{t.legendHi}</span> {t.legendHiRange}
          </span>
        </div>

        {/* Timetable Grid Container */}
        <div className="overflow-x-auto pb-4 mb-20 bg-stone-50/50 p-4 rounded-2xl border border-stone-200/50">
          <div className="timetable-grid">
            {/* Header row */}
            <div className="corner" />
            <div className="bg-white border border-stone-200 rounded-lg p-3 shadow-sm">
              <div className="font-mono font-bold text-base tracking-wide text-stone-800">{t.colDay1}</div>
              <div className="text-xs text-stone-500 mt-1">{t.subDay1}</div>
            </div>
            <div className="bg-white border border-stone-200 rounded-lg p-3 shadow-sm">
              <div className="font-mono font-bold text-base tracking-wide text-stone-800">{t.colDay2}</div>
              <div className="text-xs text-stone-500 mt-1">{t.subDay2}</div>
            </div>
            <div className="bg-white border border-stone-200 rounded-lg p-3 shadow-sm">
              <div className="font-mono font-bold text-base tracking-wide text-stone-800">{t.colDay3}</div>
              <div className="text-xs text-stone-500 mt-1">{t.subDay3}</div>
            </div>
            <div className="bg-white border border-stone-200 rounded-lg p-3 shadow-sm">
              <div className="font-mono font-bold text-base tracking-wide text-stone-800">{t.colDay4}</div>
              <div className="text-xs text-stone-500 mt-1">{t.subDay4}</div>
            </div>
            <div className="bg-white border border-stone-200 rounded-lg p-3 shadow-sm">
              <div className="font-mono font-bold text-base tracking-wide text-stone-800">{t.colDay5}</div>
              <div className="text-xs text-stone-500 mt-1">{t.subDay5}</div>
            </div>
            <div className="bg-white border border-stone-200 rounded-lg p-3 shadow-sm">
              <div className="font-mono font-bold text-base tracking-wide text-stone-800">{t.colDay6}</div>
              <div className="text-xs text-stone-500 mt-1">{t.subDay6}</div>
            </div>

            {/* Row: 晨间 (Morning) */}
            <div className="rlabel">{t.rowMorning}</div>
            {/* Day 1 */}
            <div className="cell"><div className="empty" /></div>
            {/* Day 2 */}
            <div className="cell">
              <div className="blk c-cream">
                <span className="tag">Morning</span>
                <div className="ttl">{t.warmup}</div>
              </div>
            </div>
            {/* Day 3 */}
            <div className="cell">
              <div className="blk c-cream">
                <span className="tag">Morning</span>
                <div className="ttl">{t.warmup}</div>
              </div>
            </div>
            {/* Day 4 */}
            <div className="cell">
              <div className="blk click star c-biz" onClick={() => setSelectedKey('d4_survey')}>
                <span className="arrow">›</span>
                <span className="tag">{t.legendBiz}</span>
                <div className="ttl">{t.surveyTitle}</div>
                <div className="meta">{t.surveyMeta}</div>
              </div>
            </div>
            {/* Day 5 */}
            <div className="cell">
              <div className="pair">
                <div className="subbox lo cat-ai" onClick={() => setSelectedKey('d5_lo')}>
                  <span className="arrow">›</span>
                  <span className="age lo">{t.legendLo}</span>
                  <div className="bt">{t.loAIPrep}</div>
                </div>
                <div className="subbox hi cat-ai" onClick={() => setSelectedKey('d5_hi')}>
                  <span className="arrow">›</span>
                  <span className="age hi">{t.legendHi}</span>
                  <div className="bt">{t.hiAIPrep}</div>
                </div>
              </div>
            </div>
            {/* Day 6 */}
            <div className="cell">
              <div className="blk c-cream">
                <span className="tag">Morning</span>
                <div className="ttl">{t.warmup}</div>
              </div>
            </div>

            {/* Row: 上午 (AM) */}
            <div className="rlabel">{t.rowMorningSession}</div>
            {/* Day 1 */}
            <div className="cell"><div className="empty" /></div>
            {/* Day 2 */}
            <div className="cell">
              <div className="blk click c-biz" onClick={() => setSelectedKey('d2_jiexi')}>
                <span className="arrow">›</span>
                <span className="tag">{t.legendBiz}</span>
                <div className="ttl">{t.d2jiexi}</div>
              </div>
              <div className="pair grow">
                <div className="subbox lo cat-ai" onClick={() => setSelectedKey('d2_lo_ai')}>
                  <span className="arrow">›</span>
                  <span className="age lo">{t.legendLo}</span>
                  <div className="bt">{t.d2loai}</div>
                </div>
                <div className="subbox hi cat-biz" onClick={() => setSelectedKey('d2_hi_biz2')}>
                  <span className="arrow">›</span>
                  <span className="age hi">{t.legendHi}</span>
                  <div className="bt">{t.d2hibiz2}</div>
                </div>
              </div>
            </div>
            {/* Day 3 */}
            <div className="cell">
              <div className="pair">
                <div className="subbox lo cat-ai" onClick={() => setSelectedKey('d3_vibe_games')}>
                  <span className="arrow">›</span>
                  <span className="age lo">{t.legendLo}</span>
                  <div className="bt">{t.d3vibegames}</div>
                </div>
                <div className="subbox hi cat-ai" onClick={() => setSelectedKey('d3_vibe_web')}>
                  <span className="arrow">›</span>
                  <span className="age hi">{t.legendHi}</span>
                  <div className="bt">{t.d3vibeweb}</div>
                </div>
              </div>
            </div>
            {/* Day 4 */}
            <div className="cell">
              <div className="blk click c-team" onClick={() => setSelectedKey('d_mvp')}>
                <span className="arrow">›</span>
                <span className="tag">{t.legendTeam}</span>
                <div className="ttl">{t.dmvp}</div>
              </div>
            </div>
            {/* Day 5 */}
            <div className="cell">
              <div className="blk c-team">
                <span className="tag">{t.legendTeam}</span>
                <div className="ttl">{t.d5completeAI}</div>
              </div>
              <div className="blk click c-team grow" onClick={() => setSelectedKey('d_mvp')}>
                <span className="arrow">›</span>
                <span className="tag">{t.legendTeam}</span>
                <div className="ttl">{t.dmvp}</div>
              </div>
            </div>
            {/* Day 6 */}
            <div className="cell">
              <div className="blk click c-present" onClick={() => setSelectedKey('d6rehearsal')}>
                <span className="arrow">›</span>
                <span className="tag">{t.legendPresent}</span>
                <div className="ttl">{t.d6rehearsal}</div>
              </div>
            </div>

            {/* Row: 中午 (Lunch) */}
            <div className="rlabel">{t.rowNoonSession}</div>
            <div className="cell"><div className="empty" /></div>
            <div className="bar meal" style={{ gridColumn: "span 5" }}>{t.lunchRecess}</div>

            {/* Row: 下午 (PM) */}
            <div className="rlabel">{t.rowAfternoonSession}</div>
            {/* Day 1 */}
            <div className="cell">
              <div className="blk click c-biz" onClick={() => setSelectedKey('d1open')}>
                <span className="arrow">›</span>
                <span className="tag">Opening</span>
                <div className="ttl">{t.d1open}</div>
                <div className="meta">{t.d1openMeta}</div>
              </div>
            </div>
            {/* Day 2 */}
            <div className="cell">
              <div className="pair">
                <div className="subbox lo cat-biz" onClick={() => setSelectedKey('d2pm_lo')}>
                  <span className="arrow">›</span>
                  <span className="age lo">{t.legendLo}</span>
                  <div className="bt">{t.d2hibiz2}</div>
                </div>
                <div className="subbox hi cat-ai" onClick={() => setSelectedKey('d2pm_hi')}>
                  <span className="arrow">›</span>
                  <span className="age hi">{t.legendHi}</span>
                  <div className="bt">{t.d2loai}</div>
                </div>
              </div>
              <div className="blk click star c-biz grow" onClick={() => setSelectedKey('d2empathy')}>
                <span className="arrow">›</span>
                <span className="tag">{t.legendBiz}</span>
                <div className="ttl">{t.d2empathy}</div>
              </div>
              <div className="blk c-share">
                <span className="tag">{t.legendShare}</span>
                <div className="ttl">{t.d2share}</div>
              </div>
            </div>
            {/* Day 3 */}
            <div className="cell">
              <div className="pair">
                <div className="subbox lo cat-biz" onClick={() => setSelectedKey('d3_market')}>
                  <span className="arrow">›</span>
                  <span className="age lo">{t.legendLo}</span>
                  <div className="bt">{t.d3market}</div>
                </div>
                <div className="subbox hi cat-biz" onClick={() => setSelectedKey('d3_market')}>
                  <span className="arrow">›</span>
                  <span className="age hi">{t.legendHi}</span>
                  <div className="bt">{t.d3market}</div>
                </div>
              </div>
              <div className="blk c-team grow">
                <span className="tag">{t.legendTeam}</span>
                <div className="ttl">{t.d3discuss}</div>
              </div>
            </div>
            {/* Day 4 */}
            <div className="cell">
              <div className="pair">
                <div className="subbox lo cat-biz" onClick={() => setSelectedKey('d4plan_lo')}>
                  <span className="arrow">›</span>
                  <span className="age lo">{t.legendLo}</span>
                  <div className="bt">{t.d4planlo}</div>
                </div>
                <div className="subbox hi cat-biz" onClick={() => setSelectedKey('d4plan_hi')}>
                  <span className="arrow">›</span>
                  <span className="age hi">{t.legendHi}</span>
                  <div className="bt">{t.d4planhi}</div>
                </div>
              </div>
              <div className="blk click c-team grow" onClick={() => setSelectedKey('d_mvp')}>
                <span className="arrow">›</span>
                <span className="tag">{t.legendTeam}</span>
                <div className="ttl">{t.dmvp}</div>
              </div>
              <div className="blk c-share">
                <span className="tag">{t.legendShare}</span>
                <div className="ttl">{t.d2share}</div>
              </div>
            </div>
            {/* Day 5 */}
            <div className="cell">
              <div className="blk click star c-present grow" onClick={() => setSelectedKey('d5speak')}>
                <span className="arrow">›</span>
                <span className="tag">{t.legendPresent}</span>
                <div className="ttl">{t.d5speak}</div>
              </div>
              <div className="blk c-share">
                <span className="tag">{t.legendShare}</span>
                <div className="ttl">{t.d2share}</div>
              </div>
            </div>
            {/* Day 6 */}
            <div className="cell">
              <div className="blk click c-show" onClick={() => setSelectedKey('d6show')}>
                <span className="arrow">›</span>
                <span className="tag">Showtime</span>
                <div className="ttl">{t.d6show}</div>
              </div>
            </div>

            {/* Row: 晚餐 (Dinner) */}
            <div className="rlabel">{t.rowDinnerSession}</div>
            <div className="bar meal" style={{ gridColumn: "span 5" }}>{t.dinnerRecess}</div>
            <div className="cell"><div className="empty" /></div>

            {/* Row: 晚间 (Night) */}
            <div className="rlabel">{t.rowEveningSession}</div>
            {/* Day 1 */}
            <div className="cell">
              <div className="blk click c-biz" onClick={() => setSelectedKey('d1ice')}>
                <span className="arrow">›</span>
                <span className="tag">{t.legendTeam}</span>
                <div className="ttl">{t.d1ice}</div>
              </div>
            </div>
            {/* Day 2 */}
            <div className="cell">
              <div className="blk click c-team" onClick={() => setSelectedKey('d2_blueprint')}>
                <span className="arrow">›</span>
                <span className="tag">{t.legendTeam}</span>
                <div className="ttl">{t.d2blueprint}</div>
              </div>
            </div>
            {/* Day 3 */}
            <div className="cell">
              <div className="blk c-share">
                <span className="tag">{t.legendShare}</span>
                <div className="ttl">{t.d2share}</div>
              </div>
            </div>
            {/* Day 4 */}
            <div className="cell">
              <div className="blk c-present">
                <span className="tag">{t.legendPresent}</span>
                <div className="ttl">{t.d4pitchscript}</div>
              </div>
            </div>
            {/* Day 5 */}
            <div className="cell">
              <div className="blk c-team">
                <span className="tag">{t.legendTeam}</span>
                <div className="ttl">{t.d5refinement}</div>
              </div>
            </div>
            {/* Day 6 */}
            <div className="cell">
              <div className="empty">{t.d6departure}</div>
            </div>

            {/* Row: Family time (No label) */}
            <div className="rlabel" />
            <div className="bar thin" style={{ gridColumn: "span 5" }}>{t.familyTime}</div>
            <div className="cell"><div className="empty" /></div>
          </div>
        </div>
      </main>

      {/* Overlay Modal */}
      {selectedKey && DETAILS[selectedKey] && (
        <div
          className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-50 flex items-start justify-center p-4 md:p-8 overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedKey(null);
          }}
        >
          <div className="bg-white border border-stone-200 border-t-4 border-t-primary rounded-[16px] max-w-[760px] w-full p-6 md:p-8 shadow-2xl relative animate-fade-in-up mt-8 mb-8">
            <button
              type="button"
              className="absolute top-4 right-4 text-stone-400 hover:text-primary transition-colors cursor-pointer w-8 h-8 rounded-full border border-stone-200 hover:border-primary flex items-center justify-center font-bold text-sm"
              onClick={() => setSelectedKey(null)}
            >
              ✕
            </button>
            <div className="text-label-md text-primary font-mono tracking-widest mb-1.5 font-bold uppercase">
              {DETAILS[selectedKey].tag}
            </div>
            <h2 className="text-headline-lg text-stone-900 font-bold mb-1 leading-tight font-serif">
              {DETAILS[selectedKey].title}
            </h2>
            <div className="text-body-sm text-stone-500 mb-6 font-mono border-b border-stone-200 pb-3">
              {DETAILS[selectedKey].when}
            </div>
            <div
              className="prose max-w-none text-stone-600 space-y-4"
              dangerouslySetInnerHTML={{ __html: DETAILS[selectedKey].html }}
            />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
