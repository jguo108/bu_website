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
    tag: "Creator · AI Boost（AI 老师）",
    when: "Day 2 上午 · 第 2 段 · Creator班",
    title: "What is AI? vibe coding 101",
    html: `
      <p>这节课带大家<b>初步了解 AI 是怎么工作的</b>，看看现在的 AI 都有哪些能力，以及——<b>怎么和 AI 有效地对话</b>。</p>
      <ul>
        <li>AI 大概是怎么"思考"、怎么回答问题的（不讲深原理，先建直觉）</li>
        <li>现在的 AI 能做到哪些事（看几个最新例子）</li>
        <li>怎么"好好说话"，AI 才听得懂、给得准——有效对话 / prompting 入门</li>
      </ul>
      <div class="quote">AI 老师动线：<b>上午 → Creator</b>。Innovator的同一节放到<b>下午</b>，一个老师不撞车。</div>
      <div class="tools">为 Day 3 的 vibe coding 打底　|　AI 工具：<b>Claude / 豆包</b> 等</div>
    `
  },
  d2_jiexi: {
    tag: "合班 · 创业思维",
    when: "Day 2 上午 · 第 1 节 · 两班一起上",
    title: "主题拆解 · 创业思维",
    html: `
      <p>Day 2 第一节<b>两班合上</b>，一起拆解"AI 能做什么"，用同一组例子，按年龄给到不同深度。</p>
      <div class="cards">
        <div class="card">
          <div class="h">体验层（面向Creator）</div>
          <ul>
            <li><b>AI for fun</b>：把照片变成会动的动漫角色</li>
            <li><b>AI for good</b>：Be My Eyes —— AI 帮盲人"看见"</li>
            <li><b>AI for learning</b>：用 AI 问难题，看它怎么教</li>
          </ul>
        </div>
        <div class="card">
          <div class="h">批判层（面向Innovator）</div>
          <ul>
            <li><b>fun</b>：谁从你"刷到停不下来"里赚钱？</li>
            <li><b>good</b>：AI 看错了，谁负责？</li>
            <li><b>learning</b>：给答案 vs 教你思考，哪个真帮你？</li>
          </ul>
        </div>
      </div>
      <div class="quote">结尾：投票"我最想做哪一类 AI"。这一节之后<b>分头上课</b>：Creator上 prompting，Innovator上商业素养课。</div>
      <div class="tools">AI 工具：<b>即梦 / 可灵</b>（演示）· <b>Claude / 豆包</b></div>
    `
  },
  d2_hi_biz2: {
    tag: "Innovator · 商业素养课",
    when: "Day 2 上午 · 第 2 节 · Innovator班",
    title: "商业素养课",
    html: `
      <p>一起来玩一局「<b>商业侦探</b>」桌游——不讲大道理，在游戏里把"一家公司是怎么回事"摸清楚。</p>
      <h3>在游戏里搞懂</h3>
      <ul>
        <li><b>四个 C 各管什么</b>：CEO（掌舵做决定）/ CFO（管钱）/ CTO（管技术、做产品）/ CMO（管市场、把东西卖出去）</li>
        <li><b>公司怎么运转</b>：一个产品从想法 → 做出来 → 卖出去 → 赚到钱，中间谁在出力、环环怎么扣</li>
        <li><b>要盯哪些关键指标</b>：有多少用户、东西好不好卖、赚不赚钱……一家公司靠哪些数字判断好坏</li>
      </ul>
      <div class="quote">课程目标：不是背名词，而是让小朋友建立简单的商业 <b>"sense"</b>——知道一家公司就像一台需要分工配合的"团队机器"。</div>
      <div class="tools">教具：商业侦探桌游　|　配套见项目里的《商业素养课_公司里的四个C》</div>
    `
  },
  d2pm_hi: {
    tag: "Innovator · AI Boost（AI 老师）",
    when: "Day 2 下午 · 前段 · Innovator班",
    title: "What is AI? vibe coding 101",
    html: `
      <p>下午前段 <b>AI 老师转到Innovator</b>，上同一节——和上午Creator<b>错开时间</b>，一个 AI 老师就够。</p>
      <p><b>初步了解 AI 是怎么工作的</b>，看看现在 AI 的能力，以及<b>怎么和 AI 有效地对话</b>。</p>
      <ul>
        <li>AI 大概怎么"思考"、能做到哪一步（结合批判视角：答案要不要照单全收）</li>
        <li>现在 AI 的能力边界在哪</li>
        <li>怎么和 AI 有效对话、写出好 prompt</li>
      </ul>
      <div class="quote">AI 老师动线：<b>上午 → Creator</b>，<b>下午 → Innovator</b>。</div>
      <div class="tools">为 Day 3 的 vibe coding 打底　|　AI 工具：<b>Claude / 豆包</b></div>
    `
  },
  d2pm_lo: {
    tag: "Creator · 商业素养课",
    when: "Day 2 下午 · 前段 · Creator班",
    title: "商业素养课",
    html: `
      <p>Innovator上午上过的同一节，Creator放到下午（和 AI 课错峰）。一起来玩一局「<b>商业侦探</b>」桌游——在游戏里把"一家公司是怎么回事"摸清楚。</p>
      <h3>在游戏里搞懂</h3>
      <ul>
        <li><b>四个 C 各管什么</b>：CEO（掌舵做决定）/ CFO（管钱）/ CTO（管技术、做产品）/ CMO（管市场、把东西卖出去）</li>
        <li><b>公司怎么运转</b>：一个产品从想法 → 做出来 → 卖出去 → 赚到钱，中间谁在出力、环环怎么扣</li>
        <li><b>要盯哪些关键指标</b>：有多少用户、东西好不好卖、赚不赚钱……一家公司靠哪些数字判断好坏</li>
      </ul>
      <div class="quote">课程目标：让小朋友建立简单的商业 <b>"sense"</b>——知道一家公司就像一台需要分工配合的"团队机器"。后段两班合回来一起上<b>共情力</b>。</div>
      <div class="tools">教具：商业侦探桌游　|　配套见《商业素养课_公司里的四个C》</div>
    `
  },
  d2empathy: {
    tag: "创业思维 · 合班",
    when: "Day 2 下午 · 后段 · 两班合回来",
    title: "共情力 — 发现痛点、头脑风暴",
    html: `
      <p>好的创意，往往来自<b>对生活的观察</b>和<b>对痛点的捕捉</b>。这节课我们和小朋友一起 brainstorming：<b>生活里有哪些"问题"？哪些是你最想改变的东西？</b></p>
      <p>这接住了 Day 1 收尾埋的钩子——"最好的产品，都是从'讨厌'开始的"。我们不急着想点子，先把"不爽"找出来。</p>
      <h3>怎么玩</h3>
      <ul>
        <li><b>吐槽时间</b>：每个孩子写下 3 件"最近让我抓狂 / 麻烦 / 不方便"的事——在家、在学校、在路上都算</li>
        <li><b>找共鸣</b>：小组轮流分享，圈出"原来大家都烦这个"的<b>共同痛点</b></li>
        <li><b>换位想一想</b>：这件事除了我，还有谁也被困扰？他们是什么感受？（练"共情"）</li>
        <li><b>AI 帮发散</b>：选 1-2 个痛点，用 AI 一起头脑风暴"可能怎么解决"，越多越好、先不评判</li>
      </ul>
      <div class="quote">带走一句话：<b>"先看见问题，再谈点子。"</b> 这里产出的痛点，正是 Day 3 选用户、Day 4 市场问卷要去验证的对象。</div>
      <div class="tools">AI 工具：<b>Claude / 豆包</b>（围绕痛点发散解法）　|　产出：每组一张"痛点清单"</div>
    `
  },
  d2_blueprint: {
    tag: "Teamwork",
    when: "Day 2 晚间 · 小组",
    title: "开始策划你的创业蓝图",
    html: `
      <p>今天晚上，小组要从我们的<b>三大主题</b>里，讨论并定下自己想做的"<b>创业主题</b>"：</p>
      <ul>
        <li><b>AI for fun</b>：让人开心、好玩的</li>
        <li><b>AI for learning</b>：帮人学东西、变厉害的</li>
        <li><b>AI for good</b>：帮到别人、让世界更好一点的</li>
      </ul>
      <div class="quote">先选大方向，再往里填想法——这就是你们小组接下来几天要一起做的事。</div>
    `
  },
  d6show: {
    tag: "Showtime",
    when: "Day 6 下午",
    title: "项目路演",
    html: `
      <p><b>It's your show time!</b></p>
      <p>六天的努力，在这一刻登场——每个小组上台讲出自己的项目：解决什么问题、给谁用、怎么做出来的，然后亮出你们的 demo。</p>
      <div class="quote">放松、自信、为自己骄傲。这是属于你们的舞台！</div>
    `
  },
  d_mvp: {
    tag: "Teamwork",
    when: "Day 4 / Day 5 · 小组",
    title: "打造 MVP",
    html: `
      <p>开始打造小组的 <b>MVP</b>（最小可用产品）——使用 AI 工具，实现<b>从 0 到 1 的突破！</b></p>
      <ul>
        <li>把"想做的东西"砍到<b>最小、能跑、能演示</b>的版本</li>
        <li>用 vibe coding / AI 工具，边说边做、快速出第一版</li>
        <li>做出来 → 自己玩一遍 → 发现问题 → 再改</li>
      </ul>
      <div class="quote">不求完美，只求<b>"能给别人看、能讲清楚我做了什么"</b>。Day 4-5 反复打磨，Day 6 拿去路演。</div>
      <div class="tools">AI 工具：<b>Claude</b> 等　|　产出：小组可演示的 MVP</div>
    `
  },
  d3_vibe_games: {
    tag: "Vibe Coding · Games",
    when: "Day 3 · 上午（两班同款）",
    title: "Vibe Coding · Games",
    html: `
      <p>大家都打过游戏，那么怎么样"<b>做</b>"一个游戏呢？一个好的游戏，需要哪些关键的"<b>设计</b>"呢？</p>
      <p>这节课，我们从<b>分析经典游戏</b>入手，让大家知道——<b>会打游戏 ≠ 会做游戏</b>。</p>
      <ul>
        <li>拆解一款经典游戏：好玩在哪、规则怎么设计、难度怎么把控</li>
        <li>用 vibe coding "边说边做"，让 AI 帮你把游戏点子变成能玩的 demo</li>
        <li>做出来 → 自己试玩 → 调整，体会"设计"的力量</li>
      </ul>
      <div class="tools">AI 工具：<b>Claude</b> 等　|　产出：一个能玩的小游戏 demo</div>
    `
  },
  d3_vibe_web: {
    tag: "Vibe Coding · Apps/Website",
    when: "Day 3 · 下午（两班同款）",
    title: "Vibe Coding · Apps / Website",
    html: `
      <p>做一个网站是天方夜谭吗？怎样搭建一个"<b>受欢迎</b>"的网站？</p>
      <p>这节课，我们一起看看<b>经典网站是如何诞生的</b>，以及我们可以利用<b>什么工具</b>来搭建网站。</p>
      <ul>
        <li>看几个经典网站 / 应用：它们解决了什么问题、为什么有人用</li>
        <li>认识能"边说边做"搭网站 / 小应用的 AI 工具</li>
        <li>动手搭出自己项目的第一版网页，迭代改进</li>
      </ul>
      <div class="tools">AI 工具：<b>Claude</b> 等　|　产出：一个可访问的网页 / 小应用</div>
    `
  },
  d3_market: {
    tag: "市场与用户 · 分班",
    when: "Day 3 下午 · 两班同时（分龄）",
    title: "市场与用户",
    html: `
      <p>Day 3 下午两班<b>同时</b>上市场与用户。核心一句话：<b>市场 = 一群有相同需求的人；用户 = 具体的那个人。</b>同样的东西，给对了人才卖得动。</p>
      <ul>
        <li>每队回答："我的东西给谁？他们会在哪出现？"</li>
        <li>用 Claude / 豆包生成<b>用户画像</b>（年龄、喜好、烦恼）</li>
        <li>用 AI 推演这群人最可能的<b>痛点 / 需求</b></li>
      </ul>
      <div class="quote">真实问卷验证放到 <b>Day 4 晨间「市场问卷调查」</b>；当天<b>下午</b>动手做 apps/website，<b>晚上</b>讨论 PRD/GDD、确定方案。</div>
      <div class="tools">AI 工具：<b>Claude / 豆包</b>　|　产出：用户画像 + 确定项目</div>
    `
  },
  d4_survey: {
    tag: "两班同时 · 统一一版（不分龄）",
    when: "Day 4 晨间 · 约 60 分钟 + 午休实战",
    title: "市场问卷调查",
    html: `
      <p>最终任务：<b>每个小组合作设计一份属于本组的问卷</b>，午休时组员分头<b>去找营地里其他营的小朋友</b>，全组合计完成<b>至少 5 份</b>调研。核心理念：<b>做之前先问，别猜。</b></p>
      <div class="cards">
        <div class="card"><div class="h">① 钩子（5min）</div><p>全班秘密投票"最爱的零食口味"，摊开发现五花八门——<b>市场=一群口味不同的人，先问别猜</b>。</p></div>
        <div class="card"><div class="h">② 挑刺（15min）</div><p>统一案例"卖新口味辣条"，好坏问题投票。口诀：<b>别夸自己、别问是非、一次一个。</b></p></div>
        <div class="card"><div class="h">③ 调查员秘籍（5min）</div><p>六条小贴士：问"做过什么"不问"会不会"、少说多听、别带节奏、记原话、别只问好朋友、问完说谢谢。</p></div>
        <div class="card"><div class="h">④ 设计问卷（22min）</div><p><b>最终任务</b>：每组定稿一份本组共用的问卷。填空骨架：筛选 / 行为 / 偏好 / 痛点 / 开放。</p></div>
      </div>
      <p><b>⑤ 搭话演练 + 记录单（8min）</b>：开场白脚本 + 互练一次；强调被拒很正常；发记录单、定"全组合计 ≥5 份"目标。</p>
      <div class="quote">午休实战：两人一组、指定区域、老师看得见。真实回答 = 下午写商业计划书 + Day 6 路演说服评委的弹药。</div>
      <div class="tools">配套：<b>问卷骨架 + 调查员秘籍 + 记录单</b>三合一工作纸　|　产出：<b>每组一份问卷</b> + 全组 ≥5 份一手调研</div>
    `
  },
  d4plan_lo: {
    tag: "Creator · 商业计划书（分班）",
    when: "Day 4 下午 · Creator班",
    title: "商业计划书 · 填故事",
    html: `
      <p>用<b>填故事</b>的方法，把自己的公司故事讲出来——老师一句句带读，念到空格停下来问、孩子填，<b>一句话＝一个角度</b>，8 句走完 8 个角度，谁都不漏。</p>
      <p><b>故事单 8 句</b>＝① 卖什么 / ② 给谁用 / ③ 什么烦恼 / ④ 有多少人要 / ⑤ 哪里不一样 / ⑥ 怎么赚钱 / ⑦ 怎么让人知道 / ⑧ 谁来做。第 ④ 句"很多 / 一点点"即可；"别人也有什么"接上午问卷里见过的同类东西。</p>
      <div class="quote">填好的故事单能<b>念出来</b>——这就是孩子最早的路演，也是当晚路演讲稿的底稿。</div>
      <div class="tools">配套：<b>故事单工作纸</b>（见「商业计划书_板块设计」）　|　产出：每人/每组一张填好的公司故事单</div>
    `
  },
  d4plan_hi: {
    tag: "Innovator · 商业计划书（分班）",
    when: "Day 4 下午 · Innovator班",
    title: "商业计划书 · 三模型",
    html: `
      <p>专业人士看商业计划书不拍脑袋，用<b>模型当放大镜</b>从不同角度看清生意。给三个放大镜，Claude 辅助填，每个提炼<b>一句结论</b>：</p>
      <div class="cards">
        <div class="card"><div class="h">SWOT · 看自己</div><p>优势 / 劣势 / 机会 / 威胁</p></div>
        <div class="card"><div class="h">PEST · 看大环境</div><p>政治 / 经济 / 社会 / 技术</p></div>
        <div class="card"><div class="h">Porter 精简 · 看战场</div><p>现有对手 / 替代品 / 新玩家（砍掉两个偏抽象的议价力）</p></div>
      </div>
      <p><b>整合成计划书</b>：三条结论收进骨架——市场段 ← PEST，竞争段 ← Porter + SWOT 对手对比，"为什么我们能赢" ← SWOT 优势 + 机会；再补产品 / 用户痛点（用<b>上午问卷</b>真实声音）/ 盈利 / 团队。</p>
      <div class="quote">这份计划书 Day 5 直接喂 Claude「改写成 3 分钟路演稿」——模型分析越扎实，路演稿越有说服力。</div>
      <div class="tools">AI 工具：<b>Claude</b>　|　配套：<b>三模型 + 整合骨架工作纸</b>　|　产出：每组一份商业计划书</div>
    `
  },
  d5_lo: {
    tag: "Creator · AI 工具 · 路演准备",
    when: "Day 5 上午 · Creator班（本日 2 位老师，可同时进行）",
    title: "AI 工具 · 路演准备",
    html: `
      <p>使用 AI 工具帮助<b>梳理路演结构</b>，甚至制作自己的"<b>产品广告</b>"！</p>
      <ul>
        <li>用 AI 把"我要讲什么"理成清楚的顺序（故事线 / 路演结构）</li>
        <li>最简英雄结构：有个人遇到麻烦 → 用了我的产品 → 变开心了</li>
        <li>用 AI 出几格<b>产品广告 / 漫画</b>，让项目更打动人</li>
      </ul>
      <div class="quote">路演重心：要讲出<b>"我访谈的那个人是谁、他说了什么"</b>——用户的真实声音是说服评委的最强武器。</div>
      <div class="tools">AI 工具：<b>即梦 / Midjourney / Claude</b> 等　|　产出：路演结构 + 产品广告</div>
    `
  },
  d5_hi: {
    tag: "Innovator · AI 工具 · 路演准备",
    when: "Day 5 上午 · Innovator班（本日 2 位老师，可同时进行）",
    title: "AI 工具 · 路演准备",
    html: `
      <p>使用 AI 工具帮助<b>梳理路演结构</b>，制作<b>路演 slides、广告</b>等。</p>
      <ul>
        <li>用 AI 把项目理成清晰的路演逻辑（问题 → 方案 → 用户 → 效果）</li>
        <li>用 Claude 生成 <b>HTML slides</b>，自己改标题、配色、加动画</li>
        <li>顺手做一版<b>产品广告</b>，让路演更有说服力</li>
      </ul>
      <div class="quote">路演重心：要讲出<b>"我访谈的那个人是谁、他说了什么"</b>——用户的真实声音是说服评委的最强武器。</div>
      <div class="tools">AI 工具：<b>Claude</b>（slides）· 即梦 等　|　产出：路演 slides + 广告</div>
    `
  },
  d5speak: {
    tag: "演讲表达 · 先合班后分组",
    when: "Day 5 下午",
    title: "演讲课（合班）→ 小组单独辅导",
    html: `
      <p>下午演讲课<b>先合班一起上</b>，把通用的表达技巧讲透；再<b>拆到各组单独辅导</b>，针对每组的稿子打磨。</p>
      <div class="cards">
        <div class="card"><div class="h">① 合班 · 演讲课</div><p>开场 hook、肢体与眼神、声音节奏、控场、忘词怎么办。</p></div>
        <div class="card"><div class="h">② 分组 · 单独辅导</div><p>过稿、计时、分工补位，老师逐组给反馈。</p></div>
      </div>
      <div class="quote">衔接 Day 6 上午<b>彩排及路演准备</b>。</div>
    `
  },
  d6rehearsal: {
    tag: "Showtime 准备",
    when: "Day 6 上午",
    title: "彩排及路演准备",
    html: `
      <p>Day 6 上午从"演讲集训"改为<b>彩排及路演准备</b>：把流程跑顺，确保下午正式路演不掉链子。</p>
      <ul>
        <li>全流程<b>走台</b>一遍，卡时间</li>
        <li>设备 / 投屏 / demo <b>联调</b></li>
        <li>评委可能问什么——<b>Q&A 演练</b></li>
        <li>各组互相试讲、补位救场</li>
      </ul>
      <div class="quote">下午即正式<b>项目路演</b>。</div>
    `
  },
  d1open: {
    tag: "Opening",
    when: "Day 1 · 15:00 入营 → 16:00 开营仪式",
    title: "入营 + 开营仪式",
    html: `<p><b>15:00</b> 营员入营报到；<b>约 16:00</b> 开营仪式：开营魔法秀、6 天目标介绍、营地规则共创（孩子自己定规矩、签字按手印）。</p>
      <p>Day 1 晨间与上午不安排课程（营员尚未到齐）。</p>
      <div class="quote">这一环节已有完整执行手册 —— 见项目里的 <b>Day1_执行手册</b>。</div>`
  },
  d1ice: {
    tag: "Ice Breaking",
    when: "Day 1 晚间",
    title: "破冰游戏 · 分组 · 队伍三件套",
    html: `<p>名字大轮转、AI 猜猜猜、找朋友 Bingo、分组揭晓、队名/队徽/队歌三件套。</p>
      <div class="quote">这一环节已有完整执行手册 —— 见项目里的 <b>Day1_执行手册</b>。</div>`
  }
};

