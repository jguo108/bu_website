import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MaterialIcon } from "@/components/MaterialIcon";
import { RegisterButton } from "@/components/RegisterButton";
import { images } from "@/lib/images";

const steps = [
  { icon: "query_stats", title: "Validation", desc: "Stress-testing your core hypothesis against market realities and technical constraints." },
  { icon: "precision_manufacturing", title: "Prototype", desc: "Iterative development cycles focusing on MVP functionality and scalable architecture." },
  { icon: "rocket_launch", title: "Launch", desc: "Strategic GTM planning, investor pitching, and full-scale deployment to users." },
];

const ventures = [
  { title: "Voyd Explorer", desc: "A geospatial AI engine processing satellite data to predict urban expansion patterns in real-time.", tags: ["GeoAI", "Launched 2023"], img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpJfI1LxN1y3aEP9pbqvcl-9tCFqTFrMv5S8L8u4fd1aPOc6nH8d1xh9gTyNHi8fWihK60-xoPfkyhnlwPSgxklflPV2B3yc0FkHjmYjDhuAT_-brJiGbNeIbXCX7rsYi3-QcGPImE7XcW4rMD6aB6xyf3zBQYakdcQY6rwmmlQuVkJNq9GbF3qaXK3E-cowW9nbuExd38yjeO9cQP4IvFSMlncL49BDZBsInqeiTso6hdO-93RksGkzkFqkbFwgPRUJe5g8bHMvmZ" },
  { title: "Privacy Shield", desc: "Zero-knowledge proof protocol for secure enterprise LLM implementation without data leakage.", tags: ["Security", "Active Beta"], img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9IFkzI73guKHlLqsCSf87TTML5CvyVpQbBRbeaZoSK2-s3YgPv9cxBy36qSlGOnEpOSVtn-BPN1Qok3XQQPR1dDFihSqyob_yf78sEM062RkQ4zCKDH2CIFWD6wZ3w6Mv0Iz0SuWonCC6LlJYlHMf3UJ4QXcItUw5p-73ORaBADASI0BY7XSD_JmNGOswhkFiuHm-bd5vhmwWMdOLhLVNwlBUPKaRPpMSMoZw1eWwWaGrz8DMTVbiMe8S9X5ECAAOcHHHYxI9HUMD" },
  { title: "Neural Core", desc: "Optimized edge-computing hardware architectures for on-device generative AI applications.", tags: ["Hardware", "Seed Stage"], img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJJCL2PeMwJHB04BP-DtHCjAI90iNLdVX3a6fUut6adGb6-fVmSo9rQ1wjRBfggPL4l_NEgWr3NZUTyD6KJo81qUaGFYUPDj3lbLf32a-70VlsnpvJ4JB4eicgTeNCgiPAzMyAor_ORkCOvRlUleN51xNZe6lQCRyUjojyXetFRhm_shFp8Ks1cNQmcuMEzAr97cMPqJz3rGraCMYYntacSPc1Pok5nFXx9_UFNuNmVjDIJGuL13ENcHPKlF8EzhAeCnlNeSfw6FIx" },
];

export function IncubatorPage() {
  return (
    <>
      <Header variant="white" />
      <main className="mt-24">
        <section className="max-w-screen-xl mx-auto px-4 md:px-gutter py-xxl flex flex-col items-center text-center">
          <span className="inline-block px-3 py-1 bg-surface-container-highest text-on-surface-variant text-label-md rounded-full mb-sm">
            Incubator Program
          </span>
          <h1 className="text-display-lg text-inverse-surface max-w-4xl mb-md">
            The Incubation Track:{" "}
            <span className="text-primary">From Idea to Venture</span>
          </h1>
          <p className="text-body-lg text-secondary max-w-2xl">
            Bridging the gap between academic exploration and market-ready innovation.
            We provide the scaffolding for your most ambitious AI projects to scale.
          </p>
        </section>

        <section className="bg-white border-y border-outline-variant">
          <div className="max-w-screen-xl mx-auto px-4 md:px-gutter py-xxl grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
            <div className="space-y-md">
              <h2 className="text-display-md text-inverse-surface">Incubating the Future</h2>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Our mission is to empower student pioneers with the resources of a
                global AI laboratory. We provide the business acumen and architectural
                mentorship required to build resilient ventures.
              </p>
              <div className="knowledge-block-thin pl-md">
                <p className="text-label-md text-primary uppercase tracking-widest mb-xs">
                  Academic Restraint
                </p>
                <p className="text-body-sm text-secondary italic">
                  &quot;Innovation without structure is merely exploration. We provide
                  the structure so your exploration can lead to impact.&quot;
                </p>
              </div>
              <div className="grid grid-cols-2 gap-md pt-md">
                <div className="p-md border border-outline-variant rounded-xl">
                  <MaterialIcon name="school" className="text-primary mb-sm" />
                  <p className="text-headline-md">Mentorship</p>
                  <p className="text-body-sm text-secondary">Weekly 1:1 sessions with industry leads.</p>
                </div>
                <div className="p-md border border-outline-variant rounded-xl">
                  <MaterialIcon name="terminal" className="text-primary mb-sm" />
                  <p className="text-headline-md">Technical Support</p>
                  <p className="text-body-sm text-secondary">Access to specialized AI compute clusters.</p>
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
            The Path to Launch
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
                <p className="text-label-md text-primary uppercase tracking-widest mb-xs">Showcase</p>
                <h2 className="text-display-md text-inverse-surface">Alumni Ventures</h2>
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

        <section className="max-w-screen-xl mx-auto px-4 md:px-gutter py-xxl text-center">
          <div className="bg-white border-2 border-primary rounded-[48px] p-xl md:p-xxl">
            <h2 className="text-display-md mb-md">Ready to build the future?</h2>
            <p className="text-body-lg text-secondary mb-xl max-w-xl mx-auto">
              Applications for the Autumn Cohort are now open. We are looking for
              technical founders with bold vision.
            </p>
            <RegisterButton className="bg-primary text-white px-12 py-4 rounded-full text-lg transition-all active:opacity-80 active:scale-95 shadow-lg">
              Submit Your Proposal
            </RegisterButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
