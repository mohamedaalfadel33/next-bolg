/** @type {import('next').NextConfig} */
const nextConfig = {};

export default {
  nextConfig,
  env: {
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.GITHUB_SECRET,
  },
};
