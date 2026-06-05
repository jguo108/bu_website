"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MaterialIcon } from "./MaterialIcon";
import { useRegister } from "./RegisterProvider";

const navItems = [
  { href: "/", label: "Programs" },
  { href: "/projects", label: "Students' Projects" },
  { href: "/about", label: "About" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/" || pathname.startsWith("/programs");
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header({ variant = "default" }: { variant?: "default" | "white" }) {
  const pathname = usePathname();
  const { openRegister } = useRegister();
  const [mobileOpen, setMobileOpen] = useState(false);

  const bg =
    variant === "white"
      ? "bg-white border-stone-200"
      : "bg-background border-border";

  return (
    <header className={`w-full border-b sticky top-0 z-50 ${bg}`}>
      <nav className="flex justify-between items-center px-4 md:px-8 py-5 w-full max-w-screen-2xl mx-auto tracking-tight antialiased text-sm uppercase">
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter text-stone-900"
        >
          BoundaryUnknown
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={
                isActive(pathname, href)
                  ? "text-stone-900 border-b border-primary pb-1"
                  : "text-stone-500 hover:text-stone-900 transition-colors duration-200"
              }
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <span className="hidden sm:inline text-stone-500 text-xs tracking-widest cursor-pointer hover:text-stone-900 transition-colors">
            EN | 中文
          </span>
          <button
            type="button"
            onClick={openRegister}
            className="hidden sm:block bg-primary text-white px-6 py-2 font-semibold tracking-tight hover:bg-primary-hover transition-colors"
          >
            REGISTER
          </button>
          <button
            type="button"
            className="md:hidden text-stone-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <MaterialIcon name={mobileOpen ? "close" : "menu"} />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className={`md:hidden border-t ${bg} px-4 py-4 flex flex-col gap-4`}>
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={
                isActive(pathname, href)
                  ? "text-stone-900 font-semibold"
                  : "text-stone-500"
              }
            >
              {label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              openRegister();
            }}
            className="bg-primary text-white px-6 py-2 font-semibold tracking-tight w-fit"
          >
            REGISTER
          </button>
        </div>
      )}
    </header>
  );
}
