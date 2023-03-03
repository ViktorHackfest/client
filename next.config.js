/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'lh3.googleusercontent.com',
      'storage.googleapis.com',
      'cdn.pixabay.com',
      'i.pinimg.com',
    ],
  },
};

module.exports = nextConfig;
