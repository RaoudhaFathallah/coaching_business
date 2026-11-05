"use client";

import { useEffect, useState } from "react";
import { FaqEntry, getFaqs } from "@/lib/api";
import { Language } from "@/locales";

export function useLocalizedFaqs(language: Language) {
  const [faqs, setFaqs] = useState<FaqEntry[] | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setFaqs(null);
    setHasError(false);

    getFaqs(language, controller.signal)
      .then(setFaqs)
      .catch((error: unknown) => {
        if (!controller.signal.aborted) {
          console.error("Unable to load FAQs.", error);
          setHasError(true);
        }
      });

    return () => controller.abort();
  }, [language]);

  return { faqs, hasError };
}
