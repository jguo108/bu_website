"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { usePathname } from "next/navigation";
import Link from "next/link";

type FooterVariant = "default" | "minimal" | "dark";

export function Footer({ variant = "default" }: { variant?: FooterVariant }) {
  const isDark = variant === "dark";
  const { t } = useLanguage();
  const pathname = usePathname();
  const bgClass = isDark ? "bg-[#090909] border-zinc-900" : "bg-background border-border";
  const mutedTextClass = isDark ? "text-stone-600 text-[10px] uppercase tracking-widest" : "text-stone-400 text-[10px] uppercase tracking-widest";

  if (variant === "minimal") {
    return (
      <footer className="w-full border-t mt-24 bg-background border-border">
        <div className="px-8 py-8 w-full max-w-screen-2xl mx-auto text-center">
          <p className="text-stone-400 text-[10px] uppercase tracking-widest">
            {t("footer.rights")}
          </p>
        </div>
      </footer>
    );
  }

  return (
    <footer className={`w-full border-t mt-24 transition-colors duration-300 ${bgClass}`}>
      <div className="flex flex-col items-center justify-center text-center px-4 py-12 w-full max-w-screen-2xl mx-auto text-xs antialiased">
        <Link href="/" className="mb-4 flex items-center">
          <img
            src={pathname === "/" ? "/images/white_logo.png" : "/images/black_logo.png"}
            alt="BoundaryUnknown"
            className="h-5 md:h-6 w-auto object-contain"
          />
        </Link>
        <p className={mutedTextClass}>
          {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}

