"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MaterialIcon } from "@/components/MaterialIcon";
import { useLanguage } from "@/lib/LanguageContext";

interface Detail {
  tag: string;
  when: string;
  title: string;
  html: string;
}

const DETAILS_ZH: Record<string, Detail> = {
  fin: {
    tag: "Morning · 个人理财",
    when: "每天晨间 · 营歌之后 · 约 5 分钟 · 全营合班",
    title: "晨间个人理财小常识",
    html: `
      <p class="text-body-md text-stone-600 mb-4">不单独占课时，做成<b>每天 5 分钟的滚动小主题</b>，插在营歌之后。形式是<b>提问 + 举手</b>，不讲大道理——抛一个生活场景，让孩子自己说，老师只点一句。</p>
      <h3 class="text-headline-md text-primary font-bold mt-6 mb-3">四天主题</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="border border-stone-200 rounded-xl p-4 bg-white shadow-sm">
          <div class="text-label-md text-primary font-mono tracking-wider mb-2">Day 2 · 需要 vs 想要</div>
          <p class="text-body-sm text-stone-600">买之前先问一句："我是真的<b>需要</b>它，还是只是<b>想要</b>它？"</p>
        </div>
        <div class="border border-stone-200 rounded-xl p-4 bg-white shadow-sm">
          <div class="text-label-md text-primary font-mono tracking-wider mb-2">Day 3 · 存钱罐的魔法</div>
          <p class="text-body-sm text-stone-600">每天存一点点，时间会让它悄悄变多——种下"延迟满足"的种子。</p>
        </div>
        <div class="border border-stone-200 rounded-xl p-4 bg-white shadow-sm">
          <div class="text-label-md text-primary font-mono tracking-wider mb-2">Day 4 · 一块钱怎么分</div>
          <p class="text-body-sm text-stone-600">把零花钱分进三个罐子：<b>花的 / 存的 / 帮别人的</b>。</p>
        </div>
        <div class="border border-stone-200 rounded-xl p-4 bg-white shadow-sm">
          <div class="text-label-md text-primary font-mono tracking-wider mb-2">Day 5 · 钱不睡觉</div>
          <p class="text-body-sm text-stone-600">钱可以帮我们"生钱"——用最简单的话讲清"投资"是怎么回事。</p>
        </div>
      </div>
      <div class="border-l-4 border-l-primary bg-primary/5 p-4 rounded-r-xl text-stone-700 italic text-body-sm mb-4">
        和 Day 2 上午的"生意账（收入-成本-利润）"呼应：生意账是<b>公司的钱</b>，晨间理财是<b>你自己的钱</b>，两条线一起长。
      </div>
    `
  },
  d2jiexi: {
    tag: "创业思维 · 分班进行",
    when: "Day 2 上午 · 第 1 段 · 两间屋 / 两个老师同时",
    title: "拆解主题：AI 能做什么",
    html: `
      <p class="text-body-md text-stone-600 mb-4">这是<b>三个分班环节中的第一个</b>（Day 4 商业分析、Day 5 路演表达也分班）。两个版本差别不在"换更难的案例"，而在<b>思考的层次</b>：小的看"AI 能做什么"，大的看"AI 改变了什么、代价是谁付"。</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="border border-stone-200 rounded-xl p-4 bg-white shadow-sm">
          <div class="text-label-md text-primary font-mono tracking-wider mb-2">版本 A · 10 岁以下 · 体验式</div>
          <ul class="list-disc pl-5 space-y-1 text-body-sm text-stone-600">
            <li><b>AI for fun</b>：即梦/可灵把照片变成会动的动漫角色（现场演）</li>
            <li><b>AI for good</b>：Be My Eyes — AI 帮盲人"看见"</li>
            <li><b>AI for learning</b>：现场用 AI 问一道难题，看它一步步教</li>
          </ul>
          <p class="text-body-sm text-stone-500 mt-3">结尾：每人贴贴纸投票"我最想做哪一类"。</p>
        </div>
        <div class="border border-stone-200 rounded-xl p-4 bg-white shadow-sm">
          <div class="text-label-md text-primary font-mono tracking-wider mb-2">版本 B · 10 岁以上 · 批判式</div>
          <ul class="list-disc pl-5 space-y-1 text-body-sm text-stone-600">
            <li><b>fun</b>：谁从你"刷到停不下来"里赚钱？</li>
            <li><b>good</b>：AI 看错了，谁负责？</li>
            <li><b>learning</b>：给答案 vs 教你思考，哪个真帮你？</li>
          </ul>
          <p class="text-body-sm text-stone-500 mt-3">加："找出第四类 AI"归纳练习 + 小型站队辩论。</p>
        </div>
      </div>
      <div class="border-l-4 border-l-primary bg-primary/5 p-4 rounded-r-xl text-stone-700 italic text-body-sm mb-4">
        带走的一句话 —— 小：<b>"AI 能做的事分好几种，我可以挑一种来做我的项目。"</b><br>大：<b>"每个产品都有受益的人，也有被影响的人——我要想清楚帮了谁、有没有副作用。"</b>（用户思维 → 负责任的创造者思维）
      </div>
      <div class="text-code text-xs text-stone-500 border-t border-stone-200 pt-3 mt-4">
        AI 工具：<b>即梦 / 可灵</b> · <b>Claude / 豆包</b>
      </div>
    `
  },
  d2biz: {
    tag: "创业思维 · 合班",
    when: "Day 2 上午 · 第 2 段 · 两班合回来一起上",
    title: "游戏、应用背后的商业 + 生意账",
    html: `
      <p class="text-body-md text-stone-600 mb-4">拆解主题之后两班合回来。用孩子最熟的两个产品，问一个扎心问题：<b>"它免费，那公司喝西北风吗？"</b></p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="border border-stone-200 rounded-xl p-4 bg-white shadow-sm">
          <div class="text-label-md text-primary font-mono tracking-wider mb-2">蛋仔派对 · 游戏</div>
          <p class="text-body-sm text-stone-600">免费玩，靠<b>卖皮肤</b>赚钱。关键点：皮肤<b>不增强战力</b>，卖的是"我想更酷"的<b>感觉</b>。</p>
        </div>
        <div class="border border-stone-200 rounded-xl p-4 bg-white shadow-sm">
          <div class="text-label-md text-primary font-mono tracking-wider mb-2">小红书 · 应用</div>
          <p class="text-body-sm text-stone-600">免费刷，靠<b>广告 + 带货抽成</b>。顺带一个媒体素养点：你刷到的"好物推荐"，背后可能是广告。</p>
        </div>
      </div>
      <h3 class="text-headline-md text-primary font-bold mt-6 mb-3">生意账：现场算一遍</h3>
      <div class="border-l-4 border-l-primary bg-primary/5 p-4 rounded-r-xl text-stone-700 italic text-body-sm mb-4">
        1000 个人玩，10 个人买了 6 块的皮肤 → 收入 60 块。<br>但服务器一个月要 30 块、画皮肤要发工资…… → 这叫<b>成本</b>。<br><b>收入 − 成本 = 利润。</b>
      </div>
      <p class="text-body-md text-stone-600 mb-4">由此引出一个反直觉点：<b>玩的人多 ≠ 一定赚钱</b>（没人买皮肤，服务器钱照付，反而亏）。</p>
      <h3 class="text-headline-md text-primary font-bold mt-6 mb-3">抓注意力机制</h3>
      <p class="text-body-md text-stone-600">单向讲<b>不超过 8 分钟</b>，每段插一个钩子：① 商业侦探（抢答"钱藏在哪"）② 真假辨别（AI 做的还是人做的，举牌站队）③ 现场试玩。</p>
      <div class="text-code text-xs text-stone-500 border-t border-stone-200 pt-3 mt-4">
        AI 工具：<b>Claude / 豆包</b>　|　产出：每个孩子对"我想做哪类、它怎么活下去"有初步答案
      </div>
    `
  },
  d3market: {
    tag: "市场与用户",
    when: "Day 2 上午 + 午休行动 + 整理",
    title: "市场与用户",
    html: `
      <h3 class="text-headline-md text-primary font-bold mt-6 mb-3">① 案例破题</h3>
      <div class="border-l-4 border-l-primary bg-primary/5 p-4 rounded-r-xl text-stone-700 italic text-body-sm mb-4">
        "有人在<b>游泳池边支了个摊卖热汤</b>，一碗没卖出去。" —— 产品没问题，错在<b>用户不对、地方不对</b>。
      </div>
      <p class="text-body-md text-stone-600 mb-4">点破：<b>市场 = 一群有相同需求的人；用户 = 具体的那个人。</b></p>
      <h3 class="text-headline-md text-primary font-bold mt-6 mb-3">② 确定我的市场 / 用户</h3>
      <p class="text-body-md text-stone-600 mb-4">每队回答："我的东西给谁？他们会在哪出现？"</p>
      <h3 class="text-headline-md text-primary font-bold mt-6 mb-3">③ AI 辅助调研</h3>
      <ul class="list-disc pl-5 space-y-1 text-body-sm text-stone-600 mb-4">
        <li>用 Claude/豆包生成<b>用户画像</b>："列 10 个可能用我产品的人，几岁、喜欢什么、有什么烦恼"</li>
        <li>用 AI 生成<b>问卷问题</b>（直接产出午休要用的问卷）</li>
      </ul>
      <h3 class="text-headline-md text-primary font-bold mt-6 mb-3">④ 午休行动 🥢</h3>
      <div class="border-l-4 border-l-primary bg-primary/5 p-4 rounded-r-xl text-stone-700 italic text-body-sm mb-4">
        孩子拿着问卷，去找营地里<b>参加其他营的小朋友</b>做问卷调查——真实用户、就在身边、时间天然对上。
      </div>
      <h3 class="text-headline-md text-primary font-bold mt-6 mb-3">⑤ 收集整理</h3>
      <p class="text-body-md text-stone-600">用 AI 帮忙归类问卷答案，找出共同的<b>痛点 / 需求</b>。</p>
      <div class="text-code text-xs text-stone-500 border-t border-stone-200 pt-3 mt-4">
        AI 工具：<b>Claude / 豆包</b>　|　产出：用户画像 + 一手问卷数据
      </div>
    `
  },
  d4analysis: {
    tag: "Tech × 商业 · 分班进行",
    when: "Day 4 上午 · 按 10 岁为界分班",
    title: "商业分析 / 竞品分析",
    html: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="border border-stone-200 rounded-xl p-4 bg-white shadow-sm">
          <div class="text-label-md text-primary font-mono tracking-wider mb-2">10 岁以下 · 认识"竞品"</div>
          <p class="text-body-sm text-stone-600 mb-2"><b>什么是竞品？</b>——一句话讲清："和你做同一件事、抢同一批用户的，就是你的竞品。"用孩子熟悉的例子破题（蜜雪冰城 vs 茶百道、蛋仔 vs 迷你世界）。</p>
          <p class="text-body-sm text-stone-600"><b>找找市场上哪些是我的竞品？为什么？</b>——每队列出 3-5 个候选，说明<b>"为什么它和我抢同一批用户"</b>。用 Claude 辅助搜索类似产品，生成简单对比表（叫什么 / 给谁用 / 有什么 / 缺什么）。</p>
        </div>
        <div class="border border-stone-200 rounded-xl p-4 bg-white shadow-sm">
          <div class="text-label-md text-primary font-mono tracking-wider mb-2">10 岁以上</div>
          <p class="text-body-sm text-stone-600 mb-2"><b>SWOT</b>：优势 / 劣势 / 机会 / 威胁，AI 辅助填四象限。</p>
          <p class="text-body-sm text-stone-600"><b>PEST（保留完整版）</b>：政治 / 经济 / 社会 / 技术——四个外部因素怎么影响我的项目，AI 辅助梳理。</p>
        </div>
      </div>
      <div class="text-code text-xs text-stone-500 border-t border-stone-200 pt-3 mt-4">
        AI 工具：<b>Claude</b>（竞品搜索 + 对比表 + 四象限辅助）　|　产出：竞品对比表（小）/ SWOT + PEST（大）
      </div>
    `
  },
  d5pitch: {
    tag: "Tech × 商业 · 分班进行",
    when: "Day 5 上午 · 按 10 岁为界分班",
    title: "AI 如何帮我们讲好故事 / 做路演",
    html: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="border border-stone-200 rounded-xl p-4 bg-white shadow-sm">
          <div class="text-label-md text-primary font-mono tracking-wider mb-2">10 岁以下 · 讲故事 + AI 漫画</div>
          <p class="text-body-sm text-stone-600 mb-2">最简英雄结构：<b>有个人遇到麻烦 → 用了我的产品 → 变开心了。</b></p>
          <p class="text-body-sm text-stone-600">用即梦 / Midjourney 出 3–4 格漫画分镜。</p>
        </div>
        <div class="border border-stone-200 rounded-xl p-4 bg-white shadow-sm">
          <div class="text-label-md text-primary font-mono tracking-wider mb-2">10 岁以上 · AI 做 HTML slides</div>
          <p class="text-body-sm text-stone-600">用 Claude 生成 <b>HTML 形式的 slides</b>，和下午学的 vibe coding 一脉相承，自己改标题、配色、加动画。</p>
        </div>
      </div>
      <h3 class="text-headline-md text-primary font-bold mt-6 mb-3">路演语言重心（两班统一）</h3>
      <div class="border-l-4 border-l-primary bg-primary/5 p-4 rounded-r-xl text-stone-700 italic text-body-sm mb-4">
        必须讲出<b>"我访谈的那个人是谁、他说了什么"</b>——把用户的真实声音作为说服评委的最强武器。这样"用户思维"和"卖给评委"就不打架。
      </div>
      <div class="text-code text-xs text-stone-500 border-t border-stone-200 pt-3 mt-4">
        AI 工具：<b>即梦 / Midjourney</b>（小）· <b>Claude</b>（大）　|　产出：项目漫画 / HTML slides
      </div>
    `
  },
  d2empathy: {
    tag: "创业思维",
    when: "Day 2 下午",
    title: "共情力 — 发现痛点、头脑风暴",
    html: `
      <p class="text-body-md text-stone-600 mb-4">上午建立了"用户思维"的概念，下午落到具体动作：<b>从"我讨厌 / 不爽的事"出发找痛点</b>。这接住了 Day 1 收尾埋的钩子——"最好的产品，都是从'讨厌'开始的"。</p>
      <ul class="list-disc pl-5 space-y-1 text-body-sm text-stone-600 mb-4">
        <li>每个孩子写下 3 件"最近让我抓狂 / 麻烦"的事</li>
        <li>小组分享 → 找出"原来大家都烦这个"的共同痛点</li>
        <li>用 AI 围绕痛点头脑风暴可能的解法方向</li>
      </ul>
      <div class="border-l-4 border-l-primary bg-primary/5 p-4 rounded-r-xl text-stone-700 italic text-body-sm mb-4">
        衔接：这里产出的痛点，正是 Day 3"市场与用户"要去验证的对象。
      </div>
      <div class="text-code text-xs text-stone-500 border-t border-stone-200 pt-3 mt-4">
        这是商业主线在下午的延伸环节，详细流程可在确认上午手册后一并细化。
      </div>
    `
  },
  d1open: {
    tag: "Opening",
    when: "Day 1 下午",
    title: "开营仪式：主题拆解 + 营规共创",
    html: `
      <p class="text-body-md text-stone-600 mb-4">开营魔法秀、6 天目标介绍、营地规则共创（孩子自己定规矩、签字按手印）。</p>
      <div class="border-l-4 border-l-primary bg-primary/5 p-4 rounded-r-xl text-stone-700 italic text-body-sm">
        这一环节已有完整执行手册 —— 见项目里的 <b>Day1_执行手册</b>。
      </div>
    `
  },
  d1ice: {
    tag: "Ice Breaking",
    when: "Day 1 晚间",
    title: "破冰游戏 · 分组 · 队伍三件套",
    html: `
      <p class="text-body-md text-stone-600 mb-4">名字大轮转、AI 猜猜猜、找朋友 Bingo、分组揭晓、队名/队徽/队歌三件套。</p>
      <div class="border-l-4 border-l-primary bg-primary/5 p-4 rounded-r-xl text-stone-700 italic text-body-sm">
        这一环节已有完整执行手册 —— 见项目里的 <b>Day1_执行手册</b>。
      </div>
    `
  }
};

