/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  turbopack: {
    // Force root to this project to avoid picking up lockfiles in parent folders
    root: __dirname,
  },
};

module.exports = nextConfig;
