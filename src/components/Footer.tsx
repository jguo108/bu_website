import { useLanguage } from "@/lib/LanguageContext";

type FooterVariant = "default" | "minimal" | "dark";

export function Footer({ variant = "default" }: { variant?: FooterVariant }) {
  const isDark = variant === "dark";
  const { t } = useLanguage();
  const bgClass = isDark ? "bg-[#090909] border-zinc-900" : "bg-background border-border";
  const headingClass = isDark ? "text-white" : "text-stone-900";
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
        <div className={`text-lg font-bold tracking-tighter mb-2 ${headingClass}`}>
          BoundaryUnknown
        </div>
        <p className={mutedTextClass}>
          {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
