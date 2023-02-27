const withReactSvg = require('next-react-svg');
const path = require('path');

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'public/assets'),
  images: {
    domains: [
      'localhost',
      'cdn.pixabay.com',
      'i.pinimg.com',
      'lh3.googleusercontent.com',
    ],
  },
  experimental: {
    esmExternals: false,
  },
  webpack(config, options) {
    return config;
  },
});
