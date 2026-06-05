import Link from "next/link";

type FooterVariant = "default" | "minimal" | "dark";

export function Footer({ variant = "default" }: { variant?: FooterVariant }) {
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
    <footer className="w-full border-t mt-24 bg-background border-border">
      <div className="flex flex-col md:flex-row justify-between items-start px-4 md:px-8 py-16 w-full max-w-screen-2xl mx-auto text-xs antialiased">
        <div className="mb-12 md:mb-0">
          <div className="text-lg font-bold tracking-tighter mb-4 text-stone-900">
            BoundaryUnknown
          </div>
          <p className="text-stone-500 max-w-xs leading-relaxed">
            Dare to think.
            <br />
            Dare to act.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <span className="font-bold text-stone-900 uppercase tracking-widest text-[10px]">
              Ecosystem
            </span>
            <Link
              href="/"
              className="text-stone-500 hover:text-primary transition-colors"
            >
              Programs
            </Link>
            <Link
              href="/projects"
              className="text-stone-500 hover:text-primary transition-colors"
            >
              Students&apos; Projects
            </Link>
            <Link
              href="/about"
              className="text-stone-500 hover:text-primary transition-colors"
            >
              About
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-bold text-stone-900 uppercase tracking-widest text-[10px]">
              Inquiry
            </span>
            <a
              href="mailto:hello@boundaryunknown.edu"
              className="text-stone-500 hover:text-primary transition-colors"
            >
              Contact
            </a>
            <span className="text-stone-500">Partnerships</span>
            <span className="text-stone-500">FAQ</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-bold text-stone-900 uppercase tracking-widest text-[10px]">
              Legal
            </span>
            <span className="text-stone-500">Terms of Service</span>
            <span className="text-stone-500">Privacy Policy</span>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-8 pb-8 w-full max-w-screen-2xl mx-auto">
        <p className="text-stone-400 text-[10px] uppercase tracking-widest">
          © 2024 BoundaryUnknown. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
