/**
 * Routes whose shared layout (top header, footer, newsletter) follows the
 * selected language. Every other route of the template stays in English.
 */
export const TRANSLATED_ROUTES = [
  "/",
  "/about-me",
  "/courses",
  "/how-it-works",
  "/pricing",
  "/feedbacks",
  "/faq",
  "/booking",
] as const;

export function isTranslatedRoute(pathname: string) {
  return (TRANSLATED_ROUTES as readonly string[]).includes(
    pathname.replace(/\/$/, "")
  );
}
