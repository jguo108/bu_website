"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MaterialIcon } from "./MaterialIcon";
import { useRegister } from "./RegisterProvider";
import { useLanguage } from "@/lib/LanguageContext";

const navItems = [
  { href: "/", labelKey: "nav.home" as const },
  {
    labelKey: "nav.programs" as const,
    children: [
      { href: "/programs/camps", labelKey: "nav.camps" as const },
      { href: "/programs/incubator", labelKey: "nav.incubator" as const },
    ],
  },
  { href: "/about", labelKey: "nav.about" as const },
] as const;

export function Header({ variant = "default" }: { variant?: "default" | "white" | "dark" }) {
  const pathname = usePathname();
  const { openRegister } = useRegister();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(true);
  const { language, setLanguage, t } = useLanguage();

  const bg =
    variant === "white"
      ? "bg-white border-stone-200"
      : variant === "dark"
      ? "bg-black/30 backdrop-blur-md border-zinc-800"
      : "bg-background border-border";

  const checkActive = (item: typeof navItems[number]) => {
    if ("href" in item) {
      if (item.href === "/") {
        return pathname === "/";
      }
      return pathname === item.href || pathname.startsWith(`${item.href}/`);
    } else {
      return item.children.some(
        (child) => pathname === child.href || pathname.startsWith(`${child.href}/`)
      );
    }
  };

  return (
    <header className={`w-full border-b sticky top-0 z-50 ${bg}`}>
      <nav className="flex justify-between items-center px-4 md:px-8 py-5 w-full max-w-screen-2xl mx-auto tracking-tight antialiased text-sm uppercase">
        <Link
          href="/"
          className={`text-xl font-bold tracking-tighter ${
            variant === "dark" ? "text-white" : "text-stone-900"
          }`}
        >
          BoundaryUnknown
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            if ("children" in item) {
              const isActive = checkActive(item);
              return (
                <div key={item.labelKey} className="relative group py-2">
                  <button
                    type="button"
                    className={`flex items-center gap-1 cursor-pointer transition-colors duration-200 border-b pb-1 font-sans text-sm uppercase tracking-tight font-normal ${
                      isActive
                        ? `${variant === "dark" ? "text-white border-primary" : "text-stone-900 border-primary"}`
                        : `${variant === "dark" ? "text-zinc-400 hover:text-white border-transparent" : "text-stone-500 hover:text-stone-900 border-transparent"}`
                    }`}
                  >
                    <span>{t(item.labelKey)}</span>
                    <MaterialIcon
                      name="keyboard_arrow_down"
                      className="text-xs transition-transform duration-200 group-hover:rotate-180"
                    />
                  </button>
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                    <div
                      className={`w-48 rounded-xl border shadow-xl py-2 ${
                        variant === "dark"
                          ? "bg-zinc-950/90 border-zinc-800 text-zinc-400 backdrop-blur-md"
                          : variant === "white"
                          ? "bg-white border-stone-200 text-stone-500"
                          : "bg-background border-border text-on-surface-variant"
                      }`}
                    >
                      {item.children.map((child) => {
                        const isChildActive = pathname === child.href;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-4 py-2 text-xs transition-colors duration-150 ${
                              isChildActive
                                ? `${variant === "dark" ? "text-white bg-white/10" : "text-stone-900 bg-stone-100"}`
                                : `${variant === "dark" ? "hover:text-white hover:bg-white/5" : "hover:text-stone-900 hover:bg-stone-50"}`
                            }`}
                          >
                            {t(child.labelKey)}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            } else {
              const isActive = checkActive(item);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`border-b pb-1 transition-colors duration-200 ${
                    isActive
                      ? `${variant === "dark" ? "text-white border-primary" : "text-stone-900 border-primary"}`
                      : `${variant === "dark" ? "text-zinc-400 hover:text-white border-transparent" : "text-stone-500 hover:text-stone-900 border-transparent"}`
                  }`}
                >
                  {t(item.labelKey)}
                </Link>
              );
            }
          })}
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold tracking-wider font-mono select-none">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`cursor-pointer transition-colors duration-150 ${
                language === "en"
                  ? `${variant === "dark" ? "text-white font-bold" : "text-stone-900 font-bold"}`
                  : `${variant === "dark" ? "text-zinc-500 hover:text-zinc-300" : "text-stone-400 hover:text-stone-600"}`
              }`}
            >
              EN
            </button>
            <span className={variant === "dark" ? "text-zinc-700" : "text-stone-300"}>|</span>
            <button
              type="button"
              onClick={() => setLanguage("zh")}
              className={`cursor-pointer transition-colors duration-150 ${
                language === "zh"
                  ? `${variant === "dark" ? "text-white font-bold" : "text-stone-900 font-bold"}`
                  : `${variant === "dark" ? "text-zinc-500 hover:text-zinc-300" : "text-stone-400 hover:text-stone-600"}`
              }`}
            >
              中文
            </button>
          </div>
          <button
            type="button"
            onClick={openRegister}
            className="hidden sm:block bg-primary text-white w-32 py-2 font-semibold tracking-tight hover:bg-primary-hover transition-colors cursor-pointer text-center"
          >
            {t("nav.contact")}
          </button>
          <button
            type="button"
            className={`md:hidden ${variant === "dark" ? "text-white" : "text-stone-900"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <MaterialIcon name={mobileOpen ? "close" : "menu"} />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className={`md:hidden border-t ${bg} px-4 py-4 flex flex-col gap-4`}>
          {navItems.map((item) => {
            if ("children" in item) {
              const isActive = checkActive(item);
              return (
                <div key={item.labelKey} className="flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                    className={`flex items-center justify-between w-full text-left text-sm uppercase tracking-tight ${
                      isActive
                        ? `${variant === "dark" ? "text-white font-semibold" : "text-stone-900 font-semibold"}`
                        : `${variant === "dark" ? "text-zinc-400" : "text-stone-500"}`
                    }`}
                  >
                    <span>{t(item.labelKey)}</span>
                    <MaterialIcon
                      name={mobileProgramsOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}
                      className="text-sm"
                    />
                  </button>
                  {mobileProgramsOpen && (
                    <div className="pl-4 flex flex-col gap-3 border-l border-primary/20 py-1 mt-1">
                      {item.children.map((child) => {
                        const isChildActive = pathname === child.href;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className={
                              isChildActive
                                ? `${variant === "dark" ? "text-white font-semibold" : "text-stone-900 font-semibold"}`
                                : `${variant === "dark" ? "text-zinc-400" : "text-stone-500"}`
                            }
                          >
                            {t(child.labelKey)}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            } else {
              const isActive = checkActive(item);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={
                    isActive
                      ? `${variant === "dark" ? "text-white font-semibold" : "text-stone-900 font-semibold"}`
                      : `${variant === "dark" ? "text-zinc-400" : "text-stone-500"}`
                  }
                >
                  {t(item.labelKey)}
                </Link>
              );
            }
          })}
          <div className="flex flex-col sm:flex-row gap-4 items-start border-t border-border-muted pt-4 mt-2">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                openRegister();
              }}
              className="bg-primary text-white w-32 py-2 font-semibold tracking-tight cursor-pointer text-center"
            >
              {t("nav.contact")}
            </button>
            <div className="flex items-center gap-3 text-sm font-semibold tracking-wider font-mono mt-2 select-none">
              <button
                type="button"
                onClick={() => {
                  setLanguage("en");
                  setMobileOpen(false);
                }}
                className={`transition-colors duration-150 ${
                  language === "en" ? "text-primary font-bold" : "text-stone-400"
                }`}
              >
                EN
              </button>
              <span className="text-stone-300">|</span>
              <button
                type="button"
                onClick={() => {
                  setLanguage("zh");
                  setMobileOpen(false);
                }}
                className={`transition-colors duration-150 ${
                  language === "zh" ? "text-primary font-bold" : "text-stone-400"
                }`}
              >
                中文
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

