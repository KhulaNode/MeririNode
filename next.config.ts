/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produces a minimal standalone server bundle — ideal for Docker
  output: "standalone",
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Allow SVG for placeholder images during development
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Optimize for mobile-first
  compress: true,
};

export default nextConfig;
