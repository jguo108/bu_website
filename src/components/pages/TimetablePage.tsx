"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MaterialIcon } from "@/components/MaterialIcon";

interface Detail {
  tag: string;
  when: string;
  title: string;
  html: string;
}

const DETAILS: Record<string, Detail> = {
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

export function TimetablePage() {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

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
            6 天课程表 · <span className="text-primary font-black">商业板块设计</span>
          </h1>
          <p className="text-body-lg text-secondary max-w-2xl">
            点击带 <span className="text-primary font-semibold">›</span> 的橙色与晨间板块，查看该环节的详细设计。商业主线贯穿 Day 2–5 上午，晨间穿插个人理财小常识。
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono">
            <span className="w-3 h-3 rounded bg-primary" /> 创业思维 / 商业
          </span>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono">
            <span className="w-3 h-3 rounded bg-[#3CA685]" /> Tech Boost
          </span>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono">
            <span className="w-3 h-3 rounded bg-[#D4A313]" /> Teamwork / 小组
          </span>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono">
            <span className="w-3 h-3 rounded bg-[#4A89C8]" /> 分享 / 复盘
          </span>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono">
            <span className="w-3 h-3 rounded bg-[#9B70C8]" /> 演讲活动
          </span>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono">
            <span className="w-3 h-3 rounded bg-[#B0985E]" /> 晨间 · 理财
          </span>
        </div>

        <div className="overflow-x-auto pb-4 mb-20 bg-stone-50/50 p-4 rounded-2xl border border-stone-200/50">
          <div className="timetable-grid">
            {/* Header row */}
            <div className="corner" />
            <div className="bg-white border border-stone-200 rounded-lg p-3 shadow-sm"><div className="font-mono font-bold text-base tracking-wide text-stone-800">DAY 1</div><div className="text-xs text-stone-500 mt-1">开营 · 破冰</div></div>
            <div className="bg-white border border-stone-200 rounded-lg p-3 shadow-sm"><div className="font-mono font-bold text-base tracking-wide text-stone-800">DAY 2</div><div className="text-xs text-stone-500 mt-1">创业思维启蒙</div></div>
            <div className="bg-white border border-stone-200 rounded-lg p-3 shadow-sm"><div className="font-mono font-bold text-base tracking-wide text-stone-800">DAY 3</div><div className="text-xs text-stone-500 mt-1">市场与用户</div></div>
            <div className="bg-white border border-stone-200 rounded-lg p-3 shadow-sm"><div className="font-mono font-bold text-base tracking-wide text-stone-800">DAY 4</div><div className="text-xs text-stone-500 mt-1">商业分析</div></div>
            <div className="bg-white border border-stone-200 rounded-lg p-3 shadow-sm"><div className="font-mono font-bold text-base tracking-wide text-stone-800">DAY 5</div><div className="text-xs text-stone-500 mt-1">路演表达</div></div>
            <div className="bg-white border border-stone-200 rounded-lg p-3 shadow-sm"><div className="font-mono font-bold text-base tracking-wide text-stone-800">DAY 6</div><div className="text-xs text-stone-500 mt-1">路演日</div></div>

            {/* Row: 晨间 */}
            <div className="rlabel">晨间</div>
            <div className="cell"><div className="empty" /></div>
            <div className="cell"><div className="blk click c-cream" onClick={() => setSelectedKey('fin')}><span className="arrow">›</span><span className="tag">Morning</span><div className="ttl">个人理财 · 需要 vs 想要</div><div className="meta">5 分钟 · 营歌后</div></div></div>
            <div className="cell"><div className="blk click c-cream" onClick={() => setSelectedKey('fin')}><span className="arrow">›</span><span className="tag">Morning</span><div className="ttl">个人理财 · 存钱罐的魔法</div><div className="meta">5 分钟 · 营歌后</div></div></div>
            <div className="cell"><div className="blk click c-cream" onClick={() => setSelectedKey('fin')}><span className="arrow">›</span><span className="tag">Morning</span><div className="ttl">个人理财 · 一块钱怎么分</div><div className="meta">5 分钟 · 营歌后</div></div></div>
            <div className="cell"><div className="blk click c-cream" onClick={() => setSelectedKey('fin')}><span className="arrow">›</span><span className="tag">Morning</span><div className="ttl">个人理财 · 钱不睡觉</div><div className="meta">5 分钟 · 营歌后</div></div></div>
            <div className="cell"><div className="empty" /></div>

            {/* Row: 上午 */}
            <div className="rlabel">上午</div>
            <div className="cell"><div className="empty" /></div>
            <div className="cell">
              <div className="blk click star c-biz" onClick={() => setSelectedKey('d2jiexi')}><span className="arrow">›</span><span className="tag">创业思维 · 分班</span><div className="ttl">拆解主题：AI for fun / good / learning</div><div className="meta">10岁以下 & 以上 两个版本</div></div>
              <div className="blk click star c-biz" onClick={() => setSelectedKey('d2biz')}><span className="arrow">›</span><span className="tag">创业思维 · 合班</span><div className="ttl">游戏、应用背后的"商业" + 生意账</div><div className="meta">蛋仔派对 · 小红书 · 算账</div></div>
            </div>
            <div className="cell">
              <div className="blk click star c-biz" onClick={() => setSelectedKey('d3market')}><span className="arrow">›</span><span className="tag">创业思维 · 合班</span><div className="ttl">市场与用户</div><div className="meta">含 AI 调研 + 午休问卷行动</div></div>
              <div className="blk c-team"><span className="tag">小组讨论</span><div className="ttl">初步确定"创业项目"</div></div>
            </div>
            <div className="cell">
              <div className="blk click star c-biz" onClick={() => setSelectedKey('d4analysis')}><span className="arrow">›</span><span className="tag">Tech × 商业 · 分班</span><div className="ttl">商业分析 / 竞品分析</div><div className="meta">小：认识竞品 · 大：SWOT + PEST</div></div>
              <div className="blk c-team"><span className="tag">Teamwork</span><div className="ttl">完善 GDD / PRD</div></div>
            </div>
            <div className="cell">
              <div className="blk click star c-biz" onClick={() => setSelectedKey('d5pitch')}><span className="arrow">›</span><span className="tag">Tech × 商业 · 分班</span><div className="ttl">AI 如何帮我们讲好故事</div><div className="meta">小：AI 漫画 · 大：HTML slides</div></div>
              <div className="blk c-team"><span className="tag">Teamwork</span><div className="ttl">用 AI 完成路演材料</div></div>
            </div>
            <div className="cell">
              <div className="blk c-present"><span className="tag">Presentation</span><div className="ttl">演讲集训</div></div>
            </div>

            {/* Row: 下午 */}
            <div className="rlabel">下午</div>
            <div className="cell">
              <div className="blk click c-biz" onClick={() => setSelectedKey('d1open')}><span className="arrow">›</span><span className="tag">Opening</span><div className="ttl">开营仪式：主题拆解 + 营规共创</div><div className="meta">详见 Day 1 执行手册</div></div>
            </div>
            <div className="cell">
              <div className="blk c-tech"><span className="tag">Tech Boost</span><div className="ttl">什么是 AI，如何 prompting？</div></div>
              <div className="blk click star c-biz" onClick={() => setSelectedKey('d2empathy')}><span className="arrow">›</span><span className="tag">创业思维</span><div className="ttl">共情力 — 发现痛点、头脑风暴</div></div>
            </div>
            <div className="cell">
              <div className="blk c-tech"><span className="tag">Tech Boost</span><div className="ttl">Vibe Coding — Games</div></div>
              <div className="blk c-tech"><span className="tag">Tech Boost</span><div className="ttl">Vibe Coding — Web &amp; Apps</div></div>
              <div className="blk c-share"><span className="tag">分享 · 复盘</span><div className="ttl">拆解你最喜欢的游戏 / 应用</div></div>
            </div>
            <div className="cell">
              <div className="blk c-team"><span className="tag">Teamwork</span><div className="ttl">打造 MVP</div></div>
              <div className="blk c-share"><span className="tag">分享 · 复盘</span><div className="ttl">分享 + 复盘</div></div>
            </div>
            <div className="cell">
              <div className="blk c-team"><span className="tag">Teamwork</span><div className="ttl">继续完善 MVP 及路演</div></div>
              <div className="blk c-share"><span className="tag">分享 · 复盘</span><div className="ttl">分享 + 复盘</div></div>
            </div>
            <div className="cell">
              <div className="blk c-show"><span className="tag">Showtime</span><div className="ttl">项目路演</div></div>
            </div>

            {/* Row: 晚间 */}
            <div className="rlabel">晚间</div>
            <div className="cell">
              <div className="blk click c-biz" onClick={() => setSelectedKey('d1ice')}><span className="arrow">›</span><span className="tag">Ice Breaking</span><div className="ttl">破冰游戏 · 分组 · 队伍三件套</div><div className="meta">详见 Day 1 执行手册</div></div>
            </div>
            <div className="cell"><div className="blk c-team"><span className="tag">Teamwork</span><div className="ttl">开始策划你的创业蓝图</div></div></div>
            <div className="cell"><div className="blk c-team"><span className="tag">Teamwork</span><div className="ttl">确定小组 GDD / PRD</div></div></div>
            <div className="cell"><div className="blk c-team"><span className="tag">Teamwork</span><div className="ttl">打造 MVP</div></div></div>
            <div className="cell"><div className="blk c-team"><span className="tag">Teamwork</span><div className="ttl">继续完善 MVP 及路演</div></div></div>
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
            <div className="text-label-md text-primary font-mono tracking-widest mb-1.5">
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
