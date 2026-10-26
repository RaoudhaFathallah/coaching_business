import en from "./en.json";
import frJson from "./fr.json";

export type Language = "en" | "fr";

export const LANGUAGES: readonly Language[] = ["en", "fr"];

export const DEFAULT_LANGUAGE: Language = "en";

/** Shape of a translation file. `en.json` is the reference. */
export type Messages = typeof en;

// Typing `fr` as `Messages` makes TypeScript fail the build if a key is
// missing from fr.json or has a different shape than in en.json.
const fr: Messages = frJson;

export const messages: Record<Language, Messages> = { en, fr };

/**
 * Dot-separated path to every string leaf of the translation files,
 * e.g. "common.bookFreeCall" or "home.hero.title".
 * Arrays (lists of steps, plans, questions…) are read through `messages`.
 */
type Leaves<T, Prefix extends string = ""> = T extends string
  ? Prefix
  : T extends readonly unknown[]
    ? never
    : {
        [K in keyof T & string]: Leaves<
          T[K],
          Prefix extends "" ? K : `${Prefix}.${K}`
        >;
      }[keyof T & string];

export type TranslationKey = Leaves<Messages>;

export type Translate = (key: TranslationKey) => string;

export function isLanguage(value: unknown): value is Language {
  return typeof value === "string" && (LANGUAGES as string[]).includes(value);
}

/**
 * Returns the message tree and a `t(key)` helper for the given language.
 * Pure function: use it when the language is not the one from the context
 * (e.g. a component that must stay in English on some routes).
 */
export function getTranslations(language: Language) {
  const tree = messages[language];

  const t: Translate = (key) => {
    const value = key.split(".").reduce<unknown>((node, part) => {
      if (node && typeof node === "object") {
        return (node as Record<string, unknown>)[part];
      }
      return undefined;
    }, tree);

    if (typeof value === "string") {
      return value;
    }

    if (process.env.NODE_ENV !== "production") {
      console.warn(`[i18n] Missing translation "${key}" for "${language}"`);
    }
    return key;
  };

  return { messages: tree, t };
}
