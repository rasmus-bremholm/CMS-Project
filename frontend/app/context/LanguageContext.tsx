"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type Locale = "en" | "sv";

interface LanguageContextType {
  locale: Locale;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
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
        toggleLanguage,
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
