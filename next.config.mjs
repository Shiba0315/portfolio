/** @type {import('next').NextConfig} */
// Next.js configuration file for customizing build and runtime behavior
const nextConfig = {
  output: 'export',
  basePath: '/portfolio',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
