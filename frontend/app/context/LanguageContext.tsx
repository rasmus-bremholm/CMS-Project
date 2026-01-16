"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type Locale = "en" | "sv";

interface LanguageContextType {
  locale: Locale;
  setLocale: (Locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("sv");

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
