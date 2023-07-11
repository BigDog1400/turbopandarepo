/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: { esmExternals: "loose" },
  transpilePackages: ["@turbopandarepo/core"],
};
// eslint-disable-next-line no-undef
module.exports = nextConfig;