const DETAILS_EN: Record<string, Detail> = {
  d2_lo_ai: {
    tag: "Creator · AI Boost (AI Teacher)",
    when: "Day 2 AM · Session 2 · Creator Cohort",
    title: "What is AI? Vibe Coding 101",
    html: `
      <p>This class introduces students to <b>how AI works</b>, showcases its current capabilities, and teaches <b>how to converse with AI effectively</b>.</p>
      <ul>
        <li>How AI "thinks" and answers questions (building intuition without heavy theory)</li>
        <li>What AI can do today (exploring latest real-world examples)</li>
        <li>How to "talk properly" so AI understands and gives precise answers—intro to effective prompting</li>
      </ul>
      <div class="quote">AI Teacher's Schedule: <b>Morning → Creator</b>. The same session for Innovator is shifted to the <b>afternoon</b>, avoiding schedule conflicts for a single teacher.</div>
      <div class="tools">Laying the foundation for Day 3 vibe coding | AI Tools: <b>Claude / Doubao</b> etc.</div>
    `
  },
  d2_jiexi: {
    tag: "Combined · Founder Mindset",
    when: "Day 2 AM · Session 1 · Joint Class",
    title: "Topic Deconstruction · Founder Mindset",
    html: `
      <p>Day 2 Session 1 is a <b>joint class</b>. We will deconstruct "what AI can do" using the same set of examples, adapted to different depths based on age groups.</p>
      <div class="cards">
        <div class="card">
          <div class="h">Experience Level (for Creator)</div>
          <ul>
            <li><b>AI for fun</b>: Turn photos into animated anime characters</li>
            <li><b>AI for good</b>: Be My Eyes —— AI helping the blind "see"</li>
            <li><b>AI for learning</b>: Ask AI difficult questions and observe how it teaches</li>
          </ul>
        </div>
        <div class="card">
          <div class="h">Critical Thinking Level (for Innovator)</div>
          <ul>
            <li><b>fun</b>: Who profits when you "can't stop scrolling"?</li>
            <li><b>good</b>: When AI makes a mistake, who is responsible?</li>
            <li><b>learning</b>: Giving answers vs. teaching you how to think—which one truly helps?</li>
          </ul>
        </div>
      </div>
      <div class="quote">Ending: Vote on "Which type of AI I want to build the most." After this session, the classes <b>split up</b>: Creator moves to prompting, while Innovator moves to Business Literacy.</div>
      <div class="tools">AI Tools: <b>Jimeng / Kuaishou Kling</b> (demos) · <b>Claude / Doubao</b></div>
    `
  },
  d2_hi_biz2: {
    tag: "Innovator · Business Literacy",
    when: "Day 2 AM · Session 2 · Innovator Cohort",
    title: "Business Literacy",
    html: `
      <p>Let's play the "<b>Business Detective</b>" board game—no boring theories, just learning how a company functions through gameplay.</p>
      <h3>Learn through play:</h3>
      <ul>
        <li><b>What the 4 Cs do</b>: CEO (decision-maker), CFO (manages finance), CTO (technology & product), and CMO (marketing & sales)</li>
        <li><b>How a company operates</b>: The lifecycle of a product from idea → production → sales → revenue, and how teams cooperate</li>
        <li><b>Key metrics to watch</b>: User count, sales performance, profitability... how numbers indicate a company's health</li>
      </ul>
      <div class="quote">Course Goal: Instead of memorizing terms, kids develop a basic business <b>"sense"</b>—viewing a company as a collaborative "team machine".</div>
      <div class="tools">Props: Business Detective board game | Refer to "Business Literacy_4 Cs in Company" in project.</div>
    `
  },
  d2pm_hi: {
    tag: "Innovator · AI Boost (AI Teacher)",
    when: "Day 2 PM · First Session · Innovator Cohort",
    title: "What is AI? Vibe Coding 101",
    html: `
      <p>In the afternoon, the <b>AI teacher shifts to the Innovator cohort</b> to deliver the same session—<b>peak-shifted</b> with Creator's morning slot to optimize resources.</p>
      <p>Gain an <b>initial understanding of how AI works</b>, explore its current capabilities, and learn <b>how to construct effective prompts</b>.</p>
      <ul>
        <li>How AI "thinks" and what it can achieve (combined with a critical perspective: should we blindly accept its answers?)</li>
        <li>Where the boundaries of AI's capabilities lie today</li>
        <li>How to write effective prompts for better AI responses</li>
      </ul>
      <div class="quote">AI Teacher's Schedule: <b>Morning → Creator</b>, <b>Afternoon → Innovator</b>.</div>
      <div class="tools">Laying the foundation for Day 3 vibe coding | AI Tools: <b>Claude / Doubao</b></div>
    `
  },
  d2pm_lo: {
    tag: "Creator · Business Literacy",
    when: "Day 2 PM · First Session · Creator Cohort",
    title: "Business Literacy",
    html: `
      <p>The same session that Innovator attended in the morning is delivered to Creator in the afternoon (peak-shifted with the AI class). Play the "<b>Business Detective</b>" board game to understand how a company operates.</p>
      <h3>Learn through play:</h3>
      <ul>
        <li><b>What the 4 Cs do</b>: CEO (decision-maker), CFO (manages finance), CTO (technology & product), and CMO (marketing & sales)</li>
        <li><b>How a company operates</b>: Product lifecycle from idea → production → sales → revenue, and team coordination</li>
        <li><b>Key metrics to watch</b>: User count, sales performance, profitability... how numbers indicate a company's health</li>
      </ul>
      <div class="quote">Course Goal: Help kids develop basic business <b>"sense"</b>—viewing a company as a collaborative "team machine". The cohorts recombine later for the <b>Empathy</b> session.</div>
      <div class="tools">Props: Business Detective board game | Refer to "Business Literacy_4 Cs in Company" in project.</div>
    `
  },
  d2empathy: {
    tag: "Founder Mindset · Joint Class",
    when: "Day 2 PM · Second Session · Joint Class",
    title: "Empathy — Discovering Pain Points & Brainstorming",
    html: `
      <p>Great ideas stem from <b>observing life</b> and <b>capturing pain points</b>. In this session, we will brainstorm with the kids: <b>What problems exist in daily life? Which ones do you want to solve the most?</b></p>
      <p>This connects back to the hook planted at the end of Day 1: "The best products start from 'annoyances'." We don't jump to solutions yet; we find the problems first.</p>
      <h3>How it works:</h3>
      <ul>
        <li><b>Gripe Time</b>: Each child writes down 3 things that "recently drove me crazy / caused trouble / were inconvenient"—at home, school, or on the road.</li>
        <li><b>Finding Resonance</b>: Teams take turns sharing, circling <b>shared pain points</b> that annoy everyone.</li>
        <li><b>Walk in Their Shoes</b>: Who else suffers from this problem besides me? How do they feel? (Practicing empathy)</li>
        <li><b>AI-Assisted Ideation</b>: Select 1-2 pain points and use AI to brainstorm possible solutions—quantity over quality, with no judgment.</li>
      </ul>
      <div class="quote">Takeaway: <b>"See the problem first, then talk about ideas."</b> The pain points defined here will be validated through user research on Day 3 and 4.</div>
      <div class="tools">AI Tools: <b>Claude / Doubao</b> (to expand solutions around pain points) | Output: A "Pain Point List" for each group.</div>
    `
  },
  d2_blueprint: {
    tag: "Teamwork",
    when: "Day 2 Evening · Group Session",
    title: "Start Designing Your Business Blueprint",
    html: `
      <p>Tonight, teams will discuss and choose their target <b>"venture theme"</b> from our three main domains:</p>
      <ul>
        <li><b>AI for fun</b>: Making people happy, entertaining</li>
        <li><b>AI for learning</b>: Helping people learn and improve</li>
        <li><b>AI for good</b>: Helping others, making the world a bit better</li>
      </ul>
      <div class="quote">Pick a direction first, then fill in details—this is what your team will work on together in the coming days.</div>
    `
  },
  d6show: {
    tag: "Showtime",
    when: "Day 6 Afternoon",
    title: "Project Roadshow",
    html: `
      <p><b>It's your show time!</b></p>
      <p>Six days of hard work culminate in this moment—each team pitches their project: what problem it solves, who it is for, how it was made, and showcases their demo.</p>
      <div class="quote">Relax, be confident, and be proud of yourself. This is your stage!</div>
    `
  },
  d_mvp: {
    tag: "Teamwork",
    when: "Day 4 / Day 5 · Group Session",
    title: "Build MVP",
    html: `
      <p>Begin building the team's <b>MVP</b> (Minimum Viable Product)—utilizing AI tools to achieve a <b>breakthrough from 0 to 1</b>!</p>
      <ul>
        <li>Cut the product scope down to the <b>smallest, working, and presentable</b> version.</li>
        <li>Use vibe coding and AI tools to create the first version rapidly by talking to the computer.</li>
        <li>Build it → playtest it → adjust, experiencing the power of game design.</li>
      </ul>
      <div class="quote">Don't aim for perfection; aim for a <b>"visible, explorable demo that clearly explains your creation"</b>. Refine repeatedly on Day 4-5 for the Day 6 roadshow.</div>
      <div class="tools">AI Tools: <b>Claude</b> etc. | Output: A playable/showable MVP.</div>
    `
  },
  d3_vibe_games: {
    tag: "Vibe Coding · Games",
    when: "Day 3 AM · Joint Curriculum (Both Cohorts)",
    title: "Vibe Coding · Games",
    html: `
      <p>We all play games, but how do you <b>make</b> one? What critical <b>designs</b> go into a good game?</p>
      <p>This class starts with <b>analyzing classic games</b> to show that <b>playing games ≠ making games</b>.</p>
      <ul>
        <li>Deconstruct a classic game: why is it fun, how are rules designed, and how is difficulty balanced?</li>
        <li>Use vibe coding to write code through chat, letting AI turn game ideas into playable demos.</li>
        <li>Build it → playtest it → adjust, experiencing the power of game design.</li>
      </ul>
      <div class="tools">AI Tools: <b>Claude</b> etc. | Output: A playable mini-game demo.</div>
    `
  },
  d3_vibe_web: {
    tag: "Vibe Coding · Apps/Website",
    when: "Day 3 PM · Joint Curriculum (Both Cohorts)",
    title: "Vibe Coding · Apps / Website",
    html: `
      <p>Is making a website a pipe dream? How do you build a <b>popular</b> website?</p>
      <p>In this class, we'll examine <b>how classic websites were born</b> and explore the <b>AI tools</b> we can use to build them.</p>
      <ul>
        <li>Analyze classic websites/apps: what problems they solved, and why people used them</li>
        <li>Learn about AI tools that allow you to build web pages and apps by describing them in chat</li>
        <li>Get hands-on to build the first version of your web project and iterate.</li>
      </ul>
      <div class="tools">AI Tools: <b>Claude</b> etc. | Output: An accessible web page / mini-app.</div>
    `
  },
  d3_market: {
    tag: "Market & Users · Cohorts Split",
    when: "Day 3 PM · Concurrent Sessions (Age-Targeted)",
    title: "Market & Users",
    html: `
      <p>Day 3 afternoon features <b>concurrent</b> sessions on Market & Users. Key takeaway: <b>Market = a group of people with the same need; User = that specific individual.</b> The same product only sells when targeted at the right people.</p>
      <ul>
        <li>Each team answers: "Who is my product for? Where do they hang out?"</li>
        <li>Use Claude / Doubao to generate <b>user personas</b> (age, preferences, annoyances)</li>
        <li>Use AI to deduce the most probable <b>pain points / requirements</b> of this target audience</li>
      </ul>
      <div class="quote">Real questionnaire validation takes place during <b>Day 4 Morning "Market Survey"</b>; on Day 3, teams build apps/website in the <b>afternoon</b> and discuss PRD/GDD to lock solutions in the <b>evening</b>.</div>
      <div class="tools">AI Tools: <b>Claude / Doubao</b> | Output: User personas + locked project scope.</div>
    `
  },
  d4_survey: {
    tag: "Concurrent · Unified Lesson (Joint)",
    when: "Day 4 Morning · ~60 min + Lunch Break Practice",
    title: "Market Survey",
    html: `
      <p>Final Task: <b>Each group designs their own questionnaire</b>. During lunch break, members disperse to <b>survey kids from other camps</b>, aiming for <b>at least 5 completed forms</b> per team. Core concept: <b>Ask before you make, don't guess.</b></p>
      <div class="cards">
        <div class="card"><div class="h">① The Hook (5 min)</div><p>Secret vote on "favorite snack flavor"—results vary wildly. Takeaway: <b>Market = a crowd of different tastes. Ask, don't guess.</b></p></div>
        <div class="card"><div class="h">② Critique (15 min)</div><p>Analyze a case study on "selling new flavor spicy gluten strips". Rule of thumb: <b>Don't boast, don't ask yes/no questions, ask one thing at a time.</b></p></div>
        <div class="card"><div class="h">③ Surveyor's Bible (5 min)</div><p>6 tips: Ask "what they did" instead of "would they", listen more than talk, don't lead, write verbatim, don't just ask close friends, say thank you.</p></div>
        <div class="card"><div class="h">④ Design (22 min)</div><p><b>Final Task</b>: Finalize one questionnaire per group. Skeleton: Screener / Behavior / Preference / Pain Points / Open-ended.</p></div>
      </div>
      <p><b>⑤ Roleplay & Logging Sheets (8 min)</b>: Pitch scripts + partner practice; normalize rejection; hand out logs; set team goal of ≥5 completed surveys.</p>
      <div class="quote">Lunch Break Fieldwork: Pairs in designated areas monitored by teachers. Real responses = ammunition for PM business plans + Day 6 pitches to convince judges.</div>
      <div class="tools">Materials: 3-in-1 worksheet (Survey Skeleton + Guide + Log) | Output: <b>One questionnaire per group</b> + ≥5 primary surveys.</div>
    `
  },
  d4plan_lo: {
    tag: "Creator · Business Plan (Cohorts Split)",
    when: "Day 4 PM · Creator Cohort",
    title: "Business Plan · Storytelling",
    html: `
      <p>Write your company profile by <b>filling in a story</b>. The teacher leads sentence by sentence, pausing at blanks for kids to fill in. <b>1 sentence = 1 angle</b>, covering 8 dimensions systematically.</p>
      <p><b>8 Story Sentences</b> = ① What to sell / ② Who uses it / ③ What annoyance / ④ How many need it / ⑤ What is unique / ⑥ How to make money / ⑦ How to promote / ⑧ Who is on the team. Sentence ④ can be answered as "many / a few"; competitors connect to real answers from the morning survey.</p>
      <div class="quote">The completed story worksheet can be read aloud—it forms the child's earliest roadshow pitch and serves as the draft for that night's script.</div>
      <div class="tools">Materials: <b>Story Worksheet</b> (refer to "Business Plan_Block Design") | Output: One completed story worksheet per person/group.</div>
    `
  },
  d4plan_hi: {
    tag: "Innovator · Business Plan (Cohorts Split)",
    when: "Day 4 PM · Innovator Cohort",
    title: "Business Plan · Three Models",
    html: `
      <p>Professionals don't guess; they use <b>frameworks as magnifying glasses</b> to scrutinize a business. We use three models (with Claude's assistance) to derive <b>one core conclusion</b> each:</p>
      <div class="cards">
        <div class="card"><div class="h">SWOT · Internal View</div><p>Strengths / Weaknesses / Opportunities / Threats</p></div>
        <div class="card"><div class="h">PEST · External View</div><p>Political / Economic / Social / Technological</p></div>
        <div class="card"><div class="h">Porter's Mini · Battlefield View</div><p>Current Competitors / Substitutes / New Entrants (simplified by cutting bargaining powers)</p></div>
      </div>
      <p><b>Consolidation into Plan</b>: Integrate the 3 conclusions into a template—Market section ← PEST, Competition section ← Porter + SWOT competitor comparison, "Why we win" ← SWOT strengths + opportunities. Add product specs, user pain points (utilizing real quotes from <b>morning surveys</b>), business model, and team profile.</p>
      <div class="quote">This plan will be fed directly to Claude on Day 5 to "rewrite into a 3-minute pitch script"—solid framework analysis yields a highly persuasive pitch.</div>
      <div class="tools">AI Tools: <b>Claude</b> | Materials: <b>3-Model + Consolidation Worksheet</b> | Output: One business plan per group.</div>
    `
  },
  d5_lo: {
    tag: "Creator · AI Tools & Pitch Prep",
    when: "Day 5 AM · Creator Cohort (Concurrent, 2 Teachers)",
    title: "AI Tools · Roadshow Prep",
    html: `
      <p>Use AI tools to <b>structure your pitch</b> and even create your own <b>product commercial</b>!</p>
      <ul>
        <li>Use AI to organize "what I want to say" into a logical order (storyline / roadshow structure).</li>
        <li>Simplest Hero's Journey: Someone faces a problem → uses our product → becomes happy.</li>
        <li>Generate a few panels of <b>product ads / comics</b> using AI to make the pitch more engaging.</li>
      </ul>
      <div class="quote">Pitch Focus: Make sure to highlight <b>"who we interviewed and what they said"</b>—real user feedback is the strongest weapon to convince judges.</div>
      <div class="tools">AI Tools: <b>Jimeng / Midjourney / Claude</b> etc. | Output: Pitch structure + product commercial.</div>
    `
  },
  d5_hi: {
    tag: "Innovator · AI Tools & Pitch Prep",
    when: "Day 5 AM · Innovator Cohort (Concurrent, 2 Teachers)",
    title: "AI Tools · Roadshow Prep",
    html: `
      <p>Use AI tools to <b>structure the roadshow pitch</b> and design <b>slides and commercials</b>.</p>
      <ul>
        <li>Use AI to organize project logic (Problem → Solution → Target User → Impact).</li>
        <li>Use Claude to generate <b>HTML slides</b> where you can customize titles, colors, and animations.</li>
        <li>Create a <b>product commercial</b> to make the presentation more convincing.</li>
      </ul>
      <div class="quote">Pitch Focus: Make sure to highlight <b>"who we interviewed and what they said"</b>—real user feedback is the strongest weapon to convince judges.</div>
      <div class="tools">AI Tools: <b>Claude</b> (for slides), <b>Jimeng</b> etc. | Output: Roadshow slides + commercial.</div>
    `
  },
  d5speak: {
    tag: "Public Speaking · Joint then Split",
    when: "Day 5 PM",
    title: "Pitch Class (Combined) → Group Mentoring",
    html: `
      <p>The speech class starts with a <b>joint session</b> to cover general presentation techniques, and then <b>splits into teams for individual coaching</b> on specific scripts.</p>
      <div class="cards">
        <div class="card"><div class="h">① Joint Speech Class</div><p>Opening hooks, body language & eye contact, vocal variety, pace, and handling memory slips.</p></div>
        <div class="card"><div class="h">② Group Coaching</div><p>Draft review, timing, role distribution, and personalized feedback from teachers.</p></div>
      </div>
      <div class="quote">Transitioning into Day 6 morning <b>rehearsals and final pitch preparation</b>.</div>
    `
  },
  d6rehearsal: {
    tag: "Roadshow Prep",
    when: "Day 6 AM",
    title: "Rehearsal & Roadshow Prep",
    html: `
      <p>Day 6 morning focuses on <b>rehearsal & pitch preparation</b> to run through the process and ensure smooth delivery in the afternoon.</p>
      <ul>
        <li>Full-flow <b>walkthrough</b> on stage with timing control.</li>
        <li>Joint <b>hardware/software setup check</b> (devices, projection, demos).</li>
        <li><b>Q&A drilling</b>: anticipating what judges might ask.</li>
        <li>Peer review and group backup plans.</li>
      </ul>
      <div class="quote">Official <b>Project Roadshow</b> starts in the afternoon.</div>
    `
  },
  d1open: {
    tag: "Opening",
    when: "Day 1 · 15:00 Arrival → 16:00 Ceremony",
    title: "Camp Check-in & Opening Ceremony",
    html: `<p><b>15:00</b> Camper arrival & check-in; <b>~16:00</b> Opening Ceremony: opening magic show, overview of 6-day goals, and co-creating camp rules (kids set their own boundaries and sign off with thumbprints).</p>
      <p>No classes are scheduled for Day 1 morning/AM as campers are still arriving.</p>
      <div class="quote">This session has a detailed execution manual—see <b>Day1_Manual</b> in the project.</div>`
  },
  d1ice: {
    tag: "Ice Breaking",
    when: "Day 1 Evening",
    title: "Icebreaker Games · Grouping · Team Identity Triad",
    html: `<p>Name Rotation, Guess the AI, Friend Bingo, team grouping announcement, and co-creation of team name, logo, and team song.</p>
      <div class="quote">This session has a detailed execution manual—see <b>Day1_Manual</b> in the project.</div>`
  }
};

