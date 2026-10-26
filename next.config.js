// Sub-folder the site is served from (e.g. "/coaching_business" on GitHub Pages).
// Empty for local development.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Static Export
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: basePath
    ? {
        // Images stay unoptimized; the loader only prepends basePath to "/images/..." sources.
        loader: 'custom',
        loaderFile: './src/lib/imageLoader.ts',
      }
    : {
        unoptimized: true,
      },
}

module.exports = nextConfig
