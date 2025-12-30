import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import ptTranslations from "@/locales/pt.json";
import enTranslations from "@/locales/en.json";

export type Language = "pt" | "en";

type TranslationValue = string | { [key: string]: TranslationValue };
type Translations = { [key: string]: TranslationValue };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string>) => string;
}

const translations: Record<Language, Translations> = {
  pt: ptTranslations,
  en: enTranslations,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved === "en" ? "en" : "pt") as Language;
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang === "pt" ? "pt-PT" : "en";
  };

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-PT" : "en";
  }, [language]);

  const t = (key: string, params?: Record<string, string>): string => {
    const keys = key.split(".");
    let value: TranslationValue = translations[language];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = (value as Record<string, TranslationValue>)[k];
      } else {
        // Fallback to Portuguese
        value = translations.pt;
        for (const fallbackKey of keys) {
          if (value && typeof value === "object" && fallbackKey in value) {
            value = (value as Record<string, TranslationValue>)[fallbackKey];
          } else {
            return key; // Return key if not found
          }
        }
        break;
      }
    }

    if (typeof value !== "string") {
      return key;
    }

    // Replace parameters
    if (params) {
      return Object.entries(params).reduce(
        (acc, [paramKey, paramValue]) => acc.replace(`{{${paramKey}}}`, paramValue),
        value
      );
    }

    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
