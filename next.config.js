/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'i.imgur.com',
                protocol: "https",
            },
            {
                hostname: "images.unsplash.com",
                protocol: "https"
            },
            {
                hostname: "avatars.githubusercontent.com",
                protocol: "https"
            }
        ]
    }
}

module.exports = nextConfig
