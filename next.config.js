/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
        {
            protocol: "https",
            hostname: "**.texasbookpublishing.com",
            port: '',
            pathname: '/wp-content/uploads/**',
        },
    ],
    minimumCacheTTL: 15000000,
},
}



module.exports = nextConfig

