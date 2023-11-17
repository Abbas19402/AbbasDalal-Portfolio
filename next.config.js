/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    appDir: true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname:"/images"
      }
    ]
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