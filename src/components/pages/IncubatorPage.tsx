"use client";

import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MaterialIcon } from "@/components/MaterialIcon";
import { images } from "@/lib/images";
import { useLanguage } from "@/lib/LanguageContext";

const stepsEn = [
  { icon: "query_stats", title: "Validation", desc: "Stress-testing your core hypothesis against market realities and technical constraints." },
  { icon: "precision_manufacturing", title: "Prototype", desc: "Iterative development cycles focusing on MVP functionality and scalable architecture." },
  { icon: "rocket_launch", title: "Launch", desc: "Strategic GTM planning, investor pitching, and full-scale deployment to users." },
];

const stepsZh = [
  { icon: "query_stats", title: "商业验证", desc: "对照市场实际状况和技术约束条件，压力测试你的核心商业假设。" },
  { icon: "precision_manufacturing", title: "原型开发", desc: "聚焦于 MVP（最小可行性产品）功能与可扩展架构的迭代开发周期。" },
  { icon: "rocket_launch", title: "商业发布", desc: "制定战略性的 GTM（进入市场）规划、投资人路演以及向用户进行完整规模的部署。" },
];

const venturesEn = [
  { title: "Voyd Explorer", desc: "A geospatial AI engine processing satellite data to predict urban expansion patterns in real-time.", tags: ["GeoAI", "Launched 2023"], img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpJfI1LxN1y3aEP9pbqvcl-9tCFqTFrMv5S8L8u4fd1aPOc6nH8d1xh9gTyNHi8fWihK60-xoPfkyhnlwPSgxklflPV2B3yc0FkHjmYjDhuAT_-brJiGbNeIbXCX7rsYi3-QcGPImE7XcW4rMD6aB6xyf3zBQYakdcQY6rwmmlQuVkJNq9GbF3qaXK3E-cowW9nbuExd38yjeO9cQP4IvFSMlncL49BDZBsInqeiTso6hdO-93RksGkzkFqkbFwgPRUJe5g8bHMvmZ" },
  { title: "Privacy Shield", desc: "Zero-knowledge proof protocol for secure enterprise LLM implementation without data leakage.", tags: ["Security", "Active Beta"], img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9IFkzI73guKHlLqsCSf87TTML5CvyVpQbBRbeaZoSK2-s3YgPv9cxBy36qSlGOnEpOSVtn-BPN1Qok3XQQPR1dDFihSqyob_yf78sEM062RkQ4zCKDH2CIFWD6wZ3w6Mv0Iz0SuWonCC6LlJYlHMf3UJ4QXcItUw5p-73ORaBADASI0BY7XSD_JmNGOswhkFiuHm-bd5vhmwWMdOLhLVNwlBUPKaRPpMSMoZw1eWwWaGrz8DMTVbiMe8S9X5ECAAOcHHHYxI9HUMD" },
  { title: "Neural Core", desc: "Optimized edge-computing hardware architectures for on-device generative AI applications.", tags: ["Hardware", "Seed Stage"], img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJJCL2PeMwJHB04BP-DtHCjAI90iNLdVX3a6fUut6adGb6-fVmSo9rQ1wjRBfggPL4l_NEgWr3NZUTyD6KJo81qUaGFYUPDj3lbLf32a-70VlsnpvJ4JB4eicgTeNCgiPAzMyAor_ORkCOvRlUleN51xNZe6lQCRyUjojyXetFRhm_shFp8Ks1cNQmcuMEzAr97cMPqJz3rGraCMYYntacSPc1Pok5nFXx9_UFNuNmVjDIJGuL13ENcHPKlF8EzhAeCnlNeSfw6FIx" },
];

const venturesZh = [
  { title: "Voyd Explorer", desc: "一款处理卫星遥感数据的地理空间 AI 引擎，旨在实时预测城市扩张格局。", tags: ["空间智能", "2023 年发布"], img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpJfI1LxN1y3aEP9pbqvcl-9tCFqTFrMv5S8L8u4fd1aPOc6nH8d1xh9gTyNHi8fWihK60-xoPfkyhnlwPSgxklflPV2B3yc0FkHjmYjDhuAT_-brJiGbNeIbXCX7rsYi3-QcGPImE7XcW4rMD6aB6xyf3zBQYakdcQY6rwmmlQuVkJNq9GbF3qaXK3E-cowW9nbuExd38yjeO9cQP4IvFSMlncL49BDZBsInqeiTso6hdO-93RksGkzkFqkbFwgPRUJe5g8bHMvmZ" },
  { title: "Privacy Shield", desc: "专为企业级 LLM 部署打造的零知识证明协议，保证敏感数据绝不外泄。", tags: ["网络安全", "公测阶段"], img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9IFkzI73guKHlLqsCSf87TTML5CvyVpQbBRbeaZoSK2-s3YgPv9cxBy36qSlGOnEpOSVtn-BPN1Qok3XQQPR1dDFihSqyob_yf78sEM062RkQ4zCKDH2CIFWD6wZ3w6Mv0Iz0SuWonCC6LlJYlHMf3UJ4QXcItUw5p-73ORaBADASI0BY7XSD_JmNGOswhkFiuHm-bd5vhmwWMdOLhLVNwlBUPKaRPpMSMoZw1eWwWaGrz8DMTVbiMe8S9X5ECAAOcHHHYxI9HUMD" },
  { title: "Neural Core", desc: "针对设备端生成式 AI 应用而优化的边缘计算硬件架构方案。", tags: ["硬科技", "种子期"], img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJJCL2PeMwJHB04BP-DtHCjAI90iNLdVX3a6fUut6adGb6-fVmSo9rQ1wjRBfggPL4l_NEgWr3NZUTyD6KJo81qUaGFYUPDj3lbLf32a-70VlsnpvJ4JB4eicgTeNCgiPAzMyAor_ORkCOvRlUleN51xNZe6lQCRyUjojyXetFRhm_shFp8Ks1cNQmcuMEzAr97cMPqJz3rGraCMYYntacSPc1Pok5nFXx9_UFNuNmVjDIJGuL13ENcHPKlF8EzhAeCnlNeSfw6FIx" },
];

const content = {
  en: {
    heroTitle: (
      <>
        The Incubation Track:{" "}
        <span className="text-primary">From Idea to Venture</span>
      </>
    ),
    heroSub: "Bridging the gap between academic exploration and market-ready innovation. We provide the scaffolding for your most ambitious AI projects to scale.",
    incubatingTitle: "Incubating the Future",
    incubatingDesc: "Our mission is to empower student pioneers with the resources of a global AI laboratory. We provide the business acumen and architectural mentorship required to build resilient ventures.",
    academicRestraint: "Academic Restraint",
    quote: "Innovation without structure is merely exploration. We provide the structure so your exploration can lead to impact.",
    mentorship: "Mentorship",
    mentorshipDesc: "Weekly 1:1 sessions with industry leads.",
    techSupport: "Technical Support",
    techSupportDesc: "Access to specialized AI compute clusters.",
    pathTitle: "The Path to Launch",
    showcase: "Showcase",
    alumniTitle: "Alumni Ventures",
  },
  zh: {
    heroTitle: (
      <>
        孵化课程路线：{" "}
        <span className="text-primary">从创意到商业项目</span>
      </>
    ),
    heroSub: "架设起学术探索与商业创新之间的桥梁。我们为最具雄心壮志的 AI 创意提供商业化起飞的支架与资源。",
    incubatingTitle: "孵化未来",
    incubatingDesc: "我们的使命是为学生探索先锋提供全球 AI 实验室级别的资源支持。我们提供构建抗风险创业项目所需的商业敏锐度与技术架构指导。",
    academicRestraint: "学术约束",
    quote: "缺乏结构的创新仅仅是探索。我们提供框架与结构，让你的探索真正产生商业和社会影响力。",
    mentorship: "导师机制",
    mentorshipDesc: "每周与行业领袖及投资人进行 1 对 1 深度咨询。",
    techSupport: "技术支持",
    techSupportDesc: "提供专业级 AI 计算集群及硬件实验室资源的访问权限。",
    pathTitle: "通往发布之路",
    showcase: "项目展示",
    alumniTitle: "校友创业项目",
  }
};

export function IncubatorPage() {
  const { language } = useLanguage();
  const steps = language === "zh" ? stepsZh : stepsEn;
  const ventures = language === "zh" ? venturesZh : venturesEn;
  const t = content[language];

  return (
    <>
      <Header variant="white" />
      <main className="mt-24">
        <section className="max-w-screen-xl mx-auto px-4 md:px-gutter py-xxl flex flex-col items-center text-center">
          <h1 className="text-[40px] md:text-[64px] font-semibold leading-tight text-inverse-surface max-w-4xl mb-md">
            {t.heroTitle}
          </h1>
          <p className="text-body-lg text-secondary max-w-2xl">
            {t.heroSub}
          </p>
        </section>

        <section className="bg-white border-y border-outline-variant">
          <div className="max-w-screen-xl mx-auto px-4 md:px-gutter py-xxl grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
            <div className="space-y-md">
              <h2 className="text-display-md text-inverse-surface">{t.incubatingTitle}</h2>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                {t.incubatingDesc}
              </p>
              <div className="knowledge-block-thin pl-md">
                <p className="text-label-md text-primary uppercase tracking-widest mb-xs">
                  {t.academicRestraint}
                </p>
                <p className="text-body-sm text-secondary italic">
                  &quot;{t.quote}&quot;
                </p>
              </div>
              <div className="grid grid-cols-2 gap-md pt-md">
                <div className="p-md border border-outline-variant rounded-xl">
                  <MaterialIcon name="school" className="text-primary mb-sm" />
                  <p className="text-headline-md">{t.mentorship}</p>
                  <p className="text-body-sm text-secondary">{t.mentorshipDesc}</p>
                </div>
                <div className="p-md border border-outline-variant rounded-xl">
                  <MaterialIcon name="terminal" className="text-primary mb-sm" />
                  <p className="text-headline-md">{t.techSupport}</p>
                  <p className="text-body-sm text-secondary">{t.techSupportDesc}</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-full overflow-hidden border-8 border-surface-container-high">
              <Image src={images.incubatorRound} alt="Research lab" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </section>

        <section className="max-w-screen-xl mx-auto px-4 md:px-gutter py-xxl">
          <h2 className="text-display-md text-inverse-surface text-center mb-xl">
            {t.pathTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {steps.map((step) => (
              <div
                key={step.title}
                className="bg-stone-950 text-stone-50 p-xl rounded-[32px] flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-md">
                  <MaterialIcon name={step.icon} className="text-white text-3xl" />
                </div>
                <h3 className="text-headline-lg mb-sm">{step.title}</h3>
                <p className="text-body-sm text-stone-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-surface-container py-xxl">
          <div className="max-w-screen-xl mx-auto px-4 md:px-gutter">
            <div className="flex justify-between items-end mb-xl">
              <div>
                <p className="text-label-md text-primary uppercase tracking-widest mb-xs">{t.showcase}</p>
                <h2 className="text-display-md text-inverse-surface">{t.alumniTitle}</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              {ventures.map((v) => (
                <div
                  key={v.title}
                  className="group bg-white border border-outline-variant rounded-[32px] overflow-hidden hover:border-primary transition-all duration-300"
                >
                  <div className="h-64 overflow-hidden relative">
                    <Image
                      alt={v.title}
                      src={v.img}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-lg">
                    <div className="flex justify-between items-start mb-md">
                      <h3 className="text-headline-lg">{v.title}</h3>
                      <MaterialIcon name="north_east" className="text-primary" />
                    </div>
                    <p className="text-body-sm text-secondary mb-lg">{v.desc}</p>
                    <div className="flex gap-2 flex-wrap">
                      {v.tags.map((t) => (
                        <span key={t} className="bg-surface-container-high px-3 py-1 rounded-full text-label-md">
                          {t}
                        </span>
                      ))}
                    </div>
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

