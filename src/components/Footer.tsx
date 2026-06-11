import Link from "next/link";
import { Fragment } from "react";
import { useLanguage } from "@/lib/LanguageContext";

type FooterVariant = "default" | "minimal" | "dark";

export function Footer({ variant = "default" }: { variant?: FooterVariant }) {
  const isDark = variant === "dark";
  const { t } = useLanguage();
  const bgClass = isDark ? "bg-[#090909] border-zinc-900" : "bg-background border-border";
  const textClass = isDark ? "text-stone-400" : "text-stone-500";
  const headingClass = isDark ? "text-white" : "text-stone-900";
  const linkClass = isDark ? "text-stone-400 hover:text-primary transition-colors" : "text-stone-500 hover:text-primary transition-colors";
  const mutedTextClass = isDark ? "text-stone-600 text-[10px] uppercase tracking-widest" : "text-stone-400 text-[10px] uppercase tracking-widest";

  if (variant === "minimal") {
    return (
      <footer className="w-full border-t mt-24 bg-background border-border">
        <div className="px-8 py-8 w-full max-w-screen-2xl mx-auto">
          <p className="text-stone-400 text-[10px] uppercase tracking-widest">
            {t("footer.rights")}
          </p>
        </div>
      </footer>
    );
  }

  return (
    <footer className={`w-full border-t mt-24 transition-colors duration-300 ${bgClass}`}>
      <div className="flex flex-col md:flex-row justify-between items-start px-4 md:px-8 py-16 w-full max-w-screen-2xl mx-auto text-xs antialiased">
        <div className="mb-12 md:mb-0">
          <div className={`text-lg font-bold tracking-tighter mb-4 ${headingClass}`}>
            BoundaryUnknown
          </div>
          <p className={`${textClass} max-w-xs leading-relaxed`}>
            {t("footer.desc").split("\n").map((line: string, i: number) => (
              <Fragment key={i}>
                {line}
                <br />
              </Fragment>
            ))}
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <span className={`font-bold uppercase tracking-widest text-[10px] ${headingClass}`}>
              {t("footer.ecosystem")}
            </span>
            <Link
              href="/"
              className={linkClass}
            >
              {t("nav.programs")}
            </Link>
            <Link
              href="/about"
              className={linkClass}
            >
              {t("nav.about")}
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className={`font-bold uppercase tracking-widest text-[10px] ${headingClass}`}>
              {t("footer.inquiry")}
            </span>
            <a
              href="mailto:hello@boundaryunknown.edu"
              className={linkClass}
            >
              {t("nav.contact")}
            </a>
            <span className={textClass}>{t("footer.partnerships")}</span>
            <span className={textClass}>{t("footer.faq")}</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className={`font-bold uppercase tracking-widest text-[10px] ${headingClass}`}>
              {t("footer.legal")}
            </span>
            <span className={textClass}>{t("footer.terms")}</span>
            <span className={textClass}>{t("footer.privacy")}</span>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-8 pb-8 w-full max-w-screen-2xl mx-auto">
        <p className={mutedTextClass}>
          {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}

