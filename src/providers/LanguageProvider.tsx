"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  DEFAULT_LANGUAGE,
  getTranslations,
  isLanguage,
  type Language,
  type Messages,
  type Translate,
} from "@/locales";

export type { Language, Messages, TranslationKey } from "@/locales";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  /** Translation tree for the active language (use for lists/arrays). */
  messages: Messages;
  /** Looks up a string by dot-separated key, e.g. t("common.bookFreeCall"). */
  t: Translate;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, updateLanguage] = useState<Language>(DEFAULT_LANGUAGE);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("site-language");
    if (isLanguage(savedLanguage)) {
      updateLanguage(savedLanguage);
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) {
      return;
    }

    document.documentElement.lang = language;
    window.localStorage.setItem("site-language", language);
  }, [isInitialized, language]);

  const setLanguage = useCallback((nextLanguage: Language) => {
    updateLanguage(nextLanguage);
  }, []);

  const value = useMemo<LanguageContextValue>(() => {
    const { messages, t } = getTranslations(language);
    return { language, setLanguage, messages, t };
  }, [language, setLanguage]);

  return (
    <LanguageContext.Provider value={value}>
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
