"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type Locale = "en" | "sv";

interface LanguageContextType {
  locale: Locale;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LaguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("sv");

  const toggleLanguage = () => {
    setLocale(prev => {
      const next = prev === "sv" ? "en" : "sv";
      localStorage.setItem("locale", next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider
      value={{
        locale,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useCart must be used within a LanguageProvider");
  }
  return context;
};