const content = {
  zh: {
    title: "6 天课程表 · ",
    titleHighlight: "商业板块（AI 课错峰版）",
    subtitle: "Day 2 把Creator / Innovator的 AI 课错峰安排（只用 1 位 AI 老师）。青色=AI 课，橙色=创业思维 / 商业课；点击分班板块查看详细设计。",
    colDay1: "DAY 1",
    colDay2: "DAY 2",
    colDay3: "DAY 3",
    colDay4: "DAY 4",
    colDay5: "DAY 5",
    colDay6: "DAY 6",
    subDay1: "开营 · 破冰",
    subDay2: "创业思维 × 初识 AI",
    subDay3: "市场用户 × Vibe（错峰）",
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
    legendLo: "Creator",
    legendHi: "Innovator",
    legendLoRange: "<10 岁",
    legendHiRange: "10 岁+",
    clickHint: "点击 橙色 / 分班板块 查看详细设计 →",
    kicker: "AI × Entrepreneurship Bootcamp",
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
    d6departure: "结营 · 离营"
  },
  en: {
    title: "6-Day Timetable · ",
    titleHighlight: "Business Track (AI Peak-Shifting Version)",
    subtitle: "Day 2 AI classes for Creator / Innovator are peak-shifted (using only 1 AI teacher). Cyan = AI classes, Orange = Entrepreneurship / Business classes; click on split-cohort blocks to view detailed design.",
    colDay1: "DAY 1",
    colDay2: "DAY 2",
    colDay3: "DAY 3",
    colDay4: "DAY 4",
    colDay5: "DAY 5",
    colDay6: "DAY 6",
    subDay1: "Onboarding & Icebreaking",
    subDay2: "Founder Mindset × Intro to AI",
    subDay3: "Market & User × Vibe (Peak-Shifted)",
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
    legendLo: "Creator",
    legendHi: "Innovator",
    legendLoRange: "< 10 years old",
    legendHiRange: "10 years+",
    clickHint: "Click orange / split-cohort blocks to view detailed design →",
    kicker: "AI × Entrepreneurship Bootcamp",
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
    d3vibeweb: "Vibe Coding · Apps / Website",
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
        .cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin: 16px 0;
        }
        .card {
          border: 1px solid #e6e1d9;
          border-radius: 12px;
          padding: 16px;
          background: #fbfaf6;
        }
        .card .h {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: bold;
          letter-spacing: 1.5px;
          color: #D06A4C;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .card p, .card li {
          font-size: 13px;
          line-height: 1.7;
        }
        .tools {
          font-family: var(--font-mono);
          font-size: 12px;
          color: #8C887A;
          border-top: 1px dashed #e6e1d9;
          margin-top: 22px;
          padding-top: 14px;
          line-height: 1.8;
        }
        .tools b {
          color: #3CA685;
        }
        .prose b {
          font-weight: 700;
          color: #141413;
        }
        @media (max-width: 640px) {
          .cards {
            grid-template-columns: 1fr;
          }
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
                <div className="subbox hi cat-ai" onClick={() => setSelectedKey('d3_vibe_games')}>
                  <span className="arrow">›</span>
                  <span className="age hi">{t.legendHi}</span>
                  <div className="bt">{t.d3vibegames}</div>
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
              <div className="pair grow">
                <div className="subbox lo cat-ai" onClick={() => setSelectedKey('d3_vibe_web')}>
                  <span className="arrow">›</span>
                  <span className="age lo">{t.legendLo}</span>
                  <div className="bt">{t.d3vibeweb}</div>
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
              <div className="blk c-team">
                <span className="tag">{t.legendTeam}</span>
                <div className="ttl">{t.d3discuss}</div>
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
