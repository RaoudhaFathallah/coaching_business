"use client";

import type { ImageLoaderProps } from "next/image";
import { withBasePath } from "./basePath";

/**
 * Image loader for the static export: no optimization, images are served
 * as-is from /public, with the site base path prepended when there is one.
 * Static imports (/_next/static/media/...) already include the base path.
 */
export default function imageLoader({ src }: ImageLoaderProps) {
  if (src.startsWith("/_next/") || src.startsWith("http")) {
    return src;
  }
  return withBasePath(src);
}
