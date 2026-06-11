"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "./translations";

export type Language = "en" | "zh";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  initialLanguage,
}: {
  children: React.ReactNode;
  initialLanguage: Language;
}) {
  const [language, setLanguageState] = useState<Language>(initialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    document.cookie = `language=${lang}; path=/; max-age=31536000; SameSite=Lax`;
  };

  // Helper function to resolve dot-notation keys (e.g. t('nav.home'))
  const t = (keyPath: string) => {
    const keys = keyPath.split(".");
    let current: any = translations[language];

    for (const key of keys) {
      if (current === undefined || current === null) {
        return keyPath;
      }
      current = current[key];
    }

    return current !== undefined ? current : keyPath;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
