import Link from "next/link";

type FooterVariant = "default" | "minimal" | "dark";

export function Footer({ variant = "default" }: { variant?: FooterVariant }) {
  const isDark = variant === "dark";
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
            © 2024 BoundaryUnknown. All rights reserved.
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
            Dare to think.
            <br />
            Dare to act.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <span className={`font-bold uppercase tracking-widest text-[10px] ${headingClass}`}>
              Ecosystem
            </span>
            <Link
              href="/"
              className={linkClass}
            >
              Programs
            </Link>
            <Link
              href="/projects"
              className={linkClass}
            >
              Students&apos; Projects
            </Link>
            <Link
              href="/about"
              className={linkClass}
            >
              About
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className={`font-bold uppercase tracking-widest text-[10px] ${headingClass}`}>
              Inquiry
            </span>
            <a
              href="mailto:hello@boundaryunknown.edu"
              className={linkClass}
            >
              Contact
            </a>
            <span className={textClass}>Partnerships</span>
            <span className={textClass}>FAQ</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className={`font-bold uppercase tracking-widest text-[10px] ${headingClass}`}>
              Legal
            </span>
            <span className={textClass}>Terms of Service</span>
            <span className={textClass}>Privacy Policy</span>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-8 pb-8 w-full max-w-screen-2xl mx-auto">
        <p className={mutedTextClass}>
          © 2024 BoundaryUnknown. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
