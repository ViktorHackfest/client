/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'cdn.pixabay.com',
      'i.pinimg.com',
      'lh3.googleusercontent.com',
    ],
  },
};

module.exports = nextConfig;
