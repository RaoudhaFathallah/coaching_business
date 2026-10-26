/**
 * Base path of the site when it is deployed under a sub-folder
 * (e.g. "/coaching_business" on GitHub Pages). Empty in local development.
 * Set through the NEXT_PUBLIC_BASE_PATH environment variable at build time.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefixes an absolute public asset path ("/images/...") with the base path. */
export function withBasePath(path: string) {
  if (!BASE_PATH || !path.startsWith("/") || path.startsWith(`${BASE_PATH}/`)) {
    return path;
  }
  return `${BASE_PATH}${path}`;
}