const DETAILS_EN: Record<string, Detail> = {
  fin: {
    tag: "Morning · Personal Finance",
    when: "Daily Morning · After Camp Song · ~5 mins · All Cohorts",
    title: "Morning Personal Finance Tips",
    html: `
      <p class="text-body-md text-stone-600 mb-4">No dedicated slot. Conducted as a <b>daily 5-minute rolling micro-topic</b> right after the camp song. Format: <b>Q&A + hands-on scenarios</b>, avoiding abstract lectures. We present a real-life situation, let kids share their thoughts, and the teacher sums it up with a single key takeaway.</p>
      <h3 class="text-headline-md text-primary font-bold mt-6 mb-3">4-Day Themes</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="border border-stone-200 rounded-xl p-4 bg-white shadow-sm">
          <div class="text-label-md text-primary font-mono tracking-wider mb-2">Day 2 · Needs vs. Wants</div>
          <p class="text-body-sm text-stone-600">Before buying, ask: "Do I really <b>need</b> it, or do I just <b>want</b> it?"</p>
        </div>
        <div class="border border-stone-200 rounded-xl p-4 bg-white shadow-sm">
          <div class="text-label-md text-primary font-mono tracking-wider mb-2">Day 3 · Magic of Piggy Bank</div>
          <p class="text-body-sm text-stone-600">Save a tiny bit daily. Time will multiply it quietly—planting the seed of "delayed gratification."</p>
        </div>
        <div class="border border-stone-200 rounded-xl p-4 bg-white shadow-sm">
          <div class="text-label-md text-primary font-mono tracking-wider mb-2">Day 4 · Splitting a Dollar</div>
          <p class="text-body-sm text-stone-600">Divide pocket money into three piggy banks: <b>To Spend / To Save / To Help Others</b>.</p>
        </div>
        <div class="border border-stone-200 rounded-xl p-4 bg-white shadow-sm">
          <div class="text-label-md text-primary font-mono tracking-wider mb-2">Day 5 · Money Never Sleeps</div>
          <p class="text-body-sm text-stone-600">Money can help us "make money"—explaining the concept of "investment" in simplest terms.</p>
        </div>
      </div>
      <div class="border-l-4 border-l-primary bg-primary/5 p-4 rounded-r-xl text-stone-700 italic text-body-sm mb-4">
        Echoing Day 2 Morning's "Business Equation (Revenue - Cost = Profit)": the business equation is about <b>the company's money</b>, while morning finance is about <b>your own money</b>. Both lines grow together.
      </div>
    `
  },
  d2jiexi: {
    tag: "Founder Mindset · Split Cohorts",
    when: "Day 2 Morning · Session 1 · Two rooms / Two teachers simultaneously",
    title: "Deconstruction: What Can AI Do?",
    html: `
      <p class="text-body-md text-stone-600 mb-4">This is the <b>first of three split sessions</b> (the others being Day 4 Business Analysis and Day 5 Roadshow Expression). The difference between the cohorts is not in "using harder cases" but in the <b>depth of thinking</b>: younger kids look at "what AI can do," while older ones analyze "what AI changed and who pays the price."</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="border border-stone-200 rounded-xl p-4 bg-white shadow-sm">
          <div class="text-label-md text-primary font-mono tracking-wider mb-2">Version A · Under 10 · Experiential</div>
          <ul class="list-disc pl-5 space-y-1 text-body-sm text-stone-600">
            <li><b>AI for fun</b>: Live demo converting photos into moving anime characters using Jimeng/Kling.</li>
            <li><b>AI for good</b>: Be My Eyes — how AI helps visually impaired people "see."</li>
            <li><b>AI for learning</b>: Live prompting to ask AI a hard question and watch it teach step-by-step.</li>
          </ul>
          <p class="text-body-sm text-stone-500 mt-3">Wrap-up: Sticker voting on "Which category I want to build."</p>
        </div>
        <div class="border border-stone-200 rounded-xl p-4 bg-white shadow-sm">
          <div class="text-label-md text-primary font-mono tracking-wider mb-2">Version B · Age 10+ · Critical</div>
          <ul class="list-disc pl-5 space-y-1 text-body-sm text-stone-600">
            <li><b>fun</b>: Who profits from keeping you scrolling endlessly?</li>
            <li><b>good</b>: When AI hallucinates or makes a mistake, who is held responsible?</li>
            <li><b>learning</b>: Getting answers vs. learning to think—which one actually helps you?</li>
          </ul>
          <p class="text-body-sm text-stone-500 mt-3">Addition: "Identify the 4th category of AI" synthesis exercise + mini debate.</p>
        </div>
      </div>
      <div class="border-l-4 border-l-primary bg-primary/5 p-4 rounded-r-xl text-stone-700 italic text-body-sm mb-4">
        Takeaway phrase —— Younger: <b>"There are several types of things AI can do, and I can choose one for my project."</b><br>Older: <b>"Every product has beneficiaries and people who get impacted. I need to be clear about who I am helping and whether there are side effects."</b> (User Mindset → Responsible Creator Mindset)
      </div>
      <div class="text-code text-xs text-stone-500 border-t border-stone-200 pt-3 mt-4">
        AI Tools: <b>Jimeng / Kling</b> · <b>Claude / Doubao</b>
      </div>
    `
  },
  d2biz: {
    tag: "Founder Mindset · Combined",
    when: "Day 2 Morning · Session 2 · Combined cohort",
    title: "Business Behind Games & Apps + Financial Ledger",
    html: `
      <p class="text-body-md text-stone-600 mb-4">After splitting up, cohorts merge back together. Using the two products kids know best, we ask a piercing question: <b>"If it is free, how does the company survive?"</b></p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="border border-stone-200 rounded-xl p-4 bg-white shadow-sm">
          <div class="text-label-md text-primary font-mono tracking-wider mb-2">Eggy Party · Game</div>
          <p class="text-body-sm text-stone-600">Free to play, monetizes via <b>selling skins</b>. Key point: skins <b>do not increase stats</b>; they sell the <b>feeling</b> of wanting to look cool.</p>
        </div>
        <div class="border border-stone-200 rounded-xl p-4 bg-white shadow-sm">
          <div class="text-label-md text-primary font-mono tracking-wider mb-2">Xiaohongshu (RED) · App</div>
          <p class="text-body-sm text-stone-600">Free to browse, monetizes via <b>ads + e-commerce commission</b>. Side topic on media literacy: the "awesome items" recommended on your feed might actually be paid ads.</p>
        </div>
      </div>
      <h3 class="text-headline-md text-primary font-bold mt-6 mb-3">Ledger Math: Live Calculation</h3>
      <div class="border-l-4 border-l-primary bg-primary/5 p-4 rounded-r-xl text-stone-700 italic text-body-sm mb-4">
        1,000 players, 10 buy a skin for $1 each → Revenue: $10.<br>But monthly server cost is $5, artists' salary is $8... → These are <b>Costs</b>.<br><b>Revenue - Cost = Profit.</b>
      </div>
      <p class="text-body-md text-stone-600 mb-4">This leads to a counter-intuitive insight: <b>high user count ≠ profitable</b> (if no one buys skins but server costs keep mounting, the company loses money).</p>
      <h3 class="text-headline-md text-primary font-bold mt-6 mb-3">Attention Anchoring Mechanisms</h3>
      <p class="text-body-md text-stone-600">Lectures do not exceed <b>8 minutes straight</b>. Every segment has a hook: ① Business Detectives (spot where the money is hidden) ② Real vs. AI (identify AI creations and vote) ③ Live interactive trial.</p>
      <div class="text-code text-xs text-stone-500 border-t border-stone-200 pt-3 mt-4">
        AI Tools: <b>Claude / Doubao</b> | Output: Each child has a basic concept of "what I want to build and how it stays alive."
      </div>
    `
  },
  d3market: {
    tag: "Market & User",
    when: "Day 2 Morning + Lunch Action + Sync",
    title: "Market and Users",
    html: `
      <h3 class="text-headline-md text-primary font-bold mt-6 mb-3">① Case Study Hook</h3>
      <div class="border-l-4 border-l-primary bg-primary/5 p-4 rounded-r-xl text-stone-700 italic text-body-sm mb-4">
        "Someone set up a booth selling hot soup right next to a swimming pool in summer, and didn't sell a single bowl." —— The product is fine, but the <b>users are wrong, and the location is wrong</b>.
      </div>
      <p class="text-body-md text-stone-600 mb-4">Core concept: <b>Market = a group of people with the same pain point; User = that specific individual.</b></p>
      <h3 class="text-headline-md text-primary font-bold mt-6 mb-3">② Define My Market / Users</h3>
      <p class="text-body-md text-stone-600 mb-4">Each team answers: "Who is my product for? Where do they usually gather?"</p>
      <h3 class="text-headline-md text-primary font-bold mt-6 mb-3">③ AI-Assisted Research</h3>
      <ul class="list-disc pl-5 space-y-1 text-body-sm text-stone-600 mb-4">
        <li>Use Claude/Doubao to generate a <b>user persona</b>: "List 10 potential users of my product, their age, likes, and frustrations."</li>
        <li>Use AI to draft <b>survey questions</b> (instant output for the lunch survey session).</li>
      </ul>
      <h3 class="text-headline-md text-primary font-bold mt-6 mb-3">④ Lunch Survey Mission 🥢</h3>
      <div class="border-l-4 border-l-primary bg-primary/5 p-4 rounded-r-xl text-stone-700 italic text-body-sm mb-4">
        Kids print out surveys and interview <b>campers in other programs</b> during lunch break—real users, right next to them.
      </div>
      <h3 class="text-headline-md text-primary font-bold mt-6 mb-3">⑤ Synthesis & Sync</h3>
      <p class="text-body-md text-stone-600">Use AI to categorize survey responses, uncovering common <b>frustrations / requirements</b>.</p>
      <div class="text-code text-xs text-stone-500 border-t border-stone-200 pt-3 mt-4">
        AI Tools: <b>Claude / Doubao</b> | Output: User personas + primary survey data.
      </div>
    `
  },
  d4analysis: {
    tag: "Tech × Business · Split Cohorts",
    when: "Day 4 Morning · Split by age (10 years cutoff)",
    title: "Business Analysis & Competitive Landscapes",
    html: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="border border-stone-200 rounded-xl p-4 bg-white shadow-sm">
          <div class="text-label-md text-primary font-mono tracking-wider mb-2">Under 10 · What is a "Competitor"?</div>
          <p class="text-body-sm text-stone-600 mb-2"><b>What is a competitor?</b> — Simple explanation: "Whoever does the same thing as you and targets the same users is your competitor." Break it down using examples they know (Mixue vs. Chagee, Eggy Party vs. Roblox).</p>
          <p class="text-body-sm text-stone-600"><b>Find who my competitors are in the market.</b> — Each team lists 3-5 candidates and explains why they compete. Use Claude to search for similar products and generate a comparison table (Name / Target User / Strengths / Gaps).</p>
        </div>
        <div class="border border-stone-200 rounded-xl p-4 bg-white shadow-sm">
          <div class="text-label-md text-primary font-mono tracking-wider mb-2">Age 10+</div>
          <p class="text-body-sm text-stone-600 mb-2"><b>SWOT</b>: Strengths, Weaknesses, Opportunities, Threats. AI-assisted analysis of their own project.</p>
          <p class="text-body-sm text-stone-600"><b>PEST</b>: Political, Economic, Social, Technological — how these external factors impact their venture, structured using AI templates.</p>
        </div>
      </div>
      <div class="text-code text-xs text-stone-500 border-t border-stone-200 pt-3 mt-4">
        AI Tools: <b>Claude</b> (competitor research + comparison tables + SWOT/PEST frameworks) | Output: Competitive analysis table (Younger) / SWOT + PEST (Older).
      </div>
    `
  },
  d5pitch: {
    tag: "Tech × Business · Split Cohorts",
    when: "Day 5 Morning · Split by age (10 years cutoff)",
    title: "How AI Helps Us Tell Stories / Pitch Ideas",
    html: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="border border-stone-200 rounded-xl p-4 bg-white shadow-sm">
          <div class="text-label-md text-primary font-mono tracking-wider mb-2">Under 10 · Storyboarding + AI Comic</div>
          <p class="text-body-sm text-stone-600 mb-2">Hero's Journey formula: <b>Someone hits a wall → uses my product → problem solved, happy ending.</b></p>
          <p class="text-body-sm text-stone-600">Use Jimeng / Midjourney to generate a 3–4 panel comic storyboard.</p>
        </div>
        <div class="border border-stone-200 rounded-xl p-4 bg-white shadow-sm">
          <div class="text-label-md text-primary font-mono tracking-wider mb-2">Age 10+ · AI-Generated HTML Slides</div>
          <p class="text-body-sm text-stone-600">Use Claude to code <b>HTML-based interactive slides</b>. This aligns with the vibe coding mindset, allowing them to customize typography, colors, and layout animations directly.</p>
        </div>
      </div>
      <h3 class="text-headline-md text-primary font-bold mt-6 mb-3">Pitch Tone & Core Focus (Unified)</h3>
      <div class="border-l-4 border-l-primary bg-primary/5 p-4 rounded-r-xl text-stone-700 italic text-body-sm mb-4">
        Teams must highlight <b>"Who we interviewed and what they said"</b>—using actual user quotes as their ultimate leverage to convince the judges.
      </div>
      <div class="text-code text-xs text-stone-500 border-t border-stone-200 pt-3 mt-4">
        AI Tools: <b>Jimeng / Midjourney</b> (Younger) · <b>Claude</b> (Older) | Output: Project comic storyboard / Interactive HTML slides.
      </div>
    `
  },
  d2empathy: {
    tag: "Founder Mindset",
    when: "Day 2 Afternoon",
    title: "Empathy — Uncovering Frustrations, Brainstorming Solutions",
    html: `
      <p class="text-body-md text-stone-600 mb-4">Morning built the "user-first" foundation; afternoon turns it into actions: <b>Start from what frustrates me to find pain points</b>. This connects with Day 1's hook: "The best products always start with an annoyance."</p>
      <ul class="list-disc pl-5 space-y-1 text-body-sm text-stone-600 mb-4">
        <li>Each child writes down 3 things that annoyed them recently.</li>
        <li>Group share → identify the common friction points where "we all hate this."</li>
        <li>Brainstorm potential solution directions with AI.</li>
      </ul>
      <div class="border-l-4 border-l-primary bg-primary/5 p-4 rounded-r-xl text-stone-700 italic text-body-sm mb-4">
        Connection: The frustrations discovered here are precisely what will be validated on Day 3 during "Market & Users."
      </div>
    `
  },
  d1open: {
    tag: "Opening",
    when: "Day 1 Afternoon",
    title: "Opening Ceremony: Goal Settings & Class Contract",
    html: `
      <p class="text-body-md text-stone-600 mb-4">Opening magic show, introducing the 6-day path, and collaborative rules creation (kids write rules, sign, and stamp fingerprint).</p>
      <div class="border-l-4 border-l-primary bg-primary/5 p-4 rounded-r-xl text-stone-700 italic text-body-sm">
        This session has a detailed operational manual — refer to <b>Day1_Manual</b> in the project files.
      </div>
    `
  },
  d1ice: {
    tag: "Ice Breaking",
    when: "Day 1 Evening",
    title: "Icebreaking games · Team assembly · Branding",
    html: `
      <p class="text-body-md text-stone-600 mb-4">Name rotations, AI Guessing, Friend Bingo, team announcements, and designing team names, logos, and themes.</p>
      <div class="border-l-4 border-l-primary bg-primary/5 p-4 rounded-r-xl text-stone-700 italic text-body-sm">
        This session has a detailed operational manual — refer to <b>Day1_Manual</b> in the project files.
      </div>
    `
  }
};

