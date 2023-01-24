/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    appDir: true
  }
}

module.exports = {
  webpack(config) {
   config.module.rules.push({
     test: /\.svg$/,
     use: ['@svgr/webpack'],
   });
   return config;
 },
}