const content = {
  en: {
    title: "6-Day Timetable · ",
    titleHighlight: "Business Curriculum Design",
    subtitle: "Click the orange and morning slots with a › to view detailed course designs. The business curriculum runs from Day 2–5 morning, and personal finance tips are integrated into daily morning sessions.",
    colDay1: "DAY 1",
    colDay2: "DAY 2",
    colDay3: "DAY 3",
    colDay4: "DAY 4",
    colDay5: "DAY 5",
    colDay6: "DAY 6",
    subDay1: "Onboarding",
    subDay2: "Founder Mindset",
    subDay3: "Market & User",
    subDay4: "Business Analysis",
    subDay5: "Roadshow Prep",
    subDay6: "Demo Day",
    rowMorning: "Morning",
    rowMorningSession: "AM",
    rowAfternoonSession: "PM",
    rowEveningSession: "NIGHT",
    fin1: "Personal Finance · Needs vs Wants",
    fin2: "Personal Finance · Magic Piggy Bank",
    fin3: "Personal Finance · Splitting a Dollar",
    fin4: "Personal Finance · Money Never Sleeps",
    d2jiexiTtl: "AI for fun / good / learning",
    d2jiexiMeta: "Under & Over 10 versions",
    d2bizTtl: "Business Behind Games & Ledger",
    d2bizMeta: "Eggy Party · RED · Calculations",
    d3marketTtl: "Market and Users",
    d3marketMeta: "Incl. AI Research & Lunch Survey",
    seedIdeaTtl: "Define Seed Idea",
    competitorTtl: "Competitor Landscapes",
    competitorMeta: "Under 10: Comp Tables · Over 10: SWOT/PEST",
    gddPrdTtl: "Lock GDD/PRD",
    narrativeTtl: "How AI Tells Stories",
    narrativeMeta: "Under 10: Comic · Over 10: HTML slides",
    slidesTtl: "Build Slides with AI",
    pitchBootcamp: "Pitch Bootcamp",
    openingManualTtl: "Opening: Goals & Rules",
    openingManualMeta: "Refer to Day 1 Manual",
    aiBasicsTtl: "AI Basics & Prompting",
    empathyTtl: "Empathy & Brainstorming",
    vibeCodingGames: "Vibe Coding — Games",
    vibeCodingWeb: "Vibe Coding — Web & Apps",
    favAppReview: "Analyze Your Fav App/Game",
    buildMvp: "Build MVP",
    syncReview: "Sync + Review",
    iterateMvp: "Iterate MVP & Pitch",
    projectRoadshow: "Project Roadshow",
    icebreakBranding: "Icebreaking & Team branding",
    draftBlueprint: "Draft Business Blueprint",
    writeGddPrd: "Write GDD / PRD",
    mvpMidnight: "MVP Midnight Sprint",
    catBiz: "Founder Mindset / Biz",
    catTech: "Tech Boost",
    catTeam: "Teamwork",
    catShare: "Review",
    catPresent: "Presentation",
    catCream: "Morning Finance",
  },
  zh: {
    title: "6 天课程表 · ",
    titleHighlight: "商业板块设计",
    subtitle: "点击带 › 的绿色与晨间板块，查看该环节的详细设计。商业主线贯穿 Day 2–5 上午，晨间穿插个人理财小常识。",
    colDay1: "DAY 1",
    colDay2: "DAY 2",
    colDay3: "DAY 3",
    colDay4: "DAY 4",
    colDay5: "DAY 5",
    colDay6: "DAY 6",
    subDay1: "开营 · 破冰",
    subDay2: "创业思维启蒙",
    subDay3: "市场与用户",
    subDay4: "商业分析",
    subDay5: "路演表达",
    subDay6: "路演日",
    rowMorning: "晨间",
    rowMorningSession: "上午",
    rowAfternoonSession: "下午",
    rowEveningSession: "晚间",
    fin1: "个人理财 · 需要 vs 想要",
    fin2: "个人理财 · 存钱罐的魔法",
    fin3: "个人理财 · 一块钱怎么分",
    fin4: "个人理财 · 钱不睡觉",
    d2jiexiTtl: "拆解主题：AI for fun / good / learning",
    d2jiexiMeta: "10岁以下 & 以上 两个版本",
    d2bizTtl: "游戏、应用背后的\"商业\" + 生意账",
    d2bizMeta: "蛋仔派对 · 小红书 · 算账",
    d3marketTtl: "市场与用户",
    d3marketMeta: "含 AI 调研 + 午休问卷行动",
    seedIdeaTtl: "初步确定\"创业项目\"",
    competitorTtl: "商业分析 / 竞品分析",
    competitorMeta: "小：认识竞品 · 大：SWOT + PEST",
    gddPrdTtl: "完善 GDD / PRD",
    narrativeTtl: "AI 如何帮我们讲好故事",
    narrativeMeta: "小：AI 漫画 · 大：HTML slides",
    slidesTtl: "用 AI 完成路演材料",
    pitchBootcamp: "演讲集训",
    openingManualTtl: "开营仪式：主题拆解 + 营规共创",
    openingManualMeta: "详见 Day 1 执行手册",
    aiBasicsTtl: "什么是 AI，如何 prompting？",
    empathyTtl: "共情力 — 发现痛点、头脑风暴",
    vibeCodingGames: "Vibe Coding — Games",
    vibeCodingWeb: "Vibe Coding — Web & Apps",
    favAppReview: "拆解你最喜欢的游戏 / 应用",
    buildMvp: "打造 MVP",
    syncReview: "分享 + 复盘",
    iterateMvp: "继续完善 MVP 及路演",
    projectRoadshow: "项目路演",
    icebreakBranding: "破冰游戏 · 分组 · 队伍三件套",
    draftBlueprint: "开始策划你的创业蓝图",
    writeGddPrd: "确定小组 GDD / PRD",
    mvpMidnight: "MVP 冲刺前夜",
    catBiz: "创业思维 / 商业",
    catTech: "Tech Boost",
    catTeam: "Teamwork / 小组",
    catShare: "分享 / 复盘",
    catPresent: "演讲活动",
    catCream: "晨间 · 理财",
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
          grid-template-columns: 54px repeat(6, minmax(168px, 1fr));
          column-gap: 8px;
          row-gap: 6px;
          min-width: 1120px;
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
          gap: 0;
        }
        .cell .blk {
          flex: 1 1 auto;
        }
        .cell .blk:not(:first-child) {
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          border-top: 0;
          margin-top: 0;
        }
        .cell .blk:not(:last-child) {
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
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
          opacity: 0.5;
        }
      `}</style>

      <Header variant="white" />
      <main className="max-w-screen-xl mx-auto px-4 md:px-gutter py-24 mt-4">
        <header className="flex flex-col items-center text-center gap-md mb-16 max-w-4xl mx-auto">
          <h1 className="text-[40px] md:text-[64px] font-semibold leading-tight text-stone-900">
            {t.title}<span className="text-primary font-black">{t.titleHighlight}</span>
          </h1>
          <p className="text-body-lg text-secondary max-w-2xl">
            {t.subtitle}
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8 select-none">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono">
            <span className="w-3 h-3 rounded bg-primary" /> {t.catBiz}
          </span>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono">
            <span className="w-3 h-3 rounded bg-[#3CA685]" /> {t.catTech}
          </span>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono">
            <span className="w-3 h-3 rounded bg-[#D4A313]" /> {t.catTeam}
          </span>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono">
            <span className="w-3 h-3 rounded bg-[#4A89C8]" /> {t.catShare}
          </span>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono">
            <span className="w-3 h-3 rounded bg-[#9B70C8]" /> {t.catPresent}
          </span>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono">
            <span className="w-3 h-3 rounded bg-[#B0985E]" /> {t.catCream}
          </span>
        </div>

        <div className="overflow-x-auto pb-4 mb-20 bg-stone-50/50 p-4 rounded-2xl border border-stone-200/50">
          <div className="timetable-grid">
            {/* Header row */}
            <div className="corner" />
            <div className="bg-white border border-stone-200 rounded-lg p-3 shadow-sm"><div className="font-mono font-bold text-base tracking-wide text-stone-800">{t.colDay1}</div><div className="text-xs text-stone-500 mt-1">{t.subDay1}</div></div>
            <div className="bg-white border border-stone-200 rounded-lg p-3 shadow-sm"><div className="font-mono font-bold text-base tracking-wide text-stone-800">{t.colDay2}</div><div className="text-xs text-stone-500 mt-1">{t.subDay2}</div></div>
            <div className="bg-white border border-stone-200 rounded-lg p-3 shadow-sm"><div className="font-mono font-bold text-base tracking-wide text-stone-800">{t.colDay3}</div><div className="text-xs text-stone-500 mt-1">{t.subDay3}</div></div>
            <div className="bg-white border border-stone-200 rounded-lg p-3 shadow-sm"><div className="font-mono font-bold text-base tracking-wide text-stone-800">{t.colDay4}</div><div className="text-xs text-stone-500 mt-1">{t.subDay4}</div></div>
            <div className="bg-white border border-stone-200 rounded-lg p-3 shadow-sm"><div className="font-mono font-bold text-base tracking-wide text-stone-800">{t.colDay5}</div><div className="text-xs text-stone-500 mt-1">{t.subDay5}</div></div>
            <div className="bg-white border border-stone-200 rounded-lg p-3 shadow-sm"><div className="font-mono font-bold text-base tracking-wide text-stone-800">{t.colDay6}</div><div className="text-xs text-stone-500 mt-1">{t.subDay6}</div></div>

            {/* Row: 晨间 */}
            <div className="rlabel">{t.rowMorning}</div>
            <div className="cell"><div className="empty" /></div>
            <div className="cell"><div className="blk click c-cream" onClick={() => setSelectedKey('fin')}><span className="arrow">›</span><span className="tag">Morning</span><div className="ttl">{t.fin1}</div><div className="meta">5 Min</div></div></div>
            <div className="cell"><div className="blk click c-cream" onClick={() => setSelectedKey('fin')}><span className="arrow">›</span><span className="tag">Morning</span><div className="ttl">{t.fin2}</div><div className="meta">5 Min</div></div></div>
            <div className="cell"><div className="blk click c-cream" onClick={() => setSelectedKey('fin')}><span className="arrow">›</span><span className="tag">Morning</span><div className="ttl">{t.fin3}</div><div className="meta">5 Min</div></div></div>
            <div className="cell"><div className="blk click c-cream" onClick={() => setSelectedKey('fin')}><span className="arrow">›</span><span className="tag">Morning</span><div className="ttl">{t.fin4}</div><div className="meta">5 Min</div></div></div>
            <div className="cell"><div className="empty" /></div>

            {/* Row: 上午 */}
            <div className="rlabel">{t.rowMorningSession}</div>
            <div className="cell"><div className="empty" /></div>
            <div className="cell">
              <div className="blk click star c-biz" onClick={() => setSelectedKey('d2jiexi')}><span className="arrow">›</span><span className="tag">{t.catBiz}</span><div className="ttl">{t.d2jiexiTtl}</div><div className="meta">{t.d2jiexiMeta}</div></div>
              <div className="blk click star c-biz" onClick={() => setSelectedKey('d2biz')}><span className="arrow">›</span><span className="tag">{t.catBiz}</span><div className="ttl">{t.d2bizTtl}</div><div className="meta">{t.d2bizMeta}</div></div>
            </div>
            <div className="cell">
              <div className="blk click star c-biz" onClick={() => setSelectedKey('d3market')}><span className="arrow">›</span><span className="tag">{t.catBiz}</span><div className="ttl">{t.d3marketTtl}</div><div className="meta">{t.d3marketMeta}</div></div>
              <div className="blk c-team"><span className="tag">{t.catTeam}</span><div className="ttl">{t.seedIdeaTtl}</div></div>
            </div>
            <div className="cell">
              <div className="blk click star c-biz" onClick={() => setSelectedKey('d4analysis')}><span className="arrow">›</span><span className="tag">{t.catBiz}</span><div className="ttl">{t.competitorTtl}</div><div className="meta">{t.competitorMeta}</div></div>
              <div className="blk c-team"><span className="tag">{t.catTeam}</span><div className="ttl">{t.gddPrdTtl}</div></div>
            </div>
            <div className="cell">
              <div className="blk click star c-biz" onClick={() => setSelectedKey('d5pitch')}><span className="arrow">›</span><span className="tag">{t.catBiz}</span><div className="ttl">{t.narrativeTtl}</div><div className="meta">{t.narrativeMeta}</div></div>
              <div className="blk c-team"><span className="tag">{t.catTeam}</span><div className="ttl">{t.slidesTtl}</div></div>
            </div>
            <div className="cell">
              <div className="blk c-present"><span className="tag">{t.catPresent}</span><div className="ttl">{t.pitchBootcamp}</div></div>
            </div>

            {/* Row: 下午 */}
            <div className="rlabel">{t.rowAfternoonSession}</div>
            <div className="cell">
              <div className="blk click c-biz" onClick={() => setSelectedKey('d1open')}><span className="arrow">›</span><span className="tag">Opening</span><div className="ttl">{t.openingManualTtl}</div><div className="meta">{t.openingManualMeta}</div></div>
            </div>
            <div className="cell">
              <div className="blk c-tech"><span className="tag">{t.catTech}</span><div className="ttl">{t.aiBasicsTtl}</div></div>
              <div className="blk click star c-biz" onClick={() => setSelectedKey('d2empathy')}><span className="arrow">›</span><span className="tag">{t.catBiz}</span><div className="ttl">{t.empathyTtl}</div></div>
            </div>
            <div className="cell">
              <div className="blk c-tech"><span className="tag">{t.catTech}</span><div className="ttl">{t.vibeCodingGames}</div></div>
              <div className="blk c-tech"><span className="tag">{t.catTech}</span><div className="ttl">{t.vibeCodingWeb}</div></div>
              <div className="blk c-share"><span className="tag">{t.catShare}</span><div className="ttl">{t.favAppReview}</div></div>
            </div>
            <div className="cell">
              <div className="blk c-team"><span className="tag">{t.catTeam}</span><div className="ttl">{t.buildMvp}</div></div>
              <div className="blk c-share"><span className="tag">{t.catShare}</span><div className="ttl">{t.syncReview}</div></div>
            </div>
            <div className="cell">
              <div className="blk c-team"><span className="tag">{t.catTeam}</span><div className="ttl">{t.iterateMvp}</div></div>
              <div className="blk c-share"><span className="tag">{t.catShare}</span><div className="ttl">{t.syncReview}</div></div>
            </div>
            <div className="cell">
              <div className="blk c-show"><span className="tag">Showtime</span><div className="ttl">{t.projectRoadshow}</div></div>
            </div>

            {/* Row: 晚间 */}
            <div className="rlabel">{t.rowEveningSession}</div>
            <div className="cell">
              <div className="blk click c-biz" onClick={() => setSelectedKey('d1ice')}><span className="arrow">›</span><span className="tag">Ice Breaking</span><div className="ttl">{t.icebreakBranding}</div><div className="meta">{t.openingManualMeta}</div></div>
            </div>
            <div className="cell"><div className="blk c-team"><span className="tag">{t.catTeam}</span><div className="ttl">{t.draftBlueprint}</div></div></div>
            <div className="cell"><div className="blk c-team"><span className="tag">{t.catTeam}</span><div className="ttl">{t.writeGddPrd}</div></div></div>
            <div className="cell"><div className="blk c-team"><span className="tag">{t.catTeam}</span><div className="ttl">{t.buildMvp}</div></div></div>
            <div className="cell"><div className="blk c-team"><span className="tag">{t.catTeam}</span><div className="ttl">{t.iterateMvp}</div></div></div>
            <div className="cell"><div className="empty" /></div>
          </div>
        </div>
      </main>

      {/* Overlay Modal */}
      {selectedKey && (
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
            <h2 className="text-headline-lg text-stone-900 font-bold mb-1 leading-tight">
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
